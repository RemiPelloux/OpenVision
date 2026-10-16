
/* Address: 0x1800050a0; Evidence: ev_f87db2c1d79e395b564f51c0c61af94855859fc59a9d16029dd7644a584aa61b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800050a0(undefined8 *param_1)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  ulonglong uVar6;
  LPVOID pvVar7;
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
  uVar3 = napi_set_property(*param_1,param_1[1]);
  if ((int)uVar3 == 0) {
    uVar6 = CONCAT71((int7)((ulonglong)uVar3 >> 8),1);
  }
  else {
    puVar4 = FUN_180001d60(&local_48,*param_1);
    FUN_1800027b0(&local_68,*puVar4);
    if (puVar4[1] != 0) {
      puVar5 = FUN_180002160(puVar4,local_58);
      iVar2 = napi_throw(*puVar4,puVar5[1]);
      if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
      }
    }
    uVar6 = napi_close_handle_scope(local_68,local_60);
    if ((int)uVar6 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (0xf < uStack_18) {
      pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar7 = pvVar1;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar7 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      uVar6 = thunk_FUN_1800116e0(pvVar7);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      uVar6 = napi_delete_reference(local_48);
    }
    uVar6 = uVar6 & 0xffffffffffffff00;
  }
  return uVar6;
}

