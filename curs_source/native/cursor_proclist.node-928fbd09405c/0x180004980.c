
/* Address: 0x180004980; Evidence: ev_30805e3ebaf153347b7355672d5c755d7726735f16da306c0be3111c69b1ecc7 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004980(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  LPVOID pvVar2;
  int iVar3;
  undefined8 *puVar4;
  LPVOID pvVar5;
  undefined1 auStackY_b8 [32];
  undefined8 local_78 [2];
  undefined8 local_68;
  longlong local_60;
  char local_58;
  undefined1 local_50;
  undefined7 uStack_4f;
  undefined8 local_40;
  ulonglong uStack_38;
  ulonglong local_30;
  
  local_30 = DAT_180028040 ^ (ulonglong)auStackY_b8;
  FUN_180004f30(local_78,param_2,FUN_180004700);
  iVar3 = napi_create_string_utf8(param_2,"cursor_proclist_scan_async");
  if (iVar3 != 0) {
    puVar4 = FUN_180001d60(&local_68,param_2);
    FUN_1800023f0(puVar4);
    if (0xf < uStack_38) {
      pvVar2 = (LPVOID)CONCAT71(uStack_4f,local_50);
      pvVar5 = pvVar2;
      if ((0xfff < uStack_38 + 1) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar5)))) {
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
  }
  FUN_1800050a0(param_3);
  FUN_180004f30(local_78,param_2,FUN_180004870);
  iVar3 = napi_create_string_utf8(param_2,"cursor_proclist_system_memory");
  if (iVar3 != 0) {
    puVar4 = FUN_180001d60(&local_68,param_2);
    FUN_1800023f0(puVar4);
    if (0xf < uStack_38) {
      pvVar2 = (LPVOID)CONCAT71(uStack_4f,local_50);
      pvVar5 = pvVar2;
      if ((0xfff < uStack_38 + 1) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar5)))) {
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
  }
  FUN_1800050a0(param_3);
  uVar1 = param_3[1];
  *param_1 = *param_3;
  param_1[1] = uVar1;
  return param_1;
}

