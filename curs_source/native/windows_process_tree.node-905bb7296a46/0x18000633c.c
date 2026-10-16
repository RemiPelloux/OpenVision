
/* Address: 0x18000633c; Evidence: ev_c3e631089e20f8b9784f131c9784b45883fdbe96021389c369bd0daa8b57ffd1 */

void thunk_FUN_1800062f8(ulonglong param_1)

{
  code *pcVar1;
  bool bVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  
  do {
    pvVar3 = _malloc_base(param_1);
    if (pvVar3 != (LPVOID)0x0) {
      return;
    }
    bVar2 = FUN_18000c460(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_180001150();
  }
  FUN_18000688c();
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

