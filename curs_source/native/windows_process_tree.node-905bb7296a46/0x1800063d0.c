
/* Address: 0x1800063d0; Evidence: ev_9315ace559ca247796de37048d207f688a3972a4d5b4b22893534a9207933bfa */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800063d0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180006b18(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180024190 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180006cdc(7);
    }
    DAT_180024190 = 1;
    bVar2 = FUN_180006a1c();
    if (bVar2) {
      FUN_180006e28();
      FUN_180006964();
      FUN_180006990();
      uVar4 = FUN_18000c5b0((undefined8 *)&DAT_180017308,(undefined8 *)&DAT_180017328);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_18000c578((undefined8 *)&DAT_1800172f8,(undefined8 *)&DAT_180017300);
        DAT_180024190 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180006cc8();
      if ((*plVar5 != 0) && (uVar6 = FUN_180006be0((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180023bf8 = DAT_180023bf8 + 1;
      return 1;
    }
  }
  return 0;
}

