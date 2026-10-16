
/* Address: 0x180011418; Evidence: ev_4cac6585a78bd59f73b5cc8320341187b6718e02ba52020d199d7b594b5e2541 */

undefined4 FUN_180011418(void)

{
  BOOL in_EAX;
  
  if (DAT_1800280d8 != 0xffffffff) {
    in_EAX = FlsFree(DAT_1800280d8);
    DAT_1800280d8 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

