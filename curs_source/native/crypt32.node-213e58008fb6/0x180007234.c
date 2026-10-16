
/* Address: 0x180007234; Evidence: ev_53e95a7c84caa7887f9385bd7566a16d6cf424bea100f6550ce17c1f4dc4cbef */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_180007234(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

{
  int iVar1;
  longlong lVar2;
  undefined1 (*pauVar3) [32];
  ulonglong uVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  
  uVar5 = 0;
  uVar6 = 0;
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180006750();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180006750();
    uVar4 = iVar1 + lVar2;
  }
  if (*(char *)(uVar4 + 0x10) == '\0') {
    return '\0';
  }
  if ((*(int *)(param_3 + 8) == 0) && (-1 < *(int *)param_3)) {
    return '\0';
  }
  if (-1 < *(int *)param_3) {
    param_2 = (undefined1 (*) [32])((longlong)*(int *)(param_3 + 8) + *(longlong *)*param_2);
  }
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_1800221e8 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180006764();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180006764();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_1800073e6;
            }
          }
                    /* WARNING: Subroutine does not return */
          abort();
        }
        if ((*(longlong *)(param_1 + 0x28) == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
          abort();
        }
        iVar1 = *(int *)(param_4 + 0x14);
        pauVar3 = (undefined1 (*) [32])
                  FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_180013df0(param_2,pauVar3,(longlong)iVar1);
        goto LAB_1800073e6;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_180013df0(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_1800073e6;
      lVar2 = *(longlong *)*param_2;
    }
    else {
      lVar2 = *(longlong *)(param_1 + 0x28);
      if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      *(longlong *)*param_2 = lVar2;
    }
  }
  else {
    lVar2 = (*(code *)DAT_1800221e8)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_180006a48(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_1800073e6:
  return (char)uVar6;
}

