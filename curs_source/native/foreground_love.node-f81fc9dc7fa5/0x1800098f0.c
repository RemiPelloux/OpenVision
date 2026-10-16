
/* Address: 0x1800098f0; Evidence: ev_4dee24dc9d40354ca4390555ce75a18861297d92415d480528ac917ff7ed5bd3 */

/* Library Function - Single Match
    _malloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

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
      pvVar3 = HeapAlloc(DAT_18001b678,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180009010(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_1800061a0();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}

