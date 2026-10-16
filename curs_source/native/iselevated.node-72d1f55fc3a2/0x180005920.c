
/* Address: 0x180005920; Evidence: ev_d33d856f25fe352de85b0b26593ac723b01f415fdb9f88dcc0b67e7c8a4201d4 */

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

