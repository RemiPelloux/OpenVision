
/* Address: 0x180008898; Evidence: ev_c48f5a83108ff238c22297548d71dd87f5a8fe75fcf610feae9b5a1f174fee82 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180008898(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001d000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18001d000;
  if ((DAT_18001d000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180008688(0,"AreFileApisANSI",(uint *)&DAT_180011578,(uint *)&DAT_18001157c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

