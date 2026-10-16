
/* Address: 0x1800054c8; Evidence: ev_e98298fce9092369eb7bf5208554157a96f0e1805d4a382b5b8820d8cacabdff */

ulonglong FUN_1800054c8(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_1800221a0 = 1;
  }
  FUN_180005850();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000bcac();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

