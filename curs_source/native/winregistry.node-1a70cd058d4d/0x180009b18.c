
/* Address: 0x180009b18; Evidence: ev_d95a6e5b2d6ecfe07c58ef0c63bf86c6e00120fbbb30bd46c74c7e67a7a03257 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180009b18(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_180020000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_180020000;
  if ((DAT_180020000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180009908(0,"AreFileApisANSI",(uint *)&DAT_180012608,(uint *)&DAT_18001260c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

