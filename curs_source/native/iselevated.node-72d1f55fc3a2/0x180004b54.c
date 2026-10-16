
/* Address: 0x180004b54; Evidence: ev_1dba6b395c98bdb30ed1e4fbd5d8511d45c856f49e9fb72dee2db6526d37ad4b */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_180004b68(-0x1f928c9d,param_2);
  return uVar1;
}

