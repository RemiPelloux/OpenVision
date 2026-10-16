
/* Address: 0x180001b30; Evidence: ev_a2ca8056cf562b96c44ad1e91d395e6f704dba43824012a94bd17cd47b26cfb6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001b30(undefined8 *param_1,undefined8 param_2,undefined8 param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  iVar2 = napi_create_array_with_length(param_2,param_3);
  if (iVar2 == 0) {
    *param_1 = param_2;
  }
  else {
    puVar3 = FUN_180001d60(&local_50,param_2);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_28 = 0;
    uStack_20 = 0xf;
    local_38 = 0;
    if ((local_48 != 0) && (local_40 == '\0')) {
      napi_delete_reference(local_50);
    }
    local_58 = 0;
    *param_1 = 0;
  }
  param_1[1] = local_58;
  return param_1;
}

