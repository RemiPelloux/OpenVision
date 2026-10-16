
/* Address: 0x180008cdc; Evidence: ev_70b952d4ea220cdb400906cd06be44711b18ef546d652141fd2553deb5973d99 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008cdc(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18001e0a0 == (FARPROC)0xffffffffffffffff) {
LAB_180008d2b:
    FUN_18000b7ac(param_1);
  }
  else {
    pFVar1 = DAT_18001e0a0;
    if (DAT_18001e0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_180008958(0x14,"LocaleNameToLCID",(uint *)&DAT_1800115e0,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180008d2b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

