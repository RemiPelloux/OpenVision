
/* Address: 0x180003c60; Evidence: ev_564c99f745c800225d5344d8b890a191d842ead5dcaa15a1e975561eca72c5e0 */

int FUN_180003c60(longlong param_1)

{
  int *piVar1;
  int iVar2;
  
  LOCK();
  piVar1 = (int *)(param_1 + 0x10);
  iVar2 = *piVar1;
  *piVar1 = *piVar1 + 1;
  UNLOCK();
  return iVar2 + 1;
}

