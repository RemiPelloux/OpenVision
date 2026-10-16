
/* Address: 0x180008f40; Evidence: ev_f8b04ef74c7c73cb861a1624ca9aa18c4d4cdaf88f8371c547f2cc9e2248b1be */

ulonglong FUN_180008f40(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180019000 & 0x3f;
  uVar2 = DAT_18001aa88 ^ DAT_180019000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

