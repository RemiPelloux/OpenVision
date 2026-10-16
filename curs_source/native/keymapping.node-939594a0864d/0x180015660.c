
/* Address: 0x180015660; Evidence: ev_2b502e1aa0bc4e5d1db2360c6aeabc8dac60d0ef2aca2b69dfd320809e5399f7 */

bool FUN_180015660(uint *param_1)

{
  undefined8 uVar1;
  uint local_res8 [2];
  
  FUN_180015f00(*param_1);
  FUN_180016030(param_1[1]);
  local_res8[0] = 0;
  local_res8[1] = 0;
  uVar1 = FUN_180015640(local_res8);
  if (((int)uVar1 == 0) && (*param_1 == local_res8[0])) {
    return param_1[1] != local_res8[1];
  }
  return true;
}

