
/* Address: 0x180006d00; Evidence: ev_16f519b98867477e92af89457c43bdd2318788b3bcc8b81cdd087335cb7f3052 */

void FUN_180006d00(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001b678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180006210(DVar2);
    p_Var4 = FUN_180006350();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

