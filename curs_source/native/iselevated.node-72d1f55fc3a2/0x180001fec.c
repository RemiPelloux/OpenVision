
/* Address: 0x180001fec; Evidence: ev_e515c862b246882fd9822b28772e44e35540e1d4a8e5eeddcecbc48a6dba45c9 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_18001ab2c != 0;
}

