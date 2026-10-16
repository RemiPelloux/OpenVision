
/* Address: 0x180006e64; Evidence: ev_7b85aa1537d9d5937c355597284ebfb2ef903bc2adf4a8eb091625cd10b473a6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006e64(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001ff38; puVar1 < &DAT_18001ff38; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

