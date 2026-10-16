
/* Address: 0x18000b460; Evidence: ev_2ae6139c307f4033072ba911ab3ddc37f9b796b5777b6b3b3edcc46df7b65e3f */

/* Library Function - Single Match
    _realloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID _realloc_base(LPVOID param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  LPVOID pvVar3;
  undefined4 *puVar4;
  undefined7 extraout_var;
  
  if (param_1 == (LPVOID)0x0) {
    pvVar3 = _malloc_base(param_2);
  }
  else {
    if (param_2 == 0) {
      FUN_180006a30(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_18001a678,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_18000a620();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_180008ef0(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      puVar4 = (undefined4 *)FUN_180006080();
      *puVar4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}

