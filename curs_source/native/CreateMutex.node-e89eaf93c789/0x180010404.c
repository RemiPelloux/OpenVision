
/* Address: 0x180010404; Evidence: ev_0409c1963693eefdaedd6356192e39c5f1e36f878f90c7e77a02af72e821477d */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_180022860) {
      FUN_18000cbe0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_180022868) {
      FUN_18000cbe0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_180022870) {
      FUN_18000cbe0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800228b8) {
      FUN_18000cbe0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_1800228c0) {
      FUN_18000cbe0((undefined *)param_1[0xc]);
    }
  }
  return;
}

