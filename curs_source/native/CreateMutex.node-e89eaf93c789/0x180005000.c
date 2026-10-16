
/* Address: 0x180005000; Evidence: ev_ce3a3a4f6d553c59519baac45dbf641f67672326d9ffc1bc0ebfb6fb252795e4 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180005000(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180005748(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180023190 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_18000590c(7);
    }
    DAT_180023190 = 1;
    bVar2 = FUN_18000564c();
    if (bVar2) {
      FUN_180005a58();
      FUN_180005594();
      FUN_1800055c0();
      uVar4 = FUN_18000b1c0((undefined8 *)&DAT_1800162d0,(undefined8 *)&DAT_1800162f0);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_18000b188((undefined8 *)&DAT_1800162c0,(undefined8 *)&DAT_1800162c8);
        DAT_180023190 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_1800058f8();
      if ((*plVar5 != 0) && (uVar6 = FUN_180005810((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180022bf8 = DAT_180022bf8 + 1;
      return 1;
    }
  }
  return 0;
}

