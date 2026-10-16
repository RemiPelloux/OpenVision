
/* Address: 0x180001f94; Evidence: ev_5f152b0874a87a288a3d9e85021ff060fb7e1037860a6f6d9915ae8a1c5e1476 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001f94(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180017660; puVar1 < &DAT_180017660; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

