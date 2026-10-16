
/* Address: 0x180006e28; Evidence: ev_98d157b3b8bc224005beb0c574aeb08e38d9c89a2629315f4b7875225d43e43d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006e28(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001ff28; puVar1 < &DAT_18001ff28; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

