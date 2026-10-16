/* REA / Ghidra decompiler-generated pseudocode. Not original source; not compilable. */

/* Address: 0x180001000; Evidence: ev_02a948f4c0e1d506fe4b49262fb75c15045290b452662ab364ce2ae6b56b1b3a */

HMODULE FUN_180001000(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_18000aa80(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
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


/* Address: 0x180001050; Evidence: ev_d68564497a16df62b3196db1e1bd89277f4b248fdbdda72e861bde75ca426a1e */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180006b78((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}


/* Address: 0x180001090; Evidence: ev_222ed4613afb3ab9884e96bff996e348d721cdc037db923c617516891faad97c */

char * FUN_180001090(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x1800010b0; Evidence: ev_7423f450e697d3c2809d5c8f8547897cc32b19945f30262036c486279525eae9 */

undefined8 * FUN_1800010b0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180006bf8(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000cbe0(param_1);
  }
  return param_1;
}


/* Address: 0x180001120; Evidence: ev_b7b6ed46b814ede135f3ad89b0609ce225d3a74f8d71d578fc739ac587a83437 */

undefined8 * FUN_180001120(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x180001150; Evidence: ev_41c811c9112c5a8a56402e412ebbdeaa5f7e152f73f56655e75f955e6833bc49 */

void FUN_180001150(void)

{
  longlong local_28 [5];
  
  FUN_180001120(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_28,&DAT_180020840);
}


/* Address: 0x180001170; Evidence: ev_5cddcf67f027f2d8bb9833dcfdbc04897a1e7b26d78f45c5a9e6f560ec0ce0a2 */

undefined8 * FUN_180001170(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180006b78((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x1800011b0; Evidence: ev_5b969bd1ce22e41dcdbe9d43252ba05c319f1420149d5f29ab21772a0792b775 */

undefined8 * FUN_1800011b0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180006b78((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x1800011f0; Evidence: ev_f282587a55bc3060cab187f4c20ce037f96b001d99b423ecdf10770b1ace7a49 */

void FUN_1800011f0(void)

{
  code *pcVar1;
  
  FUN_180005e40(0x18001dd98);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001210; Evidence: ev_ffad698ddf2c42f27da0d7472e2ecbced53d58a7f6a6a7d6ad709ec859073736 */

undefined8 FUN_180001210(undefined8 *param_1)

{
  return *param_1;
}


/* Address: 0x180001220; Evidence: ev_31625ce3399953bfe366ce62d2e93ccdd9f5eb3e81fe5f9162f2b030f3db5a07 */

void FUN_180001220(undefined8 *param_1)

{
  FUN_180002a80(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180006bf8(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}


/* Address: 0x180001270; Evidence: ev_fec1818d22e78a983233e6a821bef4f8ce985c3dfddf4b34a586b92e848275a3 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180001270(undefined8 *param_1)

{
  int iVar1;
  ulonglong uVar2;
  undefined1 auStack_98 [32];
  uint local_78 [4];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_98;
  if (param_1[1] == 0) {
    uVar2 = 0;
  }
  else {
    iVar1 = napi_typeof(*param_1,param_1[1],local_78);
    if (iVar1 != 0) {
      FUN_1800014c0(local_68,*param_1);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
    uVar2 = (ulonglong)local_78[0];
  }
  return CONCAT71((int7)(uVar2 >> 8),(int)uVar2 == 4);
}


/* Address: 0x1800012f0; Evidence: ev_6a67bd032b23ec2e893bee9e370a5c8adcb676d70557973b2a474ec8b2bd6252 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32] FUN_1800012f0(undefined8 *param_1,undefined1 (*param_2) [32])

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
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_c8;
  local_98 = 0;
  local_a8 = &local_90;
  uVar8 = 0;
  local_88 = param_2;
  iVar3 = napi_get_value_string_utf8(*param_1,param_1[1],0,0);
  if (iVar3 != 0) {
    FUN_1800014c0(local_78,*param_1);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
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
    puVar5 = FUN_180002cd0(uVar7 + 1);
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
    FUN_180002b80(param_2,local_90,uVar8,local_90);
  }
  else {
    *(ulonglong *)(*param_2 + 0x10) = local_90;
    pauVar6 = param_2;
    if (0xf < *(ulonglong *)(*param_2 + 0x18)) {
      pauVar6 = *(undefined1 (**) [32])*param_2;
    }
    FUN_180013cb0(pauVar6,0,local_90);
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
  FUN_1800014c0(local_78,*param_1);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_78,&DAT_180020780);
}


/* Address: 0x1800014c0; Evidence: ev_7db841e5536873dc902172bdf0df2137681e1de8f98393a573194310d507a59e */

undefined8 * FUN_1800014c0(undefined8 *param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  longlong lVar3;
  char local_res18 [8];
  longlong local_res20;
  char *local_a8;
  longlong lStack_a0;
  longlong *local_98 [2];
  char *local_88;
  undefined8 local_80;
  undefined8 local_78;
  undefined8 local_70;
  undefined8 local_68;
  longlong local_60;
  undefined4 local_58;
  undefined8 local_50;
  undefined8 local_38;
  
  local_res20 = 0;
  iVar1 = napi_get_last_error_info(param_2,local_98);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("Error::New","napi_get_last_error_info");
  }
  local_a8 = (char *)*local_98[0];
  lStack_a0 = local_98[0][1];
  local_38 = local_98[0][2];
  iVar1 = napi_is_exception_pending(param_2,local_res18);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("Error::New","napi_is_exception_pending");
  }
  if (local_res18[0] == '\0') {
    lVar3 = -1;
    pcVar2 = "Error in native callback";
    if (local_a8 != (char *)0x0) {
      pcVar2 = local_a8;
    }
    do {
      lVar3 = lVar3 + 1;
    } while (pcVar2[lVar3] != '\0');
    iVar1 = napi_create_string_utf8(param_2,pcVar2,lVar3,&local_a8);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001840("Error::New","napi_create_string_utf8");
    }
    if ((((local_38._4_4_ == 2) || (local_38._4_4_ == 3)) || (local_38._4_4_ == 6)) ||
       (local_38._4_4_ == 7)) {
      iVar1 = napi_create_type_error(param_2,0,local_a8,&local_res20);
    }
    else {
      iVar1 = napi_create_error(param_2,0,local_a8,&local_res20);
    }
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001840("Error::New","napi_create_error");
    }
  }
  else {
    iVar1 = napi_get_and_clear_last_exception(param_2,&local_res20);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001840("Error::New","napi_get_and_clear_last_exception");
    }
  }
  lVar3 = local_res20;
  param_1[3] = param_2;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001dfd0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  if ((local_res20 != 0) &&
     (iVar1 = napi_create_reference(param_2,local_res20,1,param_1 + 4), iVar1 != 0)) {
    iVar1 = napi_create_object(param_2,&local_a8);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001840("Error::Error","napi_create_object");
    }
    local_88 = "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
    local_80 = 0;
    local_78 = 0;
    local_70 = 0;
    local_68 = 0;
    local_60 = lVar3;
    local_58 = 2;
    local_50 = 0;
    iVar1 = napi_define_properties(param_2,local_a8,1,&local_88);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001840("Error::Error","napi_define_properties");
    }
    iVar1 = napi_create_reference(param_2,local_a8,1,param_1 + 4);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001840("Error::Error","napi_create_reference");
    }
  }
  return param_1;
}


/* Address: 0x180001760; Evidence: ev_26a341d800f163227a741a0d18e851551e1bdb3e687ac0b8f6cc717fc1131cf8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001760(undefined8 *param_1,undefined8 param_2,longlong param_3)

{
  int iVar1;
  longlong lVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88 [3];
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_a8;
  lVar2 = -1;
  do {
    lVar2 = lVar2 + 1;
  } while (*(char *)(param_3 + lVar2) != '\0');
  local_88[0] = param_1;
  iVar1 = napi_create_string_utf8(param_2,param_3,lVar2,&local_70);
  if (iVar1 == 0) {
    iVar1 = napi_create_error(param_2,0,local_70,local_88);
    if (iVar1 == 0) {
      FUN_1800018d0(param_1,param_2,(longlong)local_88[0]);
      return param_1;
    }
    FUN_1800014c0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  FUN_1800014c0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_68,&DAT_180020780);
}


/* Address: 0x180001840; Evidence: ev_f074d2875895e66170189bf900a1e02d8957f1a6aad500f4838b310fd747b063 */

void FUN_180001840(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  
  napi_fatal_error(param_1,0xffffffffffffffff,param_2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001860; Evidence: ev_9f19b3a46bb888a85436af5d74bcfabc7372bd4d5ee59848edbcf03d35307abc */

undefined8 * FUN_180001860(undefined8 *param_1,uint param_2)

{
  FUN_180002a80(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180006bf8(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000cbe0(param_1);
  }
  return param_1;
}


/* Address: 0x1800018d0; Evidence: ev_da55fb572e9fc969837b30bb9ffd00be0cc72b697ccc821addbc644605a29b3e */

undefined8 * FUN_1800018d0(undefined8 *param_1,undefined8 param_2,longlong param_3)

{
  int iVar1;
  undefined8 local_res8;
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
  *param_1 = &PTR_FUN_18001dfd0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  if (param_3 != 0) {
    iVar1 = napi_create_reference(param_2,param_3,1,param_1 + 4);
    if (iVar1 != 0) {
      iVar1 = napi_create_object(param_2,&local_res8);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001840("Error::Error","napi_create_object");
      }
      local_58 = "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
      local_50 = 0;
      local_48 = 0;
      local_40 = 0;
      local_38 = 0;
      local_28 = 2;
      local_20 = 0;
      local_30 = param_3;
      iVar1 = napi_define_properties(param_2,local_res8,1,&local_58);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001840("Error::Error","napi_define_properties");
      }
      iVar1 = napi_create_reference(param_2,local_res8,1,param_1 + 4);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001840("Error::Error","napi_create_reference");
      }
    }
  }
  return param_1;
}


/* Address: 0x180001a30; Evidence: ev_154b9c91f4f0cc3db6b6aef932c92f8c893baea262af6768f69717433cc2592c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001a30(longlong param_1,undefined8 *param_2)

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
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_c8;
  if (*(longlong *)(param_1 + 0x20) == 0) {
    *param_2 = *(undefined8 *)(param_1 + 0x18);
    param_2[1] = 0;
    return param_2;
  }
  iVar2 = napi_get_reference_value
                    (*(undefined8 *)(param_1 + 0x18),*(longlong *)(param_1 + 0x20),&local_a0);
  if (iVar2 != 0) {
    FUN_1800014c0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  iVar2 = napi_typeof(*(undefined8 *)(param_1 + 0x18),local_a0,local_98);
  if (iVar2 != 0) {
    FUN_1800014c0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  if (local_98[0] != 5) {
    uVar1 = *(undefined8 *)(param_1 + 0x18);
    local_a8[0] = '\0';
    iVar2 = napi_create_string_utf8
                      (uVar1,"4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal",0x2d,&local_90);
    if (iVar2 != 0) {
      FUN_1800014c0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_78,&DAT_180020780);
    }
    napi_has_property(*(undefined8 *)(param_1 + 0x18),local_a0,local_90,local_a8);
    if (local_a8[0] != '\0') {
      uVar1 = *(undefined8 *)(param_1 + 0x18);
      iVar2 = napi_create_string_utf8
                        (uVar1,"4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal",0x2d,&local_90);
      if (iVar2 != 0) {
        FUN_1800014c0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_180006f84(local_78,&DAT_180020780);
      }
      iVar2 = napi_get_property(*(undefined8 *)(param_1 + 0x18),local_a0,local_90,local_88);
      if (iVar2 != 0) {
        FUN_1800014c0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
        FUN_180006f84(local_78,&DAT_180020780);
      }
      *param_2 = *(undefined8 *)(param_1 + 0x18);
      goto LAB_180001b4c;
    }
  }
  *param_2 = *(undefined8 *)(param_1 + 0x18);
  local_88[0] = local_a0;
LAB_180001b4c:
  param_2[1] = local_88[0];
  return param_2;
}


/* Address: 0x180001c10; Evidence: ev_f7116aec9691c82cffb0f31cd174ff84995754fdeef6c769414972e042965832 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001c10(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_a8;
  local_80 = *(undefined8 *)(param_2 + 0x18);
  param_1[3] = local_80;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  local_88 = param_1;
  iVar1 = napi_open_handle_scope(local_80,local_78);
  if (iVar1 != 0) {
    FUN_1800014c0(local_68,local_80);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  puVar2 = (undefined8 *)0x0;
  if ((*(longlong *)(param_2 + 0x20) != 0) &&
     (iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_2 + 0x18),*(longlong *)(param_2 + 0x20),&local_88),
     puVar2 = local_88, iVar1 != 0)) {
    FUN_1800014c0(local_68,*(undefined8 *)(param_2 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(param_1[3],puVar2,1,param_1 + 4), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_80,local_78[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001dfd0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  return param_1;
}


/* Address: 0x180001d80; Evidence: ev_91e2e959e33f6a3a022b9ee9fec2372ec3a4849b6f033b68594f9400d7b83303 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180001d80(longlong param_1)

{
  longlong *plVar1;
  undefined8 *puVar2;
  undefined1 auStack_78 [32];
  longlong *local_58;
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40 [2];
  longlong local_30 [4];
  ulonglong local_10;
  
  local_10 = DAT_180022000 ^ (ulonglong)auStack_78;
  plVar1 = (longlong *)(param_1 + 0x30);
  if ((*(longlong *)(param_1 + 0x40) == 0) && (*(longlong *)(param_1 + 0x18) != 0)) {
    local_58 = plVar1;
    puVar2 = FUN_180002070((longlong *)(param_1 + 0x18),local_40);
    local_50 = *puVar2;
    local_48 = puVar2[1];
    FUN_1800012f0(&local_50,(undefined1 (*) [32])local_30);
    FUN_1800029b0(plVar1,local_30);
    FUN_180002a80(local_30);
  }
  return plVar1;
}


/* Address: 0x180001e30; Evidence: ev_8c0d5beb5bee41bf2737ae6dee68733f6f187a35c1a31cca3f060c4b815613dd */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180001e30(longlong param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_a8;
  local_88 = *(undefined8 *)(param_1 + 0x18);
  iVar1 = napi_open_handle_scope(local_88,&local_80);
  if (iVar1 != 0) {
    FUN_1800014c0(local_68,local_88);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  if (*(longlong *)(param_1 + 0x20) != 0) {
    puVar2 = FUN_180001a30(param_1,local_78);
    iVar1 = napi_throw(*(undefined8 *)(param_1 + 0x18),puVar2[1]);
    if (iVar1 != 0) {
      FUN_1800014c0(local_68,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
  }
  iVar1 = napi_close_handle_scope(local_88,local_80);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x180001f10; Evidence: ev_b9fd494f5dccd7761d6708acfdc6bd1a8c7dfaa4091faf50c1b473138a6f8117 */

longlong * FUN_180001f10(longlong param_1)

{
  longlong *plVar1;
  
  plVar1 = FUN_180001d80(param_1);
  if (0xf < (ulonglong)plVar1[3]) {
    plVar1 = (longlong *)*plVar1;
  }
  return plVar1;
}


/* Address: 0x180001f30; Evidence: ev_8dfda14a41135ab3337efead0b79ec3785a8dd7460c0dc464c6026e947ac8b61 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001f30(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_b8 [32];
  undefined8 *local_98;
  undefined8 local_90;
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_b8;
  local_90 = *param_2;
  *param_1 = local_90;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  local_98 = param_1;
  iVar1 = napi_open_handle_scope(local_90,local_88);
  if (iVar1 != 0) {
    FUN_1800014c0(local_78,local_90);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  puVar2 = (undefined8 *)0x0;
  if ((param_2[1] != 0) &&
     (iVar1 = napi_get_reference_value(*param_2,param_2[1],&local_98), puVar2 = local_98, iVar1 != 0
     )) {
    FUN_1800014c0(local_78,*param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(*param_1,puVar2,1,param_1 + 1), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_90,local_88[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  return param_1;
}


/* Address: 0x180002070; Evidence: ev_a880fcc1b744b021288d82b82f29acf6e030531bcf959b2ef7d983263f2f59f2 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002070(undefined8 *param_1,undefined8 *param_2)

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
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_c8;
  local_98 = *param_1;
  iVar1 = napi_open_escapable_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014c0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  uVar2 = *param_1;
  uVar3 = 0;
  if (param_1[1] != 0) {
    iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_a0);
    uVar2 = *param_1;
    uVar3 = local_a0;
    if (iVar1 != 0) {
      FUN_1800014c0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_78,&DAT_180020780);
    }
  }
  iVar1 = napi_get_named_property(uVar2,uVar3,"message",&local_a0);
  if (iVar1 != 0) {
    FUN_1800014c0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
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
        FUN_1800014c0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_180006f84(local_78,&DAT_180020780);
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
      FUN_1800014c0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_78,&DAT_180020780);
    }
    *param_2 = local_98;
    param_2[1] = local_88;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  if (iVar1 == 0) {
    return param_2;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


/* Address: 0x180002260; Evidence: ev_1ea292ea3f5831e59428cdaf634566a500f9d39add41c63490f36bc8bb4d5887 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong * FUN_180002260(ulonglong *param_1,ulonglong param_2,ulonglong param_3)

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
  
  local_38 = DAT_180022000 ^ (ulonglong)auStack_b8;
  param_1[1] = param_2;
  param_1[2] = param_3;
  local_90 = param_1 + 0xd;
  *param_1 = 6;
  local_98 = param_1 + 3;
  param_1[0xc] = 0;
  *local_90 = 0;
  *local_98 = 0;
  param_1[4] = 6;
  param_1[5] = (ulonglong)(param_1 + 6);
  iVar2 = napi_get_cb_info(param_2,param_3,param_1 + 4);
  if (iVar2 != 0) {
    FUN_1800014c0(local_88,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_88,&DAT_180020780);
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
      FUN_1800014c0(local_88,param_1[1]);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_88,&DAT_180020780);
    }
  }
  return param_1;
}


/* Address: 0x1800023a0; Evidence: ev_94235ef21dff082e9fde23354b2759997ac3336d15d0d6328dc9a29378a32c81 */

undefined8 * FUN_1800023a0(longlong param_1,undefined8 *param_2)

{
  *param_2 = *(undefined8 *)(param_1 + 8);
  return param_2;
}


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


/* Address: 0x180002480; Evidence: ev_81df02a6d4a60020c7cf511af8d06ee2e7ed8678de37d0a01f7dd57f00853237 */

void FUN_180002480(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x1800024b0; Evidence: ev_954f44e6601fb9d2ef3d64e8c7146655a6a9dbb8c95b9242b04fa0367405e49c */

void FUN_1800024b0(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_escapable_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


/* Address: 0x1800024e0; Evidence: ev_7a84c7c19e0c48b8add8b257bf9d6f252f190bbbb5517cc30a40188772ea21e6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800024e0(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  HANDLE hObject;
  undefined8 uVar4;
  LPCSTR **lpName;
  undefined1 auStack_c8 [32];
  undefined8 local_a8;
  undefined8 local_a0;
  undefined8 local_98 [2];
  LPCSTR *local_88 [3];
  ulonglong local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_c8;
  uVar4 = *(undefined8 *)(param_2 + 8);
  local_a8 = uVar4;
  puVar2 = FUN_1800023b0(param_2,local_98);
  uVar3 = FUN_180001270(puVar2);
  if ((char)uVar3 == '\0') {
    uVar4 = FUN_180001210(&local_a8);
    FUN_180001760(local_68,uVar4,0x18001df90);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  puVar2 = FUN_1800023b0(param_2,local_98);
  local_a8 = *puVar2;
  local_a0 = puVar2[1];
  FUN_1800012f0(&local_a8,(undefined1 (*) [32])local_88);
  lpName = local_88;
  if (0xf < local_70) {
    lpName = (LPCSTR **)local_88[0];
  }
  hObject = OpenMutexA(0x100000,0,(LPCSTR)lpName);
  if (hObject != (HANDLE)0x0) {
    CloseHandle(hObject);
  }
  iVar1 = napi_get_boolean(uVar4,hObject != (HANDLE)0x0,&local_a8);
  if (iVar1 == 0) {
    *param_1 = uVar4;
    param_1[1] = local_a8;
    FUN_180002a80((longlong *)local_88);
    return param_1;
  }
  FUN_1800014c0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_68,&DAT_180020780);
}


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


/* Address: 0x1800027a0; Evidence: ev_91a6c8cfb2df72631c4d143d6ec72e9512bad7fe180ca82f3a5455223eed16e1 */

undefined8 node_api_module_get_api_version_v1(void)

{
                    /* 0x27a0  2  node_api_module_get_api_version_v1 */
  return 8;
}


/* Address: 0x1800027b0; Evidence: ev_ea131698d5259076f164b49231da87fc72b8020b1786180e47db25c0c20ffae5 */

void napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  code *local_res8;
  undefined8 local_res10;
  undefined8 local_res18 [2];
  code **local_28;
  undefined8 *local_20;
  undefined8 *local_18;
  
                    /* 0x27b0  1  napi_register_module_v1 */
  local_res8 = FUN_180002640;
  local_28 = &local_res8;
  local_20 = &local_res10;
  local_18 = local_res18;
  local_res10 = param_1;
  local_res18[0] = param_2;
  FUN_1800027f0(&local_28);
  return;
}


/* Address: 0x1800027f0; Evidence: ev_386725a064c16abbc3d3a3f6791c6c092ce666fa0761c4098e74636784f163f4 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800027f0(undefined8 *param_1)

{
  longlong lVar1;
  undefined8 local_28;
  undefined8 local_20;
  undefined1 local_18 [24];
  
  local_28 = *(undefined8 *)param_1[1];
  local_20 = *(undefined8 *)param_1[2];
  lVar1 = (**(code **)*param_1)(local_18,local_28,&local_28);
  return *(undefined8 *)(lVar1 + 8);
}


/* Address: 0x180002830; Evidence: ev_e4b010f926ba98cd3ecb42845ba62494b5e97995dc99db8cc62792a1964edf00 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002830(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  longlong lVar2;
  undefined1 auStack_b8 [32];
  undefined8 local_98;
  undefined8 local_90;
  longlong local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_b8;
  local_98 = *param_2;
  *param_1 = local_98;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  iVar1 = napi_open_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014c0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  lVar2 = 0;
  if ((param_2[1] != 0) &&
     (iVar1 = napi_get_reference_value(*param_2,param_2[1],local_88), lVar2 = local_88[0],
     iVar1 != 0)) {
    FUN_1800014c0(local_78,*param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  if ((lVar2 != 0) && (iVar1 = napi_create_reference(*param_1,lVar2,1,param_1 + 1), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_98,local_90);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  return param_1;
}


/* Address: 0x180002970; Evidence: ev_ffa52534d412784118ed14ffe2be46b184b04c256f7b48195c37a37857703ac7 */

void FUN_180002970(undefined8 *param_1)

{
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}


/* Address: 0x1800029a0; Evidence: ev_2af5b11c7309a20f664e348ecc3e5aff5e3eebd0087760b431faaea14b3ac4ad */

void thunk_FUN_180002a80(longlong *param_1)

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
    thunk_FUN_18000cbe0(pvVar2);
  }
  param_1[2] = 0;
  param_1[3] = 0xf;
  *(undefined1 *)param_1 = 0;
  return;
}


/* Address: 0x1800029b0; Evidence: ev_6f86184100e189da1e85513dba165b4096cad0ce50772d16c578b2aebd0e81ae */

longlong * FUN_1800029b0(longlong *param_1,longlong *param_2)

{
  LPVOID pvVar1;
  longlong lVar2;
  LPVOID pvVar3;
  
  if (param_1 != param_2) {
    if (0xf < (ulonglong)param_1[3]) {
      pvVar1 = (LPVOID)*param_1;
      pvVar3 = pvVar1;
      if ((0xfff < param_1[3] + 1U) &&
         (pvVar3 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar3)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_18000cbe0(pvVar3);
    }
    param_1[3] = 0xf;
    param_1[2] = 0;
    *(undefined1 *)param_1 = 0;
    lVar2 = param_2[1];
    *param_1 = *param_2;
    param_1[1] = lVar2;
    lVar2 = param_2[3];
    param_1[2] = param_2[2];
    param_1[3] = lVar2;
    *(undefined1 *)param_2 = 0;
    param_2[2] = 0;
    param_2[3] = 0xf;
  }
  return param_1;
}


/* Address: 0x180002a50; Evidence: ev_9b546075d58b30130ecaafc7849bd784cf981323a645327841a29223e9b2b517 */

void FUN_180002a50(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180002b10(&local_18);
  return;
}


/* Address: 0x180002a80; Evidence: ev_b638bb51cc262dbea6205bdddaae345092659b874b27f8887577b5c11f90de6e */

void FUN_180002a80(longlong *param_1)

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
    thunk_FUN_18000cbe0(pvVar2);
  }
  param_1[2] = 0;
  param_1[3] = 0xf;
  *(undefined1 *)param_1 = 0;
  return;
}


/* Address: 0x180002b00; Evidence: ev_b11d7221c734d9bcf976fe49b89d12e29eadb494715f4415a9ed29a72824400f */

void FUN_180002b00(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000cbe0(param_2);
  return;
}


/* Address: 0x180002b10; Evidence: ev_5c8ab0958cbdfcb357e2a03ed6c43a983e2559205b697d33f44ed015a594692d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180002b10(undefined8 *param_1)

{
  code *pcVar1;
  undefined1 local_90 [8];
  undefined8 local_88;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_180002260(local_78,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_90,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_18);
  }
  return local_88;
}


/* Address: 0x180002b80; Evidence: ev_867d6c7357f1a417a2a6787a1ce23bac147d054c950a0aec398710abc462ae5b */

undefined1 (*) [32]
FUN_180002b80(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,ulonglong param_4)

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
  pauVar6 = FUN_180002cd0(uVar9 + 1);
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + param_2;
  *(ulonglong *)(*param_1 + 0x18) = uVar9;
  pauVar7 = (undefined1 (*) [32])(*pauVar6 + uVar2);
  if (uVar3 < 0x10) {
    FUN_180014070(pauVar6,param_1,uVar2);
    FUN_180013cb0(pauVar7,0,param_4);
    (*pauVar7)[param_4] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_180014070(pauVar6,pauVar4,uVar2);
    FUN_180013cb0(pauVar7,0,param_4);
    (*pauVar7)[param_4] = 0;
    pauVar7 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar7 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000cbe0(pauVar7);
  }
  *(undefined1 (**) [32])*param_1 = pauVar6;
  return param_1;
}


/* Address: 0x180002cd0; Evidence: ev_0e86dcac75a98591a16616e1b4d55508d457dcc68ba2d69f5eef77209ff35f9b */

void * FUN_180002cd0(__uint64 param_1)

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


/* Address: 0x180002d50; Evidence: ev_193a5f3429cdc6dc37a8823021319bd90e3f228b3323dd238cbc269297dd9c60 */

undefined8 * FUN_180002d50(undefined8 *param_1,undefined8 *param_2)

{
  *param_2 = *param_1;
  return param_2;
}


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


/* Address: 0x180002e40; Evidence: ev_973b5dc29339b968589856d99a6a17297e3490735075f39cb5382c0118dd19fa */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002e40(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  undefined1 auStackY_168 [32];
  undefined8 *local_138;
  undefined8 local_130;
  longlong local_128;
  undefined8 local_120;
  undefined8 *local_118;
  undefined1 local_110;
  char *local_108;
  undefined8 uStack_100;
  code *local_f8;
  undefined8 uStack_f0;
  undefined8 local_e8;
  undefined8 uStack_e0;
  undefined8 local_d8;
  undefined8 uStack_d0;
  char *local_c8;
  undefined8 uStack_c0;
  code *local_b8;
  undefined8 uStack_b0;
  undefined8 local_a8;
  undefined8 uStack_a0;
  undefined8 local_98;
  undefined8 uStack_90;
  char *local_88;
  undefined8 uStack_80;
  code *local_78;
  undefined8 uStack_70;
  undefined8 local_58;
  undefined8 uStack_50;
  ulonglong local_38;
  
  local_38 = DAT_180022000 ^ (ulonglong)auStackY_168;
  puVar4 = param_3;
  puVar3 = operator_new(0x18);
  *puVar3 = 0;
  puVar3[1] = 0;
  *(undefined1 *)(puVar3 + 2) = 0;
  local_108 = "release";
  uStack_100 = 0;
  local_f8 = FUN_1800035a0;
  uStack_f0 = 0;
  local_e8 = 0;
  uStack_e0 = 0;
  local_d8 = 0;
  uStack_d0 = 0;
  uStack_80 = 0;
  uStack_70 = 0;
  local_58 = 0;
  local_88 = "isActive";
  local_78 = FUN_1800035d0;
  uStack_50 = 0;
  local_c8 = "isActive";
  uStack_c0 = 0;
  local_b8 = FUN_1800035d0;
  uStack_b0 = 0;
  local_a8 = 0;
  uStack_a0 = 0;
  local_98 = 0;
  uStack_90 = 0;
  local_138 = puVar3;
  FUN_180003600(&local_130,param_2,puVar4,2,(longlong)&local_108);
  puVar4 = (undefined8 *)0x0;
  if ((local_128 != 0) &&
     (iVar2 = napi_create_reference(local_130,local_128,1,&local_138), puVar4 = local_138,
     iVar2 != 0)) {
    FUN_1800014c0(&local_88,local_130);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84((longlong *)&local_88,&DAT_180020780);
  }
  local_120 = local_130;
  local_110 = 0;
  local_118 = puVar4;
  if ((puVar3[1] != 0) && (iVar2 = napi_delete_reference(*puVar3), iVar2 != 0)) {
    FUN_1800014c0(&local_88,*puVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84((longlong *)&local_88,&DAT_180020780);
  }
  *puVar3 = local_130;
  puVar3[1] = puVar4;
  *(undefined1 *)(puVar3 + 2) = 0;
  uVar1 = *param_3;
  iVar2 = napi_set_named_property(uVar1,param_3[1],"Mutex",local_128);
  if (iVar2 != 0) {
    FUN_1800014c0(&local_88,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84((longlong *)&local_88,&DAT_180020780);
  }
  iVar2 = napi_set_instance_data(param_2,puVar3,FUN_180003450,0);
  if (iVar2 != 0) {
    FUN_1800014c0(&local_88,param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84((longlong *)&local_88,&DAT_180020780);
  }
  uVar1 = param_3[1];
  *param_1 = *param_3;
  param_1[1] = uVar1;
  return param_1;
}


/* Address: 0x180003090; Evidence: ev_1e1b076137e2861f755c5bf39d557f893dc304a9947269e95a6ef9ad74568b03 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180003090(undefined8 *param_1,longlong param_2)

{
  longlong lVar1;
  LPVOID pvVar2;
  int iVar3;
  DWORD DVar4;
  undefined8 *puVar5;
  undefined8 uVar6;
  HANDLE pvVar7;
  LPVOID pvVar8;
  longlong lVar9;
  longlong *lpName;
  undefined1 auStackY_118 [32];
  longlong local_e8;
  undefined8 local_e0;
  undefined8 local_d8;
  longlong local_d0;
  undefined8 local_c8;
  undefined1 local_c0;
  undefined8 *local_b8;
  longlong local_b0 [2];
  undefined8 local_a0;
  undefined8 uStack_98;
  longlong local_88 [10];
  ulonglong local_38;
  
  local_38 = DAT_180022000 ^ (ulonglong)auStackY_118;
  param_1[1] = 0;
  param_1[2] = 0;
  *(undefined1 *)(param_1 + 3) = 0;
  *param_1 = &PTR_FUN_18001e0a8;
  *(undefined1 *)(param_1 + 4) = 1;
  lVar1 = *(longlong *)(param_2 + 8);
  lVar9 = *(longlong *)(param_2 + 0x18);
  local_b8 = param_1;
  if ((*(longlong *)(param_2 + 0x18) == 0) &&
     (local_e8 = lVar1, iVar3 = napi_get_undefined(lVar1,&local_d0), lVar9 = local_d0, iVar3 != 0))
  {
    uVar6 = FUN_180001210(&local_e8);
    FUN_1800014c0(local_88,uVar6);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_88,&DAT_180020780);
  }
  iVar3 = napi_wrap(lVar1,lVar9);
  if (iVar3 != 0) {
    FUN_1800014c0(local_88,lVar1);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_88,&DAT_180020780);
  }
  local_c8 = local_e0;
  local_c0 = 0;
  local_d0 = lVar1;
  if ((param_1[2] != 0) && (iVar3 = napi_delete_reference(param_1[1]), iVar3 != 0)) {
    FUN_1800014c0(local_88,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_88,&DAT_180020780);
  }
  param_1[1] = lVar1;
  param_1[2] = local_e0;
  *(undefined1 *)(param_1 + 3) = 0;
  *param_1 = &PTR_FUN_18001e0b8;
  lpName = param_1 + 5;
  *lpName = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0xf;
  *(undefined1 *)lpName = 0;
  param_1[9] = 0;
  local_e8 = *(longlong *)(param_2 + 8);
  puVar5 = FUN_1800023b0(param_2,&local_e0);
  uVar6 = FUN_180001270(puVar5);
  if ((char)uVar6 == '\0') {
    uVar6 = FUN_180001210(&local_e8);
    FUN_180001760(local_88,uVar6,0x18001df90);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_88,&DAT_180020780);
  }
  puVar5 = FUN_1800023b0(param_2,&local_d0);
  local_e0 = *puVar5;
  local_d8 = puVar5[1];
  FUN_1800012f0(&local_e0,(undefined1 (*) [32])local_b0);
  if (lpName != local_b0) {
    if (0xf < (ulonglong)param_1[8]) {
      pvVar2 = (LPVOID)*lpName;
      pvVar8 = pvVar2;
      if ((0xfff < param_1[8] + 1) &&
         (pvVar8 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar8)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_18000cbe0(pvVar8);
    }
    *lpName = CONCAT71(local_b0[0]._1_7_,(undefined1)local_b0[0]);
    param_1[6] = local_b0[1];
    param_1[7] = local_a0;
    param_1[8] = uStack_98;
    local_a0 = 0;
    uStack_98 = 0xf;
    local_b0[0]._0_1_ = 0;
  }
  FUN_180002a80(local_b0);
  if (0xf < (ulonglong)param_1[8]) {
    lpName = (longlong *)*lpName;
  }
  pvVar7 = CreateMutexA((LPSECURITY_ATTRIBUTES)0x0,1,(LPCSTR)lpName);
  param_1[9] = pvVar7;
  DVar4 = GetLastError();
  if ((HANDLE)param_1[9] != (HANDLE)0x0) {
    if (DVar4 == 0xb7) {
      CloseHandle((HANDLE)param_1[9]);
      param_1[9] = 0;
      uVar6 = FUN_180001210(&local_e8);
      FUN_180001760(local_88,uVar6,0x18001e040);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_88,&DAT_180020780);
    }
    return param_1;
  }
  uVar6 = FUN_180001210(&local_e8);
  if (DVar4 == 6) {
    FUN_180001760(local_88,uVar6,0x18001dff0);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_88,&DAT_180020780);
  }
  FUN_180001760(local_88,uVar6,0x18001e028);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_88,&DAT_180020780);
}


/* Address: 0x1800033f0; Evidence: ev_5f3580863fdc73cacb05ed187f8141922764d536f55753a310d82a938b341bc6 */

undefined8 * FUN_1800033f0(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = &PTR_FUN_18001e0b8;
  if ((HANDLE)param_1[9] != (HANDLE)0x0) {
    CloseHandle((HANDLE)param_1[9]);
  }
  FUN_180002a80(param_1 + 5);
  FUN_180003490(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000cbe0(param_1);
  }
  return param_1;
}


/* Address: 0x180003450; Evidence: ev_e417c5a97012215cbe8645f9771cec3d642095ba925a125c9fbbb3a40bca5a4a */

void FUN_180003450(undefined8 param_1,undefined8 *param_2)

{
  if (param_2 != (undefined8 *)0x0) {
    if (param_2[1] != 0) {
      if (*(char *)(param_2 + 2) == '\0') {
        napi_delete_reference(*param_2);
      }
      param_2[1] = 0;
    }
    thunk_FUN_18000cbe0(param_2);
  }
  return;
}


/* Address: 0x180003490; Evidence: ev_a0b20c696e531555b12213356ebaf29da455b6157865f918660959d8c4baabff */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003490(undefined8 *param_1)

{
  int iVar1;
  undefined1 auStack_98 [32];
  longlong local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_98;
  *param_1 = &PTR_FUN_18001e0a8;
  if (param_1[2] != 0) {
    iVar1 = napi_get_reference_value(param_1[1],param_1[2],local_78);
    if (iVar1 != 0) {
      FUN_1800014c0(local_68,param_1[1]);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
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


/* Address: 0x180003550; Evidence: ev_123ca4df70a4406d18efdbfa239fe6d311f83a6410ba4b616a5a5ae544877d46 */

void _guard_check_icall(void)

{
  return;
}


/* Address: 0x180003560; Evidence: ev_9518a1527f9d539e03182ea66e3da22a5a9bef4f6a88db3294fe08f38c58a24c */

undefined8 * FUN_180003560(undefined8 *param_1,uint param_2)

{
  FUN_180003490(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000cbe0(param_1);
  }
  return param_1;
}


/* Address: 0x1800035a0; Evidence: ev_1930dc2b1df52afa7f395b7d74c5ff28d54b006332fcf945f3a00ce68989bd10 */

void FUN_1800035a0(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180003bc0(&local_18);
  return;
}


/* Address: 0x1800035d0; Evidence: ev_921141d56de9e05684dd5174fb3a1ad873ab1108a0f8b60078466cb356e3a70c */

void FUN_1800035d0(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180003d00(&local_18);
  return;
}


/* Address: 0x180003600; Evidence: ev_b588225d3b1a7767af4d5b15fb469e798e6f2dbf531bef5dacee42a4c70eeb9b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_180003600(undefined8 *param_1,undefined8 param_2,undefined8 param_3,ulonglong param_4,
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
  
  local_48 = DAT_180022000 ^ (ulonglong)auStackY_108;
  pauStack_a8 = (undefined1 (*) [32])0x0;
  local_res10 = param_2;
  if (param_4 == 0) {
    pauVar19 = (undefined1 (*) [32])0x0;
  }
  else {
    if (0x3ffffffffffffff < param_4) {
      FUN_180004cc0();
      goto LAB_180003a8f;
    }
    pauVar19 = FUN_180002cd0(param_4 * 0x40);
    pauStack_a8 = pauVar19 + param_4 * 2;
    FUN_180013cb0(pauVar19,0,param_4 << 6);
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
      if ((code *)puVar23[-3] == FUN_180002a50) {
        uVar21 = puVar23[2];
        iVar18 = napi_create_function(param_2,"Mutex",0xffffffffffffffff);
        if ((iVar18 != 0) ||
           (iVar18 = napi_add_finalizer(param_2,*puVar23,uVar21,FUN_180002b00), iVar18 != 0)) {
          uVar21 = FUN_180001210(&local_res10);
          FUN_1800014c0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
          FUN_180006f84(local_98,&DAT_180020780);
        }
LAB_1800037b1:
        puVar23[2] = 0;
        puVar23[-3] = 0;
      }
      else if ((code *)puVar23[-3] == FUN_180003f50) {
        uVar21 = puVar23[2];
        iVar18 = napi_create_function(param_2,"Mutex",0xffffffffffffffff);
        if ((iVar18 != 0) ||
           (iVar18 = napi_add_finalizer(param_2,*puVar23,uVar21,FUN_180002b00), iVar18 != 0)) {
          uVar21 = FUN_180001210(&local_res10);
          FUN_1800014c0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
          FUN_180006f84(local_98,&DAT_180020780);
        }
        goto LAB_1800037b1;
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
        if ((*(code **)(puVar24 + -0x20) == FUN_180003f80) ||
           (*(code **)*(undefined1 (*) [32])(puVar24 + -0x18) == FUN_180003fb0)) {
          iVar18 = napi_add_finalizer();
          if (iVar18 != 0) {
            uVar21 = FUN_180001210(&local_res10);
            FUN_1800014c0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
            FUN_180006f84(local_98,&DAT_180020780);
          }
        }
        else if ((*(uint *)(puVar24 + -8) & 0x400) == 0) {
          if (*(code **)(puVar24 + -0x28) == FUN_1800043b0) {
            iVar18 = napi_add_finalizer();
            if (iVar18 != 0) {
              FUN_1800014c0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
              FUN_180006f84(local_98,&DAT_180020780);
            }
          }
          else if (*(code **)(puVar24 + -0x28) == FUN_1800043e0) {
            iVar18 = napi_add_finalizer();
            if (iVar18 != 0) {
              FUN_1800014c0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
              FUN_180006f84(local_98,&DAT_180020780);
            }
          }
          else if (((*(code **)(puVar24 + -0x20) == FUN_180004410) ||
                   (*(code **)*(undefined1 (*) [32])(puVar24 + -0x18) == FUN_180004440)) &&
                  (iVar18 = napi_add_finalizer(), iVar18 != 0)) {
            FUN_1800014c0(local_98,param_2);
                    /* WARNING: Subroutine does not return */
            FUN_180006f84(local_98,&DAT_180020780);
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
      thunk_FUN_18000cbe0(pauVar25);
    }
    return param_1;
  }
LAB_180003a8f:
  uVar21 = FUN_180001210(&local_res10);
  FUN_1800014c0(local_98,uVar21);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_98,&DAT_180020780);
}


/* Address: 0x180003af0; Evidence: ev_b41e3b61038e0be8a65ae065e3eb70100d5a1bfb0774b019c545bafd8e2c0050 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003af0(undefined8 param_1,longlong *param_2)

{
  int iVar1;
  undefined1 auStack_98 [32];
  undefined8 local_78;
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_98;
  local_78 = param_1;
  iVar1 = napi_open_handle_scope(param_1,&local_70);
  if (iVar1 != 0) {
    FUN_1800014c0(local_68,local_78);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  (**(code **)(*param_2 + 8))(param_2,param_1);
  (**(code **)*param_2)(param_2,1);
  iVar1 = napi_close_handle_scope(local_78,local_70);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x180003bc0; Evidence: ev_2970dc607fb3ce035a04c398ab53b14f235aaae5237d5a024519b9dbbbf34f9f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180003bc0(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_178 [32];
  longlong local_158;
  undefined8 local_150;
  undefined8 local_148 [4];
  ulonglong local_128;
  undefined8 local_120;
  longlong local_110;
  LPVOID local_c8;
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_178;
  FUN_180002260(&local_128,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  if (local_110 == 0) {
    local_150 = local_120;
    iVar1 = napi_get_undefined(local_120,&local_158);
    local_110 = local_158;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(&local_150);
      FUN_1800014c0(local_b8,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_b8,&DAT_180020780);
    }
  }
  local_148[0] = local_120;
  iVar1 = napi_unwrap(local_120,local_110,&local_158);
  if (iVar1 != 0) {
    puVar2 = FUN_180002d50(local_148,&local_150);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014c0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  if ((local_158 != 0) && (*(HANDLE *)(local_158 + 0x48) != (HANDLE)0x0)) {
    CloseHandle(*(HANDLE *)(local_158 + 0x48));
    *(undefined8 *)(local_158 + 0x48) = 0;
  }
  if (local_c8 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_c8);
  }
  return 0;
}


/* Address: 0x180003d00; Evidence: ev_800e39d2ce700bbfe104560a200d851791e7a86a1fe2b358887347b4dd1d1008 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_180003d00(undefined8 *param_1)

{
  longlong lVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  undefined1 auStack_1d8 [32];
  longlong local_1b8 [2];
  undefined8 local_1a8;
  longlong lStack_1a0;
  undefined8 local_198 [2];
  ulonglong local_188;
  undefined8 local_180;
  longlong local_170;
  LPVOID local_128;
  longlong local_118 [10];
  longlong local_c8 [10];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_1d8;
  FUN_180002260(&local_188,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  local_1a8 = local_180;
  if (local_170 == 0) {
    local_198[0] = local_180;
    iVar2 = napi_get_undefined(local_180,local_1b8);
    local_170 = local_1b8[0];
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(local_198);
      FUN_1800014c0(local_118,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_118,&DAT_180020780);
    }
  }
  iVar2 = napi_unwrap(local_1a8,local_170,local_1b8);
  if (iVar2 != 0) {
    puVar3 = FUN_180002d50(&local_1a8,local_198);
    uVar4 = FUN_180001210(puVar3);
    FUN_1800014c0(local_c8,uVar4);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_c8,&DAT_180020780);
  }
  if (local_1b8[0] == 0) {
    local_1a8 = 0;
    lStack_1a0 = 0;
  }
  else {
    iVar2 = napi_get_boolean(local_180,*(longlong *)(local_1b8[0] + 0x48) != 0,local_1b8);
    if (iVar2 != 0) {
      FUN_1800014c0(local_78,local_180);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_78,&DAT_180020780);
    }
    local_1a8 = local_180;
    lStack_1a0 = local_1b8[0];
  }
  lVar1 = lStack_1a0;
  if (local_128 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_128);
  }
  return lVar1;
}


/* Address: 0x180003eb0; Evidence: ev_a93bd1c1be83a3a3f6c6b8b5297011d5378c677e19d8b8f5134202d8108c1efe */

void FUN_180003eb0(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000cbe0(param_2);
  return;
}


/* Address: 0x180003ec0; Evidence: ev_3ec6fcedf15a102c7c91f1cca291b449c71967b3e460c3ce4da6721fd22a2619 */

undefined8 * FUN_180003ec0(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 local_res8;
  undefined8 local_res10;
  longlong local_res18 [2];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_res8 = param_1;
  local_res10 = param_2;
  iVar1 = napi_get_new_target(param_1,param_2,local_res18);
  if (iVar1 != 0) {
    return (undefined8 *)0x0;
  }
  local_18 = &local_res8;
  local_10 = &local_res10;
  if (local_res18[0] == 0) {
    puVar2 = (undefined8 *)FUN_180004050(&local_18);
    return puVar2;
  }
  puVar2 = FUN_180004070(&local_18);
  return puVar2;
}


/* Address: 0x180003f20; Evidence: ev_a23797fc74530033fdc7e14d4d3e233705b47d158f3859867d138598550bc38c */

void FUN_180003f20(undefined8 *param_1)

{
  code *pcVar1;
  ulonglong *puVar2;
  ulonglong *puVar3;
  ulonglong local_78 [15];
  
  puVar3 = local_78;
  puVar2 = FUN_180002260(puVar3,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  FUN_180004360(puVar3,(longlong)puVar2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180003f50; Evidence: ev_c8d3562e0063a34879db17d8c19e4466df2d76bef1194cbf309d3f638388e868 */

void FUN_180003f50(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180004150(&local_18);
  return;
}


/* Address: 0x180003f80; Evidence: ev_60c6f31936736759de80e08207e1fbbc8bad905c8483881811ab1748919db375 */

void FUN_180003f80(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_1800041c0(&local_18);
  return;
}


/* Address: 0x180003fb0; Evidence: ev_46f389dac8e825c24a46cc08ea0bff4f38fe963cda9b1917b2a6c6f3569e5853 */

void FUN_180003fb0(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180004230(&local_18);
  return;
}


/* Address: 0x180003fe0; Evidence: ev_5b19fcefbda4066e7fb70ff358027a0c1bdfc9c045c8abb9eb07b220a0589653 */

void FUN_180003fe0(longlong *param_1)

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
    thunk_FUN_18000cbe0(pvVar2);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x180004050; Evidence: ev_35debc3b620e2ebd9b55298c53a9a5fb7c9ce606bca93fa884ec97a266b88968 */

undefined8 FUN_180004050(undefined8 *param_1)

{
  FUN_180003f20(param_1);
  return 0;
}


/* Address: 0x180004070; Evidence: ev_38fb55f35216510c642efdb01ec7e50b36c30e1caab2d751b46b9dde54d6fbda */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004070(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_118 [32];
  undefined8 *local_f8;
  undefined8 local_f0 [3];
  ulonglong local_d8;
  undefined8 local_d0;
  undefined8 *local_c0;
  LPVOID local_78;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_118;
  FUN_180002260(&local_d8,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  local_f8 = operator_new(0x50);
  puVar2 = FUN_180003090(local_f8,(longlong)&local_d8);
  *(undefined1 *)(puVar2 + 4) = 0;
  puVar2 = local_c0;
  if (local_c0 == (undefined8 *)0x0) {
    local_f0[0] = local_d0;
    iVar1 = napi_get_undefined(local_d0,&local_f8);
    puVar2 = local_f8;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(local_f0);
      FUN_1800014c0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
  }
  if (local_78 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_78);
  }
  return puVar2;
}


/* Address: 0x180004150; Evidence: ev_0d4ae228cece547f180a0bc4315ee4de527395104e3090068a7dc932350ba0ff */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180004150(undefined8 *param_1)

{
  code *pcVar1;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_180002260(local_78,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_18);
  }
  return 0;
}


/* Address: 0x1800041c0; Evidence: ev_61eaedd3a92ef923ea456116cbb3e0ac6be3c2fe013c69127765646fe7291d66 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800041c0(undefined8 *param_1)

{
  code *pcVar1;
  undefined1 local_90 [8];
  undefined8 local_88;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_180002260(local_78,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[2];
  (*pcVar1)(local_90,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_18);
  }
  return local_88;
}


/* Address: 0x180004230; Evidence: ev_fb05c944e98a27717546a5cdb9ee4d08eb16a0f69cc75037d1b3517fb4d0030d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004230(undefined8 *param_1)

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
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_128;
  FUN_180002260(&local_d8,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  pcVar1 = *(code **)(local_70 + 8);
  if (local_b8 == 0) {
    local_108 = local_d0;
    local_70 = *(undefined8 *)(local_70 + 0x10);
    iVar2 = napi_get_undefined(local_d0,&local_100);
    if (iVar2 != 0) {
      uVar3 = FUN_180001210(&local_108);
      FUN_1800014c0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
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
    thunk_FUN_18000cbe0(local_78);
  }
  return 0;
}


/* Address: 0x180004340; Evidence: ev_e78d873e45b9eda02cefc57fe9973ae1c9a6167b1c4400e1aec3d451117d87d7 */

void FUN_180004340(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000cbe0(param_2);
  return;
}


/* Address: 0x180004350; Evidence: ev_5c94e74e96aee0bbaca4938679ddf4d601433c8cd8743150a50a16bcf2a4ca0b */

void FUN_180004350(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000cbe0(param_2);
  return;
}


/* Address: 0x180004360; Evidence: ev_3c4a29f2f3a2231bbfec9e81b29dfc0ccafaef3cd26308c52e9e6187614f42df */

void FUN_180004360(undefined8 param_1,longlong param_2)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  undefined1 auStack_98 [32];
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_98;
  puVar1 = FUN_1800023a0(param_2,local_78);
  uVar2 = FUN_180001210(puVar1);
  FUN_180002d60(local_68,uVar2);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_68,&DAT_180020860);
}


/* Address: 0x1800043b0; Evidence: ev_315a7d4d87157d27f732ea64a6ca04501258fe4b1e127aebefff21b389a37706 */

void FUN_1800043b0(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_1800047d0(&local_18);
  return;
}


/* Address: 0x1800043e0; Evidence: ev_12f924d284ae51071e4d67eec69dc4630d5539a7ad1a0e9024edc1f1848d8d73 */

void FUN_1800043e0(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180004940(&local_18);
  return;
}


/* Address: 0x180004410; Evidence: ev_ca9d0a733fcd24d3616ea1e016e0cd8d5fc59b3a8176bf27194e37f8fed55ab1 */

void FUN_180004410(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180004af0(&local_18);
  return;
}


/* Address: 0x180004440; Evidence: ev_b61f7ee889709a8572ecf11b48b5d91dcc6ea1ed6b52dc0c630f95031582f34b */

void FUN_180004440(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180004ca0(&local_18);
  return;
}


/* Address: 0x180004470; Evidence: ev_554927594bad944da18824aa7565958d7855c1c6fbc832b21f4971ed9eb3680b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004470(undefined8 *param_1)

{
  longlong lVar1;
  int iVar2;
  int iVar3;
  undefined8 uVar4;
  undefined8 *puVar5;
  undefined1 auStack_148 [32];
  longlong local_128 [2];
  undefined8 local_118 [2];
  undefined8 local_108;
  undefined8 local_100;
  undefined8 local_f8;
  undefined8 local_f0;
  undefined1 local_e8 [16];
  ulonglong local_d8;
  undefined8 local_d0;
  longlong local_c0;
  longlong local_b8;
  undefined8 *local_b0;
  LPVOID local_78;
  longlong local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_148;
  FUN_180002260(&local_d8,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  lVar1 = local_70;
  uVar4 = local_d0;
  local_70 = *(undefined8 *)(local_70 + 0x30);
  if (local_c0 == 0) {
    local_118[0] = local_d0;
    iVar2 = napi_get_undefined(local_d0,local_128);
    local_c0 = local_128[0];
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(local_118);
      FUN_1800014c0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
  }
  local_118[0] = uVar4;
  iVar2 = napi_unwrap(uVar4,local_c0,local_128);
  if (iVar2 != 0) {
    puVar5 = FUN_180002d50(local_118,&local_108);
    uVar4 = FUN_180001210(puVar5);
    FUN_1800014c0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  local_e8 = *(undefined1 (*) [16])(lVar1 + 0x18);
  iVar2 = local_e8._8_4_;
  local_f0 = *(undefined8 *)(lVar1 + 0x28);
  if (local_128[0] != 0) {
    if (local_b8 == 0) {
      local_118[0] = local_d0;
      iVar3 = napi_get_undefined(local_d0,&local_108);
      if (iVar3 != 0) {
        uVar4 = FUN_180001210(local_118);
        FUN_1800014c0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
        FUN_180006f84(local_68,&DAT_180020780);
      }
    }
    else {
      local_108 = *local_b0;
    }
    local_100 = local_d0;
    local_f8 = local_108;
    (*(code *)CONCAT44(local_e8._4_4_,local_e8._0_4_))(iVar2 + local_128[0],&local_d8,&local_100);
  }
  if (local_78 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_78);
  }
  return 0;
}


/* Address: 0x180004650; Evidence: ev_06664fabcfb401406b738412c306f7a925340bbba1e19540fbbe4ea2095326f8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004650(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_a8;
  local_80 = *(undefined8 *)(param_2 + 0x18);
  param_1[3] = local_80;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  local_88 = param_1;
  iVar1 = napi_open_handle_scope(local_80,local_78);
  if (iVar1 != 0) {
    FUN_1800014c0(local_68,local_80);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  puVar2 = (undefined8 *)0x0;
  if ((*(longlong *)(param_2 + 0x20) != 0) &&
     (iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_2 + 0x18),*(longlong *)(param_2 + 0x20),&local_88),
     puVar2 = local_88, iVar1 != 0)) {
    FUN_1800014c0(local_68,*(undefined8 *)(param_2 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(param_1[3],puVar2,1,param_1 + 4), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_80,local_78[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  param_1[1] = 0;
  param_1[2] = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  *param_1 = &PTR_FUN_18001dfd0;
  return param_1;
}


/* Address: 0x1800047d0; Evidence: ev_8bfda31aa716825137e373b167df623625c6a0e5992d5968e05d05bc6b979169 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_1800047d0(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_188 [32];
  longlong local_168;
  undefined8 local_160;
  undefined8 local_158 [6];
  ulonglong local_128;
  undefined8 local_120;
  longlong local_110;
  LPVOID local_c8;
  undefined8 *local_c0;
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_188;
  FUN_180002260(&local_128,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  puVar2 = local_c0;
  local_c0 = (undefined8 *)local_c0[3];
  if (local_110 == 0) {
    local_160 = local_120;
    iVar1 = napi_get_undefined(local_120,&local_168);
    local_110 = local_168;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(&local_160);
      FUN_1800014c0(local_b8,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_b8,&DAT_180020780);
    }
  }
  local_158[0] = local_120;
  iVar1 = napi_unwrap(local_120,local_110,&local_168);
  if (iVar1 != 0) {
    puVar2 = FUN_180002d50(local_158,&local_160);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014c0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  if (local_168 != 0) {
    (*(code *)*puVar2)((int)puVar2[1] + local_168,&local_128);
  }
  if (local_c8 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_c8);
  }
  return 0;
}


/* Address: 0x180004940; Evidence: ev_3929e0716515d6607409b18e0a5559ebf4bd182c1943e1103acec0db7eb8d9b0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004940(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_198 [32];
  longlong local_178;
  undefined8 local_170;
  undefined8 local_168;
  longlong lStack_160;
  undefined8 local_158;
  ulonglong local_138;
  undefined8 local_130;
  longlong local_120;
  LPVOID local_d8;
  undefined8 *local_d0;
  longlong local_c8 [10];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_198;
  FUN_180002260(&local_138,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  puVar2 = local_d0;
  local_d0 = (undefined8 *)local_d0[3];
  if (local_120 == 0) {
    local_170 = local_130;
    iVar1 = napi_get_undefined(local_130,&local_178);
    local_120 = local_178;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(&local_170);
      FUN_1800014c0(local_c8,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_c8,&DAT_180020780);
    }
  }
  local_168 = local_130;
  lStack_160 = local_120;
  iVar1 = napi_unwrap(local_130,local_120,&local_178);
  if (iVar1 != 0) {
    puVar2 = FUN_180002d50(&local_168,&local_170);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014c0(local_78,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  local_158 = puVar2[2];
  if (local_178 == 0) {
    local_168 = 0;
    lStack_160 = 0;
    puVar2 = &local_168;
  }
  else {
    puVar2 = (undefined8 *)(*(code *)*puVar2)((int)puVar2[1] + local_178,&local_168,&local_138);
  }
  uVar3 = puVar2[1];
  if (local_d8 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_d8);
  }
  return uVar3;
}


/* Address: 0x180004af0; Evidence: ev_e387c38fe5b72bc021287affdad1a45e2b9b859bc4ab63b9d63d487415285d21 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004af0(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined1 auStack_198 [32];
  longlong local_178;
  undefined8 local_170;
  undefined8 local_168;
  longlong lStack_160;
  undefined8 local_158;
  ulonglong local_138;
  undefined8 local_130;
  longlong local_120;
  LPVOID local_d8;
  undefined8 *local_d0;
  longlong local_c8 [10];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180022000 ^ (ulonglong)auStack_198;
  FUN_180002260(&local_138,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  puVar2 = local_d0;
  local_d0 = (undefined8 *)local_d0[6];
  if (local_120 == 0) {
    local_170 = local_130;
    iVar1 = napi_get_undefined(local_130,&local_178);
    local_120 = local_178;
    if (iVar1 != 0) {
      uVar3 = FUN_180001210(&local_170);
      FUN_1800014c0(local_c8,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_c8,&DAT_180020780);
    }
  }
  local_168 = local_130;
  lStack_160 = local_120;
  iVar1 = napi_unwrap(local_130,local_120,&local_178);
  if (iVar1 != 0) {
    puVar2 = FUN_180002d50(&local_168,&local_170);
    uVar3 = FUN_180001210(puVar2);
    FUN_1800014c0(local_78,uVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_78,&DAT_180020780);
  }
  local_158 = puVar2[2];
  if (local_178 == 0) {
    local_168 = 0;
    lStack_160 = 0;
    puVar2 = &local_168;
  }
  else {
    puVar2 = (undefined8 *)(*(code *)*puVar2)((int)puVar2[1] + local_178,&local_168,&local_138);
  }
  uVar3 = puVar2[1];
  if (local_d8 != (LPVOID)0x0) {
    thunk_FUN_18000cbe0(local_d8);
  }
  return uVar3;
}


/* Address: 0x180004ca0; Evidence: ev_c1033a4367f14b819b63a7e2b8037f0d2fc60e3c54bc8741a8ef31c10b5a19bf */

void FUN_180004ca0(undefined8 *param_1)

{
  FUN_180004470(param_1);
  return;
}


/* Address: 0x180004cc0; Evidence: ev_018e71670289489e498a58442ddf1f31fa1cf81cafabbb3c5a40b994f9287023 */

void FUN_180004cc0(void)

{
  code *pcVar1;
  
  FUN_180005e40(0x18001e098);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180004cd1; Evidence: ev_c41b796e42defecc18eac8c6c98927b83a2228efcfcebaf76fa120521d3f6c25 */

void FUN_180004cd1(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_RDX;
  undefined8 in_XMM0_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_180013590(&ImgDelayDescr_1800208d4.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x000180004d48. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_XMM0_Qa,in_RDX,param_3,param_4);
  return;
}


/* Address: 0x180004d4a; Evidence: ev_417ac016e7e62b7eed74077202d7f8e57a1178d9adb3c0dfaac899b16805480f */

void DelayLoad_napi_create_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004d56; Evidence: ev_a682ffa6fa60878efc35f8a7bef85ee9d576ac193953c39881d57dd33e3421e1 */

void DelayLoad_napi_open_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004d62; Evidence: ev_4749d1a53d66627380b60446bef91840ba994c19d196c14d98e82664f8a133d4 */

void DelayLoad_napi_get_boolean
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004d6e; Evidence: ev_849591035e461096ca3aa1a3fe3b44b77a070ac0688d3f1e0707626e6d8a866b */

void DelayLoad_napi_get_last_error_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004d7a; Evidence: ev_79b448fba112e7d7554df044b27895de0baaec40067c3657758836d7b8ba4f9c */

void DelayLoad_napi_create_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004d86; Evidence: ev_30818b22932470980ab7c3f1d2212b97efc180ca48d4a9609bbc38c47ab5edff */

void DelayLoad_napi_delete_reference
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004d92; Evidence: ev_44a2abbeab254528c9825ef5650a770f391ca06d2260f99ae61a162d0f68b0e6 */

void DelayLoad_napi_fatal_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004d9e; Evidence: ev_acdc44c300fa91e6d6674f3d99b9168a9efb0c5411e6ba01089e00725cfa7a83 */

void DelayLoad_napi_is_exception_pending
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004daa; Evidence: ev_b163ce04cdfdc184e5fb37d69478bc113f6769c63c16bdfaa3918c12311c6eb7 */

void DelayLoad_napi_get_value_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004db6; Evidence: ev_1667eefe42b13bc506a644f5eece5aae2ea95d086510a97d207c99fcfcc2503d */

void DelayLoad_napi_close_escapable_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004dc2; Evidence: ev_aaaf96c0b68c1e0ec165d78ca0fb5df7bc11fad39a768830b4064db6c1ab4460 */

void DelayLoad_napi_escape_handle
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004dce; Evidence: ev_8ccb707db758fe0b5987f267fcb7de6c0fc0c28b9da018944cfc197fc2c6cabd */

void DelayLoad_napi_get_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004dda; Evidence: ev_871606dce8966f6f093a9a2fd71a7595b6f4e7308bb1624a9678804ba11a6330 */

void DelayLoad_napi_add_finalizer
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004de6; Evidence: ev_3b3d036e0c679358152e7d684648b6602524e4069bc986a06dd88705eb38e8b0 */

void DelayLoad_napi_create_type_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004df2; Evidence: ev_7bfa7e567d1083584a0f61d61090b76fad9e53a28c3bacd57fd0204d4f3330e1 */

void DelayLoad_napi_create_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004dfe; Evidence: ev_694585a0cb230fafd8067f89cd49a56ef82ea2c0ca5e17b7f59b62459deccf51 */

void DelayLoad_napi_has_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e0a; Evidence: ev_1dda0fa1feeb08d192a2de8883304d4ac61ff13e14d2de1218bfe2df2bc9e9a4 */

void DelayLoad_napi_set_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e16; Evidence: ev_2a756a03ca43b16557fad2cbf21e35c76b1ac36245abb974888c6e757ddf3b1c */

void DelayLoad_napi_get_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e22; Evidence: ev_3bb93d3d527425cc2144d3f5c7b554dc80e11c6f7abdbbc1a49b89d6e6ae4906 */

void DelayLoad_napi_define_properties
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e2e; Evidence: ev_1d839cef1e0451ad8e282ee77e2f469a9f741c76465b265b766338a86cc1c1c3 */

void DelayLoad_napi_typeof
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e3a; Evidence: ev_e75fbda50484c59661e882e6349628410b39334e892e33fd7536db651f0b8e3c */

void DelayLoad_napi_throw
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e46; Evidence: ev_76a2b871e731403b69ba91a9d1c6f60786412bbdbda5c07f669e9cdc63ea363f */

void DelayLoad_napi_get_and_clear_last_exception
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e52; Evidence: ev_c7bd327a21c4875688fc98c2ebae125b7d3f728fceaa0b34c26dae040347d309 */

void DelayLoad_napi_create_object
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e5e; Evidence: ev_7f08d6275a1c3f907c0f8bcf999b78ed7aca0107ffd430e181ec57ff01535bbb */

void DelayLoad_napi_get_undefined
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e6a; Evidence: ev_22f70d7d3ee65ae4b4262a2fe428cc0573d3d60ee406fee2e0f4734a968ff657 */

void DelayLoad_napi_get_cb_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e76; Evidence: ev_c01e44443e2a64d3d12864ae14be79dc5100590ab844be7fb57f270ed9eb3545 */

void DelayLoad_napi_open_escapable_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e82; Evidence: ev_9172713e6ff8b7b018ddb7a9127aff28d9557d35dcef767e44e0c54637f84a9d */

void DelayLoad_napi_create_reference
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e8e; Evidence: ev_1cdc15a2890c66bce109417559f53eabb8ec52fdf9a905ea4a2704e1c52eaa2a */

void DelayLoad_napi_close_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004e9a; Evidence: ev_357a608340f30dfa182874933bbfeb13bee473e7cac820d2ca2b28d3df740e1b */

void DelayLoad_napi_get_reference_value
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ea6; Evidence: ev_9384eb1a7be59d8a1fe78c7a865bee0a7369bd66b79303f74300622872c075e2 */

void DelayLoad_napi_unwrap
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004eb2; Evidence: ev_4bc1366c5fff90c0768626ac5490230739dfa1f39be58f92b20d2c410f94de88 */

void DelayLoad_napi_wrap(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4
                        )

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ebe; Evidence: ev_b4e31b3c7fcc88e1459177912d65228eaf52304cc264fa7c90ab05cd8be08e68 */

void DelayLoad_napi_define_class
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004eca; Evidence: ev_106c71b7ff92de34c6db75ea37d29b42d49875f06d1d76bb2b9851fbd373f906 */

void DelayLoad_napi_get_new_target
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ed6; Evidence: ev_5c6a131106c4a3e5de090670c51a260c5cb084f1a0403fa92668e0f9aeb15a3e */

void DelayLoad_napi_set_instance_data
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004ee2; Evidence: ev_34a3cbf104f2243c1f12db9df1237a7fe3f4ec94684be313b064212ec9637289 */

void DelayLoad_napi_remove_wrap
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180004cd1(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004f00; Evidence: ev_1bd960b3a526aa0dccd3d1c92f42b7edfe0bebfd865a3440ed245d2afdebbf58 */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_180022000) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_180005350();
  return;
}


/* Address: 0x180004f20; Evidence: ev_62eed702018c562df35c5bbbdbcbb1dadfbc9f5116e5ca3a3f6da389006ebae0 */

void thunk_FUN_18000cbe0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800237e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000c174(DVar2);
    p_Var4 = FUN_18000c2b4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180004f28; Evidence: ev_c28023a3a0a244a84c736f2ce0f279eedbba30c80ae4e380e54eae282ca0a0dd */

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
    bVar2 = FUN_18000b070(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_180001150();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_1800054bc();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x180004f64; Evidence: ev_94027db7652fbeffacbc672cf3b53157f326a0535da0ff559297ba7d9166e3ca */

void thunk_FUN_18000cbe0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800237e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000c174(DVar2);
    p_Var4 = FUN_18000c2b4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180004f6c; Evidence: ev_eda9e94ced408f7e0df069149c1830736e594269f9c9237b440ec8e5f17fa001 */

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
    bVar2 = FUN_18000b070(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_180001150();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_1800054bc();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x180004f80; Evidence: ev_db402107a2de0a6283823ce7d6fe6bb011c4c081e3d44194be18113c50220d7d */

undefined8 * FUN_180004f80(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = type_info::vftable;
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000cbe0(param_1);
  }
  return param_1;
}


/* Address: 0x180004fb0; Evidence: ev_9b8d9c3116dabf0d913373d07cfa425b897a2c010fe23f61d59f5001b125758d */

ulonglong FUN_180004fb0(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180005118(param_3 != 0);
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
      bVar1 = FUN_18000568c();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_180005000(param_1,param_3);
  return uVar2;
}


/* Address: 0x180005000; Evidence: ev_ce3a3a4f6d553c59519baac45dbf641f67672326d9ffc1bc0ebfb6fb252795e4 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180005000(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180005748(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180023190 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_18000590c(7);
    }
    DAT_180023190 = 1;
    bVar2 = FUN_18000564c();
    if (bVar2) {
      FUN_180005a58();
      FUN_180005594();
      FUN_1800055c0();
      uVar4 = FUN_18000b1c0((undefined8 *)&DAT_1800162d0,(undefined8 *)&DAT_1800162f0);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_18000b188((undefined8 *)&DAT_1800162c0,(undefined8 *)&DAT_1800162c8);
        DAT_180023190 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_1800058f8();
      if ((*plVar5 != 0) && (uVar6 = FUN_180005810((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180022bf8 = DAT_180022bf8 + 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x180005118; Evidence: ev_3064642adaacb5118229cad0a43d6ebdef52957f9164138dccd2fd7112d22dbd */

ulonglong FUN_180005118(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180022bf8 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180022bf8 = DAT_180022bf8 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180023190 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_18000590c(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_1800055a4();
    FUN_180005a94();
    DAT_180023190 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180005734();
  }
  return uVar2;
}


/* Address: 0x18000519c; Evidence: ev_9d56377bd73b1db73d258266e799cc99559af9ced91adcfd41a5a3dfdcce6252 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180005259) */
/* WARNING: Removing unreachable block (ram,0x0001800051ea) */
/* WARNING: Removing unreachable block (ram,0x000180005298) */

int FUN_18000519c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_180022bf8 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180004fb0(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_18000558c();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_18000558c();
      FUN_180005118(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180004fb0(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}


/* Address: 0x1800052d0; Evidence: ev_c965fae839616a32e28cfb4db9550065bc28463364be0777fb7a725c0a362065 */

void entry(undefined8 param_1,int param_2,longlong param_3)

{
  if (param_2 == 1) {
    FUN_1800054dc();
  }
  FUN_18000519c(param_1,param_2,param_3);
  return;
}


/* Address: 0x180005310; Evidence: ev_f2ae73b9753acd2eceb9933d48c4acc62ca96192d6bd935234c4cb670d610828 */

/* Library Function - Single Match
    __raise_securityfailure
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __raise_securityfailure(_EXCEPTION_POINTERS *param_1)

{
  HANDLE hProcess;
  
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  UnhandledExceptionFilter(param_1);
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000533d. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000409);
  return;
}


/* Address: 0x180005350; Evidence: ev_64ecd240ae51b2cf9971e97750a9ce6a58b934586422b7595cc55cadc1ae9167 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180005350(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x18000537b;
  FUN_180005424((PCONTEXT)&DAT_180022ca0);
  _DAT_180022c10 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180022d38 = puVar3 + 0x40;
  _DAT_180022d20 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180022c00 = 0xc0000409;
  _DAT_180022c04 = 1;
  _DAT_180022c18 = 1;
  DAT_180022c20 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180022000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180022040;
  *(undefined8 *)(puVar3 + -8) = 0x18000541d;
  DAT_180022d98 = _DAT_180022c10;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_1800164d8);
  return;
}


/* Address: 0x180005424; Evidence: ev_f1507de63e14a7a55a0839eb81f795b347bae3720db400d2e01fe65c4d15d282 */

void FUN_180005424(PCONTEXT param_1)

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


/* Address: 0x180005498; Evidence: ev_b64115daa53a4fbcff6631e11b7303367d33c4b9a05a75be0c90857b3a38b8ef */

undefined8 * FUN_180005498(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x1800054bc; Evidence: ev_39e9d0fccaba6b5757edb0e2b3f191fbf83266fbe9fabc6f4166bf5c3e672cc2 */

void FUN_1800054bc(void)

{
  longlong local_28 [5];
  
  FUN_180005498(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_28,&DAT_1800205c0);
}


/* Address: 0x1800054dc; Evidence: ev_463f50a5a98131650cdb6686e10c307ac77d2c0ff863dec9abe021ba438fa6ed */

void FUN_1800054dc(void)

{
  DWORD DVar1;
  _FILETIME local_res8;
  LARGE_INTEGER local_res10;
  _FILETIME local_18 [2];
  
  if (DAT_180022000 == 0x2b992ddfa232) {
    local_res8.dwLowDateTime = 0;
    local_res8.dwHighDateTime = 0;
    GetSystemTimeAsFileTime(&local_res8);
    local_18[0] = local_res8;
    DVar1 = GetCurrentThreadId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    DVar1 = GetCurrentProcessId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    QueryPerformanceCounter(&local_res10);
    DAT_180022000 =
         ((ulonglong)local_res10.s.LowPart << 0x20 ^
          CONCAT44(local_res10.s.HighPart,local_res10.s.LowPart) ^ (ulonglong)local_18[0] ^
         (ulonglong)local_18) & 0xffffffffffff;
    if (DAT_180022000 == 0x2b992ddfa232) {
      DAT_180022000 = 0x2b992ddfa233;
    }
  }
  DAT_180022040 = ~DAT_180022000;
  return;
}


/* Address: 0x18000558c; Evidence: ev_a672a7de5c350146f78973ca0b35e32be57cc92c47b9990d79ea3846cd50d6d9 */

undefined8 FUN_18000558c(void)

{
  return 1;
}


/* Address: 0x180005594; Evidence: ev_9a0b0a40348d2dedebf16da6360c399143ead26202397a17f5711c5176f52ca0 */

void FUN_180005594(void)

{
                    /* WARNING: Could not recover jumptable at 0x00018000559b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  InitializeSListHead(&DAT_180023170);
  return;
}


/* Address: 0x1800055a4; Evidence: ev_6cd8756b8d010b9eb916976e665ea742b18e6b9cb0cc1be04d1c642746fc02cc */

void FUN_1800055a4(void)

{
  FUN_180007044((PSLIST_HEADER)&DAT_180023170);
  return;
}


/* Address: 0x1800055b0; Evidence: ev_b761856cb3f311b1b97b0181465777fd3c73552a6d74fc2d2e12a816b418b943 */

undefined * FUN_1800055b0(void)

{
  return &DAT_180023180;
}


/* Address: 0x1800055b8; Evidence: ev_d9761192be89a2e4ca7f68a5a584a5c66d72da7c5d799e8b90d4f8e9ce83c306 */

undefined * FUN_1800055b8(void)

{
  return &DAT_180023188;
}


/* Address: 0x1800055c0; Evidence: ev_4b9790daf367d4ee0b8cdfe3efd5ae14d495303774ebb13bb301906e26dba647 */

void FUN_1800055c0(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_1800055b0();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_1800055b8();
  *puVar1 = *puVar1 | 2;
  return;
}


/* Address: 0x1800055dc; Evidence: ev_986f622779ad2dc1de3f8c94e8a739766b2087202a2169b4fd1286091e965050 */

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
LAB_18000560a:
    uVar4 = (ulonglong)pvVar3 & 0xffffffffffffff00;
  }
  else {
    do {
      pvVar3 = (void *)0x0;
      LOCK();
      bVar2 = DAT_180023198 == (void *)0x0;
      pvVar1 = StackBase;
      if (!bVar2) {
        pvVar3 = DAT_180023198;
        pvVar1 = DAT_180023198;
      }
      DAT_180023198 = pvVar1;
      UNLOCK();
      if (bVar2) goto LAB_18000560a;
    } while (StackBase != pvVar3);
    uVar4 = CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
  }
  return uVar4;
}


/* Address: 0x180005618; Evidence: ev_38ade28cc5266e0527429c10e4fcd0273c20e10845d4f0f93b0ae3fe914540dc */

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
    uVar2 = FUN_18000558c();
    uVar3 = FUN_18000b838((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_18000b9b8();
  }
  else {
    uVar2 = FUN_180005ad0();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}


/* Address: 0x18000564c; Evidence: ev_b97d4fa17bb66613aa4b3ad452f378fc24b3b9ecf2304b0e5274985ad954482b */

bool FUN_18000564c(void)

{
  undefined8 uVar1;
  
  uVar1 = FUN_180005784(0);
  return (char)uVar1 != '\0';
}


/* Address: 0x180005664; Evidence: ev_e34e6f8d5e865cb54f2c5ac5e726db401983e0e626c18dc7076004f0544523ca */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_180007098();
  if (bVar1) {
    bVar1 = FUN_18000bf40();
    if (bVar1) {
      return 1;
    }
    FUN_1800070ac();
  }
  return 0;
}


/* Address: 0x18000568c; Evidence: ev_f6467d0fb075cf3fc824bc2d092254e80be952b66aa70464fc5ad6624a103bb1 */

undefined1 FUN_18000568c(void)

{
  FUN_18000bf54();
  FUN_1800070ac();
  return 1;
}


/* Address: 0x1800056a4; Evidence: ev_c24dabf764d43d505fc6e803747aebbc9abcb3febe540d9d9205e7fe21a282a5 */

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


/* Address: 0x180005704; Evidence: ev_72ed7f87e073492530a3dad2b0d436a5960cf477f9e614c0693eac33f9d2c4c9 */

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
    FUN_18000bd5c(&DAT_1800231a8);
    return;
  }
  iVar2 = FUN_18000b610();
  if (iVar2 == 0) {
    FUN_18000b5f4();
  }
  return;
}


/* Address: 0x180005734; Evidence: ev_b45868d91def85d51b4e093e4ae9f8bf11bba8c88edbeec82d34161d1a937e3f */

void FUN_180005734(void)

{
  FUN_18000bf9c();
  FUN_1800070d8();
  return;
}


/* Address: 0x180005748; Evidence: ev_f18de4dbd1ad42ad9232d58e9ce8d9382e47635d228ca6d85ddfd5afa7125a45 */

ulonglong FUN_180005748(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_1800231a0 = 1;
  }
  FUN_180005ad0();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000bf2c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}


/* Address: 0x180005784; Evidence: ev_5612c16430c073e21f348f161a63782c54f8a79bbe17c67e2386225a6e95cb89 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180005784(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_1800231a1 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_18000590c(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_1800231a8 = 0xffffffffffffffff;
      uRam00000001800231b0 = 0xffffffffffffffff;
      _DAT_1800231b8 = 0xffffffffffffffff;
      _DAT_1800231c0 = 0xffffffffffffffff;
      uRam00000001800231c8 = 0xffffffffffffffff;
      _DAT_1800231d0 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_1800231a8);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_1800231c0), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_1800231a1 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180005810; Evidence: ev_0b0b4e681ca482f1473561378051b774deed7ce34d209ba47b1d696e5161b47b */

/* WARNING: Removing unreachable block (ram,0x00018000589d) */
/* WARNING: Enum "SectionFlags": Some values do not have unique names */

ulonglong FUN_180005810(longlong param_1)

{
  ulonglong uVar1;
  uint7 uVar2;
  IMAGE_SECTION_HEADER *pIVar3;
  
  uVar1 = 0;
  for (pIVar3 = &IMAGE_SECTION_HEADER_180000210; pIVar3 != (IMAGE_SECTION_HEADER *)&DAT_180000350;
      pIVar3 = pIVar3 + 1) {
    if (((ulonglong)(uint)pIVar3->VirtualAddress <= param_1 - 0x180000000U) &&
       (uVar1 = (ulonglong)((pIVar3->Misc).PhysicalAddress + pIVar3->VirtualAddress),
       param_1 - 0x180000000U < uVar1)) goto LAB_180005886;
  }
  pIVar3 = (IMAGE_SECTION_HEADER *)0x0;
LAB_180005886:
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


/* Address: 0x1800058a8; Evidence: ev_f06f99edfc2f4710ce606e9be55bc0d8d9369fbd797e90f01af18288267faa3f */

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
    DAT_180023198 = 0;
    UNLOCK();
  }
  return;
}


/* Address: 0x1800058cc; Evidence: ev_65d187a49381b3ee35a77ebf94e2bf0035563c8d43a41e888b26c23824cf12ba */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_1800231a0 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x1800058f8; Evidence: ev_71bccabf6caab20e19a10f79d81aaf6086ade42da360b362a066c73e4f8385b9 */

undefined * FUN_1800058f8(void)

{
  return &DAT_180023c98;
}


/* Address: 0x180005900; Evidence: ev_eb1936f6ae87ddc4435be26e86506463b94d183f31e1b11e8ab0bf7eed0eeb02 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180005900(void)

{
  _DAT_1800231d8 = 0;
  return;
}


/* Address: 0x18000590c; Evidence: ev_0289f3f62dbf2a30527684c6a41f96dccaaf6ad32bf46640cf9563a46f6c3136 */

void FUN_18000590c(undefined4 param_1)

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
  *(undefined8 *)(puVar4 + -8) = 0x180005940;
  FUN_180005900();
  *(undefined8 *)(puVar4 + -8) = 0x180005951;
  FUN_180013cb0((undefined1 (*) [32])local_4d8,0,0x4d0);
  *(undefined8 *)(puVar4 + -8) = 0x18000595b;
  RtlCaptureContext(local_4d8);
  *(undefined8 *)(puVar4 + -8) = 0x180005975;
  FunctionEntry = RtlLookupFunctionEntry(local_3e0,&local_res10,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    *(undefined8 *)(puVar4 + 0x38) = 0;
    *(undefined1 **)(puVar4 + 0x30) = local_res18;
    *(undefined1 **)(puVar4 + 0x28) = local_res20;
    *(undefined1 **)(puVar4 + 0x20) = local_4d8;
    *(undefined8 *)(puVar4 + -8) = 0x1800059b9;
    RtlVirtualUnwind(0,local_res10,local_3e0,FunctionEntry,*(PCONTEXT *)(puVar4 + 0x20),
                     *(PVOID **)(puVar4 + 0x28),*(PDWORD64 *)(puVar4 + 0x30),
                     *(PKNONVOLATILE_CONTEXT_POINTERS *)(puVar4 + 0x38));
  }
  local_440 = &stack0x00000008;
  *(undefined8 *)(puVar4 + -8) = 0x1800059eb;
  FUN_180013cb0((undefined1 (*) [32])(puVar4 + 0x50),0,0x98);
  *(undefined8 *)(puVar4 + 0x60) = unaff_retaddr;
  *(undefined4 *)(puVar4 + 0x50) = 0x40000015;
  *(undefined4 *)(puVar4 + 0x54) = 1;
  *(undefined8 *)(puVar4 + -8) = 0x180005a0d;
  BVar2 = IsDebuggerPresent();
  *(undefined1 **)(puVar4 + 0x40) = puVar4 + 0x50;
  *(undefined1 **)(puVar4 + 0x48) = local_4d8;
  *(undefined8 *)(puVar4 + -8) = 0x180005a2a;
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  *(undefined8 *)(puVar4 + -8) = 0x180005a35;
  LVar3 = UnhandledExceptionFilter((_EXCEPTION_POINTERS *)(puVar4 + 0x40));
  if ((LVar3 == 0) && (BVar2 != 1)) {
    *(undefined8 *)(puVar4 + -8) = 0x180005a46;
    FUN_180005900();
  }
  return;
}


/* Address: 0x180005a58; Evidence: ev_085d91b91cf0d43420d244fbcd965ea06184433c36d21ccc3ea34c88f3c03ad6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005a58(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001ec98; puVar1 < &DAT_18001ec98; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180005a94; Evidence: ev_a9aa71afeccc42c2eaa0f3371b1bec3fe9f65b77515b9fa29841faffaa420e0a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005a94(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001eca8; puVar1 < &DAT_18001eca8; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180005ad0; Evidence: ev_1039d9aec0695714457cc332cb4be28de4e920800fb7f1a07affe5a0cf5ca1ba */

/* WARNING: Removing unreachable block (ram,0x000180005bc1) */
/* WARNING: Removing unreachable block (ram,0x000180005bb1) */
/* WARNING: Removing unreachable block (ram,0x000180005b8c) */
/* WARNING: Removing unreachable block (ram,0x000180005b0a) */
/* WARNING: Removing unreachable block (ram,0x000180005ae8) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180005ad0(void)

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
    DAT_180022060 = 0x8000;
    DAT_180022068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_1800231e0 = DAT_1800231e0 | 1;
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
      DAT_1800231e0 = DAT_1800231e0 | 2;
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
  DAT_180022058 = 1;
  DAT_18002205c = 2;
  uVar9 = DAT_180022050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_180022058 = 2;
    DAT_18002205c = 6;
    uVar9 = DAT_180022050 & 0xffffffffffffffee;
  }
  DAT_180022050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_180022058 = 3;
      uVar7 = DAT_180022050;
      uVar5 = DAT_18002205c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_180022058 = 5;
        uVar7 = DAT_180022050 & 0xfffffffffffffffd;
        uVar5 = DAT_18002205c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18002205c = DAT_18002205c | 0x68;
          DAT_180022058 = 6;
          uVar7 = DAT_180022050 & 0xffffffffffffffd9;
          uVar5 = DAT_18002205c;
        }
      }
      DAT_18002205c = uVar5;
      DAT_180022050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_180022050 = DAT_180022050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_1800231dc = (uint)uVar12 & 0x400ff;
        DAT_180022050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_180022050;
        if (1 < (byte)_DAT_1800231dc) {
          DAT_180022050 = DAT_180022050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_180022050 = DAT_180022050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}


/* Address: 0x180005d68; Evidence: ev_cd9a00ced03f09a74e2a6f635c88efcf0378d28eec00abb75e573e3721c97f26 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180023c94 != 0;
}


/* Address: 0x180005d80; Evidence: ev_51b0834c41e186461946ee716c4db35b4291594348de5fc4ce4b38b89079ac46 */

undefined8 * FUN_180005d80(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180006b78((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x180005dbc; Evidence: ev_ee29b8c4e90bbddb2d243d847a276a5f95ff63b7f776b35ccf62d234307f7f40 */

undefined8 * FUN_180005dbc(undefined8 *param_1,longlong param_2)

{
  longlong local_18;
  undefined1 local_10;
  
  local_10 = 1;
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  local_18 = param_2;
  FUN_180006b78(&local_18,param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x180005e04; Evidence: ev_b01400f457c8b0f95dd9120fbfa1b4a7eb752e01c89cbd0cfdd465a3752c5fb7 */

undefined8 * FUN_180005e04(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180006b78((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::logic_error::vftable;
  return param_1;
}


/* Address: 0x180005e40; Evidence: ev_91babb7ab7bfaea079f0f054340c43cebbbd1ab903e66a5c335039aa1e86d82b */

void FUN_180005e40(longlong param_1)

{
  longlong local_28 [5];
  
  FUN_180005dbc(local_28,param_1);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_28,&DAT_180020620);
}


/* Address: 0x180005e64; Evidence: ev_a7a066dc7af504dbe8701f13ebd4733e04097b8a0e04246011b94717c1281173 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005e64(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180007158();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180005eb8; Evidence: ev_0d8eb41e1397beaea639f7f61b2fc7e374a2b3c68ee99e52eedbc6b6eb551e0d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005eb8(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180007158();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180005f0c; Evidence: ev_8aa2b8f3a221cbb2dea07ba2ed8cd43eebd2ea2d29c947f64b10e25aeadab41e */

longlong FUN_180005f0c(longlong param_1,int param_2)

{
  uint uVar1;
  longlong lVar2;
  
  uVar1 = *(uint *)(param_1 + 0xc);
  do {
    if (uVar1 == 0) {
      return 0;
    }
    uVar1 = uVar1 - 1;
    lVar2 = FUN_180007158();
    lVar2 = (longlong)*(int *)(param_1 + 0x10) +
            *(longlong *)(lVar2 + 0x60) + (ulonglong)uVar1 * 0x14;
  } while ((param_2 <= *(int *)(lVar2 + 4)) || (*(int *)(lVar2 + 8) < param_2));
  return lVar2;
}


/* Address: 0x180005f70; Evidence: ev_81e346f443a37665a947e9874e80b73d9dcf6cb761358cffcd4423f08e973afb */

longlong FUN_180005f70(byte *param_1,byte *param_2,longlong param_3,int param_4,char param_5)

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
    pbVar11 = pbVar11 + -(longlong)(char)(&DAT_180016580)[bVar4 & 0xf];
    *(uint *)(param_2 + 4) = *(uint *)(pbVar11 + -4) >> ((&DAT_180016590)[bVar4 & 0xf] & 0x1f);
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
      pbVar11 = (byte *)(param_3 + *(int *)pbVar11) + -(longlong)(char)(&DAT_180016580)[uVar8];
      puVar1 = (uint *)(pbVar11 + -4);
      if (*puVar1 >> ((&DAT_180016590)[uVar8] & 0x1f) != 0) {
        do {
          iVar6 = *(int *)pbVar11;
          pbVar2 = pbVar11 + 4;
          pbVar11 = pbVar11 + 8;
          if (iVar6 == param_4) {
            *(undefined4 *)(param_2 + 0x10) = *(undefined4 *)pbVar2;
            break;
          }
          uVar9 = uVar9 + 1;
        } while (uVar9 < *puVar1 >> ((&DAT_180016590)[uVar8] & 0x1f));
      }
    }
  }
  else {
    *(undefined4 *)(param_2 + 0x10) = *(undefined4 *)pbVar11;
  }
  if ((bVar3 & 1) != 0) {
    bVar3 = *pbVar10;
    pbVar10 = pbVar10 + -(longlong)(char)(&DAT_180016580)[bVar3 & 0xf];
    *(uint *)(param_2 + 0x14) = *(uint *)(pbVar10 + -4) >> ((&DAT_180016590)[bVar3 & 0xf] & 0x1f);
  }
  return (longlong)pbVar10 - (longlong)param_1;
}


/* Address: 0x18000609c; Evidence: ev_68130de526637e780585cde2dfb098454754669025cd8890578bf939c79daa8d */

bool FUN_18000609c(ulonglong *param_1,longlong param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = FUN_18000734c(param_2,param_1);
  lVar2 = FUN_180005f0c(param_2,iVar1);
  return lVar2 != 0;
}


/* Address: 0x1800060c8; Evidence: ev_fbf567759a70f901f3adc6317a0b286339771ef845687cd2255147055639671f */

byte FUN_1800060c8(undefined8 param_1,byte *param_2)

{
  return *param_2 & 1;
}


/* Address: 0x1800060d0; Evidence: ev_3ce41d7038b40085f3d9b985161303f2822c1613a6ef13a6dce9ab5fbfda0e73 */

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
  
  plVar2 = FUN_180006168((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000734c((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_180005f0c((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_180009b74(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}


/* Address: 0x180006134; Evidence: ev_2bbc7a8ccf1a256771845c4318605bb5904b4ccb7d98c306cbb92f1a2928e936 */

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
  FUN_180009d00((longlong *)local_res8,(ulonglong *)param_2,(longlong)param_3,-1);
  return;
}


/* Address: 0x180006168; Evidence: ev_c4b5da65d9ed0a190dd4ecd27a26136d000faab89d1ef64a6f56e3560a603075 */

longlong * FUN_180006168(longlong *param_1,ulonglong *param_2,longlong param_3,longlong *param_4)

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
  iVar4 = FUN_18000734c(param_3,param_2);
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
        if ((longlong)*piVar8 == (ulonglong)p_Var5->BeginAddress) goto code_r0x00018000621f;
        uVar6 = (int)uVar7 + 1;
        uVar7 = (ulonglong)uVar6;
        piVar8 = piVar8 + 5;
      } while (uVar6 < uVar2);
    }
  } while (uVar2 <= (uint)uVar7);
code_r0x00018000621f:
  *param_4 = *(longlong *)((longlong)*(int *)(lVar10 + 0x10 + uVar7 * 0x14) + *param_1);
  return param_4;
}


/* Address: 0x180006254; Evidence: ev_599c24b8694575ff589e3e106a6f331e5b2227000461030a88e6c3f1b797a351 */

longlong * FUN_180006254(longlong *param_1,undefined8 param_2,byte *param_3,longlong *param_4)

{
  *param_4 = *param_1;
  if ((*param_3 & 1) != 0) {
    *param_4 = *(longlong *)((ulonglong)*(uint *)(param_3 + 0x14) + *param_1);
  }
  return param_4;
}


/* Address: 0x180006278; Evidence: ev_3323ba36548c295939ee1af00835695d81ec884b5e0b9b5201c78ac6fc5f342e */

undefined8 *
FUN_180006278(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
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
  iVar5 = FUN_18000734c(param_5,param_4);
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
LAB_180006300:
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
  goto LAB_180006300;
}


/* Address: 0x1800063b0; Evidence: ev_38290a72785d77e04eabbe513fba250c33af7c07b233c57e0f9c45639dda06b7 */

undefined4 * FUN_1800063b0(undefined4 *param_1,int *param_2,int param_3)

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
  FUN_180006754((longlong)param_2,(longlong)&local_38);
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
      lVar8 = (longlong)(char)(&DAT_180016580)[*pbVar10 & 0xf];
      bVar1 = (&DAT_180016590)[*pbVar10 & 0xf];
      pbVar5 = pbVar10 + -lVar8;
      uVar3 = *(uint *)(pbVar5 + -4);
      *(byte **)(param_2 + 2) = pbVar5;
      param_2[6] = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_180016580)[*pbVar5 & 0xf];
      bVar1 = (&DAT_180016590)[*pbVar5 & 0xf];
      pbVar5 = pbVar10 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar5 + -4);
      *(byte **)(param_2 + 2) = pbVar5;
      param_2[7] = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_180016590)[*pbVar5 & 0xf];
      pbVar10 = pbVar10 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_180016580)[*pbVar5 & 0xf]) -
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
  FUN_180006754((longlong)param_2,(longlong)&local_38);
  *(int **)param_1 = param_2;
  param_1[2] = iVar11;
  param_1[3] = uStack_4c;
  *(int **)(param_1 + 4) = param_2;
  *(ulonglong *)(param_1 + 6) = CONCAT44(uStack_3c,iVar6 + 1);
  return param_1;
}


/* Address: 0x180006530; Evidence: ev_df638fc0414c714d59205a500cabd6385004173c616149a70dfa1a491dd44418 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180006530(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,ULONG_PTR param_6,int param_7,undefined8 param_8,
                  undefined8 param_9,undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_1800094f0;
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


/* Address: 0x180006634; Evidence: ev_d425e73e6306848ac8f72123fcef372e2efe2469608faa41f28a0387ec3d8767 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180006634(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,undefined8 param_6,int param_7,int param_8,longlong param_9,
                  undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_1800096e0;
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


/* Address: 0x180006754; Evidence: ev_b78c11e658c14778bc752742478ceec5ab9516e5f55e50fc583f5463fae85c3d */

void FUN_180006754(longlong param_1,longlong param_2)

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
  pbVar7 = pbVar9 + -(longlong)(char)(&DAT_180016580)[*pbVar9 & 0xf];
  *(uint *)(param_1 + 0x18) = *(uint *)(pbVar7 + -4) >> ((&DAT_180016590)[*pbVar9 & 0xf] & 0x1f);
  *(byte **)(param_1 + 8) = pbVar7;
  bVar1 = (&DAT_180016590)[*pbVar7 & 0xf];
  pbVar7 = pbVar7 + -(longlong)(char)(&DAT_180016580)[*pbVar7 & 0xf];
  uVar3 = *(uint *)(pbVar7 + -4);
  *(byte **)(param_1 + 8) = pbVar7;
  *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
  bVar1 = (&DAT_180016590)[*pbVar7 & 0xf];
  pbVar7 = pbVar7 + -(longlong)(char)(&DAT_180016580)[*pbVar7 & 0xf];
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
      lVar8 = (longlong)(char)(&DAT_180016580)[*pbVar9 & 0xf];
      bVar1 = (&DAT_180016590)[*pbVar9 & 0xf];
      pbVar7 = pbVar9 + -lVar8;
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x18) = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_180016580)[*pbVar7 & 0xf];
      bVar1 = (&DAT_180016590)[*pbVar7 & 0xf];
      pbVar7 = pbVar9 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_180016590)[*pbVar7 & 0xf];
      pbVar9 = pbVar9 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_180016580)[*pbVar7 & 0xf]) -
                        lVar8);
      uVar3 = *(uint *)(pbVar9 + -4);
      *(byte **)(param_1 + 8) = pbVar9;
      *(uint *)(param_1 + 0x20) = uVar3 >> (bVar1 & 0x1f);
      uVar5 = *(undefined4 *)pbVar9;
      pbVar9 = pbVar9 + 4;
      *(byte **)(param_1 + 8) = pbVar9;
      *(undefined4 *)(param_1 + 0x24) = uVar5;
      lVar8 = (longlong)(char)(&DAT_180016580)[*pbVar9 & 0xf];
      bVar1 = (&DAT_180016590)[*pbVar9 & 0xf];
      pbVar7 = pbVar9 + -lVar8;
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x18) = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_180016580)[*pbVar7 & 0xf];
      bVar1 = (&DAT_180016590)[*pbVar7 & 0xf];
      pbVar7 = pbVar9 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_180016590)[*pbVar7 & 0xf];
      pbVar9 = pbVar9 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_180016580)[*pbVar7 & 0xf]) -
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


