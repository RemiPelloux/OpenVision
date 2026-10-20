// OpenVision Agent command sandbox for Linux (OV-803). Drop-in for the
// proprietary cursorsandbox command-line contract recovered from its callers:
//
//   cursorsandbox --policy <file> [--preflight-only] -- <command> [args...]
//
// Exit codes: preflight 0 = supported, 2 = unsupported kernel features;
// 1 = usage, policy or enforcement error (fail closed, nothing executed);
// 126/127 = command could not be executed; otherwise the command's own status,
// because the command replaces this process (no fork). The PID, process group,
// signals and inherited descriptors (the bash executor passes fds 3-5) are
// therefore exactly those of the command.
//
// Enforcement: Landlock (ABI >= 3) filesystem rules. Reads are allowed below
// "/" (readBoundary "system") or only below the workspace and listed read paths
// (readBoundary "workspace"). Writes are allowed below the workspace
// (workspace_readwrite), additionalReadwritePaths, temporary directories unless
// disableTmpWrite, and the standard character devices. Without networkAccess,
// TCP bind/connect (Landlock ABI >= 4), IPv4/IPv6/packet socket creation
// (seccomp) and connections to abstract UNIX sockets outside the sandbox
// (Landlock ABI >= 6) are denied. With ABI >= 6 the command can never signal
// processes outside the sandbox. The network allow-list proxy of the original
// helper is not implemented: networkPolicy is honored only as allow-all or deny.
#include <errno.h>
#include <fcntl.h>
#include <linux/audit.h>
#include <linux/filter.h>
#include <linux/landlock.h>
#include <linux/seccomp.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/prctl.h>
#include <sys/socket.h>
#include <sys/stat.h>
#include <sys/syscall.h>
#include <sys/wait.h>
#include <unistd.h>

#ifndef LANDLOCK_ACCESS_FS_REFER
#define LANDLOCK_ACCESS_FS_REFER (1ULL << 13)
#endif
#ifndef LANDLOCK_ACCESS_FS_TRUNCATE
#define LANDLOCK_ACCESS_FS_TRUNCATE (1ULL << 14)
#endif
#ifndef LANDLOCK_ACCESS_FS_IOCTL_DEV
#define LANDLOCK_ACCESS_FS_IOCTL_DEV (1ULL << 15)
#endif
#ifndef LANDLOCK_ACCESS_NET_BIND_TCP
#define LANDLOCK_ACCESS_NET_BIND_TCP (1ULL << 0)
#define LANDLOCK_ACCESS_NET_CONNECT_TCP (1ULL << 1)
#endif
#ifndef LANDLOCK_SCOPE_ABSTRACT_UNIX_SOCKET
#define LANDLOCK_SCOPE_ABSTRACT_UNIX_SOCKET (1ULL << 0)
#define LANDLOCK_SCOPE_SIGNAL (1ULL << 1)
#endif

// Ruleset attributes up to ABI 6 (scoped), declared locally so older headers build.
struct ov_ruleset_attr { uint64_t handled_access_fs, handled_access_net, scoped; };

#define MAX_PATHS 256
#define MAX_POLICY (1 << 20)

static void fail(const char *message, const char *detail) {
  fprintf(stderr, "Error: %s%s%s\n", message, detail ? ": " : "", detail ? detail : "");
  exit(1);
}

// ---------- minimal JSON reader (objects, arrays, strings, literals, numbers) ----------
typedef struct { const char *p, *end; const char *error; } json;
static void ws(json *j) { while (j->p < j->end && (*j->p == ' ' || *j->p == '\n' || *j->p == '\r' || *j->p == '\t')) j->p++; }
static bool expect(json *j, char c) { ws(j); if (j->p < j->end && *j->p == c) { j->p++; return true; } j->error = "unexpected character"; return false; }
static bool peek(json *j, char c) { ws(j); return j->p < j->end && *j->p == c; }

