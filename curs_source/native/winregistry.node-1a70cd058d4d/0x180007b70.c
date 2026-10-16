
/* Address: 0x180007b70; Evidence: ev_7ba2675cf8b2731d57be03cf02b9f886c1459313369aed9db62d815bb00c7e8a */

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
      pvVar3 = HeapAlloc(DAT_18001c748,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000b730();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180006060(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_1800072a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

