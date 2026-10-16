
/* Address: 0x180005628; Evidence: ev_b5c3ea47f7a2431855381b9c0efce01e761b44c1c24993546335867b6d5adc35 */

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
    DAT_180022198 = 0;
    UNLOCK();
  }
  return;
}

