
/* Address: 0x18000ef50; Evidence: ev_bcaa7f8ca915990ce4d385c6790ebf396dd03ac2ce586cf24323ab992d0eaf4a */

void FUN_18000ef50(undefined1 (*param_1) [32],undefined1 (*param_2) [32],ulonglong param_3)

{
  undefined8 *puVar1;
  undefined8 *puVar2;
  undefined1 auVar3 [32];
  undefined1 auVar4 [32];
  undefined1 auVar5 [32];
  undefined1 auVar6 [32];
  undefined1 uVar7;
  undefined2 uVar8;
  undefined4 uVar9;
  undefined8 uVar10;
  undefined8 uVar11;
  undefined8 uVar12;
  undefined8 uVar13;
  undefined8 uVar14;
  undefined8 uVar15;
  undefined8 uVar16;
  undefined8 uVar17;
  undefined8 uVar18;
  undefined8 uVar19;
  undefined8 uVar20;
  undefined8 uVar21;
  undefined8 uVar22;
  undefined8 uVar23;
  undefined8 uVar24;
  undefined8 uVar25;
  undefined8 uVar26;
  undefined8 uVar27;
  undefined8 uVar28;
  undefined8 uVar29;
  undefined8 uVar30;
  undefined1 (*pauVar31) [32];
  undefined1 (*pauVar32) [32];
  undefined8 *puVar33;
  undefined8 *puVar34;
  undefined1 (*pauVar35) [32];
  longlong lVar36;
  ulonglong uVar37;
  ulonglong uVar38;
  undefined8 uVar39;
  undefined8 uVar40;
  
  if (param_3 < 0x10) {
    switch(param_3 & 0xf) {
    case 0:
      return;
    case 1:
      (*param_1)[0] = (*param_2)[0];
      return;
    case 2:
      *(undefined2 *)*param_1 = *(undefined2 *)*param_2;
      return;
    case 3:
      uVar7 = (*param_2)[2];
      *(undefined2 *)*param_1 = *(undefined2 *)*param_2;
      (*param_1)[2] = uVar7;
      return;
    case 4:
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      return;
    case 5:
      uVar7 = (*param_2)[4];
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      (*param_1)[4] = uVar7;
      return;
    case 6:
      uVar8 = *(undefined2 *)(*param_2 + 4);
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      *(undefined2 *)(*param_1 + 4) = uVar8;
      return;
    case 7:
      uVar8 = *(undefined2 *)(*param_2 + 4);
      uVar7 = (*param_2)[6];
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      *(undefined2 *)(*param_1 + 4) = uVar8;
      (*param_1)[6] = uVar7;
      return;
    case 8:
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      return;
    case 9:
      uVar7 = (*param_2)[8];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      (*param_1)[8] = uVar7;
      return;
    case 10:
      uVar8 = *(undefined2 *)(*param_2 + 8);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined2 *)(*param_1 + 8) = uVar8;
      return;
    case 0xb:
      uVar8 = *(undefined2 *)(*param_2 + 8);
      uVar7 = (*param_2)[10];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined2 *)(*param_1 + 8) = uVar8;
      (*param_1)[10] = uVar7;
      return;
    case 0xc:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      return;
    case 0xd:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar7 = (*param_2)[0xc];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      (*param_1)[0xc] = uVar7;
      return;
    case 0xe:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar8 = *(undefined2 *)(*param_2 + 0xc);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      *(undefined2 *)(*param_1 + 0xc) = uVar8;
      return;
    case 0xf:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar8 = *(undefined2 *)(*param_2 + 0xc);
      uVar7 = (*param_2)[0xe];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      *(undefined2 *)(*param_1 + 0xc) = uVar8;
      (*param_1)[0xe] = uVar7;
      return;
    }
  }
  if (param_3 < 0x21) {
    uVar10 = *(undefined8 *)(*param_2 + 8);
    uVar11 = *(undefined8 *)(param_2[-1] + param_3 + 0x10);
    uVar12 = *(undefined8 *)((longlong)(param_2[-1] + param_3 + 0x10) + 8);
    *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
    *(undefined8 *)(*param_1 + 8) = uVar10;
    *(undefined8 *)(param_1[-1] + param_3 + 0x10) = uVar11;
    *(undefined8 *)((longlong)(param_1[-1] + param_3 + 0x10) + 8) = uVar12;
    return;
  }
  pauVar31 = (undefined1 (*) [32])(*param_2 + param_3);
  if (param_1 <= param_2) {
    pauVar31 = param_1;
  }
  if (param_1 < pauVar31) {
    uVar10 = *(undefined8 *)*param_2;
    uVar11 = *(undefined8 *)(*param_2 + 8);
    lVar36 = (longlong)param_2 - (longlong)param_1;
    puVar33 = (undefined8 *)((longlong)param_1 + lVar36 + (param_3 - 0x10));
    uVar12 = *puVar33;
    uVar13 = puVar33[1];
    puVar34 = (undefined8 *)(param_1[-1] + param_3 + 0x10);
    uVar37 = param_3 - 0x10;
    puVar33 = puVar34;
    uVar39 = uVar12;
    uVar40 = uVar13;
    if (((ulonglong)puVar34 & 0xf) != 0) {
      puVar33 = (undefined8 *)((ulonglong)puVar34 & 0xfffffffffffffff0);
      uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
      uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
      *puVar34 = uVar12;
      *(undefined8 *)(param_1[-1] + param_3 + 0x18) = uVar13;
      uVar37 = (longlong)puVar33 - (longlong)param_1;
    }
    uVar38 = uVar37 >> 7;
    if (uVar38 != 0) {
      *puVar33 = uVar39;
      puVar33[1] = uVar40;
      puVar34 = puVar33;
      while( true ) {
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x10);
        uVar12 = puVar1[1];
        puVar33 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x20);
        uVar13 = *puVar33;
        uVar39 = puVar33[1];
        puVar33 = puVar34 + -0x10;
        puVar34[-2] = *puVar1;
        puVar34[-1] = uVar12;
        puVar34[-4] = uVar13;
        puVar34[-3] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x30);
        uVar12 = puVar1[1];
        puVar2 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x40);
        uVar13 = *puVar2;
        uVar39 = puVar2[1];
        uVar38 = uVar38 - 1;
        puVar34[-6] = *puVar1;
        puVar34[-5] = uVar12;
        puVar34[-8] = uVar13;
        puVar34[-7] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x50);
        uVar12 = puVar1[1];
        puVar2 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x60);
        uVar13 = *puVar2;
        uVar39 = puVar2[1];
        puVar34[-10] = *puVar1;
        puVar34[-9] = uVar12;
        puVar34[-0xc] = uVar13;
        puVar34[-0xb] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x70);
        uVar12 = *puVar1;
        uVar13 = puVar1[1];
        uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
        uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
        if (uVar38 == 0) break;
        puVar34[-0xe] = uVar12;
        puVar34[-0xd] = uVar13;
        *puVar33 = uVar39;
        puVar34[-0xf] = uVar40;
        puVar34 = puVar33;
      }
      puVar34[-0xe] = uVar12;
      puVar34[-0xd] = uVar13;
      uVar37 = uVar37 & 0x7f;
    }
    for (uVar38 = uVar37 >> 4; uVar38 != 0; uVar38 = uVar38 - 1) {
      *puVar33 = uVar39;
      puVar33[1] = uVar40;
      puVar33 = puVar33 + -2;
      uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
      uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
    }
    if ((uVar37 & 0xf) != 0) {
      *(undefined8 *)*param_1 = uVar10;
      *(undefined8 *)(*param_1 + 8) = uVar11;
    }
    *puVar33 = uVar39;
    puVar33[1] = uVar40;
    return;
  }
  if (DAT_18001b058 < 3) {
    if ((param_3 < 0x801) || (((byte)DAT_18001c130 & 2) == 0)) {
      uVar10 = *(undefined8 *)*param_2;
      uVar11 = *(undefined8 *)(*param_2 + 8);
      uVar12 = *(undefined8 *)(param_2[-1] + param_3 + 0x10);
      uVar13 = *(undefined8 *)((longlong)(param_2[-1] + param_3 + 0x10) + 8);
      pauVar31 = param_1;
      if (0x80 < param_3) {
        lVar36 = ((ulonglong)param_1 & 0xf) - 0x10;
        pauVar31 = (undefined1 (*) [32])((longlong)param_1 - lVar36);
        param_2 = (undefined1 (*) [32])((longlong)param_2 - lVar36);
        param_3 = param_3 + lVar36;
        if (0x80 < param_3) {
          do {
            uVar39 = *(undefined8 *)(*param_2 + 8);
            uVar40 = *(undefined8 *)(*param_2 + 0x10);
            uVar14 = *(undefined8 *)(*param_2 + 0x18);
            uVar15 = *(undefined8 *)param_2[1];
            uVar16 = *(undefined8 *)(param_2[1] + 8);
            uVar17 = *(undefined8 *)(param_2[1] + 0x10);
            uVar18 = *(undefined8 *)(param_2[1] + 0x18);
            *(undefined8 *)*pauVar31 = *(undefined8 *)*param_2;
            *(undefined8 *)(*pauVar31 + 8) = uVar39;
            *(undefined8 *)(*pauVar31 + 0x10) = uVar40;
            *(undefined8 *)(*pauVar31 + 0x18) = uVar14;
            *(undefined8 *)pauVar31[1] = uVar15;
            *(undefined8 *)(pauVar31[1] + 8) = uVar16;
            *(undefined8 *)(pauVar31[1] + 0x10) = uVar17;
            *(undefined8 *)(pauVar31[1] + 0x18) = uVar18;
            uVar39 = *(undefined8 *)(param_2[2] + 8);
            uVar40 = *(undefined8 *)(param_2[2] + 0x10);
            uVar14 = *(undefined8 *)(param_2[2] + 0x18);
            uVar15 = *(undefined8 *)param_2[3];
            uVar16 = *(undefined8 *)(param_2[3] + 8);
            uVar17 = *(undefined8 *)(param_2[3] + 0x10);
            uVar18 = *(undefined8 *)(param_2[3] + 0x18);
            *(undefined8 *)pauVar31[2] = *(undefined8 *)param_2[2];
            *(undefined8 *)(pauVar31[2] + 8) = uVar39;
            *(undefined8 *)(pauVar31[2] + 0x10) = uVar40;
            *(undefined8 *)(pauVar31[2] + 0x18) = uVar14;
            *(undefined8 *)pauVar31[3] = uVar15;
            *(undefined8 *)(pauVar31[3] + 8) = uVar16;
            *(undefined8 *)(pauVar31[3] + 0x10) = uVar17;
            *(undefined8 *)(pauVar31[3] + 0x18) = uVar18;
            pauVar31 = pauVar31 + 4;
            param_2 = param_2 + 4;
            param_3 = param_3 - 0x80;
          } while (0x7f < param_3);
        }
      }
      uVar37 = param_3 + 0xf & 0xfffffffffffffff0;
      switch(param_3 + 0xf >> 4 & 0xf) {
      case 8:
        uVar39 = *(undefined8 *)((longlong)(param_2[-4] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-4] + uVar37) = *(undefined8 *)(param_2[-4] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-4] + uVar37) + 8) = uVar39;
      case 7:
        uVar39 = *(undefined8 *)((longlong)(param_2[-4] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-4] + uVar37 + 0x10) = *(undefined8 *)(param_2[-4] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-4] + uVar37 + 0x10) + 8) = uVar39;
      case 6:
        uVar39 = *(undefined8 *)((longlong)(param_2[-3] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-3] + uVar37) = *(undefined8 *)(param_2[-3] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-3] + uVar37) + 8) = uVar39;
      case 5:
        uVar39 = *(undefined8 *)((longlong)(param_2[-3] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-3] + uVar37 + 0x10) = *(undefined8 *)(param_2[-3] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-3] + uVar37 + 0x10) + 8) = uVar39;
      case 4:
        uVar39 = *(undefined8 *)((longlong)(param_2[-2] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-2] + uVar37) = *(undefined8 *)(param_2[-2] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-2] + uVar37) + 8) = uVar39;
      case 3:
        uVar39 = *(undefined8 *)((longlong)(param_2[-2] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-2] + uVar37 + 0x10) = *(undefined8 *)(param_2[-2] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-2] + uVar37 + 0x10) + 8) = uVar39;
      case 2:
        uVar39 = *(undefined8 *)((longlong)(param_2[-1] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-1] + uVar37) = *(undefined8 *)(param_2[-1] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-1] + uVar37) + 8) = uVar39;
      case 1:
        *(undefined8 *)(pauVar31[-1] + param_3 + 0x10) = uVar12;
        *(undefined8 *)((longlong)(pauVar31[-1] + param_3 + 0x10) + 8) = uVar13;
      default:
        *(undefined8 *)*param_1 = uVar10;
        *(undefined8 *)(*param_1 + 8) = uVar11;
        return;
      }
    }
