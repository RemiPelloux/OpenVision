
/* Address: 0x18000fc60; Evidence: ev_d5caa3a2639ea34e99ad309118f7f8087359a94f24db893d6f6835d19c0e2dab */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000fc60(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_180029438 != '\0') {
    return;
  }
  LOCK();
  DAT_180029428 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_180029430 != DAT_180028040) {
      bVar1 = (byte)DAT_180028040 & 0x3f;
      (*(code *)((DAT_180028040 ^ DAT_180029430) >> bVar1 |
                (DAT_180028040 ^ DAT_180029430) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180029568;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000fccf;
    puVar2 = &DAT_180029580;
  }
  FUN_180010804(puVar2);
LAB_18000fccf:
  if (*(int *)*param_1 == 0) {
    FUN_180010a68((undefined8 *)&DAT_18001b320,(undefined8 *)&DAT_18001b340);
  }
  FUN_180010a68((undefined8 *)&DAT_18001b348,(undefined8 *)&DAT_18001b350);
  if (*(int *)param_1[1] == 0) {
    DAT_180029438 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

