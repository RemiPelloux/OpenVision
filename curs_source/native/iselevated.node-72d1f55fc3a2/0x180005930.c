
/* Address: 0x180005930; Evidence: ev_bf8f04b37887a85d0a35cd745f28a6e3e6c078d93728cac1be10005963a4c0a1 */

LPVOID _malloc_base(ulonglong param_1)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  undefined4 *puVar4;
  
  if (param_1 < 0xffffffffffffffe1) {
    if (param_1 == 0) {
      param_1 = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_18001a678,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a620();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180008ef0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_180006080();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}

