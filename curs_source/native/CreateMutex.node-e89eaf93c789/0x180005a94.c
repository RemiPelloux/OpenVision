
/* Address: 0x180005a94; Evidence: ev_a9aa71afeccc42c2eaa0f3371b1bec3fe9f65b77515b9fa29841faffaa420e0a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005a94(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001eca8; puVar1 < &DAT_18001eca8; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

