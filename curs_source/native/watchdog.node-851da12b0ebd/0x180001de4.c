
/* Address: 0x180001de4; Evidence: ev_44ef28ba492298d94e3dc365547a9a1543aa3012d8cd5acf5e394c66f4f66405 */

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

