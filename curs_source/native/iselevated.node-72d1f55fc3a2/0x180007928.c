
/* Address: 0x180007928; Evidence: ev_8ba643c44f6a84a2fae9c6f4b1cb688878434bd6be16aae8a9f550eaf5cbd612 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_180004860(&local_28,(longlong *)0x0);
  DAT_18001a588 = 0;
  if (param_1 == -2) {
    DAT_18001a588 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_18001a588 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_18001a588 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}

