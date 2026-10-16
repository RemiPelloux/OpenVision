
/* Address: 0x18000cb40; Evidence: ev_9a6b5dfdfec6337a7d17b3c35471258269c59b945094d2a98469fbbe8670a027 */

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
    FUN_18000c934();
    FUN_18000ca34();
  }
  __acrt_unlock(7);
  return bVar2;
}

