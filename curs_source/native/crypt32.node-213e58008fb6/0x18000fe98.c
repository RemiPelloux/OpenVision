
/* Address: 0x18000fe98; Evidence: ev_d2a2b2d246396f9c83c3d8ab37b7c8afb5e4df25b7bc02c7f4eaece79331a8cf */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180016a50)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_18000c960(param_1);
  }
  return;
}

