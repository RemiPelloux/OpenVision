
/* Address: 0x1800024d0; Evidence: ev_580677bbcd5c9b68d9b9237e7ae670d5a1f79f7fe796fc599c657d96380746bf */

undefined8 FUN_1800024d0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180002658();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180002658();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180002658();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180002658();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_180005a1c();
  }
  return 0;
}

