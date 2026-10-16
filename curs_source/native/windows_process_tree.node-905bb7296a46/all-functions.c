/* REA / Ghidra decompiler-generated pseudocode. Not original source; not compilable. */

/* Address: 0x180001000; Evidence: ev_43db328071e05ea1c4ba26c69521b31b6b5b36d0d7b74b2ee2015c48b9f2d134 */

HMODULE FUN_180001000(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_18000be70(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
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


/* Address: 0x180001050; Evidence: ev_d802cf91143f4f15fda762ce5f254818aa12f5455f159bd05b7f31b6cb8ed377 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180007f48((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}


/* Address: 0x180001090; Evidence: ev_3f676cb07ec6a008690a8dab5841d8b697172d1c15ed2eaee6efbd7292d75026 */

char * FUN_180001090(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x1800010b0; Evidence: ev_d0c2637a36351d96cabdf6c86d4f2c3a5e93b134fa031553d7fe43646513aeed */

undefined8 * FUN_1800010b0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180007fc8(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}


/* Address: 0x180001120; Evidence: ev_0ade013bbb4d3abd2ca78dbaf2bbcd8f2dcb7b76a0cb2e39a1e91e024ad2c72f */

undefined8 * FUN_180001120(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x180001150; Evidence: ev_a3448dc8834304cc30a7a52f4c6744a32575818ab14bee7c0c4c78e7f57bfa12 */

void FUN_180001150(void)

{
  longlong local_28 [5];
  
  FUN_180001120(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_28,&DAT_180021d98);
}


/* Address: 0x180001170; Evidence: ev_fbdd73038964967038a948022a31e07f7dbcd8a67ecef17747461e8d28e45fe1 */

undefined8 * FUN_180001170(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180007f48((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x1800011b0; Evidence: ev_484d68068dcb64f9f744f1a2077b1164e21ec47aee9cb4e6f96e17759ee8e333 */

undefined8 * FUN_1800011b0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180007f48((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x1800011f0; Evidence: ev_08fc060e3cee53590afab81888ffac827ae5dbd7fe3ae07bde9487ace9e6eb13 */

void FUN_1800011f0(void)

{
  code *pcVar1;
  
  FUN_180007210(0x18001edc8);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001210; Evidence: ev_d7d43668cf77a1b2835ec773693310a5efcba74131407e1b818efbf07a2c59a2 */

undefined8 FUN_180001210(undefined8 *param_1)

{
  return *param_1;
}


/* Address: 0x180001220; Evidence: ev_71d9eaf944c17e966879f448ba6e711144d56f6754dde2e719cc81224ab26e0c */

void FUN_180001220(undefined8 *param_1)

{
  FUN_180002f40(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180007fc8(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}


/* Address: 0x180001270; Evidence: ev_2105743ce155d5ee73362e521ce78a3035634f08f724213e4d34f926c771805a */

void FUN_180001270(undefined8 *param_1)

{
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}


/* Address: 0x1800012a0; Evidence: ev_bff411291f225fb96f1d514ba92eaecfd4fb875880f226d131d3d33ed4ed8ccf */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined4 FUN_1800012a0(undefined8 *param_1)

{
  int iVar1;
  undefined1 auStack_98 [32];
  undefined4 local_78 [4];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_98;
  if (param_1[1] == 0) {
    local_78[0] = 0;
  }
  else {
    iVar1 = napi_typeof(*param_1,param_1[1],local_78);
    if (iVar1 != 0) {
      FUN_1800014a0(local_68,*param_1);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  return local_78[0];
}


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


/* Address: 0x1800014a0; Evidence: ev_a321c5b86a70fdc4dd1f049cc9f2d85c19cbde77877e57f4b7813b6fd8f62390 */

undefined8 * FUN_1800014a0(undefined8 *param_1,undefined8 param_2)

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
    FUN_180001740("Error::New","napi_get_last_error_info");
  }
  local_a8 = (char *)*local_98[0];
  lStack_a0 = local_98[0][1];
  local_38 = local_98[0][2];
  iVar1 = napi_is_exception_pending(param_2,local_res18);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Error::New","napi_is_exception_pending");
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
      FUN_180001740("Error::New","napi_create_string_utf8");
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
      FUN_180001740("Error::New","napi_create_error");
    }
  }
  else {
    iVar1 = napi_get_and_clear_last_exception(param_2,&local_res20);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("Error::New","napi_get_and_clear_last_exception");
    }
  }
  lVar3 = local_res20;
  param_1[3] = param_2;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001f190;
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
      FUN_180001740("Error::Error","napi_create_object");
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
      FUN_180001740("Error::Error","napi_define_properties");
    }
    iVar1 = napi_create_reference(param_2,local_a8,1,param_1 + 4);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("Error::Error","napi_create_reference");
    }
  }
  return param_1;
}


/* Address: 0x180001740; Evidence: ev_16b80ebb08491dcf81fa1167752b50be003755d8eb47178ee85ce932fb354997 */

void FUN_180001740(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  
  napi_fatal_error(param_1,0xffffffffffffffff,param_2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001760; Evidence: ev_e97406e162842aac824c4339dafd3fdf7c92acdbd27caa86926154203da76212 */

undefined8 * FUN_180001760(undefined8 *param_1,uint param_2)

{
  FUN_180002f40(param_1 + 6);
  *param_1 = std::exception::vftable;
  FUN_180007fc8(param_1 + 1);
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}


/* Address: 0x1800017d0; Evidence: ev_c919b29fb8666b3b9adf2a30942b6a9c2601f1ec26a95b365d3971c59d1c0a66 */

undefined8 * FUN_1800017d0(undefined8 *param_1,undefined8 param_2,longlong param_3)

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
  *param_1 = &PTR_FUN_18001f190;
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
        FUN_180001740("Error::Error","napi_create_object");
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
        FUN_180001740("Error::Error","napi_define_properties");
      }
      iVar1 = napi_create_reference(param_2,local_res8,1,param_1 + 4);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001740("Error::Error","napi_create_reference");
      }
    }
  }
  return param_1;
}


/* Address: 0x180001930; Evidence: ev_29d34faf12ea619d7feb3bc141f8a44c44429e7390564d359727814f8acc7d6c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001930(longlong param_1,undefined8 *param_2)

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
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_c8;
  if (*(longlong *)(param_1 + 0x20) == 0) {
    *param_2 = *(undefined8 *)(param_1 + 0x18);
    param_2[1] = 0;
    return param_2;
  }
  iVar2 = napi_get_reference_value
                    (*(undefined8 *)(param_1 + 0x18),*(longlong *)(param_1 + 0x20),&local_a0);
  if (iVar2 != 0) {
    FUN_1800014a0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  iVar2 = napi_typeof(*(undefined8 *)(param_1 + 0x18),local_a0,local_98);
  if (iVar2 != 0) {
    FUN_1800014a0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  if (local_98[0] != 5) {
    uVar1 = *(undefined8 *)(param_1 + 0x18);
    local_a8[0] = '\0';
    iVar2 = napi_create_string_utf8
                      (uVar1,"4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal",0x2d,&local_90);
    if (iVar2 != 0) {
      FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_78,&DAT_180021cb0);
    }
    napi_has_property(*(undefined8 *)(param_1 + 0x18),local_a0,local_90,local_a8);
    if (local_a8[0] != '\0') {
      uVar1 = *(undefined8 *)(param_1 + 0x18);
      iVar2 = napi_create_string_utf8
                        (uVar1,"4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal",0x2d,&local_90);
      if (iVar2 != 0) {
        FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_78,&DAT_180021cb0);
      }
      iVar2 = napi_get_property(*(undefined8 *)(param_1 + 0x18),local_a0,local_90,local_88);
      if (iVar2 != 0) {
        FUN_1800014a0(local_78,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_78,&DAT_180021cb0);
      }
      *param_2 = *(undefined8 *)(param_1 + 0x18);
      goto LAB_180001a4c;
    }
  }
  *param_2 = *(undefined8 *)(param_1 + 0x18);
  local_88[0] = local_a0;
LAB_180001a4c:
  param_2[1] = local_88[0];
  return param_2;
}


/* Address: 0x180001b10; Evidence: ev_ce1175ee9605f894763bdefdccf838f260286e35e5d5e6a206839c59ea228b41 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001b10(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_a8;
  local_80 = *(undefined8 *)(param_2 + 0x18);
  param_1[3] = local_80;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  local_88 = param_1;
  iVar1 = napi_open_handle_scope(local_80,local_78);
  if (iVar1 != 0) {
    FUN_1800014a0(local_68,local_80);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  puVar2 = (undefined8 *)0x0;
  if ((*(longlong *)(param_2 + 0x20) != 0) &&
     (iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_2 + 0x18),*(longlong *)(param_2 + 0x20),&local_88),
     puVar2 = local_88, iVar1 != 0)) {
    FUN_1800014a0(local_68,*(undefined8 *)(param_2 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(param_1[3],puVar2,1,param_1 + 4), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_80,local_78[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001f190;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  return param_1;
}


/* Address: 0x180001c80; Evidence: ev_6efd39d1a9d992b835885783eb632c411ef4c89201864e969ea2913b5c6c8e91 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32] FUN_180001c80(longlong param_1)

{
  undefined1 (*pauVar1) [32];
  LPVOID pvVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined1 (*pauVar5) [32];
  LPVOID pvVar6;
  undefined1 auStackY_88 [32];
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40 [2];
  longlong local_30 [4];
  ulonglong local_10;
  
  local_10 = DAT_180023000 ^ (ulonglong)auStackY_88;
  pauVar1 = (undefined1 (*) [32])(param_1 + 0x30);
  if ((*(longlong *)(param_1 + 0x40) == 0) && (*(longlong *)(param_1 + 0x18) != 0)) {
    puVar4 = FUN_1800020d0((longlong *)(param_1 + 0x18),local_40);
    local_50 = *puVar4;
    local_48 = puVar4[1];
    pauVar5 = FUN_180001320(&local_50,(undefined1 (*) [32])local_30);
    if (pauVar1 != pauVar5) {
      if (0xf < *(ulonglong *)(param_1 + 0x48)) {
        pvVar2 = *(LPVOID *)*pauVar1;
        pvVar6 = pvVar2;
        if ((0xfff < *(ulonglong *)(param_1 + 0x48) + 1) &&
           (pvVar6 = *(LPVOID *)((longlong)pvVar2 + -8),
           0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar6)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_18000dfd0(pvVar6);
      }
      *(undefined8 *)(param_1 + 0x40) = 0;
      *(undefined8 *)(param_1 + 0x48) = 0xf;
      (*pauVar1)[0] = 0;
      uVar3 = *(undefined8 *)(*pauVar5 + 8);
      *(undefined8 *)*pauVar1 = *(undefined8 *)*pauVar5;
      *(undefined8 *)(param_1 + 0x38) = uVar3;
      uVar3 = *(undefined8 *)(*pauVar5 + 0x18);
      *(undefined8 *)(param_1 + 0x40) = *(undefined8 *)(*pauVar5 + 0x10);
      *(undefined8 *)(param_1 + 0x48) = uVar3;
      *(undefined8 *)(*pauVar5 + 0x10) = 0;
      *(undefined8 *)(*pauVar5 + 0x18) = 0xf;
      (*pauVar5)[0] = 0;
    }
    FUN_180002f40(local_30);
  }
  return pauVar1;
}


/* Address: 0x180001da0; Evidence: ev_d0e60912ca96710997b18c7b1e3b2090ca4a83f974925873d47650becbaaafe7 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180001da0(longlong param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_a8;
  local_88 = *(undefined8 *)(param_1 + 0x18);
  iVar1 = napi_open_handle_scope(local_88,&local_80);
  if (iVar1 != 0) {
    FUN_1800014a0(local_68,local_88);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  if (*(longlong *)(param_1 + 0x20) != 0) {
    puVar2 = FUN_180001930(param_1,local_78);
    iVar1 = napi_throw(*(undefined8 *)(param_1 + 0x18),puVar2[1]);
    if (iVar1 != 0) {
      FUN_1800014a0(local_68,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  iVar1 = napi_close_handle_scope(local_88,local_80);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x180001e80; Evidence: ev_cfd008b0ae1afd155f271bdb4eea67c6774bbb69373e38c16b20688cae7783d7 */

undefined1 (*) [32] FUN_180001e80(longlong param_1)

{
  undefined1 (*pauVar1) [32];
  
  pauVar1 = FUN_180001c80(param_1);
  if (0xf < *(ulonglong *)(*pauVar1 + 0x18)) {
    pauVar1 = *(undefined1 (**) [32])*pauVar1;
  }
  return pauVar1;
}


/* Address: 0x180001ea0; Evidence: ev_d0dea77732c25ef7ca620dad642eec9180efb5757cf75aff2b9d67339c30cf12 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001ea0(undefined8 *param_1,undefined8 param_2,longlong param_3)

{
  int iVar1;
  longlong lVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88 [3];
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_a8;
  lVar2 = -1;
  do {
    lVar2 = lVar2 + 1;
  } while (*(char *)(param_3 + lVar2) != '\0');
  local_88[0] = param_1;
  iVar1 = napi_create_string_utf8(param_2,param_3,lVar2,&local_70);
  if (iVar1 == 0) {
    iVar1 = napi_create_type_error(param_2,0,local_70,local_88);
    if (iVar1 == 0) {
      FUN_1800017d0(param_1,param_2,(longlong)local_88[0]);
      *param_1 = &PTR_FUN_18001f190;
      return param_1;
    }
    FUN_1800014a0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  FUN_1800014a0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_68,&DAT_180021cb0);
}


/* Address: 0x180001f90; Evidence: ev_188b61766a668530366aae5cba0b39e6dea332732faea0c550714bb84667d7fd */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001f90(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_b8 [32];
  undefined8 *local_98;
  undefined8 local_90;
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_b8;
  local_90 = *param_2;
  *param_1 = local_90;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  local_98 = param_1;
  iVar1 = napi_open_handle_scope(local_90,local_88);
  if (iVar1 != 0) {
    FUN_1800014a0(local_78,local_90);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  puVar2 = (undefined8 *)0x0;
  if ((param_2[1] != 0) &&
     (iVar1 = napi_get_reference_value(*param_2,param_2[1],&local_98), puVar2 = local_98, iVar1 != 0
     )) {
    FUN_1800014a0(local_78,*param_2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(*param_1,puVar2,1,param_1 + 1), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_90,local_88[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  return param_1;
}


/* Address: 0x1800020d0; Evidence: ev_40fe30f096b60b7b08be67dae1086fe27b31366edb46e281ae18da406df0e149 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800020d0(undefined8 *param_1,undefined8 *param_2)

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
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_c8;
  local_98 = *param_1;
  iVar1 = napi_open_escapable_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014a0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  uVar2 = *param_1;
  uVar3 = 0;
  if (param_1[1] != 0) {
    iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_a0);
    uVar2 = *param_1;
    uVar3 = local_a0;
    if (iVar1 != 0) {
      FUN_1800014a0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_78,&DAT_180021cb0);
    }
  }
  iVar1 = napi_get_named_property(uVar2,uVar3,"message",&local_a0);
  if (iVar1 != 0) {
    FUN_1800014a0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
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
        FUN_1800014a0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_78,&DAT_180021cb0);
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
      FUN_1800014a0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_78,&DAT_180021cb0);
    }
    *param_2 = local_98;
    param_2[1] = local_88;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  if (iVar1 == 0) {
    return param_2;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


/* Address: 0x1800022d0; Evidence: ev_5a19cf3bda7be3c4758cf1094b70f3f8f88e1d3692071ae91ca3700752949ac9 */

void FUN_1800022d0(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x180002300; Evidence: ev_43e5042688ab1fec3ebae9028b89b7148f2ba8118592528e0c22f1f647f56c79 */

void FUN_180002300(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_escapable_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


/* Address: 0x180002330; Evidence: ev_f7ed29d17e25743ed890b11527cdf00cb3984ee14c3b289ec08c6a012bedf2c0 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180002330(longlong param_1)

{
  undefined8 *puVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  undefined8 *puVar5;
  undefined1 auStack_c8 [32];
  undefined8 *local_a8 [2];
  undefined8 *local_98;
  undefined8 *puStack_90;
  undefined8 *local_88;
  undefined8 uStack_80;
  undefined8 *local_78;
  undefined8 *puStack_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_c8;
  local_a8[0] = *(undefined8 **)(param_1 + 8);
  if (*(ulonglong *)(param_1 + 0x20) < 2) {
    uVar4 = FUN_180001210(local_a8);
    FUN_180001ea0(local_68,uVar4,0x18001efc0);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021c18);
  }
  uStack_80 = **(undefined8 **)(param_1 + 0x28);
  local_88 = local_a8[0];
  local_78 = local_a8[0];
  puStack_70 = (undefined8 *)uStack_80;
  iVar2 = FUN_1800012a0(&local_78);
  if (iVar2 != 7) {
    uVar4 = FUN_180001210(local_a8);
    FUN_180001ea0(local_68,uVar4,0x18001eff0);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021c18);
  }
  if (*(ulonglong *)(param_1 + 0x20) < 2) {
    puVar3 = *(undefined8 **)(param_1 + 8);
    local_98 = puVar3;
    iVar2 = napi_get_undefined(puVar3,&local_88);
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(&local_98);
      FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
    puStack_90 = local_88;
    local_98 = puVar3;
  }
  else {
    puStack_90 = *(undefined8 **)(*(longlong *)(param_1 + 0x28) + 8);
    local_98 = *(undefined8 **)(param_1 + 8);
  }
  local_78 = local_98;
  puStack_70 = puStack_90;
  iVar2 = FUN_1800012a0(&local_78);
  if (iVar2 != 3) {
    uVar4 = FUN_180001210(local_a8);
    FUN_180001ea0(local_68,uVar4,0x18001f040);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021c18);
  }
  puVar3 = *(undefined8 **)(param_1 + 8);
  if (*(longlong *)(param_1 + 0x20) == 0) {
    local_88 = puVar3;
    iVar2 = napi_get_undefined(puVar3,&local_98);
    puVar5 = local_98;
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(&local_88);
      FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  else {
    puVar5 = (undefined8 *)**(undefined8 **)(param_1 + 0x28);
  }
  puVar1 = *(undefined8 **)(param_1 + 8);
  local_78 = puVar3;
  puStack_70 = puVar5;
  if (*(ulonglong *)(param_1 + 0x20) < 2) {
    local_88 = puVar1;
    iVar2 = napi_get_undefined(puVar1,&local_98);
    puVar3 = local_98;
    if (iVar2 != 0) {
      uVar4 = FUN_180001210(&local_88);
      FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  else {
    puVar3 = *(undefined8 **)(*(longlong *)(param_1 + 0x28) + 8);
  }
  iVar2 = napi_get_value_int32(puVar1,puVar3,local_a8);
  if (iVar2 != 0) {
    FUN_1800014a0(local_68,puVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  puVar3 = (undefined8 *)FUN_1800062f8(0x90);
  local_88 = puVar3;
  FUN_1800037b0(puVar3,&local_78,"windows-process-tree:addon.HandleOKCallback");
  *puVar3 = &PTR_FUN_18001f2b8;
  puVar3[0xe] = 0;
  puVar3[0xf] = 0;
  puVar3[0x10] = 0;
  *(undefined4 *)(puVar3 + 0x11) = 0;
  *(undefined4 *)((longlong)puVar3 + 0x8c) = local_a8[0]._0_4_;
  iVar2 = napi_queue_async_work(puVar3[1],puVar3[2]);
  if (iVar2 != 0) {
    FUN_1800014a0(local_68,puVar3[1]);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  return;
}


/* Address: 0x180002630; Evidence: ev_817a64eabce0ffdee04e05e520241a9282a31fd5c8fe0e31e017aef4a104b28c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002630(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88;
  undefined8 local_80;
  undefined8 local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_a8;
  local_80 = *(undefined8 *)(param_2 + 0x18);
  param_1[3] = local_80;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  local_88 = param_1;
  iVar1 = napi_open_handle_scope(local_80,local_78);
  if (iVar1 != 0) {
    FUN_1800014a0(local_68,local_80);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  puVar2 = (undefined8 *)0x0;
  if ((*(longlong *)(param_2 + 0x20) != 0) &&
     (iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_2 + 0x18),*(longlong *)(param_2 + 0x20),&local_88),
     puVar2 = local_88, iVar1 != 0)) {
    FUN_1800014a0(local_68,*(undefined8 *)(param_2 + 0x18));
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021cb0);
  }
  if ((puVar2 != (undefined8 *)0x0) &&
     (iVar1 = napi_create_reference(param_1[3],puVar2,1,param_1 + 4), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_80,local_78[0]);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  param_1[1] = 0;
  param_1[2] = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  *param_1 = &PTR_FUN_18001f190;
  return param_1;
}


/* Address: 0x1800027b0; Evidence: ev_ece611c9603379db02fb08f48b16a9c76e10eedff200ab70262cc639834ccdd3 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800027b0(longlong param_1)

{
  undefined8 *puVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  undefined1 auStack_c8 [32];
  char local_a8 [16];
  undefined8 *local_98;
  undefined8 *puStack_90;
  undefined8 *local_88;
  undefined8 *puStack_80;
  undefined8 *local_78;
  undefined8 *local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_c8;
  puVar3 = *(undefined8 **)(param_1 + 8);
  local_78 = puVar3;
  if (*(ulonglong *)(param_1 + 0x20) < 2) {
    uVar4 = FUN_180001210(&local_78);
    FUN_180001ea0(local_68,uVar4,0x18001f080);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_68,&DAT_180021c18);
  }
  puStack_80 = (undefined8 *)**(longlong **)(param_1 + 0x28);
  local_88 = puVar3;
  if (puStack_80 != (undefined8 *)0x0) {
    iVar2 = napi_is_array(puVar3,puStack_80,local_a8);
    if (iVar2 != 0) {
      FUN_1800014a0(local_68,puVar3);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
    if (local_a8[0] != '\0') {
      if (*(ulonglong *)(param_1 + 0x20) < 2) {
        puVar3 = *(undefined8 **)(param_1 + 8);
        local_98 = puVar3;
        iVar2 = napi_get_undefined(puVar3,&local_88);
        if (iVar2 != 0) {
          uVar4 = FUN_180001210(&local_98);
          FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_68,&DAT_180021cb0);
        }
        puStack_90 = local_88;
        local_98 = puVar3;
      }
      else {
        puStack_90 = *(undefined8 **)(*(longlong *)(param_1 + 0x28) + 8);
        local_98 = *(undefined8 **)(param_1 + 8);
      }
      local_88 = local_98;
      puStack_80 = puStack_90;
      iVar2 = FUN_1800012a0(&local_88);
      if (iVar2 != 7) {
        uVar4 = FUN_180001210(&local_78);
        FUN_180001ea0(local_68,uVar4,0x18001f100);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_68,&DAT_180021c18);
      }
      puVar3 = *(undefined8 **)(param_1 + 8);
      if (*(longlong *)(param_1 + 0x20) == 0) {
        local_88 = puVar3;
        iVar2 = napi_get_undefined(puVar3,&local_98);
        local_70 = local_98;
        if (iVar2 != 0) {
          uVar4 = FUN_180001210(&local_88);
          FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_68,&DAT_180021cb0);
        }
      }
      else {
        local_70 = (undefined8 *)**(undefined8 **)(param_1 + 0x28);
      }
      puVar1 = *(undefined8 **)(param_1 + 8);
      local_78 = puVar3;
      if (*(ulonglong *)(param_1 + 0x20) < 2) {
        local_88 = puVar1;
        iVar2 = napi_get_undefined(puVar1,&local_98);
        if (iVar2 != 0) {
          uVar4 = FUN_180001210(&local_88);
          FUN_1800014a0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_68,&DAT_180021cb0);
        }
      }
      else {
        local_98 = *(undefined8 **)(*(longlong *)(param_1 + 0x28) + 8);
      }
      puStack_90 = local_98;
      local_98 = puVar1;
      local_88 = (undefined8 *)FUN_1800062f8(0xa8);
      puVar3 = FUN_180004040(local_88,&local_98,&local_78);
      iVar2 = napi_queue_async_work(puVar3[1],puVar3[2]);
      if (iVar2 != 0) {
        FUN_1800014a0(local_68,puVar3[1]);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_68,&DAT_180021cb0);
      }
      return;
    }
  }
  uVar4 = FUN_180001210(&local_78);
  FUN_180001ea0(local_68,uVar4,0x18001f0b0);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_68,&DAT_180021c18);
}


/* Address: 0x180002aa0; Evidence: ev_77749d60eb92ca10c8558cd999f815510d4daa99b1e86bfaf21fdd1968823adc */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002aa0(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined1 auStack_b8 [48];
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_b8;
  puVar3 = FUN_180002c30(local_88,param_2,FUN_180002330);
  uVar1 = *param_3;
  iVar2 = napi_set_named_property(uVar1,param_3[1],"getProcessList",puVar3[1]);
  if (iVar2 != 0) {
    FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  puVar3 = FUN_180002c30(local_88,param_2,FUN_1800027b0);
  iVar2 = napi_set_named_property(uVar1,param_3[1],"getProcessCpuUsage",puVar3[1]);
  if (iVar2 == 0) {
    uVar1 = param_3[1];
    *param_1 = *param_3;
    param_1[1] = uVar1;
    return param_1;
  }
  FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_78,&DAT_180021cb0);
}


/* Address: 0x180002ba0; Evidence: ev_2b4e3787f76ffe28f08e8e08f6b27071d8ceec53a14206bc2dc406617e6bc5e9 */

undefined8 node_api_module_get_api_version_v1(void)

{
                    /* 0x2ba0  2  node_api_module_get_api_version_v1 */
  return 8;
}


/* Address: 0x180002bb0; Evidence: ev_c1f99ba9aeb3d850aba279d62703b76e7902f33804b50bac2bbb269fd2bd09fa */

void napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  code *local_res8;
  undefined8 local_res10;
  undefined8 local_res18 [2];
  code **local_28;
  undefined8 *local_20;
  undefined8 *local_18;
  
                    /* 0x2bb0  1  napi_register_module_v1 */
  local_res8 = FUN_180002aa0;
  local_28 = &local_res8;
  local_20 = &local_res10;
  local_18 = local_res18;
  local_res10 = param_1;
  local_res18[0] = param_2;
  FUN_180002bf0(&local_28);
  return;
}


/* Address: 0x180002bf0; Evidence: ev_52ac8f040394d781915d42f225c43787cade7487c90d2683ca2ffc6400997b94 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180002bf0(undefined8 *param_1)

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


/* Address: 0x180002d30; Evidence: ev_ea1ea0346127bba0a51d561389c66fe95b98ba56e3d5b5270c55e08563ef19f4 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002d30(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  longlong lVar2;
  undefined1 auStack_b8 [32];
  undefined8 local_98;
  undefined8 local_90;
  longlong local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_b8;
  local_98 = *param_2;
  *param_1 = local_98;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  iVar1 = napi_open_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014a0(local_78,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  lVar2 = 0;
  if ((param_2[1] != 0) &&
     (iVar1 = napi_get_reference_value(*param_2,param_2[1],local_88), lVar2 = local_88[0],
     iVar1 != 0)) {
    FUN_1800014a0(local_78,*param_2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  if ((lVar2 != 0) && (iVar1 = napi_create_reference(*param_1,lVar2,1,param_1 + 1), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Reference<T>::Reference","napi_create_reference");
  }
  iVar1 = napi_close_handle_scope(local_98,local_90);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
  }
  return param_1;
}


/* Address: 0x180002e70; Evidence: ev_8f05c18a2260f4f51f5c1e580f5f53005346e891b4a3eca2a0c219a74ff5b147 */

void FUN_180002e70(undefined1 (*param_1) [32],ulonglong param_2)

{
  ulonglong uVar1;
  ulonglong uVar2;
  
  uVar1 = *(ulonglong *)(*param_1 + 0x10);
  if (param_2 <= uVar1) {
    *(ulonglong *)(*param_1 + 0x10) = param_2;
    if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
      param_1 = *(undefined1 (**) [32])*param_1;
    }
    (*param_1)[param_2] = 0;
    return;
  }
  uVar2 = param_2 - uVar1;
  if (uVar2 <= *(ulonglong *)(*param_1 + 0x18) - uVar1) {
    *(ulonglong *)(*param_1 + 0x10) = param_2;
    if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
      param_1 = *(undefined1 (**) [32])*param_1;
    }
    FUN_180015110((undefined1 (*) [32])(*param_1 + uVar1),0,uVar2);
    *(undefined1 *)((longlong)(*param_1 + uVar1) + uVar2) = 0;
    return;
  }
  FUN_180003180(param_1,uVar2,uVar1,uVar2);
  return;
}


/* Address: 0x180002f00; Evidence: ev_6a13df6878befba6aa67b3bfece4aa3ec5c5a7ca13810ea08e03d71ae3c11512 */

void thunk_FUN_180002f40(longlong *param_1)

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
    thunk_FUN_18000dfd0(pvVar2);
  }
  param_1[2] = 0;
  param_1[3] = 0xf;
  *(undefined1 *)param_1 = 0;
  return;
}


/* Address: 0x180002f10; Evidence: ev_375bb4ff24aafdd71c0a6c6a6bcd92524bc679483b252de167f028e273db5b43 */

void FUN_180002f10(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10 [3];
  undefined8 *local_18;
  undefined8 *local_10;
  
  local_18 = &local_res8;
  local_10 = local_res10;
  local_res8 = param_1;
  local_res10[0] = param_2;
  FUN_180002fd0(&local_18);
  return;
}


/* Address: 0x180002f40; Evidence: ev_63ebd0c68a7779b13cee9d866f8fc219cd29a0a880672005ed57289a03fc5b00 */

void FUN_180002f40(longlong *param_1)

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
    thunk_FUN_18000dfd0(pvVar2);
  }
  param_1[2] = 0;
  param_1[3] = 0xf;
  *(undefined1 *)param_1 = 0;
  return;
}


/* Address: 0x180002fc0; Evidence: ev_9b5612c8098ce229bc1d7852804a514ff59c9395a3eba48b4aad749ce59c82db */

void FUN_180002fc0(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000dfd0(param_2);
  return;
}


/* Address: 0x180002fd0; Evidence: ev_9c04e6f6e0977b3839e55f639a7959ec22e4f06c601ed90af5afdfe86d187193 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180002fd0(undefined8 *param_1)

{
  undefined8 uVar1;
  undefined8 uVar2;
  code *pcVar3;
  undefined1 auVar4 [16];
  int iVar5;
  ulonglong uVar6;
  undefined1 auStack_168 [32];
  undefined8 *local_148;
  undefined8 **local_140;
  ulonglong local_138;
  undefined8 local_130;
  undefined8 local_128;
  undefined8 local_120;
  ulonglong local_118;
  undefined1 *local_110;
  undefined1 local_108 [48];
  undefined1 *local_d8;
  undefined8 *apuStack_d0 [3];
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_168;
  uVar1 = *(undefined8 *)param_1[1];
  uVar2 = *(undefined8 *)*param_1;
  local_138 = 6;
  local_120 = 0;
  local_d8 = (undefined1 *)0x0;
  apuStack_d0[0] = (undefined8 *)0x0;
  local_118 = 6;
  local_110 = local_108;
  local_140 = apuStack_d0;
  local_148 = &local_120;
  local_130 = uVar2;
  local_128 = uVar1;
  iVar5 = napi_get_cb_info(uVar2,uVar1,&local_118,local_108);
  if (iVar5 != 0) {
    FUN_1800014a0(local_b8,local_130);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_b8,&DAT_180021cb0);
  }
  if (local_138 < local_118) {
    auVar4._8_8_ = 0;
    auVar4._0_8_ = local_118;
    uVar6 = SUB168(ZEXT816(8) * auVar4,0);
    if (SUB168(ZEXT816(8) * auVar4,8) != 0) {
      uVar6 = 0xffffffffffffffff;
    }
    local_110 = (undefined1 *)thunk_FUN_1800062f8(uVar6);
    local_140 = (undefined8 **)0x0;
    local_148 = (undefined8 *)0x0;
    local_d8 = local_110;
    iVar5 = napi_get_cb_info(uVar2,uVar1,&local_118,local_110);
    if (iVar5 != 0) {
      FUN_1800014a0(local_68,local_130);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
  }
  pcVar3 = (code *)*apuStack_d0[0];
  apuStack_d0[0] = (undefined8 *)apuStack_d0[0][1];
  (*pcVar3)(&local_138);
  if (local_d8 != (undefined1 *)0x0) {
    thunk_FUN_18000dfd0(local_d8);
  }
  return 0;
}


/* Address: 0x180003180; Evidence: ev_4c698ae5ed28a77562e6fa0966b54386486ec15951e5216fd3250560201b3228 */

undefined1 (*) [32]
FUN_180003180(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,ulonglong param_4)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  undefined1 (*pauVar5) [32];
  ulonglong uVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  
  uVar2 = *(ulonglong *)(*param_1 + 0x10);
  if (0x7fffffffffffffff - uVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_1800011f0();
  }
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  uVar6 = uVar2 + param_2 | 0xf;
  uVar7 = 0x7fffffffffffffff;
  if (((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) &&
     (uVar1 = uVar3 + (uVar3 >> 1), uVar7 = uVar6, uVar6 < uVar1)) {
    uVar7 = uVar1;
  }
  pauVar5 = (undefined1 (*) [32])FUN_1800032d0(uVar7 + 1);
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + param_2;
  *(ulonglong *)(*param_1 + 0x18) = uVar7;
  pauVar8 = (undefined1 (*) [32])(*pauVar5 + uVar2);
  if (uVar3 < 0x10) {
    FUN_1800154d0(pauVar5,param_1,uVar2);
    FUN_180015110(pauVar8,0,param_4);
    (*pauVar8)[param_4] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_1800154d0(pauVar5,pauVar4,uVar2);
    FUN_180015110(pauVar8,0,param_4);
    (*pauVar8)[param_4] = 0;
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar5;
  return param_1;
}


/* Address: 0x1800032d0; Evidence: ev_0fb7362f42d4e54be5f85cef8656e42b43336bd307ed309d08eb2efce03d8e4d */

ulonglong FUN_1800032d0(ulonglong param_1)

{
  longlong lVar1;
  ulonglong uVar2;
  
  if (param_1 == 0) {
    return 0;
  }
  if (param_1 < 0x1000) {
    uVar2 = FUN_1800062f8(param_1);
    return uVar2;
  }
  if (param_1 + 0x27 <= param_1) {
                    /* WARNING: Subroutine does not return */
    FUN_180001150();
  }
  lVar1 = FUN_1800062f8(param_1 + 0x27);
  if (lVar1 != 0) {
    uVar2 = lVar1 + 0x27U & 0xffffffffffffffe0;
    *(longlong *)(uVar2 - 8) = lVar1;
    return uVar2;
  }
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}


/* Address: 0x180003350; Evidence: ev_40e02675542277f03fea9d59f85e59edb508b820570cafc6c32ef4e418131484 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180003350(undefined8 *param_1,undefined8 *param_2,longlong *param_3)

{
  int iVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined1 auStack_e8 [32];
  longlong local_c8;
  undefined8 *local_c0;
  char local_b8 [8];
  undefined8 local_b0;
  undefined8 local_a8;
  undefined8 uStack_a0;
  undefined8 local_98;
  undefined8 local_90;
  longlong local_88 [10];
  ulonglong local_38;
  
  local_38 = DAT_180023000 ^ (ulonglong)auStack_e8;
  local_98 = *param_1;
  iVar1 = napi_open_escapable_handle_scope(local_98,&local_90);
  if (iVar1 != 0) {
    FUN_1800014a0(local_88,local_98);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_88,&DAT_180021cb0);
  }
  uVar2 = *param_1;
  if (param_1[1] == 0) {
    uVar3 = 0;
  }
  else {
    iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_a8);
    uVar2 = *param_1;
    uVar3 = local_a8;
    if (iVar1 != 0) {
      FUN_1800014a0(local_88,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_88,&DAT_180021cb0);
    }
  }
  local_a8 = uVar2;
  iVar1 = napi_get_undefined(uVar2,&local_b0);
  local_c0 = &local_a8;
  if (iVar1 != 0) {
    uVar2 = FUN_180001210(local_c0);
    FUN_1800014a0(local_88,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_88,&DAT_180021cb0);
  }
  local_c8 = *param_3;
  iVar1 = napi_call_function(uVar2,local_b0,uVar3,param_3[1] - local_c8 >> 3);
  if (iVar1 != 0) {
    FUN_1800014a0(local_88,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_88,&DAT_180021cb0);
  }
  iVar1 = napi_is_exception_pending(local_98,local_b8);
  if ((iVar1 == 0) && (local_b8[0] != '\0')) {
    uVar2 = *param_1;
    if (param_1[1] == 0) {
      uStack_a0 = 0;
    }
    else {
      iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_b0);
      uVar2 = *param_1;
      if (iVar1 != 0) {
        FUN_1800014a0(local_88,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_88,&DAT_180021cb0);
      }
      uStack_a0 = local_b0;
    }
    local_a8._0_4_ = (undefined4)uVar2;
    local_a8._4_4_ = (undefined4)((ulonglong)uVar2 >> 0x20);
    *(undefined4 *)param_2 = (undefined4)local_a8;
    *(undefined4 *)((longlong)param_2 + 4) = local_a8._4_4_;
    *(undefined4 *)(param_2 + 1) = (undefined4)uStack_a0;
    *(undefined4 *)((longlong)param_2 + 0xc) = uStack_a0._4_4_;
    local_a8 = uVar2;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  else {
    iVar1 = napi_escape_handle(local_98,local_90,local_a8,&local_b0);
    if (iVar1 != 0) {
      FUN_1800014a0(local_88,local_98);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_88,&DAT_180021cb0);
    }
    *param_2 = local_98;
    param_2[1] = local_b0;
    iVar1 = napi_close_escapable_handle_scope(local_98,local_90);
  }
  if (iVar1 == 0) {
    return param_2;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


/* Address: 0x1800035a0; Evidence: ev_20424349c5ae6e846ea4dd649be5d5585373fdb76c6952d15a5ac1a97b123944 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_1800035a0(undefined8 *param_1,undefined8 *param_2,undefined8 param_3,longlong *param_4)

{
  int iVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined1 auStack_f8 [32];
  longlong local_d8;
  undefined8 *local_d0;
  char local_c8 [8];
  undefined8 local_c0;
  undefined8 local_b8;
  undefined8 local_b0;
  undefined8 local_a8;
  undefined8 uStack_a0;
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_f8;
  local_b8 = *param_1;
  iVar1 = napi_open_escapable_handle_scope(local_b8,&local_b0);
  if (iVar1 != 0) {
    FUN_1800014a0(local_98,local_b8);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  uVar2 = *param_1;
  if (param_1[1] == 0) {
    uVar3 = 0;
  }
  else {
    iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_c0);
    uVar2 = *param_1;
    uVar3 = local_c0;
    if (iVar1 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
  }
  local_d8 = *param_4;
  local_d0 = &local_c0;
  iVar1 = napi_call_function(uVar2,param_3,uVar3,param_4[1] - local_d8 >> 3);
  if (iVar1 != 0) {
    FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  iVar1 = napi_is_exception_pending(local_b8,local_c8);
  if ((iVar1 == 0) && (local_c8[0] != '\0')) {
    uVar2 = *param_1;
    if (param_1[1] == 0) {
      uStack_a0 = 0;
    }
    else {
      iVar1 = napi_get_reference_value(uVar2,param_1[1],&local_c0);
      uVar2 = *param_1;
      if (iVar1 != 0) {
        FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      uStack_a0 = local_c0;
    }
    local_a8._0_4_ = (undefined4)uVar2;
    local_a8._4_4_ = (undefined4)((ulonglong)uVar2 >> 0x20);
    *(undefined4 *)param_2 = (undefined4)local_a8;
    *(undefined4 *)((longlong)param_2 + 4) = local_a8._4_4_;
    *(undefined4 *)(param_2 + 1) = (undefined4)uStack_a0;
    *(undefined4 *)((longlong)param_2 + 0xc) = uStack_a0._4_4_;
    local_a8 = uVar2;
    iVar1 = napi_close_escapable_handle_scope(local_b8,local_b0);
  }
  else {
    iVar1 = napi_escape_handle(local_b8,local_b0,local_c0,&local_a8);
    if (iVar1 != 0) {
      FUN_1800014a0(local_98,local_b8);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    *param_2 = local_b8;
    param_2[1] = local_a8;
    iVar1 = napi_close_escapable_handle_scope(local_b8,local_b0);
  }
  if (iVar1 == 0) {
    return param_2;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


/* Address: 0x1800037b0; Evidence: ev_c9e568752736d17ee9dfe61b6828ae116bd18071751517525507e114b45e00f1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800037b0(undefined8 *param_1,undefined8 *param_2,undefined8 param_3)

{
  undefined8 uVar1;
  undefined8 uVar2;
  int iVar3;
  undefined1 auStackY_d8 [32];
  undefined8 *local_a8;
  undefined8 local_a0;
  undefined8 *local_98;
  undefined8 local_90;
  undefined8 *local_88;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStackY_d8;
  uVar1 = *param_2;
  local_a8 = param_1;
  iVar3 = napi_create_object(uVar1,&local_a8);
  if (iVar3 != 0) {
    FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  uVar2 = *param_2;
  local_98 = local_a8;
  local_a0 = uVar1;
  iVar3 = napi_create_object(uVar2,&local_a8);
  if (iVar3 == 0) {
    local_88 = local_a8;
    local_90 = uVar2;
    FUN_1800038c0(param_1,&local_90,param_2,param_3,(longlong)&local_a0);
    *param_1 = &PTR_FUN_18001f1e0;
    return param_1;
  }
  FUN_1800014a0(local_78,uVar2);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_78,&DAT_180021cb0);
}


/* Address: 0x1800038c0; Evidence: ev_ea85a56738403ab9ca719435c66bbe40939423f3c217998be0cd69e37ff282af */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_1800038c0(undefined8 *param_1,undefined8 *param_2,undefined8 *param_3,undefined8 param_4,
             longlong param_5)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  int iVar3;
  undefined8 *puVar4;
  undefined1 auStack_f8 [32];
  code *local_d8;
  undefined8 *local_d0;
  undefined8 *local_c8;
  undefined8 *local_b8;
  undefined8 *local_b0;
  undefined8 *local_a8;
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_f8;
  *param_1 = &PTR_FUN_18001f1e0;
  param_1[1] = *param_3;
  puVar1 = param_1 + 3;
  uVar2 = *param_2;
  local_b0 = puVar1;
  local_a8 = param_1;
  if (param_2[1] == 0) {
    local_b8 = (undefined8 *)0x0;
  }
  else {
    iVar3 = napi_create_reference(uVar2,param_2[1],1,&local_b8);
    if (iVar3 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
  }
  *puVar1 = uVar2;
  param_1[4] = local_b8;
  *(undefined1 *)(param_1 + 5) = 0;
  puVar1 = param_1 + 6;
  uVar2 = *param_3;
  local_b8 = puVar1;
  if (param_3[1] == 0) {
    puVar4 = (undefined8 *)0x0;
  }
  else {
    iVar3 = napi_create_reference(uVar2,param_3[1],1,&local_b8);
    puVar4 = local_b8;
    if (iVar3 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
  }
  *puVar1 = uVar2;
  param_1[7] = puVar4;
  *(undefined1 *)(param_1 + 8) = 0;
  param_1[9] = 0;
  param_1[10] = 0;
  param_1[0xb] = 0;
  param_1[0xc] = 0xf;
  *(undefined1 *)(param_1 + 9) = 0;
  *(undefined1 *)(param_1 + 0xd) = 0;
  iVar3 = napi_create_string_latin1(param_1[1],param_4,0xffffffffffffffff,&local_b0);
  if (iVar3 != 0) {
    FUN_1800014a0(local_98,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  local_c8 = param_1 + 2;
  local_d8 = FUN_180003f60;
  local_d0 = param_1;
  iVar3 = napi_create_async_work(param_1[1],*(undefined8 *)(param_5 + 8),local_b0,FUN_180003f00);
  if (iVar3 != 0) {
    FUN_1800014a0(local_98,param_1[1]);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  return param_1;
}


/* Address: 0x180003ab0; Evidence: ev_e73800d03a4c95a6b48da33ebea8735240297a7611068c32ecd8a3058c4ac5f5 */

undefined8 * FUN_180003ab0(undefined8 *param_1,uint param_2)

{
  FUN_180003af0(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}


/* Address: 0x180003af0; Evidence: ev_3772f123412c9e07bf41118cbd80f50d76625228a76aea0b00ef810dfd925767 */

void FUN_180003af0(undefined8 *param_1)

{
  *param_1 = &PTR_FUN_18001f1e0;
  if (param_1[2] != 0) {
    napi_delete_async_work(param_1[1]);
    param_1[2] = 0;
  }
  FUN_180002f40(param_1 + 9);
  if (param_1[7] != 0) {
    if (*(char *)(param_1 + 8) == '\0') {
      napi_delete_reference(param_1[6]);
    }
    param_1[7] = 0;
  }
  if (param_1[4] != 0) {
    if (*(char *)(param_1 + 5) == '\0') {
      napi_delete_reference(param_1[3]);
    }
    param_1[4] = 0;
  }
  return;
}


/* Address: 0x180003b70; Evidence: ev_caac19cf30ca025b315da4ad46ef9627ce144a9914f150466aa138974f7b9fc3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180003b70(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    (**(code **)*param_1)(param_1,1);
    return;
  }
  return;
}


/* Address: 0x180003b90; Evidence: ev_a2f4942ed6e0c88e9e712702bb64f8a7580a3e21639074f116620d81769824a2 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003b90(longlong *param_1)

{
  int iVar1;
  longlong *plVar2;
  LPVOID pvVar3;
  undefined1 auStackY_c8 [32];
  undefined8 local_98 [2];
  LPVOID local_88 [2];
  longlong local_78;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStackY_c8;
  if (param_1[7] != 0) {
    plVar2 = (longlong *)(**(code **)(*param_1 + 0x38))(param_1,local_88);
    if (param_1[4] == 0) {
      local_98[0] = 0;
    }
    else {
      iVar1 = napi_get_reference_value(param_1[3],param_1[4],local_98);
      if (iVar1 != 0) {
        FUN_1800014a0(local_68,param_1[3]);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_68,&DAT_180021cb0);
      }
    }
    FUN_1800035a0(param_1 + 6,local_98,local_98[0],plVar2);
    if (local_88[0] != (LPVOID)0x0) {
      pvVar3 = local_88[0];
      if ((0xfff < (local_78 - (longlong)local_88[0] & 0xfffffffffffffff8U)) &&
         (pvVar3 = *(LPVOID *)((longlong)local_88[0] + -8),
         0x1f < (ulonglong)((longlong)local_88[0] + (-8 - (longlong)pvVar3)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_18000dfd0(pvVar3);
    }
  }
  return;
}


/* Address: 0x180003cc0; Evidence: ev_55088b84af44f3ab32909294dcf6d30f5000ce0c4d457fff8595cfd46e4d21ef */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003cc0(longlong param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined1 auStack_c8 [32];
  undefined8 local_a8;
  undefined8 local_a0 [2];
  undefined8 *local_90;
  undefined8 *local_88;
  undefined8 local_80 [3];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_c8;
  if (*(longlong *)(param_1 + 0x38) != 0) {
    puVar2 = FUN_180001930(param_2,local_80);
    local_a8 = puVar2[1];
    local_90 = &local_a8;
    local_88 = local_a0;
    if (*(longlong *)(param_1 + 0x20) == 0) {
      local_a0[0] = 0;
    }
    else {
      iVar1 = napi_get_reference_value
                        (*(undefined8 *)(param_1 + 0x18),*(longlong *)(param_1 + 0x20),local_a0);
      if (iVar1 != 0) {
        FUN_1800014a0(local_68,*(undefined8 *)(param_1 + 0x18));
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_68,&DAT_180021cb0);
      }
    }
    FUN_1800035a0((undefined8 *)(param_1 + 0x30),local_a0,local_a0[0],(longlong *)&local_90);
  }
  return;
}


/* Address: 0x180003d90; Evidence: ev_5561f872a7c2c2681417e51c1c99ab140ab2deb947745b63f354cd7e4cfcd806 */

void FUN_180003d90(longlong param_1,undefined1 (*param_2) [32])

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  LPVOID pvVar4;
  undefined1 (*pauVar5) [32];
  ulonglong uVar6;
  LPVOID pvVar7;
  undefined1 (*pauVar8) [32];
  ulonglong uVar9;
  
  pauVar8 = (undefined1 (*) [32])(param_1 + 0x48);
  if (pauVar8 != param_2) {
    uVar2 = *(ulonglong *)(*param_2 + 0x10);
    if (0xf < *(ulonglong *)(*param_2 + 0x18)) {
      param_2 = *(undefined1 (**) [32])*param_2;
    }
    uVar3 = *(ulonglong *)(param_1 + 0x60);
    if (uVar3 < uVar2) {
      if (0x7fffffffffffffff < uVar2) {
                    /* WARNING: Subroutine does not return */
        FUN_1800011f0();
      }
      uVar6 = uVar2 | 0xf;
      uVar9 = 0x7fffffffffffffff;
      if (((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) &&
         (uVar1 = uVar3 + (uVar3 >> 1), uVar9 = uVar6, uVar6 < uVar1)) {
        uVar9 = uVar1;
      }
      pauVar5 = (undefined1 (*) [32])FUN_1800032d0(uVar9 + 1);
      *(ulonglong *)(param_1 + 0x58) = uVar2;
      *(ulonglong *)(param_1 + 0x60) = uVar9;
      FUN_1800154d0(pauVar5,param_2,uVar2);
      (*pauVar5)[uVar2] = 0;
      if (0xf < uVar3) {
        pvVar4 = *(LPVOID *)*pauVar8;
        pvVar7 = pvVar4;
        if ((0xfff < uVar3 + 1) &&
           (pvVar7 = *(LPVOID *)((longlong)pvVar4 + -8),
           0x1f < (ulonglong)((longlong)pvVar4 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_18000dfd0(pvVar7);
      }
      *(undefined1 (**) [32])*pauVar8 = pauVar5;
    }
    else {
      if (0xf < uVar3) {
        pauVar8 = *(undefined1 (**) [32])*pauVar8;
      }
      *(ulonglong *)(param_1 + 0x58) = uVar2;
      FUN_1800154d0(pauVar8,param_2,uVar2);
      (*pauVar8)[uVar2] = 0;
    }
  }
  return;
}


/* Address: 0x180003ee0; Evidence: ev_1c5ccca60899c68992133d72d1687e65620b27e471b0a299bbc863e31816b4de */

undefined8 * FUN_180003ee0(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  param_2[1] = 0;
  param_2[2] = 0;
  return param_2;
}


/* Address: 0x180003f00; Evidence: ev_1ef1573fdabc18990b5e15978c60a292dd4343a190bfea1ab2838eb01a8cbc24 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180003f00(undefined8 param_1,longlong *param_2)

{
  (**(code **)(*param_2 + 8))(param_2,param_1);
  return;
}


/* Address: 0x180003f20; Evidence: ev_0d2d8686b297255d270509e958f4e6a393ef6ae05a283eef5acb1ba1cb807600 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003f20(longlong *param_1)

{
  undefined1 auStack_68 [32];
  longlong *local_48;
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_68;
  local_48 = param_1;
  (**(code **)(*param_1 + 0x18))();
  return;
}


/* Address: 0x180003f60; Evidence: ev_0b733f2a63d61f59dd65c195479a98435625ff1a382513ddb7d0921a93dbbcd8 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180003f60(undefined8 param_1,undefined4 param_2,longlong *param_3)

{
  (**(code **)(*param_3 + 0x10))(param_3,param_1,param_2);
  return;
}


/* Address: 0x180003f80; Evidence: ev_7cb981384a7b9315eb3e131da35dc373b1473a8eb931036606e720ed6aaf830e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003f80(longlong *param_1,undefined8 param_2,int param_3)

{
  int iVar1;
  undefined1 auStack_98 [32];
  longlong local_78;
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_98;
  if (param_3 != 0xb) {
    local_78 = param_1[1];
    iVar1 = napi_open_handle_scope(local_78,&local_70);
    if (iVar1 != 0) {
      FUN_1800014a0(local_68,local_78);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
    FUN_180004820(param_1);
    iVar1 = napi_close_handle_scope(local_78,local_70);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
    }
  }
  if ((char)param_1[0xd] == '\0') {
    (**(code **)(*param_1 + 0x30))(param_1);
  }
  return;
}


/* Address: 0x180004040; Evidence: ev_ee69d0c7dfee5691566901d7c7de900db4cc8628c1569bae64c5f47af71c0b1b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004040(undefined8 *param_1,undefined8 *param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  undefined1 (*pauVar2) [32];
  undefined8 uVar3;
  int iVar4;
  ulonglong uVar5;
  undefined1 auStack_108 [32];
  char local_e8 [4];
  undefined4 local_e4;
  uint local_e0 [2];
  ulonglong local_d8;
  undefined8 local_d0;
  undefined8 uStack_c8;
  undefined1 local_c0;
  undefined7 uStack_bf;
  undefined8 uStack_b8;
  undefined8 local_b0;
  undefined8 *local_a8;
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_108;
  local_a8 = param_1;
  FUN_1800037b0(param_1,param_2,"windows-process-tree:cpuworker.OnOK");
  *param_1 = &PTR_FUN_18001f220;
  param_1[0xe] = 0;
  param_1[0xf] = 0;
  *(undefined1 *)(param_1 + 0x10) = 0;
  param_1[0x11] = 0;
  param_1[0x12] = 0;
  param_1[0x13] = 0;
  iVar4 = napi_get_array_length(*param_3,param_3[1],local_e0);
  uVar5 = 0;
  while( true ) {
    if (iVar4 != 0) {
      FUN_1800014a0(local_98,*param_3);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    if (local_e0[0] <= (uint)uVar5) {
      iVar4 = napi_get_array_length(*param_3,param_3[1],&local_e4);
      if (iVar4 != 0) {
        FUN_1800014a0(local_98,*param_3);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      *(undefined4 *)(param_1 + 0x14) = local_e4;
      uVar1 = *param_3;
      uVar5 = 0;
      if ((param_3[1] != 0) &&
         (iVar4 = napi_create_reference(uVar1,param_3[1],1,&local_d8), uVar5 = local_d8, iVar4 != 0)
         ) {
        FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      local_c0 = 0;
      if ((param_1[0xf] != 0) &&
         (local_d0 = uVar1, uStack_c8 = uVar5, iVar4 = napi_delete_reference(param_1[0xe]),
         iVar4 != 0)) {
        FUN_1800014a0(local_98,param_1[0xe]);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      param_1[0xe] = uVar1;
      param_1[0xf] = uVar5;
      *(undefined1 *)(param_1 + 0x10) = 0;
      return param_1;
    }
    iVar4 = napi_get_element(*param_3,param_3[1],uVar5,&local_b0);
    uVar3 = local_b0;
    uVar1 = *param_3;
    if (iVar4 != 0) {
      FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    iVar4 = napi_has_named_property(uVar1,local_b0,&DAT_18001f1c4,local_e8);
    if (iVar4 != 0) break;
    if (local_e8[0] != '\0') {
      iVar4 = napi_get_named_property(uVar1,uVar3,&DAT_18001f1c4,&local_d8);
      if (iVar4 != 0) {
        FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      iVar4 = napi_get_value_int32(uVar1,local_d8,&local_e4);
      if (iVar4 != 0) {
        FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      local_d0 = CONCAT44(local_d0._4_4_,local_e4);
    }
    pauVar2 = (undefined1 (*) [32])param_1[0x12];
    if (pauVar2 == (undefined1 (*) [32])param_1[0x13]) {
      FUN_180004b50(param_1 + 0x11,pauVar2,&local_d0);
    }
    else {
      *(undefined4 *)*pauVar2 = (undefined4)local_d0;
      *(undefined4 *)(*pauVar2 + 4) = local_d0._4_4_;
      *(undefined4 *)(*pauVar2 + 8) = (undefined4)uStack_c8;
      *(undefined4 *)(*pauVar2 + 0xc) = uStack_c8._4_4_;
      *(ulonglong *)(*pauVar2 + 0x10) = CONCAT71(uStack_bf,local_c0);
      *(undefined8 *)(*pauVar2 + 0x18) = uStack_b8;
      param_1[0x12] = param_1[0x12] + 0x20;
    }
    uVar5 = (ulonglong)((uint)uVar5 + 1);
    iVar4 = napi_get_array_length(*param_3,param_3[1],local_e0);
  }
  FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_98,&DAT_180021cb0);
}


/* Address: 0x180004350; Evidence: ev_e55da3d66e1b24d0b54b71ddacaea9dbb7ec6829587c9e9e929ad2435916767b */

undefined8 * FUN_180004350(undefined8 *param_1,uint param_2)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  *param_1 = &PTR_FUN_18001f220;
  pvVar1 = (LPVOID)param_1[0x11];
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[0x13] - (longlong)pvVar1 & 0xffffffffffffffe0U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar2);
    param_1[0x11] = 0;
    param_1[0x12] = 0;
    param_1[0x13] = 0;
  }
  if (param_1[0xf] != 0) {
    if (*(char *)(param_1 + 0x10) == '\0') {
      napi_delete_reference(param_1[0xe]);
    }
    param_1[0xf] = 0;
  }
  FUN_180003af0(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}


/* Address: 0x180004430; Evidence: ev_a59c6663670419385a6a466f175b40a5040c7ffa67f8ff332767fa6fd5daba0d */

void FUN_180004430(longlong param_1)

{
  uint uVar1;
  uint uVar2;
  
  uVar1 = 0;
  uVar2 = 0;
  if (*(int *)(param_1 + 0xa0) != 0) {
    do {
      FUN_180004d10((DWORD *)((ulonglong)uVar2 * 0x20 + *(longlong *)(param_1 + 0x88)),'\x01');
      uVar2 = uVar2 + 1;
    } while (uVar2 < *(uint *)(param_1 + 0xa0));
  }
  Sleep(1000);
  if (*(int *)(param_1 + 0xa0) != 0) {
    do {
      FUN_180004d10((DWORD *)((ulonglong)uVar1 * 0x20 + *(longlong *)(param_1 + 0x88)),'\0');
      uVar1 = uVar1 + 1;
    } while (uVar1 < *(uint *)(param_1 + 0xa0));
  }
  return;
}


/* Address: 0x1800044f0; Evidence: ev_acda14f37708b3e2a8e453b510f7fc9b6f276aae52c68e3f037fe8c102a02015 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800044f0(longlong param_1)

{
  undefined8 uVar1;
  undefined8 uVar2;
  ulonglong uVar3;
  ulonglong uVar4;
  ulonglong uVar5;
  int iVar6;
  ulonglong uVar7;
  uint uVar8;
  undefined8 uVar9;
  undefined1 auStack_118 [32];
  ulonglong local_f8;
  ulonglong local_f0 [2];
  ulonglong *local_e0;
  ulonglong *local_d8;
  undefined8 local_d0;
  undefined8 local_c8;
  undefined8 local_c0 [5];
  longlong local_98 [10];
  ulonglong local_48;
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_118;
  local_d0 = *(undefined8 *)(param_1 + 8);
  iVar6 = napi_open_handle_scope(local_d0,&local_c8);
  if (iVar6 != 0) {
    FUN_1800014a0(local_98,local_d0);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  uVar1 = *(undefined8 *)(param_1 + 8);
  uVar8 = 0;
  if (*(longlong *)(param_1 + 0x78) == 0) {
    uVar9 = 0;
  }
  else {
    iVar6 = napi_get_reference_value
                      (*(undefined8 *)(param_1 + 0x70),*(longlong *)(param_1 + 0x78),local_c0);
    uVar9 = local_c0[0];
    if (iVar6 != 0) {
      FUN_1800014a0(local_98,*(undefined8 *)(param_1 + 0x70));
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
  }
  uVar2 = *(undefined8 *)(param_1 + 0x70);
  iVar6 = napi_get_array_length(uVar2,uVar9,&local_f8);
  if (iVar6 != 0) {
    FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  iVar6 = napi_create_array_with_length(uVar1,local_f8 & 0xffffffff,local_f0);
  if (iVar6 != 0) {
    FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_98,&DAT_180021cb0);
  }
  iVar6 = napi_get_array_length(uVar2,uVar9,&local_f8);
  uVar4 = local_f0[0];
  do {
    if (iVar6 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    if ((uint)local_f8 <= uVar8) {
      local_f8 = uVar4;
      local_e0 = &local_f8;
      local_d8 = local_f0;
      FUN_180003350((undefined8 *)(param_1 + 0x30),local_f0,(longlong *)&local_e0);
      iVar6 = napi_close_handle_scope(local_d0,local_c8);
      if (iVar6 == 0) {
        return;
      }
                    /* WARNING: Subroutine does not return */
      FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    uVar3 = *(ulonglong *)((ulonglong)uVar8 * 0x20 + *(longlong *)(param_1 + 0x88) + 8);
    iVar6 = napi_get_element(uVar2,uVar9,uVar8,local_f0);
    if (iVar6 != 0) {
      FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    uVar7 = thunk_FUN_180015020(uVar3);
    uVar5 = local_f0[0];
    if ((short)uVar7 != 2) {
      iVar6 = napi_create_double(uVar1,(int)uVar3,&local_e0);
      if (iVar6 != 0) {
        FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
      iVar6 = napi_set_named_property(uVar2,uVar5,&DAT_18001f1c8,local_e0);
      if (iVar6 != 0) {
        FUN_1800014a0(local_98,uVar2);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_98,&DAT_180021cb0);
      }
    }
    iVar6 = napi_set_element(uVar1,uVar4,uVar8,uVar5);
    if (iVar6 != 0) {
      FUN_1800014a0(local_98,uVar1);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_98,&DAT_180021cb0);
    }
    uVar8 = uVar8 + 1;
    iVar6 = napi_get_array_length(uVar2,uVar9,&local_f8);
  } while( true );
}


/* Address: 0x180004820; Evidence: ev_9190a2bfd36a97bc857d3fe3b8e060360404f88b02c3de96c401743c4ae22a2f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004820(longlong *param_1)

{
  code *pcVar1;
  longlong lVar2;
  int iVar3;
  longlong *plVar4;
  undefined1 auStack_148 [32];
  undefined8 local_128;
  longlong local_120 [3];
  undefined **local_108;
  undefined8 local_100 [2];
  undefined8 local_f0;
  longlong local_e8;
  char local_e0;
  longlong local_d8 [4];
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_148;
  if (param_1[0xb] == 0) {
    (**(code **)(*param_1 + 0x20))();
  }
  else {
    pcVar1 = *(code **)(*param_1 + 0x28);
    plVar4 = param_1 + 9;
    lVar2 = param_1[1];
    if (0xf < (ulonglong)param_1[0xc]) {
      plVar4 = (longlong *)*plVar4;
    }
    iVar3 = napi_create_string_utf8(lVar2,plVar4,param_1[0xb],&local_128);
    if (iVar3 != 0) {
      FUN_1800014a0(local_b8,lVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_b8,&DAT_180021cb0);
    }
    iVar3 = napi_create_error(lVar2,0,local_128,local_120);
    if (iVar3 != 0) {
      FUN_1800014a0(local_68,lVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
    FUN_1800017d0(&local_108,lVar2,local_120[0]);
    (*pcVar1)(param_1,&local_108);
    FUN_180002f40(local_d8);
    local_108 = std::exception::vftable;
    FUN_180007fc8(local_100);
    if ((local_e8 != 0) && (local_e0 == '\0')) {
      napi_delete_reference(local_f0);
    }
  }
  return 0;
}


/* Address: 0x180004980; Evidence: ev_dc0614f637b82f95dd7c95a132500ba59fdfe1812afed3d6d335ffc63a08252a */

void FUN_180004980(longlong *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  pvVar1 = (LPVOID)*param_1;
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[2] - (longlong)pvVar1 & 0xffffffffffffffe0U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar2);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x1800049f0; Evidence: ev_55a587783997e4f85f61f9dbc5f066deafb76509aafa737479093075c6a20847 */

void FUN_1800049f0(longlong *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  pvVar1 = (LPVOID)*param_1;
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[2] - (longlong)pvVar1 & 0xfffffffffffffff8U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar2);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x180004a60; Evidence: ev_4439ced4b93873e32155c9931d036c0559acb6a71f6080b7120dfad2d250af75 */

undefined1 (*) [32] FUN_180004a60(undefined1 (*param_1) [32],undefined1 (*param_2) [32])

{
  ulonglong uVar1;
  undefined1 (*pauVar2) [32];
  ulonglong uVar3;
  ulonglong uVar4;
  
  *(undefined8 *)*param_1 = 0;
  *(undefined8 *)(*param_1 + 8) = 0;
  *(undefined8 *)(*param_1 + 0x10) = 0;
  *(undefined8 *)(*param_1 + 0x18) = 0;
  uVar3 = 0xffffffffffffffff;
  do {
    uVar3 = uVar3 + 1;
  } while ((*param_2)[uVar3] != '\0');
  if (uVar3 < 0x8000000000000000) {
    if (uVar3 < 0x10) {
      *(ulonglong *)(*param_1 + 0x10) = uVar3;
      *(undefined8 *)(*param_1 + 0x18) = 0xf;
      FUN_1800154d0(param_1,param_2,uVar3);
      (*param_1)[uVar3] = 0;
    }
    else {
      uVar1 = uVar3 | 0xf;
      uVar4 = 0x7fffffffffffffff;
      if ((uVar1 < 0x8000000000000000) && (uVar4 = uVar1, uVar1 < 0x16)) {
        uVar4 = 0x16;
      }
      pauVar2 = (undefined1 (*) [32])FUN_1800032d0(uVar4 + 1);
      *(undefined1 (**) [32])*param_1 = pauVar2;
      *(ulonglong *)(*param_1 + 0x10) = uVar3;
      *(ulonglong *)(*param_1 + 0x18) = uVar4;
      FUN_1800154d0(pauVar2,param_2,uVar3);
      (*pauVar2)[uVar3] = 0;
    }
    return param_1;
  }
                    /* WARNING: Subroutine does not return */
  FUN_1800011f0();
}


/* Address: 0x180004b50; Evidence: ev_83508bf3242b38ebe64d575fc4bbe5636a6117739c2cf976d3db8fa3e17e0ea4 */

undefined8 * FUN_180004b50(longlong *param_1,undefined1 (*param_2) [32],undefined8 *param_3)

{
  longlong lVar1;
  undefined1 (*pauVar2) [32];
  LPVOID pvVar3;
  code *pcVar4;
  undefined8 uVar5;
  undefined1 (*pauVar6) [32];
  undefined8 *puVar7;
  ulonglong uVar8;
  undefined1 (*pauVar9) [32];
  LPVOID pvVar10;
  longlong lVar11;
  ulonglong uVar12;
  ulonglong uVar13;
  
  lVar1 = *param_1;
  lVar11 = param_1[1] - lVar1 >> 5;
  if (lVar11 == 0x7ffffffffffffff) {
    FUN_180004ce0();
    pcVar4 = (code *)swi(3);
    puVar7 = (undefined8 *)(*pcVar4)();
    return puVar7;
  }
  uVar12 = lVar11 + 1;
  uVar8 = param_1[2] - lVar1 >> 5;
  if (0x7ffffffffffffff - (uVar8 >> 1) < uVar8) {
    uVar13 = 0x7ffffffffffffff;
  }
  else {
    uVar8 = (uVar8 >> 1) + uVar8;
    uVar13 = uVar12;
    if (uVar12 <= uVar8) {
      uVar13 = uVar8;
    }
    if (0x7ffffffffffffff < uVar13) {
                    /* WARNING: Subroutine does not return */
      FUN_180001150();
    }
  }
  pauVar6 = (undefined1 (*) [32])FUN_1800032d0(uVar13 * 0x20);
  uVar5 = param_3[1];
  puVar7 = (undefined8 *)(*pauVar6 + ((longlong)param_2 - lVar1 & 0xffffffffffffffe0));
  *puVar7 = *param_3;
  puVar7[1] = uVar5;
  uVar5 = param_3[3];
  puVar7[2] = param_3[2];
  puVar7[3] = uVar5;
  pauVar2 = (undefined1 (*) [32])*param_1;
  if (param_2 == (undefined1 (*) [32])param_1[1]) {
    uVar8 = param_1[1] - (longlong)pauVar2;
    pauVar9 = pauVar6;
    param_2 = pauVar2;
  }
  else {
    FUN_1800154d0(pauVar6,pauVar2,(longlong)param_2 - (longlong)pauVar2);
    pauVar9 = (undefined1 (*) [32])(puVar7 + 4);
    uVar8 = param_1[1] - (longlong)param_2;
  }
  FUN_1800154d0(pauVar9,param_2,uVar8);
  pvVar3 = (LPVOID)*param_1;
  if (pvVar3 != (LPVOID)0x0) {
    pvVar10 = pvVar3;
    if ((0xfff < (param_1[2] - (longlong)pvVar3 & 0xffffffffffffffe0U)) &&
       (pvVar10 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar10)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar10);
  }
  *param_1 = (longlong)pauVar6;
  param_1[1] = (longlong)(pauVar6 + uVar12);
  param_1[2] = (longlong)(pauVar6 + uVar13);
  return puVar7;
}


/* Address: 0x180004ce0; Evidence: ev_98783c77b45780a3d65ad600386d3330dc434f0b522b439f150cd63e4f817956 */

void FUN_180004ce0(void)

{
  code *pcVar1;
  
  FUN_180007210(0x18001f1d0);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180004d10; Evidence: ev_2abfdba16db8aaf93e499e8588d87569c14dbdc7f24e1bdb79bed2e501910ee9 */

void FUN_180004d10(DWORD *param_1,char param_2)

{
  BOOL BVar1;
  HANDLE hProcess;
  ulonglong uVar2;
  double dVar3;
  _FILETIME local_res8 [2];
  _FILETIME local_res18;
  _FILETIME local_res20;
  _FILETIME local_38;
  _FILETIME local_30;
  _FILETIME local_28;
  _FILETIME local_20;
  
  hProcess = OpenProcess(0x410,0,*param_1);
  if (hProcess != (HANDLE)0x0) {
    BVar1 = GetProcessTimes(hProcess,&local_28,&local_30,&local_res18,local_res8);
    if ((BVar1 != 0) && (BVar1 = GetSystemTimes(&local_20,&local_38,&local_res20), BVar1 != 0)) {
      if (param_2 != '\0') {
        *(longlong *)(param_1 + 4) = (longlong)local_res8[0] + (longlong)local_res18;
        *(longlong *)(param_1 + 6) =
             CONCAT44(local_res20.dwHighDateTime,local_res20.dwLowDateTime) +
             CONCAT44(local_38.dwHighDateTime,local_38.dwLowDateTime);
        CloseHandle(hProcess);
        return;
      }
      dVar3 = (double)(ulonglong)
                      (((longlong)local_res8[0] + (longlong)local_res18) -
                      *(longlong *)(param_1 + 4)) * 100.0;
      uVar2 = (CONCAT44(local_res20.dwHighDateTime,local_res20.dwLowDateTime) +
              CONCAT44(local_38.dwHighDateTime,local_38.dwLowDateTime)) - *(longlong *)(param_1 + 6)
      ;
      if (-1 < (longlong)uVar2) {
        *(double *)(param_1 + 2) = dVar3 / (double)(longlong)uVar2;
        CloseHandle(hProcess);
        return;
      }
      *(double *)(param_1 + 2) = dVar3 / (double)uVar2;
      CloseHandle(hProcess);
      return;
    }
    param_1[2] = 0;
    param_1[3] = 0x7ff80000;
    CloseHandle(hProcess);
  }
  return;
}


/* Address: 0x180004ec0; Evidence: ev_aad5f3e0efd1a4b03fd9506c0fdebb82f0a83f24ebcd803ce4c05302c3a9604a */

undefined8 * FUN_180004ec0(longlong *param_1,undefined8 *param_2,undefined8 *param_3)

{
  ulonglong uVar1;
  ulonglong uVar2;
  undefined8 *puVar3;
  longlong lVar4;
  LPVOID pvVar5;
  code *pcVar6;
  undefined8 *puVar7;
  undefined8 *puVar8;
  longlong lVar9;
  undefined8 *puVar10;
  longlong lVar11;
  ulonglong uVar12;
  LPVOID pvVar13;
  undefined8 *puVar14;
  undefined8 *puVar15;
  
  lVar11 = *param_1;
  lVar9 = ((longlong)param_2 - lVar11) / 0x26 + ((longlong)param_2 - lVar11 >> 0x3f);
  uVar12 = 0xd79435e50d7943;
  lVar4 = (param_1[1] - lVar11) / 0x130;
  if (lVar4 == 0xd79435e50d7943) {
    FUN_180004ce0();
    pcVar6 = (code *)swi(3);
    puVar8 = (undefined8 *)(*pcVar6)();
    return puVar8;
  }
  uVar1 = lVar4 + 1;
  uVar2 = (param_1[2] - lVar11) / 0x130;
  if (uVar2 <= 0xd79435e50d7943 - (uVar2 >> 1)) {
    uVar2 = (uVar2 >> 1) + uVar2;
    uVar12 = uVar1;
    if (uVar1 <= uVar2) {
      uVar12 = uVar2;
    }
    if (0xd79435e50d7943 < uVar12) {
                    /* WARNING: Subroutine does not return */
      FUN_180001150();
    }
  }
  puVar7 = (undefined8 *)FUN_1800032d0(uVar12 * 0x130);
  puVar15 = puVar7 + ((lVar9 >> 3) - (lVar9 >> 0x3f)) * 0x26;
  puVar8 = puVar15 + 0x26;
  FUN_180005130(puVar15,param_3);
  puVar3 = (undefined8 *)param_1[1];
  puVar10 = (undefined8 *)*param_1;
  puVar14 = puVar7;
  if (param_2 == puVar3) {
    for (; puVar10 != puVar3; puVar10 = puVar10 + 0x26) {
      FUN_180005130(puVar14,puVar10);
      puVar14 = puVar14 + 0x26;
    }
  }
  else {
    for (; puVar10 != param_2; puVar10 = puVar10 + 0x26) {
      FUN_180005130(puVar14,puVar10);
      puVar14 = puVar14 + 0x26;
    }
    puVar3 = (undefined8 *)param_1[1];
    for (; param_2 != puVar3; param_2 = param_2 + 0x26) {
      FUN_180005130(puVar8,param_2);
      puVar8 = puVar8 + 0x26;
    }
  }
  lVar11 = *param_1;
  if (lVar11 != 0) {
    lVar4 = param_1[1];
    for (; lVar11 != lVar4; lVar11 = lVar11 + 0x130) {
      FUN_180002f40((longlong *)(lVar11 + 0x110));
    }
    pvVar5 = (LPVOID)*param_1;
    pvVar13 = pvVar5;
    if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar5) / 0x130) * 0x130)) &&
       (pvVar13 = *(LPVOID *)((longlong)pvVar5 + -8),
       0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar13)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar13);
  }
  *param_1 = (longlong)puVar7;
  param_1[1] = (longlong)(puVar7 + uVar1 * 0x26);
  param_1[2] = (longlong)(puVar7 + uVar12 * 0x26);
  return puVar15;
}


/* Address: 0x180005130; Evidence: ev_62808174b1b20acffaa1e3441c62f2a66a4fdbf1bbce1bdeebe9f77b5814415f */

undefined8 * FUN_180005130(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 *puVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  longlong lVar6;
  
  lVar6 = 2;
  puVar4 = param_2;
  puVar5 = param_1;
  do {
    puVar1 = puVar5 + 0x10;
    uVar3 = puVar4[1];
    puVar2 = puVar4 + 0x10;
    *puVar5 = *puVar4;
    puVar5[1] = uVar3;
    uVar3 = puVar4[3];
    puVar5[2] = puVar4[2];
    puVar5[3] = uVar3;
    uVar3 = puVar4[5];
    puVar5[4] = puVar4[4];
    puVar5[5] = uVar3;
    uVar3 = puVar4[7];
    puVar5[6] = puVar4[6];
    puVar5[7] = uVar3;
    uVar3 = puVar4[9];
    puVar5[8] = puVar4[8];
    puVar5[9] = uVar3;
    uVar3 = puVar4[0xb];
    puVar5[10] = puVar4[10];
    puVar5[0xb] = uVar3;
    uVar3 = puVar4[0xd];
    puVar5[0xc] = puVar4[0xc];
    puVar5[0xd] = uVar3;
    uVar3 = puVar4[0xf];
    puVar5[0xe] = puVar4[0xe];
    puVar5[0xf] = uVar3;
    lVar6 = lVar6 + -1;
    puVar4 = puVar2;
    puVar5 = puVar1;
  } while (lVar6 != 0);
  *(undefined4 *)puVar1 = *(undefined4 *)puVar2;
  *(undefined4 *)((longlong)param_1 + 0x104) = *(undefined4 *)((longlong)param_2 + 0x104);
  *(undefined4 *)(param_1 + 0x21) = *(undefined4 *)(param_2 + 0x21);
  *(undefined4 *)((longlong)param_1 + 0x10c) = *(undefined4 *)((longlong)param_2 + 0x10c);
  param_1[0x22] = 0;
  param_1[0x23] = 0;
  param_1[0x24] = 0;
  param_1[0x25] = 0;
  uVar3 = param_2[0x23];
  param_1[0x22] = param_2[0x22];
  param_1[0x23] = uVar3;
  uVar3 = param_2[0x25];
  param_1[0x24] = param_2[0x24];
  param_1[0x25] = uVar3;
  *(undefined1 *)(param_2 + 0x22) = 0;
  param_2[0x24] = 0;
  param_2[0x25] = 0xf;
  return param_1;
}


/* Address: 0x180005220; Evidence: ev_13efe194f5e1324ece55f7bd837625ddc2efcd094c3ecb9a7d57c94de061af9e */

undefined8 * FUN_180005220(undefined8 *param_1,uint param_2)

{
  *param_1 = &PTR_FUN_18001f2b8;
  FUN_1800059e0(param_1 + 0xe);
  FUN_180003af0(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}


/* Address: 0x180005270; Evidence: ev_0de1b266020492a8f00b1d26988b705ffeac535325b75b6d7d07b436c0774635 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180005270(longlong param_1)

{
  char *pcVar1;
  uint uVar2;
  undefined8 *puVar3;
  int iVar4;
  HANDLE hObject;
  HANDLE hObject_00;
  longlong lVar5;
  uint uVar6;
  undefined1 auStack_318 [48];
  char local_2e8 [272];
  longlong local_1d8;
  undefined8 uStack_1d0;
  undefined8 local_1c8;
  undefined8 uStack_1c0;
  undefined1 local_1b8 [80];
  undefined4 local_168 [2];
  DWORD local_160;
  char acStack_13c [260];
  ulonglong local_38;
  
  local_38 = DAT_180023000 ^ (ulonglong)auStack_318;
  uVar2 = *(uint *)(param_1 + 0x8c);
  FUN_180015110((undefined1 (*) [32])local_168,0,0x130);
  uVar6 = 0;
  hObject = (HANDLE)CreateToolhelp32Snapshot(2,0);
  local_168[0] = 0x130;
  iVar4 = Process32First(hObject,local_168);
  while (iVar4 != 0) {
    if (local_160 != 0) {
      uStack_1d0 = 0;
      local_1c8 = 0;
      uStack_1c0 = 0xf;
      local_1d8 = 0;
      if (((uVar2 & 1) != 0) &&
         (hObject_00 = OpenProcess(0x410,0,local_160), hObject_00 != (HANDLE)0x0)) {
        K32GetProcessMemoryInfo(hObject_00,local_1b8,0x48);
        CloseHandle(hObject_00);
      }
      if ((uVar2 & 2) != 0) {
        FUN_180005ac0((longlong)local_2e8);
      }
      lVar5 = 0;
      do {
        pcVar1 = acStack_13c + lVar5;
        local_2e8[lVar5] = *pcVar1;
        lVar5 = lVar5 + 1;
      } while (*pcVar1 != '\0');
      puVar3 = *(undefined8 **)(param_1 + 0x78);
      if (puVar3 == *(undefined8 **)(param_1 + 0x80)) {
        FUN_180004ec0((longlong *)(param_1 + 0x70),puVar3,(undefined8 *)local_2e8);
      }
      else {
        FUN_180005130(puVar3,(undefined8 *)local_2e8);
        *(longlong *)(param_1 + 0x78) = *(longlong *)(param_1 + 0x78) + 0x130;
      }
      uVar6 = uVar6 + 1;
      FUN_180002f40(&local_1d8);
      if (0x3ff < uVar6) break;
    }
    iVar4 = Process32Next(hObject);
  }
  CloseHandle(hObject);
  *(uint *)(param_1 + 0x88) = uVar6;
  return;
}


/* Address: 0x180005470; Evidence: ev_e39033e1445b43bae65ba178878486dea47c96e1652a614bc9b4ecfc0f605e9d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180005470(longlong param_1)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  int iVar4;
  longlong *plVar5;
  undefined8 ***pppuVar6;
  longlong lVar7;
  longlong lVar8;
  uint uVar9;
  undefined1 auStack_138 [32];
  undefined8 local_118;
  undefined8 *local_110;
  undefined8 **local_108;
  undefined8 local_100;
  undefined8 local_f8;
  undefined8 local_f0;
  undefined8 local_e8;
  undefined8 local_e0;
  undefined8 local_d8;
  undefined8 local_d0;
  undefined8 local_c8;
  undefined8 local_c0;
  undefined8 *local_b8;
  undefined8 local_b0;
  longlong local_a8 [10];
  undefined8 **local_58 [3];
  ulonglong local_40;
  ulonglong local_38;
  
  local_38 = DAT_180023000 ^ (ulonglong)auStack_138;
  local_100 = *(undefined8 *)(param_1 + 8);
  iVar4 = napi_open_handle_scope(local_100,&local_f8);
  if (iVar4 != 0) {
    FUN_1800014a0(local_a8,local_100);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_a8,&DAT_180021cb0);
  }
  puVar1 = *(undefined8 **)(param_1 + 8);
  iVar4 = napi_create_array_with_length(puVar1,*(undefined4 *)(param_1 + 0x88),&local_118);
  uVar2 = local_118;
  if (iVar4 != 0) {
    FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_a8,&DAT_180021cb0);
  }
  uVar9 = 0;
  if (*(int *)(param_1 + 0x88) != 0) {
    do {
      lVar7 = (ulonglong)uVar9 * 0x130 + *(longlong *)(param_1 + 0x70);
      iVar4 = napi_create_object(puVar1,&local_e8);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      if (lVar7 == 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      lVar8 = -1;
      do {
        lVar8 = lVar8 + 1;
      } while (*(char *)(lVar7 + lVar8) != '\0');
      iVar4 = napi_create_string_utf8(puVar1,lVar7,lVar8,&local_118);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      local_b0 = local_118;
      local_b8 = puVar1;
      FUN_180001320(&local_b8,(undefined1 (*) [32])local_58);
      pppuVar6 = local_58;
      if (0xf < local_40) {
        pppuVar6 = (undefined8 ***)local_58[0];
      }
      iVar4 = napi_create_string_utf8(puVar1,pppuVar6,local_58[2],&local_f0);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      FUN_180002f40((longlong *)local_58);
      uVar3 = local_e8;
      iVar4 = napi_set_named_property(puVar1,local_e8,&DAT_18001f28c,local_f0);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      iVar4 = napi_create_double(puVar1,(double)*(uint *)(lVar7 + 0x104),&local_e0);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      iVar4 = napi_set_named_property(puVar1,uVar3,&DAT_18001f1c4,local_e0);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      iVar4 = napi_create_double(puVar1,(double)*(uint *)(lVar7 + 0x108),&local_d8);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      iVar4 = napi_set_named_property(puVar1,uVar3,&DAT_18001f294,local_d8);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      if ((*(byte *)(param_1 + 0x8c) & 1) != 0) {
        iVar4 = napi_create_double(puVar1,(double)*(uint *)(lVar7 + 0x10c),&local_d0);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
        iVar4 = napi_set_named_property(puVar1,uVar3,"memory",local_d0);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
      }
      if ((*(byte *)(param_1 + 0x8c) & 2) != 0) {
        plVar5 = (longlong *)(lVar7 + 0x110);
        if (0xf < *(ulonglong *)(lVar7 + 0x128)) {
          plVar5 = (longlong *)*plVar5;
        }
        iVar4 = napi_create_string_utf8(puVar1,plVar5,*(undefined8 *)(lVar7 + 0x120),&local_c8);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
        local_108 = (undefined8 **)local_c8;
        local_110 = puVar1;
        FUN_180001320(&local_110,(undefined1 (*) [32])local_58);
        pppuVar6 = local_58;
        if (0xf < local_40) {
          pppuVar6 = (undefined8 ***)local_58[0];
        }
        iVar4 = napi_create_string_utf8(puVar1,pppuVar6,local_58[2],&local_c0);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
        FUN_180002f40((longlong *)local_58);
        iVar4 = napi_set_named_property(puVar1,uVar3,"commandLine",local_c0);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
      }
      iVar4 = napi_set_element(puVar1,uVar2,uVar9,uVar3);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      uVar9 = uVar9 + 1;
    } while (uVar9 < *(uint *)(param_1 + 0x88));
  }
  local_110 = &local_118;
  local_108 = &local_110;
  FUN_180003350((undefined8 *)(param_1 + 0x30),&local_b8,(longlong *)&local_110);
  iVar4 = napi_close_handle_scope(local_100,local_f8);
  if (iVar4 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x1800059e0; Evidence: ev_0310e545fedac115c663b14e23ca220b2ef2eb30018109675444c8ff336de5a0 */

void FUN_1800059e0(longlong *param_1)

{
  longlong lVar1;
  LPVOID pvVar2;
  longlong lVar3;
  LPVOID pvVar4;
  
  lVar3 = *param_1;
  if (lVar3 != 0) {
    lVar1 = param_1[1];
    for (; lVar3 != lVar1; lVar3 = lVar3 + 0x130) {
      FUN_180002f40((longlong *)(lVar3 + 0x110));
    }
    pvVar2 = (LPVOID)*param_1;
    pvVar4 = pvVar2;
    if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar2) / 0x130) * 0x130)) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar4);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x180005ac0; Evidence: ev_dda19b63b4f499d54f0a4a58e2197d2bcca15273ceb311f6aca9700ecba88497 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Exceeded maximum restarts with more pending */

ulonglong FUN_180005ac0(longlong param_1)

{
  int iVar1;
  BOOL BVar2;
  int cbMultiByte;
  HMODULE hModule;
  FARPROC pFVar3;
  HANDLE hProcess;
  undefined4 extraout_var;
  undefined8 uVar4;
  undefined4 extraout_var_00;
  ulonglong uVar5;
  LPCWSTR ***ppppWVar6;
  ulonglong uVar7;
  undefined1 (*lpMultiByteStr) [32];
  undefined8 *lpBuffer;
  undefined1 auStackY_418 [32];
  undefined8 local_3d8;
  LPCVOID pvStack_3d0;
  undefined8 local_3c8;
  undefined8 uStack_3c0;
  undefined8 local_3b8;
  undefined8 uStack_3b0;
  undefined8 local_3a8;
  undefined8 uStack_3a0;
  undefined8 local_398;
  undefined8 uStack_390;
  undefined8 local_388;
  undefined8 uStack_380;
  undefined8 local_378;
  undefined8 uStack_370;
  undefined8 local_368;
  undefined8 uStack_360;
  undefined8 local_358;
  undefined8 uStack_350;
  undefined8 local_348;
  undefined8 uStack_340;
  ulonglong local_338;
  LPCVOID pvStack_330;
  undefined1 local_328 [32];
  LPCVOID local_308;
  LPCWSTR **local_58;
  undefined8 uStack_50;
  ulonglong local_48;
  ulonglong local_40;
  ulonglong local_38;
  
  local_38 = DAT_180023000 ^ (ulonglong)auStackY_418;
  hModule = GetModuleHandleW(L"ntdll.dll");
  hProcess = (HANDLE)0x0;
  if (hModule != (HMODULE)0x0) {
    pFVar3 = GetProcAddress(hModule,"NtQueryInformationProcess");
    hProcess = (HANDLE)0x0;
    if (pFVar3 != (FARPROC)0x0) {
      local_3d8 = 0;
      pvStack_3d0 = (LPCVOID)0x0;
      local_3c8 = 0;
      uStack_3c0 = 0;
      local_3b8 = 0;
      uStack_3b0 = 0;
      FUN_180015110(&local_328,0,0x2c8);
      local_3a8 = 0;
      uStack_3a0 = 0;
      local_398 = 0;
      uStack_390 = 0;
      local_388 = 0;
      uStack_380 = 0;
      local_378 = 0;
      uStack_370 = 0;
      local_368 = 0;
      uStack_360 = 0;
      local_358 = 0;
      uStack_350 = 0;
      local_348 = 0;
      uStack_340 = 0;
      local_338 = 0;
      pvStack_330 = (LPCVOID)0x0;
      hProcess = OpenProcess(0x410,0,*(DWORD *)(param_1 + 0x104));
      if (hProcess != (HANDLE)0xffffffffffffffff) {
        iVar1 = (*pFVar3)(hProcess,0,&local_3d8,0x30);
        if (((-1 < iVar1) && (pvStack_3d0 != (LPCVOID)0x0)) &&
           (BVar2 = ReadProcessMemory(hProcess,pvStack_3d0,local_328,0x2c8,(SIZE_T *)0x0),
           BVar2 != 0)) {
          lpBuffer = &local_3a8;
          BVar2 = ReadProcessMemory(hProcess,local_308,lpBuffer,0x80,(SIZE_T *)0x0);
          if ((BVar2 != 0) && ((ushort)local_338 != 0)) {
            uStack_50 = 0;
            local_48 = 0;
            local_40 = 7;
            local_58 = (LPCWSTR **)0x0;
            uVar7 = (ulonglong)((ushort)local_338 >> 1);
            if (uVar7 == 0) {
                    /* WARNING: Ignoring partial resolution of indirect */
              local_58._0_2_ = 0;
              local_48 = uVar7;
            }
            else if (uVar7 < 8) {
              ppppWVar6 = &local_58;
              local_48 = uVar7;
              for (uVar5 = uVar7; uVar5 != 0; uVar5 = uVar5 - 1) {
                *(undefined2 *)ppppWVar6 = 0;
                ppppWVar6 = (LPCWSTR ***)((longlong)ppppWVar6 + 2);
              }
              *(undefined2 *)((longlong)&local_58 + uVar7 * 2) = 0;
            }
            else {
              FUN_180005ee0((undefined1 (*) [32])&local_58,uVar7,lpBuffer,uVar7);
            }
            ppppWVar6 = &local_58;
            if (7 < local_40) {
              ppppWVar6 = (LPCWSTR ***)local_58;
            }
            BVar2 = ReadProcessMemory(hProcess,pvStack_330,ppppWVar6,local_338 & 0xffff,
                                      (SIZE_T *)0x0);
            if (BVar2 != 0) {
              iVar1 = (int)local_48;
              ppppWVar6 = &local_58;
              if (7 < local_40) {
                ppppWVar6 = (LPCWSTR ***)local_58;
              }
              cbMultiByte = WideCharToMultiByte(0,0,(LPCWSTR)ppppWVar6,(int)local_48,(LPSTR)0x0,0,
                                                (LPCSTR)0x0,(LPBOOL)0x0);
              if (cbMultiByte != 0) {
                lpMultiByteStr = (undefined1 (*) [32])(param_1 + 0x110);
                FUN_180002e70(lpMultiByteStr,(longlong)cbMultiByte);
                if (0xf < *(ulonglong *)(param_1 + 0x128)) {
                  lpMultiByteStr = *(undefined1 (**) [32])*lpMultiByteStr;
                }
                ppppWVar6 = &local_58;
                if (7 < local_40) {
                  ppppWVar6 = (LPCWSTR ***)local_58;
                }
                WideCharToMultiByte(0,0,(LPCWSTR)ppppWVar6,iVar1,(LPSTR)lpMultiByteStr,cbMultiByte,
                                    (LPCSTR)0x0,(LPBOOL)0x0);
              }
              BVar2 = CloseHandle(hProcess);
              uVar4 = CONCAT44(extraout_var,BVar2);
              if (7 < local_40) {
                ppppWVar6 = (LPCWSTR ***)local_58;
                if ((0xfff < local_40 * 2 + 2) &&
                   (ppppWVar6 = (LPCWSTR ***)local_58[-1],
                   0x1f < (ulonglong)((longlong)local_58 + (-8 - (longlong)ppppWVar6))))
                goto LAB_180005e3f;
                uVar4 = thunk_FUN_18000dfd0(ppppWVar6);
              }
              return CONCAT71((int7)((ulonglong)uVar4 >> 8),1);
            }
            if (7 < local_40) {
              ppppWVar6 = (LPCWSTR ***)local_58;
              if ((0xfff < local_40 * 2 + 2) &&
                 (ppppWVar6 = (LPCWSTR ***)local_58[-1],
                 0x1f < (ulonglong)((longlong)local_58 + (-8 - (longlong)ppppWVar6)))) {
LAB_180005e3f:
                    /* WARNING: Subroutine does not return */
                _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
              }
              thunk_FUN_18000dfd0(ppppWVar6);
            }
          }
        }
        BVar2 = CloseHandle(hProcess);
        hProcess = (HANDLE)CONCAT44(extraout_var_00,BVar2);
      }
    }
  }
  return (ulonglong)hProcess & 0xffffffffffffff00;
}


/* Address: 0x180005e60; Evidence: ev_0dd56fe3d5b93d4feb23489daf954b62c2e441c0cd92d77fcae2ad900f8ea4cc */

void FUN_180005e60(longlong *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (7 < (ulonglong)param_1[3]) {
    pvVar1 = (LPVOID)*param_1;
    pvVar2 = pvVar1;
    if ((0xfff < param_1[3] * 2 + 2U) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pvVar2);
  }
  param_1[3] = 7;
  param_1[2] = 0;
  *(undefined2 *)param_1 = 0;
  return;
}


/* Address: 0x180005ee0; Evidence: ev_951c229b58bc054a39486a74d78f8d9919e2ab39a87441b87005f6ce0107e3d6 */

undefined1 (*) [32]
FUN_180005ee0(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,longlong param_4)

{
  ulonglong uVar1;
  longlong lVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  undefined1 (*pauVar5) [32];
  longlong lVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  ulonglong uVar9;
  undefined2 *puVar10;
  
  lVar2 = *(longlong *)(*param_1 + 0x10);
  uVar9 = 0x7ffffffffffffffe;
  if (0x7ffffffffffffffeU - lVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_1800011f0();
  }
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  uVar7 = lVar2 + param_2 | 7;
  if ((uVar7 < 0x7fffffffffffffff) && (uVar3 <= 0x7ffffffffffffffe - (uVar3 >> 1))) {
    uVar1 = uVar3 + (uVar3 >> 1);
    uVar9 = uVar7;
    if (uVar7 < uVar1) {
      uVar9 = uVar1;
    }
    uVar7 = uVar9 + 1;
    if (0x7fffffffffffffff < uVar7) {
                    /* WARNING: Subroutine does not return */
      FUN_180001150();
    }
  }
  else {
    uVar7 = 0x7fffffffffffffff;
  }
  pauVar5 = (undefined1 (*) [32])FUN_1800032d0(uVar7 * 2);
  *(ulonglong *)(*param_1 + 0x18) = uVar9;
  uVar9 = lVar2 * 2;
  *(ulonglong *)(*param_1 + 0x10) = lVar2 + param_2;
  puVar10 = (undefined2 *)(*pauVar5 + uVar9);
  if (uVar3 < 8) {
    FUN_1800154d0(pauVar5,param_1,uVar9);
    lVar6 = param_4;
    if (param_4 != 0) {
      for (; lVar6 != 0; lVar6 = lVar6 + -1) {
        *puVar10 = 0;
        puVar10 = puVar10 + 1;
      }
    }
    *(undefined2 *)(*pauVar5 + (lVar2 + param_4) * 2) = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_1800154d0(pauVar5,pauVar4,uVar9);
    lVar6 = param_4;
    if (param_4 != 0) {
      for (; lVar6 != 0; lVar6 = lVar6 + -1) {
        *puVar10 = 0;
        puVar10 = puVar10 + 1;
      }
    }
    *(undefined2 *)(*pauVar5 + (lVar2 + param_4) * 2) = 0;
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 * 2 + 2) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000dfd0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar5;
  return param_1;
}


/* Address: 0x18000605b; Evidence: ev_661ff678e70778b9754830742a663b15ad044b7f0cf68da76ff809b0a8ff9322 */

void FUN_18000605b(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_RCX;
  undefined8 in_XMM1_Qa;
  undefined8 in_XMM2_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_180014980(&ImgDelayDescr_180021db4.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x0001800060d2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_RCX,in_XMM1_Qa,in_XMM2_Qa,param_4);
  return;
}


/* Address: 0x1800060d4; Evidence: ev_58928da6ad46efbb9e17cfd070e9144ffe10eb646426dd6870b6c9706864c305 */

void DelayLoad_napi_create_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800060e0; Evidence: ev_df35d2687d038b8cc9d75ace187ad224d792019256bd8024eb7eb563fb297b28 */

void DelayLoad_napi_open_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800060ec; Evidence: ev_e3ad582343961608619cc9bf17506b3d1d2340ce3741d417392fe5b94fb645f2 */

void DelayLoad_napi_get_last_error_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800060f8; Evidence: ev_fc68cd56a817be7deb7698e9e8567ad89082a2e4f0f96857d4ee76f6e6da4d2c */

void DelayLoad_napi_create_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006104; Evidence: ev_d723f8a4054f288659dd30f5781d19ae6cee3f02b1b9067c7af72e0a62cd757d */

void DelayLoad_napi_queue_async_work
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006110; Evidence: ev_ee0c7af43da0843f0c4ee334798b896b39d1b67c820c709d77b681a244937a7e */

void DelayLoad_napi_delete_reference
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000611c; Evidence: ev_916ed473b26b804d080b78a27238510d00b35d8bf6d835355055142928a504c9 */

void DelayLoad_napi_fatal_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006128; Evidence: ev_c79cc056b23351e15e3accc0a6f13233916b36b15251fa6240971528bc97400d */

void DelayLoad_napi_is_exception_pending
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006134; Evidence: ev_4e5814ba7fa533ee2581535186cb17416d86e1a753abfcd2f387670d1031b571 */

void DelayLoad_napi_get_value_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006140; Evidence: ev_3d30b6219e018b63c01901bfe9028684d2ce83a725013309f48b7022ab2eee42 */

void DelayLoad_napi_close_escapable_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000614c; Evidence: ev_788de80ec700deb1e378831d76004caad504fdc7fbaf1f72506432a76c138ad9 */

void DelayLoad_napi_escape_handle
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006158; Evidence: ev_5ef92feb7262f3eb1d72f5a85ce718c32f858eea99181ddfbce0d1531e9c6210 */

void DelayLoad_napi_get_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006164; Evidence: ev_af007cc1dce3733040fd65734d663dac2594ceeed63b990933af69c191a79d2f */

void DelayLoad_napi_add_finalizer
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006170; Evidence: ev_b89e86448f1200e8d1735cc0cba7392758d9852f95d6af93705edf9f3e4973a3 */

void DelayLoad_napi_is_array
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000617c; Evidence: ev_f4d4e2cd55135f8a502e47646fdc80f6e3d51e50869f5e1cb8cde4959211d649 */

void DelayLoad_napi_create_type_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006188; Evidence: ev_a32c0366f77e39796f32b85604d9df5f476ce571777117505fadb8874217aa85 */

void DelayLoad_napi_create_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006194; Evidence: ev_89f905d2b975224e544ff4e22f1ac29a33e7ddf1d152283eb79b3807eb5d4c26 */

void DelayLoad_napi_has_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800061a0; Evidence: ev_6ade2a3ed170aa02421b0777c767fc409663d739cf6e4150175e16e445d0890a */

void DelayLoad_napi_set_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800061ac; Evidence: ev_f3ff5995c3e3acbc60662a7138af20ab0a08935240be5b63649017b8615af137 */

void DelayLoad_napi_get_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800061b8; Evidence: ev_ff05cc65fc7362afe60835f719ee0f9a116e9acf4c0cac35e055bd95ac29d605 */

void DelayLoad_napi_define_properties
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800061c4; Evidence: ev_bec2c1fcd7c1dc12cc86005ca79074d6b38e8f961b4b256bb015549e9e9cd716 */

void DelayLoad_napi_typeof
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800061d0; Evidence: ev_fb2c924df189e4cefad8864c7d712a32cb0c19cb9235738d0817140ff7ce6bed */

void DelayLoad_napi_throw
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800061dc; Evidence: ev_9fea8ebfc9c0aa5afdd64521a94f194cf2e70ed64f75c2255b5452360ba7953c */

void DelayLoad_napi_get_value_int32
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800061e8; Evidence: ev_5d8f26fe81f43600c8dbb46752c01d8ee386a915852c7bbd9425f185fd502802 */

void DelayLoad_napi_get_and_clear_last_exception
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800061f4; Evidence: ev_1cb2408b51a7bc933e09c0132d8108296e53efc885f0ab31baa40883f1e559ef */

void DelayLoad_napi_create_object
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006200; Evidence: ev_e451cc6b64b28dd72b984a60ecf973d64a4c9ce2181d067ecfd79ff31f53264b */

void DelayLoad_napi_get_undefined
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000620c; Evidence: ev_2693b32d24d6b26a72d1f916ae8cc699f628be157eb7e53be4503fd20b2fb00b */

void DelayLoad_napi_get_cb_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006218; Evidence: ev_2205fd65a5fc11e2dbc58081cd83a7cd40411ebd6a9e75ce993314a21cd70caa */

void DelayLoad_napi_open_escapable_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006224; Evidence: ev_3ffa7d37d6fa11160f85fd2a78487fb23f94833985d92bd5cbe2fa6c05188bb5 */

void DelayLoad_napi_create_reference
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006230; Evidence: ev_2adb8762c6c749462c727194be5921d51711c3ae64f55cd217b98d7a83f3966d */

void DelayLoad_napi_close_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000623c; Evidence: ev_0edf535d6f9b7fec2d5af77c15cfeaf1716e16e19fd3cd2f14f8e6f18745be17 */

void DelayLoad_napi_get_reference_value
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006248; Evidence: ev_2fa508d993a41d955c19b31fa8d5dfc05c648f8a50a7340ad816e6a9bbf04cb4 */

void DelayLoad_napi_create_array_with_length
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006254; Evidence: ev_855c3ec65f4105ef144cd00ff2f100d3c7e470599a818ebdc10510fc8f75ec21 */

void DelayLoad_napi_get_element
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006260; Evidence: ev_bc94a09dbe0b40029c9f25647862178ff0d7425bcc605aea1613d12123e8a7fb */

void DelayLoad_napi_call_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000626c; Evidence: ev_08d38ec5e3ac1bf8253771fb870d95faaa5db9628d14cd74dfaffb65c252e5a6 */

void DelayLoad_napi_set_element
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006278; Evidence: ev_604915b56554afa9746eb8a970b7d7bdbdf4b0e22bebc775fb07df0f7c8c1967 */

void DelayLoad_napi_create_string_latin1
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006284; Evidence: ev_84a5f7dc0740a8861835bfedeceacb165decc767d972174af9094a4934faacd9 */

void DelayLoad_napi_create_async_work
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180006290; Evidence: ev_39cfa43102ea724b85e2f80749171788d2e8cf3bac65954c0163dfee35c50073 */

void DelayLoad_napi_has_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000629c; Evidence: ev_2c45dcc3a066133d3abb97eb273911ac1651aef1f17baf9760f79a45d03029f1 */

void DelayLoad_napi_delete_async_work
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800062a8; Evidence: ev_0a17253ca0a04731ad548a3d85459f29382187497058a3c723c9ba2b6d845f7c */

void DelayLoad_napi_create_double
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800062b4; Evidence: ev_1730cfaeeab4b35f4defd72d3dfac813a1abcfac33ad1357e552b8096067d294 */

void DelayLoad_napi_get_array_length
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000605b(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800062d0; Evidence: ev_42831b1cd81452685c4dcc6cf457d4c85e0fa989e70177f1eff523ff8a404a21 */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_180023000) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_180006720();
  return;
}


/* Address: 0x1800062f0; Evidence: ev_5c4d9b8587f7907da791a860b1f3852c16eb0b3b596572d63d669dc64fcce814 */

void thunk_FUN_18000dfd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800247e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000d564(DVar2);
    p_Var4 = FUN_18000d6a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x1800062f8; Evidence: ev_8df75f363753217ce33ad481af777602cbcd9e48fdc36360ff6899289b330de8 */

void FUN_1800062f8(ulonglong param_1)

{
  code *pcVar1;
  bool bVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  
  do {
    pvVar3 = _malloc_base(param_1);
    if (pvVar3 != (LPVOID)0x0) {
      return;
    }
    bVar2 = FUN_18000c460(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_180001150();
  }
  FUN_18000688c();
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180006334; Evidence: ev_7c383f91dadc74db5feda35c6f9c0db663d5c6047cdd4e828ebcf996f3058315 */

void thunk_FUN_18000dfd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800247e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000d564(DVar2);
    p_Var4 = FUN_18000d6a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000633c; Evidence: ev_c3e631089e20f8b9784f131c9784b45883fdbe96021389c369bd0daa8b57ffd1 */

void thunk_FUN_1800062f8(ulonglong param_1)

{
  code *pcVar1;
  bool bVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  
  do {
    pvVar3 = _malloc_base(param_1);
    if (pvVar3 != (LPVOID)0x0) {
      return;
    }
    bVar2 = FUN_18000c460(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_180001150();
  }
  FUN_18000688c();
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180006350; Evidence: ev_7984d697dd962dcdebe185dffd19ba62e622ba1667966a2448dda4b389f6e23d */

undefined8 * FUN_180006350(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = type_info::vftable;
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000dfd0(param_1);
  }
  return param_1;
}


/* Address: 0x180006380; Evidence: ev_13b3f6167581fbf4aac8bd22e61631b0e62c6322a136e2bc0c4932ce0baef3a8 */

ulonglong FUN_180006380(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_1800064e8(param_3 != 0);
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
      bVar1 = FUN_180006a5c();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800063d0(param_1,param_3);
  return uVar2;
}


/* Address: 0x1800063d0; Evidence: ev_9315ace559ca247796de37048d207f688a3972a4d5b4b22893534a9207933bfa */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800063d0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180006b18(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180024190 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180006cdc(7);
    }
    DAT_180024190 = 1;
    bVar2 = FUN_180006a1c();
    if (bVar2) {
      FUN_180006e28();
      FUN_180006964();
      FUN_180006990();
      uVar4 = FUN_18000c5b0((undefined8 *)&DAT_180017308,(undefined8 *)&DAT_180017328);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_18000c578((undefined8 *)&DAT_1800172f8,(undefined8 *)&DAT_180017300);
        DAT_180024190 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180006cc8();
      if ((*plVar5 != 0) && (uVar6 = FUN_180006be0((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180023bf8 = DAT_180023bf8 + 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x1800064e8; Evidence: ev_a208262ef15ae1206d2039f5e961adcd4fa4a6ece98aa0dfa2c63855cf2c7a5f */

ulonglong FUN_1800064e8(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180023bf8 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180023bf8 = DAT_180023bf8 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180024190 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180006cdc(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180006974();
    FUN_180006e64();
    DAT_180024190 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180006b04();
  }
  return uVar2;
}


/* Address: 0x18000656c; Evidence: ev_c977ca640cd75742c0ef6dd0db1ee5a4a4bc53dc14206be4f22d146cd1497617 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180006629) */
/* WARNING: Removing unreachable block (ram,0x0001800065ba) */
/* WARNING: Removing unreachable block (ram,0x000180006668) */

int FUN_18000656c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_180023bf8 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180006380(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_18000695c();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_18000695c();
      FUN_1800064e8(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180006380(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}


/* Address: 0x1800066a0; Evidence: ev_c603fd3fed01efa56f16d85d28065a289c9dcfab0ada0eb855a6319e88cd6b8f */

void entry(undefined8 param_1,int param_2,longlong param_3)

{
  if (param_2 == 1) {
    FUN_1800068ac();
  }
  FUN_18000656c(param_1,param_2,param_3);
  return;
}


/* Address: 0x1800066e0; Evidence: ev_6ce1310fa47817547a69f0e58c829e63f0e9ef9a9faa0a29e134ab40f4fc03cd */

/* Library Function - Single Match
    __raise_securityfailure
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __raise_securityfailure(_EXCEPTION_POINTERS *param_1)

{
  HANDLE hProcess;
  
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  UnhandledExceptionFilter(param_1);
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000670d. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000409);
  return;
}


/* Address: 0x180006720; Evidence: ev_40c0507af788d6e793defadf812aece4428a667b21ecb9c17ed7f3078e86d9f8 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180006720(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x18000674b;
  FUN_1800067f4((PCONTEXT)&DAT_180023ca0);
  _DAT_180023c10 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180023d38 = puVar3 + 0x40;
  _DAT_180023d20 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180023c00 = 0xc0000409;
  _DAT_180023c04 = 1;
  _DAT_180023c18 = 1;
  DAT_180023c20 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180023000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180023040;
  *(undefined8 *)(puVar3 + -8) = 0x1800067ed;
  DAT_180023d98 = _DAT_180023c10;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_180017508);
  return;
}


/* Address: 0x1800067f4; Evidence: ev_56a5ac379d8cd0a93c50b3c4f3d64cbac746f6db3f98ff2bf7e9a1a36ac3d77e */

void FUN_1800067f4(PCONTEXT param_1)

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


/* Address: 0x180006868; Evidence: ev_47d2f01bc0bd3f20b1883552c51b7a28e846d4aa5313e16569a31a91f1c2bf39 */

undefined8 * FUN_180006868(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x18000688c; Evidence: ev_f14cf341010fed8c4dda9f81dc99e5deb73a674adc04e2b7e896ad30b20384b1 */

void FUN_18000688c(void)

{
  longlong local_28 [5];
  
  FUN_180006868(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_28,&DAT_180021aa0);
}


/* Address: 0x1800068ac; Evidence: ev_1411e52fbdcdefe424aec9c8b176f675975d7784b0cb4ac4c30683bc53f7ad84 */

void FUN_1800068ac(void)

{
  DWORD DVar1;
  _FILETIME local_res8;
  LARGE_INTEGER local_res10;
  _FILETIME local_18 [2];
  
  if (DAT_180023000 == 0x2b992ddfa232) {
    local_res8.dwLowDateTime = 0;
    local_res8.dwHighDateTime = 0;
    GetSystemTimeAsFileTime(&local_res8);
    local_18[0] = local_res8;
    DVar1 = GetCurrentThreadId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    DVar1 = GetCurrentProcessId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    QueryPerformanceCounter(&local_res10);
    DAT_180023000 =
         ((ulonglong)local_res10.s.LowPart << 0x20 ^
          CONCAT44(local_res10.s.HighPart,local_res10.s.LowPart) ^ (ulonglong)local_18[0] ^
         (ulonglong)local_18) & 0xffffffffffff;
    if (DAT_180023000 == 0x2b992ddfa232) {
      DAT_180023000 = 0x2b992ddfa233;
    }
  }
  DAT_180023040 = ~DAT_180023000;
  return;
}


/* Address: 0x18000695c; Evidence: ev_ad6f3aeda46ed607d146097a2f097621f5ddce5a37e56c95e8a6fb985cb72854 */

undefined8 FUN_18000695c(void)

{
  return 1;
}


/* Address: 0x180006964; Evidence: ev_23f63158164ace27193019c7890602ae306d401f73781e882002cc35a3d05318 */

void FUN_180006964(void)

{
                    /* WARNING: Could not recover jumptable at 0x00018000696b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  InitializeSListHead(&DAT_180024170);
  return;
}


/* Address: 0x180006974; Evidence: ev_436ad1ad58abdc8b3856f579ab9c5135e01e77cbde93cd7720c4cbdba6fc4fc4 */

void FUN_180006974(void)

{
  FUN_18000843c((PSLIST_HEADER)&DAT_180024170);
  return;
}


/* Address: 0x180006980; Evidence: ev_dc16254ca0faf2ad75bcaf19a5c911888db8a0d17bf148861e722d6994bd9217 */

undefined * FUN_180006980(void)

{
  return &DAT_180024180;
}


/* Address: 0x180006988; Evidence: ev_6866106b6f2f769b96117bd64938fd79939eb3d5e811ea12141c2eacea0b4c97 */

undefined * FUN_180006988(void)

{
  return &DAT_180024188;
}


/* Address: 0x180006990; Evidence: ev_bf4919e572baae1a2fee940589a6c734683f5a8564e938ec1273b2472973896e */

void FUN_180006990(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_180006980();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_180006988();
  *puVar1 = *puVar1 | 2;
  return;
}


/* Address: 0x1800069ac; Evidence: ev_cbf591a8595a6f652ae53213ab18a47f1bdd5d53d0b103b7e051ca02a55e389a */

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
LAB_1800069da:
    uVar4 = (ulonglong)pvVar3 & 0xffffffffffffff00;
  }
  else {
    do {
      pvVar3 = (void *)0x0;
      LOCK();
      bVar2 = DAT_180024198 == (void *)0x0;
      pvVar1 = StackBase;
      if (!bVar2) {
        pvVar3 = DAT_180024198;
        pvVar1 = DAT_180024198;
      }
      DAT_180024198 = pvVar1;
      UNLOCK();
      if (bVar2) goto LAB_1800069da;
    } while (StackBase != pvVar3);
    uVar4 = CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
  }
  return uVar4;
}


/* Address: 0x1800069e8; Evidence: ev_884837018a18f0485bdd75070e5cf5c57cb1826f4c08b112107fed502d630770 */

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
    uVar2 = FUN_18000695c();
    uVar3 = FUN_18000cc28((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_18000cda8();
  }
  else {
    uVar2 = FUN_180006ea4();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}


/* Address: 0x180006a1c; Evidence: ev_a7a04099c68cf588214e4a00db1fd898e466cf63f1701a8e4b6e565bebd64198 */

bool FUN_180006a1c(void)

{
  undefined8 uVar1;
  
  uVar1 = FUN_180006b54(0);
  return (char)uVar1 != '\0';
}


/* Address: 0x180006a34; Evidence: ev_dd9690670f6bd9bc50027415835033522a9d59f3e568ed7cd1213e21921c06be */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_180008490();
  if (bVar1) {
    bVar1 = FUN_18000d330();
    if (bVar1) {
      return 1;
    }
    FUN_1800084a4();
  }
  return 0;
}


/* Address: 0x180006a5c; Evidence: ev_894d7beae2983d9afaa7830d7ccab6d7c830dbeab4f9304b153099f0cc03e821 */

undefined1 FUN_180006a5c(void)

{
  FUN_18000d344();
  FUN_1800084a4();
  return 1;
}


/* Address: 0x180006a74; Evidence: ev_9c3986214fef75e063b1a77ec7771a30c241297b240d73f78dd3f317b258eda5 */

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


/* Address: 0x180006ad4; Evidence: ev_880c7331eb5711908835c839ca3eb78388d58eb85684e6ceb89243c1e7bafbd0 */

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
    FUN_18000d14c(&DAT_1800241a8);
    return;
  }
  iVar2 = FUN_18000ca00();
  if (iVar2 == 0) {
    FUN_18000c9e4();
  }
  return;
}


/* Address: 0x180006b04; Evidence: ev_7b13c1d82d8af9e55bddc66585647e3fbd621bf3b7223ae555e406654f2cf97c */

void FUN_180006b04(void)

{
  FUN_18000d38c();
  FUN_1800084d0();
  return;
}


/* Address: 0x180006b18; Evidence: ev_9b31a7166ff1dc1d4286c6b4a3a6c00e44c44154b259228d39584a6457ea95d5 */

ulonglong FUN_180006b18(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_1800241a0 = 1;
  }
  FUN_180006ea4();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000d31c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}


/* Address: 0x180006b54; Evidence: ev_6e0ed7c84d7f722307235154b1ba45781ced8ce9c6771800bf74d8e5a26ca84f */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180006b54(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_1800241a1 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180006cdc(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_1800241a8 = 0xffffffffffffffff;
      uRam00000001800241b0 = 0xffffffffffffffff;
      _DAT_1800241b8 = 0xffffffffffffffff;
      _DAT_1800241c0 = 0xffffffffffffffff;
      uRam00000001800241c8 = 0xffffffffffffffff;
      _DAT_1800241d0 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_1800241a8);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_1800241c0), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_1800241a1 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180006be0; Evidence: ev_5fd01403510c467dc0b794b43567d834bae346305e5d814d3bab8fa4d56a42af */

/* WARNING: Removing unreachable block (ram,0x000180006c6d) */
/* WARNING: Enum "SectionFlags": Some values do not have unique names */

ulonglong FUN_180006be0(longlong param_1)

{
  ulonglong uVar1;
  uint7 uVar2;
  IMAGE_SECTION_HEADER *pIVar3;
  
  uVar1 = 0;
  for (pIVar3 = &IMAGE_SECTION_HEADER_180000210; pIVar3 != (IMAGE_SECTION_HEADER *)&DAT_180000350;
      pIVar3 = pIVar3 + 1) {
    if (((ulonglong)(uint)pIVar3->VirtualAddress <= param_1 - 0x180000000U) &&
       (uVar1 = (ulonglong)((pIVar3->Misc).PhysicalAddress + pIVar3->VirtualAddress),
       param_1 - 0x180000000U < uVar1)) goto LAB_180006c56;
  }
  pIVar3 = (IMAGE_SECTION_HEADER *)0x0;
LAB_180006c56:
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


/* Address: 0x180006c78; Evidence: ev_d2a27659c42d134e533d0c152eb7688d5124b5abc39586acbc0dcbfc6140b21a */

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
    DAT_180024198 = 0;
    UNLOCK();
  }
  return;
}


/* Address: 0x180006c9c; Evidence: ev_221493d89e1bfbe64f33d934019fdc0e46d57750ae4eac9840b150149df1dcfe */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_1800241a0 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180006cc8; Evidence: ev_bef9aa659c1556a3a80f5a3acb7b0571ddadf667f49626552b3fd629be4d1031 */

undefined * FUN_180006cc8(void)

{
  return &DAT_180024c98;
}


/* Address: 0x180006cd0; Evidence: ev_1707017ffdd4cbc9adbca53a7d3b68c1bb7d2618b308006aaa8f23762e9e8d88 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180006cd0(void)

{
  _DAT_1800241d8 = 0;
  return;
}


/* Address: 0x180006cdc; Evidence: ev_c586813ad16677e2948d466a0fd8414d9ffe345c973c8ed2e421897f4c5697b9 */

void FUN_180006cdc(undefined4 param_1)

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
  *(undefined8 *)(puVar4 + -8) = 0x180006d10;
  FUN_180006cd0();
  *(undefined8 *)(puVar4 + -8) = 0x180006d21;
  FUN_180015110((undefined1 (*) [32])local_4d8,0,0x4d0);
  *(undefined8 *)(puVar4 + -8) = 0x180006d2b;
  RtlCaptureContext(local_4d8);
  *(undefined8 *)(puVar4 + -8) = 0x180006d45;
  FunctionEntry = RtlLookupFunctionEntry(local_3e0,&local_res10,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    *(undefined8 *)(puVar4 + 0x38) = 0;
    *(undefined1 **)(puVar4 + 0x30) = local_res18;
    *(undefined1 **)(puVar4 + 0x28) = local_res20;
    *(undefined1 **)(puVar4 + 0x20) = local_4d8;
    *(undefined8 *)(puVar4 + -8) = 0x180006d89;
    RtlVirtualUnwind(0,local_res10,local_3e0,FunctionEntry,*(PCONTEXT *)(puVar4 + 0x20),
                     *(PVOID **)(puVar4 + 0x28),*(PDWORD64 *)(puVar4 + 0x30),
                     *(PKNONVOLATILE_CONTEXT_POINTERS *)(puVar4 + 0x38));
  }
  local_440 = &stack0x00000008;
  *(undefined8 *)(puVar4 + -8) = 0x180006dbb;
  FUN_180015110((undefined1 (*) [32])(puVar4 + 0x50),0,0x98);
  *(undefined8 *)(puVar4 + 0x60) = unaff_retaddr;
  *(undefined4 *)(puVar4 + 0x50) = 0x40000015;
  *(undefined4 *)(puVar4 + 0x54) = 1;
  *(undefined8 *)(puVar4 + -8) = 0x180006ddd;
  BVar2 = IsDebuggerPresent();
  *(undefined1 **)(puVar4 + 0x40) = puVar4 + 0x50;
  *(undefined1 **)(puVar4 + 0x48) = local_4d8;
  *(undefined8 *)(puVar4 + -8) = 0x180006dfa;
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  *(undefined8 *)(puVar4 + -8) = 0x180006e05;
  LVar3 = UnhandledExceptionFilter((_EXCEPTION_POINTERS *)(puVar4 + 0x40));
  if ((LVar3 == 0) && (BVar2 != 1)) {
    *(undefined8 *)(puVar4 + -8) = 0x180006e16;
    FUN_180006cd0();
  }
  return;
}


/* Address: 0x180006e28; Evidence: ev_98d157b3b8bc224005beb0c574aeb08e38d9c89a2629315f4b7875225d43e43d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006e28(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001ff28; puVar1 < &DAT_18001ff28; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180006e64; Evidence: ev_7b85aa1537d9d5937c355597284ebfb2ef903bc2adf4a8eb091625cd10b473a6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006e64(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_18001ff38; puVar1 < &DAT_18001ff38; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180006ea0; Evidence: ev_24fa676791e9c302f1fe9b27b5d513daf1f99d41a7c2083a109ec8bbc5101916 */

void _guard_check_icall(void)

{
  return;
}


/* Address: 0x180006ea4; Evidence: ev_c5dd919cc54cfed5624a7ef9e5356a385d41a2a480f76c3ab1d80424d9d49020 */

/* WARNING: Removing unreachable block (ram,0x000180006f95) */
/* WARNING: Removing unreachable block (ram,0x000180006f85) */
/* WARNING: Removing unreachable block (ram,0x000180006f60) */
/* WARNING: Removing unreachable block (ram,0x000180006ede) */
/* WARNING: Removing unreachable block (ram,0x000180006ebc) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180006ea4(void)

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
    DAT_180023060 = 0x8000;
    DAT_180023068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_1800241e0 = DAT_1800241e0 | 1;
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
      DAT_1800241e0 = DAT_1800241e0 | 2;
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
  DAT_180023058 = 1;
  DAT_18002305c = 2;
  uVar9 = DAT_180023050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_180023058 = 2;
    DAT_18002305c = 6;
    uVar9 = DAT_180023050 & 0xffffffffffffffee;
  }
  DAT_180023050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_180023058 = 3;
      uVar7 = DAT_180023050;
      uVar5 = DAT_18002305c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_180023058 = 5;
        uVar7 = DAT_180023050 & 0xfffffffffffffffd;
        uVar5 = DAT_18002305c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18002305c = DAT_18002305c | 0x68;
          DAT_180023058 = 6;
          uVar7 = DAT_180023050 & 0xffffffffffffffd9;
          uVar5 = DAT_18002305c;
        }
      }
      DAT_18002305c = uVar5;
      DAT_180023050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_180023050 = DAT_180023050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_1800241dc = (uint)uVar12 & 0x400ff;
        DAT_180023050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_180023050;
        if (1 < (byte)_DAT_1800241dc) {
          DAT_180023050 = DAT_180023050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_180023050 = DAT_180023050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}


/* Address: 0x18000713c; Evidence: ev_8d38a44ef18a3114e112f02e997048665c32245c39c8d3fcfba5033aeaf089ad */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180024c94 != 0;
}


/* Address: 0x180007150; Evidence: ev_012556dccf751eddadfcfb5619e718753dc78ab9a0bdbec716954d68461d206b */

undefined8 * FUN_180007150(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180007f48((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x18000718c; Evidence: ev_eb052417dddf94e69df9426eecfb48c262ef9aa1c53cb43cb303235b2b968d01 */

undefined8 * FUN_18000718c(undefined8 *param_1,longlong param_2)

{
  longlong local_18;
  undefined1 local_10;
  
  local_10 = 1;
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  local_18 = param_2;
  FUN_180007f48(&local_18,param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x1800071d4; Evidence: ev_ff50f352bbf38c95820cab4337eb802f96556f0321633cc45d1559c8685b3351 */

undefined8 * FUN_1800071d4(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180007f48((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::logic_error::vftable;
  return param_1;
}


/* Address: 0x180007210; Evidence: ev_e7f04a36cd7b03aec525e77d16be8926e3c77d28283aed98ffb358175f114b4a */

void FUN_180007210(longlong param_1)

{
  longlong local_28 [5];
  
  FUN_18000718c(local_28,param_1);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_28,&DAT_180021b00);
}


/* Address: 0x180007234; Evidence: ev_62e580d9d70a4cc9feb7511ed177e8bfb35f1ffc45d23854de04c3065210aa8d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180007234(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180008548();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180007288; Evidence: ev_b55d0e0c4478f2dc3605bcb2a80c769ea10af3753e499eadc03b683602dcf0be */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180007288(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180008548();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x1800072dc; Evidence: ev_9891325d430e29a8d4feca22754e059cec353d43a5284e2d92bf9c0735718247 */

longlong FUN_1800072dc(longlong param_1,int param_2)

{
  uint uVar1;
  longlong lVar2;
  
  uVar1 = *(uint *)(param_1 + 0xc);
  do {
    if (uVar1 == 0) {
      return 0;
    }
    uVar1 = uVar1 - 1;
    lVar2 = FUN_180008548();
    lVar2 = (longlong)*(int *)(param_1 + 0x10) +
            *(longlong *)(lVar2 + 0x60) + (ulonglong)uVar1 * 0x14;
  } while ((param_2 <= *(int *)(lVar2 + 4)) || (*(int *)(lVar2 + 8) < param_2));
  return lVar2;
}


/* Address: 0x180007340; Evidence: ev_b2b210988bd1c3b324e93e80704f75545c65072cc9500b140628038ac46f7518 */

longlong FUN_180007340(byte *param_1,byte *param_2,longlong param_3,int param_4,char param_5)

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
    pbVar11 = pbVar11 + -(longlong)(char)(&DAT_1800175b0)[bVar4 & 0xf];
    *(uint *)(param_2 + 4) = *(uint *)(pbVar11 + -4) >> ((&DAT_1800175c0)[bVar4 & 0xf] & 0x1f);
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
      pbVar11 = (byte *)(param_3 + *(int *)pbVar11) + -(longlong)(char)(&DAT_1800175b0)[uVar8];
      puVar1 = (uint *)(pbVar11 + -4);
      if (*puVar1 >> ((&DAT_1800175c0)[uVar8] & 0x1f) != 0) {
        do {
          iVar6 = *(int *)pbVar11;
          pbVar2 = pbVar11 + 4;
          pbVar11 = pbVar11 + 8;
          if (iVar6 == param_4) {
            *(undefined4 *)(param_2 + 0x10) = *(undefined4 *)pbVar2;
            break;
          }
          uVar9 = uVar9 + 1;
        } while (uVar9 < *puVar1 >> ((&DAT_1800175c0)[uVar8] & 0x1f));
      }
    }
  }
  else {
    *(undefined4 *)(param_2 + 0x10) = *(undefined4 *)pbVar11;
  }
  if ((bVar3 & 1) != 0) {
    bVar3 = *pbVar10;
    pbVar10 = pbVar10 + -(longlong)(char)(&DAT_1800175b0)[bVar3 & 0xf];
    *(uint *)(param_2 + 0x14) = *(uint *)(pbVar10 + -4) >> ((&DAT_1800175c0)[bVar3 & 0xf] & 0x1f);
  }
  return (longlong)pbVar10 - (longlong)param_1;
}


/* Address: 0x18000746c; Evidence: ev_2080bf3bc895c0d21dcc19b8cd71b0db41acdd1717e02679231ed54e8afca884 */

bool FUN_18000746c(ulonglong *param_1,longlong param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = FUN_18000873c(param_2,param_1);
  lVar2 = FUN_1800072dc(param_2,iVar1);
  return lVar2 != 0;
}


/* Address: 0x180007498; Evidence: ev_5553a75729957796f1c0f487e03b32d00488f29ef415e00e71d503ab943a7971 */

byte FUN_180007498(undefined8 param_1,byte *param_2)

{
  return *param_2 & 1;
}


/* Address: 0x1800074a0; Evidence: ev_7204cd1ec1204921b7d5ee4736d703a5789d9592e26191f5b222f434c62b9429 */

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
  
  plVar2 = FUN_180007538((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000873c((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_1800072dc((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_18000af64(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}


/* Address: 0x180007504; Evidence: ev_da51fa259cee0eb7a8564cac732a3de9ef7c901523732aac47aee0090f78f783 */

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
  FUN_18000b0f0((longlong *)local_res8,(ulonglong *)param_2,(longlong)param_3,-1);
  return;
}


/* Address: 0x180007538; Evidence: ev_ffe0240acb8f6ae321f113089053502da90b9a24faf529c67c78fa88035c0a42 */

longlong * FUN_180007538(longlong *param_1,ulonglong *param_2,longlong param_3,longlong *param_4)

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
  iVar4 = FUN_18000873c(param_3,param_2);
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
        if ((longlong)*piVar8 == (ulonglong)p_Var5->BeginAddress) goto code_r0x0001800075ef;
        uVar6 = (int)uVar7 + 1;
        uVar7 = (ulonglong)uVar6;
        piVar8 = piVar8 + 5;
      } while (uVar6 < uVar2);
    }
  } while (uVar2 <= (uint)uVar7);
code_r0x0001800075ef:
  *param_4 = *(longlong *)((longlong)*(int *)(lVar10 + 0x10 + uVar7 * 0x14) + *param_1);
  return param_4;
}


/* Address: 0x180007624; Evidence: ev_00892c1407c25328bdc4bf6a5a65d515bfdbfc9a29a53d56d35dbdc77221f4d3 */

longlong * FUN_180007624(longlong *param_1,undefined8 param_2,byte *param_3,longlong *param_4)

{
  *param_4 = *param_1;
  if ((*param_3 & 1) != 0) {
    *param_4 = *(longlong *)((ulonglong)*(uint *)(param_3 + 0x14) + *param_1);
  }
  return param_4;
}


/* Address: 0x180007648; Evidence: ev_7a59163af3f6ebaa94e5a4e04125f5ce2cbd3770a5bf67c7eedce432070ff2c7 */

undefined8 *
FUN_180007648(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
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
  iVar5 = FUN_18000873c(param_5,param_4);
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
LAB_1800076d0:
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
  goto LAB_1800076d0;
}


/* Address: 0x180007780; Evidence: ev_17a10413626c3758aa257722360a0e8b0363b566375150d1ff0f832678363d25 */

undefined4 * FUN_180007780(undefined4 *param_1,int *param_2,int param_3)

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
  FUN_180007b24((longlong)param_2,(longlong)&local_38);
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
      lVar8 = (longlong)(char)(&DAT_1800175b0)[*pbVar10 & 0xf];
      bVar1 = (&DAT_1800175c0)[*pbVar10 & 0xf];
      pbVar5 = pbVar10 + -lVar8;
      uVar3 = *(uint *)(pbVar5 + -4);
      *(byte **)(param_2 + 2) = pbVar5;
      param_2[6] = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_1800175b0)[*pbVar5 & 0xf];
      bVar1 = (&DAT_1800175c0)[*pbVar5 & 0xf];
      pbVar5 = pbVar10 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar5 + -4);
      *(byte **)(param_2 + 2) = pbVar5;
      param_2[7] = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_1800175c0)[*pbVar5 & 0xf];
      pbVar10 = pbVar10 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_1800175b0)[*pbVar5 & 0xf]) -
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
  FUN_180007b24((longlong)param_2,(longlong)&local_38);
  *(int **)param_1 = param_2;
  param_1[2] = iVar11;
  param_1[3] = uStack_4c;
  *(int **)(param_1 + 4) = param_2;
  *(ulonglong *)(param_1 + 6) = CONCAT44(uStack_3c,iVar6 + 1);
  return param_1;
}


/* Address: 0x180007900; Evidence: ev_dc5da5b89abf3feb5be871aa90c4232602d5e8c1cdae1a892f8f145c58b44598 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180007900(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,ULONG_PTR param_6,int param_7,undefined8 param_8,
                  undefined8 param_9,undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_18000a8e0;
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


/* Address: 0x180007a04; Evidence: ev_9937f8d9e721e870bcb66b3686223e5019d8b81820ac9e2f35ad52311c85da4b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180007a04(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,undefined8 param_6,int param_7,int param_8,longlong param_9,
                  undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_18000aad0;
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


/* Address: 0x180007b24; Evidence: ev_acda012c6d27ce4253dc7e59b505ce59735d94d6e4512bd57aae255df76532ae */

void FUN_180007b24(longlong param_1,longlong param_2)

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
  pbVar7 = pbVar9 + -(longlong)(char)(&DAT_1800175b0)[*pbVar9 & 0xf];
  *(uint *)(param_1 + 0x18) = *(uint *)(pbVar7 + -4) >> ((&DAT_1800175c0)[*pbVar9 & 0xf] & 0x1f);
  *(byte **)(param_1 + 8) = pbVar7;
  bVar1 = (&DAT_1800175c0)[*pbVar7 & 0xf];
  pbVar7 = pbVar7 + -(longlong)(char)(&DAT_1800175b0)[*pbVar7 & 0xf];
  uVar3 = *(uint *)(pbVar7 + -4);
  *(byte **)(param_1 + 8) = pbVar7;
  *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
  bVar1 = (&DAT_1800175c0)[*pbVar7 & 0xf];
  pbVar7 = pbVar7 + -(longlong)(char)(&DAT_1800175b0)[*pbVar7 & 0xf];
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
      lVar8 = (longlong)(char)(&DAT_1800175b0)[*pbVar9 & 0xf];
      bVar1 = (&DAT_1800175c0)[*pbVar9 & 0xf];
      pbVar7 = pbVar9 + -lVar8;
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x18) = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_1800175b0)[*pbVar7 & 0xf];
      bVar1 = (&DAT_1800175c0)[*pbVar7 & 0xf];
      pbVar7 = pbVar9 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_1800175c0)[*pbVar7 & 0xf];
      pbVar9 = pbVar9 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_1800175b0)[*pbVar7 & 0xf]) -
                        lVar8);
      uVar3 = *(uint *)(pbVar9 + -4);
      *(byte **)(param_1 + 8) = pbVar9;
      *(uint *)(param_1 + 0x20) = uVar3 >> (bVar1 & 0x1f);
      uVar5 = *(undefined4 *)pbVar9;
      pbVar9 = pbVar9 + 4;
      *(byte **)(param_1 + 8) = pbVar9;
      *(undefined4 *)(param_1 + 0x24) = uVar5;
      lVar8 = (longlong)(char)(&DAT_1800175b0)[*pbVar9 & 0xf];
      bVar1 = (&DAT_1800175c0)[*pbVar9 & 0xf];
      pbVar7 = pbVar9 + -lVar8;
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x18) = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_1800175b0)[*pbVar7 & 0xf];
      bVar1 = (&DAT_1800175c0)[*pbVar7 & 0xf];
      pbVar7 = pbVar9 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_1800175c0)[*pbVar7 & 0xf];
      pbVar9 = pbVar9 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_1800175b0)[*pbVar7 & 0xf]) -
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


/* Address: 0x180007d10; Evidence: ev_4983eb52d4268441f675cc79cf98951b31d56748bd78c1fda3ee1afb1e7d0cf1 */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_180008548();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_180008548();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_180008548();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}


/* Address: 0x180007d4c; Evidence: ev_446aa93470760d76a014ceaef1c9f1f676d02fbcf996b892dfff06438fb0850b */

void FUN_180007d4c(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180008548();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180008548();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180008548();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180007da0; Evidence: ev_507ccc284772b40cf983b49b34fc7a74ef5e5d27208e83e8929abd0e8172b56c */

undefined8 FUN_180007da0(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  return *(undefined8 *)(lVar1 + 0x60);
}


/* Address: 0x180007db4; Evidence: ev_4f07cf5196337951c827d71f875edcbc63fcf131327fea7d3ee2415d00e57d61 */

undefined8 FUN_180007db4(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  return *(undefined8 *)(lVar1 + 0x68);
}


/* Address: 0x180007dc8; Evidence: ev_440a350291c5bea5084e374d790892d143402cb0d4c458d5bfb4696bc472a63d */

void FUN_180007dc8(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  *(undefined8 *)(lVar1 + 0x60) = param_1;
  return;
}


/* Address: 0x180007de0; Evidence: ev_6c24e70b6bc2995ae82c662141e9f9b24489a1f86ee842873983f20c73626627 */

void FUN_180007de0(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  *(undefined8 *)(lVar1 + 0x68) = param_1;
  return;
}


/* Address: 0x180007df8; Evidence: ev_e69725c0395f0f91e904f6b01ff2dd2b9311b176abbe18cc1c524f05924bbe84 */

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
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180008548();
  thunk_FUN_18000a1e0(param_1,&local_res8,param_3,param_4,
                      (_s_FuncInfo *)
                      ((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),0,0,0);
  return;
}


/* Address: 0x180007e80; Evidence: ev_3d9c785b66c30fa785c64235cc25726e56bb7dbc17b27c173f4741479833cbe2 */

void FUN_180007e80(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

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
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180008548();
  FUN_180007340((byte *)((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),
                (byte *)local_28,*(longlong *)(param_4 + 8),**(int **)(param_4 + 0x10),'\0');
  FUN_18000a6cc(param_1,&local_res8,param_3,param_4,local_28,0,0,0);
  return;
}


/* Address: 0x180007f48; Evidence: ev_9e8040f104d587c272e7c5ef56c7b1be6ec2c89b5ce33434b5d89e28f2a80b83 */

void FUN_180007f48(longlong *param_1,longlong *param_2)

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
      FUN_18000d420(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_18000dfd0((LPVOID)0x0);
  }
  return;
}


/* Address: 0x180007fc8; Evidence: ev_856ca5fd0180b54ea6e490fbc0212d3056b32eae385698fdbe251158b7013559 */

void FUN_180007fc8(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_18000dfd0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}


/* Address: 0x180007ff0; Evidence: ev_cbe314e81cbd43bec00afc308b4270b0386aac1a55bdbae61284b7ef5718f65a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180007ff0(int *param_1)

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
      FUN_180008064(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}


/* Address: 0x180008064; Evidence: ev_8aa6fdd3bf7e065b8e9081e7362da2a2c901e7d16f6a7a818998eadabf77f121 */

void FUN_180008064(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE)

{
                    /* WARNING: Could not recover jumptable at 0x000180008064. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180008068; Evidence: ev_cba32d339c1c11dc2dfc6f57b714ae52228415f57faa3cfb7dec4ea718eb568a */

/* Library Function - Single Match
    _IsExceptionObjectToBeDestroyed
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _IsExceptionObjectToBeDestroyed(longlong param_1)

{
  longlong lVar1;
  longlong *plVar2;
  
  lVar1 = FUN_180008548();
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


/* Address: 0x180008098; Evidence: ev_e6cb2228832bf34c41341be8300eb0e4990f7b9aaa84d10462c5a33aee8cc273 */

longlong FUN_180008098(longlong param_1,int *param_2)

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


/* Address: 0x1800080c0; Evidence: ev_2cbb86fd21ee5f8dec1e1d66d0aabd910f524bcb68d7593cbfc1a3b84dd60c17 */

undefined8 FUN_1800080c0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180008548();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180008548();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180008548();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180008548();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_18000d39c();
  }
  return 0;
}


/* Address: 0x180008128; Evidence: ev_f33fecb90bb9636a0029a7173086c2ac1fb22f0d64dc2e367f1753c5f387eac5 */

void Unwind_180008128(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_18000d39c();
}


/* Address: 0x180008134; Evidence: ev_b7f3521fb0fa668cd111343778cde1340079bed78bd6eeeba08709ed87a29cf7 */

undefined8 FUN_180008134(void)

{
  return DAT_180024270;
}


/* Address: 0x180008140; Evidence: ev_105bf34f13496281992a23714b98c01992dfd23d54e33e0af902a71958ec0e97 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008140(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_180008134();
  if (pcVar1 != (code *)0x0) {
    (*pcVar1)();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000815c; Evidence: ev_08e9b84188710040301e06e1e2ea56ed4736a3c717fac8cb43229658b8b34503 */

undefined8 FUN_18000815c(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

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
          if (iVar4 < 1) goto LAB_18000828a;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_180014d50(0x180017708), (int)uVar5 != 0)) {
          FUN_180007ff0((int *)param_1);
        }
        FUN_18000b880();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_18000b8b0();
      }
LAB_18000828a:
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


/* Address: 0x18000837c; Evidence: ev_3bc9ed52239269c36e51dd6b27fc0eec3ec918b1472ccf0cde0ba544eecfa087 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000837c(longlong *param_1,byte *param_2)

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


/* Address: 0x180008424; Evidence: ev_5057e04d8e5ecec7dcc8c5699c212ecc72b7e325780fb17ea6da3184e6c754f4 */

int FUN_180008424(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}


/* Address: 0x18000843c; Evidence: ev_9d72ab7ff355ee79455c257c5276305298fb3664084e92b1fd87140cc79e84fa */

void FUN_18000843c(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_18000dfd0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}


/* Address: 0x180008468; Evidence: ev_2cd3387766dc36c71532ca6a40d085a53fa638c037962c95acc1f3fd404370f3 */

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


/* Address: 0x180008490; Evidence: ev_06267bd202d70dba7f98f972d6a94222470c9cd1a50faaf454537f5206019d32 */

bool FUN_180008490(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180008564();
  return pvVar1 != (LPVOID)0x0;
}


/* Address: 0x1800084a4; Evidence: ev_124705e771a836fd5f888ba5ca4b2a3e372369dd97305dcba7979f0c2d0a7e7e */

undefined1 FUN_1800084a4(void)

{
  FUN_180008500();
  return 1;
}


/* Address: 0x1800084b4; Evidence: ev_9164fa8d945f0c3594e428e951bc3462232f84fe2c2750fbb21032162c389f2c */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_180008678();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x1800084d0; Evidence: ev_dc72aeb4d5885bc665705ab44f8147ba93e383f293b251f3cdb86e18ef38dd51 */

undefined1 FUN_1800084d0(void)

{
  FUN_180008678();
  return 1;
}


/* Address: 0x1800084e0; Evidence: ev_f4a0434c6d1dd160845737ef9f55b39a25563b2a5e3e9223e558ddef163c70d1 */

void FUN_1800084e0(undefined *param_1)

{
  if ((param_1 != (undefined *)0x0) && (param_1 != &DAT_1800241f0)) {
    thunk_FUN_18000dfd0(param_1);
  }
  return;
}


/* Address: 0x180008500; Evidence: ev_ebe87886da6b82d488d57d61fcb34816f95306b3ecee75c96e54731f7b55c3d6 */

void FUN_180008500(void)

{
  undefined *puVar1;
  
  if (DAT_180023070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180023070);
    __vcrt_FlsSetValue(DAT_180023070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_1800241f0)) {
      thunk_FUN_18000dfd0(puVar1);
    }
  }
  return;
}


/* Address: 0x180008548; Evidence: ev_bf5e861bd096b5475ef7cd4bcb20214cd5703c245a7dd1dc83d28ea4f5e7e04b */

void FUN_180008548(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180008564();
  if (pvVar1 != (LPVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180008564; Evidence: ev_2ba0f74c0ebc0494bffe37b81490f32131007655fd4d526a24eca1b8f4d67be1 */

LPVOID FUN_180008564(void)

{
  DWORD dwErrCode;
  int iVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  LPVOID pvVar4;
  
  if (DAT_180023070 == 0xffffffff) {
    pvVar3 = (LPVOID)0x0;
  }
  else {
    dwErrCode = GetLastError();
    pvVar2 = (LPVOID)__vcrt_FlsGetValue(DAT_180023070);
    pvVar4 = (LPVOID)0x0;
    pvVar3 = pvVar4;
    if (((pvVar2 != (LPVOID)0xffffffffffffffff) && (pvVar3 = pvVar2, pvVar2 == (LPVOID)0x0)) &&
       (iVar1 = __vcrt_FlsSetValue(DAT_180023070,(LPVOID)0xffffffffffffffff), pvVar3 = pvVar4,
       iVar1 != 0)) {
      pvVar3 = _calloc_base(1,0x80);
      if ((pvVar3 == (LPVOID)0x0) || (iVar1 = __vcrt_FlsSetValue(DAT_180023070,pvVar3), iVar1 == 0))
      {
        __vcrt_FlsSetValue(DAT_180023070,(LPVOID)0x0);
        pvVar2 = pvVar3;
      }
      else {
        *(undefined4 *)((longlong)pvVar3 + 0x78) = 0xfffffffe;
        pvVar2 = pvVar4;
        pvVar4 = pvVar3;
      }
      thunk_FUN_18000dfd0(pvVar2);
      pvVar3 = pvVar4;
    }
    SetLastError(dwErrCode);
  }
  return pvVar3;
}


/* Address: 0x180008630; Evidence: ev_7dfa9349b8e923bb4b7081e2aee2a8b8ea9993fd09e95f1672ce6c576c29c35e */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_1800084e0);
  DAT_180023070 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_1800241f0);
    if (iVar2 != 0) {
      _DAT_180024268 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_180008678();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}


/* Address: 0x180008678; Evidence: ev_d58f0494a0564234cfe36e4de67e4648fda47c62aee82c6cc80eb5837d5d88a4 */

undefined1 FUN_180008678(void)

{
  if (DAT_180023070 != -1) {
    __vcrt_FlsFree(DAT_180023070);
    DAT_180023070 = -1;
  }
  return 1;
}


/* Address: 0x1800086a0; Evidence: ev_d9f1efb465469c60f0b729291356c9ce16c94186f8c2920bc3ddf9bb5a02e43b */

void FUN_1800086a0(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + *param_1) == -2) {
    FUN_18000874c(param_3,(longlong)param_2,*param_2);
  }
  return;
}


/* Address: 0x1800086c8; Evidence: ev_ee8a315ce89b396e0040b851133bed6cd6c8e14dec3f169ad140e5d1b6f7ea81 */

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
  
  plVar1 = FUN_180007538(param_1,param_2,param_3,local_res18);
  return *(undefined4 *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1);
}


/* Address: 0x1800086f4; Evidence: ev_fe1a8c3ac11d57e19aa71a384de91a8c481149f6accd5016af5fcaa38b933a9f */

void FUN_1800086f4(longlong *param_1,longlong param_2,undefined4 param_3)

{
  *(undefined4 *)((longlong)*(int *)(param_2 + 0x1c) + *param_1) = param_3;
  return;
}


/* Address: 0x180008700; Evidence: ev_96b25cfe4f482058a1bca0155bc988551f755cdd57e909d78eb9784be82555b9 */

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
  
  plVar1 = FUN_180007538(param_1,param_2,param_3,local_res18);
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) < param_4) {
    *(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) = param_4;
  }
  return;
}


/* Address: 0x18000873c; Evidence: ev_f8bf6281aadfcf36b6723fda249162fa46fae549eba2b130b7d5ac58ebe794bd */

void FUN_18000873c(longlong param_1,ulonglong *param_2)

{
  FUN_18000874c(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x180008744; Evidence: ev_ac577857955702cb4585475132b0a0ca7b12878a3145241e2b2d5b0a47666693 */

void FUN_180008744(longlong param_1,ulonglong *param_2)

{
  FUN_1800087b4(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x18000874c; Evidence: ev_0348763516c1bb8ebf3e7c44cae7d1846a4d250fd4be07d4901db5a28f67d6a3 */

undefined4 FUN_18000874c(longlong param_1,longlong param_2,ulonglong param_3)

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


/* Address: 0x1800087b4; Evidence: ev_866e91e47735b4021369e72421845f6a218e856df3c03c803ccf2c9e0db9d3f8 */

int FUN_1800087b4(longlong param_1,longlong param_2,ulonglong param_3)

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
    pbVar6 = pbVar6 + -(longlong)(char)(&DAT_1800175b0)[uVar2];
    puVar1 = (uint *)(pbVar6 + -4);
    if (*puVar1 >> ((&DAT_1800175c0)[uVar2] & 0x1f) != 0) {
      do {
        pbVar7 = pbVar6 + -(longlong)(char)(&DAT_1800175b0)[*pbVar6 & 0xf];
        uVar4 = uVar4 + (*(uint *)(pbVar7 + -4) >> ((&DAT_1800175c0)[*pbVar6 & 0xf] & 0x1f));
        if (param_3 < (ulonglong)uVar4 + (ulonglong)**(uint **)(param_2 + 0x10) +
                      *(longlong *)(param_2 + 8)) break;
        uVar5 = uVar5 + 1;
        pbVar6 = pbVar7 + -(longlong)(char)(&DAT_1800175b0)[*pbVar7 & 0xf];
        iVar3 = (*(uint *)(pbVar6 + -4) >> ((&DAT_1800175c0)[*pbVar7 & 0xf] & 0x1f)) - 1;
      } while (uVar5 < *puVar1 >> ((&DAT_1800175c0)[uVar2] & 0x1f));
      if (uVar5 != 0) {
        return iVar3;
      }
      return -1;
    }
  }
  return -1;
}


/* Address: 0x1800088a4; Evidence: ev_6e1c05ce4af6f4f5b2fc9ac15cca6105dda2133fd2fd8075e63f95733c35613d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_1800088a4(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
    lVar2 = FUN_180007da0();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180007da0();
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
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_1800241e8 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180007db4();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180007db4();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_180008a56;
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
                  FUN_180008098(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_1800154d0(param_2,pauVar3,(longlong)iVar1);
        goto LAB_180008a56;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_1800154d0(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_180008a56;
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
    lVar2 = (*(code *)DAT_1800241e8)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_180008098(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_180008a56:
  return (char)uVar6;
}


/* Address: 0x180008a98; Evidence: ev_3367265c5b19c7956bb910b5ab485c2deccb3ccf1cd34115c5f52201cd364835 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_180008a98(longlong param_1,undefined1 (*param_2) [32],longlong param_3,byte *param_4)

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
    lVar2 = FUN_180007da0();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 8);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180007da0();
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
  if ((((*(byte *)(param_3 + 4) & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_1800241e8 == 0))
  {
    if ((*(byte *)(param_3 + 4) & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180007db4();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180007db4();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_180008c4d;
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
                  FUN_180008098(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_1800154d0(param_2,pauVar3,(longlong)iVar1);
        goto LAB_180008c4d;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_1800154d0(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_180008c4d;
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
    lVar2 = (*(code *)DAT_1800241e8)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_180008098(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_180008c4d:
  return (char)uVar6;
}


/* Address: 0x180008c90; Evidence: ev_ea4b547076d996a7888e648654a24976861458e844b03d1c32db8fcd1270e0a2 */

void FUN_180008c90(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
  cVar1 = FUN_1800088a4(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180008098(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180007db4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000b6a8(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180008098(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180007db4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000b6b4(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x180008d50; Evidence: ev_27b3fa16695a3de50e9e3286bfb80730827d6a6ecaf6504adbbd6a4f43d5773c */

void FUN_180008d50(longlong param_1,undefined1 (*param_2) [32],longlong param_3,byte *param_4)

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
  cVar1 = FUN_180008a98(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180008098(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180007db4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000b6a8(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180008098(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180007db4();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000b6b4(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x180008e14; Evidence: ev_ca9315d15ad0ad658997b1756fc304484237a520cb1eecf2b9d435cb049ebc0c */

void FUN_180008e14(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
  pauVar4 = (undefined1 (*) [32])FUN_180007538(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_180008c90(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180007da0();
  FUN_180007900(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x180008eec; Evidence: ev_a1ce2dcf55664db11affff52a9ffb845f55ab9cb4c28c4eb1624974efcb208ca */

void FUN_180008eec(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
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
  pauVar4 = (undefined1 (*) [32])FUN_180007624(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_180008d50(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0x10);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180007da0();
  FUN_180007a04(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,iVar2,
                param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x180008fc4; Evidence: ev_206ab1b81b2d9b528e13595f3c1d1970d2966585c006b8a70e2fa520c8003c0c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180008fc4(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,uint *param_5
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
  
  local_58 = DAT_180023000 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar5 = FUN_18000b3fc(param_2,param_4,(longlong)param_5);
  if ((-2 < iVar5) && (iVar5 < (int)param_5[1])) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar7 = FUN_180008548();
      if (*(longlong *)(lVar7 + 0x20) == 0) {
        return;
      }
      lVar7 = FUN_180008548();
      param_1 = *(int **)(lVar7 + 0x20);
      lVar7 = FUN_180008548();
      local_100 = *(ULONG_PTR *)(lVar7 + 0x28);
      FUN_180007de0(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_1800094bf;
      lVar7 = FUN_180008548();
      if (*(longlong *)(lVar7 + 0x38) != 0) {
        lVar7 = FUN_180008548();
        piVar11 = *(int **)(lVar7 + 0x38);
        lVar7 = FUN_180008548();
        *(undefined8 *)(lVar7 + 0x38) = 0;
        cVar3 = FUN_18000b498((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          uVar8 = FUN_18000b580(piVar11);
          if ((char)uVar8 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_18000d39c();
          }
          FUN_180007ff0(param_1);
          FUN_18000a8bc(&local_c8);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(&local_c8,&DAT_180021b68);
        }
      }
    }
    uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
    local_a8 = param_4[1];
    local_b0 = param_5;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
      if (param_5[3] != 0) {
        FUN_180007648(&local_90,&local_b0,iVar5,param_4,(longlong)param_5);
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
                  lVar7 = FUN_180007db4();
                  piVar11 = (int *)(lVar7 + 4 + (longlong)iVar13);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_180007db4();
                  for (iVar13 = *(int *)(lVar7 + iVar13); 0 < iVar13; iVar13 = iVar13 + -1) {
                    iVar2 = *piVar11;
                    lVar7 = FUN_180007db4();
                    uVar9 = FUN_180009f80((byte *)&local_70,(byte *)(iVar2 + lVar7),
                                          *(byte **)(param_1 + 0xc));
                    if ((int)uVar9 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_180008e14((ULONG_PTR)param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,
                                    (byte *)&local_70,(byte *)(iVar2 + lVar7),
                                    in_stack_fffffffffffffed0);
                      goto LAB_18000932f;
                    }
                    piVar11 = piVar11 + 1;
                  }
                  uVar12 = (int)uVar8 + 1;
                  uVar8 = (ulonglong)uVar12;
                } while (uVar12 != local_d8);
              }
            }
LAB_18000932f:
            uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar6 = uVar6 + 1;
          } while (uVar6 < local_78);
        }
      }
      if ((0x19930520 < (*param_5 & 0x1fffffff)) &&
         (((uVar6 = param_5[8], uVar6 != 0 && (lVar7 = FUN_180007da0(), lVar7 + (int)uVar6 != 0)) ||
          (((param_5[9] & 4) != 0 && (bVar4 = FUN_18000746c(param_4,(longlong)param_5), !bVar4))))))
      {
        if ((param_5[9] & 4) != 0) {
          lVar7 = FUN_180008548();
          *(int **)(lVar7 + 0x20) = param_1;
          lVar7 = FUN_180008548();
          *(ULONG_PTR *)(lVar7 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_18000d39c();
        }
        uVar6 = param_5[8];
        if (uVar6 == 0) {
          piVar11 = (int *)0x0;
        }
        else {
          lVar7 = FUN_180007da0();
          piVar11 = (int *)((int)uVar6 + lVar7);
        }
        cVar3 = FUN_18000b498((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          plVar10 = FUN_180007538(param_2,param_4,(longlong)param_5,&local_e0);
          FUN_180007900(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar10,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar14,0xffffffff),0,param_4,param_6);
        }
      }
    }
    else if (param_5[3] != 0) {
      if (param_6 != 0) goto LAB_1800094bf;
      FUN_180009a14(param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,iVar5);
    }
    lVar7 = FUN_180008548();
    if (*(longlong *)(lVar7 + 0x38) == 0) {
      return;
    }
  }
LAB_1800094bf:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800094c8; Evidence: ev_edc37f65f5780b0366ab79b111757309fd1eb3fa54bf0bd5a03db9f619e020b5 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800094c8(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,byte *param_5
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
  
  local_58 = DAT_180023000 ^ (ulonglong)auStackY_1c8;
  local_128 = param_8;
  local_120 = param_2;
  iVar7 = FUN_180008744((longlong)param_5,param_4);
  if ((int)param_4[9] == 0) {
    lVar8 = FUN_180008548();
    if (*(int *)(lVar8 + 0x78) != -2) {
      lVar8 = FUN_180008548();
      iVar7 = *(int *)(lVar8 + 0x78);
      lVar8 = FUN_180008548();
      *(undefined4 *)(lVar8 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar8 = FUN_180008548();
    if (*(int *)(lVar8 + 0x78) != -2) goto LAB_180009a0e;
    iVar7 = (int)param_4[9] + -2;
  }
  if (-2 < iVar7) {
    if (*(int *)(param_5 + 8) == 0) {
      uVar11 = 0;
    }
    else {
      uVar11 = *(byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) & 0xf;
      uVar11 = *(uint *)((byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_1800175b0)[uVar11])) >>
               ((&DAT_1800175c0)[uVar11] & 0x1f);
    }
    if (iVar7 < (int)uVar11) {
      local_158 = param_3;
      if ((((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
          ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
         (*(longlong *)(param_1 + 0xc) == 0)) {
        lVar8 = FUN_180008548();
        if (*(longlong *)(lVar8 + 0x20) == 0) {
          return;
        }
        lVar8 = FUN_180008548();
        param_1 = *(int **)(lVar8 + 0x20);
        lVar8 = FUN_180008548();
        local_158 = *(ULONG_PTR *)(lVar8 + 0x28);
        FUN_180007de0(*(undefined8 *)(param_1 + 0xe));
        if ((param_1 == (int *)0x0) ||
           (((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
            (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
             (*(longlong *)(param_1 + 0xc) == 0)))))) goto LAB_180009a0e;
        lVar8 = FUN_180008548();
        if (*(longlong *)(lVar8 + 0x38) != 0) {
          lVar8 = FUN_180008548();
          piVar16 = *(int **)(lVar8 + 0x38);
          lVar8 = FUN_180008548();
          *(undefined8 *)(lVar8 + 0x38) = 0;
          cVar5 = FUN_18000b498((longlong)param_1,piVar16);
          if (cVar5 == '\0') {
            uVar9 = FUN_18000b580(piVar16);
            if ((char)uVar9 != '\0') {
              FUN_180007ff0(param_1);
              FUN_18000a8bc(&local_140);
                    /* WARNING: Subroutine does not return */
              FUN_18000837c(&local_140,&DAT_180021b68);
            }
                    /* WARNING: Subroutine does not return */
            FUN_18000d39c();
          }
        }
      }
      FUN_18000a79c(local_d0,(longlong)param_5,param_4[1]);
      if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
         ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
        if (local_d0[0] != 0) {
          FUN_180007780((undefined4 *)&local_118,(int *)local_d0,iVar7);
          uVar11 = (uint)uStack_110;
          local_140 = local_118;
          uStack_138 = uStack_110;
          if (uVar11 < local_100) {
            do {
              local_140 = *(longlong *)(local_118 + 0x18);
              uStack_138 = *(undefined8 *)(local_118 + 0x20);
              if ((*(int *)(local_118 + 0x18) <= iVar7) && (iVar7 <= *(int *)(local_118 + 0x1c))) {
                FUN_18000a718((HandlerMap4 *)local_a8,(longlong)&local_140,param_4[1],
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
                    lVar8 = FUN_180007db4();
                    piVar16 = (int *)((longlong)iVar15 + lVar8 + 4);
                    iVar15 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                    lVar8 = FUN_180007db4();
                    for (iVar15 = *(int *)(lVar8 + iVar15); 0 < iVar15; iVar15 = iVar15 + -1) {
                      iVar1 = *piVar16;
                      lVar8 = FUN_180007db4();
                      uVar10 = FUN_18000a0a0((longlong)&local_f8,(byte *)(iVar1 + lVar8),
                                             *(byte **)(param_1 + 0xc));
                      if ((int)uVar10 != 0) {
                        FUN_180008eec((ULONG_PTR)param_1,local_120,local_158,param_4,param_5,
                                      (longlong)&local_f8,(byte *)(iVar1 + lVar8),(int *)&local_140)
                        ;
                        goto LAB_180009897;
                      }
                      piVar16 = piVar16 + 1;
                    }
                    FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_a8);
                    local_160 = local_160 + 1;
                  } while (local_160 != iVar4);
                }
              }
LAB_180009897:
              pbVar14 = *(byte **)(local_118 + 8);
              uVar11 = uVar11 + 1;
              lVar8 = (longlong)(char)(&DAT_1800175b0)[*pbVar14 & 0xf];
              bVar6 = (&DAT_1800175c0)[*pbVar14 & 0xf];
              pbVar12 = pbVar14 + -lVar8;
              uVar2 = *(uint *)(pbVar12 + -4);
              *(byte **)(local_118 + 8) = pbVar12;
              *(uint *)(local_118 + 0x18) = uVar2 >> (bVar6 & 0x1f);
              cVar5 = (&DAT_1800175b0)[*pbVar12 & 0xf];
              pbVar13 = pbVar14 + (-lVar8 - (longlong)cVar5);
              *(uint *)(local_118 + 0x1c) =
                   *(uint *)(pbVar13 + -4) >> ((&DAT_1800175c0)[*pbVar12 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar13;
              pbVar14 = pbVar14 + ((-(longlong)cVar5 -
                                   (longlong)(char)(&DAT_1800175b0)[*pbVar13 & 0xf]) - lVar8);
              *(uint *)(local_118 + 0x20) =
                   *(uint *)(pbVar14 + -4) >> ((&DAT_1800175c0)[*pbVar13 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar14;
              uVar3 = *(undefined4 *)pbVar14;
              *(byte **)(local_118 + 8) = pbVar14 + 4;
              *(undefined4 *)(local_118 + 0x24) = uVar3;
            } while (uVar11 < local_100);
          }
        }
        if (((*param_5 & 0x40) != 0) && (bVar6 = FUN_180007498(param_4,param_5), bVar6 == 0)) {
          lVar8 = FUN_180008548();
          *(int **)(lVar8 + 0x20) = param_1;
          lVar8 = FUN_180008548();
          *(ULONG_PTR *)(lVar8 + 0x28) = local_158;
                    /* WARNING: Subroutine does not return */
          FUN_18000d39c();
        }
      }
      else if (local_d0[0] != 0) {
        if (param_6 != '\0') goto LAB_180009a0e;
        FUN_180009c78(param_1,param_2,local_158,param_4,param_5,iVar7);
      }
      lVar8 = FUN_180008548();
      if (*(longlong *)(lVar8 + 0x38) == 0) {
        return;
      }
    }
  }
LAB_180009a0e:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180009a14; Evidence: ev_ade3e2808662e4d4161da8e8be1b3a893fd6c3af2d3485e79da4d61f9ba2f197 */

void FUN_180009a14(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
    lVar3 = FUN_180008548();
    if (*(longlong *)(lVar3 + 0x10) != 0) {
      pvVar4 = EncodePointer((PVOID)0x0);
      lVar3 = FUN_180008548();
      if ((((*(PVOID *)(lVar3 + 0x10) != pvVar4) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar1 = FUN_180007234(param_1,param_2,param_3), iVar1 != 0)
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
    FUN_180007648(&local_60,&local_98,param_6,param_4,param_5);
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
          if ((iVar1 != 0) && (lVar3 = FUN_180007da0(), lVar3 + iVar1 != 0)) {
            iVar1 = *(int *)(pbVar5 + 4);
            if (iVar1 == 0) {
              lVar3 = 0;
            }
            else {
              lVar3 = FUN_180007da0();
              lVar3 = lVar3 + iVar1;
            }
            if (*(char *)(lVar3 + 0x10) != '\0') goto LAB_180009c3d;
          }
          if ((*pbVar5 & 0x40) == 0) {
            FUN_180008e14((ULONG_PTR)param_1,param_2,param_3,param_4,param_5,pbVar5,(byte *)0x0,
                          (int *)local_78);
          }
        }
LAB_180009c3d:
        uVar2 = uVar2 + 1;
      } while (uVar2 < local_48);
    }
  }
  return;
}


/* Address: 0x180009c78; Evidence: ev_070f91780966f8266795f0dd04f3cabad3966d1a3f047cd9c651325c15db0f31 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180009c78(int *param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
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
  
  local_50 = DAT_180023000 ^ (ulonglong)auStackY_178;
  if (*param_1 != -0x7ffffffd) {
    local_f0 = param_2;
    lVar5 = FUN_180008548();
    if (*(longlong *)(lVar5 + 0x10) != 0) {
      pvVar6 = EncodePointer((PVOID)0x0);
      lVar5 = FUN_180008548();
      if ((((*(PVOID *)(lVar5 + 0x10) != pvVar6) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar4 = FUN_180007288(param_1,param_2,param_3), iVar4 != 0)
         ) {
        return;
      }
    }
    FUN_18000a79c(local_78,(longlong)param_5,param_4[1]);
    if (local_78[0] == 0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    FUN_180007780((undefined4 *)&local_e8,(int *)local_78,param_6);
    local_118 = uStack_e0;
    if (uStack_e0 < local_d0) {
      do {
        local_100 = *(undefined8 *)(local_e8 + 0x18);
        uStack_f8 = *(undefined8 *)(local_e8 + 0x20);
        if ((*(int *)(local_e8 + 0x18) <= param_6) && (param_6 <= *(int *)(local_e8 + 0x1c))) {
          FUN_18000a718((HandlerMap4 *)local_c8,(longlong)&local_100,param_4[1],
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
          if ((local_a8 != 0) && (lVar7 = FUN_180007da0(), lVar7 + lVar5 != 0)) {
            lVar5 = (longlong)local_a8;
            if (local_a8 == 0) {
              lVar7 = 0;
            }
            else {
              lVar7 = FUN_180007da0();
              lVar7 = lVar7 + lVar5;
            }
            if (*(char *)(lVar7 + 0x10) != '\0') goto LAB_180009eac;
          }
          if ((local_ac & 0x40) == 0) {
            FUN_180008eec((ULONG_PTR)param_1,local_f0,param_3,param_4,param_5,(longlong)local_b0,
                          (byte *)0x0,(int *)&local_100);
          }
        }
LAB_180009eac:
        pbVar11 = *(byte **)(local_e8 + 8);
        lVar5 = (longlong)(char)(&DAT_1800175b0)[*pbVar11 & 0xf];
        bVar1 = (&DAT_1800175c0)[*pbVar11 & 0xf];
        pbVar8 = pbVar11 + -lVar5;
        uVar3 = *(uint *)(pbVar8 + -4);
        *(byte **)(local_e8 + 8) = pbVar8;
        *(uint *)(local_e8 + 0x18) = uVar3 >> (bVar1 & 0x1f);
        cVar2 = (&DAT_1800175b0)[*pbVar8 & 0xf];
        pbVar9 = pbVar11 + (-lVar5 - (longlong)cVar2);
        *(uint *)(local_e8 + 0x1c) =
             *(uint *)(pbVar9 + -4) >> ((&DAT_1800175c0)[*pbVar8 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar9;
        pbVar11 = pbVar11 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_1800175b0)[*pbVar9 & 0xf]) -
                            lVar5);
        *(uint *)(local_e8 + 0x20) =
             *(uint *)(pbVar11 + -4) >> ((&DAT_1800175c0)[*pbVar9 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar11;
        *(undefined4 *)(local_e8 + 0x24) = *(undefined4 *)pbVar11;
        local_118 = local_118 + 1;
        *(byte **)(local_e8 + 8) = pbVar11 + 4;
      } while (local_118 < local_d0);
    }
  }
  return;
}


/* Address: 0x180009f80; Evidence: ev_be8344bea580230cb50b7af6d436918d7548060eb9a47587dcdd1cd49201550a */

undefined8 FUN_180009f80(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_180007da0(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_180007da0();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_180007da0();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_180007db4();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_180007da0();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_180007db4();
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


/* Address: 0x18000a0a0; Evidence: ev_b0b50769f5fe4a20b10f56ed08a79c753d5173c72b158335c02cdbd0b8ccec1a */

undefined8 FUN_18000a0a0(longlong param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  byte *pbVar5;
  
  iVar1 = *(int *)(param_1 + 8);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_180007da0(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 8);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_180007da0();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') &&
       (((*(byte *)(param_1 + 4) & 0x80) == 0 || ((*param_2 & 0x10) == 0)))) {
      iVar1 = *(int *)(param_1 + 8);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_180007da0();
        lVar2 = iVar1 + lVar2;
      }
      lVar3 = FUN_180007db4();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 8);
        if (iVar1 != 0) {
          lVar4 = FUN_180007da0();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_180007db4();
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


/* Address: 0x18000a1e0; Evidence: ev_a00596bab829311374ba2c8e4ee310b2a12b9ad9530bf15a5d17f8497fedf52b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_18000a1e0(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180008548();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_18000a24e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_18000a24e:
      if (bVar5) goto LAB_18000a265;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_18000a265:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180007da0(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_180007db4();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180008fc4(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_18000a2f1:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_18000874c((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000a40d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_18000a2f1;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000a40d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_18000af64((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000a414; Evidence: ev_579f21bb1a72cad84ebc1b2e5a886a2c1f8819868df3119b17fd6288d4f488a7 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_18000a414(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180008548();
  uVar5 = 0;
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        if (*(longlong *)(param_1 + 0x18) == 0x19930520) goto LAB_18000a496;
        goto LAB_18000a488;
      }
    }
    else {
LAB_18000a488:
      if (*param_1 == -0x7fffffda) goto LAB_18000a496;
    }
    if (((byte)*param_5 & 0x20) != 0) {
      return 1;
    }
  }
LAB_18000a496:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    FUN_18000a79c(local_48,(longlong)param_5,*(longlong *)(param_4 + 8));
    if ((local_48[0] == 0) && (((byte)*param_5 & 0x40) == 0)) {
      return 1;
    }
    if ((*param_1 == -0x1f928c9d) &&
       (((2 < (uint)param_1[6] && (0x19930522 < (uint)param_1[8])) &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_180007db4();
      pcVar6 = (code *)(lVar2 + iVar1);
      if (pcVar6 != (code *)0x0) {
        uVar3 = (*pcVar6)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar8,(uint)param_8));
        return uVar3;
      }
    }
    FUN_1800094c8(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,(byte *)param_5,param_8,
                  CONCAT44(uVar7,param_6),param_7);
    return 1;
  }
  if (*(int *)(param_5 + 8) == 0) {
    return 1;
  }
  uVar4 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
  if (*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
               (-4 - (longlong)(char)(&DAT_1800175b0)[uVar4])) >> ((&DAT_1800175c0)[uVar4] & 0x1f)
      == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_18000a5bb:
    __FrameHandler4::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_1800087b4((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if (iVar1 < -1) {
LAB_18000a6bc:
                    /* WARNING: Subroutine does not return */
        abort();
      }
      if (*(int *)(param_5 + 8) != 0) {
        uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
        uVar5 = *(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                         (-4 - (longlong)(char)(&DAT_1800175b0)[uVar5])) >>
                ((&DAT_1800175c0)[uVar5] & 0x1f);
      }
      if ((int)uVar5 <= iVar1) goto LAB_18000a6bc;
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_18000a5bb;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) ||
         (uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf,
         (int)(*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_1800175b0)[uVar5])) >>
              ((&DAT_1800175c0)[uVar5] & 0x1f)) <= iVar1)) goto LAB_18000a6bc;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_18000b0f0((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000a6c4; Evidence: ev_71d57c81aa85e7e2f8a127d3d152cb321432b1edffa96c242caf1a19f338b5ce */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
thunk_FUN_18000a1e0(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180008548();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_18000a24e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_18000a24e:
      if (bVar5) goto LAB_18000a265;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_18000a265:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180007da0(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_180007db4();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180008fc4(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_18000a2f1:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_18000874c((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000a40d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_18000a2f1;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000a40d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_18000af64((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000a6cc; Evidence: ev_6295ccb0b188fc04d4580ed072edfefa522e836df9d8054e261c1d5a3c8e66d0 */

ulonglong FUN_18000a6cc(int *param_1,__uint64 *param_2,ULONG_PTR param_3,
                       _xDISPATCHER_CONTEXT *param_4,FuncInfo4 *param_5,int param_6,
                       undefined8 param_7,byte param_8)

{
  ulonglong uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000a414(param_1,param_2,param_3,param_4,param_5,param_6,param_7,param_8);
  lVar2 = FUN_180008548();
  *(undefined4 *)(lVar2 + 0x78) = 0xfffffffe;
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000a718; Evidence: ev_8fa898d6119dde3b872b412a51c79b643f7c108ec0330c31cd246fe4f209da8b */

HandlerMap4 *
FUN_18000a718(HandlerMap4 *param_1,longlong param_2,longlong param_3,undefined4 param_4)

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
    lVar2 = (longlong)pbVar1 - (longlong)(char)(&DAT_1800175b0)[*pbVar1 & 0xf];
    *(uint *)param_1 = *(uint *)(lVar2 + -4) >> ((&DAT_1800175c0)[*pbVar1 & 0xf] & 0x1f);
    *(longlong *)(param_1 + 8) = lVar2;
    *(longlong *)(param_1 + 0x10) = lVar2;
    FH4::HandlerMap4::DecompHandler(param_1);
  }
  return param_1;
}


/* Address: 0x18000a79c; Evidence: ev_4d26c9f5e5c03889ac19e251f08a66ab2645ecd32accbefd6907540638e601b6 */

uint * FUN_18000a79c(uint *param_1,longlong param_2,longlong param_3)

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
    bVar1 = (&DAT_1800175c0)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_1800175b0)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    *param_1 = uVar2 >> (bVar1 & 0x1f);
    *(byte **)(param_1 + 4) = pbVar3;
    bVar1 = (&DAT_1800175c0)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_1800175b0)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    param_1[6] = uVar2 >> (bVar1 & 0x1f);
    bVar1 = (&DAT_1800175c0)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_1800175b0)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    param_1[7] = uVar2 >> (bVar1 & 0x1f);
    puVar4 = (uint *)(pbVar3 + -(longlong)(char)(&DAT_1800175b0)[*pbVar3 & 0xf]);
    param_1[8] = puVar4[-1] >> ((&DAT_1800175c0)[*pbVar3 & 0xf] & 0x1f);
    *(uint **)(param_1 + 2) = puVar4;
    uVar2 = *puVar4;
    *(uint **)(param_1 + 2) = puVar4 + 1;
    param_1[9] = uVar2;
  }
  return param_1;
}


/* Address: 0x18000a880; Evidence: ev_c19a162258e5ea594586e39adc3b993cacf995915421ce5d3d3e218cf485a9dd */

undefined8 * FUN_18000a880(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180007f48((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x18000a8bc; Evidence: ev_8d1692fe1420ed91175f16d7d2830d5cc3039062ad962e46fdcb3ac50b5b84fa */

undefined8 * FUN_18000a8bc(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x18000a8e0; Evidence: ev_cca400ec1de9d24e8f08c9188beff353be1971374e19829b09a901e5036e175f */

undefined8 FUN_18000a8e0(longlong param_1)

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
  
  lVar6 = FUN_180008548();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180008548();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_180008548();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_180008548();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_180008548();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180008548();
  }
  uVar10 = _CallSettingFrame();
  FUN_180007d4c((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_180007ff0(piVar3);
  }
  lVar8 = FUN_180008548();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_180008548();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}


/* Address: 0x18000aad0; Evidence: ev_c73407b12712389bc85ddbe616156a579988eb6f82ff4688fee44cf401c25976 */

longlong FUN_18000aad0(longlong param_1)

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
  
  lVar6 = FUN_180008548();
  uVar2 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180008548();
  uVar3 = *(undefined8 *)(lVar6 + 0x20);
  piVar4 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x40);
  local_58[0] = *(longlong *)(param_1 + 0x48);
  local_58[1] = *(undefined8 *)(param_1 + 0x68);
  uVar1 = *(undefined4 *)(param_1 + 0x38);
  __except_validate_context_record(lVar6);
  lVar7 = FUN_180008548();
  *(int **)(lVar7 + 0x20) = piVar4;
  lVar7 = FUN_180008548();
  *(longlong *)(lVar7 + 0x28) = lVar6;
  lVar6 = FUN_180008548();
  puVar8 = _CreateFrameInfo(local_58 + 2,*(undefined8 *)(*(longlong *)(lVar6 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180008548();
  }
  lVar6 = FUN_18000bcd0();
  if ((lVar6 < 2) && (lVar6 = local_58[lVar6], lVar6 == 0)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_18000bd00();
  FUN_180007d4c((longlong)puVar8);
  if ((((*piVar4 == -0x1f928c9d) && (piVar4[6] == 4)) &&
      ((piVar4[8] == 0x19930520 || (piVar4[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar4 + 10)), iVar5 != 0)) {
    FUN_180007ff0(piVar4);
  }
  lVar7 = FUN_180008548();
  *(undefined8 *)(lVar7 + 0x20) = uVar3;
  lVar7 = FUN_180008548();
  *(undefined8 *)(lVar7 + 0x28) = uVar2;
  lVar7 = FUN_180008548();
  *(undefined4 *)(lVar7 + 0x78) = uVar1;
  lVar7 = FUN_180008548();
  *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
  return lVar6;
}


/* Address: 0x18000ad14; Evidence: ev_0bbcdf867f818d18b540d2de8fe6ca710a3a66d68c04c56e61bbde9066c1fdb4 */

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
    pHVar8 = pHVar8 + -(longlong)(char)(&DAT_1800175b0)[(byte)HVar2 & 0xf];
    *(uint *)(this + 0x1c) = *(uint *)(pHVar8 + -4) >> ((&DAT_1800175c0)[(byte)HVar2 & 0xf] & 0x1f);
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
    pHVar8 = pHVar8 + -(longlong)(char)(&DAT_1800175b0)[(byte)HVar2 & 0xf];
    *(uint *)(this + 0x24) = *(uint *)(pHVar8 + -4) >> ((&DAT_1800175c0)[(byte)HVar2 & 0xf] & 0x1f);
    *(HandlerMap4 **)(this + 8) = pHVar8;
  }
  pHVar9 = pHVar8 + 4;
  *(undefined4 *)(this + 0x28) = *(undefined4 *)pHVar8;
  bVar6 = (byte)HVar1 & 0x30;
  *(HandlerMap4 **)(this + 8) = pHVar9;
  if (((byte)HVar1 & 8) == 0) {
    if (bVar6 == 0x10) {
      bVar6 = (&DAT_1800175c0)[(byte)*pHVar9 & 0xf];
      uVar5 = *(uint *)(((longlong)pHVar9 - (longlong)(char)(&DAT_1800175b0)[(byte)*pHVar9 & 0xf]) +
                       -4);
      *(longlong *)(this + 8) =
           (longlong)pHVar9 - (longlong)(char)(&DAT_1800175b0)[(byte)*pHVar9 & 0xf];
      *(ulonglong *)(this + 0x30) = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
      return;
    }
    if (bVar6 != 0x20) {
      return;
    }
    bVar6 = (&DAT_1800175c0)[(byte)*pHVar9 & 0xf];
    pHVar9 = pHVar9 + -(longlong)(char)(&DAT_1800175b0)[(byte)*pHVar9 & 0xf];
    uVar5 = *(uint *)(pHVar9 + -4);
    *(HandlerMap4 **)(this + 8) = pHVar9;
    *(ulonglong *)(this + 0x30) = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
    bVar6 = (&DAT_1800175c0)[(byte)*pHVar9 & 0xf];
    uVar5 = *(uint *)(((longlong)pHVar9 - (longlong)(char)(&DAT_1800175b0)[(byte)*pHVar9 & 0xf]) +
                     -4);
    *(longlong *)(this + 8) =
         (longlong)pHVar9 - (longlong)(char)(&DAT_1800175b0)[(byte)*pHVar9 & 0xf];
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


/* Address: 0x18000ae9c; Evidence: ev_157d9dd8a8942e90e4644f1542febf06ee90f98d0677aec6379db85329509130 */

undefined8 FUN_18000ae9c(undefined8 *param_1,longlong param_2,undefined4 *param_3)

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
      lVar2 = FUN_180008548();
      *(undefined4 *)(lVar2 + 0x40) = 1;
      *param_3 = 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x18000af34; Evidence: ev_d41a33bff7a4988876db51a083c19e4d3209efccae732c558177963c2285c825 */

/* Library Function - Single Match
    int __cdecl ExFilterRethrowFH4(struct _EXCEPTION_POINTERS * __ptr64,struct EHExceptionRecord *
   __ptr64,int,int * __ptr64)
   
   Library: Visual Studio 2019 Release */

int __cdecl
ExFilterRethrowFH4(_EXCEPTION_POINTERS *param_1,EHExceptionRecord *param_2,int param_3,int *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000ae9c(&param_1->ExceptionRecord,(longlong)param_2,param_4);
  if ((int)uVar1 == 0) {
    lVar2 = FUN_180008548();
    *(int *)(lVar2 + 0x78) = param_3;
  }
  return (int)uVar1;
}


/* Address: 0x18000af64; Evidence: ev_d80da2b3d1cf6b4c7532c2961603e21be17ac0673760cad7da73dd607eb8058c */

void FUN_18000af64(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180007da0();
  iVar2 = FUN_1800086a0(param_1,param_2,param_3);
  lVar4 = FUN_180008548();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180007da0();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180007da0();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180007da0();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180007da0();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_1800086f4(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180007da0();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180007da0();
        FUN_180007da0();
      }
      _CallSettingFrame();
      FUN_180007dc8(uVar3);
    }
  }
  lVar4 = FUN_180008548();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180008548();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_1800086f4(param_1,param_3,iVar2);
  return;
}


/* Address: 0x18000b0f0; Evidence: ev_1e7997a47f49dd3ffdd30827e06014bc8e45dde78924ace076ac6415e9766999 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000b0f0(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

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
  
  local_58 = DAT_180023000 ^ (ulonglong)auStackY_138;
  local_f0 = param_4;
  local_d8 = param_1;
  local_c0 = param_1;
  local_d0 = FUN_180007da0();
  iVar6 = FUN_180008744(param_3,param_2);
  puVar1 = param_2 + 9;
  local_c8 = puVar1;
  if ((int)*puVar1 == 0) {
    lVar7 = FUN_180008548();
    if (*(int *)(lVar7 + 0x78) != -2) {
      lVar7 = FUN_180008548();
      iVar6 = *(int *)(lVar7 + 0x78);
      lVar7 = FUN_180008548();
      *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar7 = FUN_180008548();
    if (*(int *)(lVar7 + 0x78) != -2) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    iVar6 = (int)*puVar1 + -2;
  }
  lVar7 = FUN_180008548();
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
    local_70 = local_70 + -(longlong)(char)(&DAT_1800175b0)[uVar8];
    local_78[0] = *(uint *)(local_70 + -4) >> ((&DAT_1800175c0)[uVar8] & 0x1f);
  }
  local_108 = (UWMap4 *)local_78;
  local_e8 = local_78;
  pbStack_100 = local_70;
  local_e0 = local_70;
  local_b8 = puVar9;
  FUN_18000b6c4((UWMap4 *)local_78,iVar6,param_4,(longlong *)&local_108,(longlong *)&local_e8);
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
    iVar6 = FUN_18000b794(&local_e8,param_4,(longlong)&local_98,iVar6,&local_108);
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
      FUN_180007dc8(local_d0);
    }
  }
  lVar7 = FUN_180008548();
  if (0 < *(int *)(lVar7 + 0x30)) {
    lVar7 = FUN_180008548();
    *(int *)(lVar7 + 0x30) = *(int *)(lVar7 + 0x30) + -1;
  }
  return;
}


/* Address: 0x18000b3fc; Evidence: ev_38a86c0dbf4f6911895832a319d6a0af9b0d884e78fecfb7caeba040f465aef2 */

int FUN_18000b3fc(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_18000873c(param_3,param_2);
  FUN_180007538(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_1800086f4(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}


/* Address: 0x18000b498; Evidence: ev_08a578fee53cb8d0bfbfeed6c5876bb6079e64c8ea75a5841c8199ae70576d7c */

undefined1 FUN_18000b498(longlong param_1,int *param_2)

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
      lVar4 = FUN_180007db4();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_180007db4();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_180007db4();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_180007da0();
          uVar6 = FUN_180009f80((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
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


/* Address: 0x18000b580; Evidence: ev_243b9d0890a70da574b7f885009807a3d863471ebbe312434f683702350f4a54 */

ulonglong FUN_18000b580(int *param_1)

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
      lVar2 = FUN_180007da0();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_180007da0();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_180007da0();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_180008424(lVar2 + 8,0x180023a78);
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


/* Address: 0x18000b608; Evidence: ev_c6f3f8f5b9b0251b2abf6a0627040218148b713f2f8e6aaa9b0c6aa495df7e80 */

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
  pbVar5 = *param_1 + -(longlong)(char)(&DAT_1800175b0)[uVar3];
  uVar3 = *(uint *)(pbVar5 + -4) >> ((&DAT_1800175c0)[uVar3] & 0x1f);
  *param_1 = pbVar5;
  uVar4 = uVar3 & 3;
  *(uint *)(this + 0x14) = uVar4;
  *(uint *)(this + 0x10) = uVar3 >> 2;
  if ((uVar4 == 1) || (uVar4 == 2)) {
    uVar2 = *(undefined4 *)*param_1;
    *param_1 = *param_1 + 4;
    *(undefined4 *)(this + 0x18) = uVar2;
    uVar3 = **param_1 & 0xf;
    bVar1 = (&DAT_1800175c0)[uVar3];
    pbVar5 = *param_1 + -(longlong)(char)(&DAT_1800175b0)[uVar3];
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


/* Address: 0x18000b6a8; Evidence: ev_888428027a9d3cf4865597b87c642ae9187b3e77c03c613e2b86526b434c276d */

void FUN_18000b6a8(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b6ae. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3);
  return;
}


/* Address: 0x18000b6b4; Evidence: ev_92bf85977723520d9b7524e5c06c5ce06c9950d3d60d5af4ddf8157cbc33b523 */

void FUN_18000b6b4(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3,
                  undefined4 param_4)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b6c0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3,param_4);
  return;
}


/* Address: 0x18000b6c4; Evidence: ev_4531854e6a000061bf95267fdccab1ff34cfa466ede20d9fc343996f088851a8 */

void FUN_18000b6c4(UWMap4 *param_1,int param_2,int param_3,longlong *param_4,longlong *param_5)

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


/* Address: 0x18000b794; Evidence: ev_34f1ccf02a428ee6f3425e6e7ac132ec6fd0703cf5cb498dbb35931762829271 */

int FUN_18000b794(undefined8 *param_1,int param_2,longlong param_3,int param_4,undefined8 *param_5)

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


/* Address: 0x18000b880; Evidence: ev_51937bd6fe15ad4ce6714d58981c2462e0dfb7285dad44c7470699c73d2af514 */

void FUN_18000b880(void)

{
  FUN_18000b8a0();
  return;
}


/* Address: 0x18000b8a0; Evidence: ev_dc1cb80b0d86c6070f5a55a4b87a6a6e7cf7bc40151f4fa698daf4fcb7aba33f */

void FUN_18000b8a0(void)

{
  return;
}


/* Address: 0x18000b8b0; Evidence: ev_01bb782d0f3e38eaf5208e7749e9e44658ce5800b26681bb903710ea7acbaab8 */

void FUN_18000b8b0(void)

{
  return;
}


/* Address: 0x18000b8b4; Evidence: ev_7e2a388bd99429c1a7284c46586b8620dfb45570d1ceda62e31cf7f6042e8a60 */

/* WARNING: Removing unreachable block (ram,0x00018000b8c7) */
/* WARNING: Removing unreachable block (ram,0x00018000b8dd) */
/* WARNING: Removing unreachable block (ram,0x00018000b8e3) */
/* Library Function - Single Match
    __except_validate_context_record
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __except_validate_context_record(longlong param_1)

{
  return;
}


/* Address: 0x18000b8ec; Evidence: ev_257c966c7dea3bb997400c8578fdb16d3b2be68a7483ceaa529d3268b8e8849b */

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
                      ((LPCRITICAL_SECTION)(&DAT_180024278 + uVar2 * 0x28),4000,0);
    if ((int)uVar1 == 0) {
      uVar2 = __vcrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_1800242a0 = DAT_1800242a0 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 == 0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x18000b934; Evidence: ev_7ad5201b92c3969866ff13324a8d4806bb9dea606a362ba34230c368f70e858b */

/* Library Function - Single Match
    __vcrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release */

undefined8 __vcrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_1800242a0;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_180024278 + uVar1 * 0x28));
    DAT_1800242a0 = DAT_1800242a0 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000b96c; Evidence: ev_f4cb8df879a1d1f5db8fc9b931f802782bc6ef6cc674a381d986dea40a193a0f */

FARPROC FUN_18000b96c(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
  pFVar4 = *(FARPROC *)(&DAT_1800242c0 + uVar6 * 8);
  if (pFVar4 != (FARPROC)0xffffffffffffffff) {
    if (pFVar4 != (FARPROC)0x0) {
      return pFVar4;
    }
    for (; param_3 != param_4; param_3 = param_3 + 1) {
      uVar5 = (ulonglong)*param_3;
      hLibModule = *(HMODULE *)(&DAT_1800242a8 + uVar5 * 8);
      if (hLibModule == (HMODULE)0x0) {
        lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_fibers_l1_1_1_180018518)[uVar5];
        hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
        if ((hLibModule != (HMODULE)0x0) ||
           (((DVar2 = GetLastError(), DVar2 == 0x57 &&
             (iVar3 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar3 != 0)) &&
            (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0)))
           ) {
          LOCK();
          lVar1 = *(longlong *)(&DAT_1800242a8 + uVar5 * 8);
          *(HMODULE *)(&DAT_1800242a8 + uVar5 * 8) = hLibModule;
          UNLOCK();
          if (lVar1 != 0) {
            FreeLibrary(hLibModule);
          }
          goto LAB_18000ba9d;
        }
        LOCK();
        *(undefined8 *)(&DAT_1800242a8 + uVar5 * 8) = 0xffffffffffffffff;
        UNLOCK();
      }
      else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_18000ba9d:
        pFVar4 = GetProcAddress(hLibModule,param_2);
        if (pFVar4 != (FARPROC)0x0) {
          LOCK();
          *(FARPROC *)(&DAT_1800242c0 + uVar6 * 8) = pFVar4;
          UNLOCK();
          return pFVar4;
        }
        break;
      }
    }
    LOCK();
    *(undefined8 *)(&DAT_1800242c0 + uVar6 * 8) = 0xffffffffffffffff;
    UNLOCK();
  }
  return (FARPROC)0x0;
}


/* Address: 0x18000babc; Evidence: ev_4403c127620a04dd9a79f368c96532bed3e7cb22c28877d4d9784a8dddfb0174 */

/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000b96c(0,"FlsAlloc",(uint *)&DAT_1800185d8,(uint *)"FlsAlloc");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000bafa. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsAlloc();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180015090. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)(param_1);
  return;
}


/* Address: 0x18000bb04; Evidence: ev_f30a57f7cbe8361c862d0d65aa836f02ac24f5ce7e751f08005cd7b476757ed9 */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000b96c(1,"FlsFree",(uint *)&DAT_1800185f0,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000bb43. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180015090. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000bb4c; Evidence: ev_cb8f6ce1b50a37517b684d30a04e72e68c2a9635702f6c06096cf7980ff62fac */

/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE =
       FUN_18000b96c(2,"FlsGetValue",(uint *)&DAT_180018600,(uint *)"FlsGetValue");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000bb8b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsGetValue(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180015090. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000bb94; Evidence: ev_6a3897f4f2ff911208eebb360bc5607b85a3d808f3d6518e8bc810fb89a204a6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsSetValue
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsSetValue(DWORD param_1,LPVOID param_2)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_18000b96c(3,"FlsSetValue",(uint *)&DAT_180018618,(uint *)"FlsSetValue");
  if (pFVar1 == (FARPROC)0x0) {
    TlsSetValue(param_1,param_2);
  }
  else {
    (*pFVar1)();
  }
  return;
}


/* Address: 0x18000bbe8; Evidence: ev_3dd610bfd91393b9a115eb6b86e0c63c3bc7849067afc338b5b080dba54b5471 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_InitializeCriticalSectionEx
   
   Library: Visual Studio 2017 Release */

void __vcrt_InitializeCriticalSectionEx(LPCRITICAL_SECTION param_1,DWORD param_2,undefined4 param_3)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_18000b96c(4,"InitializeCriticalSectionEx",(uint *)&DAT_180018630,
                         (uint *)"InitializeCriticalSectionEx");
  if (pFVar1 == (FARPROC)0x0) {
    InitializeCriticalSectionAndSpinCount(param_1,param_2);
  }
  else {
    (*pFVar1)(param_1,param_2,param_3);
  }
  return;
}


/* Address: 0x18000bc90; Evidence: ev_3026111c64877f9289c9fa648e1d8750438c32e7dfda67a747cb951ecdb41fac */

/* Library Function - Single Match
    _CallSettingFrame
   
   Library: Visual Studio */

void _CallSettingFrame(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000b880();
  (*pcVar1)();
  FUN_18000b8b0();
  FUN_18000b880();
  return;
}


/* Address: 0x18000bcd0; Evidence: ev_440df3c4090a8e2d419286b41d7c55cefc83ee3e9763bd4115cb93804a9a35f7 */

void FUN_18000bcd0(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000b880();
  (*pcVar1)();
  FUN_18000b8b0();
  return;
}


/* Address: 0x18000bd00; Evidence: ev_e4becfaa281438f1491cef19c1280b8ee055ffb35d2cf53049616af7814e72ed */

void FUN_18000bd00(void)

{
  FUN_18000b880();
  return;
}


/* Address: 0x18000bd30; Evidence: ev_c1a7de26a5bb91b9f0bd7a4d391eb852b31d10ae1911b7f7cf7288afd1552dbb */

/* Library Function - Single Match
    _CallSettingFrameEncoded
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

void _CallSettingFrameEncoded(undefined8 param_1,undefined8 param_2,undefined8 param_3)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000b880();
  (*pcVar1)(param_3);
  FUN_18000b8b0();
  FUN_18000b880();
  return;
}


/* Address: 0x18000bd80; Evidence: ev_0542f5b65362f80770bea5cd61354a9cd0d26d2555caf5b0de8fa5e49b3aaeb5 */

longlong * FUN_18000bd80(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_180023200;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18002446c == 0) {
    param_1[1] = (longlong)PTR_PTR_1800231f8;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_18000db48();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_18000dd80(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}


/* Address: 0x18000be40; Evidence: ev_750b374b3604e3cf1aea4bff87a313574aa390fe8c0926fce59e5f895c825966 */

undefined8 FUN_18000be40(longlong param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  
  if ((param_1 == 0) || (param_2 == 0)) {
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000c3ec();
  }
  return 0x7fffffff;
}


/* Address: 0x18000be70; Evidence: ev_73aba1ed84a0a299945db3a9a21e2927809770389412bd299e8d3a40a09d78c3 */

void FUN_18000be70(byte *param_1,byte *param_2)

{
  byte bVar1;
  byte bVar2;
  uint uVar3;
  uint uVar4;
  
  if (DAT_18002446c != 0) {
    FUN_18000bee0(param_1,param_2,(undefined8 *)0x0);
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
  FUN_18000be40((longlong)param_1,(longlong)param_2);
  return;
}


/* Address: 0x18000bee0; Evidence: ev_fe1018bb28f2225ccb213bcf32d320306f428ea688301af1f0ccaec3e7b0c0aa */

int FUN_18000bee0(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  __acrt_ptd *p_Var3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    p_Var3 = FUN_18000d6a4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000c3ec();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18002446c == 0) {
      local_20 = PTR_PTR_1800231f8;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_18000db48();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_18000dd80(local_28,&lStack_18);
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


/* Address: 0x18000c000; Evidence: ev_c4179b83f75a8dfa9447c61871421401ae78f84fdf841d3cc5e747cb5cd19331 */

longlong FUN_18000c000(longlong *param_1)

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
    p_Var1 = FUN_18000dc38(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
    if (p_Var1 == (__acrt_ptd *)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return *param_1;
}


/* Address: 0x18000c068; Evidence: ev_3d22d8037cad6d59962b5530794868ad8c68cd87aeaaf332117dc41c4a3be976 */

__acrt_ptd * FUN_18000c068(longlong *param_1)

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
    p_Var1 = FUN_18000dc38(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
  }
  return p_Var1;
}


/* Address: 0x18000c0d4; Evidence: ev_cc4406846bbabb49a71d5d08deaa5544187b02a4532151463898135ce8196715 */

longlong FUN_18000c0d4(longlong param_1,longlong param_2)

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


/* Address: 0x18000c120; Evidence: ev_6750833388bc34f8ec7aedb32b2306b9c69ea92f4fa11b5263f192c6645b6a0d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000c120(int param_1,DWORD param_2,DWORD param_3)

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
  
  local_28 = DAT_180023000 ^ (ulonglong)auStackY_608;
  if (param_1 != -1) {
    FUN_180006cd0();
  }
  FUN_180015110((undefined1 (*) [32])&local_598,0,0x98);
  FUN_180015110((undefined1 (*) [32])&local_4f8,0,0x4d0);
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
    FUN_180006cd0();
  }
  return;
}


/* Address: 0x18000c290; Evidence: ev_ef830bcdc21ecd381ae9c311f5dd0f7297d0ce29e0b24ee63a8506b3cc22d72b */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000c290(undefined8 param_1)

{
  _DAT_1800242e8 = param_1;
  return;
}


/* Address: 0x18000c298; Evidence: ev_f78b19c378acf59924f88714400d79870a92f0f148ae818787e4700a243d51e9 */

void FUN_18000c298(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
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
  local_20 = DAT_18002446c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800231f8;
    puStack_28 = PTR_DAT_180023200;
  }
  FUN_18000c334(param_1,param_2,param_3,param_4,param_5,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar1 = FUN_18000c000(local_48);
    *(undefined4 *)(lVar1 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar1 = FUN_18000c000(local_48);
    *(undefined4 *)(lVar1 + 0x24) = local_14;
  }
  return;
}


/* Address: 0x18000c334; Evidence: ev_f7d54547dd34f5ce7614ee3153107375815aebb0e7849e8b3c49b65edf919aaa */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c334(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_18000c068(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_18000c0d4(0x1800242e8,(longlong)param_6);
    bVar3 = (byte)DAT_180023000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_180023000) >> bVar3 | (*puVar2 ^ DAT_180023000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}


/* Address: 0x18000c3ec; Evidence: ev_31874826f279b5b023e5c827349f92ba766807c4fbc28bb37f6de6c9fb4d80fb */

void FUN_18000c3ec(void)

{
  FUN_18000c298((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  return;
}


/* Address: 0x18000c40c; Evidence: ev_cabb893c81ec8a29ae121592b7bd0377667e437b8737bea8da7e412c5c7bb932 */

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
  *(undefined8 *)(puVar3 + -8) = 0x18000c43a;
  FUN_18000c120(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x18000c440;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000c44c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}


/* Address: 0x18000c460; Evidence: ev_078b4627c8037729f4952b8d734cdd07ad13ab10f8a6e2f00f7056fde8e7010b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

bool FUN_18000c460(undefined8 param_1)

{
  int iVar1;
  code *pcVar2;
  bool bVar3;
  
  pcVar2 = (code *)FUN_18000c4b0();
  bVar3 = false;
  if (pcVar2 != (code *)0x0) {
    iVar1 = (*pcVar2)(param_1);
    bVar3 = iVar1 != 0;
  }
  return bVar3;
}


/* Address: 0x18000c4a0; Evidence: ev_81c123256cf50c7153f048eb97ee556231112f25ef9ef3d7449d5e1c1d2b6822 */

void FUN_18000c4a0(undefined8 param_1)

{
  DAT_1800242f0 = param_1;
  return;
}


/* Address: 0x18000c4b0; Evidence: ev_ee110aebf36502919019721f2270470f05e866e1e316bd0013123ff0f5afdbbe */

ulonglong FUN_18000c4b0(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180023000 & 0x3f;
  uVar2 = DAT_1800242f0 ^ DAT_180023000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18000c4f0; Evidence: ev_d4ef2030096764c1d5688bfbc7265f371638935b6335a7cc989c55dfa4a79214 */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180023000 & 0x3f;
  uVar3 = DAT_180023000 ^ DAT_1800242f0;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_1800242f0 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180023000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}


/* Address: 0x18000c560; Evidence: ev_25e0d201608e68e0094108eccac8302f31034554988d0c5371a108613e4bb4bb */

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
      pvVar3 = HeapAlloc(DAT_1800247e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011b30();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000c460(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000d6a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000c570; Evidence: ev_f3cfb295b5eab8bbc28127b322aced008e89992974103a837e9a62b087042dfa */

void thunk_FUN_18000dfd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800247e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000d564(DVar2);
    p_Var4 = FUN_18000d6a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000c578; Evidence: ev_6332ce75f825ddbdb7926a2df6e41d3f0ea01f4175284dc0e669e029e26561c0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c578(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}


/* Address: 0x18000c5b0; Evidence: ev_b2a2c19f0f1f2a23cf8efe190acd59878fb336d9abd9a787178a8a6d16470eae */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000c5b0(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x18000c5ec; Evidence: ev_1bf5056e3a4c2f7be35c6e021026e4412860af2a47e92fde34fd7996fe8fa236 */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000c600(-0x1f928c9d,param_2);
  return uVar1;
}


/* Address: 0x18000c600; Evidence: ev_7a2425cc3d701ebe33948c22e4ab0f6af90fd55d2aba7a927d2aa3ccbaceceaa */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000c600(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  int *piVar2;
  code *pcVar3;
  undefined8 uVar4;
  __acrt_ptd *p_Var5;
  int *piVar6;
  int *piVar7;
  undefined4 uVar8;
  
  p_Var5 = FUN_18000dba8();
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
LAB_18000c73e:
              *(undefined4 *)(p_Var5 + 0x10) = uVar8;
            }
            else {
              if (*piVar6 == -0x3fffff72) {
                uVar8 = 0x83;
                goto LAB_18000c73e;
              }
              if (*piVar6 == -0x3fffff71) {
                uVar8 = 0x86;
                goto LAB_18000c73e;
              }
              if (*piVar6 == -0x3fffff70) {
                uVar8 = 0x81;
                goto LAB_18000c73e;
              }
              if (*piVar6 == -0x3fffff6f) {
                uVar8 = 0x84;
                goto LAB_18000c73e;
              }
              if (*piVar6 == -0x3fffff6e) {
                uVar8 = 0x8a;
                goto LAB_18000c73e;
              }
              if (*piVar6 == -0x3fffff6d) {
                uVar8 = 0x85;
                goto LAB_18000c73e;
              }
              if (*piVar6 == -0x3ffffd4c) {
                uVar8 = 0x8e;
                goto LAB_18000c73e;
              }
              uVar8 = uVar1;
              if (*piVar6 == -0x3ffffd4b) {
                uVar8 = 0x8d;
                goto LAB_18000c73e;
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


/* Address: 0x18000c76c; Evidence: ev_6d458c3fd3b4adc006a1b89bc4bc3493ef6ab0d65bc4effbda3a5842957ef09f */

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
  FUN_18000c7a4(param_3);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000c7a4; Evidence: ev_d2547677d3def61c1fe19dd45b97ea0e8e79c37f8492b95191936ddd3fb64e90 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c7a4(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_180024308 != '\0') {
    return;
  }
  LOCK();
  DAT_1800242f8 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_180024300 != DAT_180023000) {
      bVar1 = (byte)DAT_180023000 & 0x3f;
      (*(code *)((DAT_180023000 ^ DAT_180024300) >> bVar1 |
                (DAT_180023000 ^ DAT_180024300) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180024438;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000c813;
    puVar2 = &DAT_180024450;
  }
  FUN_18000d14c(puVar2);
LAB_18000c813:
  if (*(int *)*param_1 == 0) {
    FUN_18000c578((undefined8 *)&DAT_180017330,(undefined8 *)&DAT_180017350);
  }
  FUN_18000c578((undefined8 *)&DAT_180017358,(undefined8 *)&DAT_180017360);
  if (*(int *)param_1[1] == 0) {
    DAT_180024308 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}


/* Address: 0x18000c864; Evidence: ev_0298484c87002a7ff0c344dc5ab8a3666d5dc6e48b408f7fd0a24dc332a082d1 */

void FUN_18000c864(uint param_1,undefined4 param_2,int param_3)

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
      FUN_18000c978(param_1);
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
    bVar2 = FUN_18000e05c();
    if ((int)CONCAT71(extraout_var,bVar2) == 1) {
      bVar2 = false;
    }
    else {
      uVar3 = FUN_18000e028();
      bVar2 = (char)uVar3 == '\0';
    }
    if (local_res18[0] == 0) {
      FUN_18000c948(param_1,bVar2);
      pcVar1 = (code *)swi(3);
      (*pcVar1)();
      return;
    }
  }
  return;
}


/* Address: 0x18000c948; Evidence: ev_45c54953df927456cbf9d66efbcecb37b968c98563ee43205ec68333b76a7576 */

void FUN_18000c948(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000c978(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}


/* Address: 0x18000c978; Evidence: ev_bb34e3f3efbf306f86e8b1589f46c8f45b6a10c13badde6ec4b3c2d462e39054 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c978(uint param_1)

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


/* Address: 0x18000c9dc; Evidence: ev_3d5d01dc8660bc7d8744aa243b6800c29a1b7ff11a3311f88cbb710ca76b0212 */

void FUN_18000c9dc(undefined8 param_1)

{
  DAT_180024300 = param_1;
  return;
}


/* Address: 0x18000c9e4; Evidence: ev_508d6d9984cf42d1ee068fa310974216a427f78bfb8c71e7a67ecfae5708ad87 */

void FUN_18000c9e4(void)

{
  FUN_18000c864(0,0,1);
  return;
}


/* Address: 0x18000c9f4; Evidence: ev_fae916884248673ad18627ef66be4d9df2112161d42b37878c888b48d9c941ec */

void FUN_18000c9f4(uint param_1)

{
  FUN_18000c864(param_1,2,0);
  return;
}


/* Address: 0x18000ca00; Evidence: ev_2f068990a66fd737e5b514e5251b995a237d3e81a13156d8b86109e8cced5cdb */

undefined4 FUN_18000ca00(void)

{
  return DAT_1800242f8;
}


/* Address: 0x18000ca08; Evidence: ev_dc16409011eb94ab1105364e6d71bfd9f35fa7c444adc065f3e566692e3167bb */

void FUN_18000ca08(char *param_1,undefined8 *param_2,char *param_3,longlong *param_4,
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
      iVar5 = FUN_18000f998((int)cVar3);
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
        goto LAB_18000caba;
      }
    }
    param_1 = pcVar6;
  } while ((bVar2) || ((cVar3 != ' ' && (cVar3 != '\t'))));
  if (param_3 != (char *)0x0) {
    param_3[-1] = '\0';
  }
LAB_18000caba:
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
        iVar5 = FUN_18000f998((int)*pcVar6);
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


/* Address: 0x18000cbc8; Evidence: ev_a8903fecadb283d1e5e3c4a2f732343e4f4a1a8edc442c548ede5a5cf87d8b39 */

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
      FUN_18000dfd0((LPVOID)0x0);
      return pvVar2;
    }
  }
  return (LPVOID)0x0;
}


/* Address: 0x18000cc28; Evidence: ev_b748c57ab9dff3e9ee66db1b5edf83df74281d61221fd161c06554dee84e8fb8 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000cc28(int param_1)

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
    p_Var3 = FUN_18000d6a4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000c3ec();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_18000ecb4((HMODULE)0x0,&DAT_180024310,0x104);
  _DAT_180024700 = &DAT_180024310;
  if ((DAT_180024720 == (char *)0x0) || (pcVar6 = DAT_180024720, *DAT_180024720 == '\0')) {
    pcVar6 = &DAT_180024310;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000ca08(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_18000d6a4();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000ca08(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_18000e470(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_18000dfd0(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_18000dfd0(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_180024708 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_180024708 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_180024710 = plVar2;
      FUN_18000dfd0((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_18000cd8d;
    }
    _DAT_180024708 = (int)local_res18 + -1;
    DAT_180024710 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_18000cd8d:
  FUN_18000dfd0(plVar4);
  return uVar7;
}


/* Address: 0x18000cda8; Evidence: ev_b7b45a1dd60fe3e1e29a04d2ecb522b1302de09cad16f232207935a883dda93f */

undefined8 FUN_18000cda8(void)

{
  undefined8 *puVar1;
  LPSTR pCVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180024418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pCVar2 = FUN_18000fb48();
    if (pCVar2 == (LPSTR)0x0) {
      FUN_18000dfd0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000ce1c(pCVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180024418;
        puVar1 = DAT_180024430;
      }
      DAT_180024430 = puVar1;
      DAT_180024418 = puVar4;
      FUN_18000dfd0((LPVOID)0x0);
      FUN_18000dfd0(pCVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x18000ce1c; Evidence: ev_dcfe4a3ef52f10dbba2ff8443c341039ba5c83159691b52a990ccc551e167af8 */

undefined8 * FUN_18000ce1c(char *param_1)

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
LAB_18000ce7f:
    FUN_18000dfd0((LPVOID)0x0);
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
          FUN_18000dfd0((LPVOID)0x0);
          goto LAB_18000ce7f;
        }
        uVar5 = FUN_18000d420(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_18000dfd0((LPVOID)0x0);
      }
    }
    FUN_18000dfd0((LPVOID)0x0);
  }
  return puVar3;
}


/* Address: 0x18000cf30; Evidence: ev_62ef792588fdf4442efb706510c343e1449fb3ee7ec6bdad0b478f7650c96720 */

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
      FUN_18000dfd0(pvVar1);
      puVar2 = puVar2 + 1;
      pvVar1 = (LPVOID)*puVar2;
    }
    FUN_18000dfd0(param_1);
  }
  return;
}


/* Address: 0x18000cf74; Evidence: ev_016e4e11a9b19892da8e30f77a568267f0834823e369a8f3470e7340383cb594 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180024430) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18000cf90; Evidence: ev_6b11b9f760a90983816382f8965688653760bf5daa6f020282096b25cc22d045 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180024428) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18000cfac; Evidence: ev_643abde648cd4d0a3e3477a11f56e800a7be7ea894d06d257dc1e5b78848b53a */

void FUN_18000cfac(void)

{
  uninitialize_environment_internal<>(&DAT_180024418);
  uninitialize_environment_internal<>((undefined8 *)&DAT_180024420);
  free_environment<>(DAT_180024430);
  free_environment<>(DAT_180024428);
  return;
}


/* Address: 0x18000cff0; Evidence: ev_c022987670fe59694dcf6d7a52abf184f38c1fdbf6c0f28af32964fa5531e0a2 */

undefined8 thunk_FUN_18000cda8(void)

{
  undefined8 *puVar1;
  LPSTR pCVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180024418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pCVar2 = FUN_18000fb48();
    if (pCVar2 == (LPSTR)0x0) {
      FUN_18000dfd0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000ce1c(pCVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180024418;
        puVar1 = DAT_180024430;
      }
      DAT_180024430 = puVar1;
      DAT_180024418 = puVar4;
      FUN_18000dfd0((LPVOID)0x0);
      FUN_18000dfd0(pCVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x18000cff8; Evidence: ev_3f68d41b1830738868f25d977ca09f469f6e5a9da229debac0b7204ff67d6d88 */

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
  uVar1 = FUN_18000d034(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000d034; Evidence: ev_aaf9b80d18387222e97efc24ac79079455497267af97c57d826d2aa336bedf8d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000d034(undefined8 *param_1)

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
  
  uVar1 = DAT_180023000;
  puVar8 = *(ulonglong **)*param_1;
  if (puVar8 == (ulonglong *)0x0) {
    uVar2 = 0xffffffff;
  }
  else {
    bVar5 = (byte)DAT_180023000 & 0x3f;
    puVar10 = (ulonglong *)
              ((DAT_180023000 ^ *puVar8) >> bVar5 | (DAT_180023000 ^ *puVar8) << 0x40 - bVar5);
    puVar8 = (ulonglong *)
             ((DAT_180023000 ^ puVar8[1]) >> bVar5 | (DAT_180023000 ^ puVar8[1]) << 0x40 - bVar5);
    if ((longlong)puVar10 - 1U < 0xfffffffffffffffe) {
      uVar7 = (uint)DAT_180023000 & 0x3f;
      puVar9 = puVar8;
      uVar3 = DAT_180023000;
      puVar13 = puVar10;
      while (puVar8 = puVar8 + -1, puVar10 <= puVar8) {
        if (*puVar8 != uVar1) {
          uVar3 = *puVar8 ^ uVar3;
          *puVar8 = uVar1;
          (*(code *)(uVar3 >> (sbyte)uVar7 | uVar3 << 0x40 - (sbyte)uVar7))();
          uVar7 = (uint)DAT_180023000 & 0x3f;
          uVar11 = DAT_180023000 ^ **(ulonglong **)*param_1;
          uVar3 = DAT_180023000 ^ (*(ulonglong **)*param_1)[1];
          sVar6 = (sbyte)uVar7;
          puVar12 = (ulonglong *)(uVar11 >> sVar6 | uVar11 << 0x40 - sVar6);
          puVar4 = (ulonglong *)(uVar3 >> sVar6 | uVar3 << 0x40 - sVar6);
          uVar3 = DAT_180023000;
          if ((puVar12 != puVar13) || (puVar4 != puVar9)) {
            puVar8 = puVar4;
            puVar9 = puVar4;
            puVar10 = puVar12;
            puVar13 = puVar12;
          }
        }
      }
      if (puVar10 != (ulonglong *)0xffffffffffffffff) {
        FUN_18000dfd0(puVar10);
        uVar3 = DAT_180023000;
      }
      **(ulonglong **)*param_1 = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 8) = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 0x10) = uVar3;
    }
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x18000d14c; Evidence: ev_534b13a40a31ab33889a4f0bd9c720d62d0fc9a67831ff351d988d44da0ef71d */

void FUN_18000d14c(undefined8 param_1)

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


/* Address: 0x18000d190; Evidence: ev_b24d284501dcb96ca371752bfc41b50591f58979b39cc3ee63763843a09e0f65 */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180023000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180023000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}


/* Address: 0x18000d1c0; Evidence: ev_7d961c5375007f10cceb8bbdb68c9e327e45c695e3b9751c7d8e99021fad0d69 */

undefined8 FUN_18000d1c0(void)

{
  DAT_180024470 = &PTR_DAT_1800230a0;
  return 0x180023001;
}


/* Address: 0x18000d1e0; Evidence: ev_c183ba2076d93b5e00d4ee2d6523ad29ee8abe23f9427fb2582970302ebc9ace */

undefined8 FUN_18000d1e0(void)

{
  undefined8 uVar1;
  
  _initialize_onexit_table((longlong *)&DAT_180024438);
  uVar1 = _initialize_onexit_table((longlong *)&DAT_180024450);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x18000d210; Evidence: ev_92e400eced96115389f5e79801e43f39b58ecd4c7f9d3131da01f96aad9cb60e */

undefined1 FUN_18000d210(void)

{
  return 1;
}


/* Address: 0x18000d220; Evidence: ev_892ed408e25a521e72dd1cda94c70fe6b85c226086feecfe8d08e71261680ed7 */

undefined1 FUN_18000d220(void)

{
  FUN_18000cfac();
  return 1;
}


/* Address: 0x18000d230; Evidence: ev_68e4afc280385006fbca2bd71c6b62855e1786abbc9d35e6cdc5651412e04981 */

undefined1 FUN_18000d230(void)

{
  undefined8 uVar1;
  
  uVar1 = DAT_180023000;
  FUN_18000c290(DAT_180023000);
  FUN_18000c4a0(uVar1);
  FUN_1800105e4(uVar1);
  FUN_180010860(uVar1);
  FUN_18000c9dc(uVar1);
  return 1;
}


/* Address: 0x18000d270; Evidence: ev_b17ee684bc8c2ea2a052948330cd6ba1e4bc7276e06ce894704fc0296b3c3c3a */

void FUN_18000d270(void)

{
  __vcrt_uninitialize('\0');
  return;
}


/* Address: 0x18000d280; Evidence: ev_0099faf46f1fdb2c700d0d08738c27ee37bb00d7968ba6f787206bd0e29b80ad */

undefined8 FUN_18000d280(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_1800246f0;
  uVar2 = (ulonglong)uVar1;
  *DAT_1800246f0 = *DAT_1800246f0 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_1800246f0 != (uint *)&DAT_180023210)) {
    uVar2 = FUN_18000dfd0(DAT_1800246f0);
    DAT_1800246f0 = (uint *)&DAT_180023210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}


/* Address: 0x18000d2c0; Evidence: ev_f3f5282961ea777ab526721550cd4de9f271cdeeec053fa9cca577c459f91c58 */

undefined1 FUN_18000d2c0(void)

{
  FUN_18000dfd0(DAT_180024c30);
  DAT_180024c30 = (LPVOID)0x0;
  FUN_18000dfd0(DAT_180024c38);
  DAT_180024c38 = (LPVOID)0x0;
  FUN_18000dfd0(DAT_180024710);
  DAT_180024710 = (LPVOID)0x0;
  FUN_18000dfd0(DAT_180024718);
  DAT_180024718 = (LPVOID)0x0;
  return 1;
}


/* Address: 0x18000d31c; Evidence: ev_3d0000b38442e741b66f6a7c12a2f5aca9457e727002539e478fa17eed4178b6 */

void FUN_18000d31c(void)

{
  FUN_1800104b0(&PTR_FUN_180018800,(undefined8 *)&DAT_180018900);
  return;
}


/* Address: 0x18000d330; Evidence: ev_851de36cbb2dd4feec44b04463c2a4c1b9c7a0cef698e9053d36c5bf42130a67 */

bool FUN_18000d330(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_18000dba8();
  return p_Var1 != (__acrt_ptd *)0x0;
}


/* Address: 0x18000d344; Evidence: ev_28941a31394c591198352e667bec7f14093ed6d388fa7a959ca2bcd261a5091c */

undefined1 FUN_18000d344(void)

{
  FUN_18000daf8();
  return 1;
}


/* Address: 0x18000d354; Evidence: ev_34c3b6040e4a2b4cc5415de671227ef7f80dc04bddf641b4b84853e4e98be8ff */

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
    if (DAT_180024c28 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_180010530(0x180018800,0x180018900);
  return uVar2;
}


/* Address: 0x18000d38c; Evidence: ev_4a684dc6a7172e94b4866f81dd2d94a61bc4f79169639da30d0d68f1f270d682 */

undefined4 FUN_18000d38c(void)

{
  undefined4 uVar1;
  
  uVar1 = FUN_18000dcf0();
  return CONCAT31((int3)((uint)uVar1 >> 8),1);
}


/* Address: 0x18000d39c; Evidence: ev_8c415ee83f2fb808c406c25f1b2d078ee56373b965eaf9213075ca2287535c40 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000d39c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000db48();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000d3bc; Evidence: ev_7ddab4fb68f2fd356b4fa8e7edccaecf7d1b32576d6fc48ea8723da67c813389 */

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
    FUN_180010604(0x16);
  }
  if ((DAT_180023080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x18000d407;
    FUN_18000c120(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x18000d411;
  FUN_18000c9f4(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x18000d420; Evidence: ev_b46177d2d39db629537630c9426846f3f3b6a1bd4a9c881bcc9e5cc1d5f8d332 */

undefined8 FUN_18000d420(char *param_1,longlong param_2,longlong param_3)

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
      p_Var2 = FUN_18000d6a4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000c3ec();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_18000d6a4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000c3ec();
  return 0x16;
}


/* Address: 0x18000d4a0; Evidence: ev_e2fbadea3d025e50eaf276b7e6852bd00ee291903562bbe533c090164da7f7e4 */

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
      pvVar3 = HeapAlloc(DAT_1800247e8,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011b30();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000c460(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000d6a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000d4b0; Evidence: ev_74a3df318ae9877ff9297c81bfbcde8612418071afa0a9919de6125d346ba1c4 */

void FUN_18000d4b0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000c000(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_18000dd48(lVar1,param_1 + 3,param_1[1]);
  FUN_18000ddb4(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}


/* Address: 0x18000d530; Evidence: ev_e5485bee7bdf964a42908f24af1d58f96bd30b277b03f6b8520219f3028b60aa */

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


/* Address: 0x18000d564; Evidence: ev_e1377c9ea94973a6d443f104457345c9cea97880c9c04bc59c9cd8d85f66a237 */

uint FUN_18000d564(uint param_1)

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
      return *(uint *)(&DAT_180018904 + (ulonglong)(param_1 - 1) * 8);
    }
    if (param_1 < 0x719) {
      uVar5 = 0x2d;
      uVar7 = 0;
      uVar8 = 0x2c;
      do {
        uVar9 = uVar5 >> 1;
        if (uVar9 == 0) {
          if (uVar5 != 0) {
            puVar4 = (uint *)(&DAT_180018900 + uVar7 * 8);
            if (param_1 != *puVar4) {
              puVar4 = (uint *)0x0;
            }
LAB_18000d605:
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
        puVar4 = (uint *)(&DAT_180018900 + lVar1 * 8);
        if (param_1 == *puVar4) goto LAB_18000d605;
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


/* Address: 0x18000d634; Evidence: ev_b527d5cbddf3b72a3dff40b3240554930670b3fb9258c3548dfc150b1b9ea7fd */

void FUN_18000d634(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = FUN_18000d680();
  *(uint *)p_Var2 = param_1;
  uVar1 = FUN_18000d564(param_1);
  p_Var2 = FUN_18000d6a4();
  *(uint *)p_Var2 = uVar1;
  return;
}


/* Address: 0x18000d65c; Evidence: ev_e9c3707e8375731cdb3c54b151f5d0998b3b6e98d653b60782a4aa504b59ebe9 */

void FUN_18000d65c(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_18000d564(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}


/* Address: 0x18000d680; Evidence: ev_2ed5085469b349676f834dd353f1cc96b53d4f4aa79670eea2df3565d175bf72 */

__acrt_ptd * FUN_18000d680(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_18000dba8();
  p_Var2 = p_Var1 + 0x24;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_180023094;
  }
  return p_Var2;
}


/* Address: 0x18000d6a4; Evidence: ev_ae3f95226b8f5066b55371c06c57f5b02b4f5bfe613734aa13befc265e7b055d */

__acrt_ptd * FUN_18000d6a4(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_18000dba8();
  p_Var2 = p_Var1 + 0x20;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_180023090;
  }
  return p_Var2;
}


/* Address: 0x18000d6c8; Evidence: ev_15eb51878307cf450a2af4014879900652ac432238ccbcad65665ab1b2e4cf18 */

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


/* Address: 0x18000d708; Evidence: ev_8a27a595b392f7b20b654920362e0ab62aec9163992ffae81f250ca71657a9f5 */

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


/* Address: 0x18000d748; Evidence: ev_a85000b77446e3c999d7154422ba372af71b2d0502da341d87ac7e3ae92ebc28 */

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


/* Address: 0x18000d790; Evidence: ev_24d89e912ac088a6969fee1a46f1536f527b6e3d25afd1c9020dc3d04ac405fb */

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
    if ((iVar1 == 1) && (piVar2 != (int *)&DAT_180023210)) {
      FUN_18000dfd0(piVar2);
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000d7f0; Evidence: ev_df7fed402c635859a315defc0dc79be5c2897e56e96c1aca2d4af38ae315b7bd */

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
  local_28 = &DAT_180024470;
  *(undefined4 *)(param_1 + 0x28) = 1;
  *(undefined **)param_1 = &DAT_180018660;
  *(undefined4 *)(param_1 + 0x3a8) = 1;
  *(undefined **)(param_1 + 0x88) = &DAT_180023210;
  *(undefined2 *)(param_1 + 0xbc) = 0x43;
  *(undefined2 *)(param_1 + 0x1c2) = 0x43;
  *(undefined8 *)(param_1 + 0x3a0) = 0;
  local_30 = param_1;
  operator()<>(local_res10,local_res20,&local_20,local_res18);
  operator()<>(local_res10,local_38 + 1,&local_18,local_38);
  return;
}


/* Address: 0x18000d8c0; Evidence: ev_47665c48fdb63189542d29e41b1b17411aaadebfc8aa1fc02a52481b4380e873 */

void FUN_18000d8c0(__acrt_ptd *param_1)

{
  if (param_1 != (__acrt_ptd *)0x0) {
    destroy_ptd_array(param_1);
    FUN_18000dfd0(param_1);
  }
  return;
}


/* Address: 0x18000d8e0; Evidence: ev_f2a8ff51824e1ce7437ad0663383304f9ab3f6c43eebc8f2a28dc451af9a9179 */

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
  if (*(undefined **)param_1 != &DAT_180018660) {
    FUN_18000dfd0(*(undefined **)param_1);
  }
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x70));
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x58));
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x60));
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x68));
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x48));
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x50));
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x78));
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x80));
  FUN_18000dfd0(*(LPVOID *)(local_20 + 0x3c0));
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  operator()<>(local_res10,local_28 + 1,&local_10,local_28);
  return;
}


/* Address: 0x18000d9d8; Evidence: ev_47e1a69320e93dddd9b2b7db3a57197fb4b1d8e14d5eb13958a0960b43a79fff */

__acrt_ptd * FUN_18000d9d8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_180023098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_180023098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_180023098,(PVOID)0x0);
        FUN_18000dfd0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_18000dfd0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_180023098,(PVOID)0x0);
    FUN_18000dfd0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}


/* Address: 0x18000da90; Evidence: ev_ee566cd135f6474d1c667569ef814a7f7b0771f6a5de1af6bcde37a74e811f36 */

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
    if (((ppuVar1 != DAT_180024470) && (ppuVar1 != &PTR_DAT_1800230a0)) &&
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


/* Address: 0x18000daf8; Evidence: ev_0acd781884ea3bb88f1ed7408b36eb9109a7d971694a0b559b1fdbc0a2b141d8 */

void FUN_18000daf8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_180023098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_180023098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_180023098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_18000dfd0(p_Var1);
  }
  return;
}


/* Address: 0x18000db48; Evidence: ev_a2f815fb64bbc6595ba824941f2ad8fe50719615243e166806ccd73651b97aa7 */

void FUN_18000db48(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_18000dba8();
  if (p_Var1 != (__acrt_ptd *)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000db64; Evidence: ev_b25304f49a9deaf2e06ffe45fab4886bc222887b5da9e090e05ae5664a8c8707 */

void FUN_18000db64(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_180023098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_180023098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_18000d9d8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_18000dba0;
    }
    return;
  }
LAB_18000dba0:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000dba8; Evidence: ev_429b1177dd87f39ed2cfd20b4056a267717035b19f9bd6d177d95d632f674627 */

__acrt_ptd * FUN_18000dba8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180024468 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_180023098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_180023098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000d9d8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_180023098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18000ff7c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000d9d8();
    }
  }
  return p_Var2;
}


/* Address: 0x18000dc38; Evidence: ev_6308a1c2bd55612b3de5f8d170342812acf79b2ca85f0003d59844b6d5ed3d63 */

__acrt_ptd * FUN_18000dc38(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_180023098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_180023098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_18000d9d8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}


/* Address: 0x18000dca0; Evidence: ev_f4679feabc21d086ef9f7fa21a525e6827fb7905d9e2549f301196a4d3427526 */

ulonglong FUN_18000dca0(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180024468 = FUN_180010120();
  DAT_180023098 = FlsAlloc(FUN_18000d8c0);
  uVar2 = CONCAT44(extraout_var,DAT_180023098);
  if (DAT_180023098 != 0xffffffff) {
    p_Var3 = FUN_18000dba8();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_18000dcf0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x18000dcf0; Evidence: ev_927f7eb137cb477cbf706c68adedcb53867eb972b592715d3ba684adeb44b63f */

undefined4 FUN_18000dcf0(void)

{
  BOOL in_EAX;
  
  if (DAT_180023098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_180023098);
    DAT_180023098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}


/* Address: 0x18000dd14; Evidence: ev_838fed4875facf4aec87aaf8b95f406e81236306df6cd9da5333eed4f21ab718 */

/* Library Function - Single Match
    __acrt_update_locale_info
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_update_locale_info(longlong param_1,longlong *param_2)

{
  undefined **ppuVar1;
  
  if ((*param_2 != DAT_180024470) && ((DAT_180023858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x18000dd48; Evidence: ev_d68a9d9dc51a2a740c1b750730418db0385c52c4174be66e01f2bc2b095c2d7d */

void FUN_18000dd48(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_180024470)[param_3]) && ((DAT_180023858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x18000dd80; Evidence: ev_1bab89a12a75f5ebdf269ebea36c6a820d8dd97b5e24fed9585cc546868b305e */

void FUN_18000dd80(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_1800246f0) && ((DAT_180023858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_18000f640();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x18000ddb4; Evidence: ev_c63d36461a4eadde604c352f7f0739612be8a1fa114ee1f63d63a07504bfb1a3 */

void FUN_18000ddb4(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_1800246f0)[param_3]) && ((DAT_180023858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_18000f640();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x18000ddec; Evidence: ev_56f52da5d29621834d5b8f7c1df50019ab76dfaefbf33917b18f378a555bc814 */

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
  for (plVar2 = &DAT_180024470; plVar2 != &DAT_180024478; plVar2 = plVar2 + 1) {
    if ((undefined **)*plVar2 != &PTR_DAT_1800230a0) {
      ppuVar1 = _updatetlocinfoEx_nolock(plVar2,&PTR_DAT_1800230a0);
      *plVar2 = (longlong)ppuVar1;
    }
  }
  __acrt_unlock(*(int *)param_3);
  return;
}


/* Address: 0x18000de5c; Evidence: ev_f6d31defce6e3052e46415105dfce7d0d1083f95a16c55005c20f02a2a57fd12 */

undefined4 FUN_18000de5c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18002446c;
  LOCK();
  DAT_18002446c = 1;
  UNLOCK();
  return uVar1;
}


/* Address: 0x18000de70; Evidence: ev_7ea396ec48e9b3e5cf5034bc02b2f439cb493fe778d92ad93aa1b52a14cc7ea6 */

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


/* Address: 0x18000dea0; Evidence: ev_fb772384a9f694455cb209693f7c6b6ea996ae23400b43eaac8c872deb281b1a */

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
    BVar1 = InitializeCriticalSectionEx((LPCRITICAL_SECTION)(&DAT_180024480 + uVar2 * 0x28),4000,0);
    if (BVar1 == 0) {
      uVar2 = __acrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_1800246d8 = DAT_1800246d8 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 < 0xf);
  return CONCAT71((int7)(CONCAT44(extraout_var,BVar1) >> 8),1);
}


/* Address: 0x18000dee8; Evidence: ev_cb816dad554d8e68b31d9e61798bbc64c36a30e6295f546eed8702eda26a047c */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000defa. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_180024480 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x18000df10; Evidence: ev_572725c0338fe3aa29f2953107b940ec7a987e2b08f5d4bb7683aa1312d5fd23 */

/* Library Function - Single Match
    __acrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_1800246d8;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_180024480 + uVar1 * 0x28));
    DAT_1800246d8 = DAT_1800246d8 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000df48; Evidence: ev_01047349d8ef797808def6d396d297ce8a8b5a9f6284e3c658f6cd3200f62860 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000df5a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_180024480 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x18000df70; Evidence: ev_e6435f5794a162ab5d084436a437333234a8af7586cd5f2ccf32f894adff18e0 */

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
      pvVar3 = HeapAlloc(DAT_1800247e8,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011b30();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000c460(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000d6a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000dfd0; Evidence: ev_808f2751b6b6739337e4fd25b7d324efe059ad42452ab41ae8b45f2addfacda1 */

void FUN_18000dfd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_1800247e8,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000d564(DVar2);
    p_Var4 = FUN_18000d6a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000e028; Evidence: ev_67d9f542be3ab7626bf8b54eb0aad6c48935c8b4c02026c537626c337807141f */

uint FUN_18000e028(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}


/* Address: 0x18000e044; Evidence: ev_1098789fd237db21bb00c3db4c3cb373c8c4b4d65fcf6b3108e2c818c2219960 */

uint FUN_18000e044(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}


/* Address: 0x18000e05c; Evidence: ev_d3da7063875d2b1630028c6b64a6d2e8a58f4c1003678433d94d589d7746f355 */

bool FUN_18000e05c(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_18000e044();
  if ((char)uVar1 == '\0') {
    FUN_18000febc(local_res8);
  }
  return local_res8[0] != 1;
}


/* Address: 0x18000e090; Evidence: ev_ce3efc12b768c179ebfcaa6fcc9170a2811965d950f7045f2b7e1601cdd7d5c8 */

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
      pvVar3 = HeapAlloc(DAT_1800247e8,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011b30();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000c460(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000d6a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000e110; Evidence: ev_e353f88e7faa2173642d8fe65662884756be116e36020032cf447039387da031 */

ulonglong FUN_18000e110(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}


/* Address: 0x18000e124; Evidence: ev_28c55e5d53d5ff30b24a67acb25c0909c120ff0a5fcd0cb6ff5086cc10082238 */

uint FUN_18000e124(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_18000dfd0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_18000f9d8(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_18000dfd0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_18000f9d8(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000d634(DVar2);
      p_Var4 = FUN_18000d6a4();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_18000dfd0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x18000e2c4; Evidence: ev_749686d1598221ffeb69501ae99ced304be214ae46ee72c9e40cfd091ccfeebe */

uint FUN_18000e2c4(LPCWSTR param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  uint uVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  bool bVar8;
  
  if (param_1 == (LPCWSTR)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      FUN_18000dfd0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != L'\0') {
      iVar1 = FUN_18000fa68(param_4,0,param_1,-1,(LPSTR)0x0,0,(LPBOOL)0x0,(LPBOOL)0x0);
      uVar7 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        uVar6 = *(ulonglong *)(param_2 + 0x18);
        if (uVar6 < uVar7) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_18000dfd0(*(LPVOID *)(param_2 + 0x10));
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          pvVar3 = _malloc_base(uVar7);
          *(LPVOID *)(param_2 + 0x10) = pvVar3;
          uVar6 = -(ulonglong)(pvVar3 != (LPVOID)0x0) & uVar7;
          uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
          if (pvVar3 != (LPVOID)0x0) {
            uVar5 = 0;
          }
          *(bool *)(param_2 + 0x28) = pvVar3 != (LPVOID)0x0;
          *(ulonglong *)(param_2 + 0x18) = uVar6;
          if (uVar5 != 0) {
            return uVar5;
          }
        }
        iVar1 = FUN_18000fa68(param_4,0,param_1,-1,*(LPSTR *)(param_2 + 0x10),(int)uVar6,(LPBOOL)0x0
                              ,(LPBOOL)0x0);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000d634(DVar2);
      p_Var4 = FUN_18000d6a4();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_18000dfd0(*(LPVOID *)(param_2 + 0x10));
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
      pvVar3 = _malloc_base(1);
      *(LPVOID *)(param_2 + 0x10) = pvVar3;
      bVar8 = pvVar3 != (LPVOID)0x0;
      uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
      if (bVar8) {
        uVar5 = 0;
      }
      *(bool *)(param_2 + 0x28) = bVar8;
      *(ulonglong *)(param_2 + 0x18) = (ulonglong)bVar8;
      if (uVar5 != 0) {
        return uVar5;
      }
    }
    **(undefined1 **)(param_2 + 0x10) = 0;
  }
  *(undefined8 *)(param_2 + 0x20) = 0;
  return 0;
}


/* Address: 0x18000e470; Evidence: ev_637309acd51f593bda642a260f6a080369d33655563bd73b06990439023174d9 */

ulonglong FUN_18000e470(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_18000d6a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000c3ec();
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
      pbVar4 = FUN_1800120e0(pbVar4,(byte *)&local_res10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000e6ac((longlong)*param_1,0,0,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_18000dfd0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000e5bf;
        }
      }
      else {
        uVar10 = FUN_18000e830((uchar *)*param_1,pbVar4,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_18000dfd0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000e5bf;
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
      FUN_18000dfd0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000dfd0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000e5bf:
      FUN_18000dfd0(plVar8);
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
          iVar1 = FUN_180011f10(pcVar9,(longlong)(local_res20 + (local_res18 - (longlong)pcVar9)),
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
      FUN_18000dfd0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000dfd0((LPVOID)*plVar11);
      }
      FUN_18000dfd0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000e6ac; Evidence: ev_b22ec60412ece67217ef71402ed6bfad1fd3631bcaec9929878c74735c4ff95d */

undefined8 FUN_18000e6ac(longlong param_1,longlong param_2,ulonglong param_3,longlong *param_4)

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
  if (((param_3 != 0) && (iVar1 = FUN_180011f10(pcVar2,uVar8,param_2,param_3), iVar1 != 0)) ||
     (iVar1 = FUN_180011f10(pcVar2 + param_3,uVar8 - param_3,param_1,uVar6), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  if (param_4[1] == param_4[2]) {
    if (*param_4 == 0) {
      pvVar3 = _calloc_base(4,8);
      *param_4 = (longlong)pvVar3;
      FUN_18000dfd0((LPVOID)0x0);
      lVar4 = *param_4;
      if (lVar4 != 0) {
        param_4[1] = lVar4;
        param_4[2] = lVar4 + 0x20;
        goto LAB_18000e802;
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
          FUN_18000dfd0((LPVOID)0x0);
          goto LAB_18000e802;
        }
        FUN_18000dfd0((LPVOID)0x0);
      }
    }
    uVar7 = 0xc;
    FUN_18000dfd0(pcVar2);
  }
  else {
LAB_18000e802:
    *(char **)param_4[1] = pcVar2;
    param_4[1] = param_4[1] + 8;
  }
  FUN_18000dfd0((LPVOID)0x0);
  return uVar7;
}


/* Address: 0x18000e830; Evidence: ev_08d1566a743ec5761a8bb6b8fedf91d2f36053ceb21e9e02865649d88c54f9f0 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000e830(uchar *param_1,uchar *param_2,longlong *param_3)

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
  
  local_48 = DAT_180023000 ^ (ulonglong)auStackY_378;
  while ((param_2 != param_1 &&
         ((0x2d < (byte)(*param_2 - 0x2f) ||
          ((0x200000000801U >> ((longlong)(char)(*param_2 - 0x2f) & 0x3fU) & 1) == 0))))) {
    param_2 = (uchar *)FUN_180012498(param_1,param_2);
  }
  if ((*param_2 == ':') && (param_2 != param_1 + 1)) {
    uVar5 = FUN_18000e6ac((longlong)param_1,0,0,param_3);
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
    FUN_180015110((undefined1 (*) [32])&local_298,0,0x250);
    local_338 = 0;
    local_330 = 0;
    local_328 = (LPCWSTR)0x0;
    local_320 = 0;
    local_318 = 0;
    local_310 = '\0';
    FUN_18000bd80(&local_308,(longlong *)0x0);
    if (*(int *)(local_300 + 0xc) == 0xfde9) {
      if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
      uVar3 = 0xfde9;
    }
    else {
      IVar6 = FUN_18000ff18();
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
    uVar3 = FUN_18000e124((char *)param_1,(longlong)&local_338,local_348,uVar3);
    lpFileName = local_328;
    if (uVar3 != 0) {
      lpFileName = (LPCWSTR)0x0;
    }
    hFindFile = FindFirstFileExW(lpFileName,FindExInfoStandard,&local_298,FindExSearchNameMatch,
                                 (LPVOID)0x0,0);
    if (hFindFile == (HANDLE)0xffffffffffffffff) {
      uVar5 = FUN_18000e6ac((longlong)param_1,0,0,param_3);
      uVar5 = uVar5 & 0xffffffff;
      if (local_310 != '\0') {
        FUN_18000dfd0(local_328);
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
        FUN_18000bd80(&local_2e8,(longlong *)0x0);
        uVar3 = 0xfde9;
        if (*(int *)(local_2e0 + 0xc) == 0xfde9) {
          if (local_2d0 != '\0') {
            *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
          }
        }
        else {
          IVar6 = FUN_18000ff18();
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
        uVar3 = FUN_18000e2c4(local_298.cFileName,(longlong)&local_2c8,local_348,uVar3);
        pcVar2 = local_2b8;
        pcVar8 = local_2b8;
        if (uVar3 != 0) {
          pcVar8 = (char *)0x0;
        }
        if ((*pcVar8 == '.') && ((pcVar8[1] == '\0' || ((pcVar8[1] == '.' && (pcVar8[2] == '\0')))))
           ) {
          if (local_2a0 != '\0') {
            FUN_18000dfd0(local_2b8);
          }
        }
        else {
          uVar7 = FUN_18000e6ac((longlong)pcVar8,(longlong)param_1,uVar5,param_3);
          if ((int)uVar7 != 0) {
            if (local_2a0 != '\0') {
              FUN_18000dfd0(pcVar2);
            }
            FindClose(hFindFile);
            if (local_310 == '\0') {
              return uVar7 & 0xffffffff;
            }
            FUN_18000dfd0(local_328);
            return uVar7 & 0xffffffff;
          }
          uVar5 = local_340;
          if (local_2a0 != (char)uVar7) {
            FUN_18000dfd0(pcVar2);
            uVar5 = local_340;
          }
        }
        BVar4 = FindNextFileW(hFindFile,&local_298);
      } while (BVar4 != 0);
      lVar9 = param_3[1] - *param_3 >> 3;
      if (lVar10 != lVar9) {
        FUN_180011b70((undefined1 *)(*param_3 + lVar10 * 8),lVar9 - lVar10,8,FUN_18000e110);
      }
      FindClose(hFindFile);
      if (local_310 != '\0') {
        FUN_18000dfd0(local_328);
      }
      uVar5 = 0;
    }
  }
  return uVar5;
}


/* Address: 0x18000eb90; Evidence: ev_361b6ec9661526fff8209b6e2cf58c834c55c5895d2360c7064a19e7bc3e4b42 */

ulonglong thunk_FUN_18000e470(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_18000d6a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000c3ec();
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
      pbVar4 = FUN_1800120e0(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000e6ac((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000dfd0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000e5bf;
        }
      }
      else {
        uVar10 = FUN_18000e830((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000dfd0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000e5bf;
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
      FUN_18000dfd0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000dfd0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000e5bf:
      FUN_18000dfd0(plVar8);
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
          iVar1 = FUN_180011f10(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
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
      FUN_18000dfd0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000dfd0((LPVOID)*plVar11);
      }
      FUN_18000dfd0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000eb98; Evidence: ev_fe0a33475545e733d0941380455dcf86808eb855e4ace2c77d813d5e8575031e */

undefined4 FUN_18000eb98(LPCWSTR param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  __acrt_ptd *p_Var3;
  
  if (param_1 == (LPCWSTR)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != L'\0') {
      iVar1 = FUN_18000fa68(param_4,0,param_1,-1,(LPSTR)0x0,0,(LPBOOL)0x0,(LPBOOL)0x0);
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < (ulonglong)(longlong)iVar1) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          goto LAB_18000ebec;
        }
        iVar1 = FUN_18000fa68(param_4,0,param_1,-1,*(LPSTR *)(param_2 + 0x10),
                              (int)*(ulonglong *)(param_2 + 0x18),(LPBOOL)0x0,(LPBOOL)0x0);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000d634(DVar2);
      p_Var3 = FUN_18000d6a4();
      return *(undefined4 *)p_Var3;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
LAB_18000ebec:
      p_Var3 = FUN_18000d6a4();
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


/* Address: 0x18000ecb4; Evidence: ev_69fa73d235874852539e62ee2227cf159bab9ce53ed0625ca6a6f8ce90194602 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000ecb4(HMODULE param_1,undefined8 param_2,ulonglong param_3)

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
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_2a8;
  DVar1 = GetModuleFileNameW(param_1,local_228,0x105);
  if (DVar1 == 0) {
    DVar1 = GetLastError();
    FUN_18000d634(DVar1);
    local_240 = 0;
  }
  else {
    local_240 = 0;
    local_238 = 0;
    local_260 = param_2;
    local_258 = param_3 & 0xffffffff;
    local_250 = param_2;
    local_248 = param_3 & 0xffffffff;
    FUN_18000bd80(&local_280,(longlong *)0x0);
    uVar3 = 0xfde9;
    if (*(int *)(local_278 + 0xc) == 0xfde9) {
      if (local_268 != '\0') {
        *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
      }
    }
    else {
      IVar2 = FUN_18000ff18();
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
    FUN_18000eb98(local_228,(longlong)&local_260,local_288,uVar3);
    local_240 = local_240 & 0xffffffff;
  }
  return local_240;
}


/* Address: 0x18000edd8; Evidence: ev_a056444cce2495192f305cd2c21567ade9f44184d4459a8537498cd37fb05fe1 */

void FUN_18000edd8(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  if (DAT_1800246e0 == (undefined1 (*) [32])0x0) {
LAB_18000ee8b:
    p_Var5 = FUN_18000d6a4();
    *(undefined4 *)p_Var5 = 0x16;
    FUN_18000c3ec();
  }
  else {
    if (puVar4 == (undefined8 *)0x0) {
      FUN_180015110(DAT_1800246e0,0,0x101);
      goto LAB_18000ee8b;
    }
    lVar8 = 2;
    pauVar7 = DAT_1800246e0;
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
  if (DAT_1800246e8 != (undefined1 (*) [32])0x0) {
    pauVar7 = DAT_1800246e8;
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
      goto LAB_18000ef3c;
    }
    FUN_180015110(DAT_1800246e8,0,0x100);
  }
  p_Var5 = FUN_18000d6a4();
  *(undefined4 *)p_Var5 = 0x16;
  FUN_18000c3ec();
LAB_18000ef3c:
  piVar2 = (int *)**(undefined8 **)param_3[1];
  LOCK();
  iVar1 = *piVar2;
  *piVar2 = *piVar2 + -1;
  UNLOCK();
  if ((iVar1 == 1) && ((undefined *)**(undefined8 **)param_3[1] != &DAT_180023210)) {
    FUN_18000dfd0((LPVOID)**(undefined8 **)param_3[1]);
  }
  **(undefined8 **)param_3[1] = *(undefined8 *)(*(longlong *)*param_3 + 0x88);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000efa8; Evidence: ev_9fad3741290aaa2693f65c6f540a4f53a9c21bc43146373b1512673148235162 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_18000bd80(&local_28,(longlong *)0x0);
  DAT_1800246f8 = 0;
  if (param_1 == -2) {
    DAT_1800246f8 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_1800246f8 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_1800246f8 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}


/* Address: 0x18000f028; Evidence: ev_cf73e6033066f90de6c9d8d3b2703fd83f1461da9101d19653de13aa5c17860b */

void FUN_18000f028(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined2 *puVar3;
  longlong lVar4;
  
  FUN_180015110((undefined1 (*) [32])(param_1 + 0x18),0,0x101);
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
    *(undefined1 *)(param_1 + lVar4 + 0x18) = (&DAT_180023228)[lVar4];
    lVar4 = lVar1;
  } while (lVar1 < 0x101);
  do {
    lVar1 = lVar2 + 1;
    *(undefined1 *)(param_1 + lVar2 + 0x119) = (&DAT_180023329)[lVar2];
    lVar2 = lVar1;
  } while (lVar1 < 0x100);
  return;
}


/* Address: 0x18000f0c0; Evidence: ev_a8bf5555d9273010391c8dfc9202f52ded8a0f98cdcd919a9e5e3a075c94855b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000f0c0(longlong param_1)

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
  
  local_18 = DAT_180023000 ^ (ulonglong)auStackY_788;
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
    FUN_18001199c((longlong *)0x0,1,local_718,0x100,local_418,*(uint *)(param_1 + 4),0);
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


/* Address: 0x18000f2b8; Evidence: ev_067fcb2f4bf97909c1cbce3dae50ac84fa601aa3f93b42b52274aec98d2180fa */

ulonglong FUN_18000f2b8(int param_1,char param_2,__acrt_ptd *param_3,__crt_multibyte_data **param_4)

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
      FUN_18000dfd0((LPVOID)0x0);
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
      uVar12 = FUN_18000f65c(iVar8,(longlong)puVar9);
      uVar10 = uVar12 & 0xffffffff;
      if ((int)uVar12 == -1) {
        p_Var13 = FUN_18000d6a4();
        *(undefined4 *)p_Var13 = 0x16;
        FUN_18000dfd0(puVar9);
        uVar10 = 0xffffffff;
      }
      else {
        if (param_2 == '\0') {
          FUN_18000de5c();
        }
        piVar2 = *(int **)(local_res18 + 0x88);
        LOCK();
        iVar8 = *piVar2;
        *piVar2 = *piVar2 + -1;
        UNLOCK();
        if ((iVar8 == 1) && (*(undefined **)(local_res18 + 0x88) != &DAT_180023210)) {
          FUN_18000dfd0(*(undefined **)(local_res18 + 0x88));
        }
        *(undefined4 *)puVar9 = 1;
        *(undefined8 **)(local_res18 + 0x88) = puVar9;
        if ((DAT_180023858 & *(uint *)(local_res18 + 0x3a8)) == 0) {
          local_258 = &local_res18;
          local_250 = &local_res20;
          local_264[0] = 5;
          local_264[1] = 5;
          FUN_18000edd8(local_268,local_264 + 1,&local_258,local_264);
          if (param_2 != '\0') {
            PTR_DAT_180023200 = *local_res20;
          }
        }
        FUN_18000dfd0((LPVOID)0x0);
      }
    }
  }
  return uVar10;
}


/* Address: 0x18000f528; Evidence: ev_31f28853aec670ff81aac727c5b6cccfedcb97ab3796d0a8e4e311b98ad371d7 */

/* Library Function - Single Match
    struct __crt_multibyte_data * __ptr64 __cdecl update_thread_multibyte_data_internal(struct
   __acrt_ptd * __ptr64 const,struct __crt_multibyte_data * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

__crt_multibyte_data * __cdecl
update_thread_multibyte_data_internal(__acrt_ptd *param_1,__crt_multibyte_data **param_2)

{
  int iVar1;
  __crt_multibyte_data *p_Var2;
  
  if (((*(uint *)(param_1 + 0x3a8) & DAT_180023858) == 0) || (*(longlong *)(param_1 + 0x90) == 0)) {
    __acrt_lock(5);
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
    if (p_Var2 != *param_2) {
      if (p_Var2 != (__crt_multibyte_data *)0x0) {
        LOCK();
        iVar1 = *(int *)p_Var2;
        *(int *)p_Var2 = *(int *)p_Var2 + -1;
        UNLOCK();
        if ((iVar1 == 1) && (p_Var2 != (__crt_multibyte_data *)&DAT_180023210)) {
          FUN_18000dfd0(p_Var2);
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


/* Address: 0x18000f5e0; Evidence: ev_032abc86610d92bf56234e34a4d9af40ec658f6c545cff560e703bbd3e28a7e3 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_1800246fc == '\0') {
    DAT_1800246e8 = &DAT_180023550;
    DAT_1800246f0 = &DAT_180023210;
    DAT_1800246e0 = &DAT_180023440;
    p_Var1 = (__acrt_ptd *)FUN_18000db64();
    in_RAX = FUN_18000f2b8(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_1800246f0);
    DAT_1800246fc = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x18000f640; Evidence: ev_36b94a59207e2380e2d569007636ef19987de3d2b04b61366c40e85d8b366ded */

void FUN_18000f640(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = (__acrt_ptd *)FUN_18000db48();
  update_thread_multibyte_data_internal(p_Var1,(__crt_multibyte_data **)&DAT_1800246f0);
  return;
}


/* Address: 0x18000f65c; Evidence: ev_b75d53b3788d2e5b3551255ee6446c344ee2df905a4d158c2f363b2348db4c66 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_18000f65c(int param_1,longlong param_2)

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
  
  local_30 = DAT_180023000 ^ (ulonglong)auStack_68;
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
LAB_18000f8f4:
    FUN_18000f028(param_2);
    return 0;
  }
  puVar6 = &DAT_180023660;
  uVar14 = 1;
  pwVar17 = pwVar8;
  do {
    if (*puVar6 == uVar4) {
      FUN_180015110((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
      pbVar18 = &DAT_180023650;
      lVar9 = 4;
      pbVar7 = &DAT_180023670 + (longlong)pwVar17 * 0x30;
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
                    (((longlong)pwVar17 * 0x30 - param_2) + 0x180023658 + (longlong)puVar13);
        puVar13 = puVar13 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      goto LAB_18000f8ea;
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
      if (DAT_1800246f8 == 0) {
        return 0xffffffff;
      }
      goto LAB_18000f8f4;
    }
    FUN_180015110((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
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
LAB_18000f8ea:
  FUN_18000f0c0(param_2);
  return 0;
}


/* Address: 0x18000f924; Evidence: ev_9cec654a678ef6fb768593c4d42faf0fbc01a7c4caff4eef68d33d9410a7dbc8 */

undefined8 FUN_18000f924(longlong *param_1,uint param_2,uint param_3,byte param_4)

{
  undefined8 uVar1;
  longlong local_28;
  longlong *local_20;
  longlong local_18;
  char local_10;
  
  FUN_18000bd80(&local_28,param_1);
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


/* Address: 0x18000f998; Evidence: ev_f35f985e61bd200797bc1f0005a595c2c66a17833643eede47eb8238f59a6c1b */

void FUN_18000f998(uint param_1)

{
  FUN_18000f924((longlong *)0x0,param_1,0,4);
  return;
}


/* Address: 0x18000f9b0; Evidence: ev_23ad6d86419fe41e87b4125013fa3a9f505f2cca2d47aeb3565468c4b1f496b9 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined1 FUN_18000f9b0(void)

{
  DAT_180024720 = GetCommandLineA();
  _DAT_180024728 = GetCommandLineW();
  return 1;
}


/* Address: 0x18000f9d8; Evidence: ev_7b77f5f5e01e27ca4638d3f834bcec5e0f00f1d65e27150a0bf092536b3d09c6 */

void FUN_18000f9d8(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_18000fa25:
          if (!bVar1) goto LAB_18000fa29;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_18000fa63;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_18000fa25;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_18000fa29;
LAB_18000fa63:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_18000fa29;
  }
  param_2 = 0;
LAB_18000fa29:
                    /* WARNING: Could not recover jumptable at 0x00018000fa29. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}


/* Address: 0x18000fa68; Evidence: ev_94fc6672694244a8bddf6946c29b496d3cce00e5b9619f7348a5fa1f3bcfab61 */

void FUN_18000fa68(uint param_1,uint param_2,LPCWSTR param_3,int param_4,LPSTR param_5,int param_6,
                  LPBOOL param_7,LPBOOL param_8)

{
  LPBOOL lpUsedDefaultChar;
  int iVar1;
  DWORD dwFlags;
  LPBOOL pBVar2;
  bool bVar3;
  
  pBVar2 = (LPBOOL)0x0;
  dwFlags = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_18000fb08;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_18000fb08;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_18000faf9;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_18000fb08;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_18000fb08;
    iVar1 = param_1 - 65000;
LAB_18000faf9:
    if (iVar1 == 0) goto LAB_18000fb08;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    dwFlags = param_2 & 0xffffff7f;
  }
LAB_18000fb08:
  lpUsedDefaultChar = param_8;
  if ((param_1 - 65000 < 2) &&
     (param_7 = pBVar2, lpUsedDefaultChar = pBVar2, param_8 != (LPBOOL)0x0)) {
    *param_8 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000fb3f. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,dwFlags,param_3,param_4,param_5,param_6,(LPCSTR)param_7,
                      lpUsedDefaultChar);
  return;
}


/* Address: 0x18000fb48; Evidence: ev_f1a397adaf09d49f8fdd3dea2fb062163dd11b0652b875d9eb55e3468c9c2b08 */

LPSTR FUN_18000fb48(void)

{
  WCHAR WVar1;
  int iVar2;
  LPWCH pWVar3;
  longlong lVar4;
  LPSTR pCVar6;
  int iVar7;
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
    iVar7 = (int)((longlong)pWVar8 + (2 - (longlong)pWVar3) >> 1);
    iVar2 = FUN_18000fa68(0,0,pWVar3,iVar7,(LPSTR)0x0,0,(LPBOOL)0x0,(LPBOOL)0x0);
    if (iVar2 != 0) {
      pCVar6 = _malloc_base((longlong)iVar2);
      if (pCVar6 != (LPSTR)0x0) {
        iVar2 = FUN_18000fa68(0,0,pWVar3,iVar7,pCVar6,iVar2,(LPBOOL)0x0,(LPBOOL)0x0);
        if (iVar2 == 0) {
          FUN_18000dfd0(pCVar6);
          pCVar6 = (LPSTR)0x0;
        }
        else {
          FUN_18000dfd0((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pCVar6;
      }
      FUN_18000dfd0((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPSTR)0x0;
}


/* Address: 0x18000fc60; Evidence: ev_f7935495383b5e912067ca00942d0f9550074a5c0ea976ecbfe420ef60ce7a9c */

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
      FUN_180015110((undefined1 (*) [32])((longlong)pvVar3 + uVar2),0,uVar4 - uVar2);
    }
  }
  else {
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 0xc;
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x18000fd08; Evidence: ev_47d016591b8b8e6765a80259fb17f20eb1448822c02b3db84a88aa776a212fd5 */

FARPROC FUN_18000fd08(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
LAB_18000fdfa:
      __acrt_lock(0xe);
      local_res18[0] = 0;
      BVar5 = VirtualProtect(&DAT_180028000,0x100,4,local_res18);
      if (BVar5 != 0) {
        pFVar6 = pFVar7;
        if (pFVar7 == (FARPROC)0x0) {
          pFVar6 = (FARPROC)0xffffffffffffffff;
        }
        LOCK();
        (&DAT_180028000)[param_1] = pFVar6;
        UNLOCK();
        BVar5 = VirtualProtect(&DAT_180028000,0x100,2,local_res18);
        if (BVar5 != 0) {
          __acrt_unlock(0xe);
          return pFVar7;
        }
      }
                    /* WARNING: Subroutine does not return */
      abort();
    }
    uVar2 = *param_3;
    hLibModule = (HMODULE)(&DAT_180024730)[uVar2];
    if (hLibModule == (HMODULE)0x0) {
      lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_datetime_l1_1_1_180019150)[uVar2];
      hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
      if ((hLibModule != (HMODULE)0x0) ||
         ((((DVar3 = GetLastError(), DVar3 == 0x57 &&
            (iVar4 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar4 != 0)) &&
           (iVar4 = wcsncmp(lpLibFileName,L"ext-ms-",7), iVar4 != 0)) &&
          (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0))))
      {
        LOCK();
        lVar1 = (&DAT_180024730)[uVar2];
        (&DAT_180024730)[uVar2] = hLibModule;
        UNLOCK();
        if (lVar1 != 0) {
          FreeLibrary(hLibModule);
        }
        goto LAB_18000fea0;
      }
      LOCK();
      (&DAT_180024730)[uVar2] = 0xffffffffffffffff;
      UNLOCK();
    }
    else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_18000fea0:
      pFVar7 = GetProcAddress(hLibModule,param_2);
      goto LAB_18000fdfa;
    }
    param_3 = param_3 + 1;
  } while( true );
}


/* Address: 0x18000febc; Evidence: ev_519037ec25f92e2f6241e7dfe853fe70a6110133df55a46f0811cbaf43ea10ed */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000febc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_1800280d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_1800280d0;
  if ((DAT_1800280d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000fd08(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001979c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}


/* Address: 0x18000ff18; Evidence: ev_ee18f9d4eeafe480f0ad05a4c35cf2d65905db9cf5da5b0c8b74b4a490819e62 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000ff18(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_180028000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_180028000;
  if ((DAT_180028000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000fd08(0,"AreFileApisANSI",(uint *)&DAT_180019738,(uint *)&DAT_18001973c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}


/* Address: 0x18000ff64; Evidence: ev_87d1f0ebe09456ee3e05393135ec50093859e692c604bfc66429b3902598d76c */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000ff64. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}


/* Address: 0x18000ff6c; Evidence: ev_3eb3dcc71843d95202a9157da6d5abd7fb4473979709042a4fc8ee3569e19a60 */

BOOL __stdcall FlsFree(DWORD dwFlsIndex)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000ff6c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsFree(dwFlsIndex);
  return BVar1;
}


/* Address: 0x18000ff74; Evidence: ev_de82fc9e9448998e9be97b2d1e3b046de4d8264cdbe812b3f81259083daa6aa2 */

PVOID __stdcall FlsGetValue(DWORD dwFlsIndex)

{
  PVOID pvVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000ff74. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  pvVar1 = FlsGetValue(dwFlsIndex);
  return pvVar1;
}


/* Address: 0x18000ff7c; Evidence: ev_95fe1a051f5f748a4d55d8c092b1c195708b8626bf9fba1cd73f8d5bb6221fa5 */

void FUN_18000ff7c(void)

{
                    /* WARNING: Could not recover jumptable at 0x00018000ff83. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*DAT_180028018)();
  return;
}


/* Address: 0x18000ff88; Evidence: ev_bfbbf8dfc545d6a772807b5bb2957697366e791c4b5257bbe77b368cf54ecc19 */

BOOL __stdcall FlsSetValue(DWORD dwFlsIndex,PVOID lpFlsData)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000ff88. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsSetValue(dwFlsIndex,lpFlsData);
  return BVar1;
}


/* Address: 0x18000ff90; Evidence: ev_26445bb084ca9665a2445cb2a1661d6ce560a7aead2d981e62aa028697859a38 */

BOOL __stdcall
InitializeCriticalSectionEx(LPCRITICAL_SECTION lpCriticalSection,DWORD dwSpinCount,DWORD Flags)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000ff90. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = InitializeCriticalSectionEx(lpCriticalSection,dwSpinCount,Flags);
  return BVar1;
}


/* Address: 0x18000ff98; Evidence: ev_bce746a9d09c36fb608b087255a97d644b29a0fe71afcd0723f9732dce4a1a6f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000ff98(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_180028090 == (FARPROC)0xffffffffffffffff) {
LAB_180010043:
    Locale = FUN_18001008c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_180028090;
    if (DAT_180028090 == (FARPROC)0x0) {
      pFVar1 = FUN_18000fd08(0x12,"LCMapStringEx",(uint *)&DAT_180019768,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180010043;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}


/* Address: 0x18001008c; Evidence: ev_c8502556cb895ebbb3e842ad64c33e0bafc5f2abe0ad82809d50c3c74c689ddd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18001008c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_1800280a0 == (FARPROC)0xffffffffffffffff) {
LAB_1800100db:
    FUN_1800129ec(param_1);
  }
  else {
    pFVar1 = DAT_1800280a0;
    if (DAT_1800280a0 == (FARPROC)0x0) {
      pFVar1 = FUN_18000fd08(0x14,"LocaleNameToLCID",(uint *)&DAT_180019780,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_1800100db;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}


/* Address: 0x1800100f0; Evidence: ev_675a87cbc6c4c83ff80364e01b348659c09db0b7266afab2265274135d071590 */

bool FUN_1800100f0(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_180028000,0x100,2,local_res8);
  return BVar1 != 0;
}


/* Address: 0x180010120; Evidence: ev_c6c6cbfdd1a9f28ed77fce2f6d2255e6a36a78cbf12fdbeca9f190944cbba0a6 */

bool FUN_180010120(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_180028018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_180028018 == 0;
    if (!bVar2) goto LAB_18001015a;
    pFVar1 = FUN_18000fd08(3,"FlsGetValue2",(uint *)&DAT_180019750,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18001015a:
  return !bVar2;
}


/* Address: 0x180010170; Evidence: ev_422983335e5950eecc145a17d84c984af5d5901f8e51015ebb008eaeaf96254d */

/* Library Function - Single Match
    __acrt_uninitialize_winapi_thunks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_winapi_thunks(char param_1)

{
  HMODULE hLibModule;
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  if (param_1 == '\0') {
    puVar1 = &DAT_180024730;
    do {
      hLibModule = (HMODULE)*puVar1;
      if (hLibModule != (HMODULE)0x0) {
        if (hLibModule != (HMODULE)0xffffffffffffffff) {
          FreeLibrary(hLibModule);
        }
        *puVar1 = 0;
      }
      puVar1 = puVar1 + 1;
      in_RAX = &DAT_1800247e8;
    } while (puVar1 != &DAT_1800247e8);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x1800101d0; Evidence: ev_09586ae9756e103f9a0afa73f7a0e8be796b5387dd5530aac4e2fac45e492792 */

bool FUN_1800101d0(void)

{
  DAT_1800247e8 = GetProcessHeap();
  return DAT_1800247e8 != (HANDLE)0x0;
}


/* Address: 0x180010200; Evidence: ev_cae3930aa203e47364ef017714f2d2a0a6d6626025a09e7638ac5add910d82bd */

undefined1 FUN_180010200(void)

{
  DAT_1800247e8 = 0;
  return 1;
}


/* Address: 0x180010228; Evidence: ev_4ac60002f4b754b91ddc259891ce597b3a7810c3919fd27c5f09da21b8eb60f4 */

void FUN_180010228(void)

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
  
  FUN_180015110((undefined1 (*) [32])&local_78,0,0x68);
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
    if ((int)DAT_180024bf0 < (int)uVar7) {
      uVar7 = DAT_180024bf0;
    }
    uVar8 = (ulonglong)uVar7;
    if (uVar7 != 0) {
      do {
        if ((((*(longlong *)pbVar4 != -1) && (*(longlong *)pbVar4 != -2)) && ((*puVar6 & 1) != 0))
           && (((*puVar6 & 8) != 0 || (DVar2 = GetFileType(*(HANDLE *)pbVar4), DVar2 != 0)))) {
          uVar3 = (ulonglong)((uint)lVar5 & 0x3f);
          lVar1 = (&DAT_1800247f0)[lVar5 >> 6];
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


/* Address: 0x180010328; Evidence: ev_d002fb1e917e667b727237a9aed05ef8ca2f40e1e5aae544c5dee86d5b5345ab */

void FUN_180010328(void)

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
    lVar2 = (&DAT_1800247f0)[(longlong)(int)uVar5 >> 6];
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
          goto LAB_180010406;
        }
      }
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x40;
      *(undefined8 *)(lVar2 + 0x28 + uVar4 * 0x48) = 0xfffffffffffffffe;
      if (DAT_180024c28 != 0) {
        *(undefined4 *)(*(longlong *)(lVar6 + DAT_180024c28) + 0x18) = 0xfffffffe;
      }
    }
    else {
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x80;
    }
LAB_180010406:
    uVar5 = uVar5 + 1;
    lVar6 = lVar6 + 8;
    if (uVar5 == 3) {
      return;
    }
  } while( true );
}


/* Address: 0x180010430; Evidence: ev_b8601e384e0b8c7801fa6fa27fa0114d1c2b41d6fb4e2759345ed28fa11067ee */

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
    FUN_180010228();
    FUN_180010328();
  }
  __acrt_unlock(7);
  return bVar2;
}


/* Address: 0x180010470; Evidence: ev_bbb840baffb7252d1b4ec19016fed6b2907f2acf7a1ff721bd7bb7bf5ed87e93 */

/* Library Function - Single Match
    __acrt_uninitialize_lowio
   
   Library: Visual Studio 2019 Release */

undefined1 __acrt_uninitialize_lowio(void)

{
  ulonglong uVar1;
  
  uVar1 = 0;
  do {
    if (*(LPCRITICAL_SECTION *)((longlong)&DAT_1800247f0 + uVar1) != (LPCRITICAL_SECTION)0x0) {
      __acrt_lowio_destroy_handle_array(*(LPCRITICAL_SECTION *)((longlong)&DAT_1800247f0 + uVar1));
      *(undefined8 *)((longlong)&DAT_1800247f0 + uVar1) = 0;
    }
    uVar1 = uVar1 + 8;
  } while (uVar1 < 0x400);
  return 1;
}


/* Address: 0x1800104b0; Evidence: ev_16cecbf637cd73582afafe4827bcbcf973dcd0ff9fe8276b36189691595d517e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800104b0(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x180010530; Evidence: ev_191401159f7dc0378d1c3d4ae56517962e5c5f78758b878663345e805e43e3ea */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180010530(longlong param_1,longlong param_2)

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


/* Address: 0x18001056c; Evidence: ev_1a2e0b03336862140c391a88cdf848b9dd515e4623dc88fe0f03ff91ebe6dbf2 */

ulonglong FUN_18001056c(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180023000 & 0x3f;
  uVar2 = DAT_180024c08 ^ DAT_180023000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x1800105b4; Evidence: ev_23d2de711e2acc1bfe9fd1ca47793060e20ba7bdc6db8c3de5506e38e85e4d14 */

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
  FUN_18001056c(local_res8,local_res18,local_res8,local_res10);
  return;
}


/* Address: 0x1800105e4; Evidence: ev_6f89ab26a11e3cde89a75d32bf7c8a6dc229c73eb4699d35609529bb016378e0 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_1800105e4(undefined8 param_1)

{
  _DAT_180024bf8 = param_1;
  _DAT_180024c00 = param_1;
  DAT_180024c08 = param_1;
  _DAT_180024c10 = param_1;
  return;
}


/* Address: 0x180010604; Evidence: ev_9d5f81817b74dbac21b8b5884191de937ffca1409da156db8cf0c60b4de281d7 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180010604(uint param_1)

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
LAB_18001065b:
    if (param_1 == 2) {
      puVar8 = (ulonglong *)&DAT_180024bf8;
    }
    else if (param_1 == 6) {
LAB_1800106fd:
      puVar8 = &DAT_180024c08;
      p_Var9 = p_Var10;
    }
    else if (param_1 == 0xf) {
      puVar8 = (ulonglong *)&DAT_180024c10;
    }
    else if (param_1 == 0x15) {
      puVar8 = (ulonglong *)&DAT_180024c00;
      p_Var9 = p_Var10;
    }
    else {
      if (param_1 == 0x16) goto LAB_1800106fd;
      puVar8 = (ulonglong *)0x0;
      p_Var9 = p_Var10;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18001068b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_1800106dd;
      }
      goto LAB_18001065b;
    }
LAB_18001068b:
    p_Var9 = FUN_18000dba8();
    if (p_Var9 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar4 = *(longlong *)p_Var9;
    lVar2 = lVar4 + 0xc0;
    for (; lVar4 != lVar2; lVar4 = lVar4 + 0x10) {
      if (*(uint *)(lVar4 + 4) == param_1) goto LAB_1800106d8;
    }
    lVar4 = 0;
LAB_1800106d8:
    if (lVar4 == 0) {
LAB_1800106dd:
      p_Var9 = FUN_18000d6a4();
      *(undefined4 *)p_Var9 = 0x16;
      FUN_18000c3ec();
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
    bVar6 = (byte)DAT_180023000 & 0x3f;
    pcVar7 = (code *)(((ulonglong)pcVar7 ^ DAT_180023000) >> bVar6 |
                     ((ulonglong)pcVar7 ^ DAT_180023000) << 0x40 - bVar6);
  }
  if (pcVar7 == (code *)0x1) goto LAB_1800107e6;
  if (pcVar7 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_18000c9f4(3);
    pcVar7 = (code *)swi(3);
    uVar5 = (*pcVar7)();
    return uVar5;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar4 = *(longlong *)(p_Var9 + 8);
    *(longlong *)(p_Var9 + 8) = 0;
    if (param_1 == 8) {
      lVar2 = FUN_18000db48();
      local_res10 = *(undefined4 *)(lVar2 + 0x10);
      lVar2 = FUN_18000db48();
      *(undefined4 *)(lVar2 + 0x10) = 0x8c;
      goto LAB_18001079e;
    }
  }
  else {
LAB_18001079e:
    if (param_1 == 8) {
      lVar2 = *(longlong *)p_Var9;
      for (lVar3 = lVar2 + 0x30; lVar3 != lVar2 + 0xc0; lVar3 = lVar3 + 0x10) {
        *(undefined8 *)(lVar3 + 8) = 0;
      }
      goto LAB_1800107e6;
    }
  }
  *puVar8 = DAT_180023000;
LAB_1800107e6:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar7 != (code *)0x1) {
    if (param_1 == 8) {
      lVar2 = FUN_18000db48();
      (*pcVar7)(8,*(undefined4 *)(lVar2 + 0x10));
    }
    else {
      (*pcVar7)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var9 + 8) = lVar4, param_1 == 8)) {
      lVar4 = FUN_18000db48();
      *(undefined4 *)(lVar4 + 0x10) = local_res10;
    }
  }
  return 0;
}


/* Address: 0x180010860; Evidence: ev_0a27696a2178eeae6f550b2d2250853ecd57253bce1e4155f48604ba5ee8dfa8 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180010860(undefined8 param_1)

{
  _DAT_180024c18 = param_1;
  return;
}


/* Address: 0x180010868; Evidence: ev_121973ac5297b0ed02135387676251be7ffed831f18be8b6d117bfc5a7154334 */

void FUN_180010868(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  uint uVar1;
  int iVar2;
  
  FUN_180010d2c(*param_2);
  if ((*(longlong *)*param_3 != 0) &&
     (uVar1 = *(uint *)(*(longlong *)*param_3 + 0x14), (uVar1 >> 0xd & 1) != 0)) {
    if (((((byte)uVar1 & 3) == 2) && ((uVar1 & 0xc0) != 0)) || ((uVar1 >> 0xb & 1) != 0)) {
      if ((*(char *)param_3[2] != '\0') || ((*(uint *)(*(longlong *)*param_3 + 0x14) >> 1 & 1) != 0)
         ) {
        iVar2 = FUN_180010ad4(*(int **)*param_3);
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
  FUN_180010d38(*param_4);
  return;
}


/* Address: 0x180010904; Evidence: ev_f13ed38b73872e2bdb6d0c7ebea261395ea5f41e423660c53af139d71b04d796 */

void FUN_180010904(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  plVar1 = DAT_180024c28 + DAT_180024c20;
  for (plVar3 = DAT_180024c28; local_40 = plVar3, plVar3 != plVar1; plVar3 = plVar3 + 1) {
    local_58 = *plVar3;
    if ((local_58 != 0) && (uVar2 = *(uint *)(local_58 + 0x14), (uVar2 >> 0xd & 1) != 0)) {
      if (((((byte)uVar2 & 3) == 2) && ((uVar2 & 0xc0) != 0)) || ((uVar2 >> 0xb & 1) != 0)) {
        local_20 = param_3[2];
        local_28 = param_3[1];
        local_30 = *param_3;
        local_38 = &local_58;
        local_50 = local_58;
        local_48 = local_58;
        FUN_180010868(local_res10,&local_48,&local_38,&local_50);
      }
      else {
        *(int *)*param_3 = *(int *)*param_3 + 1;
      }
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x1800109e8; Evidence: ev_91be574e4248a8b2e0f42665ca8f29dc522b7d33373cd147b5ccccafb8b627a9 */

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
  FUN_180010904(local_res10,local_28 + 1,&local_20,local_28);
  if (local_res8[0] != '\0') {
    local_res18[0] = local_res20[0];
  }
  return local_res18[0];
}


/* Address: 0x180010a48; Evidence: ev_0888e4538fba3f7b15d36a23842055e38361a3fbccb0a719fa15c43aa589e5f5 */

undefined8 FUN_180010a48(int *param_1,longlong *param_2)

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
      uVar2 = FUN_1800112b4((longlong)param_1);
      uVar2 = FUN_180013704(uVar2,pauVar1,uVar3,param_2);
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


/* Address: 0x180010ad4; Evidence: ev_46c67c09c72d717a6b0608cd1b8f6530dc92d94271db533ce5b500994b3badd0 */

int FUN_180010ad4(int *param_1)

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
  local_20 = DAT_18002446c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800231f8;
    puStack_28 = PTR_DAT_180023200;
  }
  if (param_1 == (int *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_180010b59;
  }
  uVar2 = FUN_180010a48(param_1,local_48);
  if ((int)uVar2 == 0) {
    if (((uint)param_1[5] >> 0xb & 1) != 0) {
      iVar1 = FUN_1800112b4((longlong)param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_180010b34;
    }
    iVar1 = 0;
  }
  else {
LAB_180010b34:
    iVar1 = -1;
  }
LAB_180010b59:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_18000c000(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_18000c000(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}


/* Address: 0x180010ba8; Evidence: ev_ebc910d9155dc6d3ec42f75d3b027baf04c3d7e3a8e2bc6427c3d919e9bb649c */

int __cdecl common_flush_all(bool param_1)

{
  int iVar1;
  
  iVar1 = common_flush_all(true);
  return iVar1;
}


/* Address: 0x180010bb0; Evidence: ev_ac33428495f623dd9f58e4d667511d411d2be5b6b3c67fa0a8b8d09c3c757675 */

undefined8 FUN_180010bb0(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_180024c20 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_180024c20) goto LAB_180010bed;
  }
  DAT_180024c20 = iVar4;
LAB_180010bed:
  DAT_180024c28 = _calloc_base((longlong)DAT_180024c20,8);
  FUN_18000dfd0((LPVOID)0x0);
  if (DAT_180024c28 == (LPVOID)0x0) {
    DAT_180024c20 = 3;
    DAT_180024c28 = _calloc_base(3,8);
    FUN_18000dfd0((LPVOID)0x0);
    if (DAT_180024c28 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_180023768;
  puVar6 = &DAT_180023750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_180024c28) = puVar6;
    if (*(longlong *)((&DAT_1800247f0)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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


/* Address: 0x180010cd0; Evidence: ev_0f1471a422cb78b4a7c222422cfd1039feb78be2664d59ade3f1010010dec0dd */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_180013b54();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_180024c28));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_180024c28) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_18000dfd0(DAT_180024c28);
  DAT_180024c28 = (LPVOID)0x0;
  return;
}


/* Address: 0x180010d2c; Evidence: ev_dac62506ab7dd881b471cc56f926039609063f34dec69e6338fab8b0a9935781 */

void FUN_180010d2c(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180010d30. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x180010d38; Evidence: ev_391cac1ffec84cc3584265c894248652321baac17af4a5e2c24b47709eccf922 */

void FUN_180010d38(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180010d3c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x180010d44; Evidence: ev_04af83eda98c806e0277134fe42a68031ad8cccfe66b28a356b223a1d179f268 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_180010d44(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_180024c40 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_18000d4b0(param_4);
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
              (iVar3 = FUN_18000f9d8(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_18000f9d8(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_1800110b4(param_1,param_2,param_3,(uint *)&DAT_180024c40,(longlong)param_4);
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


/* Address: 0x180010ebc; Evidence: ev_4452106a8e5fdfda374eb1667c29f594337460b72946905df42f301c0be26a7f */

ulonglong FUN_180010ebc(byte *param_1)

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


/* Address: 0x180010ef4; Evidence: ev_2ac5005f745e07bbe15eb50c3051faa37cfa0415e9265ef1472970874bdbfed9 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180010ef4(ulonglong param_1,byte *param_2,ulonglong param_3,uint *param_4,
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
  
  local_48 = DAT_180023000 ^ (ulonglong)auStack_78;
  puVar5 = (uint *)&DAT_180024c48;
  if (param_4 != (uint *)0x0) {
    puVar5 = param_4;
  }
  pbVar6 = (byte *)0x180017f32;
  uVar2 = 1;
  if (param_2 != (byte *)0x0) {
    pbVar6 = param_2;
    uVar2 = param_3;
  }
  puVar10 = (uint *)(-(ulonglong)(param_2 != (byte *)0x0) & param_1);
  if (uVar2 == 0) {
LAB_180010f56:
    uVar2 = 0xfffffffffffffffe;
  }
  else {
    if (*(short *)((longlong)puVar5 + 6) == 0) {
      uVar3 = FUN_180010ebc(pbVar6);
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
LAB_180010fe1:
        uVar9 = (ulonglong)bVar7;
        uVar3 = uVar9;
        if (uVar2 <= uVar9) {
          uVar3 = uVar2;
        }
        while ((ulonglong)((longlong)pbVar6 - (longlong)param_2) < uVar3) {
          bVar1 = *pbVar6;
          pbVar6 = pbVar6 + 1;
          if ((bVar1 & 0xc0) != 0x80) goto LAB_18001108a;
          uVar4 = bVar1 & 0x3f | uVar4 << 6;
        }
        if (uVar3 < uVar9) {
          *(ushort *)(puVar5 + 1) = (ushort)uVar8 & 0xff;
          *(ushort *)((longlong)puVar5 + 6) = (ushort)(byte)(bVar7 - (char)uVar3);
          *puVar5 = uVar4;
          goto LAB_180010f56;
        }
        if ((0x7ff < uVar4 - 0xd800) && (uVar4 < 0x110000)) {
          auStack_60[2] = 0x80;
          auStack_60[3] = 0x800;
          auStack_60[4] = 0x10000;
          if (auStack_60[uVar8 & 0xff] <= uVar4) {
            if (puVar10 != (uint *)0x0) {
              *puVar10 = uVar4;
            }
            uVar2 = FUN_180013cac(-(ulonglong)(uVar4 != 0) & uVar9,(undefined8 *)puVar5);
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
      if ((((byte)(bVar1 - 2) < 3) && (bVar7 != 0)) && (bVar7 < bVar1)) goto LAB_180010fe1;
    }
LAB_18001108a:
    uVar2 = FUN_180013cb4((undefined8 *)puVar5,param_5);
  }
  return uVar2;
}


/* Address: 0x1800110b4; Evidence: ev_4aee4a59abbf23717a5012dba0477ce88398f1de4f8a1d41d0b13466dc75a388 */

void FUN_1800110b4(undefined2 *param_1,byte *param_2,ulonglong param_3,uint *param_4,
                  longlong param_5)

{
  ulonglong uVar1;
  uint local_18 [4];
  
  local_18[0] = 0;
  uVar1 = FUN_180010ef4((ulonglong)local_18,param_2,param_3,param_4,param_5);
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


/* Address: 0x1800110fc; Evidence: ev_5e53b71075a0cbc1aa286550240084ec30005d25eb11b0c215d95f2647c39df8 */

byte * FUN_1800110fc(ushort *param_1,undefined8 *param_2,ulonglong param_3,uint *param_4,
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
      uVar5 = FUN_180010ef4(0,pbVar4,uVar5,param_4,param_5);
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
      uVar5 = FUN_180010ef4((ulonglong)local_res8,pbVar4,uVar5,param_4,param_5);
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


/* Address: 0x1800112b4; Evidence: ev_f4b652b30c2f85df74674b4a914a30b50d96303e78de947efc148cf6563e9111 */

undefined4 FUN_1800112b4(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_18000d6a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000c3ec();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}


/* Address: 0x1800112dc; Evidence: ev_91c388a1320a0ee43842c023a135c5bf2f16e6f8c7e7c9b6314237338c67e453 */

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
    if (((undefined *)puVar2[-2] != &DAT_180023208) &&
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


/* Address: 0x180011368; Evidence: ev_04c699db909a572cec7cbe4fab86963635e827354b7308a38f09169c57a98c20 */

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
       (*(undefined ***)((longlong)param_1 + 0xf8) != &PTR_DAT_180023860)) &&
      (*(int **)((longlong)param_1 + 0xe0) != (int *)0x0)) &&
     (**(int **)((longlong)param_1 + 0xe0) == 0)) {
    piVar1 = *(int **)((longlong)param_1 + 0xf0);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_18000dfd0(piVar1);
      __acrt_locale_free_monetary(*(longlong *)((longlong)param_1 + 0xf8));
    }
    piVar1 = *(int **)((longlong)param_1 + 0xe8);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_18000dfd0(piVar1);
      __acrt_locale_free_numeric(*(undefined8 **)((longlong)param_1 + 0xf8));
    }
    FUN_18000dfd0(*(LPVOID *)((longlong)param_1 + 0xe0));
    FUN_18000dfd0(*(LPVOID *)((longlong)param_1 + 0xf8));
  }
  if ((*(int **)((longlong)param_1 + 0x100) != (int *)0x0) &&
     (**(int **)((longlong)param_1 + 0x100) == 0)) {
    FUN_18000dfd0((LPVOID)(*(longlong *)((longlong)param_1 + 0x108) + -0xfe));
    FUN_18000dfd0((LPVOID)(*(longlong *)((longlong)param_1 + 0x110) + -0x80));
    FUN_18000dfd0((LPVOID)(*(longlong *)((longlong)param_1 + 0x118) + -0x80));
    FUN_18000dfd0(*(LPVOID *)((longlong)param_1 + 0x100));
  }
  __acrt_locale_free_lc_time_if_unreferenced(*(undefined ***)((longlong)param_1 + 0x120));
  puVar3 = (undefined8 *)((longlong)param_1 + 0x128);
  lVar2 = 6;
  puVar4 = (undefined8 *)((longlong)param_1 + 0x38);
  do {
    if ((((undefined *)puVar4[-2] != &DAT_180023208) &&
        (piVar1 = (int *)*puVar4, piVar1 != (int *)0x0)) && (*piVar1 == 0)) {
      FUN_18000dfd0(piVar1);
      FUN_18000dfd0((LPVOID)*puVar3);
    }
    if (((puVar4[-3] != 0) && (piVar1 = (int *)puVar4[-1], piVar1 != (int *)0x0)) && (*piVar1 == 0))
    {
      FUN_18000dfd0(piVar1);
    }
    puVar3 = puVar3 + 1;
    puVar4 = puVar4 + 4;
    lVar2 = lVar2 + -1;
  } while (lVar2 != 0);
  FUN_18000dfd0(param_1);
  return;
}


/* Address: 0x1800114e0; Evidence: ev_90490894d54714a989a5f0cbc259e7f4d7cf5dd30d522ef621fd57fc8fce54c4 */

/* Library Function - Single Match
    __acrt_locale_add_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_add_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180018a70)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + 1;
    UNLOCK();
    return iVar2 + 1;
  }
  return 0x7fffffff;
}


/* Address: 0x180011508; Evidence: ev_161d2aa7caa46cf80ddb92eb17512efd6b0713014cd0c72f8ed41b72ec89d837 */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180018a70)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_18000dfd0(param_1);
  }
  return;
}


/* Address: 0x180011540; Evidence: ev_1b79ff30b90fc0b1830bb12274d60f57923649b0a7c37f32ed490a8e783d6fd9 */

/* Library Function - Single Match
    __acrt_locale_release_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_release_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180018a70)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + -1;
    UNLOCK();
    return iVar2 + -1;
  }
  return 0x7fffffff;
}


/* Address: 0x180011568; Evidence: ev_c1d8b2e7b7e22d352123a794abfb905e92f3fda221eb1376c5156be2b8a293eb */

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
      if (((undefined *)puVar2[-2] != &DAT_180023208) &&
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


/* Address: 0x180011610; Evidence: ev_003ed9a4a9126790c7f342749ca0e11d932c72ae79451bb37de505d9aea3b1bf */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_18000db48();
  if (((DAT_180023858 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_180024470);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}


/* Address: 0x180011680; Evidence: ev_7a9c9fa8b90764b6726acfbabb1fe8824aaad7d72b9e46e283994cd46229b887 */

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
         (ppuVar1 != &PTR_DAT_1800230a0)) {
        __acrt_free_locale(ppuVar1);
      }
    }
  }
  return param_2;
}


/* Address: 0x1800116e8; Evidence: ev_428ec21db60a1ed0b58de30293a217ac3ab0084767d1df2230fda6f952e1b72f */

/* Library Function - Single Match
    __acrt_locale_free_monetary
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_monetary(longlong param_1)

{
  if (param_1 != 0) {
    if (*(undefined **)(param_1 + 0x18) != PTR_DAT_180023878) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x18));
    }
    if (*(undefined **)(param_1 + 0x20) != PTR_DAT_180023880) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x20));
    }
    if (*(undefined **)(param_1 + 0x28) != PTR_DAT_180023888) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x28));
    }
    if (*(undefined **)(param_1 + 0x30) != PTR_DAT_180023890) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x30));
    }
    if (*(undefined **)(param_1 + 0x38) != PTR_DAT_180023898) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x38));
    }
    if (*(undefined **)(param_1 + 0x40) != PTR_DAT_1800238a0) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x40));
    }
    if (*(undefined **)(param_1 + 0x48) != PTR_DAT_1800238a8) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x48));
    }
    if (*(undefined **)(param_1 + 0x68) != PTR_DAT_1800238c8) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x68));
    }
    if (*(undefined **)(param_1 + 0x70) != PTR_DAT_1800238d0) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x70));
    }
    if (*(undefined **)(param_1 + 0x78) != PTR_DAT_1800238d8) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x78));
    }
    if (*(undefined **)(param_1 + 0x80) != PTR_DAT_1800238e0) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x80));
    }
    if (*(undefined **)(param_1 + 0x88) != PTR_DAT_1800238e8) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x88));
    }
    if (*(undefined **)(param_1 + 0x90) != PTR_DAT_1800238f0) {
      FUN_18000dfd0(*(undefined **)(param_1 + 0x90));
    }
  }
  return;
}


/* Address: 0x1800117f4; Evidence: ev_c46307796d5e9103a1a5b2ee4943027717c4575e0f928d9c9a87f4eba0b7d40f */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_180023860) {
      FUN_18000dfd0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_180023868) {
      FUN_18000dfd0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_180023870) {
      FUN_18000dfd0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800238b8) {
      FUN_18000dfd0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_1800238c0) {
      FUN_18000dfd0((undefined *)param_1[0xc]);
    }
  }
  return;
}


/* Address: 0x180011860; Evidence: ev_f8cb0025e5fe52d391d6944d2b9b58e70dbc558ba38cd877810f9cae8cba341d */

void FUN_180011860(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_18000dfd0((LPVOID)*param_1);
  }
  return;
}


/* Address: 0x180011894; Evidence: ev_ebc5310510a4af16ee78ef2030fb8c1ecf5114ff25b1589b8fbcf36d63739a5a */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_180011860(param_1,7);
    FUN_180011860(param_1 + 7,7);
    FUN_180011860(param_1 + 0xe,0xc);
    FUN_180011860(param_1 + 0x1a,0xc);
    FUN_180011860(param_1 + 0x26,2);
    FUN_18000dfd0((LPVOID)param_1[0x28]);
    FUN_18000dfd0((LPVOID)param_1[0x29]);
    FUN_18000dfd0((LPVOID)param_1[0x2a]);
    FUN_180011860(param_1 + 0x2c,7);
    FUN_180011860(param_1 + 0x33,7);
    FUN_180011860(param_1 + 0x3a,0xc);
    FUN_180011860(param_1 + 0x46,0xc);
    FUN_180011860(param_1 + 0x52,2);
    FUN_18000dfd0((LPVOID)param_1[0x54]);
    FUN_18000dfd0((LPVOID)param_1[0x55]);
    FUN_18000dfd0((LPVOID)param_1[0x56]);
    FUN_18000dfd0((LPVOID)param_1[0x57]);
  }
  return;
}


/* Address: 0x18001199c; Evidence: ev_54f80ae0d2ac8fa15f8da30278e20734f4eed9c8da7ee310a63739640951826e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_18001199c(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
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
  local_30 = DAT_180023000 ^ (ulonglong)local_58;
  FUN_18000bd80(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_18000f9d8(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_180011af2;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_180011ada:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_180011af2;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_180011ada;
      *puVar6 = 0xcccc;
LAB_180011a88:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180011a88;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_180011ada;
    *(undefined8 *)(puVar9 + -8) = 0x180011a9e;
    FUN_180015110(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x180011aba;
    iVar3 = FUN_18000f9d8(param_6,1);
    if (iVar3 == 0) goto LAB_180011ada;
    *(undefined8 *)(puVar9 + -8) = 0x180011ad4;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x180011af2;
    FUN_18000dfd0(lpSrcStr[-1] + 0x10);
  }
LAB_180011af2:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x180011b11;
  return BVar10;
}


/* Address: 0x180011b30; Evidence: ev_a6894c2a05431e9319e0466ed842163788961da61b906fbc1f274758df871455 */

undefined4 FUN_180011b30(void)

{
  return DAT_180024c58;
}


/* Address: 0x180011b40; Evidence: ev_5a39b3068896463220e65ec77f442fe71f544df6b0c370dbfc5d546fbb9158f9 */

uint FUN_180011b40(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180024c58;
    DAT_180024c58 = param_1;
  }
  else {
    p_Var2 = FUN_18000d6a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000c3ec();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}


/* Address: 0x180011b70; Evidence: ev_05ee0850619a79e72f1713c65112dd9d2537f36da8834521f4aa402d68321fb5 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180011b70(undefined1 *param_1,ulonglong param_2,ulonglong param_3,undefined *param_4)

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
  
  local_58 = DAT_180023000 ^ (ulonglong)auStack_468;
  if ((((param_1 == (undefined1 *)0x0) && (param_2 != 0)) || (param_3 == 0)) ||
     (param_4 == (undefined *)0x0)) {
    p_Var3 = FUN_18000d6a4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000c3ec();
  }
  else {
    FUN_180013d38();
    FUN_180015110((undefined1 (*) [32])local_438,0,0x1f0);
    FUN_180015110((undefined1 (*) [32])local_248,0,0x1f0);
    if (1 < param_2) {
      local_448 = 0;
      puVar10 = param_1 + (param_2 - 1) * param_3;
LAB_180011c30:
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
LAB_180011da0:
        puVar4 = puVar7;
        if (puVar6 < puVar4) {
          do {
            puVar6 = puVar6 + param_3;
            if (puVar4 <= puVar6) goto LAB_180011dc0;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        else {
LAB_180011dc0:
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
          goto LAB_180011da0;
        }
        if (puVar4 < puVar7) {
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= puVar4) goto LAB_180011e47;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        else {
LAB_180011e47:
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= param_1) break;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        if ((longlong)puVar7 - (longlong)param_1 < (longlong)puVar10 - (longlong)puVar6)
        goto LAB_180011e9d;
        if (param_1 < puVar7) {
          local_438[local_448] = param_1;
          local_248[local_448] = puVar7;
          local_448 = local_448 + 1;
        }
        param_1 = puVar6;
        if (puVar10 <= puVar6) goto LAB_180011cb3;
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
      goto LAB_180011cb3;
    }
  }
  return;
LAB_180011e9d:
  if (puVar6 < puVar10) {
    local_438[local_448] = puVar6;
    local_248[local_448] = puVar10;
    local_448 = local_448 + 1;
  }
  puVar10 = puVar7;
  if (puVar7 <= param_1) {
LAB_180011cb3:
    local_448 = local_448 + -1;
    if (local_448 < 0) {
      return;
    }
    param_1 = (undefined1 *)local_438[local_448];
    puVar10 = (undefined1 *)local_248[local_448];
  }
  goto LAB_180011c30;
}


/* Address: 0x180011f10; Evidence: ev_2218bf40e7bcaf03d1371cb8fd712692119f085223a0c33548136f1c93a60285 */

undefined4 FUN_180011f10(char *param_1,longlong param_2,longlong param_3,longlong param_4)

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
      goto LAB_180011f69;
    }
  }
  else if (param_1 == (char *)0x0) goto LAB_180011f69;
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
      p_Var2 = FUN_18000d6a4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000c3ec();
      return 0x22;
    }
    *param_1 = '\0';
  }
LAB_180011f69:
  p_Var2 = FUN_18000d6a4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000c3ec();
  return 0x16;
}


/* Address: 0x180012040; Evidence: ev_85de1d3ace40510b65b28b6d794edf7be0a9936c6210d39d611ca3d03b53e51c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

byte * FUN_180012040(byte *param_1,byte *param_2)

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


/* Address: 0x1800120e0; Evidence: ev_0622aca96cb58325bd2fd508344b1e7e2cbd157a45aa3ea98839873f0ce5786d */

/* WARNING: Removing unreachable block (ram,0x00018001237c) */
/* WARNING: Removing unreachable block (ram,0x000180012375) */
/* WARNING: Removing unreachable block (ram,0x00018001236e) */
/* WARNING: Removing unreachable block (ram,0x000180012367) */
/* WARNING: Removing unreachable block (ram,0x000180012360) */
/* WARNING: Removing unreachable block (ram,0x000180012359) */
/* WARNING: Removing unreachable block (ram,0x000180012352) */
/* WARNING: Removing unreachable block (ram,0x00018001234b) */
/* WARNING: Removing unreachable block (ram,0x000180012344) */
/* WARNING: Removing unreachable block (ram,0x00018001233d) */
/* WARNING: Removing unreachable block (ram,0x000180012336) */
/* WARNING: Removing unreachable block (ram,0x00018001232f) */
/* WARNING: Removing unreachable block (ram,0x000180012328) */
/* WARNING: Removing unreachable block (ram,0x000180012321) */
/* WARNING: Removing unreachable block (ram,0x00018001231a) */
/* WARNING: Removing unreachable block (ram,0x0001800121dd) */
/* WARNING: Removing unreachable block (ram,0x0001800121ec) */
/* WARNING: Removing unreachable block (ram,0x0001800121fb) */
/* WARNING: Removing unreachable block (ram,0x00018001220a) */
/* WARNING: Removing unreachable block (ram,0x000180012219) */
/* WARNING: Removing unreachable block (ram,0x000180012225) */
/* WARNING: Removing unreachable block (ram,0x000180012231) */
/* WARNING: Removing unreachable block (ram,0x00018001223d) */
/* WARNING: Removing unreachable block (ram,0x000180012249) */
/* WARNING: Removing unreachable block (ram,0x000180012255) */
/* WARNING: Removing unreachable block (ram,0x000180012261) */
/* WARNING: Removing unreachable block (ram,0x00018001226d) */
/* WARNING: Removing unreachable block (ram,0x000180012279) */
/* WARNING: Removing unreachable block (ram,0x000180012285) */
/* WARNING: Removing unreachable block (ram,0x000180012291) */

byte * FUN_1800120e0(byte *param_1,byte *param_2)

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
        pbVar19 = FUN_180012040(param_1,param_2);
        return pbVar19;
      }
      goto LAB_180012389;
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
    if (uVar21 == 0 || (ulonglong)uVar2 < 0x10 - uVar21) goto LAB_180012389;
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
LAB_180012389:
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
  pbVar19 = FUN_180012040(param_1,param_2);
  return pbVar19;
}


/* Address: 0x180012498; Evidence: ev_e51df92a5a508f3dc361f1a9c279a696032c3aa6ab74ec87f55f5caa0e2ba6ae */

void FUN_180012498(uchar *param_1,uchar *param_2)

{
  _mbsdec_l(param_1,param_2,(_locale_t)0x0);
  return;
}


/* Address: 0x1800124a0; Evidence: ev_a593eed3e669418bef22958e8b47ed14f32dd7801fcefcceb3816a3bbe81ec66 */

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
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000c3ec();
  }
  else if (_Start < _Pos) {
    FUN_18000bd80(local_28,(longlong *)_Locale);
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


/* Address: 0x180012534; Evidence: ev_a2cb24391ac67980649657d161ee7c3f6d080d831e6c523f8683db573ca08eb5 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180012534(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                       undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong lVar1;
  int iVar2;
  uint uVar3;
  int iVar4;
  ulonglong uVar5;
  undefined4 *puVar6;
  ulonglong uVar7;
  LPCWSTR pWVar8;
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
  local_30 = DAT_180023000 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_18000f9d8(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar8 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_18001283f;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_180012825:
    uVar5 = 0;
    if (pWVar8 != (LPCWSTR)0x0) goto LAB_18001282c;
  }
  else {
    if (uVar5 < 0x401) {
      uVar7 = uVar5 + 0xf;
      if (uVar7 <= uVar5) {
        uVar7 = 0xffffffffffffff0;
      }
      lVar1 = -(uVar7 & 0xfffffffffffffff0);
      puVar12 = auStack_88 + lVar1;
      puVar10 = auStack_88 + lVar1;
      puVar6 = (undefined4 *)((longlong)local_38 + lVar1);
      pWVar8 = (LPCWSTR)0x0;
      if (puVar6 == (undefined4 *)0x0) goto LAB_180012825;
      *puVar6 = 0xcccc;
LAB_180012640:
      pWVar8 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar8 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180012640;
      }
    }
    if (pWVar8 == (LPCWSTR)0x0) goto LAB_180012825;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar8;
    *(undefined8 *)(puVar12 + -8) = 0x18001266a;
    iVar2 = FUN_18000f9d8(param_8,1);
    if (iVar2 == 0) goto LAB_180012825;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x18001269d;
    iVar2 = FUN_18000ff98(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    pWVar9 = (LPCWSTR)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_180012825;
    if ((param_3 & 0x400) == 0) {
      uVar7 = uVar5 * 2 + 0x10;
      uVar7 = -(ulonglong)(uVar5 * 2 < uVar7) & uVar7;
      if (uVar7 == 0) goto LAB_180012808;
      if (uVar7 < 0x401) {
        uVar5 = uVar7 + 0xf;
        if (uVar5 <= uVar7) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x180012740;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar6 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar6 != (undefined4 *)0x0) {
          *puVar6 = 0xcccc;
          puVar12 = puVar11;
LAB_18001276e:
          pWVar9 = (LPCWSTR)(puVar6 + 4);
          goto LAB_180012772;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x18001275e;
        puVar6 = _malloc_base(uVar7);
        pWVar9 = (LPCWSTR)0x0;
        if (puVar6 != (undefined4 *)0x0) {
          *puVar6 = 0xdddd;
          goto LAB_18001276e;
        }
LAB_180012772:
        if (pWVar9 != (LPCWSTR)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
          *(undefined8 *)(puVar12 + -8) = 0x1800127a4;
          iVar4 = FUN_18000ff98(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x1800127d2;
              uVar3 = FUN_18000fa68(param_8,0,pWVar9,iVar2,*(LPSTR *)(puVar12 + 0x20),
                                    *(int *)(puVar12 + 0x28),*(LPBOOL *)(puVar12 + 0x30),
                                    *(LPBOOL *)(puVar12 + 0x38));
              if (uVar3 == 0) goto LAB_180012808;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x1800127ec;
              uVar3 = FUN_18000fa68(param_8,0,pWVar9,iVar2,*(LPSTR *)(puVar12 + 0x20),
                                    *(int *)(puVar12 + 0x28),*(LPBOOL *)(puVar12 + 0x30),
                                    *(LPBOOL *)(puVar12 + 0x38));
              if (uVar3 == 0) goto LAB_18001280d;
            }
            uVar5 = (ulonglong)uVar3;
            if (*(int *)(pWVar9 + -8) == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180012803;
              FUN_18000dfd0(pWVar9 + -8);
            }
            goto LAB_18001282c;
          }
LAB_180012808:
          if (pWVar9 != (LPCWSTR)0x0) {
LAB_18001280d:
            if (*(int *)(pWVar9 + -8) == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18001281e;
              FUN_18000dfd0(pWVar9 + -8);
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
        *(undefined8 *)(puVar12 + -8) = 0x1800126f5;
        uVar3 = FUN_18000ff98(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_18001282c;
      }
      goto LAB_180012825;
    }
LAB_18001282c:
    if (*(int *)(pWVar8 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x18001283d;
      FUN_18000dfd0(pWVar8 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_18001283f:
  *(undefined8 *)(puVar13 + -8) = 0x18001284b;
  return uVar5;
}


/* Address: 0x180012868; Evidence: ev_dfbf44a3bd9bd53795973f0c8b99cfde9e45688317c01db47fd537cb07016ac1 */

/* Library Function - Single Match
    __acrt_LCMapStringA
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_LCMapStringA(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                        undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong local_28;
  longlong local_20 [2];
  char local_10;
  
  FUN_18000bd80(&local_28,param_1);
  FUN_180012534(local_20,param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return;
}


/* Address: 0x180012900; Evidence: ev_f69e9b5c0774e9848627536b19d53052963db7b990ce34fdd1f5215a7f4c4e07 */

uint FUN_180012900(void)

{
  undefined8 uVar1;
  
  uVar1 = __acrt_initialize_multibyte();
  return (uint)uVar1 & 0xff ^ 1;
}


/* Address: 0x180012920; Evidence: ev_f6e4fdd07c4d857680af276705b3d15ce7572af66b43606f26812e14518bc92c */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000c3ec();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x000180012952. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_1800247e8,0,param_1);
  return uVar2;
}


/* Address: 0x180012970; Evidence: ev_4c7074e3b0ea5c1394bfb4ffa20d89dd4b11a79e0b5acd0e1802e23340485fde */

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
      FUN_18000dfd0(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_1800247e8,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_180011b30();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_18000c460(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      p_Var4 = FUN_18000d6a4();
      *(undefined4 *)p_Var4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x1800129ec; Evidence: ev_67e86879b36fa26bde0193c7e113d01b8ee36ea65a28b34be4ab53959db9b5ae */

undefined4 FUN_1800129ec(ushort *param_1)

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
      iVar3 = FUN_180013cd0(param_1,(ushort *)(&PTR_DAT_18001b840)[(longlong)iVar2 * 2],0x55);
      if (iVar3 == 0) {
        iVar5 = *(int *)(&DAT_18001b848 + (longlong)iVar2 * 0x10);
        if (iVar5 < 0) {
          return 0;
        }
        if (0xe3 < (ulonglong)(longlong)iVar5) {
          return 0;
        }
        return *(undefined4 *)(&DAT_180019de0 + (longlong)iVar5 * 0x10);
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


/* Address: 0x180012a94; Evidence: ev_28a7a378e9a18e52d9e476f6c57d614852dde9d4beaa24d22eb99b9f9a45f336 */

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
  FUN_18000dfd0((LPVOID)0x0);
  return puVar5;
}


/* Address: 0x180012b3c; Evidence: ev_fd9c33294ccdd4b2422396049f8053e72ecc8212dd30c1687491eece8d5da8f9 */

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
    FUN_18000dfd0(param_1);
  }
  return;
}


/* Address: 0x180012b8c; Evidence: ev_56167c804a7347baaf5dca96d5f67b6e7d83fa30bf79dc569fb007c412594dab */

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
    iVar1 = DAT_180024bf0;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_1800247f0)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_1800247f0)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180024bf0 + 0x40;
        DAT_180024bf0 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_18000d6a4();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000c3ec();
    lVar3 = 9;
  }
  return lVar3;
}


/* Address: 0x180012c34; Evidence: ev_d182d44d2d50c53f67aa78ee980a1cba91e392c0cffbe670bffb62140a0f57b7 */

void FUN_180012c34(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180012c54. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x180012c5c; Evidence: ev_96253e5fb3887905342d1aaf341ef8f0387a17b747524414bc46a90d50c80eb9 */

void FUN_180012c5c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180012c7c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x180012c84; Evidence: ev_44ad7f2ee6e4e6f004424cae3c6d941741de91016d24ff390e7c515807ee4e73 */

undefined8 FUN_180012c84(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_180024bf0)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_180013d68();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_180012d04;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_180012d04:
      *(undefined8 *)
       ((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  p_Var3 = FUN_18000d6a4();
  *(undefined4 *)p_Var3 = 9;
  p_Var3 = FUN_18000d680();
  *(undefined4 *)p_Var3 = 0;
  return 0xffffffff;
}


/* Address: 0x180012d40; Evidence: ev_830d96c2e003b5d0068d284af04e84785c7f4c498ea0586c77ed7f7bad9aded5 */

undefined8 FUN_180012d40(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000d680();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180024bf0)) {
      if ((*(byte *)((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000d680();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000c3ec();
  }
  return 0xffffffffffffffff;
}


/* Address: 0x180012db8; Evidence: ev_62f02aa07cd0dca827776c24edd8aa5ad434bf6bae4ea63611478e204b7da15a */

undefined8 FUN_180012db8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_180012c34(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_1800247f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_180012d40(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_180012e2f;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000d680();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_18000d6a4();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_180012e2f:
  FUN_180012c5c(*param_4);
  return uVar5;
}


/* Address: 0x180012e44; Evidence: ev_b617d97ef52ba9666597a54ecb51794c9a64cf63b5ed47685b663791f56cab28 */

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
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_180024bf0)) &&
       ((*(byte *)((&DAT_1800247f0)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_180012db8(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000c3ec();
  }
  return -1;
}


/* Address: 0x180012ed8; Evidence: ev_6dcff50f014e00585bc17938ebc717dbadcd3b8f86ec9be52e12e97c3d0cc98d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180012ed8(DWORD *param_1,uint param_2,undefined1 (*param_3) [32],ulonglong param_4,
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
  WCHAR local_c4 [2];
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
  CHAR local_48 [8];
  ulonglong local_40;
  
  local_60 = 0xfffffffffffffffe;
  local_40 = DAT_180023000 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar17 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_1800247f0)[lVar17] + 0x28 + uVar6 * 0x48);
  local_b8 = (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff));
  local_98 = param_3;
  local_90 = lVar17;
  local_a0 = GetConsoleOutputCP();
  uVar14 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_18000d4b0(local_b0);
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
      local_c4[0] = L'\0';
      local_c4[1] = L'\0';
      uVar10 = 1;
      if (local_9c == 0xfde9) {
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_1800247f0)[local_68]);
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
          cVar1 = (&DAT_180023900)[(byte)(*param_3)[0]];
          iVar3 = cVar1 + 1;
          lVar17 = (longlong)local_b8 - (longlong)param_3;
          if (lVar17 < iVar3) {
            uVar16 = uVar14;
            if (0 < lVar17) {
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_1800247f0)[local_90]) =
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
          pbVar7 = FUN_1800110fc((ushort *)local_c4,&local_78,(ulonglong)uVar10,local_a8,
                                 (longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + cVar1);
          lVar17 = local_90;
        }
        else {
          cVar1 = (&DAT_180023900)[*(byte *)((&DAT_1800247f0)[lVar17] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar15 = (longlong)local_b8 - (longlong)param_3;
          uVar16 = (ulonglong)iVar3;
          if (lVar15 < (longlong)uVar16) {
            if (0 < lVar15) {
              uVar16 = uVar18;
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_1800247f0)[lVar17]) =
                     *(undefined1 *)((longlong)param_3 + (uVar16 - uVar18));
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar15);
            }
            param_1[1] = param_1[1] + (int)lVar15;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_1800247f0)[local_68]);
          uVar9 = uVar14;
          do {
            local_58[uVar9] = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          uVar9 = uVar14;
          if (0 < (longlong)uVar16) {
            FUN_1800154d0((undefined1 (*) [32])(local_58 + uVar18),param_3,uVar16);
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_1800247f0)[lVar17]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_1800110fc((ushort *)local_c4,&local_80,(ulonglong)uVar10,local_88,
                                 (longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + (int)(local_a8[0] - 1));
        }
      }
      else {
        lVar15 = (&DAT_1800247f0)[lVar17];
        bVar2 = *(byte *)(lVar15 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)(byte)(*param_3)[0] * 2) < 0) {
            pauVar13 = (undefined1 (*) [32])(*param_3 + 1);
            if (local_b8 <= pauVar13) {
              *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48) = (*param_3)[0];
              pbVar7 = (byte *)((&DAT_1800247f0)[lVar17] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar16 + 1;
              return param_1;
            }
            iVar3 = FUN_180010d44((ushort *)local_c4,(byte *)param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_1800131e0;
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
        iVar3 = FUN_180010d44((ushort *)local_c4,(byte *)pauVar13,uVar16,local_b0);
        pauVar13 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_1800131e0:
      param_3 = (undefined1 (*) [32])(*pauVar13 + 1);
      uVar10 = FUN_18000fa68(local_a0,0,local_c4,uVar10,local_48,5,(LPBOOL)0x0,(LPBOOL)0x0);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_180013339:
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
        if (BVar4 == 0) goto LAB_180013339;
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


/* Address: 0x18001336c; Evidence: ev_afd6170dc0ed6d54e9461176be6f5428ff408a483f512fb771064dc91a326c97 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18001336c(DWORD *param_1,uint param_2,char *param_3,ulonglong param_4)

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
  
  local_20 = 0x180013384;
  local_28 = DAT_180023000 ^ (ulonglong)auStackY_1468;
  pcVar5 = param_3 + (param_4 & 0xffffffff);
  hFile = *(HANDLE *)
           ((&DAT_1800247f0)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x180013474; Evidence: ev_2406df9ae9cf0f63518e4c50900a7580d58235e811fb72e2348bd2f70491ab45 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180013474(DWORD *param_1,uint param_2,short *param_3,ulonglong param_4)

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
  
  local_20 = 0x18001348c;
  local_28 = DAT_180023000 ^ (ulonglong)auStackY_1468;
  psVar5 = (short *)((param_4 & 0xffffffff) + (longlong)param_3);
  hFile = *(HANDLE *)
           ((&DAT_1800247f0)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x180013590; Evidence: ev_ee030e9d0fb9e4e0b282162389df2335e437347231fbb70cb1c703ecd367d5df */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180013590(DWORD *param_1,uint param_2,WCHAR *param_3,uint param_4)

{
  WCHAR WVar1;
  HANDLE hFile;
  uint uVar2;
  BOOL BVar3;
  DWORD DVar4;
  uint uVar5;
  ulonglong uVar6;
  WCHAR *pWVar7;
  WCHAR *pWVar8;
  undefined1 auStackY_1498 [32];
  DWORD local_1458 [4];
  WCHAR local_1448 [856];
  CHAR local_d98 [3424];
  ulonglong local_38;
  undefined8 local_30;
  
  local_30 = 0x1800135ac;
  local_38 = DAT_180023000 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_1800247f0)[(longlong)(int)param_2 >> 6] + 0x28 +
           (ulonglong)(param_2 & 0x3f) * 0x48);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  pWVar7 = param_3;
  do {
    if ((WCHAR *)((ulonglong)param_4 + (longlong)param_3) <= pWVar7) {
      return param_1;
    }
    pWVar8 = local_1448;
    do {
      if ((WCHAR *)((ulonglong)param_4 + (longlong)param_3) <= pWVar7) break;
      WVar1 = *pWVar7;
      pWVar7 = pWVar7 + 1;
      if (WVar1 == L'\n') {
        *pWVar8 = L'\r';
        pWVar8 = pWVar8 + 1;
      }
      *pWVar8 = WVar1;
      pWVar8 = pWVar8 + 1;
    } while (pWVar8 < local_1448 + 0x354);
    uVar2 = FUN_18000fa68(0xfde9,0,local_1448,(int)((longlong)pWVar8 - (longlong)local_1448 >> 1),
                          local_d98,0xd55,(LPBOOL)0x0,(LPBOOL)0x0);
    if (uVar2 == 0) {
LAB_1800136cd:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_1800136cd;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)pWVar7 - (int)param_3;
  } while( true );
}


/* Address: 0x180013704; Evidence: ev_91cb8411bf9fe89f14f74618a0a687325e62f04994361c38b7c358701c76d473 */

int FUN_180013704(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
    if (((int)param_1 < 0) || (DAT_180024bf0 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_180012c34(param_1);
        iVar2 = -1;
        if ((*(byte *)((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          iVar2 = FUN_180013824(param_1,param_2,param_3,param_4);
        }
        FUN_180012c5c(param_1);
        return iVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_18000c334((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x180013824; Evidence: ev_22a3e7da678535309237def2c89f2b5c87b3fbc34bff6dc465cc039d392f5a0b */

int FUN_180013824(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
LAB_180013854:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_18000c334((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar10 = (ulonglong)(param_1 & 0x3f);
  lVar13 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_1800247f0)[lVar13] + 0x39 + uVar10 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_180013854;
  if ((*(byte *)((&DAT_1800247f0)[lVar13] + 0x38 + uVar10 * 0x48) & 0x20) != 0) {
    thunk_FUN_180013d70(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar4 = FUN_180013c4c(param_1);
  if (((int)CONCAT71(extraout_var,bVar4) == 0) ||
     (-1 < *(char *)((&DAT_1800247f0)[lVar13] + 0x38 + uVar10 * 0x48))) {
LAB_180013a0c:
    if (-1 < *(char *)((&DAT_1800247f0)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar7 = WriteFile(*(HANDLE *)
                         ((&DAT_1800247f0)[lVar13] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar12 = local_68;
      uVar3 = local_70;
      if (BVar7 == 0) {
        DVar12 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar12);
        DVar12 = local_68;
        uVar3 = local_70;
      }
      goto LAB_180013ac1;
    }
    if (cVar1 == '\0') {
      pDVar11 = FUN_18001336c((DWORD *)&local_70,param_1,(char *)param_2,uVar14);
    }
    else if (cVar1 == '\x01') {
      pDVar11 = FUN_180013590((DWORD *)&local_70,param_1,(WCHAR *)param_2,param_3);
    }
    else {
      DVar12 = 0;
      uVar3 = local_60;
      if (cVar1 != '\x02') goto LAB_180013ac1;
      pDVar11 = FUN_180013474((DWORD *)&local_70,param_1,(short *)param_2,uVar14);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_18000d4b0(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_1800247f0)[lVar13] + 0x39 + uVar10 * 0x48) == '\0')) goto LAB_180013a0c;
    local_50[0] = 0;
    BVar7 = GetConsoleMode(*(HANDLE *)((&DAT_1800247f0)[lVar13] + 0x28 + uVar10 * 0x48),local_50);
    if (BVar7 == 0) goto LAB_180013a0c;
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
            sVar5 = FUN_180013e28(sVar6);
            if (sVar5 != sVar6) {
LAB_1800139d4:
              DVar8 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar8);
              uVar3 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar9 + 2,(DWORD)local_70);
            iVar2 = iVar9 + 2;
            if (sVar6 == 10) {
              sVar6 = FUN_180013e28(0xd);
              if (sVar6 != 0xd) goto LAB_1800139d4;
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
      goto LAB_180013ac1;
    }
    pDVar11 = FUN_180012ed8((DWORD *)&local_70,param_1,param_2,uVar14,param_4);
  }
  DVar12 = pDVar11[2];
  uVar3 = *(undefined8 *)pDVar11;
LAB_180013ac1:
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
    FUN_18000d65c((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_1800247f0)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((*param_2)[0] == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}


/* Address: 0x180013b54; Evidence: ev_87d7fea5d408d988d1e4937a2d88ab1581260dc2e8c32c344fc5b9e439b007b9 */

int FUN_180013b54(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_180024c20; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_180024c28 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_180013f8c(*(int **)(DAT_180024c28 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_180024c28 + lVar4 * 8) + 0x30));
      FUN_18000dfd0(*(LPVOID *)(DAT_180024c28 + lVar4 * 8));
      *(undefined8 *)(DAT_180024c28 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}


/* Address: 0x180013c08; Evidence: ev_6c9c5bf89d484286ba388f97566472a6ed6d31196d8c1eec7b11af5192c8474b */

/* Library Function - Single Match
    __acrt_stdio_free_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_free_buffer_nolock(undefined8 *param_1)

{
  if (((*(uint *)((longlong)param_1 + 0x14) >> 0xd & 1) != 0) &&
     ((*(uint *)((longlong)param_1 + 0x14) >> 6 & 1) != 0)) {
    FUN_18000dfd0((LPVOID)param_1[1]);
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) & 0xfffffebf;
    UNLOCK();
    param_1[1] = 0;
    *param_1 = 0;
    *(undefined4 *)(param_1 + 2) = 0;
  }
  return;
}


/* Address: 0x180013c4c; Evidence: ev_0d4b7c4c6c3b94bbc1f5d95e4c79b8303eadecdab0a342fc114034877d7605c0 */

byte FUN_180013c4c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180024bf0)) {
      return *(byte *)((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000c3ec();
  }
  return 0;
}


/* Address: 0x180013cac; Evidence: ev_9faacc46cd30921d3eeace931aaa30b646c550b1ab2380a325921e1cd9b9bd14 */

undefined8 FUN_180013cac(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  return param_1;
}


/* Address: 0x180013cb4; Evidence: ev_04c0688f99998bca70b23ae879bfbb7e4e185a64b030f32b5c076574300fcf21 */

undefined8 FUN_180013cb4(undefined8 *param_1,longlong param_2)

{
  *param_1 = 0;
  *(undefined1 *)(param_2 + 0x30) = 1;
  *(undefined4 *)(param_2 + 0x2c) = 0x2a;
  return 0xffffffffffffffff;
}


/* Address: 0x180013cd0; Evidence: ev_d22fc1bec3bb63fd1ee77b8476f3887d9ed5a3545efd627dfc3cb584ef7b856f */

int FUN_180013cd0(ushort *param_1,ushort *param_2,longlong param_3)

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


/* Address: 0x180013d38; Evidence: ev_3ddf5705f166ce5fc4b824e6adbba1006412b291efc8d4dd6536c8eacc8be585 */

void FUN_180013d38(void)

{
  _guard_check_icall();
  return;
}


/* Address: 0x180013d50; Evidence: ev_8964201365e4e63b4e163d2e92b4ec83f42fd11c67ec39895a2b052b8bd16f69 */

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


/* Address: 0x180013d68; Evidence: ev_c4655e18db208285d6e96c84aa14be4da9a281d04eb8e1deb5783cd1302fb6fb */

undefined4 FUN_180013d68(void)

{
  return DAT_180024c5c;
}


/* Address: 0x180013d70; Evidence: ev_00abb48500bfa3ed150e0434b579fb67b49eaa858c370c778c3152e422aaa3dd */

longlong FUN_180013d70(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER local_18 [2];
  
  hFile = (HANDLE)FUN_180012d40(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    local_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,local_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000d65c(DVar3,param_4);
    }
    else if (local_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)local_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x180013e20; Evidence: ev_8d04466638e2abce7e04af0f94ec3b93f06a47027e7e5b8674c4bc7a5de323c0 */

longlong thunk_FUN_180013d70(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER aLStack_18 [2];
  
  hFile = (HANDLE)FUN_180012d40(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    aLStack_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,aLStack_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000d65c(DVar3,param_4);
    }
    else if (aLStack_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)aLStack_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x180013e28; Evidence: ev_3c4667a84810a4fbe066d5762633bf46803994b55e8b9332a646385e1b40ff33 */

undefined2 FUN_180013e28(undefined2 param_1)

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


/* Address: 0x180013e68; Evidence: ev_1acbe6bcb9c7fccc73b0c4ff352b00c77d9958d51598c67747b49765c2213a77 */

ulonglong FUN_180013e68(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000c334((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_180010d2c((longlong)param_1);
      uVar1 = FUN_180013ee4(param_1,param_2);
      FUN_180010d38((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_180014378((undefined8 *)param_1);
  }
  return 0xffffffff;
}


/* Address: 0x180013ee4; Evidence: ev_3355148309c2be2126f459770d8641e796f70114d6fbf0f81cc7bc8a19b2063c */

ulonglong FUN_180013ee4(int *param_1,longlong *param_2)

{
  uint uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000c334((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
    uVar2 = 0xffffffff;
  }
  else {
    uVar2 = 0xffffffff;
    if (((uint)param_1[5] >> 0xd & 1) != 0) {
      uVar2 = FUN_180010a48(param_1,param_2);
      uVar2 = uVar2 & 0xffffffff;
      __acrt_stdio_free_buffer_nolock((undefined8 *)param_1);
      uVar1 = FUN_1800112b4((longlong)param_1);
      uVar3 = FUN_1800141e4(uVar1,param_2);
      if ((int)uVar3 < 0) {
        uVar2 = 0xffffffff;
      }
      else if (*(LPVOID *)(param_1 + 10) != (LPVOID)0x0) {
        FUN_18000dfd0(*(LPVOID *)(param_1 + 10));
        param_1[10] = 0;
        param_1[0xb] = 0;
      }
    }
    FUN_180014378((undefined8 *)param_1);
  }
  return uVar2;
}


/* Address: 0x180013f8c; Evidence: ev_f250dc2e2758659ff1296f489cb05a29f91a101618ba54071855d92abb58cd32 */

ulonglong FUN_180013f8c(int *param_1)

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
  local_20 = DAT_18002446c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800231f8;
    puStack_28 = PTR_DAT_180023200;
  }
  uVar1 = FUN_180013e68(param_1,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_18000c000(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_18000c000(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return uVar1 & 0xffffffff;
}


/* Address: 0x180014030; Evidence: ev_df48e66b89880673105d14de8ceb78cf33c30b51ff1274bb47dd8abee9019f81 */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180023a00 == (HANDLE)0xfffffffffffffffe) {
    DAT_180023a00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180023a00 != (HANDLE)0xffffffffffffffff;
}


/* Address: 0x180014090; Evidence: ev_df8423b936a39e11321d6a9b50768090a346002ca505c524e3fafc5a6bae0054 */

void FUN_180014090(void)

{
  if (DAT_180023a00 < (HANDLE)0xfffffffffffffffe) {
    CloseHandle(DAT_180023a00);
  }
  return;
}


/* Address: 0x1800140ac; Evidence: ev_22a8408c41591ba4d2ce99e0ca667a0ccb7729a69b6e150b8e720bbe6f3adeea */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180023a00,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180023a00 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180023a00);
      }
      DAT_180023a00 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180023a00,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}


/* Address: 0x18001416c; Evidence: ev_3f708789390464e9bf8643ee7f264039669c653d7926462007479fba8c33d31a */

ulonglong FUN_18001416c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_180012c34(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_1800247f0)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_1800142a8(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_180012c5c(*param_4);
  return uVar3;
}


/* Address: 0x1800141e4; Evidence: ev_aea3a27811937303865995640b6b2971519502dec65c0767a7ebc3f9fdcd0b28 */

ulonglong FUN_1800141e4(uint param_1,longlong *param_2)

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
    if (((-1 < (int)param_1) && (param_1 < DAT_180024bf0)) &&
       ((*(byte *)((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + 0x38 +
                  (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0)) {
      local_20 = local_res8;
      local_res20[0] = param_1;
      local_28[0] = param_1;
      local_18 = param_2;
      uVar1 = FUN_18001416c(local_res18,local_28,&local_20,local_res20);
      return uVar1;
    }
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
    FUN_18000c334((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  return 0xffffffff;
}


/* Address: 0x1800142a8; Evidence: ev_318977bb6ca932690003e8b4f3fb7011689b6a55b5ce556639d480e6e3e82462 */

undefined8 FUN_1800142a8(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_180012d40(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_1800247f0 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_1800247f0 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_180012d40(2);
      lVar4 = FUN_180012d40(1);
      if (lVar4 == lVar3) goto LAB_1800142ca;
    }
    hObject = (HANDLE)FUN_180012d40(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_180014328;
    }
  }
LAB_1800142ca:
  DVar2 = 0;
LAB_180014328:
  FUN_180012c84(param_1);
  *(undefined1 *)
   ((&DAT_1800247f0)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000d65c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}


/* Address: 0x180014378; Evidence: ev_3499eafce5c977abf8964c89f7660a7910ee3f749e254a5857a080d0bc27c700 */

undefined4 FUN_180014378(undefined8 *param_1)

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


/* Address: 0x1800143a0; Evidence: ev_c6eb55060c2d9c8fd0668653bd6f0d78ebb937817af113004d4e0c162b62c0c3 */

/* WARNING: Removing unreachable block (ram,0x000180014420) */
/* WARNING: Removing unreachable block (ram,0x000180014412) */
/* WARNING: Removing unreachable block (ram,0x0001800143b7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_1800143a0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_180024c60 = 0;
  DAT_180024c64 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_180024c60 = 1;
      DAT_180024c64 = 1;
    }
    else {
      _DAT_180024c60 = 0;
    }
  }
  if ((_DAT_180024c60 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180024c64 = 3;
      _DAT_180024c60 = 3;
      return 0;
    }
  }
  return 0;
}


/* Address: 0x180014454; Evidence: ev_039b6d9a30d337c1269aeacc4273d3c476e94d51baad35aef87615545c469cd3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x0001800144db) */
/* WARNING: Removing unreachable block (ram,0x0001800144b8) */

void FUN_180014454(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_1800145fc();
  if (bVar1) {
    (*DAT_180024c70)(&DAT_180024c80);
  }
  else {
    do {
    } while (DAT_180024c80 != 0);
    LOCK();
    DAT_180024c80 = 1;
    UNLOCK();
  }
  FUN_1800147d0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_1800147d0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_1800145fc();
  if (bVar1) {
    (*DAT_180024c78)(&DAT_180024c80);
  }
  else {
    DAT_180024c80 = 0;
  }
  return;
}


/* Address: 0x180014540; Evidence: ev_2dd35267935ef2e853d3f07bb68d1481add1bb380dddabde9a2dd5f2419cfe71 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180014563) */
/* WARNING: Removing unreachable block (ram,0x000180014589) */
/* WARNING: Removing unreachable block (ram,0x000180014595) */
/* WARNING: Removing unreachable block (ram,0x000180014571) */
/* WARNING: Removing unreachable block (ram,0x0001800145a0) */
/* WARNING: Removing unreachable block (ram,0x0001800145b2) */
/* WARNING: Removing unreachable block (ram,0x0001800145c6) */
/* WARNING: Removing unreachable block (ram,0x0001800145cf) */
/* WARNING: Removing unreachable block (ram,0x000180015090) */
/* WARNING: Removing unreachable block (ram,0x0001800145e9) */

void FUN_180014540(void)

{
  return;
}


/* Address: 0x1800145fc; Evidence: ev_76008eb6ddc714afd90a5d02d9e9631e43ac73d6ce6de8dfeafed449543cb2c3 */

bool FUN_1800145fc(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_180024c68 != (HMODULE)0x1) {
    if (DAT_180024c68 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_180024c70 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_180024c78;
    }
    DAT_180024c78 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_180024c68 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_180024c68;
      pHVar1 = DAT_180024c68;
    }
    DAT_180024c68 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}


/* Address: 0x18001469c; Evidence: ev_a4d72e24abc180101f172859e7974b0f25b1075a0f215bb690ca0d821e18c1d8 */

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
    *(undefined8 *)(puVar6 + -8) = 0x1800146dc;
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


/* Address: 0x180014734; Evidence: ev_d8301c7ac8719e30998f9e07cd18543c4f068439cf7c574677bd80953faf15e6 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_180014734(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000210;
  while ((0x27000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x27001))) {
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


/* Address: 0x1800147d0; Evidence: ev_2ec108e29510b50f189c0f1e86e1091db6d455a6149e5a9acd1839072a3170b9 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

void FUN_1800147d0(void *param_1,SIZE_T param_2,DWORD param_3,PDWORD param_4)

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
  lpAddress = (void *)FUN_180014734(&local_28,local_24);
  if (lpAddress == (void *)0x0) {
    *param_4 = 4;
    return;
  }
  if (DAT_180024c90 == 0) {
    DAT_180024c90 = 1;
    puVar6 = auStack_48;
    if ((local_24[0] & IMAGE_SCN_MEM_WRITE) == 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = auStack_40;
    }
    *(undefined8 *)(puVar6 + -8) = 0x18001484a;
    DloadMakePermanentImageCommit(lpAddress,(ulonglong)*(uint *)(puVar6 + 0x20));
  }
  if (param_1 == (void *)0x0) {
    if (param_2 != 0) goto LAB_18001485b;
LAB_18001488b:
    param_2 = (SIZE_T)*(uint *)(puVar6 + 0x20);
  }
  else {
    puVar2 = puVar6;
    if (param_2 == 0) {
LAB_18001485b:
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar5 = puVar6 + 8;
      puVar6 = puVar6 + 8;
      puVar2 = puVar5;
      if (param_1 == (void *)0x0) goto LAB_18001488b;
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
  *(undefined8 *)(puVar6 + -8) = 0x1800148a4;
  BVar3 = VirtualProtect(lpAddress,param_2,param_3,param_4);
  if (BVar3 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
  }
  return;
}


/* Address: 0x1800148c8; Evidence: ev_12f139c28730301f07d2a92c2c8b48db3ce74f06d8312058a173b1892412cfc9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x0001800148e9) */
/* WARNING: Removing unreachable block (ram,0x00018001490a) */
/* WARNING: Removing unreachable block (ram,0x000180014916) */
/* WARNING: Removing unreachable block (ram,0x000180014919) */
/* WARNING: Removing unreachable block (ram,0x0001800148f2) */
/* WARNING: Removing unreachable block (ram,0x000180014924) */
/* WARNING: Removing unreachable block (ram,0x00018001492d) */
/* WARNING: Removing unreachable block (ram,0x000180014942) */
/* WARNING: Removing unreachable block (ram,0x000180014961) */
/* WARNING: Removing unreachable block (ram,0x00018001494b) */

void FUN_1800148c8(void)

{
  return;
}


/* Address: 0x180014980; Evidence: ev_90aae8c784a441cd80ae4c6b1ebef123cdb0a61d6a023763d90a40a5695cec5b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180014af4) */
/* WARNING: Removing unreachable block (ram,0x000180014bce) */

HMODULE FUN_180014980(uint *param_1,void *param_2)

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
  
  FUN_180014540();
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
    FUN_1800148c8();
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
          FUN_1800148c8();
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
        FUN_1800148c8();
        RaiseException(0xc06d007f,0,1,(ULONG_PTR *)&local_res8);
        FUN_180014540();
        pHVar3 = local_40;
      }
      local_88 = param_2;
      local_80 = pHVar3;
      FUN_180014454(param_2,8,&local_88);
    }
    local_38 = 0;
    local_48 = hLibModule;
    local_40 = pHVar3;
    FUN_180001000(5,(longlong)local_78);
    FUN_1800148c8();
  }
  return pHVar3;
}


/* Address: 0x180014c7c; Evidence: ev_aad7df076f88a9bbbe08949b58f5dfe67a0a2c7a151c549e16e778a5581519c5 */

undefined8 FUN_180014c7c(undefined8 param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  FUN_180014c9c(param_2,param_4);
  return 1;
}


/* Address: 0x180014c9c; Evidence: ev_4c8459c43fc598f71b45287a9fee2d8db8bc83fa3f9abae6b551ec604da4f3e1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180014c9c(undefined8 param_1,longlong param_2)

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


/* Address: 0x180014d00; Evidence: ev_e0f96a363e3a86759c9c4d287a74bcebb463f5f6f7f9dd8dde779d4e0deba5b6 */

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


/* Address: 0x180014d50; Evidence: ev_d6869d3a0303aadcc48d9bbb2ff37074686000a79dd128107b53987cccb71c91 */

ulonglong FUN_180014d50(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_180014da0((short *)&IMAGE_DOS_HEADER_180000000);
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


/* Address: 0x180014da0; Evidence: ev_fe8791129e641eba7cbd6bc9ee141c65d80c98a00f9f887fa57e08b25f9a5a88 */

bool FUN_180014da0(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}


/* Address: 0x180014dcc; Evidence: ev_30c87fa5c620bdc0d9f28391ac2bbd691174aa200e953096fad6ca39b4d53acc */

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
  FUN_180014c9c(param_2,(longlong)param_4);
  if ((puVar2[(ulonglong)uVar1 * 4 + 1] & ((param_1->ExceptionFlags & 0x66) != 0) + 1) != 0) {
    FUN_18000815c(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180014e54; Evidence: ev_fd51e52c7ffade494f631d2c90591d5b6c74ce89b4698b5b6377ef8f6125e76d */

void FUN_180014e54(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_180014c9c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180014ef0; Evidence: ev_d48c5bbb6376247258146bd73963eb66389d711cd8fede173846350c638fd9ac */

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


/* Address: 0x180014f40; Evidence: ev_74e4ecb4ec8dcb270e589948e5dcab3434b7b11baec36de7a2a5deba51177d80 */

void FUN_180014f40(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000815c(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_180008548();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_180008548();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_18000d39c();
  }
  return;
}


/* Address: 0x180014f90; Evidence: ev_402477744e6eacaf39c90c5e1749335ef15c51fa2bddb4ae7fb97c1ff5c8dc10 */

void FUN_180014f90(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_180014c9c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    FUN_180007e80(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180015010; Evidence: ev_9161fa97a3f62da982dff53a7824f502ae433bc3b517bbae6e694c94dfbdbb97 */

ulonglong thunk_FUN_180015020(ulonglong param_1)

{
  uint uVar1;
  
  uVar1 = (uint)(param_1 >> 0x34) & 0x7ff;
  if (uVar1 == 0x7ff) {
    return (ulonglong)(ushort)(((param_1 & 0xfffffffffffff) != 0) + 1);
  }
  if (uVar1 == 0) {
    return CONCAT62((int6)(-(param_1 & 0x7fffffffffffffff) >> 0x10),
                    -(ushort)((param_1 & 0x7fffffffffffffff) != 0)) & 0xfffffffffffffffe;
  }
  return 0xffffffff;
}


/* Address: 0x180015020; Evidence: ev_6b6990ab4d6636773a46dbd6708bb67d2e33ad2d3e2a4f0b8a672655bba23017 */

ulonglong FUN_180015020(ulonglong param_1)

{
  uint uVar1;
  
  uVar1 = (uint)(param_1 >> 0x34) & 0x7ff;
  if (uVar1 == 0x7ff) {
    return (ulonglong)(ushort)(((param_1 & 0xfffffffffffff) != 0) + 1);
  }
  if (uVar1 == 0) {
    return CONCAT62((int6)(-(param_1 & 0x7fffffffffffffff) >> 0x10),
                    -(ushort)((param_1 & 0x7fffffffffffffff) != 0)) & 0xfffffffffffffffe;
  }
  return 0xffffffff;
}


/* Address: 0x180015090; Evidence: ev_6fd65cfc050388b93dda47f423e8db371fc595427ba235f876dc0b63191513df */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180015090. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x1800150b0; Evidence: ev_c76fa0aa67d45d269db7b993a358215e84607b258abed1b9f3a06f6c475bde97 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180015090. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x1800150d0; Evidence: ev_ff80ac529d8602228eaf1b36216ebc66592d6cb8c36595827a9a99c80acad00d */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180015090. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180015100; Evidence: ev_b944ec4b6e211fba77e6f0cd50521afbcdb86bde88a1d54dcb033cd03e39b66b */

undefined8 FUN_180015100(undefined1 *param_1,undefined1 param_2,longlong param_3,undefined8 param_4)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = param_2;
    param_1 = param_1 + 1;
  }
  return param_4;
}


/* Address: 0x180015110; Evidence: ev_15203735031c93ab2348dae0b82dc4ae378296d8d9190125fa0d75b0e84f1b8a */

undefined1 (*) [32] FUN_180015110(undefined1 (*param_1) [32],byte param_2,ulonglong param_3)

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
    if (DAT_180023058 < 3) {
      if ((param_3 <= DAT_180023060) || (((byte)DAT_1800241e0 & 2) == 0)) {
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
    else if (((param_3 <= DAT_180023060) || (DAT_180023068 < param_3)) ||
            (((byte)DAT_1800241e0 & 2) == 0)) {
      auVar12._16_16_ = auVar11;
      auVar12._0_16_ = auVar11;
      lVar10 = ((ulonglong)param_1 & 0x1f) - 0x20;
      pauVar2 = (undefined1 (*) [32])((longlong)param_1 - lVar10);
      uVar5 = param_3 + lVar10;
      if (0x100 < uVar5) {
        if (DAT_180023068 < uVar5) {
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


/* Address: 0x1800154c0; Evidence: ev_8eaf01b69fe2297f99998ecd568e132944b6637e3011dbe8b2bde525f5e2fe6f */

void FUN_1800154c0(undefined1 *param_1,undefined1 *param_2,longlong param_3)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = *param_2;
    param_2 = param_2 + 1;
    param_1 = param_1 + 1;
  }
  return;
}


/* Address: 0x1800154d0; Evidence: ev_acfd52e702419baefcaea29d5b47526c673ada2c589a2869c4039041ec5e2040 */

void FUN_1800154d0(undefined1 (*param_1) [32],undefined1 (*param_2) [32],ulonglong param_3)

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
  if (DAT_180023058 < 3) {
    if ((param_3 < 0x801) || (((byte)DAT_1800241e0 & 2) == 0)) {
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
code_r0x0001800154cb:
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*param_1)[0] = (*param_2)[0];
      param_2 = (undefined1 (*) [32])(*param_2 + 1);
      param_1 = (undefined1 (*) [32])(*param_1 + 1);
    }
    return;
  }
  if (((0x2000 < param_3) && (param_3 < 0x180001)) && (((byte)DAT_1800241e0 & 2) != 0))
  goto code_r0x0001800154cb;
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
        goto switchD_180015756_caseD_0;
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
switchD_180015756_caseD_0:
  *(undefined8 *)*param_1 = uVar10;
  *(undefined8 *)(*param_1 + 8) = uVar11;
  *(undefined8 *)(*param_1 + 0x10) = uVar12;
  *(undefined8 *)(*param_1 + 0x18) = uVar13;
  return;
}


/* Address: 0x180015b70; Evidence: ev_4c058e190448d151a1a0bb1b7d9a7cbc400e84482774c3823db3e454807007c9 */

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
    if (((ulonglong)_Str & 7) == 0) goto LAB_180015ba1;
    uVar1 = *(ulonglong *)_Str;
    _Str = (char *)((longlong)_Str + 1);
  } while ((char)uVar1 != '\0');
LAB_180015be8:
  return (size_t)(char *)((longlong)_Str + lVar3 + -1);
LAB_180015ba1:
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
  goto LAB_180015be8;
}


/* Address: 0x180015c30; Evidence: ev_0ebdadcf73a321c87444f95ace87d4e601bece4319cd5d9cd8bf242979e49b66 */

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


/* Address: 0x180015cb0; Evidence: ev_f7c43577988d68f4a48ef8cd0eb3afe799ffac377ae273a1f473c998d464621b */

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


/* Address: 0x180015d40; Evidence: ev_6b234f822006c3acc8bbaabf637c4fa86fe7f46c75f13b3d67d6680974bdcbee */

void FUN_180015d40(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x30) & 2) != 0) {
    *(uint *)(param_2 + 0x30) = *(uint *)(param_2 + 0x30) & 0xfffffffd;
    thunk_FUN_180002f40(*(longlong **)(param_2 + 0x40));
  }
  return;
}


/* Address: 0x180015d80; Evidence: ev_22b32f188436d601e8164c6229b4a91db776ed7edc6b34f95a4e39c647b70a2b */

undefined8 FUN_180015d80(void)

{
  return 0;
}


/* Address: 0x180015dc0; Evidence: ev_e4362cd4491d31ae62bb58945039c9a82cc9d5ee5ee3baddd66cf884ff2fef5c */

void FUN_180015dc0(undefined8 param_1,longlong param_2)

{
  thunk_FUN_18000dfd0(*(LPVOID *)(param_2 + 0x40));
  return;
}


/* Address: 0x180015de0; Evidence: ev_200c5227d784123f321a8def3481399a9b5d74a1278eb7663d9dec6fecf96bbe */

void FUN_180015de0(undefined8 param_1,longlong param_2)

{
  thunk_FUN_18000dfd0(*(LPVOID *)(param_2 + 0x40));
  return;
}


/* Address: 0x180015e00; Evidence: ev_713ba3e3768553aa7404b6a9bf5185708392c6287a346ae8c8ac28a2c7623066 */

undefined8 FUN_180015e00(undefined8 param_1,longlong param_2)

{
  FUN_180001da0(*(longlong *)(param_2 + 0x20));
  return 0;
}


/* Address: 0x180015e3c; Evidence: ev_334c23cba28c6143bcf1a70a56e13258e5ef88df24c65f32fb2386e08c7f6841 */

undefined8 FUN_180015e3c(undefined8 param_1,longlong param_2)

{
  FUN_180001da0(*(longlong *)(param_2 + 0xa0));
  return 0;
}


/* Address: 0x180015ed0; Evidence: ev_45bb544807bc185a192d977b5ebaa3693162697ce7198b9f1fb872821ea89c51 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180015ed0(undefined8 param_1,longlong param_2)

{
  undefined1 (*pauVar1) [32];
  
  pauVar1 = (undefined1 (*) [32])(**(code **)(**(longlong **)(param_2 + 0x28) + 8))();
  FUN_180004a60((undefined1 (*) [32])(param_2 + 0x30),pauVar1);
  FUN_180003d90(*(longlong *)(param_2 + 0x20),(undefined1 (*) [32])(param_2 + 0x30));
  FUN_180002f40((longlong *)(param_2 + 0x30));
  return 0;
}


/* Address: 0x180015f8c; Evidence: ev_c78b1bd352d8d39d4f416ddc6bda77cdd45537d0d5cf515085ed5efea47897c8 */

undefined8 FUN_180015f8c(undefined8 param_1,longlong param_2)

{
  FUN_180001da0(*(longlong *)(param_2 + 0x30));
  return 0;
}


/* Address: 0x18001600c; Evidence: ev_0563fb7c181041fa9be52a9cff936eda5151813f253f3daf90e6eb17d2735256 */

void FUN_18001600c(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x40));
  return;
}


/* Address: 0x180016023; Evidence: ev_d90f577fe241fd9cd08b37450e6c8e2427e1c5e3bd96d4a72a4ace1d1bb5a531 */

void FUN_180016023(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x20));
  return;
}


/* Address: 0x18001603c; Evidence: ev_5808fdae735eb36b82ffa4d18e97af1926afa2b551f98c7b9e4b944971ab3050 */

void FUN_18001603c(void)

{
  FUN_180006b04();
  return;
}


/* Address: 0x180016050; Evidence: ev_e8dbc5352ebf2e3fea6b8f1477d71296097120a10743cea4c89dfebe42b475a1 */

void FUN_180016050(undefined8 *param_1,longlong param_2)

{
  __scrt_dllmain_exception_filter
            (*(undefined8 *)(param_2 + 0x60),*(int *)(param_2 + 0x68),
             *(undefined8 *)(param_2 + 0x70),FUN_180006380,*(int *)*param_1,param_1);
  return;
}


/* Address: 0x180016086; Evidence: ev_e014659640b626610fab688e4305f1a91947c663009baceea03ec55c95ae487b */

bool FUN_180016086(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x18001609e; Evidence: ev_d08f9eed179f7633e00018ad1243edf62d574a2994fc04dbca14791b49b6c804 */

undefined4 FUN_18001609e(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180008548();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180008548();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180008548();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_18000a1e0((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_180008548();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x180016145; Evidence: ev_7fe4f905c062204f34687dafd3f266a94a0565ed7d63b6a14777d380e08cf070 */

undefined4 FUN_180016145(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180008548();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180008548();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180008548();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  lVar3 = FUN_180008548();
  *(undefined4 *)(lVar3 + 0x78) = *(undefined4 *)(param_2 + 0xa8);
  FUN_18000a6cc((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(FuncInfo4 **)(param_2 + 0x90),0,0,1);
  lVar3 = FUN_180008548();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x1800161fa; Evidence: ev_d74311dd0ac11688a6e5f936cd3797dcd71bcffb6caffa46774d8481ffb1d0b4 */

undefined4 FUN_1800161fa(undefined8 param_1,longlong param_2)

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
    lVar2 = FUN_180008548();
    *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x28);
    uVar1 = *(undefined8 *)(*(longlong *)(param_2 + 0x30) + 8);
    lVar2 = FUN_180008548();
    *(undefined8 *)(lVar2 + 0x28) = uVar1;
                    /* WARNING: Subroutine does not return */
    FUN_18000d39c();
  }
  *(undefined4 *)(param_2 + 0x20) = 0;
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x18001628c; Evidence: ev_8c163a92db601a5e44261700924cc66a32f85f478dcf7403693ff3c52e39f8b0 */

void FUN_18001628c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  *(undefined4 *)(lVar1 + 0x78) = 0xfffffffe;
  return;
}


/* Address: 0x1800162a8; Evidence: ev_1f9aa0e1da1603fefa5f14e08e8a216e53ef545359835411fcc6254a7a077010 */

void FUN_1800162a8(undefined8 *param_1,longlong param_2)

{
  FUN_18000ae9c(param_1,*(longlong *)(param_2 + 0xb8),(undefined4 *)(param_2 + 0x20));
  return;
}


/* Address: 0x1800162c9; Evidence: ev_fc1adaa871064fc48101253487eb7eb057785e95cb6902ff8fed97f250de44dc */

void FUN_1800162c9(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_180007d4c(*(longlong *)(param_2 + 0x38));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xb8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_180007ff0(piVar1);
    }
  }
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0xc0);
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x40);
  return;
}


/* Address: 0x18001634f; Evidence: ev_6406e4789ae4f85ba4312b72608947da5cab8f7b67066334c4f2191826e9210b */

void FUN_18001634f(_EXCEPTION_POINTERS *param_1,longlong param_2)

{
  ExFilterRethrowFH4(param_1,*(EHExceptionRecord **)(param_2 + 0xd8),*(int *)(param_2 + 200),
                     (int *)(param_2 + 0x20));
  return;
}


/* Address: 0x180016377; Evidence: ev_76d78e578ced6b967a35a23a823f9297d95e3e016e124f82f07b19d0146fc6c3 */

void FUN_180016377(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_180007d4c(*(longlong *)(param_2 + 0x40));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xd8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_180007ff0(piVar1);
    }
  }
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x30);
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x48);
  lVar2 = FUN_180008548();
  *(undefined4 *)(lVar2 + 0x78) = *(undefined4 *)(param_2 + 0xc0);
  return;
}


/* Address: 0x180016408; Evidence: ev_e052d87d3dcccf5e29f9b23fea33d2757d04010d95e30d1886a768b2a117cf1f */

void FUN_180016408(undefined8 *param_1)

{
  FUN_1800080c0(param_1);
  return;
}


/* Address: 0x18001641e; Evidence: ev_5cd5962ba5197722edcc4e8373f178277b45cbfc99b4f489ca132d4c9cdb0580 */

void FUN_18001641e(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180008548();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180016441; Evidence: ev_11f12b5c2b9344b5c8777582f3ba3c4946c429d725b22d2e4809d35600760ae6 */

void FUN_180016441(undefined8 *param_1)

{
  FUN_1800080c0(param_1);
  return;
}


/* Address: 0x180016457; Evidence: ev_4ae6021a63450c46c3429cee3150c728c700cdac726891f82fdac8f1100659a9 */

void FUN_180016457(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180008548();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180016480; Evidence: ev_45468a789853b1dfb9faf4dee851dd1d2ad9790c44f4c386f652d113ea717d0d */

void FUN_180016480(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x180016496; Evidence: ev_abf76f57a71282e4f2ee92dc310fe2b0b19ab3cbf35a6a00a53119b1e1a1be12 */

void FUN_180016496(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x1800164ac; Evidence: ev_0112b4a53cdd31b257843a210222df3f30d1021cc0b61ee7c7e2370c5f383b46 */

void FUN_1800164ac(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x48));
  return;
}


/* Address: 0x1800164c6; Evidence: ev_53b60b46e8630e0d6630579196bcd3dfe6c733e644ccfaac93870c69a4096109 */

undefined4 FUN_1800164c6(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x1800164f3; Evidence: ev_cde8565bba77945df3ab8ac0fe428603f7d3b7f28029323178978f8635afe73c */

void FUN_1800164f3(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x58));
  return;
}


/* Address: 0x18001650d; Evidence: ev_3ce282d591d91961507420bc9396ecfd3aba91b469257acf19f71fdadeca789c */

void FUN_18001650d(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x68));
  return;
}


/* Address: 0x180016527; Evidence: ev_d3bffdd194a1a4e43e387570d1994f35db0d9f6b26ddae5243f9140b73932a14 */

void FUN_180016527(void)

{
  __acrt_unlock(5);
  return;
}


/* Address: 0x180016540; Evidence: ev_d38e6d5434d71919b1870b76bb78a66ab558082aff72cb342896cc03f7bd78fd */

void FUN_180016540(void)

{
  __acrt_unlock(7);
  return;
}


/* Address: 0x180016559; Evidence: ev_9168c23b9212792d01c0496d573c823469d41228e26396817f678225c49c2dbe */

void FUN_180016559(undefined8 param_1,longlong param_2)

{
  if (*(char *)(param_2 + 0x70) != '\0') {
    __acrt_unlock(3);
  }
  return;
}


/* Address: 0x18001657a; Evidence: ev_3cd4f86419284e87d7665b7b698ad1c6d6e40014c8dbc12d29cf7b24615b6925 */

void FUN_18001657a(undefined8 param_1,longlong param_2)

{
  FUN_180010d38(**(longlong **)(param_2 + 0x48));
  return;
}


/* Address: 0x180016595; Evidence: ev_14b1e8a2fc3dc3991d5c4a6612c552f975ce9be8052e38c5db05a06873b26b2f */

void FUN_180016595(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x98));
  return;
}


/* Address: 0x1800165b2; Evidence: ev_198b70e1a8b72b7d75cebcf64e0f95d1e03d465d981ab2af8d04577b77b56363 */

void FUN_1800165b2(void)

{
  __acrt_unlock(4);
  return;
}


/* Address: 0x1800165cb; Evidence: ev_5542b0857c610fdddcad619dd37e5e46066bafed39cf4b84dec1f802be4c82bc */

void FUN_1800165cb(undefined8 param_1,longlong param_2)

{
  FUN_180012c5c(**(uint **)(param_2 + 0x48));
  return;
}


/* Address: 0x1800165e5; Evidence: ev_ffd4185265b71b4b4b7323956ad2bab70e6d3de9c2b02876ad1055aa1e902b0a */

void FUN_1800165e5(undefined8 param_1,longlong param_2)

{
  FUN_180012c5c(*(uint *)(param_2 + 0x60));
  return;
}


/* Address: 0x1800165fc; Evidence: ev_f0107f43324b8491f844cb59cf60209cd19182c2dd2e99678acc2874975558fb */

void FUN_1800165fc(void)

{
  __acrt_unlock(8);
  return;
}


/* Address: 0x180016615; Evidence: ev_31bdea14fa5e5e9cb56a945273398b890c6a7a138b64bfd17386b2c30953ceb0 */

void FUN_180016615(undefined8 param_1,longlong param_2)

{
  FUN_180010d38(*(longlong *)(param_2 + 0x40));
  return;
}


/* Address: 0x180016630; Evidence: ev_71de175b41eecfdcd53c56a083edf901ae85b2cab6cfd1b233942d15e81d691c */

bool FUN_180016630(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}

