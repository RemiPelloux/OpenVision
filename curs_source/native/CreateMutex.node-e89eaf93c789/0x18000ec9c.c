
/* Address: 0x18000ec9c; Evidence: ev_0c84a801f6e8e891f4db5d9c619d79e80ec18b757c4b2f7568cc4df5410d9a5c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000ec9c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_1800270a0 == (FARPROC)0xffffffffffffffff) {
LAB_18000eceb:
    FUN_1800115fc(param_1);
  }
  else {
    pFVar1 = DAT_1800270a0;
    if (DAT_1800270a0 == (FARPROC)0x0) {
      pFVar1 = FUN_18000e918(0x14,"LocaleNameToLCID",(uint *)&DAT_180018750,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000eceb;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

