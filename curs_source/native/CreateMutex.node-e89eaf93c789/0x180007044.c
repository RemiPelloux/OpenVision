
/* Address: 0x180007044; Evidence: ev_3a00379165c12ef46b3cd55e5a5737fa028091013d4058ec69fa1065a212cbfe */

void FUN_180007044(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_18000cbe0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

