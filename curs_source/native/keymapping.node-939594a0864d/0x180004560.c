
/* Address: 0x180004560; Evidence: ev_d716a750b311670b836b6eb7ec3bc3f1ad176f0db6f284a9806e6ea5e319e66b */

ulonglong FUN_180004560(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_1800046c8(param_3 != 0);
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
      bVar1 = FUN_180004c1c();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800045b0(param_1,param_3);
  return uVar2;
}

