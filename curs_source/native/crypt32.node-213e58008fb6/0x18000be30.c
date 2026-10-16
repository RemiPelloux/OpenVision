
/* Address: 0x18000be30; Evidence: ev_7df9f3a0d52bea58216e99b838e9768c9b9598af7671a7de8fcba97eec93dfed */

LPVOID _calloc_base(ulonglong param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  SIZE_T dwBytes;
  
  if ((param_1 == 0) || (param_2 <= 0xffffffffffffffe0 / param_1)) {
    dwBytes = param_1 * param_2;
    if (dwBytes == 0) {
      dwBytes = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_1800227e8,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_1800104c0();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000adf0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c034();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

