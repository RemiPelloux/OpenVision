
/* Address: 0x18000c3cc; Evidence: ev_6bcb0e5a91aa609130fb49173c31341ff660c228d0f8beb711a5b694dce2ae26 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c3cc(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18002c0a0 == (FARPROC)0xffffffffffffffff) {
LAB_18000c41b:
    FUN_1800111cc(param_1);
  }
  else {
    pFVar1 = DAT_18002c0a0;
    if (DAT_18002c0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_18000c048(0x14,"LocaleNameToLCID",(uint *)&DAT_18001b810,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000c41b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

