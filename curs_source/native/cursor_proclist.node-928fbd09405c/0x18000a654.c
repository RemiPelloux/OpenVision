
/* Address: 0x18000a654; Evidence: ev_a257a0080731c68f2361ce7bbf3ddbd9275b829f2e1769a3584def58560f9c8d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000a654(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180023bc0; puVar1 < &DAT_180023bc0; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

