
/* Address: 0x18000f758; Evidence: ev_e049249b490835ab2ccb8b8e1dd393546b7d7319c7c7e8ae7bc8b57d071572ca */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_180007bb0(&local_28,(longlong *)0x0);
  DAT_180028bd8 = 0;
  if (param_1 == -2) {
    DAT_180028bd8 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_180028bd8 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_180028bd8 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}

