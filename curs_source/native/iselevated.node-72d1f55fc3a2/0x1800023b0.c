
/* Address: 0x1800023b0; Evidence: ev_17c52bbc2e81e0d56f21f5b98b3becc950952ebc43b28b2bc44d1be699ac5cf5 */

undefined8 FUN_1800023b0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180002538();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180002538();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180002538();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180002538();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_1800058fc();
  }
  return 0;
}

