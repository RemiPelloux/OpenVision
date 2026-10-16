
/* Address: 0x180001930; Evidence: ev_29d34faf12ea619d7feb3bc141f8a44c44429e7390564d359727814f8acc7d6c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001930(longlong param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  int iVar2;
  undefined1 auStack_c8 [32];
  char local_a8 [8];
  undefined8 local_a0;
  int local_98 [2];
  undefined8 local_90;
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_c8;
  if (*(longlong *)(param_1 + 0x20) == 0) {
    *param_2 = *(undefined8 *)(param_1 + 0x18);
    param_2[1] = 0;
    return param_2;
  }
  iVar2 = napi_get_reference_value
                    (*(undefined8 *)(param_1 + 0x18),*(longlong *)(param_1 + 0x20),&local_a0);
  if (iVar2 != 0) {
    FUN_1800014a0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  iVar2 = napi_typeof(*(undefined8 *)(param_1 + 0x18),local_a0,local_98);
  if (iVar2 != 0) {
    FUN_1800014a0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  if (local_98[0] != 5) {
    uVar1 = *(undefined8 *)(param_1 + 0x18);
    local_a8[0] = '\0';
    iVar2 = napi_create_string_utf8
                      (uVar1,"4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal",0x2d,&local_90);
    if (iVar2 != 0) {
      FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_78,&DAT_180021cb0);
    }
    napi_has_property(*(undefined8 *)(param_1 + 0x18),local_a0,local_90,local_a8);
    if (local_a8[0] != '\0') {
      uVar1 = *(undefined8 *)(param_1 + 0x18);
      iVar2 = napi_create_string_utf8
                        (uVar1,"4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal",0x2d,&local_90);
      if (iVar2 != 0) {
        FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_78,&DAT_180021cb0);
      }
      iVar2 = napi_get_property(*(undefined8 *)(param_1 + 0x18),local_a0,local_90,local_88);
      if (iVar2 != 0) {
        FUN_1800014a0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_78,&DAT_180021cb0);
      }
      *param_2 = *(undefined8 *)(param_1 + 0x18);
      goto LAB_180001a4c;
    }
  }
  *param_2 = *(undefined8 *)(param_1 + 0x18);
  local_88[0] = local_a0;
LAB_180001a4c:
  param_2[1] = local_88[0];
  return param_2;
}

