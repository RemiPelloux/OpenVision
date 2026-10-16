
/* Address: 0x180003a40; Evidence: ev_85da8ed8db8000a9bb360ae706c0ae6af99c6b94f1ab02eb5682d0c678a99a55 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180003a40(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180003868();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