// Parses a string; returns a heap copy when out is non-null.
static bool string_value(json *j, char **out) {
  if (!expect(j, '"')) return false;
  size_t cap = 64, len = 0; char *buffer = out ? malloc(cap) : NULL;
  if (out && !buffer) fail("Out of memory", NULL);
  while (j->p < j->end && *j->p != '"') {
    char c = *j->p++;
    if ((unsigned char)c < 0x20) { j->error = "control character in string"; free(buffer); return false; }
    if (c == '\\') {
      if (j->p >= j->end) break;
      char e = *j->p++;
      switch (e) {
        case '"': case '\\': case '/': c = e; break;
        case 'b': c = '\b'; break; case 'f': c = '\f'; break; case 'n': c = '\n'; break;
        case 'r': c = '\r'; break; case 't': c = '\t'; break;
        case 'u': {
          if (j->end - j->p < 4) { j->error = "bad escape"; free(buffer); return false; }
          unsigned code = 0;
          for (int i = 0; i < 4; i++) {
            char h = *j->p++; code <<= 4;
            if (h >= '0' && h <= '9') code |= h - '0'; else if (h >= 'a' && h <= 'f') code |= h - 'a' + 10;
            else if (h >= 'A' && h <= 'F') code |= h - 'A' + 10; else { j->error = "bad escape"; free(buffer); return false; }
          }
          // Paths with escaped non-ASCII or NUL are refused rather than guessed.
          if (code == 0 || code > 0x7f) { j->error = "unsupported \\u escape"; free(buffer); return false; }
          c = (char)code; break;
        }
        default: j->error = "bad escape"; free(buffer); return false;
      }
    }
    if (out) {
      if (len + 2 > cap) { cap *= 2; char *grown = realloc(buffer, cap); if (!grown) fail("Out of memory", NULL); buffer = grown; }
      buffer[len++] = c;
    }
  }
  if (!expect(j, '"')) { free(buffer); j->error = "unterminated string"; return false; }
  if (out) { buffer[len] = 0; *out = buffer; }
  return true;
}

static bool skip_value(json *j, int depth);
static bool literal(json *j, const char *word) {
  size_t n = strlen(word);
  if ((size_t)(j->end - j->p) < n || strncmp(j->p, word, n)) { j->error = "bad literal"; return false; }
  j->p += n; return true;
}
static bool skip_value(json *j, int depth) {
  if (depth > 32) { j->error = "nesting too deep"; return false; }
  ws(j);
  if (j->p >= j->end) { j->error = "unexpected end"; return false; }
  char c = *j->p;
  if (c == '"') return string_value(j, NULL);
  if (c == '{' || c == '[') {
    char close = c == '{' ? '}' : ']'; j->p++;
    if (peek(j, close)) { j->p++; return true; }
    for (;;) {
      if (c == '{') { if (!string_value(j, NULL) || !expect(j, ':')) return false; }
      if (!skip_value(j, depth + 1)) return false;
      if (peek(j, ',')) { j->p++; continue; }
      return expect(j, close);
    }
  }
  if (c == 't') return literal(j, "true");
  if (c == 'f') return literal(j, "false");
  if (c == 'n') return literal(j, "null");
  if (c == '-' || (c >= '0' && c <= '9')) { while (j->p < j->end && strchr("+-0123456789.eE", *j->p)) j->p++; return true; }
  j->error = "unexpected value"; return false;
}
static bool bool_value(json *j, bool *out) {
  ws(j);
  if (j->p < j->end && *j->p == 't') { *out = true; return literal(j, "true"); }
  if (j->p < j->end && *j->p == 'f') { *out = false; return literal(j, "false"); }
  j->error = "expected boolean"; return false;
}

