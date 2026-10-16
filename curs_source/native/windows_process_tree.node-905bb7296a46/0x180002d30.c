
/* Address: 0x180002d30; Evidence: ev_ea1ea0346127bba0a51d561389c66fe95b98ba56e3d5b5270c55e08563ef19f4 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002d30(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  longlong lVar2;
  undefined1 auStack_b8 [32];
  undefined8 local_98;
  undefined8 local_90;
  longlong local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_b8;
  local_98 = *param_2;
  *param_1 = local_98;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  iVar1 = napi_open_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014a0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  lVar2 = 0;
  if ((param_2[1] != 0) &&
     (iVar1 = napi_get_reference_value(*param_2,param_2[1],local_88), lVar2 = local_88[0],
     iVar1 != 0)) {
    FUN_1800014a0(local_78,*param_2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  if ((lVar2 != 0) && (iVar1 = napi_create_reference(*param_1,lVar2,1,param_1 + 1), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_98,local_90);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  return param_1;
}

