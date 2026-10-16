
/* Address: 0x180007bd0; Evidence: ev_677db6515ca2fe5c7050576703bfff087758a51e3bc1375b594024202ec6a47a */

void FUN_180007bd0(LPVOID param_1)

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

