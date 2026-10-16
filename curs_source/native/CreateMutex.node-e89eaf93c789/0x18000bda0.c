
/* Address: 0x18000bda0; Evidence: ev_ac3a8808e8882c3c2ee3bb598064135c166d0abaedd0413d8c07be77c5d1c73f */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180022000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180022000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}

