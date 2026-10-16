
/* Address: 0x1800037b0; Evidence: ev_c9e568752736d17ee9dfe61b6828ae116bd18071751517525507e114b45e00f1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800037b0(undefined8 *param_1,undefined8 *param_2,undefined8 param_3)

{
  undefined8 uVar1;
  undefined8 uVar2;
  int iVar3;
  undefined1 auStackY_d8 [32];
  undefined8 *local_a8;
  undefined8 local_a0;
  undefined8 *local_98;
  undefined8 local_90;
  undefined8 *local_88;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStackY_d8;
  uVar1 = *param_2;
  local_a8 = param_1;
  iVar3 = napi_create_object(uVar1,&local_a8);
  if (iVar3 != 0) {
    FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  uVar2 = *param_2;
  local_98 = local_a8;
  local_a0 = uVar1;
  iVar3 = napi_create_object(uVar2,&local_a8);
  if (iVar3 == 0) {
    local_88 = local_a8;
    local_90 = uVar2;
    FUN_1800038c0(param_1,&local_90,param_2,param_3,(longlong)&local_a0);
    *param_1 = &PTR_FUN_18001f1e0;
    return param_1;
  }
  FUN_1800014a0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_78,&DAT_180021cb0);
}

