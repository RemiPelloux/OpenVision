
/* Address: 0x1800089b8; Evidence: ev_c0e9858eff2cf8c229ba179efa9476a4f3c5f62b43b16db86d47fe39fd66184f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_1800089b8(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001e000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18001e000;
  if ((DAT_18001e000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_1800087a8(0,"AreFileApisANSI",(uint *)&DAT_180011568,(uint *)&DAT_18001156c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

