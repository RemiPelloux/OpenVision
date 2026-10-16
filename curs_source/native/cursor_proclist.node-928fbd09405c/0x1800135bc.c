
/* Address: 0x1800135bc; Evidence: ev_a7dfc4f755eb8a0311476ddda4971f5e5779a158bbdf7d2338c20d0c1659ed07 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_1800135bc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18002c0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18002c0d0;
  if ((DAT_18002c0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180013408(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001d63c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

