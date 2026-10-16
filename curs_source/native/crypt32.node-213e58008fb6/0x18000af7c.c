
/* Address: 0x18000af7c; Evidence: ev_b4d12494a42244874b409f9c3fc66cf5ed5ffd66d9ff8722292fcd6ddd1fb82b */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000af90(-0x1f928c9d,param_2);
  return uVar1;
}

