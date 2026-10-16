
/* Address: 0x18000e9c5; Evidence: ev_962e1aa1e8ae03c660ec4fdb31cc1197e2595647c39b3b70973c0a3396a3cb50 */

undefined4 FUN_18000e9c5(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