/* Address: 0x180006940; Evidence: ev_ea2744a34645d90ad4da462429a3d7d893917a7beada9738412ee743d4ee5dfd */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_180007158();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_180007158();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_180007158();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}


/* Address: 0x18000697c; Evidence: ev_3b9c5f7f902bb45dc50634dd8ede0c30a59df821372c02afa65862153c9754ea */

void FUN_18000697c(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180007158();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180007158();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180007158();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800069d0; Evidence: ev_22de7963e66f16e0a535703a9c92d1c64e636d0433f7b08a4145f578cca88ef1 */

undefined8 FUN_1800069d0(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  return *(undefined8 *)(lVar1 + 0x60);
}


/* Address: 0x1800069e4; Evidence: ev_0a513db0fecdeb5c335d9809650df95ee30e2a2dc55164e16088f663aa9886f8 */

undefined8 FUN_1800069e4(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  return *(undefined8 *)(lVar1 + 0x68);
}


/* Address: 0x1800069f8; Evidence: ev_88748a60e586d7f8c9c76a59e922ae05df8261eb41e51050b3aea58333266764 */

void FUN_1800069f8(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  *(undefined8 *)(lVar1 + 0x60) = param_1;
  return;
}


/* Address: 0x180006a10; Evidence: ev_deb8ce01701c5d991a920d6949a1d20bbffefe536683b35e32334f0d6489b557 */

void FUN_180006a10(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  *(undefined8 *)(lVar1 + 0x68) = param_1;
  return;
}


/* Address: 0x180006a28; Evidence: ev_8796cf64dc7afa3f94caf60c4d3f22e5d503200469dfc0b0657721cfafc9a614 */

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
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180007158();
  thunk_FUN_180008df0(param_1,&local_res8,param_3,param_4,
                      (_s_FuncInfo *)
                      ((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),0,0,0);
  return;
}


/* Address: 0x180006ab0; Evidence: ev_9772b218a085cf7be40c2a88fcb2196562386a4ff99f50be863b2249bf1328ed */

void FUN_180006ab0(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

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
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180007158();
  FUN_180005f70((byte *)((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),
                (byte *)local_28,*(longlong *)(param_4 + 8),**(int **)(param_4 + 0x10),'\0');
  FUN_1800092dc(param_1,&local_res8,param_3,param_4,local_28,0,0,0);
  return;
}


/* Address: 0x180006b78; Evidence: ev_d1fa3f4028eaee2f7c423973f0448a729fc1df6489e91a247568eb7e32e7ca07 */

void FUN_180006b78(longlong *param_1,longlong *param_2)

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
      FUN_18000c030(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_18000cbe0((LPVOID)0x0);
  }
  return;
}


/* Address: 0x180006bf8; Evidence: ev_7cfa49b2781bf500164c6fbf642219e81d61b367dec67dd09e0d94335f9d51c3 */

void FUN_180006bf8(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_18000cbe0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}


/* Address: 0x180006c20; Evidence: ev_0d77b2cf174b432b14a4ea54dad5781c8c6b672eabb4fb6e5addcba30f2f2d4c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006c20(int *param_1)

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
      FUN_180006c94(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}


/* Address: 0x180006c94; Evidence: ev_f47827ca23a77fa40c4a4da26e515bf0b299ce19890903c4316f4c307c09145c */

void FUN_180006c94(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE)

{
                    /* WARNING: Could not recover jumptable at 0x000180006c94. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180006c98; Evidence: ev_1a52743b23d1be87ba088503cdad90375e4d734f4b69ce8be3c540000b90141a */

/* Library Function - Single Match
    _IsExceptionObjectToBeDestroyed
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _IsExceptionObjectToBeDestroyed(longlong param_1)

{
  longlong lVar1;
  longlong *plVar2;
  
  lVar1 = FUN_180007158();
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


/* Address: 0x180006cc8; Evidence: ev_6b333530caf8a8973b19edfc097afe81e71017c0d407c6d32b62a10c10662095 */

longlong FUN_180006cc8(longlong param_1,int *param_2)

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


/* Address: 0x180006cf0; Evidence: ev_412bf0040d52171830ab0c52df2865955fb7094545c62dc94975476c8fccf56d */

undefined8 FUN_180006cf0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180007158();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180007158();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180007158();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180007158();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_18000bfac();
  }
  return 0;
}


