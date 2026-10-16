
/* Address: 0x18000cf2c; Evidence: ev_ebaa4e50717bb019713af4a761b6b6e6050ae530cd6d224f7059dacb7f272dd9 */

ulonglong FUN_18000cf2c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_18000b9f4(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_18001b680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_18000d068(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18000ba1c(*param_4);
  return uVar3;
}

