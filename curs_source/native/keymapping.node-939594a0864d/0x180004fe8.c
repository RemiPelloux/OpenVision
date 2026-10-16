
/* Address: 0x180004fe8; Evidence: ev_6ddd4fb231f55ea7dac8a5ec404934c814690ee12cd99a3de4b1a8062602c757 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004fe8(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180024b70; puVar1 < &DAT_180024b70; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

