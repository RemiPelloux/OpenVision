
/* Address: 0x180001d10; Evidence: ev_d93eb0448432bc4e39b32a3759164a35a68ee36b0c902f25983860174f2f9b93 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001d10(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180017578; puVar1 < &DAT_180017578; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

