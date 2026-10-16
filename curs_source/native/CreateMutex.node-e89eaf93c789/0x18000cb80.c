
/* Address: 0x18000cb80; Evidence: ev_284195c014999dab35ea5b0d2264c04c480eb8e83109acd03e14b9eba0bde5da */

/* Library Function - Single Match
    _malloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

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
      pvVar3 = HeapAlloc(DAT_1800237e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180010740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000b070(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c2b4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

