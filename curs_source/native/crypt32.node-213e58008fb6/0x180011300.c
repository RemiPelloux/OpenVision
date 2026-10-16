
/* Address: 0x180011300; Evidence: ev_d8a312fadae77beabbf08133e2ff37513557ef773d3908dda200396689e50094 */

/* Library Function - Single Match
    _realloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID _realloc_base(LPVOID param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  undefined7 extraout_var;
  
  if (param_1 == (LPVOID)0x0) {
    pvVar3 = _malloc_base(param_2);
  }
  else {
    if (param_2 == 0) {
      FUN_18000c960(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_1800227e8,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_1800104c0();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_18000adf0(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      p_Var4 = FUN_18000c034();
      *(undefined4 *)p_Var4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}

