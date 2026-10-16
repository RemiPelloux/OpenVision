
/* Address: 0x180005eb8; Evidence: ev_0d8eb41e1397beaea639f7f61b2fc7e374a2b3c68ee99e52eedbc6b6eb551e0d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005eb8(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

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

