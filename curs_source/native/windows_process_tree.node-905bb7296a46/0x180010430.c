
/* Address: 0x180010430; Evidence: ev_b8601e384e0b8c7801fa6fa27fa0114d1c2b41d6fb4e2759345ed28fa11067ee */

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
    FUN_180010228();
    FUN_180010328();
  }
  __acrt_unlock(7);
  return bVar2;
}

