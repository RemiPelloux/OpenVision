
/* Address: 0x18000a7b4; Evidence: ev_5ebb1f31b8c6fe008948cae70da341ebeb40f235b557b604097f9caa2603ab0e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000a7b4(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

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

