
/* Address: 0x180009b98; Evidence: ev_d77ea3f41bb3af25ac10eb174a419c79542a066a1a46aeb14e811f0612c401dd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180009b98(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_180020090 == (FARPROC)0xffffffffffffffff) {
LAB_180009c43:
    Locale = FUN_180009c8c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_180020090;
    if (DAT_180020090 == (FARPROC)0x0) {
      pFVar1 = FUN_180009908(0x12,"LCMapStringEx",(uint *)&DAT_180012638,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180009c43;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

