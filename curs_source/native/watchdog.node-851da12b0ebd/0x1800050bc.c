
/* Address: 0x1800050bc; Evidence: ev_aa4b73e443cbbf7dfe3c16cb08cd5fd99b6b0c653b981116c995ad93f27e482b */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_1800050d0(-0x1f928c9d,param_2);
  return uVar1;
}

