
/* Address: 0x18000de5c; Evidence: ev_f6d31defce6e3052e46415105dfce7d0d1083f95a16c55005c20f02a2a57fd12 */

undefined4 FUN_18000de5c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18002446c;
  LOCK();
  DAT_18002446c = 1;
  UNLOCK();
  return uVar1;
}

