
/* Address: 0x18000dc30; Evidence: ev_d8f53a72229cc0ae524cd30a6acf044bda26fb1bb2782f33cd34d3232f25a2ed */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_18001ba00 == (HANDLE)0xfffffffffffffffe) {
    DAT_18001ba00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_18001ba00 != (HANDLE)0xffffffffffffffff;
}

