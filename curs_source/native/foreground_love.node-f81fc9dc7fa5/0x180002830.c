
/* Address: 0x180002830; Evidence: ev_8ab87b89d768e5a60bde7062d49e368f996fbf6ff8a0800bca358fbcf786af6c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180002830(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180002658();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}

