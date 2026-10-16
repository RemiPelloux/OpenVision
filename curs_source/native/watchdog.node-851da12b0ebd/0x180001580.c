
/* Address: 0x180001580; Evidence: ev_7ee0867ec463be68fccdca58d47b879ec5c11461f249f0aa33851f4f58b23c62 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180001580(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180001c84(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_18001b030 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001e48(7);
    }
    DAT_18001b030 = 1;
    bVar2 = FUN_180001b88();
    if (bVar2) {
      FUN_180001f94();
      FUN_180001ad0();
      FUN_180001afc();
      uVar4 = FUN_180005080((undefined8 *)&DAT_18000f2d8,(undefined8 *)&DAT_18000f2f8);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180005048((undefined8 *)&DAT_18000f2c8,(undefined8 *)&DAT_18000f2d0);
        DAT_18001b030 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180001e34();
      if ((*plVar5 != 0) && (uVar6 = FUN_180001d4c((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_18001aa98 = DAT_18001aa98 + 1;
      return 1;
    }
  }
  return 0;
}

