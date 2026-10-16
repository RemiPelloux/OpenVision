
/* Address: 0x180005a40; Evidence: ev_0b471f61c93560d27107439ad11e9f5275fe80a475cb9285bc0371a06c93f6a2 */

void thunk_FUN_180006b50(LPVOID param_1)

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

