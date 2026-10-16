
/* Address: 0x180002b20; Evidence: ev_b1529a38ca47393abe2c284e1f1d8f97a7fe40cf66625584b0ae8e61ceece046 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_180002b20(undefined8 *param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  LPVOID pvVar5;
  undefined1 auStackY_b8 [32];
  undefined8 local_70;
  undefined8 local_68;
  undefined8 *local_60;
  undefined8 local_58 [2];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_b8;
  *param_1 = &PTR_FUN_180022f60;
  param_1[1] = param_2;
  param_1[3] = 0;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  *(undefined1 *)(param_1 + 8) = 0;
  param_1[9] = 0;
  param_1[10] = 0;
  param_1[0xb] = 0;
  param_1[0xc] = 0xf;
  *(undefined1 *)(param_1 + 9) = 0;
  *(undefined1 *)(param_1 + 0xd) = 0;
  local_60 = param_1;
  iVar2 = napi_create_string_latin1(param_1[1],"generic");
  if (iVar2 == 0) {
    iVar2 = napi_create_async_work(param_1[1],*(undefined8 *)(param_4 + 8));
    if (iVar2 == 0) {
      return param_1;
    }
    puVar3 = FUN_180001d60(&local_48,param_1[1]);
    FUN_1800027b0(&local_70,*puVar3);
    if (puVar3[1] != 0) {
      puVar4 = FUN_180002160(puVar3,local_58);
      iVar2 = napi_throw(*puVar3,puVar4[1]);
      if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
      }
    }
    iVar2 = napi_close_handle_scope(local_70,local_68);
    if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (uStack_18 < 0x10) goto LAB_180002cf1;
    pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
    pvVar5 = pvVar1;
    if ((0xfff < uStack_18 + 1) &&
       (pvVar5 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  else {
    puVar3 = FUN_180001d60(&local_48,param_1[1]);
    FUN_1800023f0(puVar3);
    if (uStack_18 < 0x10) goto LAB_180002cf1;
    pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
    pvVar5 = pvVar1;
    if ((0xfff < uStack_18 + 1) &&
       (pvVar5 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  thunk_FUN_1800116e0(pvVar5);
LAB_180002cf1:
  local_30 = 0;
  local_20 = 0;
  uStack_18 = 0xf;
  if ((local_40 != 0) && (local_38 == '\0')) {
    napi_delete_reference(local_48);
  }
  return param_1;
}

