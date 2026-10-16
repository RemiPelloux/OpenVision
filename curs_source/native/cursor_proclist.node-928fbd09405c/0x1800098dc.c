
/* Address: 0x1800098dc; Evidence: ev_8329693afd0447bf161f5511f3f84b1f240d05d72c4547cbf160824840ea243f */

ulonglong FUN_1800098dc(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_180028d28 = 1;
  }
  FUN_18000a150();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_1800109e8();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

