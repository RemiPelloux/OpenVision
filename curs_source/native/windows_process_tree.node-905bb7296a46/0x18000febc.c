
/* Address: 0x18000febc; Evidence: ev_519037ec25f92e2f6241e7dfe853fe70a6110133df55a46f0811cbaf43ea10ed */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000febc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_1800280d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_1800280d0;
  if ((DAT_1800280d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000fd08(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001979c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

