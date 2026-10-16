
/* Address: 0x180012d7c; Evidence: ev_f6eb5df388f2bf090384897eeb4dcdd2a3203dfbb7ca255658b4b97d11400539 */

ulonglong FUN_180012d7c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_180011844(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_1800237f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_180012eb8(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18001186c(*param_4);
  return uVar3;
}

