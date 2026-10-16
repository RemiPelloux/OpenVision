
/* Address: 0x18000a600; Evidence: ev_be67997ad33e4aafd77bf737e79e3eceed2857f99b1917f36af2d1153b1687b1 */

ulonglong FUN_18000a600(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180027000 & 0x3f;
  uVar2 = DAT_1800282c8 ^ DAT_180027000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

