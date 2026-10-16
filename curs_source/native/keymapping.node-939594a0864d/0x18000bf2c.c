
/* Address: 0x18000bf2c; Evidence: ev_c8b88e302527b85783dd5f539bc7a3fd67462ef9a73a0fec294b4abee2836262 */

undefined4 FUN_18000bf2c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18002844c;
  LOCK();
  DAT_18002844c = 1;
  UNLOCK();
  return uVar1;
}

