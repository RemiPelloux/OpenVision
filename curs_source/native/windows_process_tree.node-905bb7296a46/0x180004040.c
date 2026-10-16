
/* Address: 0x180004040; Evidence: ev_ee69d0c7dfee5691566901d7c7de900db4cc8628c1569bae64c5f47af71c0b1b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004040(undefined8 *param_1,undefined8 *param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  undefined1 (*pauVar2) [32];
  undefined8 uVar3;
  int iVar4;
  ulonglong uVar5;
  undefined1 auStack_108 [32];
  char local_e8 [4];
  undefined4 local_e4;
  uint local_e0 [2];
  ulonglong local_d8;
  undefined8 local_d0;
  undefined8 uStack_c8;
  undefined1 local_c0;
  undefined7 uStack_bf;
  undefined8 uStack_b8;
  undefined8 local_b0;
  undefined8 *local_a8;
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_108;
  local_a8 = param_1;
  FUN_1800037b0(param_1,param_2,"windows-process-tree:cpuworker.OnOK");
  *param_1 = &PTR_FUN_18001f220;
  param_1[0xe] = 0;
  param_1[0xf] = 0;
  *(undefined1 *)(param_1 + 0x10) = 0;
  param_1[0x11] = 0;
  param_1[0x12] = 0;
  param_1[0x13] = 0;
  iVar4 = napi_get_array_length(*param_3,param_3[1],local_e0);
  uVar5 = 0;
  while( true ) {
    if (iVar4 != 0) {
      FUN_1800014a0(local_98,*param_3);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    if (local_e0[0] <= (uint)uVar5) {
      iVar4 = napi_get_array_length(*param_3,param_3[1],&local_e4);
      if (iVar4 != 0) {
        FUN_1800014a0(local_98,*param_3);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      *(undefined4 *)(param_1 + 0x14) = local_e4;
      uVar1 = *param_3;
      uVar5 = 0;
      if ((param_3[1] != 0) &&
         (iVar4 = napi_create_reference(uVar1,param_3[1],1,&local_d8), uVar5 = local_d8, iVar4 != 0)
         ) {
        FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      local_c0 = 0;
      if ((param_1[0xf] != 0) &&
         (local_d0 = uVar1, uStack_c8 = uVar5, iVar4 = napi_delete_reference(param_1[0xe]),
         iVar4 != 0)) {
        FUN_1800014a0(local_98,param_1[0xe]);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      param_1[0xe] = uVar1;
      param_1[0xf] = uVar5;
      *(undefined1 *)(param_1 + 0x10) = 0;
      return param_1;
    }
    iVar4 = napi_get_element(*param_3,param_3[1],uVar5,&local_b0);
    uVar3 = local_b0;
    uVar1 = *param_3;
    if (iVar4 != 0) {
      FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    iVar4 = napi_has_named_property(uVar1,local_b0,&DAT_18001f1c4,local_e8);
    if (iVar4 != 0) break;
    if (local_e8[0] != '\0') {
      iVar4 = napi_get_named_property(uVar1,uVar3,&DAT_18001f1c4,&local_d8);
      if (iVar4 != 0) {
        FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      iVar4 = napi_get_value_int32(uVar1,local_d8,&local_e4);
      if (iVar4 != 0) {
        FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      local_d0 = CONCAT44(local_d0._4_4_,local_e4);
    }
    pauVar2 = (undefined1 (*) [32])param_1[0x12];
    if (pauVar2 == (undefined1 (*) [32])param_1[0x13]) {
      FUN_180004b50(param_1 + 0x11,pauVar2,&local_d0);
    }
    else {
      *(undefined4 *)*pauVar2 = (undefined4)local_d0;
      *(undefined4 *)(*pauVar2 + 4) = local_d0._4_4_;
      *(undefined4 *)(*pauVar2 + 8) = (undefined4)uStack_c8;
      *(undefined4 *)(*pauVar2 + 0xc) = uStack_c8._4_4_;
      *(ulonglong *)(*pauVar2 + 0x10) = CONCAT71(uStack_bf,local_c0);
      *(undefined8 *)(*pauVar2 + 0x18) = uStack_b8;
      param_1[0x12] = param_1[0x12] + 0x20;
    }
    uVar5 = (ulonglong)((uint)uVar5 + 1);
    iVar4 = napi_get_array_length(*param_3,param_3[1],local_e0);
  }
  FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_98,&DAT_180021cb0);
}

