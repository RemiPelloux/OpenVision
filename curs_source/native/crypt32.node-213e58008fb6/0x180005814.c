
/* Address: 0x180005814; Evidence: ev_de88243bf988768f6cbc1379e6df6b6e43fa3754cca35871ce25d1a62c5f1429 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005814(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001dca0; puVar1 < &DAT_18001dca0; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

