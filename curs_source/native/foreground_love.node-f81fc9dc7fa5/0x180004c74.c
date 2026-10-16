
/* Address: 0x180004c74; Evidence: ev_cbb24a17dd569614a952975196d30f8f6a5790bd34632adc3eb10aee74331bfe */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_180004c88(-0x1f928c9d,param_2);
  return uVar1;
}

