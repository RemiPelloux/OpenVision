
/* Address: 0x180002194; Evidence: ev_bab57a7dc1192ed4ee1ed304938b5e40894339ccd7031e37aa07bdf49557643c */

void thunk_FUN_180007bd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001c748,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180007164(DVar2);
    p_Var4 = FUN_1800072a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

