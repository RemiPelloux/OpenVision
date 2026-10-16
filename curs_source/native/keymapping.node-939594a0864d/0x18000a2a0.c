
/* Address: 0x18000a2a0; Evidence: ev_7b417783d0dc0ea96465b57bf534095bd3499c47e5c63c21f519d00dbd79a933 */

void FUN_18000a2a0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180007e30(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_18000be18(lVar1,param_1 + 3,param_1[1]);
  FUN_18000be84(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

