
/* Address: 0x1800057e0; Evidence: ev_76ed5751f407df28cfd5dac25531d2dc382156ba4b22d9b51c6b6e2076775b98 */

undefined8 FUN_1800057e0(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_18001a580;
  uVar2 = (ulonglong)uVar1;
  *DAT_18001a580 = *DAT_18001a580 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_18001a580 != (uint *)&DAT_180019210)) {
    uVar2 = FUN_180006a30(DAT_18001a580);
    DAT_18001a580 = (uint *)&DAT_180019210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

