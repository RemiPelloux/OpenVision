
/* Address: 0x180007234; Evidence: ev_62e580d9d70a4cc9feb7511ed177e8bfb35f1ffc45d23854de04c3065210aa8d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180007234(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180008548();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

