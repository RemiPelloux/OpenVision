
/* Address: 0x180008798; Evidence: ev_c9966ece4fc033b59592ad81f357cc69f8c810ff50e580ca5174e3db8175abdf */

LPVOID FUN_180008798(void)

{
  WCHAR WVar1;
  int iVar2;
  LPWCH pWVar3;
  longlong lVar4;
  LPVOID pvVar6;
  undefined4 uVar7;
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
    uVar7 = (undefined4)((longlong)pWVar8 + (2 - (longlong)pWVar3) >> 1);
    iVar2 = FUN_1800086b8(0,0,pWVar3,uVar7);
    if (iVar2 != 0) {
      pvVar6 = _malloc_base((longlong)iVar2);
      if (pvVar6 != (LPVOID)0x0) {
        iVar2 = FUN_1800086b8(0,0,pWVar3,uVar7);
        if (iVar2 == 0) {
          FUN_180006d00(pvVar6);
          pvVar6 = (LPVOID)0x0;
        }
        else {
          FUN_180006d00((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pvVar6;
      }
      FUN_180006d00((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPVOID)0x0;
}

