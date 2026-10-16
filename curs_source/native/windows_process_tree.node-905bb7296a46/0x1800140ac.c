
/* Address: 0x1800140ac; Evidence: ev_22a8408c41591ba4d2ce99e0ca667a0ccb7729a69b6e150b8e720bbe6f3adeea */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180023a00,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180023a00 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180023a00);
      }
      DAT_180023a00 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180023a00,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}

