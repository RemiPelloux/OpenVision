
/* Address: 0x180001730; Evidence: ev_47ff0bf5d79051a817a9d1a8b886a816a5db836f78a45967c28ee47d04c2f651 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180001730(undefined8 *param_1,longlong *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined1 (*pauVar4) [32];
  LPVOID pvVar5;
  undefined8 uVar6;
  undefined1 auStackY_c8 [32];
  undefined1 (*local_88) [32];
  longlong lStack_80;
  longlong *local_78;
  longlong *plStack_70;
  undefined8 local_68;
  longlong local_60;
  char local_58;
  undefined1 local_50;
  undefined7 uStack_4f;
  undefined8 local_40;
  ulonglong uStack_38;
  ulonglong local_30;
  
  local_30 = DAT_180028040 ^ (ulonglong)auStackY_c8;
  uVar6 = 0;
  iVar2 = napi_get_value_string_utf8(*param_1,param_1[1]);
  if (iVar2 == 0) {
    lStack_80 = 0;
    local_78 = (longlong *)0x0;
    plStack_70 = (longlong *)0xf;
    local_88 = (undefined1 (*) [32])0x0;
    if (0xf < (longlong)param_2 + 1U) {
      FUN_180005e10(&local_88,(longlong)param_2 + 1U);
    }
    local_78 = (longlong *)0x0;
    if (param_2 == (longlong *)0x0) {
      pauVar4 = (undefined1 (*) [32])&local_88;
      if ((longlong *)0xf < plStack_70) {
        pauVar4 = local_88;
      }
      local_78 = param_2;
      (*pauVar4)[0] = 0;
    }
    else if (plStack_70 < param_2) {
      FUN_1800066d0(&local_88,(ulonglong)param_2,uVar6,(ulonglong)param_2);
    }
    else {
      pauVar4 = (undefined1 (*) [32])&local_88;
      if ((longlong *)0xf < plStack_70) {
        pauVar4 = local_88;
      }
      local_78 = param_2;
      FUN_1800188a0(pauVar4,0,(ulonglong)param_2);
      (*pauVar4)[(longlong)param_2] = 0;
    }
    iVar2 = napi_get_value_string_utf8(*param_1,param_1[1]);
    if (iVar2 == 0) {
      *param_2 = (longlong)local_88;
      param_2[1] = lStack_80;
      param_2[2] = (longlong)local_78;
      param_2[3] = (longlong)plStack_70;
    }
    else {
      puVar3 = FUN_180001d60(&local_68,*param_1);
      FUN_1800023f0(puVar3);
      if (0xf < uStack_38) {
        pvVar1 = (LPVOID)CONCAT71(uStack_4f,local_50);
        pvVar5 = pvVar1;
        if ((0xfff < uStack_38 + 1) &&
           (pvVar5 = *(LPVOID *)((longlong)pvVar1 + -8),
           0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_1800116e0(pvVar5);
      }
      local_40 = 0;
      uStack_38 = 0xf;
      local_50 = 0;
      if ((local_60 != 0) && (local_58 == '\0')) {
        napi_delete_reference(local_68);
      }
      *param_2 = 0;
      param_2[1] = 0;
      param_2[2] = 0;
      param_2[3] = 0xf;
      *(undefined1 *)param_2 = 0;
      if ((longlong *)0xf < plStack_70) {
        pauVar4 = local_88;
        if ((0xfff < (longlong)plStack_70 + 1U) &&
           (pauVar4 = *(undefined1 (**) [32])(local_88[-1] + 0x18),
           0x1f < (ulonglong)((longlong)local_88 + (-8 - (longlong)pauVar4)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_1800116e0(pauVar4);
      }
    }
  }
  else {
    puVar3 = FUN_180001d60(&local_68,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_38) {
      pvVar1 = (LPVOID)CONCAT71(uStack_4f,local_50);
      pvVar5 = pvVar1;
      if ((0xfff < uStack_38 + 1) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
    local_40 = 0;
    uStack_38 = 0xf;
    local_50 = 0;
    if ((local_60 != 0) && (local_58 == '\0')) {
      napi_delete_reference(local_68);
    }
    *param_2 = 0;
    param_2[1] = 0;
    param_2[2] = 0;
    param_2[3] = 0xf;
    *(undefined1 *)param_2 = 0;
  }
  return param_2;
}

