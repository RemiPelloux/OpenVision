
/* Address: 0x180005de0; Evidence: ev_9da7d0a30a2f7222a0fe8b0e61c11675aa9018f1889a73e03025f86f7a09ab90 */

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
      pvVar3 = HeapAlloc(DAT_18001b678,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a8f0();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_1800091c0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_180006350();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

