
/* Address: 0x180009e14; Evidence: ev_bf9ad21b64866642025c561c29d2cebcec4746a0fec1f1902a51e633dafd225b */

undefined8 FUN_180009e14(ulonglong *param_1)

{
  double *pdVar1;
  longlong *plVar2;
  bool bVar3;
  byte bVar4;
  char cVar5;
  int iVar6;
  ulonglong *puVar7;
  ulonglong uVar8;
  char *pcVar9;
  undefined1 (*pauVar10) [32];
  byte *pbVar11;
  longlong lVar12;
  byte bVar13;
  uint uVar14;
  byte *pbVar15;
  ulonglong uVar16;
  double local_res8;
  
  *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x10;
  iVar6 = (int)param_1[6];
  if (iVar6 < 0) {
    iVar6 = (-(uint)((*(char *)((longlong)param_1 + 0x39) + 0xbfU & 0xdf) != 0) & 0xfffffff9) + 0xd;
    *(int *)(param_1 + 6) = iVar6;
  }
  else if ((iVar6 == 0) &&
          ((*(char *)((longlong)param_1 + 0x39) == 'g' ||
           (*(char *)((longlong)param_1 + 0x39) == 'G')))) {
    *(undefined4 *)(param_1 + 6) = 1;
    iVar6 = 1;
  }
  bVar3 = FUN_180008490((longlong)(param_1 + 10),(longlong)(iVar6 + 0x15d),param_1[1]);
  uVar16 = 0x200;
  if (bVar3) {
    uVar14 = (uint)param_1[6];
  }
  else {
    if (param_1[0x8b] == 0) {
      iVar6 = 0x200;
    }
    else {
      iVar6 = (int)(param_1[0x8a] >> 1);
    }
    uVar14 = iVar6 - 0x15d;
    *(uint *)(param_1 + 6) = uVar14;
  }
  puVar7 = (ulonglong *)param_1[0x8b];
  if ((ulonglong *)param_1[0x8b] == (ulonglong *)0x0) {
    puVar7 = param_1 + 10;
  }
  param_1[8] = (ulonglong)puVar7;
  pdVar1 = (double *)param_1[3];
  param_1[3] = (ulonglong)(pdVar1 + 1);
  pauVar10 = (undefined1 (*) [32])param_1[0x8b];
  local_res8 = *pdVar1;
  if (pauVar10 == (undefined1 (*) [32])0x0) {
    puVar7 = param_1 + 0x4a;
    pauVar10 = (undefined1 (*) [32])(param_1 + 10);
    uVar8 = 0x200;
  }
  else {
    puVar7 = (ulonglong *)(*pauVar10 + (param_1[0x8a] >> 1));
    uVar8 = param_1[0x8a] >> 1;
    uVar16 = param_1[0x8a] >> 1;
  }
  FUN_18000db38(&local_res8,pauVar10,uVar16,(char *)puVar7,uVar8,
                (int)*(char *)((longlong)param_1 + 0x39),uVar14,*param_1,1,(longlong *)param_1[1]);
  uVar14 = (uint)param_1[5] >> 5;
  uVar16 = (ulonglong)uVar14;
  if (((uVar14 & 1) != 0) && ((int)param_1[6] == 0)) {
    plVar2 = (longlong *)param_1[1];
    if ((char)plVar2[5] == '\0') {
      FUN_18000a2a0(plVar2);
    }
    pbVar15 = (byte *)param_1[8];
    plVar2 = (longlong *)plVar2[3];
    uVar8 = (ulonglong)*pbVar15;
    if (*(char *)(uVar8 + plVar2[0x22]) != 'e') {
      do {
        pbVar15 = pbVar15 + 1;
        uVar8 = (ulonglong)*pbVar15;
      } while ((*(byte *)(*plVar2 + uVar8 * 2) & 4) != 0);
    }
    bVar3 = *(char *)(uVar8 + plVar2[0x22]) == 'x';
    if (bVar3) {
      uVar8 = (ulonglong)pbVar15[2];
    }
    pbVar11 = pbVar15 + 2;
    if (!bVar3) {
      pbVar11 = pbVar15;
    }
    bVar4 = **(byte **)plVar2[0x1f];
    uVar16 = CONCAT71((int7)((ulonglong)plVar2[0x1f] >> 8),bVar4);
    *pbVar11 = bVar4;
    do {
      pbVar11 = pbVar11 + 1;
      bVar4 = *pbVar11;
      uVar16 = CONCAT71((int7)(uVar16 >> 8),bVar4);
      bVar13 = (byte)uVar8;
      *pbVar11 = bVar13;
      uVar8 = (ulonglong)bVar4;
    } while (bVar13 != 0);
  }
  bVar4 = *(char *)((longlong)param_1 + 0x39) + 0xb9;
  uVar16 = CONCAT71((int7)(uVar16 >> 8),bVar4);
  if (((bVar4 & 0xdf) == 0) &&
     (uVar14 = (uint)param_1[5] >> 5, uVar16 = (ulonglong)uVar14, (uVar14 & 1) == 0)) {
    plVar2 = (longlong *)param_1[1];
    if ((char)plVar2[5] == '\0') {
      FUN_18000a2a0(plVar2);
    }
    uVar16 = FUN_180009258((char *)param_1[8],plVar2 + 3);
  }
  pcVar9 = (char *)param_1[8];
  cVar5 = *pcVar9;
  if (cVar5 == '-') {
    *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x40;
    pcVar9 = pcVar9 + 1;
    param_1[8] = (ulonglong)pcVar9;
    cVar5 = *pcVar9;
  }
  if (((byte)(cVar5 + 0xb7U) < 0x26) &&
     ((0x2100000021U >> ((ulonglong)(byte)(cVar5 + 0xb7U) & 0x3f) & 1) != 0)) {
    *(uint *)(param_1 + 5) = (uint)param_1[5] & 0xfffffff7;
    *(undefined1 *)((longlong)param_1 + 0x39) = 0x73;
  }
  lVar12 = -1;
  do {
    lVar12 = lVar12 + 1;
  } while (pcVar9[lVar12] != '\0');
  *(int *)(param_1 + 9) = (int)lVar12;
  return CONCAT71((int7)(uVar16 >> 8),1);
}

