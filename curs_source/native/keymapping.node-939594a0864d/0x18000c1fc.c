
/* Address: 0x18000c1fc; Evidence: ev_6c6e2671ba2b0c40ccde3874069d530a8351025e649da3c661feedb5f9fb9192 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000c1fc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18002c0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18002c0d0;
  if ((DAT_18002c0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000c048(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001b82c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

