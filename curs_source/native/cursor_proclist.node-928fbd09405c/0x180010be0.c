
/* Address: 0x180010be0; Evidence: ev_046b9338d0b07045c14d6552c4bea6e850d7f2349d0ed48293d435508f6736d2 */

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
      pvVar3 = HeapAlloc(DAT_180029918,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180015220();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000f990(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_180010de4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

