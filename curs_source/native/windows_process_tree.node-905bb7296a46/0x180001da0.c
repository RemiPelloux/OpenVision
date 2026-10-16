
/* Address: 0x180001da0; Evidence: ev_d0e60912ca96710997b18c7b1e3b2090ca4a83f974925873d47650becbaaafe7 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180001da0(longlong param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_a8;
  local_88 = *(undefined8 *)(param_1 + 0x18);
  iVar1 = napi_open_handle_scope(local_88,&local_80);
  if (iVar1 != 0) {
    FUN_1800014a0(local_68,local_88);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  if (*(longlong *)(param_1 + 0x20) != 0) {
    puVar2 = FUN_180001930(param_1,local_78);
    iVar1 = napi_throw(*(undefined8 *)(param_1 + 0x18),puVar2[1]);
    if (iVar1 != 0) {
      FUN_1800014a0(local_68,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  iVar1 = napi_close_handle_scope(local_88,local_80);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
}

