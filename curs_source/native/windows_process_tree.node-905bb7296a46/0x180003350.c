
/* Address: 0x180003350; Evidence: ev_40e02675542277f03fea9d59f85e59edb508b820570cafc6c32ef4e418131484 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180003350(undefined8 *param_1,undefined8 *param_2,longlong *param_3)

{
  int iVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined1 auStack_e8 [32];
  longlong local_c8;
  undefined8 *local_c0;
  char local_b8 [8];
  undefined8 local_b0;
  undefined8 local_a8;
  undefined8 uStack_a0;
  undefined8 local_98;
  undefined8 local_90;
  longlong local_88 [10];
  ulonglong local_38;
  
  local_38 = DAT_180023000 ^ (ulonglong)auStack_e8;
  local_98 = *param_1;
  iVar1 = napi_open_escapable_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014a0(local_88,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_88,&DAT_180021cb0);
  }
  uVar2 = *param_1;
  if (param_1[1] == 0) {
    uVar3 = 0;
  }
  else {
    iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_a8);
    uVar2 = *param_1;
    uVar3 = local_a8;
    if (iVar1 != 0) {
      FUN_1800014a0(local_88,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_88,&DAT_180021cb0);
    }
  }
  local_a8 = uVar2;
  iVar1 = napi_get_undefined(uVar2,&local_b0);
  local_c0 = &local_a8;
  if (iVar1 != 0) {
    uVar2 = FUN_180001210(local_c0);
    FUN_1800014a0(local_88,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_88,&DAT_180021cb0);
  }
  local_c8 = *param_3;
  iVar1 = napi_call_function(uVar2,local_b0,uVar3,param_3[1] - local_c8 >> 3);
  if (iVar1 != 0) {
    FUN_1800014a0(local_88,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_88,&DAT_180021cb0);
  }
  iVar1 = napi_is_exception_pending(local_98,local_b8);
  if ((iVar1 == 0) && (local_b8[0] != '\0')) {
    uVar2 = *param_1;
    if (param_1[1] == 0) {
      uStack_a0 = 0;
    }
    else {
      iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_b0);
      uVar2 = *param_1;
      if (iVar1 != 0) {
        FUN_1800014a0(local_88,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_88,&DAT_180021cb0);
      }
      uStack_a0 = local_b0;
    }
    local_a8._0_4_ = (undefined4)uVar2;
    local_a8._4_4_ = (undefined4)((ulonglong)uVar2 >> 0x20);
    *(undefined4 *)param_2 = (undefined4)local_a8;
    *(undefined4 *)((longlong)param_2 + 4) = local_a8._4_4_;
    *(undefined4 *)(param_2 + 1) = (undefined4)uStack_a0;
    *(undefined4 *)((longlong)param_2 + 0xc) = uStack_a0._4_4_;
    local_a8 = uVar2;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  else {
    iVar1 = napi_escape_handle(local_98,local_90,local_a8,&local_b0);
    if (iVar1 != 0) {
      FUN_1800014a0(local_88,local_98);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_88,&DAT_180021cb0);
    }
    *param_2 = local_98;
    param_2[1] = local_b0;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  if (iVar1 == 0) {
    return param_2;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}

