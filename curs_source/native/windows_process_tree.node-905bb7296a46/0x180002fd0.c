
/* Address: 0x180002fd0; Evidence: ev_9c04e6f6e0977b3839e55f639a7959ec22e4f06c601ed90af5afdfe86d187193 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180002fd0(undefined8 *param_1)

{
  undefined8 uVar1;
  undefined8 uVar2;
  code *pcVar3;
  undefined1 auVar4 [16];
  int iVar5;
  ulonglong uVar6;
  undefined1 auStack_168 [32];
  undefined8 *local_148;
  undefined8 **local_140;
  ulonglong local_138;
  undefined8 local_130;
  undefined8 local_128;
  undefined8 local_120;
  ulonglong local_118;
  undefined1 *local_110;
  undefined1 local_108 [48];
  undefined1 *local_d8;
  undefined8 *apuStack_d0 [3];
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_168;
  uVar1 = *(undefined8 *)param_1[1];
  uVar2 = *(undefined8 *)*param_1;
  local_138 = 6;
  local_120 = 0;
  local_d8 = (undefined1 *)0x0;
  apuStack_d0[0] = (undefined8 *)0x0;
  local_118 = 6;
  local_110 = local_108;
  local_140 = apuStack_d0;
  local_148 = &local_120;
  local_130 = uVar2;
  local_128 = uVar1;
  iVar5 = napi_get_cb_info(uVar2,uVar1,&local_118,local_108);
  if (iVar5 != 0) {
    FUN_1800014a0(local_b8,local_130);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_b8,&DAT_180021cb0);
  }
  if (local_138 < local_118) {
    auVar4._8_8_ = 0;
    auVar4._0_8_ = local_118;
    uVar6 = SUB168(ZEXT816(8) * auVar4,0);
    if (SUB168(ZEXT816(8) * auVar4,8) != 0) {
      uVar6 = 0xffffffffffffffff;
    }
    local_110 = (undefined1 *)thunk_FUN_1800062f8(uVar6);
    local_140 = (undefined8 **)0x0;
    local_148 = (undefined8 *)0x0;
    local_d8 = local_110;
    iVar5 = napi_get_cb_info(uVar2,uVar1,&local_118,local_110);
    if (iVar5 != 0) {
      FUN_1800014a0(local_68,local_130);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  pcVar3 = (code *)*apuStack_d0[0];
  apuStack_d0[0] = (undefined8 *)apuStack_d0[0][1];
  (*pcVar3)(&local_138);
  if (local_d8 != (undefined1 *)0x0) {
    thunk_FUN_18000dfd0(local_d8);
  }
  return 0;
}

