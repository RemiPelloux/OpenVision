
/* Address: 0x18001378c; Evidence: ev_e49de2bfa02007a8fe29437b2e9aebd7c8322b8d6150d966be425e8252dfafb3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18001378c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18002c0a0 == (FARPROC)0xffffffffffffffff) {
LAB_1800137db:
    FUN_1800160dc(param_1);
  }
  else {
    pFVar1 = DAT_18002c0a0;
    if (DAT_18002c0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_180013408(0x14,"LocaleNameToLCID",(uint *)&DAT_18001d620,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_1800137db;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