typedef struct { char *items[MAX_PATHS]; int count; } paths;
static bool add_path(json *j, paths *list, char *value) {
  if (list->count >= MAX_PATHS) { free(value); j->error = "too many paths"; return false; }
  if (value[0] != '/') { free(value); j->error = "paths must be absolute"; return false; }
  list->items[list->count++] = value; return true;
}
// Accepts ["/a", ...] or {"/a": [globs], ...} (keys are the directories).
static bool path_list(json *j, paths *list) {
  ws(j);
  if (peek(j, '[')) {
    j->p++; if (peek(j, ']')) { j->p++; return true; }
    for (;;) {
      char *value; if (!string_value(j, &value) || !add_path(j, list, value)) return false;
      if (peek(j, ',')) { j->p++; continue; }
      return expect(j, ']');
    }
  }
  if (peek(j, '{')) {
    j->p++; if (peek(j, '}')) { j->p++; return true; }
    for (;;) {
      char *key; if (!string_value(j, &key) || !expect(j, ':') || !add_path(j, list, key) || !skip_value(j, 1)) return false;
      if (peek(j, ',')) { j->p++; continue; }
      return expect(j, '}');
    }
  }
  if (peek(j, 'n')) return literal(j, "null");
  j->error = "expected path list"; return false;
}

typedef struct {
  bool has_sandbox, readwrite, network, disable_tmp, workspace_reads, unrestricted;
  char *cwd; paths read, write;
} policy;

static bool sandbox_object(json *j, policy *out) {
  bool has_type = false;
  if (!expect(j, '{')) return false;
  if (peek(j, '}')) { j->p++; j->error = "missing field `type`"; return false; }
  for (;;) {
    char *key; if (!string_value(j, &key) || !expect(j, ':')) return false;
    bool ok;
    if (!strcmp(key, "type")) {
      char *type; ok = string_value(j, &type);
      if (ok) {
        has_type = true;
        if (!strcmp(type, "workspace_readwrite")) out->readwrite = true;
        else if (!strcmp(type, "workspace_readonly")) out->readwrite = false;
        else if (!strcmp(type, "insecure_none")) out->unrestricted = true; // explicit opt-out, as the original accepts
        else { j->error = "unsupported sandbox type"; ok = false; }
        free(type);
      }
    } else if (!strcmp(key, "cwd")) { ok = string_value(j, &out->cwd); }
    else if (!strcmp(key, "readBoundary")) {
      char *boundary; ok = string_value(j, &boundary);
      if (ok) {
        if (!strcmp(boundary, "workspace")) out->workspace_reads = true;
        else if (strcmp(boundary, "system")) { j->error = "unsupported readBoundary"; ok = false; }
        free(boundary);
      }
    }
    else if (!strcmp(key, "networkAccess")) ok = bool_value(j, &out->network);
    else if (!strcmp(key, "disableTmpWrite")) ok = bool_value(j, &out->disable_tmp);
    else if (!strcmp(key, "hardcodedReadPaths") || !strcmp(key, "additionalReadonlyPaths")) ok = path_list(j, &out->read);
    else if (!strcmp(key, "additionalReadwritePaths")) ok = path_list(j, &out->write);
    else ok = skip_value(j, 1); // ignoreMapping and future fields
    free(key);
    if (!ok) return false;
    if (peek(j, ',')) { j->p++; continue; }
    if (!expect(j, '}')) return false;
    break;
  }
  if (!has_type) { j->error = "missing field `type`"; return false; }
  if (!out->unrestricted && (!out->cwd || out->cwd[0] != '/')) { j->error = "missing or relative field `cwd`"; return false; }
  return true;
}

