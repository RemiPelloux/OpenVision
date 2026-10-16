
/* Address: 0x18000579c; Evidence: ev_314562302d561c70c0e70ec7b2b8cc04b072edf3a73d6e3ef060209f059112f7 */

void FUN_18000579c(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_18000bff0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

