
/* Address: 0x1800056f8; Evidence: ev_1e91306ba5e231595dc9b5d2c70c88136f6906cb4b32682d517102cd825ae466 */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180019000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180019000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}

