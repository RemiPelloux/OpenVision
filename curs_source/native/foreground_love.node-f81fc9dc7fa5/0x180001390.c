
/* Address: 0x180001390; Evidence: ev_c436045788430f1c17c1758b77a43277b6f0b9dc8726b0d78027319faa058ab1 */

ulonglong FUN_180001390(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_1800014f8(param_3 != 0);
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
      bVar1 = FUN_180001a28();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800013e0(param_1,param_3);
  return uVar2;
}

