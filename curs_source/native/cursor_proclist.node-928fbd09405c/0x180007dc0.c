
/* Address: 0x180007dc0; Evidence: ev_5a931b253883399872031d39b44e6a83bf37ffae6137fbaf0f0e820d1645de3c */

/* WARNING: Removing unreachable block (ram,0x00018000803f) */
/* WARNING: Removing unreachable block (ram,0x000180008049) */
/* WARNING: Removing unreachable block (ram,0x000180008059) */
/* WARNING: Removing unreachable block (ram,0x0001800080cd) */
/* WARNING: Removing unreachable block (ram,0x00018000806e) */
/* WARNING: Removing unreachable block (ram,0x000180008071) */
/* WARNING: Removing unreachable block (ram,0x000180008079) */
/* WARNING: Removing unreachable block (ram,0x000180008093) */

undefined8 * FUN_180007dc0(float *param_1,undefined8 *param_2,byte *param_3,undefined4 *param_4)

{
  int iVar1;
  longlong *plVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  longlong lVar5;
  ulonglong uVar6;
  longlong *plVar7;
  ulonglong uVar8;
  float fVar9;
  ulonglong uVar10;
  undefined8 local_38;
  undefined8 *local_30;
  
  uVar8 = (((((ulonglong)*param_3 ^ 0xcbf29ce484222325) * 0x100000001b3 ^ (ulonglong)param_3[1]) *
            0x100000001b3 ^ (ulonglong)param_3[2]) * 0x100000001b3 ^ (ulonglong)param_3[3]) *
          0x100000001b3;
  plVar2 = *(longlong **)
            (*(longlong *)(param_1 + 6) + 8 + (uVar8 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
  plVar7 = *(longlong **)(param_1 + 2);
  if (plVar2 != *(longlong **)(param_1 + 2)) {
    iVar1 = (int)plVar2[2];
    while (*(int *)param_3 != iVar1) {
      plVar7 = plVar2;
      if (plVar2 == *(longlong **)
                     (*(longlong *)(param_1 + 6) + (uVar8 & *(ulonglong *)(param_1 + 0xc)) * 0x10))
      goto LAB_180007e76;
      plVar2 = (longlong *)plVar2[1];
      iVar1 = (int)plVar2[2];
    }
    plVar7 = (longlong *)*plVar2;
    if (plVar2 != (longlong *)0x0) {
      *param_2 = plVar2;
      *(undefined1 *)(param_2 + 1) = 0;
      return param_2;
    }
  }
LAB_180007e76:
  if (*(longlong *)(param_1 + 4) == 0x3ffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_18000a790(0x180022f20);
  }
  FUN_1800081c0(&local_38,param_1 + 2,(undefined4 *)param_3,param_4);
  uVar3 = *(ulonglong *)(param_1 + 0xe);
  if (*param_1 < (float)(*(longlong *)(param_1 + 4) + 1) / (float)uVar3) {
    uVar10 = FUN_180018710();
    lVar5 = 0;
    fVar9 = (float)uVar10;
    if ((9.223372e+18 <= fVar9) && (fVar9 = fVar9 - 9.223372e+18, fVar9 < 9.223372e+18)) {
      lVar5 = -0x8000000000000000;
    }
    uVar10 = 8;
    if (8 < (ulonglong)((longlong)fVar9 + lVar5)) {
      uVar10 = (longlong)fVar9 + lVar5;
    }
    uVar6 = uVar3;
    if ((uVar3 < uVar10) && ((0x1ff < uVar3 || (uVar6 = uVar3 * 8, uVar3 * 8 < uVar10)))) {
      uVar6 = uVar10;
    }
    FUN_180009010((longlong)param_1,uVar6);
    plVar2 = *(longlong **)
              (*(longlong *)(param_1 + 6) + 8 + (uVar8 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
    plVar7 = *(longlong **)(param_1 + 2);
    if (plVar2 != plVar7) {
      iVar1 = (int)plVar2[2];
      plVar7 = plVar2;
      while (*(int *)(local_30 + 2) != iVar1) {
        if (plVar7 == *(longlong **)
                       (*(longlong *)(param_1 + 6) + (uVar8 & *(ulonglong *)(param_1 + 0xc)) * 0x10)
           ) goto LAB_180007fdb;
        plVar7 = (longlong *)plVar7[1];
        iVar1 = (int)plVar7[2];
      }
      plVar7 = (longlong *)*plVar7;
    }
  }
LAB_180007fdb:
  puVar4 = (undefined8 *)plVar7[1];
  *(longlong *)(param_1 + 4) = *(longlong *)(param_1 + 4) + 1;
  *local_30 = plVar7;
  local_30[1] = puVar4;
  *puVar4 = local_30;
  plVar7[1] = (longlong)local_30;
  uVar8 = *(ulonglong *)(param_1 + 0xc) & uVar8;
  lVar5 = *(longlong *)(param_1 + 6);
  plVar2 = *(longlong **)(lVar5 + uVar8 * 0x10);
  if (plVar2 == *(longlong **)(param_1 + 2)) {
    *(undefined8 **)(lVar5 + uVar8 * 0x10) = local_30;
  }
  else {
    if (plVar2 == plVar7) {
      *(undefined8 **)(lVar5 + uVar8 * 0x10) = local_30;
      goto LAB_18000802d;
    }
    if (*(undefined8 **)(lVar5 + 8 + uVar8 * 0x10) != puVar4) goto LAB_18000802d;
  }
  *(undefined8 **)(lVar5 + 8 + uVar8 * 0x10) = local_30;
LAB_18000802d:
  *param_2 = local_30;
  *(undefined1 *)(param_2 + 1) = 1;
  return param_2;
}

