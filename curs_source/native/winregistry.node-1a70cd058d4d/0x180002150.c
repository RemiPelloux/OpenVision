
/* Address: 0x180002150; Evidence: ev_cdd8dfe28ff25abff2e4d71872df224565a78287b75c047db3121c496dcc8cbd */

/* Library Function - Single Match
    void * __ptr64 __cdecl operator new(unsigned __int64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void * __cdecl operator_new(__uint64 param_1)

{
  code *pcVar1;
  bool bVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  void *pvVar4;
  
  do {
    pvVar3 = _malloc_base(param_1);
    if (pvVar3 != (LPVOID)0x0) {
      return pvVar3;
    }
    bVar2 = FUN_180006060(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_1800027f4();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_1800027d4();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}

