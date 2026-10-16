
/* Address: 0x18000db00; Evidence: ev_7743e49fae359235b24d3bd04fce38a2315b101b108a0179d13c435179f02bb8 */

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

