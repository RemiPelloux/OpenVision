
/* Address: 0x180005324; Evidence: ev_2e5a6a48e7cfdfa596bcd27e5f1a682001a2ed8a886d82b0fd748ab87e6dbc90 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180028ca8 != 0;
}

