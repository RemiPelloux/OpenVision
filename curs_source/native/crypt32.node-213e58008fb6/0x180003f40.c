
/* Address: 0x180003f40; Evidence: ev_b62fe4d37708c8ba6422f35c80e5366443946354fee8bbd94927e9f764a7b093 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180003f40(undefined8 param_1,undefined8 *param_2)

{
  code *pcVar1;
  undefined1 local_90 [8];
  undefined8 local_88;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_1800023d0(local_78,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[2];
  (*pcVar1)(local_90,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_18);
  }
  return local_88;
}

