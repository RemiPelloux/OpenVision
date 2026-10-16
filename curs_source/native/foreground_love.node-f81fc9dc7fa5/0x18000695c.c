
/* Address: 0x18000695c; Evidence: ev_6c8ab30a40da281f4c2535e22c2ec139f63362f5cc06a0736f4357093ee7b607 */

undefined4 FUN_18000695c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18001b304;
  LOCK();
  DAT_18001b304 = 1;
  UNLOCK();
  return uVar1;
}

