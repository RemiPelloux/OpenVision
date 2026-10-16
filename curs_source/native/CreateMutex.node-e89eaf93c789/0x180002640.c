
/* Address: 0x180002640; Evidence: ev_b7292f71e73d6417cbd57a5d748433d151edce4bc9f93e35003c738e9202178e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002640(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined1 auStack_c8 [32];
  undefined8 *local_a8;
  undefined8 *local_a0;
  undefined8 local_98;
  undefined8 uStack_90;
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_c8;
  puVar3 = operator_new(0x10);
  *puVar3 = FUN_1800024e0;
  local_a0 = &local_98;
  puVar3[1] = 0;
  local_a8 = puVar3;
  iVar2 = napi_create_function(param_2,0,0xffffffffffffffff,FUN_180002a50);
  if (iVar2 == 0) {
    local_a0 = (undefined8 *)0x0;
    local_a8 = (undefined8 *)0x0;
    iVar2 = napi_add_finalizer(param_2,local_98,puVar3,FUN_180002b00);
    if (iVar2 == 0) {
      uVar1 = *param_3;
      iVar2 = napi_set_named_property(uVar1,param_3[1],"isActive",local_98);
      if (iVar2 == 0) {
        local_98 = *param_3;
        uStack_90 = param_3[1];
        FUN_180002e40(local_88,param_2,&local_98);
        uVar1 = param_3[1];
        *param_1 = *param_3;
        param_1[1] = uVar1;
        return param_1;
      }
      FUN_1800014c0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_78,&DAT_180020780);
    }
  }
  thunk_FUN_18000cbe0(puVar3);
  FUN_1800014c0(local_78,param_2);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_78,&DAT_180020780);
}

