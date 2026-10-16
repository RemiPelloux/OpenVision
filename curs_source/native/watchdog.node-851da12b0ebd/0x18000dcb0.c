
/* Address: 0x18000dcb0; Evidence: ev_1e7e2b4ee5546fbade018d9e7c1adf71e652cc768f8ac01a483a4d513f028596 */

void thunk_FUN_180006d00(LPVOID param_1)

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

