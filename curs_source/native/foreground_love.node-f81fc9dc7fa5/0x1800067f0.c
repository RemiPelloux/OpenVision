
/* Address: 0x1800067f0; Evidence: ev_862c9e1b6c7c516c9c877b1cb9e8bdcd9022724372a02512b1698957324df26c */

undefined4 FUN_1800067f0(void)

{
  BOOL in_EAX;
  
  if (DAT_18001a098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_18001a098);
    DAT_18001a098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

