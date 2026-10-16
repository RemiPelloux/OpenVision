
/* Address: 0x1800057d8; Evidence: ev_222386fcd656776810c91a826bf66eae15fa005a7d6445b04fbbefd3147a5bff */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800057d8(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001dc90; puVar1 < &DAT_18001dc90; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

