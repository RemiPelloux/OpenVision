
/* Address: 0x180003bc0; Evidence: ev_56d6ef65999ce77e811049edb60e376ba884783f51fd8fe77a49f3e01ac7089c */

longlong FUN_180003bc0(undefined8 *param_1,undefined8 param_2)

{
  int iVar1;
  longlong lVar2;
  undefined8 *local_res8;
  undefined8 local_res10;
  longlong local_res18 [2];
  undefined8 **local_18;
  undefined8 *local_10;
  
  local_res8 = param_1;
  local_res10 = param_2;
  iVar1 = napi_get_new_target(param_1,param_2,local_res18);
  if (iVar1 != 0) {
    return 0;
  }
  local_18 = &local_res8;
  local_10 = &local_res10;
  if (local_res18[0] == 0) {
    lVar2 = FUN_180003d90(param_1,&local_18);
    return lVar2;
  }
  lVar2 = FUN_180003db0(param_1,&local_18);
  return lVar2;
}

