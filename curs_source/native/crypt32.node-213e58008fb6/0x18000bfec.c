
/* Address: 0x18000bfec; Evidence: ev_d7e40f40d467f2a88cbad59479cc6d9fd835536b2fc421d9eba013328faa6bbb */

void FUN_18000bfec(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_18000bef4(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}

