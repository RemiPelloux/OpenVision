
/* Address: 0x18000eacc; Evidence: ev_fd3b41ecce41178cfe53419f43ce359ddb8cb5422a728495e4f91f85d7db77e2 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000eacc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_1800270d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_1800270d0;
  if ((DAT_1800270d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000e918(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001876c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

