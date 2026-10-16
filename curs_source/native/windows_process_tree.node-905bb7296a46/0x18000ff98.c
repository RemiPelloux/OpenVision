
/* Address: 0x18000ff98; Evidence: ev_bce746a9d09c36fb608b087255a97d644b29a0fe71afcd0723f9732dce4a1a6f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000ff98(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_180028090 == (FARPROC)0xffffffffffffffff) {
LAB_180010043:
    Locale = FUN_18001008c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_180028090;
    if (DAT_180028090 == (FARPROC)0x0) {
      pFVar1 = FUN_18000fd08(0x12,"LCMapStringEx",(uint *)&DAT_180019768,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180010043;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}

