
/* Address: 0x1800165c8; Evidence: ev_eea1ea278444f989d3b672efedc0864753d649935afe67306994cb3aad3c6b0f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_1800165c8(DWORD *param_1,uint param_2,byte *param_3,ulonglong param_4,longlong *param_5)

{
  char cVar1;
  byte bVar2;
  HANDLE hFile;
  int iVar3;
  BOOL BVar4;
  DWORD DVar5;
  ulonglong uVar6;
  byte *pbVar7;
  char *pcVar8;
  ulonglong uVar9;
  uint uVar10;
  uint uVar11;
  undefined1 *puVar12;
  ulonglong uVar13;
  longlong lVar14;
  ulonglong uVar15;
  longlong lVar16;
  ulonglong uVar17;
  undefined1 auStackY_108 [32];
  undefined2 local_c8 [2];
  WCHAR local_c4 [2];
  DWORD local_c0 [2];
  byte *local_b8;
  longlong *local_b0;
  uint local_a8 [2];
  UINT local_a0;
  int local_9c;
  byte *local_98;
  longlong local_90;
  uint local_88 [2];
  undefined8 *local_80;
  byte *local_78;
  HANDLE local_70;
  longlong local_68;
  undefined8 local_60;
  undefined8 local_58;
  byte local_50;
  byte local_4f;
  CHAR local_48 [8];
  ulonglong local_40;
  
  local_60 = 0xfffffffffffffffe;
  local_40 = DAT_180028040 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar16 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_180029920)[lVar16] + 0x28 + uVar6 * 0x48);
  local_b8 = param_3 + (param_4 & 0xffffffff);
  local_98 = param_3;
  local_90 = lVar16;
  local_a0 = GetConsoleOutputCP();
  uVar13 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_180010bf0(local_b0);
  }
  local_9c = *(int *)(local_b0[3] + 0xc);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  uVar15 = uVar13;
  local_68 = lVar16;
  if (local_98 < param_3 + (param_4 & 0xffffffff)) {
    do {
      local_c8[0] = CONCAT11(local_c8[0]._1_1_,*param_3);
      local_c4[0] = L'\0';
      local_c4[1] = L'\0';
      uVar10 = 1;
      if (local_9c == 0xfde9) {
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_180029920)[local_68]);
        uVar15 = uVar13;
        uVar17 = uVar13;
        do {
          uVar10 = (uint)uVar15;
          if (*pcVar8 == '\0') break;
          uVar10 = uVar10 + 1;
          uVar15 = (ulonglong)uVar10;
          uVar17 = uVar17 + 1;
          pcVar8 = pcVar8 + 1;
        } while ((longlong)uVar17 < 5);
        if ((longlong)uVar17 < 1) {
          cVar1 = (&DAT_180028940)[*param_3];
          iVar3 = cVar1 + 1;
          lVar16 = (longlong)local_b8 - (longlong)param_3;
          if (lVar16 < iVar3) {
            uVar15 = uVar13;
            if (0 < lVar16) {
              do {
                *(byte *)(uVar15 + uVar6 * 0x48 + 0x3e + (&DAT_180029920)[local_90]) =
                     param_3[uVar15];
                uVar10 = (int)uVar13 + 1;
                uVar13 = (ulonglong)uVar10;
                uVar15 = uVar15 + 1;
              } while ((int)uVar10 < lVar16);
            }
            param_1[1] = param_1[1] + (int)lVar16;
            return param_1;
          }
          local_a8[0] = 0;
          local_a8[1] = 0;
          uVar10 = (iVar3 == 4) + 1;
          local_78 = param_3;
          pbVar7 = FUN_1800147ec((ushort *)local_c4,&local_78,(ulonglong)uVar10,local_a8,
                                 (longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pbVar7 = param_3 + cVar1;
          lVar16 = local_90;
        }
        else {
          cVar1 = (&DAT_180028940)[*(byte *)((&DAT_180029920)[lVar16] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar14 = (longlong)local_b8 - (longlong)param_3;
          uVar15 = (ulonglong)iVar3;
          if (lVar14 < (longlong)uVar15) {
            if (0 < lVar14) {
              uVar15 = uVar17;
              do {
                *(byte *)(uVar15 + uVar6 * 0x48 + 0x3e + (&DAT_180029920)[lVar16]) =
                     param_3[uVar15 - uVar17];
                uVar10 = (int)uVar13 + 1;
                uVar13 = (ulonglong)uVar10;
                uVar15 = uVar15 + 1;
              } while ((int)uVar10 < lVar14);
            }
            param_1[1] = param_1[1] + (int)lVar14;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_180029920)[local_68]);
          uVar9 = uVar13;
          do {
            *(undefined1 *)((longlong)&local_58 + uVar9) = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar17);
          uVar9 = uVar13;
          if (0 < (longlong)uVar15) {
            FUN_180018c60((undefined8 *)((longlong)&local_58 + uVar17),(undefined8 *)param_3,uVar15)
            ;
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_180029920)[lVar16]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar17);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = &local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_1800147ec((ushort *)local_c4,&local_80,(ulonglong)uVar10,local_88,
                                 (longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pbVar7 = param_3 + (int)(local_a8[0] - 1);
        }
      }
      else {
        lVar14 = (&DAT_180029920)[lVar16];
        bVar2 = *(byte *)(lVar14 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)*param_3 * 2) < 0) {
            pbVar7 = param_3 + 1;
            if (local_b8 <= pbVar7) {
              *(byte *)(lVar14 + 0x3e + uVar6 * 0x48) = *param_3;
              pbVar7 = (byte *)((&DAT_180029920)[lVar16] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar15 + 1;
              return param_1;
            }
            iVar3 = FUN_180014434((ushort *)local_c4,param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_1800168d0;
          }
          uVar15 = 1;
          pbVar7 = param_3;
        }
        else {
          local_50 = *(byte *)(lVar14 + 0x3e + uVar6 * 0x48);
          local_4f = *param_3;
          *(byte *)(lVar14 + 0x3d + uVar6 * 0x48) = bVar2 & 0xfb;
          uVar15 = 2;
          pbVar7 = &local_50;
        }
        iVar3 = FUN_180014434((ushort *)local_c4,pbVar7,uVar15,local_b0);
        pbVar7 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_1800168d0:
      param_3 = pbVar7 + 1;
      uVar10 = FUN_18001316c(local_a0,0,local_c4,uVar10,local_48,5,(LPBOOL)0x0,(LPBOOL)0x0);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_180016a29:
        DVar5 = GetLastError();
        *param_1 = DVar5;
        return param_1;
      }
      uVar11 = (param_1[2] - (int)local_98) + (int)param_3;
      param_1[1] = uVar11;
      if (local_c0[0] < uVar10) {
        return param_1;
      }
      if ((char)local_c8[0] == '\n') {
        local_c8[0] = 0xd;
        BVar4 = WriteFile(hFile,local_c8,1,local_c0,(LPOVERLAPPED)0x0);
        if (BVar4 == 0) goto LAB_180016a29;
        if (local_c0[0] == 0) {
          return param_1;
        }
        param_1[2] = param_1[2] + 1;
        param_1[1] = param_1[1] + 1;
        uVar11 = param_1[1];
      }
      uVar15 = (ulonglong)uVar11;
    } while (param_3 < local_b8);
  }
  return param_1;
}

