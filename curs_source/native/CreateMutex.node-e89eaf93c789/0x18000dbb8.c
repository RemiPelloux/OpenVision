
/* Address: 0x18000dbb8; Evidence: ev_13701d73525e0847fbd7e3b642ee67097ef13d42230e7c6a04c7d68748936655 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_18000a990(&local_28,(longlong *)0x0);
  DAT_1800236f8 = 0;
  if (param_1 == -2) {
    DAT_1800236f8 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_1800236f8 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_1800236f8 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}

