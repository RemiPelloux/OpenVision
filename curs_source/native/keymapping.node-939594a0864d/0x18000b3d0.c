
/* Address: 0x18000b3d0; Evidence: ev_0e07cb3fa3b96af1a7448d931b5b20bc62efb13c22e53810267b31787ecb30fa */

undefined8 FUN_18000b3d0(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_180028bd0;
  uVar2 = (ulonglong)uVar1;
  *DAT_180028bd0 = *DAT_180028bd0 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_180028bd0 != (uint *)&DAT_180027370)) {
    uVar2 = FUN_18000bff0(DAT_180028bd0);
    DAT_180028bd0 = (uint *)&DAT_180027370;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

