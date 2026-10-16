
/* Address: 0x180006a70; Evidence: ev_fb7ee6fc6dc95739ad1cec5a2442a7b4f1d2d2f976e332282af2ec4487284f4b */

undefined8 FUN_180006a70(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180006ed8();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180006ed8();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180006ed8();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180006ed8();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_18000bd2c();
  }
  return 0;
}

