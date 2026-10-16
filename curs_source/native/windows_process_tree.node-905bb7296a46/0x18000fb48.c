
/* Address: 0x18000fb48; Evidence: ev_f1a397adaf09d49f8fdd3dea2fb062163dd11b0652b875d9eb55e3468c9c2b08 */

LPSTR FUN_18000fb48(void)

{
  WCHAR WVar1;
  int iVar2;
  LPWCH pWVar3;
  longlong lVar4;
  LPSTR pCVar6;
  int iVar7;
  WCHAR *pWVar8;
  longlong lVar5;
  
  pWVar3 = GetEnvironmentStringsW();
  if (pWVar3 != (LPWCH)0x0) {
    WVar1 = *pWVar3;
    pWVar8 = pWVar3;
    while (WVar1 != L'\0') {
      lVar4 = -1;
      do {
        lVar5 = lVar4;
        lVar4 = lVar5 + 1;
      } while (pWVar8[lVar4] != L'\0');
      pWVar8 = pWVar8 + lVar5 + 2;
      WVar1 = *pWVar8;
    }
    iVar7 = (int)((longlong)pWVar8 + (2 - (longlong)pWVar3) >> 1);
    iVar2 = FUN_18000fa68(0,0,pWVar3,iVar7,(LPSTR)0x0,0,(LPBOOL)0x0,(LPBOOL)0x0);
    if (iVar2 != 0) {
      pCVar6 = _malloc_base((longlong)iVar2);
      if (pCVar6 != (LPSTR)0x0) {
        iVar2 = FUN_18000fa68(0,0,pWVar3,iVar7,pCVar6,iVar2,(LPBOOL)0x0,(LPBOOL)0x0);
        if (iVar2 == 0) {
          FUN_18000dfd0(pCVar6);
          pCVar6 = (LPSTR)0x0;
        }
        else {
          FUN_18000dfd0((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pCVar6;
      }
      FUN_18000dfd0((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPSTR)0x0;
}

