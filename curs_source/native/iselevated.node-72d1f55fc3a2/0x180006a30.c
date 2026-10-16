
/* Address: 0x180006a30; Evidence: ev_d0de22e8133599d7c5cd37750d2d32f0f29eec0357ed9e3d7056fe9cb959ed0e */

void FUN_180006a30(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001a678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180005f40(DVar2);
    puVar4 = (uint *)FUN_180006080();
    *puVar4 = uVar3;
  }
  return;
}

