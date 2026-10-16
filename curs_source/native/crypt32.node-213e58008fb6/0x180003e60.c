
/* Address: 0x180003e60; Evidence: ev_2e1c8375610e7a1c94fbe641be9fed3b08acf2338fc990cec38d2e8f6535162e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180003e60(undefined8 param_1,undefined8 *param_2)

{
  code *pcVar1;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_1800023d0(local_78,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_18);
  }
  return 0;
}

