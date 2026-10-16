
/* Address: 0x180008b0c; Evidence: ev_f8a27ece296b9af2222863da51c42e49c531cb61029b799b485d6447a69d5efd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180008b0c(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001e0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18001e0d0;
  if ((DAT_18001e0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180008958(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_1800115fc,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}

