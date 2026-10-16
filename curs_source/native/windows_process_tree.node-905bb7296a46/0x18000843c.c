
/* Address: 0x18000843c; Evidence: ev_9d72ab7ff355ee79455c257c5276305298fb3664084e92b1fd87140cc79e84fa */

void FUN_18000843c(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_18000dfd0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

