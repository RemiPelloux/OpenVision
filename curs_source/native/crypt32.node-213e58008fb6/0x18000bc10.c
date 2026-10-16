
/* Address: 0x18000bc10; Evidence: ev_06c46998357f34070de22154dc70dc4fb4317026e2a819de97fb4fb96648d333 */

undefined8 FUN_18000bc10(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_1800226f0;
  uVar2 = (ulonglong)uVar1;
  *DAT_1800226f0 = *DAT_1800226f0 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_1800226f0 != (uint *)&DAT_180021210)) {
    uVar2 = FUN_18000c960(DAT_1800226f0);
    DAT_1800226f0 = (uint *)&DAT_180021210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}

