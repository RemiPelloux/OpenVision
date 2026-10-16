
/* Address: 0x18000bdc0; Evidence: ev_7ac1a782e9b111492b3e0c8f52ccf07444aaa3709a2da04a0e8b04bbbf16bbd0 */

undefined4 FUN_18000bdc0(void)

{
  BOOL in_EAX;
  
  if (DAT_1800271a8 != 0xffffffff) {
    in_EAX = FlsFree(DAT_1800271a8);
    DAT_1800271a8 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

