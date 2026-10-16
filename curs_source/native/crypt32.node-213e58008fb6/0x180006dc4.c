
/* Address: 0x180006dc4; Evidence: ev_ae1f98f8caaacfd121bde5cce20cc91b28048f2310731b971ec3558e4594b06a */

void FUN_180006dc4(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_18000c960(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

