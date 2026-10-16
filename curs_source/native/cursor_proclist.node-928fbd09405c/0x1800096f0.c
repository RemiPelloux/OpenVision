
/* Address: 0x1800096f0; Evidence: ev_4f16dba629083d49145c1c133beee88feb70bff99f9146be1409aa4143634913 */

void thunk_FUN_1800116e0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180029918,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180010ca4(DVar2);
    p_Var4 = FUN_180010de4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

