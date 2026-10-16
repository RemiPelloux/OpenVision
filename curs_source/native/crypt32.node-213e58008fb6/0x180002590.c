
/* Address: 0x180002590; Evidence: ev_e9d38b8234729307e84f6b74ffd3d57b9177bd78cd2c04c3bb0a9c8a530783d1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002590(undefined8 *param_1,longlong param_2)

{
  ulonglong uVar1;
  int iVar2;
  undefined1 (*szSubsystemProtocol) [32];
  HCERTSTORE pvVar3;
  undefined8 uVar4;
  longlong lVar5;
  bool bVar6;
  undefined1 auStack_f8 [32];
  undefined8 local_d8;
  undefined8 *local_d0;
  ulonglong local_c8;
  undefined8 local_c0;
  ulonglong local_b8;
  undefined8 *local_b0;
  ulonglong local_a8;
  longlong local_a0;
  undefined1 local_98;
  longlong local_88 [10];
  ulonglong local_38;
  
  local_38 = DAT_180021000 ^ (ulonglong)auStack_f8;
  bVar6 = false;
  local_c8 = local_c8 & 0xffffffff00000000;
  param_1[1] = 0;
  param_1[2] = 0;
  *(undefined1 *)(param_1 + 3) = 0;
  *param_1 = &PTR_FUN_18001d060;
  *(undefined2 *)(param_1 + 4) = 1;
  uVar1 = *(ulonglong *)(param_2 + 8);
  lVar5 = *(longlong *)(param_2 + 0x18);
  local_b0 = param_1;
  if (*(longlong *)(param_2 + 0x18) == 0) {
    local_c8 = uVar1;
    FUN_180001270(&local_c8,&local_a8);
    lVar5 = local_a0;
  }
  local_d0 = &local_c0;
  local_d8 = 0;
  iVar2 = napi_wrap(uVar1,lVar5,param_1,FUN_1800035b0);
  uVar4 = local_c0;
  if (iVar2 != 0) {
    FUN_1800014f0(local_88,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_88,&DAT_18001f750);
  }
  local_a0 = local_c0;
  local_98 = 0;
  local_a8 = uVar1;
  if ((param_1[2] != 0) && (iVar2 = napi_delete_reference(param_1[1]), iVar2 != 0)) {
    FUN_1800014f0(local_88,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_88,&DAT_18001f750);
  }
  param_1[1] = uVar1;
  param_1[2] = uVar4;
  *(undefined1 *)(param_1 + 3) = 0;
  *param_1 = &PTR_FUN_18001d078;
  if (*(longlong *)(param_2 + 0x20) != 0) {
    uVar4 = *(undefined8 *)(param_2 + 8);
    if (**(longlong **)(param_2 + 0x28) != 0) {
      iVar2 = napi_typeof(uVar4,**(longlong **)(param_2 + 0x28),&local_c8);
      if (iVar2 != 0) {
        FUN_1800014f0(local_88,uVar4);
                    /* WARNING: Subroutine does not return */
        FUN_180006d04(local_88,&DAT_18001f750);
      }
      if ((int)local_c8 == 4) {
        if (*(longlong *)(param_2 + 0x20) == 0) {
          uVar4 = *(undefined8 *)(param_2 + 8);
          local_c0 = uVar4;
          iVar2 = napi_get_undefined(uVar4,&local_c8);
          local_b8 = local_c8;
          if (iVar2 != 0) {
            uVar4 = FUN_180001210(&local_c0);
            FUN_1800014f0(local_88,uVar4);
                    /* WARNING: Subroutine does not return */
            FUN_180006d04(local_88,&DAT_18001f750);
          }
        }
        else {
          uVar4 = *(undefined8 *)(param_2 + 8);
          local_b8 = **(ulonglong **)(param_2 + 0x28);
        }
        local_c0 = uVar4;
        szSubsystemProtocol = FUN_180001320(&local_c0,(undefined1 (*) [32])&local_a8);
        bVar6 = true;
        if (0xf < *(ulonglong *)(*szSubsystemProtocol + 0x18)) {
          szSubsystemProtocol = *(undefined1 (**) [32])*szSubsystemProtocol;
        }
        goto LAB_180002710;
      }
    }
  }
  szSubsystemProtocol = (undefined1 (*) [32])&DAT_18001cf9c;
LAB_180002710:
  pvVar3 = CertOpenSystemStoreA(0,(LPCSTR)szSubsystemProtocol);
  if (bVar6) {
    FUN_1800035d0((longlong *)&local_a8);
  }
  param_1[5] = pvVar3;
  param_1[6] = 0;
  return param_1;
}

