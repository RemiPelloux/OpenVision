
/* Address: 0x1800029d0; Evidence: ev_ca40ea8911c5706286819010c09e84393a162371d1313a8224357c409204bb5f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_1800029d0(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_1800027f8();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

