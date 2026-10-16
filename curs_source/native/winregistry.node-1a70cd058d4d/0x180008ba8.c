
/* Address: 0x180008ba8; Evidence: ev_70a96eebbf5fa221a65039cf93a3eb6e78d775f9342476820f06bf079cc522b4 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_180005980(&local_28,(longlong *)0x0);
  DAT_18001c658 = 0;
  if (param_1 == -2) {
    DAT_18001c658 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_18001c658 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_18001c658 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}

