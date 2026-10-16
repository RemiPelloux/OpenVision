
/* Address: 0x1800047d0; Evidence: ev_8bfda31aa716825137e373b167df623625c6a0e5992d5968e05d05bc6b979169 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_1800047d0(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_188 [32];
  longlong local_168;
  undefined8 local_160;
  undefined8 local_158 [6];
  ulonglong local_128;
  undefined8 local_120;
  longlong local_110;
  LPVOID local_c8;
  undefined8 *local_c0;
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_188;
  FUN_180002260(&local_128,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  puVar2 = local_c0;
  local_c0 = (undefined8 *)local_c0[3];
  if (local_110 == 0) {
    local_160 = local_120;
    iVar1 = napi_get_undefined(local_120,&local_168);
    local_110 = local_168;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(&local_160);
      FUN_1800014c0(local_b8,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_b8,&DAT_180020780);
    }
  }
  local_158[0] = local_120;
  iVar1 = napi_unwrap(local_120,local_110,&local_168);
  if (iVar1 != 0) {
    puVar2 = FUN_180002d50(local_158,&local_160);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014c0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  if (local_168 != 0) {
    (*(code *)*puVar2)((int)puVar2[1] + local_168,&local_128);
  }
  if (local_c8 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_c8);
  }
  return 0;
}

