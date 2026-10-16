
/* Address: 0x180001e30; Evidence: ev_8c0d5beb5bee41bf2737ae6dee68733f6f187a35c1a31cca3f060c4b815613dd */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180001e30(longlong param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_a8;
  local_88 = *(undefined8 *)(param_1 + 0x18);
  iVar1 = napi_open_handle_scope(local_88,&local_80);
  if (iVar1 != 0) {
    FUN_1800014c0(local_68,local_88);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  if (*(longlong *)(param_1 + 0x20) != 0) {
    puVar2 = FUN_180001a30(param_1,local_78);
    iVar1 = napi_throw(*(undefined8 *)(param_1 + 0x18),puVar2[1]);
    if (iVar1 != 0) {
      FUN_1800014c0(local_68,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
  }
  iVar1 = napi_close_handle_scope(local_88,local_80);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
}

