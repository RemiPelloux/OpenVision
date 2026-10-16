
/* Address: 0x180003db0; Evidence: ev_8a1975dbb7132e2189fd0beb11d4c4fc788191d6e31e7777b6a47c2d0403c2cf */

longlong FUN_180003db0(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 *puVar1;
  undefined8 *local_res8 [4];
  undefined8 *local_98;
  longlong lStack_90;
  ulonglong local_78;
  undefined8 *local_70;
  longlong local_60;
  LPVOID local_18;
  
  local_res8[0] = param_1;
  FUN_1800023d0(&local_78,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  local_res8[0] = operator_new(0x38);
  puVar1 = FUN_180002590(local_res8[0],(longlong)&local_78);
  *(undefined1 *)(puVar1 + 4) = 0;
  if (local_60 == 0) {
    local_res8[0] = local_70;
    FUN_180001270(local_res8,&local_98);
  }
  else {
    local_98 = local_70;
    lStack_90 = local_60;
  }
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_18);
  }
  return lStack_90;
}

