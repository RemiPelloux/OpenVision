
/* Address: 0x18001008c; Evidence: ev_c8502556cb895ebbb3e842ad64c33e0bafc5f2abe0ad82809d50c3c74c689ddd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18001008c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_1800280a0 == (FARPROC)0xffffffffffffffff) {
LAB_1800100db:
    FUN_1800129ec(param_1);
  }
  else {
    pFVar1 = DAT_1800280a0;
    if (DAT_1800280a0 == (FARPROC)0x0) {
      pFVar1 = FUN_18000fd08(0x14,"LocaleNameToLCID",(uint *)&DAT_180019780,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_1800100db;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

