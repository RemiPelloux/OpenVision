
/* Address: 0x18000ba28; Evidence: ev_6991367f7e676be9c1a5afa4b807f328ca39a49d6a493c541a710301f218b26e */

void FUN_18000ba28(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_1800116e0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}

