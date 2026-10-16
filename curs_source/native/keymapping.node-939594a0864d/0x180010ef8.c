
/* Address: 0x180010ef8; Evidence: ev_91316d9337f420ba9412e64d6193983c805d1389969f0b6718acd446fea8339d */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_180010ec4(param_1,7);
    FUN_180010ec4(param_1 + 7,7);
    FUN_180010ec4(param_1 + 0xe,0xc);
    FUN_180010ec4(param_1 + 0x1a,0xc);
    FUN_180010ec4(param_1 + 0x26,2);
    FUN_18000bff0((LPVOID)param_1[0x28]);
    FUN_18000bff0((LPVOID)param_1[0x29]);
    FUN_18000bff0((LPVOID)param_1[0x2a]);
    FUN_180010ec4(param_1 + 0x2c,7);
    FUN_180010ec4(param_1 + 0x33,7);
    FUN_180010ec4(param_1 + 0x3a,0xc);
    FUN_180010ec4(param_1 + 0x46,0xc);
    FUN_180010ec4(param_1 + 0x52,2);
    FUN_18000bff0((LPVOID)param_1[0x54]);
    FUN_18000bff0((LPVOID)param_1[0x55]);
    FUN_18000bff0((LPVOID)param_1[0x56]);
    FUN_18000bff0((LPVOID)param_1[0x57]);
  }
  return;
}

