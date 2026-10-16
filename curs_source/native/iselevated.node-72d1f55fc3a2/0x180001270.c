
/* Address: 0x180001270; Evidence: ev_43fee21d07d922ba5b702387972569c4970228e9f72d0295bd2fb9b23b6eaf6b */

ulonglong FUN_180001270(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_1800013d8(param_3 != 0);
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
      bVar1 = FUN_180001908();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800012c0(param_1,param_3);
  return uVar2;
}

