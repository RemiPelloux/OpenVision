
/* Address: 0x180009b30; Evidence: ev_b0c219dfd40a7dff1c3258b53241c779295c5e9479283218759168e3860d1f01 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180009b30(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_1800098dc(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180028d18 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_18000a408(7);
    }
    DAT_180028d18 = 1;
    bVar2 = FUN_1800097e0();
    if (bVar2) {
      FUN_18000a654();
      FUN_18000a604();
      FUN_18000a630();
      uVar4 = FUN_180010aa0((undefined8 *)&DAT_18001b2f8,(undefined8 *)&DAT_18001b318);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180010a68((undefined8 *)&DAT_18001b2e0,(undefined8 *)&DAT_18001b2f0);
        DAT_180028d18 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_18000a64c();
      if ((*plVar5 != 0) && (uVar6 = FUN_1800099a4((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180028d60 = DAT_180028d60 + 1;
      return 1;
    }
  }
  return 0;
}

