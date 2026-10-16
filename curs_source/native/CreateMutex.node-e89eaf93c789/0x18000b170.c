
/* Address: 0x18000b170; Evidence: ev_2aa809ab2718eb1a12136ad65dc0760630662630a331c9a13739633a9d25d2aa */

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

