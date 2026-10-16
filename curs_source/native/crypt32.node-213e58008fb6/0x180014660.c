
/* Address: 0x180014660; Evidence: ev_477b3132062b0d9f6b0c9af0198678006b9a8ea83d6ada1c2b278567e30c55de */

void FUN_180014660(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x30) & 1) != 0) {
    *(uint *)(param_2 + 0x30) = *(uint *)(param_2 + 0x30) & 0xfffffffe;
    thunk_FUN_1800035d0(*(longlong **)(param_2 + 0x40));
  }
  return;
}

