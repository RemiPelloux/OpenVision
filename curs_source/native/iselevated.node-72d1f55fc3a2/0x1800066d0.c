
/* Address: 0x1800066d0; Evidence: ev_951c7b5939a9d2b4df46a605f0392c6137b87bd402dc300968d658d12509c300 */

undefined4 FUN_1800066d0(void)

{
  BOOL in_EAX;
  
  if (DAT_180019098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_180019098);
    DAT_180019098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}

