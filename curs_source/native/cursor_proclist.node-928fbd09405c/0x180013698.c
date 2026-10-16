
/* Address: 0x180013698; Evidence: ev_e2b7d43ea32427630b2bf3f470eb6960ef7624c28575182773335f9242db58bb */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180013698(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18002c090 == (FARPROC)0xffffffffffffffff) {
LAB_180013743:
    Locale = FUN_18001378c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18002c090;
    if (DAT_18002c090 == (FARPROC)0x0) {
      pFVar1 = FUN_180013408(0x12,"LCMapStringEx",(uint *)&DAT_18001d608,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180013743;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

