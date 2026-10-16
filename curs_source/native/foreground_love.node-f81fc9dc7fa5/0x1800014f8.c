
/* Address: 0x1800014f8; Evidence: ev_bbbeffbfaec5db8b347e4f56627c34638a208d9e2afe128f99eeef0e9d4720b0 */

ulonglong FUN_1800014f8(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_18001aa98 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_18001aa98 = DAT_18001aa98 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_18001b030 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ca8(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180001940();
    FUN_180001e30();
    DAT_18001b030 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180001ad0();
  }
  return uVar2;
}

