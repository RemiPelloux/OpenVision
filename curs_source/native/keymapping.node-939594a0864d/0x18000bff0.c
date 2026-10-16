
/* Address: 0x18000bff0; Evidence: ev_80a3f4126560c1186507281ba23c204ad665405206673defda50f8653f4f4b27 */

void FUN_18000bff0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180028c10,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000b634(DVar2);
    p_Var4 = FUN_18000b774();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

