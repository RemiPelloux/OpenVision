
/* Address: 0x1800150e8; Evidence: ev_dbfe8b288023f1f44c35b9ea089711ed99cb868f93565f5761047982db52d069 */

ulonglong FUN_1800150e8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_18001236c(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_180028520)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_180015224(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_180012394(*param_4);
  return uVar3;
}

