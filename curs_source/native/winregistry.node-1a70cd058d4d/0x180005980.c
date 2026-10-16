
/* Address: 0x180005980; Evidence: ev_8f2cda7aa66aafda7d5c6b567e6049d542d42921150e5d5726f2ac6fb0057433 */

longlong * FUN_180005980(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_18001b200;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18001c3cc == 0) {
    param_1[1] = (longlong)PTR_PTR_18001b1f8;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_180007748();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_180007980(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}

