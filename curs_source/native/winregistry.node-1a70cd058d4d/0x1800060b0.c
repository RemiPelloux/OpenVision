
/* Address: 0x1800060b0; Evidence: ev_573781d94f0c63a4e5d0875fb4eb0ad48ff41d3246f7e9b93e9586e410f9fa97 */

ulonglong FUN_1800060b0(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_18001b000 & 0x3f;
  uVar2 = DAT_18001c250 ^ DAT_18001b000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

