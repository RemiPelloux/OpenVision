
/* Address: 0x180006430; Evidence: ev_23a4be6b36f1710053f401a7e9e74a5c13a3de11b50ac4414ad7e42aa61d9e66 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180006250(2,"FlsGetValue",(uint *)&DAT_18001a590,(uint *)"FlsGetValue");
  if (pFVar1 != (FARPROC)0x0) {
    (*pFVar1)();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000646f. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TlsGetValue(param_1);
  return;
}