static void read_policy(const char *file, policy *out) {
  int fd = open(file, O_RDONLY | O_CLOEXEC | O_NOFOLLOW);
  if (fd < 0) fail("Failed to read policy file", strerror(errno));
  struct stat info;
  if (fstat(fd, &info) || !S_ISREG(info.st_mode) || info.st_size > MAX_POLICY) { close(fd); fail("Failed to read policy file", "not a regular file of at most 1 MiB"); }
  char *text = malloc((size_t)info.st_size + 1);
  if (!text) fail("Out of memory", NULL);
  ssize_t total = 0;
  while (total < info.st_size) { ssize_t n = read(fd, text + total, (size_t)(info.st_size - total)); if (n <= 0) break; total += n; }
  // Policy files are single use: the original helper removes each one after reading it.
  struct stat now;
  if (!lstat(file, &now) && now.st_ino == info.st_ino && now.st_dev == info.st_dev) unlink(file);
  close(fd);
  json j = { text, text + total, NULL };
  if (!expect(&j, '{')) fail("Failed to parse policy file", j.error);
  bool network_policy_allow_all = false, saw_network_policy = false;
  if (!peek(&j, '}')) for (;;) {
    char *key; if (!string_value(&j, &key) || !expect(&j, ':')) fail("Failed to parse policy file", j.error);
    bool ok;
    if (!strcmp(key, "sandbox")) { ok = sandbox_object(&j, out); out->has_sandbox = ok; }
    else if (!strcmp(key, "networkPolicy")) {
      // Only {"default":"allow"} without deny rules is honored; anything else denies.
      const char *start = j.p; ok = skip_value(&j, 1); saw_network_policy = true;
      if (ok) {
        size_t n = (size_t)(j.p - start); char *copy = strndup(start, n);
        network_policy_allow_all = copy && strstr(copy, "\"default\"") && (strstr(copy, "\"default\":\"allow\"") || strstr(copy, "\"default\": \"allow\"")) && !strstr(copy, "\"deny\"");
        free(copy);
      }
    } else ok = skip_value(&j, 1);
    free(key);
    if (!ok) fail("Failed to parse policy file", j.error);
    if (peek(&j, ',')) { j.p++; continue; }
    if (!expect(&j, '}')) fail("Failed to parse policy file", j.error);
    break;
  } else j.p++;
  ws(&j);
  if (j.p != j.end) fail("Failed to parse policy file", "trailing data");
  if (!out->has_sandbox) fail("Failed to parse policy file", "missing field `sandbox`");
  if (out->network && saw_network_policy && !network_policy_allow_all) out->network = false;
  free(text);
}

// ---------- Landlock ----------
static long ruleset(const struct ov_ruleset_attr *attr, size_t size, uint32_t flags) { return syscall(__NR_landlock_create_ruleset, attr, size, flags); }
static int landlock_abi(void) { long abi = ruleset(NULL, 0, LANDLOCK_CREATE_RULESET_VERSION); return abi < 0 ? 0 : (int)abi; }

static const uint64_t read_access = LANDLOCK_ACCESS_FS_EXECUTE | LANDLOCK_ACCESS_FS_READ_FILE | LANDLOCK_ACCESS_FS_READ_DIR;
static const uint64_t file_access = LANDLOCK_ACCESS_FS_EXECUTE | LANDLOCK_ACCESS_FS_READ_FILE | LANDLOCK_ACCESS_FS_WRITE_FILE |
  LANDLOCK_ACCESS_FS_TRUNCATE | LANDLOCK_ACCESS_FS_IOCTL_DEV;

static uint64_t handled_fs(int abi) {
  uint64_t access = (LANDLOCK_ACCESS_FS_MAKE_SYM << 1) - 1; // ABI 1 rights
  if (abi >= 2) access |= LANDLOCK_ACCESS_FS_REFER;
  if (abi >= 3) access |= LANDLOCK_ACCESS_FS_TRUNCATE;
  if (abi >= 5) access |= LANDLOCK_ACCESS_FS_IOCTL_DEV;
  return access;
}

// Optional rule: a missing path is skipped; an unreadable existing path is an error.
static void allow(int set, const char *path, uint64_t access, uint64_t handled) {
  int fd = open(path, O_PATH | O_CLOEXEC);
  if (fd < 0) { if (errno == ENOENT || errno == ENOTDIR) return; fail("Failed to open sandbox path", path); }
  struct stat info;
  if (fstat(fd, &info)) { close(fd); fail("Failed to stat sandbox path", path); }
  if (!S_ISDIR(info.st_mode)) access &= file_access;
  struct landlock_path_beneath_attr rule = { .allowed_access = access & handled, .parent_fd = fd };
  if (rule.allowed_access && syscall(__NR_landlock_add_rule, set, LANDLOCK_RULE_PATH_BENEATH, &rule, 0)) {
    int error = errno; close(fd); fail("Failed to add sandbox rule", strerror(error));
  }
  close(fd);
}

