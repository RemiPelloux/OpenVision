
/* Address: 0x18000bb20; Evidence: ev_00caf53df115958f1ea1c6f54a29d4ce60224e084d708637872906c63c8cdf2f */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180021000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180021000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}

