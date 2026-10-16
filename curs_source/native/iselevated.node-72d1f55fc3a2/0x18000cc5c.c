
/* Address: 0x18000cc5c; Evidence: ev_ef0f1510b47b67e451f664242891b59da51fec5de493e360cecec84d9555bdcb */

ulonglong FUN_18000cc5c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_18000b724(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_18001a680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_18000cd98(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18000b74c(*param_4);
  return uVar3;
}

