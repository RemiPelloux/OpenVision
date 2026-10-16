
/* Address: 0x18000a5b0; Evidence: ev_80fac37c8472b8c36972de2759a5f25d8fc89cc4f7abb2c02ca17112a3a86008 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_18001a860) {
      FUN_180006d00((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_18001a868) {
      FUN_180006d00((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_18001a870) {
      FUN_180006d00((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_18001a8b8) {
      FUN_180006d00((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_18001a8c0) {
      FUN_180006d00((undefined *)param_1[0xc]);
    }
  }
  return;
}

