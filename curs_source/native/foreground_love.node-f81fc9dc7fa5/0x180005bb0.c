
/* Address: 0x180005bb0; Evidence: ev_90e82a959504d6099b4c7474135b902fc8675843ce95db2abe2ac69e86cb5dfd */

void FUN_180005bb0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005b40(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_180006848(lVar1,param_1 + 3,param_1[1]);
  FUN_1800068b4(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

