
/* Address: 0x180001e30; Evidence: ev_9f6e19245feb8a3cb610c64c72f77fd41504643d792f1909b77b844098680a0b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001e30(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180017600; puVar1 < &DAT_180017600; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

