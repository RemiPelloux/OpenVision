
/* Address: 0x180001270; Evidence: ev_9584c04cf4299327ed4d5bdacdd9b5011c1a4212ec7440f6c04badbb3df68319 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001270(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 uVar2;
  undefined1 auStack_98 [32];
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_98;
  iVar1 = napi_get_undefined(*param_1,local_78);
  if (iVar1 == 0) {
    *param_2 = *param_1;
    param_2[1] = local_78[0];
    return param_2;
  }
  uVar2 = FUN_180001210(param_1);
  FUN_1800014f0(local_68,uVar2);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_68,&DAT_18001f750);
}

