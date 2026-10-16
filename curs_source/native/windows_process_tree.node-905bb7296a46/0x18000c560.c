
/* Address: 0x18000c560; Evidence: ev_25e0d201608e68e0094108eccac8302f31034554988d0c5371a108613e4bb4bb */

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
      pvVar3 = HeapAlloc(DAT_1800247e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011b30();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000c460(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000d6a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}

