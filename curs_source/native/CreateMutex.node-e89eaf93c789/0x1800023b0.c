
/* Address: 0x1800023b0; Evidence: ev_4b9e380c1e4baa3790397d70c2339755f3d5400ff639eda12750cf67082fe2c3 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800023b0(longlong param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_a8 [32];
  undefined8 local_88;
  undefined8 local_80;
  undefined8 local_78;
  undefined8 uStack_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_a8;
  uVar3 = *(undefined8 *)(param_1 + 8);
  if (*(longlong *)(param_1 + 0x20) == 0) {
    local_88 = uVar3;
    iVar1 = napi_get_undefined(uVar3,&local_78);
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(&local_88);
      FUN_1800014c0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
    puVar2 = &local_88;
    local_80 = local_78;
    local_88 = uVar3;
  }
  else {
    local_78 = uVar3;
    puVar2 = &local_78;
    uStack_70 = **(undefined8 **)(param_1 + 0x28);
  }
  uVar3 = puVar2[1];
  *param_2 = *puVar2;
  param_2[1] = uVar3;
  return param_2;
}

