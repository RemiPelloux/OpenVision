
/* Address: 0x180006b50; Evidence: ev_644050701d4bbbc83dc63f8bd00414ccba7533e7f330e23b9f8cf61384da0f47 */

void FUN_180006b50(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001b678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180006060(DVar2);
    puVar4 = (uint *)FUN_1800061a0();
    *puVar4 = uVar3;
  }
  return;
}

