
/* Address: 0x180013590; Evidence: ev_ee030e9d0fb9e4e0b282162389df2335e437347231fbb70cb1c703ecd367d5df */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180013590(DWORD *param_1,uint param_2,WCHAR *param_3,uint param_4)

{
  WCHAR WVar1;
  HANDLE hFile;
  uint uVar2;
  BOOL BVar3;
  DWORD DVar4;
  uint uVar5;
  ulonglong uVar6;
  WCHAR *pWVar7;
  WCHAR *pWVar8;
  undefined1 auStackY_1498 [32];
  DWORD local_1458 [4];
  WCHAR local_1448 [856];
  CHAR local_d98 [3424];
  ulonglong local_38;
  undefined8 local_30;
  
  local_30 = 0x1800135ac;
  local_38 = DAT_180023000 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_1800247f0)[(longlong)(int)param_2 >> 6] + 0x28 +
           (ulonglong)(param_2 & 0x3f) * 0x48);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  pWVar7 = param_3;
  do {
    if ((WCHAR *)((ulonglong)param_4 + (longlong)param_3) <= pWVar7) {
      return param_1;
    }
    pWVar8 = local_1448;
    do {
      if ((WCHAR *)((ulonglong)param_4 + (longlong)param_3) <= pWVar7) break;
      WVar1 = *pWVar7;
      pWVar7 = pWVar7 + 1;
      if (WVar1 == L'\n') {
        *pWVar8 = L'\r';
        pWVar8 = pWVar8 + 1;
      }
      *pWVar8 = WVar1;
      pWVar8 = pWVar8 + 1;
    } while (pWVar8 < local_1448 + 0x354);
    uVar2 = FUN_18000fa68(0xfde9,0,local_1448,(int)((longlong)pWVar8 - (longlong)local_1448 >> 1),
                          local_d98,0xd55,(LPBOOL)0x0,(LPBOOL)0x0);
    if (uVar2 == 0) {
LAB_1800136cd:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_1800136cd;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)pWVar7 - (int)param_3;
  } while( true );
}

