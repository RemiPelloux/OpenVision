
/* Address: 0x18001965c; Evidence: ev_72401d69c0910c5f362fa537750209721f9dc38629321599ac5a2fbd3818d7b4 */

void FUN_18001965c(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x30) & 1) != 0) {
    *(uint *)(param_2 + 0x30) = *(uint *)(param_2 + 0x30) & 0xfffffffe;
    thunk_FUN_180005ff0(*(longlong **)(param_2 + 0x60));
  }
  return;
}

