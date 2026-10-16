
/* Address: 0x180007a84; Evidence: ev_346f67e9dabf3d33f5bf1de9dbdc6c1c65e8e0d9e259a56ce44e114a2ed1f234 */

ulonglong FUN_180007a84(int *param_1)

{
  int iVar1;
  ulonglong in_RAX;
  longlong lVar2;
  undefined4 extraout_var;
  int iVar3;
  longlong lVar4;
  
  iVar3 = 0;
  if (0 < *param_1) {
    lVar4 = 0;
    do {
      iVar1 = param_1[1];
      lVar2 = FUN_180006170();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_180006170();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_180006170();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_180005784(lVar2 + 8,0x180027b58);
      in_RAX = CONCAT44(extraout_var,iVar1);
      if (iVar1 == 0) {
        return CONCAT71((int7)(in_RAX >> 8),1);
      }
      iVar3 = iVar3 + 1;
      lVar4 = lVar4 + 0x14;
    } while (iVar3 < *param_1);
  }
  return in_RAX & 0xffffffffffffff00;
}

