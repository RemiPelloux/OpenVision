
/* Address: 0x1800012c0; Evidence: ev_7d68ffd92ae5541d89b64610573c7859d029d891a8f6d515697ef3f070825782 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800012c0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_1800019c4(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_18001a030 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001b88(7);
    }
    DAT_18001a030 = 1;
    bVar2 = FUN_1800018c8();
    if (bVar2) {
      FUN_180001cd4();
      FUN_180001810();
      FUN_18000183c();
      uVar4 = FUN_180004b18((undefined8 *)&DAT_18000f2e0,(undefined8 *)&DAT_18000f300);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180004ae0((undefined8 *)&DAT_18000f2d0,(undefined8 *)&DAT_18000f2d8);
        DAT_18001a030 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180001b74();
      if ((*plVar5 != 0) && (uVar6 = FUN_180001a8c((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180019a98 = DAT_180019a98 + 1;
      return 1;
    }
  }
  return 0;
}

