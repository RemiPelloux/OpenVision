
/* Address: 0x180003b90; Evidence: ev_a2f4942ed6e0c88e9e712702bb64f8a7580a3e21639074f116620d81769824a2 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003b90(longlong *param_1)

{
  int iVar1;
  longlong *plVar2;
  LPVOID pvVar3;
  undefined1 auStackY_c8 [32];
  undefined8 local_98 [2];
  LPVOID local_88 [2];
  longlong local_78;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStackY_c8;
  if (param_1[7] != 0) {
    plVar2 = (longlong *)(**(code **)(*param_1 + 0x38))(param_1,local_88);
    if (param_1[4] == 0) {
      local_98[0] = 0;
    }
    else {
      iVar1 = napi_get_reference_value(param_1[3],param_1[4],local_98);
      if (iVar1 != 0) {
        FUN_1800014a0(local_68,param_1[3]);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_68,&DAT_180021cb0);
      }
    }
    FUN_1800035a0(param_1 + 6,local_98,local_98[0],plVar2);
    if (local_88[0] != (LPVOID)0x0) {
      pvVar3 = local_88[0];
      if ((0xfff < (local_78 - (longlong)local_88[0] & 0xfffffffffffffff8U)) &&
         (pvVar3 = *(LPVOID *)((longlong)local_88[0] + -8),
         0x1f < (ulonglong)((longlong)local_88[0] + (-8 - (longlong)pvVar3)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_18000dfd0(pvVar3);
    }
  }
  return;
}

