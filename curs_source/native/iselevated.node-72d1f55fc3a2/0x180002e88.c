
/* Address: 0x180002e88; Evidence: ev_0a2ab3db81aedea100049ce4d3059a847c11160552e14d1ddc780e05af48fd4b */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180002cf0(1,"FlsFree",(uint *)&DAT_1800103e0,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x000180002ec7. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000da50. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}

