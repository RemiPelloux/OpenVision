
/* Address: 0x180004f30; Evidence: ev_22208f5221aead99d6e293bbf830d824d4a8923098a51813519b7ed7075c57c1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004f30(undefined8 *param_1,undefined8 param_2,undefined8 param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 local_60;
  longlong local_58;
  char local_50;
  undefined1 local_48;
  undefined7 uStack_47;
  undefined8 local_38;
  ulonglong local_30;
  ulonglong local_28;
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_98;
  puVar3 = operator_new(0x10);
  *puVar3 = param_3;
  puVar3[1] = 0;
  iVar2 = napi_create_function(param_2,0);
  if ((iVar2 == 0) && (iVar2 = napi_add_finalizer(param_2,local_68), iVar2 == 0)) {
    *param_1 = param_2;
    param_1[1] = local_68;
    return param_1;
  }
  thunk_FUN_1800116e0(puVar3);
  puVar3 = FUN_180001d60(&local_60,param_2);
  FUN_1800023f0(puVar3);
  if (0xf < local_30) {
    pvVar1 = (LPVOID)CONCAT71(uStack_47,local_48);
    pvVar4 = pvVar1;
    if ((0xfff < local_30 + 1) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar4);
  }
  local_38 = 0;
  local_30 = 0xf;
  local_48 = 0;
  if ((local_58 != 0) && (local_50 == '\0')) {
    napi_delete_reference(local_60);
  }
  *param_1 = 0;
  param_1[1] = 0;
  return param_1;
}

