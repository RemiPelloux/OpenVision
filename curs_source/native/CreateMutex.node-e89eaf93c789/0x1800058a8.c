
/* Address: 0x1800058a8; Evidence: ev_f06f99edfc2f4710ce606e9be55bc0d8d9369fbd797e90f01af18288267faa3f */

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
    DAT_180023198 = 0;
    UNLOCK();
  }
  return;
}

