
/* Address: 0x180005118; Evidence: ev_3064642adaacb5118229cad0a43d6ebdef52957f9164138dccd2fd7112d22dbd */

ulonglong FUN_180005118(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180022bf8 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180022bf8 = DAT_180022bf8 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180023190 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_18000590c(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_1800055a4();
    FUN_180005a94();
    DAT_180023190 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180005734();
  }
  return uVar2;
}

