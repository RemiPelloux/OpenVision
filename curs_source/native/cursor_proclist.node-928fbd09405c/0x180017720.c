
/* Address: 0x180017720; Evidence: ev_33b007a555eda340404c701d7313f32f473b38212e734dcc244f30436c81de98 */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180028a40 == (HANDLE)0xfffffffffffffffe) {
    DAT_180028a40 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180028a40 != (HANDLE)0xffffffffffffffff;
}

