
/* Address: 0x180001c84; Evidence: ev_971b22de011f05b5820878c8691f1686633c248a0e74efff8a913cf2b4601a66 */

ulonglong FUN_180001c84(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_18001b040 = 1;
  }
  FUN_180002014();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_180005b4c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

