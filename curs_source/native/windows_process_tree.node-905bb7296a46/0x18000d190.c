
/* Address: 0x18000d190; Evidence: ev_b24d284501dcb96ca371752bfc41b50591f58979b39cc3ee63763843a09e0f65 */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180023000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180023000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}

