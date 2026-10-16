
/* Address: 0x180001c44; Evidence: ev_92eb5293e3df067cce32ee5b35df1fa7539ed039cfe8edb0be0ff5558d119c78 */

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
    DAT_18001b038 = 0;
    UNLOCK();
  }
  return;
}

