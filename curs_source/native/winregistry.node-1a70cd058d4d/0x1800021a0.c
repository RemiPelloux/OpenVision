
/* Address: 0x1800021a0; Evidence: ev_3ed5e00a5513902472ea26b3a92f96b28cee0e8a82cc283d5d1335852c47a729 */

ulonglong FUN_1800021a0(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180002308(param_3 != 0);
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
      bVar1 = FUN_1800029e4();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800021f0(param_1,param_3);
  return uVar2;
}

