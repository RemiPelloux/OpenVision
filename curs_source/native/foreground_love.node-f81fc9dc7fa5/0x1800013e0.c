
/* Address: 0x1800013e0; Evidence: ev_52911d2f443ab3b24ccf240545ce98e5430c942a7448fe02b51e41c2ddd8d5db */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800013e0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180001ae4(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_18001b030 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ca8(7);
    }
    DAT_18001b030 = 1;
    bVar2 = FUN_1800019e8();
    if (bVar2) {
      FUN_180001df4();
      FUN_180001930();
      FUN_18000195c();
      uVar4 = FUN_180004c38((undefined8 *)&DAT_18000f2d0,(undefined8 *)&DAT_18000f2f0);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180004c00((undefined8 *)&DAT_18000f2c0,(undefined8 *)&DAT_18000f2c8);
        DAT_18001b030 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180001c94();
      if ((*plVar5 != 0) && (uVar6 = FUN_180001bac((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_18001aa98 = DAT_18001aa98 + 1;
      return 1;
    }
  }
  return 0;
}

