
/* Address: 0x1800189b6; Evidence: ev_5b3beb217f9d57f1302b5ad092cd89f4b88ea88a1eeaa6adfc8cc4c651eb07b0 */

undefined4 FUN_1800189b6(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

