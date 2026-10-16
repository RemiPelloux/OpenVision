
/* Address: 0x180010a68; Evidence: ev_921f90f4d09a91a0ef291c44359b7179917c0dd2d35ba4ad1a9ca37c654e8937 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180010a68(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}

