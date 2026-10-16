
/* Address: 0x1800047b0; Evidence: ev_be98710f765491f9a86e556a71c8ba7bd820c99ff9edc8b4f4d12af7afe73346 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_1800047b0(undefined8 param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  longlong lVar4;
  undefined1 auStack_1a8 [32];
  longlong local_188;
  longlong local_180;
  longlong local_178;
  longlong local_168 [2];
  longlong local_158;
  longlong local_150;
  undefined8 local_148;
  undefined1 local_138 [16];
  ulonglong local_128;
  longlong local_120;
  longlong local_110;
  longlong local_108;
  longlong *local_100;
  LPVOID local_c8;
  longlong local_c0;
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_1a8;
  FUN_1800023d0(&local_128,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  lVar4 = local_c0;
  local_c0 = *(undefined8 *)(local_c0 + 0x30);
  local_168[0] = local_120;
  if (local_110 == 0) {
    local_188 = local_120;
    FUN_180001270(&local_188,&local_180);
    local_168[0] = local_180;
    local_110 = local_178;
  }
  iVar1 = napi_unwrap(local_168[0],local_110,&local_188);
  if (iVar1 != 0) {
    puVar2 = FUN_180001310(local_168,&local_180);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014f0(local_b8,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_b8,&DAT_18001f750);
  }
  local_138 = *(undefined1 (*) [16])(lVar4 + 0x18);
  local_148 = *(undefined8 *)(lVar4 + 0x28);
  if (local_188 != 0) {
    lVar4 = local_138._8_4_ + local_188;
    if (local_108 == 0) {
      local_168[0] = local_120;
      iVar1 = napi_get_undefined(local_120,&local_180);
      if (iVar1 != 0) {
        uVar3 = FUN_180001210(local_168);
        FUN_1800014f0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
        FUN_180006d04(local_68,&DAT_18001f750);
      }
    }
    else {
      local_180 = *local_100;
    }
    local_158 = local_120;
    local_150 = local_180;
    (*(code *)CONCAT44(local_138._4_4_,local_138._0_4_))(lVar4,&local_128,&local_158);
  }
  if (local_c8 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_c8);
  }
  return 0;
}