/* Address: 0x180006d58; Evidence: ev_4974001cccd43e1f359fb235e96ed4e6801088e1836eb617322b630c2a0f87fb */

void Unwind_180006d58(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_18000bfac();
}


/* Address: 0x180006d64; Evidence: ev_c88f97339b064c8815555cb9309c9c8e25607a5b11d6d4bc1b11c26adb46258f */

undefined8 FUN_180006d64(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

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
          if (iVar4 < 1) goto LAB_180006e92;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_180013960(0x1800166d8), (int)uVar5 != 0)) {
          FUN_180006c20((int *)param_1);
        }
        FUN_18000a490();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_18000a4c0();
      }
LAB_180006e92:
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


/* Address: 0x180006f84; Evidence: ev_3633b16c217ef48a1ba76708b5d4beb03f2dba92376ae1797316273f6f02e153 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006f84(longlong *param_1,byte *param_2)

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


/* Address: 0x18000702c; Evidence: ev_c5ee91f75882f0a7a31959aef219aa2b0550c73e0817814b0eb166c0539c9727 */

int FUN_18000702c(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}


/* Address: 0x180007044; Evidence: ev_3a00379165c12ef46b3cd55e5a5737fa028091013d4058ec69fa1065a212cbfe */

void FUN_180007044(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_18000cbe0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}


/* Address: 0x180007070; Evidence: ev_447f0a0f2f9136a46fdd29de2022426e5727751acb4dcba7f161549d3da65426 */

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


/* Address: 0x180007098; Evidence: ev_9f515637f6294f0375927a05f3405fc74abd31ff5f2245fec2abe5c54f8c2ecf */

bool FUN_180007098(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180007174();
  return pvVar1 != (LPVOID)0x0;
}


/* Address: 0x1800070ac; Evidence: ev_fff49bb871683c0afed15af9d35eff2f460e3037a9c22d0a94b7a47b4b51fdb8 */

undefined1 FUN_1800070ac(void)

{
  FUN_180007110();
  return 1;
}


/* Address: 0x1800070bc; Evidence: ev_cf8f47705a1718d221551c9ef7560203b48d62098a13a258fcf12ffd14e8ba22 */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_180007288();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x1800070d8; Evidence: ev_0e8866524d22442108a8fd51345cefd3078bd0ad5d65c0a4a3839576dd428c16 */

undefined1 FUN_1800070d8(void)

{
  FUN_180007288();
  return 1;
}


/* Address: 0x1800070f0; Evidence: ev_9f54fd14939a72ed6bcb3a2a9389b90ac3ae46a78878fccd08d722bb038a83a4 */

void FUN_1800070f0(undefined *param_1)

{
  if ((param_1 != (undefined *)0x0) && (param_1 != &DAT_1800231f0)) {
    thunk_FUN_18000cbe0(param_1);
  }
  return;
}


/* Address: 0x180007110; Evidence: ev_ebe8cc9c080e0479448793107290f7a03148fa3934ae7728614176b79ecb616c */

void FUN_180007110(void)

{
  undefined *puVar1;
  
  if (DAT_180022070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180022070);
    __vcrt_FlsSetValue(DAT_180022070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_1800231f0)) {
      thunk_FUN_18000cbe0(puVar1);
    }
  }
  return;
}


/* Address: 0x180007158; Evidence: ev_105b20a224228d9d0c8ad51e6cff0278da98ed17bb84453847fa48031574b8f7 */

void FUN_180007158(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180007174();
  if (pvVar1 != (LPVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180007174; Evidence: ev_c8c3695de0648884baf268feae9625dce430f6e0a699c1cce0ab632b98495a78 */

LPVOID FUN_180007174(void)

{
  DWORD dwErrCode;
  int iVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  LPVOID pvVar4;
  
  if (DAT_180022070 == 0xffffffff) {
    pvVar3 = (LPVOID)0x0;
  }
  else {
    dwErrCode = GetLastError();
    pvVar2 = (LPVOID)__vcrt_FlsGetValue(DAT_180022070);
    pvVar4 = (LPVOID)0x0;
    pvVar3 = pvVar4;
    if (((pvVar2 != (LPVOID)0xffffffffffffffff) && (pvVar3 = pvVar2, pvVar2 == (LPVOID)0x0)) &&
       (iVar1 = __vcrt_FlsSetValue(DAT_180022070,(LPVOID)0xffffffffffffffff), pvVar3 = pvVar4,
       iVar1 != 0)) {
      pvVar3 = _calloc_base(1,0x80);
      if ((pvVar3 == (LPVOID)0x0) || (iVar1 = __vcrt_FlsSetValue(DAT_180022070,pvVar3), iVar1 == 0))
      {
        __vcrt_FlsSetValue(DAT_180022070,(LPVOID)0x0);
        pvVar2 = pvVar3;
      }
      else {
        *(undefined4 *)((longlong)pvVar3 + 0x78) = 0xfffffffe;
        pvVar2 = pvVar4;
        pvVar4 = pvVar3;
      }
      thunk_FUN_18000cbe0(pvVar2);
      pvVar3 = pvVar4;
    }
    SetLastError(dwErrCode);
  }
  return pvVar3;
}


/* Address: 0x180007240; Evidence: ev_c4ef316d3c545bb8c37297a37010897aa88a1bc3f5c5d7fd7dba43789fce6431 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_1800070f0);
  DAT_180022070 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_1800231f0);
    if (iVar2 != 0) {
      _DAT_180023268 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_180007288();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}


/* Address: 0x180007288; Evidence: ev_957c1592f5c29bd304500fd78663c08395c7801e394a5fc56ef407518dd8d2c5 */

undefined1 FUN_180007288(void)

{
  if (DAT_180022070 != -1) {
    __vcrt_FlsFree(DAT_180022070);
    DAT_180022070 = -1;
  }
  return 1;
}


/* Address: 0x1800072b0; Evidence: ev_efff8d7d89e3727a1e8ad29842468d7fc1312c920858c3e861ad4712dfd84612 */

void FUN_1800072b0(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + *param_1) == -2) {
    FUN_18000735c(param_3,(longlong)param_2,*param_2);
  }
  return;
}


/* Address: 0x1800072d8; Evidence: ev_778420a48d1e80cca02e1c65c68242d6b611a26ae27a5104041f48c4182cdf18 */

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
  
  plVar1 = FUN_180006168(param_1,param_2,param_3,local_res18);
  return *(undefined4 *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1);
}


/* Address: 0x180007304; Evidence: ev_f99c7e031c3db39bf9e76607f05aeff6dc32abb2087a1239b86016db2fa31113 */

void FUN_180007304(longlong *param_1,longlong param_2,undefined4 param_3)

{
  *(undefined4 *)((longlong)*(int *)(param_2 + 0x1c) + *param_1) = param_3;
  return;
}


/* Address: 0x180007310; Evidence: ev_abdc41d37665edde270e2588008dbd3db2a4e78bd2c10dff71ed48a20c13412e */

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
  
  plVar1 = FUN_180006168(param_1,param_2,param_3,local_res18);
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) < param_4) {
    *(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) = param_4;
  }
  return;
}


/* Address: 0x18000734c; Evidence: ev_c91a08ecaec6a2062226fa6a558a88bf710885f16e4826f1314653020dd9b7de */

void FUN_18000734c(longlong param_1,ulonglong *param_2)