static int build_ruleset(int abi, const policy *p) {
  uint64_t fs = handled_fs(abi), write = fs & ~read_access;
  struct ov_ruleset_attr attr = { .handled_access_fs = fs };
  if (abi >= 4 && !p->network) attr.handled_access_net = LANDLOCK_ACCESS_NET_BIND_TCP | LANDLOCK_ACCESS_NET_CONNECT_TCP;
  if (abi >= 6) attr.scoped = LANDLOCK_SCOPE_SIGNAL | (p->network ? 0 : LANDLOCK_SCOPE_ABSTRACT_UNIX_SOCKET);
  size_t size = abi >= 6 ? sizeof attr : abi >= 4 ? offsetof(struct ov_ruleset_attr, scoped) : offsetof(struct ov_ruleset_attr, handled_access_net);
  int set = (int)ruleset((const struct ov_ruleset_attr *)&attr, size, 0);
  if (set < 0) fail("Failed to apply sandbox", strerror(errno));
  static const char *system_reads[] = { "/bin", "/sbin", "/usr", "/lib", "/lib64", "/lib32", "/etc", "/opt", "/nix", "/proc", "/sys", "/dev", "/run", NULL };
  if (p->workspace_reads) {
    for (const char **path = system_reads; *path; path++) allow(set, *path, read_access, fs);
    allow(set, p->cwd, read_access, fs);
    for (int i = 0; i < p->read.count; i++) allow(set, p->read.items[i], read_access, fs);
  } else allow(set, "/", read_access, fs);
  if (p->readwrite) allow(set, p->cwd, read_access | write, fs);
  for (int i = 0; i < p->write.count; i++) allow(set, p->write.items[i], read_access | write, fs);
  if (!p->disable_tmp) {
    // With a workspace read boundary only the caller's scratch TMPDIR is shared
    // (the callers point it at a per-workspace directory); otherwise the system
    // temporary directories are writable, as with the original helper.
    const char *tmp = getenv("TMPDIR");
    if (!p->workspace_reads) { allow(set, "/tmp", read_access | write, fs); allow(set, "/var/tmp", read_access | write, fs); allow(set, "/dev/shm", read_access | write, fs); }
    if (tmp && tmp[0] == '/') allow(set, tmp, read_access | write, fs);
  }
  static const char *devices[] = { "/dev/null", "/dev/zero", "/dev/full", "/dev/random", "/dev/urandom", "/dev/tty", "/dev/ptmx", "/dev/pts", NULL };
  for (const char **path = devices; *path; path++) allow(set, *path, read_access | file_access | write, fs);
  return set;
}

