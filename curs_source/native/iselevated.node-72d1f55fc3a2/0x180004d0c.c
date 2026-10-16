
/* Address: 0x180004d0c; Evidence: ev_60ec54a9f8e2f9fa04db14c621ace9357bc21612383ae13dbc3e876bba1dc501 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004d0c(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_18001a198 != '\0') {
    return;
  }
  LOCK();
  DAT_18001a188 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_18001a190 != DAT_180019000) {
      bVar1 = (byte)DAT_180019000 & 0x3f;
      (*(code *)((DAT_180019000 ^ DAT_18001a190) >> bVar1 |
                (DAT_180019000 ^ DAT_18001a190) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_18001a2c8;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_180004d7b;
    puVar2 = &DAT_18001a2e0;
  }
  FUN_1800056b4(puVar2);
LAB_180004d7b:
  if (*(int *)*param_1 == 0) {
    FUN_180004ae0((undefined8 *)&DAT_18000f308,(undefined8 *)&DAT_18000f328);
  }
  FUN_180004ae0((undefined8 *)&DAT_18000f330,(undefined8 *)&DAT_18000f338);
  if (*(int *)param_1[1] == 0) {
    DAT_18001a198 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

