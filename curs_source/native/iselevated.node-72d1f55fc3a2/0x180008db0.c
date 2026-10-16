
/* Address: 0x180008db0; Evidence: ev_96bda72792838f0faa73cf2b13db25c0063a4b009b24ece2a55b6caf9802acfc */

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
    FUN_180008ba8();
    FUN_180008ca8();
  }
  __acrt_unlock(7);
  return bVar2;
}

