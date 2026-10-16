
/* Address: 0x18000e8a8; Evidence: ev_eb7da37be3b7e5f59050035a5af01e70557b81fd7814d244b4b89fff032802c9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000e8a8(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_180026000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_180026000;
  if ((DAT_180026000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000e698(0,"AreFileApisANSI",(uint *)&DAT_180017718,(uint *)&DAT_18001771c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

