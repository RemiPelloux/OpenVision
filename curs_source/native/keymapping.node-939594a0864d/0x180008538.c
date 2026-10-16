
/* Address: 0x180008538; Evidence: ev_2abf463f1bb96cb71e1271b8d883bed6c78d91ba2f391314903cd26284027430 */

uint FUN_180008538(longlong *param_1,longlong *param_2,uint param_3,byte param_4)

{
  char cVar1;
  char *pcVar2;
  longlong *plVar3;
  ulonglong uVar4;
  byte bVar5;
  int iVar6;
  uint uVar7;
  __acrt_ptd *p_Var8;
  ulonglong uVar9;
  byte bVar10;
  uint uVar11;
  char *pcVar12;
  char cVar13;
  byte bVar14;
  uint uVar15;
  
  pcVar2 = (char *)*param_2;
  uVar4 = (ulonglong)param_3;
  if (pcVar2 == (char *)0x0) {
    p_Var8 = FUN_18000b774();
    *(undefined4 *)p_Var8 = 0x16;
    FUN_18000821c();
LAB_1800085a9:
    if ((longlong *)param_2[1] != (longlong *)0x0) {
      *(longlong *)param_2[1] = *param_2;
    }
    return 0;
  }
  if ((param_3 != 0) && (0x22 < param_3 - 2)) {
    *(undefined1 *)(param_1 + 6) = 1;
    *(undefined4 *)((longlong)param_1 + 0x2c) = 0x16;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_1);
    goto LAB_1800085a9;
  }
  cVar13 = *pcVar2;
  pcVar12 = pcVar2 + 1;
  *param_2 = (longlong)pcVar12;
  bVar14 = param_4 | 2;
  if ((cVar13 == '-') || (bVar14 = param_4, cVar13 == '+')) {
    cVar13 = *pcVar12;
    pcVar12 = pcVar2 + 2;
    *param_2 = (longlong)pcVar12;
  }
  uVar9 = uVar4;
  if ((param_3 & 0xffffffef) == 0) {
    if ((byte)(cVar13 - 0x30U) < 10) {
      iVar6 = cVar13 + -0x30;
LAB_18000862f:
      if (iVar6 != 0) goto LAB_18000867d;
      cVar1 = *pcVar12;
      *param_2 = (longlong)(pcVar12 + 1);
      if ((cVar1 + 0xa8U & 0xdf) != 0) {
        *param_2 = (longlong)pcVar12;
        uVar9 = 8;
        if (param_3 != 0) {
          uVar9 = uVar4;
        }
        if ((cVar1 != '\0') && (*pcVar12 != cVar1)) {
          p_Var8 = FUN_18000b774();
          *(undefined4 *)p_Var8 = 0x16;
          FUN_18000821c();
        }
        goto LAB_180008689;
      }
      cVar13 = pcVar12[1];
      *param_2 = (longlong)(pcVar12 + 2);
      uVar9 = 0x10;
    }
    else {
      if ((byte)(cVar13 + 0x9fU) < 0x1a) {
        iVar6 = cVar13 + -0x57;
        goto LAB_18000862f;
      }
      if ((byte)(cVar13 + 0xbfU) < 0x1a) {
        iVar6 = cVar13 + -0x37;
        goto LAB_18000862f;
      }
LAB_18000867d:
      uVar9 = 10;
    }
    if (param_3 != 0) {
      uVar9 = uVar4;
    }
  }
LAB_180008689:
  pcVar12 = (char *)*param_2;
  uVar15 = 0;
  while( true ) {
    if ((byte)(cVar13 - 0x30U) < 10) {
      uVar11 = (int)cVar13 - 0x30;
    }
    else if ((byte)(cVar13 + 0x9fU) < 0x1a) {
      uVar11 = (int)cVar13 - 0x57;
    }
    else if ((byte)(cVar13 + 0xbfU) < 0x1a) {
      uVar11 = (int)cVar13 - 0x37;
    }
    else {
      uVar11 = 0xffffffff;
    }
    if ((uint)uVar9 <= uVar11) break;
    cVar13 = *pcVar12;
    uVar7 = uVar15 * (uint)uVar9;
    uVar11 = uVar7 + uVar11;
    bVar14 = bVar14 | (uVar11 < uVar7 || (uint)(0xffffffff / uVar9) < uVar15) << 2 | 8U;
    pcVar12 = pcVar12 + 1;
    *param_2 = (longlong)pcVar12;
    uVar15 = uVar11;
  }
  *param_2 = (longlong)(pcVar12 + -1);
  if ((cVar13 != '\0') && (pcVar12[-1] != cVar13)) {
    p_Var8 = FUN_18000b774();
    *(undefined4 *)p_Var8 = 0x16;
    FUN_18000821c();
  }
  if ((bVar14 & 8) == 0) {
    *param_2 = (longlong)pcVar2;
    if ((undefined8 *)param_2[1] == (undefined8 *)0x0) {
      return 0;
    }
    *(undefined8 *)param_2[1] = pcVar2;
    return 0;
  }
  if ((bVar14 & 4) == 0) {
    if ((bVar14 & 1) == 0) {
      if ((bVar14 & 2) == 0) goto LAB_1800087bd;
LAB_1800087ba:
      uVar15 = -uVar15;
      goto LAB_1800087bd;
    }
    if ((bVar14 & 2) == 0) {
      if (uVar15 < 0x80000000) goto LAB_1800087bd;
    }
    else if (uVar15 < 0x80000001) goto LAB_1800087ba;
    bVar10 = 1;
    bVar5 = bVar14;
  }
  else {
    bVar10 = bVar14;
    bVar5 = 1;
  }
  *(undefined1 *)(param_1 + 6) = 1;
  *(undefined4 *)((longlong)param_1 + 0x2c) = 0x22;
  if ((bVar5 & bVar10) != 0) {
    plVar3 = (longlong *)param_2[1];
    if ((bVar14 & 2) != 0) {
      if (plVar3 != (longlong *)0x0) {
        *plVar3 = *param_2;
      }
      return 0x80000000;
    }
    if (plVar3 != (longlong *)0x0) {
      *plVar3 = *param_2;
      return 0x7fffffff;
    }
    return 0x7fffffff;
  }
  uVar15 = 0xffffffff;
LAB_1800087bd:
  if ((longlong *)param_2[1] != (longlong *)0x0) {
    *(longlong *)param_2[1] = *param_2;
    return uVar15;
  }
  return uVar15;
}

