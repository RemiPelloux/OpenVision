
/* Address: 0x18000b6e0; Evidence: ev_520599dd645752b5d58c963671a51f303cd5740d9df0cd3e7436333b69ca5f56 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_180006350();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_1800061a8();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000b712. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_18001b678,0,param_1);
  return uVar2;
}

