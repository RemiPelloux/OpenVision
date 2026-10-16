
/* Address: 0x18000f07c; Evidence: ev_282290e9c203538537fd5854c61af9ee528c76a9a44ff81c9ea2729fcead6a2b */

/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE =
       FUN_18000ee9c(2,"FlsGetValue",(uint *)&DAT_18001c4a0,(uint *)"FlsGetValue");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000f0bb. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsGetValue(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180018820. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}

