
/* Address: 0x1800030f4; Evidence: ev_9b88ef0134c0bd76388a769265ff1d06888de96bf2fe19581c2fa49a90cd6c5b */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_18001cbf4 != 0;
}

