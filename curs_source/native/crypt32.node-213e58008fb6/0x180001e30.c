
/* Address: 0x180001e30; Evidence: ev_367adcc81fa043e95a519c33c29525ce5fb5a1dd98eccd1eac983234d95f6143 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180001e30(longlong param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_b8 [32];
  char local_98 [8];
  undefined8 local_90;
  undefined8 local_88;
  undefined8 local_80 [3];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_b8;
  local_90 = *(undefined8 *)(param_1 + 0x18);
  iVar1 = napi_open_handle_scope(local_90,&local_88);
  if (iVar1 != 0) {
    FUN_1800014f0(local_68,local_90);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  if (*(longlong *)(param_1 + 0x20) == 0) {
LAB_180001ecc:
    iVar1 = napi_close_handle_scope(local_90,local_88);
    if (iVar1 == 0) {
      return;
    }
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  local_98[0] = '\0';
  iVar1 = napi_is_exception_pending(*(undefined8 *)(param_1 + 0x18),local_98);
  if ((iVar1 != 0) || (local_98[0] == '\0')) {
    puVar2 = FUN_1800019d0(param_1,local_80);
    iVar1 = napi_throw(*(undefined8 *)(param_1 + 0x18),puVar2[1]);
    if (iVar1 == 10) {
      iVar1 = napi_close_handle_scope(local_90,local_88);
      if (iVar1 == 0) {
        return;
      }
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (iVar1 == 0) goto LAB_180001ecc;
  }
  FUN_1800014f0(local_68,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_68,&DAT_18001f750);
}

