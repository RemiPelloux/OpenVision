
/* Address: 0x180003ed0; Evidence: ev_bbe51bcd1d1a9a2ffcb64fe8b78be1019b30d530e501c2cb164c8292ddd924fd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180003ed0(undefined8 param_1,undefined8 *param_2)

{
  code *pcVar1;
  undefined1 local_90 [8];
  undefined8 local_88;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_1800023d0(local_78,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_90,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_18);
  }
  return local_88;
}

