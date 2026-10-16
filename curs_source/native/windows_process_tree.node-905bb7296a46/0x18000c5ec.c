
/* Address: 0x18000c5ec; Evidence: ev_1bf5056e3a4c2f7be35c6e021026e4412860af2a47e92fde34fd7996fe8fa236 */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000c600(-0x1f928c9d,param_2);
  return uVar1;
}

