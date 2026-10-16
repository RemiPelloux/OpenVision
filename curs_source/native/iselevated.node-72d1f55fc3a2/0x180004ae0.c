
/* Address: 0x180004ae0; Evidence: ev_6f4e5d2273549ae82593b413c36cab4f880fe6843fb7e06e0969d937cb431f0e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004ae0(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}

