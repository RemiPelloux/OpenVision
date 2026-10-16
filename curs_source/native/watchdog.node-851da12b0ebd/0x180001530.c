
/* Address: 0x180001530; Evidence: ev_e39dbe297cbb42ba0e05aa6443809e513eca832cd909b3a80807606940db8287 */

ulonglong FUN_180001530(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180001698(param_3 != 0);
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
      bVar1 = FUN_180001bc8();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_180001580(param_1,param_3);
  return uVar2;
}

