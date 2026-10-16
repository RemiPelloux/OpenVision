
/* Address: 0x18000a21c; Evidence: ev_7d9a2717ce0ce8484657c9945395d4902ce89b0a1887e2cc0658f9e56df498a6 */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_180006648();
  if (((DAT_18001a858 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_18001b308);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}

