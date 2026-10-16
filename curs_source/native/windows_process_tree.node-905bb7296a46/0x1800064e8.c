
/* Address: 0x1800064e8; Evidence: ev_a208262ef15ae1206d2039f5e961adcd4fa4a6ece98aa0dfa2c63855cf2c7a5f */

ulonglong FUN_1800064e8(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180023bf8 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180023bf8 = DAT_180023bf8 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180024190 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180006cdc(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180006974();
    FUN_180006e64();
    DAT_180024190 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180006b04();
  }
  return uVar2;
}

