
/* Address: 0x180003bc0; Evidence: ev_2970dc607fb3ce035a04c398ab53b14f235aaae5237d5a024519b9dbbbf34f9f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180003bc0(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_178 [32];
  longlong local_158;
  undefined8 local_150;
  undefined8 local_148 [4];
  ulonglong local_128;
  undefined8 local_120;
  longlong local_110;
  LPVOID local_c8;
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_178;
  FUN_180002260(&local_128,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  if (local_110 == 0) {
    local_150 = local_120;
    iVar1 = napi_get_undefined(local_120,&local_158);
    local_110 = local_158;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(&local_150);
      FUN_1800014c0(local_b8,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_b8,&DAT_180020780);
    }
  }
  local_148[0] = local_120;
  iVar1 = napi_unwrap(local_120,local_110,&local_158);
  if (iVar1 != 0) {
    puVar2 = FUN_180002d50(local_148,&local_150);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014c0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  if ((local_158 != 0) && (*(HANDLE *)(local_158 + 0x48) != (HANDLE)0x0)) {
    CloseHandle(*(HANDLE *)(local_158 + 0x48));
    *(undefined8 *)(local_158 + 0x48) = 0;
  }
  if (local_c8 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_c8);
  }
  return 0;
}

