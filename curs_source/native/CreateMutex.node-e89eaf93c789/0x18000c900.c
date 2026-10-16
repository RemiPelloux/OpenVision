
/* Address: 0x18000c900; Evidence: ev_52d2fcd8dd030564c8aaca79119e5938a4d6e0ad75ea38c803871ded76de59f0 */

undefined4 FUN_18000c900(void)

{
  BOOL in_EAX;
  
  if (DAT_180022098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_180022098);
    DAT_180022098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

