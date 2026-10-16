
/* Address: 0x180008b2c; Evidence: ev_4bfab1fe536bdce71c0a4d4b836ce4a7fbce1b31ff313a517be5470c21494afe */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008b2c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18001e0a0 == (FARPROC)0xffffffffffffffff) {
LAB_180008b7b:
    FUN_18000b5fc(param_1);
  }
  else {
    pFVar1 = DAT_18001e0a0;
    if (DAT_18001e0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_1800087a8(0x14,"LocaleNameToLCID",(uint *)&DAT_1800115b0,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180008b7b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

