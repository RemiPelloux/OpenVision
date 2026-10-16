
/* Address: 0x180016f14; Evidence: ev_fff60c80971ba37d5bbf1410ea6ba38a7859cab7cebcba47df325943a3204756 */

int FUN_180016f14(uint param_1,WCHAR *param_2,uint param_3,longlong *param_4)

{
  char cVar1;
  WCHAR WVar2;
  int iVar3;
  undefined8 uVar4;
  byte bVar5;
  WCHAR WVar6;
  short sVar7;
  BOOL BVar8;
  DWORD DVar9;
  int iVar10;
  ulonglong uVar11;
  undefined7 extraout_var;
  DWORD *pDVar12;
  DWORD DVar13;
  longlong lVar14;
  ulonglong uVar15;
  WCHAR *pWVar16;
  undefined8 local_70;
  DWORD local_68;
  undefined8 local_60;
  DWORD local_50 [4];
  
  DVar13 = 0;
  uVar15 = (ulonglong)param_3;
  if (param_3 == 0) {
    return 0;
  }
  if (param_2 == (WCHAR *)0x0) {
LAB_180016f44:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_18000f864((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar11 = (ulonglong)(param_1 & 0x3f);
  lVar14 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_180029920)[lVar14] + 0x39 + uVar11 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_180016f44;
  if ((*(byte *)((&DAT_180029920)[lVar14] + 0x38 + uVar11 * 0x48) & 0x20) != 0) {
    thunk_FUN_180017460(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar5 = FUN_18001733c(param_1);
  if (((int)CONCAT71(extraout_var,bVar5) == 0) ||
     (-1 < *(char *)((&DAT_180029920)[lVar14] + 0x38 + uVar11 * 0x48))) {
LAB_1800170fc:
    if (-1 < *(char *)((&DAT_180029920)[lVar14] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar8 = WriteFile(*(HANDLE *)
                         ((&DAT_180029920)[lVar14] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar13 = local_68;
      uVar4 = local_70;
      if (BVar8 == 0) {
        DVar13 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar13);
        DVar13 = local_68;
        uVar4 = local_70;
      }
      goto LAB_1800171b1;
    }
    if (cVar1 == '\0') {
      pDVar12 = FUN_180016a5c((DWORD *)&local_70,param_1,(char *)param_2,uVar15);
    }
    else if (cVar1 == '\x01') {
      pDVar12 = FUN_180016c80((DWORD *)&local_70,param_1,param_2,param_3);
    }
    else {
      DVar13 = 0;
      uVar4 = local_60;
      if (cVar1 != '\x02') goto LAB_1800171b1;
      pDVar12 = FUN_180016b64((DWORD *)&local_70,param_1,param_2,uVar15);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_180010bf0(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_180029920)[lVar14] + 0x39 + uVar11 * 0x48) == '\0')) goto LAB_1800170fc;
    local_50[0] = 0;
    BVar8 = GetConsoleMode(*(HANDLE *)((&DAT_180029920)[lVar14] + 0x28 + uVar11 * 0x48),local_50);
    if (BVar8 == 0) goto LAB_1800170fc;
    if (cVar1 != '\0') {
      if ((cVar1 == '\x01') || (uVar4 = local_60, cVar1 == '\x02')) {
        local_70 = 0;
        uVar4 = local_70;
        if (param_2 < (WCHAR *)((longlong)param_2 + uVar15)) {
          local_70._4_4_ = 0;
          pWVar16 = param_2;
          iVar10 = local_70._4_4_;
          do {
            WVar2 = *pWVar16;
            WVar6 = FUN_180017518(WVar2);
            if (WVar6 != WVar2) {
LAB_1800170c4:
              DVar9 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar9);
              uVar4 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar10 + 2,(DWORD)local_70);
            iVar3 = iVar10 + 2;
            if (WVar2 == L'\n') {
              sVar7 = FUN_180017518(0xd);
              if (sVar7 != 0xd) goto LAB_1800170c4;
              local_70 = CONCAT44(iVar10 + 3,(DWORD)local_70);
              DVar13 = DVar13 + 1;
              iVar3 = iVar10 + 3;
            }
            iVar10 = iVar3;
            pWVar16 = pWVar16 + 1;
            uVar4 = local_70;
          } while (pWVar16 < (WCHAR *)((longlong)param_2 + uVar15));
        }
      }
      goto LAB_1800171b1;
    }
    pDVar12 = FUN_1800165c8((DWORD *)&local_70,param_1,(byte *)param_2,uVar15,param_4);
  }
  DVar13 = pDVar12[2];
  uVar4 = *(undefined8 *)pDVar12;
LAB_1800171b1:
  local_60 = uVar4;
  iVar10 = (int)((ulonglong)local_60 >> 0x20);
  if (iVar10 != 0) {
    return iVar10 - DVar13;
  }
  if ((uint)local_60 != 0) {
    if ((uint)local_60 == 5) {
      *(undefined1 *)(param_4 + 6) = 1;
      *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
      *(undefined1 *)(param_4 + 7) = 1;
      *(undefined4 *)((longlong)param_4 + 0x34) = 5;
      return -1;
    }
    FUN_180010d9c((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_180029920)[lVar14] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((char)*param_2 == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}

