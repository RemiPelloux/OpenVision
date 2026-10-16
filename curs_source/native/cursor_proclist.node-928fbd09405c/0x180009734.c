
/* Address: 0x180009734; Evidence: ev_d45518f3f49ebf3976bed99202030779952b98b6aea540cd32a6ce53f616b425 */

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