{
  FUN_18000735c(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x180007354; Evidence: ev_f8326f62f224df54de0a4b007d05048ee582eec25a0302363faf7461f402b733 */

void FUN_180007354(longlong param_1,ulonglong *param_2)

{
  FUN_1800073c4(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x18000735c; Evidence: ev_62dae59f6c95df6ff75e2656c9e787c3b71f09dfd2f53cca2fd62d53568345ea */

undefined4 FUN_18000735c(longlong param_1,longlong param_2,ulonglong param_3)

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


/* Address: 0x1800073c4; Evidence: ev_dee709b5035a5f739f7ca88def25999e3580cf73b454dc0c3c99b6e8e732f321 */

int FUN_1800073c4(longlong param_1,longlong param_2,ulonglong param_3)

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
    pbVar6 = pbVar6 + -(longlong)(char)(&DAT_180016580)[uVar2];
    puVar1 = (uint *)(pbVar6 + -4);
    if (*puVar1 >> ((&DAT_180016590)[uVar2] & 0x1f) != 0) {
      do {
        pbVar7 = pbVar6 + -(longlong)(char)(&DAT_180016580)[*pbVar6 & 0xf];
        uVar4 = uVar4 + (*(uint *)(pbVar7 + -4) >> ((&DAT_180016590)[*pbVar6 & 0xf] & 0x1f));
        if (param_3 < (ulonglong)uVar4 + (ulonglong)**(uint **)(param_2 + 0x10) +
                      *(longlong *)(param_2 + 8)) break;
        uVar5 = uVar5 + 1;
        pbVar6 = pbVar7 + -(longlong)(char)(&DAT_180016580)[*pbVar7 & 0xf];
        iVar3 = (*(uint *)(pbVar6 + -4) >> ((&DAT_180016590)[*pbVar7 & 0xf] & 0x1f)) - 1;
      } while (uVar5 < *puVar1 >> ((&DAT_180016590)[uVar2] & 0x1f));
      if (uVar5 != 0) {
        return iVar3;
      }
      return -1;
    }
  }
  return -1;
}


/* Address: 0x1800074b4; Evidence: ev_01fde8299f7ef89d362e2f5aad77144a9986c5278026ad14a029472681596f66 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_1800074b4(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
    lVar2 = FUN_1800069d0();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_1800069d0();
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
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_1800231e8 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_1800069e4();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_1800069e4();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_180007666;
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
                  FUN_180006cc8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_180014070(param_2,pauVar3,(longlong)iVar1);
        goto LAB_180007666;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_180014070(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_180007666;
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
    lVar2 = (*(code *)DAT_1800231e8)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_180006cc8(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_180007666:
  return (char)uVar6;
}


/* Address: 0x1800076a8; Evidence: ev_8eb3dcd8fd153eda6286d417d0c61b6dce2c6ae4504b27984084158f5434bcfe */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_1800076a8(longlong param_1,undefined1 (*param_2) [32],longlong param_3,byte *param_4)

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
    lVar2 = FUN_1800069d0();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 8);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_1800069d0();
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
  if ((((*(byte *)(param_3 + 4) & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_1800231e8 == 0))
  {
    if ((*(byte *)(param_3 + 4) & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_1800069e4();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_1800069e4();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_18000785d;
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
                  FUN_180006cc8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_180014070(param_2,pauVar3,(longlong)iVar1);
        goto LAB_18000785d;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_180014070(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_18000785d;
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
    lVar2 = (*(code *)DAT_1800231e8)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_180006cc8(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_18000785d:
  return (char)uVar6;
}


/* Address: 0x1800078a0; Evidence: ev_011c1aeac7c4d39b4a3d1dcb1c0319633e762b170373db1d2e367d9628839134 */

void FUN_1800078a0(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
  cVar1 = FUN_1800074b4(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180006cc8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_1800069e4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a2b8(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180006cc8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_1800069e4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a2c4(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x180007960; Evidence: ev_ff4d32bf8ec3f7bc243d150ce5967a29908862a4ccdf15add10c710852157bb9 */

void FUN_180007960(longlong param_1,undefined1 (*param_2) [32],longlong param_3,byte *param_4)

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
  cVar1 = FUN_1800076a8(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180006cc8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_1800069e4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a2b8(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180006cc8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_1800069e4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000a2c4(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x180007a24; Evidence: ev_b51250467b857ea19a571a459bdecb6d8e416ed9fb3a974de8f70a30f39cdaf8 */

void FUN_180007a24(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
  pauVar4 = (undefined1 (*) [32])FUN_180006168(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_1800078a0(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_1800069d0();
  FUN_180006530(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x180007afc; Evidence: ev_35bf285219284a1b9f967da2751f5f63846534748faa9ae93ba8a46519b3b474 */

void FUN_180007afc(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
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
  pauVar4 = (undefined1 (*) [32])FUN_180006254(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_180007960(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0x10);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_1800069d0();
  FUN_180006634(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,iVar2,
                param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x180007bd4; Evidence: ev_a6157f99c3ad8e5fdaccfca413ba7db722c1b7037ebf399e3d0ecce9e752a5b3 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180007bd4(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,uint *param_5
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
  
  local_58 = DAT_180022000 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar5 = FUN_18000a00c(param_2,param_4,(longlong)param_5);
  if ((-2 < iVar5) && (iVar5 < (int)param_5[1])) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar7 = FUN_180007158();
      if (*(longlong *)(lVar7 + 0x20) == 0) {
        return;
      }
      lVar7 = FUN_180007158();
      param_1 = *(int **)(lVar7 + 0x20);
      lVar7 = FUN_180007158();
      local_100 = *(ULONG_PTR *)(lVar7 + 0x28);
      FUN_180006a10(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_1800080cf;
      lVar7 = FUN_180007158();
      if (*(longlong *)(lVar7 + 0x38) != 0) {
        lVar7 = FUN_180007158();
        piVar11 = *(int **)(lVar7 + 0x38);
        lVar7 = FUN_180007158();
        *(undefined8 *)(lVar7 + 0x38) = 0;
        cVar3 = FUN_18000a0a8((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          uVar8 = FUN_18000a190(piVar11);
          if ((char)uVar8 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_18000bfac();
          }
          FUN_180006c20(param_1);
          FUN_1800094cc(&local_c8);
                    /* WARNING: Subroutine does not return */
          FUN_180006f84(&local_c8,&DAT_180020688);
        }
      }
    }
    uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
    local_a8 = param_4[1];
    local_b0 = param_5;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
      if (param_5[3] != 0) {
        FUN_180006278(&local_90,&local_b0,iVar5,param_4,(longlong)param_5);
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
                  lVar7 = FUN_1800069e4();
                  piVar11 = (int *)(lVar7 + 4 + (longlong)iVar13);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_1800069e4();
                  for (iVar13 = *(int *)(lVar7 + iVar13); 0 < iVar13; iVar13 = iVar13 + -1) {
                    iVar2 = *piVar11;
                    lVar7 = FUN_1800069e4();
                    uVar9 = FUN_180008b90((byte *)&local_70,(byte *)(iVar2 + lVar7),
                                          *(byte **)(param_1 + 0xc));
                    if ((int)uVar9 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_180007a24((ULONG_PTR)param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,
                                    (byte *)&local_70,(byte *)(iVar2 + lVar7),
                                    in_stack_fffffffffffffed0);
                      goto LAB_180007f3f;
                    }
                    piVar11 = piVar11 + 1;
                  }
                  uVar12 = (int)uVar8 + 1;
                  uVar8 = (ulonglong)uVar12;
                } while (uVar12 != local_d8);
              }
            }
LAB_180007f3f:
            uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar6 = uVar6 + 1;
          } while (uVar6 < local_78);
        }
      }
      if ((0x19930520 < (*param_5 & 0x1fffffff)) &&
         (((uVar6 = param_5[8], uVar6 != 0 && (lVar7 = FUN_1800069d0(), lVar7 + (int)uVar6 != 0)) ||
          (((param_5[9] & 4) != 0 && (bVar4 = FUN_18000609c(param_4,(longlong)param_5), !bVar4))))))
      {
        if ((param_5[9] & 4) != 0) {
          lVar7 = FUN_180007158();
          *(int **)(lVar7 + 0x20) = param_1;
          lVar7 = FUN_180007158();
          *(ULONG_PTR *)(lVar7 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_18000bfac();
        }
        uVar6 = param_5[8];
        if (uVar6 == 0) {
          piVar11 = (int *)0x0;
        }
        else {
          lVar7 = FUN_1800069d0();
          piVar11 = (int *)((int)uVar6 + lVar7);
        }
        cVar3 = FUN_18000a0a8((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          plVar10 = FUN_180006168(param_2,param_4,(longlong)param_5,&local_e0);
          FUN_180006530(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar10,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar14,0xffffffff),0,param_4,param_6);
        }
      }
    }
    else if (param_5[3] != 0) {
      if (param_6 != 0) goto LAB_1800080cf;
      FUN_180008624(param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,iVar5);
    }
    lVar7 = FUN_180007158();
    if (*(longlong *)(lVar7 + 0x38) == 0) {
      return;
    }
  }
LAB_1800080cf:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800080d8; Evidence: ev_f0f0bb3881f2e22cd776ec0d8d01e87d7fee44651cfd56610664d181d0b6136b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800080d8(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,byte *param_5
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
  
  local_58 = DAT_180022000 ^ (ulonglong)auStackY_1c8;
  local_128 = param_8;
  local_120 = param_2;
  iVar7 = FUN_180007354((longlong)param_5,param_4);
  if ((int)param_4[9] == 0) {
    lVar8 = FUN_180007158();
    if (*(int *)(lVar8 + 0x78) != -2) {
      lVar8 = FUN_180007158();
      iVar7 = *(int *)(lVar8 + 0x78);
      lVar8 = FUN_180007158();
      *(undefined4 *)(lVar8 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar8 = FUN_180007158();
    if (*(int *)(lVar8 + 0x78) != -2) goto LAB_18000861e;
    iVar7 = (int)param_4[9] + -2;
  }
  if (-2 < iVar7) {
    if (*(int *)(param_5 + 8) == 0) {
      uVar11 = 0;
    }
    else {
      uVar11 = *(byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) & 0xf;
      uVar11 = *(uint *)((byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_180016580)[uVar11])) >>
               ((&DAT_180016590)[uVar11] & 0x1f);
    }
    if (iVar7 < (int)uVar11) {
      local_158 = param_3;
      if ((((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
          ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
         (*(longlong *)(param_1 + 0xc) == 0)) {
        lVar8 = FUN_180007158();
        if (*(longlong *)(lVar8 + 0x20) == 0) {
          return;
        }
        lVar8 = FUN_180007158();
        param_1 = *(int **)(lVar8 + 0x20);
        lVar8 = FUN_180007158();
        local_158 = *(ULONG_PTR *)(lVar8 + 0x28);
        FUN_180006a10(*(undefined8 *)(param_1 + 0xe));
        if ((param_1 == (int *)0x0) ||
           (((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
            (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
             (*(longlong *)(param_1 + 0xc) == 0)))))) goto LAB_18000861e;
        lVar8 = FUN_180007158();
        if (*(longlong *)(lVar8 + 0x38) != 0) {
          lVar8 = FUN_180007158();
          piVar16 = *(int **)(lVar8 + 0x38);
          lVar8 = FUN_180007158();
          *(undefined8 *)(lVar8 + 0x38) = 0;
          cVar5 = FUN_18000a0a8((longlong)param_1,piVar16);
          if (cVar5 == '\0') {
            uVar9 = FUN_18000a190(piVar16);
            if ((char)uVar9 != '\0') {
              FUN_180006c20(param_1);
              FUN_1800094cc(&local_140);
                    /* WARNING: Subroutine does not return */
              FUN_180006f84(&local_140,&DAT_180020688);
            }
                    /* WARNING: Subroutine does not return */
            FUN_18000bfac();
          }
        }
      }
      FUN_1800093ac(local_d0,(longlong)param_5,param_4[1]);
      if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
         ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
        if (local_d0[0] != 0) {
          FUN_1800063b0((undefined4 *)&local_118,(int *)local_d0,iVar7);
          uVar11 = (uint)uStack_110;
          local_140 = local_118;
          uStack_138 = uStack_110;
          if (uVar11 < local_100) {
            do {
              local_140 = *(longlong *)(local_118 + 0x18);
              uStack_138 = *(undefined8 *)(local_118 + 0x20);
              if ((*(int *)(local_118 + 0x18) <= iVar7) && (iVar7 <= *(int *)(local_118 + 0x1c))) {
                FUN_180009328((HandlerMap4 *)local_a8,(longlong)&local_140,param_4[1],
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
                    lVar8 = FUN_1800069e4();
                    piVar16 = (int *)((longlong)iVar15 + lVar8 + 4);
                    iVar15 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                    lVar8 = FUN_1800069e4();
                    for (iVar15 = *(int *)(lVar8 + iVar15); 0 < iVar15; iVar15 = iVar15 + -1) {
                      iVar1 = *piVar16;
                      lVar8 = FUN_1800069e4();
                      uVar10 = FUN_180008cb0((longlong)&local_f8,(byte *)(iVar1 + lVar8),
                                             *(byte **)(param_1 + 0xc));
                      if ((int)uVar10 != 0) {
                        FUN_180007afc((ULONG_PTR)param_1,local_120,local_158,param_4,param_5,
                                      (longlong)&local_f8,(byte *)(iVar1 + lVar8),(int *)&local_140)
                        ;
                        goto LAB_1800084a7;
                      }
                      piVar16 = piVar16 + 1;
                    }
                    FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_a8);
                    local_160 = local_160 + 1;
                  } while (local_160 != iVar4);
                }
              }
LAB_1800084a7:
              pbVar14 = *(byte **)(local_118 + 8);
              uVar11 = uVar11 + 1;
              lVar8 = (longlong)(char)(&DAT_180016580)[*pbVar14 & 0xf];
              bVar6 = (&DAT_180016590)[*pbVar14 & 0xf];
              pbVar12 = pbVar14 + -lVar8;
              uVar2 = *(uint *)(pbVar12 + -4);
              *(byte **)(local_118 + 8) = pbVar12;
              *(uint *)(local_118 + 0x18) = uVar2 >> (bVar6 & 0x1f);
              cVar5 = (&DAT_180016580)[*pbVar12 & 0xf];
              pbVar13 = pbVar14 + (-lVar8 - (longlong)cVar5);
              *(uint *)(local_118 + 0x1c) =
                   *(uint *)(pbVar13 + -4) >> ((&DAT_180016590)[*pbVar12 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar13;
              pbVar14 = pbVar14 + ((-(longlong)cVar5 -
                                   (longlong)(char)(&DAT_180016580)[*pbVar13 & 0xf]) - lVar8);
              *(uint *)(local_118 + 0x20) =
                   *(uint *)(pbVar14 + -4) >> ((&DAT_180016590)[*pbVar13 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar14;
              uVar3 = *(undefined4 *)pbVar14;
              *(byte **)(local_118 + 8) = pbVar14 + 4;
              *(undefined4 *)(local_118 + 0x24) = uVar3;
            } while (uVar11 < local_100);
          }
        }
        if (((*param_5 & 0x40) != 0) && (bVar6 = FUN_1800060c8(param_4,param_5), bVar6 == 0)) {
          lVar8 = FUN_180007158();
          *(int **)(lVar8 + 0x20) = param_1;
          lVar8 = FUN_180007158();
          *(ULONG_PTR *)(lVar8 + 0x28) = local_158;
                    /* WARNING: Subroutine does not return */
          FUN_18000bfac();
        }
      }
      else if (local_d0[0] != 0) {
        if (param_6 != '\0') goto LAB_18000861e;
        FUN_180008888(param_1,param_2,local_158,param_4,param_5,iVar7);
      }
      lVar8 = FUN_180007158();
      if (*(longlong *)(lVar8 + 0x38) == 0) {
        return;
      }
    }
  }
LAB_18000861e:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180008624; Evidence: ev_5874d200de4978d69a3e033413fbfaf3417791fa4057e13302cf3fc41afc0e2a */

void FUN_180008624(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
    lVar3 = FUN_180007158();
    if (*(longlong *)(lVar3 + 0x10) != 0) {
      pvVar4 = EncodePointer((PVOID)0x0);
      lVar3 = FUN_180007158();
      if ((((*(PVOID *)(lVar3 + 0x10) != pvVar4) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar1 = FUN_180005e64(param_1,param_2,param_3), iVar1 != 0)
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
    FUN_180006278(&local_60,&local_98,param_6,param_4,param_5);
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
          if ((iVar1 != 0) && (lVar3 = FUN_1800069d0(), lVar3 + iVar1 != 0)) {
            iVar1 = *(int *)(pbVar5 + 4);
            if (iVar1 == 0) {
              lVar3 = 0;
            }
            else {
              lVar3 = FUN_1800069d0();
              lVar3 = lVar3 + iVar1;
            }
            if (*(char *)(lVar3 + 0x10) != '\0') goto LAB_18000884d;
          }
          if ((*pbVar5 & 0x40) == 0) {
            FUN_180007a24((ULONG_PTR)param_1,param_2,param_3,param_4,param_5,pbVar5,(byte *)0x0,
                          (int *)local_78);
          }
        }
LAB_18000884d:
        uVar2 = uVar2 + 1;
      } while (uVar2 < local_48);
    }
  }
  return;
}


/* Address: 0x180008888; Evidence: ev_066b63ef70607c7e6333425d5afabfbafeccacbae50e10c5a549f8077b306333 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180008888(int *param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
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
  
  local_50 = DAT_180022000 ^ (ulonglong)auStackY_178;
  if (*param_1 != -0x7ffffffd) {
    local_f0 = param_2;
    lVar5 = FUN_180007158();
    if (*(longlong *)(lVar5 + 0x10) != 0) {
      pvVar6 = EncodePointer((PVOID)0x0);
      lVar5 = FUN_180007158();
      if ((((*(PVOID *)(lVar5 + 0x10) != pvVar6) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar4 = FUN_180005eb8(param_1,param_2,param_3), iVar4 != 0)
         ) {
        return;
      }
    }
    FUN_1800093ac(local_78,(longlong)param_5,param_4[1]);
    if (local_78[0] == 0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    FUN_1800063b0((undefined4 *)&local_e8,(int *)local_78,param_6);
    local_118 = uStack_e0;
    if (uStack_e0 < local_d0) {
      do {
        local_100 = *(undefined8 *)(local_e8 + 0x18);
        uStack_f8 = *(undefined8 *)(local_e8 + 0x20);
        if ((*(int *)(local_e8 + 0x18) <= param_6) && (param_6 <= *(int *)(local_e8 + 0x1c))) {
          FUN_180009328((HandlerMap4 *)local_c8,(longlong)&local_100,param_4[1],
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
          if ((local_a8 != 0) && (lVar7 = FUN_1800069d0(), lVar7 + lVar5 != 0)) {
            lVar5 = (longlong)local_a8;
            if (local_a8 == 0) {
              lVar7 = 0;
            }
            else {
              lVar7 = FUN_1800069d0();
              lVar7 = lVar7 + lVar5;
            }
            if (*(char *)(lVar7 + 0x10) != '\0') goto LAB_180008abc;
          }
          if ((local_ac & 0x40) == 0) {
            FUN_180007afc((ULONG_PTR)param_1,local_f0,param_3,param_4,param_5,(longlong)local_b0,
                          (byte *)0x0,(int *)&local_100);
          }
        }
LAB_180008abc:
        pbVar11 = *(byte **)(local_e8 + 8);
        lVar5 = (longlong)(char)(&DAT_180016580)[*pbVar11 & 0xf];
        bVar1 = (&DAT_180016590)[*pbVar11 & 0xf];
        pbVar8 = pbVar11 + -lVar5;
        uVar3 = *(uint *)(pbVar8 + -4);
        *(byte **)(local_e8 + 8) = pbVar8;
        *(uint *)(local_e8 + 0x18) = uVar3 >> (bVar1 & 0x1f);
        cVar2 = (&DAT_180016580)[*pbVar8 & 0xf];
        pbVar9 = pbVar11 + (-lVar5 - (longlong)cVar2);
        *(uint *)(local_e8 + 0x1c) =
             *(uint *)(pbVar9 + -4) >> ((&DAT_180016590)[*pbVar8 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar9;
        pbVar11 = pbVar11 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_180016580)[*pbVar9 & 0xf]) -
                            lVar5);
        *(uint *)(local_e8 + 0x20) =
             *(uint *)(pbVar11 + -4) >> ((&DAT_180016590)[*pbVar9 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar11;
        *(undefined4 *)(local_e8 + 0x24) = *(undefined4 *)pbVar11;
        local_118 = local_118 + 1;
        *(byte **)(local_e8 + 8) = pbVar11 + 4;
      } while (local_118 < local_d0);
    }
  }
  return;
}


/* Address: 0x180008b90; Evidence: ev_33bcbd4f5f6ee597d9a63ea4928d48d4275d40258e150a9a3c3f9ca0832ecabc */

undefined8 FUN_180008b90(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_1800069d0(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_1800069d0();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_1800069d0();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_1800069e4();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_1800069d0();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_1800069e4();
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


/* Address: 0x180008cb0; Evidence: ev_c9eabc3c321eb6666f554a9133ab413815633f8febad6b0070f162d6ff6dba6c */

undefined8 FUN_180008cb0(longlong param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  byte *pbVar5;
  
  iVar1 = *(int *)(param_1 + 8);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_1800069d0(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 8);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_1800069d0();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') &&
       (((*(byte *)(param_1 + 4) & 0x80) == 0 || ((*param_2 & 0x10) == 0)))) {
      iVar1 = *(int *)(param_1 + 8);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_1800069d0();
        lVar2 = iVar1 + lVar2;
      }
      lVar3 = FUN_1800069e4();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 8);
        if (iVar1 != 0) {
          lVar4 = FUN_1800069d0();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_1800069e4();
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


/* Address: 0x180008df0; Evidence: ev_1b9bae25da8ecfa734c3c6a5f97f811ca5c8550a6c3107e602b0737123880b3b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180008df0(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180007158();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_180008e5e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_180008e5e:
      if (bVar5) goto LAB_180008e75;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_180008e75:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_1800069d0(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_1800069e4();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180007bd4(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_180008f01:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_18000735c((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000901d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180008f01;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000901d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180009b74((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x180009024; Evidence: ev_f478a2924079322dad58ac4b6ec888fda8c82d861892d3961c0c3eccef7353b0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180009024(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180007158();
  uVar5 = 0;
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        if (*(longlong *)(param_1 + 0x18) == 0x19930520) goto LAB_1800090a6;
        goto LAB_180009098;
      }
    }
    else {
LAB_180009098:
      if (*param_1 == -0x7fffffda) goto LAB_1800090a6;
    }
    if (((byte)*param_5 & 0x20) != 0) {
      return 1;
    }
  }
LAB_1800090a6:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    FUN_1800093ac(local_48,(longlong)param_5,*(longlong *)(param_4 + 8));
    if ((local_48[0] == 0) && (((byte)*param_5 & 0x40) == 0)) {
      return 1;
    }
    if ((*param_1 == -0x1f928c9d) &&
       (((2 < (uint)param_1[6] && (0x19930522 < (uint)param_1[8])) &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_1800069e4();
      pcVar6 = (code *)(lVar2 + iVar1);
      if (pcVar6 != (code *)0x0) {
        uVar3 = (*pcVar6)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar8,(uint)param_8));
        return uVar3;
      }
    }
    FUN_1800080d8(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,(byte *)param_5,param_8,
                  CONCAT44(uVar7,param_6),param_7);
    return 1;
  }
  if (*(int *)(param_5 + 8) == 0) {
    return 1;
  }
  uVar4 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
  if (*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
               (-4 - (longlong)(char)(&DAT_180016580)[uVar4])) >> ((&DAT_180016590)[uVar4] & 0x1f)
      == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_1800091cb:
    __FrameHandler4::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_1800073c4((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if (iVar1 < -1) {
LAB_1800092cc:
                    /* WARNING: Subroutine does not return */
        abort();
      }
      if (*(int *)(param_5 + 8) != 0) {
        uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
        uVar5 = *(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                         (-4 - (longlong)(char)(&DAT_180016580)[uVar5])) >>
                ((&DAT_180016590)[uVar5] & 0x1f);
      }
      if ((int)uVar5 <= iVar1) goto LAB_1800092cc;
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_1800091cb;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) ||
         (uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf,
         (int)(*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_180016580)[uVar5])) >>
              ((&DAT_180016590)[uVar5] & 0x1f)) <= iVar1)) goto LAB_1800092cc;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180009d00((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x1800092d4; Evidence: ev_b4e8245e4d3554803ef92fc183b1a68d5bcef343c34927f322106216ac5e855d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
thunk_FUN_180008df0(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180007158();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_180008e5e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_180008e5e:
      if (bVar5) goto LAB_180008e75;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_180008e75:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_1800069d0(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_1800069e4();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180007bd4(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_180008f01:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_18000735c((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000901d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180008f01;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000901d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180009b74((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x1800092dc; Evidence: ev_603d6170ae3d5f3ee0cda74f724ebcf78c899e6fc2ec5b2de832388feb2701ad */

ulonglong FUN_1800092dc(int *param_1,__uint64 *param_2,ULONG_PTR param_3,
                       _xDISPATCHER_CONTEXT *param_4,FuncInfo4 *param_5,int param_6,
                       undefined8 param_7,byte param_8)

{
  ulonglong uVar1;
  longlong lVar2;
  
  uVar1 = FUN_180009024(param_1,param_2,param_3,param_4,param_5,param_6,param_7,param_8);
  lVar2 = FUN_180007158();
  *(undefined4 *)(lVar2 + 0x78) = 0xfffffffe;
  return uVar1 & 0xffffffff;
}


/* Address: 0x180009328; Evidence: ev_4eadb891ec651792615d17fa92d4b22cbb097bb031e1840fcb3ae9e9ed04a294 */

HandlerMap4 *
FUN_180009328(HandlerMap4 *param_1,longlong param_2,longlong param_3,undefined4 param_4)

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
    lVar2 = (longlong)pbVar1 - (longlong)(char)(&DAT_180016580)[*pbVar1 & 0xf];
    *(uint *)param_1 = *(uint *)(lVar2 + -4) >> ((&DAT_180016590)[*pbVar1 & 0xf] & 0x1f);
    *(longlong *)(param_1 + 8) = lVar2;
    *(longlong *)(param_1 + 0x10) = lVar2;
    FH4::HandlerMap4::DecompHandler(param_1);
  }
  return param_1;
}


/* Address: 0x1800093ac; Evidence: ev_4a4726ff2ca0a5b8e2f41b88da682d100525b6bbb9eab8add431d8af52270447 */

uint * FUN_1800093ac(uint *param_1,longlong param_2,longlong param_3)

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
    bVar1 = (&DAT_180016590)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_180016580)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    *param_1 = uVar2 >> (bVar1 & 0x1f);
    *(byte **)(param_1 + 4) = pbVar3;
    bVar1 = (&DAT_180016590)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_180016580)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    param_1[6] = uVar2 >> (bVar1 & 0x1f);
    bVar1 = (&DAT_180016590)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_180016580)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    param_1[7] = uVar2 >> (bVar1 & 0x1f);
    puVar4 = (uint *)(pbVar3 + -(longlong)(char)(&DAT_180016580)[*pbVar3 & 0xf]);
    param_1[8] = puVar4[-1] >> ((&DAT_180016590)[*pbVar3 & 0xf] & 0x1f);
    *(uint **)(param_1 + 2) = puVar4;
    uVar2 = *puVar4;
    *(uint **)(param_1 + 2) = puVar4 + 1;
    param_1[9] = uVar2;
  }
  return param_1;
}


/* Address: 0x180009490; Evidence: ev_0f6a60a7cadec6fd753640e821a3449712d9b526d15974645e46130f3d33b0ec */

undefined8 * FUN_180009490(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180006b78((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x1800094cc; Evidence: ev_27ea865ad26f5a9c8fb4176066ebaec47b50053b757c8ba604c1c70be80f17d4 */

undefined8 * FUN_1800094cc(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x1800094f0; Evidence: ev_1f9d5ef7c5e37483be4ae72e26225d2ea01b89b6199409b86ed9a9d012fbc0f3 */

undefined8 FUN_1800094f0(longlong param_1)

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
  
  lVar6 = FUN_180007158();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180007158();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_180007158();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_180007158();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_180007158();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180007158();
  }
  uVar10 = _CallSettingFrame();
  FUN_18000697c((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_180006c20(piVar3);
  }
  lVar8 = FUN_180007158();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_180007158();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}


/* Address: 0x1800096e0; Evidence: ev_db7269df209ec367bff09853f2b8a3cdee7298bd8a2c3c44ca57abc4bfe66630 */

longlong FUN_1800096e0(longlong param_1)

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
  
  lVar6 = FUN_180007158();
  uVar2 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180007158();
  uVar3 = *(undefined8 *)(lVar6 + 0x20);
  piVar4 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x40);
  local_58[0] = *(longlong *)(param_1 + 0x48);
  local_58[1] = *(undefined8 *)(param_1 + 0x68);
  uVar1 = *(undefined4 *)(param_1 + 0x38);
  __except_validate_context_record(lVar6);
  lVar7 = FUN_180007158();
  *(int **)(lVar7 + 0x20) = piVar4;
  lVar7 = FUN_180007158();
  *(longlong *)(lVar7 + 0x28) = lVar6;
  lVar6 = FUN_180007158();
  puVar8 = _CreateFrameInfo(local_58 + 2,*(undefined8 *)(*(longlong *)(lVar6 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180007158();
  }
  lVar6 = FUN_18000a8e0();
  if ((lVar6 < 2) && (lVar6 = local_58[lVar6], lVar6 == 0)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_18000a910();
  FUN_18000697c((longlong)puVar8);
  if ((((*piVar4 == -0x1f928c9d) && (piVar4[6] == 4)) &&
      ((piVar4[8] == 0x19930520 || (piVar4[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar4 + 10)), iVar5 != 0)) {
    FUN_180006c20(piVar4);
  }
  lVar7 = FUN_180007158();
  *(undefined8 *)(lVar7 + 0x20) = uVar3;
  lVar7 = FUN_180007158();
  *(undefined8 *)(lVar7 + 0x28) = uVar2;
  lVar7 = FUN_180007158();
  *(undefined4 *)(lVar7 + 0x78) = uVar1;
  lVar7 = FUN_180007158();
  *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
  return lVar6;
}


/* Address: 0x180009924; Evidence: ev_f49796d2afdcf33ce2d72080bac0d604a676d7e0f1870f7ace61bb11ea4deb85 */

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
    pHVar8 = pHVar8 + -(longlong)(char)(&DAT_180016580)[(byte)HVar2 & 0xf];
    *(uint *)(this + 0x1c) = *(uint *)(pHVar8 + -4) >> ((&DAT_180016590)[(byte)HVar2 & 0xf] & 0x1f);
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
    pHVar8 = pHVar8 + -(longlong)(char)(&DAT_180016580)[(byte)HVar2 & 0xf];
    *(uint *)(this + 0x24) = *(uint *)(pHVar8 + -4) >> ((&DAT_180016590)[(byte)HVar2 & 0xf] & 0x1f);
    *(HandlerMap4 **)(this + 8) = pHVar8;
  }
  pHVar9 = pHVar8 + 4;
  *(undefined4 *)(this + 0x28) = *(undefined4 *)pHVar8;
  bVar6 = (byte)HVar1 & 0x30;
  *(HandlerMap4 **)(this + 8) = pHVar9;
  if (((byte)HVar1 & 8) == 0) {
    if (bVar6 == 0x10) {
      bVar6 = (&DAT_180016590)[(byte)*pHVar9 & 0xf];
      uVar5 = *(uint *)(((longlong)pHVar9 - (longlong)(char)(&DAT_180016580)[(byte)*pHVar9 & 0xf]) +
                       -4);
      *(longlong *)(this + 8) =
           (longlong)pHVar9 - (longlong)(char)(&DAT_180016580)[(byte)*pHVar9 & 0xf];
      *(ulonglong *)(this + 0x30) = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
      return;
    }
    if (bVar6 != 0x20) {
      return;
    }
    bVar6 = (&DAT_180016590)[(byte)*pHVar9 & 0xf];
    pHVar9 = pHVar9 + -(longlong)(char)(&DAT_180016580)[(byte)*pHVar9 & 0xf];
    uVar5 = *(uint *)(pHVar9 + -4);
    *(HandlerMap4 **)(this + 8) = pHVar9;
    *(ulonglong *)(this + 0x30) = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
    bVar6 = (&DAT_180016590)[(byte)*pHVar9 & 0xf];
    uVar5 = *(uint *)(((longlong)pHVar9 - (longlong)(char)(&DAT_180016580)[(byte)*pHVar9 & 0xf]) +
                     -4);
    *(longlong *)(this + 8) =
         (longlong)pHVar9 - (longlong)(char)(&DAT_180016580)[(byte)*pHVar9 & 0xf];
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


/* Address: 0x180009aac; Evidence: ev_32ffb3cb00f8f39256b1fb116a381491815796d66be4d1366e3c581aff0fb2db */

undefined8 FUN_180009aac(undefined8 *param_1,longlong param_2,undefined4 *param_3)

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
      lVar2 = FUN_180007158();
      *(undefined4 *)(lVar2 + 0x40) = 1;
      *param_3 = 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x180009b44; Evidence: ev_5c871e71a8eec405d81eac0c0c70d2bec4569a7ca08e327e5f3765322f599758 */

/* Library Function - Single Match
    int __cdecl ExFilterRethrowFH4(struct _EXCEPTION_POINTERS * __ptr64,struct EHExceptionRecord *
   __ptr64,int,int * __ptr64)
   
   Library: Visual Studio 2019 Release */

int __cdecl
ExFilterRethrowFH4(_EXCEPTION_POINTERS *param_1,EHExceptionRecord *param_2,int param_3,int *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_180009aac(&param_1->ExceptionRecord,(longlong)param_2,param_4);
  if ((int)uVar1 == 0) {
    lVar2 = FUN_180007158();
    *(int *)(lVar2 + 0x78) = param_3;
  }
  return (int)uVar1;
}


/* Address: 0x180009b74; Evidence: ev_7f4212cb861c84cc158bf2ae0c4abef653061ac9b5edb9a8febe4b4c5aeda1cd */

void FUN_180009b74(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_1800069d0();
  iVar2 = FUN_1800072b0(param_1,param_2,param_3);
  lVar4 = FUN_180007158();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_1800069d0();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_1800069d0();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_1800069d0();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_1800069d0();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180007304(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_1800069d0();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_1800069d0();
        FUN_1800069d0();
      }
      _CallSettingFrame();
      FUN_1800069f8(uVar3);
    }
  }
  lVar4 = FUN_180007158();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180007158();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180007304(param_1,param_3,iVar2);
  return;
}


/* Address: 0x180009d00; Evidence: ev_c35c4d80f37c234d02c124a94791095b5fed54f4456151e73422c2628fc973d4 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180009d00(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

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
  
  local_58 = DAT_180022000 ^ (ulonglong)auStackY_138;
  local_f0 = param_4;
  local_d8 = param_1;
  local_c0 = param_1;
  local_d0 = FUN_1800069d0();
  iVar6 = FUN_180007354(param_3,param_2);
  puVar1 = param_2 + 9;
  local_c8 = puVar1;
  if ((int)*puVar1 == 0) {
    lVar7 = FUN_180007158();
    if (*(int *)(lVar7 + 0x78) != -2) {
      lVar7 = FUN_180007158();
      iVar6 = *(int *)(lVar7 + 0x78);
      lVar7 = FUN_180007158();
      *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar7 = FUN_180007158();
    if (*(int *)(lVar7 + 0x78) != -2) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    iVar6 = (int)*puVar1 + -2;
  }
  lVar7 = FUN_180007158();
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
    local_70 = local_70 + -(longlong)(char)(&DAT_180016580)[uVar8];
    local_78[0] = *(uint *)(local_70 + -4) >> ((&DAT_180016590)[uVar8] & 0x1f);
  }
  local_108 = (UWMap4 *)local_78;
  local_e8 = local_78;
  pbStack_100 = local_70;
  local_e0 = local_70;
  local_b8 = puVar9;
  FUN_18000a2d4((UWMap4 *)local_78,iVar6,param_4,(longlong *)&local_108,(longlong *)&local_e8);
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
    iVar6 = FUN_18000a3a4(&local_e8,param_4,(longlong)&local_98,iVar6,&local_108);
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
      FUN_1800069f8(local_d0);
    }
  }
  lVar7 = FUN_180007158();
  if (0 < *(int *)(lVar7 + 0x30)) {
    lVar7 = FUN_180007158();
    *(int *)(lVar7 + 0x30) = *(int *)(lVar7 + 0x30) + -1;
  }
  return;
}


/* Address: 0x18000a00c; Evidence: ev_c6e6895a740d6628d22700d8a783f6d88eb800f4dc9f7ac225ade339cc92e608 */

int FUN_18000a00c(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_18000734c(param_3,param_2);
  FUN_180006168(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_180007304(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}


/* Address: 0x18000a0a8; Evidence: ev_5a15c5f66ec3fad368d1c64f7de79a648f5c3193a9efc9d7cc169a1cafa8327c */

undefined1 FUN_18000a0a8(longlong param_1,int *param_2)

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
      lVar4 = FUN_1800069e4();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_1800069e4();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_1800069e4();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_1800069d0();
          uVar6 = FUN_180008b90((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
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


/* Address: 0x18000a190; Evidence: ev_50a126ce1f7e3edd0205ec2d8351407c1d57cbaf2d2910bd01d0110fc46bfbcd */

ulonglong FUN_18000a190(int *param_1)

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
      lVar2 = FUN_1800069d0();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_1800069d0();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_1800069d0();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_18000702c(lVar2 + 8,0x180022a78);
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


/* Address: 0x18000a218; Evidence: ev_b39a2ec6fc96b68d10a7c793e3fb5011fcc9ff0d2aeb5b8478d125afcbe5629a */

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
  pbVar5 = *param_1 + -(longlong)(char)(&DAT_180016580)[uVar3];
  uVar3 = *(uint *)(pbVar5 + -4) >> ((&DAT_180016590)[uVar3] & 0x1f);
  *param_1 = pbVar5;
  uVar4 = uVar3 & 3;
  *(uint *)(this + 0x14) = uVar4;
  *(uint *)(this + 0x10) = uVar3 >> 2;
  if ((uVar4 == 1) || (uVar4 == 2)) {
    uVar2 = *(undefined4 *)*param_1;
    *param_1 = *param_1 + 4;
    *(undefined4 *)(this + 0x18) = uVar2;
    uVar3 = **param_1 & 0xf;
    bVar1 = (&DAT_180016590)[uVar3];
    pbVar5 = *param_1 + -(longlong)(char)(&DAT_180016580)[uVar3];
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


/* Address: 0x18000a2b8; Evidence: ev_f62769d06decb0f26e5150b2ab2f06697a2a47ed2cf50f47beb9aefeddba16f6 */

void FUN_18000a2b8(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3)

{
                    /* WARNING: Could not recover jumptable at 0x00018000a2be. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3);
  return;
}


/* Address: 0x18000a2c4; Evidence: ev_7a1c66c2bf231d465991bbfb0a7f7729429b664c9e7b78eed0402d647deb46d2 */

void FUN_18000a2c4(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3,
                  undefined4 param_4)

{
                    /* WARNING: Could not recover jumptable at 0x00018000a2d0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3,param_4);
  return;
}


/* Address: 0x18000a2d4; Evidence: ev_9010406f74d5b6ed4ae94bd3eb0541df0a24260405b7d8d30220f58c88603701 */

void FUN_18000a2d4(UWMap4 *param_1,int param_2,int param_3,longlong *param_4,longlong *param_5)

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


/* Address: 0x18000a3a4; Evidence: ev_b93abc0a9939a1d7277c94238e44cac4bf17c9af435d0644bd80ca55f09a6c1b */

int FUN_18000a3a4(undefined8 *param_1,int param_2,longlong param_3,int param_4,undefined8 *param_5)

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


/* Address: 0x18000a490; Evidence: ev_1bdb861b61a7f12bc6d9aedd7a930da3d91017c2e3196e4727818e4cb269680d */

void FUN_18000a490(void)

{
  FUN_18000a4b0();
  return;
}


/* Address: 0x18000a4b0; Evidence: ev_4a75ed7d08aabdd092a14682e05a430bc821be3650cac4f77502c94a2aacc4e8 */

void FUN_18000a4b0(void)

{
  return;
}


/* Address: 0x18000a4c0; Evidence: ev_acd28894773b6c3d4c56068f24c9140c73d28cc95ac603a69c24db128fb8c142 */

void FUN_18000a4c0(void)

{
  return;
}


/* Address: 0x18000a4c4; Evidence: ev_21a7d37e53884c534a90939daa4ce53cf127d6de2008b68f55eab95a4f19716f */

/* WARNING: Removing unreachable block (ram,0x00018000a4d7) */
/* WARNING: Removing unreachable block (ram,0x00018000a4ed) */
/* WARNING: Removing unreachable block (ram,0x00018000a4f3) */
/* Library Function - Single Match
    __except_validate_context_record
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __except_validate_context_record(longlong param_1)

{
  return;
}


/* Address: 0x18000a4fc; Evidence: ev_5ee0e02d632ea396889bf045b1d7417e44513fa1bf9d1b0514a116e09bf1f616 */

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
                      ((LPCRITICAL_SECTION)(&DAT_180023270 + uVar2 * 0x28),4000,0);
    if ((int)uVar1 == 0) {
      uVar2 = __vcrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_180023298 = DAT_180023298 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 == 0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x18000a544; Evidence: ev_478378664d91ccf6f011d318217df11a8f2ecbebdc9e76ffc66c4584ba88aab8 */

/* Library Function - Single Match
    __vcrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release */

undefined8 __vcrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_180023298;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_180023270 + uVar1 * 0x28));
    DAT_180023298 = DAT_180023298 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000a57c; Evidence: ev_0c8e715b03eea1081a2281ca2adc68b2f4ae35c625fca7b0188c0f331504443e */

FARPROC FUN_18000a57c(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
  pFVar4 = *(FARPROC *)(&DAT_1800232b8 + uVar6 * 8);
  if (pFVar4 != (FARPROC)0xffffffffffffffff) {
    if (pFVar4 != (FARPROC)0x0) {
      return pFVar4;
    }
    for (; param_3 != param_4; param_3 = param_3 + 1) {
      uVar5 = (ulonglong)*param_3;
      hLibModule = *(HMODULE *)(&DAT_1800232a0 + uVar5 * 8);
      if (hLibModule == (HMODULE)0x0) {
        lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_fibers_l1_1_1_1800174e8)[uVar5];
        hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
        if ((hLibModule != (HMODULE)0x0) ||
           (((DVar2 = GetLastError(), DVar2 == 0x57 &&
             (iVar3 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar3 != 0)) &&
            (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0)))
           ) {
          LOCK();
          lVar1 = *(longlong *)(&DAT_1800232a0 + uVar5 * 8);
          *(HMODULE *)(&DAT_1800232a0 + uVar5 * 8) = hLibModule;
          UNLOCK();
          if (lVar1 != 0) {
            FreeLibrary(hLibModule);
          }
          goto LAB_18000a6ad;
        }
        LOCK();
        *(undefined8 *)(&DAT_1800232a0 + uVar5 * 8) = 0xffffffffffffffff;
        UNLOCK();
      }
      else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_18000a6ad:
        pFVar4 = GetProcAddress(hLibModule,param_2);
        if (pFVar4 != (FARPROC)0x0) {
          LOCK();
          *(FARPROC *)(&DAT_1800232b8 + uVar6 * 8) = pFVar4;
          UNLOCK();
          return pFVar4;
        }
        break;
      }
    }
    LOCK();
    *(undefined8 *)(&DAT_1800232b8 + uVar6 * 8) = 0xffffffffffffffff;
    UNLOCK();
  }
  return (FARPROC)0x0;
}


/* Address: 0x18000a6cc; Evidence: ev_801ca7fbde6283f3c18c70f3f539440b70cea99177fd44fcac83cd49ecaf7706 */

/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000a57c(0,"FlsAlloc",(uint *)&DAT_1800175a8,(uint *)"FlsAlloc");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000a70a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsAlloc();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180013c30. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)(param_1);
  return;
}


/* Address: 0x18000a714; Evidence: ev_54ba2e0b139e1ffdcf011f03ab7ab1d6274953e0c8dcabecbd20e1db8ff12fcd */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000a57c(1,"FlsFree",(uint *)&DAT_1800175c0,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000a753. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180013c30. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000a75c; Evidence: ev_2cd15e749c44cbd9f90fd9ba5581d4104ca2c50dbdcdf5fea27fff9ebf1ae60e */

/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE =
       FUN_18000a57c(2,"FlsGetValue",(uint *)&DAT_1800175d0,(uint *)"FlsGetValue");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000a79b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsGetValue(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180013c30. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000a7a4; Evidence: ev_4a8f19d7b260f6c364b19ba77187bf128845c73d784dd67d16279b153de58fca */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsSetValue
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsSetValue(DWORD param_1,LPVOID param_2)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_18000a57c(3,"FlsSetValue",(uint *)&DAT_1800175e8,(uint *)"FlsSetValue");
  if (pFVar1 == (FARPROC)0x0) {
    TlsSetValue(param_1,param_2);
  }
  else {
    (*pFVar1)();
  }
  return;
}


/* Address: 0x18000a7f8; Evidence: ev_d7cfc422f1b8f2d66b221dac54c4763f9c1dab633081ff41a76110c2961609e1 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_InitializeCriticalSectionEx
   
   Library: Visual Studio 2017 Release */

void __vcrt_InitializeCriticalSectionEx(LPCRITICAL_SECTION param_1,DWORD param_2,undefined4 param_3)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_18000a57c(4,"InitializeCriticalSectionEx",(uint *)&DAT_180017600,
                         (uint *)"InitializeCriticalSectionEx");
  if (pFVar1 == (FARPROC)0x0) {
    InitializeCriticalSectionAndSpinCount(param_1,param_2);
  }
  else {
    (*pFVar1)(param_1,param_2,param_3);
  }
  return;
}


/* Address: 0x18000a8a0; Evidence: ev_3fb49ccf68e6d44beead6f401113663a6167e922c20266194e933a313b70505f */

/* Library Function - Single Match
    _CallSettingFrame
   
   Library: Visual Studio */

void _CallSettingFrame(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000a490();
  (*pcVar1)();
  FUN_18000a4c0();
  FUN_18000a490();
  return;
}


/* Address: 0x18000a8e0; Evidence: ev_a47db373a776eb0f43f65019df2e6ccbf9334b67a226a8f39a7e7f1c3b00a305 */

void FUN_18000a8e0(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000a490();
  (*pcVar1)();
  FUN_18000a4c0();
  return;
}


/* Address: 0x18000a910; Evidence: ev_bce332dcfaed85589bf1f5fc23e3ef7e389c6b62b08435012946b670008beef0 */

void FUN_18000a910(void)

{
  FUN_18000a490();
  return;
}


/* Address: 0x18000a940; Evidence: ev_aa4a5cc3430028e0491b765a006a305ddf2bc26f1e88de44c6d476babcf66d4e */

/* Library Function - Single Match
    _CallSettingFrameEncoded
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

void _CallSettingFrameEncoded(undefined8 param_1,undefined8 param_2,undefined8 param_3)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000a490();
  (*pcVar1)(param_3);
  FUN_18000a4c0();
  FUN_18000a490();
  return;
}


/* Address: 0x18000a990; Evidence: ev_16dcee9c8e3727c082fa39ac5f2cdb103d00f1ddc93cc1fb05583c00c69d3073 */

longlong * FUN_18000a990(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_180022200;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18002346c == 0) {
    param_1[1] = (longlong)PTR_PTR_1800221f8;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_18000c758();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_18000c990(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}


/* Address: 0x18000aa50; Evidence: ev_a37bf56d8f5895a51f0167cb8beb37ed966ab47411149b24274fd162a5217637 */

undefined8 FUN_18000aa50(longlong param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  
  if ((param_1 == 0) || (param_2 == 0)) {
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000affc();
  }
  return 0x7fffffff;
}


/* Address: 0x18000aa80; Evidence: ev_d4f35083f1109cfa5f67e2a29bf0e109148318983300780a6a48311646e2aab3 */

void FUN_18000aa80(byte *param_1,byte *param_2)

{
  byte bVar1;
  byte bVar2;
  uint uVar3;
  uint uVar4;
  
  if (DAT_18002346c != 0) {
    FUN_18000aaf0(param_1,param_2,(undefined8 *)0x0);
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
  FUN_18000aa50((longlong)param_1,(longlong)param_2);
  return;
}


/* Address: 0x18000aaf0; Evidence: ev_5cb6dadcb0e1e166d59e309dd04a2234437b7599f56c8b849e5b69bbb51ccc18 */

int FUN_18000aaf0(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  __acrt_ptd *p_Var3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    p_Var3 = FUN_18000c2b4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000affc();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18002346c == 0) {
      local_20 = PTR_PTR_1800221f8;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_18000c758();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_18000c990(local_28,&lStack_18);
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


/* Address: 0x18000ac10; Evidence: ev_249cf79624710294b4b3c7eba0e297073ee365a34603132ba0af293629da0501 */

longlong FUN_18000ac10(longlong *param_1)

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
    p_Var1 = FUN_18000c848(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
    if (p_Var1 == (__acrt_ptd *)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return *param_1;
}


/* Address: 0x18000ac78; Evidence: ev_4930c8d1e483985bf33d663175ca2855707d96251202cf609ef9c8c9e5896f2e */

__acrt_ptd * FUN_18000ac78(longlong *param_1)

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
    p_Var1 = FUN_18000c848(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
  }
  return p_Var1;
}


/* Address: 0x18000ace4; Evidence: ev_6d0a3038f0e24de03fff3d2fdb29fa6cee10904c4e1c369b400346a4720666b4 */

longlong FUN_18000ace4(longlong param_1,longlong param_2)

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


/* Address: 0x18000ad30; Evidence: ev_bff7bfb924340b024b508cc2c6ec751245aab9f251be95c3aba5b14deb2f3346 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000ad30(int param_1,DWORD param_2,DWORD param_3)

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
  
  local_28 = DAT_180022000 ^ (ulonglong)auStackY_608;
  if (param_1 != -1) {
    FUN_180005900();
  }
  FUN_180013cb0((undefined1 (*) [32])&local_598,0,0x98);
  FUN_180013cb0((undefined1 (*) [32])&local_4f8,0,0x4d0);
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
    FUN_180005900();
  }
  return;
}


/* Address: 0x18000aea0; Evidence: ev_93970258f72067373fa5f4dc677cd77d20e567f840c4970ec7305964f2072a19 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000aea0(undefined8 param_1)

{
  _DAT_1800232e8 = param_1;
  return;
}


/* Address: 0x18000aea8; Evidence: ev_5c6d2fb7aba27b1410fe5ebd82b004a8a2129d534187113a54baf3f4adc2e8bd */

void FUN_18000aea8(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
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
  local_20 = DAT_18002346c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800221f8;
    puStack_28 = PTR_DAT_180022200;
  }
  FUN_18000af44(param_1,param_2,param_3,param_4,param_5,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar1 = FUN_18000ac10(local_48);
    *(undefined4 *)(lVar1 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar1 = FUN_18000ac10(local_48);
    *(undefined4 *)(lVar1 + 0x24) = local_14;
  }
  return;
}


/* Address: 0x18000af44; Evidence: ev_5f712423aaf338627f491981709ac85fe6eec7f80f60a824e7af2086709f4483 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000af44(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_18000ac78(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_18000ace4(0x1800232e8,(longlong)param_6);
    bVar3 = (byte)DAT_180022000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_180022000) >> bVar3 | (*puVar2 ^ DAT_180022000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}


/* Address: 0x18000affc; Evidence: ev_188810b3fe42e1b7d13137418cbd35216ab2c45458ed01215d0586e15c44074c */

void FUN_18000affc(void)

{
  FUN_18000aea8((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  return;
}


/* Address: 0x18000b01c; Evidence: ev_b182f4f9dfc06c7970062fcae5c755c6af42b5b17549f9a76eec2014b9a74d47 */

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
  *(undefined8 *)(puVar3 + -8) = 0x18000b04a;
  FUN_18000ad30(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x18000b050;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000b05c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}


/* Address: 0x18000b070; Evidence: ev_f1af888ee4b7fe2e2615c22bd91e90775883978dd943a7ea0dcec8c6702bcb6b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

bool FUN_18000b070(undefined8 param_1)

{
  int iVar1;
  code *pcVar2;
  bool bVar3;
  
  pcVar2 = (code *)FUN_18000b0c0();
  bVar3 = false;
  if (pcVar2 != (code *)0x0) {
    iVar1 = (*pcVar2)(param_1);
    bVar3 = iVar1 != 0;
  }
  return bVar3;
}


/* Address: 0x18000b0b0; Evidence: ev_8b5f5e989e24047ef86edaa3d86dbd63e8a01fcd9c20c4612e32173fc26fbe2a */

void FUN_18000b0b0(undefined8 param_1)

{
  DAT_1800232f0 = param_1;
  return;
}


/* Address: 0x18000b0c0; Evidence: ev_1dab622bafe8d16e83bbdf3db7ced686df934f1a1a40b4cfcf36ada5587e3445 */

ulonglong FUN_18000b0c0(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180022000 & 0x3f;
  uVar2 = DAT_1800232f0 ^ DAT_180022000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18000b100; Evidence: ev_ed4a55e3b0cea44f6222a522be85f5d815dddf816e2799cf4354cbde9ff26f1a */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180022000 & 0x3f;
  uVar3 = DAT_180022000 ^ DAT_1800232f0;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_1800232f0 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180022000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}


/* Address: 0x18000b170; Evidence: ev_2aa809ab2718eb1a12136ad65dc0760630662630a331c9a13739633a9d25d2aa */

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
      pvVar3 = HeapAlloc(DAT_1800237e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180010740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000b070(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c2b4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000b180; Evidence: ev_4eec522d8cf17bc89debc8ec5313c10cd4e318840433ced1b47140fe21ad2d9a */

void thunk_FUN_18000cbe0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800237e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000c174(DVar2);
    p_Var4 = FUN_18000c2b4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000b188; Evidence: ev_097e9bda35f41e20caa6372e837c640db5449f41f8612dc13b247acfdd1edf87 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b188(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}


/* Address: 0x18000b1c0; Evidence: ev_1327bd883a44809fa042bfae1780aada9ec4da251dd61ce62912db86b646ac51 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000b1c0(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x18000b1fc; Evidence: ev_530048b111da7e708c55f7f6f46ebfd4a02faf242fb2427abfef0780ba3f0982 */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000b210(-0x1f928c9d,param_2);
  return uVar1;
}


/* Address: 0x18000b210; Evidence: ev_fc0a2dcfe30ed7ed78feaac0d60ee6bb6e645774571a515f53465ee0e7ceda08 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000b210(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  int *piVar2;
  code *pcVar3;
  undefined8 uVar4;
  __acrt_ptd *p_Var5;
  int *piVar6;
  int *piVar7;
  undefined4 uVar8;
  
  p_Var5 = FUN_18000c7b8();
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
LAB_18000b34e:
              *(undefined4 *)(p_Var5 + 0x10) = uVar8;
            }
            else {
              if (*piVar6 == -0x3fffff72) {
                uVar8 = 0x83;
                goto LAB_18000b34e;
              }
              if (*piVar6 == -0x3fffff71) {
                uVar8 = 0x86;
                goto LAB_18000b34e;
              }
              if (*piVar6 == -0x3fffff70) {
                uVar8 = 0x81;
                goto LAB_18000b34e;
              }
              if (*piVar6 == -0x3fffff6f) {
                uVar8 = 0x84;
                goto LAB_18000b34e;
              }
              if (*piVar6 == -0x3fffff6e) {
                uVar8 = 0x8a;
                goto LAB_18000b34e;
              }
              if (*piVar6 == -0x3fffff6d) {
                uVar8 = 0x85;
                goto LAB_18000b34e;
              }
              if (*piVar6 == -0x3ffffd4c) {
                uVar8 = 0x8e;
                goto LAB_18000b34e;
              }
              uVar8 = uVar1;
              if (*piVar6 == -0x3ffffd4b) {
                uVar8 = 0x8d;
                goto LAB_18000b34e;
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


/* Address: 0x18000b37c; Evidence: ev_b639aad28878d0c4fd8463a7f8f5f9c37fab98aa2adf9f38220784a444b1327c */

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
  FUN_18000b3b4(param_3);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000b3b4; Evidence: ev_65adc292128c6cfe67e09bc60bda72971336205fb912da27388d56637a03cb40 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b3b4(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_180023308 != '\0') {
    return;
  }
  LOCK();
  DAT_1800232f8 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_180023300 != DAT_180022000) {
      bVar1 = (byte)DAT_180022000 & 0x3f;
      (*(code *)((DAT_180022000 ^ DAT_180023300) >> bVar1 |
                (DAT_180022000 ^ DAT_180023300) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180023438;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000b423;
    puVar2 = &DAT_180023450;
  }
  FUN_18000bd5c(puVar2);
LAB_18000b423:
  if (*(int *)*param_1 == 0) {
    FUN_18000b188((undefined8 *)&DAT_1800162f8,(undefined8 *)&DAT_180016318);
  }
  FUN_18000b188((undefined8 *)&DAT_180016320,(undefined8 *)&DAT_180016328);
  if (*(int *)param_1[1] == 0) {
    DAT_180023308 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}


/* Address: 0x18000b474; Evidence: ev_8cf98a034aaaead94de871f3a6b997f0e4550a570623c5f3dc48c3166b58604c */

void FUN_18000b474(uint param_1,undefined4 param_2,int param_3)

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
      FUN_18000b588(param_1);
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
    bVar2 = FUN_18000cc6c();
    if ((int)CONCAT71(extraout_var,bVar2) == 1) {
      bVar2 = false;
    }
    else {
      uVar3 = FUN_18000cc38();
      bVar2 = (char)uVar3 == '\0';
    }
    if (local_res18[0] == 0) {
      FUN_18000b558(param_1,bVar2);
      pcVar1 = (code *)swi(3);
      (*pcVar1)();
      return;
    }
  }
  return;
}


/* Address: 0x18000b558; Evidence: ev_2d1ef98fb5ea85d0fa62b331ed70d5d92110f4b8bea43490355ab1dec5f9e540 */

void FUN_18000b558(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000b588(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}


/* Address: 0x18000b588; Evidence: ev_6605527f35c4b2b59bb941741acb136f849220d6e0d7c2f8428e5a5c123ea7ce */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b588(uint param_1)

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


/* Address: 0x18000b5ec; Evidence: ev_0d808058a4857d409143ba059a36cf6611ea60a9851ebfeedeee1a5c5808c795 */

void FUN_18000b5ec(undefined8 param_1)

{
  DAT_180023300 = param_1;
  return;
}


/* Address: 0x18000b5f4; Evidence: ev_fa7b2878ad37f3dee1b9bbb0a057c94aced2e5a051dd9affc0b681f096eb20e4 */

void FUN_18000b5f4(void)

{
  FUN_18000b474(0,0,1);
  return;
}


/* Address: 0x18000b604; Evidence: ev_62576b2d11dff1407625b22adaeffd126acc848c047ef08c05f0094d9e758ef9 */

void FUN_18000b604(uint param_1)

{
  FUN_18000b474(param_1,2,0);
  return;
}


/* Address: 0x18000b610; Evidence: ev_d48fe685194a850a3ae603504e9c4a6a066061392c30d6a5f3bce59016537c38 */

undefined4 FUN_18000b610(void)

{
  return DAT_1800232f8;
}


/* Address: 0x18000b618; Evidence: ev_ff850031c268a1571fe1e15f2d79a232406a543f85aeb48bac51fbf7d94c8107 */

void FUN_18000b618(char *param_1,undefined8 *param_2,char *param_3,longlong *param_4,
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
      iVar5 = FUN_18000e5a8((int)cVar3);
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
        goto LAB_18000b6ca;
      }
    }
    param_1 = pcVar6;
  } while ((bVar2) || ((cVar3 != ' ' && (cVar3 != '\t'))));
  if (param_3 != (char *)0x0) {
    param_3[-1] = '\0';
  }
LAB_18000b6ca:
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
        iVar5 = FUN_18000e5a8((int)*pcVar6);
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


/* Address: 0x18000b7d8; Evidence: ev_e2342d0c5775cff30cab24c10097005115332d1912feeb86b5fb0e499973a2ed */

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
      FUN_18000cbe0((LPVOID)0x0);
      return pvVar2;
    }
  }
  return (LPVOID)0x0;
}


/* Address: 0x18000b838; Evidence: ev_94316fee008ce5cd77e7d90a9d3b83a94895a2f9b0f4a12b695c09b7dc961144 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000b838(int param_1)

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
    p_Var3 = FUN_18000c2b4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000affc();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_18000d8c4((HMODULE)0x0,&DAT_180023310,0x104);
  _DAT_180023700 = &DAT_180023310;
  if ((DAT_180023720 == (char *)0x0) || (pcVar6 = DAT_180023720, *DAT_180023720 == '\0')) {
    pcVar6 = &DAT_180023310;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000b618(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_18000c2b4();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000b618(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_18000d080(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_18000cbe0(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_18000cbe0(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_180023708 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_180023708 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_180023710 = plVar2;
      FUN_18000cbe0((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_18000b99d;
    }
    _DAT_180023708 = (int)local_res18 + -1;
    DAT_180023710 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_18000b99d:
  FUN_18000cbe0(plVar4);
  return uVar7;
}


/* Address: 0x18000b9b8; Evidence: ev_dde778763690de59f7825c196afa43c2080c11acdf6c49738362edce00ecd2fb */

undefined8 FUN_18000b9b8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180023418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_18000e758();
    if (pcVar2 == (char *)0x0) {
      FUN_18000cbe0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000ba2c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180023418;
        puVar1 = DAT_180023430;
      }
      DAT_180023430 = puVar1;
      DAT_180023418 = puVar4;
      FUN_18000cbe0((LPVOID)0x0);
      FUN_18000cbe0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x18000ba2c; Evidence: ev_b6cedf8ef54081a8da5c1bfb14caf052eeb6492a4ced8ee7c9ddc260eea5bd40 */

undefined8 * FUN_18000ba2c(char *param_1)

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
LAB_18000ba8f:
    FUN_18000cbe0((LPVOID)0x0);
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
          FUN_18000cbe0((LPVOID)0x0);
          goto LAB_18000ba8f;
        }
        uVar5 = FUN_18000c030(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_18000cbe0((LPVOID)0x0);
      }
    }
    FUN_18000cbe0((LPVOID)0x0);
  }
  return puVar3;
}


/* Address: 0x18000bb40; Evidence: ev_ad150ebc8a859d4f1d311109be39cf94c2d4daab06db5a82847c19c216b68256 */

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
      FUN_18000cbe0(pvVar1);
      puVar2 = puVar2 + 1;
      pvVar1 = (LPVOID)*puVar2;
    }
    FUN_18000cbe0(param_1);
  }
  return;
}


/* Address: 0x18000bb84; Evidence: ev_f9bc328075942bb0bea5a95040be3519f905b1a2057c8da277b2e958baf5c6df */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180023430) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18000bba0; Evidence: ev_a2bd79688b1ae34a1110d7a0ec2e3da45f70e1f7b5385cb518e35a0996483600 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180023428) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18000bbbc; Evidence: ev_f0650488e5a0861c77b69a9ed45e6cd038aea7cc0a9f979051db7089b6cc8a85 */

void FUN_18000bbbc(void)

{
  uninitialize_environment_internal<>(&DAT_180023418);
  uninitialize_environment_internal<>((undefined8 *)&DAT_180023420);
  free_environment<>(DAT_180023430);
  free_environment<>(DAT_180023428);
  return;
}


/* Address: 0x18000bc00; Evidence: ev_14daa765351f24ac66c9fe409e1abedbc55f75ae156577b85d027f27c33cb3db */

undefined8 thunk_FUN_18000b9b8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180023418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_18000e758();
    if (pcVar2 == (char *)0x0) {
      FUN_18000cbe0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000ba2c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180023418;
        puVar1 = DAT_180023430;
      }
      DAT_180023430 = puVar1;
      DAT_180023418 = puVar4;
      FUN_18000cbe0((LPVOID)0x0);
      FUN_18000cbe0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x18000bc08; Evidence: ev_deef44aabc79fb77e631011a583d53866d64cb765da5564b1409dfcfc4db14fe */

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
  uVar1 = FUN_18000bc44(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000bc44; Evidence: ev_333222855763e28637b8bf3f5540495ac0d51a200b2501cef68d568002868c03 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000bc44(undefined8 *param_1)

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
  
  uVar1 = DAT_180022000;
  puVar8 = *(ulonglong **)*param_1;
  if (puVar8 == (ulonglong *)0x0) {
    uVar2 = 0xffffffff;
  }
  else {
    bVar5 = (byte)DAT_180022000 & 0x3f;
    puVar10 = (ulonglong *)
              ((DAT_180022000 ^ *puVar8) >> bVar5 | (DAT_180022000 ^ *puVar8) << 0x40 - bVar5);
    puVar8 = (ulonglong *)
             ((DAT_180022000 ^ puVar8[1]) >> bVar5 | (DAT_180022000 ^ puVar8[1]) << 0x40 - bVar5);
    if ((longlong)puVar10 - 1U < 0xfffffffffffffffe) {
      uVar7 = (uint)DAT_180022000 & 0x3f;
      puVar9 = puVar8;
      uVar3 = DAT_180022000;
      puVar13 = puVar10;
      while (puVar8 = puVar8 + -1, puVar10 <= puVar8) {
        if (*puVar8 != uVar1) {
          uVar3 = *puVar8 ^ uVar3;
          *puVar8 = uVar1;
          (*(code *)(uVar3 >> (sbyte)uVar7 | uVar3 << 0x40 - (sbyte)uVar7))();
          uVar7 = (uint)DAT_180022000 & 0x3f;
          uVar11 = DAT_180022000 ^ **(ulonglong **)*param_1;
          uVar3 = DAT_180022000 ^ (*(ulonglong **)*param_1)[1];
          sVar6 = (sbyte)uVar7;
          puVar12 = (ulonglong *)(uVar11 >> sVar6 | uVar11 << 0x40 - sVar6);
          puVar4 = (ulonglong *)(uVar3 >> sVar6 | uVar3 << 0x40 - sVar6);
          uVar3 = DAT_180022000;
          if ((puVar12 != puVar13) || (puVar4 != puVar9)) {
            puVar8 = puVar4;
            puVar9 = puVar4;
            puVar10 = puVar12;
            puVar13 = puVar12;
          }
        }
      }
      if (puVar10 != (ulonglong *)0xffffffffffffffff) {
        FUN_18000cbe0(puVar10);
        uVar3 = DAT_180022000;
      }
      **(ulonglong **)*param_1 = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 8) = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 0x10) = uVar3;
    }
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x18000bd5c; Evidence: ev_e5e4e9bbbdcadc712b6b47f03340e34a6bb32f8f384fadc2b694cfcf5a67e506 */

void FUN_18000bd5c(undefined8 param_1)

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


/* Address: 0x18000bda0; Evidence: ev_ac3a8808e8882c3c2ee3bb598064135c166d0abaedd0413d8c07be77c5d1c73f */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180022000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180022000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}


/* Address: 0x18000bdd0; Evidence: ev_8cfad215bd9a03d2f3f6a54c7be3235b4abb70a1d2975db9c9b0635866ea165d */

undefined8 FUN_18000bdd0(void)

{
  DAT_180023470 = &PTR_DAT_1800220a0;
  return 0x180022001;
}


/* Address: 0x18000bdf0; Evidence: ev_827e9001d4d90bfa6ea7288638539eecc2d461efb27750cd3c133e883938aa1f */

undefined8 FUN_18000bdf0(void)

{
  undefined8 uVar1;
  
  _initialize_onexit_table((longlong *)&DAT_180023438);
  uVar1 = _initialize_onexit_table((longlong *)&DAT_180023450);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x18000be20; Evidence: ev_405ecbe973aca01d11e48b13562c8ea3aac80425057d2775b6785e7035e4e752 */

undefined1 FUN_18000be20(void)

{
  return 1;
}


/* Address: 0x18000be30; Evidence: ev_7c42f3724600b88daee85123bba913611aae8348a08fd610dc1d08630b794a69 */

undefined1 FUN_18000be30(void)

{
  FUN_18000bbbc();
  return 1;
}


/* Address: 0x18000be40; Evidence: ev_b22bb568a0c8b456b17b5536627069250bf3e039cb037f8fa3b466b540f713fa */

undefined1 FUN_18000be40(void)

{
  undefined8 uVar1;
  
  uVar1 = DAT_180022000;
  FUN_18000aea0(DAT_180022000);
  FUN_18000b0b0(uVar1);
  FUN_18000f1f4(uVar1);
  FUN_18000f470(uVar1);
  FUN_18000b5ec(uVar1);
  return 1;
}


/* Address: 0x18000be80; Evidence: ev_2419f8ae54d448287033ff9c2cae0853dd476acfe6f5712e78922c863071ebdd */

void FUN_18000be80(void)

{
  __vcrt_uninitialize('\0');
  return;
}


/* Address: 0x18000be90; Evidence: ev_7a08cf40d3f7a06c8fa1c0e1a65b416ee21c679ff6aba33b67d6d3e8e6d9b430 */

undefined8 FUN_18000be90(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_1800236f0;
  uVar2 = (ulonglong)uVar1;
  *DAT_1800236f0 = *DAT_1800236f0 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_1800236f0 != (uint *)&DAT_180022210)) {
    uVar2 = FUN_18000cbe0(DAT_1800236f0);
    DAT_1800236f0 = (uint *)&DAT_180022210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}


/* Address: 0x18000bed0; Evidence: ev_e364d2ffdcb68f1343d76c89b8c1c2945f8199bdd3a8d420d72ea16764e05c2f */

undefined1 FUN_18000bed0(void)

{
  FUN_18000cbe0(DAT_180023c30);
  DAT_180023c30 = (LPVOID)0x0;
  FUN_18000cbe0(DAT_180023c38);
  DAT_180023c38 = (LPVOID)0x0;
  FUN_18000cbe0(DAT_180023710);
  DAT_180023710 = (LPVOID)0x0;
  FUN_18000cbe0(DAT_180023718);
  DAT_180023718 = (LPVOID)0x0;
  return 1;
}


/* Address: 0x18000bf2c; Evidence: ev_6e5a42e681be40592d7f19f0de71545ec47a5a6fb131d8b836235c9f00188c5f */

void FUN_18000bf2c(void)

{
  FUN_18000f0c0(&PTR_FUN_1800177d0,(undefined8 *)&DAT_1800178d0);
  return;
}


/* Address: 0x18000bf40; Evidence: ev_b90e430503660645e935ced3a1b081ed20b05e8933de529cc84f6f693573f081 */

bool FUN_18000bf40(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_18000c7b8();
  return p_Var1 != (__acrt_ptd *)0x0;
}


/* Address: 0x18000bf54; Evidence: ev_24445e88abfe138c47e1e8b4c248717107e25d866faaf5570d9d84b675e6c698 */

undefined1 FUN_18000bf54(void)

{
  FUN_18000c708();
  return 1;
}


/* Address: 0x18000bf64; Evidence: ev_a7ed2e4ded99f6f2b8188eefc7721de2ea75b31bc80fb7c40b8a9ab557c9ca55 */

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
    if (DAT_180023c28 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_18000f140(0x1800177d0,0x1800178d0);
  return uVar2;
}


/* Address: 0x18000bf9c; Evidence: ev_510fb9f84601e062eda910b59ec7ab271cba59c8e1bbf5321748b7cd76ae4f6e */

undefined4 FUN_18000bf9c(void)

{
  undefined4 uVar1;
  
  uVar1 = FUN_18000c900();
  return CONCAT31((int3)((uint)uVar1 >> 8),1);
}


/* Address: 0x18000bfac; Evidence: ev_d66841805b10cea7b006d391423fe5c5c2b0e506d2ae035f47f35e419843889e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000bfac(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000c758();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000bfcc; Evidence: ev_da5f1632ce64a0efc1a0f27d78ea69a4819a36691ad2a58692f1f353bd49c1fc */

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
    FUN_18000f214(0x16);
  }
  if ((DAT_180022080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x18000c017;
    FUN_18000ad30(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x18000c021;
  FUN_18000b604(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x18000c030; Evidence: ev_b28840940e1ce2ea0d6be8cd15768ec87a22a79786b0d3dc848ebd63c0b531f9 */

undefined8 FUN_18000c030(char *param_1,longlong param_2,longlong param_3)

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
      p_Var2 = FUN_18000c2b4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000affc();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_18000c2b4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000affc();
  return 0x16;
}


/* Address: 0x18000c0b0; Evidence: ev_a6451970567e0531779b0172edef7b6985d7dbf605672851441b2c2763a5578a */

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
      pvVar3 = HeapAlloc(DAT_1800237e8,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180010740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000b070(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c2b4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000c0c0; Evidence: ev_721eba417ec4f9e94831519b5aee7a1ea2cf9784dc1c268f964de4bd78fe6420 */

void FUN_18000c0c0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000ac10(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_18000c958(lVar1,param_1 + 3,param_1[1]);
  FUN_18000c9c4(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}


/* Address: 0x18000c140; Evidence: ev_94d8a329752e368261056256adf819285337ddb0ba4b7a6a6ad3085360dbe064 */

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


/* Address: 0x18000c174; Evidence: ev_0f86222a4b84e9f2faeb7de95eacb9c3814e0352996dc1a268dc925bcc5ea048 */

uint FUN_18000c174(uint param_1)

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
      return *(uint *)(&DAT_1800178d4 + (ulonglong)(param_1 - 1) * 8);
    }
    if (param_1 < 0x719) {
      uVar5 = 0x2d;
      uVar7 = 0;
      uVar8 = 0x2c;
      do {
        uVar9 = uVar5 >> 1;
        if (uVar9 == 0) {
          if (uVar5 != 0) {
            puVar4 = (uint *)(&DAT_1800178d0 + uVar7 * 8);
            if (param_1 != *puVar4) {
              puVar4 = (uint *)0x0;
            }
LAB_18000c215:
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
        puVar4 = (uint *)(&DAT_1800178d0 + lVar1 * 8);
        if (param_1 == *puVar4) goto LAB_18000c215;
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


/* Address: 0x18000c244; Evidence: ev_3e480b5a3093ac7cffdc97f7823ad93a5b562f26ba762b013c9e8ec01087b387 */

void FUN_18000c244(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = FUN_18000c290();
  *(uint *)p_Var2 = param_1;
  uVar1 = FUN_18000c174(param_1);
  p_Var2 = FUN_18000c2b4();
  *(uint *)p_Var2 = uVar1;
  return;
}


/* Address: 0x18000c26c; Evidence: ev_d49a332ea693af7041597e0d2224600948476d9706e691d34f91dc4ac3a205ae */

void FUN_18000c26c(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_18000c174(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}


/* Address: 0x18000c290; Evidence: ev_a07b9cf20103e5ef8e08e1aace980214c9f591c5a56bda29dd594899ab290a84 */

__acrt_ptd * FUN_18000c290(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_18000c7b8();
  p_Var2 = p_Var1 + 0x24;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_180022094;
  }
  return p_Var2;
}


/* Address: 0x18000c2b4; Evidence: ev_3dd9e3a59d734898df9ccd5035f61bfacc502de1b5dd60c98968636fc0af1515 */

__acrt_ptd * FUN_18000c2b4(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_18000c7b8();
  p_Var2 = p_Var1 + 0x20;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_180022090;
  }
  return p_Var2;
}


/* Address: 0x18000c2d8; Evidence: ev_d355bb4ac13ed08678c5ada94045ee7908a98a408bf403fd7bdff8e5e5e8df06 */

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


/* Address: 0x18000c318; Evidence: ev_608242181e4557e569cd22e247260297f306f98ed048684782ed709b06267842 */

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


/* Address: 0x18000c358; Evidence: ev_a0120aecf7a27d273ac8212097d529ebda2035e80999fbff9ef9265a547d3a77 */

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


/* Address: 0x18000c3a0; Evidence: ev_f69ebbe1b16801568f210fc8a7978eb3219d8a3e5e5c367aae6b523473498066 */

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
    if ((iVar1 == 1) && (piVar2 != (int *)&DAT_180022210)) {
      FUN_18000cbe0(piVar2);
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000c400; Evidence: ev_d0c68a5ff622b5f4d8bc3ce9d41b98b8a258cd56bd48dce299b56c2019855eeb */

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
  local_28 = &DAT_180023470;
  *(undefined4 *)(param_1 + 0x28) = 1;
  *(undefined **)param_1 = &DAT_180017630;
  *(undefined4 *)(param_1 + 0x3a8) = 1;
  *(undefined **)(param_1 + 0x88) = &DAT_180022210;
  *(undefined2 *)(param_1 + 0xbc) = 0x43;
  *(undefined2 *)(param_1 + 0x1c2) = 0x43;
  *(undefined8 *)(param_1 + 0x3a0) = 0;
  local_30 = param_1;
  operator()<>(local_res10,local_res20,&local_20,local_res18);
  operator()<>(local_res10,local_38 + 1,&local_18,local_38);
  return;
}


/* Address: 0x18000c4d0; Evidence: ev_45d46ddd6be31dc687a01128b37f53b56ff1d0ef4056831bd321309b051e53b0 */

void FUN_18000c4d0(__acrt_ptd *param_1)

{
  if (param_1 != (__acrt_ptd *)0x0) {
    destroy_ptd_array(param_1);
    FUN_18000cbe0(param_1);
  }
  return;
}


/* Address: 0x18000c4f0; Evidence: ev_2aa6ceaf7417b151d522f046c527671cd039521b21ce68fe321f14ee7b3e1d6b */

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
  if (*(undefined **)param_1 != &DAT_180017630) {
    FUN_18000cbe0(*(undefined **)param_1);
  }
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x70));
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x58));
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x60));
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x68));
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x48));
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x50));
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x78));
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x80));
  FUN_18000cbe0(*(LPVOID *)(local_20 + 0x3c0));
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  operator()<>(local_res10,local_28 + 1,&local_10,local_28);
  return;
}


/* Address: 0x18000c5e8; Evidence: ev_4d1e724380780be0fc1cc52fa005e06d00b133a85f887da41e8349a0af0da520 */

__acrt_ptd * FUN_18000c5e8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_180022098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_180022098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_180022098,(PVOID)0x0);
        FUN_18000cbe0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_18000cbe0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_180022098,(PVOID)0x0);
    FUN_18000cbe0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}


/* Address: 0x18000c6a0; Evidence: ev_4988a16711c42990a37f056b21925a2fc377f1a7c0051b995bbaba7e8a2aea26 */

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
    if (((ppuVar1 != DAT_180023470) && (ppuVar1 != &PTR_DAT_1800220a0)) &&
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


/* Address: 0x18000c708; Evidence: ev_4ce9a509cc2f70f5d091a87ca96ccde3616a0053be57e8688cf28f2427d4ab94 */

void FUN_18000c708(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_180022098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_180022098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_180022098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_18000cbe0(p_Var1);
  }
  return;
}


/* Address: 0x18000c758; Evidence: ev_45262077a0cdd4ec342df79becbeecc241e972749b87d36d53f7a940ddc542c6 */

void FUN_18000c758(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_18000c7b8();
  if (p_Var1 != (__acrt_ptd *)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000c774; Evidence: ev_005cfdbee8e83aa6590a3193e5a09985be199e9f7df73ed85140c178f79f4e2b */

void FUN_18000c774(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_180022098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_180022098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_18000c5e8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_18000c7b0;
    }
    return;
  }
LAB_18000c7b0:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000c7b8; Evidence: ev_0bc4f370dc0dd01e72547501c68726abc6ee23d1e051f67406f45e98a8bb17c8 */

__acrt_ptd * FUN_18000c7b8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180023468 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_180022098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_180022098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000c5e8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_180022098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18000eb8c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000c5e8();
    }
  }
  return p_Var2;
}


/* Address: 0x18000c848; Evidence: ev_31d0c10ad6d6c8d0635a468460cd89777b4101cce68ac28598b963b0aa618029 */

__acrt_ptd * FUN_18000c848(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_180022098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_180022098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_18000c5e8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}


/* Address: 0x18000c8b0; Evidence: ev_de068bb91c6977256c838c978fff9c76a681a0a2cbd1e1a00883dac90eb9c142 */

ulonglong FUN_18000c8b0(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180023468 = FUN_18000ed30();
  DAT_180022098 = FlsAlloc(FUN_18000c4d0);
  uVar2 = CONCAT44(extraout_var,DAT_180022098);
  if (DAT_180022098 != 0xffffffff) {
    p_Var3 = FUN_18000c7b8();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_18000c900();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x18000c900; Evidence: ev_52d2fcd8dd030564c8aaca79119e5938a4d6e0ad75ea38c803871ded76de59f0 */

undefined4 FUN_18000c900(void)

{
  BOOL in_EAX;
  
  if (DAT_180022098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_180022098);
    DAT_180022098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}


/* Address: 0x18000c924; Evidence: ev_26db4bd4c2720331ffb445106c5458f2ead9dfabfe39301d0ca2fd9c7b313d3c */

/* Library Function - Single Match
    __acrt_update_locale_info
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_update_locale_info(longlong param_1,longlong *param_2)

{
  undefined **ppuVar1;
  
  if ((*param_2 != DAT_180023470) && ((DAT_180022858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x18000c958; Evidence: ev_5b036ac99445dbe0ee986c844702e0cf322ae52f08107f8c5ffc697e04ae6bb5 */

void FUN_18000c958(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_180023470)[param_3]) && ((DAT_180022858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x18000c990; Evidence: ev_635fa3c29575ff4b37a00bc1f3f49519457bb4b04dd29bd8875b05fa3b36f320 */

void FUN_18000c990(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_1800236f0) && ((DAT_180022858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_18000e250();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x18000c9c4; Evidence: ev_f549fca8c448d113ebdfe2064749dd590bd089afa8aa3530de6ee18d6bdd34e0 */

void FUN_18000c9c4(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_1800236f0)[param_3]) && ((DAT_180022858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_18000e250();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x18000c9fc; Evidence: ev_956ef0dae0d04d5a19f3a9a219348c745d3f31a236660c80806d869056763363 */

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
  for (plVar2 = &DAT_180023470; plVar2 != &DAT_180023478; plVar2 = plVar2 + 1) {
    if ((undefined **)*plVar2 != &PTR_DAT_1800220a0) {
      ppuVar1 = _updatetlocinfoEx_nolock(plVar2,&PTR_DAT_1800220a0);
      *plVar2 = (longlong)ppuVar1;
    }
  }
  __acrt_unlock(*(int *)param_3);
  return;
}


/* Address: 0x18000ca6c; Evidence: ev_b3dc5d4644afa4c1ae958ec00803bf2d18287f06e85f8b3013aac5aac8f0af0b */

undefined4 FUN_18000ca6c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18002346c;
  LOCK();
  DAT_18002346c = 1;
  UNLOCK();
  return uVar1;
}


/* Address: 0x18000ca80; Evidence: ev_883eb63d4b4a007420bbbb0542c7676cb1f0a4eda1f647c2a4a62ba35c2f4e07 */

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


/* Address: 0x18000cab0; Evidence: ev_2bd08013d0d7735805ade7f53359a1b35dfc3bfd322542feb2022338f25daaba */

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
    BVar1 = InitializeCriticalSectionEx((LPCRITICAL_SECTION)(&DAT_180023480 + uVar2 * 0x28),4000,0);
    if (BVar1 == 0) {
      uVar2 = __acrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_1800236d8 = DAT_1800236d8 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 < 0xf);
  return CONCAT71((int7)(CONCAT44(extraout_var,BVar1) >> 8),1);
}


/* Address: 0x18000caf8; Evidence: ev_4501916b8f458273027042d148988800055652a60e9cec9f8b83c87c1de60932 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000cb0a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_180023480 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x18000cb20; Evidence: ev_d896a666b0706b8494d697c6434b910fde803c55dbc42334222af3d862d44f67 */

/* Library Function - Single Match
    __acrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_1800236d8;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_180023480 + uVar1 * 0x28));
    DAT_1800236d8 = DAT_1800236d8 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000cb58; Evidence: ev_d795a27940faa38ab3ba4094b9f2a0d0d332fc8ecf734634891f7c78b036b2fb */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000cb6a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_180023480 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x18000cb80; Evidence: ev_284195c014999dab35ea5b0d2264c04c480eb8e83109acd03e14b9eba0bde5da */

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
      pvVar3 = HeapAlloc(DAT_1800237e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180010740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000b070(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c2b4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000cbe0; Evidence: ev_f74ca7f9479ee8664c2ca936c57c4679084d1f2e998459e3e0366204658e727c */

void FUN_18000cbe0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800237e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000c174(DVar2);
    p_Var4 = FUN_18000c2b4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000cc38; Evidence: ev_c50bc2067f38ccd0979c5e0389ae5ea5f27d18162cac05cce36ecc0df227638a */

uint FUN_18000cc38(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}


/* Address: 0x18000cc54; Evidence: ev_4c26874aa0ff0ea903efb95c70ba730c1e5bfe8b42a70aeea3264eae60049e96 */

uint FUN_18000cc54(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}


/* Address: 0x18000cc6c; Evidence: ev_6e2745c163501caf2796558d338adf0998760fb0c5c3371d4dbe508e1df4c5e0 */

bool FUN_18000cc6c(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_18000cc54();
  if ((char)uVar1 == '\0') {
    FUN_18000eacc(local_res8);
  }
  return local_res8[0] != 1;
}


/* Address: 0x18000cca0; Evidence: ev_f48f8d080d18f2eec612641b28bbd4302f8adc9edd129478397a6c6990691144 */

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
      pvVar3 = HeapAlloc(DAT_1800237e8,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180010740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000b070(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000c2b4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000cd20; Evidence: ev_0cec5eb83f5dc65ddd91b907c80705c66969c53132e19192feb9ffb4f382a82e */

ulonglong FUN_18000cd20(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}


/* Address: 0x18000cd34; Evidence: ev_44db0064e2757042f1deba840c552ff94958c979dd4264b79974d064bc58aaab */

uint FUN_18000cd34(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_18000cbe0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_18000e5e8(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_18000cbe0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_18000e5e8(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000c244(DVar2);
      p_Var4 = FUN_18000c2b4();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_18000cbe0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x18000ced4; Evidence: ev_0a8c56b7e7db10ed60e66a53d7d6fdbf4962f2071b12abe41afb295e145535b8 */

uint FUN_18000ced4(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_18000cbe0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != 0) {
      iVar1 = FUN_18000e678(param_4,0,param_1,0xffffffff);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_18000cbe0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_18000e678(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000c244(DVar2);
      p_Var4 = FUN_18000c2b4();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_18000cbe0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x18000d080; Evidence: ev_c21908b8fe08518de01a35ebe2bdbaa6154f6b7cc724399d8e733dbc41087054 */

ulonglong FUN_18000d080(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_18000c2b4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000affc();
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
      pbVar4 = FUN_180010cf0(pbVar4,(byte *)&local_res10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000d2bc((longlong)*param_1,0,0,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_18000cbe0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000d1cf;
        }
      }
      else {
        uVar10 = FUN_18000d440((uchar *)*param_1,pbVar4,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_18000cbe0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000d1cf;
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
      FUN_18000cbe0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000cbe0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000d1cf:
      FUN_18000cbe0(plVar8);
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
          iVar1 = FUN_180010b20(pcVar9,(longlong)(local_res20 + (local_res18 - (longlong)pcVar9)),
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
      FUN_18000cbe0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000cbe0((LPVOID)*plVar11);
      }
      FUN_18000cbe0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000d2bc; Evidence: ev_3752eb0ec039e140dab0d1a89c98b1759427a3d8282285ce2f445bdf09989bd0 */

undefined8 FUN_18000d2bc(longlong param_1,longlong param_2,ulonglong param_3,longlong *param_4)

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
  if (((param_3 != 0) && (iVar1 = FUN_180010b20(pcVar2,uVar8,param_2,param_3), iVar1 != 0)) ||
     (iVar1 = FUN_180010b20(pcVar2 + param_3,uVar8 - param_3,param_1,uVar6), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  if (param_4[1] == param_4[2]) {
    if (*param_4 == 0) {
      pvVar3 = _calloc_base(4,8);
      *param_4 = (longlong)pvVar3;
      FUN_18000cbe0((LPVOID)0x0);
      lVar4 = *param_4;
      if (lVar4 != 0) {
        param_4[1] = lVar4;
        param_4[2] = lVar4 + 0x20;
        goto LAB_18000d412;
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
          FUN_18000cbe0((LPVOID)0x0);
          goto LAB_18000d412;
        }
        FUN_18000cbe0((LPVOID)0x0);
      }
    }
    uVar7 = 0xc;
    FUN_18000cbe0(pcVar2);
  }
  else {
LAB_18000d412:
    *(char **)param_4[1] = pcVar2;
    param_4[1] = param_4[1] + 8;
  }
  FUN_18000cbe0((LPVOID)0x0);
  return uVar7;
}


/* Address: 0x18000d440; Evidence: ev_f6220b367aaad305ad4528f1e8635e13380d6daeb30f6f002f6072b4df59d7a1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000d440(uchar *param_1,uchar *param_2,longlong *param_3)

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
  
  local_48 = DAT_180022000 ^ (ulonglong)auStackY_378;
  while ((param_2 != param_1 &&
         ((0x2d < (byte)(*param_2 - 0x2f) ||
          ((0x200000000801U >> ((longlong)(char)(*param_2 - 0x2f) & 0x3fU) & 1) == 0))))) {
    param_2 = (uchar *)FUN_1800110a8(param_1,param_2);
  }
  if ((*param_2 == ':') && (param_2 != param_1 + 1)) {
    uVar5 = FUN_18000d2bc((longlong)param_1,0,0,param_3);
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
    FUN_180013cb0((undefined1 (*) [32])&local_298,0,0x250);
    local_338 = 0;
    local_330 = 0;
    local_328 = (LPCWSTR)0x0;
    local_320 = 0;
    local_318 = 0;
    local_310 = '\0';
    FUN_18000a990(&local_308,(longlong *)0x0);
    if (*(int *)(local_300 + 0xc) == 0xfde9) {
      if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
      uVar3 = 0xfde9;
    }
    else {
      IVar6 = FUN_18000eb28();
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
    uVar3 = FUN_18000cd34((char *)param_1,(longlong)&local_338,local_348,uVar3);
    lpFileName = local_328;
    if (uVar3 != 0) {
      lpFileName = (LPCWSTR)0x0;
    }
    hFindFile = FindFirstFileExW(lpFileName,FindExInfoStandard,&local_298,FindExSearchNameMatch,
                                 (LPVOID)0x0,0);
    if (hFindFile == (HANDLE)0xffffffffffffffff) {
      uVar5 = FUN_18000d2bc((longlong)param_1,0,0,param_3);
      uVar5 = uVar5 & 0xffffffff;
      if (local_310 != '\0') {
        FUN_18000cbe0(local_328);
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
        FUN_18000a990(&local_2e8,(longlong *)0x0);
        uVar3 = 0xfde9;
        if (*(int *)(local_2e0 + 0xc) == 0xfde9) {
          if (local_2d0 != '\0') {
            *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
          }
        }
        else {
          IVar6 = FUN_18000eb28();
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
        uVar3 = FUN_18000ced4(local_298.cFileName,(longlong)&local_2c8,local_348,uVar3);
        pcVar2 = local_2b8;
        pcVar8 = local_2b8;
        if (uVar3 != 0) {
          pcVar8 = (char *)0x0;
        }
        if ((*pcVar8 == '.') && ((pcVar8[1] == '\0' || ((pcVar8[1] == '.' && (pcVar8[2] == '\0')))))
           ) {
          if (local_2a0 != '\0') {
            FUN_18000cbe0(local_2b8);
          }
        }
        else {
          uVar7 = FUN_18000d2bc((longlong)pcVar8,(longlong)param_1,uVar5,param_3);
          if ((int)uVar7 != 0) {
            if (local_2a0 != '\0') {
              FUN_18000cbe0(pcVar2);
            }
            FindClose(hFindFile);
            if (local_310 == '\0') {
              return uVar7 & 0xffffffff;
            }
            FUN_18000cbe0(local_328);
            return uVar7 & 0xffffffff;
          }
          uVar5 = local_340;
          if (local_2a0 != (char)uVar7) {
            FUN_18000cbe0(pcVar2);
            uVar5 = local_340;
          }
        }
        BVar4 = FindNextFileW(hFindFile,&local_298);
      } while (BVar4 != 0);
      lVar9 = param_3[1] - *param_3 >> 3;
      if (lVar10 != lVar9) {
        FUN_180010780((undefined1 *)(*param_3 + lVar10 * 8),lVar9 - lVar10,8,FUN_18000cd20);
      }
      FindClose(hFindFile);
      if (local_310 != '\0') {
        FUN_18000cbe0(local_328);
      }
      uVar5 = 0;
    }
  }
  return uVar5;
}


/* Address: 0x18000d7a0; Evidence: ev_37a433fa87c72d434acf8f6ef226102d4fa536c7f012dc9274755486c1d13a24 */

ulonglong thunk_FUN_18000d080(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_18000c2b4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000affc();
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
      pbVar4 = FUN_180010cf0(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000d2bc((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000cbe0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000d1cf;
        }
      }
      else {
        uVar10 = FUN_18000d440((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000cbe0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000d1cf;
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
      FUN_18000cbe0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000cbe0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000d1cf:
      FUN_18000cbe0(plVar8);
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
          iVar1 = FUN_180010b20(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
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
      FUN_18000cbe0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000cbe0((LPVOID)*plVar11);
      }
      FUN_18000cbe0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000d7a8; Evidence: ev_87136f6a2a44db6bee9f7096fc5f260e0b3b76f49c7672619678888b2a1ef705 */

undefined4 FUN_18000d7a8(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      iVar1 = FUN_18000e678(param_4,0,param_1,0xffffffff);
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < (ulonglong)(longlong)iVar1) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          goto LAB_18000d7fc;
        }
        iVar1 = FUN_18000e678(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000c244(DVar2);
      p_Var3 = FUN_18000c2b4();
      return *(undefined4 *)p_Var3;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
LAB_18000d7fc:
      p_Var3 = FUN_18000c2b4();
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


/* Address: 0x18000d8c4; Evidence: ev_286f2bc463fcb0e61ec79eacb901f92a72f4506990f8d4c0a9adbb5e6123bdce */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000d8c4(HMODULE param_1,undefined8 param_2,ulonglong param_3)

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
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_2a8;
  DVar1 = GetModuleFileNameW(param_1,local_228,0x105);
  if (DVar1 == 0) {
    DVar1 = GetLastError();
    FUN_18000c244(DVar1);
    local_240 = 0;
  }
  else {
    local_240 = 0;
    local_238 = 0;
    local_260 = param_2;
    local_258 = param_3 & 0xffffffff;
    local_250 = param_2;
    local_248 = param_3 & 0xffffffff;
    FUN_18000a990(&local_280,(longlong *)0x0);
    uVar3 = 0xfde9;
    if (*(int *)(local_278 + 0xc) == 0xfde9) {
      if (local_268 != '\0') {
        *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
      }
    }
    else {
      IVar2 = FUN_18000eb28();
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
    FUN_18000d7a8(local_228,(longlong)&local_260,local_288,uVar3);
    local_240 = local_240 & 0xffffffff;
  }
  return local_240;
}


/* Address: 0x18000d9e8; Evidence: ev_7a98ec3f03c3e0addec0aecf97d5530b1e9139fd5603fe27fc246253caab638e */

void FUN_18000d9e8(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  if (DAT_1800236e0 == (undefined1 (*) [32])0x0) {
LAB_18000da9b:
    p_Var5 = FUN_18000c2b4();
    *(undefined4 *)p_Var5 = 0x16;
    FUN_18000affc();
  }
  else {
    if (puVar4 == (undefined8 *)0x0) {
      FUN_180013cb0(DAT_1800236e0,0,0x101);
      goto LAB_18000da9b;
    }
    lVar8 = 2;
    pauVar7 = DAT_1800236e0;
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
  if (DAT_1800236e8 != (undefined1 (*) [32])0x0) {
    pauVar7 = DAT_1800236e8;
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
      goto LAB_18000db4c;
    }
    FUN_180013cb0(DAT_1800236e8,0,0x100);
  }
  p_Var5 = FUN_18000c2b4();
  *(undefined4 *)p_Var5 = 0x16;
  FUN_18000affc();
LAB_18000db4c:
  piVar2 = (int *)**(undefined8 **)param_3[1];
  LOCK();
  iVar1 = *piVar2;
  *piVar2 = *piVar2 + -1;
  UNLOCK();
  if ((iVar1 == 1) && ((undefined *)**(undefined8 **)param_3[1] != &DAT_180022210)) {
    FUN_18000cbe0((LPVOID)**(undefined8 **)param_3[1]);
  }
  **(undefined8 **)param_3[1] = *(undefined8 *)(*(longlong *)*param_3 + 0x88);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000dbb8; Evidence: ev_13701d73525e0847fbd7e3b642ee67097ef13d42230e7c6a04c7d68748936655 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_18000a990(&local_28,(longlong *)0x0);
  DAT_1800236f8 = 0;
  if (param_1 == -2) {
    DAT_1800236f8 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_1800236f8 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_1800236f8 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}


/* Address: 0x18000dc38; Evidence: ev_d09055422be15152afdf3ca47ee065cfbc4023de522edfb5fb43060639ac074b */

void FUN_18000dc38(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined2 *puVar3;
  longlong lVar4;
  
  FUN_180013cb0((undefined1 (*) [32])(param_1 + 0x18),0,0x101);
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
    *(undefined1 *)(param_1 + lVar4 + 0x18) = (&DAT_180022228)[lVar4];
    lVar4 = lVar1;
  } while (lVar1 < 0x101);
  do {
    lVar1 = lVar2 + 1;
    *(undefined1 *)(param_1 + lVar2 + 0x119) = (&DAT_180022329)[lVar2];
    lVar2 = lVar1;
  } while (lVar1 < 0x100);
  return;
}


/* Address: 0x18000dcd0; Evidence: ev_9397013a34ba5efdb120fbc3adeace11cd2281c8374b2231aae50509c7392565 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000dcd0(longlong param_1)

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
  
  local_18 = DAT_180022000 ^ (ulonglong)auStackY_788;
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
    FUN_1800105ac((longlong *)0x0,1,local_718,0x100,local_418,*(uint *)(param_1 + 4),0);
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


/* Address: 0x18000dec8; Evidence: ev_e1c64af5f4ce3b3e1503db036a4b2bbabf24d870a87ad5dce6f5d6fcbdf915e8 */

ulonglong FUN_18000dec8(int param_1,char param_2,__acrt_ptd *param_3,__crt_multibyte_data **param_4)

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
      FUN_18000cbe0((LPVOID)0x0);
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
      uVar12 = FUN_18000e26c(iVar8,(longlong)puVar9);
      uVar10 = uVar12 & 0xffffffff;
      if ((int)uVar12 == -1) {
        p_Var13 = FUN_18000c2b4();
        *(undefined4 *)p_Var13 = 0x16;
        FUN_18000cbe0(puVar9);
        uVar10 = 0xffffffff;
      }
      else {
        if (param_2 == '\0') {
          FUN_18000ca6c();
        }
        piVar2 = *(int **)(local_res18 + 0x88);
        LOCK();
        iVar8 = *piVar2;
        *piVar2 = *piVar2 + -1;
        UNLOCK();
        if ((iVar8 == 1) && (*(undefined **)(local_res18 + 0x88) != &DAT_180022210)) {
          FUN_18000cbe0(*(undefined **)(local_res18 + 0x88));
        }
        *(undefined4 *)puVar9 = 1;
        *(undefined8 **)(local_res18 + 0x88) = puVar9;
        if ((DAT_180022858 & *(uint *)(local_res18 + 0x3a8)) == 0) {
          local_258 = &local_res18;
          local_250 = &local_res20;
          local_264[0] = 5;
          local_264[1] = 5;
          FUN_18000d9e8(local_268,local_264 + 1,&local_258,local_264);
          if (param_2 != '\0') {
            PTR_DAT_180022200 = *local_res20;
          }
        }
        FUN_18000cbe0((LPVOID)0x0);
      }
    }
  }
  return uVar10;
}


/* Address: 0x18000e138; Evidence: ev_ab306b373f6e25f225e8ccc92c5c7da40024e0d7994a24f84ad50780516a218d */

/* Library Function - Single Match
    struct __crt_multibyte_data * __ptr64 __cdecl update_thread_multibyte_data_internal(struct
   __acrt_ptd * __ptr64 const,struct __crt_multibyte_data * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

__crt_multibyte_data * __cdecl
update_thread_multibyte_data_internal(__acrt_ptd *param_1,__crt_multibyte_data **param_2)

{
  int iVar1;
  __crt_multibyte_data *p_Var2;
  
  if (((*(uint *)(param_1 + 0x3a8) & DAT_180022858) == 0) || (*(longlong *)(param_1 + 0x90) == 0)) {
    __acrt_lock(5);
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
    if (p_Var2 != *param_2) {
      if (p_Var2 != (__crt_multibyte_data *)0x0) {
        LOCK();
        iVar1 = *(int *)p_Var2;
        *(int *)p_Var2 = *(int *)p_Var2 + -1;
        UNLOCK();
        if ((iVar1 == 1) && (p_Var2 != (__crt_multibyte_data *)&DAT_180022210)) {
          FUN_18000cbe0(p_Var2);
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


/* Address: 0x18000e1f0; Evidence: ev_9b9b617cff628afbcc83fd3c957ef0ca53947b7fc983f480aa24d47b5c34e932 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_1800236fc == '\0') {
    DAT_1800236e8 = &DAT_180022550;
    DAT_1800236f0 = &DAT_180022210;
    DAT_1800236e0 = &DAT_180022440;
    p_Var1 = (__acrt_ptd *)FUN_18000c774();
    in_RAX = FUN_18000dec8(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_1800236f0);
    DAT_1800236fc = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x18000e250; Evidence: ev_ff98522c00a49061e6f3ee4685de822de59b1bfcf82a94601763d913c53a1974 */

void FUN_18000e250(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = (__acrt_ptd *)FUN_18000c758();
  update_thread_multibyte_data_internal(p_Var1,(__crt_multibyte_data **)&DAT_1800236f0);
  return;
}


/* Address: 0x18000e26c; Evidence: ev_d9a60ea5ea6af390a6e5a336ad9cda2da37d5dded36cbc0abec5440ecbfbf560 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_18000e26c(int param_1,longlong param_2)

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
  
  local_30 = DAT_180022000 ^ (ulonglong)auStack_68;
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
LAB_18000e504:
    FUN_18000dc38(param_2);
    return 0;
  }
  puVar6 = &DAT_180022660;
  uVar14 = 1;
  pwVar17 = pwVar8;
  do {
    if (*puVar6 == uVar4) {
      FUN_180013cb0((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
      pbVar18 = &DAT_180022650;
      lVar9 = 4;
      pbVar7 = &DAT_180022670 + (longlong)pwVar17 * 0x30;
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
                    (((longlong)pwVar17 * 0x30 - param_2) + 0x180022658 + (longlong)puVar13);
        puVar13 = puVar13 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      goto LAB_18000e4fa;
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
      if (DAT_1800236f8 == 0) {
        return 0xffffffff;
      }
      goto LAB_18000e504;
    }
    FUN_180013cb0((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
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
LAB_18000e4fa:
  FUN_18000dcd0(param_2);
  return 0;
}


/* Address: 0x18000e534; Evidence: ev_79db871a64f91275d973e0a5c97010a9008d3ed5e92a89f419e11e6f9d8e8b8e */

undefined8 FUN_18000e534(longlong *param_1,uint param_2,uint param_3,byte param_4)

{
  undefined8 uVar1;
  longlong local_28;
  longlong *local_20;
  longlong local_18;
  char local_10;
  
  FUN_18000a990(&local_28,param_1);
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


/* Address: 0x18000e5a8; Evidence: ev_2d4ab32f5a7203cf55758f9e487c9e71fdf73bf171804dbbdea4fc4ba35796d1 */

void FUN_18000e5a8(uint param_1)

{
  FUN_18000e534((longlong *)0x0,param_1,0,4);
  return;
}


/* Address: 0x18000e5c0; Evidence: ev_df192b6242bdb9aa5134959b2bcc1ab9bef80647cde228aeea6209b6f4dd2b19 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined1 FUN_18000e5c0(void)

{
  DAT_180023720 = GetCommandLineA();
  _DAT_180023728 = GetCommandLineW();
  return 1;
}


/* Address: 0x18000e5e8; Evidence: ev_69778f5cd1b02403827a23544f66bab08111d23c69dfa81035a6aa8ddc5b28f2 */

void FUN_18000e5e8(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_18000e635:
          if (!bVar1) goto LAB_18000e639;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_18000e673;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_18000e635;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_18000e639;
LAB_18000e673:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_18000e639;
  }
  param_2 = 0;
LAB_18000e639:
                    /* WARNING: Could not recover jumptable at 0x00018000e639. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}


/* Address: 0x18000e678; Evidence: ev_a78cf178c855aa83e345fc55cc2c13ee9cfe63855fe1387c37411a5187730250 */

void FUN_18000e678(uint param_1,uint param_2,undefined8 param_3,undefined4 param_4)

{
  int iVar1;
  uint uVar2;
  bool bVar3;
  undefined4 *in_stack_00000040;
  
  uVar2 = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_18000e718;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_18000e718;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_18000e709;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_18000e718;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_18000e718;
    iVar1 = param_1 - 65000;
LAB_18000e709:
    if (iVar1 == 0) goto LAB_18000e718;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    uVar2 = param_2 & 0xffffff7f;
  }
LAB_18000e718:
  if ((param_1 - 65000 < 2) && (in_stack_00000040 != (undefined4 *)0x0)) {
    *in_stack_00000040 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000e74f. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,uVar2,param_3,param_4);
  return;
}


/* Address: 0x18000e758; Evidence: ev_ad4595c561bbb78f8ea806046b2ff48f67960805c15c22357f3ad159429b1bd6 */

LPVOID FUN_18000e758(void)

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
    iVar2 = FUN_18000e678(0,0,pWVar3,uVar7);
    if (iVar2 != 0) {
      pvVar6 = _malloc_base((longlong)iVar2);
      if (pvVar6 != (LPVOID)0x0) {
        iVar2 = FUN_18000e678(0,0,pWVar3,uVar7);
        if (iVar2 == 0) {
          FUN_18000cbe0(pvVar6);
          pvVar6 = (LPVOID)0x0;
        }
        else {
          FUN_18000cbe0((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pvVar6;
      }
      FUN_18000cbe0((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPVOID)0x0;
}


/* Address: 0x18000e870; Evidence: ev_1392bdab65cf6b9dae920205cfbbf5faa2fede0e8361de5f6950052d5588a47a */

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
      FUN_180013cb0((undefined1 (*) [32])((longlong)pvVar3 + uVar2),0,uVar4 - uVar2);
    }
  }
  else {
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 0xc;
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x18000e918; Evidence: ev_d028fe421ae68b6d8f3e32603b16ff94857bf73444df7dfd098b5bc401237872 */

FARPROC FUN_18000e918(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
LAB_18000ea0a:
      __acrt_lock(0xe);
      local_res18[0] = 0;
      BVar5 = VirtualProtect(&DAT_180027000,0x100,4,local_res18);
      if (BVar5 != 0) {
        pFVar6 = pFVar7;
        if (pFVar7 == (FARPROC)0x0) {
          pFVar6 = (FARPROC)0xffffffffffffffff;
        }
        LOCK();
        (&DAT_180027000)[param_1] = pFVar6;
        UNLOCK();
        BVar5 = VirtualProtect(&DAT_180027000,0x100,2,local_res18);
        if (BVar5 != 0) {
          __acrt_unlock(0xe);
          return pFVar7;
        }
      }
                    /* WARNING: Subroutine does not return */
      abort();
    }
    uVar2 = *param_3;
    hLibModule = (HMODULE)(&DAT_180023730)[uVar2];
    if (hLibModule == (HMODULE)0x0) {
      lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_datetime_l1_1_1_180018120)[uVar2];
      hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
      if ((hLibModule != (HMODULE)0x0) ||
         ((((DVar3 = GetLastError(), DVar3 == 0x57 &&
            (iVar4 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar4 != 0)) &&
           (iVar4 = wcsncmp(lpLibFileName,L"ext-ms-",7), iVar4 != 0)) &&
          (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0))))
      {
        LOCK();
        lVar1 = (&DAT_180023730)[uVar2];
        (&DAT_180023730)[uVar2] = hLibModule;
        UNLOCK();
        if (lVar1 != 0) {
          FreeLibrary(hLibModule);
        }
        goto LAB_18000eab0;
      }
      LOCK();
      (&DAT_180023730)[uVar2] = 0xffffffffffffffff;
      UNLOCK();
    }
    else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_18000eab0:
      pFVar7 = GetProcAddress(hLibModule,param_2);
      goto LAB_18000ea0a;
    }
    param_3 = param_3 + 1;
  } while( true );
}


/* Address: 0x18000eacc; Evidence: ev_fd3b41ecce41178cfe53419f43ce359ddb8cb5422a728495e4f91f85d7db77e2 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000eacc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_1800270d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_1800270d0;
  if ((DAT_1800270d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000e918(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001876c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}


/* Address: 0x18000eb28; Evidence: ev_4ce7b8420bc32a6361ecff318e9c493ddc88ddeb4d3986e5e4cd8304eaab7dad */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000eb28(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_180027000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_180027000;
  if ((DAT_180027000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000e918(0,"AreFileApisANSI",(uint *)&DAT_180018708,(uint *)&DAT_18001870c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}


/* Address: 0x18000eb74; Evidence: ev_e24faa6ac5e272572ea2a953295187490e3d1993e0a606e853338b9438305960 */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eb74. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}


/* Address: 0x18000eb7c; Evidence: ev_4b8c5f2b575eb573218dd9597e0e9a54f9e67aa132019369d7ba0df5a505dd2d */

BOOL __stdcall FlsFree(DWORD dwFlsIndex)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eb7c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsFree(dwFlsIndex);
  return BVar1;
}


/* Address: 0x18000eb84; Evidence: ev_6c984b3e0922c8f7892788ffb8d91ee3f6908b0461fab010f7c1afb6a9a0df26 */

PVOID __stdcall FlsGetValue(DWORD dwFlsIndex)

{
  PVOID pvVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eb84. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  pvVar1 = FlsGetValue(dwFlsIndex);
  return pvVar1;
}


/* Address: 0x18000eb8c; Evidence: ev_7c44cd1b191ec3202c9146f603da8e4ef6dd7e5b42641efbc5b90c1920ad5bf5 */

void FUN_18000eb8c(void)

{
                    /* WARNING: Could not recover jumptable at 0x00018000eb93. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*DAT_180027018)();
  return;
}


/* Address: 0x18000eb98; Evidence: ev_877cb55bf0aac613ada2ab97b2eac96d463f5376c3482d4926011c56fb086617 */

BOOL __stdcall FlsSetValue(DWORD dwFlsIndex,PVOID lpFlsData)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eb98. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsSetValue(dwFlsIndex,lpFlsData);
  return BVar1;
}


/* Address: 0x18000eba0; Evidence: ev_fcb9f645617793d8009a22daa090e90adc26094c97c8dfb48ff912e4c13f777b */

BOOL __stdcall
InitializeCriticalSectionEx(LPCRITICAL_SECTION lpCriticalSection,DWORD dwSpinCount,DWORD Flags)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eba0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = InitializeCriticalSectionEx(lpCriticalSection,dwSpinCount,Flags);
  return BVar1;
}


/* Address: 0x18000eba8; Evidence: ev_efb4bd8c6fe32ef9c9dfdd3f8413196af86dd236d02e4616c2a4471a27b462f3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000eba8(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_180027090 == (FARPROC)0xffffffffffffffff) {
LAB_18000ec53:
    Locale = FUN_18000ec9c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_180027090;
    if (DAT_180027090 == (FARPROC)0x0) {
      pFVar1 = FUN_18000e918(0x12,"LCMapStringEx",(uint *)&DAT_180018738,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000ec53;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}


/* Address: 0x18000ec9c; Evidence: ev_0c84a801f6e8e891f4db5d9c619d79e80ec18b757c4b2f7568cc4df5410d9a5c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000ec9c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_1800270a0 == (FARPROC)0xffffffffffffffff) {
LAB_18000eceb:
    FUN_1800115fc(param_1);
  }
  else {
    pFVar1 = DAT_1800270a0;
    if (DAT_1800270a0 == (FARPROC)0x0) {
      pFVar1 = FUN_18000e918(0x14,"LocaleNameToLCID",(uint *)&DAT_180018750,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000eceb;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}


/* Address: 0x18000ed00; Evidence: ev_06378e952629b8b6888ced961bd4bedbb76ac2565c3fd4f044f325089891e04b */

bool FUN_18000ed00(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_180027000,0x100,2,local_res8);
  return BVar1 != 0;
}


/* Address: 0x18000ed30; Evidence: ev_af7917efff118db3d78dfe526e9612fd90fc42b430c28f1036bd59fa095ef2b0 */

bool FUN_18000ed30(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_180027018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_180027018 == 0;
    if (!bVar2) goto LAB_18000ed6a;
    pFVar1 = FUN_18000e918(3,"FlsGetValue2",(uint *)&DAT_180018720,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18000ed6a:
  return !bVar2;
}


/* Address: 0x18000ed80; Evidence: ev_43af5994f228ab753184490580555785357ae97cfde491277c21feb1beb9bbd2 */

/* Library Function - Single Match
    __acrt_uninitialize_winapi_thunks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_winapi_thunks(char param_1)

{
  HMODULE hLibModule;
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  if (param_1 == '\0') {
    puVar1 = &DAT_180023730;
    do {
      hLibModule = (HMODULE)*puVar1;
      if (hLibModule != (HMODULE)0x0) {
        if (hLibModule != (HMODULE)0xffffffffffffffff) {
          FreeLibrary(hLibModule);
        }
        *puVar1 = 0;
      }
      puVar1 = puVar1 + 1;
      in_RAX = &DAT_1800237e8;
    } while (puVar1 != &DAT_1800237e8);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000ede0; Evidence: ev_c431be26c968a1055f9a6abadf97dab87fa3510cb31d5e0cfb60a325ed1e31a8 */

bool FUN_18000ede0(void)

{
  DAT_1800237e8 = GetProcessHeap();
  return DAT_1800237e8 != (HANDLE)0x0;
}


/* Address: 0x18000ee10; Evidence: ev_ec2f4f7283891dada02bd456fa70a76a1d8b3ff79e348c9b3081870d91c165b8 */

undefined1 FUN_18000ee10(void)

{
  DAT_1800237e8 = 0;
  return 1;
}


/* Address: 0x18000ee38; Evidence: ev_15fed553f3cb116350ab6d43b834da6300e5f8a2adeaaff62dc9f3e7a17e1683 */

void FUN_18000ee38(void)

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
  
  FUN_180013cb0((undefined1 (*) [32])&local_78,0,0x68);
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
    if ((int)DAT_180023bf0 < (int)uVar7) {
      uVar7 = DAT_180023bf0;
    }
    uVar8 = (ulonglong)uVar7;
    if (uVar7 != 0) {
      do {
        if ((((*(longlong *)pbVar4 != -1) && (*(longlong *)pbVar4 != -2)) && ((*puVar6 & 1) != 0))
           && (((*puVar6 & 8) != 0 || (DVar2 = GetFileType(*(HANDLE *)pbVar4), DVar2 != 0)))) {
          uVar3 = (ulonglong)((uint)lVar5 & 0x3f);
          lVar1 = (&DAT_1800237f0)[lVar5 >> 6];
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


/* Address: 0x18000ef38; Evidence: ev_e4454afb11da68cfeaa46cad01adde338164ade6726b05472388d8596861632c */

void FUN_18000ef38(void)

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
    lVar2 = (&DAT_1800237f0)[(longlong)(int)uVar5 >> 6];
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
          goto LAB_18000f016;
        }
      }
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x40;
      *(undefined8 *)(lVar2 + 0x28 + uVar4 * 0x48) = 0xfffffffffffffffe;
      if (DAT_180023c28 != 0) {
        *(undefined4 *)(*(longlong *)(lVar6 + DAT_180023c28) + 0x18) = 0xfffffffe;
      }
    }
    else {
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x80;
    }
LAB_18000f016:
    uVar5 = uVar5 + 1;
    lVar6 = lVar6 + 8;
    if (uVar5 == 3) {
      return;
    }
  } while( true );
}


/* Address: 0x18000f040; Evidence: ev_0f0c6ed6b6a7fb88a494112ddf063ef1a9dad66b50e19944285edde13cd968fa */

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
    FUN_18000ee38();
    FUN_18000ef38();
  }
  __acrt_unlock(7);
  return bVar2;
}


/* Address: 0x18000f080; Evidence: ev_05588aa563ccd34d746ab8c989afbf9a663532830c47e1a0a42ac7b0f79f265a */

/* Library Function - Single Match
    __acrt_uninitialize_lowio
   
   Library: Visual Studio 2019 Release */

undefined1 __acrt_uninitialize_lowio(void)

{
  ulonglong uVar1;
  
  uVar1 = 0;
  do {
    if (*(LPCRITICAL_SECTION *)((longlong)&DAT_1800237f0 + uVar1) != (LPCRITICAL_SECTION)0x0) {
      __acrt_lowio_destroy_handle_array(*(LPCRITICAL_SECTION *)((longlong)&DAT_1800237f0 + uVar1));
      *(undefined8 *)((longlong)&DAT_1800237f0 + uVar1) = 0;
    }
    uVar1 = uVar1 + 8;
  } while (uVar1 < 0x400);
  return 1;
}


/* Address: 0x18000f0c0; Evidence: ev_2f29fd9ee571a68b4d51850f75841e0ac816ab2992fdc03a304f5b162c661d2c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000f0c0(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x18000f140; Evidence: ev_a1fc8ebc00cb7d257392e1dc5c78fcac091a5c7365c713a530a572b5878b9b3f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000f140(longlong param_1,longlong param_2)

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


/* Address: 0x18000f17c; Evidence: ev_3cca4563f4249acf09808dde3a1f0b7920534a7bbebac01ff189d740812edc78 */

ulonglong FUN_18000f17c(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180022000 & 0x3f;
  uVar2 = DAT_180023c08 ^ DAT_180022000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18000f1c4; Evidence: ev_de79a49cd950c2ddfc2d0cd4f94b2d2f2ce55720cd5290f12ba83a0c147c3d8a */

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
  FUN_18000f17c(local_res8,local_res18,local_res8,local_res10);
  return;
}


/* Address: 0x18000f1f4; Evidence: ev_57ad59dfc3fdefb8075f59d61b85e1d3959e6674dbe11fa635ecd1c5995ff69f */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000f1f4(undefined8 param_1)

{
  _DAT_180023bf8 = param_1;
  _DAT_180023c00 = param_1;
  DAT_180023c08 = param_1;
  _DAT_180023c10 = param_1;
  return;
}


/* Address: 0x18000f214; Evidence: ev_2c68c080bcae8c927b323bab8f56769c93d46b3a127452711a4b982a1be20d1f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000f214(uint param_1)

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
LAB_18000f26b:
    if (param_1 == 2) {
      puVar8 = (ulonglong *)&DAT_180023bf8;
    }
    else if (param_1 == 6) {
LAB_18000f30d:
      puVar8 = &DAT_180023c08;
      p_Var9 = p_Var10;
    }
    else if (param_1 == 0xf) {
      puVar8 = (ulonglong *)&DAT_180023c10;
    }
    else if (param_1 == 0x15) {
      puVar8 = (ulonglong *)&DAT_180023c00;
      p_Var9 = p_Var10;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000f30d;
      puVar8 = (ulonglong *)0x0;
      p_Var9 = p_Var10;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18000f29b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000f2ed;
      }
      goto LAB_18000f26b;
    }
LAB_18000f29b:
    p_Var9 = FUN_18000c7b8();
    if (p_Var9 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar4 = *(longlong *)p_Var9;
    lVar2 = lVar4 + 0xc0;
    for (; lVar4 != lVar2; lVar4 = lVar4 + 0x10) {
      if (*(uint *)(lVar4 + 4) == param_1) goto LAB_18000f2e8;
    }
    lVar4 = 0;
LAB_18000f2e8:
    if (lVar4 == 0) {
LAB_18000f2ed:
      p_Var9 = FUN_18000c2b4();
      *(undefined4 *)p_Var9 = 0x16;
      FUN_18000affc();
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
    bVar6 = (byte)DAT_180022000 & 0x3f;
    pcVar7 = (code *)(((ulonglong)pcVar7 ^ DAT_180022000) >> bVar6 |
                     ((ulonglong)pcVar7 ^ DAT_180022000) << 0x40 - bVar6);
  }
  if (pcVar7 == (code *)0x1) goto LAB_18000f3f6;
  if (pcVar7 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_18000b604(3);
    pcVar7 = (code *)swi(3);
    uVar5 = (*pcVar7)();
    return uVar5;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar4 = *(longlong *)(p_Var9 + 8);
    *(longlong *)(p_Var9 + 8) = 0;
    if (param_1 == 8) {
      lVar2 = FUN_18000c758();
      local_res10 = *(undefined4 *)(lVar2 + 0x10);
      lVar2 = FUN_18000c758();
      *(undefined4 *)(lVar2 + 0x10) = 0x8c;
      goto LAB_18000f3ae;
    }
  }
  else {
LAB_18000f3ae:
    if (param_1 == 8) {
      lVar2 = *(longlong *)p_Var9;
      for (lVar3 = lVar2 + 0x30; lVar3 != lVar2 + 0xc0; lVar3 = lVar3 + 0x10) {
        *(undefined8 *)(lVar3 + 8) = 0;
      }
      goto LAB_18000f3f6;
    }
  }
  *puVar8 = DAT_180022000;
LAB_18000f3f6:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar7 != (code *)0x1) {
    if (param_1 == 8) {
      lVar2 = FUN_18000c758();
      (*pcVar7)(8,*(undefined4 *)(lVar2 + 0x10));
    }
    else {
      (*pcVar7)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var9 + 8) = lVar4, param_1 == 8)) {
      lVar4 = FUN_18000c758();
      *(undefined4 *)(lVar4 + 0x10) = local_res10;
    }
  }
  return 0;
}


/* Address: 0x18000f470; Evidence: ev_d1b7593437fda14fcd44499cefb4d93e4aa778fc96d6b79c6e8bae6c88302164 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000f470(undefined8 param_1)

{
  _DAT_180023c18 = param_1;
  return;
}


/* Address: 0x18000f478; Evidence: ev_f0f186ba11dd3a397ed888e10b8ddd10a03ffc3c3c2669a9034ccef4efde0ff0 */

void FUN_18000f478(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  uint uVar1;
  int iVar2;
  
  FUN_18000f93c(*param_2);
  if ((*(longlong *)*param_3 != 0) &&
     (uVar1 = *(uint *)(*(longlong *)*param_3 + 0x14), (uVar1 >> 0xd & 1) != 0)) {
    if (((((byte)uVar1 & 3) == 2) && ((uVar1 & 0xc0) != 0)) || ((uVar1 >> 0xb & 1) != 0)) {
      if ((*(char *)param_3[2] != '\0') || ((*(uint *)(*(longlong *)*param_3 + 0x14) >> 1 & 1) != 0)
         ) {
        iVar2 = FUN_18000f6e4(*(int **)*param_3);
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
  FUN_18000f948(*param_4);
  return;
}


/* Address: 0x18000f514; Evidence: ev_5c9f55bf690ef131a8c21ba2201b8565b51ae00398b0bc6556c545c8b3877428 */

void FUN_18000f514(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  plVar1 = DAT_180023c28 + DAT_180023c20;
  for (plVar3 = DAT_180023c28; local_40 = plVar3, plVar3 != plVar1; plVar3 = plVar3 + 1) {
    local_58 = *plVar3;
    if ((local_58 != 0) && (uVar2 = *(uint *)(local_58 + 0x14), (uVar2 >> 0xd & 1) != 0)) {
      if (((((byte)uVar2 & 3) == 2) && ((uVar2 & 0xc0) != 0)) || ((uVar2 >> 0xb & 1) != 0)) {
        local_20 = param_3[2];
        local_28 = param_3[1];
        local_30 = *param_3;
        local_38 = &local_58;
        local_50 = local_58;
        local_48 = local_58;
        FUN_18000f478(local_res10,&local_48,&local_38,&local_50);
      }
      else {
        *(int *)*param_3 = *(int *)*param_3 + 1;
      }
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000f5f8; Evidence: ev_88510e419220710dab05bf027b007a1000a0a1daeb3083ab6f17ac7d955bd552 */

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
  FUN_18000f514(local_res10,local_28 + 1,&local_20,local_28);
  if (local_res8[0] != '\0') {
    local_res18[0] = local_res20[0];
  }
  return local_res18[0];
}


/* Address: 0x18000f658; Evidence: ev_fb1dbe1d2dd5500e31abf6ef30a4dcf5b3aac2154815d24d6da65fc25152e516 */

undefined8 FUN_18000f658(int *param_1,longlong *param_2)

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
      uVar2 = FUN_18000fec4((longlong)param_1);
      uVar2 = FUN_180012314(uVar2,pauVar1,uVar3,param_2);
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


/* Address: 0x18000f6e4; Evidence: ev_79476759e63a8226bccbda01a8e8d058b198d5904562e19c3e1ba17472bc7bb4 */

int FUN_18000f6e4(int *param_1)

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
  local_20 = DAT_18002346c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800221f8;
    puStack_28 = PTR_DAT_180022200;
  }
  if (param_1 == (int *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_18000f769;
  }
  uVar2 = FUN_18000f658(param_1,local_48);
  if ((int)uVar2 == 0) {
    if (((uint)param_1[5] >> 0xb & 1) != 0) {
      iVar1 = FUN_18000fec4((longlong)param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_18000f744;
    }
    iVar1 = 0;
  }
  else {
LAB_18000f744:
    iVar1 = -1;
  }
LAB_18000f769:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_18000ac10(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_18000ac10(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}


/* Address: 0x18000f7b8; Evidence: ev_d9c7894fd3f859c8166ff981195ba1fedd2211f869f00b2200582477c1b3beac */

int __cdecl common_flush_all(bool param_1)

{
  int iVar1;
  
  iVar1 = common_flush_all(true);
  return iVar1;
}


/* Address: 0x18000f7c0; Evidence: ev_8e48ae8b55c8874a213091e3f12d0a538965b53220f113e30684cce2c17df987 */

undefined8 FUN_18000f7c0(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_180023c20 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_180023c20) goto LAB_18000f7fd;
  }
  DAT_180023c20 = iVar4;
LAB_18000f7fd:
  DAT_180023c28 = _calloc_base((longlong)DAT_180023c20,8);
  FUN_18000cbe0((LPVOID)0x0);
  if (DAT_180023c28 == (LPVOID)0x0) {
    DAT_180023c20 = 3;
    DAT_180023c28 = _calloc_base(3,8);
    FUN_18000cbe0((LPVOID)0x0);
    if (DAT_180023c28 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_180022768;
  puVar6 = &DAT_180022750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_180023c28) = puVar6;
    if (*(longlong *)((&DAT_1800237f0)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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


/* Address: 0x18000f8e0; Evidence: ev_e3b1cab913bbcac84087bae7238c10f93b01bb094bebaf311bee7e9f62163a61 */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_180012764();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_180023c28));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_180023c28) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_18000cbe0(DAT_180023c28);
  DAT_180023c28 = (LPVOID)0x0;
  return;
}


/* Address: 0x18000f93c; Evidence: ev_45e97666cb059abb24e6479ef290c96a5985c7ba62e9144e331e374bbd23618f */

void FUN_18000f93c(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000f940. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x18000f948; Evidence: ev_ddc1c47f3c1eca346486edeb987eb82cbbfbd533d2ee0668f1acd122bfa1e28b */

void FUN_18000f948(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000f94c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x18000f954; Evidence: ev_b61b93a4687d1b02cbcda9942d8727d2f46f4f3ca242314e852c9cef8fe20480 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_18000f954(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_180023c40 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_18000c0c0(param_4);
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
              (iVar3 = FUN_18000e5e8(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_18000e5e8(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_18000fcc4(param_1,param_2,param_3,(uint *)&DAT_180023c40,(longlong)param_4);
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


/* Address: 0x18000facc; Evidence: ev_1466182fb97bd07eb56b95278124878611e8839489c107b3040455e660ceccf0 */

ulonglong FUN_18000facc(byte *param_1)

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


/* Address: 0x18000fb04; Evidence: ev_bb053f4e9fde6cd11bff1d79850f8528019317dcf64b5241767866a68377b98d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000fb04(ulonglong param_1,byte *param_2,ulonglong param_3,uint *param_4,
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
  
  local_48 = DAT_180022000 ^ (ulonglong)auStack_78;
  puVar5 = (uint *)&DAT_180023c48;
  if (param_4 != (uint *)0x0) {
    puVar5 = param_4;
  }
  pbVar6 = (byte *)0x180016f02;
  uVar2 = 1;
  if (param_2 != (byte *)0x0) {
    pbVar6 = param_2;
    uVar2 = param_3;
  }
  puVar10 = (uint *)(-(ulonglong)(param_2 != (byte *)0x0) & param_1);
  if (uVar2 == 0) {
LAB_18000fb66:
    uVar2 = 0xfffffffffffffffe;
  }
  else {
    if (*(short *)((longlong)puVar5 + 6) == 0) {
      uVar3 = FUN_18000facc(pbVar6);
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
LAB_18000fbf1:
        uVar9 = (ulonglong)bVar7;
        uVar3 = uVar9;
        if (uVar2 <= uVar9) {
          uVar3 = uVar2;
        }
        while ((ulonglong)((longlong)pbVar6 - (longlong)param_2) < uVar3) {
          bVar1 = *pbVar6;
          pbVar6 = pbVar6 + 1;
          if ((bVar1 & 0xc0) != 0x80) goto LAB_18000fc9a;
          uVar4 = bVar1 & 0x3f | uVar4 << 6;
        }
        if (uVar3 < uVar9) {
          *(ushort *)(puVar5 + 1) = (ushort)uVar8 & 0xff;
          *(ushort *)((longlong)puVar5 + 6) = (ushort)(byte)(bVar7 - (char)uVar3);
          *puVar5 = uVar4;
          goto LAB_18000fb66;
        }
        if ((0x7ff < uVar4 - 0xd800) && (uVar4 < 0x110000)) {
          auStack_60[2] = 0x80;
          auStack_60[3] = 0x800;
          auStack_60[4] = 0x10000;
          if (auStack_60[uVar8 & 0xff] <= uVar4) {
            if (puVar10 != (uint *)0x0) {
              *puVar10 = uVar4;
            }
            uVar2 = FUN_1800128bc(-(ulonglong)(uVar4 != 0) & uVar9,(undefined8 *)puVar5);
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
      if ((((byte)(bVar1 - 2) < 3) && (bVar7 != 0)) && (bVar7 < bVar1)) goto LAB_18000fbf1;
    }
LAB_18000fc9a:
    uVar2 = FUN_1800128c4((undefined8 *)puVar5,param_5);
  }
  return uVar2;
}


/* Address: 0x18000fcc4; Evidence: ev_dd43b6a47726844b28dc805c76c995393f8ed1a74bdff815ab6896bffb585462 */

void FUN_18000fcc4(undefined2 *param_1,byte *param_2,ulonglong param_3,uint *param_4,
                  longlong param_5)

{
  ulonglong uVar1;
  uint local_18 [4];
  
  local_18[0] = 0;
  uVar1 = FUN_18000fb04((ulonglong)local_18,param_2,param_3,param_4,param_5);
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


/* Address: 0x18000fd0c; Evidence: ev_9b9db90891f224027b4253ec499b34c849ddab54e76ee3b69e8e3f96e690ba94 */

byte * FUN_18000fd0c(ushort *param_1,undefined8 *param_2,ulonglong param_3,uint *param_4,
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
      uVar5 = FUN_18000fb04(0,pbVar4,uVar5,param_4,param_5);
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
      uVar5 = FUN_18000fb04((ulonglong)local_res8,pbVar4,uVar5,param_4,param_5);
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


/* Address: 0x18000fec4; Evidence: ev_440a78e8a96280993f8356c9a933560e4ab22eebe9e2e2d0c7f850717791f2b7 */

undefined4 FUN_18000fec4(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_18000c2b4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000affc();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}


/* Address: 0x18000feec; Evidence: ev_1ec7758c16708b6be89e624b20a06fd8d5ac10a0586e3d2ca5cbd7d7320d6eac */

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
    if (((undefined *)puVar2[-2] != &DAT_180022208) &&
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


/* Address: 0x18000ff78; Evidence: ev_9eb6c5c78373944dc9a1274bc8a3af5ab814f27348a09022e1c9e6abc6503c96 */

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
       (*(undefined ***)((longlong)param_1 + 0xf8) != &PTR_DAT_180022860)) &&
      (*(int **)((longlong)param_1 + 0xe0) != (int *)0x0)) &&
     (**(int **)((longlong)param_1 + 0xe0) == 0)) {
    piVar1 = *(int **)((longlong)param_1 + 0xf0);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_18000cbe0(piVar1);
      __acrt_locale_free_monetary(*(longlong *)((longlong)param_1 + 0xf8));
    }
    piVar1 = *(int **)((longlong)param_1 + 0xe8);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_18000cbe0(piVar1);
      __acrt_locale_free_numeric(*(undefined8 **)((longlong)param_1 + 0xf8));
    }
    FUN_18000cbe0(*(LPVOID *)((longlong)param_1 + 0xe0));
    FUN_18000cbe0(*(LPVOID *)((longlong)param_1 + 0xf8));
  }
  if ((*(int **)((longlong)param_1 + 0x100) != (int *)0x0) &&
     (**(int **)((longlong)param_1 + 0x100) == 0)) {
    FUN_18000cbe0((LPVOID)(*(longlong *)((longlong)param_1 + 0x108) + -0xfe));
    FUN_18000cbe0((LPVOID)(*(longlong *)((longlong)param_1 + 0x110) + -0x80));
    FUN_18000cbe0((LPVOID)(*(longlong *)((longlong)param_1 + 0x118) + -0x80));
    FUN_18000cbe0(*(LPVOID *)((longlong)param_1 + 0x100));
  }
  __acrt_locale_free_lc_time_if_unreferenced(*(undefined ***)((longlong)param_1 + 0x120));
  puVar3 = (undefined8 *)((longlong)param_1 + 0x128);
  lVar2 = 6;
  puVar4 = (undefined8 *)((longlong)param_1 + 0x38);
  do {
    if ((((undefined *)puVar4[-2] != &DAT_180022208) &&
        (piVar1 = (int *)*puVar4, piVar1 != (int *)0x0)) && (*piVar1 == 0)) {
      FUN_18000cbe0(piVar1);
      FUN_18000cbe0((LPVOID)*puVar3);
    }
    if (((puVar4[-3] != 0) && (piVar1 = (int *)puVar4[-1], piVar1 != (int *)0x0)) && (*piVar1 == 0))
    {
      FUN_18000cbe0(piVar1);
    }
    puVar3 = puVar3 + 1;
    puVar4 = puVar4 + 4;
    lVar2 = lVar2 + -1;
  } while (lVar2 != 0);
  FUN_18000cbe0(param_1);
  return;
}


/* Address: 0x1800100f0; Evidence: ev_b4d98c0bcdd19b671abe8084413584dfaeb5a667cf737b981472a3d6e3a944a3 */

/* Library Function - Single Match
    __acrt_locale_add_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_add_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180017a40)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + 1;
    UNLOCK();
    return iVar2 + 1;
  }
  return 0x7fffffff;
}


/* Address: 0x180010118; Evidence: ev_072578dabd3ef64a0a5c21d7cf864430fb0b54267beac31ed46968e4e5813c66 */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180017a40)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_18000cbe0(param_1);
  }
  return;
}


/* Address: 0x180010150; Evidence: ev_f5f1322dc30fde8fe63e8420de1ee0c78b5fc6d2727792fe15a515caf21a5457 */

/* Library Function - Single Match
    __acrt_locale_release_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_release_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180017a40)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + -1;
    UNLOCK();
    return iVar2 + -1;
  }
  return 0x7fffffff;
}


/* Address: 0x180010178; Evidence: ev_ba2af674ab4b20c6919e5c708c17c6cb86f1c3b3d54735f62e402534bcda5217 */

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
      if (((undefined *)puVar2[-2] != &DAT_180022208) &&
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


/* Address: 0x180010220; Evidence: ev_42b3ee19102927a0385747bf80c723cd5109971d29f7d38852b8fd9b9a1b4bd5 */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_18000c758();
  if (((DAT_180022858 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_180023470);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}


/* Address: 0x180010290; Evidence: ev_a1e8c7dda74e4af1dbe777f25827c7eb7a2f21d7e273a870615692ed9a82d914 */

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
         (ppuVar1 != &PTR_DAT_1800220a0)) {
        __acrt_free_locale(ppuVar1);
      }
    }
  }
  return param_2;
}


/* Address: 0x1800102f8; Evidence: ev_7a87aba1e60c4896cc10dda1d132ad915f1ec84667e947802a9453a78f1c1b93 */

/* Library Function - Single Match
    __acrt_locale_free_monetary
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_monetary(longlong param_1)

{
  if (param_1 != 0) {
    if (*(undefined **)(param_1 + 0x18) != PTR_DAT_180022878) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x18));
    }
    if (*(undefined **)(param_1 + 0x20) != PTR_DAT_180022880) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x20));
    }
    if (*(undefined **)(param_1 + 0x28) != PTR_DAT_180022888) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x28));
    }
    if (*(undefined **)(param_1 + 0x30) != PTR_DAT_180022890) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x30));
    }
    if (*(undefined **)(param_1 + 0x38) != PTR_DAT_180022898) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x38));
    }
    if (*(undefined **)(param_1 + 0x40) != PTR_DAT_1800228a0) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x40));
    }
    if (*(undefined **)(param_1 + 0x48) != PTR_DAT_1800228a8) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x48));
    }
    if (*(undefined **)(param_1 + 0x68) != PTR_DAT_1800228c8) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x68));
    }
    if (*(undefined **)(param_1 + 0x70) != PTR_DAT_1800228d0) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x70));
    }
    if (*(undefined **)(param_1 + 0x78) != PTR_DAT_1800228d8) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x78));
    }
    if (*(undefined **)(param_1 + 0x80) != PTR_DAT_1800228e0) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x80));
    }
    if (*(undefined **)(param_1 + 0x88) != PTR_DAT_1800228e8) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x88));
    }
    if (*(undefined **)(param_1 + 0x90) != PTR_DAT_1800228f0) {
      FUN_18000cbe0(*(undefined **)(param_1 + 0x90));
    }
  }
  return;
}


/* Address: 0x180010404; Evidence: ev_0409c1963693eefdaedd6356192e39c5f1e36f878f90c7e77a02af72e821477d */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_180022860) {
      FUN_18000cbe0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_180022868) {
      FUN_18000cbe0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_180022870) {
      FUN_18000cbe0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800228b8) {
      FUN_18000cbe0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_1800228c0) {
      FUN_18000cbe0((undefined *)param_1[0xc]);
    }
  }
  return;
}


/* Address: 0x180010470; Evidence: ev_7402aa74f46ebf2596779af099664078b8fed716aac6820590d7c6046c187f3a */

void FUN_180010470(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_18000cbe0((LPVOID)*param_1);
  }
  return;
}


/* Address: 0x1800104a4; Evidence: ev_c0135423c1c7d06fc88d844e02ff1f83b820c26bec1956c06ed1b57bd9be4518 */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_180010470(param_1,7);
    FUN_180010470(param_1 + 7,7);
    FUN_180010470(param_1 + 0xe,0xc);
    FUN_180010470(param_1 + 0x1a,0xc);
    FUN_180010470(param_1 + 0x26,2);
    FUN_18000cbe0((LPVOID)param_1[0x28]);
    FUN_18000cbe0((LPVOID)param_1[0x29]);
    FUN_18000cbe0((LPVOID)param_1[0x2a]);
    FUN_180010470(param_1 + 0x2c,7);
    FUN_180010470(param_1 + 0x33,7);
    FUN_180010470(param_1 + 0x3a,0xc);
    FUN_180010470(param_1 + 0x46,0xc);
    FUN_180010470(param_1 + 0x52,2);
    FUN_18000cbe0((LPVOID)param_1[0x54]);
    FUN_18000cbe0((LPVOID)param_1[0x55]);
    FUN_18000cbe0((LPVOID)param_1[0x56]);
    FUN_18000cbe0((LPVOID)param_1[0x57]);
  }
  return;
}


/* Address: 0x1800105ac; Evidence: ev_f0880ee7946d5314be5a9a6f398243ade7c726f1a790eb001da01039d5eb534e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_1800105ac(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
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
  local_30 = DAT_180022000 ^ (ulonglong)local_58;
  FUN_18000a990(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_18000e5e8(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_180010702;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_1800106ea:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_180010702;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_1800106ea;
      *puVar6 = 0xcccc;
LAB_180010698:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180010698;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_1800106ea;
    *(undefined8 *)(puVar9 + -8) = 0x1800106ae;
    FUN_180013cb0(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x1800106ca;
    iVar3 = FUN_18000e5e8(param_6,1);
    if (iVar3 == 0) goto LAB_1800106ea;
    *(undefined8 *)(puVar9 + -8) = 0x1800106e4;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x180010702;
    FUN_18000cbe0(lpSrcStr[-1] + 0x10);
  }
LAB_180010702:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x180010721;
  return BVar10;
}


/* Address: 0x180010740; Evidence: ev_fe0e373465a3e6584f5fb8d40935b70c0b8823dfb4b537005bf13083960e3646 */

undefined4 FUN_180010740(void)

{
  return DAT_180023c58;
}


/* Address: 0x180010750; Evidence: ev_ce8ccb280caba595592b8ec851537047eb82241db837544ef52939eaafc2f43d */

uint FUN_180010750(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180023c58;
    DAT_180023c58 = param_1;
  }
  else {
    p_Var2 = FUN_18000c2b4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000affc();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}


/* Address: 0x180010780; Evidence: ev_1d3d3b0a120fb40f5693f9e10ececaa304b7413409833ecb09bc82b2ac8493f2 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180010780(undefined1 *param_1,ulonglong param_2,ulonglong param_3,undefined *param_4)

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
  
  local_58 = DAT_180022000 ^ (ulonglong)auStack_468;
  if ((((param_1 == (undefined1 *)0x0) && (param_2 != 0)) || (param_3 == 0)) ||
     (param_4 == (undefined *)0x0)) {
    p_Var3 = FUN_18000c2b4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000affc();
  }
  else {
    FUN_180012948();
    FUN_180013cb0((undefined1 (*) [32])local_438,0,0x1f0);
    FUN_180013cb0((undefined1 (*) [32])local_248,0,0x1f0);
    if (1 < param_2) {
      local_448 = 0;
      puVar10 = param_1 + (param_2 - 1) * param_3;
LAB_180010840:
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
LAB_1800109b0:
        puVar4 = puVar7;
        if (puVar6 < puVar4) {
          do {
            puVar6 = puVar6 + param_3;
            if (puVar4 <= puVar6) goto LAB_1800109d0;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        else {
LAB_1800109d0:
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
          goto LAB_1800109b0;
        }
        if (puVar4 < puVar7) {
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= puVar4) goto LAB_180010a57;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        else {
LAB_180010a57:
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= param_1) break;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        if ((longlong)puVar7 - (longlong)param_1 < (longlong)puVar10 - (longlong)puVar6)
        goto LAB_180010aad;
        if (param_1 < puVar7) {
          local_438[local_448] = param_1;
          local_248[local_448] = puVar7;
          local_448 = local_448 + 1;
        }
        param_1 = puVar6;
        if (puVar10 <= puVar6) goto LAB_1800108c3;
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
      goto LAB_1800108c3;
    }
  }
  return;
LAB_180010aad:
  if (puVar6 < puVar10) {
    local_438[local_448] = puVar6;
    local_248[local_448] = puVar10;
    local_448 = local_448 + 1;
  }
  puVar10 = puVar7;
  if (puVar7 <= param_1) {
LAB_1800108c3:
    local_448 = local_448 + -1;
    if (local_448 < 0) {
      return;
    }
    param_1 = (undefined1 *)local_438[local_448];
    puVar10 = (undefined1 *)local_248[local_448];
  }
  goto LAB_180010840;
}


/* Address: 0x180010b20; Evidence: ev_e18dbb6508b7ab0b99500b795340f56bf19cf72100f9e5beb517223e9a0e16ce */

undefined4 FUN_180010b20(char *param_1,longlong param_2,longlong param_3,longlong param_4)

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
      goto LAB_180010b79;
    }
  }
  else if (param_1 == (char *)0x0) goto LAB_180010b79;
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
      p_Var2 = FUN_18000c2b4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000affc();
      return 0x22;
    }
    *param_1 = '\0';
  }
LAB_180010b79:
  p_Var2 = FUN_18000c2b4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000affc();
  return 0x16;
}


/* Address: 0x180010c50; Evidence: ev_d83bb87a4cdd78315c7503d0d17d71a3444e95c17df5de3b3f8000ef2d08b6ad */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

byte * FUN_180010c50(byte *param_1,byte *param_2)

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


/* Address: 0x180010cf0; Evidence: ev_7b5d0eb4603fe449cdb2f8add07996c51458dc3dc58f48c05684d893eb9c0ee7 */

/* WARNING: Removing unreachable block (ram,0x000180010f8c) */
/* WARNING: Removing unreachable block (ram,0x000180010f85) */
/* WARNING: Removing unreachable block (ram,0x000180010f7e) */
/* WARNING: Removing unreachable block (ram,0x000180010f77) */
/* WARNING: Removing unreachable block (ram,0x000180010f70) */
/* WARNING: Removing unreachable block (ram,0x000180010f69) */
/* WARNING: Removing unreachable block (ram,0x000180010f62) */
/* WARNING: Removing unreachable block (ram,0x000180010f5b) */
/* WARNING: Removing unreachable block (ram,0x000180010f54) */
/* WARNING: Removing unreachable block (ram,0x000180010f4d) */
/* WARNING: Removing unreachable block (ram,0x000180010f46) */
/* WARNING: Removing unreachable block (ram,0x000180010f3f) */
/* WARNING: Removing unreachable block (ram,0x000180010f38) */
/* WARNING: Removing unreachable block (ram,0x000180010f31) */
/* WARNING: Removing unreachable block (ram,0x000180010f2a) */
/* WARNING: Removing unreachable block (ram,0x000180010ded) */
/* WARNING: Removing unreachable block (ram,0x000180010dfc) */
/* WARNING: Removing unreachable block (ram,0x000180010e0b) */
/* WARNING: Removing unreachable block (ram,0x000180010e1a) */
/* WARNING: Removing unreachable block (ram,0x000180010e29) */
/* WARNING: Removing unreachable block (ram,0x000180010e35) */
/* WARNING: Removing unreachable block (ram,0x000180010e41) */
/* WARNING: Removing unreachable block (ram,0x000180010e4d) */
/* WARNING: Removing unreachable block (ram,0x000180010e59) */
/* WARNING: Removing unreachable block (ram,0x000180010e65) */
/* WARNING: Removing unreachable block (ram,0x000180010e71) */
/* WARNING: Removing unreachable block (ram,0x000180010e7d) */
/* WARNING: Removing unreachable block (ram,0x000180010e89) */
/* WARNING: Removing unreachable block (ram,0x000180010e95) */
/* WARNING: Removing unreachable block (ram,0x000180010ea1) */

byte * FUN_180010cf0(byte *param_1,byte *param_2)

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
        pbVar19 = FUN_180010c50(param_1,param_2);
        return pbVar19;
      }
      goto LAB_180010f99;
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
    if (uVar21 == 0 || (ulonglong)uVar2 < 0x10 - uVar21) goto LAB_180010f99;
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
LAB_180010f99:
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
  pbVar19 = FUN_180010c50(param_1,param_2);
  return pbVar19;
}


/* Address: 0x1800110a8; Evidence: ev_de254bd6252763f872f5aed88819c87a146f083554d24d36f3e8ff24478fe21a */

void FUN_1800110a8(uchar *param_1,uchar *param_2)

{
  _mbsdec_l(param_1,param_2,(_locale_t)0x0);
  return;
}


/* Address: 0x1800110b0; Evidence: ev_7f98e5e9965653e725adbdf546246f9575ee3a68404b95fa61467f24c1cdd3a8 */

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
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000affc();
  }
  else if (_Start < _Pos) {
    FUN_18000a990(local_28,(longlong *)_Locale);
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


/* Address: 0x180011144; Evidence: ev_58a5710a58c976f8aa015f99290d3bbed21a1387e238612ee658471600ab791d */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180011144(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
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
  local_30 = DAT_180022000 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_18000e5e8(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar9 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_18001144f;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_180011435:
    uVar5 = 0;
    if (pWVar9 != (LPCWSTR)0x0) goto LAB_18001143c;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_180011435;
      *puVar6 = 0xcccc;
LAB_180011250:
      pWVar9 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar9 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180011250;
      }
    }
    if (pWVar9 == (LPCWSTR)0x0) goto LAB_180011435;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
    *(undefined8 *)(puVar12 + -8) = 0x18001127a;
    iVar2 = FUN_18000e5e8(param_8,1);
    if (iVar2 == 0) goto LAB_180011435;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x1800112ad;
    iVar2 = FUN_18000eba8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    puVar6 = (undefined4 *)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_180011435;
    if ((param_3 & 0x400) == 0) {
      uVar8 = uVar5 * 2 + 0x10;
      uVar8 = -(ulonglong)(uVar5 * 2 < uVar8) & uVar8;
      if (uVar8 == 0) goto LAB_180011418;
      if (uVar8 < 0x401) {
        uVar5 = uVar8 + 0xf;
        if (uVar5 <= uVar8) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x180011350;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar7 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xcccc;
          puVar12 = puVar11;
LAB_18001137e:
          puVar6 = puVar7 + 4;
          goto LAB_180011382;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x18001136e;
        puVar7 = _malloc_base(uVar8);
        puVar6 = (undefined4 *)0x0;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xdddd;
          goto LAB_18001137e;
        }
LAB_180011382:
        if (puVar6 != (undefined4 *)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(undefined4 **)(puVar12 + 0x20) = puVar6;
          *(undefined8 *)(puVar12 + -8) = 0x1800113b4;
          iVar4 = FUN_18000eba8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x1800113e2;
              uVar3 = FUN_18000e678(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_180011418;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x1800113fc;
              uVar3 = FUN_18000e678(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18001141d;
            }
            uVar5 = (ulonglong)uVar3;
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180011413;
              FUN_18000cbe0(puVar6 + -4);
            }
            goto LAB_18001143c;
          }
LAB_180011418:
          if (puVar6 != (undefined4 *)0x0) {
LAB_18001141d:
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18001142e;
              FUN_18000cbe0(puVar6 + -4);
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
        *(undefined8 *)(puVar12 + -8) = 0x180011305;
        uVar3 = FUN_18000eba8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_18001143c;
      }
      goto LAB_180011435;
    }
LAB_18001143c:
    if (*(int *)(pWVar9 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x18001144d;
      FUN_18000cbe0(pWVar9 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_18001144f:
  *(undefined8 *)(puVar13 + -8) = 0x18001145b;
  return uVar5;
}


/* Address: 0x180011478; Evidence: ev_a18ad9ff96b1b0cb613397c36ae3a3307e40a504da97c6d8943d5017190df9f4 */

/* Library Function - Single Match
    __acrt_LCMapStringA
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_LCMapStringA(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                        undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong local_28;
  longlong local_20 [2];
  char local_10;
  
  FUN_18000a990(&local_28,param_1);
  FUN_180011144(local_20,param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return;
}


/* Address: 0x180011510; Evidence: ev_89b601e67982e3f2aa50662264540f2673f54a73550fa011754e0d5e529f9e28 */

uint FUN_180011510(void)

{
  undefined8 uVar1;
  
  uVar1 = __acrt_initialize_multibyte();
  return (uint)uVar1 & 0xff ^ 1;
}


/* Address: 0x180011530; Evidence: ev_ee1ae0c1bf0abd1dc0eed015362704f2efc3a808c2b374cb076f28743cbb4a0a */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000affc();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x000180011562. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_1800237e8,0,param_1);
  return uVar2;
}


/* Address: 0x180011580; Evidence: ev_b8a9a1685d4d704b2b5deaae5274882d751fb7098dc0e3930fe68ecb6e2f1a49 */

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
      FUN_18000cbe0(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_1800237e8,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_180010740();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_18000b070(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      p_Var4 = FUN_18000c2b4();
      *(undefined4 *)p_Var4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x1800115fc; Evidence: ev_2d59a93d5ffd627f5afb726e076007af50973ae1819af53cd39da5fd4c32e14f */

undefined4 FUN_1800115fc(ushort *param_1)

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
      iVar3 = FUN_1800128e0(param_1,(ushort *)(&PTR_DAT_18001a810)[(longlong)iVar2 * 2],0x55);
      if (iVar3 == 0) {
        iVar5 = *(int *)(&DAT_18001a818 + (longlong)iVar2 * 0x10);
        if (iVar5 < 0) {
          return 0;
        }
        if (0xe3 < (ulonglong)(longlong)iVar5) {
          return 0;
        }
        return *(undefined4 *)(&DAT_180018db0 + (longlong)iVar5 * 0x10);
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


/* Address: 0x1800116a4; Evidence: ev_5b5a4b123b59338342e554c91d20114da4c84d86cb55877fb29028b364e4d73e */

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
  FUN_18000cbe0((LPVOID)0x0);
  return puVar5;
}


/* Address: 0x18001174c; Evidence: ev_5ed2cf75af9f1814370a927fa11676dff57e747ea6e69250b02dd11b6e665d89 */

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
    FUN_18000cbe0(param_1);
  }
  return;
}


/* Address: 0x18001179c; Evidence: ev_789eb212c786f2904a493c353499cf278bdbf38fe0e13db537a1c69be478b6cb */

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
    iVar1 = DAT_180023bf0;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_1800237f0)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_1800237f0)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180023bf0 + 0x40;
        DAT_180023bf0 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_18000c2b4();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000affc();
    lVar3 = 9;
  }
  return lVar3;
}


