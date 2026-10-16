
/* Address: 0x18000c2d8; Evidence: ev_a8d137d3eaaf63a1fe8eecda425c39d183bd405496593f0977f1c44f8a690226 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c2d8(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18002c090 == (FARPROC)0xffffffffffffffff) {
LAB_18000c383:
    Locale = FUN_18000c3cc(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18002c090;
    if (DAT_18002c090 == (FARPROC)0x0) {
      pFVar1 = FUN_18000c048(0x12,"LCMapStringEx",(uint *)&DAT_18001b7f8,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000c383;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

