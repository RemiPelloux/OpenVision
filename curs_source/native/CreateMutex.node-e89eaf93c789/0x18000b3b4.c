
/* Address: 0x18000b3b4; Evidence: ev_65adc292128c6cfe67e09bc60bda72971336205fb912da27388d56637a03cb40 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b3b4(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_180023308 != '\0') {
    return;
  }
  LOCK();
  DAT_1800232f8 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_180023300 != DAT_180022000) {
      bVar1 = (byte)DAT_180022000 & 0x3f;
      (*(code *)((DAT_180022000 ^ DAT_180023300) >> bVar1 |
                (DAT_180022000 ^ DAT_180023300) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180023438;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000b423;
    puVar2 = &DAT_180023450;
  }
  FUN_18000bd5c(puVar2);
LAB_18000b423:
  if (*(int *)*param_1 == 0) {
    FUN_18000b188((undefined8 *)&DAT_1800162f8,(undefined8 *)&DAT_180016318);
  }
  FUN_18000b188((undefined8 *)&DAT_180016320,(undefined8 *)&DAT_180016328);
  if (*(int *)param_1[1] == 0) {
    DAT_180023308 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

