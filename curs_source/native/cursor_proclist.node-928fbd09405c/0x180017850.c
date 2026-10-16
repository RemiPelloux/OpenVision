
/* Address: 0x180017850; Evidence: ev_55e4613bdba57575828a8499424c66c9b3594098a8d3229d95481f1e3273b9ae */

ulonglong FUN_180017850(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_180016324(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_180029920)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_18001798c(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18001634c(*param_4);
  return uVar3;
}