// seccomp: socket(AF_INET|AF_INET6|AF_PACKET, ...) fails with EACCES (covers UDP and raw).
static void deny_inet_sockets(void) {
#if defined(__x86_64__)
  struct sock_filter filter[] = {
    BPF_STMT(BPF_LD | BPF_W | BPF_ABS, offsetof(struct seccomp_data, arch)),
    BPF_JUMP(BPF_JMP | BPF_JEQ | BPF_K, AUDIT_ARCH_X86_64, 1, 0),
    BPF_STMT(BPF_RET | BPF_K, SECCOMP_RET_KILL_PROCESS),
    BPF_STMT(BPF_LD | BPF_W | BPF_ABS, offsetof(struct seccomp_data, nr)),
    BPF_JUMP(BPF_JMP | BPF_JEQ | BPF_K, __NR_socket, 0, 5),
    BPF_STMT(BPF_LD | BPF_W | BPF_ABS, offsetof(struct seccomp_data, args[0])),
    BPF_JUMP(BPF_JMP | BPF_JEQ | BPF_K, AF_INET, 2, 0),
    BPF_JUMP(BPF_JMP | BPF_JEQ | BPF_K, AF_INET6, 1, 0),
    BPF_JUMP(BPF_JMP | BPF_JEQ | BPF_K, AF_PACKET, 0, 1),
    BPF_STMT(BPF_RET | BPF_K, SECCOMP_RET_ERRNO | (EACCES & SECCOMP_RET_DATA)),
    BPF_STMT(BPF_RET | BPF_K, SECCOMP_RET_ALLOW),
  };
  struct sock_fprog program = { .len = sizeof filter / sizeof filter[0], .filter = filter };
  if (prctl(PR_SET_SECCOMP, SECCOMP_MODE_FILTER, &program)) fail("Failed to apply seccomp network block", strerror(errno));
#else
  fail("Failed to apply seccomp network block", "unsupported architecture");
#endif
}

static void enforce(int abi, const policy *p) {
  int set = build_ruleset(abi, p);
  if (prctl(PR_SET_NO_NEW_PRIVS, 1, 0, 0, 0)) fail("Failed to apply sandbox", strerror(errno));
  if (syscall(__NR_landlock_restrict_self, set, 0)) fail("Failed to apply sandbox", strerror(errno));
  close(set);
  if (!p->network) deny_inet_sockets();
}

int main(int argc, char **argv) {
  const char *policy_file = NULL; bool preflight = false; int command = -1;
  for (int i = 1; i < argc; i++) {
    if (!strcmp(argv[i], "--")) { command = i + 1; break; }
    if (!strcmp(argv[i], "--preflight-only")) preflight = true;
    else if (!strcmp(argv[i], "--policy")) { if (++i >= argc) fail("--policy requires a value", NULL); policy_file = argv[i]; }
    else if (!strncmp(argv[i], "--policy=", 9)) policy_file = argv[i] + 9;
    else if (!strcmp(argv[i], "-h") || !strcmp(argv[i], "--help")) {
      puts("OpenVision Agent command sandbox (Landlock)\n\nUsage: cursorsandbox --policy <POLICY> [--preflight-only] -- <COMMAND>...");
      return 0;
    } else fail("Unsupported argument", argv[i]);
  }
  if (command < 0 || command >= argc) fail("No command specified to execute", NULL);
  if (!policy_file) fail("--policy is required", NULL);
  policy p = { 0 };
  read_policy(policy_file, &p);
  int abi = landlock_abi();
  if (preflight) {
    if (abi < 3) { fprintf(stderr, "sandbox: Landlock V3 filesystem restrictions not supported (ABI %d)\n", abi); return 2; }
    // Prove enforcement in a child; the caller only needs the verdict.
    pid_t child = fork();
    if (child < 0) fail("Failed to fork Landlock preflight child", strerror(errno));
    if (child == 0) { if (!p.unrestricted) enforce(abi, &p); _exit(0); }
    int status;
    if (waitpid(child, &status, 0) < 0) fail("Failed to wait for Landlock preflight child", strerror(errno));
    if (!WIFEXITED(status) || WEXITSTATUS(status)) { fprintf(stderr, "sandbox: Landlock preflight failed\n"); return 2; }
    return 0;
  }
  if (!p.unrestricted) {
    if (abi < 3) fail("Failed to apply sandbox", "Landlock V3 filesystem restrictions not supported; refusing to run unsandboxed");
    enforce(abi, &p);
  }
  setenv("CURSOR_SANDBOX", "native", 1);
  setenv("OPENVISION_SANDBOX", "landlock", 1);
  execvp(argv[command], argv + command);
  int error = errno;
  fprintf(stderr, "Error: Failed to execute %s: %s\n", argv[command], strerror(error));
  return error == ENOENT ? 127 : 126;
}
