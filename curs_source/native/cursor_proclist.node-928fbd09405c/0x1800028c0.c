
/* Address: 0x1800028c0; Evidence: ev_80557982f5f88b56741474fe6d6d839010783f5233de601b729f7e76b14524da */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800028c0(undefined8 *param_1,undefined8 param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_78 [32];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_78;
  *param_1 = param_2;
  iVar2 = napi_open_escapable_handle_scope(param_2,param_1 + 1);
  if (iVar2 != 0) {
    puVar3 = FUN_180001d60(&local_48,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_18) {
      pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
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

