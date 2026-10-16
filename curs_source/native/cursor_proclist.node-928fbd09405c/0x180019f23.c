
/* Address: 0x180019f23; Evidence: ev_800a83c2c3263093912f532b9c6baf5b3d2efde45fc440ba48e257bb06a3a316 */

void FUN_180019f23(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_18000babc();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

