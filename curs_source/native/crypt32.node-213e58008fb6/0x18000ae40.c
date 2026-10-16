
/* Address: 0x18000ae40; Evidence: ev_58d4d03a54caa00e4182223cb6fee7a76102ff5983e2dd51bc0ed38fb672bcf3 */

ulonglong FUN_18000ae40(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180021000 & 0x3f;
  uVar2 = DAT_1800222f0 ^ DAT_180021000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

