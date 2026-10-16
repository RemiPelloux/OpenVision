
/* Address: 0x180003ec0; Evidence: ev_3ec6fcedf15a102c7c91f1cca291b449c71967b3e460c3ce4da6721fd22a2619 */

undefined8 * FUN_180003ec0(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 local_res8;
  undefined8 local_res10;
  longlong local_res18 [2];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_res8 = param_1;
  local_res10 = param_2;
  iVar1 = napi_get_new_target(param_1,param_2,local_res18);
  if (iVar1 != 0) {
    return (undefined8 *)0x0;
  }
  local_18 = &local_res8;
  local_10 = &local_res10;
  if (local_res18[0] == 0) {
    puVar2 = (undefined8 *)FUN_180004050(&local_18);
    return puVar2;
  }
  puVar2 = FUN_180004070(&local_18);
  return puVar2;
}

