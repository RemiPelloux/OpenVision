
/* Address: 0x1800078f0; Evidence: ev_9d68590bebb7a81c4adf2e2b45358f71796ed8f6d8107d9ae4dd312a350ba081 */

undefined4 FUN_1800078f0(void)

{
  BOOL in_EAX;
  
  if (DAT_18001b098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_18001b098);
    DAT_18001b098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

