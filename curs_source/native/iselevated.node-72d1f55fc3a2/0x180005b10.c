
/* Address: 0x180005b10; Evidence: ev_7aa844e1207cc4e4bcda4fb062526650557976e6818b7479f7ab163312c0c362 */

LPVOID _calloc_base(ulonglong param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  undefined4 *puVar4;
  SIZE_T dwBytes;
  
  if ((param_1 == 0) || (param_2 <= 0xffffffffffffffe0 / param_1)) {
    dwBytes = param_1 * param_2;
    if (dwBytes == 0) {
      dwBytes = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_18001a678,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a620();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180008ef0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_180006080();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}