/* Address: 0x180011844; Evidence: ev_8bcb92a81bb074fe465c91bcfebffddefd7c2ad12d3043bc6463533fe7e960ef */

void FUN_180011844(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180011864. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x18001186c; Evidence: ev_f12faddfc51521f0588143057b33099e830b5c469db8e0683f7c9ac2a7b7b545 */

void FUN_18001186c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001188c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x180011894; Evidence: ev_faf0fe47b1ac6f3b5ab30cb7246f968acfa627dd9f386ad03392275da2b72e0c */

undefined8 FUN_180011894(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_180023bf0)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_180012978();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_180011914;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_180011914:
      *(undefined8 *)
       ((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  p_Var3 = FUN_18000c2b4();
  *(undefined4 *)p_Var3 = 9;
  p_Var3 = FUN_18000c290();
  *(undefined4 *)p_Var3 = 0;
  return 0xffffffff;
}


/* Address: 0x180011950; Evidence: ev_a30cd75a9f79504fdbaadf293f24884622f78f65c7c9f6515582f880c63479d6 */

undefined8 FUN_180011950(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000c290();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180023bf0)) {
      if ((*(byte *)((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000c290();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000affc();
  }
  return 0xffffffffffffffff;
}


/* Address: 0x1800119c8; Evidence: ev_bb68fffdcdb79c16882f265e8d5b9837fdf8c3b6175c0d30004d01d53dc9b05a */

undefined8 FUN_1800119c8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_180011844(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_1800237f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_180011950(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_180011a3f;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000c290();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_18000c2b4();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_180011a3f:
  FUN_18001186c(*param_4);
  return uVar5;
}


/* Address: 0x180011a54; Evidence: ev_8eea7f387f0cb75f7c58848aa4f486e5f4216a4256921b449140b018eb953197 */

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
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_180023bf0)) &&
       ((*(byte *)((&DAT_1800237f0)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_1800119c8(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000affc();
  }
  return -1;
}


/* Address: 0x180011ae8; Evidence: ev_72ebc1b33a4fac471b0c852454eaa7bca194c30cfebf88b170ed4348ebfcce21 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011ae8(DWORD *param_1,uint param_2,undefined1 (*param_3) [32],ulonglong param_4,
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
  local_40 = DAT_180022000 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar17 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_1800237f0)[lVar17] + 0x28 + uVar6 * 0x48);
  local_b8 = (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff));
  local_98 = param_3;
  local_90 = lVar17;
  local_a0 = GetConsoleOutputCP();
  uVar14 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_18000c0c0(local_b0);
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
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_1800237f0)[local_68]);
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
          cVar1 = (&DAT_180022900)[(byte)(*param_3)[0]];
          iVar3 = cVar1 + 1;
          lVar17 = (longlong)local_b8 - (longlong)param_3;
          if (lVar17 < iVar3) {
            uVar16 = uVar14;
            if (0 < lVar17) {
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_1800237f0)[local_90]) =
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
          pbVar7 = FUN_18000fd0c(local_c4,&local_78,(ulonglong)uVar10,local_a8,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + cVar1);
          lVar17 = local_90;
        }
        else {
          cVar1 = (&DAT_180022900)[*(byte *)((&DAT_1800237f0)[lVar17] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar15 = (longlong)local_b8 - (longlong)param_3;
          uVar16 = (ulonglong)iVar3;
          if (lVar15 < (longlong)uVar16) {
            if (0 < lVar15) {
              uVar16 = uVar18;
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_1800237f0)[lVar17]) =
                     *(undefined1 *)((longlong)param_3 + (uVar16 - uVar18));
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar15);
            }
            param_1[1] = param_1[1] + (int)lVar15;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_1800237f0)[local_68]);
          uVar9 = uVar14;
          do {
            local_58[uVar9] = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          uVar9 = uVar14;
          if (0 < (longlong)uVar16) {
            FUN_180014070((undefined1 (*) [32])(local_58 + uVar18),param_3,uVar16);
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_1800237f0)[lVar17]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_18000fd0c(local_c4,&local_80,(ulonglong)uVar10,local_88,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + (int)(local_a8[0] - 1));
        }
      }
      else {
        lVar15 = (&DAT_1800237f0)[lVar17];
        bVar2 = *(byte *)(lVar15 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)(byte)(*param_3)[0] * 2) < 0) {
            pauVar13 = (undefined1 (*) [32])(*param_3 + 1);
            if (local_b8 <= pauVar13) {
              *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48) = (*param_3)[0];
              pbVar7 = (byte *)((&DAT_1800237f0)[lVar17] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar16 + 1;
              return param_1;
            }
            iVar3 = FUN_18000f954(local_c4,(byte *)param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_180011df0;
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
        iVar3 = FUN_18000f954(local_c4,(byte *)pauVar13,uVar16,local_b0);
        pauVar13 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_180011df0:
      param_3 = (undefined1 (*) [32])(*pauVar13 + 1);
      uVar10 = FUN_18000e678(local_a0,0,local_c4,uVar10);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_180011f49:
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
        if (BVar4 == 0) goto LAB_180011f49;
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


/* Address: 0x180011f7c; Evidence: ev_f6e1bb7a564c630778865b5a762b6a1cc1b283a6e5d1ec0a4057e02d0ba7f196 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011f7c(DWORD *param_1,uint param_2,char *param_3,ulonglong param_4)

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
  
  local_20 = 0x180011f94;
  local_28 = DAT_180022000 ^ (ulonglong)auStackY_1468;
  pcVar5 = param_3 + (param_4 & 0xffffffff);
  hFile = *(HANDLE *)
           ((&DAT_1800237f0)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x180012084; Evidence: ev_c1efdf45c68acd68328f2b2b273deadb26dbb73e334714b744ad0b0a452bc52b */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180012084(DWORD *param_1,uint param_2,short *param_3,ulonglong param_4)

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
  
  local_20 = 0x18001209c;
  local_28 = DAT_180022000 ^ (ulonglong)auStackY_1468;
  psVar5 = (short *)((param_4 & 0xffffffff) + (longlong)param_3);
  hFile = *(HANDLE *)
           ((&DAT_1800237f0)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x1800121a0; Evidence: ev_884e9262ca76f5cee89bdc5afa1534ff5271d7c667c1aca58d3ea31611481e78 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_1800121a0(DWORD *param_1,uint param_2,short *param_3,uint param_4)

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
  
  local_30 = 0x1800121bc;
  local_38 = DAT_180022000 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_1800237f0)[(longlong)(int)param_2 >> 6] + 0x28 +
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
    uVar2 = FUN_18000e678(0xfde9,0,local_1448,(int)((longlong)psVar8 - (longlong)local_1448 >> 1));
    if (uVar2 == 0) {
LAB_1800122dd:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_1800122dd;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)psVar7 - (int)param_3;
  } while( true );
}


/* Address: 0x180012314; Evidence: ev_7ef8ecaf354c1f866634c088610cd2d75947aa1608e02eb0093883aece1e92e9 */

int FUN_180012314(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
    if (((int)param_1 < 0) || (DAT_180023bf0 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_180011844(param_1);
        iVar2 = -1;
        if ((*(byte *)((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          iVar2 = FUN_180012434(param_1,param_2,param_3,param_4);
        }
        FUN_18001186c(param_1);
        return iVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_18000af44((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x180012434; Evidence: ev_7d92e45cb7ecd0bda2fcb292d338bb6518e3224a5be3689a9e1117aea660ed36 */

int FUN_180012434(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
LAB_180012464:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_18000af44((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar10 = (ulonglong)(param_1 & 0x3f);
  lVar13 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_1800237f0)[lVar13] + 0x39 + uVar10 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_180012464;
  if ((*(byte *)((&DAT_1800237f0)[lVar13] + 0x38 + uVar10 * 0x48) & 0x20) != 0) {
    thunk_FUN_180012980(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar4 = FUN_18001285c(param_1);
  if (((int)CONCAT71(extraout_var,bVar4) == 0) ||
     (-1 < *(char *)((&DAT_1800237f0)[lVar13] + 0x38 + uVar10 * 0x48))) {
LAB_18001261c:
    if (-1 < *(char *)((&DAT_1800237f0)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar7 = WriteFile(*(HANDLE *)
                         ((&DAT_1800237f0)[lVar13] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar12 = local_68;
      uVar3 = local_70;
      if (BVar7 == 0) {
        DVar12 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar12);
        DVar12 = local_68;
        uVar3 = local_70;
      }
      goto LAB_1800126d1;
    }
    if (cVar1 == '\0') {
      pDVar11 = FUN_180011f7c((DWORD *)&local_70,param_1,(char *)param_2,uVar14);
    }
    else if (cVar1 == '\x01') {
      pDVar11 = FUN_1800121a0((DWORD *)&local_70,param_1,(short *)param_2,param_3);
    }
    else {
      DVar12 = 0;
      uVar3 = local_60;
      if (cVar1 != '\x02') goto LAB_1800126d1;
      pDVar11 = FUN_180012084((DWORD *)&local_70,param_1,(short *)param_2,uVar14);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_18000c0c0(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_1800237f0)[lVar13] + 0x39 + uVar10 * 0x48) == '\0')) goto LAB_18001261c;
    local_50[0] = 0;
    BVar7 = GetConsoleMode(*(HANDLE *)((&DAT_1800237f0)[lVar13] + 0x28 + uVar10 * 0x48),local_50);
    if (BVar7 == 0) goto LAB_18001261c;
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
            sVar5 = FUN_180012a38(sVar6);
            if (sVar5 != sVar6) {
LAB_1800125e4:
              DVar8 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar8);
              uVar3 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar9 + 2,(DWORD)local_70);
            iVar2 = iVar9 + 2;
            if (sVar6 == 10) {
              sVar6 = FUN_180012a38(0xd);
              if (sVar6 != 0xd) goto LAB_1800125e4;
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
      goto LAB_1800126d1;
    }
    pDVar11 = FUN_180011ae8((DWORD *)&local_70,param_1,param_2,uVar14,param_4);
  }
  DVar12 = pDVar11[2];
  uVar3 = *(undefined8 *)pDVar11;
LAB_1800126d1:
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
    FUN_18000c26c((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_1800237f0)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((*param_2)[0] == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}


/* Address: 0x180012764; Evidence: ev_e24acf128c75b8bc0c3055ae13b9d84e369432338c40c7b449ca1a7464ad0b03 */

int FUN_180012764(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_180023c20; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_180023c28 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_180012b9c(*(int **)(DAT_180023c28 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_180023c28 + lVar4 * 8) + 0x30));
      FUN_18000cbe0(*(LPVOID *)(DAT_180023c28 + lVar4 * 8));
      *(undefined8 *)(DAT_180023c28 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}


/* Address: 0x180012818; Evidence: ev_a2abd085cf75ed97b65b4c08e6c24930cb64942a2635259b2dc3980469e3a3cc */

/* Library Function - Single Match
    __acrt_stdio_free_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_free_buffer_nolock(undefined8 *param_1)

{
  if (((*(uint *)((longlong)param_1 + 0x14) >> 0xd & 1) != 0) &&
     ((*(uint *)((longlong)param_1 + 0x14) >> 6 & 1) != 0)) {
    FUN_18000cbe0((LPVOID)param_1[1]);
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) & 0xfffffebf;
    UNLOCK();
    param_1[1] = 0;
    *param_1 = 0;
    *(undefined4 *)(param_1 + 2) = 0;
  }
  return;
}


/* Address: 0x18001285c; Evidence: ev_5c5b18663d8fba47aab68d281203c501898c44fc24e3bae3e132f4f7c220ec95 */

byte FUN_18001285c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180023bf0)) {
      return *(byte *)((&DAT_1800237f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_18000c2b4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000affc();
  }
  return 0;
}


/* Address: 0x1800128bc; Evidence: ev_61994dbfa59285bc80a4cc3baebb67266de45a3dee0b241bb6ba3f56977b9424 */

undefined8 FUN_1800128bc(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  return param_1;
}


/* Address: 0x1800128c4; Evidence: ev_5181b18ad2241f5abbaee9c481a4b4e3f297aa6c4c16c4bfff668506a6c2b6b0 */

undefined8 FUN_1800128c4(undefined8 *param_1,longlong param_2)

{
  *param_1 = 0;
  *(undefined1 *)(param_2 + 0x30) = 1;
  *(undefined4 *)(param_2 + 0x2c) = 0x2a;
  return 0xffffffffffffffff;
}


/* Address: 0x1800128e0; Evidence: ev_9d0a3a640b6c6a17a7a94df927da61ba23a3ec6b3f72697b50dfe21706e42d38 */

int FUN_1800128e0(ushort *param_1,ushort *param_2,longlong param_3)

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


/* Address: 0x180012948; Evidence: ev_fa9514a6af84a5d722789798678795a9194d6ba22dd6e7be6bc2e5e0b8785210 */

void FUN_180012948(void)

{
  _guard_check_icall();
  return;
}


/* Address: 0x180012960; Evidence: ev_a0da00eb4de5b32650f3ca182d2d3a3880b7e9618a094f0b9d95d7747c866160 */

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


/* Address: 0x180012978; Evidence: ev_5b3df30db3be86c9fe93f057ecbc687e459ff7866212eb7a27c190e116840e71 */

undefined4 FUN_180012978(void)

{
  return DAT_180023c5c;
}


/* Address: 0x180012980; Evidence: ev_2a7ff69a1b87778514ac03ce4f52585e956cf75c8dc2e22ac918aca08c320a6a */

longlong FUN_180012980(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER local_18 [2];
  
  hFile = (HANDLE)FUN_180011950(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    local_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,local_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000c26c(DVar3,param_4);
    }
    else if (local_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)local_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x180012a30; Evidence: ev_e3b921d0650d446f6cd55dc5f56d7f046bc06bcaafd199577c9356c569bad286 */

longlong thunk_FUN_180012980(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER aLStack_18 [2];
  
  hFile = (HANDLE)FUN_180011950(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    aLStack_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,aLStack_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000c26c(DVar3,param_4);
    }
    else if (aLStack_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)aLStack_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x180012a38; Evidence: ev_b40933f1043b1a5c14a558fe06d86cd41aa4037973dbc5b71cda3d3b771aa23e */

undefined2 FUN_180012a38(undefined2 param_1)

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


/* Address: 0x180012a78; Evidence: ev_e017d3cb18894b62c16776e62ebda4e7a5fc9022759f72952071d7bb43dd4728 */

ulonglong FUN_180012a78(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000af44((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_18000f93c((longlong)param_1);
      uVar1 = FUN_180012af4(param_1,param_2);
      FUN_18000f948((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_180012f88((undefined8 *)param_1);
  }
  return 0xffffffff;
}


/* Address: 0x180012af4; Evidence: ev_361a25a6e97a05b9323f01cd8b8f38b75516aecf58b6021f9f9cbd6d61718486 */

ulonglong FUN_180012af4(int *param_1,longlong *param_2)

{
  uint uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000af44((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
    uVar2 = 0xffffffff;
  }
  else {
    uVar2 = 0xffffffff;
    if (((uint)param_1[5] >> 0xd & 1) != 0) {
      uVar2 = FUN_18000f658(param_1,param_2);
      uVar2 = uVar2 & 0xffffffff;
      __acrt_stdio_free_buffer_nolock((undefined8 *)param_1);
      uVar1 = FUN_18000fec4((longlong)param_1);
      uVar3 = FUN_180012df4(uVar1,param_2);
      if ((int)uVar3 < 0) {
        uVar2 = 0xffffffff;
      }
      else if (*(LPVOID *)(param_1 + 10) != (LPVOID)0x0) {
        FUN_18000cbe0(*(LPVOID *)(param_1 + 10));
        param_1[10] = 0;
        param_1[0xb] = 0;
      }
    }
    FUN_180012f88((undefined8 *)param_1);
  }
  return uVar2;
}


/* Address: 0x180012b9c; Evidence: ev_63b4a5db8384e14eed6616811e061e1d4096ce24ddae62b548693c7c5b59be15 */

ulonglong FUN_180012b9c(int *param_1)

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
  local_20 = DAT_18002346c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800221f8;
    puStack_28 = PTR_DAT_180022200;
  }
  uVar1 = FUN_180012a78(param_1,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_18000ac10(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_18000ac10(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return uVar1 & 0xffffffff;
}


/* Address: 0x180012c40; Evidence: ev_66ef512088390eaa6ed787faf26916cb49633ccb9c8a6a9ec44f66cc1d912b4f */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180022a00 == (HANDLE)0xfffffffffffffffe) {
    DAT_180022a00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180022a00 != (HANDLE)0xffffffffffffffff;
}


/* Address: 0x180012ca0; Evidence: ev_568db45be00429967fedd158ca34c95ce30801cc1a0f652a78b5b4618208ad0a */

void FUN_180012ca0(void)

{
  if (DAT_180022a00 < (HANDLE)0xfffffffffffffffe) {
    CloseHandle(DAT_180022a00);
  }
  return;
}


/* Address: 0x180012cbc; Evidence: ev_7bfc7bbcf9d66fefa482623be766b53444a4c277331d9163babfbd69aec82ed1 */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180022a00,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180022a00 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180022a00);
      }
      DAT_180022a00 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180022a00,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}


/* Address: 0x180012d7c; Evidence: ev_f6eb5df388f2bf090384897eeb4dcdd2a3203dfbb7ca255658b4b97d11400539 */

ulonglong FUN_180012d7c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_180011844(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_1800237f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_180012eb8(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18001186c(*param_4);
  return uVar3;
}


/* Address: 0x180012df4; Evidence: ev_1b879e3e9c96aabf2e8fbc5d0543d1cbc13852b8e4a46946c4b92023270eb170 */

ulonglong FUN_180012df4(uint param_1,longlong *param_2)

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
    if (((-1 < (int)param_1) && (param_1 < DAT_180023bf0)) &&
       ((*(byte *)((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                  (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0)) {
      local_20 = local_res8;
      local_res20[0] = param_1;
      local_28[0] = param_1;
      local_18 = param_2;
      uVar1 = FUN_180012d7c(local_res18,local_28,&local_20,local_res20);
      return uVar1;
    }
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
    FUN_18000af44((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  return 0xffffffff;
}


/* Address: 0x180012eb8; Evidence: ev_4e995c5b4513aa2b3be3c60d543ec762569f3b3582956b463d642e0ee70464a1 */

undefined8 FUN_180012eb8(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_180011950(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_1800237f0 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_1800237f0 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_180011950(2);
      lVar4 = FUN_180011950(1);
      if (lVar4 == lVar3) goto LAB_180012eda;
    }
    hObject = (HANDLE)FUN_180011950(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_180012f38;
    }
  }
LAB_180012eda:
  DVar2 = 0;
LAB_180012f38:
  FUN_180011894(param_1);
  *(undefined1 *)
   ((&DAT_1800237f0)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000c26c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}


/* Address: 0x180012f88; Evidence: ev_45bd780d3c94e7e708794841c9e8d049cf98613b37943e5a67867e384fc3cc36 */

undefined4 FUN_180012f88(undefined8 *param_1)

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


/* Address: 0x180012fb0; Evidence: ev_00cc364f5d570514246213d686a72a93c9878cef74fd148721ad2aa16c40e702 */

/* WARNING: Removing unreachable block (ram,0x000180013030) */
/* WARNING: Removing unreachable block (ram,0x000180013022) */
/* WARNING: Removing unreachable block (ram,0x000180012fc7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180012fb0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_180023c60 = 0;
  DAT_180023c64 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_180023c60 = 1;
      DAT_180023c64 = 1;
    }
    else {
      _DAT_180023c60 = 0;
    }
  }
  if ((_DAT_180023c60 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180023c64 = 3;
      _DAT_180023c60 = 3;
      return 0;
    }
  }
  return 0;
}


/* Address: 0x180013064; Evidence: ev_a492e9faa567d4b706662691c0b4942477f3c3f6db96086265bdf489d8cc35b2 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x0001800130eb) */
/* WARNING: Removing unreachable block (ram,0x0001800130c8) */

void FUN_180013064(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18001320c();
  if (bVar1) {
    (*DAT_180023c70)(&DAT_180023c80);
  }
  else {
    do {
    } while (DAT_180023c80 != 0);
    LOCK();
    DAT_180023c80 = 1;
    UNLOCK();
  }
  FUN_1800133e0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_1800133e0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18001320c();
  if (bVar1) {
    (*DAT_180023c78)(&DAT_180023c80);
  }
  else {
    DAT_180023c80 = 0;
  }
  return;
}


/* Address: 0x180013150; Evidence: ev_9ac6b233db712cbc56115fcac60fbbc378a48d1833e7998afa0f7b9fc23ba41a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180013173) */
/* WARNING: Removing unreachable block (ram,0x000180013199) */
/* WARNING: Removing unreachable block (ram,0x0001800131a5) */
/* WARNING: Removing unreachable block (ram,0x000180013181) */
/* WARNING: Removing unreachable block (ram,0x0001800131b0) */
/* WARNING: Removing unreachable block (ram,0x0001800131c2) */
/* WARNING: Removing unreachable block (ram,0x0001800131d6) */
/* WARNING: Removing unreachable block (ram,0x0001800131df) */
/* WARNING: Removing unreachable block (ram,0x000180013c30) */
/* WARNING: Removing unreachable block (ram,0x0001800131f9) */

void FUN_180013150(void)

{
  return;
}


/* Address: 0x18001320c; Evidence: ev_2a1d37abedfc8ca5f6947e372b26e15d04d8cc611ff3c671641393b9af0fe424 */

bool FUN_18001320c(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_180023c68 != (HMODULE)0x1) {
    if (DAT_180023c68 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_180023c70 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_180023c78;
    }
    DAT_180023c78 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_180023c68 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_180023c68;
      pHVar1 = DAT_180023c68;
    }
    DAT_180023c68 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}


/* Address: 0x1800132ac; Evidence: ev_f318b2fba29c2bb87a364035c8903dd3f93744126937d26845ed1f9fa6e99226 */

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
    *(undefined8 *)(puVar6 + -8) = 0x1800132ec;
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


/* Address: 0x180013344; Evidence: ev_75df908c1be5da680823f725ec4d47c9d574141f323e80eb26fa0923b05954ec */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_180013344(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000210;
  while ((0x26000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x26001))) {
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


/* Address: 0x1800133e0; Evidence: ev_058559bb234a7722884f32f33fc86aa66a83910bddf816c8dd7fc8204f636688 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

void FUN_1800133e0(void *param_1,SIZE_T param_2,DWORD param_3,PDWORD param_4)

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
  lpAddress = (void *)FUN_180013344(&local_28,local_24);
  if (lpAddress == (void *)0x0) {
    *param_4 = 4;
    return;
  }
  if (DAT_180023c90 == 0) {
    DAT_180023c90 = 1;
    puVar6 = auStack_48;
    if ((local_24[0] & IMAGE_SCN_MEM_WRITE) == 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = auStack_40;
    }
    *(undefined8 *)(puVar6 + -8) = 0x18001345a;
    DloadMakePermanentImageCommit(lpAddress,(ulonglong)*(uint *)(puVar6 + 0x20));
  }
  if (param_1 == (void *)0x0) {
    if (param_2 != 0) goto LAB_18001346b;
LAB_18001349b:
    param_2 = (SIZE_T)*(uint *)(puVar6 + 0x20);
  }
  else {
    puVar2 = puVar6;
    if (param_2 == 0) {
LAB_18001346b:
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar5 = puVar6 + 8;
      puVar6 = puVar6 + 8;
      puVar2 = puVar5;
      if (param_1 == (void *)0x0) goto LAB_18001349b;
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
  *(undefined8 *)(puVar6 + -8) = 0x1800134b4;
  BVar3 = VirtualProtect(lpAddress,param_2,param_3,param_4);
  if (BVar3 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
  }
  return;
}


/* Address: 0x1800134d8; Evidence: ev_34b6866f9e53c25b0e39e9810f62388398ede0fed706b21831860ab5a78c6a66 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x0001800134f9) */
/* WARNING: Removing unreachable block (ram,0x00018001351a) */
/* WARNING: Removing unreachable block (ram,0x000180013526) */
/* WARNING: Removing unreachable block (ram,0x000180013529) */
/* WARNING: Removing unreachable block (ram,0x000180013502) */
/* WARNING: Removing unreachable block (ram,0x000180013534) */
/* WARNING: Removing unreachable block (ram,0x00018001353d) */
/* WARNING: Removing unreachable block (ram,0x000180013552) */
/* WARNING: Removing unreachable block (ram,0x000180013571) */
/* WARNING: Removing unreachable block (ram,0x00018001355b) */

void FUN_1800134d8(void)

{
  return;
}


/* Address: 0x180013590; Evidence: ev_9dcf12da4c7d031018732217ee9a4f314a677d006a0f28f3d27833d705d8b5e9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180013704) */
/* WARNING: Removing unreachable block (ram,0x0001800137de) */

HMODULE FUN_180013590(uint *param_1,void *param_2)

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
  
  FUN_180013150();
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
    FUN_1800134d8();
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
          FUN_1800134d8();
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
        FUN_1800134d8();
        RaiseException(0xc06d007f,0,1,(ULONG_PTR *)&local_res8);
        FUN_180013150();
        pHVar3 = local_40;
      }
      local_88 = param_2;
      local_80 = pHVar3;
      FUN_180013064(param_2,8,&local_88);
    }
    local_38 = 0;
    local_48 = hLibModule;
    local_40 = pHVar3;
    FUN_180001000(5,(longlong)local_78);
    FUN_1800134d8();
  }
  return pHVar3;
}


/* Address: 0x18001388c; Evidence: ev_1a8f5b93987d2c8e9ed81142fd9a5ec8fa281b2f29a3dfd109aa163c7ce606a7 */

undefined8 FUN_18001388c(undefined8 param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  FUN_1800138ac(param_2,param_4);
  return 1;
}


/* Address: 0x1800138ac; Evidence: ev_7f76bc40cf007052c5f15f5c925254c189dad4466e7cf61d921e65917609b0fa */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800138ac(undefined8 param_1,longlong param_2)

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


/* Address: 0x180013910; Evidence: ev_9a4c6c9b685c0d03f143b934b39f8c99c71d882178f00a0e12c0efd746526799 */

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


/* Address: 0x180013960; Evidence: ev_60302c0fb36bc9b3efca2749adc90fd1ab91f28a65745b03103f98e27969cb81 */

ulonglong FUN_180013960(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_1800139b0((short *)&IMAGE_DOS_HEADER_180000000);
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


/* Address: 0x1800139b0; Evidence: ev_9a1d2bd9d6a98c3f8f6546d2d1fa092e0efb5a159473e1d84cfd8dd903adc071 */

bool FUN_1800139b0(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}


/* Address: 0x1800139dc; Evidence: ev_e0c17c6c7aa11d5418c20f9d91cc3aa4e60ac06f3e9c8fbf82f75e3d6a465351 */

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
  FUN_1800138ac(param_2,(longlong)param_4);
  if ((puVar2[(ulonglong)uVar1 * 4 + 1] & ((param_1->ExceptionFlags & 0x66) != 0) + 1) != 0) {
    FUN_180006d64(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180013a64; Evidence: ev_1e51a6402d69f823bd9d9fd1b2b956dff20b24ddf06028e866759ed049a6b02b */

void FUN_180013a64(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_1800138ac(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180013b00; Evidence: ev_d7bc026fbf9d1d83cdc933376b02c89d378d66ba79bfda4a8e5dcb58048ee4c3 */

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


/* Address: 0x180013b50; Evidence: ev_e4583781b5f820ab731fba86bcb0f3e2b32cc678deadf143e1ecc20951fd986e */

void FUN_180013b50(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_180006d64(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_180007158();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_180007158();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_18000bfac();
  }
  return;
}


/* Address: 0x180013ba0; Evidence: ev_5cbf9daf4859c486c69c1f86fe8c0a2b1b1df5b9f45f99cbc0c99a566e915e33 */

void FUN_180013ba0(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_1800138ac(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    FUN_180006ab0(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180013c30; Evidence: ev_71a7d4ae41b8b69560eda8ae52850acc235068b31b6fa1a242852dac0ba2018b */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180013c30. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180013c50; Evidence: ev_fe09739ef7ff5297da6f24742b9f899c49532b6dec80c9874e9e80894fd2f1ba */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180013c30. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180013c70; Evidence: ev_cb15213885f7e7b6802415ff4e909d4f9bbf0eb9f6ab00ee0b1df50c569c8009 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180013c30. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180013ca0; Evidence: ev_aec815e868efec2b571e6e876bf4440037066beabb2cd8d77fd21c27554ad424 */

undefined8 FUN_180013ca0(undefined1 *param_1,undefined1 param_2,longlong param_3,undefined8 param_4)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = param_2;
    param_1 = param_1 + 1;
  }
  return param_4;
}


/* Address: 0x180013cb0; Evidence: ev_94c103ab4551d1e96c518928d3b9a6b61c7ee8a554495e245770be7cc0da670d */

undefined1 (*) [32] FUN_180013cb0(undefined1 (*param_1) [32],byte param_2,ulonglong param_3)

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
    if (DAT_180022058 < 3) {
      if ((param_3 <= DAT_180022060) || (((byte)DAT_1800231e0 & 2) == 0)) {
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
    else if (((param_3 <= DAT_180022060) || (DAT_180022068 < param_3)) ||
            (((byte)DAT_1800231e0 & 2) == 0)) {
      auVar12._16_16_ = auVar11;
      auVar12._0_16_ = auVar11;
      lVar10 = ((ulonglong)param_1 & 0x1f) - 0x20;
      pauVar2 = (undefined1 (*) [32])((longlong)param_1 - lVar10);
      uVar5 = param_3 + lVar10;
      if (0x100 < uVar5) {
        if (DAT_180022068 < uVar5) {
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


/* Address: 0x180014060; Evidence: ev_8c907aee89a550815448ca5f79043e4f011093212bf56a96b5fa3b6a79947dfd */

void FUN_180014060(undefined1 *param_1,undefined1 *param_2,longlong param_3)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = *param_2;
    param_2 = param_2 + 1;
    param_1 = param_1 + 1;
  }
  return;
}


/* Address: 0x180014070; Evidence: ev_8aa36b312adc3d22738433eb4b0f94927b572c9358161807c68a033abcb6aa96 */

void FUN_180014070(undefined1 (*param_1) [32],undefined1 (*param_2) [32],ulonglong param_3)

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
  if (DAT_180022058 < 3) {
    if ((param_3 < 0x801) || (((byte)DAT_1800231e0 & 2) == 0)) {
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
code_r0x00018001406b:
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*param_1)[0] = (*param_2)[0];
      param_2 = (undefined1 (*) [32])(*param_2 + 1);
      param_1 = (undefined1 (*) [32])(*param_1 + 1);
    }
    return;
  }
  if (((0x2000 < param_3) && (param_3 < 0x180001)) && (((byte)DAT_1800231e0 & 2) != 0))
  goto code_r0x00018001406b;
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
        goto switchD_1800142f6_caseD_0;
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
switchD_1800142f6_caseD_0:
  *(undefined8 *)*param_1 = uVar10;
  *(undefined8 *)(*param_1 + 8) = uVar11;
  *(undefined8 *)(*param_1 + 0x10) = uVar12;
  *(undefined8 *)(*param_1 + 0x18) = uVar13;
  return;
}


/* Address: 0x180014710; Evidence: ev_cc035d4ac2150198057493f84820eea4420012e366f71fa304ff24317cd2ce5e */

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
    if (((ulonglong)_Str & 7) == 0) goto LAB_180014741;
    uVar1 = *(ulonglong *)_Str;
    _Str = (char *)((longlong)_Str + 1);
  } while ((char)uVar1 != '\0');
LAB_180014788:
  return (size_t)(char *)((longlong)_Str + lVar3 + -1);
LAB_180014741:
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
  goto LAB_180014788;
}


/* Address: 0x1800147d0; Evidence: ev_23aae61e15bdca583f7b8a39fc88ea4fe46717f20aead14a893a58276bb344a2 */

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


/* Address: 0x180014850; Evidence: ev_ba62b010aa260f553be6193bb8f5462da5cc490c49c764389befb1e8bdb72af0 */

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


/* Address: 0x1800148e0; Evidence: ev_347a02dd5ad0a9a4ad1ea669021aac4350c1dff58d7d9df75d966f60b4dfd9e2 */

void FUN_1800148e0(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x30) & 1) != 0) {
    *(uint *)(param_2 + 0x30) = *(uint *)(param_2 + 0x30) & 0xfffffffe;
    thunk_FUN_180002a80(*(longlong **)(param_2 + 0x40));
  }
  return;
}


/* Address: 0x180014920; Evidence: ev_6b424afba5c678180fe55c5060dbfc9d838289dc4759f5b78f814e1678396c62 */

undefined8 FUN_180014920(void)

{
  return 0;
}


/* Address: 0x180014970; Evidence: ev_889181fea8d1a3367da1dbae814e04c0b1b3f6691cc3aede61824030f44cc9e8 */

undefined8 FUN_180014970(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x20));
  return 0;
}


/* Address: 0x1800149ac; Evidence: ev_626cbec608c27d8fb14d8fe3dcc0a785aaa3ff0d7948fefec49e2748a373b9aa */

undefined8 FUN_1800149ac(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x20));
  return 0;
}


/* Address: 0x180014a4c; Evidence: ev_db83205e8be1294d2a94f3947f53beb3b1e8229792784a38bbfe787c85f7eca5 */

undefined8 FUN_180014a4c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x40));
  return 0;
}


/* Address: 0x180014a8c; Evidence: ev_85af5dc882e4d123bf978d52645185637b2bee5ac16b867cb48a92bc57d9d540 */

undefined8 FUN_180014a8c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x48));
  return 0;
}


/* Address: 0x180014adc; Evidence: ev_36dd58489a861a17aa5891741517718abe092b4f645ba36278db2b16cf19fd09 */

void FUN_180014adc(undefined8 param_1,longlong param_2)

{
  thunk_FUN_18000cbe0(*(LPVOID *)(param_2 + 0x20));
  return;
}


/* Address: 0x180014af9; Evidence: ev_26d8abaa6a3969e2027266f86f0cd671494043e3b575b120baffacab2d8f7da3 */

undefined8 FUN_180014af9(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x30));
  return 0;
}


/* Address: 0x180014b3c; Evidence: ev_7abca839e871ebf1a106527796115132503140e4dbfdf05e3f9e90138e6fdd69 */

undefined8 FUN_180014b3c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x20));
  return 0;
}


/* Address: 0x180014b8c; Evidence: ev_c45664d37b07bd3cd961c7bab9c5a37d0211b601b53a2bfe655ed4233a0f87ee */

undefined8 FUN_180014b8c(undefined8 param_1,longlong param_2)

{
  FUN_180001e30(*(longlong *)(param_2 + 0x50));
  return 0;
}


/* Address: 0x180014bb4; Evidence: ev_579996aeb3f0d2dc79758e4d47032ce1ddefd6be63547f9cd0f5f98a76cfceb7 */

void FUN_180014bb4(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x40));
  return;
}


/* Address: 0x180014bcb; Evidence: ev_3c2abcde9597f49399b1ddeb4582b113503790d7f3dec163612732a29ed53c54 */

void FUN_180014bcb(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x20));
  return;
}


/* Address: 0x180014be4; Evidence: ev_1d7baa83bfe3eb3143f9ac79d9dc00745424321e59548608a700e8d4edf260e9 */

void FUN_180014be4(void)

{
  FUN_180005734();
  return;
}


/* Address: 0x180014bf8; Evidence: ev_723882b5511b1b28cc41a5d119ea8b9f62a252a47fbd90bd81f0fe922e969e26 */

void FUN_180014bf8(undefined8 *param_1,longlong param_2)

{
  __scrt_dllmain_exception_filter
            (*(undefined8 *)(param_2 + 0x60),*(int *)(param_2 + 0x68),
             *(undefined8 *)(param_2 + 0x70),FUN_180004fb0,*(int *)*param_1,param_1);
  return;
}


/* Address: 0x180014c2e; Evidence: ev_b8df921261c41cbc4fb2745ddc136f7ddb4a0049ed833d07cf31adb546e4c34a */

bool FUN_180014c2e(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x180014c46; Evidence: ev_55bd18d4cb1dcac8f643b3aa16a7c8a08d0773b464b55374d46eb4beab32b7e6 */

undefined4 FUN_180014c46(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_180008df0((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x180014ced; Evidence: ev_a67a576ac6aac63d8398832fdca065dee87a157aa092859a74d31b55ebe9d53c */

undefined4 FUN_180014ced(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  lVar3 = FUN_180007158();
  *(undefined4 *)(lVar3 + 0x78) = *(undefined4 *)(param_2 + 0xa8);
  FUN_1800092dc((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(FuncInfo4 **)(param_2 + 0x90),0,0,1);
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x180014da2; Evidence: ev_441433d659251649cd90d129724a3003f19beb01b4fa921ad7f741d10beb9ed5 */

undefined4 FUN_180014da2(undefined8 param_1,longlong param_2)

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
    lVar2 = FUN_180007158();
    *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x28);
    uVar1 = *(undefined8 *)(*(longlong *)(param_2 + 0x30) + 8);
    lVar2 = FUN_180007158();
    *(undefined8 *)(lVar2 + 0x28) = uVar1;
                    /* WARNING: Subroutine does not return */
    FUN_18000bfac();
  }
  *(undefined4 *)(param_2 + 0x20) = 0;
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x180014e34; Evidence: ev_897e7525fc6c7a9d2dd8481d831443abcebe2129324e118ec5765adfde193f9f */

void FUN_180014e34(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  *(undefined4 *)(lVar1 + 0x78) = 0xfffffffe;
  return;
}


/* Address: 0x180014e50; Evidence: ev_3d7af9a17b0952d90f485764397e5241a7a45e95a63812d43110ed9bec29f048 */

void FUN_180014e50(undefined8 *param_1,longlong param_2)

{
  FUN_180009aac(param_1,*(longlong *)(param_2 + 0xb8),(undefined4 *)(param_2 + 0x20));
  return;
}


/* Address: 0x180014e71; Evidence: ev_90d8afee292b9b342224b97c2d0fb3a93d53f8f9b430b6ded99d2dec2ea4d37d */

void FUN_180014e71(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_18000697c(*(longlong *)(param_2 + 0x38));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xb8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_180006c20(piVar1);
    }
  }
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0xc0);
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x40);
  return;
}


/* Address: 0x180014ef7; Evidence: ev_033d46bb008d5da990f08e341e280fd01faa8b095f2a560cb5e6b64351c3efe5 */

void FUN_180014ef7(_EXCEPTION_POINTERS *param_1,longlong param_2)

{
  ExFilterRethrowFH4(param_1,*(EHExceptionRecord **)(param_2 + 0xd8),*(int *)(param_2 + 200),
                     (int *)(param_2 + 0x20));
  return;
}


/* Address: 0x180014f1f; Evidence: ev_040d8bed8e5f38e88f8a6f1270164a178e75c03167abcc2e9d9b0697867d83f7 */

void FUN_180014f1f(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_18000697c(*(longlong *)(param_2 + 0x40));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xd8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_180006c20(piVar1);
    }
  }
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x30);
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x48);
  lVar2 = FUN_180007158();
  *(undefined4 *)(lVar2 + 0x78) = *(undefined4 *)(param_2 + 0xc0);
  return;
}


