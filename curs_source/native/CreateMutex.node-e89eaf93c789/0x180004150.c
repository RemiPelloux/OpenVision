
/* Address: 0x180004150; Evidence: ev_0d4ae228cece547f180a0bc4315ee4de527395104e3090068a7dc932350ba0ff */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180004150(undefined8 *param_1)

{
  code *pcVar1;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_180002260(local_78,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_18);
  }
  return 0;
}

