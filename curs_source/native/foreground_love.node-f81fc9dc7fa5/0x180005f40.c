
/* Address: 0x180005f40; Evidence: ev_f6c21a7059cb6ac979a3575e5c7a85edf6a9a94553095a4ebfe82198471d2412 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005f40(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_180005c74(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_180005ce0(0x18001b2f8,(longlong)param_6);
    bVar3 = (byte)DAT_18001a000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_18001a000) >> bVar3 | (*puVar2 ^ DAT_18001a000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}

