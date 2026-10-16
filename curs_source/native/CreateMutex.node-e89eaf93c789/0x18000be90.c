
/* Address: 0x18000be90; Evidence: ev_7a08cf40d3f7a06c8fa1c0e1a65b416ee21c679ff6aba33b67d6d3e8e6d9b430 */

undefined8 FUN_18000be90(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_1800236f0;
  uVar2 = (ulonglong)uVar1;
  *DAT_1800236f0 = *DAT_1800236f0 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_1800236f0 != (uint *)&DAT_180022210)) {
    uVar2 = FUN_18000cbe0(DAT_1800236f0);
    DAT_1800236f0 = (uint *)&DAT_180022210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

