
/* Address: 0x180004070; Evidence: ev_38fb55f35216510c642efdb01ec7e50b36c30e1caab2d751b46b9dde54d6fbda */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004070(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_118 [32];
  undefined8 *local_f8;
  undefined8 local_f0 [3];
  ulonglong local_d8;
  undefined8 local_d0;
  undefined8 *local_c0;
  LPVOID local_78;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_118;
  FUN_180002260(&local_d8,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  local_f8 = operator_new(0x50);
  puVar2 = FUN_180003090(local_f8,(longlong)&local_d8);
  *(undefined1 *)(puVar2 + 4) = 0;
  puVar2 = local_c0;
  if (local_c0 == (undefined8 *)0x0) {
    local_f0[0] = local_d0;
    iVar1 = napi_get_undefined(local_d0,&local_f8);
    puVar2 = local_f8;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(local_f0);
      FUN_1800014c0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
  }
  if (local_78 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_78);
  }
  return puVar2;
}

