
/* Address: 0x1800012a0; Evidence: ev_bff411291f225fb96f1d514ba92eaecfd4fb875880f226d131d3d33ed4ed8ccf */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined4 FUN_1800012a0(undefined8 *param_1)

{
  int iVar1;
  undefined1 auStack_98 [32];
  undefined4 local_78 [4];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_98;
  if (param_1[1] == 0) {
    local_78[0] = 0;
  }
  else {
    iVar1 = napi_typeof(*param_1,param_1[1],local_78);
    if (iVar1 != 0) {
      FUN_1800014a0(local_68,*param_1);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  return local_78[0];
}

