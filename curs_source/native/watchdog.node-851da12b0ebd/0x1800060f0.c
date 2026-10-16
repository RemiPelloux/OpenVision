
/* Address: 0x1800060f0; Evidence: ev_04fcfb4c7aeb11c96b73fa7f4e4d804de2f9869fdf05b018d33c7254598ec347 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800060f0(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_180005e24(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_180005e90(0x18001b2f8,(longlong)param_6);
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