code_r0x00018000ef4b:
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*param_1)[0] = (*param_2)[0];
      param_2 = (undefined1 (*) [32])(*param_2 + 1);
      param_1 = (undefined1 (*) [32])(*param_1 + 1);
    }
    return;
  }
  if (((0x2000 < param_3) && (param_3 < 0x180001)) && (((byte)DAT_18001c130 & 2) != 0))
  goto code_r0x00018000ef4b;
  uVar10 = *(undefined8 *)*param_2;
  uVar11 = *(undefined8 *)(*param_2 + 8);
  uVar12 = *(undefined8 *)(*param_2 + 0x10);
  uVar13 = *(undefined8 *)(*param_2 + 0x18);
  puVar33 = (undefined8 *)(param_2[-1] + param_3);
  uVar39 = *puVar33;
  uVar40 = puVar33[1];
  uVar14 = puVar33[2];
  uVar15 = puVar33[3];
  pauVar31 = param_1;
  if (0x100 < param_3) {
    lVar36 = ((ulonglong)param_1 & 0x1f) - 0x20;
    pauVar31 = (undefined1 (*) [32])((longlong)param_1 - lVar36);
    param_2 = (undefined1 (*) [32])((longlong)param_2 - lVar36);
    param_3 = param_3 + lVar36;
    if (0x100 < param_3) {
      if (0x180000 < param_3) {
        do {
          uVar37 = param_3;
          pauVar35 = param_2;
          pauVar32 = pauVar31;
          auVar3 = pauVar35[1];
          auVar4 = pauVar35[2];
          auVar5 = pauVar35[3];
          auVar6 = vmovntdq_avx(*pauVar35);
          *pauVar32 = auVar6;
          auVar3 = vmovntdq_avx(auVar3);
          pauVar32[1] = auVar3;
          auVar3 = vmovntdq_avx(auVar4);
          pauVar32[2] = auVar3;
          auVar3 = vmovntdq_avx(auVar5);
          pauVar32[3] = auVar3;
          auVar3 = pauVar35[5];
          auVar4 = pauVar35[6];
          auVar5 = pauVar35[7];
          auVar6 = vmovntdq_avx(pauVar35[4]);
          pauVar32[4] = auVar6;
          auVar3 = vmovntdq_avx(auVar3);
          pauVar32[5] = auVar3;
          auVar3 = vmovntdq_avx(auVar4);
          pauVar32[6] = auVar3;
          auVar3 = vmovntdq_avx(auVar5);
          pauVar32[7] = auVar3;
          pauVar31 = pauVar32 + 8;
          param_2 = pauVar35 + 8;
          param_3 = uVar37 - 0x100;
        } while (0xff < uVar37 - 0x100);
        uVar38 = uVar37 - 0xe1 & 0xffffffffffffffe0;
        switch(uVar37 - 0xe1 >> 5 & 0xf) {
        case 8:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(*pauVar35 + uVar38));
          *(undefined1 (*) [32])(*pauVar32 + uVar38) = auVar3;
        case 7:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[1] + uVar38));
          *(undefined1 (*) [32])(pauVar32[1] + uVar38) = auVar3;
        case 6:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[2] + uVar38));
          *(undefined1 (*) [32])(pauVar32[2] + uVar38) = auVar3;
        case 5:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[3] + uVar38));
          *(undefined1 (*) [32])(pauVar32[3] + uVar38) = auVar3;
        case 4:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[4] + uVar38));
          *(undefined1 (*) [32])(pauVar32[4] + uVar38) = auVar3;
        case 3:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[5] + uVar38));
          *(undefined1 (*) [32])(pauVar32[5] + uVar38) = auVar3;
        case 2:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[6] + uVar38));
          *(undefined1 (*) [32])(pauVar32[6] + uVar38) = auVar3;
        case 1:
          puVar33 = (undefined8 *)(pauVar32[-1] + uVar37);
          *puVar33 = uVar39;
          puVar33[1] = uVar40;
          puVar33[2] = uVar14;
          puVar33[3] = uVar15;
        case 0:
          *(undefined8 *)*param_1 = uVar10;
          *(undefined8 *)(*param_1 + 8) = uVar11;
          *(undefined8 *)(*param_1 + 0x10) = uVar12;
          *(undefined8 *)(*param_1 + 0x18) = uVar13;
          return;
        }
        goto switchD_18000f1d6_caseD_0;
      }
      do {
        uVar16 = *(undefined8 *)(*param_2 + 8);
        uVar17 = *(undefined8 *)(*param_2 + 0x10);
        uVar18 = *(undefined8 *)(*param_2 + 0x18);
        uVar19 = *(undefined8 *)param_2[1];
        uVar20 = *(undefined8 *)(param_2[1] + 8);
        uVar21 = *(undefined8 *)(param_2[1] + 0x10);
        uVar22 = *(undefined8 *)(param_2[1] + 0x18);
        uVar23 = *(undefined8 *)param_2[2];
        uVar24 = *(undefined8 *)(param_2[2] + 8);
        uVar25 = *(undefined8 *)(param_2[2] + 0x10);
        uVar26 = *(undefined8 *)(param_2[2] + 0x18);
        uVar27 = *(undefined8 *)param_2[3];
        uVar28 = *(undefined8 *)(param_2[3] + 8);
        uVar29 = *(undefined8 *)(param_2[3] + 0x10);
        uVar30 = *(undefined8 *)(param_2[3] + 0x18);
        *(undefined8 *)*pauVar31 = *(undefined8 *)*param_2;
        *(undefined8 *)(*pauVar31 + 8) = uVar16;
        *(undefined8 *)(*pauVar31 + 0x10) = uVar17;
        *(undefined8 *)(*pauVar31 + 0x18) = uVar18;
        *(undefined8 *)pauVar31[1] = uVar19;
        *(undefined8 *)(pauVar31[1] + 8) = uVar20;
        *(undefined8 *)(pauVar31[1] + 0x10) = uVar21;
        *(undefined8 *)(pauVar31[1] + 0x18) = uVar22;
        *(undefined8 *)pauVar31[2] = uVar23;
        *(undefined8 *)(pauVar31[2] + 8) = uVar24;
        *(undefined8 *)(pauVar31[2] + 0x10) = uVar25;
        *(undefined8 *)(pauVar31[2] + 0x18) = uVar26;
        *(undefined8 *)pauVar31[3] = uVar27;
        *(undefined8 *)(pauVar31[3] + 8) = uVar28;
        *(undefined8 *)(pauVar31[3] + 0x10) = uVar29;
        *(undefined8 *)(pauVar31[3] + 0x18) = uVar30;
        uVar16 = *(undefined8 *)(param_2[4] + 8);
        uVar17 = *(undefined8 *)(param_2[4] + 0x10);
        uVar18 = *(undefined8 *)(param_2[4] + 0x18);
        uVar19 = *(undefined8 *)param_2[5];
        uVar20 = *(undefined8 *)(param_2[5] + 8);
        uVar21 = *(undefined8 *)(param_2[5] + 0x10);
        uVar22 = *(undefined8 *)(param_2[5] + 0x18);
        uVar23 = *(undefined8 *)param_2[6];
        uVar24 = *(undefined8 *)(param_2[6] + 8);
        uVar25 = *(undefined8 *)(param_2[6] + 0x10);
        uVar26 = *(undefined8 *)(param_2[6] + 0x18);
        uVar27 = *(undefined8 *)param_2[7];
        uVar28 = *(undefined8 *)(param_2[7] + 8);
        uVar29 = *(undefined8 *)(param_2[7] + 0x10);
        uVar30 = *(undefined8 *)(param_2[7] + 0x18);
        *(undefined8 *)pauVar31[4] = *(undefined8 *)param_2[4];
        *(undefined8 *)(pauVar31[4] + 8) = uVar16;
        *(undefined8 *)(pauVar31[4] + 0x10) = uVar17;
        *(undefined8 *)(pauVar31[4] + 0x18) = uVar18;
        *(undefined8 *)pauVar31[5] = uVar19;
        *(undefined8 *)(pauVar31[5] + 8) = uVar20;
        *(undefined8 *)(pauVar31[5] + 0x10) = uVar21;
        *(undefined8 *)(pauVar31[5] + 0x18) = uVar22;
        *(undefined8 *)pauVar31[6] = uVar23;
        *(undefined8 *)(pauVar31[6] + 8) = uVar24;
        *(undefined8 *)(pauVar31[6] + 0x10) = uVar25;
        *(undefined8 *)(pauVar31[6] + 0x18) = uVar26;
        *(undefined8 *)pauVar31[7] = uVar27;
        *(undefined8 *)(pauVar31[7] + 8) = uVar28;
        *(undefined8 *)(pauVar31[7] + 0x10) = uVar29;
        *(undefined8 *)(pauVar31[7] + 0x18) = uVar30;
        pauVar31 = pauVar31 + 8;
        param_2 = param_2 + 8;
        param_3 = param_3 - 0x100;
      } while (0xff < param_3);
    }
  }
  uVar37 = param_3 + 0x1f & 0xffffffffffffffe0;
  switch(param_3 + 0x1f >> 5 & 0xf) {
  case 8:
    puVar33 = (undefined8 *)(param_2[-8] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-8] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 7:
    puVar33 = (undefined8 *)(param_2[-7] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-7] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 6:
    puVar33 = (undefined8 *)(param_2[-6] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-6] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 5:
    puVar33 = (undefined8 *)(param_2[-5] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-5] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 4:
    puVar33 = (undefined8 *)(param_2[-4] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-4] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 3:
    puVar33 = (undefined8 *)(param_2[-3] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-3] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 2:
    puVar33 = (undefined8 *)(param_2[-2] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-2] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 1:
    puVar33 = (undefined8 *)(pauVar31[-1] + param_3);
    *puVar33 = uVar39;
    puVar33[1] = uVar40;
    puVar33[2] = uVar14;
    puVar33[3] = uVar15;
  }
switchD_18000f1d6_caseD_0:
  *(undefined8 *)*param_1 = uVar10;
  *(undefined8 *)(*param_1 + 8) = uVar11;
  *(undefined8 *)(*param_1 + 0x10) = uVar12;
  *(undefined8 *)(*param_1 + 0x18) = uVar13;
  return;
}

