
/* Address: 0x180012f8c; Evidence: ev_70fa4ab16b92d61cd81cc3fb24907f99885f20d1373eae94d20bd07eede13986 */

bool FUN_180012f8c(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_180022c68 != (HMODULE)0x1) {
    if (DAT_180022c68 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_180022c70 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_180022c78;
    }
    DAT_180022c78 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_180022c68 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_180022c68;
      pHVar1 = DAT_180022c68;
    }
    DAT_180022c68 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}

