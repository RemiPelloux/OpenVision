
/* Address: 0x180005c70; Evidence: ev_5bfd46b5c077c72024eac161eb5464c9c747d708d93469195ac7b64923151c63 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005c70(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180005a98();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

