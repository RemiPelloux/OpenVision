
/* Address: 0x18000a690; Evidence: ev_c18a3f6853f56ba246c862ba30d94fa38c0cc1d3dc8e079b77a9caf8dd251859 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000a690(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180023bd0; puVar1 < &DAT_180023bd0; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

