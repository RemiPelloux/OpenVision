
/* Address: 0x180004470; Evidence: ev_554927594bad944da18824aa7565958d7855c1c6fbc832b21f4971ed9eb3680b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004470(undefined8 *param_1)

{
  longlong lVar1;
  int iVar2;
  int iVar3;
  undefined8 uVar4;
  undefined8 *puVar5;
  undefined1 auStack_148 [32];
  longlong local_128 [2];
  undefined8 local_118 [2];
  undefined8 local_108;
  undefined8 local_100;
  undefined8 local_f8;
  undefined8 local_f0;
  undefined1 local_e8 [16];
  ulonglong local_d8;
  undefined8 local_d0;
  longlong local_c0;
  longlong local_b8;
  undefined8 *local_b0;
  LPVOID local_78;
  longlong local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_148;
  FUN_180002260(&local_d8,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  lVar1 = local_70;
  uVar4 = local_d0;
  local_70 = *(undefined8 *)(local_70 + 0x30);
  if (local_c0 == 0) {
    local_118[0] = local_d0;
    iVar2 = napi_get_undefined(local_d0,local_128);
    local_c0 = local_128[0];
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(local_118);
      FUN_1800014c0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
  }
  local_118[0] = uVar4;
  iVar2 = napi_unwrap(uVar4,local_c0,local_128);
  if (iVar2 != 0) {
    puVar5 = FUN_180002d50(local_118,&local_108);
    uVar4 = FUN_180001210(puVar5);
    FUN_1800014c0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  local_e8 = *(undefined1 (*) [16])(lVar1 + 0x18);
  iVar2 = local_e8._8_4_;
  local_f0 = *(undefined8 *)(lVar1 + 0x28);
  if (local_128[0] != 0) {
    if (local_b8 == 0) {
      local_118[0] = local_d0;
      iVar3 = napi_get_undefined(local_d0,&local_108);
      if (iVar3 != 0) {
        uVar4 = FUN_180001210(local_118);
        FUN_1800014c0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
        FUN_180006f84(local_68,&DAT_180020780);
      }
    }
    else {
      local_108 = *local_b0;
    }
    local_100 = local_d0;
    local_f8 = local_108;
    (*(code *)CONCAT44(local_e8._4_4_,local_e8._0_4_))(iVar2 + local_128[0],&local_d8,&local_100);
  }
  if (local_78 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_78);
  }
  return 0;
}

