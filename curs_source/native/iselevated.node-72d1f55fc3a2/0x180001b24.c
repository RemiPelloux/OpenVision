
/* Address: 0x180001b24; Evidence: ev_2581af563943e12b2e5fb654e3f71624421dce5343b66e42959413462ca7e5ad */

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
    DAT_18001a038 = 0;
    UNLOCK();
  }
  return;
}

