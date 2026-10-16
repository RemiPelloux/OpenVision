
/* Address: 0x180005b40; Evidence: ev_5dcef324b80ce385b4ab4c5047c2c518393f6c38e5ca1662b490adee8f6eca23 */

undefined8 * FUN_180005b40(float *param_1,undefined8 *param_2,byte *param_3)

{
  int iVar1;
  longlong *plVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  ulonglong uVar6;
  longlong lVar7;
  ulonglong uVar8;
  longlong *plVar9;
  float fVar10;
  ulonglong uVar11;
  
  uVar6 = (((((ulonglong)*param_3 ^ 0xcbf29ce484222325) * 0x100000001b3 ^ (ulonglong)param_3[1]) *
            0x100000001b3 ^ (ulonglong)param_3[2]) * 0x100000001b3 ^ (ulonglong)param_3[3]) *
          0x100000001b3;
  plVar2 = *(longlong **)
            (*(longlong *)(param_1 + 6) + 8 + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
  plVar9 = *(longlong **)(param_1 + 2);
  if (plVar2 != plVar9) {
    iVar1 = (int)plVar2[2];
    while (*(int *)param_3 != iVar1) {
      plVar9 = plVar2;
      if (plVar2 == *(longlong **)
                     (*(longlong *)(param_1 + 6) + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10))
      goto LAB_180005c0a;
      plVar2 = (longlong *)plVar2[1];
      iVar1 = (int)plVar2[2];
    }
    plVar9 = (longlong *)*plVar2;
    if (plVar2 != (longlong *)0x0) {
      *param_2 = plVar2;
      *(undefined1 *)(param_2 + 1) = 0;
      return param_2;
    }
  }
LAB_180005c0a:
  if (*(longlong *)(param_1 + 4) == 0xaaaaaaaaaaaaaaa) {
                    /* WARNING: Subroutine does not return */
    FUN_18000a790(0x180022f20);
  }
  puVar5 = operator_new(0x18);
  *(undefined4 *)(puVar5 + 2) = *(undefined4 *)param_3;
  uVar3 = *(ulonglong *)(param_1 + 0xe);
  if (*param_1 < (float)(*(longlong *)(param_1 + 4) + 1) / (float)uVar3) {
    uVar11 = FUN_180018710();
    lVar7 = 0;
    fVar10 = (float)uVar11;
    if ((9.223372e+18 <= fVar10) && (fVar10 = fVar10 - 9.223372e+18, fVar10 < 9.223372e+18)) {
      lVar7 = -0x8000000000000000;
    }
    uVar11 = 8;
    if (8 < (ulonglong)((longlong)fVar10 + lVar7)) {
      uVar11 = (longlong)fVar10 + lVar7;
    }
    uVar8 = uVar3;
    if ((uVar3 < uVar11) && ((0x1ff < uVar3 || (uVar8 = uVar3 * 8, uVar3 * 8 < uVar11)))) {
      uVar8 = uVar11;
    }
    FUN_180006ae0((longlong)param_1,uVar8);
    plVar2 = *(longlong **)
              (*(longlong *)(param_1 + 6) + 8 + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
    plVar9 = *(longlong **)(param_1 + 2);
    if (plVar2 != plVar9) {
      iVar1 = (int)plVar2[2];
      plVar9 = plVar2;
      while (*(int *)(puVar5 + 2) != iVar1) {
        if (plVar9 == *(longlong **)
                       (*(longlong *)(param_1 + 6) + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10)
           ) goto LAB_180005d85;
        plVar9 = (longlong *)plVar9[1];
        iVar1 = (int)plVar9[2];
      }
      plVar9 = (longlong *)*plVar9;
    }
  }
LAB_180005d85:
  puVar4 = (undefined8 *)plVar9[1];
  *(longlong *)(param_1 + 4) = *(longlong *)(param_1 + 4) + 1;
  *puVar5 = plVar9;
  puVar5[1] = puVar4;
  *puVar4 = puVar5;
  plVar9[1] = (longlong)puVar5;
  uVar6 = *(ulonglong *)(param_1 + 0xc) & uVar6;
  lVar7 = *(longlong *)(param_1 + 6);
  plVar2 = *(longlong **)(lVar7 + uVar6 * 0x10);
  if (plVar2 == *(longlong **)(param_1 + 2)) {
    *(undefined8 **)(lVar7 + uVar6 * 0x10) = puVar5;
  }
  else {
    if (plVar2 == plVar9) {
      *(undefined8 **)(lVar7 + uVar6 * 0x10) = puVar5;
      goto LAB_180005dcf;
    }
    if (*(undefined8 **)(lVar7 + 8 + uVar6 * 0x10) != puVar4) goto LAB_180005dcf;
  }
  *(undefined8 **)(lVar7 + 8 + uVar6 * 0x10) = puVar5;
LAB_180005dcf:
  *param_2 = puVar5;
  *(undefined1 *)(param_2 + 1) = 1;
  return param_2;
}

