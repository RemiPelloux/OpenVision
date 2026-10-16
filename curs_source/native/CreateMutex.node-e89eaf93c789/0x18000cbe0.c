
/* Address: 0x18000cbe0; Evidence: ev_f74ca7f9479ee8664c2ca936c57c4679084d1f2e998459e3e0366204658e727c */

void FUN_18000cbe0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800237e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000c174(DVar2);
    p_Var4 = FUN_18000c2b4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

