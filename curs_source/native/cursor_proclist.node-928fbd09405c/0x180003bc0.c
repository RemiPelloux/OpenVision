
/* Address: 0x180003bc0; Evidence: ev_c7a346be5a0bb7b526f9d45ce4e45c9dc389d74c99f04d8672d0126aa928acd1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180003bc0(undefined8 *param_1,undefined8 param_2,longlong *param_3)

{
  longlong lVar1;
  longlong lVar2;
  longlong lVar3;
  int iVar4;
  undefined8 *puVar5;
  LPVOID pvVar6;
  LPVOID pvVar7;
  longlong *plVar8;
  undefined1 auStackY_a8 [32];
  undefined8 local_68 [2];
  undefined8 local_58;
  longlong local_50;
  char local_48;
  undefined1 local_40;
  undefined7 uStack_3f;
  undefined8 local_30;
  ulonglong uStack_28;
  ulonglong local_20;
  
  local_20 = DAT_180028040 ^ (ulonglong)auStackY_a8;
  plVar8 = param_3;
  puVar5 = FUN_180001a20(local_68,param_2);
  FUN_180002b20(param_1,param_2,plVar8,(longlong)puVar5);
  *param_1 = &PTR_FUN_180022fd0;
  lVar1 = param_3[2];
  param_3[2] = 0;
  lVar2 = param_3[1];
  param_3[1] = 0;
  lVar3 = *param_3;
  *param_3 = 0;
  param_1[0xe] = lVar3;
  param_1[0xf] = lVar2;
  param_1[0x10] = lVar1;
  param_1[0x11] = param_2;
  iVar4 = napi_create_promise(param_2,param_1 + 0x12);
  if (iVar4 != 0) {
    puVar5 = FUN_180001d60(&local_58,param_1[0x11]);
    FUN_1800023f0(puVar5);
    if (0xf < uStack_28) {
      pvVar7 = (LPVOID)CONCAT71(uStack_3f,local_40);
      pvVar6 = pvVar7;
      if ((0xfff < uStack_28 + 1) &&
         (pvVar6 = *(LPVOID *)((longlong)pvVar7 + -8),
         0x1f < (ulonglong)((longlong)pvVar7 + (-8 - (longlong)pvVar6)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar6);
    }
    local_30 = 0;
    uStack_28 = 0xf;
    local_40 = 0;
    if ((local_50 != 0) && (local_48 == '\0')) {
      napi_delete_reference(local_58);
    }
  }
  param_1[0x14] = 0;
  param_1[0x15] = 0;
  param_1[0x16] = 0;
  pvVar6 = (LPVOID)*param_3;
  if (pvVar6 != (LPVOID)0x0) {
    pvVar7 = pvVar6;
    if ((0xfff < (param_3[2] - (longlong)pvVar6 & 0xfffffffffffffffcU)) &&
       (pvVar7 = *(LPVOID *)((longlong)pvVar6 + -8),
       0x1f < (ulonglong)((longlong)pvVar6 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar7);
    *param_3 = 0;
    param_3[1] = 0;
    param_3[2] = 0;
  }
  return param_1;
}

