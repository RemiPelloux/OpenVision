
/* Address: 0x180008918; Evidence: ev_0a97e637cd39e4cbc9ba744a8b4a5efd6ff8153042f219431dbd04843d058cae */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008918(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18001d090 == (FARPROC)0xffffffffffffffff) {
LAB_1800089c3:
    Locale = FUN_180008a0c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18001d090;
    if (DAT_18001d090 == (FARPROC)0x0) {
      pFVar1 = FUN_180008688(0x12,"LCMapStringEx",(uint *)&DAT_1800115a8,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_1800089c3;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

