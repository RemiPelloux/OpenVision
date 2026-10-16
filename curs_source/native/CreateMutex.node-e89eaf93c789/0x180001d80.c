
/* Address: 0x180001d80; Evidence: ev_91e2e959e33f6a3a022b9ee9fec2372ec3a4849b6f033b68594f9400d7b83303 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180001d80(longlong param_1)

{
  longlong *plVar1;
  undefined8 *puVar2;
  undefined1 auStack_78 [32];
  longlong *local_58;
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40 [2];
  longlong local_30 [4];
  ulonglong local_10;
  
  local_10 = DAT_180022000 ^ (ulonglong)auStack_78;
  plVar1 = (longlong *)(param_1 + 0x30);
  if ((*(longlong *)(param_1 + 0x40) == 0) && (*(longlong *)(param_1 + 0x18) != 0)) {
    local_58 = plVar1;
    puVar2 = FUN_180002070((longlong *)(param_1 + 0x18),local_40);
    local_50 = *puVar2;
    local_48 = puVar2[1];
    FUN_1800012f0(&local_50,(undefined1 (*) [32])local_30);
    FUN_1800029b0(plVar1,local_30);
    FUN_180002a80(local_30);
  }
  return plVar1;
}

