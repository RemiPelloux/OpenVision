
/* Address: 0x180007288; Evidence: ev_b55d0e0c4478f2dc3605bcb2a80c769ea10af3753e499eadc03b683602dcf0be */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180007288(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

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

