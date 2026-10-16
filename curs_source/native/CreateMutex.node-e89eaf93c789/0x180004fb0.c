
/* Address: 0x180004fb0; Evidence: ev_9b8d9c3116dabf0d913373d07cfa425b897a2c010fe23f61d59f5001b125758d */

ulonglong FUN_180004fb0(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180005118(param_3 != 0);
    return uVar2;
  }
  if (param_2 != 1) {
    if (param_2 == 2) {
      bVar1 = __scrt_dllmain_crt_thread_attach();
    }
    else {
      if (param_2 != 3) {
        return 1;
      }
      bVar1 = FUN_18000568c();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_180005000(param_1,param_3);
  return uVar2;
}

