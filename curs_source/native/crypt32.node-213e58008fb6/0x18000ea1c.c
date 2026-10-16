
/* Address: 0x18000ea1c; Evidence: ev_3d61025d0ee7f02b65d1d193559e62d66306046e845b7b8f6f8a0162890a1350 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000ea1c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_1800260a0 == (FARPROC)0xffffffffffffffff) {
LAB_18000ea6b:
    FUN_18001137c(param_1);
  }
  else {
    pFVar1 = DAT_1800260a0;
    if (DAT_1800260a0 == (FARPROC)0x0) {
      pFVar1 = FUN_18000e698(0x14,"LocaleNameToLCID",(uint *)&DAT_180017760,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000ea6b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}

