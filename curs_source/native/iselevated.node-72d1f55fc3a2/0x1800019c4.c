
/* Address: 0x1800019c4; Evidence: ev_269955c63b3fa69d80c2d758f316dcb9a1a0468ca9123c96f4f6f045d4f9625a */

ulonglong FUN_1800019c4(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_18001a040 = 1;
  }
  FUN_180001d54();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000587c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

