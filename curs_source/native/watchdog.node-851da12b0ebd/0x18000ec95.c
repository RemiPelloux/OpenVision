
/* Address: 0x18000ec95; Evidence: ev_7ceeabc64ea812fb32924577128cf38ecdfb322ad1a012edf4759cbe1b8e778e */

undefined4 FUN_18000ec95(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}

