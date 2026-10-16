
/* Address: 0x180005a58; Evidence: ev_085d91b91cf0d43420d244fbcd965ea06184433c36d21ccc3ea34c88f3c03ad6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005a58(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001ec98; puVar1 < &DAT_18001ec98; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

