
/* Address: 0x18000ca6c; Evidence: ev_b3dc5d4644afa4c1ae958ec00803bf2d18287f06e85f8b3013aac5aac8f0af0b */

undefined4 FUN_18000ca6c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18002346c;
  LOCK();
  DAT_18002346c = 1;
  UNLOCK();
  return uVar1;
}

