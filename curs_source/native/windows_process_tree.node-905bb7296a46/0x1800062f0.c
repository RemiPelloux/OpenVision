
/* Address: 0x1800062f0; Evidence: ev_5c4d9b8587f7907da791a860b1f3852c16eb0b3b596572d63d669dc64fcce814 */

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

