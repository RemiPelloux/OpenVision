
/* Address: 0x180004370; Evidence: ev_68fb6372780e6db0cba13da5b3f64c7cbb210d6f98236e6eb28fd41c5e67afe9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004370(undefined8 param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_148 [32];
  longlong local_128;
  longlong local_120;
  longlong local_118;
  undefined8 local_108 [6];
  ulonglong local_d8;
  longlong local_d0;
  longlong local_c0;
  LPVOID local_78;
  undefined8 *local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_148;
  FUN_1800023d0(&local_d8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  puVar2 = local_70;
  local_70 = (undefined8 *)local_70[3];
  if (local_c0 == 0) {
    local_128 = local_d0;
    FUN_180001270(&local_128,&local_120);
    local_d0 = local_120;
    local_c0 = local_118;
  }
  iVar1 = napi_unwrap(local_d0,local_c0,&local_128);
  if (iVar1 != 0) {
    puVar2 = FUN_180001310(local_108,&local_120);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014f0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  if (local_128 != 0) {
    (*(code *)*puVar2)((int)puVar2[1] + local_128,&local_d8);
  }
  if (local_78 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_78);
  }
  return 0;
}

