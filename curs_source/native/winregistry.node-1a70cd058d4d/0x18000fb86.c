
/* Address: 0x18000fb86; Evidence: ev_a2f60df10f4362e4facb91bf0c8fe9fe509b85c77150f0062251b8822c94422e */

undefined4 FUN_18000fb86(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

