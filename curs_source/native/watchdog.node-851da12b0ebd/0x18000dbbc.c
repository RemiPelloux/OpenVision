
/* Address: 0x18000dbbc; Evidence: ev_45f0e9c3d51d23c54335ddcdec2c2f474d89f3fd13b7eda6d0613cffcab53c05 */

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

