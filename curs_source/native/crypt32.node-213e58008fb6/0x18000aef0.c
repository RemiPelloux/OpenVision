
/* Address: 0x18000aef0; Evidence: ev_4053a6b2fe39ca505872275e2232b8ff32052115d0f43b63310933ef734fa0e9 */

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
      pvVar3 = HeapAlloc(DAT_1800227e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_1800104c0();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000adf0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c034();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

