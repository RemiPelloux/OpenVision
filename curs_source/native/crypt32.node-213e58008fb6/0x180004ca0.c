
/* Address: 0x180004ca0; Evidence: ev_6311133ea64d8753f0e8cf1fe5e3d2684e376ddbec4940810e7e75e52ed9c5ac */

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

