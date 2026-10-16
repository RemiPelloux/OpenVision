
/* Address: 0x18000dcf0; Evidence: ev_927f7eb137cb477cbf706c68adedcb53867eb972b592715d3ba684adeb44b63f */

undefined4 FUN_18000dcf0(void)

{
  BOOL in_EAX;
  
  if (DAT_180023098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_180023098);
    DAT_180023098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

