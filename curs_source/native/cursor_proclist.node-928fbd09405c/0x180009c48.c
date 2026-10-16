
/* Address: 0x180009c48; Evidence: ev_a29161d9daf811e64e5ff59064e7ef9eb1971a2492026783843a431e00ae5c6b */

ulonglong FUN_180009c48(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180028d60 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180028d60 = DAT_180028d60 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180028d18 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_18000a408(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_18000a614();
    FUN_18000a690();
    DAT_180028d18 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_1800098c8();
  }
  return uVar2;
}

