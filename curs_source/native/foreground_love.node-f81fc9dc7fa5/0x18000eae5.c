
/* Address: 0x18000eae5; Evidence: ev_523de5fe8e2c060e97f275394433b92e40d218e12120476d7704625b9cfe5c5b */

undefined4 FUN_18000eae5(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

