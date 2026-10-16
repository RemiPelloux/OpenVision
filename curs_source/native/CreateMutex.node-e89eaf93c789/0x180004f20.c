
/* Address: 0x180004f20; Evidence: ev_62eed702018c562df35c5bbbdbcbb1dadfbc9f5116e5ca3a3f6da389006ebae0 */

void thunk_FUN_18000cbe0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800237e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000c174(DVar2);
    p_Var4 = FUN_18000c2b4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}

