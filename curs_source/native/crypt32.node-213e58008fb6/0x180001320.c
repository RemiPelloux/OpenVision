
/* Address: 0x180001320; Evidence: ev_02e6ef495073d02a2e4c099814cf0ac5a57fd0f3dd6c12eaf66d3027b745dc4a */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32] FUN_180001320(undefined8 *param_1,undefined1 (*param_2) [32])

{
  ulonglong uVar1;
  code *pcVar2;
  int iVar3;
  ulonglong uVar4;
  undefined1 *puVar5;
  undefined1 (*pauVar6) [32];
  ulonglong uVar7;
  undefined8 uVar8;
  undefined1 auStack_c8 [32];
  ulonglong *local_a8;
  undefined4 local_98;
  ulonglong local_90;
  undefined1 (*local_88) [32];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_c8;
  local_98 = 0;
  local_a8 = &local_90;
  uVar8 = 0;
  local_88 = param_2;
  iVar3 = napi_get_value_string_utf8(*param_1,param_1[1],0,0);
  if (iVar3 != 0) {
    FUN_1800014f0(local_78,*param_1);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  *(undefined8 *)*param_2 = 0;
  *(undefined8 *)(*param_2 + 8) = 0;
  *(undefined8 *)(*param_2 + 0x10) = 0;
  *(undefined8 *)(*param_2 + 0x18) = 0xf;
  (*param_2)[0] = 0;
  local_98 = 1;
  uVar1 = local_90 + 1;
  if (0xf < uVar1) {
    if (0x7fffffffffffffff < uVar1) {
      FUN_1800011f0();
      pcVar2 = (code *)swi(3);
      pauVar6 = (undefined1 (*) [32])(*pcVar2)();
      return pauVar6;
    }
    uVar4 = uVar1 | 0xf;
    uVar7 = 0x7fffffffffffffff;
    if ((uVar4 < 0x8000000000000000) && (uVar7 = uVar4, uVar4 < 0x16)) {
      uVar7 = 0x16;
    }
    puVar5 = FUN_1800049a0(uVar7 + 1);
    *(ulonglong *)(*param_2 + 0x10) = uVar1;
    *(ulonglong *)(*param_2 + 0x18) = uVar7;
    *puVar5 = (*param_2)[0];
    *(undefined1 **)*param_2 = puVar5;
    *(undefined8 *)(*param_2 + 0x10) = 0;
  }
  if (local_90 == 0) {
    *(undefined8 *)(*param_2 + 0x10) = 0;
    pauVar6 = param_2;
    if (0xf < *(ulonglong *)(*param_2 + 0x18)) {
      pauVar6 = *(undefined1 (**) [32])*param_2;
    }
    (*pauVar6)[0] = 0;
  }
  else if (*(ulonglong *)(*param_2 + 0x18) < local_90) {
    FUN_180003a70(param_2,local_90,uVar8,local_90);
  }
  else {
    *(ulonglong *)(*param_2 + 0x10) = local_90;
    pauVar6 = param_2;
    if (0xf < *(ulonglong *)(*param_2 + 0x18)) {
      pauVar6 = *(undefined1 (**) [32])*param_2;
    }
    FUN_180013a30(pauVar6,0,local_90);
    (*pauVar6)[local_90] = 0;
  }
  pauVar6 = param_2;
  if (0xf < *(ulonglong *)(*param_2 + 0x18)) {
    pauVar6 = *(undefined1 (**) [32])*param_2;
  }
  local_a8 = (ulonglong *)0x0;
  iVar3 = napi_get_value_string_utf8(*param_1,param_1[1],pauVar6);
  if (iVar3 == 0) {
    return param_2;
  }
  FUN_1800014f0(local_78,*param_1);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_78,&DAT_18001f750);
}

