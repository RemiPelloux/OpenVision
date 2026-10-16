
/* Address: 0x1800045b0; Evidence: ev_63b2aa2df50c35677100982ec1e667646aecd80959039f1f3c211eea96cf6d4a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800045b0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180004cd8(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180028148 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180004e9c(7);
    }
    DAT_180028148 = 1;
    bVar2 = FUN_180004bdc();
    if (bVar2) {
      FUN_180004fe8();
      FUN_180004b2c();
      FUN_180004b50();
      uVar4 = FUN_18000a700((undefined8 *)&DAT_180019338,(undefined8 *)&DAT_180019358);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_18000a6c8((undefined8 *)&DAT_180019328,(undefined8 *)&DAT_180019330);
        DAT_180028148 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180004e88();
      if ((*plVar5 != 0) && (uVar6 = FUN_180004da0((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180028120 = DAT_180028120 + 1;
      return 1;
    }
  }
  return 0;
}

