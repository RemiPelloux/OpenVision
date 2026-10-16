
/* Address: 0x18000c0c0; Evidence: ev_721eba417ec4f9e94831519b5aee7a1ea2cf9784dc1c268f964de4bd78fe6420 */

void FUN_18000c0c0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000ac10(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_18000c958(lVar1,param_1 + 3,param_1[1]);
  FUN_18000c9c4(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

