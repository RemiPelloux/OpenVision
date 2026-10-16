
/* Address: 0x18000c7a4; Evidence: ev_d2547677d3def61c1fe19dd45b97ea0e8e79c37f8492b95191936ddd3fb64e90 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c7a4(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_180024308 != '\0') {
    return;
  }
  LOCK();
  DAT_1800242f8 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_180024300 != DAT_180023000) {
      bVar1 = (byte)DAT_180023000 & 0x3f;
      (*(code *)((DAT_180023000 ^ DAT_180024300) >> bVar1 |
                (DAT_180023000 ^ DAT_180024300) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180024438;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000c813;
    puVar2 = &DAT_180024450;
  }
  FUN_18000d14c(puVar2);
LAB_18000c813:
  if (*(int *)*param_1 == 0) {
    FUN_18000c578((undefined8 *)&DAT_180017330,(undefined8 *)&DAT_180017350);
  }
  FUN_18000c578((undefined8 *)&DAT_180017358,(undefined8 *)&DAT_180017360);
  if (*(int *)param_1[1] == 0) {
    DAT_180024308 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

