
/* Address: 0x180006d90; Evidence: ev_4a1da4d77bce81d2562360b62c271fe99114a732d31033046e687798d081d2fe */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_18001b000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_18001b000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}

