
/* Address: 0x180004d80; Evidence: ev_92ba9282f9685ab74c2a439494ff160241d91372675384dbe0d4fe58d1f3e3b0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180004d80(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_1800054c8(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180022190 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_18000568c(7);
    }
    DAT_180022190 = 1;
    bVar2 = FUN_1800053cc();
    if (bVar2) {
      FUN_1800057d8();
      FUN_180005314();
      FUN_180005340();
      uVar4 = FUN_18000af40((undefined8 *)&DAT_1800152e0,(undefined8 *)&DAT_180015300);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_18000af08((undefined8 *)&DAT_1800152d0,(undefined8 *)&DAT_1800152d8);
        DAT_180022190 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180005678();
      if ((*plVar5 != 0) && (uVar6 = FUN_180005590((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180021bf8 = DAT_180021bf8 + 1;
      return 1;
    }
  }
  return 0;
}

