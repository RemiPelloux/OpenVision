
/* Address: 0x18000b0c0; Evidence: ev_1dab622bafe8d16e83bbdf3db7ced686df934f1a1a40b4cfcf36ada5587e3445 */

ulonglong FUN_18000b0c0(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180022000 & 0x3f;
  uVar2 = DAT_1800232f0 ^ DAT_180022000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

