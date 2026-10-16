
/* Address: 0x180009080; Evidence: ev_fc73d4bd5794fd0e61a261d4c15d7aae3012b9d0d7f1d07496fedd582a79f7d4 */

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
    FUN_180008e78();
    FUN_180008f78();
  }
  __acrt_unlock(7);
  return bVar2;
}

