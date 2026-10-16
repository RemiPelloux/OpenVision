
/* Address: 0x18000d938; Evidence: ev_39ad1adc5354d0d61e7b46b2f5a022f578dac461f6c7051103573764493957aa */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_18000a710(&local_28,(longlong *)0x0);
  DAT_1800226f8 = 0;
  if (param_1 == -2) {
    DAT_1800226f8 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_1800226f8 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_1800226f8 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}

