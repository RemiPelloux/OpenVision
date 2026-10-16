
/* Address: 0x180008be8; Evidence: ev_6b7f32743125f034e363a51f57c23b32d2201ddda2553776b88273e99a91eb68 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008be8(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18001e090 == (FARPROC)0xffffffffffffffff) {
LAB_180008c93:
    Locale = FUN_180008cdc(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18001e090;
    if (DAT_18001e090 == (FARPROC)0x0) {
      pFVar1 = FUN_180008958(0x12,"LCMapStringEx",(uint *)&DAT_1800115c8,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180008c93;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

