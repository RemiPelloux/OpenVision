
/* Address: 0x180004cd8; Evidence: ev_9ac6d22e3750723ebd92a2ae653eb60bdb2653cf168204e2cc29a0e40e0f6eeb */

ulonglong FUN_180004cd8(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_180028158 = 1;
  }
  FUN_18000508c();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000b46c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

