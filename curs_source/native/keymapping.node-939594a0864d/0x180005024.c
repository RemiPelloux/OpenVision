
/* Address: 0x180005024; Evidence: ev_e62d8cac6ba44e3083ef9d3451a677f6156d6baf4fbbc52079efb10571818261 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005024(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180024b80; puVar1 < &DAT_180024b80; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

