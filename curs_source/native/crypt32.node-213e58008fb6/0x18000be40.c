
/* Address: 0x18000be40; Evidence: ev_791355810a90b30c8cf05aa6339205db4f9f5719e9f9c46eff27fee14093338d */

void FUN_18000be40(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000a990(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_18000c6d8(lVar1,param_1 + 3,param_1[1]);
  FUN_18000c744(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

