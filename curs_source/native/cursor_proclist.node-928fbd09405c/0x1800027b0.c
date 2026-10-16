
/* Address: 0x1800027b0; Evidence: ev_cf3887e602db32378cc8479a2e90985a026583e2d75938afdd2b6ff9de4d39b7 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800027b0(undefined8 *param_1,undefined8 param_2)

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
  iVar2 = napi_open_handle_scope(param_2,param_1 + 1);
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

