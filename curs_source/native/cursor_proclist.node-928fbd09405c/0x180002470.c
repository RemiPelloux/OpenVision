
/* Address: 0x180002470; Evidence: ev_00d30cbf6bfa53ec1b8ee031ce6f6b90e95bc54bd8f4d923f35f69c17bfb66ad */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong * FUN_180002470(ulonglong *param_1,ulonglong param_2,ulonglong param_3)

{
  undefined1 auVar1 [16];
  LPVOID pvVar2;
  int iVar3;
  undefined8 *puVar4;
  __uint64 _Var5;
  void *pvVar6;
  LPVOID pvVar7;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  longlong local_60;
  char local_58;
  undefined1 local_50;
  undefined7 uStack_4f;
  undefined8 local_40;
  ulonglong local_38;
  ulonglong local_30;
  
  local_30 = DAT_180028040 ^ (ulonglong)auStackY_98;
  *param_1 = 6;
  param_1[1] = param_2;
  param_1[2] = param_3;
  param_1[3] = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0;
  param_1[10] = 0;
  param_1[0xb] = 0;
  param_1[0xc] = 0;
  param_1[0xd] = 0;
  param_1[4] = *param_1;
  param_1[5] = (ulonglong)(param_1 + 6);
  iVar3 = napi_get_cb_info(param_2,param_3);
  if (iVar3 == 0) {
    if (param_1[4] <= *param_1) {
      return param_1;
    }
    auVar1._8_8_ = 0;
    auVar1._0_8_ = param_1[4];
    _Var5 = SUB168(ZEXT816(8) * auVar1,0);
    if (SUB168(ZEXT816(8) * auVar1,8) != 0) {
      _Var5 = 0xffffffffffffffff;
    }
    pvVar6 = operator_new(_Var5);
    param_1[0xc] = (ulonglong)pvVar6;
    param_1[5] = (ulonglong)pvVar6;
    iVar3 = napi_get_cb_info(param_2,param_3);
    if (iVar3 == 0) {
      return param_1;
    }
    puVar4 = FUN_180001d60(&local_68,param_1[1]);
    FUN_1800023f0(puVar4);
    if (local_38 < 0x10) goto LAB_1800025f8;
    pvVar2 = (LPVOID)CONCAT71(uStack_4f,local_50);
    pvVar7 = pvVar2;
    if ((0xfff < local_38 + 1) &&
       (pvVar7 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  else {
    puVar4 = FUN_180001d60(&local_68,param_1[1]);
    FUN_1800023f0(puVar4);
    if (local_38 < 0x10) goto LAB_1800025f8;
    pvVar2 = (LPVOID)CONCAT71(uStack_4f,local_50);
    pvVar7 = pvVar2;
    if ((0xfff < local_38 + 1) &&
       (pvVar7 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  thunk_FUN_1800116e0(pvVar7);
LAB_1800025f8:
  local_50 = 0;
  local_38 = 0xf;
  local_40 = 0;
  if ((local_60 != 0) && (local_58 == '\0')) {
    napi_delete_reference(local_68);
  }
  return param_1;
}

