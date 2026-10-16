
/* Address: 0x18000c570; Evidence: ev_f3cfb295b5eab8bbc28127b322aced008e89992974103a837e9a62b087042dfa */

void thunk_FUN_18000dfd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800247e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000d564(DVar2);
    p_Var4 = FUN_18000d6a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

