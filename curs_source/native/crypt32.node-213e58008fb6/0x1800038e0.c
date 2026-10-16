
/* Address: 0x1800038e0; Evidence: ev_e14923f61072530d54ece3f04b91a642bac0e208b730593f4fd7a13a69d35c13 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_1800038e0(undefined8 param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  longlong lVar4;
  undefined1 auStack_198 [32];
  longlong local_178 [2];
  longlong local_168;
  longlong lStack_160;
  longlong local_158;
  longlong local_150;
  ulonglong local_138;
  longlong local_130;
  longlong local_120;
  LPVOID local_d8;
  longlong local_c8 [10];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_198;
  FUN_1800023d0(&local_138,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  lVar4 = local_130;
  if (local_120 == 0) {
    local_178[0] = local_130;
    FUN_180001270(local_178,&local_158);
    lVar4 = local_158;
    local_120 = local_150;
  }
  iVar1 = napi_unwrap(lVar4,local_120,local_178);
  if (iVar1 != 0) {
    puVar2 = FUN_180001310(&local_168,&local_158);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014f0(local_c8,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_c8,&DAT_18001f750);
  }
  if (local_178[0] == 0) {
    local_168 = 0;
    lStack_160 = 0;
  }
  else {
    iVar1 = napi_get_boolean(local_130,*(longlong *)(local_178[0] + 0x28) == 0,local_178);
    if (iVar1 != 0) {
      FUN_1800014f0(local_78,local_130);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_78,&DAT_18001f750);
    }
    local_168 = local_130;
    lStack_160 = local_178[0];
  }
  lVar4 = lStack_160;
  if (local_d8 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_d8);
  }
  return lVar4;
}

