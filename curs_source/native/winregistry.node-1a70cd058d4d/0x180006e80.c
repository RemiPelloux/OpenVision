
/* Address: 0x180006e80; Evidence: ev_dd481b318ba7d26d7fe863885cef3a4b6c7bc8379d02a1e0d58cb30466eda1fe */

undefined8 FUN_180006e80(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_18001c650;
  uVar2 = (ulonglong)uVar1;
  *DAT_18001c650 = *DAT_18001c650 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_18001c650 != (uint *)&DAT_18001b210)) {
    uVar2 = FUN_180007bd0(DAT_18001c650);
    DAT_18001c650 = (uint *)&DAT_18001b210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

