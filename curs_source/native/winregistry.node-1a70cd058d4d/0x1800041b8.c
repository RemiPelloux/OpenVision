
/* Address: 0x1800041b8; Evidence: ev_af800a091431d37227e9431f0c33fb003000f2ca52690795fa7c82e5e4ad6dbb */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180004020(1,"FlsFree",(uint *)&DAT_1800114a0,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x0001800041f7. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000eb10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}

