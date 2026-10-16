
/* Address: 0x180016dd0; Evidence: ev_1ff5c41321805d12ad8d12395daea15a0e7370e8cb8ea1a129dd1f5f190fb931 */

void FUN_180016dd0(int param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 1) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x21;
  }
  else if ((param_1 == 2) || (param_1 == 3)) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x22;
    return;
  }
  return;
}

