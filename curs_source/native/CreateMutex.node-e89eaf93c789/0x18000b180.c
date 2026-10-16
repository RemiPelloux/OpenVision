
/* Address: 0x18000b180; Evidence: ev_4eec522d8cf17bc89debc8ec5313c10cd4e318840433ced1b47140fe21ad2d9a */

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

