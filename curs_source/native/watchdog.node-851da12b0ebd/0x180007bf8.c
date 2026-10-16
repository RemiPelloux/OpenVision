
/* Address: 0x180007bf8; Evidence: ev_2141a3ba602f4d60ece8b41d96b50672275538859332f0343bae4e35067ef3d3 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_180004b20(&local_28,(longlong *)0x0);
  DAT_18001b588 = 0;
  if (param_1 == -2) {
    DAT_18001b588 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_18001b588 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_18001b588 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}

