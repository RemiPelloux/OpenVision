
/* Address: 0x180012c40; Evidence: ev_66ef512088390eaa6ed787faf26916cb49633ccb9c8a6a9ec44f66cc1d912b4f */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180022a00 == (HANDLE)0xfffffffffffffffe) {
    DAT_180022a00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180022a00 != (HANDLE)0xffffffffffffffff;
}

