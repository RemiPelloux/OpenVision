
/* Address: 0x180001fd0; Evidence: ev_b8f19ad6121e1aeef1369ebc29c0ece0257022e316df764fac14c2ab65d05205 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001fd0(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180017670; puVar1 < &DAT_180017670; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

