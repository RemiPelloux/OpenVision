
/* Address: 0x180006038; Evidence: ev_ccc106d92e99d3b695c648640ca766877d75eaa07c52baa6a6076a42a97f7eef */

void FUN_180006038(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_180005f40(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}

