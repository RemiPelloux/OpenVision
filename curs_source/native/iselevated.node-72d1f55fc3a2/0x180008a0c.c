
/* Address: 0x180008a0c; Evidence: ev_f3f3dd7be809be447ff2792e43bcde5f9d7318043bac64eb600636fbf07ab313 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008a0c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18001d0a0 == (FARPROC)0xffffffffffffffff) {
LAB_180008a5b:
    FUN_18000b4dc(param_1);
  }
  else {
    pFVar1 = DAT_18001d0a0;
    if (DAT_18001d0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_180008688(0x14,"LocaleNameToLCID",(uint *)&DAT_1800115c0,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180008a5b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

