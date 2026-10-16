
/* Address: 0x180006b18; Evidence: ev_9b31a7166ff1dc1d4286c6b4a3a6c00e44c44154b259228d39584a6457ea95d5 */

ulonglong FUN_180006b18(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_1800241a0 = 1;
  }
  FUN_180006ea4();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000d31c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

