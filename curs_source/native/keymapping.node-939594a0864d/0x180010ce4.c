
/* Address: 0x180010ce4; Evidence: ev_a50c3c8bb8868fcd33e35c09a6c8b6a5c4134c039f04d9538d5a92e15772bda3 */

/* Library Function - Single Match
    _updatetlocinfoEx_nolock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** _updatetlocinfoEx_nolock(longlong *param_1,undefined **param_2)

{
  undefined **ppuVar1;
  
  if ((param_2 == (undefined **)0x0) || (param_1 == (longlong *)0x0)) {
    param_2 = (undefined **)0x0;
  }
  else {
    ppuVar1 = (undefined **)*param_1;
    if (ppuVar1 != param_2) {
      *param_1 = (longlong)param_2;
      __acrt_add_locale_ref((longlong)param_2);
      if (((ppuVar1 != (undefined **)0x0) &&
          (__acrt_release_locale_ref((longlong)ppuVar1), *(int *)(ppuVar1 + 2) == 0)) &&
         (ppuVar1 != &PTR_DAT_1800271b0)) {
        __acrt_free_locale((longlong)ppuVar1);
      }
    }
  }
  return param_2;
}

