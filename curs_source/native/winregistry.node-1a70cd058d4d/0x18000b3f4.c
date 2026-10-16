
/* Address: 0x18000b3f4; Evidence: ev_3e0d11847c7bb2d8e3be448a99ad902fe7c8978c6a01b67f12ad5ae31581f25c */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(longlong *param_1)

{
  if (param_1 != (longlong *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_18001b860) {
      FUN_180007bd0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_18001b868) {
      FUN_180007bd0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_18001b870) {
      FUN_180007bd0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_18001b8b8) {
      FUN_180007bd0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_18001b8c0) {
      FUN_180007bd0((undefined *)param_1[0xc]);
    }
  }
  return;
}

