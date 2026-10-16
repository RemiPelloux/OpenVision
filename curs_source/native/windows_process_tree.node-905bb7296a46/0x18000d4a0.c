
/* Address: 0x18000d4a0; Evidence: ev_e2fbadea3d025e50eaf276b7e6852bd00ee291903562bbe533c090164da7f7e4 */

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
      pvVar3 = HeapAlloc(DAT_1800247e8,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011b30();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000c460(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000d6a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

