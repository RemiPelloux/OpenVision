
/* Address: 0x180002308; Evidence: ev_12783e01098db836bc3698841b3fad59bb35347cf9d644ca1737628506764857 */

ulonglong FUN_180002308(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_18001bb48 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_18001bb48 = DAT_18001bb48 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_18001c0e0 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180002c64(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_1800028fc();
    FUN_180002dec();
    DAT_18001c0e0 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180002a8c();
  }
  return uVar2;
}

