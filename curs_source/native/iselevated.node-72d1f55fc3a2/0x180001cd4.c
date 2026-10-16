
/* Address: 0x180001cd4; Evidence: ev_4e3eae552f498e46808f51f14a26ea20c679203b839af7fccbdaa643fb7e90d3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001cd4(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180017568; puVar1 < &DAT_180017568; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

