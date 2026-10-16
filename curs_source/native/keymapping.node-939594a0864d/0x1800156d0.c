
/* Address: 0x1800156d0; Evidence: ev_1d7fedc652a67a3f4ee81aea275c264d5c7a825b64c1ab8ba3a88aea369113ae */

undefined8 FUN_1800156d0(ulonglong *param_1)

{
  ulonglong uVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined7 extraout_var;
  ulonglong local_res10 [3];
  
  local_res10[0] = 0;
  uVar3 = FUN_180015640((uint *)local_res10);
  uVar1 = local_res10[0];
  if ((int)uVar3 == 0) {
    local_res10[0] = local_res10[0] | 0x1f;
    *param_1 = uVar1;
    bVar2 = FUN_180015660((uint *)local_res10);
    if ((int)CONCAT71(extraout_var,bVar2) == 0) {
      FUN_180016280();
      return 0;
    }
  }
  return 1;
}

