
/* Address: 0x180010184; Evidence: ev_62851d56d396909cc7fb63d6785ed4576b507ef2759fba06722afbef24ed4f50 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_180021860) {
      FUN_18000c960((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_180021868) {
      FUN_18000c960((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_180021870) {
      FUN_18000c960((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800218b8) {
      FUN_18000c960((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_1800218c0) {
      FUN_18000c960((undefined *)param_1[0xc]);
    }
  }
  return;
}

