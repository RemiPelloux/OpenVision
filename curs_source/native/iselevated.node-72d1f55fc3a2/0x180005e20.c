
/* Address: 0x180005e20; Evidence: ev_4c9d2dfb6a0aebbda46a2e31cb2b264851dca0d4c6def5158abba923bf9fa25f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005e20(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_180005b54(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_180005bc0(0x18001a2f8,(longlong)param_6);
    bVar3 = (byte)DAT_180019000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_180019000) >> bVar3 | (*puVar2 ^ DAT_180019000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}

