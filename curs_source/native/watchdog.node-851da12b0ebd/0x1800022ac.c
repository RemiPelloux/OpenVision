
/* Address: 0x1800022ac; Evidence: ev_45fa3ae9304e1bc7f72bf06f5923e492152938f1c5e82487feb4d484d0a21f83 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_18001bb40 != 0;
}

