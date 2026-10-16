
/* Address: 0x180013618; Evidence: ev_e4deea361f410cb4573371a4468b55e50826e55cd332cdabe4496e895681bfec */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180013618(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18002c000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18002c000;
  if ((DAT_18002c000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180013408(0,"AreFileApisANSI",(uint *)&DAT_18001d5d8,(uint *)&DAT_18001d5dc),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

