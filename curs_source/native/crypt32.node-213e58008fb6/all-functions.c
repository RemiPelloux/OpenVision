/* REA / Ghidra decompiler-generated pseudocode. Not original source; not compilable. */

/* Address: 0x180001000; Evidence: ev_025f8f8e5d024ffc4591f1ece0c063d1c31acce263cdf2d9a5147a0e0b4a7dc0 */

HMODULE FUN_180001000(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_18000a800(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
    pHVar2 = GetModuleHandleA("libnode.dll");
    if (pHVar2 != (HMODULE)0x0) {
      return pHVar2;
    }
                    /* WARNING: Could not recover jumptable at 0x000180001038. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    pHVar2 = GetModuleHandleA((LPCSTR)0x0);
    return pHVar2;
  }
  return (HMODULE)0x0;
}


/* Address: 0x180001050; Evidence: ev_6f488e336d7977b2737700e5ce9a36fcaef4baf3ff11aaa1a8289f0938e4b39b */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_1800068f8((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}


/* Address: 0x180001090; Evidence: ev_6cfc00641f06f1d31edf5627a00c01eca572fc2eacbcb85a9e65d76593860a81 */

char * FUN_180001090(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x1800010b0; Evidence: ev_c9df0f457800c53a0f8a23dc30684612f0b000f17541962a7358f4ed51329866 */

undefined8 * FUN_1800010b0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180006978(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000c960(param_1);
  }
  return param_1;
}


/* Address: 0x180001120; Evidence: ev_544721d96a45e90d4434fc3e9f3998620ec30676c6f528e42ff9ca7526f44ebc */

undefined8 * FUN_180001120(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x180001150; Evidence: ev_a886cf079599a0e9551b0bb39d48dc102e664c90e9a686bcf70b048e1a4bfbb5 */

void FUN_180001150(void)

{
  longlong local_28 [5];
  
  FUN_180001120(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_28,&DAT_18001f838);
}


/* Address: 0x180001170; Evidence: ev_535e3ab39b0e221afeb8b8aaeaa215aa515d445463c2a3df8584cfa4452cc84d */

undefined8 * FUN_180001170(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_1800068f8((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x1800011b0; Evidence: ev_1cd92ca1df1f01a06c4951e584aa5eae22c5532f9977ad596bea093c4b2283ef */

undefined8 * FUN_1800011b0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_1800068f8((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x1800011f0; Evidence: ev_cfd26afcc5a33969a37fef9648f1bf181331ed503fb3264c68c2686d84304b99 */

void FUN_1800011f0(void)

{
  code *pcVar1;
  
  FUN_180005bc0(0x18001cda8);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001210; Evidence: ev_081f7bb75d05b0ae5eb92ee171a2a2b06f492bb416e5bab76f87e8ef47411c9e */

undefined8 FUN_180001210(undefined8 *param_1)

{
  return *param_1;
}


/* Address: 0x180001220; Evidence: ev_666b11e85beb58b026dd50289d27f0bb5f0335ef65665be7c74c9bb42d5022d6 */

void FUN_180001220(undefined8 *param_1)

{
  FUN_1800035d0(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180006978(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}


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


/* Address: 0x180001310; Evidence: ev_0e2df07973f5bb171ae1b0b5681b439cf93e984b183411d0fb7c14376b6fccb1 */

undefined8 * FUN_180001310(undefined8 *param_1,undefined8 *param_2)

{
  *param_2 = *param_1;
  return param_2;
}


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


/* Address: 0x1800014f0; Evidence: ev_cd3bb16a80528064464957e79d5d51fd0c4085b437054fe133c3c3d355a9a9d9 */

undefined8 * FUN_1800014f0(undefined8 *param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  longlong lVar3;
  char local_res18;
  undefined7 uStackX_19;
  char local_res20 [8];
  longlong local_a8;
  longlong *local_a0;
  char *local_98;
  undefined8 local_90;
  undefined8 local_88;
  undefined8 local_80;
  undefined8 local_78;
  longlong local_70;
  undefined4 local_68;
  undefined8 local_60;
  char *local_58;
  longlong lStack_50;
  undefined8 local_38;
  
  local_a8 = 0;
  iVar1 = napi_get_last_error_info(param_2,&local_a0);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Error::New","napi_get_last_error_info");
  }
  local_58 = (char *)*local_a0;
  lStack_50 = local_a0[1];
  local_38 = local_a0[2];
  iVar1 = napi_is_exception_pending(param_2,local_res20);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Error::New","napi_is_exception_pending");
  }
  if (local_res20[0] == '\0') {
    lVar3 = -1;
    pcVar2 = "Error in native callback";
    if (local_58 != (char *)0x0) {
      pcVar2 = local_58;
    }
    do {
      lVar3 = lVar3 + 1;
    } while (pcVar2[lVar3] != '\0');
    iVar1 = napi_create_string_utf8(param_2,pcVar2,lVar3,&local_res18);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::New","napi_create_string_utf8");
    }
    if ((((local_38._4_4_ == 2) || (local_38._4_4_ == 3)) || (local_38._4_4_ == 6)) ||
       (local_38._4_4_ == 7)) {
      iVar1 = napi_create_type_error(param_2,0,CONCAT71(uStackX_19,local_res18),&local_a8);
    }
    else {
      iVar1 = napi_create_error(param_2,0,CONCAT71(uStackX_19,local_res18),&local_a8);
    }
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::New","napi_create_error");
    }
  }
  else {
    iVar1 = napi_get_and_clear_last_exception(param_2,&local_a8);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::New","napi_get_and_clear_last_exception");
    }
  }
  lVar3 = local_a8;
  param_1[3] = param_2;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001d090;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  if ((local_a8 != 0) && (iVar1 = napi_create_reference(param_2,local_a8,1,param_1 + 4), iVar1 != 0)
     ) {
    iVar1 = napi_create_object(param_2,&local_a0);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::Error","napi_create_object");
    }
    local_98 = "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
    local_90 = 0;
    local_88 = 0;
    local_80 = 0;
    local_78 = 0;
    local_70 = lVar3;
    local_68 = 2;
    local_60 = 0;
    iVar1 = napi_define_properties(param_2,local_a0,1,&local_98);
    if (iVar1 == 10) {
      local_res18 = '\0';
      iVar1 = napi_is_exception_pending(param_2,&local_res18);
      if ((iVar1 != 0) || (local_res18 != '\0')) {
LAB_180001734:
                    /* WARNING: Subroutine does not return */
        FUN_1800017b0("Error::Error","napi_define_properties");
      }
    }
    else if (iVar1 != 0) goto LAB_180001734;
    iVar1 = napi_create_reference(param_2,local_a0,1,param_1 + 4);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::Error","napi_create_reference");
    }
  }
  return param_1;
}


/* Address: 0x1800017b0; Evidence: ev_6d9b46df9ec8c56fef24d41cdc50dfc10a1827c06e62d73c8599af2b9485f6de */

void FUN_1800017b0(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  
  napi_fatal_error(param_1,0xffffffffffffffff,param_2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x1800017d0; Evidence: ev_462d986c4fe35be9d4aa23240295c6018b49aa463b509905c75b1f8ac5fc6a31 */

undefined8 * FUN_1800017d0(undefined8 *param_1,uint param_2)

{
  FUN_1800035d0(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180006978(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000c960(param_1);
  }
  return param_1;
}


/* Address: 0x180001840; Evidence: ev_c9cc27377beff304413161259bfc79a59c2b0d84e306d62e05ac1b19f966935b */

undefined8 * FUN_180001840(undefined8 *param_1,undefined8 param_2,longlong param_3)

{
  int iVar1;
  char local_res8 [8];
  undefined8 local_res10;
  char *local_58;
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40;
  undefined8 local_38;
  longlong local_30;
  undefined4 local_28;
  undefined8 local_20;
  
  param_1[3] = param_2;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001d090;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  if ((param_3 != 0) && (iVar1 = napi_create_reference(param_2,param_3,1,param_1 + 4), iVar1 != 0))
  {
    iVar1 = napi_create_object(param_2,&local_res10);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::Error","napi_create_object");
    }
    local_58 = "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
    local_50 = 0;
    local_48 = 0;
    local_40 = 0;
    local_38 = 0;
    local_28 = 2;
    local_20 = 0;
    local_30 = param_3;
    iVar1 = napi_define_properties(param_2,local_res10,1,&local_58);
    if (iVar1 == 10) {
      local_res8[0] = '\0';
      iVar1 = napi_is_exception_pending(param_2,local_res8);
      if ((iVar1 != 0) || (local_res8[0] != '\0')) {
LAB_18000199a:
                    /* WARNING: Subroutine does not return */
        FUN_1800017b0("Error::Error","napi_define_properties");
      }
    }
    else if (iVar1 != 0) goto LAB_18000199a;
    iVar1 = napi_create_reference(param_2,local_res10,1,param_1 + 4);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::Error","napi_create_reference");
    }
  }
  return param_1;
}


/* Address: 0x1800019d0; Evidence: ev_778b5d75d2cb91fee73f279dd3973a90e0cc4a1570d939bd8ba777750f3a6d1d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800019d0(longlong param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  int iVar2;
  undefined1 auStack_c8 [32];
  char local_a8 [8];
  undefined8 local_a0;
  int local_98 [2];
  undefined8 local_90;
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_c8;
  if (*(longlong *)(param_1 + 0x20) == 0) {
    *param_2 = *(undefined8 *)(param_1 + 0x18);
    param_2[1] = 0;
    return param_2;
  }
  iVar2 = napi_get_reference_value
                    (*(undefined8 *)(param_1 + 0x18),*(longlong *)(param_1 + 0x20),&local_a0);
  if (iVar2 != 0) {
    FUN_1800014f0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  iVar2 = napi_typeof(*(undefined8 *)(param_1 + 0x18),local_a0,local_98);
  if (iVar2 != 0) {
    FUN_1800014f0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  if (local_98[0] != 5) {
    uVar1 = *(undefined8 *)(param_1 + 0x18);
    local_a8[0] = '\0';
    iVar2 = napi_create_string_utf8
                      (uVar1,"4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal",0x2d,&local_90);
    if (iVar2 != 0) {
      FUN_1800014f0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_78,&DAT_18001f750);
    }
    napi_has_property(*(undefined8 *)(param_1 + 0x18),local_a0,local_90,local_a8);
    if (local_a8[0] != '\0') {
      uVar1 = *(undefined8 *)(param_1 + 0x18);
      iVar2 = napi_create_string_utf8
                        (uVar1,"4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal",0x2d,&local_90);
      if (iVar2 != 0) {
        FUN_1800014f0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_180006d04(local_78,&DAT_18001f750);
      }
      iVar2 = napi_get_property(*(undefined8 *)(param_1 + 0x18),local_a0,local_90,local_88);
      if (iVar2 != 0) {
        FUN_1800014f0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
        FUN_180006d04(local_78,&DAT_18001f750);
      }
      *param_2 = *(undefined8 *)(param_1 + 0x18);
      goto LAB_180001aec;
    }
  }
  *param_2 = *(undefined8 *)(param_1 + 0x18);
  local_88[0] = local_a0;
LAB_180001aec:
  param_2[1] = local_88[0];
  return param_2;
}


/* Address: 0x180001bb0; Evidence: ev_76a858dfbef060029aaaeefea6e7dc1fa27d2e53c1233e355f5c72723eba0362 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001bb0(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_a8;
  local_80 = *(undefined8 *)(param_2 + 0x18);
  param_1[3] = local_80;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  local_88 = param_1;
  iVar1 = napi_open_handle_scope(local_80,local_78);
  if (iVar1 != 0) {
    FUN_1800014f0(local_68,local_80);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  puVar2 = (undefined8 *)0x0;
  if ((*(longlong *)(param_2 + 0x20) != 0) &&
     (iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_2 + 0x18),*(longlong *)(param_2 + 0x20),&local_88),
     puVar2 = local_88, iVar1 != 0)) {
    FUN_1800014f0(local_68,*(undefined8 *)(param_2 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(param_1[3],puVar2,1,param_1 + 4), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_80,local_78[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001d090;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  return param_1;
}


/* Address: 0x180001d20; Evidence: ev_00dd3281b9d11346d7840aacc1414275eb8f7f05a74d9399488b5810b8e48b09 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180001d20(longlong param_1)

{
  longlong *plVar1;
  LPVOID pvVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40 [2];
  longlong local_30 [2];
  undefined8 local_20;
  undefined8 uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180021000 ^ (ulonglong)auStackY_88;
  plVar1 = (longlong *)(param_1 + 0x30);
  if ((*(longlong *)(param_1 + 0x40) == 0) && (*(longlong *)(param_1 + 0x18) != 0)) {
    puVar3 = FUN_1800021e0((longlong *)(param_1 + 0x18),local_40);
    local_50 = *puVar3;
    local_48 = puVar3[1];
    FUN_180001320(&local_50,(undefined1 (*) [32])local_30);
    if (plVar1 != local_30) {
      if (0xf < *(ulonglong *)(param_1 + 0x48)) {
        pvVar2 = (LPVOID)*plVar1;
        pvVar4 = pvVar2;
        if ((0xfff < *(ulonglong *)(param_1 + 0x48) + 1) &&
           (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
           0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_18000c960(pvVar4);
      }
      *plVar1 = CONCAT71(local_30[0]._1_7_,(undefined1)local_30[0]);
      *(longlong *)(param_1 + 0x38) = local_30[1];
      *(undefined8 *)(param_1 + 0x40) = local_20;
      *(undefined8 *)(param_1 + 0x48) = uStack_18;
      local_20 = 0;
      uStack_18 = 0xf;
      local_30[0]._0_1_ = 0;
    }
    FUN_1800035d0(local_30);
  }
  return plVar1;
}


/* Address: 0x180001e30; Evidence: ev_367adcc81fa043e95a519c33c29525ce5fb5a1dd98eccd1eac983234d95f6143 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180001e30(longlong param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_b8 [32];
  char local_98 [8];
  undefined8 local_90;
  undefined8 local_88;
  undefined8 local_80 [3];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_b8;
  local_90 = *(undefined8 *)(param_1 + 0x18);
  iVar1 = napi_open_handle_scope(local_90,&local_88);
  if (iVar1 != 0) {
    FUN_1800014f0(local_68,local_90);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  if (*(longlong *)(param_1 + 0x20) == 0) {
LAB_180001ecc:
    iVar1 = napi_close_handle_scope(local_90,local_88);
    if (iVar1 == 0) {
      return;
    }
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  local_98[0] = '\0';
  iVar1 = napi_is_exception_pending(*(undefined8 *)(param_1 + 0x18),local_98);
  if ((iVar1 != 0) || (local_98[0] == '\0')) {
    puVar2 = FUN_1800019d0(param_1,local_80);
    iVar1 = napi_throw(*(undefined8 *)(param_1 + 0x18),puVar2[1]);
    if (iVar1 == 10) {
      iVar1 = napi_close_handle_scope(local_90,local_88);
      if (iVar1 == 0) {
        return;
      }
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (iVar1 == 0) goto LAB_180001ecc;
  }
  FUN_1800014f0(local_68,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_68,&DAT_18001f750);
}


/* Address: 0x180001f70; Evidence: ev_5c1271bd5b3122043c7b0e29fe3fa5904f20d737c41a17364eac44b7adfb9eda */

longlong * FUN_180001f70(longlong param_1)

{
  longlong *plVar1;
  
  plVar1 = FUN_180001d20(param_1);
  if (0xf < (ulonglong)plVar1[3]) {
    plVar1 = (longlong *)*plVar1;
  }
  return plVar1;
}


/* Address: 0x180001f90; Evidence: ev_ec63e41be9ae5a9d05848c779194217db77aee4b0903739f1da4f49c7c85bfa9 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001f90(undefined8 *param_1,undefined8 param_2)

{
  int iVar1;
  undefined1 auStack_a8 [32];
  undefined8 *local_88 [3];
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_a8;
  local_88[0] = param_1;
  iVar1 = napi_create_string_utf8
                    (param_2,"Class constructors cannot be invoked without \'new\'",0x32,&local_70);
  if (iVar1 != 0) {
    FUN_1800014f0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  iVar1 = napi_create_type_error(param_2,0,local_70,local_88);
  if (iVar1 == 0) {
    FUN_180001840(param_1,param_2,(longlong)local_88[0]);
    *param_1 = &PTR_FUN_18001d090;
    return param_1;
  }
  FUN_1800014f0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_68,&DAT_18001f750);
}


/* Address: 0x180002070; Evidence: ev_39a89fc3ea0cf5944e849ef15863bc80e58016d6ce0b5dd62849250f601ece3f */

void FUN_180002070(undefined8 *param_1)

{
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}


/* Address: 0x1800020a0; Evidence: ev_4770e700ce1aa426546479dec076b2b195eda8de113b46e68e113c69f1461a54 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800020a0(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_b8 [32];
  undefined8 *local_98;
  undefined8 local_90;
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_b8;
  local_90 = *param_2;
  *param_1 = local_90;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  local_98 = param_1;
  iVar1 = napi_open_handle_scope(local_90,local_88);
  if (iVar1 != 0) {
    FUN_1800014f0(local_78,local_90);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  puVar2 = (undefined8 *)0x0;
  if ((param_2[1] != 0) &&
     (iVar1 = napi_get_reference_value(*param_2,param_2[1],&local_98), puVar2 = local_98, iVar1 != 0
     )) {
    FUN_1800014f0(local_78,*param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(*param_1,puVar2,1,param_1 + 1), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_90,local_88[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  return param_1;
}


/* Address: 0x1800021e0; Evidence: ev_edd18efdbedef001dbb70c48629f56ee82ad4ed009313f06428d73527989a935 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800021e0(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined1 auStack_c8 [32];
  char local_a8 [8];
  undefined8 local_a0;
  undefined8 local_98;
  undefined8 local_90;
  undefined8 local_88;
  undefined8 uStack_80;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_c8;
  local_98 = *param_1;
  iVar1 = napi_open_escapable_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014f0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  uVar2 = *param_1;
  uVar3 = 0;
  if (param_1[1] != 0) {
    iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_a0);
    uVar2 = *param_1;
    uVar3 = local_a0;
    if (iVar1 != 0) {
      FUN_1800014f0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_78,&DAT_18001f750);
    }
  }
  iVar1 = napi_get_named_property(uVar2,uVar3,"message",&local_a0);
  if (iVar1 != 0) {
    FUN_1800014f0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  iVar1 = napi_is_exception_pending(local_98,local_a8);
  if ((iVar1 == 0) && (local_a8[0] != '\0')) {
    uVar2 = *param_1;
    if (param_1[1] == 0) {
      uStack_80 = 0;
    }
    else {
      iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_a0);
      uVar2 = *param_1;
      if (iVar1 != 0) {
        FUN_1800014f0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_180006d04(local_78,&DAT_18001f750);
      }
      uStack_80 = local_a0;
    }
    local_88._0_4_ = (undefined4)uVar2;
    local_88._4_4_ = (undefined4)((ulonglong)uVar2 >> 0x20);
    *(undefined4 *)param_2 = (undefined4)local_88;
    *(undefined4 *)((longlong)param_2 + 4) = local_88._4_4_;
    *(undefined4 *)(param_2 + 1) = (undefined4)uStack_80;
    *(undefined4 *)((longlong)param_2 + 0xc) = uStack_80._4_4_;
    local_88 = uVar2;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  else {
    iVar1 = napi_escape_handle(local_98,local_90,local_a0,&local_88);
    if (iVar1 != 0) {
      FUN_1800014f0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_78,&DAT_18001f750);
    }
    *param_2 = local_98;
    param_2[1] = local_88;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  if (iVar1 == 0) {
    return param_2;
  }
                    /* WARNING: Subroutine does not return */
  FUN_1800017b0("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


/* Address: 0x1800023d0; Evidence: ev_b20f96b702c6808e4c4fd9f20e527d026a7b439d4c4d37776a2b5bbd2db34db1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong * FUN_1800023d0(ulonglong *param_1,ulonglong param_2,ulonglong param_3)

{
  undefined1 auVar1 [16];
  int iVar2;
  __uint64 _Var3;
  void *pvVar4;
  undefined1 auStack_b8 [32];
  ulonglong *local_98;
  ulonglong *local_90;
  longlong local_88 [10];
  ulonglong local_38;
  
  local_38 = DAT_180021000 ^ (ulonglong)auStack_b8;
  param_1[1] = param_2;
  *param_1 = 6;
  param_1[2] = param_3;
  local_98 = param_1 + 3;
  *local_98 = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0;
  param_1[10] = 0;
  param_1[0xb] = 0;
  param_1[0xc] = 0;
  local_90 = param_1 + 0xd;
  param_1[4] = *param_1;
  *local_90 = 0;
  param_1[5] = (ulonglong)(param_1 + 6);
  iVar2 = napi_get_cb_info(param_2,param_3,param_1 + 4);
  if (iVar2 != 0) {
    FUN_1800014f0(local_88,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_88,&DAT_18001f750);
  }
  if (*param_1 < param_1[4]) {
    auVar1._8_8_ = 0;
    auVar1._0_8_ = param_1[4];
    _Var3 = SUB168(ZEXT816(8) * auVar1,0);
    if (SUB168(ZEXT816(8) * auVar1,8) != 0) {
      _Var3 = 0xffffffffffffffff;
    }
    pvVar4 = operator_new(_Var3);
    local_90 = (ulonglong *)0x0;
    param_1[0xc] = (ulonglong)pvVar4;
    param_1[5] = (ulonglong)pvVar4;
    local_98 = (ulonglong *)0x0;
    iVar2 = napi_get_cb_info(param_2,param_3,param_1 + 4,pvVar4);
    if (iVar2 != 0) {
      FUN_1800014f0(local_88,param_1[1]);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_88,&DAT_18001f750);
    }
  }
  return param_1;
}


/* Address: 0x180002520; Evidence: ev_5f5d114eb6fce80e95b557b20cb3d66e0796c0970b854421124d3a4079297877 */

undefined8 * FUN_180002520(longlong param_1,undefined8 *param_2)

{
  *param_2 = *(undefined8 *)(param_1 + 8);
  return param_2;
}


/* Address: 0x180002530; Evidence: ev_a1dd2d17a265ea04d5a4bc3eaa170dd64e90e6920726f96dd51d6fcb94510167 */

void FUN_180002530(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x180002560; Evidence: ev_b1c01e8aafa720ffed22f22f92abb0d4cc023db96aa45c9b65284986c83acff9 */

void FUN_180002560(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_escapable_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_1800017b0("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


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


/* Address: 0x1800027e0; Evidence: ev_e159ee566bcbb0a2cb034af30683320cb4659ae2623781de506fd7be00acee81 */

undefined8 * FUN_1800027e0(undefined8 *param_1,uint param_2)

{
  FUN_180002f10(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000c960(param_1);
  }
  return param_1;
}


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


/* Address: 0x180002a10; Evidence: ev_76b1da0dcbc7a43c53222e730d236a2bafa7e6df64ca91e914be812079c4f784 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002a10(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  undefined1 auStackY_1a8 [32];
  undefined8 *local_178;
  undefined8 local_170;
  longlong local_168;
  undefined8 local_160;
  undefined8 *local_158;
  undefined1 local_150;
  undefined *local_148;
  undefined8 uStack_140;
  code *local_138;
  undefined8 uStack_130;
  undefined8 local_118;
  undefined8 uStack_110;
  undefined *local_f8;
  undefined8 uStack_f0;
  code *local_e8;
  undefined8 uStack_e0;
  undefined8 local_d8;
  undefined8 uStack_d0;
  undefined8 local_c8;
  undefined8 uStack_c0;
  undefined *local_b8;
  undefined8 uStack_b0;
  code *local_a8;
  undefined8 uStack_a0;
  undefined8 local_98;
  undefined8 uStack_90;
  undefined8 local_88;
  undefined8 uStack_80;
  undefined *local_78;
  undefined8 uStack_70;
  code *local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 uStack_50;
  undefined8 local_48;
  undefined8 uStack_40;
  ulonglong local_38;
  
  local_38 = DAT_180021000 ^ (ulonglong)auStackY_1a8;
  local_f8 = &DAT_18001cfa4;
  uStack_f0 = 0;
  local_e8 = FUN_180003030;
  uStack_e0 = 0;
  local_d8 = 0;
  uStack_d0 = 0;
  local_c8 = 0;
  uStack_c0 = 0;
  local_b8 = &DAT_18001cfac;
  uStack_b0 = 0;
  local_a8 = FUN_180003060;
  uStack_a0 = 0;
  local_98 = 0;
  uStack_90 = 0;
  local_88 = 0;
  uStack_80 = 0;
  uStack_140 = 0;
  uStack_130 = 0;
  local_118 = 0;
  local_148 = &DAT_18001cfb4;
  local_138 = FUN_180003090;
  uStack_110 = 0;
  local_78 = &DAT_18001cfb4;
  uStack_70 = 0;
  local_68 = FUN_180003090;
  uStack_60 = 0;
  local_58 = 0;
  uStack_50 = 0;
  local_48 = 0;
  uStack_40 = 0;
  FUN_1800030c0(&local_170,param_2,param_3,3,(longlong)&local_f8);
  puVar3 = operator_new(0x18);
  *puVar3 = 0;
  puVar3[1] = 0;
  *(undefined1 *)(puVar3 + 2) = 0;
  puVar4 = (undefined8 *)0x0;
  local_178 = puVar3;
  if ((local_168 != 0) &&
     (iVar2 = napi_create_reference(local_170,local_168,1,&local_178), puVar4 = local_178,
     iVar2 != 0)) {
    FUN_1800014f0(&local_148,local_170);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04((longlong *)&local_148,&DAT_18001f750);
  }
  local_160 = local_170;
  local_150 = 0;
  local_158 = puVar4;
  if ((puVar3[1] != 0) && (iVar2 = napi_delete_reference(*puVar3), iVar2 != 0)) {
    FUN_1800014f0(&local_148,*puVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04((longlong *)&local_148,&DAT_18001f750);
  }
  *puVar3 = local_170;
  puVar3[1] = puVar4;
  *(undefined1 *)(puVar3 + 2) = 0;
  uVar1 = *param_3;
  iVar2 = napi_set_named_property(uVar1,param_3[1],"Crypt32",local_168);
  if (iVar2 != 0) {
    FUN_1800014f0(&local_148,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04((longlong *)&local_148,&DAT_18001f750);
  }
  iVar2 = napi_set_instance_data(param_2,puVar3,FUN_180002d90,0);
  if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("BasicEnv::SetInstanceData","invalid arguments");
  }
  uVar1 = param_3[1];
  *param_1 = *param_3;
  param_1[1] = uVar1;
  return param_1;
}


/* Address: 0x180002cb0; Evidence: ev_2bc145f879d80db3912c3e5fdbc47cc05c29b8e850bb0c69ad1deb3d46d94db1 */

undefined8 * FUN_180002cb0(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  undefined8 local_28;
  undefined8 uStack_20;
  undefined8 local_18 [2];
  
  local_28 = *param_3;
  uStack_20 = param_3[1];
  FUN_180002a10(local_18,param_2,&local_28);
  uVar1 = param_3[1];
  *param_1 = *param_3;
  param_1[1] = uVar1;
  return param_1;
}


/* Address: 0x180002cf0; Evidence: ev_cccfa4b3ebd2fbd378e1a7a4e5cb6f3fde881d794547770f6568fcd658c873c2 */

undefined8 node_api_module_get_api_version_v1(void)

{
                    /* 0x2cf0  2  node_api_module_get_api_version_v1 */
  return 8;
}


/* Address: 0x180002d00; Evidence: ev_05e71363cf952c2a944a44854f638777335b84f616e85f390f52b35ba2e0c082 */

void napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  code *local_res8;
  undefined8 local_res10;
  undefined8 local_res18 [2];
  code **local_28;
  undefined8 *local_20;
  undefined8 *local_18;
  
                    /* 0x2d00  1  napi_register_module_v1 */
  local_res8 = FUN_180002cb0;
  local_28 = &local_res8;
  local_20 = &local_res10;
  local_18 = local_res18;
  local_res10 = param_1;
  local_res18[0] = param_2;
  FUN_180002d40(param_1,&local_28);
  return;
}


/* Address: 0x180002d40; Evidence: ev_8fa24dfa960f9e022935100fcd4c0be2f32e547a0302953a6d49b3d9ebb07db9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180002d40(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  undefined8 local_28;
  undefined8 local_20;
  undefined1 local_18 [24];
  
  local_28 = *(undefined8 *)param_2[1];
  local_20 = *(undefined8 *)param_2[2];
  lVar1 = (**(code **)*param_2)(local_18,local_28,&local_28);
  return *(undefined8 *)(lVar1 + 8);
}


/* Address: 0x180002d90; Evidence: ev_3661ad1ffa6217509902bb5d59d2901931c39a39b2d7e836a9ae69bc3748e519 */

void FUN_180002d90(undefined8 param_1,undefined8 *param_2)

{
  if (param_2 != (undefined8 *)0x0) {
    if (param_2[1] != 0) {
      if (*(char *)(param_2 + 2) == '\0') {
        napi_delete_reference(*param_2);
      }
      param_2[1] = 0;
    }
    thunk_FUN_18000c960(param_2);
  }
  return;
}


/* Address: 0x180002dd0; Evidence: ev_2cb19c1db59a5d5e4f962aa8849f94ea486637a4cdf262d106b4da6c363f0a2e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002dd0(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  longlong lVar2;
  undefined1 auStack_b8 [32];
  undefined8 local_98;
  undefined8 local_90;
  longlong local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_b8;
  local_98 = *param_2;
  *param_1 = local_98;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  iVar1 = napi_open_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014f0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  lVar2 = 0;
  if ((param_2[1] != 0) &&
     (iVar1 = napi_get_reference_value(*param_2,param_2[1],local_88), lVar2 = local_88[0],
     iVar1 != 0)) {
    FUN_1800014f0(local_78,*param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  if ((lVar2 != 0) && (iVar1 = napi_create_reference(*param_1,lVar2,1,param_1 + 1), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_98,local_90);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  return param_1;
}


/* Address: 0x180002f10; Evidence: ev_66a65e7213e5d17ae349023436f16952693a79e08cd84c06024925384aebf949 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180002f10(undefined8 *param_1)

{
  int iVar1;
  undefined1 auStack_98 [32];
  longlong local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_98;
  *param_1 = &PTR_FUN_18001d060;
  if ((param_1[2] != 0) && (*(char *)((longlong)param_1 + 0x21) == '\0')) {
    iVar1 = napi_get_reference_value(param_1[1],param_1[2],local_78);
    if (iVar1 != 0) {
      FUN_1800014f0(local_68,param_1[1]);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_68,&DAT_18001f750);
    }
    if ((local_78[0] != 0) && (*(char *)(param_1 + 4) != '\0')) {
      napi_remove_wrap(param_1[1],local_78[0],0);
    }
  }
  if (param_1[2] != 0) {
    if (*(char *)(param_1 + 3) == '\0') {
      napi_delete_reference(param_1[1]);
    }
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x180002fd0; Evidence: ev_45676d68defb5fccf22a6f51c1aa90061fffbceb74bd8774ebac652da65db9a1 */

void _guard_check_icall(void)

{
  return;
}


/* Address: 0x180002fe0; Evidence: ev_72de9bbf88e8a378afb5cfadc1b10488d3be58d5eb8aa45f3ee025bf63cc9e62 */

void thunk_FUN_1800035d0(longlong *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < (ulonglong)param_1[3]) {
    pvVar1 = (LPVOID)*param_1;
    pvVar2 = pvVar1;
    if ((0xfff < param_1[3] + 1U) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000c960(pvVar2);
  }
  param_1[2] = 0;
  param_1[3] = 0xf;
  *(undefined1 *)param_1 = 0;
  return;
}


/* Address: 0x180002ff0; Evidence: ev_2cc8cb1f05b92ac3e235aeebee4227bdd4faaf5fdde21c62b106e15f160ce289 */

undefined8 * FUN_180002ff0(undefined8 *param_1,uint param_2)

{
  FUN_180002f10(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000c960(param_1);
  }
  return param_1;
}


/* Address: 0x180003030; Evidence: ev_92ccf3e56d4395b5832a1bd21141ee57a46ac806feed3e90b36a5d77fb05f1ea */

void FUN_180003030(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180003650(param_1,&local_18);
  return;
}


/* Address: 0x180003060; Evidence: ev_fd404083b8eab67d66d4f2851d5e550d6159f25f201b073564da661df4a47f94 */

void FUN_180003060(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_1800037b0(param_1,&local_18);
  return;
}


/* Address: 0x180003090; Evidence: ev_adc41e393cbdccc1d7fac639079bf9e8ff15d4f563e70ab1ba66b1437d2d6a17 */

void FUN_180003090(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_1800038e0(param_1,&local_18);
  return;
}


/* Address: 0x1800030c0; Evidence: ev_7d066857a5ed26db87ccd58e187f346e98320cb2789d2c4ae3ce847593fbc13a */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_1800030c0(undefined8 *param_1,undefined8 param_2,undefined8 param_3,ulonglong param_4,
             longlong param_5)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  undefined4 uVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  undefined4 uVar10;
  undefined4 uVar11;
  undefined4 uVar12;
  undefined4 uVar13;
  undefined4 uVar14;
  undefined4 uVar15;
  undefined4 uVar16;
  undefined4 uVar17;
  int iVar18;
  undefined1 (*pauVar19) [32];
  longlong lVar20;
  undefined8 uVar21;
  ulonglong uVar22;
  undefined8 *puVar23;
  undefined1 *puVar24;
  undefined1 (*pauVar25) [32];
  undefined8 local_res10;
  undefined1 auStackY_108 [32];
  undefined8 local_c0;
  undefined1 (*pauStack_a8) [32];
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180021000 ^ (ulonglong)auStackY_108;
  pauStack_a8 = (undefined1 (*) [32])0x0;
  local_res10 = param_2;
  if (param_4 == 0) {
    pauVar19 = (undefined1 (*) [32])0x0;
  }
  else {
    if (0x3ffffffffffffff < param_4) {
      FUN_180004a20();
      goto LAB_18000354f;
    }
    pauVar19 = FUN_1800049a0(param_4 * 0x40);
    pauStack_a8 = pauVar19 + param_4 * 2;
    FUN_180013a30(pauVar19,0,param_4 << 6);
  }
  uVar22 = 0;
  if (param_4 != 0) {
    puVar23 = (undefined8 *)(pauVar19[1] + 8);
    lVar20 = param_5 - (longlong)pauVar19;
    do {
      puVar1 = (undefined4 *)(lVar20 + -0x28 + (longlong)puVar23);
      uVar3 = puVar1[1];
      uVar4 = puVar1[2];
      uVar5 = puVar1[3];
      puVar2 = (undefined4 *)(lVar20 + -0x18 + (longlong)puVar23);
      uVar6 = *puVar2;
      uVar7 = puVar2[1];
      uVar8 = puVar2[2];
      uVar9 = puVar2[3];
      puVar2 = (undefined4 *)(lVar20 + -8 + (longlong)puVar23);
      uVar10 = *puVar2;
      uVar11 = puVar2[1];
      uVar12 = puVar2[2];
      uVar13 = puVar2[3];
      puVar2 = (undefined4 *)(lVar20 + 8 + (longlong)puVar23);
      uVar14 = *puVar2;
      uVar15 = puVar2[1];
      uVar16 = puVar2[2];
      uVar17 = puVar2[3];
      *(undefined4 *)(puVar23 + -5) = *puVar1;
      *(undefined4 *)((longlong)puVar23 + -0x24) = uVar3;
      *(undefined4 *)(puVar23 + -4) = uVar4;
      *(undefined4 *)((longlong)puVar23 + -0x1c) = uVar5;
      *(undefined4 *)(puVar23 + -3) = uVar6;
      *(undefined4 *)((longlong)puVar23 + -0x14) = uVar7;
      *(undefined4 *)(puVar23 + -2) = uVar8;
      *(undefined4 *)((longlong)puVar23 + -0xc) = uVar9;
      *(undefined4 *)(puVar23 + -1) = uVar10;
      *(undefined4 *)((longlong)puVar23 + -4) = uVar11;
      *(undefined4 *)puVar23 = uVar12;
      *(undefined4 *)((longlong)puVar23 + 4) = uVar13;
      *(undefined4 *)(puVar23 + 1) = uVar14;
      *(undefined4 *)((longlong)puVar23 + 0xc) = uVar15;
      *(undefined4 *)(puVar23 + 2) = uVar16;
      *(undefined4 *)((longlong)puVar23 + 0x14) = uVar17;
      if ((code *)puVar23[-3] == FUN_180003c80) {
        uVar21 = puVar23[2];
        iVar18 = napi_create_function(param_2,"Crypt32",0xffffffffffffffff);
        if ((iVar18 != 0) ||
           (iVar18 = napi_add_finalizer(param_2,*puVar23,uVar21,FUN_180003d80), iVar18 != 0)) {
          uVar21 = FUN_180001210(&local_res10);
          FUN_1800014f0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
          FUN_180006d04(local_98,&DAT_18001f750);
        }
LAB_180003271:
        puVar23[2] = 0;
        puVar23[-3] = 0;
      }
      else if ((code *)puVar23[-3] == FUN_180003c50) {
        uVar21 = puVar23[2];
        iVar18 = napi_create_function(param_2,"Crypt32",0xffffffffffffffff);
        if ((iVar18 != 0) ||
           (iVar18 = napi_add_finalizer(param_2,*puVar23,uVar21,FUN_180003d80), iVar18 != 0)) {
          uVar21 = FUN_180001210(&local_res10);
          FUN_1800014f0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
          FUN_180006d04(local_98,&DAT_18001f750);
        }
        goto LAB_180003271;
      }
      uVar22 = uVar22 + 1;
      puVar23 = puVar23 + 8;
    } while (uVar22 < param_4);
  }
  iVar18 = napi_define_class();
  if (iVar18 == 0) {
    uVar22 = 0;
    if (param_4 != 0) {
      puVar24 = pauVar19[1] + 0x18;
      do {
        if ((*(code **)(puVar24 + -0x20) == FUN_180003cb0) ||
           (*(code **)*(undefined1 (*) [32])(puVar24 + -0x18) == FUN_180003ce0)) {
          iVar18 = napi_add_finalizer();
          if (iVar18 != 0) {
            uVar21 = FUN_180001210(&local_res10);
            FUN_1800014f0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
            FUN_180006d04(local_98,&DAT_18001f750);
          }
        }
        else if ((*(uint *)(puVar24 + -8) & 0x400) == 0) {
          if (*(code **)(puVar24 + -0x28) == FUN_180004130) {
            iVar18 = napi_add_finalizer();
            if (iVar18 != 0) {
              FUN_1800014f0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
              FUN_180006d04(local_98,&DAT_18001f750);
            }
          }
          else if (*(code **)(puVar24 + -0x28) == FUN_180004160) {
            iVar18 = napi_add_finalizer();
            if (iVar18 != 0) {
              FUN_1800014f0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
              FUN_180006d04(local_98,&DAT_18001f750);
            }
          }
          else if (((*(code **)(puVar24 + -0x20) == FUN_180004190) ||
                   (*(code **)*(undefined1 (*) [32])(puVar24 + -0x18) == FUN_1800041c0)) &&
                  (iVar18 = napi_add_finalizer(), iVar18 != 0)) {
            FUN_1800014f0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
            FUN_180006d04(local_98,&DAT_18001f750);
          }
        }
        uVar22 = uVar22 + 1;
        puVar24 = puVar24 + 0x40;
      } while (uVar22 < param_4);
    }
    *param_1 = param_2;
    param_1[1] = local_c0;
    if (pauVar19 != (undefined1 (*) [32])0x0) {
      pauVar25 = pauVar19;
      if ((0xfff < ((longlong)pauStack_a8 - (longlong)pauVar19 & 0xffffffffffffffc0U)) &&
         (pauVar25 = *(undefined1 (**) [32])(pauVar19[-1] + 0x18),
         0x1f < (ulonglong)((longlong)pauVar19 + (-8 - (longlong)pauVar25)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_18000c960(pauVar25);
    }
    return param_1;
  }
LAB_18000354f:
  uVar21 = FUN_180001210(&local_res10);
  FUN_1800014f0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_98,&DAT_18001f750);
}


/* Address: 0x1800035b0; Evidence: ev_767e2b0fd3bd5e6b431490d00fd91fd9f752d4db3acdf074aca9c295c9d8bd0d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800035b0(undefined8 param_1,undefined8 *param_2)

{
  *(undefined1 *)((longlong)param_2 + 0x21) = 1;
  (**(code **)*param_2)(param_2,1);
  return;
}


/* Address: 0x1800035d0; Evidence: ev_7512f274ad04f2c3c30c212978f4c45d381b6564fe540f8ea5304ba3f6890389 */

void FUN_1800035d0(longlong *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < (ulonglong)param_1[3]) {
    pvVar1 = (LPVOID)*param_1;
    pvVar2 = pvVar1;
    if ((0xfff < param_1[3] + 1U) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000c960(pvVar2);
  }
  param_1[2] = 0;
  param_1[3] = 0xf;
  *(undefined1 *)param_1 = 0;
  return;
}


/* Address: 0x180003650; Evidence: ev_361ef9b68059a25ee816e09384ce338a8fa4671e805440acf735cfe2ce9e170e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_180003650(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  undefined1 auStack_148 [32];
  longlong local_128 [2];
  longlong local_118;
  longlong lStack_110;
  longlong local_108;
  longlong local_100;
  ulonglong local_e8;
  longlong local_e0;
  longlong local_d0;
  LPVOID local_88;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_148;
  FUN_1800023d0(&local_e8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  local_118 = local_e0;
  lStack_110 = local_d0;
  if (local_d0 == 0) {
    local_128[0] = local_e0;
    FUN_180001270(local_128,&local_108);
    local_118 = local_108;
    lStack_110 = local_100;
  }
  iVar2 = napi_unwrap(local_118,lStack_110,local_128);
  lVar1 = local_128[0];
  if (iVar2 != 0) {
    puVar3 = FUN_180001310(&local_118,&local_108);
    uVar4 = FUN_180001210(puVar3);
    FUN_1800014f0(local_78,uVar4);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  if (local_128[0] == 0) {
    local_118 = 0;
    lStack_110 = 0;
  }
  else {
    if (*(HCERTSTORE *)(local_128[0] + 0x28) != (HCERTSTORE)0x0) {
      CertCloseStore(*(HCERTSTORE *)(local_128[0] + 0x28),0);
    }
    *(undefined8 *)(lVar1 + 0x28) = 0;
    local_128[0] = local_e0;
    FUN_180001270(local_128,&local_118);
  }
  lVar1 = lStack_110;
  if (local_88 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_88);
  }
  return lVar1;
}


/* Address: 0x1800037b0; Evidence: ev_138a958196653f6f5cfff89a029fd8d5e644d4a647011a5ed9f25acf8ed5d3ba */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_1800037b0(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  int iVar2;
  longlong *plVar3;
  undefined8 *puVar4;
  undefined8 uVar5;
  undefined1 auStack_148 [32];
  longlong local_128 [2];
  longlong local_118;
  longlong lStack_110;
  longlong local_108;
  longlong local_100;
  ulonglong local_e8;
  longlong local_e0;
  longlong local_d0;
  LPVOID local_88;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_148;
  FUN_1800023d0(&local_e8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  local_118 = local_e0;
  lStack_110 = local_d0;
  if (local_d0 == 0) {
    local_128[0] = local_e0;
    FUN_180001270(local_128,&local_108);
    local_118 = local_108;
    lStack_110 = local_100;
  }
  iVar2 = napi_unwrap(local_118,lStack_110,local_128);
  if (iVar2 != 0) {
    puVar4 = FUN_180001310(&local_118,&local_108);
    uVar5 = FUN_180001210(puVar4);
    FUN_1800014f0(local_78,uVar5);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  if (local_128[0] == 0) {
    local_118 = 0;
    lStack_110 = 0;
    plVar3 = &local_118;
  }
  else {
    plVar3 = FUN_180002820(local_128[0],&local_118,(longlong)&local_e8);
  }
  lVar1 = plVar3[1];
  if (local_88 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_88);
  }
  return lVar1;
}


/* Address: 0x1800038e0; Evidence: ev_e14923f61072530d54ece3f04b91a642bac0e208b730593f4fd7a13a69d35c13 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_1800038e0(undefined8 param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  longlong lVar4;
  undefined1 auStack_198 [32];
  longlong local_178 [2];
  longlong local_168;
  longlong lStack_160;
  longlong local_158;
  longlong local_150;
  ulonglong local_138;
  longlong local_130;
  longlong local_120;
  LPVOID local_d8;
  longlong local_c8 [10];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_198;
  FUN_1800023d0(&local_138,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  lVar4 = local_130;
  if (local_120 == 0) {
    local_178[0] = local_130;
    FUN_180001270(local_178,&local_158);
    lVar4 = local_158;
    local_120 = local_150;
  }
  iVar1 = napi_unwrap(lVar4,local_120,local_178);
  if (iVar1 != 0) {
    puVar2 = FUN_180001310(&local_168,&local_158);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014f0(local_c8,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_c8,&DAT_18001f750);
  }
  if (local_178[0] == 0) {
    local_168 = 0;
    lStack_160 = 0;
  }
  else {
    iVar1 = napi_get_boolean(local_130,*(longlong *)(local_178[0] + 0x28) == 0,local_178);
    if (iVar1 != 0) {
      FUN_1800014f0(local_78,local_130);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_78,&DAT_18001f750);
    }
    local_168 = local_130;
    lStack_160 = local_178[0];
  }
  lVar4 = lStack_160;
  if (local_d8 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_d8);
  }
  return lVar4;
}


/* Address: 0x180003a60; Evidence: ev_2d42d409811d910f2be0dd75afa57d1847bc95891496f3f964884e6178a2c9c6 */

void FUN_180003a60(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000c960(param_2);
  return;
}


/* Address: 0x180003a70; Evidence: ev_9f4228f26e62ba0e9447dd73101b21deedffe7e70c799ef07728a93f670931e7 */

undefined1 (*) [32]
FUN_180003a70(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,ulonglong param_4)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  code *pcVar5;
  undefined1 (*pauVar6) [32];
  undefined1 (*pauVar7) [32];
  ulonglong uVar8;
  ulonglong uVar9;
  
  uVar2 = *(ulonglong *)(*param_1 + 0x10);
  if (0x7fffffffffffffff - uVar2 < param_2) {
    FUN_1800011f0();
    pcVar5 = (code *)swi(3);
    pauVar7 = (undefined1 (*) [32])(*pcVar5)();
    return pauVar7;
  }
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  uVar8 = uVar2 + param_2 | 0xf;
  uVar9 = 0x7fffffffffffffff;
  if (((uVar8 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) &&
     (uVar1 = uVar3 + (uVar3 >> 1), uVar9 = uVar8, uVar8 < uVar1)) {
    uVar9 = uVar1;
  }
  pauVar6 = FUN_1800049a0(uVar9 + 1);
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + param_2;
  *(ulonglong *)(*param_1 + 0x18) = uVar9;
  pauVar7 = (undefined1 (*) [32])(*pauVar6 + uVar2);
  if (uVar3 < 0x10) {
    FUN_180013df0(pauVar6,param_1,uVar2);
    FUN_180013a30(pauVar7,0,param_4);
    (*pauVar7)[param_4] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_180013df0(pauVar6,pauVar4,uVar2);
    FUN_180013a30(pauVar7,0,param_4);
    (*pauVar7)[param_4] = 0;
    pauVar7 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar7 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000c960(pauVar7);
  }
  *(undefined1 (**) [32])*param_1 = pauVar6;
  return param_1;
}


/* Address: 0x180003bc0; Evidence: ev_56d6ef65999ce77e811049edb60e376ba884783f51fd8fe77a49f3e01ac7089c */

longlong FUN_180003bc0(undefined8 *param_1,undefined8 param_2)

{
  int iVar1;
  longlong lVar2;
  undefined8 *local_res8;
  undefined8 local_res10;
  longlong local_res18 [2];
  undefined8 **local_18;
  undefined8 *local_10;
  
  local_res8 = param_1;
  local_res10 = param_2;
  iVar1 = napi_get_new_target(param_1,param_2,local_res18);
  if (iVar1 != 0) {
    return 0;
  }
  local_18 = &local_res8;
  local_10 = &local_res10;
  if (local_res18[0] == 0) {
    lVar2 = FUN_180003d90(param_1,&local_18);
    return lVar2;
  }
  lVar2 = FUN_180003db0(param_1,&local_18);
  return lVar2;
}


/* Address: 0x180003c20; Evidence: ev_5661678f3c17881871fe4fb722d3f024899c7e5e62689251024c93c1c5f5c429 */

void FUN_180003c20(undefined8 *param_1)

{
  code *pcVar1;
  ulonglong *puVar2;
  ulonglong *puVar3;
  ulonglong local_78 [15];
  
  puVar3 = local_78;
  puVar2 = FUN_1800023d0(puVar3,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  FUN_1800040e0(puVar3,(longlong)puVar2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180003c50; Evidence: ev_6d46ee22aec00a1b2cdf750b040f31f89f181a2960fee5c2d0711d4a4ed69595 */

void FUN_180003c50(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180003e60(param_1,&local_18);
  return;
}


/* Address: 0x180003c80; Evidence: ev_7e71b99877195e3e43d5055ce985e59b7ff1b74bcb6ded72a3cf6c7871785c28 */

void FUN_180003c80(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180003ed0(param_1,&local_18);
  return;
}


/* Address: 0x180003cb0; Evidence: ev_6aac853c9b6e816775ae014d309959ad986f03bacc7ee744b378aca9072db010 */

void FUN_180003cb0(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180003f40(param_1,&local_18);
  return;
}


/* Address: 0x180003ce0; Evidence: ev_6346e0eedc713332450b2560cf74d51bb03f59c5344e077ceb80ad08767daa2b */

void FUN_180003ce0(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180003fb0(param_1,&local_18);
  return;
}


/* Address: 0x180003d10; Evidence: ev_2437f6e2dc1af209d961486dd647fa09fb5775a660285bc5ac71348d799de9f4 */

void FUN_180003d10(longlong *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  pvVar1 = (LPVOID)*param_1;
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[2] - (longlong)pvVar1 & 0xffffffffffffffc0U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000c960(pvVar2);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x180003d80; Evidence: ev_4872ea82cc4629179eb115d736ae6f3e5084d164ea52ca5728a510cd1a046c89 */

void FUN_180003d80(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000c960(param_2);
  return;
}


/* Address: 0x180003d90; Evidence: ev_83563d00a7ea63a451f4b049fb0b7923fe463e01c85131116ad2fc3c64cff068 */

undefined8 FUN_180003d90(undefined8 param_1,undefined8 *param_2)

{
  FUN_180003c20(param_2);
  return 0;
}


/* Address: 0x180003db0; Evidence: ev_8a1975dbb7132e2189fd0beb11d4c4fc788191d6e31e7777b6a47c2d0403c2cf */

longlong FUN_180003db0(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 *puVar1;
  undefined8 *local_res8 [4];
  undefined8 *local_98;
  longlong lStack_90;
  ulonglong local_78;
  undefined8 *local_70;
  longlong local_60;
  LPVOID local_18;
  
  local_res8[0] = param_1;
  FUN_1800023d0(&local_78,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  local_res8[0] = operator_new(0x38);
  puVar1 = FUN_180002590(local_res8[0],(longlong)&local_78);
  *(undefined1 *)(puVar1 + 4) = 0;
  if (local_60 == 0) {
    local_res8[0] = local_70;
    FUN_180001270(local_res8,&local_98);
  }
  else {
    local_98 = local_70;
    lStack_90 = local_60;
  }
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_18);
  }
  return lStack_90;
}


/* Address: 0x180003e60; Evidence: ev_2e1c8375610e7a1c94fbe641be9fed3b08acf2338fc990cec38d2e8f6535162e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180003e60(undefined8 param_1,undefined8 *param_2)

{
  code *pcVar1;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_1800023d0(local_78,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_18);
  }
  return 0;
}


/* Address: 0x180003ed0; Evidence: ev_bbe51bcd1d1a9a2ffcb64fe8b78be1019b30d530e501c2cb164c8292ddd924fd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180003ed0(undefined8 param_1,undefined8 *param_2)

{
  code *pcVar1;
  undefined1 local_90 [8];
  undefined8 local_88;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_1800023d0(local_78,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_90,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_18);
  }
  return local_88;
}


/* Address: 0x180003f40; Evidence: ev_b62fe4d37708c8ba6422f35c80e5366443946354fee8bbd94927e9f764a7b093 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180003f40(undefined8 param_1,undefined8 *param_2)

{
  code *pcVar1;
  undefined1 local_90 [8];
  undefined8 local_88;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_1800023d0(local_78,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[2];
  (*pcVar1)(local_90,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_18);
  }
  return local_88;
}


/* Address: 0x180003fb0; Evidence: ev_af6de3f7a86f5bae654a029bbe7ff85ab775779467a27de9b463fd16a7fcf1ed */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180003fb0(undefined8 param_1,undefined8 *param_2)

{
  code *pcVar1;
  int iVar2;
  undefined8 uVar3;
  undefined1 auStack_128 [32];
  undefined8 local_108;
  undefined8 local_100;
  undefined8 local_f8;
  undefined8 local_f0;
  ulonglong local_d8;
  undefined8 local_d0;
  longlong local_b8;
  undefined8 *local_b0;
  LPVOID local_78;
  longlong local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_128;
  FUN_1800023d0(&local_d8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  pcVar1 = *(code **)(local_70 + 8);
  if (local_b8 == 0) {
    local_108 = local_d0;
    local_70 = *(undefined8 *)(local_70 + 0x10);
    iVar2 = napi_get_undefined(local_d0,&local_100);
    if (iVar2 != 0) {
      uVar3 = FUN_180001210(&local_108);
      FUN_1800014f0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_68,&DAT_18001f750);
    }
  }
  else {
    local_100 = *local_b0;
    local_70 = *(undefined8 *)(local_70 + 0x10);
  }
  local_f8 = local_d0;
  local_f0 = local_100;
  (*pcVar1)(&local_d8,&local_f8);
  if (local_78 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_78);
  }
  return 0;
}


/* Address: 0x1800040c0; Evidence: ev_64ada4eaeb05945119a13726fb94d16a18adb1579218efd646ecc2004a417a29 */

void FUN_1800040c0(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000c960(param_2);
  return;
}


/* Address: 0x1800040d0; Evidence: ev_ef65ec0e1a10f3dba0316eeacbe3d84fa7c206888eb3c41a0075b33a8f077069 */

void FUN_1800040d0(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000c960(param_2);
  return;
}


/* Address: 0x1800040e0; Evidence: ev_3d58d9704a9481153e1e67c14b021a6c29d0ab1a1ff2c562c1528161563c2e4a */

void FUN_1800040e0(undefined8 param_1,longlong param_2)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  undefined1 auStack_98 [32];
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_98;
  puVar1 = FUN_180002520(param_2,local_78);
  uVar2 = FUN_180001210(puVar1);
  FUN_180001f90(local_68,uVar2);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_68,&DAT_18001f6b8);
}


/* Address: 0x180004130; Evidence: ev_96b9512e06e8702edf5814faac70b67187f256fde371ee60327c743ebb42bc8c */

void FUN_180004130(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180004370(param_1,&local_18);
  return;
}


/* Address: 0x180004160; Evidence: ev_85f1ed39231c158e5e098e282a0577020e97075e4116ebca39daf440f6017666 */

void FUN_180004160(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_1800044b0(param_1,&local_18);
  return;
}


/* Address: 0x180004190; Evidence: ev_58906cc65b318e9326526ae9ff326e9563e183e5634ee091c8aa519ff16f8785 */

void FUN_180004190(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180004630(param_1,&local_18);
  return;
}


/* Address: 0x1800041c0; Evidence: ev_c18a270ec01a3e3fae14376db67963bbc1fa77187b188790b6ea8eb06d56c3bf */

void FUN_1800041c0(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_1800047b0(param_1,&local_18);
  return;
}


/* Address: 0x1800041f0; Evidence: ev_5bf5781c3c5dbe0389eb909b65bcf942b04d54a294e87afa05045fa12580906a */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800041f0(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_a8;
  local_80 = *(undefined8 *)(param_2 + 0x18);
  param_1[3] = local_80;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  local_88 = param_1;
  iVar1 = napi_open_handle_scope(local_80,local_78);
  if (iVar1 != 0) {
    FUN_1800014f0(local_68,local_80);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  puVar2 = (undefined8 *)0x0;
  if ((*(longlong *)(param_2 + 0x20) != 0) &&
     (iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_2 + 0x18),*(longlong *)(param_2 + 0x20),&local_88),
     puVar2 = local_88, iVar1 != 0)) {
    FUN_1800014f0(local_68,*(undefined8 *)(param_2 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(param_1[3],puVar2,1,param_1 + 4), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_80,local_78[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  param_1[1] = 0;
  param_1[2] = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  *param_1 = &PTR_FUN_18001d090;
  return param_1;
}


/* Address: 0x180004370; Evidence: ev_68fb6372780e6db0cba13da5b3f64c7cbb210d6f98236e6eb28fd41c5e67afe9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004370(undefined8 param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_148 [32];
  longlong local_128;
  longlong local_120;
  longlong local_118;
  undefined8 local_108 [6];
  ulonglong local_d8;
  longlong local_d0;
  longlong local_c0;
  LPVOID local_78;
  undefined8 *local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_148;
  FUN_1800023d0(&local_d8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  puVar2 = local_70;
  local_70 = (undefined8 *)local_70[3];
  if (local_c0 == 0) {
    local_128 = local_d0;
    FUN_180001270(&local_128,&local_120);
    local_d0 = local_120;
    local_c0 = local_118;
  }
  iVar1 = napi_unwrap(local_d0,local_c0,&local_128);
  if (iVar1 != 0) {
    puVar2 = FUN_180001310(local_108,&local_120);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014f0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_68,&DAT_18001f750);
  }
  if (local_128 != 0) {
    (*(code *)*puVar2)((int)puVar2[1] + local_128,&local_d8);
  }
  if (local_78 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_78);
  }
  return 0;
}


/* Address: 0x1800044b0; Evidence: ev_bce4f8d385020f90d01b56264a4dcba2e2d42e8c61cf483d6cb85b8b8f8ea52c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_1800044b0(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  int iVar2;
  longlong *plVar3;
  undefined8 *puVar4;
  undefined8 uVar5;
  undefined1 auStack_158 [32];
  longlong local_138 [2];
  longlong local_128;
  longlong lStack_120;
  undefined8 local_118;
  longlong local_108;
  longlong local_100;
  ulonglong local_e8;
  longlong local_e0;
  longlong local_d0;
  LPVOID local_88;
  undefined8 *local_80;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_158;
  FUN_1800023d0(&local_e8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  puVar4 = local_80;
  local_80 = (undefined8 *)local_80[3];
  local_128 = local_e0;
  lStack_120 = local_d0;
  if (local_d0 == 0) {
    local_138[0] = local_e0;
    FUN_180001270(local_138,&local_108);
    local_128 = local_108;
    lStack_120 = local_100;
  }
  iVar2 = napi_unwrap(local_128,lStack_120,local_138);
  if (iVar2 != 0) {
    puVar4 = FUN_180001310(&local_128,&local_108);
    uVar5 = FUN_180001210(puVar4);
    FUN_1800014f0(local_78,uVar5);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  local_118 = puVar4[2];
  if (local_138[0] == 0) {
    local_128 = 0;
    lStack_120 = 0;
    plVar3 = &local_128;
  }
  else {
    plVar3 = (longlong *)(*(code *)*puVar4)((int)puVar4[1] + local_138[0],&local_128,&local_e8);
  }
  lVar1 = plVar3[1];
  if (local_88 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_88);
  }
  return lVar1;
}


/* Address: 0x180004630; Evidence: ev_72686d50cec08b5f84b01af7fa12f84f502d5a9f8bf1e86866af3697abd0317c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_180004630(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  int iVar2;
  longlong *plVar3;
  undefined8 *puVar4;
  undefined8 uVar5;
  undefined1 auStack_158 [32];
  longlong local_138 [2];
  longlong local_128;
  longlong lStack_120;
  undefined8 local_118;
  longlong local_108;
  longlong local_100;
  ulonglong local_e8;
  longlong local_e0;
  longlong local_d0;
  LPVOID local_88;
  undefined8 *local_80;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_158;
  FUN_1800023d0(&local_e8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  puVar4 = local_80;
  local_80 = (undefined8 *)local_80[6];
  local_128 = local_e0;
  lStack_120 = local_d0;
  if (local_d0 == 0) {
    local_138[0] = local_e0;
    FUN_180001270(local_138,&local_108);
    local_128 = local_108;
    lStack_120 = local_100;
  }
  iVar2 = napi_unwrap(local_128,lStack_120,local_138);
  if (iVar2 != 0) {
    puVar4 = FUN_180001310(&local_128,&local_108);
    uVar5 = FUN_180001210(puVar4);
    FUN_1800014f0(local_78,uVar5);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  local_118 = puVar4[2];
  if (local_138[0] == 0) {
    local_128 = 0;
    lStack_120 = 0;
    plVar3 = &local_128;
  }
  else {
    plVar3 = (longlong *)(*(code *)*puVar4)((int)puVar4[1] + local_138[0],&local_128,&local_e8);
  }
  lVar1 = plVar3[1];
  if (local_88 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_88);
  }
  return lVar1;
}


/* Address: 0x1800047b0; Evidence: ev_be98710f765491f9a86e556a71c8ba7bd820c99ff9edc8b4f4d12af7afe73346 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_1800047b0(undefined8 param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  longlong lVar4;
  undefined1 auStack_1a8 [32];
  longlong local_188;
  longlong local_180;
  longlong local_178;
  longlong local_168 [2];
  longlong local_158;
  longlong local_150;
  undefined8 local_148;
  undefined1 local_138 [16];
  ulonglong local_128;
  longlong local_120;
  longlong local_110;
  longlong local_108;
  longlong *local_100;
  LPVOID local_c8;
  longlong local_c0;
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_1a8;
  FUN_1800023d0(&local_128,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  lVar4 = local_c0;
  local_c0 = *(undefined8 *)(local_c0 + 0x30);
  local_168[0] = local_120;
  if (local_110 == 0) {
    local_188 = local_120;
    FUN_180001270(&local_188,&local_180);
    local_168[0] = local_180;
    local_110 = local_178;
  }
  iVar1 = napi_unwrap(local_168[0],local_110,&local_188);
  if (iVar1 != 0) {
    puVar2 = FUN_180001310(local_168,&local_180);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014f0(local_b8,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_b8,&DAT_18001f750);
  }
  local_138 = *(undefined1 (*) [16])(lVar4 + 0x18);
  local_148 = *(undefined8 *)(lVar4 + 0x28);
  if (local_188 != 0) {
    lVar4 = local_138._8_4_ + local_188;
    if (local_108 == 0) {
      local_168[0] = local_120;
      iVar1 = napi_get_undefined(local_120,&local_180);
      if (iVar1 != 0) {
        uVar3 = FUN_180001210(local_168);
        FUN_1800014f0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
        FUN_180006d04(local_68,&DAT_18001f750);
      }
    }
    else {
      local_180 = *local_100;
    }
    local_158 = local_120;
    local_150 = local_180;
    (*(code *)CONCAT44(local_138._4_4_,local_138._0_4_))(lVar4,&local_128,&local_158);
  }
  if (local_c8 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_c8);
  }
  return 0;
}


/* Address: 0x1800049a0; Evidence: ev_1b16bf4e714d541c720dd16be3accbd5b3af0e8e3da44d82f74a5bb13d0a4679 */

void * FUN_1800049a0(__uint64 param_1)

{
  code *pcVar1;
  void *pvVar2;
  void *pvVar3;
  
  if (param_1 == 0) {
    return (void *)0x0;
  }
  if (param_1 < 0x1000) {
    pvVar2 = operator_new(param_1);
    return pvVar2;
  }
  if (param_1 + 0x27 <= param_1) {
    FUN_180001150();
    pcVar1 = (code *)swi(3);
    pvVar2 = (void *)(*pcVar1)();
    return pvVar2;
  }
  pvVar2 = operator_new(param_1 + 0x27);
  if (pvVar2 != (void *)0x0) {
    pvVar3 = (void *)((longlong)pvVar2 + 0x27U & 0xffffffffffffffe0);
    *(void **)((longlong)pvVar3 + -8) = pvVar2;
    return pvVar3;
  }
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}


/* Address: 0x180004a20; Evidence: ev_1684a7508d2e94e40a5f86f4055bcc35b8cbe7ee068e963f65f40a1cfd985414 */

void FUN_180004a20(void)

{
  code *pcVar1;
  
  FUN_180005bc0(0x18001d050);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180004a31; Evidence: ev_42b429fe53147aecdf69435a580abae71bbc57ce5294ba5e2add704fa5597f6a */

void FUN_180004a31(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_RCX;
  undefined8 in_R8;
  undefined8 in_XMM3_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_180013310(&ImgDelayDescr_18001f854.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x000180004aa8. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_RCX,param_2,in_R8,in_XMM3_Qa);
  return;
}


/* Address: 0x180004aaa; Evidence: ev_2c7861fb633c28ac061f1dd62e653f1df893cf48f6fe212434c23dff6bc345f5 */

void DelayLoad_napi_create_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ab6; Evidence: ev_c8d271176cb353090d7873ca5640a2881eb353ea0f9c98b9799c8daf02c286ec */

void DelayLoad_napi_open_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ac2; Evidence: ev_39f1f12df4c83d6e06d1ce7b5e1d4a169524d73802384b8b1379bc096b6d6aa2 */

void DelayLoad_napi_get_boolean
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ace; Evidence: ev_d12cf58baf20d54a84a639c8b0abeb0e9439c924c5a7c39f69b649a71eee8232 */

void DelayLoad_napi_get_last_error_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ada; Evidence: ev_7071d2cd2f16dc9c606b564b700c46ddda29e6aad20b19d52a9710fa18ab95d4 */

void DelayLoad_napi_create_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ae6; Evidence: ev_073f87689edcd389d8ceeeefe6df520ba0e0e84eb2cd528a773e83e042ea290e */

void DelayLoad_napi_delete_reference
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004af2; Evidence: ev_d9e7be5d26d7c68226875ef47c4de1856ae21e01d87c7530e89a0e5c2c0cdbbe */

void DelayLoad_napi_fatal_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004afe; Evidence: ev_8361267adb4db7ecd5050a7f3411eebaab3ca4fbee8d0e9d2a06780e1f4eb500 */

void DelayLoad_napi_is_exception_pending
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b0a; Evidence: ev_06997ff82bbfbdb3af9a615ad3b1590919ba11c262f8ed82ceae3eafea52348e */

void DelayLoad_napi_get_value_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b16; Evidence: ev_666c4431e5dd5253ac154a41e11a45588630849e2a1391c04f12219c75e7d65a */

void DelayLoad_napi_unwrap
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b22; Evidence: ev_d96fdc2f3f6b40ffccf46888d759ec4e3e6e886530abb5bb9c292613fe518454 */

void DelayLoad_napi_close_escapable_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b2e; Evidence: ev_ac0001ce6d6753c9c1c934cbc127be00ff3249e789ce14d74ffcda4a9a80a256 */

void DelayLoad_napi_escape_handle
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b3a; Evidence: ev_7c725a8dcfeecd496a5e1075f50448e63b5788f7efd5a9a3fa433cb5ad4fe129 */

void DelayLoad_napi_get_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b46; Evidence: ev_5a47d7a9a098c5f36db506e755ccad2bedfb6219d06f017b0b57e28e7a447e40 */

void DelayLoad_napi_add_finalizer
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b52; Evidence: ev_e1bd0188780cc4186f4a0effc17162b9dd048b6385550405c2adadd7f566bc2d */

void DelayLoad_napi_create_type_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b5e; Evidence: ev_9dbfeb8b66837cc1a4d5c29505ad7b4fa8cd0255d98c0717155d8a4eb730d714 */

void DelayLoad_napi_wrap(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4
                        )

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b6a; Evidence: ev_c830d9ca0babe29b7a92f59ff294d6165656574cba63ebcb0d1b4fdf1658325f */

void DelayLoad_napi_create_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b76; Evidence: ev_b53492b93fbd3b7f278a158b3a7a692ac1adb6d6606f925986bc44500b8e41e1 */

void DelayLoad_napi_has_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b82; Evidence: ev_424301ea16423758e0d790d47c4f9d267f0e32a344a391a2133b06b6ff8a2e52 */

void DelayLoad_napi_set_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b8e; Evidence: ev_bcb394ba10a666a0143669fd4982ee52ab325146e20acfc11651ef2b9c23e6e7 */

void DelayLoad_napi_get_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004b9a; Evidence: ev_a3b853bf7f7384dab822f79eab7b68fa33fa42569c40edfcfbb465eafde7c2d4 */

void DelayLoad_napi_define_properties
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ba6; Evidence: ev_edea90c7277f6b88437d9ea4510ac9577d4c21764d160361b9822bbd87b065d6 */

void DelayLoad_napi_typeof
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004bb2; Evidence: ev_d497ac309bd587d2a78a1165066f5d1cf9ed19b3a7409dd6ba6cf245d06759fc */

void DelayLoad_napi_throw
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004bbe; Evidence: ev_3472ba83cedb8b87b5243db3b358a5e66a20a1076dbee3b1bcdfd46987647734 */

void DelayLoad_napi_define_class
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004bca; Evidence: ev_ef06b93d3b1e7f224166a4092f0dd0a2d0f96f9c72070ca44692955156e93a05 */

void DelayLoad_napi_get_and_clear_last_exception
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004bd6; Evidence: ev_1b9e7516a3cdbb98b5fafb40c6a11b5121de77b566bda9d9f4cda37f409b22d9 */

void DelayLoad_napi_create_object
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004be2; Evidence: ev_c79963f86bc891378968f1e7973f65edca564a905ecb5951cffb1cd4bf8bba83 */

void DelayLoad_napi_get_undefined
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004bee; Evidence: ev_06872ea8494dffb850c1a08ea41126df306791717cc741071daa05815be02a75 */

void DelayLoad_napi_get_new_target
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004bfa; Evidence: ev_9b5e404b4094064bbc5a83ab7b9f12e1e4c431d48f4b2e7c65c04b0cfbb3c3a6 */

void DelayLoad_napi_get_typedarray_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c06; Evidence: ev_e2ccbf335f36380f3d20a614fe096d046cba64ee50272805bc81abba85bf0b56 */

void DelayLoad_napi_get_cb_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c12; Evidence: ev_38dab4ffc7129a01a69851e6c485e5dc33e13dacfbd5037b5ef165b09ad8c29d */

void DelayLoad_napi_open_escapable_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c1e; Evidence: ev_243279cac43f973cabac98aceee5fac2cca6e411406bebb11621aac43b1be216 */

void DelayLoad_napi_set_instance_data
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c2a; Evidence: ev_3e74994784e552e4ec2fe67e7b4198bddcdd1f66c2d8ac7d6c2c3252bc21164b */

void DelayLoad_napi_create_reference
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c36; Evidence: ev_9555d34ab6fc1890def7abe83f6e9aca43f2e180d24ecd3017bc8c745477ffc5 */

void DelayLoad_napi_close_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c42; Evidence: ev_7d1c54aaf4b51db05b61d2b945818e369494fe6e9b1326e82288ebf316d39db0 */

void DelayLoad_napi_create_buffer_copy
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c4e; Evidence: ev_67417cbfeeb02e67774873eabfadc9d600c74d6b9c3b0e55be3569cc3d0826c9 */

void DelayLoad_napi_remove_wrap
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c5a; Evidence: ev_d8906afbe6c650ca95c1ce3834e6c13172bb5a0fa20e5e4208ebac2d56e0b57f */

void DelayLoad_napi_get_reference_value
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004a31(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004c80; Evidence: ev_7b80bc39eb69678343250e6845ce38e43984cc9e96a39657d073a999b752b278 */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_180021000) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_1800050d0();
  return;
}


/* Address: 0x180004ca0; Evidence: ev_6311133ea64d8753f0e8cf1fe5e3d2684e376ddbec4940810e7e75e52ed9c5ac */

void thunk_FUN_18000c960(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800227e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000bef4(DVar2);
    p_Var4 = FUN_18000c034();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180004ca8; Evidence: ev_b675fbc887b61f22a0cffcbd48091480780f969ee35a2283f9e3fc4467c98c3e */

/* Library Function - Single Match
    void * __ptr64 __cdecl operator new(unsigned __int64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void * __cdecl operator_new(__uint64 param_1)

{
  code *pcVar1;
  bool bVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  void *pvVar4;
  
  do {
    pvVar3 = _malloc_base(param_1);
    if (pvVar3 != (LPVOID)0x0) {
      return pvVar3;
    }
    bVar2 = FUN_18000adf0(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_180001150();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_18000523c();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x180004ce4; Evidence: ev_c4576669d89bd300dce1e56fda1fb0da8788b2a44a841f597091282b26f05f3f */

void thunk_FUN_18000c960(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800227e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000bef4(DVar2);
    p_Var4 = FUN_18000c034();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180004cec; Evidence: ev_ffc6c5da53dc535e509cea98f0c91c9c341469a0e38454ebf64aa626db50d644 */

void * __cdecl operator_new(__uint64 param_1)

{
  code *pcVar1;
  bool bVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  void *pvVar4;
  
  do {
    pvVar3 = _malloc_base(param_1);
    if (pvVar3 != (LPVOID)0x0) {
      return pvVar3;
    }
    bVar2 = FUN_18000adf0(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_180001150();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_18000523c();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x180004d00; Evidence: ev_1dac2b2761affaddb4b4bd29acbaa8ab7544beac24314f29fb1824be1080ac59 */

undefined8 * FUN_180004d00(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = type_info::vftable;
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000c960(param_1);
  }
  return param_1;
}


/* Address: 0x180004d30; Evidence: ev_9524f313400207a05ace0e8046b4d50fcea0cfb36dd17264dc7ceb0d21842271 */

ulonglong FUN_180004d30(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180004e98(param_3 != 0);
    return uVar2;
  }
  if (param_2 != 1) {
    if (param_2 == 2) {
      bVar1 = __scrt_dllmain_crt_thread_attach();
    }
    else {
      if (param_2 != 3) {
        return 1;
      }
      bVar1 = FUN_18000540c();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_180004d80(param_1,param_3);
  return uVar2;
}


/* Address: 0x180004d80; Evidence: ev_92ba9282f9685ab74c2a439494ff160241d91372675384dbe0d4fe58d1f3e3b0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180004d80(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_1800054c8(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180022190 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_18000568c(7);
    }
    DAT_180022190 = 1;
    bVar2 = FUN_1800053cc();
    if (bVar2) {
      FUN_1800057d8();
      FUN_180005314();
      FUN_180005340();
      uVar4 = FUN_18000af40((undefined8 *)&DAT_1800152e0,(undefined8 *)&DAT_180015300);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_18000af08((undefined8 *)&DAT_1800152d0,(undefined8 *)&DAT_1800152d8);
        DAT_180022190 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180005678();
      if ((*plVar5 != 0) && (uVar6 = FUN_180005590((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180021bf8 = DAT_180021bf8 + 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x180004e98; Evidence: ev_54caab353a8239c34f9ff7466fc27d02f72c0ab9aaf714c74e4f11dc53e307f1 */

ulonglong FUN_180004e98(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180021bf8 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180021bf8 = DAT_180021bf8 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180022190 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_18000568c(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180005324();
    FUN_180005814();
    DAT_180022190 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_1800054b4();
  }
  return uVar2;
}


/* Address: 0x180004f1c; Evidence: ev_deb29b9f657d36ffbe4052f0fbc2b1bc4076b30e1bb1f5b57bd8ef7e0dd12724 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180004fd9) */
/* WARNING: Removing unreachable block (ram,0x000180004f6a) */
/* WARNING: Removing unreachable block (ram,0x000180005018) */

int FUN_180004f1c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_180021bf8 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180004d30(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_18000530c();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_18000530c();
      FUN_180004e98(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180004d30(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}


/* Address: 0x180005050; Evidence: ev_234952f46c076f37cfc28b564ac49ff3ce5328f783bf080febbe8fefe6fb7944 */

void entry(undefined8 param_1,int param_2,longlong param_3)

{
  if (param_2 == 1) {
    FUN_18000525c();
  }
  FUN_180004f1c(param_1,param_2,param_3);
  return;
}


/* Address: 0x180005090; Evidence: ev_7807bda08641b996f1213f455a0ba985f07483d5a6816af3a7d5d9ab7c52a1b6 */

/* Library Function - Single Match
    __raise_securityfailure
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __raise_securityfailure(_EXCEPTION_POINTERS *param_1)

{
  HANDLE hProcess;
  
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  UnhandledExceptionFilter(param_1);
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x0001800050bd. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000409);
  return;
}


/* Address: 0x1800050d0; Evidence: ev_6b0ae57dea262a4121074677e1787eafc607b9d907d3f6419d50af25a24d01c3 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_1800050d0(void)

{
  code *pcVar1;
  BOOL BVar2;
  undefined1 *puVar3;
  undefined1 auStack_38 [8];
  undefined1 auStack_30 [48];
  
  puVar3 = auStack_38;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(2);
    puVar3 = auStack_30;
  }
  *(undefined8 *)(puVar3 + -8) = 0x1800050fb;
  FUN_1800051a4((PCONTEXT)&DAT_180021ca0);
  _DAT_180021c10 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180021d38 = puVar3 + 0x40;
  _DAT_180021d20 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180021c00 = 0xc0000409;
  _DAT_180021c04 = 1;
  _DAT_180021c18 = 1;
  DAT_180021c20 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180021000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180021040;
  *(undefined8 *)(puVar3 + -8) = 0x18000519d;
  DAT_180021d98 = _DAT_180021c10;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_1800154e8);
  return;
}


/* Address: 0x1800051a4; Evidence: ev_27e9b58b337f2a60b2025e6a15e6e8b41a2785ef3c38e0fa20aa7349af768224 */

void FUN_1800051a4(PCONTEXT param_1)

{
  DWORD64 ControlPc;
  PRUNTIME_FUNCTION FunctionEntry;
  int iVar1;
  DWORD64 local_res8;
  ulonglong local_res10;
  PVOID local_res18 [2];
  
  RtlCaptureContext();
  ControlPc = param_1->Rip;
  iVar1 = 0;
  do {
    FunctionEntry = RtlLookupFunctionEntry(ControlPc,&local_res8,(PUNWIND_HISTORY_TABLE)0x0);
    if (FunctionEntry == (PRUNTIME_FUNCTION)0x0) {
      return;
    }
    RtlVirtualUnwind(0,local_res8,ControlPc,FunctionEntry,param_1,local_res18,&local_res10,
                     (PKNONVOLATILE_CONTEXT_POINTERS)0x0);
    iVar1 = iVar1 + 1;
  } while (iVar1 < 2);
  return;
}


/* Address: 0x180005218; Evidence: ev_26acb146967a8c325351a003de9ec476bbaa1da79e90a6fe4d2a7caa94c00509 */

undefined8 * FUN_180005218(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x18000523c; Evidence: ev_487ef30d6b73d987815aaa385984b5e8ee8732e78063fe6e4da8580b8a4bce84 */

void FUN_18000523c(void)

{
  longlong local_28 [5];
  
  FUN_180005218(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_28,&DAT_18001f540);
}


/* Address: 0x18000525c; Evidence: ev_b467ed4de31da4c5ccba6d35304b6a0adf4afba0807dcb757c370fdaf9e9ab59 */

void FUN_18000525c(void)

{
  DWORD DVar1;
  _FILETIME local_res8;
  LARGE_INTEGER local_res10;
  _FILETIME local_18 [2];
  
  if (DAT_180021000 == 0x2b992ddfa232) {
    local_res8.dwLowDateTime = 0;
    local_res8.dwHighDateTime = 0;
    GetSystemTimeAsFileTime(&local_res8);
    local_18[0] = local_res8;
    DVar1 = GetCurrentThreadId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    DVar1 = GetCurrentProcessId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    QueryPerformanceCounter(&local_res10);
    DAT_180021000 =
         ((ulonglong)local_res10.s.LowPart << 0x20 ^
          CONCAT44(local_res10.s.HighPart,local_res10.s.LowPart) ^ (ulonglong)local_18[0] ^
         (ulonglong)local_18) & 0xffffffffffff;
    if (DAT_180021000 == 0x2b992ddfa232) {
      DAT_180021000 = 0x2b992ddfa233;
    }
  }
  DAT_180021040 = ~DAT_180021000;
  return;
}


/* Address: 0x18000530c; Evidence: ev_db75d0dc29d706873b8a91a28eff5c6249fc4b9f9d4f3a12f455c11c8cef0955 */

undefined8 FUN_18000530c(void)

{
  return 1;
}


/* Address: 0x180005314; Evidence: ev_49f64f0a7408139a4981d354485adf6d4aee037c139b12bc34cb1e0ec09630d2 */

void FUN_180005314(void)

{
                    /* WARNING: Could not recover jumptable at 0x00018000531b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  InitializeSListHead(&DAT_180022170);
  return;
}


/* Address: 0x180005324; Evidence: ev_62df395011accbaf969c6c5d5f7b6f149a055c6bff1e82aef0335b2e2bec1848 */

void FUN_180005324(void)

{
  FUN_180006dc4((PSLIST_HEADER)&DAT_180022170);
  return;
}


/* Address: 0x180005330; Evidence: ev_c5e9ff205272b85fcd862ac7bb268c65388f4f731cb10bb31e3c59337e92fc30 */

undefined * FUN_180005330(void)

{
  return &DAT_180022180;
}


/* Address: 0x180005338; Evidence: ev_ff968f06764023cbe273e90d896b0d3914b85b0c8a63d02a84372812db588e15 */

undefined * FUN_180005338(void)

{
  return &DAT_180022188;
}


/* Address: 0x180005340; Evidence: ev_fdea6c5d381d443306ade84005c31b26acd84eaf3500861125a44d6fb2c23cb3 */

void FUN_180005340(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_180005330();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_180005338();
  *puVar1 = *puVar1 | 2;
  return;
}


/* Address: 0x18000535c; Evidence: ev_10eac720476855dc70f7f5da93b8e330ed9a5bad72d04391ec7dc90eceb38c90 */

/* Library Function - Single Match
    __scrt_acquire_startup_lock
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong __scrt_acquire_startup_lock(void)

{
  void *pvVar1;
  bool bVar2;
  undefined7 extraout_var;
  ulonglong uVar4;
  void *pvVar3;
  
  bVar2 = __scrt_is_ucrt_dll_in_use();
  pvVar3 = (void *)CONCAT71(extraout_var,bVar2);
  if ((int)pvVar3 == 0) {
LAB_18000538a:
    uVar4 = (ulonglong)pvVar3 & 0xffffffffffffff00;
  }
  else {
    do {
      pvVar3 = (void *)0x0;
      LOCK();
      bVar2 = DAT_180022198 == (void *)0x0;
      pvVar1 = StackBase;
      if (!bVar2) {
        pvVar3 = DAT_180022198;
        pvVar1 = DAT_180022198;
      }
      DAT_180022198 = pvVar1;
      UNLOCK();
      if (bVar2) goto LAB_18000538a;
    } while (StackBase != pvVar3);
    uVar4 = CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
  }
  return uVar4;
}


/* Address: 0x180005398; Evidence: ev_398f64fbe9c169d69681c999534044d5e2db2ed1a1e3943acccae96188d3c97b */

/* Library Function - Single Match
    __scrt_dllmain_after_initialize_c
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __scrt_dllmain_after_initialize_c(void)

{
  bool bVar1;
  undefined7 extraout_var;
  undefined8 uVar2;
  ulonglong uVar3;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if ((int)CONCAT71(extraout_var,bVar1) == 0) {
    uVar2 = FUN_18000530c();
    uVar3 = FUN_18000b5b8((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_18000b738();
  }
  else {
    uVar2 = FUN_180005850();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}


/* Address: 0x1800053cc; Evidence: ev_f09eccd7c1864f428875e478704ee2916e04d2b1375c1c1e8d701c8b4162b990 */

bool FUN_1800053cc(void)

{
  undefined8 uVar1;
  
  uVar1 = FUN_180005504(0);
  return (char)uVar1 != '\0';
}


/* Address: 0x1800053e4; Evidence: ev_35f5e757de6decf0d84a5d358f64023d22156babfc5001cfc771389b860e9094 */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_180006e18();
  if (bVar1) {
    bVar1 = FUN_18000bcc0();
    if (bVar1) {
      return 1;
    }
    FUN_180006e2c();
  }
  return 0;
}


/* Address: 0x18000540c; Evidence: ev_7dc91ff435b534719348527e846072f0b07b008d3d486642acb0268039146c9a */

undefined1 FUN_18000540c(void)

{
  FUN_18000bcd4();
  FUN_180006e2c();
  return 1;
}


/* Address: 0x180005424; Evidence: ev_8bc56de6132f47e52e60b0c346d81aa573b672219424908c1ae23a03eb1cb56c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* Library Function - Single Match
    __scrt_dllmain_exception_filter
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __scrt_dllmain_exception_filter
               (undefined8 param_1,int param_2,undefined8 param_3,undefined *param_4,int param_5,
               undefined8 param_6)

{
  bool bVar1;
  undefined7 extraout_var;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if (((int)CONCAT71(extraout_var,bVar1) == 0) && (param_2 == 1)) {
    (*(code *)param_4)(param_1,0,param_3);
  }
  _seh_filter_dll(param_5,param_6);
  return;
}


/* Address: 0x180005484; Evidence: ev_285ce0363219a8ff82ef89121a93c140fcbfa341df701755f8f6b2a12816c7ec */

/* Library Function - Single Match
    __scrt_dllmain_uninitialize_c
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __scrt_dllmain_uninitialize_c(void)

{
  bool bVar1;
  undefined3 extraout_var;
  int iVar2;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if (CONCAT31(extraout_var,bVar1) != 0) {
    FUN_18000badc(&DAT_1800221a8);
    return;
  }
  iVar2 = FUN_18000b390();
  if (iVar2 == 0) {
    FUN_18000b374();
  }
  return;
}


/* Address: 0x1800054b4; Evidence: ev_82e048d710a7303a2e00a35daac42797b7f18c48f1db6f2b660bbbc4b709066a */

void FUN_1800054b4(void)

{
  FUN_18000bd1c();
  FUN_180006e58();
  return;
}


/* Address: 0x1800054c8; Evidence: ev_e98298fce9092369eb7bf5208554157a96f0e1805d4a382b5b8820d8cacabdff */

ulonglong FUN_1800054c8(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_1800221a0 = 1;
  }
  FUN_180005850();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000bcac();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}


/* Address: 0x180005504; Evidence: ev_86595d81dd2b0aded9a78896c73356f96f420ab3a13ddd8aff9e07227450f1a8 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180005504(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_1800221a1 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_18000568c(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_1800221a8 = 0xffffffffffffffff;
      uRam00000001800221b0 = 0xffffffffffffffff;
      _DAT_1800221b8 = 0xffffffffffffffff;
      _DAT_1800221c0 = 0xffffffffffffffff;
      uRam00000001800221c8 = 0xffffffffffffffff;
      _DAT_1800221d0 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_1800221a8);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_1800221c0), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_1800221a1 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180005590; Evidence: ev_d56ea34492e7f1038af4dcc3d67121d7546281abb42914d97f53052fb72cf6e6 */

/* WARNING: Removing unreachable block (ram,0x00018000561d) */
/* WARNING: Enum "SectionFlags": Some values do not have unique names */

ulonglong FUN_180005590(longlong param_1)

{
  ulonglong uVar1;
  uint7 uVar2;
  IMAGE_SECTION_HEADER *pIVar3;
  
  uVar1 = 0;
  for (pIVar3 = &IMAGE_SECTION_HEADER_180000210; pIVar3 != (IMAGE_SECTION_HEADER *)&DAT_180000350;
      pIVar3 = pIVar3 + 1) {
    if (((ulonglong)(uint)pIVar3->VirtualAddress <= param_1 - 0x180000000U) &&
       (uVar1 = (ulonglong)((pIVar3->Misc).PhysicalAddress + pIVar3->VirtualAddress),
       param_1 - 0x180000000U < uVar1)) goto LAB_180005606;
  }
  pIVar3 = (IMAGE_SECTION_HEADER *)0x0;
LAB_180005606:
  if (pIVar3 == (IMAGE_SECTION_HEADER *)0x0) {
    uVar1 = uVar1 & 0xffffffffffffff00;
  }
  else {
    uVar2 = (uint7)(uVar1 >> 8);
    if ((int)pIVar3->Characteristics < 0) {
      uVar1 = (ulonglong)uVar2 << 8;
    }
    else {
      uVar1 = CONCAT71(uVar2,1);
    }
  }
  return uVar1;
}


/* Address: 0x180005628; Evidence: ev_b5c3ea47f7a2431855381b9c0efce01e761b44c1c24993546335867b6d5adc35 */

/* Library Function - Single Match
    __scrt_release_startup_lock
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __scrt_release_startup_lock(char param_1)

{
  bool bVar1;
  undefined3 extraout_var;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if ((CONCAT31(extraout_var,bVar1) != 0) && (param_1 == '\0')) {
    LOCK();
    DAT_180022198 = 0;
    UNLOCK();
  }
  return;
}


/* Address: 0x18000564c; Evidence: ev_a40658f1b0bfff6a48d38ecc7140476e5b44bbb51a444bf606487c713ed54732 */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_1800221a0 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180005678; Evidence: ev_28dee6857b147f4177d801b9587f5c3d7ddd59ef66660dd582d6fad0c2bc6be0 */

undefined * FUN_180005678(void)

{
  return &DAT_180022c98;
}


/* Address: 0x180005680; Evidence: ev_e2ce213a16a33ac1e3fc3270ee89b476355ab46ae6ceb3ebaa4c77a7a2a16649 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180005680(void)

{
  _DAT_1800221d8 = 0;
  return;
}


/* Address: 0x18000568c; Evidence: ev_0425a8231ad91a716673eaf47a33f4def4fe8e48b742002738dda38d80dcc481 */

void FUN_18000568c(undefined4 param_1)

{
  code *pcVar1;
  BOOL BVar2;
  LONG LVar3;
  PRUNTIME_FUNCTION FunctionEntry;
  undefined1 *puVar4;
  undefined8 unaff_retaddr;
  DWORD64 local_res10;
  undefined1 local_res18 [8];
  undefined1 local_res20 [8];
  undefined1 auStack_5c8 [8];
  undefined1 auStack_5c0 [232];
  undefined1 local_4d8 [152];
  undefined1 *local_440;
  DWORD64 local_3e0;
  
  puVar4 = auStack_5c8;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(param_1);
    puVar4 = auStack_5c0;
  }
  *(undefined8 *)(puVar4 + -8) = 0x1800056c0;
  FUN_180005680();
  *(undefined8 *)(puVar4 + -8) = 0x1800056d1;
  FUN_180013a30((undefined1 (*) [32])local_4d8,0,0x4d0);
  *(undefined8 *)(puVar4 + -8) = 0x1800056db;
  RtlCaptureContext(local_4d8);
  *(undefined8 *)(puVar4 + -8) = 0x1800056f5;
  FunctionEntry = RtlLookupFunctionEntry(local_3e0,&local_res10,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    *(undefined8 *)(puVar4 + 0x38) = 0;
    *(undefined1 **)(puVar4 + 0x30) = local_res18;
    *(undefined1 **)(puVar4 + 0x28) = local_res20;
    *(undefined1 **)(puVar4 + 0x20) = local_4d8;
    *(undefined8 *)(puVar4 + -8) = 0x180005739;
    RtlVirtualUnwind(0,local_res10,local_3e0,FunctionEntry,*(PCONTEXT *)(puVar4 + 0x20),
                     *(PVOID **)(puVar4 + 0x28),*(PDWORD64 *)(puVar4 + 0x30),
                     *(PKNONVOLATILE_CONTEXT_POINTERS *)(puVar4 + 0x38));
  }
  local_440 = &stack0x00000008;
  *(undefined8 *)(puVar4 + -8) = 0x18000576b;
  FUN_180013a30((undefined1 (*) [32])(puVar4 + 0x50),0,0x98);
  *(undefined8 *)(puVar4 + 0x60) = unaff_retaddr;
  *(undefined4 *)(puVar4 + 0x50) = 0x40000015;
  *(undefined4 *)(puVar4 + 0x54) = 1;
  *(undefined8 *)(puVar4 + -8) = 0x18000578d;
  BVar2 = IsDebuggerPresent();
  *(undefined1 **)(puVar4 + 0x40) = puVar4 + 0x50;
  *(undefined1 **)(puVar4 + 0x48) = local_4d8;
  *(undefined8 *)(puVar4 + -8) = 0x1800057aa;
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  *(undefined8 *)(puVar4 + -8) = 0x1800057b5;
  LVar3 = UnhandledExceptionFilter((_EXCEPTION_POINTERS *)(puVar4 + 0x40));
  if ((LVar3 == 0) && (BVar2 != 1)) {
    *(undefined8 *)(puVar4 + -8) = 0x1800057c6;
    FUN_180005680();
  }
  return;
}


/* Address: 0x1800057d8; Evidence: ev_222386fcd656776810c91a826bf66eae15fa005a7d6445b04fbbefd3147a5bff */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800057d8(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001dc90; puVar1 < &DAT_18001dc90; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180005814; Evidence: ev_de88243bf988768f6cbc1379e6df6b6e43fa3754cca35871ce25d1a62c5f1429 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005814(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001dca0; puVar1 < &DAT_18001dca0; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180005850; Evidence: ev_006ee05ec4b4b7b303e28fb9816e26c27b8e6b019de4318bb6a1d7cd98523170 */

/* WARNING: Removing unreachable block (ram,0x000180005941) */
/* WARNING: Removing unreachable block (ram,0x000180005931) */
/* WARNING: Removing unreachable block (ram,0x00018000590c) */
/* WARNING: Removing unreachable block (ram,0x00018000588a) */
/* WARNING: Removing unreachable block (ram,0x000180005868) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180005850(void)

{
  int *piVar1;
  uint *puVar2;
  int *piVar3;
  longlong lVar4;
  uint uVar5;
  byte bVar6;
  ulonglong uVar7;
  uint uVar8;
  ulonglong uVar9;
  uint uVar10;
  uint uVar11;
  ulonglong uVar12;
  ulonglong in_XCR0;
  
  piVar1 = (int *)cpuid_basic_info(0);
  puVar2 = (uint *)cpuid_Version_info(1);
  uVar5 = puVar2[3];
  if ((piVar1[2] == 0x49656e69 && piVar1[3] == 0x6c65746e) && piVar1[1] == 0x756e6547) {
    uVar8 = *puVar2 & 0xfff3ff0;
    DAT_180021060 = 0x8000;
    DAT_180021068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_1800221e0 = DAT_1800221e0 | 1;
    }
  }
  uVar8 = 0;
  uVar10 = 0;
  uVar11 = 0;
  uVar12 = 0;
  if (6 < *piVar1) {
    piVar3 = (int *)cpuid_Extended_Feature_Enumeration_info(7);
    uVar8 = piVar3[1];
    uVar10 = piVar3[2];
    if ((uVar8 >> 9 & 1) != 0) {
      DAT_1800221e0 = DAT_1800221e0 | 2;
    }
    if (0 < *piVar3) {
      lVar4 = cpuid_Extended_Feature_Enumeration_info(7);
      uVar11 = *(uint *)(lVar4 + 8);
    }
    if (0x23 < *piVar1) {
      lVar4 = cpuid(0x24);
      uVar12 = (ulonglong)*(uint *)(lVar4 + 4);
    }
  }
  DAT_180021058 = 1;
  DAT_18002105c = 2;
  uVar9 = DAT_180021050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_180021058 = 2;
    DAT_18002105c = 6;
    uVar9 = DAT_180021050 & 0xffffffffffffffee;
  }
  DAT_180021050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_180021058 = 3;
      uVar7 = DAT_180021050;
      uVar5 = DAT_18002105c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_180021058 = 5;
        uVar7 = DAT_180021050 & 0xfffffffffffffffd;
        uVar5 = DAT_18002105c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18002105c = DAT_18002105c | 0x68;
          DAT_180021058 = 6;
          uVar7 = DAT_180021050 & 0xffffffffffffffd9;
          uVar5 = DAT_18002105c;
        }
      }
      DAT_18002105c = uVar5;
      DAT_180021050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_180021050 = DAT_180021050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_1800221dc = (uint)uVar12 & 0x400ff;
        DAT_180021050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_180021050;
        if (1 < (byte)_DAT_1800221dc) {
          DAT_180021050 = DAT_180021050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_180021050 = DAT_180021050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}


/* Address: 0x180005ae8; Evidence: ev_2f0c76e2e2c7a267f4fc0d627e45a1f1af06e1c2ac035e7bae87413933f1bdca */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180022c94 != 0;
}


/* Address: 0x180005b00; Evidence: ev_9344df0c785db6fd820f31480b2aa4e48cb40123871e7b743f1e335ec062e41e */

undefined8 * FUN_180005b00(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_1800068f8((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x180005b3c; Evidence: ev_18addda85a93dcf52520080681ad853ba5c9a47137cff786163706a496cca1f8 */

undefined8 * FUN_180005b3c(undefined8 *param_1,longlong param_2)

{
  longlong local_18;
  undefined1 local_10;
  
  local_10 = 1;
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  local_18 = param_2;
  FUN_1800068f8(&local_18,param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x180005b84; Evidence: ev_c5ec2e009448504ab33277bda103d6489a9e36a989604f165528e9f17039244e */

undefined8 * FUN_180005b84(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_1800068f8((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::logic_error::vftable;
  return param_1;
}


/* Address: 0x180005bc0; Evidence: ev_152bd730380e8d8bf9b35640ab9435ca6f677229169ebbc7e80c3babd3f0460b */

void FUN_180005bc0(longlong param_1)

{
  longlong local_28 [5];
  
  FUN_180005b3c(local_28,param_1);
                    /* WARNING: Subroutine does not return */
  FUN_180006d04(local_28,&DAT_18001f5a0);
}


/* Address: 0x180005be4; Evidence: ev_515400dbb1dd562762ee881b9bf705b8e76641463cd8b8255add677f6c382470 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005be4(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180006ed8();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180005c38; Evidence: ev_d305c48aabd659a3ce857672803d76f2f33196a44393fe90c8d2efeb8ce22984 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005c38(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180006ed8();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180005c8c; Evidence: ev_1c606af8e621ffddf88f928b0dc6c2adebee0f997075f13d3334c0aee7ee219b */

longlong FUN_180005c8c(longlong param_1,int param_2)

{
  uint uVar1;
  longlong lVar2;
  
  uVar1 = *(uint *)(param_1 + 0xc);
  do {
    if (uVar1 == 0) {
      return 0;
    }
    uVar1 = uVar1 - 1;
    lVar2 = FUN_180006ed8();
    lVar2 = (longlong)*(int *)(param_1 + 0x10) +
            *(longlong *)(lVar2 + 0x60) + (ulonglong)uVar1 * 0x14;
  } while ((param_2 <= *(int *)(lVar2 + 4)) || (*(int *)(lVar2 + 8) < param_2));
  return lVar2;
}


/* Address: 0x180005cf0; Evidence: ev_27192a186e9dacba662c5e31255607dbc25d4b4b4ca5f08d8c8f4239cffbd113 */

longlong FUN_180005cf0(byte *param_1,byte *param_2,longlong param_3,int param_4,char param_5)

{
  uint *puVar1;
  byte *pbVar2;
  byte bVar3;
  byte bVar4;
  undefined4 uVar5;
  int iVar6;
  code *pcVar7;
  uint uVar8;
  uint uVar9;
  byte *pbVar10;
  byte *pbVar11;
  
  bVar3 = *param_1;
  pbVar11 = param_1 + 1;
  *param_2 = bVar3;
  if ((bVar3 & 4) != 0) {
    bVar4 = *pbVar11;
    pbVar11 = pbVar11 + -(longlong)(char)(&DAT_180015590)[bVar4 & 0xf];
    *(uint *)(param_2 + 4) = *(uint *)(pbVar11 + -4) >> ((&DAT_1800155a0)[bVar4 & 0xf] & 0x1f);
  }
  if ((bVar3 & 8) != 0) {
    uVar5 = *(undefined4 *)pbVar11;
    pbVar11 = pbVar11 + 4;
    *(undefined4 *)(param_2 + 8) = uVar5;
  }
  if ((bVar3 & 0x10) != 0) {
    uVar5 = *(undefined4 *)pbVar11;
    pbVar11 = pbVar11 + 4;
    *(undefined4 *)(param_2 + 0xc) = uVar5;
  }
  uVar9 = 0;
  pbVar10 = pbVar11 + 4;
  if ((param_5 == '\0') && ((bVar3 & 2) != 0)) {
    param_2[0x10] = 0;
    param_2[0x11] = 0;
    param_2[0x12] = 0;
    param_2[0x13] = 0;
    if (*(int *)pbVar11 == 0) {
      pcVar7 = (code *)swi(0x29);
      (*pcVar7)(7);
    }
    else {
      uVar8 = *(byte *)(param_3 + *(int *)pbVar11) & 0xf;
      pbVar11 = (byte *)(param_3 + *(int *)pbVar11) + -(longlong)(char)(&DAT_180015590)[uVar8];
      puVar1 = (uint *)(pbVar11 + -4);
      if (*puVar1 >> ((&DAT_1800155a0)[uVar8] & 0x1f) != 0) {
        do {
          iVar6 = *(int *)pbVar11;
          pbVar2 = pbVar11 + 4;
          pbVar11 = pbVar11 + 8;
          if (iVar6 == param_4) {
            *(undefined4 *)(param_2 + 0x10) = *(undefined4 *)pbVar2;
            break;
          }
          uVar9 = uVar9 + 1;
        } while (uVar9 < *puVar1 >> ((&DAT_1800155a0)[uVar8] & 0x1f));
      }
    }
  }
  else {
    *(undefined4 *)(param_2 + 0x10) = *(undefined4 *)pbVar11;
  }
  if ((bVar3 & 1) != 0) {
    bVar3 = *pbVar10;
    pbVar10 = pbVar10 + -(longlong)(char)(&DAT_180015590)[bVar3 & 0xf];
    *(uint *)(param_2 + 0x14) = *(uint *)(pbVar10 + -4) >> ((&DAT_1800155a0)[bVar3 & 0xf] & 0x1f);
  }
  return (longlong)pbVar10 - (longlong)param_1;
}


/* Address: 0x180005e1c; Evidence: ev_aa6a4e3db4611f716e1ff609b690abeb0d176d7f1cef912c3b5ab6cf9fd5dc58 */

bool FUN_180005e1c(ulonglong *param_1,longlong param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = FUN_1800070cc(param_2,param_1);
  lVar2 = FUN_180005c8c(param_2,iVar1);
  return lVar2 != 0;
}


/* Address: 0x180005e48; Evidence: ev_403386dd4b06a585e08e083d0627f69d647f16da6317f7b50523187d0edfa26e */

byte FUN_180005e48(undefined8 param_1,byte *param_2)

{
  return *param_2 & 1;
}


/* Address: 0x180005e50; Evidence: ev_094c81fd9cdf4705144a6077eb81bad172f43bc6dfefcd4ac47670d2a47901d0 */

/* Library Function - Single Match
    public: static void __cdecl __FrameHandler3::FrameUnwindToEmptyState(unsigned __int64 *
   __ptr64,struct _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl
__FrameHandler3::FrameUnwindToEmptyState
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,_s_FuncInfo *param_3)

{
  int iVar1;
  longlong *plVar2;
  longlong lVar3;
  longlong local_res20;
  
  plVar2 = FUN_180005ee8((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_1800070cc((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_180005c8c((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_1800098f4(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}


/* Address: 0x180005eb4; Evidence: ev_3db13837f7eff907a15cba7e00ac5d00c54b2b2e33e6cce172acf48b2d976fa1 */

/* Library Function - Single Match
    public: static void __cdecl __FrameHandler4::FrameUnwindToEmptyState(unsigned __int64 *
   __ptr64,struct _xDISPATCHER_CONTEXT * __ptr64,struct FH4::FuncInfo4 * __ptr64)
   
   Library: Visual Studio 2019 Release */

void __cdecl
__FrameHandler4::FrameUnwindToEmptyState
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,FuncInfo4 *param_3)

{
  __uint64 local_res8 [4];
  
  local_res8[0] = *param_1;
  if (((byte)*param_3 & 1) != 0) {
    local_res8[0] = *(__uint64 *)(*(uint *)(param_3 + 0x14) + local_res8[0]);
  }
  FUN_180009a80((longlong *)local_res8,(ulonglong *)param_2,(longlong)param_3,-1);
  return;
}


/* Address: 0x180005ee8; Evidence: ev_d6ed3a4c803bee37836a8ea0fc94135808203a724ca27d2735446de6f6b7fe3f */

longlong * FUN_180005ee8(longlong *param_1,ulonglong *param_2,longlong param_3,longlong *param_4)

{
  longlong lVar1;
  uint uVar2;
  ulonglong uVar3;
  int iVar4;
  PRUNTIME_FUNCTION p_Var5;
  uint uVar6;
  ulonglong uVar7;
  int *piVar8;
  uint uVar9;
  longlong lVar10;
  ulonglong local_res8;
  
  uVar9 = *(uint *)(param_3 + 0xc);
  iVar4 = FUN_1800070cc(param_3,param_2);
  *param_4 = *param_1;
  do {
    do {
      if (uVar9 == 0) {
        return param_4;
      }
      uVar9 = uVar9 - 1;
      uVar3 = param_2[1];
      lVar1 = (longlong)*(int *)(param_3 + 0x10) + (ulonglong)uVar9 * 0x14;
    } while ((iVar4 <= *(int *)(lVar1 + 4 + uVar3)) || (*(int *)(lVar1 + 8 + uVar3) < iVar4));
    p_Var5 = RtlLookupFunctionEntry(*param_2,&local_res8,(PUNWIND_HISTORY_TABLE)0x0);
    uVar7 = 0;
    lVar10 = (longlong)*(int *)(lVar1 + 0x10 + uVar3) + local_res8;
    uVar2 = *(uint *)(lVar1 + 0xc + uVar3);
    if (uVar2 != 0) {
      piVar8 = (int *)(lVar10 + 0xc);
      do {
        if ((longlong)*piVar8 == (ulonglong)p_Var5->BeginAddress) goto code_r0x000180005f9f;
        uVar6 = (int)uVar7 + 1;
        uVar7 = (ulonglong)uVar6;
        piVar8 = piVar8 + 5;
      } while (uVar6 < uVar2);
    }
  } while (uVar2 <= (uint)uVar7);
code_r0x000180005f9f:
  *param_4 = *(longlong *)((longlong)*(int *)(lVar10 + 0x10 + uVar7 * 0x14) + *param_1);
  return param_4;
}


/* Address: 0x180005fd4; Evidence: ev_0196f4c9b0411bccb97abe321eafd7c706aca14e1f97004353fd11f773ed5787 */

longlong * FUN_180005fd4(longlong *param_1,undefined8 param_2,byte *param_3,longlong *param_4)

{
  *param_4 = *param_1;
  if ((*param_3 & 1) != 0) {
    *param_4 = *(longlong *)((ulonglong)*(uint *)(param_3 + 0x14) + *param_1);
  }
  return param_4;
}


/* Address: 0x180005ff8; Evidence: ev_9e711264f9cae1c5af9e22dcc03b5b8f5ee30319af3db5a9f7921ae334ad37de */

undefined8 *
FUN_180005ff8(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
             )

{
  uint uVar1;
  longlong lVar2;
  uint uVar3;
  ulonglong uVar4;
  int iVar5;
  int *piVar6;
  uint uVar7;
  int iVar9;
  ulonglong uVar10;
  int iVar11;
  longlong lVar12;
  ulonglong uVar13;
  undefined4 uStack_3c;
  undefined4 uStack_2c;
  ulonglong uVar8;
  
  uVar3 = *(uint *)(param_5 + 0xc);
  iVar5 = FUN_1800070cc(param_5,param_4);
  uVar8 = 0;
  if (uVar3 == 0) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  uVar4 = param_4[1];
  lVar12 = (longlong)*(int *)(param_5 + 0x10);
  iVar9 = -1;
  uVar13 = 0xffffffff;
  uVar7 = uVar3;
  while( true ) {
    uVar1 = uVar7 - 1;
    lVar2 = uVar4 + (ulonglong)uVar1 * 0x14;
    if ((*(int *)(lVar2 + 4 + lVar12) < iVar5) && (iVar5 <= *(int *)(lVar2 + 8 + lVar12))) break;
    uVar10 = uVar8;
    uVar7 = uVar1;
    if (uVar1 == 0) {
LAB_180006080:
      piVar6 = (int *)(uVar4 + lVar12);
      do {
        if ((((uVar10 == 0) ||
             ((*(int *)(uVar10 + 4) < *piVar6 && (piVar6[1] <= *(int *)(uVar10 + 8))))) &&
            (*piVar6 <= param_3)) && ((param_3 <= piVar6[1] && (uVar13 = uVar8, iVar9 == -1)))) {
          iVar9 = (int)uVar8;
        }
        uVar7 = (int)uVar8 + 1;
        uVar8 = (ulonglong)uVar7;
        piVar6 = piVar6 + 5;
      } while (uVar7 < uVar3);
      iVar5 = 0;
      if (iVar9 != -1) {
        iVar5 = iVar9;
      }
      iVar11 = 0;
      if (iVar9 != -1) {
        iVar11 = (int)uVar13 + 1;
      }
      *param_1 = param_2;
      param_1[1] = CONCAT44(uStack_3c,iVar5);
      param_1[2] = param_2;
      param_1[3] = CONCAT44(uStack_2c,iVar11);
      return param_1;
    }
  }
  uVar10 = uVar4 + (ulonglong)(uVar7 - 1) * 0x14 + lVar12;
  goto LAB_180006080;
}


/* Address: 0x180006130; Evidence: ev_2205b316bf3db9a19c7bddb8d418bbbe83f4912308b8cea48605a7b9a2ed7548 */

undefined4 * FUN_180006130(undefined4 *param_1,int *param_2,int param_3)

{
  byte bVar1;
  char cVar2;
  uint uVar3;
  int iVar4;
  byte *pbVar5;
  int iVar6;
  int iVar7;
  longlong lVar8;
  int iVar9;
  byte *pbVar10;
  int iVar11;
  undefined4 uStack_4c;
  undefined4 uStack_3c;
  int *local_38;
  int iStack_30;
  
  iVar7 = 0;
  iVar11 = 0;
  iStack_30 = 0;
  iVar6 = 0;
  local_38 = param_2;
  FUN_1800064d4((longlong)param_2,(longlong)&local_38);
  iVar9 = 0;
  if (*param_2 != 0) {
    pbVar10 = *(byte **)(param_2 + 2);
    iVar6 = 0;
    do {
      iVar4 = iVar7;
      if ((((int)*(undefined8 *)(param_2 + 6) <= param_3) &&
          (param_3 <= (int)((ulonglong)*(undefined8 *)(param_2 + 6) >> 0x20))) &&
         (iVar11 = iVar9, iVar4 = iVar9, iVar6 = iVar9, iVar7 == 0)) {
        iVar11 = 0;
        iVar4 = iVar7;
      }
      iVar7 = iVar4;
      iVar9 = iVar9 + 1;
      lVar8 = (longlong)(char)(&DAT_180015590)[*pbVar10 & 0xf];
      bVar1 = (&DAT_1800155a0)[*pbVar10 & 0xf];
      pbVar5 = pbVar10 + -lVar8;
      uVar3 = *(uint *)(pbVar5 + -4);
      *(byte **)(param_2 + 2) = pbVar5;
      param_2[6] = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_180015590)[*pbVar5 & 0xf];
      bVar1 = (&DAT_1800155a0)[*pbVar5 & 0xf];
      pbVar5 = pbVar10 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar5 + -4);
      *(byte **)(param_2 + 2) = pbVar5;
      param_2[7] = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_1800155a0)[*pbVar5 & 0xf];
      pbVar10 = pbVar10 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_180015590)[*pbVar5 & 0xf]) -
                          lVar8);
      uVar3 = *(uint *)(pbVar10 + -4);
      *(byte **)(param_2 + 2) = pbVar10;
      param_2[8] = uVar3 >> (bVar1 & 0x1f);
      iVar4 = *(int *)pbVar10;
      pbVar10 = pbVar10 + 4;
      *(byte **)(param_2 + 2) = pbVar10;
      param_2[9] = iVar4;
    } while (iVar9 != *param_2);
  }
  iStack_30 = iVar11;
  local_38 = param_2;
  FUN_1800064d4((longlong)param_2,(longlong)&local_38);
  *(int **)param_1 = param_2;
  param_1[2] = iVar11;
  param_1[3] = uStack_4c;
  *(int **)(param_1 + 4) = param_2;
  *(ulonglong *)(param_1 + 6) = CONCAT44(uStack_3c,iVar6 + 1);
  return param_1;
}


/* Address: 0x1800062b0; Evidence: ev_c43a230dcf4736c526644c5d73f8f40ca662972662b4a523e8064264d3f2e448 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800062b0(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,ULONG_PTR param_6,int param_7,undefined8 param_8,
                  undefined8 param_9,undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStackY_e8;
  local_b8.ExceptionCode = 0x80000029;
  local_b8.ExceptionFlags = 1;
  local_b8.ExceptionRecord = (_EXCEPTION_RECORD *)0x0;
  local_b8.ExceptionAddress = (PVOID)0x0;
  local_b8.NumberParameters = 0xf;
  local_b8._28_4_ = 0;
  local_b8.ExceptionInformation[9] = 0;
  local_b8.ExceptionInformation[10]._0_4_ = 0;
  local_b8.ExceptionInformation[10]._4_4_ = 0;
  local_b8.ExceptionInformation[0xb]._0_4_ = 0;
  local_b8.ExceptionInformation[0xb]._4_4_ = 0;
  local_b8.ExceptionInformation[0xc]._0_4_ = 0;
  local_b8.ExceptionInformation[0xc]._4_4_ = 0;
  local_b8.ExceptionInformation[0xd]._0_4_ = 0;
  local_b8.ExceptionInformation[0xd]._4_4_ = 0;
  local_b8.ExceptionInformation[0xe] = 0;
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_180009270;
  local_b8.ExceptionInformation[2] = param_5;
  local_b8.ExceptionInformation[3] = (ULONG_PTR)param_7;
  local_b8.ExceptionInformation[5] = param_6;
  local_b8.ExceptionInformation[7] = (ULONG_PTR)param_11;
  local_b8.ExceptionInformation[8] = 0x19930520;
  local_b8.ExceptionInformation[1] = param_4;
  local_b8.ExceptionInformation[4] = param_3;
  local_b8.ExceptionInformation[6] = param_2;
  RtlUnwindEx((PVOID)*param_1,(PVOID)*param_10,&local_b8,(PVOID)0x0,(PCONTEXT)param_10[5],
              (PUNWIND_HISTORY_TABLE)param_10[8]);
  return;
}


/* Address: 0x1800063b4; Evidence: ev_838faa1157431980b2c2dbc18e418c52f14a70848b9f426d8f279d2e1fc4b8c2 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800063b4(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,undefined8 param_6,int param_7,int param_8,longlong param_9,
                  undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStackY_e8;
  local_b8.ExceptionCode = 0x80000029;
  local_b8.ExceptionFlags = 1;
  local_b8.ExceptionRecord = (_EXCEPTION_RECORD *)0x0;
  local_b8.ExceptionAddress = (PVOID)0x0;
  local_b8.NumberParameters = 0xf;
  local_b8._28_4_ = 0;
  local_b8.ExceptionInformation[10]._0_4_ = 0;
  local_b8.ExceptionInformation[10]._4_4_ = 0;
  local_b8.ExceptionInformation[0xc]._0_4_ = 0;
  local_b8.ExceptionInformation[0xc]._4_4_ = 0;
  local_b8.ExceptionInformation[0xd]._0_4_ = 0;
  local_b8.ExceptionInformation[0xd]._4_4_ = 0;
  local_b8.ExceptionInformation[0xe] = 0;
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_180009460;
  local_b8.ExceptionInformation[2] = param_5;
  local_b8.ExceptionInformation[3] = (ULONG_PTR)param_7;
  local_b8.ExceptionInformation[7] = (ULONG_PTR)param_11;
  local_b8.ExceptionInformation[5] = *(longlong *)(param_9 + 0x18) + param_10[1];
  local_b8.ExceptionInformation[9] = *(longlong *)(param_9 + 0x20) + param_10[1];
  local_b8.ExceptionInformation[0xb] = (ULONG_PTR)param_8;
  local_b8.ExceptionInformation[8] = 0x19930520;
  local_b8.ExceptionInformation[1] = param_4;
  local_b8.ExceptionInformation[4] = param_3;
  local_b8.ExceptionInformation[6] = param_2;
  RtlUnwindEx((PVOID)*param_1,(PVOID)*param_10,&local_b8,(PVOID)0x0,(PCONTEXT)param_10[5],
              (PUNWIND_HISTORY_TABLE)param_10[8]);
  return;
}


/* Address: 0x1800064d4; Evidence: ev_51adf4fa02e7c0c1cd42ad78868a22f2aad6feac7ce162c16af6eb078c5540d8 */

void FUN_1800064d4(longlong param_1,longlong param_2)

{
  byte bVar1;
  char cVar2;
  uint uVar3;
  int iVar4;
  undefined4 uVar5;
  ulonglong uVar6;
  byte *pbVar7;
  longlong lVar8;
  byte *pbVar9;
  
  pbVar9 = *(byte **)(param_1 + 0x10);
  *(byte **)(param_1 + 8) = pbVar9;
  pbVar7 = pbVar9 + -(longlong)(char)(&DAT_180015590)[*pbVar9 & 0xf];
  *(uint *)(param_1 + 0x18) = *(uint *)(pbVar7 + -4) >> ((&DAT_1800155a0)[*pbVar9 & 0xf] & 0x1f);
  *(byte **)(param_1 + 8) = pbVar7;
  bVar1 = (&DAT_1800155a0)[*pbVar7 & 0xf];
  pbVar7 = pbVar7 + -(longlong)(char)(&DAT_180015590)[*pbVar7 & 0xf];
  uVar3 = *(uint *)(pbVar7 + -4);
  *(byte **)(param_1 + 8) = pbVar7;
  *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
  bVar1 = (&DAT_1800155a0)[*pbVar7 & 0xf];
  pbVar7 = pbVar7 + -(longlong)(char)(&DAT_180015590)[*pbVar7 & 0xf];
  uVar3 = *(uint *)(pbVar7 + -4);
  pbVar9 = pbVar7 + 4;
  *(byte **)(param_1 + 8) = pbVar7;
  iVar4 = *(int *)(param_2 + 8);
  *(uint *)(param_1 + 0x20) = uVar3 >> (bVar1 & 0x1f);
  uVar5 = *(undefined4 *)pbVar7;
  *(byte **)(param_1 + 8) = pbVar9;
  *(undefined4 *)(param_1 + 0x24) = uVar5;
  if (iVar4 != 0) {
    uVar6 = (ulonglong)*(uint *)(param_2 + 8);
    do {
      lVar8 = (longlong)(char)(&DAT_180015590)[*pbVar9 & 0xf];
      bVar1 = (&DAT_1800155a0)[*pbVar9 & 0xf];
      pbVar7 = pbVar9 + -lVar8;
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x18) = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_180015590)[*pbVar7 & 0xf];
      bVar1 = (&DAT_1800155a0)[*pbVar7 & 0xf];
      pbVar7 = pbVar9 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_1800155a0)[*pbVar7 & 0xf];
      pbVar9 = pbVar9 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_180015590)[*pbVar7 & 0xf]) -
                        lVar8);
      uVar3 = *(uint *)(pbVar9 + -4);
      *(byte **)(param_1 + 8) = pbVar9;
      *(uint *)(param_1 + 0x20) = uVar3 >> (bVar1 & 0x1f);
      uVar5 = *(undefined4 *)pbVar9;
      pbVar9 = pbVar9 + 4;
      *(byte **)(param_1 + 8) = pbVar9;
      *(undefined4 *)(param_1 + 0x24) = uVar5;
      lVar8 = (longlong)(char)(&DAT_180015590)[*pbVar9 & 0xf];
      bVar1 = (&DAT_1800155a0)[*pbVar9 & 0xf];
      pbVar7 = pbVar9 + -lVar8;
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x18) = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_180015590)[*pbVar7 & 0xf];
      bVar1 = (&DAT_1800155a0)[*pbVar7 & 0xf];
      pbVar7 = pbVar9 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_1800155a0)[*pbVar7 & 0xf];
      pbVar9 = pbVar9 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_180015590)[*pbVar7 & 0xf]) -
                        lVar8);
      uVar3 = *(uint *)(pbVar9 + -4);
      *(byte **)(param_1 + 8) = pbVar9;
      *(uint *)(param_1 + 0x20) = uVar3 >> (bVar1 & 0x1f);
      uVar5 = *(undefined4 *)pbVar9;
      pbVar9 = pbVar9 + 4;
      *(byte **)(param_1 + 8) = pbVar9;
      *(undefined4 *)(param_1 + 0x24) = uVar5;
      uVar6 = uVar6 - 1;
    } while (uVar6 != 0);
  }
  return;
}


/* Address: 0x1800066c0; Evidence: ev_4350cd2a27431d84c9419f45be79c80dc1eb78c6d282ac26bab3c2095af05c66 */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_180006ed8();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_180006ed8();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_180006ed8();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}


/* Address: 0x1800066fc; Evidence: ev_f5adbeddc54d8fd2a3896ecd34b5667e1af618740e90c3ad66e84c481479bdb1 */

void FUN_1800066fc(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180006ed8();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180006ed8();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180006ed8();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180006750; Evidence: ev_b18809f043b1983928a9175d495e87efbcb73cd1ed5775af3ad7b115ba76e660 */

undefined8 FUN_180006750(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  return *(undefined8 *)(lVar1 + 0x60);
}


/* Address: 0x180006764; Evidence: ev_1dc44c26b7ef859f1ca38167e62408a3452bb2c88e15200846632b330698ea09 */

undefined8 FUN_180006764(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  return *(undefined8 *)(lVar1 + 0x68);
}


/* Address: 0x180006778; Evidence: ev_33a1769f311014ad6e0ad45fd82fa1f3664a59b45c34ba86b4b0579ca87184c3 */

void FUN_180006778(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  *(undefined8 *)(lVar1 + 0x60) = param_1;
  return;
}


/* Address: 0x180006790; Evidence: ev_d421336d5832c134abddb11118084cbfdf4149af5d234c4c09187a7449ac607a */

void FUN_180006790(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  *(undefined8 *)(lVar1 + 0x68) = param_1;
  return;
}


/* Address: 0x1800067a8; Evidence: ev_2e6d83964fdebf16b4801c66ac2e165f678223080629108ae9bb7f1ec43dde07 */

/* Library Function - Single Match
    __CxxFrameHandler3
   
   Library: Visual Studio 2019 Release */

void __CxxFrameHandler3(int *param_1,__uint64 param_2,ULONG_PTR param_3,
                       _xDISPATCHER_CONTEXT *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  __uint64 local_res8;
  
  uVar1 = *(undefined8 *)(param_4 + 8);
  local_res8 = param_2;
  lVar2 = FUN_180006ed8();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180006ed8();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180006ed8();
  thunk_FUN_180008b70(param_1,&local_res8,param_3,param_4,
                      (_s_FuncInfo *)
                      ((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),0,0,0);
  return;
}


/* Address: 0x180006830; Evidence: ev_5ee3e909122294c1d6dc409c1d61831c4687febc7994661e8449544ce87048d4 */

void FUN_180006830(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  __uint64 local_res8;
  FuncInfo4 local_28 [4];
  undefined8 local_24;
  undefined8 local_1c;
  undefined4 local_14;
  
  uVar1 = *(undefined8 *)(param_4 + 8);
  local_28[0] = (FuncInfo4)0x0;
  local_24 = 0;
  local_1c = 0;
  local_14 = 0;
  local_res8 = param_2;
  lVar2 = FUN_180006ed8();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180006ed8();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180006ed8();
  FUN_180005cf0((byte *)((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),
                (byte *)local_28,*(longlong *)(param_4 + 8),**(int **)(param_4 + 0x10),'\0');
  FUN_18000905c(param_1,&local_res8,param_3,param_4,local_28,0,0,0);
  return;
}


/* Address: 0x1800068f8; Evidence: ev_8510cf3ec11e2ab08793f2edd00b8efe422edf0e2cd318c5ed7ef4e99596d018 */

void FUN_1800068f8(longlong *param_1,longlong *param_2)

{
  size_t sVar1;
  char *pcVar2;
  
  if (((char)param_1[1] == '\0') || ((char *)*param_1 == (char *)0x0)) {
    *param_2 = *param_1;
    *(undefined1 *)(param_2 + 1) = 0;
  }
  else {
    sVar1 = strlen((char *)*param_1);
    pcVar2 = _malloc_base(sVar1 + 1);
    if (pcVar2 != (char *)0x0) {
      FUN_18000bdb0(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_18000c960((LPVOID)0x0);
  }
  return;
}


/* Address: 0x180006978; Evidence: ev_e842318916e227a52e4a081b25e70f7b29143dcbd9633919f7b887fec8a9f7a4 */

void FUN_180006978(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_18000c960((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}


/* Address: 0x1800069a0; Evidence: ev_7ba9a9e01fc767f7deb987206ec0e28b4dfe60a158027857e4fed31761180416 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800069a0(int *param_1)

{
  byte *pbVar1;
  
  if (((((param_1 != (int *)0x0) && (*param_1 == -0x1f928c9d)) && (param_1[6] == 4)) &&
      ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
     (pbVar1 = *(byte **)(param_1 + 0xc), pbVar1 != (byte *)0x0)) {
    if (*(int *)(pbVar1 + 4) == 0) {
      if (((*pbVar1 & 0x10) != 0) && ((longlong *)**(longlong **)(param_1 + 10) != (longlong *)0x0))
      {
        (**(code **)(*(longlong *)**(longlong **)(param_1 + 10) + 0x10))();
      }
    }
    else {
      FUN_180006a14(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}


/* Address: 0x180006a14; Evidence: ev_bd523fd705d9ed1e8f5fa661949bf9a4731bc98721ded1ad26b4cc15a0d58b0c */

void FUN_180006a14(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE)

{
                    /* WARNING: Could not recover jumptable at 0x000180006a14. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180006a18; Evidence: ev_c81525d6e6270ba932c9dbfe6cd720f475662b2932023a3aa6f1e519ce6f0a6f */

/* Library Function - Single Match
    _IsExceptionObjectToBeDestroyed
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _IsExceptionObjectToBeDestroyed(longlong param_1)

{
  longlong lVar1;
  longlong *plVar2;
  
  lVar1 = FUN_180006ed8();
  plVar2 = *(longlong **)(lVar1 + 0x58);
  while( true ) {
    if (plVar2 == (longlong *)0x0) {
      return 1;
    }
    if (*plVar2 == param_1) break;
    plVar2 = (longlong *)plVar2[1];
  }
  return 0;
}


/* Address: 0x180006a48; Evidence: ev_142f91b699842565053180e7d4ab05a088c9ef61120c7dede656d1c5cd1687b7 */

longlong FUN_180006a48(longlong param_1,int *param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = param_2[1];
  lVar2 = *param_2 + param_1;
  if (-1 < iVar1) {
    lVar2 = lVar2 + (longlong)*(int *)((longlong)param_2[2] + *(longlong *)(iVar1 + param_1)) +
                    (longlong)iVar1;
  }
  return lVar2;
}


/* Address: 0x180006a70; Evidence: ev_fb7ee6fc6dc95739ad1cec5a2442a7b4f1d2d2f976e332282af2ec4487284f4b */

undefined8 FUN_180006a70(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180006ed8();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180006ed8();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180006ed8();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180006ed8();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_18000bd2c();
  }
  return 0;
}


/* Address: 0x180006ad8; Evidence: ev_629b44c9e547e99feae7e0afe3d99681c463fd199f96c5f1336a6cd6158af954 */

void Unwind_180006ad8(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_18000bd2c();
}


/* Address: 0x180006ae4; Evidence: ev_7321b54a13772ee39ac0af9bb8ac4bcdc5174326c54167dcc8cadd32a036f9bf */

undefined8 FUN_180006ae4(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  uint uVar1;
  longlong lVar2;
  uint *puVar3;
  int iVar4;
  ulonglong uVar5;
  uint uVar6;
  ulonglong uVar7;
  uint uVar8;
  ulonglong uVar9;
  ulonglong uVar10;
  PEXCEPTION_RECORD local_38;
  longlong local_30;
  
  __except_validate_context_record(param_3);
  lVar2 = param_4[1];
  puVar3 = (uint *)param_4[7];
  uVar10 = *param_4 - lVar2;
  uVar8 = *(uint *)(param_4 + 9);
  local_38 = param_1;
  local_30 = param_3;
  if ((param_1->ExceptionFlags & 0x66) == 0) {
    for (; uVar8 < *puVar3; uVar8 = uVar8 + 1) {
      uVar5 = (ulonglong)uVar8;
      if (((puVar3[uVar5 * 4 + 1] <= uVar10) && (uVar10 < puVar3[uVar5 * 4 + 2])) &&
         (puVar3[uVar5 * 4 + 4] != 0)) {
        if (puVar3[uVar5 * 4 + 3] != 1) {
          iVar4 = (*(code *)((ulonglong)puVar3[uVar5 * 4 + 3] + lVar2))(&local_38,param_2);
          if (iVar4 < 0) {
            return 0;
          }
          if (iVar4 < 1) goto LAB_180006c12;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_1800136e0(0x1800156e8), (int)uVar5 != 0)) {
          FUN_1800069a0((int *)param_1);
        }
        FUN_18000a210();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_18000a240();
      }
LAB_180006c12:
    }
  }
  else {
    uVar5 = param_4[4] - lVar2;
    for (; uVar1 = *puVar3, uVar8 < uVar1; uVar8 = uVar8 + 1) {
      uVar9 = (ulonglong)uVar8;
      if ((puVar3[uVar9 * 4 + 1] <= uVar10) && (uVar10 < puVar3[uVar9 * 4 + 2])) {
        if ((param_1->ExceptionFlags & 0x20) != 0) {
          uVar7 = 0;
          if (uVar1 != 0) {
            do {
              if ((((puVar3[uVar7 * 4 + 1] <= uVar5) && (uVar5 < puVar3[uVar7 * 4 + 2])) &&
                  (puVar3[uVar7 * 4 + 4] == puVar3[uVar9 * 4 + 4])) &&
                 (puVar3[uVar7 * 4 + 3] == puVar3[uVar9 * 4 + 3])) break;
              uVar6 = (int)uVar7 + 1;
              uVar7 = (ulonglong)uVar6;
            } while (uVar6 < uVar1);
          }
          if ((uint)uVar7 != *puVar3) {
            return 1;
          }
        }
        if (puVar3[((ulonglong)uVar8 + 1) * 4] == 0) {
          *(uint *)(param_4 + 9) = uVar8 + 1;
          (*(code *)((ulonglong)puVar3[(ulonglong)uVar8 * 4 + 3] + lVar2))
                    (CONCAT71((int7)((ulonglong)uVar8 * 2 >> 8),1));
        }
        else if ((uVar5 == puVar3[((ulonglong)uVar8 + 1) * 4]) &&
                ((param_1->ExceptionFlags & 0x20) != 0)) {
          return 1;
        }
      }
    }
  }
  return 1;
}


/* Address: 0x180006d04; Evidence: ev_6a9b130bfb6fbd7b1233324e24bf23fcc7467d4f84cc1798881328c47fafbe0c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006d04(longlong *param_1,byte *param_2)

{
  ULONG_PTR UVar1;
  PVOID local_38;
  ULONG_PTR local_30;
  longlong *local_28;
  byte *local_20;
  PVOID local_18;
  
  UVar1 = 0x19930520;
  if ((param_2 != (byte *)0x0) && ((*param_2 & 0x10) != 0)) {
    param_2 = *(byte **)(*(longlong *)(*param_1 + -8) + 0x30);
    (**(code **)(*(longlong *)(*param_1 + -8) + 0x40))();
  }
  local_38 = (PVOID)0x0;
  if (param_2 != (byte *)0x0) {
    local_38 = RtlPcToFileHeader(param_2,&local_38);
    if (((*param_2 & 8) != 0) || (local_38 == (PVOID)0x0)) {
      UVar1 = 0x1994000;
    }
  }
  local_30 = UVar1;
  local_28 = param_1;
  local_20 = param_2;
  local_18 = local_38;
  RaiseException(0xe06d7363,1,4,&local_30);
  return;
}


/* Address: 0x180006dac; Evidence: ev_8a04493bece1f991ec4aa715e725ab0604e36a82f9e2a890fc245b487ec9557a */

int FUN_180006dac(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}


/* Address: 0x180006dc4; Evidence: ev_ae1f98f8caaacfd121bde5cce20cc91b28048f2310731b971ec3558e4594b06a */

void FUN_180006dc4(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_18000c960(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}


/* Address: 0x180006df0; Evidence: ev_11a492b273008e117fd7516343e78f88a69bfb24830b850a4e8063d9d6aedff8 */

/* Library Function - Single Match
    __vcrt_initialize
   
   Library: Visual Studio 2019 Release */

ulonglong __vcrt_initialize(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  undefined4 extraout_var;
  
  uVar2 = __vcrt_initialize_locks();
  if ((char)uVar2 != '\0') {
    uVar1 = __vcrt_initialize_ptd();
    if ((char)uVar1 != '\0') {
      return CONCAT71((int7)(CONCAT44(extraout_var,uVar1) >> 8),1);
    }
    uVar2 = __vcrt_uninitialize_locks();
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x180006e18; Evidence: ev_158b06112c02e91310c836e29f59bcea47e165b8409c802a2d5e3a391ae34f19 */

bool FUN_180006e18(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180006ef4();
  return pvVar1 != (LPVOID)0x0;
}


/* Address: 0x180006e2c; Evidence: ev_412f72181a33cd83ceaac8d016ff4f9ffeb279c80bb0f96f8f5958e66a077eba */

undefined1 FUN_180006e2c(void)

{
  FUN_180006e90();
  return 1;
}


/* Address: 0x180006e3c; Evidence: ev_3b2ca1435e15c6224e34717b5c031d10a1b044f8429682cac86ab540a9eebd89 */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_180007008();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180006e58; Evidence: ev_02f923fd9b98a9820822b24c56a936778bda47761385f42da73d4c2756008508 */

undefined1 FUN_180006e58(void)

{
  FUN_180007008();
  return 1;
}


/* Address: 0x180006e70; Evidence: ev_90f9fd51e6238b0fbf32980a916f15c6d167a4a8599f9ec14548c9f8936ce13e */

void FUN_180006e70(undefined *param_1)

{
  if ((param_1 != (undefined *)0x0) && (param_1 != &DAT_1800221f0)) {
    thunk_FUN_18000c960(param_1);
  }
  return;
}


/* Address: 0x180006e90; Evidence: ev_f860674d6c1941e48af21a7dfed6a0b60ccc5e94f85a0b19afa6f9135324e86f */

void FUN_180006e90(void)

{
  undefined *puVar1;
  
  if (DAT_180021070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180021070);
    __vcrt_FlsSetValue(DAT_180021070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_1800221f0)) {
      thunk_FUN_18000c960(puVar1);
    }
  }
  return;
}


/* Address: 0x180006ed8; Evidence: ev_c51c65dd95238fa53da9100fc0c63855f4405603373578f69bb63d0189c803b9 */

void FUN_180006ed8(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180006ef4();
  if (pvVar1 != (LPVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180006ef4; Evidence: ev_3df564aad13fe26a3e24c3eca1cb74b5102bbee6be4d5164d4c91604fbd22944 */

LPVOID FUN_180006ef4(void)

{
  DWORD dwErrCode;
  int iVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  LPVOID pvVar4;
  
  if (DAT_180021070 == 0xffffffff) {
    pvVar3 = (LPVOID)0x0;
  }
  else {
    dwErrCode = GetLastError();
    pvVar2 = (LPVOID)__vcrt_FlsGetValue(DAT_180021070);
    pvVar4 = (LPVOID)0x0;
    pvVar3 = pvVar4;
    if (((pvVar2 != (LPVOID)0xffffffffffffffff) && (pvVar3 = pvVar2, pvVar2 == (LPVOID)0x0)) &&
       (iVar1 = __vcrt_FlsSetValue(DAT_180021070,(LPVOID)0xffffffffffffffff), pvVar3 = pvVar4,
       iVar1 != 0)) {
      pvVar3 = _calloc_base(1,0x80);
      if ((pvVar3 == (LPVOID)0x0) || (iVar1 = __vcrt_FlsSetValue(DAT_180021070,pvVar3), iVar1 == 0))
      {
        __vcrt_FlsSetValue(DAT_180021070,(LPVOID)0x0);
        pvVar2 = pvVar3;
      }
      else {
        *(undefined4 *)((longlong)pvVar3 + 0x78) = 0xfffffffe;
        pvVar2 = pvVar4;
        pvVar4 = pvVar3;
      }
      thunk_FUN_18000c960(pvVar2);
      pvVar3 = pvVar4;
    }
    SetLastError(dwErrCode);
  }
  return pvVar3;
}


/* Address: 0x180006fc0; Evidence: ev_f757a8b64f83490cc7843613e99159965cc356ea92b56a6c6d88c75935adc0a0 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_180006e70);
  DAT_180021070 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_1800221f0);
    if (iVar2 != 0) {
      _DAT_180022268 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_180007008();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}


/* Address: 0x180007008; Evidence: ev_dbed02c24508e8374adb40eedfa36dabcd392b852fa792542d3f741e51273594 */

undefined1 FUN_180007008(void)

{
  if (DAT_180021070 != -1) {
    __vcrt_FlsFree(DAT_180021070);
    DAT_180021070 = -1;
  }
  return 1;
}


/* Address: 0x180007030; Evidence: ev_56b7644e5029ce9e89293a09d479fea45229a60f732d1a103635e0bef55b5473 */

void FUN_180007030(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + *param_1) == -2) {
    FUN_1800070dc(param_3,(longlong)param_2,*param_2);
  }
  return;
}


/* Address: 0x180007058; Evidence: ev_8cb625950da1c6f300cbda9b492125bc42989d246ecf567779014c81897dff73 */

/* Library Function - Multiple Matches With Same Base Name
    public: static int __cdecl __FrameHandler3::GetUnwindTryBlock(unsigned __int64 * __ptr64,struct
   _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
    int __cdecl __GetUnwindTryBlock(unsigned __int64 * __ptr64,struct _xDISPATCHER_CONTEXT *
   __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Library: Visual Studio */

undefined4 GetUnwindTryBlock(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  longlong *plVar1;
  longlong local_res18 [2];
  
  plVar1 = FUN_180005ee8(param_1,param_2,param_3,local_res18);
  return *(undefined4 *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1);
}


/* Address: 0x180007084; Evidence: ev_3f40f0e4974933d2c309c7d52c8c2e9fab75d09a790480332aa8ee96def7a7a8 */

void FUN_180007084(longlong *param_1,longlong param_2,undefined4 param_3)

{
  *(undefined4 *)((longlong)*(int *)(param_2 + 0x1c) + *param_1) = param_3;
  return;
}


/* Address: 0x180007090; Evidence: ev_9a3cfdb87d8d74ef6e5704833236f433fea1a0325a1b16fd7adfd1fa72b3474a */

/* Library Function - Multiple Matches With Same Base Name
    public: static void __cdecl __FrameHandler3::SetUnwindTryBlock(unsigned __int64 * __ptr64,struct
   _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64,int)
    void __cdecl __SetUnwindTryBlock(unsigned __int64 * __ptr64,struct _xDISPATCHER_CONTEXT *
   __ptr64,struct _s_FuncInfo const * __ptr64,int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void SetUnwindTryBlock(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  longlong *plVar1;
  longlong local_res18 [2];
  
  plVar1 = FUN_180005ee8(param_1,param_2,param_3,local_res18);
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) < param_4) {
    *(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) = param_4;
  }
  return;
}


/* Address: 0x1800070cc; Evidence: ev_88579600edf3ec15a900af58d49404f3cb1f4d752526a3f1d2790db6f09505fb */

void FUN_1800070cc(longlong param_1,ulonglong *param_2)

{
  FUN_1800070dc(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x1800070d4; Evidence: ev_6386fb98a088eaf9ae9ecb08998b36c179cbb75af17c5c4f5797d3d9ea55a40a */

void FUN_1800070d4(longlong param_1,ulonglong *param_2)

{
  FUN_180007144(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x1800070dc; Evidence: ev_9cc67b9d38c9d528721c34e4f23455b20292881d07974ad2a6db11c7c1ac9ac5 */

undefined4 FUN_1800070dc(longlong param_1,longlong param_2,ulonglong param_3)

{
  longlong lVar1;
  uint uVar2;
  ulonglong uVar3;
  longlong lVar4;
  
  if (param_1 != 0) {
    lVar4 = (longlong)*(int *)(param_1 + 0x18);
    lVar1 = *(longlong *)(param_2 + 8);
    if (lVar1 + lVar4 != 0) {
      uVar3 = 0;
      if (*(uint *)(param_1 + 0x14) != 0) {
        do {
          if (param_3 < (ulonglong)(*(int *)(lVar4 + uVar3 * 8 + lVar1) + lVar1)) break;
          uVar2 = (int)uVar3 + 1;
          uVar3 = (ulonglong)uVar2;
        } while (uVar2 < *(uint *)(param_1 + 0x14));
        if ((int)uVar3 != 0) {
          return *(undefined4 *)(lVar1 + (ulonglong)((int)uVar3 - 1) * 8 + 4 + lVar4);
        }
      }
      return 0xffffffff;
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180007144; Evidence: ev_ccfc42fbb3d4183c2201eda5ce26a36b2fef1c6e46dc915840c7be0be7bd3483 */

int FUN_180007144(longlong param_1,longlong param_2,ulonglong param_3)

{
  uint *puVar1;
  uint uVar2;
  int iVar3;
  uint uVar4;
  uint uVar5;
  byte *pbVar6;
  byte *pbVar7;
  
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar4 = 0;
    pbVar6 = (byte *)((longlong)*(int *)(param_1 + 0x10) + *(longlong *)(param_2 + 8));
    uVar5 = 0;
    iVar3 = -1;
    uVar2 = *pbVar6 & 0xf;
    pbVar6 = pbVar6 + -(longlong)(char)(&DAT_180015590)[uVar2];
    puVar1 = (uint *)(pbVar6 + -4);
    if (*puVar1 >> ((&DAT_1800155a0)[uVar2] & 0x1f) != 0) {
      do {
        pbVar7 = pbVar6 + -(longlong)(char)(&DAT_180015590)[*pbVar6 & 0xf];
        uVar4 = uVar4 + (*(uint *)(pbVar7 + -4) >> ((&DAT_1800155a0)[*pbVar6 & 0xf] & 0x1f));
        if (param_3 < (ulonglong)uVar4 + (ulonglong)**(uint **)(param_2 + 0x10) +
                      *(longlong *)(param_2 + 8)) break;
        uVar5 = uVar5 + 1;
        pbVar6 = pbVar7 + -(longlong)(char)(&DAT_180015590)[*pbVar7 & 0xf];
        iVar3 = (*(uint *)(pbVar6 + -4) >> ((&DAT_1800155a0)[*pbVar7 & 0xf] & 0x1f)) - 1;
      } while (uVar5 < *puVar1 >> ((&DAT_1800155a0)[uVar2] & 0x1f));
      if (uVar5 != 0) {
        return iVar3;
      }
      return -1;
    }
  }
  return -1;
}


/* Address: 0x180007234; Evidence: ev_53e95a7c84caa7887f9385bd7566a16d6cf424bea100f6550ce17c1f4dc4cbef */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_180007234(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

{
  int iVar1;
  longlong lVar2;
  undefined1 (*pauVar3) [32];
  ulonglong uVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  
  uVar5 = 0;
  uVar6 = 0;
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180006750();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180006750();
    uVar4 = iVar1 + lVar2;
  }
  if (*(char *)(uVar4 + 0x10) == '\0') {
    return '\0';
  }
  if ((*(int *)(param_3 + 8) == 0) && (-1 < *(int *)param_3)) {
    return '\0';
  }
  if (-1 < *(int *)param_3) {
    param_2 = (undefined1 (*) [32])((longlong)*(int *)(param_3 + 8) + *(longlong *)*param_2);
  }
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_1800221e8 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180006764();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180006764();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_1800073e6;
            }
          }
                    /* WARNING: Subroutine does not return */
          abort();
        }
        if ((*(longlong *)(param_1 + 0x28) == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
          abort();
        }
        iVar1 = *(int *)(param_4 + 0x14);
        pauVar3 = (undefined1 (*) [32])
                  FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_180013df0(param_2,pauVar3,(longlong)iVar1);
        goto LAB_1800073e6;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_180013df0(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_1800073e6;
      lVar2 = *(longlong *)*param_2;
    }
    else {
      lVar2 = *(longlong *)(param_1 + 0x28);
      if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      *(longlong *)*param_2 = lVar2;
    }
  }
  else {
    lVar2 = (*(code *)DAT_1800221e8)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_180006a48(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_1800073e6:
  return (char)uVar6;
}


/* Address: 0x180007428; Evidence: ev_b151f2c6c5a462c90e8b7f65d8c936b6635663607cf93c62fb4b9d17173ceb78 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_180007428(longlong param_1,undefined1 (*param_2) [32],longlong param_3,byte *param_4)

{
  int iVar1;
  longlong lVar2;
  undefined1 (*pauVar3) [32];
  ulonglong uVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  
  uVar5 = 0;
  uVar6 = 0;
  iVar1 = *(int *)(param_3 + 8);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180006750();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 8);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180006750();
    uVar4 = iVar1 + lVar2;
  }
  if (*(char *)(uVar4 + 0x10) == '\0') {
    return '\0';
  }
  if ((*(int *)(param_3 + 0xc) == 0) && (-1 < *(int *)(param_3 + 4))) {
    return '\0';
  }
  if (-1 < *(int *)(param_3 + 4)) {
    param_2 = (undefined1 (*) [32])((ulonglong)*(uint *)(param_3 + 0xc) + *(longlong *)*param_2);
  }
  if ((((*(byte *)(param_3 + 4) & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_1800221e8 == 0))
  {
    if ((*(byte *)(param_3 + 4) & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180006764();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180006764();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_1800075dd;
            }
          }
                    /* WARNING: Subroutine does not return */
          abort();
        }
        if ((*(longlong *)(param_1 + 0x28) == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
          abort();
        }
        iVar1 = *(int *)(param_4 + 0x14);
        pauVar3 = (undefined1 (*) [32])
                  FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_180013df0(param_2,pauVar3,(longlong)iVar1);
        goto LAB_1800075dd;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_180013df0(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_1800075dd;
      lVar2 = *(longlong *)*param_2;
    }
    else {
      lVar2 = *(longlong *)(param_1 + 0x28);
      if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      *(longlong *)*param_2 = lVar2;
    }
  }
  else {
    lVar2 = (*(code *)DAT_1800221e8)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_180006a48(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_1800075dd:
  return (char)uVar6;
}


/* Address: 0x180007620; Evidence: ev_abc23ca02a9afefe55f123e0858dd773fac61eefbddfea6201088feb9ef4d1f7 */

void FUN_180007620(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

{
  char cVar1;
  int iVar2;
  undefined7 extraout_var;
  longlong lVar3;
  longlong lVar4;
  undefined *UNRECOVERED_JUMPTABLE;
  undefined1 (*pauVar5) [32];
  
  UNRECOVERED_JUMPTABLE = (undefined *)0x0;
  pauVar5 = param_2;
  if (-1 < *(int *)param_3) {
    pauVar5 = (undefined1 (*) [32])((longlong)*(int *)(param_3 + 8) + *(longlong *)*param_2);
  }
  cVar1 = FUN_180007234(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006764();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a038(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006764();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a044(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x1800076e0; Evidence: ev_a080c7495b85b9e1218a9028821b050f84e2e5bccb073c12fc5ee71fd2677dad */

void FUN_1800076e0(longlong param_1,undefined1 (*param_2) [32],longlong param_3,byte *param_4)

{
  char cVar1;
  int iVar2;
  undefined7 extraout_var;
  longlong lVar3;
  longlong lVar4;
  undefined *UNRECOVERED_JUMPTABLE;
  undefined1 (*pauVar5) [32];
  
  UNRECOVERED_JUMPTABLE = (undefined *)0x0;
  pauVar5 = param_2;
  if (-1 < *(int *)(param_3 + 4)) {
    pauVar5 = (undefined1 (*) [32])((ulonglong)*(uint *)(param_3 + 0xc) + *(longlong *)*param_2);
  }
  cVar1 = FUN_180007428(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006764();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a038(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180006a48(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006764();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a044(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x1800077a4; Evidence: ev_d1a6ad9d0c032480e97ee5ab1a88ba9080e5be329fd529c7eb89348adea5e455 */

void FUN_1800077a4(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
                  ULONG_PTR param_5,byte *param_6,byte *param_7,int *param_8)

{
  int iVar1;
  int iVar2;
  int iVar3;
  undefined1 (*pauVar4) [32];
  longlong lVar5;
  longlong local_res10;
  ULONG_PTR local_res18;
  byte in_stack_00000060;
  undefined4 in_stack_ffffffffffffffa4;
  
  local_res18 = param_3;
  pauVar4 = (undefined1 (*) [32])FUN_180005ee8(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_180007620(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180006750();
  FUN_1800062b0(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x18000787c; Evidence: ev_d5f82157f10d0db237c39a19eaa3ba6fc89aab37fbf60caf4d055ab37c4a8188 */

void FUN_18000787c(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
                  byte *param_5,longlong param_6,byte *param_7,int *param_8)

{
  int iVar1;
  int iVar2;
  int iVar3;
  undefined1 (*pauVar4) [32];
  longlong lVar5;
  longlong local_res10;
  ULONG_PTR local_res18;
  byte in_stack_00000060;
  
  local_res18 = param_3;
  pauVar4 = (undefined1 (*) [32])FUN_180005fd4(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_1800076e0(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0x10);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180006750();
  FUN_1800063b4(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,iVar2,
                param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x180007954; Evidence: ev_5566d4a3be65c2693da7fcc46be45466c77a4e8b325be81b230b83c407e65455 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180007954(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,uint *param_5
                  ,byte param_6,undefined8 param_7,longlong param_8)

{
  undefined8 *puVar1;
  int iVar2;
  char cVar3;
  bool bVar4;
  int iVar5;
  uint uVar6;
  longlong lVar7;
  ulonglong uVar8;
  undefined8 uVar9;
  longlong *plVar10;
  int *piVar11;
  uint uVar12;
  int iVar13;
  undefined1 auStackY_168 [32];
  int *in_stack_fffffffffffffed0;
  undefined4 uVar14;
  ULONG_PTR local_100;
  longlong local_e0;
  uint local_d8;
  undefined4 uStack_d4;
  longlong local_d0;
  undefined8 local_c8;
  int iStack_c0;
  uint uStack_bc;
  int local_b8;
  uint *local_b0;
  ulonglong local_a8;
  longlong *local_a0;
  undefined8 uStack_98;
  longlong *local_90;
  undefined8 uStack_88;
  uint local_78;
  undefined8 local_70;
  undefined8 uStack_68;
  undefined4 local_60;
  ulonglong local_58;
  
  local_58 = DAT_180021000 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar5 = FUN_180009d8c(param_2,param_4,(longlong)param_5);
  if ((-2 < iVar5) && (iVar5 < (int)param_5[1])) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar7 = FUN_180006ed8();
      if (*(longlong *)(lVar7 + 0x20) == 0) {
        return;
      }
      lVar7 = FUN_180006ed8();
      param_1 = *(int **)(lVar7 + 0x20);
      lVar7 = FUN_180006ed8();
      local_100 = *(ULONG_PTR *)(lVar7 + 0x28);
      FUN_180006790(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_180007e4f;
      lVar7 = FUN_180006ed8();
      if (*(longlong *)(lVar7 + 0x38) != 0) {
        lVar7 = FUN_180006ed8();
        piVar11 = *(int **)(lVar7 + 0x38);
        lVar7 = FUN_180006ed8();
        *(undefined8 *)(lVar7 + 0x38) = 0;
        cVar3 = FUN_180009e28((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          uVar8 = FUN_180009f10(piVar11);
          if ((char)uVar8 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_18000bd2c();
          }
          FUN_1800069a0(param_1);
          FUN_18000924c(&local_c8);
                    /* WARNING: Subroutine does not return */
          FUN_180006d04(&local_c8,&DAT_18001f608);
        }
      }
    }
    uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
    local_a8 = param_4[1];
    local_b0 = param_5;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
      if (param_5[3] != 0) {
        FUN_180005ff8(&local_90,&local_b0,iVar5,param_4,(longlong)param_5);
        uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
        uVar6 = (uint)uStack_88;
        local_a0 = local_90;
        uStack_98 = uStack_88;
        if (uVar6 < local_78) {
          do {
            lVar7 = (longlong)*(int *)(*local_a0 + 0x10) + (ulonglong)uVar6 * 0x14;
            piVar11 = (int *)(lVar7 + local_90[1]);
            local_c8._0_4_ = *piVar11;
            local_c8._4_4_ = piVar11[1];
            iStack_c0 = piVar11[2];
            uStack_bc = piVar11[3];
            local_b8 = *(int *)(lVar7 + 0x10 + local_90[1]);
            if (((int)local_c8 <= iVar5) && (iVar5 <= local_c8._4_4_)) {
              local_d0 = (longlong)local_b8 + param_4[1];
              uVar8 = 0;
              uStack_d4 = 0;
              local_d8 = uStack_bc;
              if (uStack_bc != 0) {
                do {
                  puVar1 = (undefined8 *)(local_d0 + uVar8 * 0x14);
                  local_70 = *puVar1;
                  uStack_68 = puVar1[1];
                  local_60 = *(undefined4 *)(local_d0 + 0x10 + uVar8 * 0x14);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_180006764();
                  piVar11 = (int *)(lVar7 + 4 + (longlong)iVar13);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_180006764();
                  for (iVar13 = *(int *)(lVar7 + iVar13); 0 < iVar13; iVar13 = iVar13 + -1) {
                    iVar2 = *piVar11;
                    lVar7 = FUN_180006764();
                    uVar9 = FUN_180008910((byte *)&local_70,(byte *)(iVar2 + lVar7),
                                          *(byte **)(param_1 + 0xc));
                    if ((int)uVar9 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_1800077a4((ULONG_PTR)param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,
                                    (byte *)&local_70,(byte *)(iVar2 + lVar7),
                                    in_stack_fffffffffffffed0);
                      goto LAB_180007cbf;
                    }
                    piVar11 = piVar11 + 1;
                  }
                  uVar12 = (int)uVar8 + 1;
                  uVar8 = (ulonglong)uVar12;
                } while (uVar12 != local_d8);
              }
            }
LAB_180007cbf:
            uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar6 = uVar6 + 1;
          } while (uVar6 < local_78);
        }
      }
      if ((0x19930520 < (*param_5 & 0x1fffffff)) &&
         (((uVar6 = param_5[8], uVar6 != 0 && (lVar7 = FUN_180006750(), lVar7 + (int)uVar6 != 0)) ||
          (((param_5[9] & 4) != 0 && (bVar4 = FUN_180005e1c(param_4,(longlong)param_5), !bVar4))))))
      {
        if ((param_5[9] & 4) != 0) {
          lVar7 = FUN_180006ed8();
          *(int **)(lVar7 + 0x20) = param_1;
          lVar7 = FUN_180006ed8();
          *(ULONG_PTR *)(lVar7 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_18000bd2c();
        }
        uVar6 = param_5[8];
        if (uVar6 == 0) {
          piVar11 = (int *)0x0;
        }
        else {
          lVar7 = FUN_180006750();
          piVar11 = (int *)((int)uVar6 + lVar7);
        }
        cVar3 = FUN_180009e28((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          plVar10 = FUN_180005ee8(param_2,param_4,(longlong)param_5,&local_e0);
          FUN_1800062b0(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar10,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar14,0xffffffff),0,param_4,param_6);
        }
      }
    }
    else if (param_5[3] != 0) {
      if (param_6 != 0) goto LAB_180007e4f;
      FUN_1800083a4(param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,iVar5);
    }
    lVar7 = FUN_180006ed8();
    if (*(longlong *)(lVar7 + 0x38) == 0) {
      return;
    }
  }
LAB_180007e4f:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180007e58; Evidence: ev_0ebd864eeac29af65ad91b32bb7ac6f0b0d29e4822aaf9a1625576b945ed93f6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180007e58(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,byte *param_5
                  ,char param_6,undefined8 param_7,undefined8 param_8)

{
  int iVar1;
  uint uVar2;
  undefined4 uVar3;
  int iVar4;
  char cVar5;
  byte bVar6;
  int iVar7;
  longlong lVar8;
  ulonglong uVar9;
  undefined8 uVar10;
  uint uVar11;
  byte *pbVar12;
  byte *pbVar13;
  byte *pbVar14;
  int iVar15;
  int *piVar16;
  undefined1 auStackY_1c8 [32];
  int local_160;
  ULONG_PTR local_158;
  longlong local_140;
  undefined8 uStack_138;
  undefined8 local_128;
  longlong *local_120;
  longlong local_118;
  undefined8 uStack_110;
  uint local_100;
  undefined8 local_f8;
  undefined8 uStack_f0;
  undefined8 local_e8;
  undefined8 uStack_e0;
  undefined8 local_d8;
  uint local_d0 [10];
  int local_a8 [6];
  undefined8 local_90;
  undefined8 uStack_88;
  undefined8 local_80;
  undefined8 uStack_78;
  undefined8 local_70;
  ulonglong local_58;
  
  local_58 = DAT_180021000 ^ (ulonglong)auStackY_1c8;
  local_128 = param_8;
  local_120 = param_2;
  iVar7 = FUN_1800070d4((longlong)param_5,param_4);
  if ((int)param_4[9] == 0) {
    lVar8 = FUN_180006ed8();
    if (*(int *)(lVar8 + 0x78) != -2) {
      lVar8 = FUN_180006ed8();
      iVar7 = *(int *)(lVar8 + 0x78);
      lVar8 = FUN_180006ed8();
      *(undefined4 *)(lVar8 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar8 = FUN_180006ed8();
    if (*(int *)(lVar8 + 0x78) != -2) goto LAB_18000839e;
    iVar7 = (int)param_4[9] + -2;
  }
  if (-2 < iVar7) {
    if (*(int *)(param_5 + 8) == 0) {
      uVar11 = 0;
    }
    else {
      uVar11 = *(byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) & 0xf;
      uVar11 = *(uint *)((byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_180015590)[uVar11])) >>
               ((&DAT_1800155a0)[uVar11] & 0x1f);
    }
    if (iVar7 < (int)uVar11) {
      local_158 = param_3;
      if ((((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
          ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
         (*(longlong *)(param_1 + 0xc) == 0)) {
        lVar8 = FUN_180006ed8();
        if (*(longlong *)(lVar8 + 0x20) == 0) {
          return;
        }
        lVar8 = FUN_180006ed8();
        param_1 = *(int **)(lVar8 + 0x20);
        lVar8 = FUN_180006ed8();
        local_158 = *(ULONG_PTR *)(lVar8 + 0x28);
        FUN_180006790(*(undefined8 *)(param_1 + 0xe));
        if ((param_1 == (int *)0x0) ||
           (((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
            (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
             (*(longlong *)(param_1 + 0xc) == 0)))))) goto LAB_18000839e;
        lVar8 = FUN_180006ed8();
        if (*(longlong *)(lVar8 + 0x38) != 0) {
          lVar8 = FUN_180006ed8();
          piVar16 = *(int **)(lVar8 + 0x38);
          lVar8 = FUN_180006ed8();
          *(undefined8 *)(lVar8 + 0x38) = 0;
          cVar5 = FUN_180009e28((longlong)param_1,piVar16);
          if (cVar5 == '\0') {
            uVar9 = FUN_180009f10(piVar16);
            if ((char)uVar9 != '\0') {
              FUN_1800069a0(param_1);
              FUN_18000924c(&local_140);
                    /* WARNING: Subroutine does not return */
              FUN_180006d04(&local_140,&DAT_18001f608);
            }
                    /* WARNING: Subroutine does not return */
            FUN_18000bd2c();
          }
        }
      }
      FUN_18000912c(local_d0,(longlong)param_5,param_4[1]);
      if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
         ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
        if (local_d0[0] != 0) {
          FUN_180006130((undefined4 *)&local_118,(int *)local_d0,iVar7);
          uVar11 = (uint)uStack_110;
          local_140 = local_118;
          uStack_138 = uStack_110;
          if (uVar11 < local_100) {
            do {
              local_140 = *(longlong *)(local_118 + 0x18);
              uStack_138 = *(undefined8 *)(local_118 + 0x20);
              if ((*(int *)(local_118 + 0x18) <= iVar7) && (iVar7 <= *(int *)(local_118 + 0x1c))) {
                FUN_1800090a8((HandlerMap4 *)local_a8,(longlong)&local_140,param_4[1],
                              *(undefined4 *)param_4[2]);
                iVar4 = local_a8[0];
                local_160 = 0;
                if (local_a8[0] != 0) {
                  do {
                    local_f8 = local_90;
                    uStack_f0 = uStack_88;
                    local_d8 = local_70;
                    local_e8 = local_80;
                    uStack_e0 = uStack_78;
                    iVar15 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                    lVar8 = FUN_180006764();
                    piVar16 = (int *)((longlong)iVar15 + lVar8 + 4);
                    iVar15 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                    lVar8 = FUN_180006764();
                    for (iVar15 = *(int *)(lVar8 + iVar15); 0 < iVar15; iVar15 = iVar15 + -1) {
                      iVar1 = *piVar16;
                      lVar8 = FUN_180006764();
                      uVar10 = FUN_180008a30((longlong)&local_f8,(byte *)(iVar1 + lVar8),
                                             *(byte **)(param_1 + 0xc));
                      if ((int)uVar10 != 0) {
                        FUN_18000787c((ULONG_PTR)param_1,local_120,local_158,param_4,param_5,
                                      (longlong)&local_f8,(byte *)(iVar1 + lVar8),(int *)&local_140)
                        ;
                        goto LAB_180008227;
                      }
                      piVar16 = piVar16 + 1;
                    }
                    FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_a8);
                    local_160 = local_160 + 1;
                  } while (local_160 != iVar4);
                }
              }
LAB_180008227:
              pbVar14 = *(byte **)(local_118 + 8);
              uVar11 = uVar11 + 1;
              lVar8 = (longlong)(char)(&DAT_180015590)[*pbVar14 & 0xf];
              bVar6 = (&DAT_1800155a0)[*pbVar14 & 0xf];
              pbVar12 = pbVar14 + -lVar8;
              uVar2 = *(uint *)(pbVar12 + -4);
              *(byte **)(local_118 + 8) = pbVar12;
              *(uint *)(local_118 + 0x18) = uVar2 >> (bVar6 & 0x1f);
              cVar5 = (&DAT_180015590)[*pbVar12 & 0xf];
              pbVar13 = pbVar14 + (-lVar8 - (longlong)cVar5);
              *(uint *)(local_118 + 0x1c) =
                   *(uint *)(pbVar13 + -4) >> ((&DAT_1800155a0)[*pbVar12 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar13;
              pbVar14 = pbVar14 + ((-(longlong)cVar5 -
                                   (longlong)(char)(&DAT_180015590)[*pbVar13 & 0xf]) - lVar8);
              *(uint *)(local_118 + 0x20) =
                   *(uint *)(pbVar14 + -4) >> ((&DAT_1800155a0)[*pbVar13 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar14;
              uVar3 = *(undefined4 *)pbVar14;
              *(byte **)(local_118 + 8) = pbVar14 + 4;
              *(undefined4 *)(local_118 + 0x24) = uVar3;
            } while (uVar11 < local_100);
          }
        }
        if (((*param_5 & 0x40) != 0) && (bVar6 = FUN_180005e48(param_4,param_5), bVar6 == 0)) {
          lVar8 = FUN_180006ed8();
          *(int **)(lVar8 + 0x20) = param_1;
          lVar8 = FUN_180006ed8();
          *(ULONG_PTR *)(lVar8 + 0x28) = local_158;
                    /* WARNING: Subroutine does not return */
          FUN_18000bd2c();
        }
      }
      else if (local_d0[0] != 0) {
        if (param_6 != '\0') goto LAB_18000839e;
        FUN_180008608(param_1,param_2,local_158,param_4,param_5,iVar7);
      }
      lVar8 = FUN_180006ed8();
      if (*(longlong *)(lVar8 + 0x38) == 0) {
        return;
      }
    }
  }
LAB_18000839e:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800083a4; Evidence: ev_0ea7c2427058943f4316b8c02edbefe18acb3be57467adc8c5e6e17848b88995 */

void FUN_1800083a4(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
                  ULONG_PTR param_5,int param_6)

{
  int iVar1;
  uint uVar2;
  longlong lVar3;
  PVOID pvVar4;
  byte *pbVar5;
  ULONG_PTR local_98;
  ulonglong local_90;
  longlong *local_88;
  undefined8 uStack_80;
  undefined1 local_78 [16];
  int local_68;
  longlong *local_60;
  undefined8 uStack_58;
  uint local_48;
  
  if (*param_1 != -0x7ffffffd) {
    lVar3 = FUN_180006ed8();
    if (*(longlong *)(lVar3 + 0x10) != 0) {
      pvVar4 = EncodePointer((PVOID)0x0);
      lVar3 = FUN_180006ed8();
      if ((((*(PVOID *)(lVar3 + 0x10) != pvVar4) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar1 = FUN_180005be4(param_1,param_2,param_3), iVar1 != 0)
         ) {
        return;
      }
    }
    local_90 = param_4[1];
    local_98 = param_5;
    if (*(int *)(param_5 + 0xc) == 0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    FUN_180005ff8(&local_60,&local_98,param_6,param_4,param_5);
    uVar2 = (uint)uStack_58;
    local_88 = local_60;
    uStack_80 = uStack_58;
    if (uVar2 < local_48) {
      do {
        lVar3 = (longlong)*(int *)(*local_88 + 0x10) + (ulonglong)uVar2 * 0x14;
        local_78 = *(undefined1 (*) [16])(lVar3 + local_60[1]);
        local_68 = *(int *)(lVar3 + 0x10 + local_60[1]);
        if ((local_78._0_4_ <= param_6) && (param_6 <= local_78._4_4_)) {
          pbVar5 = (byte *)((param_4[1] - 0x14) +
                           (longlong)local_68 + (local_78._8_8_ >> 0x20) * 0x14);
          iVar1 = *(int *)(pbVar5 + 4);
          if ((iVar1 != 0) && (lVar3 = FUN_180006750(), lVar3 + iVar1 != 0)) {
            iVar1 = *(int *)(pbVar5 + 4);
            if (iVar1 == 0) {
              lVar3 = 0;
            }
            else {
              lVar3 = FUN_180006750();
              lVar3 = lVar3 + iVar1;
            }
            if (*(char *)(lVar3 + 0x10) != '\0') goto LAB_1800085cd;
          }
          if ((*pbVar5 & 0x40) == 0) {
            FUN_1800077a4((ULONG_PTR)param_1,param_2,param_3,param_4,param_5,pbVar5,(byte *)0x0,
                          (int *)local_78);
          }
        }
LAB_1800085cd:
        uVar2 = uVar2 + 1;
      } while (uVar2 < local_48);
    }
  }
  return;
}


/* Address: 0x180008608; Evidence: ev_8c74829c0c7bb646f025ae55db56debc4e44a28fda8671c2c4c39c85e9d9675d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180008608(int *param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
                  byte *param_5,int param_6)

{
  byte bVar1;
  char cVar2;
  uint uVar3;
  int iVar4;
  longlong lVar5;
  PVOID pvVar6;
  longlong lVar7;
  byte *pbVar8;
  byte *pbVar9;
  ulonglong uVar10;
  byte *pbVar11;
  undefined1 auStackY_178 [32];
  uint local_118;
  undefined8 local_100;
  undefined8 uStack_f8;
  longlong *local_f0;
  longlong local_e8;
  uint uStack_e0;
  uint local_d0;
  int local_c8 [2];
  undefined8 local_c0;
  undefined8 local_b8;
  undefined1 local_b0 [4];
  byte local_ac;
  int local_a8;
  uint local_78 [10];
  ulonglong local_50;
  
  local_50 = DAT_180021000 ^ (ulonglong)auStackY_178;
  if (*param_1 != -0x7ffffffd) {
    local_f0 = param_2;
    lVar5 = FUN_180006ed8();
    if (*(longlong *)(lVar5 + 0x10) != 0) {
      pvVar6 = EncodePointer((PVOID)0x0);
      lVar5 = FUN_180006ed8();
      if ((((*(PVOID *)(lVar5 + 0x10) != pvVar6) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar4 = FUN_180005c38(param_1,param_2,param_3), iVar4 != 0)
         ) {
        return;
      }
    }
    FUN_18000912c(local_78,(longlong)param_5,param_4[1]);
    if (local_78[0] == 0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    FUN_180006130((undefined4 *)&local_e8,(int *)local_78,param_6);
    local_118 = uStack_e0;
    if (uStack_e0 < local_d0) {
      do {
        local_100 = *(undefined8 *)(local_e8 + 0x18);
        uStack_f8 = *(undefined8 *)(local_e8 + 0x20);
        if ((*(int *)(local_e8 + 0x18) <= param_6) && (param_6 <= *(int *)(local_e8 + 0x1c))) {
          FUN_1800090a8((HandlerMap4 *)local_c8,(longlong)&local_100,param_4[1],
                        *(undefined4 *)param_4[2]);
          local_c0 = local_b8;
          FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_c8);
          iVar4 = local_c8[0];
          local_c0 = local_b8;
          FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_c8);
          uVar10 = (ulonglong)(iVar4 - 1U);
          if (iVar4 - 1U != 0) {
            do {
              FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_c8);
              uVar10 = uVar10 - 1;
            } while (uVar10 != 0);
          }
          lVar5 = (longlong)local_a8;
          if ((local_a8 != 0) && (lVar7 = FUN_180006750(), lVar7 + lVar5 != 0)) {
            lVar5 = (longlong)local_a8;
            if (local_a8 == 0) {
              lVar7 = 0;
            }
            else {
              lVar7 = FUN_180006750();
              lVar7 = lVar7 + lVar5;
            }
            if (*(char *)(lVar7 + 0x10) != '\0') goto LAB_18000883c;
          }
          if ((local_ac & 0x40) == 0) {
            FUN_18000787c((ULONG_PTR)param_1,local_f0,param_3,param_4,param_5,(longlong)local_b0,
                          (byte *)0x0,(int *)&local_100);
          }
        }
LAB_18000883c:
        pbVar11 = *(byte **)(local_e8 + 8);
        lVar5 = (longlong)(char)(&DAT_180015590)[*pbVar11 & 0xf];
        bVar1 = (&DAT_1800155a0)[*pbVar11 & 0xf];
        pbVar8 = pbVar11 + -lVar5;
        uVar3 = *(uint *)(pbVar8 + -4);
        *(byte **)(local_e8 + 8) = pbVar8;
        *(uint *)(local_e8 + 0x18) = uVar3 >> (bVar1 & 0x1f);
        cVar2 = (&DAT_180015590)[*pbVar8 & 0xf];
        pbVar9 = pbVar11 + (-lVar5 - (longlong)cVar2);
        *(uint *)(local_e8 + 0x1c) =
             *(uint *)(pbVar9 + -4) >> ((&DAT_1800155a0)[*pbVar8 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar9;
        pbVar11 = pbVar11 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_180015590)[*pbVar9 & 0xf]) -
                            lVar5);
        *(uint *)(local_e8 + 0x20) =
             *(uint *)(pbVar11 + -4) >> ((&DAT_1800155a0)[*pbVar9 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar11;
        *(undefined4 *)(local_e8 + 0x24) = *(undefined4 *)pbVar11;
        local_118 = local_118 + 1;
        *(byte **)(local_e8 + 8) = pbVar11 + 4;
      } while (local_118 < local_d0);
    }
  }
  return;
}


/* Address: 0x180008910; Evidence: ev_650b9842fbaf1c0b4725eefcaef33b080fdf805c5b14eaba30cea3f057558b37 */

undefined8 FUN_180008910(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_180006750(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_180006750();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_180006750();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_180006764();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_180006750();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_180006764();
        iVar1 = strcmp((char *)(lVar4 + 0x10),(char *)((longlong)iVar1 + 0x10 + lVar2));
        if (iVar1 != 0) {
          return 0;
        }
      }
      if (((*param_2 & 2) != 0) && ((*param_1 & 8) == 0)) {
        return 0;
      }
      if (((*param_3 & 1) != 0) && ((*param_1 & 1) == 0)) {
        return 0;
      }
      if (((*param_3 & 4) != 0) && ((*param_1 & 4) == 0)) {
        return 0;
      }
      if (((*param_3 & 2) != 0) && ((*param_1 & 2) == 0)) {
        return 0;
      }
      return 1;
    }
  }
  return 1;
}


/* Address: 0x180008a30; Evidence: ev_cacb4c940a1de3f1e94770d434ba776686f838fbb29ab91053a90249791516c9 */

undefined8 FUN_180008a30(longlong param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  byte *pbVar5;
  
  iVar1 = *(int *)(param_1 + 8);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_180006750(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 8);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_180006750();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') &&
       (((*(byte *)(param_1 + 4) & 0x80) == 0 || ((*param_2 & 0x10) == 0)))) {
      iVar1 = *(int *)(param_1 + 8);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_180006750();
        lVar2 = iVar1 + lVar2;
      }
      lVar3 = FUN_180006764();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 8);
        if (iVar1 != 0) {
          lVar4 = FUN_180006750();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_180006764();
        iVar1 = strcmp((char *)(lVar4 + 0x10),(char *)((longlong)iVar1 + 0x10 + lVar2));
        if (iVar1 != 0) {
          return 0;
        }
      }
      pbVar5 = (byte *)(param_1 + 4);
      if (((*param_2 & 2) != 0) && ((*pbVar5 & 8) == 0)) {
        return 0;
      }
      if (((*param_3 & 1) != 0) && ((*pbVar5 & 1) == 0)) {
        return 0;
      }
      if (((*param_3 & 4) != 0) && ((*pbVar5 & 4) == 0)) {
        return 0;
      }
      if (((*param_3 & 2) != 0) && ((*(byte *)(param_1 + 4) & 2) == 0)) {
        return 0;
      }
      return 1;
    }
  }
  return 1;
}


/* Address: 0x180008b70; Evidence: ev_6a414656c21353f210992999a48860314b2fe2d27f20332e670bf9fea9517f75 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180008b70(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
             _s_FuncInfo *param_5,int param_6,longlong param_7,byte param_8)

{
  int iVar1;
  longlong lVar2;
  undefined8 uVar3;
  code *pcVar4;
  bool bVar5;
  undefined8 in_stack_ffffffffffffffc8;
  undefined4 uVar6;
  undefined8 in_stack_ffffffffffffffd0;
  undefined4 uVar7;
  
  uVar6 = (undefined4)((ulonglong)in_stack_ffffffffffffffc8 >> 0x20);
  uVar7 = (undefined4)((ulonglong)in_stack_ffffffffffffffd0 >> 0x20);
  __except_validate_context_record(param_3);
  lVar2 = FUN_180006ed8();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_180008bde;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_180008bde:
      if (bVar5) goto LAB_180008bf5;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_180008bf5:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180006750(), lVar2 + iVar1 == 0)))) {
      if ((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930522) {
        return 1;
      }
      if ((param_5->EHFlags & 4) == 0) {
        return 1;
      }
    }
    if (((*param_1 == -0x1f928c9d) && (2 < (uint)param_1[6])) &&
       ((0x19930522 < (uint)param_1[8] &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_180006764();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180007954(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
                  &param_5->magicNumber_and_bbtFlags,param_8,CONCAT44(uVar6,param_6),param_7);
    return 1;
  }
  if (param_5->maxState == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_180008c81:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_1800070dc((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_180008d9d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180008c81;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_180008d9d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_1800098f4((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x180008da4; Evidence: ev_224f9337f04ba331214bbdfe658c85950ccc8f46cc8099aa17cb022cef45b6ec */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180008da4(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
             FuncInfo4 *param_5,int param_6,undefined8 param_7,byte param_8)

{
  int iVar1;
  longlong lVar2;
  undefined8 uVar3;
  uint uVar4;
  uint uVar5;
  code *pcVar6;
  undefined8 in_stack_ffffffffffffff98;
  undefined4 uVar7;
  undefined8 in_stack_ffffffffffffffa0;
  undefined4 uVar8;
  uint local_48 [12];
  
  uVar7 = (undefined4)((ulonglong)in_stack_ffffffffffffff98 >> 0x20);
  uVar8 = (undefined4)((ulonglong)in_stack_ffffffffffffffa0 >> 0x20);
  __except_validate_context_record(param_3);
  lVar2 = FUN_180006ed8();
  uVar5 = 0;
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        if (*(longlong *)(param_1 + 0x18) == 0x19930520) goto LAB_180008e26;
        goto LAB_180008e18;
      }
    }
    else {
LAB_180008e18:
      if (*param_1 == -0x7fffffda) goto LAB_180008e26;
    }
    if (((byte)*param_5 & 0x20) != 0) {
      return 1;
    }
  }
LAB_180008e26:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    FUN_18000912c(local_48,(longlong)param_5,*(longlong *)(param_4 + 8));
    if ((local_48[0] == 0) && (((byte)*param_5 & 0x40) == 0)) {
      return 1;
    }
    if ((*param_1 == -0x1f928c9d) &&
       (((2 < (uint)param_1[6] && (0x19930522 < (uint)param_1[8])) &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_180006764();
      pcVar6 = (code *)(lVar2 + iVar1);
      if (pcVar6 != (code *)0x0) {
        uVar3 = (*pcVar6)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar8,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180007e58(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,(byte *)param_5,param_8,
                  CONCAT44(uVar7,param_6),param_7);
    return 1;
  }
  if (*(int *)(param_5 + 8) == 0) {
    return 1;
  }
  uVar4 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
  if (*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
               (-4 - (longlong)(char)(&DAT_180015590)[uVar4])) >> ((&DAT_1800155a0)[uVar4] & 0x1f)
      == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_180008f4b:
    __FrameHandler4::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_180007144((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if (iVar1 < -1) {
LAB_18000904c:
                    /* WARNING: Subroutine does not return */
        abort();
      }
      if (*(int *)(param_5 + 8) != 0) {
        uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
        uVar5 = *(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                         (-4 - (longlong)(char)(&DAT_180015590)[uVar5])) >>
                ((&DAT_1800155a0)[uVar5] & 0x1f);
      }
      if ((int)uVar5 <= iVar1) goto LAB_18000904c;
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180008f4b;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) ||
         (uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf,
         (int)(*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_180015590)[uVar5])) >>
              ((&DAT_1800155a0)[uVar5] & 0x1f)) <= iVar1)) goto LAB_18000904c;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180009a80((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x180009054; Evidence: ev_30eb5bcaea80caf7847450008511771f7fb19d2276f5d045945f6696bdf5ee21 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
thunk_FUN_180008b70(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
                   _s_FuncInfo *param_5,int param_6,longlong param_7,byte param_8)

{
  int iVar1;
  longlong lVar2;
  undefined8 uVar3;
  code *pcVar4;
  bool bVar5;
  undefined4 uVar6;
  undefined8 in_stack_ffffffffffffffc8;
  undefined4 uVar7;
  undefined8 in_stack_ffffffffffffffd0;
  
  uVar6 = (undefined4)((ulonglong)in_stack_ffffffffffffffc8 >> 0x20);
  uVar7 = (undefined4)((ulonglong)in_stack_ffffffffffffffd0 >> 0x20);
  __except_validate_context_record(param_3);
  lVar2 = FUN_180006ed8();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_180008bde;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_180008bde:
      if (bVar5) goto LAB_180008bf5;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_180008bf5:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180006750(), lVar2 + iVar1 == 0)))) {
      if ((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930522) {
        return 1;
      }
      if ((param_5->EHFlags & 4) == 0) {
        return 1;
      }
    }
    if (((*param_1 == -0x1f928c9d) && (2 < (uint)param_1[6])) &&
       ((0x19930522 < (uint)param_1[8] &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_180006764();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180007954(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
                  &param_5->magicNumber_and_bbtFlags,param_8,CONCAT44(uVar6,param_6),param_7);
    return 1;
  }
  if (param_5->maxState == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_180008c81:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_1800070dc((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_180008d9d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180008c81;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_180008d9d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_1800098f4((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000905c; Evidence: ev_a1b581097ab1ddd7fc5778f0ac0298e6fecbae469984ba808178d40d1ed0f53b */

ulonglong FUN_18000905c(int *param_1,__uint64 *param_2,ULONG_PTR param_3,
                       _xDISPATCHER_CONTEXT *param_4,FuncInfo4 *param_5,int param_6,
                       undefined8 param_7,byte param_8)

{
  ulonglong uVar1;
  longlong lVar2;
  
  uVar1 = FUN_180008da4(param_1,param_2,param_3,param_4,param_5,param_6,param_7,param_8);
  lVar2 = FUN_180006ed8();
  *(undefined4 *)(lVar2 + 0x78) = 0xfffffffe;
  return uVar1 & 0xffffffff;
}


/* Address: 0x1800090a8; Evidence: ev_6480bdf89b39a2d19ee962f8c636ef6e1fd48df7981d04b7636d92176f4d0c59 */

HandlerMap4 *
FUN_1800090a8(HandlerMap4 *param_1,longlong param_2,longlong param_3,undefined4 param_4)

{
  byte *pbVar1;
  longlong lVar2;
  
  *(undefined8 *)(param_1 + 8) = 0;
  *(undefined8 *)(param_1 + 0x10) = 0;
  param_1[0x18] = (HandlerMap4)0x0;
  *(undefined8 *)(param_1 + 0x1c) = 0;
  *(undefined8 *)(param_1 + 0x24) = 0;
  *(undefined8 *)(param_1 + 0x30) = 0;
  *(undefined8 *)(param_1 + 0x38) = 0;
  *(longlong *)(param_1 + 0x40) = param_3;
  *(undefined4 *)(param_1 + 0x48) = param_4;
  if (*(int *)(param_2 + 0xc) == 0) {
    *(undefined4 *)param_1 = 0;
  }
  else {
    pbVar1 = (byte *)(*(int *)(param_2 + 0xc) + param_3);
    *(byte **)(param_1 + 8) = pbVar1;
    lVar2 = (longlong)pbVar1 - (longlong)(char)(&DAT_180015590)[*pbVar1 & 0xf];
    *(uint *)param_1 = *(uint *)(lVar2 + -4) >> ((&DAT_1800155a0)[*pbVar1 & 0xf] & 0x1f);
    *(longlong *)(param_1 + 8) = lVar2;
    *(longlong *)(param_1 + 0x10) = lVar2;
    FH4::HandlerMap4::DecompHandler(param_1);
  }
  return param_1;
}


/* Address: 0x18000912c; Evidence: ev_c1055bac1054cdc01b8fdd33605b052ed896946d96e7b5886024afd7bce8abb0 */

uint * FUN_18000912c(uint *param_1,longlong param_2,longlong param_3)

{
  byte bVar1;
  uint uVar2;
  byte *pbVar3;
  uint *puVar4;
  
  param_1[2] = 0;
  param_1[3] = 0;
  param_1[4] = 0;
  param_1[5] = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0;
  if (*(int *)(param_2 + 0xc) == 0) {
    *param_1 = 0;
  }
  else {
    pbVar3 = (byte *)(*(int *)(param_2 + 0xc) + param_3);
    *(byte **)(param_1 + 2) = pbVar3;
    bVar1 = (&DAT_1800155a0)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_180015590)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    *param_1 = uVar2 >> (bVar1 & 0x1f);
    *(byte **)(param_1 + 4) = pbVar3;
    bVar1 = (&DAT_1800155a0)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_180015590)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    param_1[6] = uVar2 >> (bVar1 & 0x1f);
    bVar1 = (&DAT_1800155a0)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_180015590)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    param_1[7] = uVar2 >> (bVar1 & 0x1f);
    puVar4 = (uint *)(pbVar3 + -(longlong)(char)(&DAT_180015590)[*pbVar3 & 0xf]);
    param_1[8] = puVar4[-1] >> ((&DAT_1800155a0)[*pbVar3 & 0xf] & 0x1f);
    *(uint **)(param_1 + 2) = puVar4;
    uVar2 = *puVar4;
    *(uint **)(param_1 + 2) = puVar4 + 1;
    param_1[9] = uVar2;
  }
  return param_1;
}


/* Address: 0x180009210; Evidence: ev_f904a2e67429707e7d823b3871e65f1fbf458da92933ceec51640d7bc89dca35 */

undefined8 * FUN_180009210(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_1800068f8((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x18000924c; Evidence: ev_af4315a60a8ce94e664735246acc43610e1d78fbc6847303ba77b375674f56df */

undefined8 * FUN_18000924c(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x180009270; Evidence: ev_70eeee55248ab65bc3bd37fbcdec014681482e2b09ec50228f7a9c47fb613763 */

undefined8 FUN_180009270(longlong param_1)

{
  undefined8 uVar1;
  undefined8 uVar2;
  int *piVar3;
  longlong *plVar4;
  int iVar5;
  longlong lVar6;
  longlong lVar7;
  longlong lVar8;
  undefined8 *puVar9;
  undefined8 uVar10;
  undefined8 local_48 [2];
  
  lVar6 = FUN_180006ed8();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180006ed8();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_180006ed8();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_180006ed8();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_180006ed8();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180006ed8();
  }
  uVar10 = _CallSettingFrame();
  FUN_1800066fc((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_1800069a0(piVar3);
  }
  lVar8 = FUN_180006ed8();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_180006ed8();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}


/* Address: 0x180009460; Evidence: ev_a32f36a3c6734324d42ba7921bc9fc36f767c6117b25ed758ecabd233edf6fcb */

longlong FUN_180009460(longlong param_1)

{
  undefined4 uVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  int *piVar4;
  int iVar5;
  longlong lVar6;
  longlong lVar7;
  undefined8 *puVar8;
  longlong local_58 [4];
  
  lVar6 = FUN_180006ed8();
  uVar2 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180006ed8();
  uVar3 = *(undefined8 *)(lVar6 + 0x20);
  piVar4 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x40);
  local_58[0] = *(longlong *)(param_1 + 0x48);
  local_58[1] = *(undefined8 *)(param_1 + 0x68);
  uVar1 = *(undefined4 *)(param_1 + 0x38);
  __except_validate_context_record(lVar6);
  lVar7 = FUN_180006ed8();
  *(int **)(lVar7 + 0x20) = piVar4;
  lVar7 = FUN_180006ed8();
  *(longlong *)(lVar7 + 0x28) = lVar6;
  lVar6 = FUN_180006ed8();
  puVar8 = _CreateFrameInfo(local_58 + 2,*(undefined8 *)(*(longlong *)(lVar6 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180006ed8();
  }
  lVar6 = FUN_18000a660();
  if ((lVar6 < 2) && (lVar6 = local_58[lVar6], lVar6 == 0)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_18000a690();
  FUN_1800066fc((longlong)puVar8);
  if ((((*piVar4 == -0x1f928c9d) && (piVar4[6] == 4)) &&
      ((piVar4[8] == 0x19930520 || (piVar4[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar4 + 10)), iVar5 != 0)) {
    FUN_1800069a0(piVar4);
  }
  lVar7 = FUN_180006ed8();
  *(undefined8 *)(lVar7 + 0x20) = uVar3;
  lVar7 = FUN_180006ed8();
  *(undefined8 *)(lVar7 + 0x28) = uVar2;
  lVar7 = FUN_180006ed8();
  *(undefined4 *)(lVar7 + 0x78) = uVar1;
  lVar7 = FUN_180006ed8();
  *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
  return lVar6;
}


/* Address: 0x1800096a4; Evidence: ev_b8a32b8aca58c989720978b72b505833d45dd856aafee2acc1ccbb7731870586 */

/* Library Function - Single Match
    private: void __cdecl FH4::HandlerMap4::DecompHandler(void) __ptr64
   
   Library: Visual Studio 2019 Release */

void __thiscall FH4::HandlerMap4::DecompHandler(HandlerMap4 *this)

{
  HandlerMap4 HVar1;
  HandlerMap4 HVar2;
  undefined4 uVar3;
  int iVar4;
  uint uVar5;
  byte bVar6;
  ulonglong uVar7;
  HandlerMap4 *pHVar8;
  HandlerMap4 *pHVar9;
  
  this[0x18] = (HandlerMap4)0x0;
  *(undefined8 *)(this + 0x1c) = 0;
  *(undefined8 *)(this + 0x24) = 0;
  *(undefined8 *)(this + 0x30) = 0;
  *(undefined8 *)(this + 0x38) = 0;
  HVar1 = **(HandlerMap4 **)(this + 8);
  pHVar8 = *(HandlerMap4 **)(this + 8) + 1;
  this[0x18] = HVar1;
  *(HandlerMap4 **)(this + 8) = pHVar8;
  if (((byte)HVar1 & 1) != 0) {
    HVar2 = *pHVar8;
    pHVar8 = pHVar8 + -(longlong)(char)(&DAT_180015590)[(byte)HVar2 & 0xf];
    *(uint *)(this + 0x1c) = *(uint *)(pHVar8 + -4) >> ((&DAT_1800155a0)[(byte)HVar2 & 0xf] & 0x1f);
    *(HandlerMap4 **)(this + 8) = pHVar8;
  }
  if (((byte)HVar1 & 2) != 0) {
    uVar3 = *(undefined4 *)pHVar8;
    pHVar8 = pHVar8 + 4;
    *(HandlerMap4 **)(this + 8) = pHVar8;
    *(undefined4 *)(this + 0x20) = uVar3;
  }
  if (((byte)HVar1 & 4) != 0) {
    HVar2 = *pHVar8;
    pHVar8 = pHVar8 + -(longlong)(char)(&DAT_180015590)[(byte)HVar2 & 0xf];
    *(uint *)(this + 0x24) = *(uint *)(pHVar8 + -4) >> ((&DAT_1800155a0)[(byte)HVar2 & 0xf] & 0x1f);
    *(HandlerMap4 **)(this + 8) = pHVar8;
  }
  pHVar9 = pHVar8 + 4;
  *(undefined4 *)(this + 0x28) = *(undefined4 *)pHVar8;
  bVar6 = (byte)HVar1 & 0x30;
  *(HandlerMap4 **)(this + 8) = pHVar9;
  if (((byte)HVar1 & 8) == 0) {
    if (bVar6 == 0x10) {
      bVar6 = (&DAT_1800155a0)[(byte)*pHVar9 & 0xf];
      uVar5 = *(uint *)(((longlong)pHVar9 - (longlong)(char)(&DAT_180015590)[(byte)*pHVar9 & 0xf]) +
                       -4);
      *(longlong *)(this + 8) =
           (longlong)pHVar9 - (longlong)(char)(&DAT_180015590)[(byte)*pHVar9 & 0xf];
      *(ulonglong *)(this + 0x30) = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
      return;
    }
    if (bVar6 != 0x20) {
      return;
    }
    bVar6 = (&DAT_1800155a0)[(byte)*pHVar9 & 0xf];
    pHVar9 = pHVar9 + -(longlong)(char)(&DAT_180015590)[(byte)*pHVar9 & 0xf];
    uVar5 = *(uint *)(pHVar9 + -4);
    *(HandlerMap4 **)(this + 8) = pHVar9;
    *(ulonglong *)(this + 0x30) = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
    bVar6 = (&DAT_1800155a0)[(byte)*pHVar9 & 0xf];
    uVar5 = *(uint *)(((longlong)pHVar9 - (longlong)(char)(&DAT_180015590)[(byte)*pHVar9 & 0xf]) +
                     -4);
    *(longlong *)(this + 8) =
         (longlong)pHVar9 - (longlong)(char)(&DAT_180015590)[(byte)*pHVar9 & 0xf];
    uVar7 = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
  }
  else {
    if (bVar6 == 0x10) {
      iVar4 = *(int *)pHVar9;
      *(HandlerMap4 **)(this + 8) = pHVar8 + 8;
      *(longlong *)(this + 0x30) = (longlong)iVar4;
      return;
    }
    if (bVar6 != 0x20) {
      return;
    }
    iVar4 = *(int *)pHVar9;
    *(HandlerMap4 **)(this + 8) = pHVar8 + 8;
    *(longlong *)(this + 0x30) = (longlong)iVar4;
    uVar7 = (ulonglong)*(int *)(pHVar8 + 8);
    *(HandlerMap4 **)(this + 8) = pHVar8 + 0xc;
  }
  *(ulonglong *)(this + 0x38) = uVar7;
  return;
}


/* Address: 0x18000982c; Evidence: ev_dca7a46fc546b6374f2da7e13676313a26e76f7058e00ad15303197c68898b30 */

undefined8 FUN_18000982c(undefined8 *param_1,longlong param_2,undefined4 *param_3)

{
  int *piVar1;
  longlong lVar2;
  
  piVar1 = (int *)*param_1;
  *param_3 = 0;
  if (*piVar1 == -0x1f928c9d) {
    if ((piVar1[6] == 4) &&
       (((piVar1[8] == 0x19930520 || (piVar1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(piVar1 + 10) == *(longlong *)(param_2 + 0x28))))) {
      *param_3 = 1;
    }
    if ((((*piVar1 == -0x1f928c9d) && (piVar1[6] == 4)) &&
        ((piVar1[8] == 0x19930520 || (piVar1[8] + 0xe66cfadfU < 2)))) &&
       (*(longlong *)(piVar1 + 0xc) == 0)) {
      lVar2 = FUN_180006ed8();
      *(undefined4 *)(lVar2 + 0x40) = 1;
      *param_3 = 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x1800098c4; Evidence: ev_984ed6156935919a60f712d2e0349285e904e442278646e403ff06d8d90a50eb */

/* Library Function - Single Match
    int __cdecl ExFilterRethrowFH4(struct _EXCEPTION_POINTERS * __ptr64,struct EHExceptionRecord *
   __ptr64,int,int * __ptr64)
   
   Library: Visual Studio 2019 Release */

int __cdecl
ExFilterRethrowFH4(_EXCEPTION_POINTERS *param_1,EHExceptionRecord *param_2,int param_3,int *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000982c(&param_1->ExceptionRecord,(longlong)param_2,param_4);
  if ((int)uVar1 == 0) {
    lVar2 = FUN_180006ed8();
    *(int *)(lVar2 + 0x78) = param_3;
  }
  return (int)uVar1;
}


/* Address: 0x1800098f4; Evidence: ev_8bdb18495bb861ced79f42a26b353335ef3f13909b9b434d54043ede9fbfb5b0 */

void FUN_1800098f4(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180006750();
  iVar2 = FUN_180007030(param_1,param_2,param_3);
  lVar4 = FUN_180006ed8();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180006750();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180006750();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180006750();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180006750();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180007084(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180006750();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180006750();
        FUN_180006750();
      }
      _CallSettingFrame();
      FUN_180006778(uVar3);
    }
  }
  lVar4 = FUN_180006ed8();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180006ed8();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180007084(param_1,param_3,iVar2);
  return;
}


/* Address: 0x180009a80; Evidence: ev_dab8d2108c970f0a56484e2f1de9e2f51d56a633bf572052afe0d2b5b4819ec3 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180009a80(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  ulonglong *puVar1;
  int iVar2;
  int iVar3;
  UWMap4 *pUVar4;
  byte *pbVar5;
  int iVar6;
  longlong lVar7;
  uint uVar8;
  ulonglong *puVar9;
  longlong lVar10;
  undefined1 auStackY_138 [32];
  UWMap4 *local_108;
  byte *pbStack_100;
  int local_f8;
  int local_f4;
  int local_f0;
  uint *local_e8;
  byte *local_e0;
  longlong *local_d8;
  undefined8 local_d0;
  ulonglong *local_c8;
  longlong *local_c0;
  ulonglong *local_b8;
  uint *local_b0;
  byte *local_a8;
  UWMap4 *local_98;
  byte *pbStack_90;
  undefined4 local_88;
  int iStack_84;
  int iStack_80;
  uint uStack_7c;
  uint local_78 [2];
  byte *local_70;
  undefined8 local_68;
  undefined8 uStack_60;
  ulonglong local_58;
  
  local_58 = DAT_180021000 ^ (ulonglong)auStackY_138;
  local_f0 = param_4;
  local_d8 = param_1;
  local_c0 = param_1;
  local_d0 = FUN_180006750();
  iVar6 = FUN_1800070d4(param_3,param_2);
  puVar1 = param_2 + 9;
  local_c8 = puVar1;
  if ((int)*puVar1 == 0) {
    lVar7 = FUN_180006ed8();
    if (*(int *)(lVar7 + 0x78) != -2) {
      lVar7 = FUN_180006ed8();
      iVar6 = *(int *)(lVar7 + 0x78);
      lVar7 = FUN_180006ed8();
      *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar7 = FUN_180006ed8();
    if (*(int *)(lVar7 + 0x78) != -2) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    iVar6 = (int)*puVar1 + -2;
  }
  lVar7 = FUN_180006ed8();
  *(int *)(lVar7 + 0x30) = *(int *)(lVar7 + 0x30) + 1;
  puVar9 = param_2 + 1;
  local_70 = (byte *)0x0;
  local_68 = 0;
  uStack_60 = 0;
  if (*(int *)(param_3 + 8) == 0) {
    local_78[0] = 0;
  }
  else {
    local_70 = (byte *)((longlong)*(int *)(param_3 + 8) + *puVar9);
    uVar8 = *local_70 & 0xf;
    local_70 = local_70 + -(longlong)(char)(&DAT_180015590)[uVar8];
    local_78[0] = *(uint *)(local_70 + -4) >> ((&DAT_1800155a0)[uVar8] & 0x1f);
  }
  local_108 = (UWMap4 *)local_78;
  local_e8 = local_78;
  pbStack_100 = local_70;
  local_e0 = local_70;
  local_b8 = puVar9;
  FUN_18000a054((UWMap4 *)local_78,iVar6,param_4,(longlong *)&local_108,(longlong *)&local_e8);
  while( true ) {
    pbVar5 = pbStack_100;
    local_b0 = local_78;
    local_a8 = local_70;
    if ((pbStack_100 < local_70) || (pbStack_100 <= local_e0)) break;
    FH4::UWMap4::ReadEntry(local_108,&pbStack_100);
    pUVar4 = local_108;
    local_88 = *(undefined4 *)(local_108 + 0x10);
    iVar2 = *(int *)(local_108 + 0x14);
    iVar3 = *(int *)(local_108 + 0x18);
    uVar8 = *(uint *)(local_108 + 0x1c);
    local_98 = local_108;
    pbStack_90 = pbVar5;
    pbStack_100 = pbVar5;
    iStack_84 = iVar2;
    iStack_80 = iVar3;
    uStack_7c = uVar8;
    FH4::UWMap4::ReadEntry(local_108,&pbStack_100);
    pbStack_100 = pbVar5 + -(ulonglong)*(uint *)(pUVar4 + 0x10);
    iVar6 = FUN_18000a124(&local_e8,param_4,(longlong)&local_98,iVar6,&local_108);
    local_f8 = 0;
    if (iVar2 != 0) {
      local_f8 = iVar3;
    }
    local_f4 = iVar6;
    if (local_f8 != 0) {
      *(int *)puVar1 = iVar6 + 2;
      if (iVar2 - 1U < 2) {
        lVar7 = *local_d8;
        if (iVar2 == 2) {
          lVar10 = *(longlong *)((ulonglong)uVar8 + lVar7);
        }
        else {
          lVar10 = (ulonglong)uVar8 + lVar7;
        }
        _CallSettingFrameEncoded((longlong)local_f8 + *puVar9,lVar7,lVar10);
      }
      else {
        _CallSettingFrame();
      }
      FUN_180006778(local_d0);
    }
  }
  lVar7 = FUN_180006ed8();
  if (0 < *(int *)(lVar7 + 0x30)) {
    lVar7 = FUN_180006ed8();
    *(int *)(lVar7 + 0x30) = *(int *)(lVar7 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180009d8c; Evidence: ev_523583a845854ab594411a07386dc84d037c3a5497b55e62d5116a2720d6cd57 */

int FUN_180009d8c(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_1800070cc(param_3,param_2);
  FUN_180005ee8(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_180007084(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}


/* Address: 0x180009e28; Evidence: ev_1681fc630ab3d0eb5822b16a75ba27bdb02c0542d49c2d7bcda0aa912ffc83e5 */

undefined1 FUN_180009e28(longlong param_1,int *param_2)

{
  int iVar1;
  int iVar2;
  byte *pbVar3;
  longlong lVar4;
  longlong lVar5;
  undefined8 uVar6;
  int iVar7;
  int *piVar8;
  undefined1 uVar9;
  int iVar10;
  
  if (param_2 == (int *)0x0) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  uVar9 = 0;
  iVar7 = 0;
  if (0 < *param_2) {
    do {
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_180006764();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_180006764();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_180006764();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_180006750();
          uVar6 = FUN_180008910((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
                                (byte *)(iVar1 + lVar4),pbVar3);
          if ((int)uVar6 != 0) {
            uVar9 = 1;
            break;
          }
          iVar10 = iVar10 + -1;
          piVar8 = piVar8 + 1;
        } while (0 < iVar10);
      }
      iVar7 = iVar7 + 1;
    } while (iVar7 < *param_2);
  }
  return uVar9;
}


/* Address: 0x180009f10; Evidence: ev_49db3e19b36fbbfae5d0120d3a2d17d897ccc32ed74241efb6123a0f93000a4c */

ulonglong FUN_180009f10(int *param_1)

{
  int iVar1;
  ulonglong in_RAX;
  longlong lVar2;
  undefined4 extraout_var;
  int iVar3;
  longlong lVar4;
  
  iVar3 = 0;
  if (0 < *param_1) {
    lVar4 = 0;
    do {
      iVar1 = param_1[1];
      lVar2 = FUN_180006750();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_180006750();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_180006750();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_180006dac(lVar2 + 8,0x180021a78);
      in_RAX = CONCAT44(extraout_var,iVar1);
      if (iVar1 == 0) {
        return CONCAT71((int7)(in_RAX >> 8),1);
      }
      iVar3 = iVar3 + 1;
      lVar4 = lVar4 + 0x14;
    } while (iVar3 < *param_1);
  }
  return in_RAX & 0xffffffffffffff00;
}


/* Address: 0x180009f98; Evidence: ev_8d6bead5aac66bae2656f6b64130735de14a1897b7f1a007c21e0f2d9e86fd3e */

/* Library Function - Single Match
    private: void __cdecl FH4::UWMap4::ReadEntry(unsigned char * __ptr64 * __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

void __thiscall FH4::UWMap4::ReadEntry(UWMap4 *this,uchar **param_1)

{
  byte bVar1;
  undefined4 uVar2;
  uint uVar3;
  uint uVar4;
  byte *pbVar5;
  
  uVar3 = **param_1 & 0xf;
  pbVar5 = *param_1 + -(longlong)(char)(&DAT_180015590)[uVar3];
  uVar3 = *(uint *)(pbVar5 + -4) >> ((&DAT_1800155a0)[uVar3] & 0x1f);
  *param_1 = pbVar5;
  uVar4 = uVar3 & 3;
  *(uint *)(this + 0x14) = uVar4;
  *(uint *)(this + 0x10) = uVar3 >> 2;
  if ((uVar4 == 1) || (uVar4 == 2)) {
    uVar2 = *(undefined4 *)*param_1;
    *param_1 = *param_1 + 4;
    *(undefined4 *)(this + 0x18) = uVar2;
    uVar3 = **param_1 & 0xf;
    bVar1 = (&DAT_1800155a0)[uVar3];
    pbVar5 = *param_1 + -(longlong)(char)(&DAT_180015590)[uVar3];
    uVar3 = *(uint *)(pbVar5 + -4);
    *param_1 = pbVar5;
    *(uint *)(this + 0x1c) = uVar3 >> (bVar1 & 0x1f);
  }
  else if (uVar4 == 3) {
    uVar2 = *(undefined4 *)*param_1;
    *param_1 = *param_1 + 4;
    *(undefined4 *)(this + 0x18) = uVar2;
    return;
  }
  return;
}


/* Address: 0x18000a038; Evidence: ev_cf163ce2e9805e0f5dba70bc154d4ab3c2557b0c27fa0d9733e9b18419d938b6 */

void FUN_18000a038(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3)

{
                    /* WARNING: Could not recover jumptable at 0x00018000a03e. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3);
  return;
}


/* Address: 0x18000a044; Evidence: ev_98ca6f77a90631f43c183b4d01e68c167457610c790746c8c614b075ec77b1d6 */

void FUN_18000a044(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3,
                  undefined4 param_4)

{
                    /* WARNING: Could not recover jumptable at 0x00018000a050. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3,param_4);
  return;
}


/* Address: 0x18000a054; Evidence: ev_93405fb565bbec6d6733b23ddcf8e0a7b31eff1717536798e7f7c96b3f08430f */

void FUN_18000a054(UWMap4 *param_1,int param_2,int param_3,longlong *param_4,longlong *param_5)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  bool bVar3;
  bool bVar4;
  uchar *puVar5;
  int iVar6;
  uchar *puVar7;
  uchar *local_res8;
  int local_res10;
  
  local_res8 = *(uchar **)(param_1 + 8);
  bVar3 = false;
  bVar4 = false;
  iVar6 = 0;
  puVar5 = local_res8 + -1;
  puVar7 = puVar5;
  local_res10 = param_2;
  if (0 < *(int *)param_1) {
    do {
      if (iVar6 == param_2) {
        bVar3 = true;
        puVar5 = local_res8;
      }
      if (iVar6 == param_3) {
        bVar4 = true;
        puVar7 = local_res8;
      }
      if ((bVar3) && (bVar4)) break;
      FH4::UWMap4::ReadEntry(param_1,&local_res8);
      iVar6 = iVar6 + 1;
    } while (iVar6 < *(int *)param_1);
  }
  puVar1 = (undefined8 *)*param_4;
  param_4[1] = (longlong)puVar5;
  uVar2 = *(undefined8 *)(param_1 + 8);
  *puVar1 = *(undefined8 *)param_1;
  puVar1[1] = uVar2;
  uVar2 = *(undefined8 *)(param_1 + 0x18);
  puVar1[2] = *(undefined8 *)(param_1 + 0x10);
  puVar1[3] = uVar2;
  puVar1 = (undefined8 *)*param_5;
  param_5[1] = (longlong)puVar7;
  uVar2 = *(undefined8 *)(param_1 + 8);
  *puVar1 = *(undefined8 *)param_1;
  puVar1[1] = uVar2;
  uVar2 = *(undefined8 *)(param_1 + 0x18);
  puVar1[2] = *(undefined8 *)(param_1 + 0x10);
  puVar1[3] = uVar2;
  return;
}


/* Address: 0x18000a124; Evidence: ev_1f3ce6cfdcbd776d88c4b15bd2c65123cec1d4d01df37bf7d7f65c89bec0fd11 */

int FUN_18000a124(undefined8 *param_1,int param_2,longlong param_3,int param_4,undefined8 *param_5)

{
  ulonglong uVar1;
  UWMap4 *pUVar2;
  uchar *puStack_10;
  
  uVar1 = param_5[1];
  if ((*(ulonglong *)(param_3 + 8) < uVar1) || (uVar1 < (ulonglong)param_1[1])) {
    param_2 = -1;
  }
  else if ((longlong)(uVar1 - param_1[1]) < (longlong)(*(longlong *)(param_3 + 8) - uVar1)) {
    pUVar2 = (UWMap4 *)*param_1;
    puStack_10 = (uchar *)param_1[1];
    if ((ulonglong)param_1[1] < uVar1) {
      do {
        FH4::UWMap4::ReadEntry(pUVar2,&puStack_10);
        param_2 = param_2 + 1;
      } while (puStack_10 < (uchar *)param_5[1]);
    }
  }
  else {
    pUVar2 = (UWMap4 *)*param_5;
    puStack_10 = (uchar *)param_5[1];
    param_2 = param_4;
    if (uVar1 < *(ulonglong *)(param_3 + 8)) {
      do {
        FH4::UWMap4::ReadEntry(pUVar2,&puStack_10);
        param_4 = param_4 + -1;
        param_2 = param_4;
      } while (puStack_10 < *(uchar **)(param_3 + 8));
    }
  }
  return param_2;
}


/* Address: 0x18000a210; Evidence: ev_9c7c6d7310426361b48371768f91b5c69486af0d581da7d09138b88009bdb7c6 */

void FUN_18000a210(void)

{
  FUN_18000a230();
  return;
}


/* Address: 0x18000a230; Evidence: ev_cc6f50f43dd6581c8a872c45e769363acfb3008d34f6a7657063c52f07651dfb */

void FUN_18000a230(void)

{
  return;
}


/* Address: 0x18000a240; Evidence: ev_735170cdd9380f970fef34424e70861099c8feced24e84ac02bc9e3047f3471c */

void FUN_18000a240(void)

{
  return;
}


/* Address: 0x18000a244; Evidence: ev_d85ed762391d85c9842deda1d7691b060a233915b48ccfb2f290bf3fe1abe514 */

/* WARNING: Removing unreachable block (ram,0x00018000a257) */
/* WARNING: Removing unreachable block (ram,0x00018000a26d) */
/* WARNING: Removing unreachable block (ram,0x00018000a273) */
/* Library Function - Single Match
    __except_validate_context_record
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __except_validate_context_record(longlong param_1)

{
  return;
}


/* Address: 0x18000a27c; Evidence: ev_d0c4f99e4edb54f82d028e64fe3fec453bd39c7b21b4fea7c4ddad4b26cdf7c5 */

/* Library Function - Single Match
    __vcrt_initialize_locks
   
   Library: Visual Studio 2017 Release */

undefined8 __vcrt_initialize_locks(void)

{
  undefined8 uVar1;
  ulonglong uVar2;
  uint uVar3;
  
  uVar2 = 0;
  do {
    uVar1 = __vcrt_InitializeCriticalSectionEx
                      ((LPCRITICAL_SECTION)(&DAT_180022270 + uVar2 * 0x28),4000,0);
    if ((int)uVar1 == 0) {
      uVar2 = __vcrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_180022298 = DAT_180022298 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 == 0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x18000a2c4; Evidence: ev_a9cc9e6820a1d997264ebc1cdf62b49987cc8ed98717f52a718da88d345a309d */

/* Library Function - Single Match
    __vcrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release */

undefined8 __vcrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_180022298;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_180022270 + uVar1 * 0x28));
    DAT_180022298 = DAT_180022298 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000a2fc; Evidence: ev_9b59c4a51039cc6e4c4b5c7b724b75bffcc23564985dda506bd92b810f183415 */

FARPROC FUN_18000a2fc(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

{
  longlong lVar1;
  wchar_t *lpLibFileName;
  DWORD DVar2;
  int iVar3;
  HMODULE hLibModule;
  FARPROC pFVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  
  uVar6 = (ulonglong)param_1;
  pFVar4 = *(FARPROC *)(&DAT_1800222b8 + uVar6 * 8);
  if (pFVar4 != (FARPROC)0xffffffffffffffff) {
    if (pFVar4 != (FARPROC)0x0) {
      return pFVar4;
    }
    for (; param_3 != param_4; param_3 = param_3 + 1) {
      uVar5 = (ulonglong)*param_3;
      hLibModule = *(HMODULE *)(&DAT_1800222a0 + uVar5 * 8);
      if (hLibModule == (HMODULE)0x0) {
        lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_fibers_l1_1_1_1800164f8)[uVar5];
        hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
        if ((hLibModule != (HMODULE)0x0) ||
           (((DVar2 = GetLastError(), DVar2 == 0x57 &&
             (iVar3 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar3 != 0)) &&
            (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0)))
           ) {
          LOCK();
          lVar1 = *(longlong *)(&DAT_1800222a0 + uVar5 * 8);
          *(HMODULE *)(&DAT_1800222a0 + uVar5 * 8) = hLibModule;
          UNLOCK();
          if (lVar1 != 0) {
            FreeLibrary(hLibModule);
          }
          goto LAB_18000a42d;
        }
        LOCK();
        *(undefined8 *)(&DAT_1800222a0 + uVar5 * 8) = 0xffffffffffffffff;
        UNLOCK();
      }
      else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_18000a42d:
        pFVar4 = GetProcAddress(hLibModule,param_2);
        if (pFVar4 != (FARPROC)0x0) {
          LOCK();
          *(FARPROC *)(&DAT_1800222b8 + uVar6 * 8) = pFVar4;
          UNLOCK();
          return pFVar4;
        }
        break;
      }
    }
    LOCK();
    *(undefined8 *)(&DAT_1800222b8 + uVar6 * 8) = 0xffffffffffffffff;
    UNLOCK();
  }
  return (FARPROC)0x0;
}


/* Address: 0x18000a44c; Evidence: ev_60afaf152fcb430b0bea8542a1bab277b208eeba4f98ff4207f5909d2f59bae6 */

/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000a2fc(0,"FlsAlloc",(uint *)&DAT_1800165b8,(uint *)"FlsAlloc");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000a48a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsAlloc();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800139b0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)(param_1);
  return;
}


/* Address: 0x18000a494; Evidence: ev_40286b06b43c9ee96f2cea2f68b4512ed73f4a9f877c788c7c30fcc701d3408e */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000a2fc(1,"FlsFree",(uint *)&DAT_1800165d0,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000a4d3. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800139b0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000a4dc; Evidence: ev_17bd794a9b238c7d8794609c61dbcaa7d65b9c07c57ddab32c08ec3eb2d683a3 */

/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE =
       FUN_18000a2fc(2,"FlsGetValue",(uint *)&DAT_1800165e0,(uint *)"FlsGetValue");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000a51b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsGetValue(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800139b0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000a524; Evidence: ev_1377554a835110846a18da934ca9dc45a6186bed8a534db06e5821b584bfae58 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsSetValue
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsSetValue(DWORD param_1,LPVOID param_2)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_18000a2fc(3,"FlsSetValue",(uint *)&DAT_1800165f8,(uint *)"FlsSetValue");
  if (pFVar1 == (FARPROC)0x0) {
    TlsSetValue(param_1,param_2);
  }
  else {
    (*pFVar1)();
  }
  return;
}


/* Address: 0x18000a578; Evidence: ev_d0f5343ecd5e74eca3c74f105e85b59c2b1c57c57d001d3ab5c36d541dbcac2f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_InitializeCriticalSectionEx
   
   Library: Visual Studio 2017 Release */

void __vcrt_InitializeCriticalSectionEx(LPCRITICAL_SECTION param_1,DWORD param_2,undefined4 param_3)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_18000a2fc(4,"InitializeCriticalSectionEx",(uint *)&DAT_180016610,
                         (uint *)"InitializeCriticalSectionEx");
  if (pFVar1 == (FARPROC)0x0) {
    InitializeCriticalSectionAndSpinCount(param_1,param_2);
  }
  else {
    (*pFVar1)(param_1,param_2,param_3);
  }
  return;
}


/* Address: 0x18000a620; Evidence: ev_b7ab69bdbca1e9e8081b875943c0ffaf6994d06486bf6f68ece71dbd2fbf045d */

/* Library Function - Single Match
    _CallSettingFrame
   
   Library: Visual Studio */

void _CallSettingFrame(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000a210();
  (*pcVar1)();
  FUN_18000a240();
  FUN_18000a210();
  return;
}


/* Address: 0x18000a660; Evidence: ev_1ecd3ab874763a92e0677de2b6719885f6c17bdce2dfe0d6a5f310674a4af2c1 */

void FUN_18000a660(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000a210();
  (*pcVar1)();
  FUN_18000a240();
  return;
}


/* Address: 0x18000a690; Evidence: ev_9512fda539f94b27d47f09eba50abacf7ed044ce250687084067a1240b56d0af */

void FUN_18000a690(void)

{
  FUN_18000a210();
  return;
}


/* Address: 0x18000a6c0; Evidence: ev_ade3f61194b65e7cbfcb5370f4fa78003884091519c95e50367d0309949a6d91 */

/* Library Function - Single Match
    _CallSettingFrameEncoded
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

void _CallSettingFrameEncoded(undefined8 param_1,undefined8 param_2,undefined8 param_3)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000a210();
  (*pcVar1)(param_3);
  FUN_18000a240();
  FUN_18000a210();
  return;
}


/* Address: 0x18000a710; Evidence: ev_f0bff5d23d48d1f5a5e8663ff21d9dc38e956f5d16d06acdcb877b35b9b1d4c5 */

longlong * FUN_18000a710(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_180021200;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18002246c == 0) {
    param_1[1] = (longlong)PTR_PTR_1800211f8;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_18000c4d8();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_18000c710(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}


/* Address: 0x18000a7d0; Evidence: ev_6e3addb3b46b6136fa45f71bf91eca8f09cf127bedb5989726a3b1d57d8af4ba */

undefined8 FUN_18000a7d0(longlong param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  
  if ((param_1 == 0) || (param_2 == 0)) {
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000ad7c();
  }
  return 0x7fffffff;
}


/* Address: 0x18000a800; Evidence: ev_7df4b930ae9d0c37b223140034e125768f2ed37211aaa88351cb9fbb3e5e947c */

void FUN_18000a800(byte *param_1,byte *param_2)

{
  byte bVar1;
  byte bVar2;
  uint uVar3;
  uint uVar4;
  
  if (DAT_18002246c != 0) {
    FUN_18000a870(param_1,param_2,(undefined8 *)0x0);
    return;
  }
  if ((param_1 != (byte *)0x0) && (param_2 != (byte *)0x0)) {
    while( true ) {
      bVar1 = *param_1;
      uVar3 = (uint)bVar1;
      param_1 = param_1 + 1;
      bVar2 = *param_2;
      uVar4 = (uint)bVar2;
      param_2 = param_2 + 1;
      if ((uint)bVar1 != (uint)bVar2) {
        uVar3 = bVar1 + 0x20;
        if (0x19 < bVar1 - 0x41) {
          uVar3 = (uint)bVar1;
        }
        if (bVar2 - 0x41 < 0x1a) {
          uVar4 = bVar2 + 0x20;
        }
      }
      if (uVar3 != uVar4) break;
      if (uVar3 == 0) {
        return;
      }
    }
    return;
  }
  FUN_18000a7d0((longlong)param_1,(longlong)param_2);
  return;
}


/* Address: 0x18000a870; Evidence: ev_08fec4b787fe89edbf9e9fecff7b4010bc2615a4960b6445e3c96b46e716ed82 */

int FUN_18000a870(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  __acrt_ptd *p_Var3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    p_Var3 = FUN_18000c034();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000ad7c();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18002246c == 0) {
      local_20 = PTR_PTR_1800211f8;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_18000c4d8();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_18000c710(local_28,&lStack_18);
      if ((*(uint *)(local_28 + 0x3a8) & 2) == 0) {
        local_10 = '\x01';
        *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) | 2;
      }
    }
  }
  else {
    local_20 = (undefined *)*param_3;
    local_10 = '\0';
  }
  do {
    bVar1 = *param_1;
    param_1 = param_1 + 1;
    bVar1 = *(byte *)((ulonglong)bVar1 + *(longlong *)(local_20 + 0x110));
    iVar2 = (uint)bVar1 - (uint)*(byte *)((ulonglong)*param_2 + *(longlong *)(local_20 + 0x110));
    if (iVar2 != 0) break;
    param_2 = param_2 + 1;
  } while (bVar1 != 0);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return iVar2;
}


/* Address: 0x18000a990; Evidence: ev_f300c615494fab711041635680e6c9addadc9fa2664d69661cbbb1c01eaa66bb */

longlong FUN_18000a990(longlong *param_1)

{
  __acrt_ptd *p_Var1;
  longlong lVar2;
  DWORD local_res8 [2];
  
  if (*param_1 == 0) {
    local_res8[0] = GetLastError();
    if ((char)param_1[2] == '\0') {
      param_1[1] = 0;
      lVar2 = 0;
      *(undefined1 *)(param_1 + 2) = 1;
    }
    else {
      lVar2 = param_1[1];
    }
    p_Var1 = FUN_18000c5c8(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
    if (p_Var1 == (__acrt_ptd *)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return *param_1;
}


/* Address: 0x18000a9f8; Evidence: ev_b00d0fb36988b7ed7fc19135065431ee5e80e53b0ed3b4987d5ccbf427a219b6 */

__acrt_ptd * FUN_18000a9f8(longlong *param_1)

{
  __acrt_ptd *p_Var1;
  longlong lVar2;
  DWORD local_res8 [2];
  
  p_Var1 = (__acrt_ptd *)*param_1;
  lVar2 = 0;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    local_res8[0] = GetLastError();
    if ((char)param_1[2] == '\0') {
      param_1[1] = 0;
      *(undefined1 *)(param_1 + 2) = 1;
    }
    else {
      lVar2 = param_1[1];
    }
    p_Var1 = FUN_18000c5c8(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
  }
  return p_Var1;
}


/* Address: 0x18000aa64; Evidence: ev_cc44b95f536bc810f18e25ddc65c3d4122ad6be6625452c617a4396bf0c997d5 */

longlong FUN_18000aa64(longlong param_1,longlong param_2)

{
  DWORD dwErrCode;
  longlong lVar1;
  
  lVar1 = 0;
  if (*(char *)(param_2 + 0x10) == '\0') {
    dwErrCode = GetLastError();
    *(undefined8 *)(param_2 + 8) = 0;
    *(undefined1 *)(param_2 + 0x10) = 1;
    SetLastError(dwErrCode);
  }
  else {
    lVar1 = *(longlong *)(param_2 + 8);
  }
  return param_1 + lVar1 * 8;
}


/* Address: 0x18000aab0; Evidence: ev_c85f7b9de7d736ad157c300cc561a9259641b1f00967d52f890d0432ed5756c3 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000aab0(int param_1,DWORD param_2,DWORD param_3)

{
  BOOL BVar1;
  LONG LVar2;
  PRUNTIME_FUNCTION FunctionEntry;
  undefined1 local_res8 [8];
  undefined1 auStackY_608 [32];
  ulonglong local_5c8 [2];
  PVOID local_5b8;
  _EXCEPTION_POINTERS local_5b0;
  EXCEPTION_RECORD local_598;
  _CONTEXT local_4f8;
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStackY_608;
  if (param_1 != -1) {
    FUN_180005680();
  }
  FUN_180013a30((undefined1 (*) [32])&local_598,0,0x98);
  FUN_180013a30((undefined1 (*) [32])&local_4f8,0,0x4d0);
  local_5c8[1] = 0;
  local_5b0.ExceptionRecord = &local_598;
  local_5c8[0] = 0;
  local_5b8 = (PVOID)0x0;
  local_5b0.ContextRecord = &local_4f8;
  RtlCaptureContext(&local_4f8);
  FunctionEntry = RtlLookupFunctionEntry(local_4f8.Rip,local_5c8,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    RtlVirtualUnwind(0,local_5c8[0],local_4f8.Rip,FunctionEntry,&local_4f8,&local_5b8,local_5c8 + 1,
                     (PKNONVOLATILE_CONTEXT_POINTERS)0x0);
  }
  local_4f8.Rsp = (DWORD64)local_res8;
  local_598.ExceptionCode = param_2;
  local_598.ExceptionFlags = param_3;
  BVar1 = IsDebuggerPresent();
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  LVar2 = UnhandledExceptionFilter(&local_5b0);
  if (((LVar2 == 0) && (BVar1 == 0)) && (param_1 != -1)) {
    FUN_180005680();
  }
  return;
}


/* Address: 0x18000ac20; Evidence: ev_4272bb9c71a4025a7b4ee6f1f2e340bd01d3eb238f0e5bb6f103a837fb33ee48 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000ac20(undefined8 param_1)

{
  _DAT_1800222e8 = param_1;
  return;
}


/* Address: 0x18000ac28; Evidence: ev_e5c7ad6f32a93c3791d75f33f51d4d60ae22816d4ea01780169a21ac1d1ffb2a */

void FUN_18000ac28(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  )

{
  longlong lVar1;
  longlong local_48 [2];
  undefined1 local_38;
  undefined *local_30;
  undefined *puStack_28;
  char local_20;
  undefined4 local_1c;
  char local_18;
  undefined4 local_14;
  char local_10;
  
  local_48[0] = 0;
  local_20 = DAT_18002246c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800211f8;
    puStack_28 = PTR_DAT_180021200;
  }
  FUN_18000acc4(param_1,param_2,param_3,param_4,param_5,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar1 = FUN_18000a990(local_48);
    *(undefined4 *)(lVar1 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar1 = FUN_18000a990(local_48);
    *(undefined4 *)(lVar1 + 0x24) = local_14;
  }
  return;
}


/* Address: 0x18000acc4; Evidence: ev_043273d2bd5b49ddf439f22f78ad58c188ea3444620887e2b5133fc85a55c822 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000acc4(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_18000a9f8(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_18000aa64(0x1800222e8,(longlong)param_6);
    bVar3 = (byte)DAT_180021000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_180021000) >> bVar3 | (*puVar2 ^ DAT_180021000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}


/* Address: 0x18000ad7c; Evidence: ev_f3433e17daab09124a2092bc2b4f5fbb2b98394aee32324a12788504ce1a3811 */

void FUN_18000ad7c(void)

{
  FUN_18000ac28((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  return;
}


/* Address: 0x18000ad9c; Evidence: ev_7c7ac5265033a42a3dc85e04aecf01ed00b0dba19643dc796ddc85db1f905ad4 */

/* Library Function - Single Match
    _invoke_watson
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl
_invoke_watson(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5)

{
  code *pcVar1;
  BOOL BVar2;
  HANDLE hProcess;
  undefined1 *puVar3;
  undefined1 auStack_28 [8];
  undefined1 auStack_20 [32];
  
  puVar3 = auStack_28;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(5);
    puVar3 = auStack_20;
  }
  *(undefined8 *)(puVar3 + -8) = 0x18000adca;
  FUN_18000aab0(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x18000add0;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000addc. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}


/* Address: 0x18000adf0; Evidence: ev_c489341c0db2b5e8222502e75f6824f87b0a525188b008b791799d805c1a06b8 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

bool FUN_18000adf0(undefined8 param_1)

{
  int iVar1;
  code *pcVar2;
  bool bVar3;
  
  pcVar2 = (code *)FUN_18000ae40();
  bVar3 = false;
  if (pcVar2 != (code *)0x0) {
    iVar1 = (*pcVar2)(param_1);
    bVar3 = iVar1 != 0;
  }
  return bVar3;
}


/* Address: 0x18000ae30; Evidence: ev_af48ce35d3b78e59da5ad17ae3f2abc703a6d99fb3b515a22638b373f14b8e99 */

void FUN_18000ae30(undefined8 param_1)

{
  DAT_1800222f0 = param_1;
  return;
}


/* Address: 0x18000ae40; Evidence: ev_58d4d03a54caa00e4182223cb6fee7a76102ff5983e2dd51bc0ed38fb672bcf3 */

ulonglong FUN_18000ae40(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180021000 & 0x3f;
  uVar2 = DAT_1800222f0 ^ DAT_180021000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18000ae80; Evidence: ev_bc886fa6fe4e5697ae44b74ce1d1ae2d64eec039d3eee0b62bfdfa5a295a2160 */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180021000 & 0x3f;
  uVar3 = DAT_180021000 ^ DAT_1800222f0;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_1800222f0 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180021000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}


/* Address: 0x18000aef0; Evidence: ev_4053a6b2fe39ca505872275e2232b8ff32052115d0f43b63310933ef734fa0e9 */

LPVOID _malloc_base(ulonglong param_1)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  
  if (param_1 < 0xffffffffffffffe1) {
    if (param_1 == 0) {
      param_1 = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_1800227e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_1800104c0();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000adf0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c034();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000af00; Evidence: ev_446bbc497750b4a0066fade093feb310d08ced364d2315bb0469e2016df385d1 */

void thunk_FUN_18000c960(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800227e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000bef4(DVar2);
    p_Var4 = FUN_18000c034();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000af08; Evidence: ev_813f7d4e4e696bc7a3e23bd843a98df2bf4f0c3798e3f6cb166982c07108be22 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000af08(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}


/* Address: 0x18000af40; Evidence: ev_10882f3da7fd1228face6c371e1f177278dbafc6514e27fa24c2894884de6971 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000af40(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  while( true ) {
    if (param_1 == param_2) {
      return 0;
    }
    if (((code *)*param_1 != (code *)0x0) && (uVar1 = (*(code *)*param_1)(), (int)uVar1 != 0))
    break;
    param_1 = param_1 + 1;
  }
  return uVar1;
}


/* Address: 0x18000af7c; Evidence: ev_b4d12494a42244874b409f9c3fc66cf5ed5ffd66d9ff8722292fcd6ddd1fb82b */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000af90(-0x1f928c9d,param_2);
  return uVar1;
}


/* Address: 0x18000af90; Evidence: ev_051607b6eff0fed5bc300588a58d1b59f4a7385848f7e93c78f411461b092e61 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000af90(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  int *piVar2;
  code *pcVar3;
  undefined8 uVar4;
  __acrt_ptd *p_Var5;
  int *piVar6;
  int *piVar7;
  undefined4 uVar8;
  
  p_Var5 = FUN_18000c538();
  if (p_Var5 != (__acrt_ptd *)0x0) {
    piVar2 = *(int **)p_Var5;
    for (piVar6 = piVar2; piVar6 != piVar2 + 0x30; piVar6 = piVar6 + 4) {
      if (*piVar6 == param_1) {
        if (piVar6 == (int *)0x0) {
          return 0;
        }
        pcVar3 = *(code **)(piVar6 + 2);
        if (pcVar3 == (code *)0x0) {
          return 0;
        }
        if (pcVar3 == (code *)0x5) {
          piVar6[2] = 0;
          piVar6[3] = 0;
          return 1;
        }
        if (pcVar3 != (code *)0x1) {
          uVar4 = *(undefined8 *)(p_Var5 + 8);
          *(undefined8 *)(p_Var5 + 8) = param_2;
          if (piVar6[1] == 8) {
            for (piVar7 = piVar2 + 0xc; piVar7 != piVar2 + 0x30; piVar7 = piVar7 + 4) {
              piVar7[2] = 0;
              piVar7[3] = 0;
            }
            uVar1 = *(undefined4 *)(p_Var5 + 0x10);
            if (*piVar6 == -0x3fffff73) {
              uVar8 = 0x82;
LAB_18000b0ce:
              *(undefined4 *)(p_Var5 + 0x10) = uVar8;
            }
            else {
              if (*piVar6 == -0x3fffff72) {
                uVar8 = 0x83;
                goto LAB_18000b0ce;
              }
              if (*piVar6 == -0x3fffff71) {
                uVar8 = 0x86;
                goto LAB_18000b0ce;
              }
              if (*piVar6 == -0x3fffff70) {
                uVar8 = 0x81;
                goto LAB_18000b0ce;
              }
              if (*piVar6 == -0x3fffff6f) {
                uVar8 = 0x84;
                goto LAB_18000b0ce;
              }
              if (*piVar6 == -0x3fffff6e) {
                uVar8 = 0x8a;
                goto LAB_18000b0ce;
              }
              if (*piVar6 == -0x3fffff6d) {
                uVar8 = 0x85;
                goto LAB_18000b0ce;
              }
              if (*piVar6 == -0x3ffffd4c) {
                uVar8 = 0x8e;
                goto LAB_18000b0ce;
              }
              uVar8 = uVar1;
              if (*piVar6 == -0x3ffffd4b) {
                uVar8 = 0x8d;
                goto LAB_18000b0ce;
              }
            }
            (*pcVar3)(8,uVar8);
            *(undefined4 *)(p_Var5 + 0x10) = uVar1;
          }
          else {
            piVar6[2] = 0;
            piVar6[3] = 0;
            (*pcVar3)(piVar6[1]);
          }
          *(undefined8 *)(p_Var5 + 8) = uVar4;
        }
        return 0xffffffff;
      }
    }
  }
  return 0;
}


/* Address: 0x18000b0fc; Evidence: ev_11d5515368f94a721b8b6265a1029b8e0c88d52504a109da7adf3f24f9f7160a */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_99476a1ad63dd22509b5d3e65b0ffc95>,class <lambda_ad1ced32f4ac17aa236e5ef05d6b3b7c> &
   __ptr64,class <lambda_f7424dd8d45958661754dc4f2697e9c3> >(class
   <lambda_99476a1ad63dd22509b5d3e65b0ffc95> && __ptr64,class
   <lambda_ad1ced32f4ac17aa236e5ef05d6b3b7c> & __ptr64,class
   <lambda_f7424dd8d45958661754dc4f2697e9c3> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_d80eeec6fff315bfe5c115232f3240e3>,class <lambda_6e4b09c48022b2350581041d5f6b0c4c> &
   __ptr64,class <lambda_2358e3775559c9db80273638284d5e45> >(class
   <lambda_d80eeec6fff315bfe5c115232f3240e3> && __ptr64,class
   <lambda_6e4b09c48022b2350581041d5f6b0c4c> & __ptr64,class
   <lambda_2358e3775559c9db80273638284d5e45> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  __acrt_lock(*param_2);
  FUN_18000b134(param_3);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000b134; Evidence: ev_afd0118ea7e7a86bc7882be970109d9a3503710e6f0972dc5d7bc9f447e8c2d9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b134(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_180022308 != '\0') {
    return;
  }
  LOCK();
  DAT_1800222f8 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_180022300 != DAT_180021000) {
      bVar1 = (byte)DAT_180021000 & 0x3f;
      (*(code *)((DAT_180021000 ^ DAT_180022300) >> bVar1 |
                (DAT_180021000 ^ DAT_180022300) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180022438;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000b1a3;
    puVar2 = &DAT_180022450;
  }
  FUN_18000badc(puVar2);
LAB_18000b1a3:
  if (*(int *)*param_1 == 0) {
    FUN_18000af08((undefined8 *)&DAT_180015308,(undefined8 *)&DAT_180015328);
  }
  FUN_18000af08((undefined8 *)&DAT_180015330,(undefined8 *)&DAT_180015338);
  if (*(int *)param_1[1] == 0) {
    DAT_180022308 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}


/* Address: 0x18000b1f4; Evidence: ev_b31899a8961e3097f81d6b628bb600af485a28ae5597e8694466ebc046516d86 */

void FUN_18000b1f4(uint param_1,undefined4 param_2,int param_3)

{
  code *pcVar1;
  bool bVar2;
  uint uVar3;
  HMODULE pHVar4;
  undefined7 extraout_var;
  int *piVar5;
  undefined4 local_res10 [2];
  int local_res18 [2];
  undefined1 local_res20 [8];
  undefined1 local_38 [4];
  int local_34 [3];
  undefined8 local_28;
  undefined4 *local_20;
  int *local_18;
  undefined1 *local_10;
  
  local_28 = 0xfffffffffffffffe;
  local_res10[0] = param_2;
  local_res18[0] = param_3;
  if (param_3 == 0) {
    pHVar4 = GetModuleHandleW((LPCWSTR)0x0);
    if ((((pHVar4 != (HMODULE)0x0) && ((short)pHVar4->unused == 0x5a4d)) &&
        (piVar5 = (int *)((longlong)&pHVar4->unused + (longlong)pHVar4[0xf].unused),
        *piVar5 == 0x4550)) &&
       ((((short)piVar5[6] == 0x20b && (0xe < (uint)piVar5[0x21])) && (piVar5[0x3e] != 0)))) {
      FUN_18000b308(param_1);
    }
  }
  local_res20[0] = 0;
  local_20 = local_res10;
  local_18 = local_res18;
  local_10 = local_res20;
  local_34[0] = 2;
  local_34[1] = 2;
  operator()<>(local_38,local_34 + 1,&local_20,local_34);
  if (local_res18[0] == 0) {
    bVar2 = FUN_18000c9ec();
    if ((int)CONCAT71(extraout_var,bVar2) == 1) {
      bVar2 = false;
    }
    else {
      uVar3 = FUN_18000c9b8();
      bVar2 = (char)uVar3 == '\0';
    }
    if (local_res18[0] == 0) {
      FUN_18000b2d8(param_1,bVar2);
      pcVar1 = (code *)swi(3);
      (*pcVar1)();
      return;
    }
  }
  return;
}


/* Address: 0x18000b2d8; Evidence: ev_b3a89620955ceeedbf786ad757b2a99c9756494124d56fe9594b6899b89c9356 */

void FUN_18000b2d8(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000b308(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}


/* Address: 0x18000b308; Evidence: ev_32ae9c9e35a0a06eb8baed921636a7b71f657b9fcaa68657a00f820ef3be98e0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b308(uint param_1)

{
  BOOL BVar1;
  FARPROC pFVar2;
  HMODULE local_res10 [3];
  
  local_res10[0] = (HMODULE)0x0;
  BVar1 = GetModuleHandleExW(0,L"mscoree.dll",local_res10);
  if ((BVar1 != 0) &&
     (pFVar2 = GetProcAddress(local_res10[0],"CorExitProcess"), pFVar2 != (FARPROC)0x0)) {
    (*pFVar2)((ulonglong)param_1);
  }
  if (local_res10[0] != (HMODULE)0x0) {
    FreeLibrary(local_res10[0]);
  }
  return;
}


/* Address: 0x18000b36c; Evidence: ev_712b59743491cf200519ec2bd84e881e15e6f2d140470afe74b15c741d582d3d */

void FUN_18000b36c(undefined8 param_1)

{
  DAT_180022300 = param_1;
  return;
}


/* Address: 0x18000b374; Evidence: ev_189a0f0b60e2d59d3a272a5d44ccc76c3429ea533958fd724a74a4ebb290e866 */

void FUN_18000b374(void)

{
  FUN_18000b1f4(0,0,1);
  return;
}


/* Address: 0x18000b384; Evidence: ev_4dad2c27f8633eac60b78003527c96e694231da9c616412bf02cd157f948aae5 */

void FUN_18000b384(uint param_1)

{
  FUN_18000b1f4(param_1,2,0);
  return;
}


/* Address: 0x18000b390; Evidence: ev_7def32f2ec3d2f7b995401cb2398e0b267eba5e9f9348c9bfefb4e399f79a8f7 */

undefined4 FUN_18000b390(void)

{
  return DAT_1800222f8;
}


/* Address: 0x18000b398; Evidence: ev_1348ca10d6532c9c91e53a8d13eade30909a0a80cf6286b7f3cc414ce8246322 */

void FUN_18000b398(char *param_1,undefined8 *param_2,char *param_3,longlong *param_4,
                  longlong *param_5)

{
  bool bVar1;
  bool bVar2;
  char cVar3;
  uint uVar4;
  int iVar5;
  char *pcVar6;
  
  *param_5 = 0;
  *param_4 = 1;
  if (param_2 != (undefined8 *)0x0) {
    *param_2 = param_3;
    param_2 = param_2 + 1;
  }
  bVar2 = false;
  do {
    if (*param_1 == '\"') {
      bVar2 = !bVar2;
      cVar3 = '\"';
      pcVar6 = param_1 + 1;
    }
    else {
      *param_5 = *param_5 + 1;
      if (param_3 != (char *)0x0) {
        *param_3 = *param_1;
        param_3 = param_3 + 1;
      }
      cVar3 = *param_1;
      pcVar6 = param_1 + 1;
      iVar5 = FUN_18000e328((int)cVar3);
      if (iVar5 != 0) {
        *param_5 = *param_5 + 1;
        if (param_3 != (char *)0x0) {
          *param_3 = *pcVar6;
          param_3 = param_3 + 1;
        }
        pcVar6 = param_1 + 2;
      }
      if (cVar3 == '\0') {
        pcVar6 = pcVar6 + -1;
        goto LAB_18000b44a;
      }
    }
    param_1 = pcVar6;
  } while ((bVar2) || ((cVar3 != ' ' && (cVar3 != '\t'))));
  if (param_3 != (char *)0x0) {
    param_3[-1] = '\0';
  }
LAB_18000b44a:
  bVar2 = false;
  while (cVar3 = *pcVar6, cVar3 != '\0') {
    while ((cVar3 == ' ' || (cVar3 == '\t'))) {
      pcVar6 = pcVar6 + 1;
      cVar3 = *pcVar6;
    }
    if (cVar3 == '\0') break;
    if (param_2 != (undefined8 *)0x0) {
      *param_2 = param_3;
      param_2 = param_2 + 1;
    }
    *param_4 = *param_4 + 1;
    while( true ) {
      bVar1 = true;
      uVar4 = 0;
      while( true ) {
        if (*pcVar6 != '\\') break;
        pcVar6 = pcVar6 + 1;
        uVar4 = uVar4 + 1;
      }
      if (*pcVar6 == '\"') {
        if ((uVar4 & 1) == 0) {
          if ((bVar2) && (pcVar6[1] == '\"')) {
            pcVar6 = pcVar6 + 1;
          }
          else {
            bVar1 = false;
            bVar2 = !bVar2;
          }
        }
        uVar4 = uVar4 >> 1;
      }
      while (uVar4 != 0) {
        uVar4 = uVar4 - 1;
        if (param_3 != (char *)0x0) {
          *param_3 = '\\';
          param_3 = param_3 + 1;
        }
        *param_5 = *param_5 + 1;
      }
      cVar3 = *pcVar6;
      if ((cVar3 == '\0') || ((!bVar2 && ((cVar3 == ' ' || (cVar3 == '\t')))))) break;
      if (bVar1) {
        if (param_3 != (char *)0x0) {
          *param_3 = cVar3;
          param_3 = param_3 + 1;
        }
        iVar5 = FUN_18000e328((int)*pcVar6);
        if (iVar5 != 0) {
          *param_5 = *param_5 + 1;
          pcVar6 = pcVar6 + 1;
          if (param_3 != (char *)0x0) {
            *param_3 = *pcVar6;
            param_3 = param_3 + 1;
          }
        }
        *param_5 = *param_5 + 1;
      }
      pcVar6 = pcVar6 + 1;
    }
    if (param_3 != (char *)0x0) {
      *param_3 = '\0';
      param_3 = param_3 + 1;
    }
    *param_5 = *param_5 + 1;
  }
  if (param_2 != (undefined8 *)0x0) {
    *param_2 = 0;
  }
  *param_4 = *param_4 + 1;
  return;
}


/* Address: 0x18000b558; Evidence: ev_cef6ac8d9c80eb25b46f747fa05f49ca597d4699568a937ec8d9beddea9a62b8 */

/* Library Function - Single Match
    __acrt_allocate_buffer_for_argv
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID __acrt_allocate_buffer_for_argv(ulonglong param_1,ulonglong param_2,ulonglong param_3)

{
  undefined1 auVar1 [16];
  LPVOID pvVar2;
  
  if ((param_1 < 0x1fffffffffffffff) &&
     (auVar1._8_8_ = 0, auVar1._0_8_ = param_3,
     param_2 < SUB168((ZEXT816(0) << 0x40 | ZEXT816(0xffffffffffffffff)) / auVar1,0))) {
    if (param_2 * param_3 < ~(param_1 * 8)) {
      pvVar2 = _calloc_base(param_1 * 8 + param_2 * param_3,1);
      FUN_18000c960((LPVOID)0x0);
      return pvVar2;
    }
  }
  return (LPVOID)0x0;
}


/* Address: 0x18000b5b8; Evidence: ev_b5baad1e12c8681580dfb32087410f77ec2f0e76d807d9c0b5990a081f96a7a5 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000b5b8(int param_1)

{
  longlong lVar1;
  longlong *plVar2;
  __acrt_ptd *p_Var3;
  longlong *plVar4;
  ulonglong uVar5;
  char *pcVar6;
  ulonglong uVar7;
  longlong *local_res10;
  ulonglong local_res18;
  ulonglong local_res20;
  
  uVar7 = 0;
  if (param_1 == 0) {
    return 0;
  }
  if (1 < param_1 - 1U) {
    p_Var3 = FUN_18000c034();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000ad7c();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_18000d644((HMODULE)0x0,&DAT_180022310,0x104);
  _DAT_180022700 = &DAT_180022310;
  if ((DAT_180022720 == (char *)0x0) || (pcVar6 = DAT_180022720, *DAT_180022720 == '\0')) {
    pcVar6 = &DAT_180022310;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000b398(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_18000c034();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000b398(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_18000ce00(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_18000c960(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_18000c960(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_180022708 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_180022708 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_180022710 = plVar2;
      FUN_18000c960((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_18000b71d;
    }
    _DAT_180022708 = (int)local_res18 + -1;
    DAT_180022710 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_18000b71d:
  FUN_18000c960(plVar4);
  return uVar7;
}


/* Address: 0x18000b738; Evidence: ev_427a611fdc74482a459b825ab6bec9ee15d653132fc92d1834827b0bd1ed64e0 */

undefined8 FUN_18000b738(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180022418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_18000e4d8();
    if (pcVar2 == (char *)0x0) {
      FUN_18000c960((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000b7ac(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180022418;
        puVar1 = DAT_180022430;
      }
      DAT_180022430 = puVar1;
      DAT_180022418 = puVar4;
      FUN_18000c960((LPVOID)0x0);
      FUN_18000c960(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x18000b7ac; Evidence: ev_6e650007ba2203fb4f4580834b5bdf15dea9b2a544294010bf798f2f727588be */

undefined8 * FUN_18000b7ac(char *param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined8 *puVar3;
  char *pcVar4;
  undefined8 uVar5;
  char cVar6;
  longlong lVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  
  cVar6 = *param_1;
  lVar7 = 0;
  pcVar4 = param_1;
  while (cVar6 != '\0') {
    lVar1 = lVar7 + 1;
    if (cVar6 == '=') {
      lVar1 = lVar7;
    }
    lVar7 = -1;
    do {
      lVar2 = lVar7;
      lVar7 = lVar2 + 1;
    } while (pcVar4[lVar7] != '\0');
    pcVar4 = pcVar4 + lVar2 + 2;
    lVar7 = lVar1;
    cVar6 = *pcVar4;
  }
  puVar3 = _calloc_base(lVar7 + 1,8);
  puVar9 = puVar3;
  if (puVar3 == (undefined8 *)0x0) {
LAB_18000b80f:
    FUN_18000c960((LPVOID)0x0);
    puVar3 = (undefined8 *)0x0;
  }
  else {
    for (; *param_1 != '\0'; param_1 = param_1 + uVar8) {
      lVar7 = -1;
      do {
        lVar1 = lVar7;
        lVar7 = lVar1 + 1;
      } while (param_1[lVar7] != '\0');
      uVar8 = lVar1 + 2;
      if (*param_1 != '=') {
        pcVar4 = _calloc_base(uVar8,1);
        if (pcVar4 == (char *)0x0) {
          free_environment<>(puVar3);
          FUN_18000c960((LPVOID)0x0);
          goto LAB_18000b80f;
        }
        uVar5 = FUN_18000bdb0(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_18000c960((LPVOID)0x0);
      }
    }
    FUN_18000c960((LPVOID)0x0);
  }
  return puVar3;
}


/* Address: 0x18000b8c0; Evidence: ev_5c7738028fbf493583879f457a5125b5b5549a7e9ea12c33234b284ef961922d */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl free_environment<char>(char * __ptr64 * __ptr64 const)
    void __cdecl free_environment<wchar_t>(wchar_t * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void free_environment<>(undefined8 *param_1)

{
  LPVOID pvVar1;
  undefined8 *puVar2;
  
  if (param_1 != (undefined8 *)0x0) {
    pvVar1 = (LPVOID)*param_1;
    puVar2 = param_1;
    while (pvVar1 != (LPVOID)0x0) {
      FUN_18000c960(pvVar1);
      puVar2 = puVar2 + 1;
      pvVar1 = (LPVOID)*puVar2;
    }
    FUN_18000c960(param_1);
  }
  return;
}


/* Address: 0x18000b904; Evidence: ev_c2e1a852f90757d7753114e992eab37ef503027b2217a74a681d66386f9eebb1 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180022430) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18000b920; Evidence: ev_c35c0c62b424eb489c4810178cd7b99e19baea65a92599a3e7b41312cfec1167 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180022428) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18000b93c; Evidence: ev_a94abf8f89cb4f76ace16db8682c61dbbb75826aeccce0cfc4ab270c25de9bee */

void FUN_18000b93c(void)

{
  uninitialize_environment_internal<>(&DAT_180022418);
  uninitialize_environment_internal<>((undefined8 *)&DAT_180022420);
  free_environment<>(DAT_180022430);
  free_environment<>(DAT_180022428);
  return;
}


/* Address: 0x18000b980; Evidence: ev_25cb3b4fed2b8e2e849c743bd71657da5ee8fb67b8deb72da14c484e2a098e7f */

undefined8 thunk_FUN_18000b738(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180022418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_18000e4d8();
    if (pcVar2 == (char *)0x0) {
      FUN_18000c960((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000b7ac(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180022418;
        puVar1 = DAT_180022430;
      }
      DAT_180022430 = puVar1;
      DAT_180022418 = puVar4;
      FUN_18000c960((LPVOID)0x0);
      FUN_18000c960(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x18000b988; Evidence: ev_ff4d0ae2e5a41e3f239a56bae973a85c3e01f5731c29767c5c1daadf454a0135 */

/* Library Function - Multiple Matches With Same Base Name
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_638799b9deba96c50f710eeac98168cd>,class <lambda_22ebabd17bc4fa466a2aca6d8deb888d> &
   __ptr64,class <lambda_a6f7d7db0129f75315ebf26d50c089f1> >(class
   <lambda_638799b9deba96c50f710eeac98168cd> && __ptr64,class
   <lambda_22ebabd17bc4fa466a2aca6d8deb888d> & __ptr64,class
   <lambda_a6f7d7db0129f75315ebf26d50c089f1> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_7777bce6b2f8c936911f934f8298dc43>,class <lambda_f03950bc5685219e0bcd2087efbe011e> &
   __ptr64,class <lambda_3883c3dff614d5e0c5f61bb1ac94921c> >(class
   <lambda_7777bce6b2f8c936911f934f8298dc43> && __ptr64,class
   <lambda_f03950bc5685219e0bcd2087efbe011e> & __ptr64,class
   <lambda_3883c3dff614d5e0c5f61bb1ac94921c> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_8b90c8310d35b3462fe809c44bbb350d>,class <lambda_c1ccdfe150d00dafd355d15f2a9edeaa> &
   __ptr64,class <lambda_e797892004ba4c0bb152531b9d8c3715> >(class
   <lambda_8b90c8310d35b3462fe809c44bbb350d> && __ptr64,class
   <lambda_c1ccdfe150d00dafd355d15f2a9edeaa> & __ptr64,class
   <lambda_e797892004ba4c0bb152531b9d8c3715> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_b8c45f8f788dd370798f47cfe8ac3a86>,class <lambda_4e60a939b0d047cfe11ddc22648dfba9> &
   __ptr64,class <lambda_332c3edc96d0294ec56c57d38c1cdfd5> >(class
   <lambda_b8c45f8f788dd370798f47cfe8ac3a86> && __ptr64,class
   <lambda_4e60a939b0d047cfe11ddc22648dfba9> & __ptr64,class
   <lambda_332c3edc96d0294ec56c57d38c1cdfd5> && __ptr64) __ptr64
     5 names - too many to list
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  ulonglong uVar1;
  
  __acrt_lock(*param_2);
  uVar1 = FUN_18000b9c4(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000b9c4; Evidence: ev_34f61df523dedf212452bc42823aa15a64bf966533c39e89e33a058ea57127d2 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000b9c4(undefined8 *param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  ulonglong uVar3;
  ulonglong *puVar4;
  byte bVar5;
  sbyte sVar6;
  uint uVar7;
  ulonglong *puVar8;
  ulonglong *puVar9;
  ulonglong *puVar10;
  ulonglong uVar11;
  ulonglong *puVar12;
  ulonglong *puVar13;
  
  uVar1 = DAT_180021000;
  puVar8 = *(ulonglong **)*param_1;
  if (puVar8 == (ulonglong *)0x0) {
    uVar2 = 0xffffffff;
  }
  else {
    bVar5 = (byte)DAT_180021000 & 0x3f;
    puVar10 = (ulonglong *)
              ((DAT_180021000 ^ *puVar8) >> bVar5 | (DAT_180021000 ^ *puVar8) << 0x40 - bVar5);
    puVar8 = (ulonglong *)
             ((DAT_180021000 ^ puVar8[1]) >> bVar5 | (DAT_180021000 ^ puVar8[1]) << 0x40 - bVar5);
    if ((longlong)puVar10 - 1U < 0xfffffffffffffffe) {
      uVar7 = (uint)DAT_180021000 & 0x3f;
      puVar9 = puVar8;
      uVar3 = DAT_180021000;
      puVar13 = puVar10;
      while (puVar8 = puVar8 + -1, puVar10 <= puVar8) {
        if (*puVar8 != uVar1) {
          uVar3 = *puVar8 ^ uVar3;
          *puVar8 = uVar1;
          (*(code *)(uVar3 >> (sbyte)uVar7 | uVar3 << 0x40 - (sbyte)uVar7))();
          uVar7 = (uint)DAT_180021000 & 0x3f;
          uVar11 = DAT_180021000 ^ **(ulonglong **)*param_1;
          uVar3 = DAT_180021000 ^ (*(ulonglong **)*param_1)[1];
          sVar6 = (sbyte)uVar7;
          puVar12 = (ulonglong *)(uVar11 >> sVar6 | uVar11 << 0x40 - sVar6);
          puVar4 = (ulonglong *)(uVar3 >> sVar6 | uVar3 << 0x40 - sVar6);
          uVar3 = DAT_180021000;
          if ((puVar12 != puVar13) || (puVar4 != puVar9)) {
            puVar8 = puVar4;
            puVar9 = puVar4;
            puVar10 = puVar12;
            puVar13 = puVar12;
          }
        }
      }
      if (puVar10 != (ulonglong *)0xffffffffffffffff) {
        FUN_18000c960(puVar10);
        uVar3 = DAT_180021000;
      }
      **(ulonglong **)*param_1 = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 8) = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 0x10) = uVar3;
    }
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x18000badc; Evidence: ev_5413afc582ff5bd598ec44be317f893046645643320699c5619f7ae2eef47252 */

void FUN_18000badc(undefined8 param_1)

{
  undefined8 local_res8;
  undefined1 local_res10 [8];
  int local_res18 [2];
  int local_res20 [2];
  undefined8 *local_18;
  undefined8 local_10;
  
  local_10 = 0xfffffffffffffffe;
  local_18 = &local_res8;
  local_res18[0] = 2;
  local_res20[0] = 2;
  local_res8 = param_1;
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  return;
}


/* Address: 0x18000bb20; Evidence: ev_00caf53df115958f1ea1c6f54a29d4ce60224e084d708637872906c63c8cdf2f */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180021000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180021000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}


/* Address: 0x18000bb50; Evidence: ev_88eb667618bb85dc2b784c4ce212b094bf80e6c1c5b10f696e53722c6e1d2062 */

undefined8 FUN_18000bb50(void)

{
  DAT_180022470 = &PTR_DAT_1800210a0;
  return 0x180021001;
}


/* Address: 0x18000bb70; Evidence: ev_5c1abd32bcfb9524a3acd630dba0f8cb42420b70f71251e136237dec8a1cf4ef */

undefined8 FUN_18000bb70(void)

{
  undefined8 uVar1;
  
  _initialize_onexit_table((longlong *)&DAT_180022438);
  uVar1 = _initialize_onexit_table((longlong *)&DAT_180022450);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x18000bba0; Evidence: ev_507d918c250c8cd638c885b92a37afcb9532da812165ce8cf67c7121e439e645 */

undefined1 FUN_18000bba0(void)

{
  return 1;
}


/* Address: 0x18000bbb0; Evidence: ev_e73336e5839657543ce5f29f306fc232df55b0c4a7217ebde8f30d760e219dc3 */

undefined1 FUN_18000bbb0(void)

{
  FUN_18000b93c();
  return 1;
}


/* Address: 0x18000bbc0; Evidence: ev_93bb5ad1b8dcb0ed1e74fcb13d1283b77766eec5128d87c890769a933255a366 */

undefined1 FUN_18000bbc0(void)

{
  undefined8 uVar1;
  
  uVar1 = DAT_180021000;
  FUN_18000ac20(DAT_180021000);
  FUN_18000ae30(uVar1);
  FUN_18000ef74(uVar1);
  FUN_18000f1f0(uVar1);
  FUN_18000b36c(uVar1);
  return 1;
}


/* Address: 0x18000bc00; Evidence: ev_0662954f6ac4ee83396bb05ae9fc092bb6dbf160184db1a0e05640fb5a204c16 */

void FUN_18000bc00(void)

{
  __vcrt_uninitialize('\0');
  return;
}


/* Address: 0x18000bc10; Evidence: ev_06c46998357f34070de22154dc70dc4fb4317026e2a819de97fb4fb96648d333 */

undefined8 FUN_18000bc10(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_1800226f0;
  uVar2 = (ulonglong)uVar1;
  *DAT_1800226f0 = *DAT_1800226f0 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_1800226f0 != (uint *)&DAT_180021210)) {
    uVar2 = FUN_18000c960(DAT_1800226f0);
    DAT_1800226f0 = (uint *)&DAT_180021210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}


/* Address: 0x18000bc50; Evidence: ev_fb811d08264bfce5c987ee4a079144507c082696d791cf37243a862293c1873d */

undefined1 FUN_18000bc50(void)

{
  FUN_18000c960(DAT_180022c30);
  DAT_180022c30 = (LPVOID)0x0;
  FUN_18000c960(DAT_180022c38);
  DAT_180022c38 = (LPVOID)0x0;
  FUN_18000c960(DAT_180022710);
  DAT_180022710 = (LPVOID)0x0;
  FUN_18000c960(DAT_180022718);
  DAT_180022718 = (LPVOID)0x0;
  return 1;
}


/* Address: 0x18000bcac; Evidence: ev_a3dd91b95096a0967d324c78125874ee97625edc5715b547438d758905561fed */

void FUN_18000bcac(void)

{
  FUN_18000ee40(&PTR_FUN_1800167e0,(undefined8 *)&DAT_1800168e0);
  return;
}


/* Address: 0x18000bcc0; Evidence: ev_ab953137ed2b926b6abc29284e28d91a6be6aeca5f84c7e6f30e2c344d878e07 */

bool FUN_18000bcc0(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_18000c538();
  return p_Var1 != (__acrt_ptd *)0x0;
}


/* Address: 0x18000bcd4; Evidence: ev_3e3be151dac6bd44ca4268d44383c35f8c3c8173bb013f9048611a06c6c62cba */

undefined1 FUN_18000bcd4(void)

{
  FUN_18000c488();
  return 1;
}


/* Address: 0x18000bce4; Evidence: ev_44c7666a5356ddccad5834a55eb21f9fea7fc5120d3ee39708657f955358b583 */

/* Library Function - Single Match
    __acrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __acrt_uninitialize(bool param_1)

{
  int iVar1;
  undefined8 in_RAX;
  undefined4 extraout_var;
  undefined8 uVar2;
  
  if (param_1) {
    if (DAT_180022c28 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_18000eec0(0x1800167e0,0x1800168e0);
  return uVar2;
}


/* Address: 0x18000bd1c; Evidence: ev_8220b9aefcd5eefb1549f21f5aa9bf16a119663482a470af150be0f934b2dfeb */

undefined4 FUN_18000bd1c(void)

{
  undefined4 uVar1;
  
  uVar1 = FUN_18000c680();
  return CONCAT31((int3)((uint)uVar1 >> 8),1);
}


/* Address: 0x18000bd2c; Evidence: ev_351f93ef36b5ec1e4cab14306a1eea330151f2d80f2f0e6d52c490b5b011e469 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000bd2c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000c4d8();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000bd4c; Evidence: ev_70e0ed154b73123cb747cbf76cb7a92a2199c2c43a85d93859ed99e092b8e3db */

/* Library Function - Single Match
    abort
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl abort(void)

{
  code *pcVar1;
  BOOL BVar2;
  longlong lVar3;
  undefined1 *puVar4;
  undefined1 auStack_28 [8];
  undefined1 auStack_20 [32];
  
  puVar4 = auStack_28;
  lVar3 = __acrt_get_sigabrt_handler();
  if (lVar3 != 0) {
    FUN_18000ef94(0x16);
  }
  if ((DAT_180021080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x18000bd97;
    FUN_18000aab0(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x18000bda1;
  FUN_18000b384(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x18000bdb0; Evidence: ev_d0a03eaa4b4cef953c510de8acd257c72021bb48dfdfef68709fbb3a8610d23c */

undefined8 FUN_18000bdb0(char *param_1,longlong param_2,longlong param_3)

{
  char cVar1;
  __acrt_ptd *p_Var2;
  char *pcVar3;
  
  if ((param_1 != (char *)0x0) && (param_2 != 0)) {
    if (param_3 != 0) {
      pcVar3 = param_1;
      do {
        cVar1 = pcVar3[param_3 - (longlong)param_1];
        *pcVar3 = cVar1;
        pcVar3 = pcVar3 + 1;
        if (cVar1 == '\0') {
          return 0;
        }
        param_2 = param_2 + -1;
      } while (param_2 != 0);
      *param_1 = '\0';
      p_Var2 = FUN_18000c034();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000ad7c();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_18000c034();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000ad7c();
  return 0x16;
}


/* Address: 0x18000be30; Evidence: ev_7df9f3a0d52bea58216e99b838e9768c9b9598af7671a7de8fcba97eec93dfed */

LPVOID _calloc_base(ulonglong param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  SIZE_T dwBytes;
  
  if ((param_1 == 0) || (param_2 <= 0xffffffffffffffe0 / param_1)) {
    dwBytes = param_1 * param_2;
    if (dwBytes == 0) {
      dwBytes = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_1800227e8,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_1800104c0();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000adf0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c034();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000be40; Evidence: ev_791355810a90b30c8cf05aa6339205db4f9f5719e9f9c46eff27fee14093338d */

void FUN_18000be40(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000a990(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_18000c6d8(lVar1,param_1 + 3,param_1[1]);
  FUN_18000c744(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}


/* Address: 0x18000bec0; Evidence: ev_d6ee6ff6222175b98e5eb253792151902f915ed2ddf5cf3baa3454378f5a2741 */

/* Library Function - Single Match
    wcsncmp
   
   Library: Visual Studio 2005 Release */

int __cdecl wcsncmp(wchar_t *_Str1,wchar_t *_Str2,size_t _MaxCount)

{
  if (_MaxCount == 0) {
    return 0;
  }
  for (; ((_MaxCount = _MaxCount - 1, _MaxCount != 0 && (*_Str1 != L'\0')) && (*_Str1 == *_Str2));
      _Str1 = _Str1 + 1) {
    _Str2 = _Str2 + 1;
  }
  return (uint)(ushort)*_Str1 - (uint)(ushort)*_Str2;
}


/* Address: 0x18000bef4; Evidence: ev_62a52de202722c0d2f171950fe1745810725b9c2918eb13f7d0c5170c456379e */

uint FUN_18000bef4(uint param_1)

{
  longlong lVar1;
  uint uVar2;
  ulonglong uVar3;
  uint *puVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  ulonglong uVar8;
  ulonglong uVar9;
  
  if (param_1 != 0) {
    if (param_1 < 0xe) {
      return *(uint *)(&DAT_1800168e4 + (ulonglong)(param_1 - 1) * 8);
    }
    if (param_1 < 0x719) {
      uVar5 = 0x2d;
      uVar7 = 0;
      uVar8 = 0x2c;
      do {
        uVar9 = uVar5 >> 1;
        if (uVar9 == 0) {
          if (uVar5 != 0) {
            puVar4 = (uint *)(&DAT_1800168e0 + uVar7 * 8);
            if (param_1 != *puVar4) {
              puVar4 = (uint *)0x0;
            }
LAB_18000bf95:
            if (puVar4 != (uint *)0x0) {
              return puVar4[1];
            }
          }
          break;
        }
        uVar6 = uVar9 - 1;
        if ((uVar5 & 1) != 0) {
          uVar6 = uVar9;
        }
        lVar1 = uVar6 + uVar7;
        puVar4 = (uint *)(&DAT_1800168e0 + lVar1 * 8);
        if (param_1 == *puVar4) goto LAB_18000bf95;
        uVar3 = lVar1 - 1;
        uVar5 = uVar6;
        if (*puVar4 <= param_1) {
          uVar7 = lVar1 + 1;
          uVar3 = uVar8;
          uVar5 = uVar9;
        }
        uVar8 = uVar3;
      } while (uVar7 <= uVar3);
    }
  }
  if (param_1 - 0x13 < 0x12) {
    uVar2 = 0xd;
  }
  else {
    uVar2 = 0x16;
    if (param_1 - 0xbc < 0xf) {
      uVar2 = 8;
    }
  }
  return uVar2;
}


/* Address: 0x18000bfc4; Evidence: ev_329363d5f3ac268a876838d90d5783573b8faa0b3fef8b2a154074ee70205fe0 */

void FUN_18000bfc4(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = FUN_18000c010();
  *(uint *)p_Var2 = param_1;
  uVar1 = FUN_18000bef4(param_1);
  p_Var2 = FUN_18000c034();
  *(uint *)p_Var2 = uVar1;
  return;
}


/* Address: 0x18000bfec; Evidence: ev_d7e40f40d467f2a88cbad59479cc6d9fd835536b2fc421d9eba013328faa6bbb */

void FUN_18000bfec(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_18000bef4(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}


/* Address: 0x18000c010; Evidence: ev_ffbb6577bcb4e76260a96c1b4f1a7851ee10895d06a43389824cb4ecdabd735c */

__acrt_ptd * FUN_18000c010(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_18000c538();
  p_Var2 = p_Var1 + 0x24;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_180021094;
  }
  return p_Var2;
}


/* Address: 0x18000c034; Evidence: ev_b81fe7f7fc5209eb5a4f465a9f49e15f571347d902df473a0aba531e59af01bd */

__acrt_ptd * FUN_18000c034(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_18000c538();
  p_Var2 = p_Var1 + 0x20;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_180021090;
  }
  return p_Var2;
}


/* Address: 0x18000c058; Evidence: ev_bed57b233e90277becf598402c18fe753f1902ad98cab89654d98415e5d6bc73 */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_0ae27a3a962d80f24befdcbee591983d>,class <lambda_8d0ee55de4b1038c4002e0adecdf1839> &
   __ptr64,class <lambda_dc504788e8f1664fe9b84e20bfb512f2> >(class
   <lambda_0ae27a3a962d80f24befdcbee591983d> && __ptr64,class
   <lambda_8d0ee55de4b1038c4002e0adecdf1839> & __ptr64,class
   <lambda_dc504788e8f1664fe9b84e20bfb512f2> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_72d1df2b273a38828b1ce30cbf4cdab5>,class <lambda_876a65b173b8412d3a47c70a915b0cf4> &
   __ptr64,class <lambda_41932305e351933ebe8f8be3ed8bb5dc> >(class
   <lambda_72d1df2b273a38828b1ce30cbf4cdab5> && __ptr64,class
   <lambda_876a65b173b8412d3a47c70a915b0cf4> & __ptr64,class
   <lambda_41932305e351933ebe8f8be3ed8bb5dc> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  __acrt_lock(*param_2);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000c098; Evidence: ev_5f7eea532bd65a1a82678718cbec638c918c468eea2ee57ff378545dc47be77a */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_2d41944a1d46af3157314b8a01080d33>,class <lambda_8f455de75cd7d7f24b4096f044d8b9e6> &
   __ptr64,class <lambda_aa500f224e6afead328df44964fe2772> >(class
   <lambda_2d41944a1d46af3157314b8a01080d33> && __ptr64,class
   <lambda_8f455de75cd7d7f24b4096f044d8b9e6> & __ptr64,class
   <lambda_aa500f224e6afead328df44964fe2772> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_fb3a7dec4e47f37f22dae91bb15c9095>,class <lambda_698284760c8add0bfb0756c19673e34b> &
   __ptr64,class <lambda_dfb8eca1e75fef3034a8fb18dd509707> >(class
   <lambda_fb3a7dec4e47f37f22dae91bb15c9095> && __ptr64,class
   <lambda_698284760c8add0bfb0756c19673e34b> & __ptr64,class
   <lambda_dfb8eca1e75fef3034a8fb18dd509707> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  __acrt_lock(*param_2);
  replace_current_thread_locale_nolock(*(__acrt_ptd **)*param_3,(__crt_locale_data *)0x0);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000c0d8; Evidence: ev_9917e09efb2ba5f54c1163cbc1562c65cdb7f0e471ae18fa35286404c032920d */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_5e887d1dcbef67a5eb4283622ba103bf>,class <lambda_4466841279450cc726390878d4a41900> &
   __ptr64,class <lambda_341c25c0346d94847f1f3c463c57e077> >(class
   <lambda_5e887d1dcbef67a5eb4283622ba103bf> && __ptr64,class
   <lambda_4466841279450cc726390878d4a41900> & __ptr64,class
   <lambda_341c25c0346d94847f1f3c463c57e077> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_aa87e3671a710a21b5dc78c0bdf72e11>,class <lambda_92619d2358a28f41a33ba319515a20b9> &
   __ptr64,class <lambda_6992ecaafeb10aed2b74cb1fae11a551> >(class
   <lambda_aa87e3671a710a21b5dc78c0bdf72e11> && __ptr64,class
   <lambda_92619d2358a28f41a33ba319515a20b9> & __ptr64,class
   <lambda_6992ecaafeb10aed2b74cb1fae11a551> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  __acrt_lock(*param_2);
  replace_current_thread_locale_nolock
            (*(__acrt_ptd **)*param_3,(__crt_locale_data *)**(undefined8 **)param_3[1]);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000c120; Evidence: ev_2ccaf71e53bc74443bcf621000313859c72913c62759ce1670d3bf4b7f05faf3 */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_46352004c1216016012b18bd6f87e700>,class <lambda_3bd07e1a1191394380780325891bf33f> &
   __ptr64,class <lambda_334532d3f185bcaa59b5be82d7d22bff> >(class
   <lambda_46352004c1216016012b18bd6f87e700> && __ptr64,class
   <lambda_3bd07e1a1191394380780325891bf33f> & __ptr64,class
   <lambda_334532d3f185bcaa59b5be82d7d22bff> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_f2e299630e499de9f9a165e60fcd3db5>,class <lambda_2ae9d31cdba2644fcbeaf08da7c24588> &
   __ptr64,class <lambda_40d01ff24d0e7b3814fdbdcee8eab3c7> >(class
   <lambda_f2e299630e499de9f9a165e60fcd3db5> && __ptr64,class
   <lambda_2ae9d31cdba2644fcbeaf08da7c24588> & __ptr64,class
   <lambda_40d01ff24d0e7b3814fdbdcee8eab3c7> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  int iVar1;
  int *piVar2;
  
  __acrt_lock(*param_2);
  piVar2 = *(int **)(*(longlong *)*param_3 + 0x88);
  if (piVar2 != (int *)0x0) {
    LOCK();
    iVar1 = *piVar2;
    *piVar2 = *piVar2 + -1;
    UNLOCK();
    if ((iVar1 == 1) && (piVar2 != (int *)&DAT_180021210)) {
      FUN_18000c960(piVar2);
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000c180; Evidence: ev_460a7a98eef2ee270567cd211cb41681d53df6fa5784e38e7a5dc3d7d9ea2943 */

/* Library Function - Single Match
    void __cdecl construct_ptd_array(struct __acrt_ptd * __ptr64 const)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl construct_ptd_array(__acrt_ptd *param_1)

{
  undefined1 local_res10 [8];
  int local_res18 [2];
  int local_res20 [2];
  int local_38 [2];
  __acrt_ptd *local_30;
  undefined8 *local_28;
  __acrt_ptd **local_20;
  __acrt_ptd **local_18;
  undefined8 **local_10;
  
  local_20 = &local_30;
  local_res18[0] = 5;
  local_res20[0] = 5;
  local_18 = &local_30;
  local_10 = &local_28;
  local_38[0] = 4;
  local_38[1] = 4;
  local_28 = &DAT_180022470;
  *(undefined4 *)(param_1 + 0x28) = 1;
  *(undefined **)param_1 = &DAT_180016640;
  *(undefined4 *)(param_1 + 0x3a8) = 1;
  *(undefined **)(param_1 + 0x88) = &DAT_180021210;
  *(undefined2 *)(param_1 + 0xbc) = 0x43;
  *(undefined2 *)(param_1 + 0x1c2) = 0x43;
  *(undefined8 *)(param_1 + 0x3a0) = 0;
  local_30 = param_1;
  operator()<>(local_res10,local_res20,&local_20,local_res18);
  operator()<>(local_res10,local_38 + 1,&local_18,local_38);
  return;
}


/* Address: 0x18000c250; Evidence: ev_56da839f96430524883c5438983f694fef3832d229f6be9b82d2a9b96a3dcd27 */

void FUN_18000c250(__acrt_ptd *param_1)

{
  if (param_1 != (__acrt_ptd *)0x0) {
    destroy_ptd_array(param_1);
    FUN_18000c960(param_1);
  }
  return;
}


/* Address: 0x18000c270; Evidence: ev_8332096ec10ddfc759256a704f40ced3301b8e186f5879fb5866929e95ff3877 */

/* Library Function - Single Match
    void __cdecl destroy_ptd_array(struct __acrt_ptd * __ptr64 const)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl destroy_ptd_array(__acrt_ptd *param_1)

{
  undefined1 local_res10 [8];
  int local_res18 [2];
  int local_res20 [2];
  int local_28 [2];
  __acrt_ptd *local_20;
  __acrt_ptd **local_18;
  __acrt_ptd **local_10;
  
  local_18 = &local_20;
  local_res18[0] = 5;
  local_res20[0] = 5;
  local_10 = &local_20;
  local_28[0] = 4;
  local_28[1] = 4;
  local_20 = param_1;
  if (*(undefined **)param_1 != &DAT_180016640) {
    FUN_18000c960(*(undefined **)param_1);
  }
  FUN_18000c960(*(LPVOID *)(local_20 + 0x70));
  FUN_18000c960(*(LPVOID *)(local_20 + 0x58));
  FUN_18000c960(*(LPVOID *)(local_20 + 0x60));
  FUN_18000c960(*(LPVOID *)(local_20 + 0x68));
  FUN_18000c960(*(LPVOID *)(local_20 + 0x48));
  FUN_18000c960(*(LPVOID *)(local_20 + 0x50));
  FUN_18000c960(*(LPVOID *)(local_20 + 0x78));
  FUN_18000c960(*(LPVOID *)(local_20 + 0x80));
  FUN_18000c960(*(LPVOID *)(local_20 + 0x3c0));
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  operator()<>(local_res10,local_28 + 1,&local_10,local_28);
  return;
}


/* Address: 0x18000c368; Evidence: ev_bc4af360bd50f26b3039c669a217ffce79a9865224e4abf5e49790392e2f7a44 */

__acrt_ptd * FUN_18000c368(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_180021098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_180021098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_180021098,(PVOID)0x0);
        FUN_18000c960(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_18000c960((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_180021098,(PVOID)0x0);
    FUN_18000c960((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}


/* Address: 0x18000c420; Evidence: ev_a0b0761ad99e205401e4b34e42181b517d84a4ea9018bbd7ce787e74782495cc */

/* Library Function - Single Match
    void __cdecl replace_current_thread_locale_nolock(struct __acrt_ptd * __ptr64 const,struct
   __crt_locale_data * __ptr64 const)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl replace_current_thread_locale_nolock(__acrt_ptd *param_1,__crt_locale_data *param_2)

{
  undefined **ppuVar1;
  
  if (*(longlong *)(param_1 + 0x90) != 0) {
    __acrt_release_locale_ref(*(longlong *)(param_1 + 0x90));
    ppuVar1 = *(undefined ***)(param_1 + 0x90);
    if (((ppuVar1 != DAT_180022470) && (ppuVar1 != &PTR_DAT_1800210a0)) &&
       (*(int *)(ppuVar1 + 2) == 0)) {
      __acrt_free_locale(ppuVar1);
    }
  }
  *(__crt_locale_data **)(param_1 + 0x90) = param_2;
  if (param_2 != (__crt_locale_data *)0x0) {
    __acrt_add_locale_ref((longlong)param_2);
  }
  return;
}


/* Address: 0x18000c488; Evidence: ev_9ec6464a1afbc7330ff26eb6b8970a937236a0ec0062e3a2f0182a14011eaff5 */

void FUN_18000c488(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_180021098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_180021098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_180021098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_18000c960(p_Var1);
  }
  return;
}


/* Address: 0x18000c4d8; Evidence: ev_248860be8d371be781dd3211a67cbc7d32c604064ac59f756c6f99b9e7c87b9b */

void FUN_18000c4d8(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_18000c538();
  if (p_Var1 != (__acrt_ptd *)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000c4f4; Evidence: ev_fed810f2b29255f38e3559f544fbb3435fa92c60d5472066ceafd285874b0fa2 */

void FUN_18000c4f4(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_180021098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_180021098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_18000c368();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_18000c530;
    }
    return;
  }
LAB_18000c530:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000c538; Evidence: ev_5d8124df0accf82ad5ac05685acb4feeb42cffc18d7d39699a80f8e674791260 */

__acrt_ptd * FUN_18000c538(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180022468 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_180021098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_180021098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000c368();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_180021098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18000e90c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000c368();
    }
  }
  return p_Var2;
}


/* Address: 0x18000c5c8; Evidence: ev_abd80d089a740f2d387c7b84d6a4e06c494193ac0f2da053baae6340393d51d3 */

__acrt_ptd * FUN_18000c5c8(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_180021098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_180021098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_18000c368(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}


/* Address: 0x18000c630; Evidence: ev_11fd5e3330f089b7a685e861069c5149c1fb0cb8e76fca691027906bd34a4630 */

ulonglong FUN_18000c630(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180022468 = FUN_18000eab0();
  DAT_180021098 = FlsAlloc(FUN_18000c250);
  uVar2 = CONCAT44(extraout_var,DAT_180021098);
  if (DAT_180021098 != 0xffffffff) {
    p_Var3 = FUN_18000c538();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_18000c680();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x18000c680; Evidence: ev_89ca5d7c599cf2dab6db6c964eda5686a010b6d4dc9ba79ea4ed65b05725558c */

undefined4 FUN_18000c680(void)

{
  BOOL in_EAX;
  
  if (DAT_180021098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_180021098);
    DAT_180021098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}


/* Address: 0x18000c6a4; Evidence: ev_e6db251530b8ef36dd39bfb9115d2ba904f11c4420e1f8ae29f9a69b75f8016f */

/* Library Function - Single Match
    __acrt_update_locale_info
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_update_locale_info(longlong param_1,longlong *param_2)

{
  undefined **ppuVar1;
  
  if ((*param_2 != DAT_180022470) && ((DAT_180021858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x18000c6d8; Evidence: ev_48bcca41f5e92936ddb14a534d0a8443a6aa13c1d1a893cc368f2f0bfe6d67f2 */

void FUN_18000c6d8(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_180022470)[param_3]) && ((DAT_180021858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x18000c710; Evidence: ev_7bdb8156dd6e3150ab2de4b908a573fb4862492812de36a0b357a09f88ea89e2 */

void FUN_18000c710(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_1800226f0) && ((DAT_180021858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_18000dfd0();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x18000c744; Evidence: ev_ddee975d357d918b055d6ba8dbf75c71256a4ea7f331198b5d52cb8d426dbde8 */

void FUN_18000c744(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_1800226f0)[param_3]) && ((DAT_180021858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_18000dfd0();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x18000c77c; Evidence: ev_ed635e4409795dae82509894cc005a1f5457f4d53c930ff9e30c829e024bcd75 */

/* Library Function - Single Match
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_410d79af7f07d98d83a3f525b3859a53>,class <lambda_3e16ef9562a7dcce91392c22ab16ea36> &
   __ptr64,class <lambda_38119f0e861e05405d8a144b9b982f0a> >(class
   <lambda_410d79af7f07d98d83a3f525b3859a53> && __ptr64,class
   <lambda_3e16ef9562a7dcce91392c22ab16ea36> & __ptr64,class
   <lambda_38119f0e861e05405d8a144b9b982f0a> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __thiscall
__crt_seh_guarded_call<void>::
operator()<<lambda_410d79af7f07d98d83a3f525b3859a53>,<lambda_3e16ef9562a7dcce91392c22ab16ea36>&___ptr64,<lambda_38119f0e861e05405d8a144b9b982f0a>_>
          (__crt_seh_guarded_call<void> *this,<lambda_410d79af7f07d98d83a3f525b3859a53> *param_1,
          <lambda_3e16ef9562a7dcce91392c22ab16ea36> *param_2,
          <lambda_38119f0e861e05405d8a144b9b982f0a> *param_3)

{
  undefined **ppuVar1;
  longlong *plVar2;
  
  __acrt_lock(*(int *)param_1);
  for (plVar2 = &DAT_180022470; plVar2 != &DAT_180022478; plVar2 = plVar2 + 1) {
    if ((undefined **)*plVar2 != &PTR_DAT_1800210a0) {
      ppuVar1 = _updatetlocinfoEx_nolock(plVar2,&PTR_DAT_1800210a0);
      *plVar2 = (longlong)ppuVar1;
    }
  }
  __acrt_unlock(*(int *)param_3);
  return;
}


/* Address: 0x18000c7ec; Evidence: ev_ec4a2c43bba5424324cd16dd2f3b30b0faeb1f362e17f81a78ad8f9788ac8133 */

undefined4 FUN_18000c7ec(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18002246c;
  LOCK();
  DAT_18002246c = 1;
  UNLOCK();
  return uVar1;
}


/* Address: 0x18000c800; Evidence: ev_4830524df7cedd09efe4c5e570ddb680fddd68b9d746e75ec1b4f8cc0dcddb44 */

/* Library Function - Single Match
    __acrt_uninitialize_locale
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_uninitialize_locale(void)

{
  <lambda_3e16ef9562a7dcce91392c22ab16ea36> local_res8 [8];
  undefined4 local_res10 [2];
  undefined4 local_res18 [4];
  
  local_res10[0] = 4;
  local_res18[0] = 4;
  __crt_seh_guarded_call<void>::
  operator()<<lambda_410d79af7f07d98d83a3f525b3859a53>,<lambda_3e16ef9562a7dcce91392c22ab16ea36>&___ptr64,<lambda_38119f0e861e05405d8a144b9b982f0a>_>
            ((__crt_seh_guarded_call<void> *)local_res8,
             (<lambda_410d79af7f07d98d83a3f525b3859a53> *)local_res18,local_res8,
             (<lambda_38119f0e861e05405d8a144b9b982f0a> *)local_res10);
  return;
}


/* Address: 0x18000c830; Evidence: ev_a8f549d6d2e4bb968526813c527cf218703ed23b2ad601f6cd60a1c067bfdd36 */

/* Library Function - Single Match
    __acrt_initialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong __acrt_initialize_locks(void)

{
  BOOL BVar1;
  undefined4 extraout_var;
  ulonglong uVar2;
  uint uVar3;
  
  uVar2 = 0;
  do {
    BVar1 = InitializeCriticalSectionEx((LPCRITICAL_SECTION)(&DAT_180022480 + uVar2 * 0x28),4000,0);
    if (BVar1 == 0) {
      uVar2 = __acrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_1800226d8 = DAT_1800226d8 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 < 0xf);
  return CONCAT71((int7)(CONCAT44(extraout_var,BVar1) >> 8),1);
}


/* Address: 0x18000c878; Evidence: ev_494c81f614859596f4c8e835f190436ed6f17b8174b0b0c82a1cd4898ffb6d82 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c88a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_180022480 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x18000c8a0; Evidence: ev_ba70214a02d006722f56c27c989b1a2efbe82ab108add61798e7650c13b0cb5e */

/* Library Function - Single Match
    __acrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_1800226d8;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_180022480 + uVar1 * 0x28));
    DAT_1800226d8 = DAT_1800226d8 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000c8d8; Evidence: ev_24e6bb233add30a7cb31e2dea78d92d210efda81256404c55d0bd57b8f33b321 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c8ea. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_180022480 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x18000c900; Evidence: ev_d1e3250491a236f3e0135d043b9c6b9e6742bae1b347fa55fa7adda5679e2eca */

/* Library Function - Single Match
    _malloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID _malloc_base(ulonglong param_1)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  
  if (param_1 < 0xffffffffffffffe1) {
    if (param_1 == 0) {
      param_1 = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_1800227e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_1800104c0();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000adf0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c034();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000c960; Evidence: ev_04070d9304adb68513890fe8147dc0b7d88503082832996b046817e961bf0966 */

void FUN_18000c960(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800227e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000bef4(DVar2);
    p_Var4 = FUN_18000c034();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000c9b8; Evidence: ev_8a2a07f4bae103ffcc66a2ee529f9895ceaea64efc3d20c4ddedbd3e8c3df8ff */

uint FUN_18000c9b8(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}


/* Address: 0x18000c9d4; Evidence: ev_263ddf62df25dd8b3a950938f5dea5aa5b4ad1de659173d5a14f2271d66f5fdc */

uint FUN_18000c9d4(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}


/* Address: 0x18000c9ec; Evidence: ev_9c37a1e00d405565ceb3dfa758e9bfbd9756415472e6c8d1d113b3f92b2fa54d */

bool FUN_18000c9ec(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_18000c9d4();
  if ((char)uVar1 == '\0') {
    FUN_18000e84c(local_res8);
  }
  return local_res8[0] != 1;
}


/* Address: 0x18000ca20; Evidence: ev_002c43f388e53156af1da83961854dec964862e700aec7de01972d888b960f51 */

/* Library Function - Single Match
    _calloc_base
   
   Library: Visual Studio 2019 Release */

LPVOID _calloc_base(ulonglong param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  SIZE_T dwBytes;
  
  if ((param_1 == 0) || (param_2 <= 0xffffffffffffffe0 / param_1)) {
    dwBytes = param_1 * param_2;
    if (dwBytes == 0) {
      dwBytes = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_1800227e8,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_1800104c0();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000adf0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c034();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000caa0; Evidence: ev_ff1ace5ae809ecd4712061783f8604ea5ae9634f3f2a21d42c2200fc20eebf96 */

ulonglong FUN_18000caa0(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}


/* Address: 0x18000cab4; Evidence: ev_9f7488945a5a4ca3f6bbac7977c84a2991562ed60214235c4b0edb489c933329 */

uint FUN_18000cab4(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  uint uVar5;
  ulonglong uVar6;
  bool bVar7;
  
  if (param_1 == (char *)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      FUN_18000c960(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_18000e368(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_18000c960(*(LPVOID *)(param_2 + 0x10));
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          pvVar3 = _malloc_base(uVar6 * 2);
          *(LPVOID *)(param_2 + 0x10) = pvVar3;
          uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
          if (pvVar3 != (LPVOID)0x0) {
            uVar5 = 0;
          }
          *(bool *)(param_2 + 0x28) = pvVar3 != (LPVOID)0x0;
          *(ulonglong *)(param_2 + 0x18) = -(ulonglong)(pvVar3 != (LPVOID)0x0) & uVar6;
          if (uVar5 != 0) {
            return uVar5;
          }
        }
        iVar1 = FUN_18000e368(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000bfc4(DVar2);
      p_Var4 = FUN_18000c034();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_18000c960(*(LPVOID *)(param_2 + 0x10));
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
      pvVar3 = _malloc_base(2);
      *(LPVOID *)(param_2 + 0x10) = pvVar3;
      bVar7 = pvVar3 != (LPVOID)0x0;
      uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
      if (bVar7) {
        uVar5 = 0;
      }
      *(bool *)(param_2 + 0x28) = bVar7;
      *(ulonglong *)(param_2 + 0x18) = (ulonglong)bVar7;
      if (uVar5 != 0) {
        return uVar5;
      }
    }
    **(undefined2 **)(param_2 + 0x10) = 0;
  }
  *(undefined8 *)(param_2 + 0x20) = 0;
  return 0;
}


/* Address: 0x18000cc54; Evidence: ev_8d144f1304d54ff5af38676035c81ad8ec547115551f530a5477922f78ed35a1 */

uint FUN_18000cc54(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  uint uVar5;
  ulonglong uVar6;
  bool bVar7;
  
  if (param_1 == (short *)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      FUN_18000c960(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != 0) {
      iVar1 = FUN_18000e3f8(param_4,0,param_1,0xffffffff);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_18000c960(*(LPVOID *)(param_2 + 0x10));
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          pvVar3 = _malloc_base(uVar6);
          *(LPVOID *)(param_2 + 0x10) = pvVar3;
          uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
          if (pvVar3 != (LPVOID)0x0) {
            uVar5 = 0;
          }
          *(bool *)(param_2 + 0x28) = pvVar3 != (LPVOID)0x0;
          *(ulonglong *)(param_2 + 0x18) = -(ulonglong)(pvVar3 != (LPVOID)0x0) & uVar6;
          if (uVar5 != 0) {
            return uVar5;
          }
        }
        iVar1 = FUN_18000e3f8(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000bfc4(DVar2);
      p_Var4 = FUN_18000c034();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_18000c960(*(LPVOID *)(param_2 + 0x10));
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
      pvVar3 = _malloc_base(1);
      *(LPVOID *)(param_2 + 0x10) = pvVar3;
      bVar7 = pvVar3 != (LPVOID)0x0;
      uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
      if (bVar7) {
        uVar5 = 0;
      }
      *(bool *)(param_2 + 0x28) = bVar7;
      *(ulonglong *)(param_2 + 0x18) = (ulonglong)bVar7;
      if (uVar5 != 0) {
        return uVar5;
      }
    }
    **(undefined1 **)(param_2 + 0x10) = 0;
  }
  *(undefined8 *)(param_2 + 0x20) = 0;
  return 0;
}


/* Address: 0x18000ce00; Evidence: ev_aedc9c527f372ed85fbf122b7c10afa4a0be865f9d71b58bb4a7e9ef08f11483 */

ulonglong FUN_18000ce00(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  __acrt_ptd *p_Var2;
  ulonglong uVar3;
  byte *pbVar4;
  LPVOID pvVar5;
  longlong lVar6;
  longlong *plVar7;
  longlong *plVar8;
  char *pcVar9;
  ulonglong uVar10;
  longlong *plVar11;
  longlong lVar12;
  longlong local_res10;
  ulonglong local_res18;
  char *local_res20;
  longlong *local_58;
  longlong *plStack_50;
  undefined8 local_48;
  
  if (param_2 == (undefined8 *)0x0) {
    p_Var2 = FUN_18000c034();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000ad7c();
    uVar3 = 0x16;
  }
  else {
    *param_2 = 0;
    pbVar4 = (byte *)*param_1;
    local_58 = (longlong *)0x0;
    plStack_50 = (longlong *)0x0;
    local_48 = 0;
    while (plVar7 = plStack_50, plVar8 = local_58, pbVar4 != (byte *)0x0) {
      local_res10 = CONCAT53(local_res10._3_5_,0x3f2a);
      pbVar4 = FUN_180010a70(pbVar4,(byte *)&local_res10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000d03c((longlong)*param_1,0,0,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_18000c960((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000cf4f;
        }
      }
      else {
        uVar10 = FUN_18000d1c0((uchar *)*param_1,pbVar4,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_18000c960((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000cf4f;
        }
      }
      param_1 = param_1 + 1;
      pbVar4 = (byte *)*param_1;
    }
    uVar10 = ((longlong)plStack_50 - (longlong)local_58 >> 3) + 1;
    local_res18 = 0;
    for (plVar11 = local_58; plVar11 != plStack_50; plVar11 = plVar11 + 1) {
      lVar6 = -1;
      do {
        lVar6 = lVar6 + 1;
      } while (*(char *)(*plVar11 + lVar6) != '\0');
      local_res18 = local_res18 + 1 + lVar6;
    }
    pvVar5 = __acrt_allocate_buffer_for_argv(uVar10,local_res18,1);
    if (pvVar5 == (LPVOID)0x0) {
      FUN_18000c960((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000c960((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000cf4f:
      FUN_18000c960(plVar8);
    }
    else {
      pcVar9 = (char *)((longlong)pvVar5 + uVar10 * 8);
      local_res20 = pcVar9;
      if (plVar8 != plVar7) {
        local_res10 = (longlong)pvVar5 - (longlong)plVar8;
        plVar11 = plVar8;
        do {
          lVar6 = -1;
          do {
            lVar12 = lVar6;
            lVar6 = lVar12 + 1;
          } while (*(char *)(*plVar11 + lVar6) != '\0');
          lVar12 = lVar12 + 2;
          iVar1 = FUN_1800108a0(pcVar9,(longlong)(local_res20 + (local_res18 - (longlong)pcVar9)),
                                *plVar11,lVar12);
          if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
            _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
          }
          *(char **)(local_res10 + (longlong)plVar11) = pcVar9;
          pcVar9 = pcVar9 + lVar12;
          plVar11 = plVar11 + 1;
        } while (plVar11 != plVar7);
      }
      *param_2 = pvVar5;
      FUN_18000c960((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000c960((LPVOID)*plVar11);
      }
      FUN_18000c960(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000d03c; Evidence: ev_0783c97071d85ae4dceb5e53e475c33d58adfc80e804e32d829d0c52adc22055 */

undefined8 FUN_18000d03c(longlong param_1,longlong param_2,ulonglong param_3,longlong *param_4)

{
  int iVar1;
  char *pcVar2;
  LPVOID pvVar3;
  longlong lVar4;
  ulonglong uVar6;
  undefined8 uVar7;
  ulonglong uVar8;
  longlong lVar5;
  
  uVar7 = 0;
  lVar4 = -1;
  do {
    lVar5 = lVar4;
    lVar4 = lVar5 + 1;
  } while (*(char *)(param_1 + lVar4) != '\0');
  uVar6 = lVar5 + 2;
  if (~param_3 < uVar6) {
    return 0xc;
  }
  uVar8 = param_3 + 1 + uVar6;
  pcVar2 = _calloc_base(uVar8,1);
  if (((param_3 != 0) && (iVar1 = FUN_1800108a0(pcVar2,uVar8,param_2,param_3), iVar1 != 0)) ||
     (iVar1 = FUN_1800108a0(pcVar2 + param_3,uVar8 - param_3,param_1,uVar6), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  if (param_4[1] == param_4[2]) {
    if (*param_4 == 0) {
      pvVar3 = _calloc_base(4,8);
      *param_4 = (longlong)pvVar3;
      FUN_18000c960((LPVOID)0x0);
      lVar4 = *param_4;
      if (lVar4 != 0) {
        param_4[1] = lVar4;
        param_4[2] = lVar4 + 0x20;
        goto LAB_18000d192;
      }
    }
    else {
      uVar6 = param_4[2] - *param_4 >> 3;
      if (uVar6 < 0x8000000000000000) {
        pvVar3 = _recalloc_base((LPVOID)*param_4,uVar6 * 2,8);
        if (pvVar3 != (LPVOID)0x0) {
          *param_4 = (longlong)pvVar3;
          param_4[1] = (longlong)((longlong)pvVar3 + uVar6 * 8);
          param_4[2] = (longlong)((longlong)pvVar3 + uVar6 * 0x10);
          FUN_18000c960((LPVOID)0x0);
          goto LAB_18000d192;
        }
        FUN_18000c960((LPVOID)0x0);
      }
    }
    uVar7 = 0xc;
    FUN_18000c960(pcVar2);
  }
  else {
LAB_18000d192:
    *(char **)param_4[1] = pcVar2;
    param_4[1] = param_4[1] + 8;
  }
  FUN_18000c960((LPVOID)0x0);
  return uVar7;
}


/* Address: 0x18000d1c0; Evidence: ev_4187b690d46305057d8107c1db84bb306e6ac6f9637529febbdf9fe45e8cc388 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000d1c0(uchar *param_1,uchar *param_2,longlong *param_3)

{
  byte bVar1;
  char *pcVar2;
  uint uVar3;
  BOOL BVar4;
  ulonglong uVar5;
  HANDLE hFindFile;
  INT_PTR IVar6;
  ulonglong uVar7;
  LPCWSTR lpFileName;
  char *pcVar8;
  longlong lVar9;
  longlong lVar10;
  byte bVar11;
  undefined1 auStackY_378 [32];
  undefined1 local_348 [8];
  ulonglong local_340;
  undefined8 local_338;
  undefined8 local_330;
  LPCWSTR local_328;
  undefined8 local_320;
  undefined8 local_318;
  char local_310;
  longlong local_308;
  longlong local_300;
  char local_2f0;
  longlong local_2e8;
  longlong local_2e0;
  char local_2d0;
  undefined8 local_2c8;
  undefined8 local_2c0;
  char *local_2b8;
  undefined8 local_2b0;
  undefined8 local_2a8;
  char local_2a0;
  _WIN32_FIND_DATAW local_298;
  ulonglong local_48;
  
  local_48 = DAT_180021000 ^ (ulonglong)auStackY_378;
  while ((param_2 != param_1 &&
         ((0x2d < (byte)(*param_2 - 0x2f) ||
          ((0x200000000801U >> ((longlong)(char)(*param_2 - 0x2f) & 0x3fU) & 1) == 0))))) {
    param_2 = (uchar *)FUN_180010e28(param_1,param_2);
  }
  if ((*param_2 == ':') && (param_2 != param_1 + 1)) {
    uVar5 = FUN_18000d03c((longlong)param_1,0,0,param_3);
  }
  else {
    bVar11 = *param_2 - 0x2f;
    uVar3 = 0;
    if ((0x2d < bVar11) ||
       (bVar1 = 1, (0x200000000801U >> ((longlong)(char)bVar11 & 0x3fU) & 1) == 0)) {
      bVar1 = 0;
    }
    uVar5 = -(ulonglong)bVar1 & (ulonglong)(param_2 + (1 - (longlong)param_1));
    local_340 = uVar5;
    FUN_180013a30((undefined1 (*) [32])&local_298,0,0x250);
    local_338 = 0;
    local_330 = 0;
    local_328 = (LPCWSTR)0x0;
    local_320 = 0;
    local_318 = 0;
    local_310 = '\0';
    FUN_18000a710(&local_308,(longlong *)0x0);
    if (*(int *)(local_300 + 0xc) == 0xfde9) {
      if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
      uVar3 = 0xfde9;
    }
    else {
      IVar6 = FUN_18000e8a8();
      if ((int)IVar6 == 0) {
        if (local_2f0 != '\0') {
          *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
        }
        uVar3 = 1;
      }
      else if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
    }
    uVar3 = FUN_18000cab4((char *)param_1,(longlong)&local_338,local_348,uVar3);
    lpFileName = local_328;
    if (uVar3 != 0) {
      lpFileName = (LPCWSTR)0x0;
    }
    hFindFile = FindFirstFileExW(lpFileName,FindExInfoStandard,&local_298,FindExSearchNameMatch,
                                 (LPVOID)0x0,0);
    if (hFindFile == (HANDLE)0xffffffffffffffff) {
      uVar5 = FUN_18000d03c((longlong)param_1,0,0,param_3);
      uVar5 = uVar5 & 0xffffffff;
      if (local_310 != '\0') {
        FUN_18000c960(local_328);
      }
    }
    else {
      lVar10 = param_3[1] - *param_3 >> 3;
      do {
        local_2c8 = 0;
        local_2c0 = 0;
        local_2b8 = (char *)0x0;
        local_2b0 = 0;
        local_2a8 = 0;
        local_2a0 = '\0';
        FUN_18000a710(&local_2e8,(longlong *)0x0);
        uVar3 = 0xfde9;
        if (*(int *)(local_2e0 + 0xc) == 0xfde9) {
          if (local_2d0 != '\0') {
            *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
          }
        }
        else {
          IVar6 = FUN_18000e8a8();
          if ((int)IVar6 == 0) {
            if (local_2d0 != '\0') {
              *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
            }
            uVar3 = 1;
          }
          else {
            if (local_2d0 != '\0') {
              *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
            }
            uVar3 = 0;
          }
        }
        uVar3 = FUN_18000cc54(local_298.cFileName,(longlong)&local_2c8,local_348,uVar3);
        pcVar2 = local_2b8;
        pcVar8 = local_2b8;
        if (uVar3 != 0) {
          pcVar8 = (char *)0x0;
        }
        if ((*pcVar8 == '.') && ((pcVar8[1] == '\0' || ((pcVar8[1] == '.' && (pcVar8[2] == '\0')))))
           ) {
          if (local_2a0 != '\0') {
            FUN_18000c960(local_2b8);
          }
        }
        else {
          uVar7 = FUN_18000d03c((longlong)pcVar8,(longlong)param_1,uVar5,param_3);
          if ((int)uVar7 != 0) {
            if (local_2a0 != '\0') {
              FUN_18000c960(pcVar2);
            }
            FindClose(hFindFile);
            if (local_310 == '\0') {
              return uVar7 & 0xffffffff;
            }
            FUN_18000c960(local_328);
            return uVar7 & 0xffffffff;
          }
          uVar5 = local_340;
          if (local_2a0 != (char)uVar7) {
            FUN_18000c960(pcVar2);
            uVar5 = local_340;
          }
        }
        BVar4 = FindNextFileW(hFindFile,&local_298);
      } while (BVar4 != 0);
      lVar9 = param_3[1] - *param_3 >> 3;
      if (lVar10 != lVar9) {
        FUN_180010500((undefined1 *)(*param_3 + lVar10 * 8),lVar9 - lVar10,8,FUN_18000caa0);
      }
      FindClose(hFindFile);
      if (local_310 != '\0') {
        FUN_18000c960(local_328);
      }
      uVar5 = 0;
    }
  }
  return uVar5;
}


/* Address: 0x18000d520; Evidence: ev_d97779ea1be9ed34c6c83a34d2453e32b365c48210d0accf1d0da6b0801b79d6 */

ulonglong thunk_FUN_18000ce00(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  __acrt_ptd *p_Var2;
  ulonglong uVar3;
  byte *pbVar4;
  LPVOID pvVar5;
  longlong lVar6;
  longlong *plVar7;
  longlong *plVar8;
  char *pcVar9;
  ulonglong uVar10;
  longlong *plVar11;
  longlong lVar12;
  longlong lStackX_10;
  ulonglong uStackX_18;
  char *pcStackX_20;
  longlong *plStack_58;
  longlong *plStack_50;
  undefined8 uStack_48;
  
  if (param_2 == (undefined8 *)0x0) {
    p_Var2 = FUN_18000c034();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000ad7c();
    uVar3 = 0x16;
  }
  else {
    *param_2 = 0;
    pbVar4 = (byte *)*param_1;
    plStack_58 = (longlong *)0x0;
    plStack_50 = (longlong *)0x0;
    uStack_48 = 0;
    while (plVar7 = plStack_50, plVar8 = plStack_58, pbVar4 != (byte *)0x0) {
      lStackX_10 = CONCAT53(lStackX_10._3_5_,0x3f2a);
      pbVar4 = FUN_180010a70(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000d03c((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000c960((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000cf4f;
        }
      }
      else {
        uVar10 = FUN_18000d1c0((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000c960((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000cf4f;
        }
      }
      param_1 = param_1 + 1;
      pbVar4 = (byte *)*param_1;
    }
    uVar10 = ((longlong)plStack_50 - (longlong)plStack_58 >> 3) + 1;
    uStackX_18 = 0;
    for (plVar11 = plStack_58; plVar11 != plStack_50; plVar11 = plVar11 + 1) {
      lVar6 = -1;
      do {
        lVar6 = lVar6 + 1;
      } while (*(char *)(*plVar11 + lVar6) != '\0');
      uStackX_18 = uStackX_18 + 1 + lVar6;
    }
    pvVar5 = __acrt_allocate_buffer_for_argv(uVar10,uStackX_18,1);
    if (pvVar5 == (LPVOID)0x0) {
      FUN_18000c960((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000c960((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000cf4f:
      FUN_18000c960(plVar8);
    }
    else {
      pcVar9 = (char *)((longlong)pvVar5 + uVar10 * 8);
      pcStackX_20 = pcVar9;
      if (plVar8 != plVar7) {
        lStackX_10 = (longlong)pvVar5 - (longlong)plVar8;
        plVar11 = plVar8;
        do {
          lVar6 = -1;
          do {
            lVar12 = lVar6;
            lVar6 = lVar12 + 1;
          } while (*(char *)(*plVar11 + lVar6) != '\0');
          lVar12 = lVar12 + 2;
          iVar1 = FUN_1800108a0(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
                                *plVar11,lVar12);
          if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
            _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
          }
          *(char **)(lStackX_10 + (longlong)plVar11) = pcVar9;
          pcVar9 = pcVar9 + lVar12;
          plVar11 = plVar11 + 1;
        } while (plVar11 != plVar7);
      }
      *param_2 = pvVar5;
      FUN_18000c960((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000c960((LPVOID)*plVar11);
      }
      FUN_18000c960(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000d528; Evidence: ev_1a07957837fb84218a10c0dd3feb6655c3656ba095016454af9700562637c608 */

undefined4 FUN_18000d528(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  __acrt_ptd *p_Var3;
  
  if (param_1 == (short *)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != 0) {
      iVar1 = FUN_18000e3f8(param_4,0,param_1,0xffffffff);
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < (ulonglong)(longlong)iVar1) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          goto LAB_18000d57c;
        }
        iVar1 = FUN_18000e3f8(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000bfc4(DVar2);
      p_Var3 = FUN_18000c034();
      return *(undefined4 *)p_Var3;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
LAB_18000d57c:
      p_Var3 = FUN_18000c034();
      *(undefined4 *)p_Var3 = 0x22;
      *(undefined1 *)(param_2 + 0x28) = 0;
      *(undefined8 *)(param_2 + 0x18) = 0;
      return 0x22;
    }
    **(undefined1 **)(param_2 + 0x10) = 0;
  }
  *(undefined8 *)(param_2 + 0x20) = 0;
  return 0;
}


/* Address: 0x18000d644; Evidence: ev_d6976376ccd473fdd2da2a1739fb394810d0167fc545bf00f8e9f66ae1744321 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000d644(HMODULE param_1,undefined8 param_2,ulonglong param_3)

{
  DWORD DVar1;
  INT_PTR IVar2;
  uint uVar3;
  undefined1 auStack_2a8 [32];
  undefined1 local_288 [8];
  longlong local_280;
  longlong local_278;
  char local_268;
  undefined8 local_260;
  ulonglong local_258;
  undefined8 local_250;
  ulonglong local_248;
  ulonglong local_240;
  undefined1 local_238;
  WCHAR local_228 [264];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_2a8;
  DVar1 = GetModuleFileNameW(param_1,local_228,0x105);
  if (DVar1 == 0) {
    DVar1 = GetLastError();
    FUN_18000bfc4(DVar1);
    local_240 = 0;
  }
  else {
    local_240 = 0;
    local_238 = 0;
    local_260 = param_2;
    local_258 = param_3 & 0xffffffff;
    local_250 = param_2;
    local_248 = param_3 & 0xffffffff;
    FUN_18000a710(&local_280,(longlong *)0x0);
    uVar3 = 0xfde9;
    if (*(int *)(local_278 + 0xc) == 0xfde9) {
      if (local_268 != '\0') {
        *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
      }
    }
    else {
      IVar2 = FUN_18000e8a8();
      if ((int)IVar2 == 0) {
        if (local_268 != (char)IVar2) {
          *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
        }
        uVar3 = 1;
      }
      else {
        if (local_268 != '\0') {
          *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
        }
        uVar3 = 0;
      }
    }
    FUN_18000d528(local_228,(longlong)&local_260,local_288,uVar3);
    local_240 = local_240 & 0xffffffff;
  }
  return local_240;
}


/* Address: 0x18000d768; Evidence: ev_634b08d69971eb1f0fee6cd5ad05a6a13af4980aa56ffc69983b676dcd149835 */

void FUN_18000d768(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  int iVar1;
  int *piVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  __acrt_ptd *p_Var5;
  undefined1 (*pauVar6) [32];
  undefined1 (*pauVar7) [32];
  longlong lVar8;
  
  __acrt_lock(*param_2);
  puVar4 = (undefined8 *)(*(longlong *)(*(longlong *)*param_3 + 0x88) + 0x18);
  if (DAT_1800226e0 == (undefined1 (*) [32])0x0) {
LAB_18000d81b:
    p_Var5 = FUN_18000c034();
    *(undefined4 *)p_Var5 = 0x16;
    FUN_18000ad7c();
  }
  else {
    if (puVar4 == (undefined8 *)0x0) {
      FUN_180013a30(DAT_1800226e0,0,0x101);
      goto LAB_18000d81b;
    }
    lVar8 = 2;
    pauVar7 = DAT_1800226e0;
    do {
      uVar3 = puVar4[1];
      *(undefined8 *)*pauVar7 = *puVar4;
      *(undefined8 *)(*pauVar7 + 8) = uVar3;
      uVar3 = puVar4[3];
      *(undefined8 *)(*pauVar7 + 0x10) = puVar4[2];
      *(undefined8 *)(*pauVar7 + 0x18) = uVar3;
      uVar3 = puVar4[5];
      *(undefined8 *)pauVar7[1] = puVar4[4];
      *(undefined8 *)(pauVar7[1] + 8) = uVar3;
      uVar3 = puVar4[7];
      *(undefined8 *)(pauVar7[1] + 0x10) = puVar4[6];
      *(undefined8 *)(pauVar7[1] + 0x18) = uVar3;
      uVar3 = puVar4[9];
      *(undefined8 *)pauVar7[2] = puVar4[8];
      *(undefined8 *)(pauVar7[2] + 8) = uVar3;
      uVar3 = puVar4[0xb];
      *(undefined8 *)(pauVar7[2] + 0x10) = puVar4[10];
      *(undefined8 *)(pauVar7[2] + 0x18) = uVar3;
      uVar3 = puVar4[0xd];
      *(undefined8 *)pauVar7[3] = puVar4[0xc];
      *(undefined8 *)(pauVar7[3] + 8) = uVar3;
      pauVar6 = pauVar7 + 4;
      uVar3 = puVar4[0xf];
      *(undefined8 *)(pauVar7[3] + 0x10) = puVar4[0xe];
      *(undefined8 *)(pauVar7[3] + 0x18) = uVar3;
      puVar4 = puVar4 + 0x10;
      lVar8 = lVar8 + -1;
      pauVar7 = pauVar6;
    } while (lVar8 != 0);
    (*pauVar6)[0] = *(undefined1 *)puVar4;
  }
  lVar8 = 2;
  puVar4 = (undefined8 *)(*(longlong *)(*(longlong *)*param_3 + 0x88) + 0x119);
  if (DAT_1800226e8 != (undefined1 (*) [32])0x0) {
    pauVar7 = DAT_1800226e8;
    if (puVar4 != (undefined8 *)0x0) {
      do {
        uVar3 = puVar4[1];
        *(undefined8 *)*pauVar7 = *puVar4;
        *(undefined8 *)(*pauVar7 + 8) = uVar3;
        uVar3 = puVar4[3];
        *(undefined8 *)(*pauVar7 + 0x10) = puVar4[2];
        *(undefined8 *)(*pauVar7 + 0x18) = uVar3;
        uVar3 = puVar4[5];
        *(undefined8 *)pauVar7[1] = puVar4[4];
        *(undefined8 *)(pauVar7[1] + 8) = uVar3;
        uVar3 = puVar4[7];
        *(undefined8 *)(pauVar7[1] + 0x10) = puVar4[6];
        *(undefined8 *)(pauVar7[1] + 0x18) = uVar3;
        uVar3 = puVar4[9];
        *(undefined8 *)pauVar7[2] = puVar4[8];
        *(undefined8 *)(pauVar7[2] + 8) = uVar3;
        uVar3 = puVar4[0xb];
        *(undefined8 *)(pauVar7[2] + 0x10) = puVar4[10];
        *(undefined8 *)(pauVar7[2] + 0x18) = uVar3;
        uVar3 = puVar4[0xd];
        *(undefined8 *)pauVar7[3] = puVar4[0xc];
        *(undefined8 *)(pauVar7[3] + 8) = uVar3;
        uVar3 = puVar4[0xf];
        *(undefined8 *)(pauVar7[3] + 0x10) = puVar4[0xe];
        *(undefined8 *)(pauVar7[3] + 0x18) = uVar3;
        puVar4 = puVar4 + 0x10;
        lVar8 = lVar8 + -1;
        pauVar7 = pauVar7 + 4;
      } while (lVar8 != 0);
      goto LAB_18000d8cc;
    }
    FUN_180013a30(DAT_1800226e8,0,0x100);
  }
  p_Var5 = FUN_18000c034();
  *(undefined4 *)p_Var5 = 0x16;
  FUN_18000ad7c();
LAB_18000d8cc:
  piVar2 = (int *)**(undefined8 **)param_3[1];
  LOCK();
  iVar1 = *piVar2;
  *piVar2 = *piVar2 + -1;
  UNLOCK();
  if ((iVar1 == 1) && ((undefined *)**(undefined8 **)param_3[1] != &DAT_180021210)) {
    FUN_18000c960((LPVOID)**(undefined8 **)param_3[1]);
  }
  **(undefined8 **)param_3[1] = *(undefined8 *)(*(longlong *)*param_3 + 0x88);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000d938; Evidence: ev_39ad1adc5354d0d61e7b46b2f5a022f578dac461f6c7051103573764493957aa */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_18000a710(&local_28,(longlong *)0x0);
  DAT_1800226f8 = 0;
  if (param_1 == -2) {
    DAT_1800226f8 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_1800226f8 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_1800226f8 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}


/* Address: 0x18000d9b8; Evidence: ev_a0a1087f770670d6893aafad5025ae8ae48ad827c534c8f56ea64fb867ef6cfb */

void FUN_18000d9b8(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined2 *puVar3;
  longlong lVar4;
  
  FUN_180013a30((undefined1 (*) [32])(param_1 + 0x18),0,0x101);
  lVar2 = 0;
  *(undefined8 *)(param_1 + 4) = 0;
  *(undefined8 *)(param_1 + 0x220) = 0;
  puVar3 = (undefined2 *)(param_1 + 0xc);
  for (lVar1 = 6; lVar4 = lVar2, lVar1 != 0; lVar1 = lVar1 + -1) {
    *puVar3 = 0;
    puVar3 = puVar3 + 1;
  }
  do {
    lVar1 = lVar4 + 1;
    *(undefined1 *)(param_1 + lVar4 + 0x18) = (&DAT_180021228)[lVar4];
    lVar4 = lVar1;
  } while (lVar1 < 0x101);
  do {
    lVar1 = lVar2 + 1;
    *(undefined1 *)(param_1 + lVar2 + 0x119) = (&DAT_180021329)[lVar2];
    lVar2 = lVar1;
  } while (lVar1 < 0x100);
  return;
}


/* Address: 0x18000da50; Evidence: ev_4962493be3b3fa2a64a60775df674fa1c4c68829a298189dac8b6ad109234726 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000da50(longlong param_1)

{
  byte bVar1;
  byte bVar2;
  BOOL BVar3;
  uint uVar4;
  byte *pbVar5;
  char *pcVar6;
  ulonglong uVar7;
  BYTE *pBVar8;
  WORD *pWVar9;
  longlong lVar10;
  undefined1 auStackY_788 [32];
  _cpinfo local_738;
  char local_718 [231];
  byte abStack_631 [25];
  undefined1 local_618 [231];
  byte abStack_531 [25];
  undefined1 local_518 [256];
  WORD local_418 [512];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStackY_788;
  local_738.LeadByte[10] = '\0';
  local_738.LeadByte[0xb] = '\0';
  local_738._18_2_ = 0;
  local_738.MaxCharSize = 0;
  local_738.DefaultChar[0] = '\0';
  local_738.DefaultChar[1] = '\0';
  local_738.LeadByte[0] = '\0';
  local_738.LeadByte[1] = '\0';
  local_738.LeadByte[2] = '\0';
  local_738.LeadByte[3] = '\0';
  local_738.LeadByte[4] = '\0';
  local_738.LeadByte[5] = '\0';
  local_738.LeadByte[6] = '\0';
  local_738.LeadByte[7] = '\0';
  local_738.LeadByte[8] = '\0';
  local_738.LeadByte[9] = '\0';
  if ((*(UINT *)(param_1 + 4) == 0xfde9) ||
     (BVar3 = GetCPInfo(*(UINT *)(param_1 + 4),&local_738), BVar3 == 0)) {
    uVar4 = 0;
    pbVar5 = (byte *)(param_1 + 0x19);
    do {
      if (uVar4 - 0x41 < 0x1a) {
        *pbVar5 = *pbVar5 | 0x10;
        bVar2 = (char)uVar4 + 0x20;
      }
      else if (uVar4 - 0x61 < 0x1a) {
        *pbVar5 = *pbVar5 | 0x20;
        bVar2 = (char)uVar4 - 0x20;
      }
      else {
        bVar2 = 0;
      }
      pbVar5[0x100] = bVar2;
      uVar4 = uVar4 + 1;
      pbVar5 = pbVar5 + 1;
    } while (uVar4 < 0x100);
  }
  else {
    uVar4 = 0;
    pcVar6 = local_718;
    lVar10 = 0x100;
    do {
      *pcVar6 = (char)uVar4;
      uVar4 = uVar4 + 1;
      pcVar6 = pcVar6 + 1;
    } while (uVar4 < 0x100);
    pBVar8 = local_738.LeadByte;
    local_718[0] = ' ';
    bVar2 = local_738.LeadByte[0];
    while (bVar2 != 0) {
      bVar1 = pBVar8[1];
      uVar7 = (ulonglong)bVar2;
      while ((uVar4 = (uint)uVar7, uVar4 <= bVar1 && (uVar4 < 0x100))) {
        local_718[uVar7] = ' ';
        uVar7 = (ulonglong)(uVar4 + 1);
      }
      pBVar8 = pBVar8 + 2;
      bVar2 = *pBVar8;
    }
    FUN_18001032c((longlong *)0x0,1,local_718,0x100,local_418,*(uint *)(param_1 + 4),0);
    __acrt_LCMapStringA((longlong *)0x0,*(ushort **)(param_1 + 0x220),0x100,local_718,0x100,
                        local_618,0x100,*(uint *)(param_1 + 4),0);
    __acrt_LCMapStringA((longlong *)0x0,*(ushort **)(param_1 + 0x220),0x200,local_718,0x100,
                        local_518,0x100,*(uint *)(param_1 + 4),0);
    pWVar9 = local_418;
    pbVar5 = (byte *)(param_1 + 0x19);
    do {
      if ((*pWVar9 & 1) == 0) {
        if ((*pWVar9 & 2) == 0) {
          bVar2 = 0;
        }
        else {
          *pbVar5 = *pbVar5 | 0x20;
          bVar2 = pbVar5[(longlong)(abStack_531 + -param_1)];
        }
      }
      else {
        *pbVar5 = *pbVar5 | 0x10;
        bVar2 = pbVar5[(longlong)(abStack_631 + -param_1)];
      }
      pbVar5[0x100] = bVar2;
      pWVar9 = pWVar9 + 1;
      pbVar5 = pbVar5 + 1;
      lVar10 = lVar10 + -1;
    } while (lVar10 != 0);
  }
  return;
}


/* Address: 0x18000dc48; Evidence: ev_9b987e539414af801f1ee6f1d963599ccbc328458f936391d6070ed589de8681 */

ulonglong FUN_18000dc48(int param_1,char param_2,__acrt_ptd *param_3,__crt_multibyte_data **param_4)

{
  undefined8 uVar1;
  int *piVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  undefined8 uVar5;
  undefined8 *puVar6;
  undefined8 *puVar7;
  int iVar8;
  undefined8 *puVar9;
  ulonglong uVar10;
  undefined8 *puVar11;
  ulonglong uVar12;
  __acrt_ptd *p_Var13;
  undefined8 *puVar14;
  longlong lVar15;
  longlong lVar16;
  __acrt_ptd *local_res18;
  __crt_multibyte_data **local_res20;
  undefined1 local_268 [4];
  int local_264 [3];
  __acrt_ptd **local_258;
  __crt_multibyte_data ***local_250;
  undefined8 local_248 [70];
  
  local_res18 = param_3;
  local_res20 = param_4;
  update_thread_multibyte_data_internal(param_3,param_4);
  iVar8 = getSystemCP(param_1);
  if (iVar8 == *(int *)(*(longlong *)(local_res18 + 0x88) + 4)) {
    uVar10 = 0;
  }
  else {
    puVar9 = _malloc_base(0x228);
    if (puVar9 == (undefined8 *)0x0) {
      FUN_18000c960((LPVOID)0x0);
      uVar10 = 0xffffffff;
    }
    else {
      lVar15 = 4;
      lVar16 = 4;
      puVar6 = *(undefined8 **)(local_res18 + 0x88);
      puVar7 = local_248;
      do {
        puVar14 = puVar7;
        puVar11 = puVar6;
        uVar1 = puVar11[1];
        uVar3 = puVar11[2];
        uVar4 = puVar11[3];
        *puVar14 = *puVar11;
        puVar14[1] = uVar1;
        uVar1 = puVar11[4];
        uVar5 = puVar11[5];
        puVar14[2] = uVar3;
        puVar14[3] = uVar4;
        uVar3 = puVar11[6];
        uVar4 = puVar11[7];
        puVar14[4] = uVar1;
        puVar14[5] = uVar5;
        uVar1 = puVar11[8];
        uVar5 = puVar11[9];
        puVar14[6] = uVar3;
        puVar14[7] = uVar4;
        uVar3 = puVar11[10];
        uVar4 = puVar11[0xb];
        puVar14[8] = uVar1;
        puVar14[9] = uVar5;
        uVar1 = puVar11[0xc];
        uVar5 = puVar11[0xd];
        puVar14[10] = uVar3;
        puVar14[0xb] = uVar4;
        uVar3 = puVar11[0xe];
        uVar4 = puVar11[0xf];
        puVar14[0xc] = uVar1;
        puVar14[0xd] = uVar5;
        puVar14[0xe] = uVar3;
        puVar14[0xf] = uVar4;
        lVar16 = lVar16 + -1;
        puVar6 = puVar11 + 0x10;
        puVar7 = puVar14 + 0x10;
      } while (lVar16 != 0);
      uVar3 = puVar11[0x11];
      uVar4 = puVar11[0x12];
      uVar5 = puVar11[0x13];
      uVar1 = puVar11[0x14];
      puVar14[0x10] = puVar11[0x10];
      puVar14[0x11] = uVar3;
      puVar14[0x12] = uVar4;
      puVar14[0x13] = uVar5;
      puVar14[0x14] = uVar1;
      puVar6 = local_248;
      puVar7 = puVar9;
      do {
        puVar14 = puVar7;
        puVar11 = puVar6;
        uVar1 = puVar11[1];
        uVar3 = puVar11[2];
        uVar4 = puVar11[3];
        *puVar14 = *puVar11;
        puVar14[1] = uVar1;
        uVar1 = puVar11[4];
        uVar5 = puVar11[5];
        puVar14[2] = uVar3;
        puVar14[3] = uVar4;
        uVar3 = puVar11[6];
        uVar4 = puVar11[7];
        puVar14[4] = uVar1;
        puVar14[5] = uVar5;
        uVar1 = puVar11[8];
        uVar5 = puVar11[9];
        puVar14[6] = uVar3;
        puVar14[7] = uVar4;
        uVar3 = puVar11[10];
        uVar4 = puVar11[0xb];
        puVar14[8] = uVar1;
        puVar14[9] = uVar5;
        uVar1 = puVar11[0xc];
        uVar5 = puVar11[0xd];
        puVar14[10] = uVar3;
        puVar14[0xb] = uVar4;
        uVar3 = puVar11[0xe];
        uVar4 = puVar11[0xf];
        puVar14[0xc] = uVar1;
        puVar14[0xd] = uVar5;
        puVar14[0xe] = uVar3;
        puVar14[0xf] = uVar4;
        lVar15 = lVar15 + -1;
        puVar6 = puVar11 + 0x10;
        puVar7 = puVar14 + 0x10;
      } while (lVar15 != 0);
      uVar3 = puVar11[0x11];
      uVar4 = puVar11[0x12];
      uVar5 = puVar11[0x13];
      uVar1 = puVar11[0x14];
      puVar14[0x10] = puVar11[0x10];
      puVar14[0x11] = uVar3;
      puVar14[0x12] = uVar4;
      puVar14[0x13] = uVar5;
      puVar14[0x14] = uVar1;
      *(undefined4 *)puVar9 = 0;
      uVar12 = FUN_18000dfec(iVar8,(longlong)puVar9);
      uVar10 = uVar12 & 0xffffffff;
      if ((int)uVar12 == -1) {
        p_Var13 = FUN_18000c034();
        *(undefined4 *)p_Var13 = 0x16;
        FUN_18000c960(puVar9);
        uVar10 = 0xffffffff;
      }
      else {
        if (param_2 == '\0') {
          FUN_18000c7ec();
        }
        piVar2 = *(int **)(local_res18 + 0x88);
        LOCK();
        iVar8 = *piVar2;
        *piVar2 = *piVar2 + -1;
        UNLOCK();
        if ((iVar8 == 1) && (*(undefined **)(local_res18 + 0x88) != &DAT_180021210)) {
          FUN_18000c960(*(undefined **)(local_res18 + 0x88));
        }
        *(undefined4 *)puVar9 = 1;
        *(undefined8 **)(local_res18 + 0x88) = puVar9;
        if ((DAT_180021858 & *(uint *)(local_res18 + 0x3a8)) == 0) {
          local_258 = &local_res18;
          local_250 = &local_res20;
          local_264[0] = 5;
          local_264[1] = 5;
          FUN_18000d768(local_268,local_264 + 1,&local_258,local_264);
          if (param_2 != '\0') {
            PTR_DAT_180021200 = *local_res20;
          }
        }
        FUN_18000c960((LPVOID)0x0);
      }
    }
  }
  return uVar10;
}


/* Address: 0x18000deb8; Evidence: ev_dff9c787ef5a7f8d6dab91b4998c8a738b354aa11d05d3d951bad6157713d321 */

/* Library Function - Single Match
    struct __crt_multibyte_data * __ptr64 __cdecl update_thread_multibyte_data_internal(struct
   __acrt_ptd * __ptr64 const,struct __crt_multibyte_data * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

__crt_multibyte_data * __cdecl
update_thread_multibyte_data_internal(__acrt_ptd *param_1,__crt_multibyte_data **param_2)

{
  int iVar1;
  __crt_multibyte_data *p_Var2;
  
  if (((*(uint *)(param_1 + 0x3a8) & DAT_180021858) == 0) || (*(longlong *)(param_1 + 0x90) == 0)) {
    __acrt_lock(5);
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
    if (p_Var2 != *param_2) {
      if (p_Var2 != (__crt_multibyte_data *)0x0) {
        LOCK();
        iVar1 = *(int *)p_Var2;
        *(int *)p_Var2 = *(int *)p_Var2 + -1;
        UNLOCK();
        if ((iVar1 == 1) && (p_Var2 != (__crt_multibyte_data *)&DAT_180021210)) {
          FUN_18000c960(p_Var2);
        }
      }
      p_Var2 = *param_2;
      *(__crt_multibyte_data **)(param_1 + 0x88) = p_Var2;
      LOCK();
      *(int *)p_Var2 = *(int *)p_Var2 + 1;
      UNLOCK();
    }
    __acrt_unlock(5);
  }
  else {
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
  }
  if (p_Var2 != (__crt_multibyte_data *)0x0) {
    return p_Var2;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000df70; Evidence: ev_dac49c0e0c5ed9d8fab436dffa51e0cdb2aaa14fb57b27a3f469344ef4fe7182 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_1800226fc == '\0') {
    DAT_1800226e8 = &DAT_180021550;
    DAT_1800226f0 = &DAT_180021210;
    DAT_1800226e0 = &DAT_180021440;
    p_Var1 = (__acrt_ptd *)FUN_18000c4f4();
    in_RAX = FUN_18000dc48(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_1800226f0);
    DAT_1800226fc = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x18000dfd0; Evidence: ev_09c80671e2c2a7137adde72144688088dccbc900885c2b4ace54dedc066a663e */

void FUN_18000dfd0(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = (__acrt_ptd *)FUN_18000c4d8();
  update_thread_multibyte_data_internal(p_Var1,(__crt_multibyte_data **)&DAT_1800226f0);
  return;
}


/* Address: 0x18000dfec; Evidence: ev_55c5b3c35c92c89b48e827c82f2403cfc27a7651a2a6f9c7b16321c22c790a1a */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_18000dfec(int param_1,longlong param_2)

{
  byte *pbVar1;
  byte bVar2;
  int iVar3;
  uint uVar4;
  BOOL BVar5;
  uint *puVar6;
  byte *pbVar7;
  wchar_t *pwVar8;
  longlong lVar9;
  BYTE *pBVar10;
  ulonglong uVar11;
  byte *pbVar12;
  undefined2 *puVar13;
  undefined4 uVar14;
  uint uVar15;
  uint uVar16;
  byte *pbVar18;
  undefined1 auStack_68 [32];
  _cpinfo local_48;
  ulonglong local_30;
  wchar_t *pwVar17;
  
  local_30 = DAT_180021000 ^ (ulonglong)auStack_68;
  local_48.MaxCharSize = 0;
  local_48.DefaultChar[0] = '\0';
  local_48.DefaultChar[1] = '\0';
  local_48.LeadByte[0] = '\0';
  local_48.LeadByte[1] = '\0';
  local_48.LeadByte[2] = '\0';
  local_48.LeadByte[3] = '\0';
  local_48.LeadByte[4] = '\0';
  local_48.LeadByte[5] = '\0';
  local_48.LeadByte[6] = '\0';
  local_48.LeadByte[7] = '\0';
  local_48.LeadByte[8] = '\0';
  local_48.LeadByte[9] = '\0';
  local_48.LeadByte[10] = '\0';
  local_48.LeadByte[0xb] = '\0';
  local_48._18_2_ = 0;
  uVar4 = getSystemCP(param_1);
  pwVar8 = (wchar_t *)0x0;
  if (uVar4 == 0) {
LAB_18000e284:
    FUN_18000d9b8(param_2);
    return 0;
  }
  puVar6 = &DAT_180021660;
  uVar14 = 1;
  pwVar17 = pwVar8;
  do {
    if (*puVar6 == uVar4) {
      FUN_180013a30((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
      pbVar18 = &DAT_180021650;
      lVar9 = 4;
      pbVar7 = &DAT_180021670 + (longlong)pwVar17 * 0x30;
      do {
        bVar2 = *pbVar7;
        pbVar12 = pbVar7;
        while ((bVar2 != 0 && (pbVar12[1] != 0))) {
          bVar2 = *pbVar12;
          uVar16 = (uint)bVar2;
          if (bVar2 <= pbVar12[1]) {
            uVar15 = (uint)bVar2;
            do {
              uVar15 = uVar15 + 1;
              if (0x100 < uVar15) break;
              uVar16 = uVar16 + 1;
              pbVar1 = (byte *)((ulonglong)uVar15 + 0x18 + param_2);
              *pbVar1 = *pbVar1 | *pbVar18;
            } while (uVar16 <= pbVar12[1]);
          }
          pbVar12 = pbVar12 + 2;
          bVar2 = *pbVar12;
        }
        pbVar7 = pbVar7 + 8;
        pbVar18 = pbVar18 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      *(uint *)(param_2 + 4) = uVar4;
      *(undefined4 *)(param_2 + 8) = 1;
      if (uVar4 == 0x3a4) {
        pwVar8 = L"ja-JP";
      }
      else if (uVar4 == 0x3a8) {
        pwVar8 = L"zh-CN";
      }
      else if (uVar4 == 0x3b5) {
        pwVar8 = L"ko-KR";
      }
      else if (uVar4 == 0x3b6) {
        pwVar8 = L"zh-TW";
      }
      *(wchar_t **)(param_2 + 0x220) = pwVar8;
      puVar13 = (undefined2 *)(param_2 + 0xc);
      lVar9 = 6;
      do {
        *puVar13 = *(undefined2 *)
                    (((longlong)pwVar17 * 0x30 - param_2) + 0x180021658 + (longlong)puVar13);
        puVar13 = puVar13 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      goto LAB_18000e27a;
    }
    uVar16 = (int)pwVar17 + 1;
    pwVar17 = (wchar_t *)(ulonglong)uVar16;
    puVar6 = puVar6 + 0xc;
  } while (uVar16 < 5);
  if ((uVar4 == 65000) || (BVar5 = IsValidCodePage(uVar4 & 0xffff), BVar5 == 0)) {
    return 0xffffffff;
  }
  if (uVar4 == 0xfde9) {
    *(undefined8 *)(param_2 + 4) = 0xfde9;
    *(undefined8 *)(param_2 + 0x220) = 0;
    *(undefined4 *)(param_2 + 0x18) = 0;
    *(undefined2 *)(param_2 + 0x1c) = 0;
  }
  else {
    BVar5 = GetCPInfo(uVar4,&local_48);
    if (BVar5 == 0) {
      if (DAT_1800226f8 == 0) {
        return 0xffffffff;
      }
      goto LAB_18000e284;
    }
    FUN_180013a30((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
    *(uint *)(param_2 + 4) = uVar4;
    *(undefined8 *)(param_2 + 0x220) = 0;
    if (local_48.MaxCharSize == 2) {
      pBVar10 = local_48.LeadByte;
      bVar2 = local_48.LeadByte[0];
      while ((bVar2 != 0 && (pBVar10[1] != 0))) {
        bVar2 = *pBVar10;
        if ((uint)bVar2 <= (uint)pBVar10[1]) {
          uVar4 = (uint)bVar2;
          uVar11 = (ulonglong)(((uint)pBVar10[1] - (uint)bVar2) + 1);
          do {
            uVar4 = uVar4 + 1;
            pbVar7 = (byte *)((ulonglong)uVar4 + 0x18 + param_2);
            *pbVar7 = *pbVar7 | 4;
            uVar11 = uVar11 - 1;
          } while (uVar11 != 0);
        }
        pBVar10 = pBVar10 + 2;
        bVar2 = *pBVar10;
      }
      pbVar7 = (byte *)(param_2 + 0x1a);
      lVar9 = 0xfe;
      do {
        *pbVar7 = *pbVar7 | 8;
        pbVar7 = pbVar7 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      iVar3 = *(int *)(param_2 + 4);
      if (iVar3 == 0x3a4) {
        pwVar8 = L"ja-JP";
      }
      else if (iVar3 == 0x3a8) {
        pwVar8 = L"zh-CN";
      }
      else if (iVar3 == 0x3b5) {
        pwVar8 = L"ko-KR";
      }
      else if (iVar3 == 0x3b6) {
        pwVar8 = L"zh-TW";
      }
      *(wchar_t **)(param_2 + 0x220) = pwVar8;
    }
    else {
      uVar14 = 0;
    }
    *(undefined4 *)(param_2 + 8) = uVar14;
  }
  puVar13 = (undefined2 *)(param_2 + 0xc);
  for (lVar9 = 6; lVar9 != 0; lVar9 = lVar9 + -1) {
    *puVar13 = 0;
    puVar13 = puVar13 + 1;
  }
LAB_18000e27a:
  FUN_18000da50(param_2);
  return 0;
}


/* Address: 0x18000e2b4; Evidence: ev_7a974b86e41b18d7fae102ad74b9eb83af9bf5fd33c07daa14e3644ed6b28ec6 */

undefined8 FUN_18000e2b4(longlong *param_1,uint param_2,uint param_3,byte param_4)

{
  undefined8 uVar1;
  longlong local_28;
  longlong *local_20;
  longlong local_18;
  char local_10;
  
  FUN_18000a710(&local_28,param_1);
  if (((*(byte *)((ulonglong)(param_2 & 0xff) + 0x19 + local_18) & param_4) == 0) &&
     ((param_3 == 0 || ((param_3 & *(ushort *)(*local_20 + (ulonglong)(param_2 & 0xff) * 2)) == 0)))
     ) {
    uVar1 = 0;
  }
  else {
    uVar1 = 1;
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return uVar1;
}


/* Address: 0x18000e328; Evidence: ev_8426e94fe509b8c8b1f47cdac7791b560d831159f021bc9b3687edd92bbbbfb3 */

void FUN_18000e328(uint param_1)

{
  FUN_18000e2b4((longlong *)0x0,param_1,0,4);
  return;
}


/* Address: 0x18000e340; Evidence: ev_392ae714cb7a55d549303e40ad600b02ccacb6bdd9080dcdf5ec3117a204ca9c */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined1 FUN_18000e340(void)

{
  DAT_180022720 = GetCommandLineA();
  _DAT_180022728 = GetCommandLineW();
  return 1;
}


/* Address: 0x18000e368; Evidence: ev_ee588f74a8ff0ca23320a4ef6883cbcc81b2ed8e149cdeb58a47040cf41a6d35 */

void FUN_18000e368(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_18000e3b5:
          if (!bVar1) goto LAB_18000e3b9;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_18000e3f3;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_18000e3b5;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_18000e3b9;
LAB_18000e3f3:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_18000e3b9;
  }
  param_2 = 0;
LAB_18000e3b9:
                    /* WARNING: Could not recover jumptable at 0x00018000e3b9. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}


/* Address: 0x18000e3f8; Evidence: ev_b9ab3b6d2803d8e71e39ec3c267e2d781b892da0af0d207324e85aa0c06a33f7 */

void FUN_18000e3f8(uint param_1,uint param_2,undefined8 param_3,undefined4 param_4)

{
  int iVar1;
  uint uVar2;
  bool bVar3;
  undefined4 *in_stack_00000040;
  
  uVar2 = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_18000e498;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_18000e498;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_18000e489;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_18000e498;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_18000e498;
    iVar1 = param_1 - 65000;
LAB_18000e489:
    if (iVar1 == 0) goto LAB_18000e498;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    uVar2 = param_2 & 0xffffff7f;
  }
LAB_18000e498:
  if ((param_1 - 65000 < 2) && (in_stack_00000040 != (undefined4 *)0x0)) {
    *in_stack_00000040 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000e4cf. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,uVar2,param_3,param_4);
  return;
}


/* Address: 0x18000e4d8; Evidence: ev_0330d4c3e13ee8115f665f01bb3d6d4006d009271961428e02b5a61d79a33823 */

LPVOID FUN_18000e4d8(void)

{
  WCHAR WVar1;
  int iVar2;
  LPWCH pWVar3;
  longlong lVar4;
  LPVOID pvVar6;
  undefined4 uVar7;
  WCHAR *pWVar8;
  longlong lVar5;
  
  pWVar3 = GetEnvironmentStringsW();
  if (pWVar3 != (LPWCH)0x0) {
    WVar1 = *pWVar3;
    pWVar8 = pWVar3;
    while (WVar1 != L'\0') {
      lVar4 = -1;
      do {
        lVar5 = lVar4;
        lVar4 = lVar5 + 1;
      } while (pWVar8[lVar4] != L'\0');
      pWVar8 = pWVar8 + lVar5 + 2;
      WVar1 = *pWVar8;
    }
    uVar7 = (undefined4)((longlong)pWVar8 + (2 - (longlong)pWVar3) >> 1);
    iVar2 = FUN_18000e3f8(0,0,pWVar3,uVar7);
    if (iVar2 != 0) {
      pvVar6 = _malloc_base((longlong)iVar2);
      if (pvVar6 != (LPVOID)0x0) {
        iVar2 = FUN_18000e3f8(0,0,pWVar3,uVar7);
        if (iVar2 == 0) {
          FUN_18000c960(pvVar6);
          pvVar6 = (LPVOID)0x0;
        }
        else {
          FUN_18000c960((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pvVar6;
      }
      FUN_18000c960((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPVOID)0x0;
}


/* Address: 0x18000e5f0; Evidence: ev_335968409a645216b0518a8a3af11a7b17e275b60fe23c218308d5066bf24bbf */

/* Library Function - Single Match
    _recalloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID _recalloc_base(LPVOID param_1,ulonglong param_2,ulonglong param_3)

{
  __acrt_ptd *p_Var1;
  ulonglong uVar2;
  LPVOID pvVar3;
  ulonglong uVar4;
  
  if ((param_2 == 0) || (param_3 <= 0xffffffffffffffe0 / param_2)) {
    if (param_1 == (LPVOID)0x0) {
      uVar2 = 0;
    }
    else {
      uVar2 = _msize_base((longlong)param_1);
    }
    uVar4 = param_2 * param_3;
    pvVar3 = _realloc_base(param_1,uVar4);
    if ((pvVar3 != (LPVOID)0x0) && (uVar2 < uVar4)) {
      FUN_180013a30((undefined1 (*) [32])((longlong)pvVar3 + uVar2),0,uVar4 - uVar2);
    }
  }
  else {
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 0xc;
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x18000e698; Evidence: ev_187ed2299fc6cf38a1c69cf0cc06da0e4e9519789ce188bc8f0c1dd436fbae3a */

FARPROC FUN_18000e698(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

{
  longlong lVar1;
  uint uVar2;
  wchar_t *lpLibFileName;
  DWORD DVar3;
  int iVar4;
  BOOL BVar5;
  HMODULE hLibModule;
  FARPROC pFVar6;
  FARPROC pFVar7;
  DWORD local_res18 [2];
  
  do {
    if (param_3 == param_4) {
      pFVar7 = (FARPROC)0x0;
LAB_18000e78a:
      __acrt_lock(0xe);
      local_res18[0] = 0;
      BVar5 = VirtualProtect(&DAT_180026000,0x100,4,local_res18);
      if (BVar5 != 0) {
        pFVar6 = pFVar7;
        if (pFVar7 == (FARPROC)0x0) {
          pFVar6 = (FARPROC)0xffffffffffffffff;
        }
        LOCK();
        (&DAT_180026000)[param_1] = pFVar6;
        UNLOCK();
        BVar5 = VirtualProtect(&DAT_180026000,0x100,2,local_res18);
        if (BVar5 != 0) {
          __acrt_unlock(0xe);
          return pFVar7;
        }
      }
                    /* WARNING: Subroutine does not return */
      abort();
    }
    uVar2 = *param_3;
    hLibModule = (HMODULE)(&DAT_180022730)[uVar2];
    if (hLibModule == (HMODULE)0x0) {
      lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_datetime_l1_1_1_180017130)[uVar2];
      hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
      if ((hLibModule != (HMODULE)0x0) ||
         ((((DVar3 = GetLastError(), DVar3 == 0x57 &&
            (iVar4 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar4 != 0)) &&
           (iVar4 = wcsncmp(lpLibFileName,L"ext-ms-",7), iVar4 != 0)) &&
          (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0))))
      {
        LOCK();
        lVar1 = (&DAT_180022730)[uVar2];
        (&DAT_180022730)[uVar2] = hLibModule;
        UNLOCK();
        if (lVar1 != 0) {
          FreeLibrary(hLibModule);
        }
        goto LAB_18000e830;
      }
      LOCK();
      (&DAT_180022730)[uVar2] = 0xffffffffffffffff;
      UNLOCK();
    }
    else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_18000e830:
      pFVar7 = GetProcAddress(hLibModule,param_2);
      goto LAB_18000e78a;
    }
    param_3 = param_3 + 1;
  } while( true );
}


/* Address: 0x18000e84c; Evidence: ev_43f429e77e85f89edbfeb743cd3801af884943ede4e61a450e309175dfbb9f20 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000e84c(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_1800260d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_1800260d0;
  if ((DAT_1800260d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000e698(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001777c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}


/* Address: 0x18000e8a8; Evidence: ev_eb7da37be3b7e5f59050035a5af01e70557b81fd7814d244b4b89fff032802c9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000e8a8(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_180026000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_180026000;
  if ((DAT_180026000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000e698(0,"AreFileApisANSI",(uint *)&DAT_180017718,(uint *)&DAT_18001771c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}


/* Address: 0x18000e8f4; Evidence: ev_421afb73a9d49e8b34cc2aa42efd32ca7ecdad062ca029c8fea8c363226fe5d9 */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000e8f4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}


/* Address: 0x18000e8fc; Evidence: ev_7eabd176b7585005a08d62e10db1a80af38177b8a3a1e9dfffe11b610f9af816 */

BOOL __stdcall FlsFree(DWORD dwFlsIndex)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000e8fc. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsFree(dwFlsIndex);
  return BVar1;
}


/* Address: 0x18000e904; Evidence: ev_dd1862f846f694685b2df8cf397f13e13ac05c124839de26e4ae619da9782880 */

PVOID __stdcall FlsGetValue(DWORD dwFlsIndex)

{
  PVOID pvVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000e904. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  pvVar1 = FlsGetValue(dwFlsIndex);
  return pvVar1;
}


/* Address: 0x18000e90c; Evidence: ev_b3b3edd050022ebb9e3ad3564159660c6acc0eb18e90e6adf299b40b19a1288f */

void FUN_18000e90c(void)

{
                    /* WARNING: Could not recover jumptable at 0x00018000e913. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*DAT_180026018)();
  return;
}


/* Address: 0x18000e918; Evidence: ev_a3416be7148b157d7430ee0c1293c084162221e24b246fc3d96a99e4332cc433 */

BOOL __stdcall FlsSetValue(DWORD dwFlsIndex,PVOID lpFlsData)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000e918. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsSetValue(dwFlsIndex,lpFlsData);
  return BVar1;
}


/* Address: 0x18000e920; Evidence: ev_1acd599afed44b572d14a27999aff0ebdcefcca3883a6707c2aa8d4a62a0ec11 */

BOOL __stdcall
InitializeCriticalSectionEx(LPCRITICAL_SECTION lpCriticalSection,DWORD dwSpinCount,DWORD Flags)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000e920. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = InitializeCriticalSectionEx(lpCriticalSection,dwSpinCount,Flags);
  return BVar1;
}


/* Address: 0x18000e928; Evidence: ev_df365adeace268dc201e55871cc3612d9fa688b49d07199478567fb1a9b742ee */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000e928(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_180026090 == (FARPROC)0xffffffffffffffff) {
LAB_18000e9d3:
    Locale = FUN_18000ea1c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_180026090;
    if (DAT_180026090 == (FARPROC)0x0) {
      pFVar1 = FUN_18000e698(0x12,"LCMapStringEx",(uint *)&DAT_180017748,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000e9d3;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}


/* Address: 0x18000ea1c; Evidence: ev_3d61025d0ee7f02b65d1d193559e62d66306046e845b7b8f6f8a0162890a1350 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000ea1c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_1800260a0 == (FARPROC)0xffffffffffffffff) {
LAB_18000ea6b:
    FUN_18001137c(param_1);
  }
  else {
    pFVar1 = DAT_1800260a0;
    if (DAT_1800260a0 == (FARPROC)0x0) {
      pFVar1 = FUN_18000e698(0x14,"LocaleNameToLCID",(uint *)&DAT_180017760,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000ea6b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}


/* Address: 0x18000ea80; Evidence: ev_a3b13cb3e2db7c538ac9a6f8cd5a0ea822d0e863390a409207bd60b3b498b901 */

bool FUN_18000ea80(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_180026000,0x100,2,local_res8);
  return BVar1 != 0;
}


/* Address: 0x18000eab0; Evidence: ev_e6e794ae60554af850c1be8c7040c63cf656f93ee8438bdd5aea6d90adeb0d99 */

bool FUN_18000eab0(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_180026018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_180026018 == 0;
    if (!bVar2) goto LAB_18000eaea;
    pFVar1 = FUN_18000e698(3,"FlsGetValue2",(uint *)&DAT_180017730,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18000eaea:
  return !bVar2;
}


/* Address: 0x18000eb00; Evidence: ev_5e13d1b8cc164feda994d2b45c252a3b64df3a95330d7e7fb5fdf4f03958dc91 */

/* Library Function - Single Match
    __acrt_uninitialize_winapi_thunks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_winapi_thunks(char param_1)

{
  HMODULE hLibModule;
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  if (param_1 == '\0') {
    puVar1 = &DAT_180022730;
    do {
      hLibModule = (HMODULE)*puVar1;
      if (hLibModule != (HMODULE)0x0) {
        if (hLibModule != (HMODULE)0xffffffffffffffff) {
          FreeLibrary(hLibModule);
        }
        *puVar1 = 0;
      }
      puVar1 = puVar1 + 1;
      in_RAX = &DAT_1800227e8;
    } while (puVar1 != &DAT_1800227e8);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000eb60; Evidence: ev_cb2ddb1dcc2d5941cdd68eca021fca141e7c8f431d602843d11f6a268a3d4b90 */

bool FUN_18000eb60(void)

{
  DAT_1800227e8 = GetProcessHeap();
  return DAT_1800227e8 != (HANDLE)0x0;
}


/* Address: 0x18000eb90; Evidence: ev_db08ab371e37eabbf2bee810ce7ac4166aa90bfbe287b95e3f101e8a37084e26 */

undefined1 FUN_18000eb90(void)

{
  DAT_1800227e8 = 0;
  return 1;
}


/* Address: 0x18000ebb8; Evidence: ev_6fcabc7c0c45f3624a97377342d3cc8226e0fce5366ae8b3ad40a1cfc6a5f5aa */

void FUN_18000ebb8(void)

{
  longlong lVar1;
  DWORD DVar2;
  ulonglong uVar3;
  byte *pbVar4;
  longlong lVar5;
  uint *puVar6;
  uint uVar7;
  ulonglong uVar8;
  _STARTUPINFOW local_78;
  
  FUN_180013a30((undefined1 (*) [32])&local_78,0,0x68);
  GetStartupInfoW(&local_78);
  lVar5 = 0;
  if ((local_78.cbReserved2 != 0) && ((uint *)local_78.lpReserved2 != (uint *)0x0)) {
    puVar6 = (uint *)((longlong)local_78.lpReserved2 + 4);
    pbVar4 = (byte *)((longlong)(int)*(uint *)local_78.lpReserved2 + (longlong)puVar6);
    uVar7 = 0x2000;
    if ((int)*(uint *)local_78.lpReserved2 < 0x2000) {
      uVar7 = *(uint *)local_78.lpReserved2;
    }
    __acrt_lowio_ensure_fh_exists(uVar7);
    if ((int)DAT_180022bf0 < (int)uVar7) {
      uVar7 = DAT_180022bf0;
    }
    uVar8 = (ulonglong)uVar7;
    if (uVar7 != 0) {
      do {
        if ((((*(longlong *)pbVar4 != -1) && (*(longlong *)pbVar4 != -2)) && ((*puVar6 & 1) != 0))
           && (((*puVar6 & 8) != 0 || (DVar2 = GetFileType(*(HANDLE *)pbVar4), DVar2 != 0)))) {
          uVar3 = (ulonglong)((uint)lVar5 & 0x3f);
          lVar1 = (&DAT_1800227f0)[lVar5 >> 6];
          *(undefined8 *)(lVar1 + 0x28 + uVar3 * 0x48) = *(undefined8 *)pbVar4;
          *(byte *)(lVar1 + 0x38 + uVar3 * 0x48) = (byte)*puVar6;
        }
        lVar5 = lVar5 + 1;
        puVar6 = (uint *)((longlong)puVar6 + 1);
        pbVar4 = pbVar4 + 8;
        uVar8 = uVar8 - 1;
      } while (uVar8 != 0);
    }
  }
  return;
}


/* Address: 0x18000ecb8; Evidence: ev_19c8ec46083b5bdfd0d07f622bb5994f01db9173ed1358c69da046bacd78f00b */

void FUN_18000ecb8(void)

{
  byte *pbVar1;
  longlong lVar2;
  DWORD DVar3;
  HANDLE hFile;
  ulonglong uVar4;
  uint uVar5;
  longlong lVar6;
  
  uVar5 = 0;
  lVar6 = 0;
  do {
    uVar4 = (ulonglong)(uVar5 & 0x3f);
    lVar2 = (&DAT_1800227f0)[(longlong)(int)uVar5 >> 6];
    if (*(longlong *)(lVar2 + 0x28 + uVar4 * 0x48) + 2U < 2) {
      *(undefined1 *)(lVar2 + 0x38 + uVar4 * 0x48) = 0x81;
      if (uVar5 == 0) {
        DVar3 = 0xfffffff6;
      }
      else if (uVar5 == 1) {
        DVar3 = 0xfffffff5;
      }
      else {
        DVar3 = 0xfffffff4;
      }
      hFile = GetStdHandle(DVar3);
      if (1 < (longlong)hFile + 1U) {
        DVar3 = GetFileType(hFile);
        if (DVar3 != 0) {
          *(HANDLE *)(lVar2 + 0x28 + uVar4 * 0x48) = hFile;
          if ((DVar3 & 0xff) == 2) {
            pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
            *pbVar1 = *pbVar1 | 0x40;
          }
          else if ((DVar3 & 0xff) == 3) {
            pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
            *pbVar1 = *pbVar1 | 8;
          }
          goto LAB_18000ed96;
        }
      }
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x40;
      *(undefined8 *)(lVar2 + 0x28 + uVar4 * 0x48) = 0xfffffffffffffffe;
      if (DAT_180022c28 != 0) {
        *(undefined4 *)(*(longlong *)(lVar6 + DAT_180022c28) + 0x18) = 0xfffffffe;
      }
    }
    else {
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x80;
    }
LAB_18000ed96:
    uVar5 = uVar5 + 1;
    lVar6 = lVar6 + 8;
    if (uVar5 == 3) {
      return;
    }
  } while( true );
}


/* Address: 0x18000edc0; Evidence: ev_f3f00f8e332f7e819a65f26fba3da1059d02d49e7aefb848cda0bf7b82abbd97 */

/* Library Function - Single Match
    __acrt_initialize_lowio
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __acrt_initialize_lowio(void)

{
  longlong lVar1;
  bool bVar2;
  
  __acrt_lock(7);
  lVar1 = __acrt_lowio_ensure_fh_exists(0);
  bVar2 = (int)lVar1 == 0;
  if (bVar2) {
    FUN_18000ebb8();
    FUN_18000ecb8();
  }
  __acrt_unlock(7);
  return bVar2;
}


/* Address: 0x18000ee00; Evidence: ev_6344da6d5711da0600bce94f4c9a3a760a796c756f46ef094e8dc14de567baab */

/* Library Function - Single Match
    __acrt_uninitialize_lowio
   
   Library: Visual Studio 2019 Release */

undefined1 __acrt_uninitialize_lowio(void)

{
  ulonglong uVar1;
  
  uVar1 = 0;
  do {
    if (*(LPCRITICAL_SECTION *)((longlong)&DAT_1800227f0 + uVar1) != (LPCRITICAL_SECTION)0x0) {
      __acrt_lowio_destroy_handle_array(*(LPCRITICAL_SECTION *)((longlong)&DAT_1800227f0 + uVar1));
      *(undefined8 *)((longlong)&DAT_1800227f0 + uVar1) = 0;
    }
    uVar1 = uVar1 + 8;
  } while (uVar1 < 0x400);
  return 1;
}


/* Address: 0x18000ee40; Evidence: ev_787b9b485417fbaa1277fbd64931cc1e53a8fb9bde15880d5975993055707bdf */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000ee40(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  puVar1 = param_1;
  if (param_1 != param_2) {
    do {
      in_RAX = (undefined8 *)0x0;
      if (((code *)*puVar1 != (code *)0x0) &&
         (in_RAX = (undefined8 *)(*(code *)*puVar1)(), (char)in_RAX == '\0')) break;
      puVar1 = puVar1 + 2;
    } while (puVar1 != param_2);
    if (puVar1 != param_2) {
      if (puVar1 != param_1) {
        puVar1 = puVar1 + -1;
        do {
          if ((puVar1[-1] != 0) && ((code *)*puVar1 != (code *)0x0)) {
            (*(code *)*puVar1)(0);
          }
          in_RAX = puVar1 + -1;
          puVar1 = puVar1 + -2;
        } while (in_RAX != param_1);
      }
      return (ulonglong)in_RAX & 0xffffffffffffff00;
    }
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000eec0; Evidence: ev_ac5512cadab6517ba49942a2761b56a0d12aef71d082edc808625256198401b6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000eec0(longlong param_1,longlong param_2)

{
  undefined8 in_RAX;
  
  for (; param_1 != param_2; param_2 = param_2 + -0x10) {
    in_RAX = 0;
    if (*(code **)(param_2 + -8) != (code *)0x0) {
      in_RAX = (**(code **)(param_2 + -8))(0);
    }
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000eefc; Evidence: ev_084b637a20ad1464608c04b38a58f828eefd5fdae2b4553ab7ba91401c194891 */

ulonglong FUN_18000eefc(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180021000 & 0x3f;
  uVar2 = DAT_180022c08 ^ DAT_180021000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18000ef44; Evidence: ev_26942c9b6943d2180e068d2a4472b77278d8c6080606a90f948f0d5770826758 */

/* Library Function - Single Match
    __acrt_get_sigabrt_handler
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_get_sigabrt_handler(void)

{
  undefined1 local_res8 [8];
  int local_res10 [2];
  int local_res18 [4];
  
  local_res10[0] = 3;
  local_res18[0] = 3;
  FUN_18000eefc(local_res8,local_res18,local_res8,local_res10);
  return;
}


/* Address: 0x18000ef74; Evidence: ev_e84e069c9ee967984a9ace7f88b5b6a7ecc3485f06ddbe5afc162ea329fcf042 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000ef74(undefined8 param_1)

{
  _DAT_180022bf8 = param_1;
  _DAT_180022c00 = param_1;
  DAT_180022c08 = param_1;
  _DAT_180022c10 = param_1;
  return;
}


/* Address: 0x18000ef94; Evidence: ev_a97eecb727607fbbdc16cda1498976a36b27b8dc1f4c5a935156beb7fc97fc66 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000ef94(uint param_1)

{
  bool bVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  undefined8 uVar5;
  byte bVar6;
  code *pcVar7;
  ulonglong *puVar8;
  __acrt_ptd *p_Var9;
  undefined4 local_res10;
  __acrt_ptd *p_Var10;
  
  p_Var10 = (__acrt_ptd *)0x0;
  p_Var9 = (__acrt_ptd *)0x0;
  local_res10 = 0;
  bVar1 = true;
  if (param_1 == 2) {
LAB_18000efeb:
    if (param_1 == 2) {
      puVar8 = (ulonglong *)&DAT_180022bf8;
    }
    else if (param_1 == 6) {
LAB_18000f08d:
      puVar8 = &DAT_180022c08;
      p_Var9 = p_Var10;
    }
    else if (param_1 == 0xf) {
      puVar8 = (ulonglong *)&DAT_180022c10;
    }
    else if (param_1 == 0x15) {
      puVar8 = (ulonglong *)&DAT_180022c00;
      p_Var9 = p_Var10;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000f08d;
      puVar8 = (ulonglong *)0x0;
      p_Var9 = p_Var10;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18000f01b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000f06d;
      }
      goto LAB_18000efeb;
    }
LAB_18000f01b:
    p_Var9 = FUN_18000c538();
    if (p_Var9 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar4 = *(longlong *)p_Var9;
    lVar2 = lVar4 + 0xc0;
    for (; lVar4 != lVar2; lVar4 = lVar4 + 0x10) {
      if (*(uint *)(lVar4 + 4) == param_1) goto LAB_18000f068;
    }
    lVar4 = 0;
LAB_18000f068:
    if (lVar4 == 0) {
LAB_18000f06d:
      p_Var9 = FUN_18000c034();
      *(undefined4 *)p_Var9 = 0x16;
      FUN_18000ad7c();
      return 0xffffffff;
    }
    puVar8 = (ulonglong *)(lVar4 + 8);
    bVar1 = false;
  }
  lVar4 = 0;
  if (bVar1) {
    __acrt_lock(3);
  }
  pcVar7 = (code *)*puVar8;
  if (bVar1) {
    bVar6 = (byte)DAT_180021000 & 0x3f;
    pcVar7 = (code *)(((ulonglong)pcVar7 ^ DAT_180021000) >> bVar6 |
                     ((ulonglong)pcVar7 ^ DAT_180021000) << 0x40 - bVar6);
  }
  if (pcVar7 == (code *)0x1) goto LAB_18000f176;
  if (pcVar7 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_18000b384(3);
    pcVar7 = (code *)swi(3);
    uVar5 = (*pcVar7)();
    return uVar5;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar4 = *(longlong *)(p_Var9 + 8);
    *(longlong *)(p_Var9 + 8) = 0;
    if (param_1 == 8) {
      lVar2 = FUN_18000c4d8();
      local_res10 = *(undefined4 *)(lVar2 + 0x10);
      lVar2 = FUN_18000c4d8();
      *(undefined4 *)(lVar2 + 0x10) = 0x8c;
      goto LAB_18000f12e;
    }
  }
  else {
LAB_18000f12e:
    if (param_1 == 8) {
      lVar2 = *(longlong *)p_Var9;
      for (lVar3 = lVar2 + 0x30; lVar3 != lVar2 + 0xc0; lVar3 = lVar3 + 0x10) {
        *(undefined8 *)(lVar3 + 8) = 0;
      }
      goto LAB_18000f176;
    }
  }
  *puVar8 = DAT_180021000;
LAB_18000f176:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar7 != (code *)0x1) {
    if (param_1 == 8) {
      lVar2 = FUN_18000c4d8();
      (*pcVar7)(8,*(undefined4 *)(lVar2 + 0x10));
    }
    else {
      (*pcVar7)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var9 + 8) = lVar4, param_1 == 8)) {
      lVar4 = FUN_18000c4d8();
      *(undefined4 *)(lVar4 + 0x10) = local_res10;
    }
  }
  return 0;
}


/* Address: 0x18000f1f0; Evidence: ev_1701cdf52d53d4a7b10581c59b9571548f69aec9737488f24775a59126003a7d */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000f1f0(undefined8 param_1)

{
  _DAT_180022c18 = param_1;
  return;
}


/* Address: 0x18000f1f8; Evidence: ev_1f3412ecda2a83e92e4d25ce3d60541efe8f7da34084ce7904880cd2d84be0b7 */

void FUN_18000f1f8(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  uint uVar1;
  int iVar2;
  
  FUN_18000f6bc(*param_2);
  if ((*(longlong *)*param_3 != 0) &&
     (uVar1 = *(uint *)(*(longlong *)*param_3 + 0x14), (uVar1 >> 0xd & 1) != 0)) {
    if (((((byte)uVar1 & 3) == 2) && ((uVar1 & 0xc0) != 0)) || ((uVar1 >> 0xb & 1) != 0)) {
      if ((*(char *)param_3[2] != '\0') || ((*(uint *)(*(longlong *)*param_3 + 0x14) >> 1 & 1) != 0)
         ) {
        iVar2 = FUN_18000f464(*(int **)*param_3);
        if (iVar2 == -1) {
          *(undefined4 *)param_3[3] = 0xffffffff;
        }
        else {
          *(int *)param_3[1] = *(int *)param_3[1] + 1;
        }
      }
    }
    else {
      *(int *)param_3[1] = *(int *)param_3[1] + 1;
    }
  }
  FUN_18000f6c8(*param_4);
  return;
}


/* Address: 0x18000f294; Evidence: ev_a06b39ce0c629b9ca9173f03193b98be05cc36f4bf509a896bb5818f2788b502 */

void FUN_18000f294(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  longlong *plVar1;
  uint uVar2;
  longlong *plVar3;
  undefined1 local_res10 [16];
  int *local_res20;
  longlong local_58;
  longlong local_50;
  longlong local_48;
  longlong *local_40;
  longlong *local_38;
  undefined8 local_30;
  undefined8 local_28;
  undefined8 local_20;
  
  local_res20 = param_4;
  __acrt_lock(*param_2);
  plVar1 = DAT_180022c28 + DAT_180022c20;
  for (plVar3 = DAT_180022c28; local_40 = plVar3, plVar3 != plVar1; plVar3 = plVar3 + 1) {
    local_58 = *plVar3;
    if ((local_58 != 0) && (uVar2 = *(uint *)(local_58 + 0x14), (uVar2 >> 0xd & 1) != 0)) {
      if (((((byte)uVar2 & 3) == 2) && ((uVar2 & 0xc0) != 0)) || ((uVar2 >> 0xb & 1) != 0)) {
        local_20 = param_3[2];
        local_28 = param_3[1];
        local_30 = *param_3;
        local_38 = &local_58;
        local_50 = local_58;
        local_48 = local_58;
        FUN_18000f1f8(local_res10,&local_48,&local_38,&local_50);
      }
      else {
        *(int *)*param_3 = *(int *)*param_3 + 1;
      }
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000f378; Evidence: ev_dd159b1ff1bfadd50cc28b69d112981ec3f3f409221319d8b1647e14f505c086 */

/* Library Function - Single Match
    int __cdecl common_flush_all(bool)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl common_flush_all(bool param_1)

{
  char local_res8 [8];
  undefined1 local_res10 [8];
  int local_res18 [2];
  int local_res20 [2];
  int local_28 [2];
  int *local_20;
  char *local_18;
  int *local_10;
  
  local_res20[0] = 0;
  local_20 = local_res20;
  local_res18[0] = 0;
  local_18 = local_res8;
  local_10 = local_res18;
  local_28[0] = 8;
  local_28[1] = 8;
  local_res8[0] = param_1;
  FUN_18000f294(local_res10,local_28 + 1,&local_20,local_28);
  if (local_res8[0] != '\0') {
    local_res18[0] = local_res20[0];
  }
  return local_res18[0];
}


/* Address: 0x18000f3d8; Evidence: ev_64c19b53c2acb81659eeb0b3742dcf732e7e1f00fd15338f82236c147b752de0 */

undefined8 FUN_18000f3d8(int *param_1,longlong *param_2)

{
  undefined1 (*pauVar1) [32];
  uint uVar2;
  uint uVar3;
  
  if ((((byte)param_1[5] & 3) == 2) && ((param_1[5] & 0xc0U) != 0)) {
    uVar3 = *param_1 - param_1[2];
    param_1[4] = 0;
    pauVar1 = *(undefined1 (**) [32])(param_1 + 2);
    *(undefined1 (**) [32])param_1 = pauVar1;
    if (0 < (int)uVar3) {
      uVar2 = FUN_18000fc44((longlong)param_1);
      uVar2 = FUN_180012094(uVar2,pauVar1,uVar3,param_2);
      if (uVar3 != uVar2) {
        LOCK();
        param_1[5] = param_1[5] | 0x10;
        UNLOCK();
        return 0xffffffff;
      }
      if (((uint)param_1[5] >> 2 & 1) != 0) {
        LOCK();
        param_1[5] = param_1[5] & 0xfffffffd;
        UNLOCK();
      }
    }
  }
  return 0;
}


/* Address: 0x18000f464; Evidence: ev_9998ce88e9736c9ef2a27b9190d33e6c1f0f159f85d6d93b26024e510df69ccf */

int FUN_18000f464(int *param_1)

{
  int iVar1;
  undefined8 uVar2;
  longlong lVar3;
  longlong local_48 [2];
  undefined1 local_38;
  undefined *local_30;
  undefined *puStack_28;
  char local_20;
  undefined4 local_1c;
  char local_18;
  undefined4 local_14;
  char local_10;
  
  local_48[0] = 0;
  local_20 = DAT_18002246c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800211f8;
    puStack_28 = PTR_DAT_180021200;
  }
  if (param_1 == (int *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_18000f4e9;
  }
  uVar2 = FUN_18000f3d8(param_1,local_48);
  if ((int)uVar2 == 0) {
    if (((uint)param_1[5] >> 0xb & 1) != 0) {
      iVar1 = FUN_18000fc44((longlong)param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_18000f4c4;
    }
    iVar1 = 0;
  }
  else {
LAB_18000f4c4:
    iVar1 = -1;
  }
LAB_18000f4e9:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_18000a990(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_18000a990(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}


/* Address: 0x18000f538; Evidence: ev_0b6227e248dc1af4c2ff4688b6040647804e4e4c6110d01611036ad72af1e02d */

int __cdecl common_flush_all(bool param_1)

{
  int iVar1;
  
  iVar1 = common_flush_all(true);
  return iVar1;
}


/* Address: 0x18000f540; Evidence: ev_15e2f705ffb2abee623fea0eca38b88ec7e0a0f4de959b572f1087814572f606 */

undefined8 FUN_18000f540(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_180022c20 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_180022c20) goto LAB_18000f57d;
  }
  DAT_180022c20 = iVar4;
LAB_18000f57d:
  DAT_180022c28 = _calloc_base((longlong)DAT_180022c20,8);
  FUN_18000c960((LPVOID)0x0);
  if (DAT_180022c28 == (LPVOID)0x0) {
    DAT_180022c20 = 3;
    DAT_180022c28 = _calloc_base(3,8);
    FUN_18000c960((LPVOID)0x0);
    if (DAT_180022c28 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_180021768;
  puVar6 = &DAT_180021750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_180022c28) = puVar6;
    if (*(longlong *)((&DAT_1800227f0)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
        + 2U < 3) {
      *puVar3 = 0xfffffffe;
    }
    lVar2 = lVar2 + 1;
    puVar6 = puVar6 + 0x58;
    lVar1 = lVar1 + 8;
    puVar3 = puVar3 + 0x16;
    lVar5 = lVar5 + -1;
  } while (lVar5 != 0);
  return 0;
}


/* Address: 0x18000f660; Evidence: ev_9c422d03d9e5bb2dd18c6fb036cce69da4b48df16cb2e2d0dba20f48f9511cdc */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_1800124e4();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_180022c28));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_180022c28) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_18000c960(DAT_180022c28);
  DAT_180022c28 = (LPVOID)0x0;
  return;
}


/* Address: 0x18000f6bc; Evidence: ev_dbe299ee404290554afc3f98dfd900279ddaed60e2b74c4f9ce9b21e1c3764ff */

void FUN_18000f6bc(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000f6c0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x18000f6c8; Evidence: ev_a388945d87bdc33be9648427847e221a43954a7e5f9157ae4c3a47b663c79915 */

void FUN_18000f6c8(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000f6cc. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x18000f6d4; Evidence: ev_4c2cbcf034e506f842af5a0433a75aad27c127484665807d05260d44b90e6980 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_18000f6d4(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_180022c40 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_18000be40(param_4);
      }
      plVar2 = (longlong *)param_4[3];
      uVar1 = *(uint *)((longlong)plVar2 + 0xc);
      if (uVar1 != 0xfde9) {
        if (plVar2[0x27] == 0) {
          if (param_1 != (ushort *)0x0) {
            *param_1 = (ushort)*param_2;
          }
          return 1;
        }
        if (*(short *)(*plVar2 + (ulonglong)*param_2 * 2) < 0) {
          if ((((1 < (int)plVar2[1]) && ((int)plVar2[1] <= (int)param_3)) &&
              (iVar3 = FUN_18000e368(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_18000e368(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_18000fa44(param_1,param_2,param_3,(uint *)&DAT_180022c40,(longlong)param_4);
      if (iVar3 < 0) {
        return -1;
      }
      return iVar3;
    }
    if (param_1 != (ushort *)0x0) {
      *param_1 = 0;
    }
  }
  return 0;
}


/* Address: 0x18000f84c; Evidence: ev_da4759334566bd900439bdad3d2cc820cbb230731442519aeb06868eb6958635 */

ulonglong FUN_18000f84c(byte *param_1)

{
  byte bVar1;
  ulonglong uVar2;
  
  bVar1 = *param_1;
  if (-1 < (char)bVar1) {
    return (ulonglong)(bVar1 != 0);
  }
  if ((bVar1 & 0xe0) == 0xc0) {
    return 2;
  }
  if ((bVar1 & 0xf0) == 0xe0) {
    return 3;
  }
  uVar2 = 0xffffffff;
  if ((bVar1 & 0xf8) == 0xf0) {
    uVar2 = 4;
  }
  return uVar2;
}


/* Address: 0x18000f884; Evidence: ev_dcb9971c4fd68a867564ff55f161846eb9cb292d596b279b77f5541d0363b60a */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000f884(ulonglong param_1,byte *param_2,ulonglong param_3,uint *param_4,
                       longlong param_5)

{
  byte bVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  uint uVar4;
  uint *puVar5;
  byte *pbVar6;
  byte bVar7;
  ulonglong uVar8;
  ulonglong uVar9;
  uint *puVar10;
  undefined1 auStack_78 [24];
  uint auStack_60 [6];
  ulonglong local_48;
  
  local_48 = DAT_180021000 ^ (ulonglong)auStack_78;
  puVar5 = (uint *)&DAT_180022c48;
  if (param_4 != (uint *)0x0) {
    puVar5 = param_4;
  }
  pbVar6 = (byte *)0x180015f12;
  uVar2 = 1;
  if (param_2 != (byte *)0x0) {
    pbVar6 = param_2;
    uVar2 = param_3;
  }
  puVar10 = (uint *)(-(ulonglong)(param_2 != (byte *)0x0) & param_1);
  if (uVar2 == 0) {
LAB_18000f8e6:
    uVar2 = 0xfffffffffffffffe;
  }
  else {
    if (*(short *)((longlong)puVar5 + 6) == 0) {
      uVar3 = FUN_18000f84c(pbVar6);
      uVar4 = (uint)uVar3;
      uVar8 = (ulonglong)(int)uVar4;
      bVar1 = *pbVar6;
      pbVar6 = pbVar6 + 1;
      if (uVar4 < 2) {
        if (puVar10 == (uint *)0x0) {
          return uVar8;
        }
        *puVar10 = (uint)bVar1;
        return uVar8;
      }
      if (uVar4 - 2 < 3) {
        bVar7 = (byte)uVar3;
        uVar4 = (1 << (7 - bVar7 & 0x1f)) - 1U & (uint)bVar1;
LAB_18000f971:
        uVar9 = (ulonglong)bVar7;
        uVar3 = uVar9;
        if (uVar2 <= uVar9) {
          uVar3 = uVar2;
        }
        while ((ulonglong)((longlong)pbVar6 - (longlong)param_2) < uVar3) {
          bVar1 = *pbVar6;
          pbVar6 = pbVar6 + 1;
          if ((bVar1 & 0xc0) != 0x80) goto LAB_18000fa1a;
          uVar4 = bVar1 & 0x3f | uVar4 << 6;
        }
        if (uVar3 < uVar9) {
          *(ushort *)(puVar5 + 1) = (ushort)uVar8 & 0xff;
          *(ushort *)((longlong)puVar5 + 6) = (ushort)(byte)(bVar7 - (char)uVar3);
          *puVar5 = uVar4;
          goto LAB_18000f8e6;
        }
        if ((0x7ff < uVar4 - 0xd800) && (uVar4 < 0x110000)) {
          auStack_60[2] = 0x80;
          auStack_60[3] = 0x800;
          auStack_60[4] = 0x10000;
          if (auStack_60[uVar8 & 0xff] <= uVar4) {
            if (puVar10 != (uint *)0x0) {
              *puVar10 = uVar4;
            }
            uVar2 = FUN_18001263c(-(ulonglong)(uVar4 != 0) & uVar9,(undefined8 *)puVar5);
            return uVar2;
          }
        }
      }
    }
    else {
      bVar1 = (byte)puVar5[1];
      uVar8 = (ulonglong)bVar1;
      uVar4 = *puVar5;
      bVar7 = *(byte *)((longlong)puVar5 + 6);
      if ((((byte)(bVar1 - 2) < 3) && (bVar7 != 0)) && (bVar7 < bVar1)) goto LAB_18000f971;
    }
LAB_18000fa1a:
    uVar2 = FUN_180012644((undefined8 *)puVar5,param_5);
  }
  return uVar2;
}


/* Address: 0x18000fa44; Evidence: ev_2b40dc8c49aedccde87e7d6fda9b379639d3c06b2ff59e6181cfe9cadff0c5b1 */

void FUN_18000fa44(undefined2 *param_1,byte *param_2,ulonglong param_3,uint *param_4,
                  longlong param_5)

{
  ulonglong uVar1;
  uint local_18 [4];
  
  local_18[0] = 0;
  uVar1 = FUN_18000f884((ulonglong)local_18,param_2,param_3,param_4,param_5);
  if (uVar1 < 5) {
    if (0xffff < local_18[0]) {
      local_18[0] = 0xfffd;
    }
    if (param_1 != (undefined2 *)0x0) {
      *param_1 = (short)local_18[0];
    }
  }
  return;
}


/* Address: 0x18000fa8c; Evidence: ev_f35643a7e3556593a26d5c58939ea4c0b1c16097cd1fd46c27955d975f9d9b63 */

byte * FUN_18000fa8c(ushort *param_1,undefined8 *param_2,ulonglong param_3,uint *param_4,
                    longlong param_5)

{
  byte *pbVar1;
  ushort *puVar2;
  byte *pbVar3;
  byte *pbVar4;
  ulonglong uVar5;
  uint local_res8 [2];
  
  pbVar4 = (byte *)*param_2;
  pbVar3 = (byte *)0x0;
  puVar2 = param_1;
  if (param_1 == (ushort *)0x0) {
    while( true ) {
      if (*pbVar4 == 0) {
        uVar5 = 1;
      }
      else if (pbVar4[1] == 0) {
        uVar5 = 2;
      }
      else {
        uVar5 = (ulonglong)(pbVar4[2] != 0) + 3;
      }
      uVar5 = FUN_18000f884(0,pbVar4,uVar5,param_4,param_5);
      if (uVar5 == 0xffffffffffffffff) {
        *(undefined1 *)(param_5 + 0x30) = 1;
        *(undefined4 *)(param_5 + 0x2c) = 0x2a;
        return (byte *)0xffffffffffffffff;
      }
      if (uVar5 == 0) break;
      pbVar4 = pbVar4 + uVar5;
      pbVar1 = pbVar3 + 1;
      if (uVar5 != 4) {
        pbVar1 = pbVar3;
      }
      pbVar3 = pbVar1 + 1;
    }
  }
  else {
    for (; param_3 != 0; param_3 = param_3 - 1) {
      if (*pbVar4 == 0) {
        uVar5 = 1;
      }
      else if (pbVar4[1] == 0) {
        uVar5 = 2;
      }
      else {
        uVar5 = (ulonglong)(pbVar4[2] != 0) + 3;
      }
      local_res8[0] = 0;
      uVar5 = FUN_18000f884((ulonglong)local_res8,pbVar4,uVar5,param_4,param_5);
      if (uVar5 == 0xffffffffffffffff) {
        *param_2 = pbVar4;
        *(undefined1 *)(param_5 + 0x30) = 1;
        *(undefined4 *)(param_5 + 0x2c) = 0x2a;
        return (byte *)0xffffffffffffffff;
      }
      if (uVar5 == 0) {
        *puVar2 = 0;
        pbVar4 = pbVar3;
        break;
      }
      if (0xffff < local_res8[0]) {
        if (param_3 < 2) break;
        param_3 = param_3 - 1;
        *puVar2 = (ushort)(local_res8[0] - 0x10000 >> 10) | 0xd800;
        puVar2 = puVar2 + 1;
        local_res8[0] = (uint)((ushort)(local_res8[0] - 0x10000) & 0x3ff | 0xdc00);
      }
      *puVar2 = (ushort)local_res8[0];
      pbVar4 = pbVar4 + uVar5;
      puVar2 = puVar2 + 1;
    }
    *param_2 = pbVar4;
    pbVar3 = (byte *)((longlong)puVar2 - (longlong)param_1 >> 1);
  }
  return pbVar3;
}


/* Address: 0x18000fc44; Evidence: ev_8196e16fcf9830b29e044a8049fdbb12066b1eec300879241f9a816311b29ee6 */

undefined4 FUN_18000fc44(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_18000c034();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000ad7c();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}


/* Address: 0x18000fc6c; Evidence: ev_180fee3d6762e75edd4959b67e9a1d77e573c73e68046a579f69c9fa72cece97 */

/* Library Function - Single Match
    __acrt_add_locale_ref
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_add_locale_ref(longlong param_1)

{
  int *piVar1;
  undefined8 *puVar2;
  longlong lVar3;
  
  LOCK();
  *(int *)(param_1 + 0x10) = *(int *)(param_1 + 0x10) + 1;
  UNLOCK();
  piVar1 = *(int **)(param_1 + 0xe0);
  if (piVar1 != (int *)0x0) {
    LOCK();
    *piVar1 = *piVar1 + 1;
    UNLOCK();
  }
  piVar1 = *(int **)(param_1 + 0xf0);
  if (piVar1 != (int *)0x0) {
    LOCK();
    *piVar1 = *piVar1 + 1;
    UNLOCK();
  }
  piVar1 = *(int **)(param_1 + 0xe8);
  if (piVar1 != (int *)0x0) {
    LOCK();
    *piVar1 = *piVar1 + 1;
    UNLOCK();
  }
  piVar1 = *(int **)(param_1 + 0x100);
  if (piVar1 != (int *)0x0) {
    LOCK();
    *piVar1 = *piVar1 + 1;
    UNLOCK();
  }
  puVar2 = (undefined8 *)(param_1 + 0x38);
  lVar3 = 6;
  do {
    if (((undefined *)puVar2[-2] != &DAT_180021208) &&
       (piVar1 = (int *)*puVar2, piVar1 != (int *)0x0)) {
      LOCK();
      *piVar1 = *piVar1 + 1;
      UNLOCK();
    }
    if ((puVar2[-3] != 0) && (piVar1 = (int *)puVar2[-1], piVar1 != (int *)0x0)) {
      LOCK();
      *piVar1 = *piVar1 + 1;
      UNLOCK();
    }
    puVar2 = puVar2 + 4;
    lVar3 = lVar3 + -1;
  } while (lVar3 != 0);
  __acrt_locale_add_lc_time_reference(*(undefined ***)(param_1 + 0x120));
  return;
}


/* Address: 0x18000fcf8; Evidence: ev_946260ef8bf1aa6fd28e98c5a50f7e1c8b5911ae29112e08e8cb65629401d9a2 */

/* Library Function - Single Match
    __acrt_free_locale
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_free_locale(LPVOID param_1)

{
  int *piVar1;
  longlong lVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  
  if ((((*(undefined ***)((longlong)param_1 + 0xf8) != (undefined **)0x0) &&
       (*(undefined ***)((longlong)param_1 + 0xf8) != &PTR_DAT_180021860)) &&
      (*(int **)((longlong)param_1 + 0xe0) != (int *)0x0)) &&
     (**(int **)((longlong)param_1 + 0xe0) == 0)) {
    piVar1 = *(int **)((longlong)param_1 + 0xf0);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_18000c960(piVar1);
      __acrt_locale_free_monetary(*(longlong *)((longlong)param_1 + 0xf8));
    }
    piVar1 = *(int **)((longlong)param_1 + 0xe8);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_18000c960(piVar1);
      __acrt_locale_free_numeric(*(undefined8 **)((longlong)param_1 + 0xf8));
    }
    FUN_18000c960(*(LPVOID *)((longlong)param_1 + 0xe0));
    FUN_18000c960(*(LPVOID *)((longlong)param_1 + 0xf8));
  }
  if ((*(int **)((longlong)param_1 + 0x100) != (int *)0x0) &&
     (**(int **)((longlong)param_1 + 0x100) == 0)) {
    FUN_18000c960((LPVOID)(*(longlong *)((longlong)param_1 + 0x108) + -0xfe));
    FUN_18000c960((LPVOID)(*(longlong *)((longlong)param_1 + 0x110) + -0x80));
    FUN_18000c960((LPVOID)(*(longlong *)((longlong)param_1 + 0x118) + -0x80));
    FUN_18000c960(*(LPVOID *)((longlong)param_1 + 0x100));
  }
  __acrt_locale_free_lc_time_if_unreferenced(*(undefined ***)((longlong)param_1 + 0x120));
  puVar3 = (undefined8 *)((longlong)param_1 + 0x128);
  lVar2 = 6;
  puVar4 = (undefined8 *)((longlong)param_1 + 0x38);
  do {
    if ((((undefined *)puVar4[-2] != &DAT_180021208) &&
        (piVar1 = (int *)*puVar4, piVar1 != (int *)0x0)) && (*piVar1 == 0)) {
      FUN_18000c960(piVar1);
      FUN_18000c960((LPVOID)*puVar3);
    }
    if (((puVar4[-3] != 0) && (piVar1 = (int *)puVar4[-1], piVar1 != (int *)0x0)) && (*piVar1 == 0))
    {
      FUN_18000c960(piVar1);
    }
    puVar3 = puVar3 + 1;
    puVar4 = puVar4 + 4;
    lVar2 = lVar2 + -1;
  } while (lVar2 != 0);
  FUN_18000c960(param_1);
  return;
}


/* Address: 0x18000fe70; Evidence: ev_3e126a5a4cecc982cf5d8c4a4efd312ed9434ecc391e9e0a6ebf78e6bc9caa5a */

/* Library Function - Single Match
    __acrt_locale_add_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_add_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180016a50)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + 1;
    UNLOCK();
    return iVar2 + 1;
  }
  return 0x7fffffff;
}


/* Address: 0x18000fe98; Evidence: ev_d2a2b2d246396f9c83c3d8ab37b7c8afb5e4df25b7bc02c7f4eaece79331a8cf */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180016a50)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_18000c960(param_1);
  }
  return;
}


/* Address: 0x18000fed0; Evidence: ev_ecd94713882509e164060554684f83c815a7d1be215a594aca7341bb51833902 */

/* Library Function - Single Match
    __acrt_locale_release_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_release_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180016a50)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + -1;
    UNLOCK();
    return iVar2 + -1;
  }
  return 0x7fffffff;
}


/* Address: 0x18000fef8; Evidence: ev_301095817fa44f8b57319a5ff01c76a084c1dbce5c1e20b7e3bd67c0a45d0237 */

/* Library Function - Single Match
    __acrt_release_locale_ref
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_release_locale_ref(longlong param_1)

{
  int *piVar1;
  undefined8 *puVar2;
  longlong lVar3;
  
  if (param_1 != 0) {
    LOCK();
    *(int *)(param_1 + 0x10) = *(int *)(param_1 + 0x10) + -1;
    UNLOCK();
    piVar1 = *(int **)(param_1 + 0xe0);
    if (piVar1 != (int *)0x0) {
      LOCK();
      *piVar1 = *piVar1 + -1;
      UNLOCK();
    }
    piVar1 = *(int **)(param_1 + 0xf0);
    if (piVar1 != (int *)0x0) {
      LOCK();
      *piVar1 = *piVar1 + -1;
      UNLOCK();
    }
    piVar1 = *(int **)(param_1 + 0xe8);
    if (piVar1 != (int *)0x0) {
      LOCK();
      *piVar1 = *piVar1 + -1;
      UNLOCK();
    }
    piVar1 = *(int **)(param_1 + 0x100);
    if (piVar1 != (int *)0x0) {
      LOCK();
      *piVar1 = *piVar1 + -1;
      UNLOCK();
    }
    puVar2 = (undefined8 *)(param_1 + 0x38);
    lVar3 = 6;
    do {
      if (((undefined *)puVar2[-2] != &DAT_180021208) &&
         (piVar1 = (int *)*puVar2, piVar1 != (int *)0x0)) {
        LOCK();
        *piVar1 = *piVar1 + -1;
        UNLOCK();
      }
      if ((puVar2[-3] != 0) && (piVar1 = (int *)puVar2[-1], piVar1 != (int *)0x0)) {
        LOCK();
        *piVar1 = *piVar1 + -1;
        UNLOCK();
      }
      puVar2 = puVar2 + 4;
      lVar3 = lVar3 + -1;
    } while (lVar3 != 0);
    __acrt_locale_release_lc_time_reference(*(undefined ***)(param_1 + 0x120));
  }
  return;
}


/* Address: 0x18000ffa0; Evidence: ev_70ba180040eeb8b0774aa9cb6e17a30895d8b165902385e27b745dd917b2694d */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_18000c4d8();
  if (((DAT_180021858 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_180022470);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}


/* Address: 0x180010010; Evidence: ev_e2854b25a5ef09c6de99d2504f30c40597b3d8e1aaff299f9af518feb8bd92b0 */

/* Library Function - Single Match
    _updatetlocinfoEx_nolock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** _updatetlocinfoEx_nolock(undefined8 *param_1,undefined **param_2)

{
  undefined **ppuVar1;
  
  if ((param_2 == (undefined **)0x0) || (param_1 == (undefined8 *)0x0)) {
    param_2 = (undefined **)0x0;
  }
  else {
    ppuVar1 = (undefined **)*param_1;
    if (ppuVar1 != param_2) {
      *param_1 = param_2;
      __acrt_add_locale_ref((longlong)param_2);
      if (((ppuVar1 != (undefined **)0x0) &&
          (__acrt_release_locale_ref((longlong)ppuVar1), *(int *)(ppuVar1 + 2) == 0)) &&
         (ppuVar1 != &PTR_DAT_1800210a0)) {
        __acrt_free_locale(ppuVar1);
      }
    }
  }
  return param_2;
}


/* Address: 0x180010078; Evidence: ev_31141424e4fcbc7b885dfc5cb6e3071897219e76fe1f6ba09808a167315a6ca9 */

/* Library Function - Single Match
    __acrt_locale_free_monetary
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_monetary(longlong param_1)

{
  if (param_1 != 0) {
    if (*(undefined **)(param_1 + 0x18) != PTR_DAT_180021878) {
      FUN_18000c960(*(undefined **)(param_1 + 0x18));
    }
    if (*(undefined **)(param_1 + 0x20) != PTR_DAT_180021880) {
      FUN_18000c960(*(undefined **)(param_1 + 0x20));
    }
    if (*(undefined **)(param_1 + 0x28) != PTR_DAT_180021888) {
      FUN_18000c960(*(undefined **)(param_1 + 0x28));
    }
    if (*(undefined **)(param_1 + 0x30) != PTR_DAT_180021890) {
      FUN_18000c960(*(undefined **)(param_1 + 0x30));
    }
    if (*(undefined **)(param_1 + 0x38) != PTR_DAT_180021898) {
      FUN_18000c960(*(undefined **)(param_1 + 0x38));
    }
    if (*(undefined **)(param_1 + 0x40) != PTR_DAT_1800218a0) {
      FUN_18000c960(*(undefined **)(param_1 + 0x40));
    }
    if (*(undefined **)(param_1 + 0x48) != PTR_DAT_1800218a8) {
      FUN_18000c960(*(undefined **)(param_1 + 0x48));
    }
    if (*(undefined **)(param_1 + 0x68) != PTR_DAT_1800218c8) {
      FUN_18000c960(*(undefined **)(param_1 + 0x68));
    }
    if (*(undefined **)(param_1 + 0x70) != PTR_DAT_1800218d0) {
      FUN_18000c960(*(undefined **)(param_1 + 0x70));
    }
    if (*(undefined **)(param_1 + 0x78) != PTR_DAT_1800218d8) {
      FUN_18000c960(*(undefined **)(param_1 + 0x78));
    }
    if (*(undefined **)(param_1 + 0x80) != PTR_DAT_1800218e0) {
      FUN_18000c960(*(undefined **)(param_1 + 0x80));
    }
    if (*(undefined **)(param_1 + 0x88) != PTR_DAT_1800218e8) {
      FUN_18000c960(*(undefined **)(param_1 + 0x88));
    }
    if (*(undefined **)(param_1 + 0x90) != PTR_DAT_1800218f0) {
      FUN_18000c960(*(undefined **)(param_1 + 0x90));
    }
  }
  return;
}


/* Address: 0x180010184; Evidence: ev_62851d56d396909cc7fb63d6785ed4576b507ef2759fba06722afbef24ed4f50 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_180021860) {
      FUN_18000c960((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_180021868) {
      FUN_18000c960((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_180021870) {
      FUN_18000c960((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800218b8) {
      FUN_18000c960((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_1800218c0) {
      FUN_18000c960((undefined *)param_1[0xc]);
    }
  }
  return;
}


/* Address: 0x1800101f0; Evidence: ev_79bf042c72b539472f9d5f1642d2e8e8f6e2b40fd351ccd3a38af99f0be38260 */

void FUN_1800101f0(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_18000c960((LPVOID)*param_1);
  }
  return;
}


/* Address: 0x180010224; Evidence: ev_2cb4912f56044dc53638058995f9484b58c4917ba29d6fca3a48fcf2078a4dbb */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_1800101f0(param_1,7);
    FUN_1800101f0(param_1 + 7,7);
    FUN_1800101f0(param_1 + 0xe,0xc);
    FUN_1800101f0(param_1 + 0x1a,0xc);
    FUN_1800101f0(param_1 + 0x26,2);
    FUN_18000c960((LPVOID)param_1[0x28]);
    FUN_18000c960((LPVOID)param_1[0x29]);
    FUN_18000c960((LPVOID)param_1[0x2a]);
    FUN_1800101f0(param_1 + 0x2c,7);
    FUN_1800101f0(param_1 + 0x33,7);
    FUN_1800101f0(param_1 + 0x3a,0xc);
    FUN_1800101f0(param_1 + 0x46,0xc);
    FUN_1800101f0(param_1 + 0x52,2);
    FUN_18000c960((LPVOID)param_1[0x54]);
    FUN_18000c960((LPVOID)param_1[0x55]);
    FUN_18000c960((LPVOID)param_1[0x56]);
    FUN_18000c960((LPVOID)param_1[0x57]);
  }
  return;
}


/* Address: 0x18001032c; Evidence: ev_c7c4bdc94b1e5c5abf0238a528c364cafaa94b0272f30ac12541a2615759e309 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_18001032c(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
                  LPWORD param_5,uint param_6,int param_7)

{
  ulonglong uVar1;
  longlong lVar2;
  int iVar3;
  BOOL BVar4;
  ulonglong uVar5;
  undefined4 *puVar6;
  ulonglong uVar7;
  undefined1 (*lpSrcStr) [32];
  undefined1 *puVar8;
  undefined1 *puVar9;
  BOOL BVar10;
  undefined1 auStack_88 [32];
  undefined8 local_68;
  undefined4 local_60;
  undefined4 local_58 [2];
  longlong local_50;
  longlong local_48;
  char local_38;
  ulonglong local_30;
  
  puVar8 = auStack_88;
  puVar9 = auStack_88;
  local_30 = DAT_180021000 ^ (ulonglong)local_58;
  FUN_18000a710(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_18000e368(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_180010482;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_18001046a:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_180010482;
  }
  else {
    if (uVar7 < 0x401) {
      uVar5 = uVar7 + 0xf;
      if (uVar5 <= uVar7) {
        uVar5 = 0xffffffffffffff0;
      }
      lVar2 = -(uVar5 & 0xfffffffffffffff0);
      puVar9 = auStack_88 + lVar2;
      puVar8 = auStack_88 + lVar2;
      puVar6 = (undefined4 *)((longlong)local_58 + lVar2);
      lpSrcStr = (undefined1 (*) [32])0x0;
      if (puVar6 == (undefined4 *)0x0) goto LAB_18001046a;
      *puVar6 = 0xcccc;
LAB_180010418:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180010418;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18001046a;
    *(undefined8 *)(puVar9 + -8) = 0x18001042e;
    FUN_180013a30(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x18001044a;
    iVar3 = FUN_18000e368(param_6,1);
    if (iVar3 == 0) goto LAB_18001046a;
    *(undefined8 *)(puVar9 + -8) = 0x180010464;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x180010482;
    FUN_18000c960(lpSrcStr[-1] + 0x10);
  }
LAB_180010482:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x1800104a1;
  return BVar10;
}


/* Address: 0x1800104c0; Evidence: ev_afdb98a68698fadc84dd2351d0d91de25280342deb1b3a60f6748183265db83e */

undefined4 FUN_1800104c0(void)

{
  return DAT_180022c58;
}


/* Address: 0x1800104d0; Evidence: ev_ff0ef93dceea86f6b57e6f16db75d4221f8780d02646dacdf70dc0a398ce5d4b */

uint FUN_1800104d0(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180022c58;
    DAT_180022c58 = param_1;
  }
  else {
    p_Var2 = FUN_18000c034();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000ad7c();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}


/* Address: 0x180010500; Evidence: ev_9b05af9c407b00d962abb86b059c73d133a2e81b0740534f0a3e49319eb4ff00 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180010500(undefined1 *param_1,ulonglong param_2,ulonglong param_3,undefined *param_4)

{
  undefined1 uVar1;
  int iVar2;
  __acrt_ptd *p_Var3;
  undefined1 *puVar4;
  longlong lVar5;
  undefined1 *puVar6;
  undefined1 *puVar7;
  undefined1 *puVar8;
  ulonglong uVar9;
  undefined1 *puVar10;
  undefined1 auStack_468 [32];
  longlong local_448;
  undefined8 local_438 [62];
  undefined8 local_248 [62];
  ulonglong local_58;
  
  local_58 = DAT_180021000 ^ (ulonglong)auStack_468;
  if ((((param_1 == (undefined1 *)0x0) && (param_2 != 0)) || (param_3 == 0)) ||
     (param_4 == (undefined *)0x0)) {
    p_Var3 = FUN_18000c034();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000ad7c();
  }
  else {
    FUN_1800126c8();
    FUN_180013a30((undefined1 (*) [32])local_438,0,0x1f0);
    FUN_180013a30((undefined1 (*) [32])local_248,0,0x1f0);
    if (1 < param_2) {
      local_448 = 0;
      puVar10 = param_1 + (param_2 - 1) * param_3;
LAB_1800105c0:
      while (uVar9 = (ulonglong)((longlong)puVar10 - (longlong)param_1) / param_3 + 1, 8 < uVar9) {
        lVar5 = (uVar9 >> 1) * param_3;
        puVar7 = param_1 + lVar5;
        iVar2 = (*(code *)param_4)(param_1,puVar7);
        if ((0 < iVar2) && (puVar6 = puVar7, uVar9 = param_3, param_1 != puVar7)) {
          do {
            uVar1 = puVar6[-lVar5];
            puVar6[-lVar5] = *puVar6;
            *puVar6 = uVar1;
            uVar9 = uVar9 - 1;
            puVar6 = puVar6 + 1;
          } while (uVar9 != 0);
        }
        iVar2 = (*(code *)param_4)(param_1,puVar10);
        if ((0 < iVar2) && (param_1 != puVar10)) {
          puVar6 = puVar10;
          uVar9 = param_3;
          do {
            uVar1 = puVar6[(longlong)param_1 - (longlong)puVar10];
            puVar6[(longlong)param_1 - (longlong)puVar10] = *puVar6;
            *puVar6 = uVar1;
            puVar6 = puVar6 + 1;
            uVar9 = uVar9 - 1;
          } while (uVar9 != 0);
        }
        iVar2 = (*(code *)param_4)(puVar7);
        puVar6 = param_1;
        puVar8 = puVar10;
        if ((0 < iVar2) && (puVar7 != puVar10)) {
          puVar4 = puVar10;
          uVar9 = param_3;
          do {
            uVar1 = puVar4[(longlong)puVar7 - (longlong)puVar10];
            puVar4[(longlong)puVar7 - (longlong)puVar10] = *puVar4;
            *puVar4 = uVar1;
            puVar4 = puVar4 + 1;
            uVar9 = uVar9 - 1;
          } while (uVar9 != 0);
        }
LAB_180010730:
        puVar4 = puVar7;
        if (puVar6 < puVar4) {
          do {
            puVar6 = puVar6 + param_3;
            if (puVar4 <= puVar6) goto LAB_180010750;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        else {
LAB_180010750:
          do {
            puVar6 = puVar6 + param_3;
            if (puVar10 < puVar6) break;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        do {
          puVar7 = puVar8;
          puVar8 = puVar7 + -param_3;
          if (puVar8 <= puVar4) break;
          iVar2 = (*(code *)param_4)(puVar8);
        } while (0 < iVar2);
        if (puVar6 <= puVar8) {
          if (puVar8 != puVar6) {
            puVar7 = puVar8;
            uVar9 = param_3;
            do {
              uVar1 = puVar7[(longlong)puVar6 - (longlong)puVar8];
              puVar7[(longlong)puVar6 - (longlong)puVar8] = *puVar7;
              *puVar7 = uVar1;
              puVar7 = puVar7 + 1;
              uVar9 = uVar9 - 1;
            } while (uVar9 != 0);
          }
          puVar7 = puVar6;
          if (puVar4 != puVar8) {
            puVar7 = puVar4;
          }
          goto LAB_180010730;
        }
        if (puVar4 < puVar7) {
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= puVar4) goto LAB_1800107d7;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        else {
LAB_1800107d7:
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= param_1) break;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        if ((longlong)puVar7 - (longlong)param_1 < (longlong)puVar10 - (longlong)puVar6)
        goto LAB_18001082d;
        if (param_1 < puVar7) {
          local_438[local_448] = param_1;
          local_248[local_448] = puVar7;
          local_448 = local_448 + 1;
        }
        param_1 = puVar6;
        if (puVar10 <= puVar6) goto LAB_180010643;
      }
      for (; puVar6 = param_1, puVar7 = param_1, param_1 < puVar10; puVar10 = puVar10 + -param_3) {
        while (puVar8 = puVar6, puVar7 = puVar7 + param_3, puVar7 <= puVar10) {
          iVar2 = (*(code *)param_4)(puVar7,puVar8);
          puVar6 = puVar7;
          if (iVar2 < 1) {
            puVar6 = puVar8;
          }
        }
        if (puVar8 != puVar10) {
          puVar7 = puVar10;
          uVar9 = param_3;
          do {
            uVar1 = puVar7[(longlong)puVar8 - (longlong)puVar10];
            puVar7[(longlong)puVar8 - (longlong)puVar10] = *puVar7;
            *puVar7 = uVar1;
            puVar7 = puVar7 + 1;
            uVar9 = uVar9 - 1;
          } while (uVar9 != 0);
        }
      }
      goto LAB_180010643;
    }
  }
  return;
LAB_18001082d:
  if (puVar6 < puVar10) {
    local_438[local_448] = puVar6;
    local_248[local_448] = puVar10;
    local_448 = local_448 + 1;
  }
  puVar10 = puVar7;
  if (puVar7 <= param_1) {
LAB_180010643:
    local_448 = local_448 + -1;
    if (local_448 < 0) {
      return;
    }
    param_1 = (undefined1 *)local_438[local_448];
    puVar10 = (undefined1 *)local_248[local_448];
  }
  goto LAB_1800105c0;
}


/* Address: 0x1800108a0; Evidence: ev_5f611009d80c4e0cbe9ddae69ca9de6e61cd2edb213b3e0963e0339331096015 */

undefined4 FUN_1800108a0(char *param_1,longlong param_2,longlong param_3,longlong param_4)

{
  char cVar1;
  __acrt_ptd *p_Var2;
  longlong lVar3;
  char *pcVar4;
  longlong lVar5;
  longlong lVar6;
  
  if (param_4 == 0) {
    if (param_1 == (char *)0x0) {
      if (param_2 == 0) {
        return 0;
      }
      goto LAB_1800108f9;
    }
  }
  else if (param_1 == (char *)0x0) goto LAB_1800108f9;
  if (param_2 != 0) {
    if (param_4 == 0) {
      *param_1 = '\0';
      return 0;
    }
    if (param_3 != 0) {
      pcVar4 = param_1;
      lVar5 = param_2;
      lVar3 = param_4;
      if (param_4 == -1) {
        do {
          cVar1 = pcVar4[param_3 - (longlong)param_1];
          *pcVar4 = cVar1;
          if (cVar1 == '\0') {
            return 0;
          }
          lVar5 = lVar5 + -1;
          pcVar4 = pcVar4 + 1;
        } while (lVar5 != 0);
        lVar5 = 0;
      }
      else {
        do {
          lVar6 = lVar3;
          cVar1 = pcVar4[param_3 - (longlong)param_1];
          *pcVar4 = cVar1;
          pcVar4 = pcVar4 + 1;
          if (cVar1 == '\0') {
            return 0;
          }
          lVar5 = lVar5 + -1;
        } while ((lVar5 != 0) && (lVar3 = lVar6 + -1, lVar6 + -1 != 0));
        lVar3 = lVar6 + -1;
        if (lVar5 == 0) {
          lVar3 = lVar6;
        }
        if (lVar3 == 0) {
          *pcVar4 = '\0';
        }
      }
      if (lVar5 != 0) {
        return 0;
      }
      if (param_4 == -1) {
        param_1[param_2 + -1] = '\0';
        return 0x50;
      }
      *param_1 = '\0';
      p_Var2 = FUN_18000c034();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000ad7c();
      return 0x22;
    }
    *param_1 = '\0';
  }
LAB_1800108f9:
  p_Var2 = FUN_18000c034();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000ad7c();
  return 0x16;
}


/* Address: 0x1800109d0; Evidence: ev_0952759544cf1aa1c5c3799e6733caf2105149b8a92436cbd0724cd15b25f03d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

byte * FUN_1800109d0(byte *param_1,byte *param_2)

{
  byte *pbVar1;
  byte bVar2;
  byte local_38 [56];
  
  bVar2 = *param_2;
  local_38[0] = 0;
  local_38[1] = 0;
  local_38[2] = 0;
  local_38[3] = 0;
  local_38[4] = 0;
  local_38[5] = 0;
  local_38[6] = 0;
  local_38[7] = 0;
  local_38[8] = 0;
  local_38[9] = 0;
  local_38[10] = 0;
  local_38[0xb] = 0;
  local_38[0xc] = 0;
  local_38[0xd] = 0;
  local_38[0xe] = 0;
  local_38[0xf] = 0;
  local_38[0x10] = 0;
  local_38[0x11] = 0;
  local_38[0x12] = 0;
  local_38[0x13] = 0;
  local_38[0x14] = 0;
  local_38[0x15] = 0;
  local_38[0x16] = 0;
  local_38[0x17] = 0;
  local_38[0x18] = 0;
  local_38[0x19] = 0;
  local_38[0x1a] = 0;
  local_38[0x1b] = 0;
  local_38[0x1c] = 0;
  local_38[0x1d] = 0;
  local_38[0x1e] = 0;
  local_38[0x1f] = 0;
  while (bVar2 != 0) {
    local_38[(longlong)(int)(uint)bVar2 >> 3] =
         local_38[(longlong)(int)(uint)bVar2 >> 3] | '\x01' << (bVar2 & 7);
    pbVar1 = param_2 + 1;
    param_2 = param_2 + 1;
    bVar2 = *pbVar1;
  }
  bVar2 = *param_1;
  while( true ) {
    if (bVar2 == 0) {
      return (byte *)0x0;
    }
    if ((local_38[bVar2 >> 3] >> (bVar2 & 7) & 1) != 0) break;
    bVar2 = param_1[1];
    param_1 = param_1 + 1;
  }
  return param_1;
}


/* Address: 0x180010a70; Evidence: ev_03c64471022c96dd2db5d7798576c878629ad38c228da52466a5270e202f2378 */

/* WARNING: Removing unreachable block (ram,0x000180010d0c) */
/* WARNING: Removing unreachable block (ram,0x000180010d05) */
/* WARNING: Removing unreachable block (ram,0x000180010cfe) */
/* WARNING: Removing unreachable block (ram,0x000180010cf7) */
/* WARNING: Removing unreachable block (ram,0x000180010cf0) */
/* WARNING: Removing unreachable block (ram,0x000180010ce9) */
/* WARNING: Removing unreachable block (ram,0x000180010ce2) */
/* WARNING: Removing unreachable block (ram,0x000180010cdb) */
/* WARNING: Removing unreachable block (ram,0x000180010cd4) */
/* WARNING: Removing unreachable block (ram,0x000180010ccd) */
/* WARNING: Removing unreachable block (ram,0x000180010cc6) */
/* WARNING: Removing unreachable block (ram,0x000180010cbf) */
/* WARNING: Removing unreachable block (ram,0x000180010cb8) */
/* WARNING: Removing unreachable block (ram,0x000180010cb1) */
/* WARNING: Removing unreachable block (ram,0x000180010caa) */
/* WARNING: Removing unreachable block (ram,0x000180010b6d) */
/* WARNING: Removing unreachable block (ram,0x000180010b7c) */
/* WARNING: Removing unreachable block (ram,0x000180010b8b) */
/* WARNING: Removing unreachable block (ram,0x000180010b9a) */
/* WARNING: Removing unreachable block (ram,0x000180010ba9) */
/* WARNING: Removing unreachable block (ram,0x000180010bb5) */
/* WARNING: Removing unreachable block (ram,0x000180010bc1) */
/* WARNING: Removing unreachable block (ram,0x000180010bcd) */
/* WARNING: Removing unreachable block (ram,0x000180010bd9) */
/* WARNING: Removing unreachable block (ram,0x000180010be5) */
/* WARNING: Removing unreachable block (ram,0x000180010bf1) */
/* WARNING: Removing unreachable block (ram,0x000180010bfd) */
/* WARNING: Removing unreachable block (ram,0x000180010c09) */
/* WARNING: Removing unreachable block (ram,0x000180010c15) */
/* WARNING: Removing unreachable block (ram,0x000180010c21) */

byte * FUN_180010a70(byte *param_1,byte *param_2)

{
  byte bVar1;
  uint uVar2;
  ushort uVar3;
  undefined1 auVar4 [16];
  undefined1 auVar5 [16];
  undefined1 auVar6 [16];
  undefined1 auVar7 [16];
  undefined1 auVar8 [16];
  undefined1 auVar9 [16];
  undefined1 auVar10 [16];
  undefined1 auVar11 [16];
  undefined1 auVar12 [16];
  undefined1 auVar13 [16];
  undefined1 auVar14 [16];
  undefined1 auVar15 [16];
  undefined1 auVar16 [16];
  undefined1 auVar17 [16];
  undefined1 auVar18 [16];
  byte *pbVar19;
  undefined1 (*pauVar20) [16];
  ulonglong uVar21;
  undefined1 auVar22 [16];
  undefined1 auVar23 [16];
  undefined1 auVar24 [16];
  undefined1 auVar26 [16];
  undefined1 auVar27 [16];
  undefined1 auVar28 [16];
  undefined1 auVar29 [16];
  undefined1 auVar30 [16];
  undefined1 auVar31 [16];
  undefined1 auVar32 [16];
  undefined1 auVar33 [16];
  undefined1 auVar34 [16];
  longlong lVar25;
  
  uVar21 = (ulonglong)((uint)param_2 & 0xf);
  pauVar20 = (undefined1 (*) [16])(param_2 + -uVar21);
  auVar33 = *pauVar20;
  switch(uVar21) {
  case 1:
    auVar33 = auVar33 >> 8;
    break;
  case 2:
    auVar33 = auVar33 >> 0x10;
    break;
  case 3:
    auVar33 = auVar33 >> 0x18;
    break;
  case 4:
    auVar33 = auVar33 >> 0x20;
    break;
  case 5:
    auVar33 = auVar33 >> 0x28;
    break;
  case 6:
    auVar33 = auVar33 >> 0x30;
    break;
  case 7:
    auVar33 = auVar33 >> 0x38;
    break;
  case 8:
    auVar33 = auVar33 >> 0x40;
    break;
  case 9:
    auVar33 = auVar33 >> 0x48;
    break;
  case 10:
    auVar33 = auVar33 >> 0x50;
    break;
  case 0xb:
    auVar33 = auVar33 >> 0x58;
    break;
  case 0xc:
    auVar33 = auVar33 >> 0x60;
    break;
  case 0xd:
    auVar33 = auVar33 >> 0x68;
    break;
  case 0xe:
    auVar33 = auVar33 >> 0x70;
    break;
  case 0xf:
    auVar33 = auVar33 >> 0x78;
  }
  auVar22[0] = -(auVar33[0] == '\0');
  auVar22[1] = -(auVar33[1] == '\0');
  auVar22[2] = -(auVar33[2] == '\0');
  auVar22[3] = -(auVar33[3] == '\0');
  auVar22[4] = -(auVar33[4] == '\0');
  auVar22[5] = -(auVar33[5] == '\0');
  auVar22[6] = -(auVar33[6] == '\0');
  auVar22[7] = -(auVar33[7] == '\0');
  auVar22[8] = -(auVar33[8] == '\0');
  auVar22[9] = -(auVar33[9] == '\0');
  auVar22[10] = -(auVar33[10] == '\0');
  auVar22[0xb] = -(auVar33[0xb] == '\0');
  auVar22[0xc] = -(auVar33[0xc] == '\0');
  auVar22[0xd] = -(auVar33[0xd] == '\0');
  auVar22[0xe] = -(auVar33[0xe] == '\0');
  auVar22[0xf] = -(auVar33[0xf] == '\0');
  uVar3 = (ushort)(SUB161(auVar22 >> 7,0) & 1) | (ushort)(SUB161(auVar22 >> 0xf,0) & 1) << 1 |
          (ushort)(SUB161(auVar22 >> 0x17,0) & 1) << 2 |
          (ushort)(SUB161(auVar22 >> 0x1f,0) & 1) << 3 |
          (ushort)(SUB161(auVar22 >> 0x27,0) & 1) << 4 |
          (ushort)(SUB161(auVar22 >> 0x2f,0) & 1) << 5 |
          (ushort)(SUB161(auVar22 >> 0x37,0) & 1) << 6 |
          (ushort)(SUB161(auVar22 >> 0x3f,0) & 1) << 7 |
          (ushort)(SUB161(auVar22 >> 0x47,0) & 1) << 8 |
          (ushort)(SUB161(auVar22 >> 0x4f,0) & 1) << 9 |
          (ushort)(SUB161(auVar22 >> 0x57,0) & 1) << 10 |
          (ushort)(SUB161(auVar22 >> 0x5f,0) & 1) << 0xb |
          (ushort)(SUB161(auVar22 >> 0x67,0) & 1) << 0xc |
          (ushort)(SUB161(auVar22 >> 0x6f,0) & 1) << 0xd |
          (ushort)(SUB161(auVar22 >> 0x77,0) & 1) << 0xe | (ushort)(auVar22[0xf] >> 7) << 0xf;
  if (uVar3 == 0) {
    if (uVar21 == 0) {
      if ((*pauVar20)[1] != '\0') {
        pbVar19 = FUN_1800109d0(param_1,param_2);
        return pbVar19;
      }
      goto LAB_180010d19;
    }
  }
  else {
    uVar2 = 0;
    if (uVar3 != 0) {
      for (; (uVar3 >> uVar2 & 1) == 0; uVar2 = uVar2 + 1) {
      }
    }
    lVar25 = auVar33._8_8_;
    switch(-uVar2) {
    case 0:
      auVar33 = ZEXT816(0);
      break;
    case 0xfffffff1:
      auVar26._0_8_ = auVar33._0_8_ << 8;
      auVar26._8_8_ = lVar25 << 8 | auVar33._0_8_ >> 0x38;
      auVar33 = auVar26 >> 8;
      break;
    case 0xfffffff2:
      auVar27._0_8_ = auVar33._0_8_ << 0x10;
      auVar27._8_8_ = lVar25 << 0x10 | auVar33._0_8_ >> 0x30;
      auVar33 = auVar27 >> 0x10;
      break;
    case 0xfffffff3:
      auVar28._0_8_ = auVar33._0_8_ << 0x18;
      auVar28._8_8_ = lVar25 << 0x18 | auVar33._0_8_ >> 0x28;
      auVar33 = auVar28 >> 0x18;
      break;
    case 0xfffffff4:
      auVar29._0_8_ = auVar33._0_8_ << 0x20;
      auVar29._8_8_ = lVar25 << 0x20 | auVar33._0_8_ >> 0x20;
      auVar33 = auVar29 >> 0x20;
      break;
    case 0xfffffff5:
      auVar30._0_8_ = auVar33._0_8_ << 0x28;
      auVar30._8_8_ = lVar25 << 0x28 | auVar33._0_8_ >> 0x18;
      auVar33 = auVar30 >> 0x28;
      break;
    case 0xfffffff6:
      auVar31._0_8_ = auVar33._0_8_ << 0x30;
      auVar31._8_8_ = lVar25 << 0x30 | auVar33._0_8_ >> 0x10;
      auVar33 = auVar31 >> 0x30;
      break;
    case 0xfffffff7:
      auVar32._0_8_ = auVar33._0_8_ << 0x38;
      auVar32._8_8_ = lVar25 << 0x38 | auVar33._0_8_ >> 8;
      auVar33 = auVar32 >> 0x38;
      break;
    case 0xfffffff8:
      auVar33._8_8_ = 0;
      break;
    case 0xfffffff9:
      auVar4._8_8_ = 0;
      auVar4._0_8_ = auVar33._0_8_ << 8;
      auVar33 = (auVar4 << 0x40) >> 0x48;
      break;
    case 0xfffffffa:
      auVar5._8_8_ = 0;
      auVar5._0_8_ = auVar33._0_8_ << 0x10;
      auVar33 = (auVar5 << 0x40) >> 0x50;
      break;
    case 0xfffffffb:
      auVar6._8_8_ = 0;
      auVar6._0_8_ = auVar33._0_8_ << 0x18;
      auVar33 = (auVar6 << 0x40) >> 0x58;
      break;
    case 0xfffffffc:
      auVar7._8_8_ = 0;
      auVar7._0_8_ = auVar33._0_8_ << 0x20;
      auVar33 = (auVar7 << 0x40) >> 0x60;
      break;
    case 0xfffffffd:
      auVar8._8_8_ = 0;
      auVar8._0_8_ = auVar33._0_8_ << 0x28;
      auVar33 = (auVar8 << 0x40) >> 0x68;
      break;
    case 0xfffffffe:
      auVar9._8_8_ = 0;
      auVar9._0_8_ = auVar33._0_8_ << 0x30;
      auVar33 = (auVar9 << 0x40) >> 0x70;
      break;
    case 0xffffffff:
      auVar10._8_8_ = 0;
      auVar10._0_8_ = auVar33._0_8_ << 0x38;
      auVar33 = (auVar10 << 0x40) >> 0x78;
    }
    if (uVar21 == 0 || (ulonglong)uVar2 < 0x10 - uVar21) goto LAB_180010d19;
  }
  auVar34 = pauVar20[1];
  auVar23[0] = -(auVar34[0] == '\0');
  auVar23[1] = -(auVar34[1] == '\0');
  auVar23[2] = -(auVar34[2] == '\0');
  auVar23[3] = -(auVar34[3] == '\0');
  auVar23[4] = -(auVar34[4] == '\0');
  auVar23[5] = -(auVar34[5] == '\0');
  auVar23[6] = -(auVar34[6] == '\0');
  lVar25 = auVar34._8_8_;
  auVar23[7] = -(auVar34[7] == '\0');
  auVar23[8] = -(auVar34[8] == '\0');
  auVar23[9] = -(auVar34[9] == '\0');
  auVar23[10] = -(auVar34[10] == '\0');
  auVar23[0xb] = -(auVar34[0xb] == '\0');
  auVar23[0xc] = -(auVar34[0xc] == '\0');
  auVar23[0xd] = -(auVar34[0xd] == '\0');
  auVar23[0xe] = -(auVar34[0xe] == '\0');
  auVar23[0xf] = -(auVar34[0xf] == '\0');
  uVar3 = (ushort)(SUB161(auVar23 >> 7,0) & 1) | (ushort)(SUB161(auVar23 >> 0xf,0) & 1) << 1 |
          (ushort)(SUB161(auVar23 >> 0x17,0) & 1) << 2 |
          (ushort)(SUB161(auVar23 >> 0x1f,0) & 1) << 3 |
          (ushort)(SUB161(auVar23 >> 0x27,0) & 1) << 4 |
          (ushort)(SUB161(auVar23 >> 0x2f,0) & 1) << 5 |
          (ushort)(SUB161(auVar23 >> 0x37,0) & 1) << 6 |
          (ushort)(SUB161(auVar23 >> 0x3f,0) & 1) << 7 |
          (ushort)(SUB161(auVar23 >> 0x47,0) & 1) << 8 |
          (ushort)(SUB161(auVar23 >> 0x4f,0) & 1) << 9 |
          (ushort)(SUB161(auVar23 >> 0x57,0) & 1) << 10 |
          (ushort)(SUB161(auVar23 >> 0x5f,0) & 1) << 0xb |
          (ushort)(SUB161(auVar23 >> 0x67,0) & 1) << 0xc |
          (ushort)(SUB161(auVar23 >> 0x6f,0) & 1) << 0xd |
          (ushort)(SUB161(auVar23 >> 0x77,0) & 1) << 0xe | (ushort)(auVar23[0xf] >> 7) << 0xf;
  if (uVar3 != 0) {
    uVar2 = 0;
    if (uVar3 != 0) {
      for (; (uVar3 >> uVar2 & 1) == 0; uVar2 = uVar2 + 1) {
      }
    }
    if ((uVar2 - uVar21) + 0x10 < 0x11) {
      uVar21 = auVar34._0_8_;
      switch(-uVar2) {
      case 0:
        auVar34 = ZEXT816(0);
        break;
      case 0xfffffff1:
        auVar34._0_8_ = uVar21 << 8;
        auVar34._8_8_ = lVar25 << 8 | uVar21 >> 0x38;
        break;
      case 0xfffffff2:
        auVar34._0_8_ = uVar21 << 0x10;
        auVar34._8_8_ = lVar25 << 0x10 | uVar21 >> 0x30;
        break;
      case 0xfffffff3:
        auVar34._0_8_ = uVar21 << 0x18;
        auVar34._8_8_ = lVar25 << 0x18 | uVar21 >> 0x28;
        break;
      case 0xfffffff4:
        auVar34._0_8_ = uVar21 << 0x20;
        auVar34._8_8_ = lVar25 << 0x20 | uVar21 >> 0x20;
        break;
      case 0xfffffff5:
        auVar34._0_8_ = uVar21 << 0x28;
        auVar34._8_8_ = lVar25 << 0x28 | uVar21 >> 0x18;
        break;
      case 0xfffffff6:
        auVar34._0_8_ = uVar21 << 0x30;
        auVar34._8_8_ = lVar25 << 0x30 | uVar21 >> 0x10;
        break;
      case 0xfffffff7:
        auVar34._0_8_ = uVar21 << 0x38;
        auVar34._8_8_ = lVar25 << 0x38 | uVar21 >> 8;
        break;
      case 0xfffffff8:
        auVar18._8_8_ = 0;
        auVar18._0_8_ = uVar21;
        auVar34 = auVar18 << 0x40;
        break;
      case 0xfffffff9:
        auVar11._8_8_ = 0;
        auVar11._0_8_ = uVar21 << 8;
        auVar34 = auVar11 << 0x40;
        break;
      case 0xfffffffa:
        auVar12._8_8_ = 0;
        auVar12._0_8_ = uVar21 << 0x10;
        auVar34 = auVar12 << 0x40;
        break;
      case 0xfffffffb:
        auVar13._8_8_ = 0;
        auVar13._0_8_ = uVar21 << 0x18;
        auVar34 = auVar13 << 0x40;
        break;
      case 0xfffffffc:
        auVar14._8_8_ = 0;
        auVar14._0_8_ = uVar21 << 0x20;
        auVar34 = auVar14 << 0x40;
        break;
      case 0xfffffffd:
        auVar15._8_8_ = 0;
        auVar15._0_8_ = uVar21 << 0x28;
        auVar34 = auVar15 << 0x40;
        break;
      case 0xfffffffe:
        auVar16._8_8_ = 0;
        auVar16._0_8_ = uVar21 << 0x30;
        auVar34 = auVar16 << 0x40;
        break;
      case 0xffffffff:
        auVar17._8_8_ = 0;
        auVar17._0_8_ = uVar21 << 0x38;
        auVar34 = auVar17 << 0x40;
      }
      auVar33 = auVar33 | auVar34;
LAB_180010d19:
      bVar1 = *param_1;
      while( true ) {
        if (bVar1 == 0) {
          return (byte *)0x0;
        }
        auVar24[0] = -(bVar1 == auVar33[0]);
        auVar24[1] = -(bVar1 == auVar33[1]);
        auVar24[2] = -(bVar1 == auVar33[2]);
        auVar24[3] = -(bVar1 == auVar33[3]);
        auVar24[4] = -(bVar1 == auVar33[4]);
        auVar24[5] = -(bVar1 == auVar33[5]);
        auVar24[6] = -(bVar1 == auVar33[6]);
        auVar24[7] = -(bVar1 == auVar33[7]);
        auVar24[8] = -(bVar1 == auVar33[8]);
        auVar24[9] = -(bVar1 == auVar33[9]);
        auVar24[10] = -(bVar1 == auVar33[10]);
        auVar24[0xb] = -(bVar1 == auVar33[0xb]);
        auVar24[0xc] = -(bVar1 == auVar33[0xc]);
        auVar24[0xd] = -(bVar1 == auVar33[0xd]);
        auVar24[0xe] = -(bVar1 == auVar33[0xe]);
        auVar24[0xf] = -(bVar1 == auVar33[0xf]);
        if ((((((((((((((((SUB161(auVar24 >> 7,0) & 1) != 0 || (SUB161(auVar24 >> 0xf,0) & 1) != 0)
                        || (SUB161(auVar24 >> 0x17,0) & 1) != 0) ||
                       (SUB161(auVar24 >> 0x1f,0) & 1) != 0) || (SUB161(auVar24 >> 0x27,0) & 1) != 0
                      ) || (SUB161(auVar24 >> 0x2f,0) & 1) != 0) ||
                    (SUB161(auVar24 >> 0x37,0) & 1) != 0) || (SUB161(auVar24 >> 0x3f,0) & 1) != 0)
                  || (SUB161(auVar24 >> 0x47,0) & 1) != 0) || (SUB161(auVar24 >> 0x4f,0) & 1) != 0)
                || (SUB161(auVar24 >> 0x57,0) & 1) != 0) || (SUB161(auVar24 >> 0x5f,0) & 1) != 0) ||
              (SUB161(auVar24 >> 0x67,0) & 1) != 0) || (SUB161(auVar24 >> 0x6f,0) & 1) != 0) ||
            (SUB161(auVar24 >> 0x77,0) & 1) != 0) || auVar24[0xf] < '\0') break;
        bVar1 = param_1[1];
        param_1 = param_1 + 1;
      }
      return param_1;
    }
  }
  pbVar19 = FUN_1800109d0(param_1,param_2);
  return pbVar19;
}


/* Address: 0x180010e28; Evidence: ev_3ed1b6fce3a2ab5d4dd94077bf514072498fb269ce59b4c9fdd0790136b67c82 */

void FUN_180010e28(uchar *param_1,uchar *param_2)

{
  _mbsdec_l(param_1,param_2,(_locale_t)0x0);
  return;
}


/* Address: 0x180010e30; Evidence: ev_c197e2b57208ee23d1b8b151ed1c79e4d9d9fba1c39304267bb6a455e1d5f624 */

/* Library Function - Single Match
    _mbsdec_l
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

uchar * __cdecl _mbsdec_l(uchar *_Start,uchar *_Pos,_locale_t _Locale)

{
  __acrt_ptd *p_Var1;
  byte *pbVar2;
  longlong local_28 [2];
  longlong local_18;
  char local_10;
  
  if ((_Start == (uchar *)0x0) || (_Pos == (uchar *)0x0)) {
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000ad7c();
  }
  else if (_Start < _Pos) {
    FUN_18000a710(local_28,(longlong *)_Locale);
    pbVar2 = _Pos + -1;
    if (*(int *)(local_18 + 8) != 0) {
      do {
        pbVar2 = pbVar2 + -1;
        if (pbVar2 < _Start) break;
      } while ((*(byte *)((ulonglong)*pbVar2 + 0x19 + local_18) & 4) != 0);
      pbVar2 = _Pos + (-1 - (ulonglong)((int)_Pos - (int)pbVar2 & 1));
    }
    if (local_10 == '\0') {
      return pbVar2;
    }
    *(uint *)(local_28[0] + 0x3a8) = *(uint *)(local_28[0] + 0x3a8) & 0xfffffffd;
    return pbVar2;
  }
  return (uchar *)0x0;
}


/* Address: 0x180010ec4; Evidence: ev_d0b43597ee5da03d451ee29f06219f28de619aebbb180f461033551ef389cb2a */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180010ec4(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                       undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong lVar1;
  int iVar2;
  uint uVar3;
  int iVar4;
  ulonglong uVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  ulonglong uVar8;
  LPCWSTR pWVar9;
  undefined1 *puVar10;
  undefined1 *puVar11;
  undefined1 *puVar12;
  undefined1 *puVar13;
  undefined1 auStack_88 [32];
  undefined8 local_68;
  undefined4 local_60;
  undefined4 local_38 [2];
  ulonglong local_30;
  
  puVar10 = auStack_88;
  puVar12 = auStack_88;
  local_30 = DAT_180021000 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_18000e368(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar9 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_1800111cf;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_1800111b5:
    uVar5 = 0;
    if (pWVar9 != (LPCWSTR)0x0) goto LAB_1800111bc;
  }
  else {
    if (uVar5 < 0x401) {
      uVar8 = uVar5 + 0xf;
      if (uVar8 <= uVar5) {
        uVar8 = 0xffffffffffffff0;
      }
      lVar1 = -(uVar8 & 0xfffffffffffffff0);
      puVar12 = auStack_88 + lVar1;
      puVar10 = auStack_88 + lVar1;
      puVar6 = (undefined4 *)((longlong)local_38 + lVar1);
      pWVar9 = (LPCWSTR)0x0;
      if (puVar6 == (undefined4 *)0x0) goto LAB_1800111b5;
      *puVar6 = 0xcccc;
LAB_180010fd0:
      pWVar9 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar9 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180010fd0;
      }
    }
    if (pWVar9 == (LPCWSTR)0x0) goto LAB_1800111b5;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
    *(undefined8 *)(puVar12 + -8) = 0x180010ffa;
    iVar2 = FUN_18000e368(param_8,1);
    if (iVar2 == 0) goto LAB_1800111b5;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x18001102d;
    iVar2 = FUN_18000e928(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    puVar6 = (undefined4 *)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_1800111b5;
    if ((param_3 & 0x400) == 0) {
      uVar8 = uVar5 * 2 + 0x10;
      uVar8 = -(ulonglong)(uVar5 * 2 < uVar8) & uVar8;
      if (uVar8 == 0) goto LAB_180011198;
      if (uVar8 < 0x401) {
        uVar5 = uVar8 + 0xf;
        if (uVar5 <= uVar8) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x1800110d0;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar7 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xcccc;
          puVar12 = puVar11;
LAB_1800110fe:
          puVar6 = puVar7 + 4;
          goto LAB_180011102;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x1800110ee;
        puVar7 = _malloc_base(uVar8);
        puVar6 = (undefined4 *)0x0;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xdddd;
          goto LAB_1800110fe;
        }
LAB_180011102:
        if (puVar6 != (undefined4 *)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(undefined4 **)(puVar12 + 0x20) = puVar6;
          *(undefined8 *)(puVar12 + -8) = 0x180011134;
          iVar4 = FUN_18000e928(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x180011162;
              uVar3 = FUN_18000e3f8(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_180011198;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x18001117c;
              uVar3 = FUN_18000e3f8(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18001119d;
            }
            uVar5 = (ulonglong)uVar3;
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180011193;
              FUN_18000c960(puVar6 + -4);
            }
            goto LAB_1800111bc;
          }
LAB_180011198:
          if (puVar6 != (undefined4 *)0x0) {
LAB_18001119d:
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x1800111ae;
              FUN_18000c960(puVar6 + -4);
            }
          }
        }
      }
      uVar5 = 0;
    }
    else if (param_7 != 0) {
      if (iVar2 <= param_7) {
        *(undefined8 *)(puVar12 + 0x40) = 0;
        *(undefined8 *)(puVar12 + 0x38) = 0;
        *(undefined8 *)(puVar12 + 0x30) = 0;
        *(int *)(puVar12 + 0x28) = param_7;
        *(undefined8 *)(puVar12 + 0x20) = param_6;
        *(undefined8 *)(puVar12 + -8) = 0x180011085;
        uVar3 = FUN_18000e928(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_1800111bc;
      }
      goto LAB_1800111b5;
    }
LAB_1800111bc:
    if (*(int *)(pWVar9 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x1800111cd;
      FUN_18000c960(pWVar9 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_1800111cf:
  *(undefined8 *)(puVar13 + -8) = 0x1800111db;
  return uVar5;
}


/* Address: 0x1800111f8; Evidence: ev_d024e9d3997a5658869c708d51b9acac1b64aa27b28f72420684b61679d31455 */

/* Library Function - Single Match
    __acrt_LCMapStringA
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_LCMapStringA(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                        undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong local_28;
  longlong local_20 [2];
  char local_10;
  
  FUN_18000a710(&local_28,param_1);
  FUN_180010ec4(local_20,param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return;
}


/* Address: 0x180011290; Evidence: ev_2e5cbcff80d2919c6d183be9c27c1d71dc9e3621f4d0c249f31ca6ed29ac6277 */

uint FUN_180011290(void)

{
  undefined8 uVar1;
  
  uVar1 = __acrt_initialize_multibyte();
  return (uint)uVar1 & 0xff ^ 1;
}


/* Address: 0x1800112b0; Evidence: ev_7f4bd3de7bece1b039711939dda3190b18b2f53222d14cc9732c8e35caadfb41 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000ad7c();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800112e2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_1800227e8,0,param_1);
  return uVar2;
}


/* Address: 0x180011300; Evidence: ev_d8a312fadae77beabbf08133e2ff37513557ef773d3908dda200396689e50094 */

/* Library Function - Single Match
    _realloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID _realloc_base(LPVOID param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  undefined7 extraout_var;
  
  if (param_1 == (LPVOID)0x0) {
    pvVar3 = _malloc_base(param_2);
  }
  else {
    if (param_2 == 0) {
      FUN_18000c960(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_1800227e8,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_1800104c0();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_18000adf0(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      p_Var4 = FUN_18000c034();
      *(undefined4 *)p_Var4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x18001137c; Evidence: ev_61c68d9e590e9283d82f1926a1b89da83948571508daa57127b7abd5a9187438 */

undefined4 FUN_18001137c(ushort *param_1)

{
  int iVar1;
  int iVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  
  if (param_1 != (ushort *)0x0) {
    iVar4 = 0;
    iVar5 = 0xe3;
    do {
      iVar2 = (iVar5 + iVar4) / 2;
      iVar3 = FUN_180012660(param_1,(ushort *)(&PTR_DAT_180019820)[(longlong)iVar2 * 2],0x55);
      if (iVar3 == 0) {
        iVar5 = *(int *)(&DAT_180019828 + (longlong)iVar2 * 0x10);
        if (iVar5 < 0) {
          return 0;
        }
        if (0xe3 < (ulonglong)(longlong)iVar5) {
          return 0;
        }
        return *(undefined4 *)(&DAT_180017dc0 + (longlong)iVar5 * 0x10);
      }
      iVar1 = iVar2 + -1;
      if (-1 < iVar3) {
        iVar4 = iVar2 + 1;
        iVar1 = iVar5;
      }
      iVar5 = iVar1;
    } while (iVar4 <= iVar5);
  }
  return 0;
}


/* Address: 0x180011424; Evidence: ev_32e41407df93772cee571b72ff5473d55d6adea28a0febd8e86e95f981001477 */

/* Library Function - Single Match
    __acrt_lowio_create_handle_array
   
   Library: Visual Studio 2019 Release */

undefined8 * __acrt_lowio_create_handle_array(void)

{
  uint uVar1;
  undefined8 *puVar2;
  undefined1 *puVar4;
  undefined8 *puVar5;
  undefined8 *puVar6;
  undefined8 *puVar3;
  
  puVar2 = _calloc_base(0x40,0x48);
  puVar5 = (undefined8 *)0x0;
  if ((puVar2 != (undefined8 *)0x0) && (puVar5 = puVar2, puVar2 != puVar2 + 0x240)) {
    puVar6 = puVar2 + 6;
    do {
      InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + -6),4000,0);
      puVar6[-1] = 0xffffffffffffffff;
      puVar4 = (undefined1 *)((longlong)puVar6 + 0xe);
      *(byte *)((longlong)puVar6 + 0xd) = *(byte *)((longlong)puVar6 + 0xd) & 0xf8;
      *puVar6 = 0;
      *(undefined4 *)(puVar6 + 1) = 0xa0a0000;
      *(undefined1 *)((longlong)puVar6 + 0xc) = 10;
      puVar3 = (undefined8 *)0x0;
      do {
        *puVar4 = 0;
        uVar1 = (int)puVar3 + 1;
        puVar3 = (undefined8 *)(ulonglong)uVar1;
        puVar4 = puVar4 + 1;
      } while (uVar1 < 5);
      puVar3 = puVar6 + 3;
      puVar6 = puVar6 + 9;
    } while (puVar3 != puVar2 + 0x240);
  }
  FUN_18000c960((LPVOID)0x0);
  return puVar5;
}


/* Address: 0x1800114cc; Evidence: ev_10e1c605316f595eebd40139cdfcd3c0e9d9605bf413fe31fd4d3a700016de15 */

/* Library Function - Single Match
    __acrt_lowio_destroy_handle_array
   
   Library: Visual Studio 2019 Release */

void __acrt_lowio_destroy_handle_array(LPCRITICAL_SECTION param_1)

{
  LPCRITICAL_SECTION lpCriticalSection;
  
  if (param_1 != (LPCRITICAL_SECTION)0x0) {
    for (lpCriticalSection = param_1;
        lpCriticalSection != (LPCRITICAL_SECTION)&param_1[0x73].LockCount;
        lpCriticalSection = (LPCRITICAL_SECTION)&lpCriticalSection[1].SpinCount) {
      DeleteCriticalSection(lpCriticalSection);
    }
    FUN_18000c960(param_1);
  }
  return;
}


/* Address: 0x18001151c; Evidence: ev_f0c873f9806158a92bbc0aa905d95ba680f0422614141282b6ce3bb60ae2e206 */

/* Library Function - Single Match
    __acrt_lowio_ensure_fh_exists
   
   Library: Visual Studio 2019 Release */

longlong __acrt_lowio_ensure_fh_exists(uint param_1)

{
  int iVar1;
  __acrt_ptd *p_Var2;
  longlong lVar3;
  undefined8 *puVar4;
  longlong lVar5;
  
  if (param_1 < 0x2000) {
    lVar3 = 0;
    __acrt_lock(7);
    lVar5 = lVar3;
    iVar1 = DAT_180022bf0;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_1800227f0)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_1800227f0)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180022bf0 + 0x40;
        DAT_180022bf0 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_18000c034();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000ad7c();
    lVar3 = 9;
  }
  return lVar3;
}


/* Address: 0x1800115c4; Evidence: ev_ae9f52c20f588b3718ff4a7ad8073efcc65db12074eab750fef7ae5288289b73 */

void FUN_1800115c4(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800115e4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x1800115ec; Evidence: ev_2e9c264bde58ad28521fe37d332d8a5b27016d4e5fc7e945ad9891ae071ba866 */

void FUN_1800115ec(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001160c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x180011614; Evidence: ev_f93997ab298e6656c6bfdb5156f40ef2060a47d238d5cc0925f9863654c81615 */

undefined8 FUN_180011614(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_180022bf0)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_1800126f8();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_180011694;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_180011694:
      *(undefined8 *)
       ((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  p_Var3 = FUN_18000c034();
  *(undefined4 *)p_Var3 = 9;
  p_Var3 = FUN_18000c010();
  *(undefined4 *)p_Var3 = 0;
  return 0xffffffff;
}


/* Address: 0x1800116d0; Evidence: ev_98ccd49783d43b6e27c304291770ff6f87319e17fcb3113729782b899842d8c6 */

undefined8 FUN_1800116d0(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000c010();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180022bf0)) {
      if ((*(byte *)((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000c010();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000ad7c();
  }
  return 0xffffffffffffffff;
}


/* Address: 0x180011748; Evidence: ev_3d763d6352ff75a08bf348aaa9f9d27cbfa57cc69808a1f240e22c043299866d */

undefined8 FUN_180011748(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_1800115c4(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_1800227f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_1800116d0(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_1800117bf;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000c010();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_18000c034();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_1800117bf:
  FUN_1800115ec(*param_4);
  return uVar5;
}


/* Address: 0x1800117d4; Evidence: ev_c2d0dbcb511340f3cfa79d2446d1c75b60c1420a065e0fc8ab012def5702ae12 */

/* Library Function - Single Match
    _commit
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl _commit(int _FileHandle)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  int local_res8 [2];
  undefined1 local_res10 [8];
  uint local_res18 [2];
  uint local_res20 [2];
  int *local_18 [3];
  
  local_res8[0] = _FileHandle;
  if (_FileHandle == -2) {
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_180022bf0)) &&
       ((*(byte *)((&DAT_1800227f0)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_180011748(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000ad7c();
  }
  return -1;
}


/* Address: 0x180011868; Evidence: ev_c9557b975a03e9cb05adfb2f0a8d5041926401426a47c2f56c63e19a50245b93 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011868(DWORD *param_1,uint param_2,undefined1 (*param_3) [32],ulonglong param_4,
                     longlong *param_5)

{
  char cVar1;
  byte bVar2;
  HANDLE hFile;
  int iVar3;
  BOOL BVar4;
  DWORD DVar5;
  ulonglong uVar6;
  byte *pbVar7;
  char *pcVar8;
  ulonglong uVar9;
  uint uVar10;
  uint uVar11;
  undefined1 *puVar12;
  undefined1 (*pauVar13) [32];
  ulonglong uVar14;
  longlong lVar15;
  ulonglong uVar16;
  longlong lVar17;
  ulonglong uVar18;
  undefined1 auStackY_108 [32];
  undefined2 local_c8 [2];
  ushort local_c4 [2];
  DWORD local_c0 [2];
  undefined1 (*local_b8) [32];
  longlong *local_b0;
  uint local_a8 [2];
  UINT local_a0;
  int local_9c;
  undefined1 (*local_98) [32];
  longlong local_90;
  uint local_88 [2];
  undefined1 *local_80;
  undefined1 (*local_78) [32];
  HANDLE local_70;
  longlong local_68;
  undefined8 local_60;
  undefined1 local_58 [8];
  undefined1 local_50;
  undefined1 local_4f;
  undefined1 local_48 [8];
  ulonglong local_40;
  
  local_60 = 0xfffffffffffffffe;
  local_40 = DAT_180021000 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar17 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_1800227f0)[lVar17] + 0x28 + uVar6 * 0x48);
  local_b8 = (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff));
  local_98 = param_3;
  local_90 = lVar17;
  local_a0 = GetConsoleOutputCP();
  uVar14 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_18000be40(local_b0);
  }
  local_9c = *(int *)(local_b0[3] + 0xc);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  uVar16 = uVar14;
  local_68 = lVar17;
  if (local_98 < (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff))) {
    do {
      local_c8[0] = CONCAT11(local_c8[0]._1_1_,(*param_3)[0]);
      local_c4[0] = 0;
      local_c4[1] = 0;
      uVar10 = 1;
      if (local_9c == 0xfde9) {
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_1800227f0)[local_68]);
        uVar16 = uVar14;
        uVar18 = uVar14;
        do {
          uVar10 = (uint)uVar16;
          if (*pcVar8 == '\0') break;
          uVar10 = uVar10 + 1;
          uVar16 = (ulonglong)uVar10;
          uVar18 = uVar18 + 1;
          pcVar8 = pcVar8 + 1;
        } while ((longlong)uVar18 < 5);
        if ((longlong)uVar18 < 1) {
          cVar1 = (&DAT_180021900)[(byte)(*param_3)[0]];
          iVar3 = cVar1 + 1;
          lVar17 = (longlong)local_b8 - (longlong)param_3;
          if (lVar17 < iVar3) {
            uVar16 = uVar14;
            if (0 < lVar17) {
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_1800227f0)[local_90]) =
                     (*param_3)[uVar16];
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar17);
            }
            param_1[1] = param_1[1] + (int)lVar17;
            return param_1;
          }
          local_a8[0] = 0;
          local_a8[1] = 0;
          uVar10 = (iVar3 == 4) + 1;
          local_78 = param_3;
          pbVar7 = FUN_18000fa8c(local_c4,&local_78,(ulonglong)uVar10,local_a8,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + cVar1);
          lVar17 = local_90;
        }
        else {
          cVar1 = (&DAT_180021900)[*(byte *)((&DAT_1800227f0)[lVar17] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar15 = (longlong)local_b8 - (longlong)param_3;
          uVar16 = (ulonglong)iVar3;
          if (lVar15 < (longlong)uVar16) {
            if (0 < lVar15) {
              uVar16 = uVar18;
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_1800227f0)[lVar17]) =
                     *(undefined1 *)((longlong)param_3 + (uVar16 - uVar18));
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar15);
            }
            param_1[1] = param_1[1] + (int)lVar15;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_1800227f0)[local_68]);
          uVar9 = uVar14;
          do {
            local_58[uVar9] = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          uVar9 = uVar14;
          if (0 < (longlong)uVar16) {
            FUN_180013df0((undefined1 (*) [32])(local_58 + uVar18),param_3,uVar16);
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_1800227f0)[lVar17]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_18000fa8c(local_c4,&local_80,(ulonglong)uVar10,local_88,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + (int)(local_a8[0] - 1));
        }
      }
      else {
        lVar15 = (&DAT_1800227f0)[lVar17];
        bVar2 = *(byte *)(lVar15 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)(byte)(*param_3)[0] * 2) < 0) {
            pauVar13 = (undefined1 (*) [32])(*param_3 + 1);
            if (local_b8 <= pauVar13) {
              *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48) = (*param_3)[0];
              pbVar7 = (byte *)((&DAT_1800227f0)[lVar17] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar16 + 1;
              return param_1;
            }
            iVar3 = FUN_18000f6d4(local_c4,(byte *)param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_180011b70;
          }
          uVar16 = 1;
          pauVar13 = param_3;
        }
        else {
          local_50 = *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48);
          local_4f = (*param_3)[0];
          *(byte *)(lVar15 + 0x3d + uVar6 * 0x48) = bVar2 & 0xfb;
          uVar16 = 2;
          pauVar13 = (undefined1 (*) [32])&local_50;
        }
        iVar3 = FUN_18000f6d4(local_c4,(byte *)pauVar13,uVar16,local_b0);
        pauVar13 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_180011b70:
      param_3 = (undefined1 (*) [32])(*pauVar13 + 1);
      uVar10 = FUN_18000e3f8(local_a0,0,local_c4,uVar10);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_180011cc9:
        DVar5 = GetLastError();
        *param_1 = DVar5;
        return param_1;
      }
      uVar11 = (param_1[2] - (int)local_98) + (int)param_3;
      param_1[1] = uVar11;
      if (local_c0[0] < uVar10) {
        return param_1;
      }
      if ((char)local_c8[0] == '\n') {
        local_c8[0] = 0xd;
        BVar4 = WriteFile(hFile,local_c8,1,local_c0,(LPOVERLAPPED)0x0);
        if (BVar4 == 0) goto LAB_180011cc9;
        if (local_c0[0] == 0) {
          return param_1;
        }
        param_1[2] = param_1[2] + 1;
        param_1[1] = param_1[1] + 1;
        uVar11 = param_1[1];
      }
      uVar16 = (ulonglong)uVar11;
    } while (param_3 < local_b8);
  }
  return param_1;
}


/* Address: 0x180011cfc; Evidence: ev_814f69bfd4e8646c8a3e5165fe1fb81ab1a14064aa0636034f313f65102f795b */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011cfc(DWORD *param_1,uint param_2,char *param_3,ulonglong param_4)

{
  char cVar1;
  HANDLE hFile;
  BOOL BVar2;
  DWORD DVar3;
  uint nNumberOfBytesToWrite;
  char *pcVar4;
  char *pcVar5;
  undefined1 auStackY_1468 [32];
  DWORD local_1438 [4];
  char local_1428 [5120];
  ulonglong local_28;
  undefined8 local_20;
  
  local_20 = 0x180011d14;
  local_28 = DAT_180021000 ^ (ulonglong)auStackY_1468;
  pcVar5 = param_3 + (param_4 & 0xffffffff);
  hFile = *(HANDLE *)
           ((&DAT_1800227f0)[(longlong)(int)param_2 >> 6] + 0x28 +
           (ulonglong)(param_2 & 0x3f) * 0x48);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  do {
    if (pcVar5 <= param_3) {
      return param_1;
    }
    pcVar4 = local_1428;
    do {
      if (pcVar5 <= param_3) break;
      cVar1 = *param_3;
      param_3 = param_3 + 1;
      if (cVar1 == '\n') {
        param_1[2] = param_1[2] + 1;
        *pcVar4 = '\r';
        pcVar4 = pcVar4 + 1;
      }
      *pcVar4 = cVar1;
      pcVar4 = pcVar4 + 1;
    } while (pcVar4 < local_1428 + 0x13ff);
    local_1438[0] = 0;
    nNumberOfBytesToWrite = (int)pcVar4 - (int)local_1428;
    BVar2 = WriteFile(hFile,local_1428,nNumberOfBytesToWrite,local_1438,(LPOVERLAPPED)0x0);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      *param_1 = DVar3;
      return param_1;
    }
    param_1[1] = param_1[1] + local_1438[0];
    if (local_1438[0] < nNumberOfBytesToWrite) {
      return param_1;
    }
  } while( true );
}


/* Address: 0x180011e04; Evidence: ev_73629bb4ff3ac304eebaa45cf5c9b0d812d5ab2da129d2513078d4e63b185e1d */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011e04(DWORD *param_1,uint param_2,short *param_3,ulonglong param_4)

{
  short sVar1;
  HANDLE hFile;
  uint nNumberOfBytesToWrite;
  BOOL BVar2;
  DWORD DVar3;
  short *psVar4;
  short *psVar5;
  undefined1 auStackY_1468 [32];
  DWORD local_1438 [4];
  short local_1428 [2560];
  ulonglong local_28;
  undefined8 local_20;
  
  local_20 = 0x180011e1c;
  local_28 = DAT_180021000 ^ (ulonglong)auStackY_1468;
  psVar5 = (short *)((param_4 & 0xffffffff) + (longlong)param_3);
  hFile = *(HANDLE *)
           ((&DAT_1800227f0)[(longlong)(int)param_2 >> 6] + 0x28 +
           (ulonglong)(param_2 & 0x3f) * 0x48);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  do {
    if (psVar5 <= param_3) {
      return param_1;
    }
    psVar4 = local_1428;
    do {
      if (psVar5 <= param_3) break;
      sVar1 = *param_3;
      param_3 = param_3 + 1;
      if (sVar1 == 10) {
        param_1[2] = param_1[2] + 2;
        *psVar4 = 0xd;
        psVar4 = psVar4 + 1;
      }
      *psVar4 = sVar1;
      psVar4 = psVar4 + 1;
    } while (psVar4 < local_1428 + 0x9ff);
    local_1438[0] = 0;
    nNumberOfBytesToWrite = (int)((longlong)psVar4 - (longlong)local_1428 >> 1) * 2;
    BVar2 = WriteFile(hFile,local_1428,nNumberOfBytesToWrite,local_1438,(LPOVERLAPPED)0x0);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      *param_1 = DVar3;
      return param_1;
    }
    param_1[1] = param_1[1] + local_1438[0];
    if (local_1438[0] < nNumberOfBytesToWrite) {
      return param_1;
    }
  } while( true );
}


/* Address: 0x180011f20; Evidence: ev_a173e7878f7b3c3dba7a7fff1ff52300b2de27a0c4068dbe0de4b7e06b1c710c */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011f20(DWORD *param_1,uint param_2,short *param_3,uint param_4)

{
  short sVar1;
  HANDLE hFile;
  uint uVar2;
  BOOL BVar3;
  DWORD DVar4;
  uint uVar5;
  ulonglong uVar6;
  short *psVar7;
  short *psVar8;
  undefined1 auStackY_1498 [32];
  DWORD local_1458 [4];
  short local_1448 [856];
  undefined1 local_d98 [3424];
  ulonglong local_38;
  undefined8 local_30;
  
  local_30 = 0x180011f3c;
  local_38 = DAT_180021000 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_1800227f0)[(longlong)(int)param_2 >> 6] + 0x28 +
           (ulonglong)(param_2 & 0x3f) * 0x48);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  psVar7 = param_3;
  do {
    if ((short *)((ulonglong)param_4 + (longlong)param_3) <= psVar7) {
      return param_1;
    }
    psVar8 = local_1448;
    do {
      if ((short *)((ulonglong)param_4 + (longlong)param_3) <= psVar7) break;
      sVar1 = *psVar7;
      psVar7 = psVar7 + 1;
      if (sVar1 == 10) {
        *psVar8 = 0xd;
        psVar8 = psVar8 + 1;
      }
      *psVar8 = sVar1;
      psVar8 = psVar8 + 1;
    } while (psVar8 < local_1448 + 0x354);
    uVar2 = FUN_18000e3f8(0xfde9,0,local_1448,(int)((longlong)psVar8 - (longlong)local_1448 >> 1));
    if (uVar2 == 0) {
LAB_18001205d:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_18001205d;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)psVar7 - (int)param_3;
  } while( true );
}


/* Address: 0x180012094; Evidence: ev_947c8041c85c19ad31f89652ff8baa0ec32e2705c971ff1b8b8f2c21d8578e42 */

int FUN_180012094(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

{
  bool bVar1;
  int iVar2;
  
  if (param_1 == 0xfffffffe) {
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
  }
  else {
    if (((int)param_1 < 0) || (DAT_180022bf0 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_1800115c4(param_1);
        iVar2 = -1;
        if ((*(byte *)((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          iVar2 = FUN_1800121b4(param_1,param_2,param_3,param_4);
        }
        FUN_1800115ec(param_1);
        return iVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_18000acc4((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x1800121b4; Evidence: ev_e3a28c6cf62c43e8c40f1c9b34ec9cc4f5ecce367929e22de4bd2cb4c820f1ae */

int FUN_1800121b4(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

{
  char cVar1;
  int iVar2;
  undefined8 uVar3;
  byte bVar4;
  short sVar5;
  short sVar6;
  BOOL BVar7;
  DWORD DVar8;
  int iVar9;
  ulonglong uVar10;
  undefined7 extraout_var;
  DWORD *pDVar11;
  DWORD DVar12;
  longlong lVar13;
  ulonglong uVar14;
  undefined1 (*pauVar15) [32];
  undefined8 local_70;
  DWORD local_68;
  undefined8 local_60;
  DWORD local_50 [4];
  
  DVar12 = 0;
  uVar14 = (ulonglong)param_3;
  if (param_3 == 0) {
    return 0;
  }
  if (param_2 == (undefined1 (*) [32])0x0) {
LAB_1800121e4:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_18000acc4((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar10 = (ulonglong)(param_1 & 0x3f);
  lVar13 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_1800227f0)[lVar13] + 0x39 + uVar10 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_1800121e4;
  if ((*(byte *)((&DAT_1800227f0)[lVar13] + 0x38 + uVar10 * 0x48) & 0x20) != 0) {
    thunk_FUN_180012700(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar4 = FUN_1800125dc(param_1);
  if (((int)CONCAT71(extraout_var,bVar4) == 0) ||
     (-1 < *(char *)((&DAT_1800227f0)[lVar13] + 0x38 + uVar10 * 0x48))) {
LAB_18001239c:
    if (-1 < *(char *)((&DAT_1800227f0)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar7 = WriteFile(*(HANDLE *)
                         ((&DAT_1800227f0)[lVar13] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar12 = local_68;
      uVar3 = local_70;
      if (BVar7 == 0) {
        DVar12 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar12);
        DVar12 = local_68;
        uVar3 = local_70;
      }
      goto LAB_180012451;
    }
    if (cVar1 == '\0') {
      pDVar11 = FUN_180011cfc((DWORD *)&local_70,param_1,(char *)param_2,uVar14);
    }
    else if (cVar1 == '\x01') {
      pDVar11 = FUN_180011f20((DWORD *)&local_70,param_1,(short *)param_2,param_3);
    }
    else {
      DVar12 = 0;
      uVar3 = local_60;
      if (cVar1 != '\x02') goto LAB_180012451;
      pDVar11 = FUN_180011e04((DWORD *)&local_70,param_1,(short *)param_2,uVar14);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_18000be40(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_1800227f0)[lVar13] + 0x39 + uVar10 * 0x48) == '\0')) goto LAB_18001239c;
    local_50[0] = 0;
    BVar7 = GetConsoleMode(*(HANDLE *)((&DAT_1800227f0)[lVar13] + 0x28 + uVar10 * 0x48),local_50);
    if (BVar7 == 0) goto LAB_18001239c;
    if (cVar1 != '\0') {
      if ((cVar1 == '\x01') || (uVar3 = local_60, cVar1 == '\x02')) {
        local_70 = 0;
        uVar3 = local_70;
        if (param_2 < (undefined1 (*) [32])(*param_2 + uVar14)) {
          local_70._4_4_ = 0;
          pauVar15 = param_2;
          iVar9 = local_70._4_4_;
          do {
            sVar6 = *(short *)*pauVar15;
            sVar5 = FUN_1800127b8(sVar6);
            if (sVar5 != sVar6) {
LAB_180012364:
              DVar8 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar8);
              uVar3 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar9 + 2,(DWORD)local_70);
            iVar2 = iVar9 + 2;
            if (sVar6 == 10) {
              sVar6 = FUN_1800127b8(0xd);
              if (sVar6 != 0xd) goto LAB_180012364;
              local_70 = CONCAT44(iVar9 + 3,(DWORD)local_70);
              DVar12 = DVar12 + 1;
              iVar2 = iVar9 + 3;
            }
            iVar9 = iVar2;
            pauVar15 = (undefined1 (*) [32])(*pauVar15 + 2);
            uVar3 = local_70;
          } while (pauVar15 < (undefined1 (*) [32])(*param_2 + uVar14));
        }
      }
      goto LAB_180012451;
    }
    pDVar11 = FUN_180011868((DWORD *)&local_70,param_1,param_2,uVar14,param_4);
  }
  DVar12 = pDVar11[2];
  uVar3 = *(undefined8 *)pDVar11;
LAB_180012451:
  local_60 = uVar3;
  iVar9 = (int)((ulonglong)local_60 >> 0x20);
  if (iVar9 != 0) {
    return iVar9 - DVar12;
  }
  if ((uint)local_60 != 0) {
    if ((uint)local_60 == 5) {
      *(undefined1 *)(param_4 + 6) = 1;
      *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
      *(undefined1 *)(param_4 + 7) = 1;
      *(undefined4 *)((longlong)param_4 + 0x34) = 5;
      return -1;
    }
    FUN_18000bfec((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_1800227f0)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((*param_2)[0] == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}


/* Address: 0x1800124e4; Evidence: ev_a61fe774aa4c4c4414a5160bdbcd9e5408b7c77400282d2ab0b2fec0ed62ce87 */

int FUN_1800124e4(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_180022c20; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_180022c28 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18001291c(*(int **)(DAT_180022c28 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_180022c28 + lVar4 * 8) + 0x30));
      FUN_18000c960(*(LPVOID *)(DAT_180022c28 + lVar4 * 8));
      *(undefined8 *)(DAT_180022c28 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}


/* Address: 0x180012598; Evidence: ev_22fee3684cdfa48a9f101101ce17695cbf7e2552dec3b5c727eae0e67d5d93fd */

/* Library Function - Single Match
    __acrt_stdio_free_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_free_buffer_nolock(undefined8 *param_1)

{
  if (((*(uint *)((longlong)param_1 + 0x14) >> 0xd & 1) != 0) &&
     ((*(uint *)((longlong)param_1 + 0x14) >> 6 & 1) != 0)) {
    FUN_18000c960((LPVOID)param_1[1]);
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) & 0xfffffebf;
    UNLOCK();
    param_1[1] = 0;
    *param_1 = 0;
    *(undefined4 *)(param_1 + 2) = 0;
  }
  return;
}


/* Address: 0x1800125dc; Evidence: ev_52a359e6c3b83c6922f5159b894169e6676b94c3c3bfb7128f97846493eac7de */

byte FUN_1800125dc(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180022bf0)) {
      return *(byte *)((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000ad7c();
  }
  return 0;
}


/* Address: 0x18001263c; Evidence: ev_884905b2e24c48c417840233f8b9fc6b38296419ebde03d1b33d00534146a804 */

undefined8 FUN_18001263c(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  return param_1;
}


/* Address: 0x180012644; Evidence: ev_e056eba8a5834fa96636adfc660e8eb574100994e8418b7775870a2ba404f56f */

undefined8 FUN_180012644(undefined8 *param_1,longlong param_2)

{
  *param_1 = 0;
  *(undefined1 *)(param_2 + 0x30) = 1;
  *(undefined4 *)(param_2 + 0x2c) = 0x2a;
  return 0xffffffffffffffff;
}


/* Address: 0x180012660; Evidence: ev_b3db009b87e12227d0c11087bea4f5ad18fb254ed2ba37c7d213a5f90c8d0081 */

int FUN_180012660(ushort *param_1,ushort *param_2,longlong param_3)

{
  ushort uVar1;
  ushort uVar2;
  uint uVar3;
  uint uVar4;
  
  if (param_3 != 0) {
    do {
      uVar1 = *param_1;
      uVar3 = (uint)uVar1;
      param_1 = param_1 + 1;
      uVar2 = *param_2;
      param_2 = param_2 + 1;
      uVar4 = (uint)uVar2;
      if ((uint)uVar1 != (uint)uVar2) {
        uVar3 = uVar1 + 0x20;
        if (0x19 < uVar1 - 0x41) {
          uVar3 = (uint)uVar1;
        }
        uVar4 = uVar2 + 0x20;
        if (0x19 < uVar2 - 0x41) {
          uVar4 = (uint)uVar2;
        }
      }
    } while (((uVar3 - uVar4 == 0) && (uVar3 != 0)) && (param_3 = param_3 + -1, param_3 != 0));
    return uVar3 - uVar4;
  }
  return 0;
}


/* Address: 0x1800126c8; Evidence: ev_5dc447010500181a79608238a253000e494c21d8dc8eebb836dd22768e86156c */

void FUN_1800126c8(void)

{
  _guard_check_icall();
  return;
}


/* Address: 0x1800126e0; Evidence: ev_02219be8631c36a55825442d71e079526ce56403f3cba1924e0e32278e298b23 */

/* Library Function - Single Match
    __strncnt
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

size_t __cdecl __strncnt(char *_String,size_t _Cnt)

{
  char cVar1;
  size_t sVar2;
  
  sVar2 = 0;
  cVar1 = *_String;
  while ((cVar1 != '\0' && (sVar2 != _Cnt))) {
    sVar2 = sVar2 + 1;
    cVar1 = _String[sVar2];
  }
  return sVar2;
}


/* Address: 0x1800126f8; Evidence: ev_6e700cdb3eb320301dbf86670280f72fc97fc0aa39d898fd12278dfde120d928 */

undefined4 FUN_1800126f8(void)

{
  return DAT_180022c5c;
}


/* Address: 0x180012700; Evidence: ev_638c92c813d67755a26f3042e418adc3172b788249c8962f716df417932fb81d */

longlong FUN_180012700(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER local_18 [2];
  
  hFile = (HANDLE)FUN_1800116d0(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    local_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,local_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000bfec(DVar3,param_4);
    }
    else if (local_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)local_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x1800127b0; Evidence: ev_fc073c01c9d46699cc3f179c87888ad7666254519e389512cae318c56d2a260f */

longlong thunk_FUN_180012700(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER aLStack_18 [2];
  
  hFile = (HANDLE)FUN_1800116d0(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    aLStack_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,aLStack_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000bfec(DVar3,param_4);
    }
    else if (aLStack_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)aLStack_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x1800127b8; Evidence: ev_5d75b2d248e66bd9d53c1ad47578eaf9acc45b086b5734ff500af413fe0bd1bd */

undefined2 FUN_1800127b8(undefined2 param_1)

{
  bool bVar1;
  BOOL BVar2;
  undefined7 extraout_var;
  undefined2 local_res8 [4];
  DWORD local_res10 [6];
  
  local_res8[0] = param_1;
  bVar1 = __dcrt_lowio_ensure_console_output_initialized();
  if ((int)CONCAT71(extraout_var,bVar1) != 0) {
    local_res10[0] = 0;
    BVar2 = __dcrt_write_console(local_res8,1,local_res10);
    if (BVar2 != 0) {
      return local_res8[0];
    }
  }
  return 0xffff;
}


/* Address: 0x1800127f8; Evidence: ev_3eeb480184a8365b3b9b8b16027a80648da45daa7f38c5ca256c006a4f6edafa */

ulonglong FUN_1800127f8(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000acc4((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_18000f6bc((longlong)param_1);
      uVar1 = FUN_180012874(param_1,param_2);
      FUN_18000f6c8((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_180012d08((undefined8 *)param_1);
  }
  return 0xffffffff;
}


/* Address: 0x180012874; Evidence: ev_4738a6dc700cd74eb66289afc7ca9637c98b81074660727ba715b32e34284de8 */

ulonglong FUN_180012874(int *param_1,longlong *param_2)

{
  uint uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000acc4((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
    uVar2 = 0xffffffff;
  }
  else {
    uVar2 = 0xffffffff;
    if (((uint)param_1[5] >> 0xd & 1) != 0) {
      uVar2 = FUN_18000f3d8(param_1,param_2);
      uVar2 = uVar2 & 0xffffffff;
      __acrt_stdio_free_buffer_nolock((undefined8 *)param_1);
      uVar1 = FUN_18000fc44((longlong)param_1);
      uVar3 = FUN_180012b74(uVar1,param_2);
      if ((int)uVar3 < 0) {
        uVar2 = 0xffffffff;
      }
      else if (*(LPVOID *)(param_1 + 10) != (LPVOID)0x0) {
        FUN_18000c960(*(LPVOID *)(param_1 + 10));
        param_1[10] = 0;
        param_1[0xb] = 0;
      }
    }
    FUN_180012d08((undefined8 *)param_1);
  }
  return uVar2;
}


/* Address: 0x18001291c; Evidence: ev_eb59ca67e75090ed922f86e271fbd4bad639c31703e632ef5d3450ca312f8acc */

ulonglong FUN_18001291c(int *param_1)

{
  ulonglong uVar1;
  longlong lVar2;
  longlong local_48 [2];
  undefined1 local_38;
  undefined *local_30;
  undefined *puStack_28;
  char local_20;
  undefined4 local_1c;
  char local_18;
  undefined4 local_14;
  char local_10;
  
  local_48[0] = 0;
  local_20 = DAT_18002246c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800211f8;
    puStack_28 = PTR_DAT_180021200;
  }
  uVar1 = FUN_1800127f8(param_1,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_18000a990(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_18000a990(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return uVar1 & 0xffffffff;
}


/* Address: 0x1800129c0; Evidence: ev_29bfcc50d951aba0c223fdb4d61eb95147773695507f3f21c9b525d1d50ad393 */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180021a00 == (HANDLE)0xfffffffffffffffe) {
    DAT_180021a00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180021a00 != (HANDLE)0xffffffffffffffff;
}


/* Address: 0x180012a20; Evidence: ev_dad0af34255c590d03f9bb9b5e9e9a4868791878fc7b5b82399d7b9b04af379f */

void FUN_180012a20(void)

{
  if (DAT_180021a00 < (HANDLE)0xfffffffffffffffe) {
    CloseHandle(DAT_180021a00);
  }
  return;
}


/* Address: 0x180012a3c; Evidence: ev_6603ff991e363824494ba2ac624d38d59ad7b5471afac1254e4ac63b333ddb19 */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180021a00,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180021a00 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180021a00);
      }
      DAT_180021a00 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180021a00,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}


/* Address: 0x180012afc; Evidence: ev_1ba07342150ba097eaed34b55c2ccc1b626a2ff00a6d3a049c528ce22cc21de2 */

ulonglong FUN_180012afc(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_1800115c4(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_1800227f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_180012c38(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_1800115ec(*param_4);
  return uVar3;
}


/* Address: 0x180012b74; Evidence: ev_2cb2b611ecdaeba47a5925a01908d78a579b900f0e07c4cf8cffb5b1f0dd5532 */

ulonglong FUN_180012b74(uint param_1,longlong *param_2)

{
  ulonglong uVar1;
  uint local_res8 [4];
  undefined1 local_res18 [8];
  uint local_res20 [2];
  uint local_28 [2];
  uint *local_20;
  longlong *local_18;
  
  if (param_1 == 0xfffffffe) {
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
  }
  else {
    local_res8[0] = param_1;
    if (((-1 < (int)param_1) && (param_1 < DAT_180022bf0)) &&
       ((*(byte *)((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                  (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0)) {
      local_20 = local_res8;
      local_res20[0] = param_1;
      local_28[0] = param_1;
      local_18 = param_2;
      uVar1 = FUN_180012afc(local_res18,local_28,&local_20,local_res20);
      return uVar1;
    }
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
    FUN_18000acc4((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  return 0xffffffff;
}


/* Address: 0x180012c38; Evidence: ev_0412bc5cf1c41db63d8b370c0e871fa69c9168fa439989a21fed34070ed7df66 */

undefined8 FUN_180012c38(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_1800116d0(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_1800227f0 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_1800227f0 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_1800116d0(2);
      lVar4 = FUN_1800116d0(1);
      if (lVar4 == lVar3) goto LAB_180012c5a;
    }
    hObject = (HANDLE)FUN_1800116d0(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_180012cb8;
    }
  }
LAB_180012c5a:
  DVar2 = 0;
LAB_180012cb8:
  FUN_180011614(param_1);
  *(undefined1 *)
   ((&DAT_1800227f0)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000bfec(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}


/* Address: 0x180012d08; Evidence: ev_fb42212cea042913330199f7e5abcef3ba475b7458da47ace3d0f0f4b4824db2 */

undefined4 FUN_180012d08(undefined8 *param_1)

{
  undefined4 uVar1;
  
  *(undefined4 *)(param_1 + 3) = 0xffffffff;
  *param_1 = 0;
  param_1[1] = 0;
  *(undefined4 *)(param_1 + 2) = 0;
  *(undefined8 *)((longlong)param_1 + 0x1c) = 0;
  param_1[5] = 0;
  LOCK();
  uVar1 = *(undefined4 *)((longlong)param_1 + 0x14);
  *(undefined4 *)((longlong)param_1 + 0x14) = 0;
  UNLOCK();
  return uVar1;
}


/* Address: 0x180012d30; Evidence: ev_2631aa42a424d1907504e67c9ea8f3c7ca67b15c0227552e7e130117eae351a1 */

/* WARNING: Removing unreachable block (ram,0x000180012db0) */
/* WARNING: Removing unreachable block (ram,0x000180012da2) */
/* WARNING: Removing unreachable block (ram,0x000180012d47) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180012d30(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_180022c60 = 0;
  DAT_180022c64 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_180022c60 = 1;
      DAT_180022c64 = 1;
    }
    else {
      _DAT_180022c60 = 0;
    }
  }
  if ((_DAT_180022c60 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180022c64 = 3;
      _DAT_180022c60 = 3;
      return 0;
    }
  }
  return 0;
}


/* Address: 0x180012de4; Evidence: ev_70d9a0a76ccc0dd3f27591278a9182a7d6806759563fb94c058a04732d0ee4e0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180012e6b) */
/* WARNING: Removing unreachable block (ram,0x000180012e48) */

void FUN_180012de4(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_180012f8c();
  if (bVar1) {
    (*DAT_180022c70)(&DAT_180022c80);
  }
  else {
    do {
    } while (DAT_180022c80 != 0);
    LOCK();
    DAT_180022c80 = 1;
    UNLOCK();
  }
  FUN_180013160(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_180013160(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_180012f8c();
  if (bVar1) {
    (*DAT_180022c78)(&DAT_180022c80);
  }
  else {
    DAT_180022c80 = 0;
  }
  return;
}


/* Address: 0x180012ed0; Evidence: ev_5756ec9c754aa7eecfd34f007369dd0ca5c55ec3b26672163762bff1addd6030 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180012ef3) */
/* WARNING: Removing unreachable block (ram,0x000180012f19) */
/* WARNING: Removing unreachable block (ram,0x000180012f25) */
/* WARNING: Removing unreachable block (ram,0x000180012f01) */
/* WARNING: Removing unreachable block (ram,0x000180012f30) */
/* WARNING: Removing unreachable block (ram,0x000180012f42) */
/* WARNING: Removing unreachable block (ram,0x000180012f56) */
/* WARNING: Removing unreachable block (ram,0x000180012f5f) */
/* WARNING: Removing unreachable block (ram,0x0001800139b0) */
/* WARNING: Removing unreachable block (ram,0x000180012f79) */

void FUN_180012ed0(void)

{
  return;
}


/* Address: 0x180012f8c; Evidence: ev_70fa4ab16b92d61cd81cc3fb24907f99885f20d1373eae94d20bd07eede13986 */

bool FUN_180012f8c(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_180022c68 != (HMODULE)0x1) {
    if (DAT_180022c68 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_180022c70 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_180022c78;
    }
    DAT_180022c78 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_180022c68 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_180022c68;
      pHVar1 = DAT_180022c68;
    }
    DAT_180022c68 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}


/* Address: 0x18001302c; Evidence: ev_cf4417509ab60aa948af370b2f29be703d02ab52acf7016c9a3a3ee26364390f */

/* Library Function - Single Match
    void __cdecl DloadMakePermanentImageCommit(void * __ptr64,unsigned __int64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl DloadMakePermanentImageCommit(void *param_1,__uint64 param_2)

{
  code *pcVar1;
  SIZE_T SVar2;
  ulonglong uVar3;
  uint uVar4;
  ulonglong uVar5;
  undefined1 *puVar6;
  undefined4 *puVar7;
  ulonglong uVar8;
  undefined1 auStack_88 [8];
  undefined1 auStack_80 [24];
  _MEMORY_BASIC_INFORMATION local_68 [2];
  
  puVar6 = auStack_88;
  SVar2 = VirtualQuery(param_1,local_68,0x30);
  if (SVar2 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
    puVar6 = auStack_80;
  }
  if ((puVar6[0x44] & 0x44) != 0) {
    *(undefined8 *)(puVar6 + -8) = 0x18001306c;
    GetSystemInfo((LPSYSTEM_INFO)(puVar6 + 0x50));
    uVar8 = (ulonglong)*(uint *)(puVar6 + 0x54);
    puVar7 = (undefined4 *)(-uVar8 & (ulonglong)param_1);
    uVar4 = *(uint *)(puVar6 + 0x54) - 1;
    uVar5 = (((ulonglong)((uVar4 & (uint)param_2) + (uVar4 & (uint)param_1)) - 1) + uVar8) / uVar8 +
            param_2 / uVar8;
    uVar3 = uVar5 & 0xffffffff;
    if ((int)uVar5 != 0) {
      do {
        LOCK();
        *puVar7 = *puVar7;
        UNLOCK();
        puVar7 = (undefined4 *)((longlong)puVar7 + uVar8);
        uVar3 = uVar3 - 1;
      } while (uVar3 != 0);
    }
  }
  return;
}


/* Address: 0x1800130c4; Evidence: ev_baaec00f4d14bf2e9908b283f7de0cd4b0f8d65cf2b14a520c04cba22b02ff7f */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_1800130c4(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000210;
  while ((0x25000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x25001))) {
    uVar2 = uVar2 + 1;
    pIVar1 = pIVar1 + 1;
    if (7 < uVar2) {
      return 0;
    }
  }
  *param_1 = (pIVar1->Misc).PhysicalAddress;
  *param_2 = pIVar1->Characteristics;
  return (ulonglong)(uint)pIVar1->VirtualAddress + 0x180000000;
}


/* Address: 0x180013160; Evidence: ev_79ef88b7824f7b620f3339f41be86a3bd4da3749d4d97409d5e8912b58e206d8 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

void FUN_180013160(void *param_1,SIZE_T param_2,DWORD param_3,PDWORD param_4)

{
  code *pcVar1;
  undefined1 *puVar2;
  BOOL BVar3;
  void *lpAddress;
  void *pvVar4;
  undefined1 *puVar5;
  undefined1 *puVar6;
  undefined8 uStack_50;
  undefined1 auStack_48 [8];
  undefined1 auStack_40 [24];
  dword local_28;
  SectionFlags local_24 [3];
  
  puVar6 = auStack_48;
  lpAddress = (void *)FUN_1800130c4(&local_28,local_24);
  if (lpAddress == (void *)0x0) {
    *param_4 = 4;
    return;
  }
  if (DAT_180022c90 == 0) {
    DAT_180022c90 = 1;
    puVar6 = auStack_48;
    if ((local_24[0] & IMAGE_SCN_MEM_WRITE) == 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = auStack_40;
    }
    *(undefined8 *)(puVar6 + -8) = 0x1800131da;
    DloadMakePermanentImageCommit(lpAddress,(ulonglong)*(uint *)(puVar6 + 0x20));
  }
  if (param_1 == (void *)0x0) {
    if (param_2 != 0) goto LAB_1800131eb;
LAB_18001321b:
    param_2 = (SIZE_T)*(uint *)(puVar6 + 0x20);
  }
  else {
    puVar2 = puVar6;
    if (param_2 == 0) {
LAB_1800131eb:
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar5 = puVar6 + 8;
      puVar6 = puVar6 + 8;
      puVar2 = puVar5;
      if (param_1 == (void *)0x0) goto LAB_18001321b;
    }
    puVar6 = puVar2;
    pvVar4 = (void *)((ulonglong)*(uint *)(puVar6 + 0x20) + (longlong)lpAddress);
    if ((((pvVar4 <= lpAddress) || ((void *)((longlong)param_1 + param_2) <= param_1)) ||
        (param_1 < lpAddress)) ||
       (lpAddress = param_1, pvVar4 < (void *)((longlong)param_1 + param_2))) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = puVar6 + 8;
      lpAddress = param_1;
    }
  }
  *(undefined8 *)(puVar6 + -8) = 0x180013234;
  BVar3 = VirtualProtect(lpAddress,param_2,param_3,param_4);
  if (BVar3 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
  }
  return;
}


/* Address: 0x180013258; Evidence: ev_c50d78193ee1eda98b15d320982f0cd89dc309a863d411329646a907839c612e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180013279) */
/* WARNING: Removing unreachable block (ram,0x00018001329a) */
/* WARNING: Removing unreachable block (ram,0x0001800132a6) */
/* WARNING: Removing unreachable block (ram,0x0001800132a9) */
/* WARNING: Removing unreachable block (ram,0x000180013282) */
/* WARNING: Removing unreachable block (ram,0x0001800132b4) */
/* WARNING: Removing unreachable block (ram,0x0001800132bd) */
/* WARNING: Removing unreachable block (ram,0x0001800132d2) */
/* WARNING: Removing unreachable block (ram,0x0001800132f1) */
/* WARNING: Removing unreachable block (ram,0x0001800132db) */

void FUN_180013258(void)

{
  return;
}


/* Address: 0x180013310; Evidence: ev_a9ff5c65d0cce71ffb21851f8e9c0b73c9a5ae556e2cbfd2d9e77068da01cf73 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180013484) */
/* WARNING: Removing unreachable block (ram,0x00018001355e) */

HMODULE FUN_180013310(uint *param_1,void *param_2)

{
  uint uVar1;
  uint uVar2;
  HMODULE hLibModule;
  HMODULE pHVar3;
  longlong lVar4;
  ulonglong uVar5;
  longlong *plVar6;
  undefined4 *local_res8;
  void *local_88;
  HMODULE local_80;
  undefined4 local_78 [2];
  uint *local_70;
  void *local_68;
  LPCSTR local_60;
  ulonglong local_58;
  char *pcStack_50;
  HMODULE local_48;
  HMODULE local_40;
  DWORD local_38;
  
  FUN_180012ed0();
  local_60 = (LPCSTR)((ulonglong)param_1[1] + 0x180000000);
  plVar6 = (longlong *)((ulonglong)param_1[2] + 0x180000000);
  uVar1 = param_1[5];
  lVar4 = (ulonglong)param_1[4] + 0x180000000;
  local_res8 = (undefined4 *)CONCAT44(local_res8._4_4_,param_1[7]);
  local_78[0] = 0x48;
  local_48 = (HMODULE)0x0;
  local_40 = (HMODULE)0x0;
  local_38 = 0;
  local_58 = 0;
  pcStack_50 = (char *)0x0;
  local_70 = param_1;
  local_68 = param_2;
  if ((*param_1 & 1) == 0) {
    local_res8 = local_78;
    FUN_180013258();
    RaiseException(0xc06d0057,0,1,(ULONG_PTR *)&local_res8);
    pHVar3 = (HMODULE)0x0;
  }
  else {
    hLibModule = (HMODULE)*plVar6;
    uVar5 = (longlong)((longlong)param_2 - ((ulonglong)param_1[3] + 0x180000000)) >> 3 & 0xffffffff;
    uVar2 = -(int)((longlong)*(undefined8 *)(lVar4 + uVar5 * 8) >> 0x3f);
    local_58 = (ulonglong)uVar2 ^ 1;
    if (uVar2 == 1) {
      pcStack_50 = (char *)(ulonglong)*(ushort *)(lVar4 + uVar5 * 8);
    }
    else {
      pcStack_50 = IMAGE_DOS_HEADER_180000000.e_magic + (ulonglong)*(uint *)(lVar4 + uVar5 * 8) + 2;
    }
    pHVar3 = FUN_180001000(0,(longlong)local_78);
    if (pHVar3 == (HMODULE)0x0) {
      if (hLibModule == (HMODULE)0x0) {
        hLibModule = FUN_180001000(1,(longlong)local_78);
        if ((hLibModule == (HMODULE)0x0) &&
           (hLibModule = LoadLibraryExA(local_60,(HANDLE)0x0,0), hLibModule == (HMODULE)0x0)) {
          local_38 = GetLastError();
          local_res8 = local_78;
          FUN_180013258();
          RaiseException(0xc06d007e,0,1,(ULONG_PTR *)&local_res8);
          return local_40;
        }
        LOCK();
        pHVar3 = (HMODULE)*plVar6;
        *plVar6 = (longlong)hLibModule;
        UNLOCK();
        if (pHVar3 == hLibModule) {
          FreeLibrary(hLibModule);
        }
      }
      local_48 = hLibModule;
      pHVar3 = FUN_180001000(2,(longlong)local_78);
      if (((pHVar3 == (HMODULE)0x0) &&
          ((((param_1[5] == 0 || (param_1[7] == 0)) ||
            (lVar4 = (longlong)hLibModule[0xf].unused,
            *(int *)((longlong)&hLibModule->unused + lVar4) != 0x4550)) ||
           (((*(int *)((longlong)&hLibModule[2].unused + lVar4) != (int)local_res8 ||
             (hLibModule != *(HMODULE *)((longlong)&hLibModule[0xc].unused + lVar4))) ||
            (pHVar3 = *(HMODULE *)((ulonglong)uVar1 + 0x180000000 + uVar5 * 8),
            pHVar3 == (HMODULE)0x0)))))) &&
         (pHVar3 = (HMODULE)GetProcAddress(hLibModule,pcStack_50), pHVar3 == (HMODULE)0x0)) {
        local_38 = GetLastError();
        local_res8 = local_78;
        FUN_180013258();
        RaiseException(0xc06d007f,0,1,(ULONG_PTR *)&local_res8);
        FUN_180012ed0();
        pHVar3 = local_40;
      }
      local_88 = param_2;
      local_80 = pHVar3;
      FUN_180012de4(param_2,8,&local_88);
    }
    local_38 = 0;
    local_48 = hLibModule;
    local_40 = pHVar3;
    FUN_180001000(5,(longlong)local_78);
    FUN_180013258();
  }
  return pHVar3;
}


/* Address: 0x18001360c; Evidence: ev_29b8752dca8c3e5fea6e9bd788ad0a70bc30138511495c2ecab1c5c0fd5d036e */

undefined8 FUN_18001360c(undefined8 param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  FUN_18001362c(param_2,param_4);
  return 1;
}


/* Address: 0x18001362c; Evidence: ev_5551b657cf64e6e043240b5b0f269277ff64f00a3f370711850c59ba69986244 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18001362c(undefined8 param_1,longlong param_2)

{
  ulonglong uVar1;
  ulonglong uVar2;
  
  uVar2 = (ulonglong)*(uint *)(*(longlong *)(param_2 + 0x10) + 8);
  uVar1 = *(ulonglong *)(param_2 + 8);
  if ((*(byte *)(uVar2 + 3 + uVar1) & 0xf) != 0) {
    uVar1 = (ulonglong)*(byte *)(uVar2 + 3 + uVar1) & 0xfffffff0;
  }
  return uVar1;
}


/* Address: 0x180013690; Evidence: ev_71dcef16da259fff7e8e53db8c38a4abbe937510d7879050795fd962ac8d05bd */

/* Library Function - Single Match
    _FindPESection
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

PIMAGE_SECTION_HEADER __cdecl _FindPESection(PBYTE pImageBase,DWORD_PTR rva)

{
  int iVar1;
  PIMAGE_SECTION_HEADER p_Var2;
  uint uVar3;
  
  iVar1 = *(int *)(pImageBase + 0x3c);
  uVar3 = 0;
  p_Var2 = (PIMAGE_SECTION_HEADER)
           (pImageBase +
           (ulonglong)*(ushort *)(pImageBase + (longlong)iVar1 + 0x14) + 0x18 + (longlong)iVar1);
  if (*(ushort *)(pImageBase + (longlong)iVar1 + 6) != 0) {
    do {
      if ((p_Var2->VirtualAddress <= rva) &&
         (rva < (p_Var2->Misc).PhysicalAddress + p_Var2->VirtualAddress)) {
        return p_Var2;
      }
      uVar3 = uVar3 + 1;
      p_Var2 = p_Var2 + 1;
    } while (uVar3 < *(ushort *)(pImageBase + (longlong)iVar1 + 6));
  }
  return (PIMAGE_SECTION_HEADER)0x0;
}


/* Address: 0x1800136e0; Evidence: ev_67a5a8e556b4a37afeb410dfdee64aa3662b34937c16880126414cacb7365a65 */

ulonglong FUN_1800136e0(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_180013730((short *)&IMAGE_DOS_HEADER_180000000);
  uVar2 = CONCAT71(extraout_var,bVar1);
  if ((int)uVar2 != 0) {
    p_Var3 = _FindPESection((PBYTE)&IMAGE_DOS_HEADER_180000000,param_1 - 0x180000000);
    uVar2 = 0;
    if (p_Var3 != (PIMAGE_SECTION_HEADER)0x0) {
      uVar2 = (ulonglong)(~p_Var3->Characteristics >> 0x1f);
    }
  }
  return uVar2;
}


/* Address: 0x180013730; Evidence: ev_d982782ffa874b526c443098bf33db636c454714b4561c6c6c57c52fb1abac98 */

bool FUN_180013730(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}


/* Address: 0x18001375c; Evidence: ev_9c147d6094346a05c8bdca4bfd6c4471fbb244d5d3b137ff4212266c7a326f5a */

/* Library Function - Single Match
    __GSHandlerCheck_SEH
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __GSHandlerCheck_SEH
               (PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  uint uVar1;
  uint *puVar2;
  
  puVar2 = (uint *)param_4[7];
  uVar1 = *puVar2;
  FUN_18001362c(param_2,(longlong)param_4);
  if ((puVar2[(ulonglong)uVar1 * 4 + 1] & ((param_1->ExceptionFlags & 0x66) != 0) + 1) != 0) {
    FUN_180006ae4(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x1800137e4; Evidence: ev_89e5fdefd9474f1cd6607d9131bdb6ccec0d52455823f921874dbd283f52d23a */

void FUN_1800137e4(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_18001362c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180013880; Evidence: ev_9ed8fc96deab3339f8e4961e1e8f42f0b8cbe120f1186a2426402adabcb28796 */

/* WARNING: This is an inlined function */
/* Library Function - Single Match
    __chkstk
   
   Libraries: Visual Studio 2005, Visual Studio 2008, Visual Studio 2010, Visual Studio 2012 */

void __chkstk(void)

{
  undefined1 *in_RAX;
  undefined1 *puVar1;
  undefined1 *puVar2;
  undefined1 local_res8 [32];
  
  puVar1 = local_res8 + -(longlong)in_RAX;
  if (local_res8 < in_RAX) {
    puVar1 = (undefined1 *)0x0;
  }
  if (puVar1 < StackLimit) {
    puVar2 = StackLimit;
    do {
      puVar2 = puVar2 + -0x1000;
      *puVar2 = 0;
    } while ((undefined1 *)((ulonglong)puVar1 & 0xfffffffffffff000) != puVar2);
  }
  return;
}


/* Address: 0x1800138d0; Evidence: ev_795bd8ae5b2c9fc63fb79e540f5796c40f1d754a22826cc03968b081e5c4a263 */

void FUN_1800138d0(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_180006ae4(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_180006ed8();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_180006ed8();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_18000bd2c();
  }
  return;
}


/* Address: 0x180013920; Evidence: ev_2af63903c450df351fb205bc33f266812426a55dd5898c4639f3da7c8bfecec9 */

void FUN_180013920(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_18001362c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    FUN_180006830(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x1800139b0; Evidence: ev_301120a1bd857f4da8620f47143278a22add19971fdc62dba88e28800a5d6b42 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x0001800139b0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x1800139d0; Evidence: ev_43287efb5ae74955b93b188fcb64ad962b09e97e36bf673de0f31dbb6f4a81b2 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x0001800139b0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x1800139f0; Evidence: ev_57c0e03c9d85f01603fe625e98c9b950abffbde27dad2c4e1eebc0a02a5b3bb4 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x0001800139b0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180013a20; Evidence: ev_0ebd5fcd83c9e70519cf831d21daae087157d3c78c9ebf25d47acccfcb769c94 */

undefined8 FUN_180013a20(undefined1 *param_1,undefined1 param_2,longlong param_3,undefined8 param_4)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = param_2;
    param_1 = param_1 + 1;
  }
  return param_4;
}


/* Address: 0x180013a30; Evidence: ev_bd298d28889a7f9d38e7ca111a7e62040d48c9884a37adecc7693bb7c9e7c599 */

undefined1 (*) [32] FUN_180013a30(undefined1 (*param_1) [32],byte param_2,ulonglong param_3)

{
  undefined1 auVar1 [32];
  undefined1 (*pauVar2) [32];
  undefined1 (*pauVar3) [32];
  undefined1 (*pauVar4) [16];
  ulonglong uVar5;
  ulonglong uVar6;
  undefined1 uVar7;
  longlong lVar10;
  undefined1 auVar11 [16];
  undefined1 auVar12 [32];
  undefined2 uVar8;
  undefined4 uVar9;
  
  lVar10 = (ulonglong)param_2 * 0x101010101010101;
  if (param_3 < 0x10) {
    uVar5 = param_3 & 0xf;
    uVar7 = (undefined1)lVar10;
    uVar8 = (undefined2)lVar10;
    uVar9 = (undefined4)lVar10;
    switch(uVar5) {
    case 0:
      return param_1;
    case 8:
      *(longlong *)(param_1[-1] + uVar5 + 0x18) = lVar10;
      return param_1;
    case 9:
      *(longlong *)(param_1[-1] + uVar5 + 0x17) = lVar10;
      param_1[-1][uVar5 + 0x1f] = uVar7;
      return param_1;
    case 10:
      *(longlong *)(param_1[-1] + uVar5 + 0x16) = lVar10;
      *(undefined2 *)(param_1[-1] + uVar5 + 0x1e) = uVar8;
      return param_1;
    case 0xb:
      *(longlong *)(param_1[-1] + uVar5 + 0x15) = lVar10;
      *(undefined2 *)(param_1[-1] + uVar5 + 0x1d) = uVar8;
      param_1[-1][uVar5 + 0x1f] = uVar7;
      return param_1;
    case 0xc:
      *(longlong *)(param_1[-1] + uVar5 + 0x14) = lVar10;
    case 4:
      *(undefined4 *)(param_1[-1] + uVar5 + 0x1c) = uVar9;
      return param_1;
    case 0xd:
      *(longlong *)(param_1[-1] + uVar5 + 0x13) = lVar10;
    case 5:
      *(undefined4 *)(param_1[-1] + uVar5 + 0x1b) = uVar9;
      param_1[-1][uVar5 + 0x1f] = uVar7;
      return param_1;
    case 0xe:
      *(longlong *)(param_1[-1] + uVar5 + 0x12) = lVar10;
    case 6:
      *(undefined4 *)(param_1[-1] + uVar5 + 0x1a) = uVar9;
    case 2:
      *(undefined2 *)(param_1[-1] + uVar5 + 0x1e) = uVar8;
      return param_1;
    case 0xf:
      *(longlong *)(param_1[-1] + uVar5 + 0x11) = lVar10;
    case 7:
      *(undefined4 *)(param_1[-1] + uVar5 + 0x19) = uVar9;
    case 3:
      *(undefined2 *)(param_1[-1] + uVar5 + 0x1d) = uVar8;
    case 1:
      param_1[-1][uVar5 + 0x1f] = uVar7;
      return param_1;
    }
  }
  auVar11._8_8_ = lVar10;
  auVar11._0_8_ = lVar10;
  if (0x20 < param_3) {
    pauVar2 = param_1;
    if (DAT_180021058 < 3) {
      if ((param_3 <= DAT_180021060) || (((byte)DAT_1800221e0 & 2) == 0)) {
        lVar10 = ((ulonglong)param_1 & 0xf) - 0x10;
        pauVar4 = (undefined1 (*) [16])((longlong)param_1 - lVar10);
        uVar5 = param_3 + lVar10;
        if (0x80 < uVar5) {
          do {
            *pauVar4 = auVar11;
            pauVar4[1] = auVar11;
            pauVar4[2] = auVar11;
            pauVar4[3] = auVar11;
            pauVar4[4] = auVar11;
            pauVar4[5] = auVar11;
            pauVar4[6] = auVar11;
            pauVar4[7] = auVar11;
            pauVar4 = pauVar4 + 8;
            uVar5 = uVar5 - 0x80;
          } while (0x7f < uVar5);
        }
        uVar6 = uVar5 + 0xf & 0xfffffffffffffff0;
        switch(uVar5 + 0xf >> 4 & 0xf) {
        case 8:
          *(undefined1 (*) [16])(pauVar4[-8] + uVar6) = auVar11;
        case 7:
          *(undefined1 (*) [16])(pauVar4[-7] + uVar6) = auVar11;
        case 6:
          *(undefined1 (*) [16])(pauVar4[-6] + uVar6) = auVar11;
        case 5:
          *(undefined1 (*) [16])(pauVar4[-5] + uVar6) = auVar11;
        case 4:
          *(undefined1 (*) [16])(pauVar4[-4] + uVar6) = auVar11;
        case 3:
          *(undefined1 (*) [16])(pauVar4[-3] + uVar6) = auVar11;
        case 2:
          *(undefined1 (*) [16])(pauVar4[-2] + uVar6) = auVar11;
        case 1:
          *(undefined1 (*) [16])(pauVar4[-1] + uVar5) = auVar11;
        default:
          *(undefined1 (*) [16])*param_1 = auVar11;
          return param_1;
        }
      }
    }
    else if (((param_3 <= DAT_180021060) || (DAT_180021068 < param_3)) ||
            (((byte)DAT_1800221e0 & 2) == 0)) {
      auVar12._16_16_ = auVar11;
      auVar12._0_16_ = auVar11;
      lVar10 = ((ulonglong)param_1 & 0x1f) - 0x20;
      pauVar2 = (undefined1 (*) [32])((longlong)param_1 - lVar10);
      uVar5 = param_3 + lVar10;
      if (0x100 < uVar5) {
        if (DAT_180021068 < uVar5) {
          do {
            uVar6 = uVar5;
            pauVar3 = pauVar2;
            auVar1 = vmovntdq_avx(auVar12);
            *pauVar3 = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[1] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[2] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[3] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[4] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[5] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[6] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[7] = auVar1;
            pauVar2 = pauVar3 + 8;
            uVar5 = uVar6 - 0x100;
          } while (0xff < uVar6 - 0x100);
          uVar5 = uVar6 - 0xe1 & 0xffffffffffffffe0;
          switch(uVar6 - 0xe1 >> 5 & 0xf) {
          case 8:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(*pauVar3 + uVar5) = auVar1;
          case 7:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[1] + uVar5) = auVar1;
          case 6:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[2] + uVar5) = auVar1;
          case 5:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[3] + uVar5) = auVar1;
          case 4:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[4] + uVar5) = auVar1;
          case 3:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[5] + uVar5) = auVar1;
          case 2:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[6] + uVar5) = auVar1;
          case 1:
            *(undefined1 (*) [32])(pauVar3[-1] + uVar6) = auVar12;
          default:
            *param_1 = auVar12;
            return param_1;
          }
        }
        do {
          *pauVar2 = auVar12;
          pauVar2[1] = auVar12;
          pauVar2[2] = auVar12;
          pauVar2[3] = auVar12;
          pauVar2[4] = auVar12;
          pauVar2[5] = auVar12;
          pauVar2[6] = auVar12;
          pauVar2[7] = auVar12;
          pauVar2 = pauVar2 + 8;
          uVar5 = uVar5 - 0x100;
        } while (0xff < uVar5);
      }
      uVar6 = uVar5 + 0x1f & 0xffffffffffffffe0;
      switch(uVar5 + 0x1f >> 5 & 0xf) {
      case 8:
        *(undefined1 (*) [32])(pauVar2[-8] + uVar6) = auVar12;
      case 7:
        *(undefined1 (*) [32])(pauVar2[-7] + uVar6) = auVar12;
      case 6:
        *(undefined1 (*) [32])(pauVar2[-6] + uVar6) = auVar12;
      case 5:
        *(undefined1 (*) [32])(pauVar2[-5] + uVar6) = auVar12;
      case 4:
        *(undefined1 (*) [32])(pauVar2[-4] + uVar6) = auVar12;
      case 3:
        *(undefined1 (*) [32])(pauVar2[-3] + uVar6) = auVar12;
      case 2:
        *(undefined1 (*) [32])(pauVar2[-2] + uVar6) = auVar12;
      case 1:
        *(undefined1 (*) [32])(pauVar2[-1] + uVar5) = auVar12;
      default:
        *param_1 = auVar12;
        return param_1;
      }
    }
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*pauVar2)[0] = param_2;
      pauVar2 = (undefined1 (*) [32])(*pauVar2 + 1);
    }
    return param_1;
  }
  *(undefined1 (*) [16])*param_1 = auVar11;
  *(undefined1 (*) [16])(param_1[-1] + param_3 + 0x10) = auVar11;
  return param_1;
}


/* Address: 0x180013de0; Evidence: ev_6317bd330535ffa8512d9392e8b7e1332de2eb69183b4033be819c6debd5ec19 */

void FUN_180013de0(undefined1 *param_1,undefined1 *param_2,longlong param_3)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = *param_2;
    param_2 = param_2 + 1;
    param_1 = param_1 + 1;
  }
  return;
}


/* Address: 0x180013df0; Evidence: ev_68d4a462deb25e95dcfdd1d5198dfd2e795649813f9ee30d679a342ed437e81e */

void FUN_180013df0(undefined1 (*param_1) [32],undefined1 (*param_2) [32],ulonglong param_3)

{
  undefined8 *puVar1;
  undefined8 *puVar2;
  undefined1 auVar3 [32];
  undefined1 auVar4 [32];
  undefined1 auVar5 [32];
  undefined1 auVar6 [32];
  undefined1 uVar7;
  undefined2 uVar8;
  undefined4 uVar9;
  undefined8 uVar10;
  undefined8 uVar11;
  undefined8 uVar12;
  undefined8 uVar13;
  undefined8 uVar14;
  undefined8 uVar15;
  undefined8 uVar16;
  undefined8 uVar17;
  undefined8 uVar18;
  undefined8 uVar19;
  undefined8 uVar20;
  undefined8 uVar21;
  undefined8 uVar22;
  undefined8 uVar23;
  undefined8 uVar24;
  undefined8 uVar25;
  undefined8 uVar26;
  undefined8 uVar27;
  undefined8 uVar28;
  undefined8 uVar29;
  undefined8 uVar30;
  undefined1 (*pauVar31) [32];
  undefined1 (*pauVar32) [32];
  undefined8 *puVar33;
  undefined8 *puVar34;
  undefined1 (*pauVar35) [32];
  longlong lVar36;
  ulonglong uVar37;
  ulonglong uVar38;
  undefined8 uVar39;
  undefined8 uVar40;
  
  if (param_3 < 0x10) {
    switch(param_3 & 0xf) {
    case 0:
      return;
    case 1:
      (*param_1)[0] = (*param_2)[0];
      return;
    case 2:
      *(undefined2 *)*param_1 = *(undefined2 *)*param_2;
      return;
    case 3:
      uVar7 = (*param_2)[2];
      *(undefined2 *)*param_1 = *(undefined2 *)*param_2;
      (*param_1)[2] = uVar7;
      return;
    case 4:
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      return;
    case 5:
      uVar7 = (*param_2)[4];
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      (*param_1)[4] = uVar7;
      return;
    case 6:
      uVar8 = *(undefined2 *)(*param_2 + 4);
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      *(undefined2 *)(*param_1 + 4) = uVar8;
      return;
    case 7:
      uVar8 = *(undefined2 *)(*param_2 + 4);
      uVar7 = (*param_2)[6];
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      *(undefined2 *)(*param_1 + 4) = uVar8;
      (*param_1)[6] = uVar7;
      return;
    case 8:
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      return;
    case 9:
      uVar7 = (*param_2)[8];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      (*param_1)[8] = uVar7;
      return;
    case 10:
      uVar8 = *(undefined2 *)(*param_2 + 8);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined2 *)(*param_1 + 8) = uVar8;
      return;
    case 0xb:
      uVar8 = *(undefined2 *)(*param_2 + 8);
      uVar7 = (*param_2)[10];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined2 *)(*param_1 + 8) = uVar8;
      (*param_1)[10] = uVar7;
      return;
    case 0xc:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      return;
    case 0xd:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar7 = (*param_2)[0xc];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      (*param_1)[0xc] = uVar7;
      return;
    case 0xe:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar8 = *(undefined2 *)(*param_2 + 0xc);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      *(undefined2 *)(*param_1 + 0xc) = uVar8;
      return;
    case 0xf:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar8 = *(undefined2 *)(*param_2 + 0xc);
      uVar7 = (*param_2)[0xe];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      *(undefined2 *)(*param_1 + 0xc) = uVar8;
      (*param_1)[0xe] = uVar7;
      return;
    }
  }
  if (param_3 < 0x21) {
    uVar10 = *(undefined8 *)(*param_2 + 8);
    uVar11 = *(undefined8 *)(param_2[-1] + param_3 + 0x10);
    uVar12 = *(undefined8 *)((longlong)(param_2[-1] + param_3 + 0x10) + 8);
    *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
    *(undefined8 *)(*param_1 + 8) = uVar10;
    *(undefined8 *)(param_1[-1] + param_3 + 0x10) = uVar11;
    *(undefined8 *)((longlong)(param_1[-1] + param_3 + 0x10) + 8) = uVar12;
    return;
  }
  pauVar31 = (undefined1 (*) [32])(*param_2 + param_3);
  if (param_1 <= param_2) {
    pauVar31 = param_1;
  }
  if (param_1 < pauVar31) {
    uVar10 = *(undefined8 *)*param_2;
    uVar11 = *(undefined8 *)(*param_2 + 8);
    lVar36 = (longlong)param_2 - (longlong)param_1;
    puVar33 = (undefined8 *)((longlong)param_1 + lVar36 + (param_3 - 0x10));
    uVar12 = *puVar33;
    uVar13 = puVar33[1];
    puVar34 = (undefined8 *)(param_1[-1] + param_3 + 0x10);
    uVar37 = param_3 - 0x10;
    puVar33 = puVar34;
    uVar39 = uVar12;
    uVar40 = uVar13;
    if (((ulonglong)puVar34 & 0xf) != 0) {
      puVar33 = (undefined8 *)((ulonglong)puVar34 & 0xfffffffffffffff0);
      uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
      uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
      *puVar34 = uVar12;
      *(undefined8 *)(param_1[-1] + param_3 + 0x18) = uVar13;
      uVar37 = (longlong)puVar33 - (longlong)param_1;
    }
    uVar38 = uVar37 >> 7;
    if (uVar38 != 0) {
      *puVar33 = uVar39;
      puVar33[1] = uVar40;
      puVar34 = puVar33;
      while( true ) {
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x10);
        uVar12 = puVar1[1];
        puVar33 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x20);
        uVar13 = *puVar33;
        uVar39 = puVar33[1];
        puVar33 = puVar34 + -0x10;
        puVar34[-2] = *puVar1;
        puVar34[-1] = uVar12;
        puVar34[-4] = uVar13;
        puVar34[-3] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x30);
        uVar12 = puVar1[1];
        puVar2 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x40);
        uVar13 = *puVar2;
        uVar39 = puVar2[1];
        uVar38 = uVar38 - 1;
        puVar34[-6] = *puVar1;
        puVar34[-5] = uVar12;
        puVar34[-8] = uVar13;
        puVar34[-7] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x50);
        uVar12 = puVar1[1];
        puVar2 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x60);
        uVar13 = *puVar2;
        uVar39 = puVar2[1];
        puVar34[-10] = *puVar1;
        puVar34[-9] = uVar12;
        puVar34[-0xc] = uVar13;
        puVar34[-0xb] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x70);
        uVar12 = *puVar1;
        uVar13 = puVar1[1];
        uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
        uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
        if (uVar38 == 0) break;
        puVar34[-0xe] = uVar12;
        puVar34[-0xd] = uVar13;
        *puVar33 = uVar39;
        puVar34[-0xf] = uVar40;
        puVar34 = puVar33;
      }
      puVar34[-0xe] = uVar12;
      puVar34[-0xd] = uVar13;
      uVar37 = uVar37 & 0x7f;
    }
    for (uVar38 = uVar37 >> 4; uVar38 != 0; uVar38 = uVar38 - 1) {
      *puVar33 = uVar39;
      puVar33[1] = uVar40;
      puVar33 = puVar33 + -2;
      uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
      uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
    }
    if ((uVar37 & 0xf) != 0) {
      *(undefined8 *)*param_1 = uVar10;
      *(undefined8 *)(*param_1 + 8) = uVar11;
    }
    *puVar33 = uVar39;
    puVar33[1] = uVar40;
    return;
  }
  if (DAT_180021058 < 3) {
    if ((param_3 < 0x801) || (((byte)DAT_1800221e0 & 2) == 0)) {
      uVar10 = *(undefined8 *)*param_2;
      uVar11 = *(undefined8 *)(*param_2 + 8);
      uVar12 = *(undefined8 *)(param_2[-1] + param_3 + 0x10);
      uVar13 = *(undefined8 *)((longlong)(param_2[-1] + param_3 + 0x10) + 8);
      pauVar31 = param_1;
      if (0x80 < param_3) {
        lVar36 = ((ulonglong)param_1 & 0xf) - 0x10;
        pauVar31 = (undefined1 (*) [32])((longlong)param_1 - lVar36);
        param_2 = (undefined1 (*) [32])((longlong)param_2 - lVar36);
        param_3 = param_3 + lVar36;
        if (0x80 < param_3) {
          do {
            uVar39 = *(undefined8 *)(*param_2 + 8);
            uVar40 = *(undefined8 *)(*param_2 + 0x10);
            uVar14 = *(undefined8 *)(*param_2 + 0x18);
            uVar15 = *(undefined8 *)param_2[1];
            uVar16 = *(undefined8 *)(param_2[1] + 8);
            uVar17 = *(undefined8 *)(param_2[1] + 0x10);
            uVar18 = *(undefined8 *)(param_2[1] + 0x18);
            *(undefined8 *)*pauVar31 = *(undefined8 *)*param_2;
            *(undefined8 *)(*pauVar31 + 8) = uVar39;
            *(undefined8 *)(*pauVar31 + 0x10) = uVar40;
            *(undefined8 *)(*pauVar31 + 0x18) = uVar14;
            *(undefined8 *)pauVar31[1] = uVar15;
            *(undefined8 *)(pauVar31[1] + 8) = uVar16;
            *(undefined8 *)(pauVar31[1] + 0x10) = uVar17;
            *(undefined8 *)(pauVar31[1] + 0x18) = uVar18;
            uVar39 = *(undefined8 *)(param_2[2] + 8);
            uVar40 = *(undefined8 *)(param_2[2] + 0x10);
            uVar14 = *(undefined8 *)(param_2[2] + 0x18);
            uVar15 = *(undefined8 *)param_2[3];
            uVar16 = *(undefined8 *)(param_2[3] + 8);
            uVar17 = *(undefined8 *)(param_2[3] + 0x10);
            uVar18 = *(undefined8 *)(param_2[3] + 0x18);
            *(undefined8 *)pauVar31[2] = *(undefined8 *)param_2[2];
            *(undefined8 *)(pauVar31[2] + 8) = uVar39;
            *(undefined8 *)(pauVar31[2] + 0x10) = uVar40;
            *(undefined8 *)(pauVar31[2] + 0x18) = uVar14;
            *(undefined8 *)pauVar31[3] = uVar15;
            *(undefined8 *)(pauVar31[3] + 8) = uVar16;
            *(undefined8 *)(pauVar31[3] + 0x10) = uVar17;
            *(undefined8 *)(pauVar31[3] + 0x18) = uVar18;
            pauVar31 = pauVar31 + 4;
            param_2 = param_2 + 4;
            param_3 = param_3 - 0x80;
          } while (0x7f < param_3);
        }
      }
      uVar37 = param_3 + 0xf & 0xfffffffffffffff0;
      switch(param_3 + 0xf >> 4 & 0xf) {
      case 8:
        uVar39 = *(undefined8 *)((longlong)(param_2[-4] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-4] + uVar37) = *(undefined8 *)(param_2[-4] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-4] + uVar37) + 8) = uVar39;
      case 7:
        uVar39 = *(undefined8 *)((longlong)(param_2[-4] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-4] + uVar37 + 0x10) = *(undefined8 *)(param_2[-4] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-4] + uVar37 + 0x10) + 8) = uVar39;
      case 6:
        uVar39 = *(undefined8 *)((longlong)(param_2[-3] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-3] + uVar37) = *(undefined8 *)(param_2[-3] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-3] + uVar37) + 8) = uVar39;
      case 5:
        uVar39 = *(undefined8 *)((longlong)(param_2[-3] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-3] + uVar37 + 0x10) = *(undefined8 *)(param_2[-3] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-3] + uVar37 + 0x10) + 8) = uVar39;
      case 4:
        uVar39 = *(undefined8 *)((longlong)(param_2[-2] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-2] + uVar37) = *(undefined8 *)(param_2[-2] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-2] + uVar37) + 8) = uVar39;
      case 3:
        uVar39 = *(undefined8 *)((longlong)(param_2[-2] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-2] + uVar37 + 0x10) = *(undefined8 *)(param_2[-2] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-2] + uVar37 + 0x10) + 8) = uVar39;
      case 2:
        uVar39 = *(undefined8 *)((longlong)(param_2[-1] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-1] + uVar37) = *(undefined8 *)(param_2[-1] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-1] + uVar37) + 8) = uVar39;
      case 1:
        *(undefined8 *)(pauVar31[-1] + param_3 + 0x10) = uVar12;
        *(undefined8 *)((longlong)(pauVar31[-1] + param_3 + 0x10) + 8) = uVar13;
      default:
        *(undefined8 *)*param_1 = uVar10;
        *(undefined8 *)(*param_1 + 8) = uVar11;
        return;
      }
    }
code_r0x000180013deb:
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*param_1)[0] = (*param_2)[0];
      param_2 = (undefined1 (*) [32])(*param_2 + 1);
      param_1 = (undefined1 (*) [32])(*param_1 + 1);
    }
    return;
  }
  if (((0x2000 < param_3) && (param_3 < 0x180001)) && (((byte)DAT_1800221e0 & 2) != 0))
  goto code_r0x000180013deb;
  uVar10 = *(undefined8 *)*param_2;
  uVar11 = *(undefined8 *)(*param_2 + 8);
  uVar12 = *(undefined8 *)(*param_2 + 0x10);
  uVar13 = *(undefined8 *)(*param_2 + 0x18);
  puVar33 = (undefined8 *)(param_2[-1] + param_3);
  uVar39 = *puVar33;
  uVar40 = puVar33[1];
  uVar14 = puVar33[2];
  uVar15 = puVar33[3];
  pauVar31 = param_1;
  if (0x100 < param_3) {
    lVar36 = ((ulonglong)param_1 & 0x1f) - 0x20;
    pauVar31 = (undefined1 (*) [32])((longlong)param_1 - lVar36);
    param_2 = (undefined1 (*) [32])((longlong)param_2 - lVar36);
    param_3 = param_3 + lVar36;
    if (0x100 < param_3) {
      if (0x180000 < param_3) {
        do {
          uVar37 = param_3;
          pauVar35 = param_2;
          pauVar32 = pauVar31;
          auVar3 = pauVar35[1];
          auVar4 = pauVar35[2];
          auVar5 = pauVar35[3];
          auVar6 = vmovntdq_avx(*pauVar35);
          *pauVar32 = auVar6;
          auVar3 = vmovntdq_avx(auVar3);
          pauVar32[1] = auVar3;
          auVar3 = vmovntdq_avx(auVar4);
          pauVar32[2] = auVar3;
          auVar3 = vmovntdq_avx(auVar5);
          pauVar32[3] = auVar3;
          auVar3 = pauVar35[5];
          auVar4 = pauVar35[6];
          auVar5 = pauVar35[7];
          auVar6 = vmovntdq_avx(pauVar35[4]);
          pauVar32[4] = auVar6;
          auVar3 = vmovntdq_avx(auVar3);
          pauVar32[5] = auVar3;
          auVar3 = vmovntdq_avx(auVar4);
          pauVar32[6] = auVar3;
          auVar3 = vmovntdq_avx(auVar5);
          pauVar32[7] = auVar3;
          pauVar31 = pauVar32 + 8;
          param_2 = pauVar35 + 8;
          param_3 = uVar37 - 0x100;
        } while (0xff < uVar37 - 0x100);
        uVar38 = uVar37 - 0xe1 & 0xffffffffffffffe0;
        switch(uVar37 - 0xe1 >> 5 & 0xf) {
        case 8:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(*pauVar35 + uVar38));
          *(undefined1 (*) [32])(*pauVar32 + uVar38) = auVar3;
        case 7:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[1] + uVar38));
          *(undefined1 (*) [32])(pauVar32[1] + uVar38) = auVar3;
        case 6:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[2] + uVar38));
          *(undefined1 (*) [32])(pauVar32[2] + uVar38) = auVar3;
        case 5:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[3] + uVar38));
          *(undefined1 (*) [32])(pauVar32[3] + uVar38) = auVar3;
        case 4:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[4] + uVar38));
          *(undefined1 (*) [32])(pauVar32[4] + uVar38) = auVar3;
        case 3:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[5] + uVar38));
          *(undefined1 (*) [32])(pauVar32[5] + uVar38) = auVar3;
        case 2:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[6] + uVar38));
          *(undefined1 (*) [32])(pauVar32[6] + uVar38) = auVar3;
        case 1:
          puVar33 = (undefined8 *)(pauVar32[-1] + uVar37);
          *puVar33 = uVar39;
          puVar33[1] = uVar40;
          puVar33[2] = uVar14;
          puVar33[3] = uVar15;
        case 0:
          *(undefined8 *)*param_1 = uVar10;
          *(undefined8 *)(*param_1 + 8) = uVar11;
          *(undefined8 *)(*param_1 + 0x10) = uVar12;
          *(undefined8 *)(*param_1 + 0x18) = uVar13;
          return;
        }
        goto switchD_180014076_caseD_0;
      }
      do {
        uVar16 = *(undefined8 *)(*param_2 + 8);
        uVar17 = *(undefined8 *)(*param_2 + 0x10);
        uVar18 = *(undefined8 *)(*param_2 + 0x18);
        uVar19 = *(undefined8 *)param_2[1];
        uVar20 = *(undefined8 *)(param_2[1] + 8);
        uVar21 = *(undefined8 *)(param_2[1] + 0x10);
        uVar22 = *(undefined8 *)(param_2[1] + 0x18);
        uVar23 = *(undefined8 *)param_2[2];
        uVar24 = *(undefined8 *)(param_2[2] + 8);
        uVar25 = *(undefined8 *)(param_2[2] + 0x10);
        uVar26 = *(undefined8 *)(param_2[2] + 0x18);
        uVar27 = *(undefined8 *)param_2[3];
        uVar28 = *(undefined8 *)(param_2[3] + 8);
        uVar29 = *(undefined8 *)(param_2[3] + 0x10);
        uVar30 = *(undefined8 *)(param_2[3] + 0x18);
        *(undefined8 *)*pauVar31 = *(undefined8 *)*param_2;
        *(undefined8 *)(*pauVar31 + 8) = uVar16;
        *(undefined8 *)(*pauVar31 + 0x10) = uVar17;
        *(undefined8 *)(*pauVar31 + 0x18) = uVar18;
        *(undefined8 *)pauVar31[1] = uVar19;
        *(undefined8 *)(pauVar31[1] + 8) = uVar20;
        *(undefined8 *)(pauVar31[1] + 0x10) = uVar21;
        *(undefined8 *)(pauVar31[1] + 0x18) = uVar22;
        *(undefined8 *)pauVar31[2] = uVar23;
        *(undefined8 *)(pauVar31[2] + 8) = uVar24;
        *(undefined8 *)(pauVar31[2] + 0x10) = uVar25;
        *(undefined8 *)(pauVar31[2] + 0x18) = uVar26;
        *(undefined8 *)pauVar31[3] = uVar27;
        *(undefined8 *)(pauVar31[3] + 8) = uVar28;
        *(undefined8 *)(pauVar31[3] + 0x10) = uVar29;
        *(undefined8 *)(pauVar31[3] + 0x18) = uVar30;
        uVar16 = *(undefined8 *)(param_2[4] + 8);
        uVar17 = *(undefined8 *)(param_2[4] + 0x10);
        uVar18 = *(undefined8 *)(param_2[4] + 0x18);
        uVar19 = *(undefined8 *)param_2[5];
        uVar20 = *(undefined8 *)(param_2[5] + 8);
        uVar21 = *(undefined8 *)(param_2[5] + 0x10);
        uVar22 = *(undefined8 *)(param_2[5] + 0x18);
        uVar23 = *(undefined8 *)param_2[6];
        uVar24 = *(undefined8 *)(param_2[6] + 8);
        uVar25 = *(undefined8 *)(param_2[6] + 0x10);
        uVar26 = *(undefined8 *)(param_2[6] + 0x18);
        uVar27 = *(undefined8 *)param_2[7];
        uVar28 = *(undefined8 *)(param_2[7] + 8);
        uVar29 = *(undefined8 *)(param_2[7] + 0x10);
        uVar30 = *(undefined8 *)(param_2[7] + 0x18);
        *(undefined8 *)pauVar31[4] = *(undefined8 *)param_2[4];
        *(undefined8 *)(pauVar31[4] + 8) = uVar16;
        *(undefined8 *)(pauVar31[4] + 0x10) = uVar17;
        *(undefined8 *)(pauVar31[4] + 0x18) = uVar18;
        *(undefined8 *)pauVar31[5] = uVar19;
        *(undefined8 *)(pauVar31[5] + 8) = uVar20;
        *(undefined8 *)(pauVar31[5] + 0x10) = uVar21;
        *(undefined8 *)(pauVar31[5] + 0x18) = uVar22;
        *(undefined8 *)pauVar31[6] = uVar23;
        *(undefined8 *)(pauVar31[6] + 8) = uVar24;
        *(undefined8 *)(pauVar31[6] + 0x10) = uVar25;
        *(undefined8 *)(pauVar31[6] + 0x18) = uVar26;
        *(undefined8 *)pauVar31[7] = uVar27;
        *(undefined8 *)(pauVar31[7] + 8) = uVar28;
        *(undefined8 *)(pauVar31[7] + 0x10) = uVar29;
        *(undefined8 *)(pauVar31[7] + 0x18) = uVar30;
        pauVar31 = pauVar31 + 8;
        param_2 = param_2 + 8;
        param_3 = param_3 - 0x100;
      } while (0xff < param_3);
    }
  }
  uVar37 = param_3 + 0x1f & 0xffffffffffffffe0;
  switch(param_3 + 0x1f >> 5 & 0xf) {
  case 8:
    puVar33 = (undefined8 *)(param_2[-8] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-8] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 7:
    puVar33 = (undefined8 *)(param_2[-7] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-7] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 6:
    puVar33 = (undefined8 *)(param_2[-6] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-6] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 5:
    puVar33 = (undefined8 *)(param_2[-5] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-5] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 4:
    puVar33 = (undefined8 *)(param_2[-4] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-4] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 3:
    puVar33 = (undefined8 *)(param_2[-3] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-3] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 2:
    puVar33 = (undefined8 *)(param_2[-2] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-2] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 1:
    puVar33 = (undefined8 *)(pauVar31[-1] + param_3);
    *puVar33 = uVar39;
    puVar33[1] = uVar40;
    puVar33[2] = uVar14;
    puVar33[3] = uVar15;
  }
switchD_180014076_caseD_0:
  *(undefined8 *)*param_1 = uVar10;
  *(undefined8 *)(*param_1 + 8) = uVar11;
  *(undefined8 *)(*param_1 + 0x10) = uVar12;
  *(undefined8 *)(*param_1 + 0x18) = uVar13;
  return;
}


/* Address: 0x180014490; Evidence: ev_d441e31f7e596999116344a67250ac5374aa26413a7ac704734591d6d1f2f5c9 */

/* Library Function - Single Match
    strlen
   
   Library: Visual Studio */

size_t __cdecl strlen(char *_Str)

{
  ulonglong uVar1;
  ulonglong *puVar2;
  longlong lVar3;
  
  lVar3 = -(longlong)_Str;
  do {
    if (((ulonglong)_Str & 7) == 0) goto LAB_1800144c1;
    uVar1 = *(ulonglong *)_Str;
    _Str = (char *)((longlong)_Str + 1);
  } while ((char)uVar1 != '\0');
LAB_180014508:
  return (size_t)(char *)((longlong)_Str + lVar3 + -1);
LAB_1800144c1:
  do {
    do {
      puVar2 = (ulonglong *)_Str;
      _Str = (char *)(puVar2 + 1);
    } while (((~*puVar2 ^ *puVar2 + 0x7efefefefefefeff) & 0x8101010101010100) == 0);
    uVar1 = *puVar2;
    if ((char)uVar1 == '\0') {
      return (longlong)puVar2 + lVar3;
    }
    if ((char)(uVar1 >> 8) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 1);
    }
    if ((char)(uVar1 >> 0x10) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 2);
    }
    if ((char)(uVar1 >> 0x18) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 3);
    }
    if ((char)(uVar1 >> 0x20) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 4);
    }
    if ((char)(uVar1 >> 0x28) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 5);
    }
    if ((char)(uVar1 >> 0x30) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 6);
    }
  } while ((char)(uVar1 >> 0x38) != '\0');
  goto LAB_180014508;
}


/* Address: 0x180014550; Evidence: ev_3cfa3b32c63b8caaf418e017867ee91fefdecd33d106e91a58e6fdd897dd5f86 */

/* Library Function - Single Match
    strcmp
   
   Libraries: Visual Studio 2012, Visual Studio 2015, Visual Studio 2017, Visual Studio 2019 */

int __cdecl strcmp(char *_Str1,char *_Str2)

{
  byte bVar1;
  ulonglong uVar2;
  longlong lVar3;
  
  lVar3 = (longlong)_Str2 - (longlong)_Str1;
  while( true ) {
    if (((ulonglong)_Str1 & 7) == 0) {
      while ((((int)lVar3 + (int)_Str1 & 0xfffU) < 0xff9 &&
             (uVar2 = *(ulonglong *)_Str1, uVar2 == *(ulonglong *)(lVar3 + (longlong)_Str1)))) {
        _Str1 = (char *)((longlong)_Str1 + 8);
        if ((~uVar2 & uVar2 + 0xfefefefefefefeff & 0x8080808080808080) != 0) {
          return 0;
        }
      }
    }
    bVar1 = (byte)*(ulonglong *)_Str1;
    if (bVar1 != *(byte *)(lVar3 + (longlong)_Str1)) break;
    _Str1 = (char *)((longlong)_Str1 + 1);
    if (bVar1 == 0) {
      return 0;
    }
  }
  return -(uint)(bVar1 < *(byte *)(lVar3 + (longlong)_Str1)) | 1;
}


/* Address: 0x1800145d0; Evidence: ev_4309441edf53042194170cba32ae8dbc462f9f2b710bd2f794255fc1b5720e15 */

/* Library Function - Single Match
    strncmp
   
   Libraries: Visual Studio 2012, Visual Studio 2015, Visual Studio 2017, Visual Studio 2019 */

int __cdecl strncmp(char *_Str1,char *_Str2,size_t _MaxCount)

{
  byte bVar1;
  ulonglong uVar2;
  longlong lVar3;
  bool bVar4;
  
  lVar3 = (longlong)_Str2 - (longlong)_Str1;
  if (_MaxCount != 0) {
    do {
      if (((ulonglong)_Str1 & 7) == 0) {
        while ((((int)lVar3 + (int)_Str1 & 0xfffU) < 0xff9 &&
               (uVar2 = *(ulonglong *)_Str1, uVar2 == *(ulonglong *)(lVar3 + (longlong)_Str1)))) {
          _Str1 = (char *)((longlong)_Str1 + 8);
          bVar4 = _MaxCount < 8;
          _MaxCount = _MaxCount - 8;
          if (bVar4 || _MaxCount == 0) {
            return 0;
          }
          if ((~uVar2 & uVar2 + 0xfefefefefefefeff & 0x8080808080808080) != 0) {
            return 0;
          }
        }
      }
      bVar1 = (byte)*(ulonglong *)_Str1;
      if (bVar1 != *(byte *)(lVar3 + (longlong)_Str1)) {
        return -(uint)(bVar1 < *(byte *)(lVar3 + (longlong)_Str1)) | 1;
      }
      _Str1 = (char *)((longlong)_Str1 + 1);
      _MaxCount = _MaxCount - 1;
    } while ((_MaxCount != 0) && (bVar1 != 0));
  }
  return 0;
}


/* Address: 0x180014660; Evidence: ev_477b3132062b0d9f6b0c9af0198678006b9a8ea83d6ada1c2b278567e30c55de */

void FUN_180014660(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x30) & 1) != 0) {
    *(uint *)(param_2 + 0x30) = *(uint *)(param_2 + 0x30) & 0xfffffffe;
    thunk_FUN_1800035d0(*(longlong **)(param_2 + 0x40));
  }
  return;
}


/* Address: 0x1800146a0; Evidence: ev_e90121e510e4324f4c43397249adac036a73fd4764b1f1eada58285693416f6f */

undefined8 FUN_1800146a0(void)

{
  return 0;
}


/* Address: 0x180014710; Evidence: ev_eff26b7851a2af92143d9448e91e569ad1ce2cc7c0fa60b5c1a34fc3f804d7c8 */

undefined8 FUN_180014710(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x20));
  return 0;
}


/* Address: 0x18001476c; Evidence: ev_5d0192132f68ae7e8dcf894705921bd6d4dbb62e12d6f31256e72221bad78b17 */

undefined8 FUN_18001476c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x50));
  return 0;
}


/* Address: 0x1800147bc; Evidence: ev_c0a920021e55f3f1fa8d73309caa313f4d7ec8b49bb6931d91052f6f39dbe729 */

void FUN_1800147bc(undefined8 param_1,longlong param_2)

{
  thunk_FUN_18000c960(*(LPVOID *)(param_2 + 0xc0));
  return;
}


/* Address: 0x1800147dc; Evidence: ev_9d49f2235692825872d43e4459b29cb11d226b1fbafe5d1aab52d80de7e74eb0 */

undefined8 FUN_1800147dc(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x30));
  return 0;
}


/* Address: 0x18001481c; Evidence: ev_511aa6947ce3520c440bb0e8e54ef2e815a945ee407c42a0ba4c0235f1985c0f */

undefined8 FUN_18001481c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x20));
  return 0;
}


/* Address: 0x18001485c; Evidence: ev_acd8031511dce2f109861c0494cb06c3214e151803a84e412676209d7aa3cfb6 */

undefined8 FUN_18001485c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x20));
  return 0;
}


/* Address: 0x18001489c; Evidence: ev_0f9dd7c0e2dbd514cae782dfaaca0f6e2a5ec81c73b0c47952dd2d49db63dabc */

undefined8 FUN_18001489c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x40));
  return 0;
}


/* Address: 0x1800148dc; Evidence: ev_ce875822db40b94c73ece8d3638588ba560d260441d8cafdb698136c7b4d72c6 */

undefined8 FUN_1800148dc(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x60));
  return 0;
}


/* Address: 0x18001491c; Evidence: ev_3af19b0b843d826523de0fc645b5adad7be37966e7f4ca62c44d5809db2492a2 */

undefined8 FUN_18001491c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x68));
  return 0;
}


/* Address: 0x180014944; Evidence: ev_c2fac2fabf90d94ded6d788924b4fcf196e2846b3dcf4628f4cee9cbfe9e7278 */

void FUN_180014944(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x40));
  return;
}


/* Address: 0x18001495b; Evidence: ev_8ecd9e19e0735ebb052fdfada83ae63c9d51f2addbf938ab9c324c18d92e4f94 */

void FUN_18001495b(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x20));
  return;
}


/* Address: 0x180014974; Evidence: ev_058d378989e2dcab52cbc0f596106e3c5041437a6e3cf6ecb482d20a8999ce41 */

void FUN_180014974(void)

{
  FUN_1800054b4();
  return;
}


/* Address: 0x180014988; Evidence: ev_304a8858ffc0f73a0548ebc2049319a24a48077d33bea8e412720c6108573687 */

void FUN_180014988(undefined8 *param_1,longlong param_2)

{
  __scrt_dllmain_exception_filter
            (*(undefined8 *)(param_2 + 0x60),*(int *)(param_2 + 0x68),
             *(undefined8 *)(param_2 + 0x70),FUN_180004d30,*(int *)*param_1,param_1);
  return;
}


/* Address: 0x1800149be; Evidence: ev_58e7c67b978af8d096008f48e055dadd4997b43c73dee7781060de0f9f78946e */

bool FUN_1800149be(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x1800149d6; Evidence: ev_5285437e79ba47bdf46d2611c1fe0d3fa5bc7aa2f21e29e2d2b99949178928cf */

undefined4 FUN_1800149d6(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180006ed8();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180006ed8();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180006ed8();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_180008b70((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_180006ed8();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x180014a7d; Evidence: ev_9ef5e8e602b83c9337b050c6598b09aaa9c7bc48088ab7b1fca9859e62d89be4 */

undefined4 FUN_180014a7d(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180006ed8();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180006ed8();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180006ed8();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  lVar3 = FUN_180006ed8();
  *(undefined4 *)(lVar3 + 0x78) = *(undefined4 *)(param_2 + 0xa8);
  FUN_18000905c((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(FuncInfo4 **)(param_2 + 0x90),0,0,1);
  lVar3 = FUN_180006ed8();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x180014b32; Evidence: ev_68ce7b11733707e3afac4637881377c13efb7dbf2f1943f8a7fff39337e0266b */

undefined4 FUN_180014b32(undefined8 param_1,longlong param_2)

{
  undefined8 uVar1;
  longlong lVar2;
  
  *(undefined8 *)(param_2 + 0x30) = param_1;
  if ((((*(char *)(param_2 + 0x58) != '\0') &&
       (*(undefined8 *)(param_2 + 0x28) = **(undefined8 **)(param_2 + 0x30),
       **(int **)(param_2 + 0x28) == -0x1f928c9d)) &&
      (*(int *)(*(longlong *)(param_2 + 0x28) + 0x18) == 4)) &&
     (((*(int *)(*(longlong *)(param_2 + 0x28) + 0x20) == 0x19930520 ||
       (*(int *)(*(longlong *)(param_2 + 0x28) + 0x20) == 0x19930521)) ||
      (*(int *)(*(longlong *)(param_2 + 0x28) + 0x20) == 0x19930522)))) {
    lVar2 = FUN_180006ed8();
    *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x28);
    uVar1 = *(undefined8 *)(*(longlong *)(param_2 + 0x30) + 8);
    lVar2 = FUN_180006ed8();
    *(undefined8 *)(lVar2 + 0x28) = uVar1;
                    /* WARNING: Subroutine does not return */
    FUN_18000bd2c();
  }
  *(undefined4 *)(param_2 + 0x20) = 0;
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x180014bc4; Evidence: ev_34fbab94f58c902b33b2eb5132f8d4ce8ff2ef8edd405d7ed92944562373b643 */

void FUN_180014bc4(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  *(undefined4 *)(lVar1 + 0x78) = 0xfffffffe;
  return;
}


/* Address: 0x180014be0; Evidence: ev_656bed1bf0fd2fcb7497c9583b6603d13eaac9e38ab3f606b28ffdb812443e23 */

void FUN_180014be0(undefined8 *param_1,longlong param_2)

{
  FUN_18000982c(param_1,*(longlong *)(param_2 + 0xb8),(undefined4 *)(param_2 + 0x20));
  return;
}


/* Address: 0x180014c01; Evidence: ev_c42188b204f87cb4ce77a4080426ad8ef32f3640116c07d9e1b963afbc33ef71 */

void FUN_180014c01(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_1800066fc(*(longlong *)(param_2 + 0x38));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xb8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_1800069a0(piVar1);
    }
  }
  lVar2 = FUN_180006ed8();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0xc0);
  lVar2 = FUN_180006ed8();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x40);
  return;
}


/* Address: 0x180014c87; Evidence: ev_70a07f17b14615ebaa4cd5096b79c82b0f90d8b9311aac91304a5b3e9a6f5fd2 */

void FUN_180014c87(_EXCEPTION_POINTERS *param_1,longlong param_2)

{
  ExFilterRethrowFH4(param_1,*(EHExceptionRecord **)(param_2 + 0xd8),*(int *)(param_2 + 200),
                     (int *)(param_2 + 0x20));
  return;
}


/* Address: 0x180014caf; Evidence: ev_569f0d0f1edc9dc64f8203172935b02658fa72e33dac2855ef505c9a7c6ce947 */

void FUN_180014caf(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_1800066fc(*(longlong *)(param_2 + 0x40));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xd8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_1800069a0(piVar1);
    }
  }
  lVar2 = FUN_180006ed8();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x30);
  lVar2 = FUN_180006ed8();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x48);
  lVar2 = FUN_180006ed8();
  *(undefined4 *)(lVar2 + 0x78) = *(undefined4 *)(param_2 + 0xc0);
  return;
}


/* Address: 0x180014d40; Evidence: ev_8233cf0033911e232dd68ff52ddab4d690302c0053c4770017f368c1b90b2b70 */

void FUN_180014d40(undefined8 *param_1)

{
  FUN_180006a70(param_1);
  return;
}


/* Address: 0x180014d56; Evidence: ev_9126baa3db99c78066525713bb387baef33e2d9d29c2c739e65d10007e353886 */

void FUN_180014d56(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180006ed8();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180014d79; Evidence: ev_8b2913ff4936f7e716dcba9ea9f072e5e9c3a02b868fa1efe0d8c46c74335a69 */

void FUN_180014d79(undefined8 *param_1)

{
  FUN_180006a70(param_1);
  return;
}


/* Address: 0x180014d8f; Evidence: ev_adf773a710d547beb714f8a221962b9f115275859e8547c5932a6d1572714019 */

void FUN_180014d8f(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180006ed8();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180014dc0; Evidence: ev_5bb9919f64955e6ef95b4140e5cf1d8215f2c5d0fa3a834af4c5c927a30f6d04 */

void FUN_180014dc0(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x180014dd6; Evidence: ev_5edb9cac04d1f68f9198db3aaa65809d5b344032f8311a1ee1a71b7f6182b7c7 */

void FUN_180014dd6(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x180014dec; Evidence: ev_f394e2ac9572cc0213b1818fa47f74685b9fa85efc9760e59d0ef98aeb5d90d9 */

void FUN_180014dec(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x48));
  return;
}


/* Address: 0x180014e06; Evidence: ev_28d61a6f1090f2bfa97c7836e1f73b533db82fa9970d1c59bb49afd849017470 */

undefined4 FUN_180014e06(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x180014e33; Evidence: ev_5259dae94a5aae0d343418087caba741d02b831c70475b2699a5b7543574afb2 */

void FUN_180014e33(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x58));
  return;
}


/* Address: 0x180014e4d; Evidence: ev_fd317130c5d26423a7c924109d6736d7ca0d2e9e2bf6a5d2d6e05a32369c4c0c */

void FUN_180014e4d(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x68));
  return;
}


/* Address: 0x180014e67; Evidence: ev_2c29490e99304c48001a702aa87faaa9c44a142276a9c1bb4bffc1f8c50b5efc */

void FUN_180014e67(void)

{
  __acrt_unlock(5);
  return;
}


/* Address: 0x180014e80; Evidence: ev_9d6c9c0a24e49e54531f93b7faac0d926bcee6816537e0df7d5a534ab4459078 */

void FUN_180014e80(void)

{
  __acrt_unlock(7);
  return;
}


/* Address: 0x180014e99; Evidence: ev_aa7f37f4fc5c11a67714a15a04b28363594f595346dd13651228411d15ecf510 */

void FUN_180014e99(undefined8 param_1,longlong param_2)

{
  if (*(char *)(param_2 + 0x70) != '\0') {
    __acrt_unlock(3);
  }
  return;
}


/* Address: 0x180014eba; Evidence: ev_d92afd182ad5845446eee32eed62d1bfb944dd556258c0db3d7f5d34620ed543 */

void FUN_180014eba(undefined8 param_1,longlong param_2)

{
  FUN_18000f6c8(**(longlong **)(param_2 + 0x48));
  return;
}


/* Address: 0x180014ed5; Evidence: ev_11bb25a92d36c54c02730a7af5c082c3fc27efa96715c78225741533422533a2 */

void FUN_180014ed5(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x98));
  return;
}


/* Address: 0x180014ef2; Evidence: ev_e741b380a936f7fde396b4224a5d53d8d27bb95e40ed88680a129238635401a1 */

void FUN_180014ef2(void)

{
  __acrt_unlock(4);
  return;
}


/* Address: 0x180014f0b; Evidence: ev_64cdc428bff8fc574be281243fb76d659252b83575296fa4fad05289112b7288 */

void FUN_180014f0b(undefined8 param_1,longlong param_2)

{
  FUN_1800115ec(**(uint **)(param_2 + 0x48));
  return;
}


/* Address: 0x180014f25; Evidence: ev_112384058ed5f2a9dac6ff4e69c09b7d38d9fcfc506f625a826d12e320bc43f2 */

void FUN_180014f25(undefined8 param_1,longlong param_2)

{
  FUN_1800115ec(*(uint *)(param_2 + 0x60));
  return;
}


/* Address: 0x180014f3c; Evidence: ev_2a953f09341d8aa18bb1d090ed2c691de37b91387f701431346733970de8ed22 */

void FUN_180014f3c(void)

{
  __acrt_unlock(8);
  return;
}


/* Address: 0x180014f55; Evidence: ev_f25f3e24b5c7b98d0caff78e7ea0551eeeef1ba0e247ba19e77a1b1b36852c58 */

void FUN_180014f55(undefined8 param_1,longlong param_2)

{
  FUN_18000f6c8(*(longlong *)(param_2 + 0x40));
  return;
}


/* Address: 0x180014f70; Evidence: ev_54e7b8c716b646f9207d3a2528cce438da218211506a12ff5fe03516d22c5360 */

bool FUN_180014f70(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}

