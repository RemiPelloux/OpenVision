
/* Address: 0x1800041c0; Evidence: ev_61eaedd3a92ef923ea456116cbb3e0ac6be3c2fe013c69127765646fe7291d66 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800041c0(undefined8 *param_1)

{
  code *pcVar1;
  undefined1 local_90 [8];
  undefined8 local_88;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_180002260(local_78,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[2];
  (*pcVar1)(local_90,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_18);
  }
  return local_88;
}

