
/* Address: 0x1800154e0; Evidence: ev_45c2d8335f401f1c35e2c7b4187e7f70f53803e919956ecd6d0200d0e19b8afb */

longlong FUN_1800154e0(uint param_1,LARGE_INTEGER param_2,DWORD param_3)

{
  longlong lVar1;
  longlong lVar2;
  longlong local_48 [2];
  undefined1 local_38;
  undefined *local_30;
  undefined *puStack_28;
  char local_20;
  undefined4 local_1c;
  char local_18;
  undefined4 local_14;
  char local_10;
  
  local_48[0] = 0;
  local_20 = DAT_18002844c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_180027308;
    puStack_28 = PTR_DAT_180027310;
  }
  lVar1 = FUN_180015310(param_1,param_2,param_3,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return lVar1;
}

