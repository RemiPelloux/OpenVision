
/* Address: 0x1800024f8; Evidence: ev_2d2863261c978f744cea84087ff0c95adb97ca69f05582a1f70cde9ea08a5b86 */

void FUN_1800024f8(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_180006d00(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

