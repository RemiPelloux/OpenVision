
/* Address: 0x180014ee4; Evidence: ev_3e1cedfb540f32274a45764693cf8c56ccc338fc1c61ba2efc9195011377dff3 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_1800288a0) {
      FUN_1800116e0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_1800288a8) {
      FUN_1800116e0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_1800288b0) {
      FUN_1800116e0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800288f8) {
      FUN_1800116e0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_180028900) {
      FUN_1800116e0((undefined *)param_1[0xc]);
    }
  }
  return;
}

