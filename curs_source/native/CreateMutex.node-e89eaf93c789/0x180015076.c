
/* Address: 0x180015076; Evidence: ev_bd3cb78a40e436d196c614a016ae67ae90575f4d14aef615acd1b6d4d1c824ce */

undefined4 FUN_180015076(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

