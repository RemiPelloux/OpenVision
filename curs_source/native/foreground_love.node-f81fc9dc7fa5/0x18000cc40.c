
/* Address: 0x18000cc40; Evidence: ev_4985412603803712693f08f7d94f73a31931c04f2ce3b15b8b70754e51f9eccb */

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

