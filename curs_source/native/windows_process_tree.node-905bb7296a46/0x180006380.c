
/* Address: 0x180006380; Evidence: ev_13b3f6167581fbf4aac8bd22e61631b0e62c6322a136e2bc0c4932ce0baef3a8 */

ulonglong FUN_180006380(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_1800064e8(param_3 != 0);
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
      bVar1 = FUN_180006a5c();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800063d0(param_1,param_3);
  return uVar2;
}

