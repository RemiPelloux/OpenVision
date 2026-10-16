
/* Address: 0x180008a38; Evidence: ev_f53925896b90b9965e08fc76fec5d92be606f4e8287a2a9225efadd192457973 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008a38(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18001e090 == (FARPROC)0xffffffffffffffff) {
LAB_180008ae3:
    Locale = FUN_180008b2c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18001e090;
    if (DAT_18001e090 == (FARPROC)0x0) {
      pFVar1 = FUN_1800087a8(0x12,"LCMapStringEx",(uint *)&DAT_180011598,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180008ae3;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

