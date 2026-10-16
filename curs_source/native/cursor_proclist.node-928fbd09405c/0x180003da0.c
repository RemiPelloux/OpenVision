
/* Address: 0x180003da0; Evidence: ev_33fca4ef6e9c9bf9cbd08cbc9fa4133efc0f416553aeb3dfba809eb84b27ea1e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003da0(longlong param_1,undefined8 param_2,undefined1 param_3)

{
  longlong *plVar1;
  longlong *plVar2;
  undefined1 auStack_98 [32];
  longlong local_78;
  longlong local_68 [11];
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStack_98;
  local_78 = param_1;
  plVar1 = FUN_180003350(local_68,(undefined8 *)(param_1 + 0x70),param_3);
  plVar2 = (longlong *)(param_1 + 0xa0);
  if (plVar2 != plVar1) {
    FUN_180005ff0(plVar2);
    *plVar2 = *plVar1;
    *(longlong *)(param_1 + 0xa8) = plVar1[1];
    *(longlong *)(param_1 + 0xb0) = plVar1[2];
    *plVar1 = 0;
    plVar1[1] = 0;
    plVar1[2] = 0;
  }
  FUN_180005ff0(local_68);
  return;
}

