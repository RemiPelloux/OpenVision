
/* Address: 0x18000a2e0; Evidence: ev_bca0a90f15da9c63fe6521247f30ccdca690f5fe8d21859b7c8524f8fc78d825 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_180019860) {
      FUN_180006a30((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_180019868) {
      FUN_180006a30((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_180019870) {
      FUN_180006a30((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800198b8) {
      FUN_180006a30((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_1800198c0) {
      FUN_180006a30((undefined *)param_1[0xc]);
    }
  }
  return;
}

