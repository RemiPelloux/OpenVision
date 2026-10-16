
/* Address: 0x180004170; Evidence: ev_2319c1353d905e749a4ea8bbb0f62c172de0afb21868fc78b7c6e6f6980517a9 */

/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180004020(0,"FlsAlloc",(uint *)&DAT_180011488,(uint *)"FlsAlloc");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x0001800041ae. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsAlloc();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000eb10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)(param_1);
  return;
}

