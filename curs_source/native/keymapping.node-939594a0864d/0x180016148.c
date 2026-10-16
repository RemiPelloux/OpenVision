
/* Address: 0x180016148; Evidence: ev_a2b0902dac8f5edbb52fa0f3a3772b37e1230bf85489988a21807c4b04ec310c */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180027a60 == (HANDLE)0xfffffffffffffffe) {
    DAT_180027a60 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180027a60 != (HANDLE)0xffffffffffffffff;
}