/* Address: 0x180014fb0; Evidence: ev_00c52934d625976adbee2a17ea67c7a5fbedc65d90ad3ff2867c7152337f2a2a */

void FUN_180014fb0(undefined8 *param_1)

{
  FUN_180006cf0(param_1);
  return;
}


/* Address: 0x180014fc6; Evidence: ev_6b5dc31a5cd23c079fba4f1e971e3873cba503bea953cd6e9f1abd4cc21e52ca */

void FUN_180014fc6(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180007158();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180014fe9; Evidence: ev_64dd5d304543809cf494b95adc8d2807a01fe248995f334eda6adb86e3c4345e */

void FUN_180014fe9(undefined8 *param_1)

{
  FUN_180006cf0(param_1);
  return;
}


/* Address: 0x180014fff; Evidence: ev_fd84a318c827c5d4c971259c579c8ce5788a748c79315e97f4efc39f470a4e6f */

void FUN_180014fff(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180007158();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180015030; Evidence: ev_858a46685997a8bb4851d76191c9e1e51b9a1ae06a54a56fc8ca4472884321af */

void FUN_180015030(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x180015046; Evidence: ev_3584dc177fd140ad7b147aeeed91af11c41486c9f49288c445bc676ff495fd4a */

void FUN_180015046(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x18001505c; Evidence: ev_ab33fcc2892af6e5b064ede5fea37f003b9a98a25cfc5d9577027aa69fef6bb4 */

void FUN_18001505c(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x48));
  return;
}


/* Address: 0x180015076; Evidence: ev_bd3cb78a40e436d196c614a016ae67ae90575f4d14aef615acd1b6d4d1c824ce */

undefined4 FUN_180015076(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x1800150a3; Evidence: ev_89bb8465e9ae2b45342ecd0c21f9897b55698841dbcbdabfe2650c5f0cb19aa5 */

void FUN_1800150a3(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x58));
  return;
}


/* Address: 0x1800150bd; Evidence: ev_7f226827295d0c06fb75e022816760175d8a10949d7513838b1137a1c9cdb921 */

void FUN_1800150bd(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x68));
  return;
}


