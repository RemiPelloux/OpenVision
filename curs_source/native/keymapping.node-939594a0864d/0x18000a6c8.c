
/* Address: 0x18000a6c8; Evidence: ev_6c2ca5dc0b8283407fa9b216d6d39e76b97852db1c0944ed6d18c170e853ec22 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000a6c8(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}

