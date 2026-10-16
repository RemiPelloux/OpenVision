
/* Address: 0x180003cc0; Evidence: ev_55088b84af44f3ab32909294dcf6d30f5000ce0c4d457fff8595cfd46e4d21ef */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003cc0(longlong param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_c8 [32];
  undefined8 local_a8;
  undefined8 local_a0 [2];
  undefined8 *local_90;
  undefined8 *local_88;
  undefined8 local_80 [3];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_c8;
  if (*(longlong *)(param_1 + 0x38) != 0) {
    puVar2 = FUN_180001930(param_2,local_80);
    local_a8 = puVar2[1];
    local_90 = &local_a8;
    local_88 = local_a0;
    if (*(longlong *)(param_1 + 0x20) == 0) {
      local_a0[0] = 0;
    }
    else {
      iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_1 + 0x18),*(longlong *)(param_1 + 0x20),local_a0);
      if (iVar1 != 0) {
        FUN_1800014a0(local_68,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_68,&DAT_180021cb0);
      }
    }
    FUN_1800035a0((undefined8 *)(param_1 + 0x30),local_a0,local_a0[0],(longlong *)&local_90);
  }
  return;
}

