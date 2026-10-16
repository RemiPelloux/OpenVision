
/* Address: 0x180005950; Evidence: ev_fb53516b0aad73945cd83816803e14990acc906b5f76850356467bdc4bd30ca6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180005950(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  ulonglong uVar6;
  LPVOID pvVar7;
  undefined1 auStackY_c8 [32];
  undefined8 local_98;
  undefined8 local_90;
  LPVOID local_80 [3];
  ulonglong local_68;
  undefined8 local_60;
  longlong local_58;
  char local_50;
  undefined1 local_48;
  undefined7 uStack_47;
  undefined8 local_38;
  ulonglong uStack_30;
  ulonglong local_28;
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_c8;
  uVar3 = *param_1;
  FUN_180001730(param_3,(longlong *)local_80);
  FUN_180001470(&local_98,uVar3,local_80);
  if (0xf < local_68) {
    pvVar7 = local_80[0];
    if ((0xfff < local_68 + 1) &&
       (pvVar7 = *(LPVOID *)((longlong)local_80[0] + -8),
       0x1f < (ulonglong)((longlong)local_80[0] + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar7);
  }
  uVar3 = napi_set_element(*param_1,param_1[1]);
  if ((int)uVar3 == 0) {
    uVar6 = CONCAT71((int7)((ulonglong)uVar3 >> 8),1);
  }
  else {
    puVar4 = FUN_180001d60(&local_60,*param_1);
    FUN_1800027b0(&local_98,*puVar4);
    if (puVar4[1] != 0) {
      puVar5 = FUN_180002160(puVar4,local_80);
      iVar2 = napi_throw(*puVar4,puVar5[1]);
      if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
      }
    }
    uVar6 = napi_close_handle_scope(local_98,local_90);
    if ((int)uVar6 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (0xf < uStack_30) {
      pvVar1 = (LPVOID)CONCAT71(uStack_47,local_48);
      pvVar7 = pvVar1;
      if ((0xfff < uStack_30 + 1) &&
         (pvVar7 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      uVar6 = thunk_FUN_1800116e0(pvVar7);
    }
    local_38 = 0;
    uStack_30 = 0xf;
    local_48 = 0;
    if ((local_58 != 0) && (local_50 == '\0')) {
      uVar6 = napi_delete_reference(local_60);
    }
    uVar6 = uVar6 & 0xffffffffffffff00;
  }
  return uVar6;
}

