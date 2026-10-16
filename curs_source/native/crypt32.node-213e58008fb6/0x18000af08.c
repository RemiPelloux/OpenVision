
/* Address: 0x18000af08; Evidence: ev_813f7d4e4e696bc7a3e23bd843a98df2bf4f0c3798e3f6cb166982c07108be22 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000af08(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}

