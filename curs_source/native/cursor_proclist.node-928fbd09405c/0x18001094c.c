
/* Address: 0x18001094c; Evidence: ev_e317d07fde7ae9c56f491319490334a6674c615783a3d641374c01674dce26ab */

undefined8 FUN_18001094c(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_180029820;
  uVar2 = (ulonglong)uVar1;
  *DAT_180029820 = *DAT_180029820 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_180029820 != (uint *)&DAT_180028250)) {
    uVar2 = FUN_1800116e0(DAT_180029820);
    DAT_180029820 = (uint *)&DAT_180028250;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

