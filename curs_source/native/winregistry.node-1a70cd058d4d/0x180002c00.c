
/* Address: 0x180002c00; Evidence: ev_ad30d0d3bf50b6340989c6e862e2a33ba56ec96efd95e735783f407db8089ac5 */

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
    DAT_18001c0e8 = 0;
    UNLOCK();
  }
  return;
}

