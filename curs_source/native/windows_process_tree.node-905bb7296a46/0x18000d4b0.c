
/* Address: 0x18000d4b0; Evidence: ev_74a3df318ae9877ff9297c81bfbcde8612418071afa0a9919de6125d346ba1c4 */

void FUN_18000d4b0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000c000(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_18000dd48(lVar1,param_1 + 3,param_1[1]);
  FUN_18000ddb4(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

