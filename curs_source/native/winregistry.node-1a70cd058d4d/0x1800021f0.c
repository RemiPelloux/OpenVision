
/* Address: 0x1800021f0; Evidence: ev_9a42c5de0f49351314735433ff68b82476587ea402763bc9022ccaf7b2bffa82 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800021f0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180002aa0(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_18001c0e0 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180002c64(7);
    }
    DAT_18001c0e0 = 1;
    bVar2 = FUN_1800029a4();
    if (bVar2) {
      FUN_180002db0();
      FUN_1800028ec();
      FUN_180002918();
      uVar4 = FUN_1800061b0((undefined8 *)&DAT_1800102e0,(undefined8 *)&DAT_180010300);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180006178((undefined8 *)&DAT_1800102d0,(undefined8 *)&DAT_1800102d8);
        DAT_18001c0e0 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180002c50();
      if ((*plVar5 != 0) && (uVar6 = FUN_180002b68((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_18001bb48 = DAT_18001bb48 + 1;
      return 1;
    }
  }
  return 0;
}

