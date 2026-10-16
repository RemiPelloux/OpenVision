
/* Address: 0x180004d30; Evidence: ev_9524f313400207a05ace0e8046b4d50fcea0cfb36dd17264dc7ceb0d21842271 */

ulonglong FUN_180004d30(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180004e98(param_3 != 0);
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
      bVar1 = FUN_18000540c();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_180004d80(param_1,param_3);
  return uVar2;
}

