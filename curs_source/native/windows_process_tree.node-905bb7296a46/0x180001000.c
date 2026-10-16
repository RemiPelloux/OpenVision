
/* Address: 0x180001000; Evidence: ev_43db328071e05ea1c4ba26c69521b31b6b5b36d0d7b74b2ee2015c48b9f2d134 */

HMODULE FUN_180001000(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_18000be70(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
    pHVar2 = GetModuleHandleA("libnode.dll");
    if (pHVar2 != (HMODULE)0x0) {
      return pHVar2;
    }
                    /* WARNING: Could not recover jumptable at 0x000180001038. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    pHVar2 = GetModuleHandleA((LPCSTR)0x0);
    return pHVar2;
  }
  return (HMODULE)0x0;
}

