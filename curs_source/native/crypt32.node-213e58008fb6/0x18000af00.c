
/* Address: 0x18000af00; Evidence: ev_446bbc497750b4a0066fade093feb310d08ced364d2315bb0469e2016df385d1 */

void thunk_FUN_18000c960(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800227e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000bef4(DVar2);
    p_Var4 = FUN_18000c034();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

