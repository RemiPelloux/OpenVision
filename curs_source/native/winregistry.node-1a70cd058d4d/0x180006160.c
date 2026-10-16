
/* Address: 0x180006160; Evidence: ev_6811b14bf6aca4c6b26133b121bd55cbe29731d9fb3b2f371d8918ef79ebf002 */

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

