
/* Address: 0x18000a6b0; Evidence: ev_ecb36448bb1939ead303662a88253c00716408c203ff3349e6fe6dea1c2cec35 */

LPVOID _malloc_base(ulonglong param_1)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  
  if (param_1 < 0xffffffffffffffe1) {
    if (param_1 == 0) {
      param_1 = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_180028c10,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011190();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000a5b0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000b774();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

