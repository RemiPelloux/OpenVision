
/* Address: 0x1800080c0; Evidence: ev_2cbb86fd21ee5f8dec1e1d66d0aabd910f524bcb68d7593cbfc1a3b84dd60c17 */

undefined8 FUN_1800080c0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180008548();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180008548();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180008548();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180008548();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_18000d39c();
  }
  return 0;
}

