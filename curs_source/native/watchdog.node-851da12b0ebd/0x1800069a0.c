
/* Address: 0x1800069a0; Evidence: ev_e04a52ab75975131bc4fb5c404ad2a4f9060016e008c849388ee15760f64abef */

undefined4 FUN_1800069a0(void)

{
  BOOL in_EAX;
  
  if (DAT_18001a098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_18001a098);
    DAT_18001a098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

