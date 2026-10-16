
/* Address: 0x18000a400; Evidence: ev_c91049ec6ccff4a17d59107e8b0e67f811f83f8b179bb2c16559169647d6a123 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_18001a860) {
      FUN_180006b50((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_18001a868) {
      FUN_180006b50((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_18001a870) {
      FUN_180006b50((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_18001a8b8) {
      FUN_180006b50((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_18001a8c0) {
      FUN_180006b50((undefined *)param_1[0xc]);
    }
  }
  return;
}

