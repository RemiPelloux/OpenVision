
/* Address: 0x180002db0; Evidence: ev_981b6c529a96fac53647a777e9d4bcc651405c1629836dbca4c174d330e0f47c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180002db0(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_1800188f8; puVar1 < &DAT_1800188f8; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}

