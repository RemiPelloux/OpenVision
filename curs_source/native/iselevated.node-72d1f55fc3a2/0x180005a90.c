
/* Address: 0x180005a90; Evidence: ev_a7985332a80b7aacbe701454c7f16e918a44ddf7a4901f20fc917da8850f5fb7 */

void FUN_180005a90(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005a20(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_180006728(lVar1,param_1 + 3,param_1[1]);
  FUN_180006794(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

