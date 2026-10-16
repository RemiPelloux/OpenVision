
/* Address: 0x180004db0; Evidence: ev_1dca14326ce0cbb717ac76cf7b2f7bb6e5db47629c5f3e463c8da7f04d636649 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004db0(undefined8 *param_1)

{
  undefined8 uVar1;
  LPVOID pvVar2;
  int iVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  LPVOID pvVar6;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 local_60;
  undefined8 local_58 [2];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_98;
  uVar1 = *param_1;
  iVar3 = napi_set_element(uVar1,param_1[1]);
  if (iVar3 != 0) {
    puVar4 = FUN_180001d60(&local_48,uVar1);
    FUN_1800027b0(&local_68,*puVar4);
    if (puVar4[1] != 0) {
      puVar5 = FUN_180002160(puVar4,local_58);
      iVar3 = napi_throw(*puVar4,puVar5[1]);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
      }
    }
    iVar3 = napi_close_handle_scope(local_68,local_60);
    if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (0xf < uStack_18) {
      pvVar2 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar6 = pvVar2;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar6 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar6)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar6);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  return param_1;
}

