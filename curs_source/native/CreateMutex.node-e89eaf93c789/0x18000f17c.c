
/* Address: 0x18000f17c; Evidence: ev_3cca4563f4249acf09808dde3a1f0b7920534a7bbebac01ff189d740812edc78 */

ulonglong FUN_18000f17c(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180022000 & 0x3f;
  uVar2 = DAT_180023c08 ^ DAT_180022000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

