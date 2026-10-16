
/* Address: 0x18000eb28; Evidence: ev_4ce7b8420bc32a6361ecff318e9c493ddc88ddeb4d3986e5e4cd8304eaab7dad */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000eb28(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_180027000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_180027000;
  if ((DAT_180027000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000e918(0,"AreFileApisANSI",(uint *)&DAT_180018708,(uint *)&DAT_18001870c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}

