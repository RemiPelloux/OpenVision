
/* Address: 0x18000d280; Evidence: ev_0099faf46f1fdb2c700d0d08738c27ee37bb00d7968ba6f787206bd0e29b80ad */

undefined8 FUN_18000d280(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_1800246f0;
  uVar2 = (ulonglong)uVar1;
  *DAT_1800246f0 = *DAT_1800246f0 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_1800246f0 != (uint *)&DAT_180023210)) {
    uVar2 = FUN_18000dfd0(DAT_1800246f0);
    DAT_1800246f0 = (uint *)&DAT_180023210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

