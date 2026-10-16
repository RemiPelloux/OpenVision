
/* Address: 0x1800036e0; Evidence: ev_1bdd35221b4f05a35e57dbd18e31481389b7a44510d6dfe35bf3bdba8101b015 */

undefined8 FUN_1800036e0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180003868();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180003868();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180003868();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180003868();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_180006f9c();
  }
  return 0;
}

