
/* Address: 0x180009210; Evidence: ev_e50675d469e3539ae1a2ca916064972285e2ffa62a056442dc8ea656c72ffcb4 */

ulonglong FUN_180009210(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_18001a000 & 0x3f;
  uVar2 = DAT_18001ba88 ^ DAT_18001a000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

