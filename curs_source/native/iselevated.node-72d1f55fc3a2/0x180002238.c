
/* Address: 0x180002238; Evidence: ev_1551bd0d414fe5f20ffa0b9781c2d47e4a3a00f9fe6638f9d34be42f780f1747 */

void FUN_180002238(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_180006a30(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

