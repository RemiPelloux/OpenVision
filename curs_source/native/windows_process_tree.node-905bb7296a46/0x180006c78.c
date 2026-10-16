
/* Address: 0x180006c78; Evidence: ev_d2a27659c42d134e533d0c152eb7688d5124b5abc39586acbc0dcbfc6140b21a */

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
    DAT_180024198 = 0;
    UNLOCK();
  }
  return;
}

