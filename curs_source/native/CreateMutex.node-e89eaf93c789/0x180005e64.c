
/* Address: 0x180005e64; Evidence: ev_a7a066dc7af504dbe8701f13ebd4733e04097b8a0e04246011b94717c1281173 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005e64(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180007158();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

