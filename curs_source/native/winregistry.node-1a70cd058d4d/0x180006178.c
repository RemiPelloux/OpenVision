
/* Address: 0x180006178; Evidence: ev_dfd1004e9c5f8ce3097310cbe88f6e9e2734b4a6e9f8ef62f03c23cce49d0e57 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006178(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}

