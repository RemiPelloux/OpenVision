
/* Address: 0x180002330; Evidence: ev_f7ed29d17e25743ed890b11527cdf00cb3984ee14c3b289ec08c6a012bedf2c0 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180002330(longlong param_1)

{
  undefined8 *puVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  undefined8 *puVar5;
  undefined1 auStack_c8 [32];
  undefined8 *local_a8 [2];
  undefined8 *local_98;
  undefined8 *puStack_90;
  undefined8 *local_88;
  undefined8 uStack_80;
  undefined8 *local_78;
  undefined8 *puStack_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_c8;
  local_a8[0] = *(undefined8 **)(param_1 + 8);
  if (*(ulonglong *)(param_1 + 0x20) < 2) {
    uVar4 = FUN_180001210(local_a8);
    FUN_180001ea0(local_68,uVar4,0x18001efc0);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021c18);
  }
  uStack_80 = **(undefined8 **)(param_1 + 0x28);
  local_88 = local_a8[0];
  local_78 = local_a8[0];
  puStack_70 = (undefined8 *)uStack_80;
  iVar2 = FUN_1800012a0(&local_78);
  if (iVar2 != 7) {
    uVar4 = FUN_180001210(local_a8);
    FUN_180001ea0(local_68,uVar4,0x18001eff0);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021c18);
  }
  if (*(ulonglong *)(param_1 + 0x20) < 2) {
    puVar3 = *(undefined8 **)(param_1 + 8);
    local_98 = puVar3;
    iVar2 = napi_get_undefined(puVar3,&local_88);
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(&local_98);
      FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
    puStack_90 = local_88;
    local_98 = puVar3;
  }
  else {
    puStack_90 = *(undefined8 **)(*(longlong *)(param_1 + 0x28) + 8);
    local_98 = *(undefined8 **)(param_1 + 8);
  }
  local_78 = local_98;
  puStack_70 = puStack_90;
  iVar2 = FUN_1800012a0(&local_78);
  if (iVar2 != 3) {
    uVar4 = FUN_180001210(local_a8);
    FUN_180001ea0(local_68,uVar4,0x18001f040);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021c18);
  }
  puVar3 = *(undefined8 **)(param_1 + 8);
  if (*(longlong *)(param_1 + 0x20) == 0) {
    local_88 = puVar3;
    iVar2 = napi_get_undefined(puVar3,&local_98);
    puVar5 = local_98;
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(&local_88);
      FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  else {
    puVar5 = (undefined8 *)**(undefined8 **)(param_1 + 0x28);
  }
  puVar1 = *(undefined8 **)(param_1 + 8);
  local_78 = puVar3;
  puStack_70 = puVar5;
  if (*(ulonglong *)(param_1 + 0x20) < 2) {
    local_88 = puVar1;
    iVar2 = napi_get_undefined(puVar1,&local_98);
    puVar3 = local_98;
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(&local_88);
      FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  else {
    puVar3 = *(undefined8 **)(*(longlong *)(param_1 + 0x28) + 8);
  }
  iVar2 = napi_get_value_int32(puVar1,puVar3,local_a8);
  if (iVar2 != 0) {
    FUN_1800014a0(local_68,puVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  puVar3 = (undefined8 *)FUN_1800062f8(0x90);
  local_88 = puVar3;
  FUN_1800037b0(puVar3,&local_78,"windows-process-tree:addon.HandleOKCallback");
  *puVar3 = &PTR_FUN_18001f2b8;
  puVar3[0xe] = 0;
  puVar3[0xf] = 0;
  puVar3[0x10] = 0;
  *(undefined4 *)(puVar3 + 0x11) = 0;
  *(undefined4 *)((longlong)puVar3 + 0x8c) = local_a8[0]._0_4_;
  iVar2 = napi_queue_async_work(puVar3[1],puVar3[2]);
  if (iVar2 != 0) {
    FUN_1800014a0(local_68,puVar3[1]);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  return;
}

