
/* Address: 0x180003f80; Evidence: ev_7cb981384a7b9315eb3e131da35dc373b1473a8eb931036606e720ed6aaf830e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003f80(longlong *param_1,undefined8 param_2,int param_3)

{
  int iVar1;
  undefined1 auStack_98 [32];
  longlong local_78;
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_98;
  if (param_3 != 0xb) {
    local_78 = param_1[1];
    iVar1 = napi_open_handle_scope(local_78,&local_70);
    if (iVar1 != 0) {
      FUN_1800014a0(local_68,local_78);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
    FUN_180004820(param_1);
    iVar1 = napi_close_handle_scope(local_78,local_70);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
    }
  }
  if ((char)param_1[0xd] == '\0') {
    (**(code **)(*param_1 + 0x30))(param_1);
  }
  return;
}

