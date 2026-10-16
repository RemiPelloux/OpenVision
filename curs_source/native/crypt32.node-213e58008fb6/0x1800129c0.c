
/* Address: 0x1800129c0; Evidence: ev_29bfcc50d951aba0c223fdb4d61eb95147773695507f3f21c9b525d1d50ad393 */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180021a00 == (HANDLE)0xfffffffffffffffe) {
    DAT_180021a00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180021a00 != (HANDLE)0xffffffffffffffff;
}

