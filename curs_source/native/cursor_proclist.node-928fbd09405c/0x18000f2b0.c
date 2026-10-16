
/* Address: 0x18000f2b0; Evidence: ev_bf7f71ca9d7e8067c7f9c7cddce679631cc4ca784f07632a2662255de1fe5fe8 */

longlong * FUN_18000f2b0(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_180028240;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18002959c == 0) {
    param_1[1] = (longlong)PTR_PTR_180028238;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_180011288();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_1800114a8(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}

