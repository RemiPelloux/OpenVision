
/* Address: 0x180012920; Evidence: ev_f6e4fdd07c4d857680af276705b3d15ce7572af66b43606f26812e14518bc92c */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000c3ec();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x000180012952. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_1800247e8,0,param_1);
  return uVar2;
}

