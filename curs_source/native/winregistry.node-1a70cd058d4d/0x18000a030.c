
/* Address: 0x18000a030; Evidence: ev_3a107f52bae164289cf18eae85919afa26819fed25a3291781791a6be026d8b9 */

/* Library Function - Single Match
    __acrt_initialize_lowio
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __acrt_initialize_lowio(void)

{
  longlong lVar1;
  bool bVar2;
  
  __acrt_lock(7);
  lVar1 = __acrt_lowio_ensure_fh_exists(0);
  bVar2 = (int)lVar1 == 0;
  if (bVar2) {
    FUN_180009e28();
    FUN_180009f28();
  }
  __acrt_unlock(7);
  return bVar2;
}

