
/* Address: 0x180009a3c; Evidence: ev_92a4a6e07d1932d6410bbff0050684317e63c3543b51d51a1f4f4922c0ed0911 */

/* Library Function - Single Match
    __scrt_release_startup_lock
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __scrt_release_startup_lock(char param_1)

{
  bool bVar1;
  undefined3 extraout_var;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if ((CONCAT31(extraout_var,bVar1) != 0) && (param_1 == '\0')) {
    LOCK();
    DAT_180028d20 = 0;
    UNLOCK();
  }
  return;
}

