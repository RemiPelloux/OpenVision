
/* Address: 0x180001df4; Evidence: ev_a00737622a0499714d9bf21eae00fd88b9ba226c0f60252be191553ae9edfda8 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001df4(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_1800175f0; puVar1 < &DAT_1800175f0; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

