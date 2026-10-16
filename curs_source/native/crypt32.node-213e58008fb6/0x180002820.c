
/* Address: 0x180002820; Evidence: ev_b6c663211d80457da4ab84338e80b128847ff688865adfcd63e0da4b717cd81f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180002820(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  int iVar2;
  PCCERT_CONTEXT pCVar3;
  longlong *plVar4;
  undefined1 auStack_108 [32];
  longlong *local_e8;
  undefined8 local_e0;
  undefined8 local_d8;
  longlong local_c8 [2];
  longlong local_b8;
  longlong lStack_b0;
  longlong local_a8;
  longlong lStack_a0;
  undefined4 local_98 [2];
  undefined8 local_90;
  longlong local_88;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_108;
  if (*(HCERTSTORE *)(param_1 + 0x28) == (HCERTSTORE)0x0) {
    *(undefined8 *)(param_1 + 0x28) = 0;
    local_c8[0] = *(longlong *)(param_3 + 8);
    FUN_180001270(local_c8,param_2);
  }
  else {
    pCVar3 = CertEnumCertificatesInStore
                       (*(HCERTSTORE *)(param_1 + 0x28),*(PCCERT_CONTEXT *)(param_1 + 0x30));
    *(PCCERT_CONTEXT *)(param_1 + 0x30) = pCVar3;
    if (pCVar3 == (PCCERT_CONTEXT)0x0) {
      if (*(HCERTSTORE *)(param_1 + 0x28) != (HCERTSTORE)0x0) {
        CertCloseStore(*(HCERTSTORE *)(param_1 + 0x28),0);
      }
      *(undefined8 *)(param_1 + 0x28) = 0;
      local_b8 = *(longlong *)(param_3 + 8);
      FUN_180001270(&local_b8,local_c8);
      plVar4 = local_c8;
    }
    else {
      lVar1 = *(longlong *)(param_3 + 8);
      local_e8 = &local_b8;
      iVar2 = napi_create_buffer_copy(lVar1,pCVar3->cbCertEncoded,pCVar3->pbCertEncoded,0);
      if (iVar2 != 0) {
        FUN_1800014f0(local_78,lVar1);
                    /* WARNING: Subroutine does not return */
        FUN_180006d04(local_78,&DAT_18001f750);
      }
      local_a8 = lVar1;
      lStack_a0 = local_b8;
      local_98[0] = 0;
      local_90 = 0;
      if (local_b8 != 0) {
        local_d8 = 0;
        local_e0 = 0;
        local_e8 = (longlong *)0x0;
        iVar2 = napi_get_typedarray_info(lVar1,local_b8,local_98,&local_90);
        if (iVar2 != 0) {
          FUN_1800014f0(local_78,local_a8);
                    /* WARNING: Subroutine does not return */
          FUN_180006d04(local_78,&DAT_18001f750);
        }
      }
      local_88 = 0;
      if (local_b8 != 0) {
        local_d8 = 0;
        local_e8 = local_c8;
        local_e0 = 0;
        local_c8[0] = 0;
        iVar2 = napi_get_typedarray_info(local_a8,lStack_a0,local_98,&local_90);
        local_88 = local_c8[0];
        if (iVar2 != 0) {
          FUN_1800014f0(local_78,local_a8);
                    /* WARNING: Subroutine does not return */
          FUN_180006d04(local_78,&DAT_18001f750);
        }
      }
      plVar4 = &local_b8;
      local_b8 = local_a8;
      lStack_b0 = lStack_a0;
    }
    lVar1 = plVar4[1];
    *param_2 = *plVar4;
    param_2[1] = lVar1;
  }
  return param_2;
}

