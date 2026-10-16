
/* Address: 0x18000f9e0; Evidence: ev_1d82e2811be0ffaeef12fccf2a51f4616f3ed739f183836c153d3865bf4d3513 */

ulonglong FUN_18000f9e0(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180028040 & 0x3f;
  uVar2 = DAT_180029420 ^ DAT_180028040;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

