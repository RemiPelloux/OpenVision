
/* Address: 0x180008ed0; Evidence: ev_ab1dc72b02a314e5e2579ef5b575ca21cfa61ff9a20dab82113500cca1547e7f */

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
    FUN_180008cc8();
    FUN_180008dc8();
  }
  __acrt_unlock(7);
  return bVar2;
}

