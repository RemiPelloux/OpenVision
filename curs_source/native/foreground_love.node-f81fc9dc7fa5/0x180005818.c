
/* Address: 0x180005818; Evidence: ev_c5f759128aab9a5dfb1fb053c8c95b72160b48be9d577a9f73c773acf852b5cf */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_18001a000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_18001a000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}

