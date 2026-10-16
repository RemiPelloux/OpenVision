
/* Address: 0x18000c258; Evidence: ev_d26d7b6c3f7395f780751aaeb2512b49d745afdc00349a3f7496b8ec13573b36 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000c258(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18002c000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18002c000;
  if ((DAT_18002c000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000c048(0,"AreFileApisANSI",(uint *)&DAT_18001b7c8,(uint *)&DAT_18001b7cc),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

