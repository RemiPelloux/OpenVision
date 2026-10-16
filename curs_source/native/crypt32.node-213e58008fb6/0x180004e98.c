
/* Address: 0x180004e98; Evidence: ev_54caab353a8239c34f9ff7466fc27d02f72c0ab9aaf714c74e4f11dc53e307f1 */

ulonglong FUN_180004e98(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180021bf8 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180021bf8 = DAT_180021bf8 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180022190 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_18000568c(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180005324();
    FUN_180005814();
    DAT_180022190 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_1800054b4();
  }
  return uVar2;
}

