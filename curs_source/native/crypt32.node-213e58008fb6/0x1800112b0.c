
/* Address: 0x1800112b0; Evidence: ev_7f4bd3de7bece1b039711939dda3190b18b2f53222d14cc9732c8e35caadfb41 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000ad7c();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800112e2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_1800227e8,0,param_1);
  return uVar2;
}

