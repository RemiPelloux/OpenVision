
/* Address: 0x180004ec0; Evidence: ev_aad5f3e0efd1a4b03fd9506c0fdebb82f0a83f24ebcd803ce4c05302c3a9604a */

undefined8 * FUN_180004ec0(longlong *param_1,undefined8 *param_2,undefined8 *param_3)

{
  ulonglong uVar1;
  ulonglong uVar2;
  undefined8 *puVar3;
  longlong lVar4;
  LPVOID pvVar5;
  code *pcVar6;
  undefined8 *puVar7;
  undefined8 *puVar8;
  longlong lVar9;
  undefined8 *puVar10;
  longlong lVar11;
  ulonglong uVar12;
  LPVOID pvVar13;
  undefined8 *puVar14;
  undefined8 *puVar15;
  
  lVar11 = *param_1;
  lVar9 = ((longlong)param_2 - lVar11) / 0x26 + ((longlong)param_2 - lVar11 >> 0x3f);
  uVar12 = 0xd79435e50d7943;
  lVar4 = (param_1[1] - lVar11) / 0x130;
  if (lVar4 == 0xd79435e50d7943) {
    FUN_180004ce0();
    pcVar6 = (code *)swi(3);
    puVar8 = (undefined8 *)(*pcVar6)();
    return puVar8;
  }
  uVar1 = lVar4 + 1;
  uVar2 = (param_1[2] - lVar11) / 0x130;
  if (uVar2 <= 0xd79435e50d7943 - (uVar2 >> 1)) {
    uVar2 = (uVar2 >> 1) + uVar2;
    uVar12 = uVar1;
    if (uVar1 <= uVar2) {
      uVar12 = uVar2;
    }
    if (0xd79435e50d7943 < uVar12) {
                    /* WARNING: Subroutine does not return */
      FUN_180001150();
    }
  }
  puVar7 = (undefined8 *)FUN_1800032d0(uVar12 * 0x130);
  puVar15 = puVar7 + ((lVar9 >> 3) - (lVar9 >> 0x3f)) * 0x26;
  puVar8 = puVar15 + 0x26;
  FUN_180005130(puVar15,param_3);
  puVar3 = (undefined8 *)param_1[1];
  puVar10 = (undefined8 *)*param_1;
  puVar14 = puVar7;
  if (param_2 == puVar3) {
    for (; puVar10 != puVar3; puVar10 = puVar10 + 0x26) {
      FUN_180005130(puVar14,puVar10);
      puVar14 = puVar14 + 0x26;
    }
  }
  else {
    for (; puVar10 != param_2; puVar10 = puVar10 + 0x26) {
      FUN_180005130(puVar14,puVar10);
      puVar14 = puVar14 + 0x26;
    }
    puVar3 = (undefined8 *)param_1[1];
    for (; param_2 != puVar3; param_2 = param_2 + 0x26) {
      FUN_180005130(puVar8,param_2);
      puVar8 = puVar8 + 0x26;
    }
  }
  lVar11 = *param_1;
  if (lVar11 != 0) {
    lVar4 = param_1[1];
    for (; lVar11 != lVar4; lVar11 = lVar11 + 0x130) {
      FUN_180002f40((longlong *)(lVar11 + 0x110));
    }
    pvVar5 = (LPVOID)*param_1;
    pvVar13 = pvVar5;
    if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar5) / 0x130) * 0x130)) &&
       (pvVar13 = *(LPVOID *)((longlong)pvVar5 + -8),
       0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar13)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar13);
  }
  *param_1 = (longlong)puVar7;
  param_1[1] = (longlong)(puVar7 + uVar1 * 0x26);
  param_1[2] = (longlong)(puVar7 + uVar12 * 0x26);
  return puVar15;
}

