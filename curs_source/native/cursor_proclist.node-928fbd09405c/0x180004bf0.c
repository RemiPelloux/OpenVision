
/* Address: 0x180004bf0; Evidence: ev_c8b70dd962fe33eb1038a1440d8cb3d145ad09f4a96c6e7239bcde3bef316513 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_180004bf0(undefined8 *param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4,
             undefined *param_5)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_b8 [32];
  undefined8 local_70;
  longlong local_68;
  char local_60;
  undefined1 local_58;
  undefined7 uStack_57;
  undefined8 local_48;
  ulonglong uStack_40;
  ulonglong local_38;
  
  local_38 = DAT_180028040 ^ (ulonglong)auStackY_b8;
  iVar2 = napi_create_string_utf8(param_2,param_3);
  if (iVar2 == 0) {
    iVar2 = (*(code *)param_5)(param_2,0);
    if (iVar2 == 0) {
      FUN_180002010(param_1,param_2,(longlong)param_1);
      return param_1;
    }
    puVar3 = FUN_180001d60(&local_70,param_2);
    FUN_1800023f0(puVar3);
    if (uStack_40 < 0x10) goto LAB_180004c99;
    pvVar1 = (LPVOID)CONCAT71(uStack_57,local_58);
    pvVar4 = pvVar1;
    if ((0xfff < uStack_40 + 1) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  else {
    puVar3 = FUN_180001d60(&local_70,param_2);
    FUN_1800023f0(puVar3);
    if (uStack_40 < 0x10) goto LAB_180004c99;
    pvVar1 = (LPVOID)CONCAT71(uStack_57,local_58);
    pvVar4 = pvVar1;
    if ((0xfff < uStack_40 + 1) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)*(LPVOID *)((longlong)pvVar1 + -8)))))
    {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  thunk_FUN_1800116e0(pvVar4);
LAB_180004c99:
  local_48 = 0;
  uStack_40 = 0xf;
  local_58 = 0;
  if ((local_68 != 0) && (local_60 == '\0')) {
    napi_delete_reference(local_70);
  }
  *param_1 = 0;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  param_1[3] = 0;
  param_1[4] = 0;
  param_1[5] = 0;
  param_1[6] = 0xf;
  *(undefined1 *)(param_1 + 3) = 0;
  return param_1;
}

