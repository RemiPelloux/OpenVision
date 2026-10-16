
/* Address: 0x1800161bc; Evidence: ev_4cdff7af28aeebaf575bca47d361d9eea4da9c1700a63ac783033915821e3988 */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180027a60,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180027a60 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180027a60);
      }
      DAT_180027a60 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180027a60,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}

