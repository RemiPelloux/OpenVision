
/* Address: 0x18000ff18; Evidence: ev_ee18f9d4eeafe480f0ad05a4c35cf2d65905db9cf5da5b0c8b74b4a490819e62 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000ff18(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_180028000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_180028000;
  if ((DAT_180028000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000fd08(0,"AreFileApisANSI",(uint *)&DAT_180019738,(uint *)&DAT_18001973c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

