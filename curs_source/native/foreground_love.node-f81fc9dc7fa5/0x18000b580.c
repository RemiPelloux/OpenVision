
/* Address: 0x18000b580; Evidence: ev_158ebad012ebaba59d320ff09d6a5930bcfeb2b4f5971fe38b47a7ed27eb7e1a */

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
      FUN_180006b50(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_18001b678,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_18000a740();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_180009010(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      puVar4 = (undefined4 *)FUN_1800061a0();
      *puVar4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}

