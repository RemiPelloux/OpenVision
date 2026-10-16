
/* Address: 0x180017790; Evidence: ev_c4208e54d4c2cf1668076daec27d4976438afeb891d1e908508e335af5b6664c */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180028a40,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180028a40 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180028a40);
      }
      DAT_180028a40 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180028a40,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}

