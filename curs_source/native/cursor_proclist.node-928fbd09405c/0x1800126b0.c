
/* Address: 0x1800126b0; Evidence: ev_3dbc131e3164ebbbd5b59aa7d7fe2e8a79ed42ad25c2ffbde918dd3880cd588d */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_18000f2b0(&local_28,(longlong *)0x0);
  DAT_180029828 = 0;
  if (param_1 == -2) {
    DAT_180029828 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_180029828 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_180029828 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}

