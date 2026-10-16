
/* Address: 0x18000b134; Evidence: ev_afd0118ea7e7a86bc7882be970109d9a3503710e6f0972dc5d7bc9f447e8c2d9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b134(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_180022308 != '\0') {
    return;
  }
  LOCK();
  DAT_1800222f8 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_180022300 != DAT_180021000) {
      bVar1 = (byte)DAT_180021000 & 0x3f;
      (*(code *)((DAT_180021000 ^ DAT_180022300) >> bVar1 |
                (DAT_180021000 ^ DAT_180022300) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180022438;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000b1a3;
    puVar2 = &DAT_180022450;
  }
  FUN_18000badc(puVar2);
LAB_18000b1a3:
  if (*(int *)*param_1 == 0) {
    FUN_18000af08((undefined8 *)&DAT_180015308,(undefined8 *)&DAT_180015328);
  }
  FUN_18000af08((undefined8 *)&DAT_180015330,(undefined8 *)&DAT_180015338);
  if (*(int *)param_1[1] == 0) {
    DAT_180022308 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}

