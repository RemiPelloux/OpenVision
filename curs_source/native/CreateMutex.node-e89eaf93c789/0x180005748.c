
/* Address: 0x180005748; Evidence: ev_f18de4dbd1ad42ad9232d58e9ce8d9382e47635d228ca6d85ddfd5afa7125a45 */

ulonglong FUN_180005748(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_1800231a0 = 1;
  }
  FUN_180005ad0();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000bf2c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

