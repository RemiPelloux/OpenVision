
/* Address: 0x18000dd6c; Evidence: ev_40f9285135980a6ab843de2029f0bc14fb7254d55371da6bad202f031f8d585d */

ulonglong FUN_18000dd6c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_18000c834(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_18001c750)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_18000dea8(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18000c85c(*param_4);
  return uVar3;
}

