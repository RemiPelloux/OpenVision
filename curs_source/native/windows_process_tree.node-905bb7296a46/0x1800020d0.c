
/* Address: 0x1800020d0; Evidence: ev_40fe30f096b60b7b08be67dae1086fe27b31366edb46e281ae18da406df0e149 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800020d0(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined1 auStack_c8 [32];
  char local_a8 [8];
  undefined8 local_a0;
  undefined8 local_98;
  undefined8 local_90;
  undefined8 local_88;
  undefined8 uStack_80;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_c8;
  local_98 = *param_1;
  iVar1 = napi_open_escapable_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014a0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  uVar2 = *param_1;
  uVar3 = 0;
  if (param_1[1] != 0) {
    iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_a0);
    uVar2 = *param_1;
    uVar3 = local_a0;
    if (iVar1 != 0) {
      FUN_1800014a0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_78,&DAT_180021cb0);
    }
  }
  iVar1 = napi_get_named_property(uVar2,uVar3,"message",&local_a0);
  if (iVar1 != 0) {
    FUN_1800014a0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  iVar1 = napi_is_exception_pending(local_98,local_a8);
  if ((iVar1 == 0) && (local_a8[0] != '\0')) {
    uVar2 = *param_1;
    if (param_1[1] == 0) {
      uStack_80 = 0;
    }
    else {
      iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_a0);
      uVar2 = *param_1;
      if (iVar1 != 0) {
        FUN_1800014a0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_78,&DAT_180021cb0);
      }
      uStack_80 = local_a0;
    }
    local_88._0_4_ = (undefined4)uVar2;
    local_88._4_4_ = (undefined4)((ulonglong)uVar2 >> 0x20);
    *(undefined4 *)param_2 = (undefined4)local_88;
    *(undefined4 *)((longlong)param_2 + 4) = local_88._4_4_;
    *(undefined4 *)(param_2 + 1) = (undefined4)uStack_80;
    *(undefined4 *)((longlong)param_2 + 0xc) = uStack_80._4_4_;
    local_88 = uVar2;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  else {
    iVar1 = napi_escape_handle(local_98,local_90,local_a0,&local_88);
    if (iVar1 != 0) {
      FUN_1800014a0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_78,&DAT_180021cb0);
    }
    *param_2 = local_98;
    param_2[1] = local_88;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  if (iVar1 == 0) {
    return param_2;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}

