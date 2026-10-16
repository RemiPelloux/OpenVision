
/* Address: 0x18000c680; Evidence: ev_89ca5d7c599cf2dab6db6c964eda5686a010b6d4dc9ba79ea4ed65b05725558c */

undefined4 FUN_18000c680(void)

{
  BOOL in_EAX;
  
  if (DAT_180021098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_180021098);
    DAT_180021098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

