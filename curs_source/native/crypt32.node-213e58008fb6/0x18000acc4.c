
/* Address: 0x18000acc4; Evidence: ev_043273d2bd5b49ddf439f22f78ad58c188ea3444620887e2b5133fc85a55c822 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000acc4(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_18000a9f8(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_18000aa64(0x1800222e8,(longlong)param_6);
    bVar3 = (byte)DAT_180021000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_180021000) >> bVar3 | (*puVar2 ^ DAT_180021000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}

