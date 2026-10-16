
/* Address: 0x180006170; Evidence: ev_a3a385b6d050b8eb1172d83dc21204e46dc886a8aed71979fb13aae205cd1151 */

void thunk_FUN_180007bd0(LPVOID param_1)

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

