
/* Address: 0x180001698; Evidence: ev_94d11443527944a0818d965b8d239444c89bad75a414ea2a89f70c2c0f9cbee3 */

ulonglong FUN_180001698(bool param_1)

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
      FUN_180001e48(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180001ae0();
    FUN_180001fd0();
    DAT_18001b030 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180001c70();
  }
  return uVar2;
}

