
/* Address: 0x180004260; Evidence: ev_0a58297f56da84ff28a1502b8c4e02f299efa350ec4f6a3a4e46df0089ff284d */

void thunk_FUN_18000bff0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180028c10,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000b634(DVar2);
    p_Var4 = FUN_18000b774();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

