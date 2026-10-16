
/* Address: 0x180005c38; Evidence: ev_d305c48aabd659a3ce857672803d76f2f33196a44393fe90c8d2efeb8ce22984 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005c38(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180006ed8();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

