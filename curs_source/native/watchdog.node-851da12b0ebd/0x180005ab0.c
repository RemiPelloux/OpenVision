
/* Address: 0x180005ab0; Evidence: ev_3468fcb3cea48767a01c6c1aaf2b571e2661b4731a5ea574efdd24731cfa7914 */

undefined8 FUN_180005ab0(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_18001b580;
  uVar2 = (ulonglong)uVar1;
  *DAT_18001b580 = *DAT_18001b580 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_18001b580 != (uint *)&DAT_18001a210)) {
    uVar2 = FUN_180006d00(DAT_18001b580);
    DAT_18001b580 = (uint *)&DAT_18001a210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

