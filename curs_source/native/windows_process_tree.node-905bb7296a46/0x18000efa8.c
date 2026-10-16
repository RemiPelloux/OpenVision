
/* Address: 0x18000efa8; Evidence: ev_9fad3741290aaa2693f65c6f540a4f53a9c21bc43146373b1512673148235162 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_18000bd80(&local_28,(longlong *)0x0);
  DAT_1800246f8 = 0;
  if (param_1 == -2) {
    DAT_1800246f8 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_1800246f8 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_1800246f8 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}

