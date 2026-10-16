
/* Address: 0x180004c00; Evidence: ev_14806072b9ca43a1ffccb9e649c1ad4c6440bc63837ec7e047a42dd830ebe671 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004c00(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}

