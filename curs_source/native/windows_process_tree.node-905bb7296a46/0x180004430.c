
/* Address: 0x180004430; Evidence: ev_a59c6663670419385a6a466f175b40a5040c7ffa67f8ff332767fa6fd5daba0d */

void FUN_180004430(longlong param_1)

{
  uint uVar1;
  uint uVar2;
  
  uVar1 = 0;
  uVar2 = 0;
  if (*(int *)(param_1 + 0xa0) != 0) {
    do {
      FUN_180004d10((DWORD *)((ulonglong)uVar2 * 0x20 + *(longlong *)(param_1 + 0x88)),'\x01');
      uVar2 = uVar2 + 1;
    } while (uVar2 < *(uint *)(param_1 + 0xa0));
  }
  Sleep(1000);
  if (*(int *)(param_1 + 0xa0) != 0) {
    do {
      FUN_180004d10((DWORD *)((ulonglong)uVar1 * 0x20 + *(longlong *)(param_1 + 0x88)),'\0');
      uVar1 = uVar1 + 1;
    } while (uVar1 < *(uint *)(param_1 + 0xa0));
  }
  return;
}

