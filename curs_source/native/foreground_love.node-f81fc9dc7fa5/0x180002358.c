
/* Address: 0x180002358; Evidence: ev_0b75653f9ddd920de98f4cdb484e92d0c7e68e78bbf8fcf2df740b54a0f08fff */

void FUN_180002358(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_180006b50(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