/* Address: 0x1800150d7; Evidence: ev_db9663dcfbc6c4d293d24f3e8080020611e235af3dd32b3bcf31866c5f842d8f */

void FUN_1800150d7(void)

{
  __acrt_unlock(5);
  return;
}


/* Address: 0x1800150f0; Evidence: ev_20bad66f62d924b51a6cd8581dee4889562dad8efef1f76cd5ffb9dea1b28cd3 */

void FUN_1800150f0(void)

{
  __acrt_unlock(7);
  return;
}


/* Address: 0x180015109; Evidence: ev_6cd7553e37f5583d4d50fde515eb1fe4eb79908acf7983b19149d653036465b0 */

void FUN_180015109(undefined8 param_1,longlong param_2)

{
  if (*(char *)(param_2 + 0x70) != '\0') {
    __acrt_unlock(3);
  }
  return;
}


/* Address: 0x18001512a; Evidence: ev_964171b7ea7cc47faf03404c8f53c07f4c54ad25499efd132d5031b17fa3966b */

void FUN_18001512a(undefined8 param_1,longlong param_2)

{
  FUN_18000f948(**(longlong **)(param_2 + 0x48));
  return;
}


/* Address: 0x180015145; Evidence: ev_41cc58f26be730d76eed737179d89b6bcea49811c906cef5cb61a6eb38e6900c */

