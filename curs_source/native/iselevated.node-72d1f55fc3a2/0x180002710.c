
/* Address: 0x180002710; Evidence: ev_5e440dfce8959a63d3eeb13b8796980e9c404088af985d27c1f6bce3d29eb31f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180002710(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180002538();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

