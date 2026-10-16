
/* Address: 0x180011680; Evidence: ev_b30e9fb5e50c880b6fed63a3b72fe874339bb475b44a5449bfb2ca6a6d591f74 */

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
      pvVar3 = HeapAlloc(DAT_180029918,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180015220();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000f990(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_180010de4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

