
/* Address: 0x180004940; Evidence: ev_3929e0716515d6607409b18e0a5559ebf4bd182c1943e1103acec0db7eb8d9b0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004940(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_198 [32];
  longlong local_178;
  undefined8 local_170;
  undefined8 local_168;
  longlong lStack_160;
  undefined8 local_158;
  ulonglong local_138;
  undefined8 local_130;
  longlong local_120;
  LPVOID local_d8;
  undefined8 *local_d0;
  longlong local_c8 [10];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_198;
  FUN_180002260(&local_138,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  puVar2 = local_d0;
  local_d0 = (undefined8 *)local_d0[3];
  if (local_120 == 0) {
    local_170 = local_130;
    iVar1 = napi_get_undefined(local_130,&local_178);
    local_120 = local_178;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(&local_170);
      FUN_1800014c0(local_c8,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_c8,&DAT_180020780);
    }
  }
  local_168 = local_130;
  lStack_160 = local_120;
  iVar1 = napi_unwrap(local_130,local_120,&local_178);
  if (iVar1 != 0) {
    puVar2 = FUN_180002d50(&local_168,&local_170);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014c0(local_78,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  local_158 = puVar2[2];
  if (local_178 == 0) {
    local_168 = 0;
    lStack_160 = 0;
    puVar2 = &local_168;
  }
  else {
    puVar2 = (undefined8 *)(*(code *)*puVar2)((int)puVar2[1] + local_178,&local_168,&local_138);
  }
  uVar3 = puVar2[1];
  if (local_d8 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_d8);
  }
  return uVar3;
}

