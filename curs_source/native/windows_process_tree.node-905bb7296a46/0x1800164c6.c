
/* Address: 0x1800164c6; Evidence: ev_53b60b46e8630e0d6630579196bcd3dfe6c733e644ccfaac93870c69a4096109 */

undefined4 FUN_1800164c6(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

