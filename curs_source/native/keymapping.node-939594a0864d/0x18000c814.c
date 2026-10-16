
/* Address: 0x18000c814; Evidence: ev_f27c64daedec9b94f163d85704aa7ddc008c246c0f8b71325ff14f3fc1c2e87b */

int FUN_18000c814(FILE *param_1)

{
  int iVar1;
  undefined8 uVar2;
  longlong lVar3;
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
  if (param_1 == (FILE *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_18000c899;
  }
  uVar2 = FUN_18000c788(param_1,local_48);
  if ((int)uVar2 == 0) {
    if ((*(uint *)((longlong)&param_1->_base + 4) >> 0xb & 1) != 0) {
      iVar1 = _fileno(param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_18000c874;
    }
    iVar1 = 0;
  }
  else {
LAB_18000c874:
    iVar1 = -1;
  }
LAB_18000c899:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}

