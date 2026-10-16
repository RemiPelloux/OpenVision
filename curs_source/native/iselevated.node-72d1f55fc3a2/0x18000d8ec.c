
/* Address: 0x18000d8ec; Evidence: ev_1e2241a9ba1fa1eaf3aa3f681e9a456c8be7e89d59ac0044c88baa24c47d46f1 */

void thunk_FUN_180006a30(LPVOID param_1)

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

