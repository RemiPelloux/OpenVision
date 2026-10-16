
/* Address: 0x18000da0c; Evidence: ev_6d83ca4103bd145a486201252ab177f687f511ef189e3581bf95c9b245caace2 */

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

