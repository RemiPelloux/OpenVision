
/* Address: 0x180014030; Evidence: ev_df48e66b89880673105d14de8ceb78cf33c30b51ff1274bb47dd8abee9019f81 */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180023a00 == (HANDLE)0xfffffffffffffffe) {
    DAT_180023a00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180023a00 != (HANDLE)0xffffffffffffffff;
}

