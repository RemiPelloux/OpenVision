
/* Address: 0x180014fb0; Evidence: ev_7382fad499e2bdd4f6f6215fb9e655032a1887fe88f107aa66eceb1696ec99e3 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000821c();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x000180014fe2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_180028c10,0,param_1);
  return uVar2;
}

