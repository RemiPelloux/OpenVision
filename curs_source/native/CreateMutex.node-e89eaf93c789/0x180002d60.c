
/* Address: 0x180002d60; Evidence: ev_596cf04f5cd81cdc438392a439fb59537169aecc4acd68996229f9cbab1e7155 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002d60(undefined8 *param_1,undefined8 param_2)

{
  int iVar1;
  undefined1 auStack_a8 [32];
  undefined8 *local_88 [3];
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_a8;
  local_88[0] = param_1;
  iVar1 = napi_create_string_utf8
                    (param_2,"Class constructors cannot be invoked without \'new\'",0x32,&local_70);
  if (iVar1 != 0) {
    FUN_1800014c0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  iVar1 = napi_create_type_error(param_2,0,local_70,local_88);
  if (iVar1 == 0) {
    FUN_1800018d0(param_1,param_2,(longlong)local_88[0]);
    *param_1 = &PTR_FUN_18001dfd0;
    return param_1;
  }
  FUN_1800014c0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_68,&DAT_180020780);
}

