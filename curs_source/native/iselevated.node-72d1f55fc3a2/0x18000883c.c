
/* Address: 0x18000883c; Evidence: ev_d770c46cde9e32167089e355594608b64fcf68c5a22c2ae52a69e32db9e1d265 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000883c(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001d0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18001d0d0;
  if ((DAT_18001d0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180008688(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_1800115dc,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

