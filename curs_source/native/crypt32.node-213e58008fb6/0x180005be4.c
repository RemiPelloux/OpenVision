
/* Address: 0x180005be4; Evidence: ev_515400dbb1dd562762ee881b9bf705b8e76641463cd8b8255add677f6c382470 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005be4(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

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

