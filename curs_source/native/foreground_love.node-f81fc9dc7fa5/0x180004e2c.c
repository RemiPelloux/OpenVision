
/* Address: 0x180004e2c; Evidence: ev_08e198ae9fa4ff54a6cac34092d575e2b99617ad621707638d129926ca212856 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004e2c(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_18001b198 != '\0') {
    return;
  }
  LOCK();
  DAT_18001b188 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_18001b190 != DAT_18001a000) {
      bVar1 = (byte)DAT_18001a000 & 0x3f;
      (*(code *)((DAT_18001a000 ^ DAT_18001b190) >> bVar1 |
                (DAT_18001a000 ^ DAT_18001b190) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_18001b2c8;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_180004e9b;
    puVar2 = &DAT_18001b2e0;
  }
  FUN_1800057d4(puVar2);
LAB_180004e9b:
  if (*(int *)*param_1 == 0) {
    FUN_180004c00((undefined8 *)&DAT_18000f2f8,(undefined8 *)&DAT_18000f318);
  }
  FUN_180004c00((undefined8 *)&DAT_18000f320,(undefined8 *)&DAT_18000f328);
  if (*(int *)param_1[1] == 0) {
    DAT_18001b198 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

