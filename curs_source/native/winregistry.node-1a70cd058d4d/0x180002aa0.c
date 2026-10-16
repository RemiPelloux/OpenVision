
/* Address: 0x180002aa0; Evidence: ev_26217ca52d40be017ad3bb3b27f5a87775406eaea526b6129b0420b00058d014 */

ulonglong FUN_180002aa0(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_18001c0f0 = 1;
  }
  FUN_180002e5c();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_180006f1c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

