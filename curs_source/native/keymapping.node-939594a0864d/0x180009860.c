
/* Address: 0x180009860; Evidence: ev_4284532f9a79b035769da9afff170cac84cf9324f7ae74b77f725dda13d7d39c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180009860(ulonglong *param_1)

{
  ulonglong *puVar1;
  ulonglong *puVar2;
  char cVar3;
  ushort uVar4;
  longlong *plVar5;
  bool bVar6;
  int iVar7;
  ulonglong uVar8;
  ulonglong uVar9;
  longlong lVar10;
  undefined4 extraout_var;
  byte bVar11;
  undefined1 uVar12;
  uint uVar13;
  ulonglong uVar14;
  ulonglong uVar15;
  ushort *puVar16;
  int iVar17;
  undefined1 auStackY_88 [32];
  undefined8 local_50;
  undefined8 local_48;
  byte local_40 [8];
  ulonglong local_38;
  
  local_48 = 0xfffffffffffffffe;
  uVar8 = DAT_180027000 ^ (ulonglong)auStackY_88;
  cVar3 = *(char *)((longlong)param_1 + 0x39);
  uVar12 = 0x78;
  local_38 = uVar8;
  if (cVar3 < 'e') {
    if (cVar3 == 'd') {
LAB_180009943:
      *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x10;
LAB_180009947:
      uVar8 = FUN_1800089f0((longlong)param_1,0);
    }
    else if (cVar3 < 'T') {
      if (cVar3 == 'S') {
LAB_180009989:
        uVar8 = FUN_18000a1fc((longlong)param_1);
      }
      else {
        if (cVar3 != 'A') {
          if (cVar3 == 'C') {
LAB_1800098fd:
            uVar8 = FUN_18000a070((longlong)param_1);
            goto LAB_1800099ab;
          }
          if (((cVar3 != 'E') && (cVar3 != 'F')) && (cVar3 != 'G')) goto LAB_1800099b2;
        }
LAB_1800098d4:
        uVar8 = FUN_180009e14(param_1);
      }
    }
    else {
      if (cVar3 == 'X') goto LAB_1800099a1;
      if (cVar3 != 'Z') {
        if (cVar3 != 'a') {
          if (cVar3 != 'c') goto LAB_1800099b2;
          goto LAB_1800098fd;
        }
        goto LAB_1800098d4;
      }
      uVar8 = FUN_180009d98((longlong)param_1);
    }
  }
  else if (cVar3 < 'p') {
    if (cVar3 == 'o') {
      if (((uint)param_1[5] >> 5 & 1) != 0) {
        *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x80;
      }
      uVar8 = FUN_1800087ec((longlong)param_1);
    }
    else {
      if (((cVar3 == 'e') || (cVar3 == 'f')) || (cVar3 == 'g')) goto LAB_1800098d4;
      if (cVar3 == 'i') goto LAB_180009943;
      if (cVar3 != 'n') goto LAB_1800099b2;
      uVar8 = FUN_18000a144((longlong)param_1);
    }
  }
  else {
    if (cVar3 == 'p') {
      *(undefined4 *)(param_1 + 6) = 0x10;
      *(undefined4 *)((longlong)param_1 + 0x34) = 0xb;
LAB_1800099a1:
      bVar11 = 1;
    }
    else {
      if (cVar3 == 's') goto LAB_180009989;
      if (cVar3 == 'u') goto LAB_180009947;
      if (cVar3 != 'x') goto LAB_1800099b2;
      bVar11 = 0;
    }
    uVar8 = FUN_180008bf4((longlong)param_1,bVar11);
  }
LAB_1800099ab:
  uVar15 = 0;
  if ((char)uVar8 == '\0') {
LAB_1800099b2:
    return uVar8 & 0xffffffffffffff00;
  }
  if ((char)param_1[7] != '\0') goto LAB_180009d6c;
  uVar8 = local_50 & 0xffffffffff000000;
  uVar13 = (uint)param_1[5];
  uVar14 = uVar15;
  if ((uVar13 >> 4 & 1) != 0) {
    local_50._1_7_ = (undefined7)(uVar8 >> 8);
    if ((uVar13 >> 6 & 1) == 0) {
      if ((param_1[5] & 1) == 0) {
        if ((uVar13 >> 1 & 1) == 0) goto LAB_180009a07;
        local_50 = CONCAT71(local_50._1_7_,0x20);
      }
      else {
        local_50 = CONCAT71(local_50._1_7_,0x2b);
      }
    }
    else {
      local_50 = CONCAT71(local_50._1_7_,0x2d);
    }
    uVar14 = 1;
    uVar8 = local_50;
  }
LAB_180009a07:
  local_50 = uVar8;
  cVar3 = *(char *)((longlong)param_1 + 0x39);
  if (((cVar3 + 0xa8U & 0xdf) != 0) || (bVar6 = true, (uVar13 >> 5 & 1) == 0)) {
    bVar6 = false;
  }
  if ((bVar6) || ((cVar3 + 0xbfU & 0xdf) == 0)) {
    *(undefined1 *)((longlong)&local_50 + uVar14) = 0x30;
    if ((cVar3 == 'X') || (cVar3 == 'A')) {
      uVar12 = 0x58;
    }
    *(undefined1 *)((longlong)&local_50 + uVar14 + 1) = uVar12;
    uVar14 = uVar14 + 2;
  }
  iVar7 = (int)uVar14;
  iVar17 = (*(int *)((longlong)param_1 + 0x2c) - (int)param_1[9]) - iVar7;
  if (((uVar13 & 0xc) == 0) && (uVar8 = param_1[1], uVar14 = uVar15, 0 < iVar17)) {
    while ((((*(uint *)(param_1[0x8c] + 0x14) >> 0xc & 1) != 0 &&
            (*(longlong *)(param_1[0x8c] + 8) == 0)) ||
           (uVar9 = FUN_18000e624(0x20,(FILE *)param_1[0x8c],uVar8), (int)uVar9 != -1))) {
      uVar9 = param_1[4];
      *(int *)(param_1 + 4) = (int)uVar9 + 1;
      if (((int)uVar9 == -2) ||
         (uVar13 = (int)uVar14 + 1, uVar14 = (ulonglong)uVar13, iVar17 <= (int)uVar13))
      goto LAB_180009abc;
    }
    *(undefined4 *)(param_1 + 4) = 0xffffffff;
  }
LAB_180009abc:
  puVar2 = param_1 + 0x8c;
  puVar1 = param_1 + 4;
  if (((*(uint *)(*puVar2 + 0x14) >> 0xc & 1) == 0) || (*(longlong *)(*puVar2 + 8) != 0)) {
    FUN_18000a3b4((longlong *)puVar2,(byte *)&local_50,iVar7,(int *)puVar1,param_1[1]);
  }
  else {
    *(int *)puVar1 = (int)*puVar1 + iVar7;
  }
  if (((((uint)param_1[5] >> 3 & 1) != 0) && (((uint)param_1[5] >> 2 & 1) == 0)) &&
     (uVar8 = param_1[1], uVar14 = uVar15, 0 < iVar17)) {
    while ((((*(uint *)(*puVar2 + 0x14) >> 0xc & 1) != 0 && (*(longlong *)(*puVar2 + 8) == 0)) ||
           (uVar9 = FUN_18000e624(0x30,(FILE *)*puVar2,uVar8), (int)uVar9 != -1))) {
      uVar9 = *puVar1;
      *(int *)puVar1 = (int)uVar9 + 1;
      if (((int)uVar9 == -2) ||
         (uVar13 = (int)uVar14 + 1, uVar14 = (ulonglong)uVar13, iVar17 <= (int)uVar13))
      goto LAB_180009b63;
    }
    *(int *)puVar1 = -1;
  }
LAB_180009b63:
  if ((*(char *)((longlong)param_1 + 0x4c) == '\0') || ((int)param_1[9] < 1)) {
    puVar2 = param_1 + 0x8c;
    puVar1 = param_1 + 4;
    if (((*(uint *)(*puVar2 + 0x14) >> 0xc & 1) == 0) ||
       (uVar8 = *puVar2, *(longlong *)(uVar8 + 8) != 0)) {
      uVar8 = FUN_18000a3b4((longlong *)puVar2,(byte *)param_1[8],(int)param_1[9],(int *)puVar1,
                            param_1[1]);
    }
    else {
      *(int *)puVar1 = (int)*puVar1 + (int)param_1[9];
    }
  }
  else {
    plVar5 = (longlong *)param_1[1];
    if ((char)plVar5[5] == '\0') {
      FUN_18000a2a0(plVar5);
    }
    puVar16 = (ushort *)param_1[8];
    uVar8 = plVar5[3];
    if (*(int *)(uVar8 + 0xc) == 0xfde9) {
      local_50 = 0;
      if ((int)param_1[9] != 0) {
        puVar1 = param_1 + 4;
        puVar2 = param_1 + 0x8c;
        uVar14 = uVar15;
        do {
          uVar4 = *puVar16;
          puVar16 = puVar16 + 1;
          lVar10 = FUN_18000e340(local_40,(uint)uVar4,(int *)&local_50,param_1[1]);
          if (lVar10 == -1) {
            *(int *)puVar1 = -1;
            uVar8 = 0xffffffffffffffff;
            break;
          }
          if (((*(uint *)(*puVar2 + 0x14) >> 0xc & 1) == 0) ||
             (uVar8 = *puVar2, *(longlong *)(uVar8 + 8) != 0)) {
            uVar8 = FUN_18000a3b4((longlong *)puVar2,local_40,(int)lVar10,(int *)puVar1,param_1[1]);
          }
          else {
            *(int *)puVar1 = (int)*puVar1 + (int)lVar10;
          }
          uVar13 = (int)uVar14 + 1;
          uVar14 = (ulonglong)uVar13;
        } while (uVar13 != (uint)param_1[9]);
      }
    }
    else if ((int)param_1[9] != 0) {
      puVar1 = param_1 + 0x8c;
      uVar14 = uVar15;
      do {
        local_50 = local_50 & 0xffffffff00000000;
        uVar4 = *puVar16;
        puVar16 = puVar16 + 1;
        iVar7 = FUN_18000de20((int *)&local_50,(undefined1 (*) [32])local_40,6,uVar4,
                              (longlong *)param_1[1]);
        uVar8 = CONCAT44(extraout_var,iVar7);
        if ((iVar7 != 0) || ((int)local_50 == 0)) {
          *(undefined4 *)(param_1 + 4) = 0xffffffff;
          break;
        }
        if (((*(uint *)(*puVar1 + 0x14) >> 0xc & 1) == 0) ||
           (uVar8 = *puVar1, *(longlong *)(uVar8 + 8) != 0)) {
          uVar8 = FUN_18000a3b4((longlong *)puVar1,local_40,(int)local_50,(int *)(param_1 + 4),
                                param_1[1]);
        }
        else {
          *(int *)(param_1 + 4) = (int)param_1[4] + (int)local_50;
        }
        uVar13 = (int)uVar14 + 1;
        uVar14 = (ulonglong)uVar13;
      } while (uVar13 != (uint)param_1[9]);
    }
  }
  if (((-1 < (int)param_1[4]) &&
      (uVar13 = (uint)param_1[5] >> 2, uVar8 = (ulonglong)uVar13, (uVar13 & 1) != 0)) &&
     (uVar14 = param_1[1], 0 < iVar17)) {
    while ((((*(uint *)(param_1[0x8c] + 0x14) >> 0xc & 1) != 0 &&
            (*(longlong *)(param_1[0x8c] + 8) == 0)) ||
           (uVar8 = FUN_18000e624(0x20,(FILE *)param_1[0x8c],uVar14), (int)uVar8 != -1))) {
      uVar9 = param_1[4];
      uVar13 = (int)uVar9 + 1;
      uVar8 = (ulonglong)uVar13;
      *(uint *)(param_1 + 4) = uVar13;
      if (((int)uVar9 == -2) ||
         (uVar13 = (int)uVar15 + 1, uVar15 = (ulonglong)uVar13, iVar17 <= (int)uVar13))
      goto LAB_180009d6c;
    }
    *(undefined4 *)(param_1 + 4) = 0xffffffff;
  }
LAB_180009d6c:
  return CONCAT71((int7)(uVar8 >> 8),1);
}

