
/* Address: 0x180019f96; Evidence: ev_97c7b3d3437345938c79867de9cc73abefc172ac546c537b3b1e7b52b6b066c4 */

undefined4 FUN_180019f96(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

