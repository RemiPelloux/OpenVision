
/* Address: 0x180005900; Evidence: ev_9594b469abac0ed54a750d8dfe61448e1d0c43028d51e5178de1a559772bed30 */

undefined8 FUN_180005900(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_18001b580;
  uVar2 = (ulonglong)uVar1;
  *DAT_18001b580 = *DAT_18001b580 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_18001b580 != (uint *)&DAT_18001a210)) {
    uVar2 = FUN_180006b50(DAT_18001b580);
    DAT_18001b580 = (uint *)&DAT_18001a210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

