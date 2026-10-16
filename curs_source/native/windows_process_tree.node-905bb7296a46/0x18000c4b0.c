
/* Address: 0x18000c4b0; Evidence: ev_ee110aebf36502919019721f2270470f05e866e1e316bd0013123ff0f5afdbbe */

ulonglong FUN_18000c4b0(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180023000 & 0x3f;
  uVar2 = DAT_1800242f0 ^ DAT_180023000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

