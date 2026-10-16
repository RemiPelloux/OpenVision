
/* Address: 0x180008b68; Evidence: ev_21cfb68df52258f87daa38adf52ffc5e171a7445b613d0925c52b37b02bb2b97 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180008b68(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001e000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18001e000;
  if ((DAT_18001e000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180008958(0,"AreFileApisANSI",(uint *)&DAT_180011598,(uint *)&DAT_18001159c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

