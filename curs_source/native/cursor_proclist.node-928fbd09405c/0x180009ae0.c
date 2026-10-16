
/* Address: 0x180009ae0; Evidence: ev_c26869da747320ce302835197c3352966dc68061af2e1f490dde23a3a732d905 */

ulonglong FUN_180009ae0(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180009c48(param_3 != 0);
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
      bVar1 = FUN_180009820();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_180009b30(param_1,param_3);
  return uVar2;
}

