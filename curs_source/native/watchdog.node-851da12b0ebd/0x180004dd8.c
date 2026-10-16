
/* Address: 0x180004dd8; Evidence: ev_b2fab956586ab4c0823fcc79ea0e7b5446889a1a321361adeef9554be3fd8228 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004dd8(undefined8 *param_1)

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
    if (*(int *)*param_1 != 1) goto LAB_180004e47;
    puVar2 = &DAT_18001b2e0;
  }
  FUN_180005980(puVar2);
LAB_180004e47:
  if (*(int *)*param_1 == 0) {
    FUN_180005048((undefined8 *)&DAT_18000f300,(undefined8 *)&DAT_18000f320);
  }
  FUN_180005048((undefined8 *)&DAT_18000f328,(undefined8 *)&DAT_18000f330);
  if (*(int *)param_1[1] == 0) {
    DAT_18001b198 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

