
/* Address: 0x180009060; Evidence: ev_ccf6e289e1f3142d11bd1248ebf5e98f796e8a050b1fba5df7ceb65e07409893 */

ulonglong FUN_180009060(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_18001a000 & 0x3f;
  uVar2 = DAT_18001ba88 ^ DAT_18001a000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

