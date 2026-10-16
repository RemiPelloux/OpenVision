
/* Address: 0x18000e84c; Evidence: ev_43f429e77e85f89edbfeb743cd3801af884943ede4e61a450e309175dfbb9f20 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000e84c(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_1800260d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_1800260d0;
  if ((DAT_1800260d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000e698(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001777c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

