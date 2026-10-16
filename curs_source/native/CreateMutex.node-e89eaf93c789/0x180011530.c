
/* Address: 0x180011530; Evidence: ev_ee1ae0c1bf0abd1dc0eed015362704f2efc3a808c2b374cb076f28743cbb4a0a */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000affc();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x000180011562. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_1800237e8,0,param_1);
  return uVar2;
}

