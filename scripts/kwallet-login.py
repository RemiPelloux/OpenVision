#!/usr/bin/env python3
"""Open the default KWallet the way a Plasma login does, with no prompt.

pam_kwallet derives a key from the login password and the per-user salt
(PBKDF2-SHA512, 50,000 iterations, 56 bytes), starts ksecretd with
`--pam-login <hash pipe> <environment socket>`, writes the key to the pipe and,
once the session starts, pam_kwallet_init sends the session environment over
the socket. ksecretd then opens "kdewallet", creating it on first use.

Used by scripts/linux-cell.sh kde for disposable test sessions only:
  kwallet-login.py <password>
Requires DBUS_SESSION_BUS_ADDRESS and XDG_RUNTIME_DIR.
"""
import hashlib
import os
import shutil
import socket
import subprocess
import sys

KEY_SIZE = SALT_SIZE = 56
ITERATIONS = 50000


def main():
    password = (sys.argv[1] if len(sys.argv) > 1 else '').encode()
    data = os.environ.get('XDG_DATA_HOME') or os.path.join(os.environ['HOME'], '.local/share')
    salt_path = os.path.join(data, 'kwalletd', 'kdewallet.salt')
    os.makedirs(os.path.dirname(salt_path), mode=0o700, exist_ok=True)
    if not os.path.exists(salt_path):
        with open(salt_path, 'wb') as salt_file:
            salt_file.write(os.urandom(SALT_SIZE))
    with open(salt_path, 'rb') as salt_file:
        salt = salt_file.read(SALT_SIZE)
    key = hashlib.pbkdf2_hmac('sha512', password, salt, ITERATIONS, KEY_SIZE)

    daemon = shutil.which('ksecretd') or shutil.which('kwalletd6')
    if not daemon:
        sys.exit('kwallet-login: neither ksecretd nor kwalletd6 is installed')
    socket_path = os.path.join(os.environ['XDG_RUNTIME_DIR'], 'kwallet5.socket')
    if os.path.exists(socket_path):
        os.unlink(socket_path)
    listener = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    listener.bind(socket_path)
    listener.listen(1)
    read_end, write_end = os.pipe()
    env = dict(os.environ, PAM_KWALLET5_LOGIN=socket_path)
    subprocess.Popen([daemon, '--pam-login', str(read_end), str(listener.fileno())],
                     env=env, pass_fds=(read_end, listener.fileno()), start_new_session=True,
                     stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    os.close(read_end)
    os.write(write_end, key)
    os.close(write_end)

    # pam_kwallet_init's part: hand over the session environment.
    names = ('DBUS_SESSION_BUS_ADDRESS', 'XDG_RUNTIME_DIR', 'DISPLAY', 'WAYLAND_DISPLAY',
             'XDG_CURRENT_DESKTOP', 'XDG_SESSION_TYPE', 'KDE_SESSION_VERSION', 'KDE_FULL_SESSION')
    client = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    client.connect(socket_path)
    client.sendall(''.join(f'{name}={os.environ[name]}\n' for name in names if name in os.environ).encode())
    client.close()
    listener.close()


if __name__ == '__main__':
    main()
