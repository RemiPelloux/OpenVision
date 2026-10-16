
/* Address: 0x1800148e0; Evidence: ev_347a02dd5ad0a9a4ad1ea669021aac4350c1dff58d7d9df75d966f60b4dfd9e2 */

void FUN_1800148e0(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x30) & 1) != 0) {
    *(uint *)(param_2 + 0x30) = *(uint *)(param_2 + 0x30) & 0xfffffffe;
    thunk_FUN_180002a80(*(longlong **)(param_2 + 0x40));
  }
  return;
}

