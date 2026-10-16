
/* Address: 0x180002b10; Evidence: ev_5c8ab0958cbdfcb357e2a03ed6c43a983e2559205b697d33f44ed015a594692d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180002b10(undefined8 *param_1)

{
  code *pcVar1;
  undefined1 local_90 [8];
  undefined8 local_88;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_180002260(local_78,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_90,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_18);
  }
  return local_88;
}

