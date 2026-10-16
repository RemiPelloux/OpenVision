
/* Address: 0x180002630; Evidence: ev_817a64eabce0ffdee04e05e520241a9282a31fd5c8fe0e31e017aef4a104b28c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002630(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_a8;
  local_80 = *(undefined8 *)(param_2 + 0x18);
  param_1[3] = local_80;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  local_88 = param_1;
  iVar1 = napi_open_handle_scope(local_80,local_78);
  if (iVar1 != 0) {
    FUN_1800014a0(local_68,local_80);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  puVar2 = (undefined8 *)0x0;
  if ((*(longlong *)(param_2 + 0x20) != 0) &&
     (iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_2 + 0x18),*(longlong *)(param_2 + 0x20),&local_88),
     puVar2 = local_88, iVar1 != 0)) {
    FUN_1800014a0(local_68,*(undefined8 *)(param_2 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(param_1[3],puVar2,1,param_1 + 4), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_80,local_78[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  param_1[1] = 0;
  param_1[2] = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  *param_1 = &PTR_FUN_18001f190;
  return param_1;
}

