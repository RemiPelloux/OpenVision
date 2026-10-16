
/* Address: 0x180004c80; Evidence: ev_e630e43eee06a5fd7a4392e9a1d65d2bc1d1a19f91ca56677b2e6c95a0671e1c */

int FUN_180004c80(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  __acrt_ptd *p_Var3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    p_Var3 = FUN_180006350();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_1800061a8();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18001b304 == 0) {
      local_20 = PTR_PTR_18001a1f8;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_1800067f8();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_180006a30(local_28,&lStack_18);
      if ((*(uint *)(local_28 + 0x3a8) & 2) == 0) {
        local_10 = '\x01';
        *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) | 2;
      }
    }
  }
  else {
    local_20 = (undefined *)*param_3;
    local_10 = '\0';
  }
  do {
    bVar1 = *param_1;
    param_1 = param_1 + 1;
    bVar1 = *(byte *)((ulonglong)bVar1 + *(longlong *)(local_20 + 0x110));
    iVar2 = (uint)bVar1 - (uint)*(byte *)((ulonglong)*param_2 + *(longlong *)(local_20 + 0x110));
    if (iVar2 != 0) break;
    param_2 = param_2 + 1;
  } while (bVar1 != 0);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return iVar2;
}

