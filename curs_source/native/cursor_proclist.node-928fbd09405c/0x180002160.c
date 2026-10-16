
/* Address: 0x180002160; Evidence: ev_714a525644118caecaf3a891eccae3eaf6b44d1a9a24b7fa575cf23f61b79b11 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002160(undefined8 *param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_b8 [32];
  char local_88 [8];
  undefined8 local_80;
  int local_78;
  undefined8 local_70;
  undefined8 local_68;
  undefined8 local_60 [2];
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_b8;
  if (param_1[1] == 0) {
    *param_2 = *param_1;
    local_70 = 0;
    goto LAB_180002376;
  }
  iVar2 = napi_get_reference_value();
  if (iVar2 == 0) {
    iVar2 = napi_typeof(*param_1,local_80);
    if (iVar2 == 0) {
      if (local_78 != 5) {
        local_88[0] = '\0';
        FUN_180001590(&local_70,*param_1,0x180022de0);
        napi_has_property(*param_1,local_80,local_68,local_88);
        if (local_88[0] != '\0') {
          FUN_180001590(local_60,*param_1,0x180022de0);
          iVar2 = napi_get_property(*param_1,local_80);
          if (iVar2 == 0) {
            *param_2 = *param_1;
            goto LAB_180002376;
          }
          puVar3 = FUN_180001d60(&local_50,*param_1);
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
            goto LAB_18000232d;
          }
          goto LAB_180002332;
        }
      }
      *param_2 = *param_1;
      local_70 = local_80;
      goto LAB_180002376;
    }
    puVar3 = FUN_180001d60(&local_50,*param_1);
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
      goto LAB_18000232d;
    }
  }
  else {
    puVar3 = FUN_180001d60(&local_50,*param_1);
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
LAB_18000232d:
      thunk_FUN_1800116e0(pvVar4);
    }
  }
LAB_180002332:
  local_28 = 0;
  uStack_20 = 0xf;
  local_38 = 0;
  if ((local_48 != 0) && (local_40 == '\0')) {
    napi_delete_reference(local_50);
  }
  local_70 = 0;
  *param_2 = 0;
LAB_180002376:
  param_2[1] = local_70;
  return param_2;
}

