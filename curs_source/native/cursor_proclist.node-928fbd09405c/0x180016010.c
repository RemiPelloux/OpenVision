
/* Address: 0x180016010; Evidence: ev_9c91ec2f0a71efd9f7371ac72febd58e2ee01adca964bb0bd32bcb0dc2bb3d04 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000f91c();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x000180016042. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_180029918,0,param_1);
  return uVar2;
}

