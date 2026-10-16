
/* Address: 0x180005910; Evidence: ev_540261c04c02bbffc3e2cb3937f8484289d106a0a62b9f599e230315306afbda */

undefined8 FUN_180005910(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180005a98();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180005a98();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180005a98();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180005a98();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_18000b4ec();
  }
  return 0;
}

