
/* Address: 0x180011894; Evidence: ev_ebc5310510a4af16ee78ef2030fb8c1ecf5114ff25b1589b8fbcf36d63739a5a */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_180011860(param_1,7);
    FUN_180011860(param_1 + 7,7);
    FUN_180011860(param_1 + 0xe,0xc);
    FUN_180011860(param_1 + 0x1a,0xc);
    FUN_180011860(param_1 + 0x26,2);
    FUN_18000dfd0((LPVOID)param_1[0x28]);
    FUN_18000dfd0((LPVOID)param_1[0x29]);
    FUN_18000dfd0((LPVOID)param_1[0x2a]);
    FUN_180011860(param_1 + 0x2c,7);
    FUN_180011860(param_1 + 0x33,7);
    FUN_180011860(param_1 + 0x3a,0xc);
    FUN_180011860(param_1 + 0x46,0xc);
    FUN_180011860(param_1 + 0x52,2);
    FUN_18000dfd0((LPVOID)param_1[0x54]);
    FUN_18000dfd0((LPVOID)param_1[0x55]);
    FUN_18000dfd0((LPVOID)param_1[0x56]);
    FUN_18000dfd0((LPVOID)param_1[0x57]);
  }
  return;
}

