
/* Address: 0x18000b5b8; Evidence: ev_c8d8bd74f030d114ebad2258244b16ade45b5785af0edd07e21c3536c14c635c */

undefined8 FUN_18000b5b8(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_18000babc();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_18000babc();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_18000babc();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_18000babc();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_180010adc();
  }
  return 0;
}

