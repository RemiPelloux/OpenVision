
/* Address: 0x180003f20; Evidence: ev_0d2d8686b297255d270509e958f4e6a393ef6ae05a283eef5acb1ba1cb807600 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003f20(longlong *param_1)

{
  undefined1 auStack_68 [32];
  longlong *local_48;
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_68;
  local_48 = param_1;
  (**(code **)(*param_1 + 0x18))();
  return;
}

