
/* Address: 0x1800063a4; Evidence: ev_af88c36591479b1a115fbd5f08b5631b0cc916a1d86c78afc3c248c1c36b2cce */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800063a4(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_18001c268 != '\0') {
    return;
  }
  LOCK();
  DAT_18001c258 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_18001c260 != DAT_18001b000) {
      bVar1 = (byte)DAT_18001b000 & 0x3f;
      (*(code *)((DAT_18001b000 ^ DAT_18001c260) >> bVar1 |
                (DAT_18001b000 ^ DAT_18001c260) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_18001c398;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_180006413;
    puVar2 = &DAT_18001c3b0;
  }
  FUN_180006d4c(puVar2);
LAB_180006413:
  if (*(int *)*param_1 == 0) {
    FUN_180006178((undefined8 *)&DAT_180010308,(undefined8 *)&DAT_180010328);
  }
  FUN_180006178((undefined8 *)&DAT_180010330,(undefined8 *)&DAT_180010338);
  if (*(int *)param_1[1] == 0) {
    DAT_18001c268 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

