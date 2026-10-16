
/* Address: 0x1800046c8; Evidence: ev_f83f0d727eba9c60524048f12300a16008eb9b4d8b1ff728ecb4de89c73f585a */

ulonglong FUN_1800046c8(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180028120 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180028120 = DAT_180028120 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180028148 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180004e9c(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180004b3c();
    FUN_180005024();
    DAT_180028148 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180004cc4();
  }
  return uVar2;
}

