
/* Address: 0x1800035b0; Evidence: ev_767e2b0fd3bd5e6b431490d00fd91fd9f752d4db3acdf074aca9c295c9d8bd0d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800035b0(undefined8 param_1,undefined8 *param_2)

{
  *(undefined1 *)((longlong)param_2 + 0x21) = 1;
  (**(code **)*param_2)(param_2,1);
  return;
}

