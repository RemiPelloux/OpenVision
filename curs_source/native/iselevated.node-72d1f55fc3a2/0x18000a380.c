
/* Address: 0x18000a380; Evidence: ev_f175954c62d87a14daf1116dc4426643db46d2cd9003b30f17209b834d0343f3 */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_18000a34c(param_1,7);
    FUN_18000a34c(param_1 + 7,7);
    FUN_18000a34c(param_1 + 0xe,0xc);
    FUN_18000a34c(param_1 + 0x1a,0xc);
    FUN_18000a34c(param_1 + 0x26,2);
    FUN_180006a30((LPVOID)param_1[0x28]);
    FUN_180006a30((LPVOID)param_1[0x29]);
    FUN_180006a30((LPVOID)param_1[0x2a]);
    FUN_18000a34c(param_1 + 0x2c,7);
    FUN_18000a34c(param_1 + 0x33,7);
    FUN_18000a34c(param_1 + 0x3a,0xc);
    FUN_18000a34c(param_1 + 0x46,0xc);
    FUN_18000a34c(param_1 + 0x52,2);
    FUN_180006a30((LPVOID)param_1[0x54]);
    FUN_180006a30((LPVOID)param_1[0x55]);
    FUN_180006a30((LPVOID)param_1[0x56]);
    FUN_180006a30((LPVOID)param_1[0x57]);
  }
  return;
}

