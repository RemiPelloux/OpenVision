
/* Address: 0x18000cb20; Evidence: ev_7960140d2ca02d189788612e9b90873d33917aef731b3f4ef2540a1df4c9937a */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180019a00 == (HANDLE)0xfffffffffffffffe) {
    DAT_180019a00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180019a00 != (HANDLE)0xffffffffffffffff;
}

