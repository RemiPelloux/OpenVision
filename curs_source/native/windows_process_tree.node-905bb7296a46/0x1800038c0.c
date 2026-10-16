
/* Address: 0x1800038c0; Evidence: ev_ea85a56738403ab9ca719435c66bbe40939423f3c217998be0cd69e37ff282af */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_1800038c0(undefined8 *param_1,undefined8 *param_2,undefined8 *param_3,undefined8 param_4,
             longlong param_5)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  int iVar3;
  undefined8 *puVar4;
  undefined1 auStack_f8 [32];
  code *local_d8;
  undefined8 *local_d0;
  undefined8 *local_c8;
  undefined8 *local_b8;
  undefined8 *local_b0;
  undefined8 *local_a8;
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_f8;
  *param_1 = &PTR_FUN_18001f1e0;
  param_1[1] = *param_3;
  puVar1 = param_1 + 3;
  uVar2 = *param_2;
  local_b0 = puVar1;
  local_a8 = param_1;
  if (param_2[1] == 0) {
    local_b8 = (undefined8 *)0x0;
  }
  else {
    iVar3 = napi_create_reference(uVar2,param_2[1],1,&local_b8);
    if (iVar3 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
  }
  *puVar1 = uVar2;
  param_1[4] = local_b8;
  *(undefined1 *)(param_1 + 5) = 0;
  puVar1 = param_1 + 6;
  uVar2 = *param_3;
  local_b8 = puVar1;
  if (param_3[1] == 0) {
    puVar4 = (undefined8 *)0x0;
  }
  else {
    iVar3 = napi_create_reference(uVar2,param_3[1],1,&local_b8);
    puVar4 = local_b8;
    if (iVar3 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
  }
  *puVar1 = uVar2;
  param_1[7] = puVar4;
  *(undefined1 *)(param_1 + 8) = 0;
  param_1[9] = 0;
  param_1[10] = 0;
  param_1[0xb] = 0;
  param_1[0xc] = 0xf;
  *(undefined1 *)(param_1 + 9) = 0;
  *(undefined1 *)(param_1 + 0xd) = 0;
  iVar3 = napi_create_string_latin1(param_1[1],param_4,0xffffffffffffffff,&local_b0);
  if (iVar3 != 0) {
    FUN_1800014a0(local_98,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  local_c8 = param_1 + 2;
  local_d8 = FUN_180003f60;
  local_d0 = param_1;
  iVar3 = napi_create_async_work(param_1[1],*(undefined8 *)(param_5 + 8),local_b0,FUN_180003f00);
  if (iVar3 != 0) {
    FUN_1800014a0(local_98,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  return param_1;
}

