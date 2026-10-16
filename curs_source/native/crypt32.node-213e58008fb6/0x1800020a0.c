
/* Address: 0x1800020a0; Evidence: ev_4770e700ce1aa426546479dec076b2b195eda8de113b46e68e113c69f1461a54 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800020a0(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_b8 [32];
  undefined8 *local_98;
  undefined8 local_90;
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_b8;
  local_90 = *param_2;
  *param_1 = local_90;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  local_98 = param_1;
  iVar1 = napi_open_handle_scope(local_90,local_88);
  if (iVar1 != 0) {
    FUN_1800014f0(local_78,local_90);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  puVar2 = (undefined8 *)0x0;
  if ((param_2[1] != 0) &&
     (iVar1 = napi_get_reference_value(*param_2,param_2[1],&local_98), puVar2 = local_98, iVar1 != 0
     )) {
    FUN_1800014f0(local_78,*param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(*param_1,puVar2,1,param_1 + 1), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_90,local_88[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  return param_1;
}

