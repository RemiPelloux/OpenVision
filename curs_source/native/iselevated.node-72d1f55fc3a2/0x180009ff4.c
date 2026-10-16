
/* Address: 0x180009ff4; Evidence: ev_9e184b2bbe2a0e015a629e54a43de40ed5d93ef22f0df584c6d7fae199a46abb */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_1800108b0)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_180006a30(param_1);
  }
  return;
}

