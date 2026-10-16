
/* Address: 0x1800044f0; Evidence: ev_acda14f37708b3e2a8e453b510f7fc9b6f276aae52c68e3f037fe8c102a02015 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800044f0(longlong param_1)

{
  undefined8 uVar1;
  undefined8 uVar2;
  ulonglong uVar3;
  ulonglong uVar4;
  ulonglong uVar5;
  int iVar6;
  ulonglong uVar7;
  uint uVar8;
  undefined8 uVar9;
  undefined1 auStack_118 [32];
  ulonglong local_f8;
  ulonglong local_f0 [2];
  ulonglong *local_e0;
  ulonglong *local_d8;
  undefined8 local_d0;
  undefined8 local_c8;
  undefined8 local_c0 [5];
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_118;
  local_d0 = *(undefined8 *)(param_1 + 8);
  iVar6 = napi_open_handle_scope(local_d0,&local_c8);
  if (iVar6 != 0) {
    FUN_1800014a0(local_98,local_d0);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  uVar1 = *(undefined8 *)(param_1 + 8);
  uVar8 = 0;
  if (*(longlong *)(param_1 + 0x78) == 0) {
    uVar9 = 0;
  }
  else {
    iVar6 = napi_get_reference_value
                      (*(undefined8 *)(param_1 + 0x70),*(longlong *)(param_1 + 0x78),local_c0);
    uVar9 = local_c0[0];
    if (iVar6 != 0) {
      FUN_1800014a0(local_98,*(undefined8 *)(param_1 + 0x70));
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
  }
  uVar2 = *(undefined8 *)(param_1 + 0x70);
  iVar6 = napi_get_array_length(uVar2,uVar9,&local_f8);
  if (iVar6 != 0) {
    FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  iVar6 = napi_create_array_with_length(uVar1,local_f8 & 0xffffffff,local_f0);
  if (iVar6 != 0) {
    FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  iVar6 = napi_get_array_length(uVar2,uVar9,&local_f8);
  uVar4 = local_f0[0];
  do {
    if (iVar6 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    if ((uint)local_f8 <= uVar8) {
      local_f8 = uVar4;
      local_e0 = &local_f8;
      local_d8 = local_f0;
      FUN_180003350((undefined8 *)(param_1 + 0x30),local_f0,(longlong *)&local_e0);
      iVar6 = napi_close_handle_scope(local_d0,local_c8);
      if (iVar6 == 0) {
        return;
      }
                    /* WARNING: Subroutine does not return */
      FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    uVar3 = *(ulonglong *)((ulonglong)uVar8 * 0x20 + *(longlong *)(param_1 + 0x88) + 8);
    iVar6 = napi_get_element(uVar2,uVar9,uVar8,local_f0);
    if (iVar6 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    uVar7 = thunk_FUN_180015020(uVar3);
    uVar5 = local_f0[0];
    if ((short)uVar7 != 2) {
      iVar6 = napi_create_double(uVar1,(int)uVar3,&local_e0);
      if (iVar6 != 0) {
        FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      iVar6 = napi_set_named_property(uVar2,uVar5,&DAT_18001f1c8,local_e0);
      if (iVar6 != 0) {
        FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
    }
    iVar6 = napi_set_element(uVar1,uVar4,uVar8,uVar5);
    if (iVar6 != 0) {
      FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    uVar8 = uVar8 + 1;
    iVar6 = napi_get_array_length(uVar2,uVar9,&local_f8);
  } while( true );
}

