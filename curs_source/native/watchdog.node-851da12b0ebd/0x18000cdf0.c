
/* Address: 0x18000cdf0; Evidence: ev_58611a59dce1498ba577b088c7f23a8bc0abcd9558a9d6f2f2f704c1e44b554e */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_18001aa00 == (HANDLE)0xfffffffffffffffe) {
    DAT_18001aa00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_18001aa00 != (HANDLE)0xffffffffffffffff;
}

