
/* Address: 0x18000e928; Evidence: ev_df365adeace268dc201e55871cc3612d9fa688b49d07199478567fb1a9b742ee */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000e928(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_180026090 == (FARPROC)0xffffffffffffffff) {
LAB_18000e9d3:
    Locale = FUN_18000ea1c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_180026090;
    if (DAT_180026090 == (FARPROC)0x0) {
      pFVar1 = FUN_18000e698(0x12,"LCMapStringEx",(uint *)&DAT_180017748,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000e9d3;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

