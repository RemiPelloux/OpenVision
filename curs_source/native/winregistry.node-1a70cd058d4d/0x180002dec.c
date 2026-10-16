
/* Address: 0x180002dec; Evidence: ev_29477baa6a4a005f39d6d1a168d9a9560807a7d730441af4801754fafa80a165 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180002dec(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180018908; puVar1 < &DAT_180018908; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

