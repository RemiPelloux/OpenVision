
/* Address: 0x18000edc0; Evidence: ev_f3f00f8e332f7e819a65f26fba3da1059d02d49e7aefb848cda0bf7b82abbd97 */

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
    FUN_18000ebb8();
    FUN_18000ecb8();
  }
  __acrt_unlock(7);
  return bVar2;
}

