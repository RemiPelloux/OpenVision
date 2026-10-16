
/* Address: 0x18000a8f4; Evidence: ev_c262f0b7b15416c7976d52778b226919c47c5856e87250c1ea880308a4ea59fa */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000a8f4(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_1800282e0 != '\0') {
    return;
  }
  LOCK();
  DAT_1800282d0 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_1800282d8 != DAT_180027000) {
      bVar1 = (byte)DAT_180027000 & 0x3f;
      (*(code *)((DAT_180027000 ^ DAT_1800282d8) >> bVar1 |
                (DAT_180027000 ^ DAT_1800282d8) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180028418;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000a963;
    puVar2 = &DAT_180028430;
  }
  FUN_18000b29c(puVar2);
LAB_18000a963:
  if (*(int *)*param_1 == 0) {
    FUN_18000a6c8((undefined8 *)&DAT_180019360,(undefined8 *)&DAT_180019380);
  }
  FUN_18000a6c8((undefined8 *)&DAT_180019388,(undefined8 *)&DAT_180019390);
  if (*(int *)param_1[1] == 0) {
    DAT_1800282e0 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

