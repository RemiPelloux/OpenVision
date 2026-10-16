
/* Address: 0x18000a808; Evidence: ev_f95dbd1ddbff00a0f80b8c3a2447638b8d9eb3b9b5f143e675b2496726fc3559 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000a808(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_18000babc();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

