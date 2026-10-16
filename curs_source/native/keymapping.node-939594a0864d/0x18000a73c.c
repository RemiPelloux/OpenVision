
/* Address: 0x18000a73c; Evidence: ev_de1cb5dac45c46b915b35a5c577c692273542516711da67ebdffecc9d12ec6c2 */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000a750(-0x1f928c9d,param_2);
  return uVar1;
}

