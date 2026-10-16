
/* Address: 0x1800027b0; Evidence: ev_ece611c9603379db02fb08f48b16a9c76e10eedff200ab70262cc639834ccdd3 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800027b0(longlong param_1)

{
  undefined8 *puVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  undefined1 auStack_c8 [32];
  char local_a8 [16];
  undefined8 *local_98;
  undefined8 *puStack_90;
  undefined8 *local_88;
  undefined8 *puStack_80;
  undefined8 *local_78;
  undefined8 *local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_c8;
  puVar3 = *(undefined8 **)(param_1 + 8);
  local_78 = puVar3;
  if (*(ulonglong *)(param_1 + 0x20) < 2) {
    uVar4 = FUN_180001210(&local_78);
    FUN_180001ea0(local_68,uVar4,0x18001f080);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021c18);
  }
  puStack_80 = (undefined8 *)**(longlong **)(param_1 + 0x28);
  local_88 = puVar3;
  if (puStack_80 != (undefined8 *)0x0) {
    iVar2 = napi_is_array(puVar3,puStack_80,local_a8);
    if (iVar2 != 0) {
      FUN_1800014a0(local_68,puVar3);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
    if (local_a8[0] != '\0') {
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
      local_88 = local_98;
      puStack_80 = puStack_90;
      iVar2 = FUN_1800012a0(&local_88);
      if (iVar2 != 7) {
        uVar4 = FUN_180001210(&local_78);
        FUN_180001ea0(local_68,uVar4,0x18001f100);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_68,&DAT_180021c18);
      }
      puVar3 = *(undefined8 **)(param_1 + 8);
      if (*(longlong *)(param_1 + 0x20) == 0) {
        local_88 = puVar3;
        iVar2 = napi_get_undefined(puVar3,&local_98);
        local_70 = local_98;
        if (iVar2 != 0) {
          uVar4 = FUN_180001210(&local_88);
          FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_68,&DAT_180021cb0);
        }
      }
      else {
        local_70 = (undefined8 *)**(undefined8 **)(param_1 + 0x28);
      }
      puVar1 = *(undefined8 **)(param_1 + 8);
      local_78 = puVar3;
      if (*(ulonglong *)(param_1 + 0x20) < 2) {
        local_88 = puVar1;
        iVar2 = napi_get_undefined(puVar1,&local_98);
        if (iVar2 != 0) {
          uVar4 = FUN_180001210(&local_88);
          FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_68,&DAT_180021cb0);
        }
      }
      else {
        local_98 = *(undefined8 **)(*(longlong *)(param_1 + 0x28) + 8);
      }
      puStack_90 = local_98;
      local_98 = puVar1;
      local_88 = (undefined8 *)FUN_1800062f8(0xa8);
      puVar3 = FUN_180004040(local_88,&local_98,&local_78);
      iVar2 = napi_queue_async_work(puVar3[1],puVar3[2]);
      if (iVar2 != 0) {
        FUN_1800014a0(local_68,puVar3[1]);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_68,&DAT_180021cb0);
      }
      return;
    }
  }
  uVar4 = FUN_180001210(&local_78);
  FUN_180001ea0(local_68,uVar4,0x18001f0b0);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_68,&DAT_180021c18);
}

