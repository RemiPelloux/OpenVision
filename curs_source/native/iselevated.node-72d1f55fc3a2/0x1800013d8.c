
/* Address: 0x1800013d8; Evidence: ev_3dd86f6f67362489c31dd5b73d113d2f2e824836c9c24ea9cc83c903b247a061 */

ulonglong FUN_1800013d8(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180019a98 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180019a98 = DAT_180019a98 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_18001a030 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180001b88(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180001820();
    FUN_180001d10();
    DAT_18001a030 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_1800019b0();
  }
  return uVar2;
}

