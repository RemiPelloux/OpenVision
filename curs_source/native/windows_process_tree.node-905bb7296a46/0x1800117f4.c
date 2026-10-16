
/* Address: 0x1800117f4; Evidence: ev_c46307796d5e9103a1a5b2ee4943027717c4575e0f928d9c9a87f4eba0b7d40f */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_180023860) {
      FUN_18000dfd0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_180023868) {
      FUN_18000dfd0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_180023870) {
      FUN_18000dfd0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800238b8) {
      FUN_18000dfd0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_1800238c0) {
      FUN_18000dfd0((undefined *)param_1[0xc]);
    }
  }
  return;
}

