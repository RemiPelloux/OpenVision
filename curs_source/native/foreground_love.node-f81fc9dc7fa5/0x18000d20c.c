
/* Address: 0x18000d20c; Evidence: ev_a054106da69fb41ee0d70819bd08a8d83c4ce5a056dc9b7a807924a54292fb46 */

bool FUN_18000d20c(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_18001bb00 != (HMODULE)0x1) {
    if (DAT_18001bb00 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_18001bb08 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_18001bb10;
    }
    DAT_18001bb10 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_18001bb00 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_18001bb00;
      pHVar1 = DAT_18001bb00;
    }
    DAT_18001bb00 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}

