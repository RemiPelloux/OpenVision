
/* Address: 0x18000eba8; Evidence: ev_efb4bd8c6fe32ef9c9dfdd3f8413196af86dd236d02e4616c2a4471a27b462f3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000eba8(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_180027090 == (FARPROC)0xffffffffffffffff) {
LAB_18000ec53:
    Locale = FUN_18000ec9c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_180027090;
    if (DAT_180027090 == (FARPROC)0x0) {
      pFVar1 = FUN_18000e918(0x12,"LCMapStringEx",(uint *)&DAT_180018738,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000ec53;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

