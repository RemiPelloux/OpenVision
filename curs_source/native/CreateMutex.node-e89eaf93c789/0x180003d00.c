
/* Address: 0x180003d00; Evidence: ev_800e39d2ce700bbfe104560a200d851791e7a86a1fe2b358887347b4dd1d1008 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_180003d00(undefined8 *param_1)

{
  longlong lVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  undefined1 auStack_1d8 [32];
  longlong local_1b8 [2];
  undefined8 local_1a8;
  longlong lStack_1a0;
  undefined8 local_198 [2];
  ulonglong local_188;
  undefined8 local_180;
  longlong local_170;
  LPVOID local_128;
  longlong local_118 [10];
  longlong local_c8 [10];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_1d8;
  FUN_180002260(&local_188,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  local_1a8 = local_180;
  if (local_170 == 0) {
    local_198[0] = local_180;
    iVar2 = napi_get_undefined(local_180,local_1b8);
    local_170 = local_1b8[0];
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(local_198);
      FUN_1800014c0(local_118,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_118,&DAT_180020780);
    }
  }
  iVar2 = napi_unwrap(local_1a8,local_170,local_1b8);
  if (iVar2 != 0) {
    puVar3 = FUN_180002d50(&local_1a8,local_198);
    uVar4 = FUN_180001210(puVar3);
    FUN_1800014c0(local_c8,uVar4);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_c8,&DAT_180020780);
  }
  if (local_1b8[0] == 0) {
    local_1a8 = 0;
    lStack_1a0 = 0;
  }
  else {
    iVar2 = napi_get_boolean(local_180,*(longlong *)(local_1b8[0] + 0x48) != 0,local_1b8);
    if (iVar2 != 0) {
      FUN_1800014c0(local_78,local_180);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_78,&DAT_180020780);
    }
    local_1a8 = local_180;
    lStack_1a0 = local_1b8[0];
  }
  lVar1 = lStack_1a0;
  if (local_128 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_128);
  }
  return lVar1;
}

