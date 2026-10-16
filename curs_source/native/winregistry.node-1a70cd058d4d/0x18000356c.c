
/* Address: 0x18000356c; Evidence: ev_65cf442c2441ade03f13155003d978b1b784488babbbea11b1f373e60a277c53 */

void FUN_18000356c(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_180007bd0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