void FUN_180015145(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x98));
  return;
}


/* Address: 0x180015162; Evidence: ev_fe95142e573191c137704d90bd0bde0d0e1659a5889c025fded20210bb80881f */

void FUN_180015162(void)

{
  __acrt_unlock(4);
  return;
}


/* Address: 0x18001517b; Evidence: ev_cd39831469b456eb4d94f0189e69a0513b5ba0ee38db0d77d9b65a15bd6f44a5 */

void FUN_18001517b(undefined8 param_1,longlong param_2)

{
  FUN_18001186c(**(uint **)(param_2 + 0x48));
  return;
}


/* Address: 0x180015195; Evidence: ev_40f372711a7d0cbee16577798232a5328092dda718a2c826e12ee28d7e701700 */

void FUN_180015195(undefined8 param_1,longlong param_2)

{
  FUN_18001186c(*(uint *)(param_2 + 0x60));
  return;
}


/* Address: 0x1800151ac; Evidence: ev_a490cfa4ee2faf5a58ee58a1a4c4db672af2477f723dae4354e1dd83cb8b6dcc */

void FUN_1800151ac(void)

{
  __acrt_unlock(8);
  return;
}


/* Address: 0x1800151c5; Evidence: ev_a68220f37cb9129f768a32d66fdd99a77b5ff95b7df77f305545ea8abfe75bde */

void FUN_1800151c5(undefined8 param_1,longlong param_2)

{
  FUN_18000f948(*(longlong *)(param_2 + 0x40));
  return;
}


/* Address: 0x1800151e0; Evidence: ev_fffd54606b80db896d3352374dbf1a9dd98fbe39d690dc7c0cc639fa011dd74c */

bool FUN_1800151e0(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}

