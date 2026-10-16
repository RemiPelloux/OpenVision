
/* Address: 0x180002c30; Evidence: ev_e4d2bf5003a959ac446f095ddda92c9a6357dd652d08352f43f34973ab4a2492 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002c30(undefined8 *param_1,undefined8 param_2,undefined8 param_3)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_b8 [32];
  undefined8 *local_98;
  undefined8 *local_90;
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_b8;
  puVar2 = (undefined8 *)FUN_1800062f8(0x10);
  *puVar2 = param_3;
  puVar2[1] = 0;
  local_90 = local_88;
  local_98 = puVar2;
  iVar1 = napi_create_function(param_2,0,0xffffffffffffffff,FUN_180002f10);
  if (iVar1 == 0) {
    local_90 = (undefined8 *)0x0;
    local_98 = (undefined8 *)0x0;
    iVar1 = napi_add_finalizer(param_2,local_88[0],puVar2,FUN_180002fc0);
    if (iVar1 == 0) {
      param_1[1] = local_88[0];
      *param_1 = param_2;
      return param_1;
    }
  }
  thunk_FUN_18000dfd0(puVar2);
  FUN_1800014a0(local_78,param_2);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_78,&DAT_180021cb0);
}

