
/* Address: 0x1800035a0; Evidence: ev_20424349c5ae6e846ea4dd649be5d5585373fdb76c6952d15a5ac1a97b123944 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_1800035a0(undefined8 *param_1,undefined8 *param_2,undefined8 param_3,longlong *param_4)

{
  int iVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined1 auStack_f8 [32];
  longlong local_d8;
  undefined8 *local_d0;
  char local_c8 [8];
  undefined8 local_c0;
  undefined8 local_b8;
  undefined8 local_b0;
  undefined8 local_a8;
  undefined8 uStack_a0;
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_f8;
  local_b8 = *param_1;
  iVar1 = napi_open_escapable_handle_scope(local_b8,&local_b0);
  if (iVar1 != 0) {
    FUN_1800014a0(local_98,local_b8);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  uVar2 = *param_1;
  if (param_1[1] == 0) {
    uVar3 = 0;
  }
  else {
    iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_c0);
    uVar2 = *param_1;
    uVar3 = local_c0;
    if (iVar1 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
  }
  local_d8 = *param_4;
  local_d0 = &local_c0;
  iVar1 = napi_call_function(uVar2,param_3,uVar3,param_4[1] - local_d8 >> 3);
  if (iVar1 != 0) {
    FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  iVar1 = napi_is_exception_pending(local_b8,local_c8);
  if ((iVar1 == 0) && (local_c8[0] != '\0')) {
    uVar2 = *param_1;
    if (param_1[1] == 0) {
      uStack_a0 = 0;
    }
    else {
      iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_c0);
      uVar2 = *param_1;
      if (iVar1 != 0) {
        FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      uStack_a0 = local_c0;
    }
    local_a8._0_4_ = (undefined4)uVar2;
    local_a8._4_4_ = (undefined4)((ulonglong)uVar2 >> 0x20);
    *(undefined4 *)param_2 = (undefined4)local_a8;
    *(undefined4 *)((longlong)param_2 + 4) = local_a8._4_4_;
    *(undefined4 *)(param_2 + 1) = (undefined4)uStack_a0;
    *(undefined4 *)((longlong)param_2 + 0xc) = uStack_a0._4_4_;
    local_a8 = uVar2;
    iVar1 = napi_close_escapable_handle_scope(local_b8,local_b0);
  }
  else {
    iVar1 = napi_escape_handle(local_b8,local_b0,local_c0,&local_a8);
    if (iVar1 != 0) {
      FUN_1800014a0(local_98,local_b8);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    *param_2 = local_b8;
    param_2[1] = local_a8;
    iVar1 = napi_close_escapable_handle_scope(local_b8,local_b0);
  }
  if (iVar1 == 0) {
    return param_2;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}

