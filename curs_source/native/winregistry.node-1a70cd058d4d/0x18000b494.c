
/* Address: 0x18000b494; Evidence: ev_db741fbc5236a755789dfb574f28af39242b46a9f9aefcbd9bd55a17e4ffe042 */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_18000b460(param_1,7);
    FUN_18000b460(param_1 + 7,7);
    FUN_18000b460(param_1 + 0xe,0xc);
    FUN_18000b460(param_1 + 0x1a,0xc);
    FUN_18000b460(param_1 + 0x26,2);
    FUN_180007bd0((LPVOID)param_1[0x28]);
    FUN_180007bd0((LPVOID)param_1[0x29]);
    FUN_180007bd0((LPVOID)param_1[0x2a]);
    FUN_18000b460(param_1 + 0x2c,7);
    FUN_18000b460(param_1 + 0x33,7);
    FUN_18000b460(param_1 + 0x3a,0xc);
    FUN_18000b460(param_1 + 0x46,0xc);
    FUN_18000b460(param_1 + 0x52,2);
    FUN_180007bd0((LPVOID)param_1[0x54]);
    FUN_180007bd0((LPVOID)param_1[0x55]);
    FUN_180007bd0((LPVOID)param_1[0x56]);
    FUN_180007bd0((LPVOID)param_1[0x57]);
  }
  return;
}

