
/* Address: 0x180009abc; Evidence: ev_d4005932db62bf0effd62bd8511f0518382c7319bc589ad14677ab649181c1bd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180009abc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_1800200d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_1800200d0;
  if ((DAT_1800200d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180009908(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001266c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

