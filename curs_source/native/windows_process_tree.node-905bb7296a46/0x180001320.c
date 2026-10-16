
/* Address: 0x180001320; Evidence: ev_4f554dcac9972f4b08eb014bd75975aef61a79ec4fba3fb0db2d4ec643a73d88 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32] FUN_180001320(undefined8 *param_1,undefined1 (*param_2) [32])

{
  ulonglong uVar1;
  int iVar2;
  ulonglong uVar3;
  undefined1 *puVar4;
  ulonglong uVar5;
  undefined1 (*pauVar6) [32];
  undefined1 auStack_c8 [32];
  ulonglong *local_a8;
  undefined4 local_98;
  ulonglong local_90;
  undefined1 (*local_88) [32];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_c8;
  local_98 = 0;
  local_a8 = &local_90;
  local_88 = param_2;
  iVar2 = napi_get_value_string_utf8(*param_1,param_1[1],0,0);
  if (iVar2 != 0) {
    FUN_1800014a0(local_78,*param_1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  *(undefined8 *)*param_2 = 0;
  *(undefined8 *)(*param_2 + 8) = 0;
  *(undefined8 *)(*param_2 + 0x10) = 0;
  *(undefined8 *)(*param_2 + 0x18) = 0xf;
  (*param_2)[0] = 0;
  local_98 = 2;
  uVar1 = local_90 + 1;
  if (0xf < uVar1) {
    if (0x7fffffffffffffff < uVar1) {
                    /* WARNING: Subroutine does not return */
      FUN_1800011f0();
    }
    uVar3 = uVar1 | 0xf;
    uVar5 = 0x7fffffffffffffff;
    if ((uVar3 < 0x8000000000000000) && (uVar5 = uVar3, uVar3 < 0x16)) {
      uVar5 = 0x16;
    }
    puVar4 = (undefined1 *)FUN_1800032d0(uVar5 + 1);
    *(ulonglong *)(*param_2 + 0x10) = uVar1;
    *(ulonglong *)(*param_2 + 0x18) = uVar5;
    *puVar4 = (*param_2)[0];
    *(undefined1 **)*param_2 = puVar4;
    *(undefined8 *)(*param_2 + 0x10) = 0;
  }
  FUN_180002e70(param_2,local_90);
  pauVar6 = param_2;
  if (0xf < *(ulonglong *)(*param_2 + 0x18)) {
    pauVar6 = *(undefined1 (**) [32])*param_2;
  }
  local_a8 = (ulonglong *)0x0;
  iVar2 = napi_get_value_string_utf8(*param_1,param_1[1],pauVar6);
  if (iVar2 == 0) {
    return param_2;
  }
  FUN_1800014a0(local_78,*param_1);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_78,&DAT_180021cb0);
}

