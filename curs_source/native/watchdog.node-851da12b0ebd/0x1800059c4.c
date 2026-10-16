
/* Address: 0x1800059c4; Evidence: ev_62e021ac6959a64cedef28242a96770b780b93017caeb6caa767c3bf2697baaa */

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

