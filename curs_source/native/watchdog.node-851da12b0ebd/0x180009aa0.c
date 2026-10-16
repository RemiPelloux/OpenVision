
/* Address: 0x180009aa0; Evidence: ev_b1c2652d7abe343792b4ce38385b8530afbc7ebdacfb098c99513444b30e7429 */

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
      pvVar3 = HeapAlloc(DAT_18001b678,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a8f0();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_1800091c0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_180006350();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

