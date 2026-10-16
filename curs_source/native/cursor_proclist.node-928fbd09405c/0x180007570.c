
/* Address: 0x180007570; Evidence: ev_8ceed0cae3804596e6ef9533eb82d420ba82cb3f5d1f5557ba924bc1bf26b85a */

undefined4 * FUN_180007570(undefined4 *param_1,undefined4 *param_2)

{
  undefined4 *puVar1;
  ulonglong uVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  longlong *plVar5;
  undefined8 local_res8;
  
  if (param_1 != param_2) {
    uVar2 = *(ulonglong *)(param_1 + 4);
    if (uVar2 != 0) {
      puVar3 = *(undefined8 **)(param_1 + 2);
      if (uVar2 < *(ulonglong *)(param_1 + 0xe) >> 3) {
        FUN_180008aa0((longlong)param_1,(undefined8 *)*puVar3,puVar3);
      }
      else {
        FUN_180008d40(uVar2,puVar3);
        *(undefined8 *)*(undefined8 *)(param_1 + 2) = *(undefined8 *)(param_1 + 2);
        *(longlong *)(*(longlong *)(param_1 + 2) + 8) = *(longlong *)(param_1 + 2);
        *(undefined8 *)(param_1 + 4) = 0;
        local_res8 = *(undefined8 *)(param_1 + 2);
        FUN_1800086a0(*(undefined8 **)(param_1 + 6),*(undefined8 **)(param_1 + 8),&local_res8);
      }
    }
    *param_1 = *param_2;
    uVar4 = *(undefined8 *)(param_1 + 2);
    *(undefined8 *)(param_1 + 2) = *(undefined8 *)(param_2 + 2);
    *(undefined8 *)(param_2 + 2) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 4);
    *(undefined8 *)(param_1 + 4) = *(undefined8 *)(param_2 + 4);
    *(undefined8 *)(param_2 + 4) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 6);
    *(undefined8 *)(param_1 + 6) = *(undefined8 *)(param_2 + 6);
    *(undefined8 *)(param_2 + 6) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 8);
    *(undefined8 *)(param_1 + 8) = *(undefined8 *)(param_2 + 8);
    *(undefined8 *)(param_2 + 8) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 10);
    *(undefined8 *)(param_1 + 10) = *(undefined8 *)(param_2 + 10);
    *(undefined8 *)(param_2 + 10) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0xc);
    *(undefined8 *)(param_1 + 0xc) = *(undefined8 *)(param_2 + 0xc);
    *(undefined8 *)(param_2 + 0xc) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0xe);
    *(undefined8 *)(param_1 + 0xe) = *(undefined8 *)(param_2 + 0xe);
    *(undefined8 *)(param_2 + 0xe) = uVar4;
  }
  puVar1 = param_1 + 0x10;
  if (puVar1 != param_2 + 0x10) {
    uVar2 = *(ulonglong *)(param_1 + 0x14);
    if (uVar2 != 0) {
      plVar5 = *(longlong **)(param_1 + 0x12);
      if (uVar2 < *(ulonglong *)(param_1 + 0x1e) >> 3) {
        FUN_1800087d0((longlong)puVar1,(longlong *)*plVar5,plVar5);
      }
      else {
        FUN_180008c90(uVar2,plVar5);
        *(undefined8 *)*(undefined8 *)(param_1 + 0x12) = *(undefined8 *)(param_1 + 0x12);
        *(longlong *)(*(longlong *)(param_1 + 0x12) + 8) = *(longlong *)(param_1 + 0x12);
        *(undefined8 *)(param_1 + 0x14) = 0;
        local_res8 = *(undefined8 *)(param_1 + 0x12);
        FUN_180008330(*(undefined8 **)(param_1 + 0x16),*(undefined8 **)(param_1 + 0x18),&local_res8)
        ;
      }
    }
    *puVar1 = param_2[0x10];
    uVar4 = *(undefined8 *)(param_1 + 0x12);
    *(undefined8 *)(param_1 + 0x12) = *(undefined8 *)(param_2 + 0x12);
    *(undefined8 *)(param_2 + 0x12) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x14);
    *(undefined8 *)(param_1 + 0x14) = *(undefined8 *)(param_2 + 0x14);
    *(undefined8 *)(param_2 + 0x14) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x16);
    *(undefined8 *)(param_1 + 0x16) = *(undefined8 *)(param_2 + 0x16);
    *(undefined8 *)(param_2 + 0x16) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x18);
    *(undefined8 *)(param_1 + 0x18) = *(undefined8 *)(param_2 + 0x18);
    *(undefined8 *)(param_2 + 0x18) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x1a);
    *(undefined8 *)(param_1 + 0x1a) = *(undefined8 *)(param_2 + 0x1a);
    *(undefined8 *)(param_2 + 0x1a) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x1c);
    *(undefined8 *)(param_1 + 0x1c) = *(undefined8 *)(param_2 + 0x1c);
    *(undefined8 *)(param_2 + 0x1c) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x1e);
    *(undefined8 *)(param_1 + 0x1e) = *(undefined8 *)(param_2 + 0x1e);
    *(undefined8 *)(param_2 + 0x1e) = uVar4;
  }
  return param_1;
}

