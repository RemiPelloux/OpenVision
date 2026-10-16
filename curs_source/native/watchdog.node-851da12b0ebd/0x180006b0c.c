
/* Address: 0x180006b0c; Evidence: ev_99d437a590da81c170fd54f28388d432d5e048baa76df53e38451241a04378e1 */

undefined4 FUN_180006b0c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18001b304;
  LOCK();
  DAT_18001b304 = 1;
  UNLOCK();
  return uVar1;
}

