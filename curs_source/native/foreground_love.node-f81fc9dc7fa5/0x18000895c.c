
/* Address: 0x18000895c; Evidence: ev_a2fe779f42b0e0b5c11459c0938af60139e213138e0165be9e6c029f69fb22ab */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000895c(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001e0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18001e0d0;
  if ((DAT_18001e0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_1800087a8(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_1800115cc,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

