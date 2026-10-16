
/* Address: 0x180009c8c; Evidence: ev_760879a11d2cb2a85fc43e6f8b65e873c5f2bd78d7d0f83018fbee918adde409 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180009c8c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_1800200a0 == (FARPROC)0xffffffffffffffff) {
LAB_180009cdb:
    FUN_18000c5ec(param_1);
  }
  else {
    pFVar1 = DAT_1800200a0;
    if (DAT_1800200a0 == (FARPROC)0x0) {
      pFVar1 = FUN_180009908(0x14,"LocaleNameToLCID",(uint *)&DAT_180012650,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180009cdb;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

