
/* Address: 0x18000c520; Evidence: ev_04dee62cc072411c289689e4172deb7edd3c7e2aaaa0250463ad9f52175535c2 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_180005fec();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000c552. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_18001c748,0,param_1);
  return uVar2;
}

