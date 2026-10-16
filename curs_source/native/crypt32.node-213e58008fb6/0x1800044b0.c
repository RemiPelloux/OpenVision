
/* Address: 0x1800044b0; Evidence: ev_bce4f8d385020f90d01b56264a4dcba2e2d42e8c61cf483d6cb85b8b8f8ea52c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_1800044b0(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  int iVar2;
  longlong *plVar3;
  undefined8 *puVar4;
  undefined8 uVar5;
  undefined1 auStack_158 [32];
  longlong local_138 [2];
  longlong local_128;
  longlong lStack_120;
  undefined8 local_118;
  longlong local_108;
  longlong local_100;
  ulonglong local_e8;
  longlong local_e0;
  longlong local_d0;
  LPVOID local_88;
  undefined8 *local_80;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_158;
  FUN_1800023d0(&local_e8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  puVar4 = local_80;
  local_80 = (undefined8 *)local_80[3];
  local_128 = local_e0;
  lStack_120 = local_d0;
  if (local_d0 == 0) {
    local_138[0] = local_e0;
    FUN_180001270(local_138,&local_108);
    local_128 = local_108;
    lStack_120 = local_100;
  }
  iVar2 = napi_unwrap(local_128,lStack_120,local_138);
  if (iVar2 != 0) {
    puVar4 = FUN_180001310(&local_128,&local_108);
    uVar5 = FUN_180001210(puVar4);
    FUN_1800014f0(local_78,uVar5);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  local_118 = puVar4[2];
  if (local_138[0] == 0) {
    local_128 = 0;
    lStack_120 = 0;
    plVar3 = &local_128;
  }
  else {
    plVar3 = (longlong *)(*(code *)*puVar4)((int)puVar4[1] + local_138[0],&local_128,&local_e8);
  }
  lVar1 = plVar3[1];
  if (local_88 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_88);
  }
  return lVar1;
}

