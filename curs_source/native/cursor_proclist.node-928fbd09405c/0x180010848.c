
/* Address: 0x180010848; Evidence: ev_60209816d43d7e50fa4cf3ec85c713931beac47b2fda8cee88e94aeb2facad65 */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180028040;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180028040;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}

