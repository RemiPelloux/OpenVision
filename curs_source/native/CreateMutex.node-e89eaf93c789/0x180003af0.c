
/* Address: 0x180003af0; Evidence: ev_b41e3b61038e0be8a65ae065e3eb70100d5a1bfb0774b019c545bafd8e2c0050 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003af0(undefined8 param_1,longlong *param_2)

{
  int iVar1;
  undefined1 auStack_98 [32];
  undefined8 local_78;
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_98;
  local_78 = param_1;
  iVar1 = napi_open_handle_scope(param_1,&local_70);
  if (iVar1 != 0) {
    FUN_1800014c0(local_68,local_78);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  (**(code **)(*param_2 + 8))(param_2,param_1);
  (**(code **)*param_2)(param_2,1);
  iVar1 = napi_close_handle_scope(local_78,local_70);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
}

