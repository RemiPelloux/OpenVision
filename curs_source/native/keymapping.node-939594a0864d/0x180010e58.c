
/* Address: 0x180010e58; Evidence: ev_e272957accea779125c0951f31f30d8310dd0478e479877fced4afae22039bde */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(longlong *param_1)

{
  if (param_1 != (longlong *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_1800278c0) {
      FUN_18000bff0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_1800278c8) {
      FUN_18000bff0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_1800278d0) {
      FUN_18000bff0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_180027918) {
      FUN_18000bff0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_180027920) {
      FUN_18000bff0((undefined *)param_1[0xc]);
    }
  }
  return;
}

