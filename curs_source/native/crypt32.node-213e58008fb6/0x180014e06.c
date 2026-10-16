
/* Address: 0x180014e06; Evidence: ev_28d61a6f1090f2bfa97c7836e1f73b533db82fa9970d1c59bb49afd849017470 */

undefined4 FUN_180014e06(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

