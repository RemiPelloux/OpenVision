
/* Address: 0x18000f040; Evidence: ev_0f0c6ed6b6a7fb88a494112ddf063ef1a9dad66b50e19944285edde13cd968fa */

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
    FUN_18000ee38();
    FUN_18000ef38();
  }
  __acrt_unlock(7);
  return bVar2;
}

