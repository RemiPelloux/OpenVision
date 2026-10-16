
/* Address: 0x180002e70; Evidence: ev_8f05c18a2260f4f51f5c1e580f5f53005346e891b4a3eca2a0c219a74ff5b147 */

void FUN_180002e70(undefined1 (*param_1) [32],ulonglong param_2)

{
  ulonglong uVar1;
  ulonglong uVar2;
  
  uVar1 = *(ulonglong *)(*param_1 + 0x10);
  if (param_2 <= uVar1) {
    *(ulonglong *)(*param_1 + 0x10) = param_2;
    if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
      param_1 = *(undefined1 (**) [32])*param_1;
    }
    (*param_1)[param_2] = 0;
    return;
  }
  uVar2 = param_2 - uVar1;
  if (uVar2 <= *(ulonglong *)(*param_1 + 0x18) - uVar1) {
    *(ulonglong *)(*param_1 + 0x10) = param_2;
    if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
      param_1 = *(undefined1 (**) [32])*param_1;
    }
    FUN_180015110((undefined1 (*) [32])(*param_1 + uVar1),0,uVar2);
    *(undefined1 *)((longlong)(*param_1 + uVar1) + uVar2) = 0;
    return;
  }
  FUN_180003180(param_1,uVar2,uVar1,uVar2);
  return;
}

