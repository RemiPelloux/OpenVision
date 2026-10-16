
/* Address: 0x180006010; Evidence: ev_4f4f03880ce8621997108699a311475456b13e583a0c85b0f6a4f805f9ac6119 */

void FUN_180006010(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  uint *puVar3;
  
  p_Var2 = FUN_18000605c();
  *(uint *)p_Var2 = param_1;
  uVar1 = FUN_180005f40(param_1);
  puVar3 = (uint *)FUN_180006080();
  *puVar3 = uVar1;
  return;
}

