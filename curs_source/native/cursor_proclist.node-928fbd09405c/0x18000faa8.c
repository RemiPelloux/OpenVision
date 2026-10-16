
/* Address: 0x18000faa8; Evidence: ev_bf088d2c08c8771fb9a53e3eff74bc2fcd51406f417ea54cdab01cc909d1892f */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000fabc(-0x1f928c9d,param_2);
  return uVar1;
}

