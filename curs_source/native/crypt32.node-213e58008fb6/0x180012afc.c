
/* Address: 0x180012afc; Evidence: ev_1ba07342150ba097eaed34b55c2ccc1b626a2ff00a6d3a049c528ce22cc21de2 */

ulonglong FUN_180012afc(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_1800115c4(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_1800227f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_180012c38(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_1800115ec(*param_4);
  return uVar3;
}

