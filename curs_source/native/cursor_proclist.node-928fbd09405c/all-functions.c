/* Ghidra pseudocode from the shipped Cursor process-list addon.
 * Not original C/C++ source; not a compilable project.
 */

/* Address: 0x180001000; Evidence: ev_babf80ad8fe77679900275f77b1cd52c7649fd584e0cb25a885c9856ace9c007 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180001000(void)

{
  DAT_180029de8 = operator_new(0x40);
  *(void **)DAT_180029de8 = DAT_180029de8;
  *(void **)((longlong)DAT_180029de8 + 8) = DAT_180029de8;
  DAT_180029df8 = 0;
  DAT_180029e00 = 0;
  uRam0000000180029e08 = 0;
  _DAT_180029e10 = 7;
  DAT_180029e18 = 8;
  _DAT_180029de0 = 0x3f800000;
  FUN_180008eb0(&DAT_180029df8,0x10,DAT_180029de8);
  _DAT_180029e20 = 0;
  DAT_180029e28 = (void *)0x0;
  DAT_180029e30 = 0;
  DAT_180029e28 = operator_new(0x30);
  *(void **)DAT_180029e28 = DAT_180029e28;
  *(void **)((longlong)DAT_180029e28 + 8) = DAT_180029e28;
  DAT_180029e38 = 0;
  DAT_180029e40 = 0;
  uRam0000000180029e48 = 0;
  _DAT_180029e50 = 7;
  DAT_180029e58 = 8;
  _DAT_180029e20 = 0x3f800000;
  FUN_180006890(&DAT_180029e38,0x10,DAT_180029e28);
  atexit(FUN_18001a120);
  return;
}


/* Address: 0x180001110; Evidence: ev_9c27ab5a2a854f9fa754927590c4e00392f14d2b23a4c97b15271561a3fb9733 */

HMODULE FUN_180001110(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_18000f3a0(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
    pHVar2 = GetModuleHandleA("libnode.dll");
    if (pHVar2 != (HMODULE)0x0) {
      return pHVar2;
    }
                    /* WARNING: Could not recover jumptable at 0x000180001148. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    pHVar2 = GetModuleHandleA((LPCSTR)0x0);
    return pHVar2;
  }
  return (HMODULE)0x0;
}


/* Address: 0x180001180; Evidence: ev_2b7bda7984df224eed24cd13986820cb45d696fc71c5f4832ffa837b4146e1d7 */

void FUN_180001180(longlong *param_1)

{
  if (DAT_180029310 != (code *)0x0) {
    (*DAT_180029310)();
  }
  (**(code **)(*param_1 + 0x10))();
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}


/* Address: 0x1800011c0; Evidence: ev_a1e9702ab48b55d1f8c216c9cb1895f0506bd8a3535d0cfa9bbc5fd7a8fc2ed3 */

void _guard_check_icall(void)

{
  return;
}


/* Address: 0x1800011d0; Evidence: ev_04a83e4a3716582f8c447eb2d338d59cf6c9e6e9318a7e32adaacdf0e74b642d */

undefined8 * FUN_1800011d0(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = &PTR_FUN_180022fa0;
  if ((param_2 & 1) != 0) {
    thunk_FUN_1800116e0(param_1);
  }
  return param_1;
}


/* Address: 0x180001200; Evidence: ev_3c994b58b1316813991248b618200489f7ff3ada0a6ce6ba18ae3a1a1202a879 */

void FUN_180001200(void)

{
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}


/* Address: 0x180001220; Evidence: ev_5820e856464d4586c1191af721dad60853ff8b370424ac4aca179e8faea6df40 */

undefined8 * FUN_180001220(undefined8 *param_1)

{
  param_1[1] = "bad array new length";
  *param_1 = &PTR_FUN_180022fb8;
  return param_1;
}


/* Address: 0x180001250; Evidence: ev_405d1fe09a483c490bb6fec6d676d4f88b50d76f8c789fc295496a6d1038471c */

void FUN_180001250(void)

{
  code *pcVar1;
  longlong *plVar2;
  undefined8 local_18 [3];
  
  plVar2 = FUN_180001220(local_18);
  FUN_180001180(plVar2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001270; Evidence: ev_2b7369079ed6f6c966cf4cd8355870ed9dd0f2e9047d79519059a13c0d1ba491 */

void FUN_180001270(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_18000a790(0x180022c68);
}


/* Address: 0x180001290; Evidence: ev_a2ce732a9903a136c9ce145f523eabc921ffc8ce8c702243792e2c756cc17077 */

void FUN_180001290(undefined8 *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < (ulonglong)param_1[6]) {
    pvVar1 = (LPVOID)param_1[3];
    pvVar2 = pvVar1;
    if ((0xfff < param_1[6] + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  param_1[5] = 0;
  param_1[6] = 0xf;
  *(undefined1 *)(param_1 + 3) = 0;
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}


/* Address: 0x180001330; Evidence: ev_c43dd4a0cffdf48b59bd9372f0799d046db36b697350e18d95b97d29d5562ea3 */

void FUN_180001330(undefined8 *param_1)

{
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}


/* Address: 0x180001360; Evidence: ev_8a6a072512d6dbbc47fe52383cc9dfc822d4bf904d2734dfbcc3989f884bcfc4 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001360(undefined8 *param_1,undefined8 param_2,undefined4 param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  iVar2 = napi_create_double(param_2,param_3);
  if (iVar2 == 0) {
    *param_1 = param_2;
  }
  else {
    puVar3 = FUN_180001d60(&local_50,param_2);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_28 = 0;
    uStack_20 = 0xf;
    local_38 = 0;
    if ((local_48 != 0) && (local_40 == '\0')) {
      napi_delete_reference(local_50);
    }
    local_58 = 0;
    *param_1 = 0;
  }
  param_1[1] = local_58;
  return param_1;
}


/* Address: 0x180001470; Evidence: ev_003c480fa41de940aabad63a2b348f793f4fd7f3cc56811faf9e6d12fc95046b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001470(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  if (0xf < (ulonglong)param_3[3]) {
    param_3 = (undefined8 *)*param_3;
  }
  iVar2 = napi_create_string_utf8(param_2,param_3);
  if (iVar2 == 0) {
    param_1[1] = local_58;
  }
  else {
    puVar3 = FUN_180001d60(&local_50,param_2);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_28 = 0;
    uStack_20 = 0xf;
    local_38 = 0;
    if ((local_48 != 0) && (local_40 == '\0')) {
      napi_delete_reference(local_50);
    }
    param_2 = 0;
    param_1[1] = 0;
  }
  *param_1 = param_2;
  return param_1;
}


/* Address: 0x180001590; Evidence: ev_8b68638fde756d046f0fd60adb573593dada30694a43a446d150681feb983619 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001590(undefined8 *param_1,undefined8 param_2,longlong param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  longlong lVar5;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  if (param_3 == 0) {
    puVar3 = FUN_180001d60(&local_50,param_2);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
LAB_18000168e:
      thunk_FUN_1800116e0(pvVar4);
    }
  }
  else {
    lVar5 = -1;
    do {
      lVar5 = lVar5 + 1;
    } while (*(char *)(param_3 + lVar5) != '\0');
    iVar2 = napi_create_string_utf8(param_2,param_3);
    if (iVar2 == 0) {
      *param_1 = param_2;
      goto LAB_1800016d1;
    }
    puVar3 = FUN_180001d60(&local_50,param_2);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      goto LAB_18000168e;
    }
  }
  local_38 = 0;
  local_28 = 0;
  uStack_20 = 0xf;
  if ((local_48 != 0) && (local_40 == '\0')) {
    napi_delete_reference(local_50);
  }
  local_58 = 0;
  *param_1 = 0;
LAB_1800016d1:
  param_1[1] = local_58;
  return param_1;
}


/* Address: 0x180001730; Evidence: ev_47ff0bf5d79051a817a9d1a8b886a816a5db836f78a45967c28ee47d04c2f651 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180001730(undefined8 *param_1,longlong *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined1 (*pauVar4) [32];
  LPVOID pvVar5;
  undefined8 uVar6;
  undefined1 auStackY_c8 [32];
  undefined1 (*local_88) [32];
  longlong lStack_80;
  longlong *local_78;
  longlong *plStack_70;
  undefined8 local_68;
  longlong local_60;
  char local_58;
  undefined1 local_50;
  undefined7 uStack_4f;
  undefined8 local_40;
  ulonglong uStack_38;
  ulonglong local_30;
  
  local_30 = DAT_180028040 ^ (ulonglong)auStackY_c8;
  uVar6 = 0;
  iVar2 = napi_get_value_string_utf8(*param_1,param_1[1]);
  if (iVar2 == 0) {
    lStack_80 = 0;
    local_78 = (longlong *)0x0;
    plStack_70 = (longlong *)0xf;
    local_88 = (undefined1 (*) [32])0x0;
    if (0xf < (longlong)param_2 + 1U) {
      FUN_180005e10(&local_88,(longlong)param_2 + 1U);
    }
    local_78 = (longlong *)0x0;
    if (param_2 == (longlong *)0x0) {
      pauVar4 = (undefined1 (*) [32])&local_88;
      if ((longlong *)0xf < plStack_70) {
        pauVar4 = local_88;
      }
      local_78 = param_2;
      (*pauVar4)[0] = 0;
    }
    else if (plStack_70 < param_2) {
      FUN_1800066d0(&local_88,(ulonglong)param_2,uVar6,(ulonglong)param_2);
    }
    else {
      pauVar4 = (undefined1 (*) [32])&local_88;
      if ((longlong *)0xf < plStack_70) {
        pauVar4 = local_88;
      }
      local_78 = param_2;
      FUN_1800188a0(pauVar4,0,(ulonglong)param_2);
      (*pauVar4)[(longlong)param_2] = 0;
    }
    iVar2 = napi_get_value_string_utf8(*param_1,param_1[1]);
    if (iVar2 == 0) {
      *param_2 = (longlong)local_88;
      param_2[1] = lStack_80;
      param_2[2] = (longlong)local_78;
      param_2[3] = (longlong)plStack_70;
    }
    else {
      puVar3 = FUN_180001d60(&local_68,*param_1);
      FUN_1800023f0(puVar3);
      if (0xf < uStack_38) {
        pvVar1 = (LPVOID)CONCAT71(uStack_4f,local_50);
        pvVar5 = pvVar1;
        if ((0xfff < uStack_38 + 1) &&
           (pvVar5 = *(LPVOID *)((longlong)pvVar1 + -8),
           0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_1800116e0(pvVar5);
      }
      local_40 = 0;
      uStack_38 = 0xf;
      local_50 = 0;
      if ((local_60 != 0) && (local_58 == '\0')) {
        napi_delete_reference(local_68);
      }
      *param_2 = 0;
      param_2[1] = 0;
      param_2[2] = 0;
      param_2[3] = 0xf;
      *(undefined1 *)param_2 = 0;
      if ((longlong *)0xf < plStack_70) {
        pauVar4 = local_88;
        if ((0xfff < (longlong)plStack_70 + 1U) &&
           (pauVar4 = *(undefined1 (**) [32])(local_88[-1] + 0x18),
           0x1f < (ulonglong)((longlong)local_88 + (-8 - (longlong)pauVar4)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_1800116e0(pauVar4);
      }
    }
  }
  else {
    puVar3 = FUN_180001d60(&local_68,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_38) {
      pvVar1 = (LPVOID)CONCAT71(uStack_4f,local_50);
      pvVar5 = pvVar1;
      if ((0xfff < uStack_38 + 1) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
    local_40 = 0;
    uStack_38 = 0xf;
    local_50 = 0;
    if ((local_60 != 0) && (local_58 == '\0')) {
      napi_delete_reference(local_68);
    }
    *param_2 = 0;
    param_2[1] = 0;
    param_2[2] = 0;
    param_2[3] = 0xf;
    *(undefined1 *)param_2 = 0;
  }
  return param_2;
}


/* Address: 0x180001a20; Evidence: ev_57b98a9883cb11be19a9b9c89203731dc4a89b8d2f126f4b452c85c5e87a0668 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001a20(undefined8 *param_1,undefined8 param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  iVar2 = napi_create_object(param_2,&local_58);
  if (iVar2 == 0) {
    *param_1 = param_2;
  }
  else {
    puVar3 = FUN_180001d60(&local_50,param_2);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_28 = 0;
    uStack_20 = 0xf;
    local_38 = 0;
    if ((local_48 != 0) && (local_40 == '\0')) {
      napi_delete_reference(local_50);
    }
    local_58 = 0;
    *param_1 = 0;
  }
  param_1[1] = local_58;
  return param_1;
}


/* Address: 0x180001b30; Evidence: ev_a2ca8056cf562b96c44ad1e91d395e6f704dba43824012a94bd17cd47b26cfb6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001b30(undefined8 *param_1,undefined8 param_2,undefined8 param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  iVar2 = napi_create_array_with_length(param_2,param_3);
  if (iVar2 == 0) {
    *param_1 = param_2;
  }
  else {
    puVar3 = FUN_180001d60(&local_50,param_2);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_28 = 0;
    uStack_20 = 0xf;
    local_38 = 0;
    if ((local_48 != 0) && (local_40 == '\0')) {
      napi_delete_reference(local_50);
    }
    local_58 = 0;
    *param_1 = 0;
  }
  param_1[1] = local_58;
  return param_1;
}


/* Address: 0x180001c40; Evidence: ev_2baec055ef9a3599a4d061197f281cbf65bb03d098ee85705aa3b5bf4a312e83 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001c40(undefined8 *param_1,undefined8 *param_2,undefined8 param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 local_60;
  longlong local_58;
  char local_50;
  undefined1 local_48;
  undefined7 uStack_47;
  undefined8 local_38;
  ulonglong uStack_30;
  ulonglong local_28;
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_98;
  iVar2 = napi_call_function(*param_1,param_3);
  if (iVar2 == 0) {
    *param_2 = *param_1;
  }
  else {
    puVar3 = FUN_180001d60(&local_60,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_30) {
      pvVar1 = (LPVOID)CONCAT71(uStack_47,local_48);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_30 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_38 = 0;
    uStack_30 = 0xf;
    local_48 = 0;
    if ((local_58 != 0) && (local_50 == '\0')) {
      napi_delete_reference(local_60);
    }
    local_68 = 0;
    *param_2 = 0;
  }
  param_2[1] = local_68;
  return param_2;
}


/* Address: 0x180001d60; Evidence: ev_7c794d4837553a741c0d01f0f2d05887d179221c2614641da459fe6bc9f87e63 */

undefined8 * FUN_180001d60(undefined8 *param_1,undefined8 param_2)

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
    FUN_180001ff0("Error::New","napi_get_last_error_info");
  }
  local_a8 = (char *)*local_98[0];
  lStack_a0 = local_98[0][1];
  local_38 = local_98[0][2];
  iVar1 = napi_is_exception_pending(param_2,local_res18);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001ff0("Error::New","napi_is_exception_pending");
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
      FUN_180001ff0("Error::New","napi_create_string_utf8");
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
      FUN_180001ff0("Error::New","napi_create_error");
    }
  }
  else {
    iVar1 = napi_get_and_clear_last_exception(param_2,&local_res20);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("Error::New","napi_get_and_clear_last_exception");
    }
  }
  lVar3 = local_res20;
  *param_1 = param_2;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  param_1[3] = 0;
  param_1[4] = 0;
  param_1[5] = 0;
  param_1[6] = 0xf;
  *(undefined1 *)(param_1 + 3) = 0;
  if ((local_res20 != 0) &&
     (iVar1 = napi_create_reference(param_2,local_res20,1,param_1 + 1), iVar1 != 0)) {
    iVar1 = napi_create_object(param_2,&local_a8);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("Error::Error","napi_create_object");
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
      FUN_180001ff0("Error::Error","napi_define_properties");
    }
    iVar1 = napi_create_reference(param_2,local_a8,1,param_1 + 1);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("Error::Error","napi_create_reference");
    }
  }
  return param_1;
}


/* Address: 0x180001ff0; Evidence: ev_6eff75e4a40d83263e10740615fb9eaa80777fdcc8d1d8fd4e1aae7b0450247e */

void FUN_180001ff0(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  
  napi_fatal_error(param_1,0xffffffffffffffff,param_2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180002010; Evidence: ev_1e2dfbb1cde87c656974483263c9a7e18d68a04f06fc06a0a8ea205806b548a0 */

undefined8 * FUN_180002010(undefined8 *param_1,undefined8 param_2,longlong param_3)

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
  
  *param_1 = param_2;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  param_1[3] = 0;
  param_1[4] = 0;
  param_1[5] = 0;
  param_1[6] = 0xf;
  *(undefined1 *)(param_1 + 3) = 0;
  if (param_3 != 0) {
    iVar1 = napi_create_reference(param_2,param_3,1,param_1 + 1);
    if (iVar1 != 0) {
      iVar1 = napi_create_object(param_2,&local_res8);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::Error","napi_create_object");
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
        FUN_180001ff0("Error::Error","napi_define_properties");
      }
      iVar1 = napi_create_reference(param_2,local_res8,1,param_1 + 1);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::Error","napi_create_reference");
      }
    }
  }
  return param_1;
}


/* Address: 0x180002160; Evidence: ev_714a525644118caecaf3a891eccae3eaf6b44d1a9a24b7fa575cf23f61b79b11 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002160(undefined8 *param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_b8 [32];
  char local_88 [8];
  undefined8 local_80;
  int local_78;
  undefined8 local_70;
  undefined8 local_68;
  undefined8 local_60 [2];
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_b8;
  if (param_1[1] == 0) {
    *param_2 = *param_1;
    local_70 = 0;
    goto LAB_180002376;
  }
  iVar2 = napi_get_reference_value();
  if (iVar2 == 0) {
    iVar2 = napi_typeof(*param_1,local_80);
    if (iVar2 == 0) {
      if (local_78 != 5) {
        local_88[0] = '\0';
        FUN_180001590(&local_70,*param_1,0x180022de0);
        napi_has_property(*param_1,local_80,local_68,local_88);
        if (local_88[0] != '\0') {
          FUN_180001590(local_60,*param_1,0x180022de0);
          iVar2 = napi_get_property(*param_1,local_80);
          if (iVar2 == 0) {
            *param_2 = *param_1;
            goto LAB_180002376;
          }
          puVar3 = FUN_180001d60(&local_50,*param_1);
          FUN_1800023f0(puVar3);
          if (0xf < uStack_20) {
            pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
            pvVar4 = pvVar1;
            if ((0xfff < uStack_20 + 1) &&
               (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
               0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            goto LAB_18000232d;
          }
          goto LAB_180002332;
        }
      }
      *param_2 = *param_1;
      local_70 = local_80;
      goto LAB_180002376;
    }
    puVar3 = FUN_180001d60(&local_50,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      goto LAB_18000232d;
    }
  }
  else {
    puVar3 = FUN_180001d60(&local_50,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
LAB_18000232d:
      thunk_FUN_1800116e0(pvVar4);
    }
  }
LAB_180002332:
  local_28 = 0;
  uStack_20 = 0xf;
  local_38 = 0;
  if ((local_48 != 0) && (local_40 == '\0')) {
    napi_delete_reference(local_50);
  }
  local_70 = 0;
  *param_2 = 0;
LAB_180002376:
  param_2[1] = local_70;
  return param_2;
}


/* Address: 0x1800023f0; Evidence: ev_7bd30e30eac9756e5a8179dcd31d48a630c5f8035b3bbbbd8ddd276719e43516 */

void FUN_1800023f0(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 local_28;
  undefined8 local_20;
  undefined8 local_18 [2];
  
  FUN_1800027b0(&local_28,*param_1);
  if (param_1[1] != 0) {
    puVar2 = FUN_180002160(param_1,local_18);
    iVar1 = napi_throw(*param_1,puVar2[1]);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
    }
  }
  iVar1 = napi_close_handle_scope(local_28,local_20);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x180002470; Evidence: ev_00d30cbf6bfa53ec1b8ee031ce6f6b90e95bc54bd8f4d923f35f69c17bfb66ad */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong * FUN_180002470(ulonglong *param_1,ulonglong param_2,ulonglong param_3)

{
  undefined1 auVar1 [16];
  LPVOID pvVar2;
  int iVar3;
  undefined8 *puVar4;
  __uint64 _Var5;
  void *pvVar6;
  LPVOID pvVar7;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  longlong local_60;
  char local_58;
  undefined1 local_50;
  undefined7 uStack_4f;
  undefined8 local_40;
  ulonglong local_38;
  ulonglong local_30;
  
  local_30 = DAT_180028040 ^ (ulonglong)auStackY_98;
  *param_1 = 6;
  param_1[1] = param_2;
  param_1[2] = param_3;
  param_1[3] = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0;
  param_1[10] = 0;
  param_1[0xb] = 0;
  param_1[0xc] = 0;
  param_1[0xd] = 0;
  param_1[4] = *param_1;
  param_1[5] = (ulonglong)(param_1 + 6);
  iVar3 = napi_get_cb_info(param_2,param_3);
  if (iVar3 == 0) {
    if (param_1[4] <= *param_1) {
      return param_1;
    }
    auVar1._8_8_ = 0;
    auVar1._0_8_ = param_1[4];
    _Var5 = SUB168(ZEXT816(8) * auVar1,0);
    if (SUB168(ZEXT816(8) * auVar1,8) != 0) {
      _Var5 = 0xffffffffffffffff;
    }
    pvVar6 = operator_new(_Var5);
    param_1[0xc] = (ulonglong)pvVar6;
    param_1[5] = (ulonglong)pvVar6;
    iVar3 = napi_get_cb_info(param_2,param_3);
    if (iVar3 == 0) {
      return param_1;
    }
    puVar4 = FUN_180001d60(&local_68,param_1[1]);
    FUN_1800023f0(puVar4);
    if (local_38 < 0x10) goto LAB_1800025f8;
    pvVar2 = (LPVOID)CONCAT71(uStack_4f,local_50);
    pvVar7 = pvVar2;
    if ((0xfff < local_38 + 1) &&
       (pvVar7 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  else {
    puVar4 = FUN_180001d60(&local_68,param_1[1]);
    FUN_1800023f0(puVar4);
    if (local_38 < 0x10) goto LAB_1800025f8;
    pvVar2 = (LPVOID)CONCAT71(uStack_4f,local_50);
    pvVar7 = pvVar2;
    if ((0xfff < local_38 + 1) &&
       (pvVar7 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  thunk_FUN_1800116e0(pvVar7);
LAB_1800025f8:
  local_50 = 0;
  local_38 = 0xf;
  local_40 = 0;
  if ((local_60 != 0) && (local_58 == '\0')) {
    napi_delete_reference(local_68);
  }
  return param_1;
}


/* Address: 0x180002680; Evidence: ev_bbe4eff663f20317ae0ff1f57af35e327ffadaaf959e02af6ecae4a20cd6b54d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002680(longlong param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_98;
  local_68 = *(undefined8 *)(param_1 + 8);
  if (*(longlong *)(param_1 + 0x20) == 0) {
    iVar2 = napi_get_undefined(local_68,&local_58);
    uStack_60 = local_58;
    if (iVar2 != 0) {
      puVar3 = FUN_180001d60(&local_50,local_68);
      FUN_1800023f0(puVar3);
      if (0xf < uStack_20) {
        pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
        pvVar4 = pvVar1;
        if ((0xfff < uStack_20 + 1) &&
           (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
           0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_1800116e0(pvVar4);
      }
      local_28 = 0;
      uStack_20 = 0xf;
      local_38 = 0;
      if ((local_48 != 0) && (local_40 == '\0')) {
        napi_delete_reference(local_50);
      }
      local_68 = 0;
      uStack_60 = 0;
    }
  }
  else {
    uStack_60 = **(undefined8 **)(param_1 + 0x28);
  }
  *param_2 = local_68;
  param_2[1] = uStack_60;
  return param_2;
}


/* Address: 0x1800027b0; Evidence: ev_cf3887e602db32378cc8479a2e90985a026583e2d75938afdd2b6ff9de4d39b7 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800027b0(undefined8 *param_1,undefined8 param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_78 [32];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_78;
  *param_1 = param_2;
  iVar2 = napi_open_handle_scope(param_2,param_1 + 1);
  if (iVar2 != 0) {
    puVar3 = FUN_180001d60(&local_48,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_18) {
      pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  return param_1;
}


/* Address: 0x180002890; Evidence: ev_b7f6b1dc0b684a1f28388ab406c5c2aa0fdcf69ebac5f64f929accf7e424ca44 */

void FUN_180002890(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
}


/* Address: 0x1800028c0; Evidence: ev_80557982f5f88b56741474fe6d6d839010783f5233de601b729f7e76b14524da */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800028c0(undefined8 *param_1,undefined8 param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_78 [32];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_78;
  *param_1 = param_2;
  iVar2 = napi_open_escapable_handle_scope(param_2,param_1 + 1);
  if (iVar2 != 0) {
    puVar3 = FUN_180001d60(&local_48,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_18) {
      pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  return param_1;
}


/* Address: 0x1800029a0; Evidence: ev_f40089d0ef406d5678a5992c63c16d3bbc23755e54f4916dc5c41c35810cdc01 */

void FUN_1800029a0(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_escapable_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}


/* Address: 0x1800029d0; Evidence: ev_8da09cac8335e4744191f497e13f61c8cfdb1b8bbc8688a43824935acc35101e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800029d0(undefined8 *param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  iVar2 = napi_escape_handle(*param_1,param_1[1]);
  if (iVar2 == 0) {
    *param_2 = *param_1;
  }
  else {
    puVar3 = FUN_180001d60(&local_50,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_28 = 0;
    uStack_20 = 0xf;
    local_38 = 0;
    if ((local_48 != 0) && (local_40 == '\0')) {
      napi_delete_reference(local_50);
    }
    local_58 = 0;
    *param_2 = 0;
  }
  param_2[1] = local_58;
  return param_2;
}


/* Address: 0x180002ae0; Evidence: ev_6b1af9caa8ad1be73283bc2f21d1812fd8c5bb497c991055a420a9c3cb69d666 */

undefined8 * FUN_180002ae0(undefined8 *param_1,uint param_2)

{
  FUN_180002db0(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_1800116e0(param_1);
  }
  return param_1;
}


/* Address: 0x180002b20; Evidence: ev_b1529a38ca47393abe2c284e1f1d8f97a7fe40cf66625584b0ae8e61ceece046 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_180002b20(undefined8 *param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  LPVOID pvVar5;
  undefined1 auStackY_b8 [32];
  undefined8 local_70;
  undefined8 local_68;
  undefined8 *local_60;
  undefined8 local_58 [2];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_b8;
  *param_1 = &PTR_FUN_180022f60;
  param_1[1] = param_2;
  param_1[3] = 0;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  param_1[6] = 0;
  param_1[7] = 0;
  *(undefined1 *)(param_1 + 8) = 0;
  param_1[9] = 0;
  param_1[10] = 0;
  param_1[0xb] = 0;
  param_1[0xc] = 0xf;
  *(undefined1 *)(param_1 + 9) = 0;
  *(undefined1 *)(param_1 + 0xd) = 0;
  local_60 = param_1;
  iVar2 = napi_create_string_latin1(param_1[1],"generic");
  if (iVar2 == 0) {
    iVar2 = napi_create_async_work(param_1[1],*(undefined8 *)(param_4 + 8));
    if (iVar2 == 0) {
      return param_1;
    }
    puVar3 = FUN_180001d60(&local_48,param_1[1]);
    FUN_1800027b0(&local_70,*puVar3);
    if (puVar3[1] != 0) {
      puVar4 = FUN_180002160(puVar3,local_58);
      iVar2 = napi_throw(*puVar3,puVar4[1]);
      if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
      }
    }
    iVar2 = napi_close_handle_scope(local_70,local_68);
    if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (uStack_18 < 0x10) goto LAB_180002cf1;
    pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
    pvVar5 = pvVar1;
    if ((0xfff < uStack_18 + 1) &&
       (pvVar5 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  else {
    puVar3 = FUN_180001d60(&local_48,param_1[1]);
    FUN_1800023f0(puVar3);
    if (uStack_18 < 0x10) goto LAB_180002cf1;
    pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
    pvVar5 = pvVar1;
    if ((0xfff < uStack_18 + 1) &&
       (pvVar5 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  thunk_FUN_1800116e0(pvVar5);
LAB_180002cf1:
  local_30 = 0;
  local_20 = 0;
  uStack_18 = 0xf;
  if ((local_40 != 0) && (local_38 == '\0')) {
    napi_delete_reference(local_48);
  }
  return param_1;
}


/* Address: 0x180002db0; Evidence: ev_06c63c0bd25c148c089d09283ca5bf363b407d74d64437ed3fb5a11ec7dabe44 */

void FUN_180002db0(undefined8 *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  *param_1 = &PTR_FUN_180022f60;
  if (param_1[2] != 0) {
    napi_delete_async_work(param_1[1]);
    param_1[2] = 0;
  }
  if (0xf < (ulonglong)param_1[0xc]) {
    pvVar1 = (LPVOID)param_1[9];
    pvVar2 = pvVar1;
    if ((0xfff < param_1[0xc] + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  param_1[0xb] = 0;
  param_1[0xc] = 0xf;
  *(undefined1 *)(param_1 + 9) = 0;
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


/* Address: 0x180002eb0; Evidence: ev_db5344569f93a4dd97d3f9ad05503342a11ad3aa453252de0e7efeaa25c8dd3e */

void FUN_180002eb0(longlong *param_1)

{
  longlong *plVar1;
  undefined8 uVar2;
  int iVar3;
  undefined8 *puVar4;
  LPVOID pvVar5;
  char local_res8 [8];
  undefined8 local_68;
  undefined8 local_60;
  undefined8 local_58 [2];
  undefined8 local_48 [2];
  undefined8 local_38 [2];
  LPVOID local_28 [2];
  longlong local_18;
  
  if (param_1[7] != 0) {
    plVar1 = param_1 + 6;
    (**(code **)(*param_1 + 0x38))(param_1,local_28,*plVar1);
    puVar4 = FUN_180005210(param_1 + 3,local_48);
    uVar2 = puVar4[1];
    FUN_1800028c0(&local_68,*plVar1);
    puVar4 = FUN_180005210(plVar1,local_38);
    FUN_180001c40(puVar4,local_58,uVar2);
    iVar3 = napi_is_exception_pending(local_68,local_res8);
    if ((iVar3 == 0) && (local_res8[0] != '\0')) {
      FUN_180005210(plVar1,local_38);
      iVar3 = napi_close_escapable_handle_scope(local_68,local_60);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope",
                      "napi_close_escapable_handle_scope");
      }
    }
    else {
      FUN_1800029d0(&local_68,local_38);
      iVar3 = napi_close_escapable_handle_scope(local_68,local_60);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope",
                      "napi_close_escapable_handle_scope");
      }
    }
    if (local_28[0] != (LPVOID)0x0) {
      pvVar5 = local_28[0];
      if ((0xfff < (local_18 - (longlong)local_28[0] & 0xfffffffffffffff8U)) &&
         (pvVar5 = *(LPVOID *)((longlong)local_28[0] + -8),
         0x1f < (ulonglong)((longlong)local_28[0] + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
  }
  return;
}


/* Address: 0x180003040; Evidence: ev_c0d57c18edca316f77aed7d46d7d0bb37fa7de33d4ade72c9e683454645431bf */

void FUN_180003040(longlong param_1,undefined8 *param_2)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  int iVar3;
  undefined8 *puVar4;
  char local_res8 [8];
  undefined8 local_58;
  undefined8 local_50;
  undefined8 local_48 [2];
  undefined8 local_38 [2];
  undefined8 local_28 [2];
  undefined8 local_18 [2];
  
  if (*(longlong *)(param_1 + 0x38) != 0) {
    puVar1 = (undefined8 *)(param_1 + 0x30);
    FUN_180002160(param_2,local_38);
    puVar4 = FUN_180005210((undefined8 *)(param_1 + 0x18),local_28);
    uVar2 = puVar4[1];
    FUN_1800028c0(&local_58,*puVar1);
    puVar4 = FUN_180005210(puVar1,local_18);
    FUN_180001c40(puVar4,local_48,uVar2);
    iVar3 = napi_is_exception_pending(local_58,local_res8);
    if ((iVar3 == 0) && (local_res8[0] != '\0')) {
      FUN_180005210(puVar1,local_18);
      iVar3 = napi_close_escapable_handle_scope(local_58,local_50);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope",
                      "napi_close_escapable_handle_scope");
      }
    }
    else {
      FUN_1800029d0(&local_58,local_18);
      iVar3 = napi_close_escapable_handle_scope(local_58,local_50);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope",
                      "napi_close_escapable_handle_scope");
      }
    }
  }
  return;
}


/* Address: 0x1800031e0; Evidence: ev_e76db1657b68384992910625645e2afd66596c3a1a8c0d438b4af3004d275aa9 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800031e0(longlong *param_1,undefined8 param_2,int param_3)

{
  code *pcVar1;
  LPVOID pvVar2;
  int iVar3;
  LPVOID pvVar4;
  longlong *plVar5;
  undefined1 auStackY_98 [32];
  undefined8 local_60;
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_98;
  if (param_3 != 0xb) {
    FUN_1800027b0(&local_60,param_1[1]);
    if (param_1[0xb] == 0) {
      (**(code **)(*param_1 + 0x20))(param_1);
    }
    else {
      pcVar1 = *(code **)(*param_1 + 0x28);
      plVar5 = param_1 + 9;
      if (0xf < (ulonglong)param_1[0xc]) {
        plVar5 = (longlong *)*plVar5;
      }
      FUN_180004bf0(&local_50,param_1[1],plVar5,param_1[0xb],napi_create_error_exref);
      (*pcVar1)(param_1,&local_50);
      if (0xf < uStack_20) {
        pvVar2 = (LPVOID)CONCAT71(uStack_37,local_38);
        pvVar4 = pvVar2;
        if ((0xfff < uStack_20 + 1) &&
           (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
           0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_1800116e0(pvVar4);
      }
      local_28 = 0;
      uStack_20 = 0xf;
      local_38 = 0;
      if ((local_48 != 0) && (local_40 == '\0')) {
        napi_delete_reference(local_50);
      }
    }
    iVar3 = napi_close_handle_scope(local_60,local_58);
    if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
  }
  if ((char)param_1[0xd] == '\0') {
    (**(code **)(*param_1 + 0x30))(param_1);
  }
  return;
}


/* Address: 0x180003350; Evidence: ev_e8c9ef8a85713d3bbc9b252e4074cf75b66dabacaecd0814e85caf75201502ec */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180003350(longlong *param_1,undefined8 *param_2,undefined1 param_3)

{
  undefined4 *puVar1;
  undefined8 uVar2;
  uint *puVar3;
  undefined1 auStackY_158 [32];
  uint *local_118;
  uint *local_110;
  longlong local_108;
  uint *local_100;
  longlong *local_f8;
  uint local_e8 [2];
  undefined8 local_e0;
  undefined8 uStack_d8;
  undefined8 local_d0;
  undefined8 local_c8;
  undefined8 local_c0;
  undefined8 local_b8;
  undefined8 uStack_b0;
  undefined8 local_98;
  undefined8 uStack_90;
  undefined8 local_88;
  undefined8 uStack_80;
  undefined8 local_78;
  undefined8 uStack_70;
  undefined8 local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 uStack_50;
  undefined8 local_48;
  undefined8 uStack_40;
  ulonglong local_38;
  
  local_38 = DAT_180028040 ^ (ulonglong)auStackY_158;
  local_f8 = param_1;
  FUN_180007760((longlong *)&local_118,param_2,param_3);
  *param_1 = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005530(param_1,(longlong)local_110 - (longlong)local_118 >> 2);
  local_100 = local_110;
  for (puVar3 = local_118; puVar3 != local_110; puVar3 = puVar3 + 1) {
    uStack_d8 = 0;
    local_d0 = 0;
    local_c8 = 0xf;
    local_e0 = 0;
    local_c0 = 0;
    local_b8 = 0;
    uStack_b0 = 0;
    uStack_90 = 0;
    local_88 = 0;
    uStack_80 = 0xf;
    local_98 = 0;
    uStack_70 = 0;
    local_68 = 0;
    uStack_60 = 0xf;
    local_78 = 0;
    uStack_50 = 0;
    local_48 = 0;
    uStack_40 = 0xf;
    local_58 = 0;
    uVar2 = FUN_180007b40(*puVar3,local_e8);
    if ((char)uVar2 != '\0') {
      puVar1 = (undefined4 *)param_1[1];
      if (puVar1 == (undefined4 *)param_1[2]) {
        FUN_180006250(param_1,puVar1,local_e8);
      }
      else {
        FUN_180006d40(puVar1,local_e8);
        param_1[1] = param_1[1] + 0xb0;
      }
    }
    FUN_180003570((longlong)local_e8);
  }
  if (local_118 != (uint *)0x0) {
    puVar3 = local_118;
    if ((0xfff < (local_108 - (longlong)local_118 & 0xfffffffffffffffcU)) &&
       (puVar3 = *(uint **)(local_118 + -2),
       0x1f < (ulonglong)((longlong)local_118 + (-8 - (longlong)puVar3)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(puVar3);
  }
  return param_1;
}


/* Address: 0x180003570; Evidence: ev_8273933d22aaaa92d5f2f32387b6352844643846c948d0c6b51fded5efaf5a23 */

void FUN_180003570(longlong param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < *(ulonglong *)(param_1 + 0xa8)) {
    pvVar1 = *(LPVOID *)(param_1 + 0x90);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0xa8) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) goto LAB_18000371d;
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0xa0) = 0;
  *(undefined8 *)(param_1 + 0xa8) = 0xf;
  *(undefined1 *)(param_1 + 0x90) = 0;
  if (0xf < *(ulonglong *)(param_1 + 0x88)) {
    pvVar1 = *(LPVOID *)(param_1 + 0x70);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0x88) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) goto LAB_18000371d;
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0x80) = 0;
  *(undefined8 *)(param_1 + 0x88) = 0xf;
  *(undefined1 *)(param_1 + 0x70) = 0;
  if (0xf < *(ulonglong *)(param_1 + 0x68)) {
    pvVar1 = *(LPVOID *)(param_1 + 0x50);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0x68) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) goto LAB_18000371d;
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0x60) = 0;
  *(undefined8 *)(param_1 + 0x68) = 0xf;
  *(undefined1 *)(param_1 + 0x50) = 0;
  if (*(longlong **)(param_1 + 0x28) != (longlong *)0x0) {
    FUN_180006630(*(longlong **)(param_1 + 0x28),*(longlong **)(param_1 + 0x30));
    pvVar1 = *(LPVOID *)(param_1 + 0x28);
    pvVar2 = pvVar1;
    if ((0xfff < (*(longlong *)(param_1 + 0x38) - (longlong)pvVar1 & 0xffffffffffffffe0U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) goto LAB_18000371d;
    thunk_FUN_1800116e0(pvVar2);
    *(undefined8 *)(param_1 + 0x28) = 0;
    *(undefined8 *)(param_1 + 0x30) = 0;
    *(undefined8 *)(param_1 + 0x38) = 0;
  }
  if (0xf < *(ulonglong *)(param_1 + 0x20)) {
    pvVar1 = *(LPVOID *)(param_1 + 8);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0x20) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
LAB_18000371d:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0x18) = 0;
  *(undefined8 *)(param_1 + 0x20) = 0xf;
  *(undefined1 *)(param_1 + 8) = 0;
  return;
}


/* Address: 0x180003740; Evidence: ev_71559e2f08439e760159d3bb11f4455262587009bb0e5d88dc37f0d70a8662b6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180003740(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  LPVOID pvVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  undefined8 uVar5;
  undefined8 uVar6;
  int iVar7;
  undefined8 *puVar8;
  undefined8 uVar9;
  LPVOID pvVar10;
  longlong lVar11;
  uint *puVar12;
  ulonglong uVar13;
  uint *puVar14;
  undefined1 auStackY_1c8 [32];
  undefined8 local_198;
  undefined8 uStack_190;
  int local_188;
  undefined8 local_178;
  undefined8 uStack_170;
  undefined4 local_168;
  int local_158;
  undefined4 uStack_154;
  uint *local_150;
  undefined8 local_148;
  undefined8 uStack_140;
  undefined8 local_138;
  undefined8 uStack_130;
  undefined8 local_128 [2];
  undefined8 local_118 [2];
  undefined8 local_108 [2];
  undefined8 local_f8 [2];
  undefined8 local_e8 [2];
  undefined8 local_d8 [2];
  undefined8 local_c8 [2];
  undefined8 local_b8 [2];
  undefined8 local_a8 [2];
  undefined8 local_98;
  longlong local_90;
  char local_88;
  undefined1 local_80;
  undefined7 uStack_7f;
  undefined8 local_70;
  ulonglong uStack_68;
  ulonglong local_60;
  
  local_60 = DAT_180028040 ^ (ulonglong)auStackY_1c8;
  iVar7 = napi_create_array(param_2,&local_158);
  if (iVar7 == 0) {
    param_1[1] = CONCAT44(uStack_154,local_158);
    uVar9 = param_2;
  }
  else {
    puVar8 = FUN_180001d60(&local_98,param_2);
    FUN_1800023f0(puVar8);
    if (0xf < uStack_68) {
      pvVar1 = (LPVOID)CONCAT71(uStack_7f,local_80);
      pvVar10 = pvVar1;
      if ((0xfff < uStack_68 + 1) &&
         (pvVar10 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar10)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar10);
    }
    local_70 = 0;
    uStack_68 = 0xf;
    local_80 = 0;
    if ((local_90 != 0) && (local_88 == '\0')) {
      napi_delete_reference(local_98);
    }
    param_1[1] = 0;
    uVar9 = 0;
  }
  *param_1 = uVar9;
  local_158 = 0;
  local_150 = (uint *)param_3[1];
  puVar14 = (uint *)*param_3;
  if (puVar14 != local_150) {
    puVar12 = puVar14 + 0xc;
    do {
      uVar13 = 0;
      FUN_180001b30(&local_148,param_2,9);
      puVar8 = FUN_180001360(local_128,param_2,SUB84((double)*puVar14,0));
      uVar3 = uStack_140;
      uVar9 = local_148;
      local_198 = *puVar8;
      uStack_190 = puVar8[1];
      local_178 = local_148;
      uStack_170 = uStack_140;
      local_168 = 0;
      FUN_180004db0(&local_178);
      puVar8 = FUN_180001360(local_118,param_2,SUB84((double)puVar12[-0xb],0));
      local_198 = *puVar8;
      uStack_190 = puVar8[1];
      local_178 = uVar9;
      uStack_170 = uVar3;
      local_168 = 1;
      FUN_180004db0(&local_178);
      puVar8 = FUN_180001470(local_108,param_2,(undefined8 *)(puVar12 + -10));
      uVar4 = uStack_140;
      uVar2 = local_148;
      local_198 = *puVar8;
      uStack_190 = puVar8[1];
      local_178 = local_148;
      uStack_170 = uStack_140;
      FUN_180005950(&local_178,2,&local_198);
      puVar8 = FUN_180001470(local_f8,param_2,(undefined8 *)(puVar12 + 8));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar2;
      uStack_190 = uVar4;
      FUN_180005950(&local_198,3,&local_178);
      puVar8 = FUN_180001360(local_e8,param_2,SUB84((double)*(ulonglong *)(puVar12 + 4),0));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar9;
      uStack_190 = uVar3;
      local_188 = 4;
      FUN_180004db0(&local_198);
      puVar8 = FUN_180001360(local_d8,param_2,SUB84((double)*(ulonglong *)(puVar12 + 6),0));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar9;
      uStack_190 = uVar3;
      local_188 = 5;
      FUN_180004db0(&local_198);
      FUN_180001b30(&local_138,param_2,
                    *(longlong *)puVar12 - *(longlong *)(puVar12 + -2) >> 5 & 0xffffffff);
      uVar6 = uStack_130;
      uVar5 = local_138;
      lVar11 = *(longlong *)(puVar12 + -2);
      if (*(longlong *)puVar12 - lVar11 >> 5 != 0) {
        do {
          puVar8 = FUN_180001470(local_c8,param_2,(undefined8 *)(lVar11 + uVar13 * 0x20));
          local_178 = *puVar8;
          uStack_170 = puVar8[1];
          local_198 = uVar5;
          uStack_190 = uVar6;
          FUN_180005950(&local_198,uVar13,&local_178);
          uVar13 = (ulonglong)((int)uVar13 + 1);
          lVar11 = *(longlong *)(puVar12 + -2);
        } while (uVar13 < (ulonglong)(*(longlong *)puVar12 - lVar11 >> 5));
      }
      local_178 = uVar5;
      uStack_170 = uVar6;
      local_198 = uVar9;
      uStack_190 = uVar3;
      local_188 = 6;
      FUN_180004db0(&local_198);
      puVar8 = FUN_180001470(local_b8,param_2,(undefined8 *)(puVar12 + 0x10));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar2;
      uStack_190 = uVar4;
      FUN_180005950(&local_198,7,&local_178);
      puVar8 = FUN_180001470(local_a8,param_2,(undefined8 *)(puVar12 + 0x18));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar2;
      uStack_190 = uVar4;
      FUN_180005950(&local_198,8,&local_178);
      local_178 = uVar2;
      uStack_170 = uVar4;
      local_198 = *param_1;
      uStack_190 = param_1[1];
      local_188 = local_158;
      local_158 = local_158 + 1;
      FUN_180004db0(&local_198);
      puVar14 = puVar14 + 0x2c;
      puVar12 = puVar12 + 0x2c;
    } while (puVar14 != local_150);
  }
  return param_1;
}


/* Address: 0x180003bc0; Evidence: ev_c7a346be5a0bb7b526f9d45ce4e45c9dc389d74c99f04d8672d0126aa928acd1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180003bc0(undefined8 *param_1,undefined8 param_2,longlong *param_3)

{
  longlong lVar1;
  longlong lVar2;
  longlong lVar3;
  int iVar4;
  undefined8 *puVar5;
  LPVOID pvVar6;
  LPVOID pvVar7;
  longlong *plVar8;
  undefined1 auStackY_a8 [32];
  undefined8 local_68 [2];
  undefined8 local_58;
  longlong local_50;
  char local_48;
  undefined1 local_40;
  undefined7 uStack_3f;
  undefined8 local_30;
  ulonglong uStack_28;
  ulonglong local_20;
  
  local_20 = DAT_180028040 ^ (ulonglong)auStackY_a8;
  plVar8 = param_3;
  puVar5 = FUN_180001a20(local_68,param_2);
  FUN_180002b20(param_1,param_2,plVar8,(longlong)puVar5);
  *param_1 = &PTR_FUN_180022fd0;
  lVar1 = param_3[2];
  param_3[2] = 0;
  lVar2 = param_3[1];
  param_3[1] = 0;
  lVar3 = *param_3;
  *param_3 = 0;
  param_1[0xe] = lVar3;
  param_1[0xf] = lVar2;
  param_1[0x10] = lVar1;
  param_1[0x11] = param_2;
  iVar4 = napi_create_promise(param_2,param_1 + 0x12);
  if (iVar4 != 0) {
    puVar5 = FUN_180001d60(&local_58,param_1[0x11]);
    FUN_1800023f0(puVar5);
    if (0xf < uStack_28) {
      pvVar7 = (LPVOID)CONCAT71(uStack_3f,local_40);
      pvVar6 = pvVar7;
      if ((0xfff < uStack_28 + 1) &&
         (pvVar6 = *(LPVOID *)((longlong)pvVar7 + -8),
         0x1f < (ulonglong)((longlong)pvVar7 + (-8 - (longlong)pvVar6)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar6);
    }
    local_30 = 0;
    uStack_28 = 0xf;
    local_40 = 0;
    if ((local_50 != 0) && (local_48 == '\0')) {
      napi_delete_reference(local_58);
    }
  }
  param_1[0x14] = 0;
  param_1[0x15] = 0;
  param_1[0x16] = 0;
  pvVar6 = (LPVOID)*param_3;
  if (pvVar6 != (LPVOID)0x0) {
    pvVar7 = pvVar6;
    if ((0xfff < (param_3[2] - (longlong)pvVar6 & 0xfffffffffffffffcU)) &&
       (pvVar7 = *(LPVOID *)((longlong)pvVar6 + -8),
       0x1f < (ulonglong)((longlong)pvVar6 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar7);
    *param_3 = 0;
    param_3[1] = 0;
    param_3[2] = 0;
  }
  return param_1;
}


/* Address: 0x180003da0; Evidence: ev_33fca4ef6e9c9bf9cbd08cbc9fa4133efc0f416553aeb3dfba809eb84b27ea1e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003da0(longlong param_1,undefined8 param_2,undefined1 param_3)

{
  longlong *plVar1;
  longlong *plVar2;
  undefined1 auStack_98 [32];
  longlong local_78;
  longlong local_68 [11];
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStack_98;
  local_78 = param_1;
  plVar1 = FUN_180003350(local_68,(undefined8 *)(param_1 + 0x70),param_3);
  plVar2 = (longlong *)(param_1 + 0xa0);
  if (plVar2 != plVar1) {
    FUN_180005ff0(plVar2);
    *plVar2 = *plVar1;
    *(longlong *)(param_1 + 0xa8) = plVar1[1];
    *(longlong *)(param_1 + 0xb0) = plVar1[2];
    *plVar1 = 0;
    plVar1[1] = 0;
    plVar1[2] = 0;
  }
  FUN_180005ff0(local_68);
  return;
}


/* Address: 0x180003e40; Evidence: ev_7d849b3ec78096a9a2e71899c16f1748292de0237caee07091a869fc6081f3ff */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003e40(longlong param_1)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58 [2];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_88;
  FUN_180003740(local_58,*(undefined8 *)(param_1 + 8),(undefined8 *)(param_1 + 0xa0));
  iVar2 = napi_resolve_deferred(*(undefined8 *)(param_1 + 0x88),*(undefined8 *)(param_1 + 0x90));
  if (iVar2 != 0) {
    puVar3 = FUN_180001d60(&local_48,*(undefined8 *)(param_1 + 0x88));
    FUN_1800023f0(puVar3);
    if (0xf < uStack_18) {
      pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  return;
}


/* Address: 0x180003f50; Evidence: ev_f4d4b5707678cc749e811d061db0101beb1b060f768b5d7815a2516f6089377a */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003f50(longlong param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58 [2];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_88;
  FUN_180002160(param_2,local_58);
  iVar2 = napi_reject_deferred(*(undefined8 *)(param_1 + 0x88),*(undefined8 *)(param_1 + 0x90));
  if (iVar2 != 0) {
    puVar3 = FUN_180001d60(&local_48,*(undefined8 *)(param_1 + 0x88));
    FUN_1800023f0(puVar3);
    if (0xf < uStack_18) {
      pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  return;
}


/* Address: 0x180004050; Evidence: ev_f874f25ef4c992469ce5fced5a4bc603ba213abaf3ac1f7cfcd011c4285a040c */

undefined8 * FUN_180004050(undefined8 *param_1,uint param_2)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  FUN_180005ff0(param_1 + 0x14);
  pvVar1 = (LPVOID)param_1[0xe];
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[0x10] - (longlong)pvVar1 & 0xfffffffffffffffcU)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
    param_1[0xe] = 0;
    param_1[0xf] = 0;
    param_1[0x10] = 0;
  }
  FUN_180002db0(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_1800116e0(param_1);
  }
  return param_1;
}


/* Address: 0x180004100; Evidence: ev_8e51a07dc7234d4341745b8f365abdeb1719e020625fbba3e30dca49bfcf55af */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180004100(longlong *param_1,longlong param_2)

{
  DWORD *pDVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  uint *puVar4;
  LPVOID pvVar5;
  longlong lVar6;
  int iVar7;
  undefined8 *puVar8;
  ulonglong uVar9;
  LPVOID pvVar10;
  uint uVar11;
  uint uVar12;
  undefined4 uVar13;
  undefined4 uVar14;
  undefined1 auStackY_168 [32];
  char local_138;
  uint local_134;
  DWORD local_130 [2];
  longlong local_128;
  undefined8 local_120;
  undefined8 local_118;
  char local_110;
  longlong *local_108;
  float local_f8 [16];
  undefined8 local_b8;
  longlong local_b0;
  char local_a8;
  undefined1 local_a0;
  undefined7 uStack_9f;
  undefined8 local_90;
  ulonglong uStack_88;
  ulonglong local_80;
  
  local_80 = DAT_180028040 ^ (ulonglong)auStackY_168;
  uVar11 = 0;
  *param_1 = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  local_130[1] = 1;
  local_108 = param_1;
  FUN_180005400(local_f8);
  if ((*(longlong *)(param_2 + 0x20) == 0) ||
     (puVar8 = FUN_180002680(param_2,&local_118), puVar8[1] == 0)) goto LAB_180004227;
  iVar7 = napi_is_array(*puVar8);
  if (iVar7 == 0) {
    if (local_138 == '\0') goto LAB_180004227;
    puVar8 = FUN_180002680(param_2,&local_118);
    uVar2 = puVar8[1];
    uVar3 = *puVar8;
    iVar7 = napi_get_array_length(uVar3,uVar2);
    if (iVar7 == 0) {
      uVar12 = 0x400;
      if ((0x400 < local_134) || (uVar12 = local_134, local_134 != 0)) {
        do {
          if (0x3f < (ulonglong)(param_1[1] - *param_1 >> 2)) break;
          iVar7 = napi_get_element(uVar3,uVar2);
          lVar6 = local_128;
          if (iVar7 == 0) {
            if (local_128 != 0) {
              iVar7 = napi_typeof(uVar3,local_128);
              if (iVar7 != 0) {
                puVar8 = FUN_180001d60(&local_b8,uVar3);
                FUN_1800023f0(puVar8);
                if (0xf < uStack_88) {
                  pvVar5 = (LPVOID)CONCAT71(uStack_9f,local_a0);
                  pvVar10 = pvVar5;
                  if ((0xfff < uStack_88 + 1) &&
                     (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
                     0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar10)))) {
                    /* WARNING: Subroutine does not return */
                    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
                  }
                  goto LAB_180004416;
                }
                goto LAB_18000441b;
              }
              if (local_130[0] == 3) {
                iVar7 = napi_get_value_double(uVar3,lVar6);
                if (iVar7 == 0) {
                  uVar13 = (undefined4)local_120;
                  uVar14 = (undefined4)((ulonglong)local_120 >> 0x20);
                }
                else {
                  puVar8 = FUN_180001d60(&local_b8,uVar3);
                  FUN_1800023f0(puVar8);
                  if (0xf < uStack_88) {
                    pvVar5 = (LPVOID)CONCAT71(uStack_9f,local_a0);
                    pvVar10 = pvVar5;
                    if ((0xfff < uStack_88 + 1) &&
                       (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
                       0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar10)))) {
                    /* WARNING: Subroutine does not return */
                      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
                    }
                    thunk_FUN_1800116e0(pvVar10);
                  }
                  local_90 = 0;
                  uStack_88 = 0xf;
                  local_a0 = 0;
                  if ((local_b0 != 0) && (local_a8 == '\0')) {
                    napi_delete_reference(local_b8);
                  }
                  uVar13 = 0;
                  uVar14 = 0;
                }
                uVar9 = thunk_FUN_1800187b0(CONCAT44(uVar14,uVar13));
                if (((((short)uVar9 < 1) &&
                     (1.0 < (double)CONCAT44(uVar14,uVar13) ||
                      (double)CONCAT44(uVar14,uVar13) == 1.0)) &&
                    ((double)CONCAT44(uVar14,uVar13) < 4294967295.0 ||
                     (double)CONCAT44(uVar14,uVar13) == 4294967295.0)) &&
                   ((local_134 = (uint)(longlong)(double)CONCAT44(uVar14,uVar13),
                    (double)((longlong)(double)CONCAT44(uVar14,uVar13) & 0xffffffff) ==
                    (double)CONCAT44(uVar14,uVar13) &&
                    (FUN_180005b40(local_f8,&local_118,(byte *)&local_134), local_110 != '\0')))) {
                  puVar4 = (uint *)param_1[1];
                  if (puVar4 == (uint *)param_1[2]) {
                    FUN_180006470(param_1,(undefined8 *)puVar4,&local_134);
                  }
                  else {
                    *puVar4 = local_134;
                    param_1[1] = param_1[1] + 4;
                  }
                }
              }
            }
          }
          else {
            puVar8 = FUN_180001d60(&local_b8,uVar3);
            FUN_1800023f0(puVar8);
            if (0xf < uStack_88) {
              pvVar5 = (LPVOID)CONCAT71(uStack_9f,local_a0);
              pvVar10 = pvVar5;
              if ((0xfff < uStack_88 + 1) &&
                 (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
                 0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar10)))) {
                    /* WARNING: Subroutine does not return */
                _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
              }
LAB_180004416:
              thunk_FUN_1800116e0(pvVar10);
            }
LAB_18000441b:
            local_90 = 0;
            uStack_88 = 0xf;
            local_a0 = 0;
            if ((local_b0 != 0) && (local_a8 == '\0')) {
              napi_delete_reference(local_b8);
            }
          }
          uVar11 = uVar11 + 1;
        } while (uVar11 < uVar12);
      }
      goto LAB_180004227;
    }
    puVar8 = FUN_180001d60(&local_b8,uVar3);
    FUN_1800023f0(puVar8);
    if (0xf < uStack_88) {
      pvVar5 = (LPVOID)CONCAT71(uStack_9f,local_a0);
      pvVar10 = pvVar5;
      if ((0xfff < uStack_88 + 1) &&
         (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
         0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar10)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      goto LAB_1800041f8;
    }
  }
  else {
    puVar8 = FUN_180001d60(&local_b8,*puVar8);
    FUN_1800023f0(puVar8);
    if (0xf < uStack_88) {
      pvVar5 = (LPVOID)CONCAT71(uStack_9f,local_a0);
      pvVar10 = pvVar5;
      if ((0xfff < uStack_88 + 1) &&
         (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
         0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)*(LPVOID *)((longlong)pvVar5 + -8))))
         ) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
LAB_1800041f8:
      thunk_FUN_1800116e0(pvVar10);
    }
  }
  local_90 = 0;
  uStack_88 = 0xf;
  local_a0 = 0;
  if ((local_b0 != 0) && (local_a8 == '\0')) {
    napi_delete_reference(local_b8);
  }
LAB_180004227:
  if (*param_1 == param_1[1]) {
    local_130[0] = GetCurrentProcessId();
    pDVar1 = (DWORD *)param_1[1];
    if (pDVar1 == (DWORD *)param_1[2]) {
      FUN_180006470(param_1,(undefined8 *)pDVar1,local_130);
    }
    else {
      *pDVar1 = local_130[0];
      param_1[1] = param_1[1] + 4;
    }
  }
  FUN_180004640((longlong)local_f8);
  return param_1;
}


/* Address: 0x180004640; Evidence: ev_816e83d392402b1cc6f0789cd15cf51c07128338a1a0fbdd2b95df31130ce02b */

void FUN_180004640(longlong param_1)

{
  LPVOID pvVar1;
  undefined8 *puVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  
  pvVar1 = *(LPVOID *)(param_1 + 0x18);
  if (pvVar1 != (LPVOID)0x0) {
    pvVar4 = pvVar1;
    if ((0xfff < (*(longlong *)(param_1 + 0x28) - (longlong)pvVar1 & 0xfffffffffffffff8U)) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar4);
    *(undefined8 *)(param_1 + 0x18) = 0;
    *(undefined8 *)(param_1 + 0x20) = 0;
    *(undefined8 *)(param_1 + 0x28) = 0;
  }
  puVar2 = *(undefined8 **)(param_1 + 8);
  *(undefined8 *)puVar2[1] = 0;
  puVar2 = (undefined8 *)*puVar2;
  while (puVar2 != (undefined8 *)0x0) {
    puVar3 = (undefined8 *)*puVar2;
    thunk_FUN_1800116e0(puVar2);
    puVar2 = puVar3;
  }
  thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  return;
}


/* Address: 0x180004700; Evidence: ev_29abc6bde82ee931af8b67a1586a69425d32358bd8afa8071974bc3a4f06b620 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004700(undefined8 *param_1,longlong param_2)

{
  undefined8 uVar1;
  LPVOID pvVar2;
  int iVar3;
  undefined8 *puVar4;
  longlong *plVar5;
  undefined8 *puVar6;
  LPVOID pvVar7;
  undefined1 auStackY_a8 [32];
  longlong local_60 [3];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong local_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_a8;
  puVar4 = operator_new(0xb8);
  plVar5 = FUN_180004100(local_60,param_2);
  puVar4 = FUN_180003bc0(puVar4,*(undefined8 *)(param_2 + 8),plVar5);
  iVar3 = napi_queue_async_work(puVar4[1],puVar4[2]);
  if (iVar3 != 0) {
    puVar6 = FUN_180001d60(&local_48,puVar4[1]);
    FUN_1800023f0(puVar6);
    if (0xf < local_18) {
      pvVar2 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar7 = pvVar2;
      if ((0xfff < local_18 + 1) &&
         (pvVar7 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar7);
    }
    local_20 = 0;
    local_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  uVar1 = puVar4[0x13];
  *param_1 = puVar4[0x11];
  param_1[1] = uVar1;
  return param_1;
}


/* Address: 0x180004870; Evidence: ev_aca707ecbf5ca24b7da23d17ce4e1f2bbcdca880e243eac5cd411243b9b5066c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004870(undefined8 *param_1,longlong param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined8 uVar5;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  uVar5 = *(undefined8 *)(param_2 + 8);
  iVar2 = napi_get_null(uVar5,&local_58);
  if (iVar2 == 0) {
    param_1[1] = local_58;
  }
  else {
    puVar3 = FUN_180001d60(&local_50,uVar5);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_20) {
      pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_20 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_28 = 0;
    uStack_20 = 0xf;
    local_38 = 0;
    if ((local_48 != 0) && (local_40 == '\0')) {
      napi_delete_reference(local_50);
    }
    uVar5 = 0;
    param_1[1] = 0;
  }
  *param_1 = uVar5;
  return param_1;
}


/* Address: 0x180004980; Evidence: ev_30805e3ebaf153347b7355672d5c755d7726735f16da306c0be3111c69b1ecc7 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004980(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  LPVOID pvVar2;
  int iVar3;
  undefined8 *puVar4;
  LPVOID pvVar5;
  undefined1 auStackY_b8 [32];
  undefined8 local_78 [2];
  undefined8 local_68;
  longlong local_60;
  char local_58;
  undefined1 local_50;
  undefined7 uStack_4f;
  undefined8 local_40;
  ulonglong uStack_38;
  ulonglong local_30;
  
  local_30 = DAT_180028040 ^ (ulonglong)auStackY_b8;
  FUN_180004f30(local_78,param_2,FUN_180004700);
  iVar3 = napi_create_string_utf8(param_2,"cursor_proclist_scan_async");
  if (iVar3 != 0) {
    puVar4 = FUN_180001d60(&local_68,param_2);
    FUN_1800023f0(puVar4);
    if (0xf < uStack_38) {
      pvVar2 = (LPVOID)CONCAT71(uStack_4f,local_50);
      pvVar5 = pvVar2;
      if ((0xfff < uStack_38 + 1) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
    local_40 = 0;
    uStack_38 = 0xf;
    local_50 = 0;
    if ((local_60 != 0) && (local_58 == '\0')) {
      napi_delete_reference(local_68);
    }
  }
  FUN_1800050a0(param_3);
  FUN_180004f30(local_78,param_2,FUN_180004870);
  iVar3 = napi_create_string_utf8(param_2,"cursor_proclist_system_memory");
  if (iVar3 != 0) {
    puVar4 = FUN_180001d60(&local_68,param_2);
    FUN_1800023f0(puVar4);
    if (0xf < uStack_38) {
      pvVar2 = (LPVOID)CONCAT71(uStack_4f,local_50);
      pvVar5 = pvVar2;
      if ((0xfff < uStack_38 + 1) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
    local_40 = 0;
    uStack_38 = 0xf;
    local_50 = 0;
    if ((local_60 != 0) && (local_58 == '\0')) {
      napi_delete_reference(local_68);
    }
  }
  FUN_1800050a0(param_3);
  uVar1 = param_3[1];
  *param_1 = *param_3;
  param_1[1] = uVar1;
  return param_1;
}


/* Address: 0x180004bb0; Evidence: ev_a06cb35ef97efbb122051c9e8ff3653e70836f7f827841c6ec11ca2d08d4518a */

undefined8 node_api_module_get_api_version_v1(void)

{
                    /* 0x4bb0  2  node_api_module_get_api_version_v1 */
  return 8;
}


/* Address: 0x180004bc0; Evidence: ev_3b08ace61fb47c4464532cc752db0fbad146a1806dc563b1289d5b1b47142c70 */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  undefined8 *puVar1;
  undefined8 local_28;
  undefined8 local_20;
  undefined8 local_18 [3];
  
                    /* 0x4bc0  1  napi_register_module_v1 */
  local_28 = param_1;
  local_20 = param_2;
  puVar1 = FUN_180004980(local_18,param_1,&local_28);
  return puVar1[1];
}


/* Address: 0x180004bf0; Evidence: ev_c8b70dd962fe33eb1038a1440d8cb3d145ad09f4a96c6e7239bcde3bef316513 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 *
FUN_180004bf0(undefined8 *param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4,
             undefined *param_5)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_b8 [32];
  undefined8 local_70;
  longlong local_68;
  char local_60;
  undefined1 local_58;
  undefined7 uStack_57;
  undefined8 local_48;
  ulonglong uStack_40;
  ulonglong local_38;
  
  local_38 = DAT_180028040 ^ (ulonglong)auStackY_b8;
  iVar2 = napi_create_string_utf8(param_2,param_3);
  if (iVar2 == 0) {
    iVar2 = (*(code *)param_5)(param_2,0);
    if (iVar2 == 0) {
      FUN_180002010(param_1,param_2,(longlong)param_1);
      return param_1;
    }
    puVar3 = FUN_180001d60(&local_70,param_2);
    FUN_1800023f0(puVar3);
    if (uStack_40 < 0x10) goto LAB_180004c99;
    pvVar1 = (LPVOID)CONCAT71(uStack_57,local_58);
    pvVar4 = pvVar1;
    if ((0xfff < uStack_40 + 1) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  else {
    puVar3 = FUN_180001d60(&local_70,param_2);
    FUN_1800023f0(puVar3);
    if (uStack_40 < 0x10) goto LAB_180004c99;
    pvVar1 = (LPVOID)CONCAT71(uStack_57,local_58);
    pvVar4 = pvVar1;
    if ((0xfff < uStack_40 + 1) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)*(LPVOID *)((longlong)pvVar1 + -8)))))
    {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
  }
  thunk_FUN_1800116e0(pvVar4);
LAB_180004c99:
  local_48 = 0;
  uStack_40 = 0xf;
  local_58 = 0;
  if ((local_68 != 0) && (local_60 == '\0')) {
    napi_delete_reference(local_70);
  }
  *param_1 = 0;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  param_1[3] = 0;
  param_1[4] = 0;
  param_1[5] = 0;
  param_1[6] = 0xf;
  *(undefined1 *)(param_1 + 3) = 0;
  return param_1;
}


/* Address: 0x180004db0; Evidence: ev_1dca14326ce0cbb717ac76cf7b2f7bb6e5db47629c5f3e463c8da7f04d636649 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004db0(undefined8 *param_1)

{
  undefined8 uVar1;
  LPVOID pvVar2;
  int iVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  LPVOID pvVar6;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 local_60;
  undefined8 local_58 [2];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_98;
  uVar1 = *param_1;
  iVar3 = napi_set_element(uVar1,param_1[1]);
  if (iVar3 != 0) {
    puVar4 = FUN_180001d60(&local_48,uVar1);
    FUN_1800027b0(&local_68,*puVar4);
    if (puVar4[1] != 0) {
      puVar5 = FUN_180002160(puVar4,local_58);
      iVar3 = napi_throw(*puVar4,puVar5[1]);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
      }
    }
    iVar3 = napi_close_handle_scope(local_68,local_60);
    if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (0xf < uStack_18) {
      pvVar2 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar6 = pvVar2;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar6 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar6)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar6);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  return param_1;
}


/* Address: 0x180004f30; Evidence: ev_22208f5221aead99d6e293bbf830d824d4a8923098a51813519b7ed7075c57c1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004f30(undefined8 *param_1,undefined8 param_2,undefined8 param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 local_60;
  longlong local_58;
  char local_50;
  undefined1 local_48;
  undefined7 uStack_47;
  undefined8 local_38;
  ulonglong local_30;
  ulonglong local_28;
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_98;
  puVar3 = operator_new(0x10);
  *puVar3 = param_3;
  puVar3[1] = 0;
  iVar2 = napi_create_function(param_2,0);
  if ((iVar2 == 0) && (iVar2 = napi_add_finalizer(param_2,local_68), iVar2 == 0)) {
    *param_1 = param_2;
    param_1[1] = local_68;
    return param_1;
  }
  thunk_FUN_1800116e0(puVar3);
  puVar3 = FUN_180001d60(&local_60,param_2);
  FUN_1800023f0(puVar3);
  if (0xf < local_30) {
    pvVar1 = (LPVOID)CONCAT71(uStack_47,local_48);
    pvVar4 = pvVar1;
    if ((0xfff < local_30 + 1) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar4);
  }
  local_38 = 0;
  local_30 = 0xf;
  local_48 = 0;
  if ((local_58 != 0) && (local_50 == '\0')) {
    napi_delete_reference(local_60);
  }
  *param_1 = 0;
  param_1[1] = 0;
  return param_1;
}


/* Address: 0x1800050a0; Evidence: ev_f87db2c1d79e395b564f51c0c61af94855859fc59a9d16029dd7644a584aa61b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800050a0(undefined8 *param_1)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  ulonglong uVar6;
  LPVOID pvVar7;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 local_60;
  undefined8 local_58 [2];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_98;
  uVar3 = napi_set_property(*param_1,param_1[1]);
  if ((int)uVar3 == 0) {
    uVar6 = CONCAT71((int7)((ulonglong)uVar3 >> 8),1);
  }
  else {
    puVar4 = FUN_180001d60(&local_48,*param_1);
    FUN_1800027b0(&local_68,*puVar4);
    if (puVar4[1] != 0) {
      puVar5 = FUN_180002160(puVar4,local_58);
      iVar2 = napi_throw(*puVar4,puVar5[1]);
      if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
      }
    }
    uVar6 = napi_close_handle_scope(local_68,local_60);
    if ((int)uVar6 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (0xf < uStack_18) {
      pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar7 = pvVar1;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar7 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      uVar6 = thunk_FUN_1800116e0(pvVar7);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      uVar6 = napi_delete_reference(local_48);
    }
    uVar6 = uVar6 & 0xffffffffffffff00;
  }
  return uVar6;
}


/* Address: 0x180005210; Evidence: ev_8590f796fe999467cbc40147a579b2f287650c7d00388c5578b1a7cff662f30c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180005210(undefined8 *param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined8 uVar5;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  uVar5 = *param_1;
  if (param_1[1] == 0) {
    local_58 = 0;
  }
  else {
    iVar2 = napi_get_reference_value();
    uVar5 = *param_1;
    if (iVar2 != 0) {
      puVar3 = FUN_180001d60(&local_50,uVar5);
      FUN_1800023f0(puVar3);
      if (0xf < uStack_20) {
        pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
        pvVar4 = pvVar1;
        if ((0xfff < uStack_20 + 1) &&
           (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
           0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_1800116e0(pvVar4);
      }
      local_28 = 0;
      uStack_20 = 0xf;
      local_38 = 0;
      if ((local_48 != 0) && (local_40 == '\0')) {
        napi_delete_reference(local_50);
      }
      local_58 = 0;
      *param_2 = 0;
      goto LAB_1800052e9;
    }
  }
  *param_2 = uVar5;
LAB_1800052e9:
  param_2[1] = local_58;
  return param_2;
}


/* Address: 0x180005330; Evidence: ev_7ce81dd5744f31dba8b12a699362b668029652850962cdf9740553a68bc1c2c6 */

void FUN_180005330(longlong *param_1)

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
    thunk_FUN_1800116e0(pvVar2);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x1800053a0; Evidence: ev_1e8fd742b62bf08ea9ff9e67385c21d470dcdf56b1a883f139effb9400d1067c */

void FUN_1800053a0(longlong *param_1)

{
  undefined8 *puVar1;
  undefined8 *puVar2;
  
  puVar1 = (undefined8 *)*param_1;
  *(undefined8 *)puVar1[1] = 0;
  puVar1 = (undefined8 *)*puVar1;
  while (puVar1 != (undefined8 *)0x0) {
    puVar2 = (undefined8 *)*puVar1;
    thunk_FUN_1800116e0(puVar1);
    puVar1 = puVar2;
  }
  thunk_FUN_1800116e0((LPVOID)*param_1);
  return;
}


/* Address: 0x180005400; Evidence: ev_7249060ba2cb5bc21829d7a6a70618d1a796466a703db2e005dbabe74d0f4207 */

/* WARNING: Removing unreachable block (ram,0x0001800054ee) */
/* WARNING: Removing unreachable block (ram,0x0001800054fb) */
/* WARNING: Removing unreachable block (ram,0x000180005500) */

undefined4 * FUN_180005400(undefined4 *param_1)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  LPVOID pvVar3;
  void *pvVar4;
  undefined8 *puVar5;
  longlong lVar6;
  LPVOID pvVar7;
  
  *param_1 = 0;
  *(undefined8 *)(param_1 + 2) = 0;
  *(undefined8 *)(param_1 + 4) = 0;
  pvVar4 = operator_new(0x18);
  *(void **)pvVar4 = pvVar4;
  *(void **)((longlong)pvVar4 + 8) = pvVar4;
  *(void **)(param_1 + 2) = pvVar4;
  *(undefined8 *)(param_1 + 6) = 0;
  *(undefined8 *)(param_1 + 8) = 0;
  *(undefined8 *)(param_1 + 10) = 0;
  *(undefined8 *)(param_1 + 0xc) = 7;
  *(undefined8 *)(param_1 + 0xe) = 8;
  *param_1 = 0x3f800000;
  uVar2 = *(undefined8 *)(param_1 + 2);
  puVar5 = operator_new(0x80);
  pvVar3 = *(LPVOID *)(param_1 + 6);
  lVar6 = *(longlong *)(param_1 + 10) - (longlong)pvVar3 >> 3;
  if (lVar6 != 0) {
    pvVar7 = pvVar3;
    if ((0xfff < (ulonglong)(lVar6 * 8)) &&
       (pvVar7 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar7);
  }
  *(undefined8 **)(param_1 + 6) = puVar5;
  puVar1 = puVar5 + 0x10;
  *(undefined8 **)(param_1 + 8) = puVar1;
  *(undefined8 **)(param_1 + 10) = puVar1;
  for (; puVar5 != puVar1; puVar5 = puVar5 + 1) {
    *puVar5 = uVar2;
  }
  return param_1;
}


/* Address: 0x180005530; Evidence: ev_be8a3e0e0076959a3a9800654d05aa75cf237e686ac5f722e4bb7db4cd448a65 */

void FUN_180005530(longlong *param_1,ulonglong param_2)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  longlong lVar4;
  LPVOID pvVar5;
  void *pvVar6;
  undefined4 *puVar7;
  longlong lVar8;
  undefined4 *puVar9;
  LPVOID pvVar10;
  undefined4 *puVar11;
  ulonglong uVar12;
  
  lVar1 = *param_1;
  if ((ulonglong)((param_1[2] - lVar1) / 0xb0) < param_2) {
    if (0x1745d1745d1745d < param_2) {
                    /* WARNING: Subroutine does not return */
      FUN_180005fd0();
    }
    lVar2 = param_1[1];
    uVar12 = param_2 * 0xb0;
    if (uVar12 == 0) {
      puVar9 = (undefined4 *)0x0;
    }
    else if (uVar12 < 0x1000) {
      puVar9 = operator_new(uVar12);
    }
    else {
      if (uVar12 + 0x27 <= uVar12) {
                    /* WARNING: Subroutine does not return */
        FUN_180001250();
      }
      pvVar6 = operator_new(uVar12 + 0x27);
      if (pvVar6 == (void *)0x0) goto LAB_1800056e6;
      puVar9 = (undefined4 *)((longlong)pvVar6 + 0x27U & 0xffffffffffffffe0);
      *(void **)(puVar9 + -2) = pvVar6;
    }
    puVar3 = (undefined4 *)param_1[1];
    puVar7 = puVar9;
    for (puVar11 = (undefined4 *)*param_1; puVar11 != puVar3; puVar11 = puVar11 + 0x2c) {
      FUN_180006d40(puVar7,puVar11);
      puVar7 = puVar7 + 0x2c;
    }
    lVar8 = *param_1;
    if (lVar8 != 0) {
      lVar4 = param_1[1];
      for (; lVar8 != lVar4; lVar8 = lVar8 + 0xb0) {
        FUN_180003570(lVar8);
      }
      pvVar5 = (LPVOID)*param_1;
      pvVar10 = pvVar5;
      if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar5) / 0xb0) * 0xb0)) &&
         (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
         0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar10)))) {
LAB_1800056e6:
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar10);
    }
    *param_1 = (longlong)puVar9;
    param_1[1] = (longlong)(puVar9 + ((lVar2 - lVar1) / 0xb0) * 0x2c);
    param_1[2] = (longlong)(puVar9 + param_2 * 0x2c);
  }
  return;
}


/* Address: 0x180005710; Evidence: ev_1da8cc42e13afefbe4ee872a93905cefffaaf3eba071ef0fc4f419e1e1bba271 */

void thunk_FUN_180005ff0(longlong *param_1)

{
  longlong lVar1;
  LPVOID pvVar2;
  longlong lVar3;
  LPVOID pvVar4;
  
  lVar3 = *param_1;
  if (lVar3 != 0) {
    lVar1 = param_1[1];
    for (; lVar3 != lVar1; lVar3 = lVar3 + 0xb0) {
      FUN_180003570(lVar3);
    }
    pvVar2 = (LPVOID)*param_1;
    pvVar4 = pvVar2;
    if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar2) / 0xb0) * 0xb0)) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar4);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x180005720; Evidence: ev_95ab4388e6944ae430416db5cbcb16aa6aeb1276f9171b5e8c6481dde43ec4cf */

void FUN_180005720(longlong *param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  pvVar1 = (LPVOID)*param_1;
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[2] - (longlong)pvVar1 & 0xfffffffffffffffcU)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x180005790; Evidence: ev_99308d398c2b2456b3e04e4986962654aef84f2cc9d73f1b1dc199c982429424 */

void FUN_180005790(longlong *param_1)

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
    thunk_FUN_1800116e0(pvVar2);
  }
  param_1[2] = 0;
  param_1[3] = 0xf;
  *(undefined1 *)param_1 = 0;
  return;
}


/* Address: 0x180005810; Evidence: ev_9bccd2d13d96cb8431fd4148d34c499c5befed61f62fdb1a5f71692ee7c1a093 */

undefined8 * FUN_180005810(undefined8 *param_1,undefined8 *param_2)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  void *pvVar4;
  ulonglong uVar5;
  undefined8 *puVar6;
  
  puVar6 = (undefined8 *)0x0;
  *param_1 = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  param_1[3] = 0;
  uVar5 = 0xffffffffffffffff;
  do {
    uVar5 = uVar5 + 1;
  } while (*(char *)((longlong)param_2 + uVar5) != '\0');
  if (0x7fffffffffffffff < uVar5) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  if (uVar5 < 0x10) {
    param_1[2] = uVar5;
    param_1[3] = 0xf;
    FUN_180018c60(param_1,param_2,uVar5);
    *(undefined1 *)(uVar5 + (longlong)param_1) = 0;
    return param_1;
  }
  uVar2 = uVar5 | 0xf;
  if (uVar2 < 0x8000000000000000) {
    if (uVar2 < 0x16) {
      uVar2 = 0x16;
    }
    uVar1 = uVar2 + 1;
    if (uVar1 == 0) goto LAB_1800058ef;
    if (uVar1 < 0x1000) {
      puVar6 = operator_new(uVar1);
      goto LAB_1800058ef;
    }
    uVar3 = uVar2 + 0x28;
    if (uVar3 <= uVar1) {
                    /* WARNING: Subroutine does not return */
      FUN_180001250();
    }
  }
  else {
    uVar3 = 0x8000000000000027;
    uVar2 = 0x7fffffffffffffff;
  }
  pvVar4 = operator_new(uVar3);
  if (pvVar4 == (void *)0x0) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  puVar6 = (undefined8 *)((longlong)pvVar4 + 0x27U & 0xffffffffffffffe0);
  puVar6[-1] = pvVar4;
LAB_1800058ef:
  *param_1 = puVar6;
  param_1[2] = uVar5;
  param_1[3] = uVar2;
  FUN_180018c60(puVar6,param_2,uVar5);
  *(undefined1 *)((longlong)puVar6 + uVar5) = 0;
  return param_1;
}


/* Address: 0x180005950; Evidence: ev_fb53516b0aad73945cd83816803e14990acc906b5f76850356467bdc4bd30ca6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180005950(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  ulonglong uVar6;
  LPVOID pvVar7;
  undefined1 auStackY_c8 [32];
  undefined8 local_98;
  undefined8 local_90;
  LPVOID local_80 [3];
  ulonglong local_68;
  undefined8 local_60;
  longlong local_58;
  char local_50;
  undefined1 local_48;
  undefined7 uStack_47;
  undefined8 local_38;
  ulonglong uStack_30;
  ulonglong local_28;
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_c8;
  uVar3 = *param_1;
  FUN_180001730(param_3,(longlong *)local_80);
  FUN_180001470(&local_98,uVar3,local_80);
  if (0xf < local_68) {
    pvVar7 = local_80[0];
    if ((0xfff < local_68 + 1) &&
       (pvVar7 = *(LPVOID *)((longlong)local_80[0] + -8),
       0x1f < (ulonglong)((longlong)local_80[0] + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar7);
  }
  uVar3 = napi_set_element(*param_1,param_1[1]);
  if ((int)uVar3 == 0) {
    uVar6 = CONCAT71((int7)((ulonglong)uVar3 >> 8),1);
  }
  else {
    puVar4 = FUN_180001d60(&local_60,*param_1);
    FUN_1800027b0(&local_98,*puVar4);
    if (puVar4[1] != 0) {
      puVar5 = FUN_180002160(puVar4,local_80);
      iVar2 = napi_throw(*puVar4,puVar5[1]);
      if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
      }
    }
    uVar6 = napi_close_handle_scope(local_98,local_90);
    if ((int)uVar6 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
    if (0xf < uStack_30) {
      pvVar1 = (LPVOID)CONCAT71(uStack_47,local_48);
      pvVar7 = pvVar1;
      if ((0xfff < uStack_30 + 1) &&
         (pvVar7 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      uVar6 = thunk_FUN_1800116e0(pvVar7);
    }
    local_38 = 0;
    uStack_30 = 0xf;
    local_48 = 0;
    if ((local_58 != 0) && (local_50 == '\0')) {
      uVar6 = napi_delete_reference(local_60);
    }
    uVar6 = uVar6 & 0xffffffffffffff00;
  }
  return uVar6;
}


/* Address: 0x180005b40; Evidence: ev_5dcef324b80ce385b4ab4c5047c2c518393f6c38e5ca1662b490adee8f6eca23 */

undefined8 * FUN_180005b40(float *param_1,undefined8 *param_2,byte *param_3)

{
  int iVar1;
  longlong *plVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  ulonglong uVar6;
  longlong lVar7;
  ulonglong uVar8;
  longlong *plVar9;
  float fVar10;
  ulonglong uVar11;
  
  uVar6 = (((((ulonglong)*param_3 ^ 0xcbf29ce484222325) * 0x100000001b3 ^ (ulonglong)param_3[1]) *
            0x100000001b3 ^ (ulonglong)param_3[2]) * 0x100000001b3 ^ (ulonglong)param_3[3]) *
          0x100000001b3;
  plVar2 = *(longlong **)
            (*(longlong *)(param_1 + 6) + 8 + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
  plVar9 = *(longlong **)(param_1 + 2);
  if (plVar2 != plVar9) {
    iVar1 = (int)plVar2[2];
    while (*(int *)param_3 != iVar1) {
      plVar9 = plVar2;
      if (plVar2 == *(longlong **)
                     (*(longlong *)(param_1 + 6) + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10))
      goto LAB_180005c0a;
      plVar2 = (longlong *)plVar2[1];
      iVar1 = (int)plVar2[2];
    }
    plVar9 = (longlong *)*plVar2;
    if (plVar2 != (longlong *)0x0) {
      *param_2 = plVar2;
      *(undefined1 *)(param_2 + 1) = 0;
      return param_2;
    }
  }
LAB_180005c0a:
  if (*(longlong *)(param_1 + 4) == 0xaaaaaaaaaaaaaaa) {
                    /* WARNING: Subroutine does not return */
    FUN_18000a790(0x180022f20);
  }
  puVar5 = operator_new(0x18);
  *(undefined4 *)(puVar5 + 2) = *(undefined4 *)param_3;
  uVar3 = *(ulonglong *)(param_1 + 0xe);
  if (*param_1 < (float)(*(longlong *)(param_1 + 4) + 1) / (float)uVar3) {
    uVar11 = FUN_180018710();
    lVar7 = 0;
    fVar10 = (float)uVar11;
    if ((9.223372e+18 <= fVar10) && (fVar10 = fVar10 - 9.223372e+18, fVar10 < 9.223372e+18)) {
      lVar7 = -0x8000000000000000;
    }
    uVar11 = 8;
    if (8 < (ulonglong)((longlong)fVar10 + lVar7)) {
      uVar11 = (longlong)fVar10 + lVar7;
    }
    uVar8 = uVar3;
    if ((uVar3 < uVar11) && ((0x1ff < uVar3 || (uVar8 = uVar3 * 8, uVar3 * 8 < uVar11)))) {
      uVar8 = uVar11;
    }
    FUN_180006ae0((longlong)param_1,uVar8);
    plVar2 = *(longlong **)
              (*(longlong *)(param_1 + 6) + 8 + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
    plVar9 = *(longlong **)(param_1 + 2);
    if (plVar2 != plVar9) {
      iVar1 = (int)plVar2[2];
      plVar9 = plVar2;
      while (*(int *)(puVar5 + 2) != iVar1) {
        if (plVar9 == *(longlong **)
                       (*(longlong *)(param_1 + 6) + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10)
           ) goto LAB_180005d85;
        plVar9 = (longlong *)plVar9[1];
        iVar1 = (int)plVar9[2];
      }
      plVar9 = (longlong *)*plVar9;
    }
  }
LAB_180005d85:
  puVar4 = (undefined8 *)plVar9[1];
  *(longlong *)(param_1 + 4) = *(longlong *)(param_1 + 4) + 1;
  *puVar5 = plVar9;
  puVar5[1] = puVar4;
  *puVar4 = puVar5;
  plVar9[1] = (longlong)puVar5;
  uVar6 = *(ulonglong *)(param_1 + 0xc) & uVar6;
  lVar7 = *(longlong *)(param_1 + 6);
  plVar2 = *(longlong **)(lVar7 + uVar6 * 0x10);
  if (plVar2 == *(longlong **)(param_1 + 2)) {
    *(undefined8 **)(lVar7 + uVar6 * 0x10) = puVar5;
  }
  else {
    if (plVar2 == plVar9) {
      *(undefined8 **)(lVar7 + uVar6 * 0x10) = puVar5;
      goto LAB_180005dcf;
    }
    if (*(undefined8 **)(lVar7 + 8 + uVar6 * 0x10) != puVar4) goto LAB_180005dcf;
  }
  *(undefined8 **)(lVar7 + 8 + uVar6 * 0x10) = puVar5;
LAB_180005dcf:
  *param_2 = puVar5;
  *(undefined1 *)(param_2 + 1) = 1;
  return param_2;
}


/* Address: 0x180005e10; Evidence: ev_b81229cde4c62d322fcf5ff4970c8e26ce45529a748dca88202d27d5a706a6c9 */

undefined8 * FUN_180005e10(undefined8 *param_1,ulonglong param_2)

{
  ulonglong uVar1;
  longlong lVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  void *pvVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  undefined8 *puVar8;
  undefined8 *puVar9;
  
  lVar2 = param_1[2];
  uVar7 = 0x7fffffffffffffff;
  if (0x7fffffffffffffffU - lVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  uVar6 = lVar2 + param_2 | 0xf;
  uVar3 = param_1[3];
  if ((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) {
    uVar1 = uVar3 + (uVar3 >> 1);
    uVar7 = uVar6;
    if (uVar6 < uVar1) {
      uVar7 = uVar1;
    }
    uVar1 = uVar7 + 1;
    if (uVar1 == 0) {
      puVar9 = (undefined8 *)0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar6 = uVar7 + 0x28;
        if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001250();
        }
        goto LAB_180005eae;
      }
      puVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
LAB_180005eae:
    pvVar5 = operator_new(uVar6);
    if (pvVar5 == (void *)0x0) goto LAB_180005f4a;
    puVar9 = (undefined8 *)((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    puVar9[-1] = pvVar5;
  }
  param_1[2] = lVar2 + param_2;
  param_1[3] = uVar7;
  if (uVar3 < 0x10) {
    FUN_180018c60(puVar9,param_1,lVar2 + 1U);
  }
  else {
    puVar4 = (undefined8 *)*param_1;
    FUN_180018c60(puVar9,puVar4,lVar2 + 1U);
    puVar8 = puVar4;
    if ((0xfff < uVar3 + 1) &&
       (puVar8 = (undefined8 *)puVar4[-1],
       0x1f < (ulonglong)((longlong)puVar4 + (-8 - (longlong)puVar8)))) {
LAB_180005f4a:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(puVar8);
  }
  *param_1 = puVar9;
  return param_1;
}


/* Address: 0x180005f70; Evidence: ev_1a01c96b648d82d353bbfdad614fd92481dcfb039acba34f08948c9c31e96124 */

undefined8 FUN_180005f70(ulonglong param_1,ulonglong param_2)

{
  code *pcVar1;
  undefined1 local_88 [8];
  undefined8 local_80;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_180002470(local_78,param_1,param_2);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_88,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_1800116e0(local_18);
  }
  return local_80;
}


/* Address: 0x180005fd0; Evidence: ev_650fff1d1ec44b6c26b7f7ee0937bffb8688687a67fbb671c71807e9defdc814 */

void FUN_180005fd0(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_18000a790(0x180022f10);
}


/* Address: 0x180005ff0; Evidence: ev_9aff806ed9757ca2324a320941cf453d4e4ffc0a75d327349b12832ab655923b */

void FUN_180005ff0(longlong *param_1)

{
  longlong lVar1;
  LPVOID pvVar2;
  longlong lVar3;
  LPVOID pvVar4;
  
  lVar3 = *param_1;
  if (lVar3 != 0) {
    lVar1 = param_1[1];
    for (; lVar3 != lVar1; lVar3 = lVar3 + 0xb0) {
      FUN_180003570(lVar3);
    }
    pvVar2 = (LPVOID)*param_1;
    pvVar4 = pvVar2;
    if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar2) / 0xb0) * 0xb0)) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar4);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x1800060c0; Evidence: ev_a1c90661d41dc1be034034fefeffa90a8115ddde0631ca1f0f0504a562b13fc8 */

longlong * FUN_1800060c0(longlong *param_1,undefined8 *param_2,ulonglong param_3)

{
  ulonglong uVar1;
  ulonglong uVar2;
  LPVOID pvVar3;
  void *pvVar4;
  ulonglong uVar5;
  LPVOID pvVar6;
  longlong *plVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  
  uVar2 = param_1[3];
  if (param_3 <= uVar2) {
    plVar7 = param_1;
    if (0xf < uVar2) {
      plVar7 = (longlong *)*param_1;
    }
    param_1[2] = param_3;
    FUN_180018c60(plVar7,param_2,param_3);
    *(undefined1 *)((longlong)plVar7 + param_3) = 0;
    return param_1;
  }
  uVar8 = 0x7fffffffffffffff;
  if (0x7fffffffffffffff < param_3) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  uVar5 = param_3 | 0xf;
  if ((uVar5 < 0x8000000000000000) && (uVar2 <= 0x7fffffffffffffff - (uVar2 >> 1))) {
    uVar1 = uVar2 + (uVar2 >> 1);
    uVar8 = uVar5;
    if (uVar5 < uVar1) {
      uVar8 = uVar1;
    }
    uVar1 = uVar8 + 1;
    if (uVar1 == 0) {
      puVar9 = (undefined8 *)0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar5 = uVar8 + 0x28;
        if (uVar5 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001250();
        }
        goto LAB_18000617c;
      }
      puVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar5 = 0x8000000000000027;
LAB_18000617c:
    pvVar4 = operator_new(uVar5);
    if (pvVar4 == (void *)0x0) goto LAB_18000621b;
    puVar9 = (undefined8 *)((longlong)pvVar4 + 0x27U & 0xffffffffffffffe0);
    puVar9[-1] = pvVar4;
  }
  param_1[2] = param_3;
  param_1[3] = uVar8;
  FUN_180018c60(puVar9,param_2,param_3);
  *(undefined1 *)((longlong)puVar9 + param_3) = 0;
  if (0xf < uVar2) {
    pvVar3 = (LPVOID)*param_1;
    pvVar6 = pvVar3;
    if ((0xfff < uVar2 + 1) &&
       (pvVar6 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar6)))) {
LAB_18000621b:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar6);
  }
  *param_1 = (longlong)puVar9;
  return param_1;
}


/* Address: 0x180006250; Evidence: ev_5a34c6a8064f4515a6314fcc44ac9368637802c4003f7b9a37de56a72988d0c1 */

undefined4 * FUN_180006250(longlong *param_1,undefined4 *param_2,undefined4 *param_3)

{
  ulonglong uVar1;
  ulonglong uVar2;
  longlong lVar3;
  longlong lVar4;
  undefined4 *puVar5;
  void *pvVar6;
  __uint64 _Var7;
  undefined4 *puVar8;
  undefined4 *puVar9;
  undefined4 *puVar10;
  undefined4 *puVar11;
  ulonglong uVar12;
  
  lVar3 = *param_1;
  lVar4 = (param_1[1] - lVar3) / 0xb0;
  if (lVar4 == 0x1745d1745d1745d) {
                    /* WARNING: Subroutine does not return */
    FUN_180005fd0();
  }
  uVar1 = lVar4 + 1;
  uVar2 = (param_1[2] - lVar3) / 0xb0;
  if (uVar2 <= 0x1745d1745d1745d - (uVar2 >> 1)) {
    uVar2 = (uVar2 >> 1) + uVar2;
    uVar12 = uVar1;
    if (uVar1 <= uVar2) {
      uVar12 = uVar2;
    }
    if (uVar12 < 0x1745d1745d1745e) {
      _Var7 = uVar12 * 0xb0;
      if (_Var7 == 0) {
        puVar8 = (undefined4 *)0x0;
      }
      else if (_Var7 < 0x1000) {
        puVar8 = operator_new(_Var7);
      }
      else {
        if (_Var7 + 0x27 <= _Var7) goto LAB_180006457;
        pvVar6 = operator_new(_Var7 + 0x27);
        if (pvVar6 == (void *)0x0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        puVar8 = (undefined4 *)((longlong)pvVar6 + 0x27U & 0xffffffffffffffe0);
        *(void **)(puVar8 + -2) = pvVar6;
      }
      puVar11 = puVar8 + (((longlong)param_2 - lVar3) / 0xb0) * 0x2c;
      FUN_180006d40(puVar11,param_3);
      puVar10 = (undefined4 *)param_1[1];
      puVar9 = (undefined4 *)*param_1;
      puVar5 = puVar8;
      if (param_2 == puVar10) {
        for (; puVar9 != puVar10; puVar9 = puVar9 + 0x2c) {
          FUN_180006d40(puVar5,puVar9);
          puVar5 = puVar5 + 0x2c;
        }
      }
      else {
        for (; puVar9 != param_2; puVar9 = puVar9 + 0x2c) {
          FUN_180006d40(puVar5,puVar9);
          puVar5 = puVar5 + 0x2c;
        }
        puVar10 = (undefined4 *)param_1[1];
        puVar9 = puVar11;
        if (param_2 != puVar10) {
          do {
            FUN_180006d40(puVar9 + 0x2c,param_2);
            param_2 = param_2 + 0x2c;
            puVar9 = puVar9 + 0x2c;
          } while (param_2 != puVar10);
        }
      }
      FUN_1800069f0(param_1,(longlong)puVar8,uVar1,uVar12);
      return puVar11;
    }
  }
LAB_180006457:
                    /* WARNING: Subroutine does not return */
  FUN_180001250();
}


/* Address: 0x180006470; Evidence: ev_d7c58b1ea71efab0698a04c1f6c6818b113a13e67d70308d47f90a4dec4fd74f */

undefined4 * FUN_180006470(longlong *param_1,undefined8 *param_2,undefined4 *param_3)

{
  ulonglong uVar1;
  undefined4 *puVar2;
  longlong lVar3;
  undefined8 *puVar4;
  LPVOID pvVar5;
  longlong lVar6;
  void *pvVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  LPVOID pvVar10;
  undefined8 *puVar11;
  ulonglong uVar12;
  
  lVar3 = *param_1;
  lVar6 = param_1[1] - lVar3 >> 2;
  if (lVar6 == 0x3fffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_180005fd0();
  }
  uVar8 = param_1[2] - lVar3 >> 2;
  uVar1 = lVar6 + 1;
  if (0x3fffffffffffffff - (uVar8 >> 1) < uVar8) {
LAB_180006616:
                    /* WARNING: Subroutine does not return */
    FUN_180001250();
  }
  uVar8 = (uVar8 >> 1) + uVar8;
  uVar12 = uVar1;
  if (uVar1 <= uVar8) {
    uVar12 = uVar8;
  }
  if (0x3fffffffffffffff < uVar12) goto LAB_180006616;
  uVar12 = uVar12 * 4;
  if (uVar12 == 0) {
    puVar11 = (undefined8 *)0x0;
  }
  else if (uVar12 < 0x1000) {
    puVar11 = operator_new(uVar12);
  }
  else {
    if (uVar12 + 0x27 <= uVar12) goto LAB_180006616;
    pvVar7 = operator_new(uVar12 + 0x27);
    if (pvVar7 == (void *)0x0) goto LAB_1800065fd;
    puVar11 = (undefined8 *)((longlong)pvVar7 + 0x27U & 0xffffffffffffffe0);
    puVar11[-1] = pvVar7;
  }
  puVar2 = (undefined4 *)((longlong)puVar11 + ((longlong)param_2 - lVar3 >> 2) * 4);
  *puVar2 = *param_3;
  puVar4 = (undefined8 *)*param_1;
  if (param_2 == (undefined8 *)param_1[1]) {
    uVar8 = param_1[1] - (longlong)puVar4;
    puVar9 = puVar11;
    param_2 = puVar4;
  }
  else {
    FUN_180018c60(puVar11,puVar4,(longlong)param_2 - (longlong)puVar4);
    puVar9 = (undefined8 *)(puVar2 + 1);
    uVar8 = param_1[1] - (longlong)param_2;
  }
  FUN_180018c60(puVar9,param_2,uVar8);
  pvVar5 = (LPVOID)*param_1;
  if (pvVar5 != (LPVOID)0x0) {
    pvVar10 = pvVar5;
    if ((0xfff < (param_1[2] - (longlong)pvVar5 & 0xfffffffffffffffcU)) &&
       (pvVar10 = *(LPVOID *)((longlong)pvVar5 + -8),
       0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar10)))) {
LAB_1800065fd:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar10);
  }
  *param_1 = (longlong)puVar11;
  param_1[1] = (longlong)puVar11 + uVar1 * 4;
  param_1[2] = uVar12 + (longlong)puVar11;
  return puVar2;
}


/* Address: 0x180006630; Evidence: ev_fce6221fb4b1125d20ec17a582b29a53859b08ca8931c5b4ef8ca67bf58b4a0f */

void FUN_180006630(longlong *param_1,longlong *param_2)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  do {
    if (param_1 == param_2) {
      return;
    }
    if (0xf < (ulonglong)param_1[3]) {
      pvVar1 = (LPVOID)*param_1;
      pvVar2 = pvVar1;
      if ((0xfff < param_1[3] + 1U) &&
         (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar2);
    }
    param_1[2] = 0;
    param_1[3] = 0xf;
    *(undefined1 *)param_1 = 0;
    param_1 = param_1 + 4;
  } while( true );
}


/* Address: 0x1800066d0; Evidence: ev_fcc23974d4692fc4ec283c30ec5ed8e1b3c6c3276926973b6da463c01287c8a4 */

undefined8 *
FUN_1800066d0(undefined8 *param_1,ulonglong param_2,undefined8 param_3,ulonglong param_4)

{
  ulonglong uVar1;
  undefined1 (*pauVar2) [32];
  ulonglong uVar3;
  ulonglong uVar4;
  undefined8 *puVar5;
  void *pvVar6;
  ulonglong uVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  undefined8 *puVar10;
  
  uVar3 = param_1[2];
  uVar8 = 0x7fffffffffffffff;
  if (0x7fffffffffffffff - uVar3 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  uVar4 = param_1[3];
  uVar7 = uVar3 + param_2 | 0xf;
  if ((uVar7 < 0x8000000000000000) && (uVar4 <= 0x7fffffffffffffff - (uVar4 >> 1))) {
    uVar1 = (uVar4 >> 1) + uVar4;
    uVar8 = uVar7;
    if (uVar7 < uVar1) {
      uVar8 = uVar1;
    }
    uVar1 = uVar8 + 1;
    if (uVar1 == 0) {
      puVar10 = (undefined8 *)0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar7 = uVar8 + 0x28;
        if (uVar7 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001250();
        }
        goto LAB_180006776;
      }
      puVar10 = operator_new(uVar1);
    }
  }
  else {
    uVar7 = 0x8000000000000027;
LAB_180006776:
    pvVar6 = operator_new(uVar7);
    if (pvVar6 == (void *)0x0) goto LAB_18000683f;
    puVar10 = (undefined8 *)((longlong)pvVar6 + 0x27U & 0xffffffffffffffe0);
    puVar10[-1] = pvVar6;
  }
  param_1[2] = uVar3 + param_2;
  pauVar2 = (undefined1 (*) [32])(uVar3 + (longlong)puVar10);
  param_1[3] = uVar8;
  if (uVar4 < 0x10) {
    FUN_180018c60(puVar10,param_1,uVar3);
    FUN_1800188a0(pauVar2,0,param_4);
    (*pauVar2)[param_4] = 0;
  }
  else {
    puVar5 = (undefined8 *)*param_1;
    FUN_180018c60(puVar10,puVar5,uVar3);
    FUN_1800188a0(pauVar2,0,param_4);
    (*pauVar2)[param_4] = 0;
    puVar9 = puVar5;
    if ((0xfff < uVar4 + 1) &&
       (puVar9 = (undefined8 *)puVar5[-1],
       0x1f < (ulonglong)((longlong)puVar5 + (-8 - (longlong)puVar9)))) {
LAB_18000683f:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(puVar9);
  }
  *param_1 = puVar10;
  return param_1;
}


/* Address: 0x180006890; Evidence: ev_80f2bec94915d3fddece8b3107f882729486c5865929d2e019f27dd8b41abd4b */

void FUN_180006890(ulonglong *param_1,ulonglong param_2,undefined8 param_3)

{
  undefined8 *puVar1;
  LPVOID pvVar2;
  void *pvVar3;
  longlong lVar4;
  LPVOID pvVar5;
  ulonglong uVar6;
  undefined8 *puVar7;
  
  puVar7 = (undefined8 *)*param_1;
  lVar4 = (longlong)param_1[1] - (longlong)puVar7;
  if ((ulonglong)(lVar4 >> 3) < param_2) {
    if (0x1fffffffffffffff < param_2) {
LAB_1800069d5:
                    /* WARNING: Subroutine does not return */
      FUN_180001250();
    }
    uVar6 = param_2 * 8;
    puVar7 = (undefined8 *)0x0;
    if (uVar6 != 0) {
      if (uVar6 < 0x1000) {
        puVar7 = operator_new(uVar6);
      }
      else {
        if (uVar6 + 0x27 <= uVar6) goto LAB_1800069d5;
        pvVar3 = operator_new(uVar6 + 0x27);
        if (pvVar3 == (void *)0x0) goto LAB_1800069db;
        puVar7 = (undefined8 *)((longlong)pvVar3 + 0x27U & 0xffffffffffffffe0);
        puVar7[-1] = pvVar3;
      }
    }
    pvVar2 = (LPVOID)*param_1;
    lVar4 = (longlong)(param_1[2] - (longlong)pvVar2) >> 3;
    if (lVar4 != 0) {
      pvVar5 = pvVar2;
      if ((0xfff < (ulonglong)(lVar4 * 8)) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar2 - 8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar5)))) {
LAB_1800069db:
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
    puVar1 = puVar7 + param_2;
    *param_1 = (ulonglong)puVar7;
    param_1[1] = (ulonglong)puVar1;
    param_1[2] = (ulonglong)puVar1;
    for (; puVar7 != puVar1; puVar7 = puVar7 + 1) {
      *puVar7 = param_3;
    }
  }
  else {
    uVar6 = lVar4 + 7U >> 3;
    if ((undefined8 *)param_1[1] < puVar7) {
      uVar6 = 0;
    }
    if (uVar6 != 0) {
      for (; uVar6 != 0; uVar6 = uVar6 - 1) {
        *puVar7 = param_3;
        puVar7 = puVar7 + 1;
      }
    }
  }
  return;
}


/* Address: 0x1800069f0; Evidence: ev_d4992c571b4a8f622e5cb1a4794d44f5bed7e43c9349da45918e3bd72c10b920 */

void FUN_1800069f0(longlong *param_1,longlong param_2,longlong param_3,longlong param_4)

{
  longlong lVar1;
  LPVOID pvVar2;
  longlong lVar3;
  LPVOID pvVar4;
  
  lVar3 = *param_1;
  if (lVar3 != 0) {
    lVar1 = param_1[1];
    for (; lVar3 != lVar1; lVar3 = lVar3 + 0xb0) {
      FUN_180003570(lVar3);
    }
    pvVar2 = (LPVOID)*param_1;
    pvVar4 = pvVar2;
    if ((0xfff < (ulonglong)(((param_1[2] - (longlong)pvVar2) / 0xb0) * 0xb0)) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar4);
  }
  *param_1 = param_2;
  param_1[1] = param_3 * 0xb0 + param_2;
  param_1[2] = param_4 * 0xb0 + param_2;
  return;
}


/* Address: 0x180006ae0; Evidence: ev_d8f7218eb8bf7642b7f827b39d0ed96e65cb813c047602b9e999f3b23a2dce70 */

void FUN_180006ae0(longlong param_1,ulonglong param_2)

{
  longlong *plVar1;
  longlong *plVar2;
  longlong *plVar3;
  longlong *plVar4;
  undefined8 *puVar5;
  undefined8 *puVar6;
  longlong *plVar7;
  ulonglong uVar8;
  longlong lVar9;
  undefined8 *puVar10;
  
  for (lVar9 = 0x3f; 0xfffffffffffffffU >> lVar9 == 0; lVar9 = lVar9 + -1) {
  }
  if ((ulonglong)(1L << ((byte)lVar9 & 0x3f)) < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_18000a790(0x180022f40);
  }
  plVar1 = *(longlong **)(param_1 + 8);
  uVar8 = param_2 - 1 | 1;
  lVar9 = 0x3f;
  if (uVar8 != 0) {
    for (; uVar8 >> lVar9 == 0; lVar9 = lVar9 + -1) {
    }
  }
  lVar9 = 1L << ((char)lVar9 + 1U & 0x3f);
  FUN_180006890((ulonglong *)(param_1 + 0x18),lVar9 * 2,plVar1);
  *(longlong *)(param_1 + 0x38) = lVar9;
  *(longlong *)(param_1 + 0x30) = lVar9 + -1;
  plVar7 = (longlong *)**(undefined8 **)(param_1 + 8);
joined_r0x000180006b55:
  do {
    while( true ) {
      while( true ) {
        if (plVar7 == plVar1) {
          return;
        }
        plVar2 = (longlong *)*plVar7;
        puVar10 = (undefined8 *)
                  (((((((ulonglong)*(byte *)(plVar7 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                      (ulonglong)*(byte *)((longlong)plVar7 + 0x11)) * 0x100000001b3 ^
                     (ulonglong)*(byte *)((longlong)plVar7 + 0x12)) * 0x100000001b3 ^
                    (ulonglong)*(byte *)((longlong)plVar7 + 0x13)) * 0x100000001b3 &
                   *(ulonglong *)(param_1 + 0x30)) * 0x10 + *(longlong *)(param_1 + 0x18));
        if ((longlong *)*puVar10 != plVar1) break;
        *puVar10 = plVar7;
        puVar10[1] = plVar7;
        plVar7 = plVar2;
      }
      plVar3 = (longlong *)puVar10[1];
      if ((int)plVar7[2] != (int)plVar3[2]) break;
      plVar3 = (longlong *)*plVar3;
      if (plVar3 != plVar7) {
        plVar4 = (longlong *)plVar7[1];
        *plVar4 = (longlong)plVar2;
        puVar5 = (undefined8 *)plVar2[1];
        *puVar5 = plVar3;
        puVar6 = (undefined8 *)plVar3[1];
        *puVar6 = plVar7;
        plVar3[1] = (longlong)puVar5;
        plVar2[1] = (longlong)plVar4;
        plVar7[1] = (longlong)puVar6;
      }
      puVar10[1] = plVar7;
      plVar7 = plVar2;
    }
    do {
      if ((longlong *)*puVar10 == plVar3) {
        plVar4 = (longlong *)plVar7[1];
        *plVar4 = (longlong)plVar2;
        puVar5 = (undefined8 *)plVar2[1];
        *puVar5 = plVar3;
        puVar6 = (undefined8 *)plVar3[1];
        *puVar6 = plVar7;
        plVar3[1] = (longlong)puVar5;
        plVar2[1] = (longlong)plVar4;
        plVar7[1] = (longlong)puVar6;
        *puVar10 = plVar7;
        plVar7 = plVar2;
        goto joined_r0x000180006b55;
      }
      plVar3 = (longlong *)plVar3[1];
    } while ((int)plVar7[2] != (int)plVar3[2]);
    lVar9 = *plVar3;
    plVar3 = (longlong *)plVar7[1];
    *plVar3 = (longlong)plVar2;
    plVar4 = (longlong *)plVar2[1];
    *plVar4 = lVar9;
    puVar10 = *(undefined8 **)(lVar9 + 8);
    *puVar10 = plVar7;
    *(longlong **)(lVar9 + 8) = plVar4;
    plVar2[1] = (longlong)plVar3;
    plVar7[1] = (longlong)puVar10;
    plVar7 = plVar2;
  } while( true );
}


/* Address: 0x180006ca0; Evidence: ev_464c90a8f1a08f8bf02405ff2c90dbd8015fc0b337858064bc8007b0b9fff3c1 */

void FUN_180006ca0(longlong *param_1,longlong param_2,longlong param_3,longlong param_4)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  pvVar1 = (LPVOID)*param_1;
  if (pvVar1 != (LPVOID)0x0) {
    pvVar2 = pvVar1;
    if ((0xfff < (param_1[2] - (longlong)pvVar1 & 0xfffffffffffffffcU)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  *param_1 = param_2;
  param_1[1] = param_2 + param_3 * 4;
  param_1[2] = param_2 + param_4 * 4;
  return;
}


/* Address: 0x180006d40; Evidence: ev_84061330af7dc73b3fc02d347d3250d2ac4b0abda7e4df55dff34e1c7c71664b */

undefined4 * FUN_180006d40(undefined4 *param_1,undefined4 *param_2)

{
  undefined8 uVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  
  *param_1 = *param_2;
  param_1[1] = param_2[1];
  *(undefined8 *)(param_1 + 2) = 0;
  *(undefined8 *)(param_1 + 4) = 0;
  *(undefined8 *)(param_1 + 6) = 0;
  *(undefined8 *)(param_1 + 8) = 0;
  uVar1 = *(undefined8 *)(param_2 + 4);
  *(undefined8 *)(param_1 + 2) = *(undefined8 *)(param_2 + 2);
  *(undefined8 *)(param_1 + 4) = uVar1;
  uVar1 = *(undefined8 *)(param_2 + 8);
  *(undefined8 *)(param_1 + 6) = *(undefined8 *)(param_2 + 6);
  *(undefined8 *)(param_1 + 8) = uVar1;
  *(undefined8 *)(param_2 + 8) = 0xf;
  *(undefined1 *)(param_2 + 2) = 0;
  *(undefined8 *)(param_2 + 6) = 0;
  uVar1 = *(undefined8 *)(param_2 + 10);
  uVar2 = *(undefined8 *)(param_2 + 0xe);
  uVar3 = *(undefined8 *)(param_2 + 0xc);
  *(undefined8 *)(param_2 + 0xe) = 0;
  *(undefined8 *)(param_2 + 0xc) = 0;
  *(undefined8 *)(param_2 + 10) = 0;
  *(undefined8 *)(param_1 + 10) = uVar1;
  *(undefined8 *)(param_1 + 0xc) = uVar3;
  *(undefined8 *)(param_1 + 0xe) = uVar2;
  *(undefined8 *)(param_1 + 0x10) = *(undefined8 *)(param_2 + 0x10);
  *(undefined8 *)(param_1 + 0x12) = *(undefined8 *)(param_2 + 0x12);
  *(undefined8 *)(param_1 + 0x14) = 0;
  *(undefined8 *)(param_1 + 0x16) = 0;
  *(undefined8 *)(param_1 + 0x18) = 0;
  *(undefined8 *)(param_1 + 0x1a) = 0;
  uVar1 = *(undefined8 *)(param_2 + 0x16);
  *(undefined8 *)(param_1 + 0x14) = *(undefined8 *)(param_2 + 0x14);
  *(undefined8 *)(param_1 + 0x16) = uVar1;
  uVar1 = *(undefined8 *)(param_2 + 0x1a);
  *(undefined8 *)(param_1 + 0x18) = *(undefined8 *)(param_2 + 0x18);
  *(undefined8 *)(param_1 + 0x1a) = uVar1;
  *(undefined8 *)(param_2 + 0x1a) = 0xf;
  *(undefined1 *)(param_2 + 0x14) = 0;
  *(undefined8 *)(param_2 + 0x18) = 0;
  *(undefined8 *)(param_1 + 0x1c) = 0;
  *(undefined8 *)(param_1 + 0x1e) = 0;
  *(undefined8 *)(param_1 + 0x20) = 0;
  *(undefined8 *)(param_1 + 0x22) = 0;
  uVar1 = *(undefined8 *)(param_2 + 0x1e);
  *(undefined8 *)(param_1 + 0x1c) = *(undefined8 *)(param_2 + 0x1c);
  *(undefined8 *)(param_1 + 0x1e) = uVar1;
  uVar1 = *(undefined8 *)(param_2 + 0x22);
  *(undefined8 *)(param_1 + 0x20) = *(undefined8 *)(param_2 + 0x20);
  *(undefined8 *)(param_1 + 0x22) = uVar1;
  *(undefined8 *)(param_2 + 0x22) = 0xf;
  *(undefined1 *)(param_2 + 0x1c) = 0;
  *(undefined8 *)(param_2 + 0x20) = 0;
  *(undefined8 *)(param_1 + 0x24) = 0;
  *(undefined8 *)(param_1 + 0x26) = 0;
  *(undefined8 *)(param_1 + 0x28) = 0;
  *(undefined8 *)(param_1 + 0x2a) = 0;
  uVar1 = *(undefined8 *)(param_2 + 0x26);
  *(undefined8 *)(param_1 + 0x24) = *(undefined8 *)(param_2 + 0x24);
  *(undefined8 *)(param_1 + 0x26) = uVar1;
  uVar1 = *(undefined8 *)(param_2 + 0x2a);
  *(undefined8 *)(param_1 + 0x28) = *(undefined8 *)(param_2 + 0x28);
  *(undefined8 *)(param_1 + 0x2a) = uVar1;
  *(undefined1 *)(param_2 + 0x24) = 0;
  *(undefined8 *)(param_2 + 0x28) = 0;
  *(undefined8 *)(param_2 + 0x2a) = 0xf;
  return param_1;
}


/* Address: 0x180006e90; Evidence: ev_ca017c8ffe6e3876dbe52f6b40fff5bb1e4fb687566c8652ba4c363c11152652 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Type propagation algorithm not settling */

ulonglong FUN_180006e90(float *param_1)

{
  longlong lVar1;
  int *piVar2;
  int iVar3;
  BOOL BVar4;
  int cbMultiByte;
  HANDLE hObject;
  undefined4 extraout_var;
  LPSTR ******pppppppCVar5;
  longlong *plVar6;
  undefined4 extraout_var_00;
  ulonglong uVar7;
  LPCWSTR lpWideCharStr;
  undefined1 auStackY_328 [32];
  int local_2e8;
  undefined4 local_2e4;
  undefined8 local_2e0 [2];
  undefined8 local_2d0;
  CHAR CStack_2c1;
  LPSTR ******local_2c0;
  undefined8 uStack_2b8;
  ulonglong local_2b0;
  ulonglong uStack_2a8;
  int local_2a0;
  undefined4 uStack_29c;
  LPSTR ******local_298;
  undefined8 uStack_290;
  ulonglong local_288;
  ulonglong uStack_280;
  undefined4 local_278;
  int local_270;
  undefined4 local_258;
  WCHAR local_24c [266];
  ulonglong local_38;
  
  local_38 = DAT_180028040 ^ (ulonglong)auStackY_328;
  hObject = (HANDLE)CreateToolhelp32Snapshot(2,0);
  if (hObject != (HANDLE)0xffffffffffffffff) {
    local_278 = 0x238;
    iVar3 = Process32FirstW(hObject);
    if (iVar3 != 0) {
      do {
        iVar3 = local_270;
        if (local_270 != 0) {
          local_2e8 = local_270;
          local_2e4 = local_258;
          lpWideCharStr = local_24c;
          cbMultiByte = WideCharToMultiByte(0xfde9,0,lpWideCharStr,-1,(LPSTR)0x0,0,(LPCSTR)0x0,
                                            (LPBOOL)0x0);
          uStack_2b8 = 0;
          local_2b0 = 0;
          uStack_2a8 = 0xf;
          local_2c0 = (LPSTR ******)0x0;
          if (1 < cbMultiByte) {
            uVar7 = (longlong)cbMultiByte - 1;
            if (uVar7 == 0) {
                    /* WARNING: Ignoring partial resolution of indirect */
              local_2c0._0_1_ = 0;
              local_2b0 = uVar7;
            }
            else if (uVar7 < 0x10) {
              local_2b0 = uVar7;
              FUN_1800188a0((undefined1 (*) [32])&local_2c0,0,uVar7);
              (&CStack_2c1)[cbMultiByte] = '\0';
            }
            else {
              FUN_1800066d0((undefined8 *)&local_2c0,uVar7,lpWideCharStr,uVar7);
            }
            pppppppCVar5 = (LPSTR ******)&local_2c0;
            if (0xf < uStack_2a8) {
              pppppppCVar5 = local_2c0;
            }
            WideCharToMultiByte(0xfde9,0,local_24c,-1,(LPSTR)pppppppCVar5,cbMultiByte,(LPCSTR)0x0,
                                (LPBOOL)0x0);
          }
          _local_2a0 = CONCAT44(local_2e4,iVar3);
          local_298 = local_2c0;
          uStack_290 = uStack_2b8;
          local_288 = local_2b0;
          uStack_280 = uStack_2a8;
          local_2b0 = 0;
          uStack_2a8 = 0xf;
          local_2c0 = (LPSTR ******)((ulonglong)local_2c0 & 0xffffffffffffff00);
          FUN_180007dc0(param_1,local_2e0,(byte *)&local_2e8,&local_2a0);
          plVar6 = FUN_1800083c0(param_1 + 0x10,&local_2d0,(byte *)&local_2e4);
          lVar1 = *plVar6;
          piVar2 = *(int **)(lVar1 + 0x20);
          if (piVar2 == *(int **)(lVar1 + 0x28)) {
            FUN_180006470((longlong *)(lVar1 + 0x18),(undefined8 *)piVar2,&local_2e8);
          }
          else {
            *piVar2 = local_2e8;
            *(longlong *)(lVar1 + 0x20) = *(longlong *)(lVar1 + 0x20) + 4;
          }
          if (0xf < uStack_280) {
            pppppppCVar5 = local_298;
            if ((0xfff < uStack_280 + 1) &&
               (pppppppCVar5 = (LPSTR ******)local_298[-1],
               (LPSTR)0x1f < (LPSTR)((longlong)local_298 + (-8 - (longlong)pppppppCVar5)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            thunk_FUN_1800116e0(pppppppCVar5);
          }
          if (0xf < uStack_2a8) {
            pppppppCVar5 = local_2c0;
            if ((0xfff < uStack_2a8 + 1) &&
               (pppppppCVar5 = (LPSTR ******)local_2c0[-1],
               0x1f < (ulonglong)((longlong)local_2c0 + (-8 - (longlong)pppppppCVar5)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            thunk_FUN_1800116e0(pppppppCVar5);
          }
        }
        iVar3 = Process32NextW(hObject);
        if (iVar3 == 0) {
          BVar4 = CloseHandle(hObject);
          return CONCAT71((int7)(CONCAT44(extraout_var_00,BVar4) >> 8),1);
        }
      } while( true );
    }
    BVar4 = CloseHandle(hObject);
    hObject = (HANDLE)CONCAT44(extraout_var,BVar4);
  }
  return (ulonglong)hObject & 0xffffffffffffff00;
}


/* Address: 0x180007160; Evidence: ev_2f3b784b2e16b86c549234924b51bf93bf6d39a6c36d20a056367d8c8df3b78c */

void FUN_180007160(longlong param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < *(ulonglong *)(param_1 + 0x20)) {
    pvVar1 = *(LPVOID *)(param_1 + 8);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)(param_1 + 0x20) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)(param_1 + 0x18) = 0;
  *(undefined8 *)(param_1 + 0x20) = 0xf;
  *(undefined1 *)(param_1 + 8) = 0;
  return;
}


/* Address: 0x1800071e0; Evidence: ev_a87cefaabf9aeb0d698d44a121141eed187c7d66546f67646c590d84b5e821a7 */

void FUN_1800071e0(longlong param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  pvVar1 = *(LPVOID *)(param_1 + 0x18);
  pvVar2 = pvVar1;
  if (pvVar1 != (LPVOID)0x0) {
    if ((0xfff < (*(longlong *)(param_1 + 0x28) - (longlong)pvVar1 & 0xfffffffffffffff8U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
    *(undefined8 *)(param_1 + 0x18) = 0;
    *(undefined8 *)(param_1 + 0x20) = 0;
    *(undefined8 *)(param_1 + 0x28) = 0;
  }
  FUN_180008d40(pvVar2,*(undefined8 **)(param_1 + 8));
  thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  return;
}


/* Address: 0x180007270; Evidence: ev_09c628a81b654366005c0ff9c6af4fa2e8f944efebac15691a5410a86aa67ff3 */

void FUN_180007270(longlong param_1)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  pvVar1 = *(LPVOID *)(param_1 + 0x18);
  pvVar2 = pvVar1;
  if (pvVar1 != (LPVOID)0x0) {
    if ((0xfff < (*(longlong *)(param_1 + 0x28) - (longlong)pvVar1 & 0xfffffffffffffff8U)) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
    *(undefined8 *)(param_1 + 0x18) = 0;
    *(undefined8 *)(param_1 + 0x20) = 0;
    *(undefined8 *)(param_1 + 0x28) = 0;
  }
  FUN_180008c90(pvVar2,*(undefined8 **)(param_1 + 8));
  thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  return;
}


/* Address: 0x180007300; Evidence: ev_72ec2cc4747066f61ee825ef9da2ccb4dbce58732df29dec1e4c211f9b3a2872 */

void FUN_180007300(longlong param_1)

{
  FUN_180007270(param_1 + 0x40);
  FUN_1800071e0(param_1);
  return;
}


/* Address: 0x180007320; Evidence: ev_bef06da9aed25afedf795073043748625b3030b336cc72602bf23f7f3c3d2b6a */

undefined4 * FUN_180007320(undefined4 *param_1)

{
  void *pvVar1;
  
  *param_1 = 0;
  *(undefined8 *)(param_1 + 2) = 0;
  *(undefined8 *)(param_1 + 4) = 0;
  pvVar1 = operator_new(0x40);
  *(void **)pvVar1 = pvVar1;
  *(void **)((longlong)pvVar1 + 8) = pvVar1;
  *(void **)(param_1 + 2) = pvVar1;
  *(ulonglong *)(param_1 + 6) = 0;
  *(undefined8 *)(param_1 + 8) = 0;
  *(undefined8 *)(param_1 + 10) = 0;
  *(undefined8 *)(param_1 + 0xc) = 7;
  *(undefined8 *)(param_1 + 0xe) = 8;
  *param_1 = 0x3f800000;
  FUN_180008eb0((ulonglong *)(param_1 + 6),0x10,*(undefined8 *)(param_1 + 2));
  param_1[0x10] = 0;
  *(undefined8 *)(param_1 + 0x12) = 0;
  *(undefined8 *)(param_1 + 0x14) = 0;
  pvVar1 = operator_new(0x30);
  *(void **)pvVar1 = pvVar1;
  *(void **)((longlong)pvVar1 + 8) = pvVar1;
  *(void **)(param_1 + 0x12) = pvVar1;
  *(ulonglong *)(param_1 + 0x16) = 0;
  *(undefined8 *)(param_1 + 0x18) = 0;
  *(undefined8 *)(param_1 + 0x1a) = 0;
  *(undefined8 *)(param_1 + 0x1c) = 7;
  *(undefined8 *)(param_1 + 0x1e) = 8;
  param_1[0x10] = 0x3f800000;
  FUN_180006890((ulonglong *)(param_1 + 0x16),0x10,*(undefined8 *)(param_1 + 0x12));
  return param_1;
}


/* Address: 0x180007400; Evidence: ev_ea591b8c072c09271e8bffbbcdfbca0454168e25f26891408af3ac21892ebecf */

void FUN_180007400(void)

{
  ulonglong uVar1;
  longlong *local_res8 [4];
  float local_88 [16];
  undefined1 local_48 [72];
  
  FUN_180007320(local_88);
  uVar1 = FUN_180006e90(local_88);
  if ((char)uVar1 == '\0') {
    if (DAT_180029df0 != 0) {
      if (DAT_180029df0 < DAT_180029e18 >> 3) {
        FUN_180008aa0(0x180029de0,(undefined8 *)*DAT_180029de8,DAT_180029de8);
      }
      else {
        FUN_180008d40(DAT_180029df0,DAT_180029de8);
        *DAT_180029de8 = (longlong)DAT_180029de8;
        DAT_180029de8[1] = (longlong)DAT_180029de8;
        DAT_180029df0 = 0;
        local_res8[0] = DAT_180029de8;
        FUN_1800086a0(DAT_180029df8,DAT_180029e00,local_res8);
      }
    }
    if (DAT_180029e30 != 0) {
      if (DAT_180029e30 < DAT_180029e58 >> 3) {
        FUN_1800087d0(0x180029e20,(longlong *)*DAT_180029e28,DAT_180029e28);
      }
      else {
        FUN_180008c90(DAT_180029e30,DAT_180029e28);
        *DAT_180029e28 = (longlong)DAT_180029e28;
        DAT_180029e28[1] = (longlong)DAT_180029e28;
        DAT_180029e30 = 0;
        local_res8[0] = DAT_180029e28;
        FUN_180008330(DAT_180029e38,DAT_180029e40,local_res8);
      }
    }
    DAT_180029dd0 = 0;
  }
  else {
    FUN_180007570((undefined4 *)&DAT_180029de0,local_88);
    DAT_180029dd0 = 1;
  }
  FUN_180007270((longlong)local_48);
  FUN_1800071e0((longlong)local_88);
  return;
}


/* Address: 0x180007570; Evidence: ev_8ceed0cae3804596e6ef9533eb82d420ba82cb3f5d1f5557ba924bc1bf26b85a */

undefined4 * FUN_180007570(undefined4 *param_1,undefined4 *param_2)

{
  undefined4 *puVar1;
  ulonglong uVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  longlong *plVar5;
  undefined8 local_res8;
  
  if (param_1 != param_2) {
    uVar2 = *(ulonglong *)(param_1 + 4);
    if (uVar2 != 0) {
      puVar3 = *(undefined8 **)(param_1 + 2);
      if (uVar2 < *(ulonglong *)(param_1 + 0xe) >> 3) {
        FUN_180008aa0((longlong)param_1,(undefined8 *)*puVar3,puVar3);
      }
      else {
        FUN_180008d40(uVar2,puVar3);
        *(undefined8 *)*(undefined8 *)(param_1 + 2) = *(undefined8 *)(param_1 + 2);
        *(longlong *)(*(longlong *)(param_1 + 2) + 8) = *(longlong *)(param_1 + 2);
        *(undefined8 *)(param_1 + 4) = 0;
        local_res8 = *(undefined8 *)(param_1 + 2);
        FUN_1800086a0(*(undefined8 **)(param_1 + 6),*(undefined8 **)(param_1 + 8),&local_res8);
      }
    }
    *param_1 = *param_2;
    uVar4 = *(undefined8 *)(param_1 + 2);
    *(undefined8 *)(param_1 + 2) = *(undefined8 *)(param_2 + 2);
    *(undefined8 *)(param_2 + 2) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 4);
    *(undefined8 *)(param_1 + 4) = *(undefined8 *)(param_2 + 4);
    *(undefined8 *)(param_2 + 4) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 6);
    *(undefined8 *)(param_1 + 6) = *(undefined8 *)(param_2 + 6);
    *(undefined8 *)(param_2 + 6) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 8);
    *(undefined8 *)(param_1 + 8) = *(undefined8 *)(param_2 + 8);
    *(undefined8 *)(param_2 + 8) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 10);
    *(undefined8 *)(param_1 + 10) = *(undefined8 *)(param_2 + 10);
    *(undefined8 *)(param_2 + 10) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0xc);
    *(undefined8 *)(param_1 + 0xc) = *(undefined8 *)(param_2 + 0xc);
    *(undefined8 *)(param_2 + 0xc) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0xe);
    *(undefined8 *)(param_1 + 0xe) = *(undefined8 *)(param_2 + 0xe);
    *(undefined8 *)(param_2 + 0xe) = uVar4;
  }
  puVar1 = param_1 + 0x10;
  if (puVar1 != param_2 + 0x10) {
    uVar2 = *(ulonglong *)(param_1 + 0x14);
    if (uVar2 != 0) {
      plVar5 = *(longlong **)(param_1 + 0x12);
      if (uVar2 < *(ulonglong *)(param_1 + 0x1e) >> 3) {
        FUN_1800087d0((longlong)puVar1,(longlong *)*plVar5,plVar5);
      }
      else {
        FUN_180008c90(uVar2,plVar5);
        *(undefined8 *)*(undefined8 *)(param_1 + 0x12) = *(undefined8 *)(param_1 + 0x12);
        *(longlong *)(*(longlong *)(param_1 + 0x12) + 8) = *(longlong *)(param_1 + 0x12);
        *(undefined8 *)(param_1 + 0x14) = 0;
        local_res8 = *(undefined8 *)(param_1 + 0x12);
        FUN_180008330(*(undefined8 **)(param_1 + 0x16),*(undefined8 **)(param_1 + 0x18),&local_res8)
        ;
      }
    }
    *puVar1 = param_2[0x10];
    uVar4 = *(undefined8 *)(param_1 + 0x12);
    *(undefined8 *)(param_1 + 0x12) = *(undefined8 *)(param_2 + 0x12);
    *(undefined8 *)(param_2 + 0x12) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x14);
    *(undefined8 *)(param_1 + 0x14) = *(undefined8 *)(param_2 + 0x14);
    *(undefined8 *)(param_2 + 0x14) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x16);
    *(undefined8 *)(param_1 + 0x16) = *(undefined8 *)(param_2 + 0x16);
    *(undefined8 *)(param_2 + 0x16) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x18);
    *(undefined8 *)(param_1 + 0x18) = *(undefined8 *)(param_2 + 0x18);
    *(undefined8 *)(param_2 + 0x18) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x1a);
    *(undefined8 *)(param_1 + 0x1a) = *(undefined8 *)(param_2 + 0x1a);
    *(undefined8 *)(param_2 + 0x1a) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x1c);
    *(undefined8 *)(param_1 + 0x1c) = *(undefined8 *)(param_2 + 0x1c);
    *(undefined8 *)(param_2 + 0x1c) = uVar4;
    uVar4 = *(undefined8 *)(param_1 + 0x1e);
    *(undefined8 *)(param_1 + 0x1e) = *(undefined8 *)(param_2 + 0x1e);
    *(undefined8 *)(param_2 + 0x1e) = uVar4;
  }
  return param_1;
}


/* Address: 0x180007760; Evidence: ev_710e75372737e4f207ba9d38c7349d0c5edd23f806a9980ffc9abaadb47f54d2 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

longlong * FUN_180007760(longlong *param_1,undefined8 *param_2,undefined1 param_3)

{
  uint uVar1;
  uint uVar2;
  int iVar3;
  undefined8 *puVar4;
  int *piVar5;
  longlong lVar6;
  int *piVar7;
  longlong *plVar8;
  longlong lVar9;
  longlong lVar10;
  ulonglong uVar11;
  int *piVar12;
  ulonglong uVar13;
  int *piVar14;
  int local_res18 [2];
  undefined4 local_res20;
  int *local_c8;
  int *piStack_c0;
  int *local_b8;
  int *local_b0;
  int *local_a8;
  undefined8 local_a0;
  char local_98;
  undefined8 local_90;
  char local_88;
  float local_78 [16];
  
  local_res18[0] = CONCAT31(local_res18[0]._1_3_,param_3);
  local_res20 = 1;
  FUN_180007400();
  *param_1 = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  local_res20 = 1;
  puVar4 = operator_new(0x200);
  FUN_180018c60(puVar4,(undefined8 *)*param_1,param_1[1] - *param_1);
  FUN_180006ca0(param_1,(longlong)puVar4,0,0x80);
  if (DAT_180029dd0 != '\0') {
    FUN_180005400(local_78);
    piVar12 = (int *)*param_2;
    piVar14 = (int *)param_2[1];
    local_b0 = piVar12;
    local_a8 = piVar14;
    if (piVar12 != piVar14) {
      do {
        local_res18[0] = *piVar12;
        if ((local_res18[0] != 0) &&
           (local_b0 = piVar12, FUN_180005b40(local_78,&local_a0,(byte *)local_res18),
           iVar3 = local_res18[0], local_98 != '\0')) {
          piVar5 = (int *)param_1[1];
          if (piVar5 == (int *)param_1[2]) {
            FUN_180006470(param_1,(undefined8 *)piVar5,local_res18);
          }
          else {
            *piVar5 = local_res18[0];
            param_1[1] = param_1[1] + 4;
          }
          uVar13 = 1;
          local_c8 = (int *)0x0;
          piStack_c0 = (int *)0x0;
          local_b8 = (int *)0x0;
          piVar5 = operator_new(0x200);
          FUN_180018c60((undefined8 *)piVar5,(undefined8 *)local_c8,
                        (longlong)piStack_c0 - (longlong)local_c8);
          if (local_c8 != (int *)0x0) {
            piVar7 = local_c8;
            if ((0xfff < ((longlong)local_b8 - (longlong)local_c8 & 0xfffffffffffffffcU)) &&
               (piVar7 = *(int **)(local_c8 + -2),
               0x1f < (ulonglong)((longlong)local_c8 + (-8 - (longlong)piVar7)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            thunk_FUN_1800116e0(piVar7);
          }
          local_b8 = piVar5 + 0x80;
          local_c8 = piVar5;
          if (piVar5 == local_b8) {
            piStack_c0 = piVar5;
            FUN_180006470((longlong *)&local_c8,(undefined8 *)piVar5,local_res18);
          }
          else {
            *piVar5 = iVar3;
            piStack_c0 = piVar5 + 1;
          }
          uVar11 = 0;
          piVar5 = local_c8;
          lVar10 = DAT_180029e28;
          if ((longlong)piStack_c0 - (longlong)local_c8 >> 2 != 0) {
            do {
              piVar12 = local_b0;
              piVar14 = local_a8;
              if (0xfff < uVar13) break;
              uVar2 = piVar5[uVar11];
              uVar11 = uVar11 + 1;
              plVar8 = (longlong *)
                       (((((ulonglong)(uVar2 >> 0x10 & 0xff) ^
                          (((ulonglong)uVar2 & 0xff ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                          (ulonglong)(uVar2 >> 8) & 0xff) * 0x100000001b3) * 0x100000001b3 ^
                         (ulonglong)(uVar2 >> 0x18)) * 0x100000001b3 & _DAT_180029e50) * 0x10 +
                       DAT_180029e38);
              lVar6 = plVar8[1];
              if (lVar6 == lVar10) {
LAB_1800079d1:
                lVar6 = 0;
              }
              else {
                uVar1 = *(uint *)(lVar6 + 0x10);
                while (uVar2 != uVar1) {
                  if (lVar6 == *plVar8) goto LAB_1800079d1;
                  lVar6 = *(longlong *)(lVar6 + 8);
                  uVar1 = *(uint *)(lVar6 + 0x10);
                }
              }
              lVar9 = lVar10;
              if (lVar6 != 0) {
                lVar9 = lVar6;
              }
              if (lVar9 != lVar10) {
                piVar14 = *(int **)(lVar9 + 0x20);
                for (piVar12 = *(int **)(lVar9 + 0x18); piVar12 != piVar14; piVar12 = piVar12 + 1) {
                  local_res18[0] = *piVar12;
                  if ((local_res18[0] != 0) &&
                     (FUN_180005b40(local_78,&local_90,(byte *)local_res18), iVar3 = local_res18[0],
                     local_88 != '\0')) {
                    piVar5 = (int *)param_1[1];
                    if (piVar5 == (int *)param_1[2]) {
                      FUN_180006470(param_1,(undefined8 *)piVar5,local_res18);
                    }
                    else {
                      *piVar5 = local_res18[0];
                      param_1[1] = param_1[1] + 4;
                    }
                    if (piStack_c0 == local_b8) {
                      FUN_180006470((longlong *)&local_c8,(undefined8 *)piStack_c0,local_res18);
                    }
                    else {
                      *piStack_c0 = iVar3;
                      piStack_c0 = piStack_c0 + 1;
                    }
                    uVar13 = uVar13 + 1;
                    piVar5 = local_c8;
                    lVar10 = DAT_180029e28;
                    if (0xfff < uVar13) break;
                  }
                  piVar5 = local_c8;
                  lVar10 = DAT_180029e28;
                }
              }
              piVar12 = local_b0;
              piVar14 = local_a8;
            } while (uVar11 < (ulonglong)((longlong)piStack_c0 - (longlong)piVar5 >> 2));
          }
          if (piVar5 != (int *)0x0) {
            piVar7 = piVar5;
            if ((0xfff < ((longlong)local_b8 - (longlong)piVar5 & 0xfffffffffffffffcU)) &&
               (piVar7 = *(int **)(piVar5 + -2),
               0x1f < (ulonglong)((longlong)piVar5 + (-8 - (longlong)piVar7)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            thunk_FUN_1800116e0(piVar7);
          }
        }
        piVar12 = piVar12 + 1;
        local_b0 = piVar12;
      } while (piVar12 != piVar14);
    }
    FUN_180004640((longlong)local_78);
  }
  return param_1;
}


/* Address: 0x180007b40; Evidence: ev_b30902d3d5cb7994103507811391c8dbea3155f8c984ea677278db302a9bf4b8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180007b40(uint param_1,uint *param_2)

{
  uint *puVar1;
  uint uVar2;
  BOOL BVar3;
  int iVar4;
  uint *puVar5;
  HANDLE hProcess;
  undefined4 extraout_var;
  undefined8 uVar6;
  longlong *plVar7;
  longlong lVar8;
  longlong lVar9;
  undefined1 auStackY_d8 [32];
  byte bStack_a7;
  byte bStack_a6;
  byte bStack_a5;
  _FILETIME local_a0;
  _FILETIME local_98;
  _FILETIME local_90;
  _FILETIME local_88 [2];
  undefined8 local_78;
  undefined8 uStack_70;
  ulonglong local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 uStack_50;
  undefined8 local_48;
  undefined8 uStack_40;
  undefined8 local_38;
  undefined8 uStack_30;
  ulonglong local_28;
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_d8;
  if (DAT_180029dd0 == '\0') {
    FUN_180007400();
  }
  puVar1 = param_2 + 2;
  *param_2 = param_1;
  param_2[1] = 0;
  FUN_1800060c0((longlong *)puVar1,(undefined8 *)"<unknown>",9);
  puVar5 = param_2 + 0x14;
  param_2[0x10] = 0;
  param_2[0x11] = 0;
  param_2[0x12] = 0;
  param_2[0x13] = 0;
  param_2[0x18] = 0;
  param_2[0x19] = 0;
  if (0xf < *(ulonglong *)(param_2 + 0x1a)) {
    puVar5 = *(uint **)puVar5;
  }
  *(undefined1 *)puVar5 = 0;
  puVar5 = param_2 + 0x1c;
  param_2[0x20] = 0;
  param_2[0x21] = 0;
  if (0xf < *(ulonglong *)(param_2 + 0x22)) {
    puVar5 = *(uint **)puVar5;
  }
  *(undefined1 *)puVar5 = 0;
  puVar5 = param_2 + 0x24;
  param_2[0x28] = 0;
  param_2[0x29] = 0;
  if (0xf < *(ulonglong *)(param_2 + 0x2a)) {
    puVar5 = *(uint **)puVar5;
  }
  *(undefined1 *)puVar5 = 0;
  if (*(longlong **)(param_2 + 10) != *(longlong **)(param_2 + 0xc)) {
    FUN_180006630(*(longlong **)(param_2 + 10),*(longlong **)(param_2 + 0xc));
    *(undefined8 *)(param_2 + 0xc) = *(undefined8 *)(param_2 + 10);
  }
  bStack_a7 = (byte)(param_1 >> 8);
  bStack_a6 = (byte)(param_1 >> 0x10);
  bStack_a5 = (byte)(param_1 >> 0x18);
  plVar7 = (longlong *)
           (((((((ulonglong)(param_1 & 0xff) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
               (ulonglong)bStack_a7) * 0x100000001b3 ^ (ulonglong)bStack_a6) * 0x100000001b3 ^
             (ulonglong)bStack_a5) * 0x100000001b3 & _DAT_180029e10) * 0x10 + DAT_180029df8);
  lVar8 = plVar7[1];
  lVar9 = 0;
  if (lVar8 != DAT_180029de8) {
    uVar2 = *(uint *)(lVar8 + 0x10);
    while ((lVar9 = lVar8, param_1 != uVar2 && (lVar9 = 0, lVar8 != *plVar7))) {
      lVar8 = *(longlong *)(lVar8 + 8);
      uVar2 = *(uint *)(lVar8 + 0x10);
    }
  }
  lVar8 = DAT_180029de8;
  if (lVar9 != 0) {
    lVar8 = lVar9;
  }
  if (lVar8 != DAT_180029de8) {
    param_2[1] = *(uint *)(lVar8 + 0x1c);
    if ((*(ulonglong *)(lVar8 + 0x30) != 0) && (puVar5 = (uint *)(lVar8 + 0x20), puVar1 != puVar5))
    {
      if (0xf < *(ulonglong *)(lVar8 + 0x38)) {
        puVar5 = *(uint **)puVar5;
      }
      FUN_1800060c0((longlong *)puVar1,(undefined8 *)puVar5,*(ulonglong *)(lVar8 + 0x30));
    }
  }
  hProcess = OpenProcess(0x1000,0,param_1);
  uVar6 = 0;
  if (hProcess != (HANDLE)0x0) {
    BVar3 = GetProcessTimes(hProcess,local_88,&local_90,&local_a0,&local_98);
    if (BVar3 != 0) {
      *(ulonglong *)(param_2 + 0x10) = (ulonglong)((longlong)local_a0 + (longlong)local_98) / 10000;
    }
    uStack_70 = 0;
    local_78 = 0x50;
    local_68 = 0;
    uStack_60 = 0;
    local_58 = 0;
    uStack_50 = 0;
    local_48 = 0;
    uStack_40 = 0;
    local_38 = 0;
    uStack_30 = 0;
    iVar4 = K32GetProcessMemoryInfo(hProcess,&local_78,0x50);
    if (iVar4 != 0) {
      *(ulonglong *)(param_2 + 0x12) = local_68 >> 0x14;
    }
    BVar3 = CloseHandle(hProcess);
    uVar6 = CONCAT71((int7)(CONCAT44(extraout_var,BVar3) >> 8),1);
  }
  return uVar6;
}


/* Address: 0x180007dc0; Evidence: ev_5a931b253883399872031d39b44e6a83bf37ffae6137fbaf0f0e820d1645de3c */

/* WARNING: Removing unreachable block (ram,0x00018000803f) */
/* WARNING: Removing unreachable block (ram,0x000180008049) */
/* WARNING: Removing unreachable block (ram,0x000180008059) */
/* WARNING: Removing unreachable block (ram,0x0001800080cd) */
/* WARNING: Removing unreachable block (ram,0x00018000806e) */
/* WARNING: Removing unreachable block (ram,0x000180008071) */
/* WARNING: Removing unreachable block (ram,0x000180008079) */
/* WARNING: Removing unreachable block (ram,0x000180008093) */

undefined8 * FUN_180007dc0(float *param_1,undefined8 *param_2,byte *param_3,undefined4 *param_4)

{
  int iVar1;
  longlong *plVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  longlong lVar5;
  ulonglong uVar6;
  longlong *plVar7;
  ulonglong uVar8;
  float fVar9;
  ulonglong uVar10;
  undefined8 local_38;
  undefined8 *local_30;
  
  uVar8 = (((((ulonglong)*param_3 ^ 0xcbf29ce484222325) * 0x100000001b3 ^ (ulonglong)param_3[1]) *
            0x100000001b3 ^ (ulonglong)param_3[2]) * 0x100000001b3 ^ (ulonglong)param_3[3]) *
          0x100000001b3;
  plVar2 = *(longlong **)
            (*(longlong *)(param_1 + 6) + 8 + (uVar8 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
  plVar7 = *(longlong **)(param_1 + 2);
  if (plVar2 != *(longlong **)(param_1 + 2)) {
    iVar1 = (int)plVar2[2];
    while (*(int *)param_3 != iVar1) {
      plVar7 = plVar2;
      if (plVar2 == *(longlong **)
                     (*(longlong *)(param_1 + 6) + (uVar8 & *(ulonglong *)(param_1 + 0xc)) * 0x10))
      goto LAB_180007e76;
      plVar2 = (longlong *)plVar2[1];
      iVar1 = (int)plVar2[2];
    }
    plVar7 = (longlong *)*plVar2;
    if (plVar2 != (longlong *)0x0) {
      *param_2 = plVar2;
      *(undefined1 *)(param_2 + 1) = 0;
      return param_2;
    }
  }
LAB_180007e76:
  if (*(longlong *)(param_1 + 4) == 0x3ffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_18000a790(0x180022f20);
  }
  FUN_1800081c0(&local_38,param_1 + 2,(undefined4 *)param_3,param_4);
  uVar3 = *(ulonglong *)(param_1 + 0xe);
  if (*param_1 < (float)(*(longlong *)(param_1 + 4) + 1) / (float)uVar3) {
    uVar10 = FUN_180018710();
    lVar5 = 0;
    fVar9 = (float)uVar10;
    if ((9.223372e+18 <= fVar9) && (fVar9 = fVar9 - 9.223372e+18, fVar9 < 9.223372e+18)) {
      lVar5 = -0x8000000000000000;
    }
    uVar10 = 8;
    if (8 < (ulonglong)((longlong)fVar9 + lVar5)) {
      uVar10 = (longlong)fVar9 + lVar5;
    }
    uVar6 = uVar3;
    if ((uVar3 < uVar10) && ((0x1ff < uVar3 || (uVar6 = uVar3 * 8, uVar3 * 8 < uVar10)))) {
      uVar6 = uVar10;
    }
    FUN_180009010((longlong)param_1,uVar6);
    plVar2 = *(longlong **)
              (*(longlong *)(param_1 + 6) + 8 + (uVar8 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
    plVar7 = *(longlong **)(param_1 + 2);
    if (plVar2 != plVar7) {
      iVar1 = (int)plVar2[2];
      plVar7 = plVar2;
      while (*(int *)(local_30 + 2) != iVar1) {
        if (plVar7 == *(longlong **)
                       (*(longlong *)(param_1 + 6) + (uVar8 & *(ulonglong *)(param_1 + 0xc)) * 0x10)
           ) goto LAB_180007fdb;
        plVar7 = (longlong *)plVar7[1];
        iVar1 = (int)plVar7[2];
      }
      plVar7 = (longlong *)*plVar7;
    }
  }
LAB_180007fdb:
  puVar4 = (undefined8 *)plVar7[1];
  *(longlong *)(param_1 + 4) = *(longlong *)(param_1 + 4) + 1;
  *local_30 = plVar7;
  local_30[1] = puVar4;
  *puVar4 = local_30;
  plVar7[1] = (longlong)local_30;
  uVar8 = *(ulonglong *)(param_1 + 0xc) & uVar8;
  lVar5 = *(longlong *)(param_1 + 6);
  plVar2 = *(longlong **)(lVar5 + uVar8 * 0x10);
  if (plVar2 == *(longlong **)(param_1 + 2)) {
    *(undefined8 **)(lVar5 + uVar8 * 0x10) = local_30;
  }
  else {
    if (plVar2 == plVar7) {
      *(undefined8 **)(lVar5 + uVar8 * 0x10) = local_30;
      goto LAB_18000802d;
    }
    if (*(undefined8 **)(lVar5 + 8 + uVar8 * 0x10) != puVar4) goto LAB_18000802d;
  }
  *(undefined8 **)(lVar5 + 8 + uVar8 * 0x10) = local_30;
LAB_18000802d:
  *param_2 = local_30;
  *(undefined1 *)(param_2 + 1) = 1;
  return param_2;
}


/* Address: 0x1800080f0; Evidence: ev_18e7d70fdd1eadc3a46c513113d7c4a9cc08355755691d52e6f06fe4c08140b1 */

void FUN_1800080f0(undefined8 *param_1)

{
  FUN_180008c90(param_1,(undefined8 *)*param_1);
  thunk_FUN_1800116e0((LPVOID)*param_1);
  return;
}


/* Address: 0x180008120; Evidence: ev_bea85da50cf6a81243d03cb094217ae36676fe892c516bfa810c437e8b46cb2b */

void FUN_180008120(longlong *param_1)

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
    thunk_FUN_1800116e0(pvVar2);
    *param_1 = 0;
    param_1[1] = 0;
    param_1[2] = 0;
  }
  return;
}


/* Address: 0x180008190; Evidence: ev_96470a9decf81f40d9e42ccb83851bfad746194ad2c0b11abc9aad686b58ccb6 */

void FUN_180008190(undefined8 *param_1)

{
  FUN_180008d40(param_1,(undefined8 *)*param_1);
  thunk_FUN_1800116e0((LPVOID)*param_1);
  return;
}


/* Address: 0x1800081c0; Evidence: ev_af3ed20cf161da5991a731a196e0f711ce278f51b22eed9ab3ea1aa5efb985bd */

undefined8 *
FUN_1800081c0(undefined8 *param_1,undefined8 param_2,undefined4 *param_3,undefined4 *param_4)

{
  ulonglong uVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  void *pvVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  void *pvVar7;
  undefined8 *puVar8;
  undefined8 *puVar9;
  
  *param_1 = param_2;
  puVar8 = (undefined8 *)0x0;
  param_1[1] = 0;
  pvVar4 = operator_new(0x40);
  param_1[1] = pvVar4;
  *(undefined4 *)((longlong)pvVar4 + 0x10) = *param_3;
  *(undefined4 *)((longlong)pvVar4 + 0x18) = *param_4;
  *(undefined4 *)((longlong)pvVar4 + 0x1c) = param_4[1];
  puVar9 = (undefined8 *)(param_4 + 2);
  *(undefined8 *)((longlong)pvVar4 + 0x20) = 0;
  *(undefined8 *)((longlong)pvVar4 + 0x28) = 0;
  *(undefined8 *)((longlong)pvVar4 + 0x30) = 0;
  *(undefined8 *)((longlong)pvVar4 + 0x38) = 0;
  uVar2 = *(ulonglong *)(param_4 + 6);
  if (0xf < *(ulonglong *)(param_4 + 8)) {
    puVar9 = (undefined8 *)*puVar9;
  }
  if (0x7fffffffffffffff < uVar2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001270();
  }
  if (uVar2 < 0x10) {
    *(ulonglong *)((longlong)pvVar4 + 0x30) = uVar2;
    *(undefined8 *)((longlong)pvVar4 + 0x38) = 0xf;
    uVar3 = puVar9[1];
    *(undefined8 *)((longlong)pvVar4 + 0x20) = *puVar9;
    *(undefined8 *)((longlong)pvVar4 + 0x28) = uVar3;
    return param_1;
  }
  uVar5 = uVar2 | 0xf;
  if (uVar5 < 0x8000000000000000) {
    if (uVar5 < 0x16) {
      uVar5 = 0x16;
    }
    uVar1 = uVar5 + 1;
    if (uVar1 == 0) goto LAB_1800082cc;
    if (uVar1 < 0x1000) {
      puVar8 = operator_new(uVar1);
      goto LAB_1800082cc;
    }
    uVar6 = uVar5 + 0x28;
    if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
      FUN_180001250();
    }
  }
  else {
    uVar6 = 0x8000000000000027;
    uVar5 = 0x7fffffffffffffff;
  }
  pvVar7 = operator_new(uVar6);
  if (pvVar7 == (void *)0x0) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  puVar8 = (undefined8 *)((longlong)pvVar7 + 0x27U & 0xffffffffffffffe0);
  puVar8[-1] = pvVar7;
LAB_1800082cc:
  *(undefined8 **)((longlong)pvVar4 + 0x20) = puVar8;
  *(ulonglong *)((longlong)pvVar4 + 0x30) = uVar2;
  *(ulonglong *)((longlong)pvVar4 + 0x38) = uVar5;
  FUN_180018c60(puVar8,puVar9,uVar2 + 1);
  return param_1;
}


/* Address: 0x180008330; Evidence: ev_ea0a256db42a76d0ebe18eb178c9e84b2ced18f37f93b32880fe8899e8b7e4b1 */

void FUN_180008330(undefined8 *param_1,undefined8 *param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  
  uVar3 = (ulonglong)((longlong)param_2 + (7 - (longlong)param_1)) >> 3;
  if (param_2 < param_1) {
    uVar3 = 0;
  }
  if ((uVar3 != 0) && (1 < uVar3)) {
    uVar1 = *param_3;
    if ((param_3 < param_1) || (param_1 + (uVar3 - 1) < param_3)) {
      puVar4 = param_1;
      for (uVar2 = uVar3 & 0x1ffffffffffffffe; uVar2 != 0; uVar2 = uVar2 - 1) {
        *puVar4 = uVar1;
        puVar4 = puVar4 + 1;
      }
      param_1 = param_1 + (uVar3 & 0xfffffffffffffffe);
    }
  }
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    *param_1 = *param_3;
  }
  return;
}


/* Address: 0x1800083c0; Evidence: ev_865ba94f43059adf6b28f1328f7c7368df5d690accc7ff4a28b5080897505802 */

undefined8 * FUN_1800083c0(float *param_1,undefined8 *param_2,byte *param_3)

{
  int iVar1;
  longlong *plVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  ulonglong uVar6;
  longlong lVar7;
  ulonglong uVar8;
  longlong *plVar9;
  float fVar10;
  ulonglong uVar11;
  
  uVar6 = (((((ulonglong)*param_3 ^ 0xcbf29ce484222325) * 0x100000001b3 ^ (ulonglong)param_3[1]) *
            0x100000001b3 ^ (ulonglong)param_3[2]) * 0x100000001b3 ^ (ulonglong)param_3[3]) *
          0x100000001b3;
  plVar2 = *(longlong **)
            (*(longlong *)(param_1 + 6) + 8 + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10);
  plVar9 = *(longlong **)(param_1 + 2);
  if (plVar2 != plVar9) {
    iVar1 = (int)plVar2[2];
    while (*(int *)param_3 != iVar1) {
      plVar9 = plVar2;
      if (plVar2 == *(longlong **)
                     (*(longlong *)(param_1 + 6) + (uVar6 & *(ulonglong *)(param_1 + 0xc)) * 0x10))
      goto LAB_18000848a;
      plVar2 = (longlong *)plVar2[1];
      iVar1 = (int)plVar2[2];
    }
    plVar9 = (longlong *)*plVar2;
    if (plVar2 != (longlong *)0x0) {
      *param_2 = plVar2;
      *(undefined1 *)(param_2 + 1) = 0;
      return param_2;
    }
  }
LAB_18000848a:
  if (*(longlong *)(param_1 + 4) == 0x555555555555555) {
                    /* WARNING: Subroutine does not return */
    FUN_18000a790(0x180022f20);
  }
  puVar5 = operator_new(0x30);
  *(undefined4 *)(puVar5 + 2) = *(undefined4 *)param_3;
  puVar5[3] = 0;
  puVar5[4] = 0;
  puVar5[5] = 0;
  uVar3 = *(ulonglong *)(param_1 + 0xe);
  if (*param_1 < (float)(*(longlong *)(param_1 + 4) + 1) / (float)uVar3) {
    uVar11 = FUN_180018710();
    lVar7 = 0;
    fVar10 = (float)uVar11;
    if ((9.223372e+18 <= fVar10) && (fVar10 = fVar10 - 9.223372e+18, fVar10 < 9.223372e+18)) {
      lVar7 = -0x8000000000000000;
    }
    uVar11 = 8;
    if (8 < (ulonglong)((longlong)fVar10 + lVar7)) {
      uVar11 = (longlong)fVar10 + lVar7;
    }
    uVar8 = uVar3;
    if ((uVar3 < uVar11) && ((0x1ff < uVar3 || (uVar8 = uVar3 * 8, uVar3 * 8 < uVar11)))) {
      uVar8 = uVar11;
    }
    FUN_180009270((longlong)param_1,uVar8);
    plVar2 = *(longlong **)
              (*(longlong *)(param_1 + 6) + 8 + (*(ulonglong *)(param_1 + 0xc) & uVar6) * 0x10);
    plVar9 = *(longlong **)(param_1 + 2);
    if (plVar2 != plVar9) {
      iVar1 = (int)plVar2[2];
      plVar9 = plVar2;
      while (*(int *)(puVar5 + 2) != iVar1) {
        if (plVar9 == *(longlong **)
                       (*(longlong *)(param_1 + 6) + (*(ulonglong *)(param_1 + 0xc) & uVar6) * 0x10)
           ) goto LAB_180008615;
        plVar9 = (longlong *)plVar9[1];
        iVar1 = (int)plVar9[2];
      }
      plVar9 = (longlong *)*plVar9;
    }
  }
LAB_180008615:
  puVar4 = (undefined8 *)plVar9[1];
  *(longlong *)(param_1 + 4) = *(longlong *)(param_1 + 4) + 1;
  *puVar5 = plVar9;
  puVar5[1] = puVar4;
  *puVar4 = puVar5;
  plVar9[1] = (longlong)puVar5;
  uVar6 = *(ulonglong *)(param_1 + 0xc) & uVar6;
  lVar7 = *(longlong *)(param_1 + 6);
  plVar2 = *(longlong **)(lVar7 + uVar6 * 0x10);
  if (plVar2 == *(longlong **)(param_1 + 2)) {
    *(undefined8 **)(lVar7 + uVar6 * 0x10) = puVar5;
  }
  else {
    if (plVar2 == plVar9) {
      *(undefined8 **)(lVar7 + uVar6 * 0x10) = puVar5;
      goto LAB_18000865f;
    }
    if (*(undefined8 **)(lVar7 + 8 + uVar6 * 0x10) != puVar4) goto LAB_18000865f;
  }
  *(undefined8 **)(lVar7 + 8 + uVar6 * 0x10) = puVar5;
LAB_18000865f:
  *param_2 = puVar5;
  *(undefined1 *)(param_2 + 1) = 1;
  return param_2;
}


/* Address: 0x1800086a0; Evidence: ev_b011856fca1c5c1fca3bf704d3cc07fa1dfacbf5cf4c769dc9e754fec20fa92f */

void FUN_1800086a0(undefined8 *param_1,undefined8 *param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  undefined8 *puVar4;
  
  uVar3 = (ulonglong)((longlong)param_2 + (7 - (longlong)param_1)) >> 3;
  if (param_2 < param_1) {
    uVar3 = 0;
  }
  if ((uVar3 != 0) && (1 < uVar3)) {
    uVar1 = *param_3;
    if ((param_3 < param_1) || (param_1 + (uVar3 - 1) < param_3)) {
      puVar4 = param_1;
      for (uVar2 = uVar3 & 0x1ffffffffffffffe; uVar2 != 0; uVar2 = uVar2 - 1) {
        *puVar4 = uVar1;
        puVar4 = puVar4 + 1;
      }
      param_1 = param_1 + (uVar3 & 0xfffffffffffffffe);
    }
  }
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    *param_1 = *param_3;
  }
  return;
}


/* Address: 0x180008730; Evidence: ev_3a5ec9dfd248d61ce4b2c375171cdfe3d9b9f31a9533414a5b00c3b957a9044f */

void FUN_180008730(longlong param_1)

{
  longlong lVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  
  lVar1 = *(longlong *)(param_1 + 8);
  if (lVar1 != 0) {
    if (0xf < *(ulonglong *)(lVar1 + 0x38)) {
      pvVar2 = *(LPVOID *)(lVar1 + 0x20);
      pvVar3 = pvVar2;
      if ((0xfff < *(ulonglong *)(lVar1 + 0x38) + 1) &&
         (pvVar3 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar3)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar3);
    }
    *(undefined8 *)(lVar1 + 0x30) = 0;
    *(undefined8 *)(lVar1 + 0x38) = 0xf;
    *(undefined1 *)(lVar1 + 0x20) = 0;
  }
  if (*(LPVOID *)(param_1 + 8) != (LPVOID)0x0) {
    thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  }
  return;
}


/* Address: 0x1800087d0; Evidence: ev_1a7064205ba13e588768edb5755fa4cb8646921322ac99cf27cad82042c6287a */

longlong * FUN_1800087d0(longlong param_1,longlong *param_2,longlong *param_3)

{
  longlong lVar1;
  undefined8 *puVar2;
  undefined8 *puVar3;
  longlong *plVar4;
  LPVOID pvVar5;
  undefined8 *puVar6;
  LPVOID pvVar7;
  longlong *plVar8;
  longlong *plVar9;
  longlong *plVar10;
  longlong *plVar11;
  
  if (param_2 == param_3) {
    return param_3;
  }
  lVar1 = *(longlong *)(param_1 + 0x18);
  puVar2 = *(undefined8 **)(param_1 + 8);
  puVar3 = (undefined8 *)param_2[1];
  plVar10 = (longlong *)
            (((((((ulonglong)*(byte *)(param_2 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                (ulonglong)*(byte *)((longlong)param_2 + 0x11)) * 0x100000001b3 ^
               (ulonglong)*(byte *)((longlong)param_2 + 0x12)) * 0x100000001b3 ^
              (ulonglong)*(byte *)((longlong)param_2 + 0x13)) * 0x100000001b3 &
             *(ulonglong *)(param_1 + 0x30)) * 0x10 + lVar1);
  plVar4 = (longlong *)*plVar10;
  plVar8 = (longlong *)plVar10[1];
  plVar11 = param_2;
  do {
    plVar9 = (longlong *)*plVar11;
    pvVar5 = (LPVOID)plVar11[3];
    if (pvVar5 != (LPVOID)0x0) {
      pvVar7 = pvVar5;
      if ((0xfff < (plVar11[5] - (longlong)pvVar5 & 0xfffffffffffffffcU)) &&
         (pvVar7 = *(LPVOID *)((longlong)pvVar5 + -8),
         0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar7)))) {
LAB_180008a7a:
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar7);
      plVar11[3] = 0;
      plVar11[4] = 0;
      plVar11[5] = 0;
    }
    thunk_FUN_1800116e0(plVar11);
    *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
    if (plVar11 == plVar8) {
      puVar6 = puVar3;
      if (plVar4 == param_2) {
        *plVar10 = (longlong)puVar2;
        puVar6 = puVar2;
      }
      plVar10[1] = (longlong)puVar6;
      while (plVar9 != param_3) {
        plVar11 = (longlong *)
                  (((((((ulonglong)*(byte *)(plVar9 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                      (ulonglong)*(byte *)((longlong)plVar9 + 0x11)) * 0x100000001b3 ^
                     (ulonglong)*(byte *)((longlong)plVar9 + 0x12)) * 0x100000001b3 ^
                    (ulonglong)*(byte *)((longlong)plVar9 + 0x13)) * 0x100000001b3 &
                   *(ulonglong *)(param_1 + 0x30)) * 0x10 + lVar1);
        plVar4 = (longlong *)plVar11[1];
        plVar8 = plVar9;
        while( true ) {
          plVar9 = (longlong *)*plVar8;
          pvVar5 = (LPVOID)plVar8[3];
          if (pvVar5 != (LPVOID)0x0) {
            pvVar7 = pvVar5;
            if ((0xfff < (plVar8[5] - (longlong)pvVar5 & 0xfffffffffffffffcU)) &&
               (pvVar7 = *(LPVOID *)((longlong)pvVar5 + -8),
               0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar7)))) goto LAB_180008a7a;
            thunk_FUN_1800116e0(pvVar7);
            plVar8[3] = 0;
            plVar8[4] = 0;
            plVar8[5] = 0;
          }
          thunk_FUN_1800116e0(plVar8);
          *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
          if (plVar8 == plVar4) break;
          plVar8 = plVar9;
          if (plVar9 == param_3) {
            *plVar11 = (longlong)plVar9;
            goto LAB_180008a27;
          }
        }
        *plVar11 = (longlong)puVar2;
        plVar11[1] = (longlong)puVar2;
      }
      goto LAB_180008a27;
    }
    plVar11 = plVar9;
    if (plVar9 == param_3) {
      if (plVar4 == param_2) {
        *plVar10 = (longlong)plVar9;
      }
LAB_180008a27:
      *puVar3 = plVar9;
      plVar9[1] = (longlong)puVar3;
      return param_3;
    }
  } while( true );
}


/* Address: 0x180008aa0; Evidence: ev_0839ac685f361f879bb2045c9659973c70efb01dbb8c65a9092c6e8b3480383c */

undefined8 * FUN_180008aa0(longlong param_1,undefined8 *param_2,undefined8 *param_3)

{
  longlong lVar1;
  undefined8 *puVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  undefined8 *puVar6;
  longlong lVar7;
  undefined8 *puVar8;
  undefined8 *puVar9;
  longlong *plVar10;
  
  if (param_2 != param_3) {
    lVar1 = *(longlong *)(param_1 + 0x18);
    puVar6 = (undefined8 *)*param_2;
    puVar2 = *(undefined8 **)(param_1 + 8);
    puVar3 = (undefined8 *)param_2[1];
    plVar10 = (longlong *)
              (((((((ulonglong)*(byte *)(param_2 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                  (ulonglong)*(byte *)((longlong)param_2 + 0x11)) * 0x100000001b3 ^
                 (ulonglong)*(byte *)((longlong)param_2 + 0x12)) * 0x100000001b3 ^
                (ulonglong)*(byte *)((longlong)param_2 + 0x13)) * 0x100000001b3 &
               *(ulonglong *)(param_1 + 0x30)) * 0x10 + lVar1);
    puVar4 = (undefined8 *)*plVar10;
    puVar8 = (undefined8 *)plVar10[1];
    lVar7 = param_1;
    FUN_1800091d0(param_1,param_2);
    *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
    puVar5 = param_2;
    while (puVar9 = puVar6, puVar5 != puVar8) {
      if (puVar9 == param_3) {
        if (puVar4 == param_2) {
          *plVar10 = (longlong)puVar9;
        }
        goto LAB_180008c61;
      }
      puVar6 = (undefined8 *)*puVar9;
      FUN_1800091d0(lVar7,puVar9);
      *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
      puVar5 = puVar9;
    }
    puVar6 = puVar3;
    if (puVar4 == param_2) {
      *plVar10 = (longlong)puVar2;
      puVar6 = puVar2;
    }
    plVar10[1] = (longlong)puVar6;
    while (puVar9 != param_3) {
      puVar6 = (undefined8 *)*puVar9;
      plVar10 = (longlong *)
                (((((((ulonglong)*(byte *)(puVar9 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                    (ulonglong)*(byte *)((longlong)puVar9 + 0x11)) * 0x100000001b3 ^
                   (ulonglong)*(byte *)((longlong)puVar9 + 0x12)) * 0x100000001b3 ^
                  (ulonglong)*(byte *)((longlong)puVar9 + 0x13)) * 0x100000001b3 &
                 *(ulonglong *)(param_1 + 0x30)) * 0x10 + lVar1);
      puVar4 = (undefined8 *)plVar10[1];
      FUN_1800091d0(lVar7,puVar9);
      *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
      puVar8 = puVar9;
      while (puVar9 = puVar6, puVar8 != puVar4) {
        if (puVar9 == param_3) {
          *plVar10 = (longlong)puVar9;
          goto LAB_180008c61;
        }
        puVar6 = (undefined8 *)*puVar9;
        FUN_1800091d0(lVar7,puVar9);
        *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
        puVar8 = puVar9;
      }
      *plVar10 = (longlong)puVar2;
      plVar10[1] = (longlong)puVar2;
    }
LAB_180008c61:
    *puVar3 = puVar9;
    puVar9[1] = puVar3;
  }
  return param_3;
}


/* Address: 0x180008c90; Evidence: ev_e2b083ebbf486fcf0fe6de083687c94591d2280d8e46316b037bca0c6f3177f7 */

void FUN_180008c90(undefined8 param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  undefined8 *puVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  
  *(undefined8 *)param_2[1] = 0;
  puVar3 = (undefined8 *)*param_2;
  do {
    if (puVar3 == (undefined8 *)0x0) {
      return;
    }
    pvVar1 = (LPVOID)puVar3[3];
    puVar2 = (undefined8 *)*puVar3;
    if (pvVar1 != (LPVOID)0x0) {
      pvVar4 = pvVar1;
      if ((0xfff < (puVar3[5] - (longlong)pvVar1 & 0xfffffffffffffffcU)) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
      puVar3[3] = 0;
      puVar3[4] = 0;
      puVar3[5] = 0;
    }
    thunk_FUN_1800116e0(puVar3);
    puVar3 = puVar2;
  } while( true );
}


/* Address: 0x180008d40; Evidence: ev_31afcca58e4e06919dd1550390dd19399f9ea4c7ca793c623c1866f8e1e33efa */

void FUN_180008d40(undefined8 param_1,undefined8 *param_2)

{
  undefined8 *puVar1;
  LPVOID pvVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  
  *(undefined8 *)param_2[1] = 0;
  puVar3 = (undefined8 *)*param_2;
  do {
    if (puVar3 == (undefined8 *)0x0) {
      return;
    }
    puVar1 = (undefined8 *)*puVar3;
    if (0xf < (ulonglong)puVar3[7]) {
      pvVar2 = (LPVOID)puVar3[4];
      pvVar4 = pvVar2;
      if ((0xfff < puVar3[7] + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    puVar3[6] = 0;
    puVar3[7] = 0xf;
    *(undefined1 *)(puVar3 + 4) = 0;
    thunk_FUN_1800116e0(puVar3);
    puVar3 = puVar1;
  } while( true );
}


/* Address: 0x180008df0; Evidence: ev_167c9bc2d33f31beafb521f9b2f580b3ff2dbe9761a9a5b940e5306a76aeeac1 */

void FUN_180008df0(longlong param_1)

{
  longlong lVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  
  lVar1 = *(longlong *)(param_1 + 8);
  if ((lVar1 != 0) && (pvVar2 = *(LPVOID *)(lVar1 + 0x18), pvVar2 != (LPVOID)0x0)) {
    pvVar3 = pvVar2;
    if ((0xfff < (*(longlong *)(lVar1 + 0x28) - (longlong)pvVar2 & 0xfffffffffffffffcU)) &&
       (pvVar3 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar3)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar3);
    *(undefined8 *)(lVar1 + 0x18) = 0;
    *(undefined8 *)(lVar1 + 0x20) = 0;
    *(undefined8 *)(lVar1 + 0x28) = 0;
  }
  if (*(LPVOID *)(param_1 + 8) != (LPVOID)0x0) {
    thunk_FUN_1800116e0(*(LPVOID *)(param_1 + 8));
  }
  return;
}


/* Address: 0x180008eb0; Evidence: ev_5a78a74ce4516e6771fba7e3f01f9c45d75061e514bc8965c0c4cd9b767a234e */

void FUN_180008eb0(ulonglong *param_1,ulonglong param_2,undefined8 param_3)

{
  undefined8 *puVar1;
  LPVOID pvVar2;
  void *pvVar3;
  longlong lVar4;
  LPVOID pvVar5;
  ulonglong uVar6;
  undefined8 *puVar7;
  
  puVar7 = (undefined8 *)*param_1;
  lVar4 = (longlong)param_1[1] - (longlong)puVar7;
  if ((ulonglong)(lVar4 >> 3) < param_2) {
    if (0x1fffffffffffffff < param_2) {
LAB_180008ff5:
                    /* WARNING: Subroutine does not return */
      FUN_180001250();
    }
    uVar6 = param_2 * 8;
    puVar7 = (undefined8 *)0x0;
    if (uVar6 != 0) {
      if (uVar6 < 0x1000) {
        puVar7 = operator_new(uVar6);
      }
      else {
        if (uVar6 + 0x27 <= uVar6) goto LAB_180008ff5;
        pvVar3 = operator_new(uVar6 + 0x27);
        if (pvVar3 == (void *)0x0) goto LAB_180008ffb;
        puVar7 = (undefined8 *)((longlong)pvVar3 + 0x27U & 0xffffffffffffffe0);
        puVar7[-1] = pvVar3;
      }
    }
    pvVar2 = (LPVOID)*param_1;
    lVar4 = (longlong)(param_1[2] - (longlong)pvVar2) >> 3;
    if (lVar4 != 0) {
      pvVar5 = pvVar2;
      if ((0xfff < (ulonglong)(lVar4 * 8)) &&
         (pvVar5 = *(LPVOID *)((longlong)pvVar2 - 8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar5)))) {
LAB_180008ffb:
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
    puVar1 = puVar7 + param_2;
    *param_1 = (ulonglong)puVar7;
    param_1[1] = (ulonglong)puVar1;
    param_1[2] = (ulonglong)puVar1;
    for (; puVar7 != puVar1; puVar7 = puVar7 + 1) {
      *puVar7 = param_3;
    }
  }
  else {
    uVar6 = lVar4 + 7U >> 3;
    if ((undefined8 *)param_1[1] < puVar7) {
      uVar6 = 0;
    }
    if (uVar6 != 0) {
      for (; uVar6 != 0; uVar6 = uVar6 - 1) {
        *puVar7 = param_3;
        puVar7 = puVar7 + 1;
      }
    }
  }
  return;
}


/* Address: 0x180009010; Evidence: ev_f660b68e3098b9bfb8f7a833c50494a14f7ec67a3dee110ac94b6699a2f197b6 */

void FUN_180009010(longlong param_1,ulonglong param_2)

{
  longlong *plVar1;
  longlong *plVar2;
  longlong *plVar3;
  longlong *plVar4;
  undefined8 *puVar5;
  undefined8 *puVar6;
  longlong *plVar7;
  ulonglong uVar8;
  longlong lVar9;
  undefined8 *puVar10;
  
  for (lVar9 = 0x3f; 0xfffffffffffffffU >> lVar9 == 0; lVar9 = lVar9 + -1) {
  }
  if ((ulonglong)(1L << ((byte)lVar9 & 0x3f)) < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_18000a790(0x180022f40);
  }
  plVar1 = *(longlong **)(param_1 + 8);
  uVar8 = param_2 - 1 | 1;
  lVar9 = 0x3f;
  if (uVar8 != 0) {
    for (; uVar8 >> lVar9 == 0; lVar9 = lVar9 + -1) {
    }
  }
  lVar9 = 1L << ((char)lVar9 + 1U & 0x3f);
  FUN_180008eb0((ulonglong *)(param_1 + 0x18),lVar9 * 2,plVar1);
  *(longlong *)(param_1 + 0x38) = lVar9;
  *(longlong *)(param_1 + 0x30) = lVar9 + -1;
  plVar7 = (longlong *)**(undefined8 **)(param_1 + 8);
joined_r0x000180009085:
  do {
    while( true ) {
      while( true ) {
        if (plVar7 == plVar1) {
          return;
        }
        plVar2 = (longlong *)*plVar7;
        puVar10 = (undefined8 *)
                  (((((((ulonglong)*(byte *)(plVar7 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                      (ulonglong)*(byte *)((longlong)plVar7 + 0x11)) * 0x100000001b3 ^
                     (ulonglong)*(byte *)((longlong)plVar7 + 0x12)) * 0x100000001b3 ^
                    (ulonglong)*(byte *)((longlong)plVar7 + 0x13)) * 0x100000001b3 &
                   *(ulonglong *)(param_1 + 0x30)) * 0x10 + *(longlong *)(param_1 + 0x18));
        if ((longlong *)*puVar10 != plVar1) break;
        *puVar10 = plVar7;
        puVar10[1] = plVar7;
        plVar7 = plVar2;
      }
      plVar3 = (longlong *)puVar10[1];
      if ((int)plVar7[2] != (int)plVar3[2]) break;
      plVar3 = (longlong *)*plVar3;
      if (plVar3 != plVar7) {
        plVar4 = (longlong *)plVar7[1];
        *plVar4 = (longlong)plVar2;
        puVar5 = (undefined8 *)plVar2[1];
        *puVar5 = plVar3;
        puVar6 = (undefined8 *)plVar3[1];
        *puVar6 = plVar7;
        plVar3[1] = (longlong)puVar5;
        plVar2[1] = (longlong)plVar4;
        plVar7[1] = (longlong)puVar6;
      }
      puVar10[1] = plVar7;
      plVar7 = plVar2;
    }
    do {
      if ((longlong *)*puVar10 == plVar3) {
        plVar4 = (longlong *)plVar7[1];
        *plVar4 = (longlong)plVar2;
        puVar5 = (undefined8 *)plVar2[1];
        *puVar5 = plVar3;
        puVar6 = (undefined8 *)plVar3[1];
        *puVar6 = plVar7;
        plVar3[1] = (longlong)puVar5;
        plVar2[1] = (longlong)plVar4;
        plVar7[1] = (longlong)puVar6;
        *puVar10 = plVar7;
        plVar7 = plVar2;
        goto joined_r0x000180009085;
      }
      plVar3 = (longlong *)plVar3[1];
    } while ((int)plVar7[2] != (int)plVar3[2]);
    lVar9 = *plVar3;
    plVar3 = (longlong *)plVar7[1];
    *plVar3 = (longlong)plVar2;
    plVar4 = (longlong *)plVar2[1];
    *plVar4 = lVar9;
    puVar10 = *(undefined8 **)(lVar9 + 8);
    *puVar10 = plVar7;
    *(longlong **)(lVar9 + 8) = plVar4;
    plVar2[1] = (longlong)plVar3;
    plVar7[1] = (longlong)puVar10;
    plVar7 = plVar2;
  } while( true );
}


/* Address: 0x1800091d0; Evidence: ev_5dfdc37d50ab5511281a108b984aafaf5148fc83247858a0d787427b939240f5 */

void FUN_1800091d0(undefined8 param_1,LPVOID param_2)

{
  LPVOID pvVar1;
  LPVOID pvVar2;
  
  if (0xf < *(ulonglong *)((longlong)param_2 + 0x38)) {
    pvVar1 = *(LPVOID *)((longlong)param_2 + 0x20);
    pvVar2 = pvVar1;
    if ((0xfff < *(ulonglong *)((longlong)param_2 + 0x38) + 1) &&
       (pvVar2 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar2)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(pvVar2);
  }
  *(undefined8 *)((longlong)param_2 + 0x30) = 0;
  *(undefined8 *)((longlong)param_2 + 0x38) = 0xf;
  *(undefined1 *)((longlong)param_2 + 0x20) = 0;
  thunk_FUN_1800116e0(param_2);
  return;
}


/* Address: 0x180009270; Evidence: ev_56ab88f03cbc8e0f0848b131f011d68799459dfae82e6ecec185e00f62af72ff */

void FUN_180009270(longlong param_1,ulonglong param_2)

{
  longlong *plVar1;
  longlong *plVar2;
  longlong *plVar3;
  longlong *plVar4;
  undefined8 *puVar5;
  undefined8 *puVar6;
  longlong *plVar7;
  ulonglong uVar8;
  longlong lVar9;
  undefined8 *puVar10;
  
  for (lVar9 = 0x3f; 0xfffffffffffffffU >> lVar9 == 0; lVar9 = lVar9 + -1) {
  }
  if ((ulonglong)(1L << ((byte)lVar9 & 0x3f)) < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_18000a790(0x180022f40);
  }
  plVar1 = *(longlong **)(param_1 + 8);
  uVar8 = param_2 - 1 | 1;
  lVar9 = 0x3f;
  if (uVar8 != 0) {
    for (; uVar8 >> lVar9 == 0; lVar9 = lVar9 + -1) {
    }
  }
  lVar9 = 1L << ((char)lVar9 + 1U & 0x3f);
  FUN_180006890((ulonglong *)(param_1 + 0x18),lVar9 * 2,plVar1);
  *(longlong *)(param_1 + 0x38) = lVar9;
  *(longlong *)(param_1 + 0x30) = lVar9 + -1;
  plVar7 = (longlong *)**(undefined8 **)(param_1 + 8);
joined_r0x0001800092e5:
  do {
    while( true ) {
      while( true ) {
        if (plVar7 == plVar1) {
          return;
        }
        plVar2 = (longlong *)*plVar7;
        puVar10 = (undefined8 *)
                  (((((((ulonglong)*(byte *)(plVar7 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                      (ulonglong)*(byte *)((longlong)plVar7 + 0x11)) * 0x100000001b3 ^
                     (ulonglong)*(byte *)((longlong)plVar7 + 0x12)) * 0x100000001b3 ^
                    (ulonglong)*(byte *)((longlong)plVar7 + 0x13)) * 0x100000001b3 &
                   *(ulonglong *)(param_1 + 0x30)) * 0x10 + *(longlong *)(param_1 + 0x18));
        if ((longlong *)*puVar10 != plVar1) break;
        *puVar10 = plVar7;
        puVar10[1] = plVar7;
        plVar7 = plVar2;
      }
      plVar3 = (longlong *)puVar10[1];
      if ((int)plVar7[2] != (int)plVar3[2]) break;
      plVar3 = (longlong *)*plVar3;
      if (plVar3 != plVar7) {
        plVar4 = (longlong *)plVar7[1];
        *plVar4 = (longlong)plVar2;
        puVar5 = (undefined8 *)plVar2[1];
        *puVar5 = plVar3;
        puVar6 = (undefined8 *)plVar3[1];
        *puVar6 = plVar7;
        plVar3[1] = (longlong)puVar5;
        plVar2[1] = (longlong)plVar4;
        plVar7[1] = (longlong)puVar6;
      }
      puVar10[1] = plVar7;
      plVar7 = plVar2;
    }
    do {
      if ((longlong *)*puVar10 == plVar3) {
        plVar4 = (longlong *)plVar7[1];
        *plVar4 = (longlong)plVar2;
        puVar5 = (undefined8 *)plVar2[1];
        *puVar5 = plVar3;
        puVar6 = (undefined8 *)plVar3[1];
        *puVar6 = plVar7;
        plVar3[1] = (longlong)puVar5;
        plVar2[1] = (longlong)plVar4;
        plVar7[1] = (longlong)puVar6;
        *puVar10 = plVar7;
        plVar7 = plVar2;
        goto joined_r0x0001800092e5;
      }
      plVar3 = (longlong *)plVar3[1];
    } while ((int)plVar7[2] != (int)plVar3[2]);
    lVar9 = *plVar3;
    plVar3 = (longlong *)plVar7[1];
    *plVar3 = (longlong)plVar2;
    plVar4 = (longlong *)plVar2[1];
    *plVar4 = lVar9;
    puVar10 = *(undefined8 **)(lVar9 + 8);
    *puVar10 = plVar7;
    *(longlong **)(lVar9 + 8) = plVar4;
    plVar2[1] = (longlong)plVar3;
    plVar7[1] = (longlong)puVar10;
    plVar7 = plVar2;
  } while( true );
}


/* Address: 0x18000942f; Evidence: ev_932ddf330098d7fe0dc15cc2a3adaf5fbd400028502d2e0061679fc2d5e602c9 */

void FUN_18000942f(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_R9;
  
  UNRECOVERED_JUMPTABLE = FUN_180018074(&ImgDelayDescr_180025fbc.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x0001800094a6. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_2,param_3,in_R9);
  return;
}


/* Address: 0x1800094a8; Evidence: ev_08e0fd70c3ba5e4c8d85e0e7aee1c4a20344cef09d0a353cf55488d9a1a51590 */

void DelayLoad_napi_create_array_with_length
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800094b4; Evidence: ev_e2d1281e7efc4a36e6f0293f3de324bec3481535260e90924b4f47b2d05d64ee */

void DelayLoad_napi_create_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800094c0; Evidence: ev_60b81fffbc197c09ebdfb70297fed74d1ddc553524691571424c87f15501cf4a */

void DelayLoad_napi_open_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800094cc; Evidence: ev_70a2a5604c1b6adc19b417bbaea8af07851b0d61e9cc1485edb570d7b74e7706 */

void DelayLoad_napi_get_element
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800094d8; Evidence: ev_b3af77614e797596fb27b10b7c609f471600a026e28d3965fb1cc085df4a2e8f */

void DelayLoad_napi_get_last_error_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800094e4; Evidence: ev_687b46e28da8fd79fdc5f0bdbff9c211d3e58ac1aa650cee2b9510be29362205 */

void DelayLoad_napi_create_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800094f0; Evidence: ev_bf6c2e430b49697ecbee1ccadd499ba6c016b787eea5de6e5fb39cfbf43e12cb */

void DelayLoad_napi_call_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800094fc; Evidence: ev_ceb195bbb14c2d8c69214628c00ca4bf51ec7fc2641e7fd4e694332346a82f20 */

void DelayLoad_napi_get_null
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009508; Evidence: ev_4922589134157af843c2dc50a98ce71dee61f9e30a891692ac2294442b411863 */

void DelayLoad_napi_queue_async_work
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009514; Evidence: ev_9273f39b184dc359bd3a3ae3fb619013eff84e4cfe2c743cc775ac6bef133f8a */

void DelayLoad_napi_delete_reference
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009520; Evidence: ev_9f8635ae028080c52947e81e74af2dbb545b3c9b83d199e70812d8199eb64b5a */

void DelayLoad_napi_fatal_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000952c; Evidence: ev_d98370694df4b8c19b676bbf763347cc567e69d725082c923f1d78f05c7e9a8e */

void DelayLoad_napi_is_exception_pending
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009538; Evidence: ev_bd57d1e24bbff0cf6dfa23fd291e856fc7819ffc465f57427b251bc73f14585a */

void DelayLoad_napi_set_element
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009544; Evidence: ev_85df5e49b3f3daa3ad1c2ba7dc94e484513d9e047ae1d762de2f04420ffd0f02 */

void DelayLoad_napi_get_value_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009550; Evidence: ev_a5c5366d954f37d18a2e9b359713eb4e125af8432feadb7449403fd9b6f079af */

void DelayLoad_napi_close_escapable_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000955c; Evidence: ev_16981d1c095950d4e5b0a0e495bd4cc42849bbf06773ed8f35c8a877df505da1 */

void DelayLoad_napi_escape_handle
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009568; Evidence: ev_700efdc79abef46faa260807b275af1ec146da535ca60bdc79348840bc44a0bd */

void DelayLoad_napi_get_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009574; Evidence: ev_f931188bd8760790f9f8cf887e84cc3577224e81fa63e8ac52a4563dd2392c0d */

void DelayLoad_napi_add_finalizer
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009580; Evidence: ev_0cc963a52f1f53e179617b58aba2465f821bdd517ae678ac57e2c158c061bc64 */

void DelayLoad_napi_resolve_deferred
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000958c; Evidence: ev_a99cd5163e12543bf16647e15b37ae975d2fcae8482a0678ea50039eee4b4262 */

void DelayLoad_napi_is_array
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009598; Evidence: ev_ef4060386b2e137d41c1251b699b3c338f6a39813e7d33aefea57d74925b90ef */

void DelayLoad_napi_create_type_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800095a4; Evidence: ev_e50293ef41514e4acfa5b7f0679ca780e9ee8b33c433175aac7c11e35f641bdf */

void DelayLoad_napi_reject_deferred
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800095b0; Evidence: ev_19eadb0390c3a9359cc0040197c2270f1e91fd4b2c58167d1ef313c461c54d56 */

void DelayLoad_napi_create_string_latin1
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800095bc; Evidence: ev_5289a1b0836e8ffe6130b0ceabbad8eed703df3186ac59ab4d7568c158348af9 */

void DelayLoad_napi_create_async_work
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800095c8; Evidence: ev_a354543af47d4fea38e1c629e8edce1842ec50a12140f47a233226230136dcf9 */

void DelayLoad_napi_create_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800095d4; Evidence: ev_29dd72569f27413aeb8e99fd0e4376a705c4aa50b082ec9bf78a6c87b66061b3 */

void DelayLoad_napi_has_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800095e0; Evidence: ev_bb83e76dd47f782656fd2da57efae0aa438ccf255a2728559de3ebbee32c6db8 */

void DelayLoad_napi_define_properties
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800095ec; Evidence: ev_127b15355e944cbe6381f20b25dff7b1e522d25997fbc33e3e3c75b6e259fffe */

void DelayLoad_napi_create_array
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800095f8; Evidence: ev_641de271d4b0a9ff984e29a3d87c8ad037a11073c4f73c8561db8d600f63830d */

void DelayLoad_napi_typeof
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009604; Evidence: ev_ebfbf811966fb2cb380ed584f87040c2b348910d0aff45133d2f50f9612faad8 */

void DelayLoad_napi_throw
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009610; Evidence: ev_e517e9a4e1257606dea699541682948166f377df9e1c4d79692d123157874d31 */

void DelayLoad_napi_create_promise
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000961c; Evidence: ev_eab1ca3d429ba0e1dc96f2a15780d68e929ef268e0c08c32e57acb902722da4e */

void DelayLoad_napi_get_and_clear_last_exception
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009628; Evidence: ev_9fc4a7c170d7fd80ccf0e1263a4540b2f89ac3d4acbbd0515feea61a4b25c139 */

void DelayLoad_napi_create_object
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009634; Evidence: ev_16d12913621d93b2d418fdf36c3ec4dd858b6b1f07f412a223cb6c4eb592a59a */

void DelayLoad_napi_get_undefined
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009640; Evidence: ev_064e82d5d6ec55429dc1337df8b09ec7e4c275c957215017d2a90fcd5f03c955 */

void DelayLoad_napi_set_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000964c; Evidence: ev_4390afc782a3dd081c6ab31600f9d4260a9a36a7ee6796b92f9654fc5d0da607 */

void DelayLoad_napi_get_cb_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009658; Evidence: ev_d182bfac7dd7cdd225e5dc8ff5ef5b4d94aa7c10be0ce525c7cb38cae5eabf3d */

void DelayLoad_napi_delete_async_work
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009664; Evidence: ev_379297c7d372d3a2a4a9141b3bee79d6f3dfbde5deaa44cc5ed9c630c8bb980c */

void DelayLoad_napi_open_escapable_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009670; Evidence: ev_3862e0a9ab496d60d2b40ab3274ad498deb331a2d75ee5d84c9548bb726f6725 */

void DelayLoad_napi_get_value_double
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000967c; Evidence: ev_9c2f3bef41d11ede5d3235c0b8734e3a664343e4695a1eb72da95dc2346763c0 */

void DelayLoad_napi_create_reference
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009688; Evidence: ev_8c372791604ef25dbf48fad3bfae9172dead80b474d4ec677e7f76ea32bee314 */

void DelayLoad_napi_close_handle_scope
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180009694; Evidence: ev_55c8fba2342f51d20f2b5c5358845c9a6de3eab930ddc332eaefdf8dc0e718e0 */

void DelayLoad_napi_create_double
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800096a0; Evidence: ev_dde936d49565718c0ba43860de80793abe5b6553b9d232cc32e0d57e69f133d5 */

void DelayLoad_napi_get_array_length
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800096ac; Evidence: ev_423beb48633b70ebb18eeee8e7902fdb489b0f8592f19c66903b213d59f1ad5d */

void DelayLoad_napi_get_reference_value
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000942f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800096d0; Evidence: ev_29794f9f1fdff74259920bacdc79f2b45ef12108c215330b37d99903d9369699 */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_180028040) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_180009e68();
  return;
}


/* Address: 0x1800096f0; Evidence: ev_4f16dba629083d49145c1c133beee88feb70bff99f9146be1409aa4143634913 */

void thunk_FUN_1800116e0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180029918,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180010ca4(DVar2);
    p_Var4 = FUN_180010de4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x1800096f8; Evidence: ev_b866bc84b88e89194b70407a34da1671e60c9292273681cd588458a64338cec5 */

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
    bVar2 = FUN_18000f990(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_18000a11c();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_18000a0fc();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x180009734; Evidence: ev_d45518f3f49ebf3976bed99202030779952b98b6aea540cd32a6ce53f616b425 */

void thunk_FUN_1800116e0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180029918,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180010ca4(DVar2);
    p_Var4 = FUN_180010de4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000973c; Evidence: ev_c774b184bd5495618b4a74ef8ea60a188be66db97e2f9670ba1668fdcc86fb79 */

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
    bVar2 = FUN_18000f990(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_18000a11c();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_18000a0fc();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x180009744; Evidence: ev_b602a3c93cffa9036b2bfa51bfa6abe942d1d07389bbffb5c7eab195519d082d */

undefined8 * FUN_180009744(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = type_info::vftable;
  if ((param_2 & 1) != 0) {
    thunk_FUN_1800116e0(param_1);
  }
  return param_1;
}


/* Address: 0x180009770; Evidence: ev_6e254827b9404b4e9869ed7714a59b142f54ead9d62b143bd3a41b65fcdbf253 */

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
LAB_18000979e:
    uVar4 = (ulonglong)pvVar3 & 0xffffffffffffff00;
  }
  else {
    do {
      pvVar3 = (void *)0x0;
      LOCK();
      bVar2 = DAT_180028d20 == (void *)0x0;
      pvVar1 = StackBase;
      if (!bVar2) {
        pvVar3 = DAT_180028d20;
        pvVar1 = DAT_180028d20;
      }
      DAT_180028d20 = pvVar1;
      UNLOCK();
      if (bVar2) goto LAB_18000979e;
    } while (StackBase != pvVar3);
    uVar4 = CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
  }
  return uVar4;
}


/* Address: 0x1800097ac; Evidence: ev_88a416e83827cb329bc9807dcbfa5d6d8d5f5ed63e9b92af40dd40315c58b34c */

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
    uVar2 = FUN_18000a3e8();
    uVar3 = FUN_1800100e4((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_180010264();
  }
  else {
    uVar2 = FUN_18000a150();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}


/* Address: 0x1800097e0; Evidence: ev_cb3e08dd65bcf0a1b34a124104aa14edca94c0d095ba6e0f453e3f493914251a */

bool FUN_1800097e0(void)

{
  undefined8 uVar1;
  
  uVar1 = FUN_180009918(0);
  return (char)uVar1 != '\0';
}


/* Address: 0x1800097f8; Evidence: ev_36785685a77cd2225335bd2fc893e6a646d3899173dc799accd09785b68734f6 */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_18000b654();
  if (bVar1) {
    bVar1 = FUN_1800109fc();
    if (bVar1) {
      return 1;
    }
    FUN_18000b668();
  }
  return 0;
}


/* Address: 0x180009820; Evidence: ev_68f07cc067bf8f025fbd1442b966f52f98575e080a77b96d2d37d31bd1aa7796 */

undefined1 FUN_180009820(void)

{
  FUN_180010a10();
  FUN_18000b668();
  return 1;
}


/* Address: 0x180009838; Evidence: ev_944d178a08df7f31a72d5c0d8aa2edabb8b72dc745b9279998f957eeca147987 */

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


/* Address: 0x180009898; Evidence: ev_04e43a064e3f84bc4fab6016d6e9190f3e5e9f4384e3ab1b6fc0030e5c003ac9 */

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
    FUN_180010804(&DAT_180028d30);
    return;
  }
  iVar2 = FUN_18000febc();
  if (iVar2 == 0) {
    FUN_18000fea0();
  }
  return;
}


/* Address: 0x1800098c8; Evidence: ev_8d5af95df157987111f4e463c8cad75f4cd48afbe55bc38ec27b8bb9eaca12cd */

void FUN_1800098c8(void)

{
  FUN_180010a58();
  FUN_18000b694();
  return;
}


/* Address: 0x1800098dc; Evidence: ev_8329693afd0447bf161f5511f3f84b1f240d05d72c4547cbf160824840ea243f */

ulonglong FUN_1800098dc(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_180028d28 = 1;
  }
  FUN_18000a150();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_1800109e8();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}


/* Address: 0x180009918; Evidence: ev_44f708ffc0848166709e56f734a44a18b73bde0e969a963784040c8d3d85b722 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180009918(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_180028d29 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_18000a408(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      DAT_180028d30 = 0xffffffffffffffff;
      uRam0000000180028d38 = 0xffffffffffffffff;
      _DAT_180028d40 = 0xffffffffffffffff;
      _DAT_180028d48 = 0xffffffffffffffff;
      uRam0000000180028d50 = 0xffffffffffffffff;
      _DAT_180028d58 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table(&DAT_180028d30);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_180028d48), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_180028d29 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x1800099a4; Evidence: ev_06842066ec89be0dd2228c6101b39da0d271a3c30d5f1f1d608c8ea69783cd37 */

/* WARNING: Removing unreachable block (ram,0x000180009a31) */
/* WARNING: Enum "SectionFlags": Some values do not have unique names */

ulonglong FUN_1800099a4(longlong param_1)

{
  ulonglong uVar1;
  uint7 uVar2;
  IMAGE_SECTION_HEADER *pIVar3;
  
  uVar1 = 0;
  for (pIVar3 = &IMAGE_SECTION_HEADER_180000218; pIVar3 != (IMAGE_SECTION_HEADER *)&DAT_180000330;
      pIVar3 = pIVar3 + 1) {
    if (((ulonglong)(uint)pIVar3->VirtualAddress <= param_1 - 0x180000000U) &&
       (uVar1 = (ulonglong)((pIVar3->Misc).PhysicalAddress + pIVar3->VirtualAddress),
       param_1 - 0x180000000U < uVar1)) goto LAB_180009a1a;
  }
  pIVar3 = (IMAGE_SECTION_HEADER *)0x0;
LAB_180009a1a:
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


/* Address: 0x180009a3c; Evidence: ev_92a4a6e07d1932d6410bbff0050684317e63c3543b51d51a1f4f4922c0ed0911 */

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
    DAT_180028d20 = 0;
    UNLOCK();
  }
  return;
}


/* Address: 0x180009a60; Evidence: ev_06289bd8052b7e7949e4575b5d05e9b7c7195191d37737a28d3974e65072e331 */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_180028d28 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180009a8c; Evidence: ev_3eccc445d8072842cd82d8e9cd9169c3b8fae089918b6ef23272aebaf83f54b5 */

/* Library Function - Single Match
    _onexit
   
   Library: Visual Studio 2019 Release */

_onexit_t __cdecl _onexit(_onexit_t _Func)

{
  int iVar1;
  _onexit_t p_Var2;
  
  if (DAT_180028d30 == -1) {
    iVar1 = FUN_1800107f4(_Func);
  }
  else {
    iVar1 = _register_onexit_function(&DAT_180028d30,_Func);
  }
  p_Var2 = (_onexit_t)0x0;
  if (iVar1 == 0) {
    p_Var2 = _Func;
  }
  return p_Var2;
}


/* Address: 0x180009ac8; Evidence: ev_c91f1a282415badabb0dbad9777b02775caf0df515dac43cd79d01aaf5bb44f7 */

/* Library Function - Single Match
    atexit
   
   Library: Visual Studio 2019 Release */

int __cdecl atexit(_func_5014 *param_1)

{
  _onexit_t p_Var1;
  
  p_Var1 = _onexit((_onexit_t)param_1);
  return (p_Var1 != (_onexit_t)0x0) - 1;
}


/* Address: 0x180009ae0; Evidence: ev_c26869da747320ce302835197c3352966dc68061af2e1f490dde23a3a732d905 */

ulonglong FUN_180009ae0(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180009c48(param_3 != 0);
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
      bVar1 = FUN_180009820();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_180009b30(param_1,param_3);
  return uVar2;
}


/* Address: 0x180009b30; Evidence: ev_b0c219dfd40a7dff1c3258b53241c779295c5e9479283218759168e3860d1f01 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180009b30(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_1800098dc(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180028d18 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_18000a408(7);
    }
    DAT_180028d18 = 1;
    bVar2 = FUN_1800097e0();
    if (bVar2) {
      FUN_18000a654();
      FUN_18000a604();
      FUN_18000a630();
      uVar4 = FUN_180010aa0((undefined8 *)&DAT_18001b2f8,(undefined8 *)&DAT_18001b318);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180010a68((undefined8 *)&DAT_18001b2e0,(undefined8 *)&DAT_18001b2f0);
        DAT_180028d18 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_18000a64c();
      if ((*plVar5 != 0) && (uVar6 = FUN_1800099a4((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180028d60 = DAT_180028d60 + 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x180009c48; Evidence: ev_a29161d9daf811e64e5ff59064e7ef9eb1971a2492026783843a431e00ae5c6b */

ulonglong FUN_180009c48(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180028d60 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180028d60 = DAT_180028d60 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180028d18 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_18000a408(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_18000a614();
    FUN_18000a690();
    DAT_180028d18 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_1800098c8();
  }
  return uVar2;
}


/* Address: 0x180009ccc; Evidence: ev_0a46a0b4c56e2f1c930136976467dad76e288c940a0f1c4cdc7c81c66d67e513 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180009d89) */
/* WARNING: Removing unreachable block (ram,0x000180009d1a) */
/* WARNING: Removing unreachable block (ram,0x000180009dc8) */

int FUN_180009ccc(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_180028d60 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180009ae0(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_18000a3e8();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_18000a3e8();
      FUN_180009c48(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180009ae0(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}


/* Address: 0x180009df4; Evidence: ev_5a2810891e35582f2cd0c066384a71cd690f5bf31f9e7e1e754dc87e37aa5650 */

void entry(undefined8 param_1,int param_2,longlong param_3)

{
  if (param_2 == 1) {
    FUN_18000a554();
  }
  FUN_180009ccc(param_1,param_2,param_3);
  return;
}


/* Address: 0x180009e34; Evidence: ev_ea78e07b390c07c433682e006c4861dca37e90a483f783df9f35f8dfbeaf490c */

/* Library Function - Single Match
    __raise_securityfailure
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __raise_securityfailure(_EXCEPTION_POINTERS *param_1)

{
  HANDLE hProcess;
  
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  UnhandledExceptionFilter(param_1);
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x000180009e61. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000409);
  return;
}


/* Address: 0x180009e68; Evidence: ev_4a5884b994686e16ac79f2971464d1c19660619acf99e78ce8e12f0d2ff8ccc9 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180009e68(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x180009e93;
  FUN_180009f3c((PCONTEXT)&DAT_180028e10);
  _DAT_180028d80 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180028ea8 = puVar3 + 0x40;
  _DAT_180028e90 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180028d70 = 0xc0000409;
  _DAT_180028d74 = 1;
  _DAT_180028d88 = 1;
  DAT_180028d90 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180028040;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180028080;
  *(undefined8 *)(puVar3 + -8) = 0x180009f35;
  DAT_180028f08 = _DAT_180028d80;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_18001b398);
  return;
}


/* Address: 0x180009f3c; Evidence: ev_ec84b7601368abb7d91bcb4dca00885dfb590139f8f4a1e10e4e32a9ab54b8b1 */

void FUN_180009f3c(PCONTEXT param_1)

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


/* Address: 0x180009fb0; Evidence: ev_9e7d20c92d8c76f3bf9ac099f8a94d237c154e5df606e4a59c3ab2853526a7da */

undefined8 * FUN_180009fb0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_18000b8bc((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x180009fec; Evidence: ev_a4643553d0cd5a3a81421369d80ea770713b9674c4d438c67e140db3cfab347b */

undefined8 * FUN_180009fec(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x18000a010; Evidence: ev_f23e703da6f069deac3dd6fe8076a79106645557724afaf501f264caf7f733a5 */

undefined8 * FUN_18000a010(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_18000b8bc((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x18000a04c; Evidence: ev_1c20cb3029de33568cded5c79ca92284d5864cd18d54914a7c81efae1260f27f */

undefined8 * FUN_18000a04c(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x18000a070; Evidence: ev_728b895922bc14ffed2b120c9e80bb56f3225d514c4d158b050dce63795346c1 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_18000b8bc((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}


/* Address: 0x18000a0b8; Evidence: ev_35b095e983de521b07558b030f2a9bdfe0d0d564b9d7acc10b0e82f9af8c478c */

undefined8 * FUN_18000a0b8(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_18000b93c(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_1800116e0(param_1);
  }
  return param_1;
}


/* Address: 0x18000a0fc; Evidence: ev_4719e82738ec819e694315bb17e54220ab2d74dc8be9ad57e2c0e93870bd8f06 */

void FUN_18000a0fc(void)

{
  longlong local_28 [5];
  
  FUN_180009fec(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_18000b964(local_28,&DAT_180025de0);
}


/* Address: 0x18000a11c; Evidence: ev_ab52850f8bf0113b57975e8eaa4bf4ce411cc4e8b7cd94774933269dd5937197 */

void FUN_18000a11c(void)

{
  longlong local_28 [5];
  
  FUN_18000a04c(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_18000b964(local_28,&DAT_180025e68);
}


/* Address: 0x18000a13c; Evidence: ev_0af4b6003c4eed8abf31573bac6297789909af752199f4fe2a7c3c06648118c3 */

char * FUN_18000a13c(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x18000a150; Evidence: ev_50c5853a0d401d5ce68d20fca849d518b67880340bca34d10d51e2acd297dde7 */

/* WARNING: Removing unreachable block (ram,0x00018000a241) */
/* WARNING: Removing unreachable block (ram,0x00018000a231) */
/* WARNING: Removing unreachable block (ram,0x00018000a20c) */
/* WARNING: Removing unreachable block (ram,0x00018000a18a) */
/* WARNING: Removing unreachable block (ram,0x00018000a168) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_18000a150(void)

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
    DAT_180028098 = 0x8000;
    DAT_1800280a0 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_1800292e4 = DAT_1800292e4 | 1;
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
      DAT_1800292e4 = DAT_1800292e4 | 2;
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
  DAT_180028090 = 1;
  DAT_180028094 = 2;
  uVar9 = DAT_180028088 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_180028090 = 2;
    DAT_180028094 = 6;
    uVar9 = DAT_180028088 & 0xffffffffffffffee;
  }
  DAT_180028088 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_180028090 = 3;
      uVar7 = DAT_180028088;
      uVar5 = DAT_180028094 | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_180028090 = 5;
        uVar7 = DAT_180028088 & 0xfffffffffffffffd;
        uVar5 = DAT_180028094 | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_180028094 = DAT_180028094 | 0x68;
          DAT_180028090 = 6;
          uVar7 = DAT_180028088 & 0xffffffffffffffd9;
          uVar5 = DAT_180028094;
        }
      }
      DAT_180028094 = uVar5;
      DAT_180028088 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_180028088 = DAT_180028088 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_1800292e0 = (uint)uVar12 & 0x400ff;
        DAT_180028088 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_180028088;
        if (1 < (byte)_DAT_1800292e0) {
          DAT_180028088 = DAT_180028088 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_180028088 = DAT_180028088 & 0xffffffffffffff7f;
    }
  }
  return 0;
}


/* Address: 0x18000a3e8; Evidence: ev_b00c9affd4f8dd588074b578ad7bb3efbebd952042b50d7e9b2505e1d29c8ebb */

undefined8 FUN_18000a3e8(void)

{
  return 1;
}


/* Address: 0x18000a3f0; Evidence: ev_0459c9924e7d41c76fb676eefdd2bc3df50c839bd11174a2492f3837719a9da2 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180029e68 != 0;
}


/* Address: 0x18000a3fc; Evidence: ev_43e4fc415d14cb062ac2326e1f340c9dfbaaeac1e584fe9e1c2710465e35d541 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000a3fc(void)

{
  _DAT_1800292e8 = 0;
  return;
}


/* Address: 0x18000a408; Evidence: ev_922c244a6e7c63615e5a7ab32344a3fb79e987ef51bf631dd095d21c81019eb6 */

void FUN_18000a408(undefined4 param_1)

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
  *(undefined8 *)(puVar4 + -8) = 0x18000a43c;
  FUN_18000a3fc();
  *(undefined8 *)(puVar4 + -8) = 0x18000a44d;
  FUN_1800188a0((undefined1 (*) [32])local_4d8,0,0x4d0);
  *(undefined8 *)(puVar4 + -8) = 0x18000a457;
  RtlCaptureContext(local_4d8);
  *(undefined8 *)(puVar4 + -8) = 0x18000a471;
  FunctionEntry = RtlLookupFunctionEntry(local_3e0,&local_res10,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    *(undefined8 *)(puVar4 + 0x38) = 0;
    *(undefined1 **)(puVar4 + 0x30) = local_res18;
    *(undefined1 **)(puVar4 + 0x28) = local_res20;
    *(undefined1 **)(puVar4 + 0x20) = local_4d8;
    *(undefined8 *)(puVar4 + -8) = 0x18000a4b5;
    RtlVirtualUnwind(0,local_res10,local_3e0,FunctionEntry,*(PCONTEXT *)(puVar4 + 0x20),
                     *(PVOID **)(puVar4 + 0x28),*(PDWORD64 *)(puVar4 + 0x30),
                     *(PKNONVOLATILE_CONTEXT_POINTERS *)(puVar4 + 0x38));
  }
  local_440 = &stack0x00000008;
  *(undefined8 *)(puVar4 + -8) = 0x18000a4e7;
  FUN_1800188a0((undefined1 (*) [32])(puVar4 + 0x50),0,0x98);
  *(undefined8 *)(puVar4 + 0x60) = unaff_retaddr;
  *(undefined4 *)(puVar4 + 0x50) = 0x40000015;
  *(undefined4 *)(puVar4 + 0x54) = 1;
  *(undefined8 *)(puVar4 + -8) = 0x18000a509;
  BVar2 = IsDebuggerPresent();
  *(undefined1 **)(puVar4 + 0x40) = puVar4 + 0x50;
  *(undefined1 **)(puVar4 + 0x48) = local_4d8;
  *(undefined8 *)(puVar4 + -8) = 0x18000a526;
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  *(undefined8 *)(puVar4 + -8) = 0x18000a531;
  LVar3 = UnhandledExceptionFilter((_EXCEPTION_POINTERS *)(puVar4 + 0x40));
  if ((LVar3 == 0) && (BVar2 != 1)) {
    *(undefined8 *)(puVar4 + -8) = 0x18000a542;
    FUN_18000a3fc();
  }
  return;
}


/* Address: 0x18000a554; Evidence: ev_95e3b6abcdc47d92422b91575319435ed637b0006940a8c5e2be7e1681b92813 */

void FUN_18000a554(void)

{
  DWORD DVar1;
  _FILETIME local_res8;
  LARGE_INTEGER local_res10;
  _FILETIME local_18 [2];
  
  if (DAT_180028040 == 0x2b992ddfa232) {
    local_res8.dwLowDateTime = 0;
    local_res8.dwHighDateTime = 0;
    GetSystemTimeAsFileTime(&local_res8);
    local_18[0] = local_res8;
    DVar1 = GetCurrentThreadId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    DVar1 = GetCurrentProcessId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    QueryPerformanceCounter(&local_res10);
    DAT_180028040 =
         ((ulonglong)local_res10.s.LowPart << 0x20 ^
          CONCAT44(local_res10.s.HighPart,local_res10.s.LowPart) ^ (ulonglong)local_18[0] ^
         (ulonglong)local_18) & 0xffffffffffff;
    if (DAT_180028040 == 0x2b992ddfa232) {
      DAT_180028040 = 0x2b992ddfa233;
    }
  }
  DAT_180028080 = ~DAT_180028040;
  return;
}


/* Address: 0x18000a604; Evidence: ev_80769224cd22d7b8094adece6e405697a235336b04a86304ec9fd50b75b02a27 */

void FUN_18000a604(void)

{
                    /* WARNING: Could not recover jumptable at 0x00018000a60b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  InitializeSListHead(&DAT_1800292f0);
  return;
}


/* Address: 0x18000a614; Evidence: ev_3f4e5dd56989f903b422deae637aab3b596a9c883ba55f6614f99f4fc3a8f593 */

void FUN_18000a614(void)

{
  FUN_18000ba28((PSLIST_HEADER)&DAT_1800292f0);
  return;
}


/* Address: 0x18000a620; Evidence: ev_7277967eb1c0e96bbdf3cb87fcdffe141114b088f4af62c3ec59cf69e6b55284 */

undefined * FUN_18000a620(void)

{
  return &DAT_180029300;
}


/* Address: 0x18000a628; Evidence: ev_88886f74c0a7288a4f42922332999fd673415bfb4599d250487993daf2b73df9 */

undefined * FUN_18000a628(void)

{
  return &DAT_180029308;
}


/* Address: 0x18000a630; Evidence: ev_1cd9e9f56ef35be82e80950a36c94a83f9e045c0b486ce904e5db7233474d213 */

void FUN_18000a630(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_18000a620();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_18000a628();
  *puVar1 = *puVar1 | 2;
  return;
}


/* Address: 0x18000a64c; Evidence: ev_1f84514442d3342e8d59c5c19a494937f088bec5dd24125357b5cf1432dce2f7 */

undefined * FUN_18000a64c(void)

{
  return &DAT_180029e60;
}


/* Address: 0x18000a654; Evidence: ev_a257a0080731c68f2361ce7bbf3ddbd9275b829f2e1769a3584def58560f9c8d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000a654(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180023bc0; puVar1 < &DAT_180023bc0; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x18000a690; Evidence: ev_c18a3f6853f56ba246c862ba30d94fa38c0cc1d3dc8e079b77a9caf8dd251859 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000a690(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180023bd0; puVar1 < &DAT_180023bd0; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x18000a6d0; Evidence: ev_514eca20cabb12a75a4e8f41b9fffc95dc84fc1b35e6d9f4941b6b7a4c7fd952 */

undefined8 * FUN_18000a6d0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_18000b8bc((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x18000a70c; Evidence: ev_c4ea81ae5aadfad27469d518be3e1f0986613e49ef319361258f162335884ecb */

undefined8 * FUN_18000a70c(undefined8 *param_1,longlong param_2)

{
  longlong local_18;
  undefined1 local_10;
  
  local_10 = 1;
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  local_18 = param_2;
  FUN_18000b8bc(&local_18,param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x18000a754; Evidence: ev_441271d572052bfe4d782b628470892f8b238861c175541adca64fd58d2c2e8f */

undefined8 * FUN_18000a754(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_18000b8bc((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::logic_error::vftable;
  return param_1;
}


/* Address: 0x18000a790; Evidence: ev_6d03424079e4e368c3a00f91e192250a76d34fc8e3c710040696a97fc160fa0e */

void FUN_18000a790(longlong param_1)

{
  longlong local_28 [5];
  
  FUN_18000a70c(local_28,param_1);
                    /* WARNING: Subroutine does not return */
  FUN_18000b964(local_28,&DAT_180025ef8);
}


/* Address: 0x18000a7b4; Evidence: ev_5ebb1f31b8c6fe008948cae70da341ebeb40f235b557b604097f9caa2603ab0e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000a7b4(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_18000babc();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x18000a808; Evidence: ev_f95dbd1ddbff00a0f80b8c3a2447638b8d9eb3b9b5f143e675b2496726fc3559 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000a808(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_18000babc();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x18000a85c; Evidence: ev_0b492c95b2c4b5e45f9ed1915cf111c1e4e193bb8939a3e667bdecb6f1b18ceb */

longlong FUN_18000a85c(longlong param_1,int param_2)

{
  uint uVar1;
  longlong lVar2;
  
  uVar1 = *(uint *)(param_1 + 0xc);
  do {
    if (uVar1 == 0) {
      return 0;
    }
    uVar1 = uVar1 - 1;
    lVar2 = FUN_18000babc();
    lVar2 = (longlong)*(int *)(param_1 + 0x10) +
            *(longlong *)(lVar2 + 0x60) + (ulonglong)uVar1 * 0x14;
  } while ((param_2 <= *(int *)(lVar2 + 4)) || (*(int *)(lVar2 + 8) < param_2));
  return lVar2;
}


/* Address: 0x18000a8c0; Evidence: ev_f5cabf86d1ae03900a9342fc16b7890396084751d51f513476f46a20d3e1da07 */

longlong FUN_18000a8c0(byte *param_1,byte *param_2,longlong param_3,int param_4,char param_5)

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
    pbVar11 = pbVar11 + -(longlong)(char)(&DAT_18001b448)[bVar4 & 0xf];
    *(uint *)(param_2 + 4) = *(uint *)(pbVar11 + -4) >> ((&DAT_18001b458)[bVar4 & 0xf] & 0x1f);
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
      pbVar11 = (byte *)(param_3 + *(int *)pbVar11) + -(longlong)(char)(&DAT_18001b448)[uVar8];
      puVar1 = (uint *)(pbVar11 + -4);
      if (*puVar1 >> ((&DAT_18001b458)[uVar8] & 0x1f) != 0) {
        do {
          iVar6 = *(int *)pbVar11;
          pbVar2 = pbVar11 + 4;
          pbVar11 = pbVar11 + 8;
          if (iVar6 == param_4) {
            *(undefined4 *)(param_2 + 0x10) = *(undefined4 *)pbVar2;
            break;
          }
          uVar9 = uVar9 + 1;
        } while (uVar9 < *puVar1 >> ((&DAT_18001b458)[uVar8] & 0x1f));
      }
    }
  }
  else {
    *(undefined4 *)(param_2 + 0x10) = *(undefined4 *)pbVar11;
  }
  if ((bVar3 & 1) != 0) {
    bVar3 = *pbVar10;
    pbVar10 = pbVar10 + -(longlong)(char)(&DAT_18001b448)[bVar3 & 0xf];
    *(uint *)(param_2 + 0x14) = *(uint *)(pbVar10 + -4) >> ((&DAT_18001b458)[bVar3 & 0xf] & 0x1f);
  }
  return (longlong)pbVar10 - (longlong)param_1;
}


/* Address: 0x18000a9ec; Evidence: ev_c3a501b76f4e15d5a156edbc6b76ea658613a221ebcb5504ada7c78aa9dc5b5c */

bool FUN_18000a9ec(ulonglong *param_1,longlong param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = FUN_18000bcb0(param_2,param_1);
  lVar2 = FUN_18000a85c(param_2,iVar1);
  return lVar2 != 0;
}


/* Address: 0x18000aa18; Evidence: ev_8f978725e04cb9a9025fdad02809697b2f338518db0b43402beca59cea9e2547 */

byte FUN_18000aa18(undefined8 param_1,byte *param_2)

{
  return *param_2 & 1;
}


/* Address: 0x18000aa20; Evidence: ev_ad5be452e2df5e6152f6af260739373c32d40be97ee186338b01a043e3196fdb */

/* Library Function - Single Match
    public: static void __cdecl __FrameHandler3::FrameUnwindToEmptyState(unsigned __int64 *
   __ptr64,struct _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl
__FrameHandler3::FrameUnwindToEmptyState
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,_s_FuncInfo *param_3)

{
  int iVar1;
  __uint64 *p_Var2;
  longlong lVar3;
  longlong local_res20;
  
  p_Var2 = (__uint64 *)
           FUN_18000aab8((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000bcb0((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_18000a85c((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_18000e49c(p_Var2,(ulonglong *)param_2,param_3,iVar1);
  return;
}


/* Address: 0x18000aa84; Evidence: ev_a948c46952b10cee416095cb4b834beea761bcc8895c111aae9626ba962b698b */

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
  FUN_18000e628((longlong *)local_res8,(ulonglong *)param_2,(longlong)param_3,-1);
  return;
}


/* Address: 0x18000aab8; Evidence: ev_139f84c30d219f55a20e1d395d9e775bafb06eac2e52e92bc9c9a5ff8421ede7 */

longlong * FUN_18000aab8(longlong *param_1,ulonglong *param_2,longlong param_3,longlong *param_4)

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
  iVar4 = FUN_18000bcb0(param_3,param_2);
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
        if ((longlong)*piVar8 == (ulonglong)p_Var5->BeginAddress) goto LAB_18000ab69;
        uVar6 = (int)uVar7 + 1;
        uVar7 = (ulonglong)uVar6;
        piVar8 = piVar8 + 5;
      } while (uVar6 < uVar2);
    }
  } while (uVar2 <= (uint)uVar7);
LAB_18000ab69:
  *param_4 = *(longlong *)((longlong)*(int *)(lVar10 + 0x10 + uVar7 * 0x14) + *param_1);
  return param_4;
}


/* Address: 0x18000aba0; Evidence: ev_ced3243972a2a0e77c997c36808335feaeecc47429753635f8f34e42541e108c */

longlong * FUN_18000aba0(longlong *param_1,undefined8 param_2,byte *param_3,longlong *param_4)

{
  *param_4 = *param_1;
  if ((*param_3 & 1) != 0) {
    *param_4 = *(longlong *)((ulonglong)*(uint *)(param_3 + 0x14) + *param_1);
  }
  return param_4;
}


/* Address: 0x18000abc4; Evidence: ev_2a0932de8e31f8a3738f1661e022e497bf66e9ea8899651ea3ded77a9e9d7d2b */

undefined8 *
FUN_18000abc4(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
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
  iVar5 = FUN_18000bcb0(param_5,param_4);
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
LAB_18000ac4c:
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
  goto LAB_18000ac4c;
}


/* Address: 0x18000acfc; Evidence: ev_9240d6c458be5a343ccfaadf18910b3a55c25374d84baa4ee835e0beed3f8c12 */

undefined4 * FUN_18000acfc(undefined4 *param_1,int *param_2,int param_3)

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
  FUN_18000b0a0((longlong)param_2,(longlong)&local_38);
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
      lVar8 = (longlong)(char)(&DAT_18001b448)[*pbVar10 & 0xf];
      bVar1 = (&DAT_18001b458)[*pbVar10 & 0xf];
      pbVar5 = pbVar10 + -lVar8;
      uVar3 = *(uint *)(pbVar5 + -4);
      *(byte **)(param_2 + 2) = pbVar5;
      param_2[6] = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_18001b448)[*pbVar5 & 0xf];
      bVar1 = (&DAT_18001b458)[*pbVar5 & 0xf];
      pbVar5 = pbVar10 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar5 + -4);
      *(byte **)(param_2 + 2) = pbVar5;
      param_2[7] = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_18001b458)[*pbVar5 & 0xf];
      pbVar10 = pbVar10 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_18001b448)[*pbVar5 & 0xf]) -
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
  FUN_18000b0a0((longlong)param_2,(longlong)&local_38);
  *(int **)param_1 = param_2;
  param_1[2] = iVar11;
  param_1[3] = uStack_4c;
  *(int **)(param_1 + 4) = param_2;
  *(ulonglong *)(param_1 + 6) = CONCAT44(uStack_3c,iVar6 + 1);
  return param_1;
}


/* Address: 0x18000ae7c; Evidence: ev_ac224af8d071356470f263136d388eb13c311a6e494cf452fa20b3f6cd4068f6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000ae7c(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,ULONG_PTR param_6,int param_7,undefined8 param_8,
                  undefined8 param_9,undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_18000de20;
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


/* Address: 0x18000af80; Evidence: ev_cb10a198ba8c83e98d16c66a2b0e706d2a677bcb77a7bed96838f0d233518357 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000af80(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,undefined8 param_6,int param_7,int param_8,longlong param_9,
                  undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_18000e00c;
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


/* Address: 0x18000b0a0; Evidence: ev_94c2bb49d85850a39b43b7b2141bb56caccb2e1011745f560e5d966e24e9e990 */

void FUN_18000b0a0(longlong param_1,longlong param_2)

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
  pbVar7 = pbVar9 + -(longlong)(char)(&DAT_18001b448)[*pbVar9 & 0xf];
  *(uint *)(param_1 + 0x18) = *(uint *)(pbVar7 + -4) >> ((&DAT_18001b458)[*pbVar9 & 0xf] & 0x1f);
  *(byte **)(param_1 + 8) = pbVar7;
  bVar1 = (&DAT_18001b458)[*pbVar7 & 0xf];
  pbVar7 = pbVar7 + -(longlong)(char)(&DAT_18001b448)[*pbVar7 & 0xf];
  uVar3 = *(uint *)(pbVar7 + -4);
  *(byte **)(param_1 + 8) = pbVar7;
  *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
  bVar1 = (&DAT_18001b458)[*pbVar7 & 0xf];
  pbVar7 = pbVar7 + -(longlong)(char)(&DAT_18001b448)[*pbVar7 & 0xf];
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
      lVar8 = (longlong)(char)(&DAT_18001b448)[*pbVar9 & 0xf];
      bVar1 = (&DAT_18001b458)[*pbVar9 & 0xf];
      pbVar7 = pbVar9 + -lVar8;
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x18) = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_18001b448)[*pbVar7 & 0xf];
      bVar1 = (&DAT_18001b458)[*pbVar7 & 0xf];
      pbVar7 = pbVar9 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_18001b458)[*pbVar7 & 0xf];
      pbVar9 = pbVar9 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_18001b448)[*pbVar7 & 0xf]) -
                        lVar8);
      uVar3 = *(uint *)(pbVar9 + -4);
      *(byte **)(param_1 + 8) = pbVar9;
      *(uint *)(param_1 + 0x20) = uVar3 >> (bVar1 & 0x1f);
      uVar5 = *(undefined4 *)pbVar9;
      pbVar9 = pbVar9 + 4;
      *(byte **)(param_1 + 8) = pbVar9;
      *(undefined4 *)(param_1 + 0x24) = uVar5;
      lVar8 = (longlong)(char)(&DAT_18001b448)[*pbVar9 & 0xf];
      bVar1 = (&DAT_18001b458)[*pbVar9 & 0xf];
      pbVar7 = pbVar9 + -lVar8;
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x18) = uVar3 >> (bVar1 & 0x1f);
      cVar2 = (&DAT_18001b448)[*pbVar7 & 0xf];
      bVar1 = (&DAT_18001b458)[*pbVar7 & 0xf];
      pbVar7 = pbVar9 + (-lVar8 - (longlong)cVar2);
      uVar3 = *(uint *)(pbVar7 + -4);
      *(byte **)(param_1 + 8) = pbVar7;
      *(uint *)(param_1 + 0x1c) = uVar3 >> (bVar1 & 0x1f);
      bVar1 = (&DAT_18001b458)[*pbVar7 & 0xf];
      pbVar9 = pbVar9 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_18001b448)[*pbVar7 & 0xf]) -
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


/* Address: 0x18000b28c; Evidence: ev_3dc223587aa23763fd3392be439de2c75c4c4c639d82e88af910bbc22cf3d483 */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_18000babc();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_18000babc();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_18000babc();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}


/* Address: 0x18000b2c8; Evidence: ev_75f98dc93fd1dece6ab6bcf807ac8701a585f298922763edcbda16288065e967 */

void FUN_18000b2c8(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_18000babc();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_18000babc();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_18000babc();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000b31c; Evidence: ev_3a6cb2d7996450ef2d83fc2011b6128f514cda7bd0cdb93b8446fc6fc99e9fe5 */

undefined8 FUN_18000b31c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  return *(undefined8 *)(lVar1 + 0x60);
}


/* Address: 0x18000b330; Evidence: ev_eccf33efaf70e2cd618ed9a89ffcbcad961d05e1c513c8f0d61b0af9811808ac */

undefined8 FUN_18000b330(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  return *(undefined8 *)(lVar1 + 0x68);
}


/* Address: 0x18000b344; Evidence: ev_aa3ac51867cc87cc9c8cf6e29155f78e3c0d1f9d7d82d605e7f82248f413674b */

void FUN_18000b344(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  *(undefined8 *)(lVar1 + 0x60) = param_1;
  return;
}


/* Address: 0x18000b35c; Evidence: ev_57db8b1bf878d11146f29bd6e64852c68fb9431571cdbd619dc4e7f4fd132dd7 */

void FUN_18000b35c(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  *(undefined8 *)(lVar1 + 0x68) = param_1;
  return;
}


/* Address: 0x18000b374; Evidence: ev_adcee95ca02a35b8e57827ad945dae3e07e5c4ac73db81895603388fa7ecd249 */

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
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_18000babc();
  thunk_FUN_18000d72c(param_1,&local_res8,param_3,param_4,
                      (_s_FuncInfo *)
                      ((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),0,0,0);
  return;
}


/* Address: 0x18000b3fc; Evidence: ev_ca655a5055409ef2b7890ec69c9a395d6965142a35a55d8bc4a8e856a90dde05 */

void FUN_18000b3fc(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

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
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_18000babc();
  FUN_18000a8c0((byte *)((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),
                (byte *)local_28,*(longlong *)(param_4 + 8),**(int **)(param_4 + 0x10),'\0');
  FUN_18000dc0c(param_1,&local_res8,param_3,param_4,local_28,0,0,0);
  return;
}


/* Address: 0x18000b4c4; Evidence: ev_a17d14f2c3d4974b69ddfac70e481f5e2ea923b2fd99c3a93badebe1192a720f */

undefined8 FUN_18000b4c4(void)

{
  return DAT_1800293a0;
}


/* Address: 0x18000b4d0; Evidence: ev_83ce6fd6870c84bd7f3b6a026d0cdf79a0d1ae7ebd9d6e9f83ded129dcd260d8 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b4d0(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000b4c4();
  if (pcVar1 != (code *)0x0) {
    (*pcVar1)();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000b4ec; Evidence: ev_878179a584e66f786cf98577d7223b952f6ffc84d70e762bb84a5e1e69c4298c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b4ec(int *param_1)

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
      FUN_18000b560(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}


/* Address: 0x18000b560; Evidence: ev_6b58b0ae82be8d6fe7a4cf839578c16cfe0ba76f78fa145c2d1389559497125f */

void FUN_18000b560(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b560. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000b564; Evidence: ev_a8d282115060dad8551fea18bb1a33f95ac14fb6a87b1e593fa5d20a8ce21d3b */

/* Library Function - Single Match
    _IsExceptionObjectToBeDestroyed
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _IsExceptionObjectToBeDestroyed(longlong param_1)

{
  longlong lVar1;
  longlong *plVar2;
  
  lVar1 = FUN_18000babc();
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


/* Address: 0x18000b594; Evidence: ev_0858657043dc409c5d4a80d1d589698b5c302a510aa5dfbcb6eaa947a26c5a33 */

/* Library Function - Single Match
    __AdjustPointer
   
   Library: Visual Studio */

longlong __AdjustPointer(longlong param_1,int *param_2)

{
  longlong lVar1;
  
  lVar1 = *param_2 + param_1;
  if (-1 < param_2[1]) {
    lVar1 = lVar1 + (longlong)*(int *)((longlong)param_2[2] + *(longlong *)(param_2[1] + param_1)) +
                    (longlong)param_2[1];
  }
  return lVar1;
}


/* Address: 0x18000b5b8; Evidence: ev_c8d8bd74f030d114ebad2258244b16ade45b5785af0edd07e21c3536c14c635c */

undefined8 FUN_18000b5b8(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_18000babc();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_18000babc();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_18000babc();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_18000babc();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_180010adc();
  }
  return 0;
}


/* Address: 0x18000b620; Evidence: ev_37a6218e5c33e41b868f6c1254c7a8d25ef262505b8a2062f897f246c81cbe38 */

void Unwind_18000b620(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_180010adc();
}


/* Address: 0x18000b62c; Evidence: ev_e7d509551d87b4225f452c69ddbbf8edffde1f17b1f167163053ecac56374596 */

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


/* Address: 0x18000b654; Evidence: ev_6f79116a56964757be8489dff19402dd2bd1030cd008caf875a9848729459ba3 */

bool FUN_18000b654(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_18000bad8();
  return pvVar1 != (LPVOID)0x0;
}


/* Address: 0x18000b668; Evidence: ev_28276527e0170b6fb166dc9718bbe2abf30a694cb45b40b65390cc478a7a463a */

undefined1 FUN_18000b668(void)

{
  FUN_18000ba74();
  return 1;
}


/* Address: 0x18000b678; Evidence: ev_4403a7644d91b5b5677b1e25e94c0aa866fa70cab99d689a90837da822195485 */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_18000bbec();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000b694; Evidence: ev_2953e3047ad3af022ecead25271116ccdf80dc24641b9b85845a78eb2775867e */

undefined1 FUN_18000b694(void)

{
  FUN_18000bbec();
  return 1;
}


/* Address: 0x18000b6a4; Evidence: ev_4b5217db22e6235dfed3ac2fa42d4500fc0ce4698879c7931b0143347897319c */

undefined8 FUN_18000b6a4(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

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
          if (iVar4 < 1) goto LAB_18000b7cb;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_180018440(0x18001b5a8), (int)uVar5 != 0)) {
          FUN_18000b4ec((int *)param_1);
        }
        FUN_18000ee30();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_18000ee60();
      }
LAB_18000b7cb:
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


/* Address: 0x18000b8bc; Evidence: ev_7343cc663232d82e8b8493082595c5623fc96da0bf1f277146086360696bd157 */

void FUN_18000b8bc(longlong *param_1,longlong *param_2)

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
      FUN_180010b60(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_1800116e0((LPVOID)0x0);
  }
  return;
}


/* Address: 0x18000b93c; Evidence: ev_c6d2f68b9b82bb2f523332ba0eb5ea980e08e23f8bb6fe89a5abaec8d4ed2102 */

void FUN_18000b93c(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_1800116e0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}


/* Address: 0x18000b964; Evidence: ev_5c634468578c3cf6b224dc13781d5f45d396ff41932976c8716eaa3cd4b5333d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b964(longlong *param_1,byte *param_2)

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


/* Address: 0x18000ba10; Evidence: ev_689fd91c693fdfc4b01318c4b960837f0ae36274e7a8c416aff490e6aaea20c3 */

int FUN_18000ba10(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}


/* Address: 0x18000ba28; Evidence: ev_6991367f7e676be9c1a5afa4b807f328ca39a49d6a493c541a710301f218b26e */

void FUN_18000ba28(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_1800116e0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}


/* Address: 0x18000ba54; Evidence: ev_25ced72bf7c92135b6ca92a152edbcf275bf7595fa5faef9ab6f588a1ac492b5 */

void FUN_18000ba54(undefined *param_1)

{
  if ((param_1 != (undefined *)0x0) && (param_1 != &DAT_180029320)) {
    thunk_FUN_1800116e0(param_1);
  }
  return;
}


/* Address: 0x18000ba74; Evidence: ev_6b37ba29361e6a94bcb6d68630ecb0680ae4a75554e2caedf9abdf1a4968912c */

void FUN_18000ba74(void)

{
  undefined *puVar1;
  
  if (DAT_1800280b0 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_1800280b0);
    __vcrt_FlsSetValue(DAT_1800280b0,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_180029320)) {
      thunk_FUN_1800116e0(puVar1);
    }
  }
  return;
}


/* Address: 0x18000babc; Evidence: ev_71221c4ff242be9f7c32f52b4138f30dd48f69392e3d8c725b6cec6b6acc441e */

void FUN_18000babc(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_18000bad8();
  if (pvVar1 != (LPVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000bad8; Evidence: ev_d02f28d5a7feaa385d33aaa1c2b309101469d75ef0649bab000e3a1207f5f457 */

LPVOID FUN_18000bad8(void)

{
  DWORD dwErrCode;
  int iVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  LPVOID pvVar4;
  
  if (DAT_1800280b0 == 0xffffffff) {
    pvVar3 = (LPVOID)0x0;
  }
  else {
    dwErrCode = GetLastError();
    pvVar2 = (LPVOID)__vcrt_FlsGetValue(DAT_1800280b0);
    pvVar4 = (LPVOID)0x0;
    pvVar3 = pvVar4;
    if (((pvVar2 != (LPVOID)0xffffffffffffffff) && (pvVar3 = pvVar2, pvVar2 == (LPVOID)0x0)) &&
       (iVar1 = __vcrt_FlsSetValue(DAT_1800280b0,(LPVOID)0xffffffffffffffff), pvVar3 = pvVar4,
       iVar1 != 0)) {
      pvVar3 = _calloc_base(1,0x80);
      if ((pvVar3 == (LPVOID)0x0) || (iVar1 = __vcrt_FlsSetValue(DAT_1800280b0,pvVar3), iVar1 == 0))
      {
        __vcrt_FlsSetValue(DAT_1800280b0,(LPVOID)0x0);
        pvVar2 = pvVar3;
      }
      else {
        *(undefined4 *)((longlong)pvVar3 + 0x78) = 0xfffffffe;
        pvVar2 = pvVar4;
        pvVar4 = pvVar3;
      }
      thunk_FUN_1800116e0(pvVar2);
      pvVar3 = pvVar4;
    }
    SetLastError(dwErrCode);
  }
  return pvVar3;
}


/* Address: 0x18000bba4; Evidence: ev_6f003c7af77723913f77e8e784314913c3d5dbb6d69ccc04c52834f248b657d7 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_18000ba54);
  DAT_1800280b0 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_180029320);
    if (iVar2 != 0) {
      _DAT_180029398 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_18000bbec();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}


/* Address: 0x18000bbec; Evidence: ev_57e62998017580427c1d6a600690aa93a7f87bceeec8b2fa6169ace15f5affa3 */

undefined1 FUN_18000bbec(void)

{
  if (DAT_1800280b0 != -1) {
    __vcrt_FlsFree(DAT_1800280b0);
    DAT_1800280b0 = -1;
  }
  return 1;
}


/* Address: 0x18000bc14; Evidence: ev_0caa3c4aa6e64b4b7777046cd6bdf0165101caad07c1b481e5db97c15ad91912 */

void FUN_18000bc14(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + *param_1) == -2) {
    FUN_18000bcc0(param_3,(longlong)param_2,*param_2);
  }
  return;
}


/* Address: 0x18000bc3c; Evidence: ev_ddea3cdfd5b0ae442434742ca75fe3e36eafd4e3fd51f5495767cd01f8b22854 */

/* Library Function - Single Match
    public: static int __cdecl __FrameHandler3::GetUnwindTryBlock(unsigned __int64 * __ptr64,struct
   _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl
__FrameHandler3::GetUnwindTryBlock
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,_s_FuncInfo *param_3)

{
  longlong *plVar1;
  longlong local_res18 [2];
  
  plVar1 = FUN_18000aab8((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,local_res18);
  return *(int *)((longlong)param_3->dispUnwindHelp + 4 + *plVar1);
}


/* Address: 0x18000bc68; Evidence: ev_9674b90bf8f92cb7300d583081b49cc7156448be04308abab7b294cf3e441ee5 */

/* Library Function - Single Match
    public: static void __cdecl __FrameHandler3::SetState(unsigned __int64 * __ptr64,struct
   _s_FuncInfo const * __ptr64,int)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl __FrameHandler3::SetState(__uint64 *param_1,_s_FuncInfo *param_2,int param_3)

{
  *(int *)((longlong)param_2->dispUnwindHelp + *param_1) = param_3;
  return;
}


/* Address: 0x18000bc74; Evidence: ev_3ade1e5ac65b8be35dced27f0652a4f56ebd0d0965b89064b9d828ee43839e98 */

/* Library Function - Single Match
    public: static void __cdecl __FrameHandler3::SetUnwindTryBlock(unsigned __int64 * __ptr64,struct
   _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64,int)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl
__FrameHandler3::SetUnwindTryBlock
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,_s_FuncInfo *param_3,int param_4)

{
  longlong *plVar1;
  longlong local_res18 [2];
  
  plVar1 = FUN_18000aab8((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,local_res18);
  if (*(int *)((longlong)param_3->dispUnwindHelp + 4 + *plVar1) < param_4) {
    *(int *)((longlong)param_3->dispUnwindHelp + 4 + *plVar1) = param_4;
  }
  return;
}


/* Address: 0x18000bcb0; Evidence: ev_005c0b6a4f91123e3fe6c4393ca8e16dfb1c2e8be500d6baaed959714f14fdfc */

void FUN_18000bcb0(longlong param_1,ulonglong *param_2)

{
  FUN_18000bcc0(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x18000bcb8; Evidence: ev_bae93b857a084fc0b22bec380826830861bdbb9fd43382d8d0c717ed3e898fb8 */

void FUN_18000bcb8(longlong param_1,ulonglong *param_2)

{
  FUN_18000bd28(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x18000bcc0; Evidence: ev_fde36d0904af36092bd41ab3d469d282bbaf27a15d93927ea0bc457dadd73955 */

undefined4 FUN_18000bcc0(longlong param_1,longlong param_2,ulonglong param_3)

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


/* Address: 0x18000bd28; Evidence: ev_131075da3255f58d31c024936fcae8b90086e9f845f60860b4fedf9eaa8bea15 */

int FUN_18000bd28(longlong param_1,longlong param_2,ulonglong param_3)

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
    pbVar6 = pbVar6 + -(longlong)(char)(&DAT_18001b448)[uVar2];
    puVar1 = (uint *)(pbVar6 + -4);
    if (*puVar1 >> ((&DAT_18001b458)[uVar2] & 0x1f) != 0) {
      do {
        pbVar7 = pbVar6 + -(longlong)(char)(&DAT_18001b448)[*pbVar6 & 0xf];
        uVar4 = uVar4 + (*(uint *)(pbVar7 + -4) >> ((&DAT_18001b458)[*pbVar6 & 0xf] & 0x1f));
        if (param_3 < (ulonglong)uVar4 + (ulonglong)**(uint **)(param_2 + 0x10) +
                      *(longlong *)(param_2 + 8)) break;
        uVar5 = uVar5 + 1;
        pbVar6 = pbVar7 + -(longlong)(char)(&DAT_18001b448)[*pbVar7 & 0xf];
        iVar3 = (*(uint *)(pbVar6 + -4) >> ((&DAT_18001b458)[*pbVar7 & 0xf] & 0x1f)) - 1;
      } while (uVar5 < *puVar1 >> ((&DAT_18001b458)[uVar2] & 0x1f));
      if (uVar5 != 0) {
        return iVar3;
      }
      return -1;
    }
  }
  return -1;
}


/* Address: 0x18000be18; Evidence: ev_5b2799a2041f953136c403331115f2eabd8c86dabc7b3e2aa25f7dd38950daea */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_18000be18(longlong param_1,longlong *param_2,byte *param_3,byte *param_4)

{
  int iVar1;
  longlong lVar2;
  undefined8 *puVar3;
  ulonglong uVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  
  uVar5 = 0;
  uVar6 = 0;
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_18000b31c();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_18000b31c();
    uVar4 = iVar1 + lVar2;
  }
  if (*(char *)(uVar4 + 0x10) == '\0') {
    return '\0';
  }
  if ((*(int *)(param_3 + 8) == 0) && (-1 < *(int *)param_3)) {
    return '\0';
  }
  if (-1 < *(int *)param_3) {
    param_2 = (longlong *)((longlong)*(int *)(param_3 + 8) + *param_2);
  }
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_180029318 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_18000b330();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (longlong *)0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_18000b330();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_18000bfca;
            }
          }
                    /* WARNING: Subroutine does not return */
          abort();
        }
        if ((*(longlong *)(param_1 + 0x28) == 0) || (param_2 == (longlong *)0x0)) {
                    /* WARNING: Subroutine does not return */
          abort();
        }
        iVar1 = *(int *)(param_4 + 0x14);
        puVar3 = (undefined8 *)__AdjustPointer(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_180018c60(param_2,puVar3,(longlong)iVar1);
        goto LAB_18000bfca;
      }
      if ((*(undefined8 **)(param_1 + 0x28) == (undefined8 *)0x0) || (param_2 == (longlong *)0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_180018c60(param_2,*(undefined8 **)(param_1 + 0x28),(longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*param_2 == 0)) goto LAB_18000bfca;
      lVar2 = *param_2;
    }
    else {
      lVar2 = *(longlong *)(param_1 + 0x28);
      if ((lVar2 == 0) || (param_2 == (longlong *)0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      *param_2 = lVar2;
    }
  }
  else {
    lVar2 = (*(code *)DAT_180029318)();
    if ((lVar2 == 0) || (param_2 == (longlong *)0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *param_2 = lVar2;
  }
  lVar2 = __AdjustPointer(lVar2,(int *)(param_4 + 8));
  *param_2 = lVar2;
  uVar6 = uVar5;
LAB_18000bfca:
  return (char)uVar6;
}


/* Address: 0x18000c00c; Evidence: ev_fc5ba22371de8da254a09bc629305691323b6c3ff8ff50f0946aa45c8d5d0bcc */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_18000c00c(longlong param_1,longlong *param_2,longlong param_3,byte *param_4)

{
  int iVar1;
  longlong lVar2;
  undefined8 *puVar3;
  ulonglong uVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  
  uVar5 = 0;
  uVar6 = 0;
  iVar1 = *(int *)(param_3 + 8);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_18000b31c();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 8);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_18000b31c();
    uVar4 = iVar1 + lVar2;
  }
  if (*(char *)(uVar4 + 0x10) == '\0') {
    return '\0';
  }
  if ((*(int *)(param_3 + 0xc) == 0) && (-1 < *(int *)(param_3 + 4))) {
    return '\0';
  }
  if (-1 < *(int *)(param_3 + 4)) {
    param_2 = (longlong *)((ulonglong)*(uint *)(param_3 + 0xc) + *param_2);
  }
  if ((((*(byte *)(param_3 + 4) & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_180029318 == 0))
  {
    if ((*(byte *)(param_3 + 4) & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_18000b330();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (longlong *)0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_18000b330();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_18000c1c1;
            }
          }
                    /* WARNING: Subroutine does not return */
          abort();
        }
        if ((*(longlong *)(param_1 + 0x28) == 0) || (param_2 == (longlong *)0x0)) {
                    /* WARNING: Subroutine does not return */
          abort();
        }
        iVar1 = *(int *)(param_4 + 0x14);
        puVar3 = (undefined8 *)__AdjustPointer(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_180018c60(param_2,puVar3,(longlong)iVar1);
        goto LAB_18000c1c1;
      }
      if ((*(undefined8 **)(param_1 + 0x28) == (undefined8 *)0x0) || (param_2 == (longlong *)0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_180018c60(param_2,*(undefined8 **)(param_1 + 0x28),(longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*param_2 == 0)) goto LAB_18000c1c1;
      lVar2 = *param_2;
    }
    else {
      lVar2 = *(longlong *)(param_1 + 0x28);
      if ((lVar2 == 0) || (param_2 == (longlong *)0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      *param_2 = lVar2;
    }
  }
  else {
    lVar2 = (*(code *)DAT_180029318)();
    if ((lVar2 == 0) || (param_2 == (longlong *)0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *param_2 = lVar2;
  }
  lVar2 = __AdjustPointer(lVar2,(int *)(param_4 + 8));
  *param_2 = lVar2;
  uVar6 = uVar5;
LAB_18000c1c1:
  return (char)uVar6;
}


/* Address: 0x18000c204; Evidence: ev_d008f6d00c5742545c18b949dbf31d8e2b89c263be70899e97327bec7c1139fa */

void FUN_18000c204(longlong param_1,longlong *param_2,byte *param_3,byte *param_4)

{
  char cVar1;
  int iVar2;
  undefined7 extraout_var;
  longlong lVar3;
  longlong lVar4;
  undefined *UNRECOVERED_JUMPTABLE;
  longlong *plVar5;
  
  UNRECOVERED_JUMPTABLE = (undefined *)0x0;
  plVar5 = param_2;
  if (-1 < *(int *)param_3) {
    plVar5 = (longlong *)((longlong)*(int *)(param_3 + 8) + *param_2);
  }
  cVar1 = FUN_18000be18(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = __AdjustPointer(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_18000b330();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000ebdc(plVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = __AdjustPointer(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_18000b330();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000ebe8(plVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x18000c2c4; Evidence: ev_f9ade872ae316e0e838d4632c62f1b5a855e3b4cd419f856e5546e2077803c13 */

void FUN_18000c2c4(longlong param_1,longlong *param_2,longlong param_3,byte *param_4)

{
  char cVar1;
  int iVar2;
  undefined7 extraout_var;
  longlong lVar3;
  longlong lVar4;
  undefined *UNRECOVERED_JUMPTABLE;
  longlong *plVar5;
  
  UNRECOVERED_JUMPTABLE = (undefined *)0x0;
  plVar5 = param_2;
  if (-1 < *(int *)(param_3 + 4)) {
    plVar5 = (longlong *)((ulonglong)*(uint *)(param_3 + 0xc) + *param_2);
  }
  cVar1 = FUN_18000c00c(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = __AdjustPointer(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_18000b330();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000ebdc(plVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = __AdjustPointer(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_18000b330();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000ebe8(plVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x18000c388; Evidence: ev_3d6c4ae53abba60a4b475bb02dbd2dcd083cee89a5e9e677584aa2263c3d16b6 */

void FUN_18000c388(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
                  ULONG_PTR param_5,byte *param_6,byte *param_7,int *param_8)

{
  int iVar1;
  int iVar2;
  int iVar3;
  longlong *plVar4;
  longlong lVar5;
  longlong local_res10;
  ULONG_PTR local_res18;
  byte in_stack_00000060;
  undefined4 in_stack_ffffffffffffffa4;
  
  local_res18 = param_3;
  plVar4 = FUN_18000aab8(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_18000c204(param_1,plVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_18000b31c();
  FUN_18000ae7c(param_2,param_1,local_res18,(ULONG_PTR)plVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x18000c460; Evidence: ev_7878897233efe8258eda34627b8a7632b9957eaa351859b78c356837f5558233 */

void FUN_18000c460(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
                  byte *param_5,longlong param_6,byte *param_7,int *param_8)

{
  int iVar1;
  int iVar2;
  int iVar3;
  longlong *plVar4;
  longlong lVar5;
  longlong local_res10;
  ULONG_PTR local_res18;
  byte in_stack_00000060;
  
  local_res18 = param_3;
  plVar4 = FUN_18000aba0(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_18000c2c4(param_1,plVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0x10);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_18000b31c();
  FUN_18000af80(param_2,param_1,local_res18,(ULONG_PTR)plVar4,lVar5 + iVar1,param_5,iVar3,iVar2,
                param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x18000c538; Evidence: ev_3d548c4e537d9ee44d1e845d83a8f36dc8fd9341036b4ec1edb75865ba84005f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000c538(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
                  _s_FuncInfo *param_5,byte param_6,undefined8 param_7,longlong param_8)

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
  _s_FuncInfo *local_b0;
  undefined8 local_a8;
  longlong *local_a0;
  undefined8 uStack_98;
  longlong *local_90;
  undefined8 uStack_88;
  uint local_78;
  undefined8 local_70;
  undefined8 uStack_68;
  undefined4 local_60;
  ulonglong local_58;
  
  local_58 = DAT_180028040 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar5 = __FrameHandler3::GetHandlerSearchState(param_2,param_4,param_5);
  if ((-2 < iVar5) && (iVar5 < param_5->maxState)) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar7 = FUN_18000babc();
      if (*(longlong *)(lVar7 + 0x20) == 0) {
        return;
      }
      lVar7 = FUN_18000babc();
      param_1 = *(int **)(lVar7 + 0x20);
      lVar7 = FUN_18000babc();
      local_100 = *(ULONG_PTR *)(lVar7 + 0x28);
      FUN_18000b35c(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_18000ca21;
      lVar7 = FUN_18000babc();
      if (*(longlong *)(lVar7 + 0x38) != 0) {
        lVar7 = FUN_18000babc();
        piVar11 = *(int **)(lVar7 + 0x38);
        lVar7 = FUN_18000babc();
        *(undefined8 *)(lVar7 + 0x38) = 0;
        cVar3 = FUN_18000e9cc((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          uVar8 = FUN_18000eab4(piVar11);
          if ((char)uVar8 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_180010adc();
          }
          FUN_18000b4ec(param_1);
          FUN_18000ddfc(&local_c8);
                    /* WARNING: Subroutine does not return */
          FUN_18000b964(&local_c8,&DAT_180025f60);
        }
      }
    }
    uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
    local_a8 = *(undefined8 *)(param_4 + 8);
    local_b0 = param_5;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
      if (param_5->nTryBlocks != 0) {
        FUN_18000abc4(&local_90,&local_b0,iVar5,(ulonglong *)param_4,(longlong)param_5);
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
              local_d0 = (longlong)local_b8 + *(longlong *)(param_4 + 8);
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
                  lVar7 = FUN_18000b330();
                  piVar11 = (int *)(lVar7 + 4 + (longlong)iVar13);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_18000b330();
                  for (iVar13 = *(int *)(lVar7 + iVar13); 0 < iVar13; iVar13 = iVar13 + -1) {
                    iVar2 = *piVar11;
                    lVar7 = FUN_18000b330();
                    uVar9 = FUN_18000d4cc((byte *)&local_70,(byte *)(iVar2 + lVar7),
                                          *(byte **)(param_1 + 0xc));
                    if ((int)uVar9 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_18000c388((ULONG_PTR)param_1,(longlong *)param_2,local_100,
                                    (ulonglong *)param_4,(ULONG_PTR)param_5,(byte *)&local_70,
                                    (byte *)(iVar2 + lVar7),in_stack_fffffffffffffed0);
                      goto LAB_18000c89d;
                    }
                    piVar11 = piVar11 + 1;
                  }
                  uVar12 = (int)uVar8 + 1;
                  uVar8 = (ulonglong)uVar12;
                } while (uVar12 != local_d8);
              }
            }
LAB_18000c89d:
            uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar6 = uVar6 + 1;
          } while (uVar6 < local_78);
        }
      }
      if ((0x19930520 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
         (((iVar5 = param_5->dispESTypeList, iVar5 != 0 &&
           (lVar7 = FUN_18000b31c(), lVar7 + iVar5 != 0)) ||
          (((param_5->EHFlags & 4) != 0 &&
           (bVar4 = FUN_18000a9ec((ulonglong *)param_4,(longlong)param_5), !bVar4)))))) {
        if ((param_5->EHFlags & 4) != 0) {
          lVar7 = FUN_18000babc();
          *(int **)(lVar7 + 0x20) = param_1;
          lVar7 = FUN_18000babc();
          *(ULONG_PTR *)(lVar7 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_180010adc();
        }
        iVar5 = param_5->dispESTypeList;
        if (iVar5 == 0) {
          piVar11 = (int *)0x0;
        }
        else {
          lVar7 = FUN_18000b31c();
          piVar11 = (int *)(iVar5 + lVar7);
        }
        cVar3 = FUN_18000e9cc((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          plVar10 = FUN_18000aab8((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,
                                  &local_e0);
          FUN_18000ae7c(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar10,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar14,0xffffffff),0,(undefined8 *)param_4,param_6);
        }
      }
    }
    else if (param_5->nTryBlocks != 0) {
      if (param_6 != 0) goto LAB_18000ca21;
      FUN_18000cf60(param_1,(longlong *)param_2,local_100,(ulonglong *)param_4,(ULONG_PTR)param_5,
                    iVar5);
    }
    lVar7 = FUN_18000babc();
    if (*(longlong *)(lVar7 + 0x38) == 0) {
      return;
    }
  }
LAB_18000ca21:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000ca28; Evidence: ev_7c2ebaf886ce8021726e99566201800ac4698a7f650f74efb79288940a7d028e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000ca28(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,byte *param_5
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
  
  local_58 = DAT_180028040 ^ (ulonglong)auStackY_1c8;
  local_128 = param_8;
  local_120 = param_2;
  iVar7 = FUN_18000bcb8((longlong)param_5,param_4);
  if ((int)param_4[9] == 0) {
    lVar8 = FUN_18000babc();
    if (*(int *)(lVar8 + 0x78) != -2) {
      lVar8 = FUN_18000babc();
      iVar7 = *(int *)(lVar8 + 0x78);
      lVar8 = FUN_18000babc();
      *(undefined4 *)(lVar8 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar8 = FUN_18000babc();
    if (*(int *)(lVar8 + 0x78) != -2) goto LAB_18000cf59;
    iVar7 = (int)param_4[9] + -2;
  }
  if (-2 < iVar7) {
    if (*(int *)(param_5 + 8) == 0) {
      uVar11 = 0;
    }
    else {
      uVar11 = *(byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) & 0xf;
      uVar11 = *(uint *)((byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_18001b448)[uVar11])) >>
               ((&DAT_18001b458)[uVar11] & 0x1f);
    }
    if (iVar7 < (int)uVar11) {
      local_158 = param_3;
      if ((((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
          ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
         (*(longlong *)(param_1 + 0xc) == 0)) {
        lVar8 = FUN_18000babc();
        if (*(longlong *)(lVar8 + 0x20) == 0) {
          return;
        }
        lVar8 = FUN_18000babc();
        param_1 = *(int **)(lVar8 + 0x20);
        lVar8 = FUN_18000babc();
        local_158 = *(ULONG_PTR *)(lVar8 + 0x28);
        FUN_18000b35c(*(undefined8 *)(param_1 + 0xe));
        if ((param_1 == (int *)0x0) ||
           (((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
            (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
             (*(longlong *)(param_1 + 0xc) == 0)))))) goto LAB_18000cf59;
        lVar8 = FUN_18000babc();
        if (*(longlong *)(lVar8 + 0x38) != 0) {
          lVar8 = FUN_18000babc();
          piVar16 = *(int **)(lVar8 + 0x38);
          lVar8 = FUN_18000babc();
          *(undefined8 *)(lVar8 + 0x38) = 0;
          cVar5 = FUN_18000e9cc((longlong)param_1,piVar16);
          if (cVar5 == '\0') {
            uVar9 = FUN_18000eab4(piVar16);
            if ((char)uVar9 != '\0') {
              FUN_18000b4ec(param_1);
              FUN_18000ddfc(&local_140);
                    /* WARNING: Subroutine does not return */
              FUN_18000b964(&local_140,&DAT_180025f60);
            }
                    /* WARNING: Subroutine does not return */
            FUN_180010adc();
          }
        }
      }
      FUN_18000dcdc(local_d0,(longlong)param_5,param_4[1]);
      if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
         ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
        if (local_d0[0] != 0) {
          FUN_18000acfc((undefined4 *)&local_118,(int *)local_d0,iVar7);
          uVar11 = (uint)uStack_110;
          local_140 = local_118;
          uStack_138 = uStack_110;
          if (uVar11 < local_100) {
            do {
              local_140 = *(longlong *)(local_118 + 0x18);
              uStack_138 = *(undefined8 *)(local_118 + 0x20);
              if ((*(int *)(local_118 + 0x18) <= iVar7) && (iVar7 <= *(int *)(local_118 + 0x1c))) {
                FUN_18000dc58((HandlerMap4 *)local_a8,(longlong)&local_140,param_4[1],
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
                    lVar8 = FUN_18000b330();
                    piVar16 = (int *)((longlong)iVar15 + lVar8 + 4);
                    iVar15 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                    lVar8 = FUN_18000b330();
                    for (iVar15 = *(int *)(lVar8 + iVar15); 0 < iVar15; iVar15 = iVar15 + -1) {
                      iVar1 = *piVar16;
                      lVar8 = FUN_18000b330();
                      uVar10 = FUN_18000d5ec((longlong)&local_f8,(byte *)(iVar1 + lVar8),
                                             *(byte **)(param_1 + 0xc));
                      if ((int)uVar10 != 0) {
                        FUN_18000c460((ULONG_PTR)param_1,local_120,local_158,param_4,param_5,
                                      (longlong)&local_f8,(byte *)(iVar1 + lVar8),(int *)&local_140)
                        ;
                        goto LAB_18000cde8;
                      }
                      piVar16 = piVar16 + 1;
                    }
                    FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_a8);
                    local_160 = local_160 + 1;
                  } while (local_160 != iVar4);
                }
              }
LAB_18000cde8:
              pbVar14 = *(byte **)(local_118 + 8);
              uVar11 = uVar11 + 1;
              lVar8 = (longlong)(char)(&DAT_18001b448)[*pbVar14 & 0xf];
              bVar6 = (&DAT_18001b458)[*pbVar14 & 0xf];
              pbVar12 = pbVar14 + -lVar8;
              uVar2 = *(uint *)(pbVar12 + -4);
              *(byte **)(local_118 + 8) = pbVar12;
              *(uint *)(local_118 + 0x18) = uVar2 >> (bVar6 & 0x1f);
              cVar5 = (&DAT_18001b448)[*pbVar12 & 0xf];
              pbVar13 = pbVar14 + (-lVar8 - (longlong)cVar5);
              *(uint *)(local_118 + 0x1c) =
                   *(uint *)(pbVar13 + -4) >> ((&DAT_18001b458)[*pbVar12 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar13;
              pbVar14 = pbVar14 + ((-(longlong)cVar5 -
                                   (longlong)(char)(&DAT_18001b448)[*pbVar13 & 0xf]) - lVar8);
              *(uint *)(local_118 + 0x20) =
                   *(uint *)(pbVar14 + -4) >> ((&DAT_18001b458)[*pbVar13 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar14;
              uVar3 = *(undefined4 *)pbVar14;
              *(byte **)(local_118 + 8) = pbVar14 + 4;
              *(undefined4 *)(local_118 + 0x24) = uVar3;
            } while (uVar11 < local_100);
          }
        }
        if (((*param_5 & 0x40) != 0) && (bVar6 = FUN_18000aa18(param_4,param_5), bVar6 == 0)) {
          lVar8 = FUN_18000babc();
          *(int **)(lVar8 + 0x20) = param_1;
          lVar8 = FUN_18000babc();
          *(ULONG_PTR *)(lVar8 + 0x28) = local_158;
                    /* WARNING: Subroutine does not return */
          FUN_180010adc();
        }
      }
      else if (local_d0[0] != 0) {
        if (param_6 != '\0') goto LAB_18000cf59;
        FUN_18000d1c4(param_1,param_2,local_158,param_4,param_5,iVar7);
      }
      lVar8 = FUN_18000babc();
      if (*(longlong *)(lVar8 + 0x38) == 0) {
        return;
      }
    }
  }
LAB_18000cf59:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000cf60; Evidence: ev_bbdc2317711c1ba633de5cd5359823e0e5f0d0dd8d480f33722e39913395f59f */

void FUN_18000cf60(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
    lVar3 = FUN_18000babc();
    if (*(longlong *)(lVar3 + 0x10) != 0) {
      pvVar4 = EncodePointer((PVOID)0x0);
      lVar3 = FUN_18000babc();
      if ((((*(PVOID *)(lVar3 + 0x10) != pvVar4) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar1 = FUN_18000a7b4(param_1,param_2,param_3), iVar1 != 0)
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
    FUN_18000abc4(&local_60,&local_98,param_6,param_4,param_5);
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
          if ((iVar1 != 0) && (lVar3 = FUN_18000b31c(), lVar3 + iVar1 != 0)) {
            iVar1 = *(int *)(pbVar5 + 4);
            if (iVar1 == 0) {
              lVar3 = 0;
            }
            else {
              lVar3 = FUN_18000b31c();
              lVar3 = lVar3 + iVar1;
            }
            if (*(char *)(lVar3 + 0x10) != '\0') goto LAB_18000d189;
          }
          if ((*pbVar5 & 0x40) == 0) {
            FUN_18000c388((ULONG_PTR)param_1,param_2,param_3,param_4,param_5,pbVar5,(byte *)0x0,
                          (int *)local_78);
          }
        }
LAB_18000d189:
        uVar2 = uVar2 + 1;
      } while (uVar2 < local_48);
    }
  }
  return;
}


/* Address: 0x18000d1c4; Evidence: ev_acd0f16e5388c9c3960ba22e6ff4eca3d26f9eb62b984d247541fe485469036c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000d1c4(int *param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
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
  
  local_50 = DAT_180028040 ^ (ulonglong)auStackY_178;
  if (*param_1 != -0x7ffffffd) {
    local_f0 = param_2;
    lVar5 = FUN_18000babc();
    if (*(longlong *)(lVar5 + 0x10) != 0) {
      pvVar6 = EncodePointer((PVOID)0x0);
      lVar5 = FUN_18000babc();
      if ((((*(PVOID *)(lVar5 + 0x10) != pvVar6) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar4 = FUN_18000a808(param_1,param_2,param_3), iVar4 != 0)
         ) {
        return;
      }
    }
    FUN_18000dcdc(local_78,(longlong)param_5,param_4[1]);
    if (local_78[0] == 0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    FUN_18000acfc((undefined4 *)&local_e8,(int *)local_78,param_6);
    local_118 = uStack_e0;
    if (uStack_e0 < local_d0) {
      do {
        local_100 = *(undefined8 *)(local_e8 + 0x18);
        uStack_f8 = *(undefined8 *)(local_e8 + 0x20);
        if ((*(int *)(local_e8 + 0x18) <= param_6) && (param_6 <= *(int *)(local_e8 + 0x1c))) {
          FUN_18000dc58((HandlerMap4 *)local_c8,(longlong)&local_100,param_4[1],
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
          if ((local_a8 != 0) && (lVar7 = FUN_18000b31c(), lVar7 + lVar5 != 0)) {
            lVar5 = (longlong)local_a8;
            if (local_a8 == 0) {
              lVar7 = 0;
            }
            else {
              lVar7 = FUN_18000b31c();
              lVar7 = lVar7 + lVar5;
            }
            if (*(char *)(lVar7 + 0x10) != '\0') goto LAB_18000d3f8;
          }
          if ((local_ac & 0x40) == 0) {
            FUN_18000c460((ULONG_PTR)param_1,local_f0,param_3,param_4,param_5,(longlong)local_b0,
                          (byte *)0x0,(int *)&local_100);
          }
        }
LAB_18000d3f8:
        pbVar11 = *(byte **)(local_e8 + 8);
        lVar5 = (longlong)(char)(&DAT_18001b448)[*pbVar11 & 0xf];
        bVar1 = (&DAT_18001b458)[*pbVar11 & 0xf];
        pbVar8 = pbVar11 + -lVar5;
        uVar3 = *(uint *)(pbVar8 + -4);
        *(byte **)(local_e8 + 8) = pbVar8;
        *(uint *)(local_e8 + 0x18) = uVar3 >> (bVar1 & 0x1f);
        cVar2 = (&DAT_18001b448)[*pbVar8 & 0xf];
        pbVar9 = pbVar11 + (-lVar5 - (longlong)cVar2);
        *(uint *)(local_e8 + 0x1c) =
             *(uint *)(pbVar9 + -4) >> ((&DAT_18001b458)[*pbVar8 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar9;
        pbVar11 = pbVar11 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_18001b448)[*pbVar9 & 0xf]) -
                            lVar5);
        *(uint *)(local_e8 + 0x20) =
             *(uint *)(pbVar11 + -4) >> ((&DAT_18001b458)[*pbVar9 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar11;
        *(undefined4 *)(local_e8 + 0x24) = *(undefined4 *)pbVar11;
        local_118 = local_118 + 1;
        *(byte **)(local_e8 + 8) = pbVar11 + 4;
      } while (local_118 < local_d0);
    }
  }
  return;
}


/* Address: 0x18000d4cc; Evidence: ev_2650ed99517600b4edbd3c60c5acd0512199679366edb70752d000eec99cbb4b */

undefined8 FUN_18000d4cc(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_18000b31c(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_18000b31c();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_18000b31c();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_18000b330();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_18000b31c();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_18000b330();
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


/* Address: 0x18000d5ec; Evidence: ev_f20e5c4e334ff32bdd324fefb65f7f0c050200cb557c18b1cb0922de84800e34 */

undefined8 FUN_18000d5ec(longlong param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  byte *pbVar5;
  
  iVar1 = *(int *)(param_1 + 8);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_18000b31c(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 8);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_18000b31c();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') &&
       (((*(byte *)(param_1 + 4) & 0x80) == 0 || ((*param_2 & 0x10) == 0)))) {
      iVar1 = *(int *)(param_1 + 8);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_18000b31c();
        lVar2 = iVar1 + lVar2;
      }
      lVar3 = FUN_18000b330();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 8);
        if (iVar1 != 0) {
          lVar4 = FUN_18000b31c();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_18000b330();
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


/* Address: 0x18000d72c; Evidence: ev_9321452e498edb677478680051cc62532aca3f6f65178af18b5389f62ddc82c9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_18000d72c(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_18000babc();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_18000d79a;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_18000d79a:
      if (bVar5) goto LAB_18000d7b1;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_18000d7b1:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_18000b31c(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_18000b330();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_18000c538(param_1,param_2,param_3,param_4,param_5,param_8,CONCAT44(uVar6,param_6),param_7);
    return 1;
  }
  if (param_5->maxState == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_18000d837:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_18000bcc0((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000d953:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_18000d837;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000d953;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_18000e49c(param_2,(ulonglong *)param_4,param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000d95c; Evidence: ev_beecfd12ff18547b0c957389336decb3839e6f1478a14f0dbea193fdf5222fdf */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_18000d95c(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_18000babc();
  uVar5 = 0;
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        if (*(longlong *)(param_1 + 0x18) == 0x19930520) goto LAB_18000d9de;
        goto LAB_18000d9d0;
      }
    }
    else {
LAB_18000d9d0:
      if (*param_1 == -0x7fffffda) goto LAB_18000d9de;
    }
    if (((byte)*param_5 & 0x20) != 0) {
      return 1;
    }
  }
LAB_18000d9de:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    FUN_18000dcdc(local_48,(longlong)param_5,*(longlong *)(param_4 + 8));
    if ((local_48[0] == 0) && (((byte)*param_5 & 0x40) == 0)) {
      return 1;
    }
    if ((*param_1 == -0x1f928c9d) &&
       (((2 < (uint)param_1[6] && (0x19930522 < (uint)param_1[8])) &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_18000b330();
      pcVar6 = (code *)(lVar2 + iVar1);
      if (pcVar6 != (code *)0x0) {
        uVar3 = (*pcVar6)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar8,(uint)param_8));
        return uVar3;
      }
    }
    FUN_18000ca28(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,(byte *)param_5,param_8,
                  CONCAT44(uVar7,param_6),param_7);
    return 1;
  }
  if (*(int *)(param_5 + 8) == 0) {
    return 1;
  }
  uVar4 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
  if (*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
               (-4 - (longlong)(char)(&DAT_18001b448)[uVar4])) >> ((&DAT_18001b458)[uVar4] & 0x1f)
      == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_18000dafa:
    __FrameHandler4::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_18000bd28((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if (iVar1 < -1) {
LAB_18000dbfb:
                    /* WARNING: Subroutine does not return */
        abort();
      }
      if (*(int *)(param_5 + 8) != 0) {
        uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
        uVar5 = *(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                         (-4 - (longlong)(char)(&DAT_18001b448)[uVar5])) >>
                ((&DAT_18001b458)[uVar5] & 0x1f);
      }
      if ((int)uVar5 <= iVar1) goto LAB_18000dbfb;
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_18000dafa;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) ||
         (uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf,
         (int)(*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_18001b448)[uVar5])) >>
              ((&DAT_18001b458)[uVar5] & 0x1f)) <= iVar1)) goto LAB_18000dbfb;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_18000e628((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000dc04; Evidence: ev_96712378c9098dcc5c93c2853ee1e4dcc4f71af3fc5886122b9393cafdfdf46b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
thunk_FUN_18000d72c(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_18000babc();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_18000d79a;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_18000d79a:
      if (bVar5) goto LAB_18000d7b1;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_18000d7b1:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_18000b31c(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_18000b330();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_18000c538(param_1,param_2,param_3,param_4,param_5,param_8,CONCAT44(uVar6,param_6),param_7);
    return 1;
  }
  if (param_5->maxState == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_18000d837:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_18000bcc0((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000d953:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_18000d837;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000d953;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_18000e49c(param_2,(ulonglong *)param_4,param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000dc0c; Evidence: ev_8adcd54760add40d086a3f68a760183f9025e9d0fe3c0121d7b486afbde916f9 */

ulonglong FUN_18000dc0c(int *param_1,__uint64 *param_2,ULONG_PTR param_3,
                       _xDISPATCHER_CONTEXT *param_4,FuncInfo4 *param_5,int param_6,
                       undefined8 param_7,byte param_8)

{
  ulonglong uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000d95c(param_1,param_2,param_3,param_4,param_5,param_6,param_7,param_8);
  lVar2 = FUN_18000babc();
  *(undefined4 *)(lVar2 + 0x78) = 0xfffffffe;
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000dc58; Evidence: ev_6020dbaf702340e53a5d364730474ce265a739fa2b93072b5b8577ef931f77fa */

HandlerMap4 *
FUN_18000dc58(HandlerMap4 *param_1,longlong param_2,longlong param_3,undefined4 param_4)

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
    lVar2 = (longlong)pbVar1 - (longlong)(char)(&DAT_18001b448)[*pbVar1 & 0xf];
    *(uint *)param_1 = *(uint *)(lVar2 + -4) >> ((&DAT_18001b458)[*pbVar1 & 0xf] & 0x1f);
    *(longlong *)(param_1 + 8) = lVar2;
    *(longlong *)(param_1 + 0x10) = lVar2;
    FH4::HandlerMap4::DecompHandler(param_1);
  }
  return param_1;
}


/* Address: 0x18000dcdc; Evidence: ev_565dbd39ed533446d645a827d5ad9496b5b20b0ec5560ac1d54354abad72b844 */

uint * FUN_18000dcdc(uint *param_1,longlong param_2,longlong param_3)

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
    bVar1 = (&DAT_18001b458)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_18001b448)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    *param_1 = uVar2 >> (bVar1 & 0x1f);
    *(byte **)(param_1 + 4) = pbVar3;
    bVar1 = (&DAT_18001b458)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_18001b448)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    param_1[6] = uVar2 >> (bVar1 & 0x1f);
    bVar1 = (&DAT_18001b458)[*pbVar3 & 0xf];
    pbVar3 = pbVar3 + -(longlong)(char)(&DAT_18001b448)[*pbVar3 & 0xf];
    uVar2 = *(uint *)(pbVar3 + -4);
    *(byte **)(param_1 + 2) = pbVar3;
    param_1[7] = uVar2 >> (bVar1 & 0x1f);
    puVar4 = (uint *)(pbVar3 + -(longlong)(char)(&DAT_18001b448)[*pbVar3 & 0xf]);
    param_1[8] = puVar4[-1] >> ((&DAT_18001b458)[*pbVar3 & 0xf] & 0x1f);
    *(uint **)(param_1 + 2) = puVar4;
    uVar2 = *puVar4;
    *(uint **)(param_1 + 2) = puVar4 + 1;
    param_1[9] = uVar2;
  }
  return param_1;
}


/* Address: 0x18000ddc0; Evidence: ev_a12ebfc48e7103d97e8d5837b8891f67bc03d2f5aa146b1e62b47c93d77ba314 */

undefined8 * FUN_18000ddc0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_18000b8bc((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x18000ddfc; Evidence: ev_812921def40676aa740ff8a9b8806b83c9b52d443bb9a05ec21bc7eb0135e325 */

undefined8 * FUN_18000ddfc(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x18000de20; Evidence: ev_201cc3b993f24d2ff50cd1e18dc656bf4bca177b09dc717b3569b97a9efdc9f3 */

undefined8 FUN_18000de20(longlong param_1)

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
  
  lVar6 = FUN_18000babc();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_18000babc();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_18000babc();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_18000babc();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_18000babc();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_18000babc();
  }
  uVar10 = _CallSettingFrame();
  FUN_18000b2c8((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_18000b4ec(piVar3);
  }
  lVar8 = FUN_18000babc();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_18000babc();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}


/* Address: 0x18000e00c; Evidence: ev_7f334e7afecf6cdbbda8b87650a64dcf0f3baa4138610a92800ab36e81ecbf50 */

longlong FUN_18000e00c(longlong param_1)

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
  
  lVar6 = FUN_18000babc();
  uVar2 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_18000babc();
  uVar3 = *(undefined8 *)(lVar6 + 0x20);
  piVar4 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x40);
  local_58[0] = *(longlong *)(param_1 + 0x48);
  local_58[1] = *(undefined8 *)(param_1 + 0x68);
  uVar1 = *(undefined4 *)(param_1 + 0x38);
  __except_validate_context_record(lVar6);
  lVar7 = FUN_18000babc();
  *(int **)(lVar7 + 0x20) = piVar4;
  lVar7 = FUN_18000babc();
  *(longlong *)(lVar7 + 0x28) = lVar6;
  lVar6 = FUN_18000babc();
  puVar8 = _CreateFrameInfo(local_58 + 2,*(undefined8 *)(*(longlong *)(lVar6 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_18000babc();
  }
  lVar6 = FUN_18000f200();
  if ((lVar6 < 2) && (lVar6 = local_58[lVar6], lVar6 == 0)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_18000f230();
  FUN_18000b2c8((longlong)puVar8);
  if ((((*piVar4 == -0x1f928c9d) && (piVar4[6] == 4)) &&
      ((piVar4[8] == 0x19930520 || (piVar4[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar4 + 10)), iVar5 != 0)) {
    FUN_18000b4ec(piVar4);
  }
  lVar7 = FUN_18000babc();
  *(undefined8 *)(lVar7 + 0x20) = uVar3;
  lVar7 = FUN_18000babc();
  *(undefined8 *)(lVar7 + 0x28) = uVar2;
  lVar7 = FUN_18000babc();
  *(undefined4 *)(lVar7 + 0x78) = uVar1;
  lVar7 = FUN_18000babc();
  *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
  return lVar6;
}


/* Address: 0x18000e24c; Evidence: ev_0cf6ba92486474b9f6f035c73b283b45726cd0ab29cbe241d3da77f586ffdf76 */

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
    pHVar8 = pHVar8 + -(longlong)(char)(&DAT_18001b448)[(byte)HVar2 & 0xf];
    *(uint *)(this + 0x1c) = *(uint *)(pHVar8 + -4) >> ((&DAT_18001b458)[(byte)HVar2 & 0xf] & 0x1f);
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
    pHVar8 = pHVar8 + -(longlong)(char)(&DAT_18001b448)[(byte)HVar2 & 0xf];
    *(uint *)(this + 0x24) = *(uint *)(pHVar8 + -4) >> ((&DAT_18001b458)[(byte)HVar2 & 0xf] & 0x1f);
    *(HandlerMap4 **)(this + 8) = pHVar8;
  }
  pHVar9 = pHVar8 + 4;
  *(undefined4 *)(this + 0x28) = *(undefined4 *)pHVar8;
  bVar6 = (byte)HVar1 & 0x30;
  *(HandlerMap4 **)(this + 8) = pHVar9;
  if (((byte)HVar1 & 8) == 0) {
    if (bVar6 == 0x10) {
      bVar6 = (&DAT_18001b458)[(byte)*pHVar9 & 0xf];
      uVar5 = *(uint *)(((longlong)pHVar9 - (longlong)(char)(&DAT_18001b448)[(byte)*pHVar9 & 0xf]) +
                       -4);
      *(longlong *)(this + 8) =
           (longlong)pHVar9 - (longlong)(char)(&DAT_18001b448)[(byte)*pHVar9 & 0xf];
      *(ulonglong *)(this + 0x30) = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
      return;
    }
    if (bVar6 != 0x20) {
      return;
    }
    bVar6 = (&DAT_18001b458)[(byte)*pHVar9 & 0xf];
    pHVar9 = pHVar9 + -(longlong)(char)(&DAT_18001b448)[(byte)*pHVar9 & 0xf];
    uVar5 = *(uint *)(pHVar9 + -4);
    *(HandlerMap4 **)(this + 8) = pHVar9;
    *(ulonglong *)(this + 0x30) = (ulonglong)(*(int *)(this + 0x48) + (uVar5 >> (bVar6 & 0x1f)));
    bVar6 = (&DAT_18001b458)[(byte)*pHVar9 & 0xf];
    uVar5 = *(uint *)(((longlong)pHVar9 - (longlong)(char)(&DAT_18001b448)[(byte)*pHVar9 & 0xf]) +
                     -4);
    *(longlong *)(this + 8) =
         (longlong)pHVar9 - (longlong)(char)(&DAT_18001b448)[(byte)*pHVar9 & 0xf];
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


/* Address: 0x18000e3d4; Evidence: ev_4b445e7fdda8780cd0b5581c023e50573b64d9b37325159b324504e77556798f */

undefined8 FUN_18000e3d4(undefined8 *param_1,longlong param_2,undefined4 *param_3)

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
      lVar2 = FUN_18000babc();
      *(undefined4 *)(lVar2 + 0x40) = 1;
      *param_3 = 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x18000e46c; Evidence: ev_33d40bce64329ed2b12261f1371409198ac4bff4497d843d156cc431873ca7de */

/* Library Function - Single Match
    int __cdecl ExFilterRethrowFH4(struct _EXCEPTION_POINTERS * __ptr64,struct EHExceptionRecord *
   __ptr64,int,int * __ptr64)
   
   Library: Visual Studio 2019 Release */

int __cdecl
ExFilterRethrowFH4(_EXCEPTION_POINTERS *param_1,EHExceptionRecord *param_2,int param_3,int *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000e3d4(&param_1->ExceptionRecord,(longlong)param_2,param_4);
  if ((int)uVar1 == 0) {
    lVar2 = FUN_18000babc();
    *(int *)(lVar2 + 0x78) = param_3;
  }
  return (int)uVar1;
}


/* Address: 0x18000e49c; Evidence: ev_292777c5725a05858a035a81259e6f755f5d4b4c8866662b4cfaa1e32495a4bf */

void FUN_18000e49c(__uint64 *param_1,ulonglong *param_2,_s_FuncInfo *param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_18000b31c();
  iVar2 = FUN_18000bc14((longlong *)param_1,param_2,(longlong)param_3);
  lVar4 = FUN_18000babc();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (param_3->maxState <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_18000b31c();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)((int)param_3->dispUnwindMap + lVar5 + lVar4);
    iVar1 = param_3->dispUnwindMap;
    lVar4 = FUN_18000b31c();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = param_3->dispUnwindMap;
      lVar4 = FUN_18000b31c();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_18000b31c();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      __FrameHandler3::SetState(param_1,param_3,iVar2);
      iVar1 = param_3->dispUnwindMap;
      lVar4 = FUN_18000b31c();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_18000b31c();
        FUN_18000b31c();
      }
      _CallSettingFrame();
      FUN_18000b344(uVar3);
    }
  }
  lVar4 = FUN_18000babc();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_18000babc();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  __FrameHandler3::SetState(param_1,param_3,iVar2);
  return;
}


/* Address: 0x18000e628; Evidence: ev_631b78fc83690986f3c9fa81e35c13dcc8111e10009d7d8211c54bc14f1621ec */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000e628(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

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
  
  local_58 = DAT_180028040 ^ (ulonglong)auStackY_138;
  local_f0 = param_4;
  local_d8 = param_1;
  local_c0 = param_1;
  local_d0 = FUN_18000b31c();
  iVar6 = FUN_18000bcb8(param_3,param_2);
  puVar1 = param_2 + 9;
  local_c8 = puVar1;
  if ((int)*puVar1 == 0) {
    lVar7 = FUN_18000babc();
    if (*(int *)(lVar7 + 0x78) != -2) {
      lVar7 = FUN_18000babc();
      iVar6 = *(int *)(lVar7 + 0x78);
      lVar7 = FUN_18000babc();
      *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar7 = FUN_18000babc();
    if (*(int *)(lVar7 + 0x78) != -2) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    iVar6 = (int)*puVar1 + -2;
  }
  lVar7 = FUN_18000babc();
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
    local_70 = local_70 + -(longlong)(char)(&DAT_18001b448)[uVar8];
    local_78[0] = *(uint *)(local_70 + -4) >> ((&DAT_18001b458)[uVar8] & 0x1f);
  }
  local_108 = (UWMap4 *)local_78;
  local_e8 = local_78;
  pbStack_100 = local_70;
  local_e0 = local_70;
  local_b8 = puVar9;
  FUN_18000ebf8((UWMap4 *)local_78,iVar6,param_4,(longlong *)&local_108,(longlong *)&local_e8);
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
    iVar6 = FUN_18000ecc8(&local_e8,param_4,(longlong)&local_98,iVar6,&local_108);
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
      FUN_18000b344(local_d0);
    }
  }
  lVar7 = FUN_18000babc();
  if (0 < *(int *)(lVar7 + 0x30)) {
    lVar7 = FUN_18000babc();
    *(int *)(lVar7 + 0x30) = *(int *)(lVar7 + 0x30) + -1;
  }
  return;
}


/* Address: 0x18000e934; Evidence: ev_3afd2d0f14fac89871e9a9ec4d9276af1f511d4ab34637cfb0177fa7d46a29f1 */

/* Library Function - Single Match
    public: static int __cdecl __FrameHandler3::GetHandlerSearchState(unsigned __int64 *
   __ptr64,struct _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl
__FrameHandler3::GetHandlerSearchState
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,_s_FuncInfo *param_3)

{
  int iVar1;
  int iVar2;
  __uint64 local_res20;
  
  iVar1 = FUN_18000bcb0((longlong)param_3,(ulonglong *)param_2);
  FUN_18000aab8((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,(longlong *)&local_res20)
  ;
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    SetState(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}


/* Address: 0x18000e9cc; Evidence: ev_674fe44e6fe6aed48b2b45dff4a65a05c02af06f3deb9c542c08114fc601f567 */

undefined1 FUN_18000e9cc(longlong param_1,int *param_2)

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
      lVar4 = FUN_18000b330();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_18000b330();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_18000b330();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_18000b31c();
          uVar6 = FUN_18000d4cc((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
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


/* Address: 0x18000eab4; Evidence: ev_a18280fa961ba3f2ca5689be018386835fcc6a9d15a1fe384880c4c154850c12 */

ulonglong FUN_18000eab4(int *param_1)

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
      lVar2 = FUN_18000b31c();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_18000b31c();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_18000b31c();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_18000ba10(lVar2 + 8,0x180028b38);
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


/* Address: 0x18000eb3c; Evidence: ev_12f31ada473cf8946d37adfe7d511efbf947cf4d093889a60255000f3b0fd60f */

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
  pbVar5 = *param_1 + -(longlong)(char)(&DAT_18001b448)[uVar3];
  uVar3 = *(uint *)(pbVar5 + -4) >> ((&DAT_18001b458)[uVar3] & 0x1f);
  *param_1 = pbVar5;
  uVar4 = uVar3 & 3;
  *(uint *)(this + 0x14) = uVar4;
  *(uint *)(this + 0x10) = uVar3 >> 2;
  if ((uVar4 == 1) || (uVar4 == 2)) {
    uVar2 = *(undefined4 *)*param_1;
    *param_1 = *param_1 + 4;
    *(undefined4 *)(this + 0x18) = uVar2;
    uVar3 = **param_1 & 0xf;
    bVar1 = (&DAT_18001b458)[uVar3];
    pbVar5 = *param_1 + -(longlong)(char)(&DAT_18001b448)[uVar3];
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


/* Address: 0x18000ebdc; Evidence: ev_35415fde05c62f2e4cdc1fa67eba578cc20e916f5d5b1c0ee4bfe898ca327a44 */

void FUN_18000ebdc(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3)

{
                    /* WARNING: Could not recover jumptable at 0x00018000ebe2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3);
  return;
}


/* Address: 0x18000ebe8; Evidence: ev_48e268735a394678d059da6f87275d0ae1a527ef2390905b96855a782030931b */

void FUN_18000ebe8(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3,
                  undefined4 param_4)

{
                    /* WARNING: Could not recover jumptable at 0x00018000ebf4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3,param_4);
  return;
}


/* Address: 0x18000ebf8; Evidence: ev_f65f7d5637ea29efd8c5974a7b8dfa3a8b7fb98deb696e443e6e26118bb385da */

void FUN_18000ebf8(UWMap4 *param_1,int param_2,int param_3,longlong *param_4,longlong *param_5)

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


/* Address: 0x18000ecc8; Evidence: ev_72fd1ec165465937cfc56e078b11297bd301e183045dc385a3916c2a93c07f51 */

int FUN_18000ecc8(undefined8 *param_1,int param_2,longlong param_3,int param_4,undefined8 *param_5)

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


/* Address: 0x18000ed78; Evidence: ev_b6f305e6bf313b11970a310cceaacb4d0ca4a4906c051c3075929197885f9ea8 */

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
                      ((LPCRITICAL_SECTION)(&DAT_1800293a8 + uVar2 * 0x28),4000,0);
    if ((int)uVar1 == 0) {
      uVar2 = __vcrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_1800293d0 = DAT_1800293d0 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 == 0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x18000edc0; Evidence: ev_10ac7afacbcf7c736568dea51c73128ce5dd9da979befb323c0c95b3108d67ca */

/* Library Function - Single Match
    __vcrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release */

undefined8 __vcrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_1800293d0;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_1800293a8 + uVar1 * 0x28));
    DAT_1800293d0 = DAT_1800293d0 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000ee30; Evidence: ev_cf3c418bb88d3b1370489029974dc7f90e79c669c5d434990722bead1765c970 */

void FUN_18000ee30(void)

{
  FUN_18000ee50();
  return;
}


/* Address: 0x18000ee50; Evidence: ev_223abef6e7912c0b92092e630b77d31e62fe3396cae8cd1cc75d4b1146dc037f */

void FUN_18000ee50(void)

{
  return;
}


/* Address: 0x18000ee60; Evidence: ev_faa386181842fd63d7ab6302d93e6bcb30885c9b007c5bd8281b8571fe9f8ded */

void FUN_18000ee60(void)

{
  return;
}


/* Address: 0x18000ee64; Evidence: ev_45b77526ee511bab44a9817a6e1eadb56469615203bb18995d28a0a86d6ded22 */

/* WARNING: Removing unreachable block (ram,0x00018000ee77) */
/* WARNING: Removing unreachable block (ram,0x00018000ee8d) */
/* WARNING: Removing unreachable block (ram,0x00018000ee93) */
/* Library Function - Single Match
    __except_validate_context_record
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __except_validate_context_record(longlong param_1)

{
  return;
}


/* Address: 0x18000ee9c; Evidence: ev_78bc628206614265e797ac545c06de211362a69e005c750893c72649f072c50d */

FARPROC FUN_18000ee9c(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
  pFVar4 = *(FARPROC *)(&DAT_1800293f0 + uVar6 * 8);
  if (pFVar4 != (FARPROC)0xffffffffffffffff) {
    if (pFVar4 != (FARPROC)0x0) {
      return pFVar4;
    }
    for (; param_3 != param_4; param_3 = param_3 + 1) {
      uVar5 = (ulonglong)*param_3;
      hLibModule = *(HMODULE *)(&DAT_1800293d8 + uVar5 * 8);
      if (hLibModule == (HMODULE)0x0) {
        lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_fibers_l1_1_1_18001c3b8)[uVar5];
        hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
        if ((hLibModule != (HMODULE)0x0) ||
           (((DVar2 = GetLastError(), DVar2 == 0x57 &&
             (iVar3 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar3 != 0)) &&
            (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0)))
           ) {
          LOCK();
          lVar1 = *(longlong *)(&DAT_1800293d8 + uVar5 * 8);
          *(HMODULE *)(&DAT_1800293d8 + uVar5 * 8) = hLibModule;
          UNLOCK();
          if (lVar1 != 0) {
            FreeLibrary(hLibModule);
          }
          goto LAB_18000efcd;
        }
        LOCK();
        *(undefined8 *)(&DAT_1800293d8 + uVar5 * 8) = 0xffffffffffffffff;
        UNLOCK();
      }
      else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_18000efcd:
        pFVar4 = GetProcAddress(hLibModule,param_2);
        if (pFVar4 != (FARPROC)0x0) {
          LOCK();
          *(FARPROC *)(&DAT_1800293f0 + uVar6 * 8) = pFVar4;
          UNLOCK();
          return pFVar4;
        }
        break;
      }
    }
    LOCK();
    *(undefined8 *)(&DAT_1800293f0 + uVar6 * 8) = 0xffffffffffffffff;
    UNLOCK();
  }
  return (FARPROC)0x0;
}


/* Address: 0x18000efec; Evidence: ev_48c53fc6b95754d3ceb6e49d0cab60a01ebe405b0553d3d57ab2ce2d6801256b */

/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000ee9c(0,"FlsAlloc",(uint *)&DAT_18001c478,(uint *)"FlsAlloc");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000f02a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsAlloc();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180018820. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)(param_1);
  return;
}


/* Address: 0x18000f034; Evidence: ev_bd4d1a38d3bd8a8c90ec1dfb3d3b567f377aae495736162a9192af2dc20dbe5e */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000ee9c(1,"FlsFree",(uint *)&DAT_18001c490,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000f073. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180018820. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000f07c; Evidence: ev_282290e9c203538537fd5854c61af9ee528c76a9a44ff81c9ea2729fcead6a2b */

/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE =
       FUN_18000ee9c(2,"FlsGetValue",(uint *)&DAT_18001c4a0,(uint *)"FlsGetValue");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000f0bb. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsGetValue(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180018820. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000f0c4; Evidence: ev_34ee8d4decf1805112e2cf7f0c1561d6af1c24212470ab9e5048a96d4eed9e47 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsSetValue
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsSetValue(DWORD param_1,LPVOID param_2)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_18000ee9c(3,"FlsSetValue",(uint *)&DAT_18001c4b8,(uint *)"FlsSetValue");
  if (pFVar1 == (FARPROC)0x0) {
    TlsSetValue(param_1,param_2);
  }
  else {
    (*pFVar1)();
  }
  return;
}


/* Address: 0x18000f118; Evidence: ev_53685b73b2619e9e6e282f8713e50fcdebbea31d712aee2f023b8824f25b7960 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_InitializeCriticalSectionEx
   
   Library: Visual Studio 2017 Release */

void __vcrt_InitializeCriticalSectionEx(LPCRITICAL_SECTION param_1,DWORD param_2,undefined4 param_3)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_18000ee9c(4,"InitializeCriticalSectionEx",(uint *)&DAT_18001c4d0,
                         (uint *)"InitializeCriticalSectionEx");
  if (pFVar1 == (FARPROC)0x0) {
    InitializeCriticalSectionAndSpinCount(param_1,param_2);
  }
  else {
    (*pFVar1)(param_1,param_2,param_3);
  }
  return;
}


/* Address: 0x18000f1c0; Evidence: ev_6f6e7fd88291d26697b5c7a18d66476ff6cd30b3504dcabb729b3fbdf79d95a1 */

/* Library Function - Single Match
    _CallSettingFrame
   
   Library: Visual Studio */

void _CallSettingFrame(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000ee30();
  (*pcVar1)();
  FUN_18000ee60();
  FUN_18000ee30();
  return;
}


/* Address: 0x18000f200; Evidence: ev_dda562b59b9bb08021873257204f94694d5d604d94e33d25ade161fbf9c86f23 */

void FUN_18000f200(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000ee30();
  (*pcVar1)();
  FUN_18000ee60();
  return;
}


/* Address: 0x18000f230; Evidence: ev_9a5754190194dd6a38dfe3253ec824bcd565c1f70d985181d0a2a85cf57fb125 */

void FUN_18000f230(void)

{
  FUN_18000ee30();
  return;
}


/* Address: 0x18000f260; Evidence: ev_2e00546cbb4a75b144623e8d28435f2401ed40966f35cb37d88cd79b1ae75934 */

/* Library Function - Single Match
    _CallSettingFrameEncoded
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

void _CallSettingFrameEncoded(undefined8 param_1,undefined8 param_2,undefined8 param_3)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000ee30();
  (*pcVar1)(param_3);
  FUN_18000ee60();
  FUN_18000ee30();
  return;
}


/* Address: 0x18000f2b0; Evidence: ev_bf7f71ca9d7e8067c7f9c7cddce679631cc4ca784f07632a2662255de1fe5fe8 */

longlong * FUN_18000f2b0(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_180028240;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18002959c == 0) {
    param_1[1] = (longlong)PTR_PTR_180028238;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_180011288();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_1800114a8(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}


/* Address: 0x18000f370; Evidence: ev_53d81eb5692168f2425c60e4fe3e251348706bc9987f7644c74ce0842d5c97bb */

undefined8 FUN_18000f370(longlong param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  
  if ((param_1 == 0) || (param_2 == 0)) {
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000f91c();
  }
  return 0x7fffffff;
}


/* Address: 0x18000f3a0; Evidence: ev_0df441700708f738e4d176b513c7eaa05e91fe1e6dd003cc96cf26f5ac84443c */

void FUN_18000f3a0(byte *param_1,byte *param_2)

{
  byte bVar1;
  byte bVar2;
  uint uVar3;
  uint uVar4;
  
  if (DAT_18002959c != 0) {
    FUN_18000f410(param_1,param_2,(undefined8 *)0x0);
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
  FUN_18000f370((longlong)param_1,(longlong)param_2);
  return;
}


/* Address: 0x18000f410; Evidence: ev_e193af4fbc2143af87db5b2fcd9609dc11ee4e98e351105f56a948e8d018d5c2 */

int FUN_18000f410(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  __acrt_ptd *p_Var3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    p_Var3 = FUN_180010de4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000f91c();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18002959c == 0) {
      local_20 = PTR_PTR_180028238;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_180011288();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_1800114a8(local_28,&lStack_18);
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


/* Address: 0x18000f530; Evidence: ev_740228909436b23134ef73be91f3204443816a87336d4a796eb622f1a0b7c491 */

longlong FUN_18000f530(longlong *param_1)

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
    p_Var1 = FUN_180011378(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
    if (p_Var1 == (__acrt_ptd *)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return *param_1;
}


/* Address: 0x18000f598; Evidence: ev_86e0f25187334b47b4485795e8ede9dfa6384d6cdcd38b8f7d291f144d0da336 */

__acrt_ptd * FUN_18000f598(longlong *param_1)

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
    p_Var1 = FUN_180011378(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
  }
  return p_Var1;
}


/* Address: 0x18000f604; Evidence: ev_2419501720f029dca850c46bd92511d54460c417fb4f6c33f75256adb649a10a */

longlong FUN_18000f604(longlong param_1,longlong param_2)

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


/* Address: 0x18000f650; Evidence: ev_b9bc75b13b3456a4274fdd7a51f9469627b82e83a5639feda3ffc33a788f09a9 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000f650(int param_1,DWORD param_2,DWORD param_3)

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
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_608;
  if (param_1 != -1) {
    FUN_18000a3fc();
  }
  FUN_1800188a0((undefined1 (*) [32])&local_598,0,0x98);
  FUN_1800188a0((undefined1 (*) [32])&local_4f8,0,0x4d0);
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
    FUN_18000a3fc();
  }
  return;
}


/* Address: 0x18000f7c0; Evidence: ev_5d90c49aab2ea823ab614fd6d24dc4fdd604393cebf005306dd5e3d0a270928d */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000f7c0(undefined8 param_1)

{
  _DAT_180029418 = param_1;
  return;
}


/* Address: 0x18000f7c8; Evidence: ev_33a3a67e068ea4f5419a33616406bb22ce7197a0560dcc8660ce7f619c994b7b */

void FUN_18000f7c8(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
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
  local_20 = DAT_18002959c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_180028238;
    puStack_28 = PTR_DAT_180028240;
  }
  FUN_18000f864(param_1,param_2,param_3,param_4,param_5,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar1 = FUN_18000f530(local_48);
    *(undefined4 *)(lVar1 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar1 = FUN_18000f530(local_48);
    *(undefined4 *)(lVar1 + 0x24) = local_14;
  }
  return;
}


/* Address: 0x18000f864; Evidence: ev_03c753592e09e4d1cbff199485d39be7b65608cf57f897f168466d964d62babe */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000f864(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_18000f598(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_18000f604(0x180029418,(longlong)param_6);
    bVar3 = (byte)DAT_180028040 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_180028040) >> bVar3 | (*puVar2 ^ DAT_180028040) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}


/* Address: 0x18000f91c; Evidence: ev_436c9c660101861066a142240057ff1026907f87c45b8c0ad59074b06eca99ff */

void FUN_18000f91c(void)

{
  FUN_18000f7c8((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  return;
}


/* Address: 0x18000f93c; Evidence: ev_1941b4b6f726225627c200d3254558c9aec278391d0bce86c5a47e20a2de7ac7 */

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
  *(undefined8 *)(puVar3 + -8) = 0x18000f96a;
  FUN_18000f650(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x18000f970;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000f97c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}


/* Address: 0x18000f984; Evidence: ev_98f8b5c9328caf29a988ad823ac4841832ae17d7a79fe878f9ab5fdb8d863f8f */

DWORD __stdcall GetCurrentProcessId(void)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000f984. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = GetCurrentProcessId();
  return DVar1;
}


/* Address: 0x18000f990; Evidence: ev_c04d8aa63e74541b67a6bc44cdb5fabfb6a6a36ca40a6d0dcbbb6b9c6f78c5bc */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

bool FUN_18000f990(undefined8 param_1)

{
  int iVar1;
  code *pcVar2;
  bool bVar3;
  
  pcVar2 = (code *)FUN_18000f9e0();
  bVar3 = false;
  if (pcVar2 != (code *)0x0) {
    iVar1 = (*pcVar2)(param_1);
    bVar3 = iVar1 != 0;
  }
  return bVar3;
}


/* Address: 0x18000f9d0; Evidence: ev_849da44837a09390b37a3ce4f08da516a662ee47d39101bc18f5d0c395b62cf1 */

void FUN_18000f9d0(undefined8 param_1)

{
  DAT_180029420 = param_1;
  return;
}


/* Address: 0x18000f9e0; Evidence: ev_1d82e2811be0ffaeef12fccf2a51f4616f3ed739f183836c153d3865bf4d3513 */

ulonglong FUN_18000f9e0(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180028040 & 0x3f;
  uVar2 = DAT_180029420 ^ DAT_180028040;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18000fa20; Evidence: ev_0132baedf99d1cd1115bf33954c982c9bce95a16b41436818c90f9304423acef */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180028040 & 0x3f;
  uVar3 = DAT_180028040 ^ DAT_180029420;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_180029420 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180028040;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}


/* Address: 0x18000fa90; Evidence: ev_70defdb12e5fa7522c3d4a24ec0e1058cdba524a1dfbbded954efa1c6eb8fd66 */

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
      pvVar3 = HeapAlloc(DAT_180029918,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180015220();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000f990(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_180010de4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000faa0; Evidence: ev_2303a8a40d1e663d9bba416c474b0265edae1cb826ce87502ab4848ef82345f4 */

void thunk_FUN_1800116e0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180029918,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180010ca4(DVar2);
    p_Var4 = FUN_180010de4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000faa8; Evidence: ev_bf088d2c08c8771fb9a53e3eff74bc2fcd51406f417ea54cdab01cc909d1892f */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000fabc(-0x1f928c9d,param_2);
  return uVar1;
}


/* Address: 0x18000fabc; Evidence: ev_6bf8d24c15c48c993017403a6fdff68c65b727cba7f13384d61cb63af4585e9c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000fabc(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  int *piVar2;
  code *pcVar3;
  undefined8 uVar4;
  __acrt_ptd *p_Var5;
  int *piVar6;
  int *piVar7;
  undefined4 uVar8;
  
  p_Var5 = FUN_1800112e8();
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
LAB_18000fbfa:
              *(undefined4 *)(p_Var5 + 0x10) = uVar8;
            }
            else {
              if (*piVar6 == -0x3fffff72) {
                uVar8 = 0x83;
                goto LAB_18000fbfa;
              }
              if (*piVar6 == -0x3fffff71) {
                uVar8 = 0x86;
                goto LAB_18000fbfa;
              }
              if (*piVar6 == -0x3fffff70) {
                uVar8 = 0x81;
                goto LAB_18000fbfa;
              }
              if (*piVar6 == -0x3fffff6f) {
                uVar8 = 0x84;
                goto LAB_18000fbfa;
              }
              if (*piVar6 == -0x3fffff6e) {
                uVar8 = 0x8a;
                goto LAB_18000fbfa;
              }
              if (*piVar6 == -0x3fffff6d) {
                uVar8 = 0x85;
                goto LAB_18000fbfa;
              }
              if (*piVar6 == -0x3ffffd4c) {
                uVar8 = 0x8e;
                goto LAB_18000fbfa;
              }
              uVar8 = uVar1;
              if (*piVar6 == -0x3ffffd4b) {
                uVar8 = 0x8d;
                goto LAB_18000fbfa;
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


/* Address: 0x18000fc28; Evidence: ev_30c9a968332e7455e5a52c0eb76873721327fae059a9dbcc253969b7d5c77185 */

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
  FUN_18000fc60(param_3);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000fc60; Evidence: ev_d5caa3a2639ea34e99ad309118f7f8087359a94f24db893d6f6835d19c0e2dab */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000fc60(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_180029438 != '\0') {
    return;
  }
  LOCK();
  DAT_180029428 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_180029430 != DAT_180028040) {
      bVar1 = (byte)DAT_180028040 & 0x3f;
      (*(code *)((DAT_180028040 ^ DAT_180029430) >> bVar1 |
                (DAT_180028040 ^ DAT_180029430) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180029568;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000fccf;
    puVar2 = &DAT_180029580;
  }
  FUN_180010804(puVar2);
LAB_18000fccf:
  if (*(int *)*param_1 == 0) {
    FUN_180010a68((undefined8 *)&DAT_18001b320,(undefined8 *)&DAT_18001b340);
  }
  FUN_180010a68((undefined8 *)&DAT_18001b348,(undefined8 *)&DAT_18001b350);
  if (*(int *)param_1[1] == 0) {
    DAT_180029438 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}


/* Address: 0x18000fd20; Evidence: ev_3aa48e2cb85cbd1ad8da199d924593b0dc013ee9fbb574ddfb337382e28e8d2b */

void FUN_18000fd20(uint param_1,undefined4 param_2,int param_3)

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
      FUN_18000fe34(param_1);
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
    bVar2 = FUN_18001176c();
    if ((int)CONCAT71(extraout_var,bVar2) == 1) {
      bVar2 = false;
    }
    else {
      uVar3 = FUN_180011738();
      bVar2 = (char)uVar3 == '\0';
    }
    if (local_res18[0] == 0) {
      FUN_18000fe04(param_1,bVar2);
      pcVar1 = (code *)swi(3);
      (*pcVar1)();
      return;
    }
  }
  return;
}


/* Address: 0x18000fe04; Evidence: ev_2cd0253e3689f51a881c0d4cda464d28b9960be0fee5557a21136f873d775cf9 */

void FUN_18000fe04(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000fe34(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}


/* Address: 0x18000fe34; Evidence: ev_cbbb66db8ce62758d86f49707efce7e9d9ba53b920cbc8b3c35669bfdc13f182 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000fe34(uint param_1)

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


/* Address: 0x18000fe98; Evidence: ev_d149026bc1265d985100b4cb1394b77655fce88825207d707386393c470ddf62 */

void FUN_18000fe98(undefined8 param_1)

{
  DAT_180029430 = param_1;
  return;
}


/* Address: 0x18000fea0; Evidence: ev_7dd9f2bf4097b9e7dfd58c58dcd878781e1692374fd21f0588ed4ccb69e331ac */

void FUN_18000fea0(void)

{
  FUN_18000fd20(0,0,1);
  return;
}


/* Address: 0x18000feb0; Evidence: ev_57fc23aef9aa99b2fb00b0d1eab1bca60eba04edbb21d48b8c4b8c10bce6bbdd */

void FUN_18000feb0(uint param_1)

{
  FUN_18000fd20(param_1,2,0);
  return;
}


/* Address: 0x18000febc; Evidence: ev_77f842dca5aa293103d140843c3f25869ad13acf0c10b185d97727ad45cb20c6 */

undefined4 FUN_18000febc(void)

{
  return DAT_180029428;
}


/* Address: 0x18000fec4; Evidence: ev_87e5e7695390e04a05d115ec6432103dc938830684439d1d34c92f4c56108a70 */

void FUN_18000fec4(char *param_1,undefined8 *param_2,char *param_3,longlong *param_4,
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
      iVar5 = FUN_1800130a0((int)cVar3);
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
        goto LAB_18000ff76;
      }
    }
    param_1 = pcVar6;
  } while ((bVar2) || ((cVar3 != ' ' && (cVar3 != '\t'))));
  if (param_3 != (char *)0x0) {
    param_3[-1] = '\0';
  }
LAB_18000ff76:
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
        iVar5 = FUN_1800130a0((int)*pcVar6);
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


/* Address: 0x180010084; Evidence: ev_ce51965ac7156c70fc25a557ab1e0ed77857b966542bdb750c5f98e855dc25fa */

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
      FUN_1800116e0((LPVOID)0x0);
      return pvVar2;
    }
  }
  return (LPVOID)0x0;
}


/* Address: 0x1800100e4; Evidence: ev_bb0765921d836b49c5faa8a3ca336851e89777fa3b58b1736c3e4721f4a1c47b */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_1800100e4(int param_1)

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
    p_Var3 = FUN_180010de4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000f91c();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_1800123bc((HMODULE)0x0,&DAT_180029440,0x104);
  _DAT_180029830 = &DAT_180029440;
  if ((DAT_180029850 == (char *)0x0) || (pcVar6 = DAT_180029850, *DAT_180029850 == '\0')) {
    pcVar6 = &DAT_180029440;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000fec4(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_180010de4();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000fec4(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_180011b78(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_1800116e0(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_1800116e0(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_180029838 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_180029838 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_180029840 = plVar2;
      FUN_1800116e0((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_180010249;
    }
    _DAT_180029838 = (int)local_res18 + -1;
    DAT_180029840 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_180010249:
  FUN_1800116e0(plVar4);
  return uVar7;
}


/* Address: 0x180010264; Evidence: ev_61e8d59048d42fc1fba0fef1524a06c6d56bc61bf2842423c34672df77903b5b */

undefined8 FUN_180010264(void)

{
  undefined8 *puVar1;
  LPSTR pCVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180029548 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pCVar2 = FUN_18001324c();
    if (pCVar2 == (LPSTR)0x0) {
      FUN_1800116e0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_1800102d8(pCVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180029548;
        puVar1 = DAT_180029560;
      }
      DAT_180029560 = puVar1;
      DAT_180029548 = puVar4;
      FUN_1800116e0((LPVOID)0x0);
      FUN_1800116e0(pCVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x1800102d8; Evidence: ev_5d6d04b84df73033485573e9cd05b3039a6ec83b4d0e405a42e53782adfa32b2 */

undefined8 * FUN_1800102d8(char *param_1)

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
LAB_18001033b:
    FUN_1800116e0((LPVOID)0x0);
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
          FUN_1800116e0((LPVOID)0x0);
          goto LAB_18001033b;
        }
        uVar5 = FUN_180010b60(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_1800116e0((LPVOID)0x0);
      }
    }
    FUN_1800116e0((LPVOID)0x0);
  }
  return puVar3;
}


/* Address: 0x1800103ec; Evidence: ev_5b980ecaa3df89f56df3f20aa75da8ca4279452b733a63ef821c73c259e55538 */

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
      FUN_1800116e0(pvVar1);
      puVar2 = puVar2 + 1;
      pvVar1 = (LPVOID)*puVar2;
    }
    FUN_1800116e0(param_1);
  }
  return;
}


/* Address: 0x180010430; Evidence: ev_f8636238f4369c07ae85f9a4c137332e14a28549566bbce0650512ca0211d8d3 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180029560) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18001044c; Evidence: ev_b64dc4551a5b7067324576d674dd04a263e9923d406110d324907a37fc1f965f */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180029558) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x180010468; Evidence: ev_e015205ec08db514a173213580b73e883ea03df9cfff1f404b95dcc93b305b59 */

void FUN_180010468(void)

{
  uninitialize_environment_internal<>(&DAT_180029548);
  uninitialize_environment_internal<>((undefined8 *)&DAT_180029550);
  free_environment<>(DAT_180029560);
  free_environment<>(DAT_180029558);
  return;
}


/* Address: 0x1800104ac; Evidence: ev_44c6a71a42b0ecb27fbea6135269b945bdb94f12454fdf0d514638bf23a7844d */

undefined8 thunk_FUN_180010264(void)

{
  undefined8 *puVar1;
  LPSTR pCVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180029548 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pCVar2 = FUN_18001324c();
    if (pCVar2 == (LPSTR)0x0) {
      FUN_1800116e0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_1800102d8(pCVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180029548;
        puVar1 = DAT_180029560;
      }
      DAT_180029560 = puVar1;
      DAT_180029548 = puVar4;
      FUN_1800116e0((LPVOID)0x0);
      FUN_1800116e0(pCVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x1800104b4; Evidence: ev_8d4646c5c6bebf4372d6216ed665431f54586dfdf8c63ba7a89601be12e35d30 */

/* Library Function - Multiple Matches With Same Base Name
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_638799b9deba96c50f710eeac98168cd>,class <lambda_22ebabd17bc4fa466a2aca6d8deb888d> &
   __ptr64,class <lambda_a6f7d7db0129f75315ebf26d50c089f1> >(class
   <lambda_638799b9deba96c50f710eeac98168cd> && __ptr64,class
   <lambda_22ebabd17bc4fa466a2aca6d8deb888d> & __ptr64,class
   <lambda_a6f7d7db0129f75315ebf26d50c089f1> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_b8c45f8f788dd370798f47cfe8ac3a86>,class <lambda_4e60a939b0d047cfe11ddc22648dfba9> &
   __ptr64,class <lambda_332c3edc96d0294ec56c57d38c1cdfd5> >(class
   <lambda_b8c45f8f788dd370798f47cfe8ac3a86> && __ptr64,class
   <lambda_4e60a939b0d047cfe11ddc22648dfba9> & __ptr64,class
   <lambda_332c3edc96d0294ec56c57d38c1cdfd5> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  ulonglong uVar1;
  
  __acrt_lock(*param_2);
  uVar1 = FUN_18001052c(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x1800104f0; Evidence: ev_4a4715e36942757225ed93c953b6e9d16685d29461cc04b3bc61551dfea1ff02 */

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
  uVar1 = FUN_1800106dc(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x18001052c; Evidence: ev_bb61080a9703c8925ab393996905ea565310d3b8f5e2ef69d307fa2a587d492e */

undefined8 FUN_18001052c(undefined8 *param_1)

{
  LPVOID pvVar1;
  undefined8 uVar2;
  byte bVar3;
  ulonglong *puVar4;
  ulonglong uVar5;
  LPVOID pvVar6;
  ulonglong uVar7;
  ulonglong uVar8;
  ulonglong *puVar9;
  ulonglong *puVar10;
  
  puVar4 = *(ulonglong **)*param_1;
  if (puVar4 == (ulonglong *)0x0) {
LAB_1800106be:
    uVar2 = 0xffffffff;
  }
  else {
    bVar3 = (byte)DAT_180028040 & 0x3f;
    pvVar6 = (LPVOID)((DAT_180028040 ^ *puVar4) >> bVar3 | (DAT_180028040 ^ *puVar4) << 0x40 - bVar3
                     );
    puVar10 = (ulonglong *)
              ((DAT_180028040 ^ puVar4[1]) >> bVar3 | (DAT_180028040 ^ puVar4[1]) << 0x40 - bVar3);
    puVar4 = (ulonglong *)
             ((DAT_180028040 ^ puVar4[2]) >> bVar3 | (DAT_180028040 ^ puVar4[2]) << 0x40 - bVar3);
    if (puVar10 == puVar4) {
      uVar5 = (longlong)puVar4 - (longlong)pvVar6 >> 3;
      uVar7 = uVar5;
      if (0x200 < uVar5) {
        uVar7 = 0x200;
      }
      uVar8 = uVar7 + uVar5;
      if (uVar7 + uVar5 == 0) {
        uVar8 = 0x20;
      }
      if (uVar8 < uVar5) {
LAB_1800105ce:
        uVar8 = uVar5 + 4;
        pvVar1 = _recalloc_base(pvVar6,uVar8,8);
        FUN_1800116e0((LPVOID)0x0);
        if (pvVar1 == (LPVOID)0x0) goto LAB_1800106be;
      }
      else {
        pvVar1 = _recalloc_base(pvVar6,uVar8,8);
        FUN_1800116e0((LPVOID)0x0);
        if (pvVar1 == (LPVOID)0x0) goto LAB_1800105ce;
      }
      pvVar6 = pvVar1;
      uVar7 = DAT_180028040;
      puVar10 = (ulonglong *)((longlong)pvVar6 + uVar5 * 8);
      puVar4 = (ulonglong *)((longlong)pvVar6 + uVar8 * 8);
      uVar5 = (ulonglong)((longlong)puVar4 + (7 - (longlong)puVar10)) >> 3;
      if (puVar4 < puVar10) {
        uVar5 = 0;
      }
      puVar9 = puVar10;
      if (uVar5 != 0) {
        for (; uVar5 != 0; uVar5 = uVar5 - 1) {
          *puVar9 = uVar7;
          puVar9 = puVar9 + 1;
        }
      }
    }
    bVar3 = -((byte)DAT_180028040 & 0x3f) & 0x3f;
    *puVar10 = (*(ulonglong *)param_1[1] >> bVar3 | *(ulonglong *)param_1[1] << 0x40 - bVar3) ^
               DAT_180028040;
    bVar3 = -((byte)DAT_180028040 & 0x3f) & 0x3f;
    **(ulonglong **)*param_1 =
         ((ulonglong)pvVar6 >> bVar3 | (longlong)pvVar6 << 0x40 - bVar3) ^ DAT_180028040;
    bVar3 = -((byte)DAT_180028040 & 0x3f) & 0x3f;
    *(ulonglong *)(*(longlong *)*param_1 + 8) =
         ((ulonglong)(puVar10 + 1) >> bVar3 | (longlong)(puVar10 + 1) << 0x40 - bVar3) ^
         DAT_180028040;
    bVar3 = 0x40 - ((byte)DAT_180028040 & 0x3f) & 0x3f;
    uVar2 = 0;
    *(ulonglong *)(*(longlong *)*param_1 + 0x10) =
         ((ulonglong)puVar4 >> bVar3 | (longlong)puVar4 << 0x40 - bVar3) ^ DAT_180028040;
  }
  return uVar2;
}


/* Address: 0x1800106dc; Evidence: ev_0ee9333cc1efa6ced8405dd1a862614d3091a535fff4488a2918b58aabba99ab */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800106dc(undefined8 *param_1)

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
  
  uVar1 = DAT_180028040;
  puVar8 = *(ulonglong **)*param_1;
  if (puVar8 == (ulonglong *)0x0) {
    uVar2 = 0xffffffff;
  }
  else {
    bVar5 = (byte)DAT_180028040 & 0x3f;
    puVar10 = (ulonglong *)
              ((DAT_180028040 ^ *puVar8) >> bVar5 | (DAT_180028040 ^ *puVar8) << 0x40 - bVar5);
    puVar8 = (ulonglong *)
             ((DAT_180028040 ^ puVar8[1]) >> bVar5 | (DAT_180028040 ^ puVar8[1]) << 0x40 - bVar5);
    if ((longlong)puVar10 - 1U < 0xfffffffffffffffe) {
      uVar7 = (uint)DAT_180028040 & 0x3f;
      puVar9 = puVar8;
      uVar3 = DAT_180028040;
      puVar13 = puVar10;
      while (puVar8 = puVar8 + -1, puVar10 <= puVar8) {
        if (*puVar8 != uVar1) {
          uVar3 = *puVar8 ^ uVar3;
          *puVar8 = uVar1;
          (*(code *)(uVar3 >> (sbyte)uVar7 | uVar3 << 0x40 - (sbyte)uVar7))();
          uVar7 = (uint)DAT_180028040 & 0x3f;
          uVar11 = DAT_180028040 ^ **(ulonglong **)*param_1;
          uVar3 = DAT_180028040 ^ (*(ulonglong **)*param_1)[1];
          sVar6 = (sbyte)uVar7;
          puVar12 = (ulonglong *)(uVar11 >> sVar6 | uVar11 << 0x40 - sVar6);
          puVar4 = (ulonglong *)(uVar3 >> sVar6 | uVar3 << 0x40 - sVar6);
          uVar3 = DAT_180028040;
          if ((puVar12 != puVar13) || (puVar4 != puVar9)) {
            puVar8 = puVar4;
            puVar9 = puVar4;
            puVar10 = puVar12;
            puVar13 = puVar12;
          }
        }
      }
      if (puVar10 != (ulonglong *)0xffffffffffffffff) {
        FUN_1800116e0(puVar10);
        uVar3 = DAT_180028040;
      }
      **(ulonglong **)*param_1 = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 8) = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 0x10) = uVar3;
    }
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x1800107f4; Evidence: ev_51e3a57d5dff53b2f373049d81f07a2bf53a9f63f8c64e6271897083f63e084b */

void FUN_1800107f4(undefined8 param_1)

{
  _register_onexit_function(&DAT_180029568,param_1);
  return;
}


/* Address: 0x180010804; Evidence: ev_5a390709ad4e312ddf5eeb8318cdd7089986211b2646b7e43b2bbe1770016ece */

void FUN_180010804(undefined8 param_1)

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


/* Address: 0x180010848; Evidence: ev_60209816d43d7e50fa4cf3ec85c713931beac47b2fda8cee88e94aeb2facad65 */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180028040;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180028040;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}


/* Address: 0x180010870; Evidence: ev_0f176f9ce1083f1ec2e7c98f6732f102674081acd8fa9e6387eae8a2b74f7b04 */

/* Library Function - Single Match
    _register_onexit_function
   
   Library: Visual Studio 2019 Release */

void _register_onexit_function(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res8;
  undefined8 local_res10;
  undefined1 local_res18 [8];
  int local_res20 [2];
  int local_28 [2];
  undefined8 *local_20;
  undefined8 *local_18;
  
  local_20 = &local_res8;
  local_18 = &local_res10;
  local_res20[0] = 2;
  local_28[0] = 2;
  local_res8 = param_1;
  local_res10 = param_2;
  operator()<>(local_res18,local_28,&local_20,local_res20);
  return;
}


/* Address: 0x1800108cc; Evidence: ev_bfa9a9018c3a3ea997d6e03db508a901f63ad03c20d6da97395058714b1a6578 */

undefined8 FUN_1800108cc(void)

{
  undefined8 uVar1;
  
  _initialize_onexit_table((longlong *)&DAT_180029568);
  uVar1 = _initialize_onexit_table((longlong *)&DAT_180029580);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x1800108f4; Evidence: ev_aeadf98447c7fe2c2ca1fe18c38d9c566ae6bb5fe00d179b4bae1523cc68f382 */

undefined1 FUN_1800108f4(void)

{
  FUN_180010468();
  return 1;
}


/* Address: 0x180010904; Evidence: ev_63f75b5d78a4dcd6fcd6ed7f1b2ac168c73b5267617425b1d3b9eb5dc036242c */

undefined1 FUN_180010904(void)

{
  undefined8 uVar1;
  
  uVar1 = DAT_180028040;
  FUN_18000f7c0(DAT_180028040);
  FUN_18000f9d0(uVar1);
  FUN_180013cd0(uVar1);
  FUN_180013f50(uVar1);
  FUN_18000fe98(uVar1);
  return 1;
}


/* Address: 0x18001094c; Evidence: ev_e317d07fde7ae9c56f491319490334a6674c615783a3d641374c01674dce26ab */

undefined8 FUN_18001094c(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_180029820;
  uVar2 = (ulonglong)uVar1;
  *DAT_180029820 = *DAT_180029820 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_180029820 != (uint *)&DAT_180028250)) {
    uVar2 = FUN_1800116e0(DAT_180029820);
    DAT_180029820 = (uint *)&DAT_180028250;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}


/* Address: 0x18001098c; Evidence: ev_32ceafbc8ad0d29b422ee142d355caf22f8d517bdf195b4eaf9b1b8ab81273cb */

undefined1 FUN_18001098c(void)

{
  FUN_1800116e0(DAT_180029d60);
  DAT_180029d60 = (LPVOID)0x0;
  FUN_1800116e0(DAT_180029d68);
  DAT_180029d68 = (LPVOID)0x0;
  FUN_1800116e0(DAT_180029840);
  DAT_180029840 = (LPVOID)0x0;
  FUN_1800116e0(DAT_180029848);
  DAT_180029848 = (LPVOID)0x0;
  return 1;
}


/* Address: 0x1800109e8; Evidence: ev_d17b3faa62d786b28f2371d6f10236b6f05b3cb365fae14bfa3db8a673705b31 */

void FUN_1800109e8(void)

{
  FUN_180013b9c(&PTR_LAB_18001c6a0,(undefined8 *)&DAT_18001c7a0);
  return;
}


/* Address: 0x1800109fc; Evidence: ev_cacd06506d7e27854317118a310c3c8f13b5fdd60fb9efe37b857c1493437727 */

bool FUN_1800109fc(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_1800112e8();
  return p_Var1 != (__acrt_ptd *)0x0;
}


/* Address: 0x180010a10; Evidence: ev_6493e2df36e79f978cf57ff0b93e21b23be226046b312e20dcfab1d09f305d17 */

undefined1 FUN_180010a10(void)

{
  FUN_180011238();
  return 1;
}


/* Address: 0x180010a20; Evidence: ev_a710ba75dac3496027228b56f86e90fcc50fee0a9e6b792a89eb049998e34759 */

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
    if (DAT_180029d58 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_180013c1c(0x18001c6a0,0x18001c7a0);
  return uVar2;
}


/* Address: 0x180010a58; Evidence: ev_e83bbb31e564130b1dd8aa35519c8777ecc4cee0d8fb1374e1892c6168bf1250 */

undefined4 FUN_180010a58(void)

{
  undefined4 uVar1;
  
  uVar1 = FUN_180011418();
  return CONCAT31((int3)((uint)uVar1 >> 8),1);
}


/* Address: 0x180010a68; Evidence: ev_921f90f4d09a91a0ef291c44359b7179917c0dd2d35ba4ad1a9ca37c654e8937 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180010a68(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}


/* Address: 0x180010aa0; Evidence: ev_8be6e3cdc8c4e7fcc751dd039cc8ebf778ee14f4bb2acec53863b1a52d7035ec */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180010aa0(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x180010adc; Evidence: ev_553838f17ae1ddcb36f8deefd2ad60f1c77fa425d8ee15fd6731d36346549bed */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180010adc(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180011288();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180010afc; Evidence: ev_d5c3d6581dbf43490004fdd37adac273f4af977ca38fcdbfcc97ee6c4ec13d4c */

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
    FUN_180013cf0(0x16);
  }
  if ((DAT_1800280c0 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x180010b47;
    FUN_18000f650(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x180010b51;
  FUN_18000feb0(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180010b60; Evidence: ev_46c3f68c027110aaf64f3d3efe60efe9ae1e6fee21564e7818df0ee17c4cc1b3 */

undefined8 FUN_180010b60(char *param_1,longlong param_2,longlong param_3)

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
      p_Var2 = FUN_180010de4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000f91c();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_180010de4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000f91c();
  return 0x16;
}


/* Address: 0x180010be0; Evidence: ev_046b9338d0b07045c14d6552c4bea6e850d7f2349d0ed48293d435508f6736d2 */

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
      pvVar3 = HeapAlloc(DAT_180029918,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180015220();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000f990(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_180010de4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180010bf0; Evidence: ev_1c874b54265fc8c8458cc64484f23daf11c0234e047dd75a2bba1b00ca2c36ab */

void FUN_180010bf0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000f530(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_180011470(lVar1,param_1 + 3,param_1[1]);
  FUN_1800114dc(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}


/* Address: 0x180010c70; Evidence: ev_0ace3091ebd35a61d3a2ee46229f216816a87dd0a4b5e52e4b4dc3810a962edd */

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


/* Address: 0x180010ca4; Evidence: ev_4a2abd3ff07f9bc70b9be9b629a45b1c2d9c94ee597c5e8b311bf496c713e71f */

uint FUN_180010ca4(uint param_1)

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
      return *(uint *)(&DAT_18001c7a4 + (ulonglong)(param_1 - 1) * 8);
    }
    if (param_1 < 0x719) {
      uVar5 = 0x2d;
      uVar7 = 0;
      uVar8 = 0x2c;
      do {
        uVar9 = uVar5 >> 1;
        if (uVar9 == 0) {
          if (uVar5 != 0) {
            puVar4 = (uint *)(&DAT_18001c7a0 + uVar7 * 8);
            if (param_1 != *puVar4) {
              puVar4 = (uint *)0x0;
            }
LAB_180010d45:
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
        puVar4 = (uint *)(&DAT_18001c7a0 + lVar1 * 8);
        if (param_1 == *puVar4) goto LAB_180010d45;
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


/* Address: 0x180010d74; Evidence: ev_2e248063ab31c04f5525d6aa6863e5129ebdd2d78a8d793f278cf0dcab6867de */

void FUN_180010d74(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = FUN_180010dc0();
  *(uint *)p_Var2 = param_1;
  uVar1 = FUN_180010ca4(param_1);
  p_Var2 = FUN_180010de4();
  *(uint *)p_Var2 = uVar1;
  return;
}


/* Address: 0x180010d9c; Evidence: ev_c6daff9201d414e34f119d0ac8c1a6bf269ce5759ad8c613c67170490348c882 */

void FUN_180010d9c(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_180010ca4(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}


/* Address: 0x180010dc0; Evidence: ev_3d15f4562268f10c0567cd6cee2925d229cd0d6a5b659769d95f8600874e830b */

__acrt_ptd * FUN_180010dc0(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_1800112e8();
  p_Var2 = p_Var1 + 0x24;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_1800280d4;
  }
  return p_Var2;
}


/* Address: 0x180010de4; Evidence: ev_5079e445eef16b09106a83c7101958b297acfc23a937e143c766e6f0d281cf3e */

__acrt_ptd * FUN_180010de4(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_1800112e8();
  p_Var2 = p_Var1 + 0x20;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_1800280d0;
  }
  return p_Var2;
}


/* Address: 0x180010e08; Evidence: ev_f04a39ff835bd9ff5e214258ac3ced5e014a8eef7c71b2815b97b840b44a1026 */

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


/* Address: 0x180010e48; Evidence: ev_c0770dc150a13e00e94f74e9a7f859999014ce24825c3520bc2eaab9a87662fe */

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


/* Address: 0x180010e88; Evidence: ev_29f5358a4135159ea99274793efd1a727b42bbcf6dde24290998fcf8095d9d48 */

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


/* Address: 0x180010ed0; Evidence: ev_09530159c0d4d5af08450f28a7c37c1e62e6886404be63aa51fd7e0d4a46f428 */

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
    if ((iVar1 == 1) && (piVar2 != (int *)&DAT_180028250)) {
      FUN_1800116e0(piVar2);
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180010f30; Evidence: ev_37a106745250e35851978febd1580f9326bc4cde9b56eadb6dc88b6271740218 */

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
  local_28 = &DAT_1800295a0;
  *(undefined4 *)(param_1 + 0x28) = 1;
  *(undefined **)param_1 = &DAT_18001c500;
  *(undefined4 *)(param_1 + 0x3a8) = 1;
  *(undefined **)(param_1 + 0x88) = &DAT_180028250;
  *(undefined2 *)(param_1 + 0xbc) = 0x43;
  *(undefined2 *)(param_1 + 0x1c2) = 0x43;
  *(undefined8 *)(param_1 + 0x3a0) = 0;
  local_30 = param_1;
  operator()<>(local_res10,local_res20,&local_20,local_res18);
  operator()<>(local_res10,local_38 + 1,&local_18,local_38);
  return;
}


/* Address: 0x180011000; Evidence: ev_56509fb7eebb95af69b0b135e9464699e222cac4bf142c526ded9df1baa638e3 */

void FUN_180011000(__acrt_ptd *param_1)

{
  if (param_1 != (__acrt_ptd *)0x0) {
    destroy_ptd_array(param_1);
    FUN_1800116e0(param_1);
  }
  return;
}


/* Address: 0x180011020; Evidence: ev_7973b4f865676738067d3656788d8b43c8bb6dc3bf25b1f4378d1273eaed77d5 */

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
  if (*(undefined **)param_1 != &DAT_18001c500) {
    FUN_1800116e0(*(undefined **)param_1);
  }
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x70));
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x58));
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x60));
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x68));
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x48));
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x50));
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x78));
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x80));
  FUN_1800116e0(*(LPVOID *)(local_20 + 0x3c0));
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  operator()<>(local_res10,local_28 + 1,&local_10,local_28);
  return;
}


/* Address: 0x180011118; Evidence: ev_5cf6a0007a4bb50e198d670ced9f443921ddeb7c99d4c5eb32127a7b3d359d4b */

__acrt_ptd * FUN_180011118(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_1800280d8,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_1800280d8,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_1800280d8,(PVOID)0x0);
        FUN_1800116e0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_1800116e0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_1800280d8,(PVOID)0x0);
    FUN_1800116e0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}


/* Address: 0x1800111d0; Evidence: ev_9f130d5939e65236db240534942c85e254089a3e19c46263c37ea0452586d744 */

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
    if (((ppuVar1 != DAT_1800295a0) && (ppuVar1 != &PTR_DAT_1800280e0)) &&
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


/* Address: 0x180011238; Evidence: ev_23d484a804e4dec29ce37130b872f2ba9b0347938fde0612867d745f340308d8 */

void FUN_180011238(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_1800280d8 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_1800280d8);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_1800280d8,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_1800116e0(p_Var1);
  }
  return;
}


/* Address: 0x180011288; Evidence: ev_7e851714bc3943fb28e4f41dbd08774b1135a8aeeb24aa5914ebc7cc2ca4269e */

void FUN_180011288(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_1800112e8();
  if (p_Var1 != (__acrt_ptd *)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800112a4; Evidence: ev_91d9129354414edeaec4e48ebdd90a1be234d84b2e276d975a99fa5bda29a9fc */

void FUN_1800112a4(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_1800280d8 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_1800280d8);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_180011118();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_1800112e0;
    }
    return;
  }
LAB_1800112e0:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800112e8; Evidence: ev_fd5cf20d7146186d7494d0575798f54a06f8410b0e060b83b3869227e4ced1f7 */

__acrt_ptd * FUN_1800112e8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180029598 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_1800280d8 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_1800280d8);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_180011118();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_1800280d8 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18001367c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_180011118();
    }
  }
  return p_Var2;
}


/* Address: 0x180011378; Evidence: ev_b5bc6acb2c65b46be4a8aa6a2fb186a644272a1483c07890d995c2dab05787de */

__acrt_ptd * FUN_180011378(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_1800280d8 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_1800280d8);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_180011118(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}


/* Address: 0x1800113d4; Evidence: ev_cf6b99b1a53536a73dd2ef87c148d8d47b0683cb6bbfbd2eac90fcd3b5abb1cd */

ulonglong FUN_1800113d4(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180029598 = FUN_180013820();
  DAT_1800280d8 = FlsAlloc(FUN_180011000);
  uVar2 = CONCAT44(extraout_var,DAT_1800280d8);
  if (DAT_1800280d8 != 0xffffffff) {
    p_Var3 = FUN_1800112e8();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_180011418();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x180011418; Evidence: ev_4cac6585a78bd59f73b5cc8320341187b6718e02ba52020d199d7b594b5e2541 */

undefined4 FUN_180011418(void)

{
  BOOL in_EAX;
  
  if (DAT_1800280d8 != 0xffffffff) {
    in_EAX = FlsFree(DAT_1800280d8);
    DAT_1800280d8 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}


/* Address: 0x18001143c; Evidence: ev_bf4b7e0187ef7fce9b2823d4e6c2c5d9782618a3389d2866bb80dda7844044ad */

/* Library Function - Single Match
    __acrt_update_locale_info
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_update_locale_info(longlong param_1,longlong *param_2)

{
  undefined **ppuVar1;
  
  if ((*param_2 != DAT_1800295a0) && ((DAT_180028898 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x180011470; Evidence: ev_66bea6ca8c600a7a428b7be959f22940e31f498186873a2138ffd12fd4563e35 */

void FUN_180011470(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_1800295a0)[param_3]) && ((DAT_180028898 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x1800114a8; Evidence: ev_b3cb30b2cb1143983aeda5f27b110773b69ef89ed56bed30802ecb6de563fd64 */

void FUN_1800114a8(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_180029820) && ((DAT_180028898 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_180012d48();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x1800114dc; Evidence: ev_6b392a4fa3ba6aa9db1b4abc4214d00a675013dfc4eb64a5d4d0f517d2bf68f5 */

void FUN_1800114dc(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_180029820)[param_3]) && ((DAT_180028898 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_180012d48();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x180011514; Evidence: ev_d04587e3a824f96505ebd91a7687dc2c65100500c599e60fdd7400b00acc2e3d */

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
  for (plVar2 = &DAT_1800295a0; plVar2 != &DAT_1800295a8; plVar2 = plVar2 + 1) {
    if ((undefined **)*plVar2 != &PTR_DAT_1800280e0) {
      ppuVar1 = _updatetlocinfoEx_nolock(plVar2,&PTR_DAT_1800280e0);
      *plVar2 = (longlong)ppuVar1;
    }
  }
  __acrt_unlock(*(int *)param_3);
  return;
}


/* Address: 0x180011584; Evidence: ev_3d065c7dc750fb6b63e072aa0ced8d9aba5ecc6d06d72b27e52061901dc63472 */

undefined4 FUN_180011584(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18002959c;
  LOCK();
  DAT_18002959c = 1;
  UNLOCK();
  return uVar1;
}


/* Address: 0x180011590; Evidence: ev_b49caf9d54e9b1ff16e81166b67b920b31cab7622a70db8667bab955fa793850 */

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


/* Address: 0x1800115c0; Evidence: ev_d5db2c3003ce5e8202cae6080d296a4ca390665da8b78756691a3715aa09100e */

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
    BVar1 = InitializeCriticalSectionEx((LPCRITICAL_SECTION)(&DAT_1800295b0 + uVar2 * 0x28),4000,0);
    if (BVar1 == 0) {
      uVar2 = __acrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_180029808 = DAT_180029808 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 < 0xf);
  return CONCAT71((int7)(CONCAT44(extraout_var,BVar1) >> 8),1);
}


/* Address: 0x180011608; Evidence: ev_7cf4bfd49955248c53b7a52789e4eb5c1cd0e01f40a383f0d12913293fe724ad */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001161a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_1800295b0 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x180011624; Evidence: ev_f535753a31706320836de0f5644beed03d5eed7a1399795dda22adc47ab8360b */

/* Library Function - Single Match
    __acrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_180029808;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_1800295b0 + uVar1 * 0x28));
    DAT_180029808 = DAT_180029808 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18001165c; Evidence: ev_0b47d12b8cad801722a63024ecb4481f45968f95eb29dc1e435af4ff114e4f2a */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001166e. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_1800295b0 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x180011680; Evidence: ev_b30e9fb5e50c880b6fed63a3b72fe874339bb475b44a5449bfb2ca6a6d591f74 */

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
      pvVar3 = HeapAlloc(DAT_180029918,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180015220();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000f990(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_180010de4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x1800116e0; Evidence: ev_8b340fe522250a0d0f78a588390d94f40bed0fd015c5e83b8a9636ab50549567 */

void FUN_1800116e0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180029918,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180010ca4(DVar2);
    p_Var4 = FUN_180010de4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180011738; Evidence: ev_7b7adf4ea9f7425b72e5de7c7cc55f1a569d777161da3467e72bb091bd6f4532 */

uint FUN_180011738(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}


/* Address: 0x180011754; Evidence: ev_f1855ce8d9dc2377c60862b83f388bad8eee3fac1ca38aa7a7c8cb99b61b558b */

uint FUN_180011754(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}


/* Address: 0x18001176c; Evidence: ev_7d954c971fde8980faade9d6db6ee41d4e0fbd0c14306cb49c5aea6b2677eab4 */

bool FUN_18001176c(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_180011754();
  if ((char)uVar1 == '\0') {
    FUN_1800135bc(local_res8);
  }
  return local_res8[0] != 1;
}


/* Address: 0x1800117a0; Evidence: ev_570a72a9873bed04ce3c15c850dcdcb061d68b8c7c38ca5f868f5423204b6efa */

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
      pvVar3 = HeapAlloc(DAT_180029918,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180015220();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000f990(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_180010de4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18001182c; Evidence: ev_13558d0bf122d9a5d0c7046febc49a515a71b0e153dd2f93c98dfa8b258ca58b */

uint FUN_18001182c(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_1800116e0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_1800130dc(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_1800116e0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_1800130dc(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180010d74(DVar2);
      p_Var4 = FUN_180010de4();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_1800116e0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x1800119cc; Evidence: ev_dd955413cfe24a470e55d60084d8e4c34f78bc9c6e83cc68d003513b551db732 */

uint FUN_1800119cc(LPCWSTR param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_1800116e0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != L'\0') {
      iVar1 = FUN_18001316c(param_4,0,param_1,-1,(LPSTR)0x0,0,(LPBOOL)0x0,(LPBOOL)0x0);
      uVar7 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        uVar6 = *(ulonglong *)(param_2 + 0x18);
        if (uVar6 < uVar7) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_1800116e0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_18001316c(param_4,0,param_1,-1,*(LPSTR *)(param_2 + 0x10),(int)uVar6,(LPBOOL)0x0
                              ,(LPBOOL)0x0);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180010d74(DVar2);
      p_Var4 = FUN_180010de4();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_1800116e0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x180011b78; Evidence: ev_301fc46bc8bfd00e2defd9f5a78c3336329886c6d9e3829fafe97ae7945d414a */

ulonglong FUN_180011b78(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_180010de4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000f91c();
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
      pbVar4 = FUN_1800157d0(pbVar4,(byte *)&local_res10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_180011db4((longlong)*param_1,0,0,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_1800116e0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_180011cc7;
        }
      }
      else {
        uVar10 = FUN_180011f38((uchar *)*param_1,pbVar4,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_1800116e0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_180011cc7;
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
      FUN_1800116e0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_1800116e0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_180011cc7:
      FUN_1800116e0(plVar8);
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
          iVar1 = FUN_180015600(pcVar9,(longlong)(local_res20 + (local_res18 - (longlong)pcVar9)),
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
      FUN_1800116e0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_1800116e0((LPVOID)*plVar11);
      }
      FUN_1800116e0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x180011db4; Evidence: ev_8bf024672de0fd99553a2e2d1a7fe37dd3f83759a8b0edecbebe9fd993b71ecc */

undefined8 FUN_180011db4(longlong param_1,longlong param_2,ulonglong param_3,longlong *param_4)

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
  if (((param_3 != 0) && (iVar1 = FUN_180015600(pcVar2,uVar8,param_2,param_3), iVar1 != 0)) ||
     (iVar1 = FUN_180015600(pcVar2 + param_3,uVar8 - param_3,param_1,uVar6), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  if (param_4[1] == param_4[2]) {
    if (*param_4 == 0) {
      pvVar3 = _calloc_base(4,8);
      *param_4 = (longlong)pvVar3;
      FUN_1800116e0((LPVOID)0x0);
      lVar4 = *param_4;
      if (lVar4 != 0) {
        param_4[1] = lVar4;
        param_4[2] = lVar4 + 0x20;
        goto LAB_180011f0a;
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
          FUN_1800116e0((LPVOID)0x0);
          goto LAB_180011f0a;
        }
        FUN_1800116e0((LPVOID)0x0);
      }
    }
    uVar7 = 0xc;
    FUN_1800116e0(pcVar2);
  }
  else {
LAB_180011f0a:
    *(char **)param_4[1] = pcVar2;
    param_4[1] = param_4[1] + 8;
  }
  FUN_1800116e0((LPVOID)0x0);
  return uVar7;
}


/* Address: 0x180011f38; Evidence: ev_295ddda12eed4dcddfeb2c9ce12cbcff8b0671d2a966dca0f65460d783577521 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180011f38(uchar *param_1,uchar *param_2,longlong *param_3)

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
  
  local_48 = DAT_180028040 ^ (ulonglong)auStackY_378;
  while ((param_2 != param_1 &&
         ((0x2d < (byte)(*param_2 - 0x2f) ||
          ((0x200000000801U >> ((longlong)(char)(*param_2 - 0x2f) & 0x3fU) & 1) == 0))))) {
    param_2 = (uchar *)FUN_180015b88(param_1,param_2);
  }
  if ((*param_2 == ':') && (param_2 != param_1 + 1)) {
    uVar5 = FUN_180011db4((longlong)param_1,0,0,param_3);
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
    FUN_1800188a0((undefined1 (*) [32])&local_298,0,0x250);
    local_338 = 0;
    local_330 = 0;
    local_328 = (LPCWSTR)0x0;
    local_320 = 0;
    local_318 = 0;
    local_310 = '\0';
    FUN_18000f2b0(&local_308,(longlong *)0x0);
    if (*(int *)(local_300 + 0xc) == 0xfde9) {
      if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
      uVar3 = 0xfde9;
    }
    else {
      IVar6 = FUN_180013618();
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
    uVar3 = FUN_18001182c((char *)param_1,(longlong)&local_338,local_348,uVar3);
    lpFileName = local_328;
    if (uVar3 != 0) {
      lpFileName = (LPCWSTR)0x0;
    }
    hFindFile = FindFirstFileExW(lpFileName,FindExInfoStandard,&local_298,FindExSearchNameMatch,
                                 (LPVOID)0x0,0);
    if (hFindFile == (HANDLE)0xffffffffffffffff) {
      uVar5 = FUN_180011db4((longlong)param_1,0,0,param_3);
      uVar5 = uVar5 & 0xffffffff;
      if (local_310 != '\0') {
        FUN_1800116e0(local_328);
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
        FUN_18000f2b0(&local_2e8,(longlong *)0x0);
        uVar3 = 0xfde9;
        if (*(int *)(local_2e0 + 0xc) == 0xfde9) {
          if (local_2d0 != '\0') {
            *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
          }
        }
        else {
          IVar6 = FUN_180013618();
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
        uVar3 = FUN_1800119cc(local_298.cFileName,(longlong)&local_2c8,local_348,uVar3);
        pcVar2 = local_2b8;
        pcVar8 = local_2b8;
        if (uVar3 != 0) {
          pcVar8 = (char *)0x0;
        }
        if ((*pcVar8 == '.') && ((pcVar8[1] == '\0' || ((pcVar8[1] == '.' && (pcVar8[2] == '\0')))))
           ) {
          if (local_2a0 != '\0') {
            FUN_1800116e0(local_2b8);
          }
        }
        else {
          uVar7 = FUN_180011db4((longlong)pcVar8,(longlong)param_1,uVar5,param_3);
          if ((int)uVar7 != 0) {
            if (local_2a0 != '\0') {
              FUN_1800116e0(pcVar2);
            }
            FindClose(hFindFile);
            if (local_310 == '\0') {
              return uVar7 & 0xffffffff;
            }
            FUN_1800116e0(local_328);
            return uVar7 & 0xffffffff;
          }
          uVar5 = local_340;
          if (local_2a0 != (char)uVar7) {
            FUN_1800116e0(pcVar2);
            uVar5 = local_340;
          }
        }
        BVar4 = FindNextFileW(hFindFile,&local_298);
      } while (BVar4 != 0);
      lVar9 = param_3[1] - *param_3 >> 3;
      if (lVar10 != lVar9) {
        FUN_180015260((undefined1 *)(*param_3 + lVar10 * 8),lVar9 - lVar10,8,&LAB_180011818);
      }
      FindClose(hFindFile);
      if (local_310 != '\0') {
        FUN_1800116e0(local_328);
      }
      uVar5 = 0;
    }
  }
  return uVar5;
}


/* Address: 0x180012298; Evidence: ev_f8f36a92bfd1237585d0c1e60e1ea9f0dc9109241d670575f521a2de0d38fca5 */

ulonglong thunk_FUN_180011b78(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_180010de4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000f91c();
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
      pbVar4 = FUN_1800157d0(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_180011db4((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_1800116e0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_180011cc7;
        }
      }
      else {
        uVar10 = FUN_180011f38((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_1800116e0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_180011cc7;
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
      FUN_1800116e0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_1800116e0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_180011cc7:
      FUN_1800116e0(plVar8);
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
          iVar1 = FUN_180015600(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
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
      FUN_1800116e0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_1800116e0((LPVOID)*plVar11);
      }
      FUN_1800116e0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x1800122a0; Evidence: ev_aecdb5a39ad1d809b7bc37d71476623b126ac5f7f9e0abf8fd5181bcac65dfd9 */

undefined4 FUN_1800122a0(LPCWSTR param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      iVar1 = FUN_18001316c(param_4,0,param_1,-1,(LPSTR)0x0,0,(LPBOOL)0x0,(LPBOOL)0x0);
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < (ulonglong)(longlong)iVar1) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          goto LAB_1800122f4;
        }
        iVar1 = FUN_18001316c(param_4,0,param_1,-1,*(LPSTR *)(param_2 + 0x10),
                              (int)*(ulonglong *)(param_2 + 0x18),(LPBOOL)0x0,(LPBOOL)0x0);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180010d74(DVar2);
      p_Var3 = FUN_180010de4();
      return *(undefined4 *)p_Var3;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
LAB_1800122f4:
      p_Var3 = FUN_180010de4();
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


/* Address: 0x1800123bc; Evidence: ev_303519ceb5f0c140dc32fc15adf4ca0e3abf9d4e2687195f9d18c39c2402a2c1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800123bc(HMODULE param_1,undefined8 param_2,ulonglong param_3)

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
  
  local_18 = DAT_180028040 ^ (ulonglong)auStack_2a8;
  DVar1 = GetModuleFileNameW(param_1,local_228,0x105);
  if (DVar1 == 0) {
    DVar1 = GetLastError();
    FUN_180010d74(DVar1);
    local_240 = 0;
  }
  else {
    local_240 = 0;
    local_238 = 0;
    local_260 = param_2;
    local_258 = param_3 & 0xffffffff;
    local_250 = param_2;
    local_248 = param_3 & 0xffffffff;
    FUN_18000f2b0(&local_280,(longlong *)0x0);
    uVar3 = 0xfde9;
    if (*(int *)(local_278 + 0xc) == 0xfde9) {
      if (local_268 != '\0') {
        *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
      }
    }
    else {
      IVar2 = FUN_180013618();
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
    FUN_1800122a0(local_228,(longlong)&local_260,local_288,uVar3);
    local_240 = local_240 & 0xffffffff;
  }
  return local_240;
}


/* Address: 0x1800124e0; Evidence: ev_d375556c1609a3abc31bf2a0e2dee0252658d1def27d26ec23dc08ae723699c8 */

void FUN_1800124e0(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  if (DAT_180029810 == (undefined1 (*) [32])0x0) {
LAB_180012593:
    p_Var5 = FUN_180010de4();
    *(undefined4 *)p_Var5 = 0x16;
    FUN_18000f91c();
  }
  else {
    if (puVar4 == (undefined8 *)0x0) {
      FUN_1800188a0(DAT_180029810,0,0x101);
      goto LAB_180012593;
    }
    lVar8 = 2;
    pauVar7 = DAT_180029810;
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
  if (DAT_180029818 != (undefined1 (*) [32])0x0) {
    pauVar7 = DAT_180029818;
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
      goto LAB_180012644;
    }
    FUN_1800188a0(DAT_180029818,0,0x100);
  }
  p_Var5 = FUN_180010de4();
  *(undefined4 *)p_Var5 = 0x16;
  FUN_18000f91c();
LAB_180012644:
  piVar2 = (int *)**(undefined8 **)param_3[1];
  LOCK();
  iVar1 = *piVar2;
  *piVar2 = *piVar2 + -1;
  UNLOCK();
  if ((iVar1 == 1) && ((undefined *)**(undefined8 **)param_3[1] != &DAT_180028250)) {
    FUN_1800116e0((LPVOID)**(undefined8 **)param_3[1]);
  }
  **(undefined8 **)param_3[1] = *(undefined8 *)(*(longlong *)*param_3 + 0x88);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x1800126b0; Evidence: ev_3dbc131e3164ebbbd5b59aa7d7fe2e8a79ed42ad25c2ffbde918dd3880cd588d */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_18000f2b0(&local_28,(longlong *)0x0);
  DAT_180029828 = 0;
  if (param_1 == -2) {
    DAT_180029828 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_180029828 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_180029828 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}


/* Address: 0x180012730; Evidence: ev_445504771f34bcd07933603222312e55e01a34303277efbf895751a9b5e8cb80 */

void FUN_180012730(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined2 *puVar3;
  longlong lVar4;
  
  FUN_1800188a0((undefined1 (*) [32])(param_1 + 0x18),0,0x101);
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
    *(undefined1 *)(param_1 + lVar4 + 0x18) = (&DAT_180028268)[lVar4];
    lVar4 = lVar1;
  } while (lVar1 < 0x101);
  do {
    lVar1 = lVar2 + 1;
    *(undefined1 *)(param_1 + lVar2 + 0x119) = (&DAT_180028369)[lVar2];
    lVar2 = lVar1;
  } while (lVar1 < 0x100);
  return;
}


/* Address: 0x1800127c8; Evidence: ev_5eed2c4454ff7121c072b36620793b0a7c9c63b2f8de100cba3a7dd29faec544 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800127c8(longlong param_1)

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
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_788;
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
    FUN_18001508c((longlong *)0x0,1,local_718,0x100,local_418,*(uint *)(param_1 + 4),0);
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


/* Address: 0x1800129c0; Evidence: ev_bb0ef897bd4aa25baeb2caa8f85b06155162f927db51a5752b85da1dd92be877 */

ulonglong FUN_1800129c0(int param_1,char param_2,__acrt_ptd *param_3,__crt_multibyte_data **param_4)

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
      FUN_1800116e0((LPVOID)0x0);
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
      uVar12 = FUN_180012d64(iVar8,(longlong)puVar9);
      uVar10 = uVar12 & 0xffffffff;
      if ((int)uVar12 == -1) {
        p_Var13 = FUN_180010de4();
        *(undefined4 *)p_Var13 = 0x16;
        FUN_1800116e0(puVar9);
        uVar10 = 0xffffffff;
      }
      else {
        if (param_2 == '\0') {
          FUN_180011584();
        }
        piVar2 = *(int **)(local_res18 + 0x88);
        LOCK();
        iVar8 = *piVar2;
        *piVar2 = *piVar2 + -1;
        UNLOCK();
        if ((iVar8 == 1) && (*(undefined **)(local_res18 + 0x88) != &DAT_180028250)) {
          FUN_1800116e0(*(undefined **)(local_res18 + 0x88));
        }
        *(undefined4 *)puVar9 = 1;
        *(undefined8 **)(local_res18 + 0x88) = puVar9;
        if ((DAT_180028898 & *(uint *)(local_res18 + 0x3a8)) == 0) {
          local_258 = &local_res18;
          local_250 = &local_res20;
          local_264[0] = 5;
          local_264[1] = 5;
          FUN_1800124e0(local_268,local_264 + 1,&local_258,local_264);
          if (param_2 != '\0') {
            PTR_DAT_180028240 = *local_res20;
          }
        }
        FUN_1800116e0((LPVOID)0x0);
      }
    }
  }
  return uVar10;
}


/* Address: 0x180012c30; Evidence: ev_89a15283268403b6acee25c8acd8d7aef9ffbb714550b694872f394adaf7b5fa */

/* Library Function - Single Match
    struct __crt_multibyte_data * __ptr64 __cdecl update_thread_multibyte_data_internal(struct
   __acrt_ptd * __ptr64 const,struct __crt_multibyte_data * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

__crt_multibyte_data * __cdecl
update_thread_multibyte_data_internal(__acrt_ptd *param_1,__crt_multibyte_data **param_2)

{
  int iVar1;
  __crt_multibyte_data *p_Var2;
  
  if (((*(uint *)(param_1 + 0x3a8) & DAT_180028898) == 0) || (*(longlong *)(param_1 + 0x90) == 0)) {
    __acrt_lock(5);
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
    if (p_Var2 != *param_2) {
      if (p_Var2 != (__crt_multibyte_data *)0x0) {
        LOCK();
        iVar1 = *(int *)p_Var2;
        *(int *)p_Var2 = *(int *)p_Var2 + -1;
        UNLOCK();
        if ((iVar1 == 1) && (p_Var2 != (__crt_multibyte_data *)&DAT_180028250)) {
          FUN_1800116e0(p_Var2);
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


/* Address: 0x180012ce8; Evidence: ev_96e226e8112926931232192c824fa05f302d948d627b2abd527f114f0b3524f8 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_18002982c == '\0') {
    DAT_180029818 = &DAT_180028590;
    DAT_180029820 = &DAT_180028250;
    DAT_180029810 = &DAT_180028480;
    p_Var1 = (__acrt_ptd *)FUN_1800112a4();
    in_RAX = FUN_1800129c0(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_180029820);
    DAT_18002982c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180012d48; Evidence: ev_3f5d60163438c0705c54fbbd692e49fb8c73df7fca6e4daf370723d0e63d1c5f */

void FUN_180012d48(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = (__acrt_ptd *)FUN_180011288();
  update_thread_multibyte_data_internal(p_Var1,(__crt_multibyte_data **)&DAT_180029820);
  return;
}


/* Address: 0x180012d64; Evidence: ev_4d1c63aae433af3d450583842428ea07f5afbbfaff425a391486558760395198 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180012d64(int param_1,longlong param_2)

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
  
  local_30 = DAT_180028040 ^ (ulonglong)auStack_68;
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
LAB_180012ffc:
    FUN_180012730(param_2);
    return 0;
  }
  puVar6 = &DAT_1800286a0;
  uVar14 = 1;
  pwVar17 = pwVar8;
  do {
    if (*puVar6 == uVar4) {
      FUN_1800188a0((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
      pbVar18 = &DAT_180028690;
      lVar9 = 4;
      pbVar7 = &DAT_1800286b0 + (longlong)pwVar17 * 0x30;
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
                    (((longlong)pwVar17 * 0x30 - param_2) + 0x180028698 + (longlong)puVar13);
        puVar13 = puVar13 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      goto LAB_180012ff2;
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
      if (DAT_180029828 == 0) {
        return 0xffffffff;
      }
      goto LAB_180012ffc;
    }
    FUN_1800188a0((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
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
LAB_180012ff2:
  FUN_1800127c8(param_2);
  return 0;
}


/* Address: 0x18001302c; Evidence: ev_3d3d821032a5e31b8c44c1234eec481a9ee5522cf001caaca9f33fb89a54a1e9 */

undefined8 FUN_18001302c(longlong *param_1,uint param_2,uint param_3,byte param_4)

{
  undefined8 uVar1;
  longlong local_28;
  longlong *local_20;
  longlong local_18;
  char local_10;
  
  FUN_18000f2b0(&local_28,param_1);
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


/* Address: 0x1800130a0; Evidence: ev_35f7b8514c39be02ea3961ca8125c87a47f9f0912fbcc3e0997562d532d0be8d */

void FUN_1800130a0(uint param_1)

{
  FUN_18001302c((longlong *)0x0,param_1,0,4);
  return;
}


/* Address: 0x1800130b4; Evidence: ev_d2d03df547b292ff7f709266fc0c502deeb6d1809a9f79b648ec9f2a4730a53a */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined1 FUN_1800130b4(void)

{
  DAT_180029850 = GetCommandLineA();
  _DAT_180029858 = GetCommandLineW();
  return 1;
}


/* Address: 0x1800130dc; Evidence: ev_dbc1eddf191ed952a51314dd55f5f41893a26940690c1908ab0077feb9791a42 */

void FUN_1800130dc(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_180013129:
          if (!bVar1) goto LAB_18001312d;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_180013167;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_180013129;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_18001312d;
LAB_180013167:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_18001312d;
  }
  param_2 = 0;
LAB_18001312d:
                    /* WARNING: Could not recover jumptable at 0x00018001312d. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}


/* Address: 0x18001316c; Evidence: ev_bb6ab8b8f86cf8ae0ed9a06998c33bc9a230c6cf44969585b070a2bccdc65455 */

void FUN_18001316c(uint param_1,uint param_2,LPCWSTR param_3,int param_4,LPSTR param_5,int param_6,
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
    if (param_1 == 0xdeac) goto LAB_18001320c;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_18001320c;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_1800131fd;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_18001320c;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_18001320c;
    iVar1 = param_1 - 65000;
LAB_1800131fd:
    if (iVar1 == 0) goto LAB_18001320c;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    dwFlags = param_2 & 0xffffff7f;
  }
LAB_18001320c:
  lpUsedDefaultChar = param_8;
  if ((param_1 - 65000 < 2) &&
     (param_7 = pBVar2, lpUsedDefaultChar = pBVar2, param_8 != (LPBOOL)0x0)) {
    *param_8 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x000180013243. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,dwFlags,param_3,param_4,param_5,param_6,(LPCSTR)param_7,
                      lpUsedDefaultChar);
  return;
}


/* Address: 0x18001324c; Evidence: ev_2ee966f95d78b509a8e2ec9634fd79d517ac14cd603d9a89d5aaaf3cb3148292 */

LPSTR FUN_18001324c(void)

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
    iVar2 = FUN_18001316c(0,0,pWVar3,iVar7,(LPSTR)0x0,0,(LPBOOL)0x0,(LPBOOL)0x0);
    if (iVar2 != 0) {
      pCVar6 = _malloc_base((longlong)iVar2);
      if (pCVar6 != (LPSTR)0x0) {
        iVar2 = FUN_18001316c(0,0,pWVar3,iVar7,pCVar6,iVar2,(LPBOOL)0x0,(LPBOOL)0x0);
        if (iVar2 == 0) {
          FUN_1800116e0(pCVar6);
          pCVar6 = (LPSTR)0x0;
        }
        else {
          FUN_1800116e0((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pCVar6;
      }
      FUN_1800116e0((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPSTR)0x0;
}


/* Address: 0x180013360; Evidence: ev_9bb6420eea8fd7865c38ec56dc86d97034fa2ed9fa048a217f0a4f3994677c41 */

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
      FUN_1800188a0((undefined1 (*) [32])((longlong)pvVar3 + uVar2),0,uVar4 - uVar2);
    }
  }
  else {
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 0xc;
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x180013408; Evidence: ev_8394583fa2b05eb7729b4747a4173b781fd7e3e4fdd0042a298f7230627c16b6 */

FARPROC FUN_180013408(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
LAB_1800134fa:
      __acrt_lock(0xe);
      local_res18[0] = 0;
      BVar5 = VirtualProtect(&DAT_18002c000,0x100,4,local_res18);
      if (BVar5 != 0) {
        pFVar6 = pFVar7;
        if (pFVar7 == (FARPROC)0x0) {
          pFVar6 = (FARPROC)0xffffffffffffffff;
        }
        LOCK();
        (&DAT_18002c000)[param_1] = pFVar6;
        UNLOCK();
        BVar5 = VirtualProtect(&DAT_18002c000,0x100,2,local_res18);
        if (BVar5 != 0) {
          __acrt_unlock(0xe);
          return pFVar7;
        }
      }
                    /* WARNING: Subroutine does not return */
      abort();
    }
    uVar2 = *param_3;
    hLibModule = (HMODULE)(&DAT_180029860)[uVar2];
    if (hLibModule == (HMODULE)0x0) {
      lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_datetime_l1_1_1_18001cff0)[uVar2];
      hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
      if ((hLibModule != (HMODULE)0x0) ||
         ((((DVar3 = GetLastError(), DVar3 == 0x57 &&
            (iVar4 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar4 != 0)) &&
           (iVar4 = wcsncmp(lpLibFileName,L"ext-ms-",7), iVar4 != 0)) &&
          (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0))))
      {
        LOCK();
        lVar1 = (&DAT_180029860)[uVar2];
        (&DAT_180029860)[uVar2] = hLibModule;
        UNLOCK();
        if (lVar1 != 0) {
          FreeLibrary(hLibModule);
        }
        goto LAB_1800135a0;
      }
      LOCK();
      (&DAT_180029860)[uVar2] = 0xffffffffffffffff;
      UNLOCK();
    }
    else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_1800135a0:
      pFVar7 = GetProcAddress(hLibModule,param_2);
      goto LAB_1800134fa;
    }
    param_3 = param_3 + 1;
  } while( true );
}


/* Address: 0x1800135bc; Evidence: ev_a7dfc4f755eb8a0311476ddda4971f5e5779a158bbdf7d2338c20d0c1659ed07 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_1800135bc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18002c0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18002c0d0;
  if ((DAT_18002c0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180013408(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001d63c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}


/* Address: 0x180013618; Evidence: ev_e4deea361f410cb4573371a4468b55e50826e55cd332cdabe4496e895681bfec */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180013618(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18002c000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18002c000;
  if ((DAT_18002c000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180013408(0,"AreFileApisANSI",(uint *)&DAT_18001d5d8,(uint *)&DAT_18001d5dc),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}


/* Address: 0x180013664; Evidence: ev_ba591f9e5a52f842c60ef219c62dc329be424d8cef0af48c7611246beb7e985a */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180013664. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}


/* Address: 0x18001366c; Evidence: ev_8920f7d28afd0fb4f66ee510eaf16889a602b021fdc1d4ad59aada866de3e046 */

BOOL __stdcall FlsFree(DWORD dwFlsIndex)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018001366c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsFree(dwFlsIndex);
  return BVar1;
}


/* Address: 0x180013674; Evidence: ev_5116d91d363c1d759dce0f89e4ee925b1df768637717b74ca433b7b3b19f5387 */

PVOID __stdcall FlsGetValue(DWORD dwFlsIndex)

{
  PVOID pvVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180013674. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  pvVar1 = FlsGetValue(dwFlsIndex);
  return pvVar1;
}


/* Address: 0x18001367c; Evidence: ev_a124790b2ce071efcbecc4507d53f887492d8b47383c013f9c0c0bb4f80a38ae */

void FUN_18001367c(void)

{
                    /* WARNING: Could not recover jumptable at 0x000180013683. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*DAT_18002c018)();
  return;
}


/* Address: 0x180013688; Evidence: ev_2532717d8f8434a6fe307bbce97724f33e687a49ec1c6e1f24ecb97af74ff9ec */

BOOL __stdcall FlsSetValue(DWORD dwFlsIndex,PVOID lpFlsData)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180013688. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsSetValue(dwFlsIndex,lpFlsData);
  return BVar1;
}


/* Address: 0x180013690; Evidence: ev_6679ce0daffa97c5c969f19fb4bf5bccabaf79d4c13b117fe945db5941701cf5 */

BOOL __stdcall
InitializeCriticalSectionEx(LPCRITICAL_SECTION lpCriticalSection,DWORD dwSpinCount,DWORD Flags)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180013690. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = InitializeCriticalSectionEx(lpCriticalSection,dwSpinCount,Flags);
  return BVar1;
}


/* Address: 0x180013698; Evidence: ev_e2b7d43ea32427630b2bf3f470eb6960ef7624c28575182773335f9242db58bb */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180013698(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18002c090 == (FARPROC)0xffffffffffffffff) {
LAB_180013743:
    Locale = FUN_18001378c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18002c090;
    if (DAT_18002c090 == (FARPROC)0x0) {
      pFVar1 = FUN_180013408(0x12,"LCMapStringEx",(uint *)&DAT_18001d608,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180013743;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}


/* Address: 0x18001378c; Evidence: ev_e49de2bfa02007a8fe29437b2e9aebd7c8322b8d6150d966be425e8252dfafb3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18001378c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18002c0a0 == (FARPROC)0xffffffffffffffff) {
LAB_1800137db:
    FUN_1800160dc(param_1);
  }
  else {
    pFVar1 = DAT_18002c0a0;
    if (DAT_18002c0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_180013408(0x14,"LocaleNameToLCID",(uint *)&DAT_18001d620,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_1800137db;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}


/* Address: 0x1800137f0; Evidence: ev_b1a5adc7ce0fba111f165c6e112477d6194617089ae31163b2685136fabe536b */

bool FUN_1800137f0(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18002c000,0x100,2,local_res8);
  return BVar1 != 0;
}


/* Address: 0x180013820; Evidence: ev_99794639f6aad7ddb8a32799bf20fd36a9c8323ca0eb0a520c4a20b4e4170a7d */

bool FUN_180013820(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18002c018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18002c018 == 0;
    if (!bVar2) goto LAB_18001385a;
    pFVar1 = FUN_180013408(3,"FlsGetValue2",(uint *)&DAT_18001d5f0,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18001385a:
  return !bVar2;
}


/* Address: 0x180013864; Evidence: ev_08e5576cdac26752e9b29591b235f27c955092281fe2e7650199713e0ef5a21a */

/* Library Function - Single Match
    __acrt_uninitialize_winapi_thunks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_winapi_thunks(char param_1)

{
  HMODULE hLibModule;
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  if (param_1 == '\0') {
    puVar1 = &DAT_180029860;
    do {
      hLibModule = (HMODULE)*puVar1;
      if (hLibModule != (HMODULE)0x0) {
        if (hLibModule != (HMODULE)0xffffffffffffffff) {
          FreeLibrary(hLibModule);
        }
        *puVar1 = 0;
      }
      puVar1 = puVar1 + 1;
      in_RAX = &DAT_180029918;
    } while (puVar1 != &DAT_180029918);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x1800138c0; Evidence: ev_a4a18497ca969505c99c8249ec69976f770e3f8eb9e7d9012b7861fdc9e4b057 */

bool FUN_1800138c0(void)

{
  DAT_180029918 = GetProcessHeap();
  return DAT_180029918 != (HANDLE)0x0;
}


/* Address: 0x180013918; Evidence: ev_82217702737fdced76aa400d8002960c308a70c88a44d5611be5a6a1299530ad */

void FUN_180013918(void)

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
  
  FUN_1800188a0((undefined1 (*) [32])&local_78,0,0x68);
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
    if ((int)DAT_180029d20 < (int)uVar7) {
      uVar7 = DAT_180029d20;
    }
    uVar8 = (ulonglong)uVar7;
    if (uVar7 != 0) {
      do {
        if ((((*(longlong *)pbVar4 != -1) && (*(longlong *)pbVar4 != -2)) && ((*puVar6 & 1) != 0))
           && (((*puVar6 & 8) != 0 || (DVar2 = GetFileType(*(HANDLE *)pbVar4), DVar2 != 0)))) {
          uVar3 = (ulonglong)((uint)lVar5 & 0x3f);
          lVar1 = (&DAT_180029920)[lVar5 >> 6];
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


/* Address: 0x180013a18; Evidence: ev_cb2c5fd9c93e210534c786b51187ff765e437da95134d1168fc7a6e5bc16f789 */

void FUN_180013a18(void)

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
    lVar2 = (&DAT_180029920)[(longlong)(int)uVar5 >> 6];
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
          goto LAB_180013af6;
        }
      }
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x40;
      *(undefined8 *)(lVar2 + 0x28 + uVar4 * 0x48) = 0xfffffffffffffffe;
      if (DAT_180029d58 != 0) {
        *(undefined4 *)(*(longlong *)(lVar6 + DAT_180029d58) + 0x18) = 0xfffffffe;
      }
    }
    else {
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x80;
    }
LAB_180013af6:
    uVar5 = uVar5 + 1;
    lVar6 = lVar6 + 8;
    if (uVar5 == 3) {
      return;
    }
  } while( true );
}


/* Address: 0x180013b20; Evidence: ev_06e5069e2ca19ef4b6ca543923d388f09719bcef18a68fc4e565de1596102115 */

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
    FUN_180013918();
    FUN_180013a18();
  }
  __acrt_unlock(7);
  return bVar2;
}


/* Address: 0x180013b5c; Evidence: ev_8085188242522b8850c6fc8766534a8975e15fac90976dd3dea6ca4474866ea7 */

/* Library Function - Single Match
    __acrt_uninitialize_lowio
   
   Library: Visual Studio 2019 Release */

undefined1 __acrt_uninitialize_lowio(void)

{
  ulonglong uVar1;
  
  uVar1 = 0;
  do {
    if (*(LPCRITICAL_SECTION *)((longlong)&DAT_180029920 + uVar1) != (LPCRITICAL_SECTION)0x0) {
      __acrt_lowio_destroy_handle_array(*(LPCRITICAL_SECTION *)((longlong)&DAT_180029920 + uVar1));
      *(undefined8 *)((longlong)&DAT_180029920 + uVar1) = 0;
    }
    uVar1 = uVar1 + 8;
  } while (uVar1 < 0x400);
  return 1;
}


/* Address: 0x180013b9c; Evidence: ev_9d4f55543fcabb6af620ab6dd11ceb0e637bce39c01e502e7a39e26a9ad28db4 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180013b9c(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x180013c1c; Evidence: ev_0ee4606cf414796c2f329ddec8723e8336042cb60a773b68dab174d86d9db05e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180013c1c(longlong param_1,longlong param_2)

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


/* Address: 0x180013c58; Evidence: ev_0644de23450022d6bad4c02d4c63ff42cc8aa44ce68c96813cf8a6353ac29a17 */

ulonglong FUN_180013c58(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180028040 & 0x3f;
  uVar2 = DAT_180029d38 ^ DAT_180028040;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x180013ca0; Evidence: ev_4746db42082df5048425f07cefb0aa965dc0bdda810b1f1e7c2901395d9fc150 */

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
  FUN_180013c58(local_res8,local_res18,local_res8,local_res10);
  return;
}


/* Address: 0x180013cd0; Evidence: ev_c77f3035161ba37d4407ceb32a560eca19990c4093f036a8fc71504eba19d87d */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180013cd0(undefined8 param_1)

{
  _DAT_180029d28 = param_1;
  _DAT_180029d30 = param_1;
  DAT_180029d38 = param_1;
  _DAT_180029d40 = param_1;
  return;
}


/* Address: 0x180013cf0; Evidence: ev_df5b218d0caee1b73ddbd02462179aa732620ca92f3f8aff5e0f31a6bb355561 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180013cf0(uint param_1)

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
LAB_180013d47:
    if (param_1 == 2) {
      puVar8 = (ulonglong *)&DAT_180029d28;
    }
    else if (param_1 == 6) {
LAB_180013de9:
      puVar8 = &DAT_180029d38;
      p_Var9 = p_Var10;
    }
    else if (param_1 == 0xf) {
      puVar8 = (ulonglong *)&DAT_180029d40;
    }
    else if (param_1 == 0x15) {
      puVar8 = (ulonglong *)&DAT_180029d30;
      p_Var9 = p_Var10;
    }
    else {
      if (param_1 == 0x16) goto LAB_180013de9;
      puVar8 = (ulonglong *)0x0;
      p_Var9 = p_Var10;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_180013d77;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_180013dc9;
      }
      goto LAB_180013d47;
    }
LAB_180013d77:
    p_Var9 = FUN_1800112e8();
    if (p_Var9 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar4 = *(longlong *)p_Var9;
    lVar2 = lVar4 + 0xc0;
    for (; lVar4 != lVar2; lVar4 = lVar4 + 0x10) {
      if (*(uint *)(lVar4 + 4) == param_1) goto LAB_180013dc4;
    }
    lVar4 = 0;
LAB_180013dc4:
    if (lVar4 == 0) {
LAB_180013dc9:
      p_Var9 = FUN_180010de4();
      *(undefined4 *)p_Var9 = 0x16;
      FUN_18000f91c();
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
    bVar6 = (byte)DAT_180028040 & 0x3f;
    pcVar7 = (code *)(((ulonglong)pcVar7 ^ DAT_180028040) >> bVar6 |
                     ((ulonglong)pcVar7 ^ DAT_180028040) << 0x40 - bVar6);
  }
  if (pcVar7 == (code *)0x1) goto LAB_180013ed2;
  if (pcVar7 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_18000feb0(3);
    pcVar7 = (code *)swi(3);
    uVar5 = (*pcVar7)();
    return uVar5;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar4 = *(longlong *)(p_Var9 + 8);
    *(longlong *)(p_Var9 + 8) = 0;
    if (param_1 == 8) {
      lVar2 = FUN_180011288();
      local_res10 = *(undefined4 *)(lVar2 + 0x10);
      lVar2 = FUN_180011288();
      *(undefined4 *)(lVar2 + 0x10) = 0x8c;
      goto LAB_180013e8a;
    }
  }
  else {
LAB_180013e8a:
    if (param_1 == 8) {
      lVar2 = *(longlong *)p_Var9;
      for (lVar3 = lVar2 + 0x30; lVar3 != lVar2 + 0xc0; lVar3 = lVar3 + 0x10) {
        *(undefined8 *)(lVar3 + 8) = 0;
      }
      goto LAB_180013ed2;
    }
  }
  *puVar8 = DAT_180028040;
LAB_180013ed2:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar7 != (code *)0x1) {
    if (param_1 == 8) {
      lVar2 = FUN_180011288();
      (*pcVar7)(8,*(undefined4 *)(lVar2 + 0x10));
    }
    else {
      (*pcVar7)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var9 + 8) = lVar4, param_1 == 8)) {
      lVar4 = FUN_180011288();
      *(undefined4 *)(lVar4 + 0x10) = local_res10;
    }
  }
  return 0;
}


/* Address: 0x180013f50; Evidence: ev_40c7fb091f8348bf8984d2c5ed34c7f977278955d661baa70349a9bfb5848ec5 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180013f50(undefined8 param_1)

{
  _DAT_180029d48 = param_1;
  return;
}


/* Address: 0x180013f58; Evidence: ev_18c49b9a0468816680c7a806a16be719db3a10d162d34e36f6f465016c64ddba */

void FUN_180013f58(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  uint uVar1;
  int iVar2;
  
  FUN_18001441c(*param_2);
  if ((*(longlong *)*param_3 != 0) &&
     (uVar1 = *(uint *)(*(longlong *)*param_3 + 0x14), (uVar1 >> 0xd & 1) != 0)) {
    if (((((byte)uVar1 & 3) == 2) && ((uVar1 & 0xc0) != 0)) || ((uVar1 >> 0xb & 1) != 0)) {
      if ((*(char *)param_3[2] != '\0') || ((*(uint *)(*(longlong *)*param_3 + 0x14) >> 1 & 1) != 0)
         ) {
        iVar2 = FUN_1800141c4(*(int **)*param_3);
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
  FUN_180014428(*param_4);
  return;
}


/* Address: 0x180013ff4; Evidence: ev_f6f5ded2150b338bffe5b80256b61670fbea7d01fc3ce6826efae3aeb71bb849 */

void FUN_180013ff4(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  plVar1 = DAT_180029d58 + DAT_180029d50;
  for (plVar3 = DAT_180029d58; local_40 = plVar3, plVar3 != plVar1; plVar3 = plVar3 + 1) {
    local_58 = *plVar3;
    if ((local_58 != 0) && (uVar2 = *(uint *)(local_58 + 0x14), (uVar2 >> 0xd & 1) != 0)) {
      if (((((byte)uVar2 & 3) == 2) && ((uVar2 & 0xc0) != 0)) || ((uVar2 >> 0xb & 1) != 0)) {
        local_20 = param_3[2];
        local_28 = param_3[1];
        local_30 = *param_3;
        local_38 = &local_58;
        local_50 = local_58;
        local_48 = local_58;
        FUN_180013f58(local_res10,&local_48,&local_38,&local_50);
      }
      else {
        *(int *)*param_3 = *(int *)*param_3 + 1;
      }
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x1800140d8; Evidence: ev_d9dc73bb5f84fb63d6b48d04fe7c400a465b889bea87797f52d065185a140edc */

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
  FUN_180013ff4(local_res10,local_28 + 1,&local_20,local_28);
  if (local_res8[0] != '\0') {
    local_res18[0] = local_res20[0];
  }
  return local_res18[0];
}


/* Address: 0x180014138; Evidence: ev_9828a5ccb53ec62dbfd39b8a5b5d7dfd5195530699a92c398b44852c60c7222c */

undefined8 FUN_180014138(int *param_1,longlong *param_2)

{
  WCHAR *pWVar1;
  uint uVar2;
  uint uVar3;
  
  if ((((byte)param_1[5] & 3) == 2) && ((param_1[5] & 0xc0U) != 0)) {
    uVar3 = *param_1 - param_1[2];
    param_1[4] = 0;
    pWVar1 = *(WCHAR **)(param_1 + 2);
    *(WCHAR **)param_1 = pWVar1;
    if (0 < (int)uVar3) {
      uVar2 = FUN_1800149a4((longlong)param_1);
      uVar2 = FUN_180016df4(uVar2,pWVar1,uVar3,param_2);
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


/* Address: 0x1800141c4; Evidence: ev_c9ec36fbaff72c7edfcf56d8d2d6be31f2234c1f8423c492bdb25022ed5d2c98 */

int FUN_1800141c4(int *param_1)

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
  local_20 = DAT_18002959c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_180028238;
    puStack_28 = PTR_DAT_180028240;
  }
  if (param_1 == (int *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_180014249;
  }
  uVar2 = FUN_180014138(param_1,local_48);
  if ((int)uVar2 == 0) {
    if (((uint)param_1[5] >> 0xb & 1) != 0) {
      iVar1 = FUN_1800149a4((longlong)param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_180014224;
    }
    iVar1 = 0;
  }
  else {
LAB_180014224:
    iVar1 = -1;
  }
LAB_180014249:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_18000f530(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_18000f530(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}


/* Address: 0x180014298; Evidence: ev_2e8301f50419dfad1bdba5410753843bf902957f89489dd6ff1d73812c1f352b */

int __cdecl common_flush_all(bool param_1)

{
  int iVar1;
  
  iVar1 = common_flush_all(true);
  return iVar1;
}


/* Address: 0x1800142a0; Evidence: ev_14bb2865866c8697328c23047b70be1bfb3698a1ef802a6d1b9e1533c57574d1 */

undefined8 FUN_1800142a0(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_180029d50 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_180029d50) goto LAB_1800142dd;
  }
  DAT_180029d50 = iVar4;
LAB_1800142dd:
  DAT_180029d58 = _calloc_base((longlong)DAT_180029d50,8);
  FUN_1800116e0((LPVOID)0x0);
  if (DAT_180029d58 == (LPVOID)0x0) {
    DAT_180029d50 = 3;
    DAT_180029d58 = _calloc_base(3,8);
    FUN_1800116e0((LPVOID)0x0);
    if (DAT_180029d58 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_1800287a8;
  puVar6 = &DAT_180028790;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_180029d58) = puVar6;
    if (*(longlong *)((&DAT_180029920)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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


/* Address: 0x1800143c0; Evidence: ev_7508b99fcc3d7c3e3f19281d41f003405f7c410ad63f1c12dad2258d47e383fc */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_180017244();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_180029d58));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_180029d58) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_1800116e0(DAT_180029d58);
  DAT_180029d58 = (LPVOID)0x0;
  return;
}


/* Address: 0x18001441c; Evidence: ev_d1b9bccc1e759f5c83bfb3872590ab445f2249221fcab0cb8d1bd77e602f654d */

void FUN_18001441c(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180014420. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x180014428; Evidence: ev_0ed79022109c3b734189255ddc82d5061bd2bd453411124d681c7ec675470154 */

void FUN_180014428(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001442c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x180014434; Evidence: ev_e6de56da38c6bd8045b9a47cc85ca6411282e067c0f10baedcc16176e77b3b13 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_180014434(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_180029d70 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_180010bf0(param_4);
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
              (iVar3 = FUN_1800130dc(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_1800130dc(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_1800147a4(param_1,param_2,param_3,(uint *)&DAT_180029d70,(longlong)param_4);
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


/* Address: 0x1800145ac; Evidence: ev_9a6f1142f8c3f37fb51006a90d54056aca3356d80e9e2abb8ad85ac6b13715a8 */

ulonglong FUN_1800145ac(byte *param_1)

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


/* Address: 0x1800145e4; Evidence: ev_10bf3a9c352e5ce52da317872a4a370cc52a5ce6983338c2ac1552983152047a */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800145e4(ulonglong param_1,byte *param_2,ulonglong param_3,uint *param_4,
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
  
  local_48 = DAT_180028040 ^ (ulonglong)auStack_78;
  puVar5 = (uint *)&DAT_180029d78;
  if (param_4 != (uint *)0x0) {
    puVar5 = param_4;
  }
  pbVar6 = &DAT_180022c80;
  uVar2 = 1;
  if (param_2 != (byte *)0x0) {
    pbVar6 = param_2;
    uVar2 = param_3;
  }
  puVar10 = (uint *)(-(ulonglong)(param_2 != (byte *)0x0) & param_1);
  if (uVar2 == 0) {
LAB_180014646:
    uVar2 = 0xfffffffffffffffe;
  }
  else {
    if (*(short *)((longlong)puVar5 + 6) == 0) {
      uVar3 = FUN_1800145ac(pbVar6);
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
LAB_1800146d1:
        uVar9 = (ulonglong)bVar7;
        uVar3 = uVar9;
        if (uVar2 <= uVar9) {
          uVar3 = uVar2;
        }
        while ((ulonglong)((longlong)pbVar6 - (longlong)param_2) < uVar3) {
          bVar1 = *pbVar6;
          pbVar6 = pbVar6 + 1;
          if ((bVar1 & 0xc0) != 0x80) goto LAB_18001477a;
          uVar4 = bVar1 & 0x3f | uVar4 << 6;
        }
        if (uVar3 < uVar9) {
          *(ushort *)(puVar5 + 1) = (ushort)uVar8 & 0xff;
          *(ushort *)((longlong)puVar5 + 6) = (ushort)(byte)(bVar7 - (char)uVar3);
          *puVar5 = uVar4;
          goto LAB_180014646;
        }
        if ((0x7ff < uVar4 - 0xd800) && (uVar4 < 0x110000)) {
          auStack_60[2] = 0x80;
          auStack_60[3] = 0x800;
          auStack_60[4] = 0x10000;
          if (auStack_60[uVar8 & 0xff] <= uVar4) {
            if (puVar10 != (uint *)0x0) {
              *puVar10 = uVar4;
            }
            uVar2 = FUN_18001739c(-(ulonglong)(uVar4 != 0) & uVar9,(undefined8 *)puVar5);
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
      if ((((byte)(bVar1 - 2) < 3) && (bVar7 != 0)) && (bVar7 < bVar1)) goto LAB_1800146d1;
    }
LAB_18001477a:
    uVar2 = FUN_1800173a4((undefined8 *)puVar5,param_5);
  }
  return uVar2;
}


/* Address: 0x1800147a4; Evidence: ev_eb4db4ec435c433daea9bc4c23ce8214267ff85213186ef540862cc3d0bff304 */

void FUN_1800147a4(undefined2 *param_1,byte *param_2,ulonglong param_3,uint *param_4,
                  longlong param_5)

{
  ulonglong uVar1;
  uint local_18 [4];
  
  local_18[0] = 0;
  uVar1 = FUN_1800145e4((ulonglong)local_18,param_2,param_3,param_4,param_5);
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


/* Address: 0x1800147ec; Evidence: ev_3879980325d0e121d0b2d6789509c82d813af82c3163d01f356a65ce78bb4e1f */

byte * FUN_1800147ec(ushort *param_1,undefined8 *param_2,ulonglong param_3,uint *param_4,
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
      uVar5 = FUN_1800145e4(0,pbVar4,uVar5,param_4,param_5);
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
      uVar5 = FUN_1800145e4((ulonglong)local_res8,pbVar4,uVar5,param_4,param_5);
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


/* Address: 0x1800149a4; Evidence: ev_a98eefa370a66ebfdd394988e70c31827baf6c53862f71407f21a7ab7806cd90 */

undefined4 FUN_1800149a4(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_180010de4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000f91c();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}


/* Address: 0x1800149cc; Evidence: ev_403d4c55d6e79e725f61a4751027012d3c7e7be018af61846028fc8640a44b91 */

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
    if (((undefined *)puVar2[-2] != &DAT_180028248) &&
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


/* Address: 0x180014a58; Evidence: ev_694f860b94edf3d988ee1816dafc4beaaee2bafdc340cfc9927cb3c64a2d6eef */

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
       (*(undefined ***)((longlong)param_1 + 0xf8) != &PTR_DAT_1800288a0)) &&
      (*(int **)((longlong)param_1 + 0xe0) != (int *)0x0)) &&
     (**(int **)((longlong)param_1 + 0xe0) == 0)) {
    piVar1 = *(int **)((longlong)param_1 + 0xf0);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_1800116e0(piVar1);
      __acrt_locale_free_monetary(*(longlong *)((longlong)param_1 + 0xf8));
    }
    piVar1 = *(int **)((longlong)param_1 + 0xe8);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_1800116e0(piVar1);
      __acrt_locale_free_numeric(*(undefined8 **)((longlong)param_1 + 0xf8));
    }
    FUN_1800116e0(*(LPVOID *)((longlong)param_1 + 0xe0));
    FUN_1800116e0(*(LPVOID *)((longlong)param_1 + 0xf8));
  }
  if ((*(int **)((longlong)param_1 + 0x100) != (int *)0x0) &&
     (**(int **)((longlong)param_1 + 0x100) == 0)) {
    FUN_1800116e0((LPVOID)(*(longlong *)((longlong)param_1 + 0x108) + -0xfe));
    FUN_1800116e0((LPVOID)(*(longlong *)((longlong)param_1 + 0x110) + -0x80));
    FUN_1800116e0((LPVOID)(*(longlong *)((longlong)param_1 + 0x118) + -0x80));
    FUN_1800116e0(*(LPVOID *)((longlong)param_1 + 0x100));
  }
  __acrt_locale_free_lc_time_if_unreferenced(*(undefined ***)((longlong)param_1 + 0x120));
  puVar3 = (undefined8 *)((longlong)param_1 + 0x128);
  lVar2 = 6;
  puVar4 = (undefined8 *)((longlong)param_1 + 0x38);
  do {
    if ((((undefined *)puVar4[-2] != &DAT_180028248) &&
        (piVar1 = (int *)*puVar4, piVar1 != (int *)0x0)) && (*piVar1 == 0)) {
      FUN_1800116e0(piVar1);
      FUN_1800116e0((LPVOID)*puVar3);
    }
    if (((puVar4[-3] != 0) && (piVar1 = (int *)puVar4[-1], piVar1 != (int *)0x0)) && (*piVar1 == 0))
    {
      FUN_1800116e0(piVar1);
    }
    puVar3 = puVar3 + 1;
    puVar4 = puVar4 + 4;
    lVar2 = lVar2 + -1;
  } while (lVar2 != 0);
  FUN_1800116e0(param_1);
  return;
}


/* Address: 0x180014bd0; Evidence: ev_92d9ad1879ae7859f041625afa1073a2b05af27a43c50c9564462050cad599d8 */

/* Library Function - Single Match
    __acrt_locale_add_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_add_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_18001c910)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + 1;
    UNLOCK();
    return iVar2 + 1;
  }
  return 0x7fffffff;
}


/* Address: 0x180014bf8; Evidence: ev_f0008756afb4c0d8cebf13e1c5d9ce76617630023c11441eaa71c39bada9bce3 */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_18001c910)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_1800116e0(param_1);
  }
  return;
}


/* Address: 0x180014c30; Evidence: ev_2dd7728a69f2e79ad772cb695592a94af9a0fabeb3947be9e96defdd52a24a6a */

/* Library Function - Single Match
    __acrt_locale_release_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_release_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_18001c910)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + -1;
    UNLOCK();
    return iVar2 + -1;
  }
  return 0x7fffffff;
}


/* Address: 0x180014c58; Evidence: ev_5ba4bbf907979254145a3454da179a1f83b5f06fbce9ec766e30f8a6110f5a20 */

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
      if (((undefined *)puVar2[-2] != &DAT_180028248) &&
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


/* Address: 0x180014d00; Evidence: ev_bb2fe653db520625b46415defb2b0675fb0aa763fd8187c52721197fec06ab14 */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_180011288();
  if (((DAT_180028898 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_1800295a0);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}


/* Address: 0x180014d70; Evidence: ev_94b5f29c1a20784230b14164066a1f3d4d2160686594bdf2d475738b38ac0712 */

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
         (ppuVar1 != &PTR_DAT_1800280e0)) {
        __acrt_free_locale(ppuVar1);
      }
    }
  }
  return param_2;
}


/* Address: 0x180014dd8; Evidence: ev_5a2f4da6a86bed1185b993378de8d257853916ebe2d4ab6a1a3513d29a45e040 */

/* Library Function - Single Match
    __acrt_locale_free_monetary
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_monetary(longlong param_1)

{
  if (param_1 != 0) {
    if (*(undefined **)(param_1 + 0x18) != PTR_DAT_1800288b8) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x18));
    }
    if (*(undefined **)(param_1 + 0x20) != PTR_DAT_1800288c0) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x20));
    }
    if (*(undefined **)(param_1 + 0x28) != PTR_DAT_1800288c8) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x28));
    }
    if (*(undefined **)(param_1 + 0x30) != PTR_DAT_1800288d0) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x30));
    }
    if (*(undefined **)(param_1 + 0x38) != PTR_DAT_1800288d8) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x38));
    }
    if (*(undefined **)(param_1 + 0x40) != PTR_DAT_1800288e0) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x40));
    }
    if (*(undefined **)(param_1 + 0x48) != PTR_DAT_1800288e8) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x48));
    }
    if (*(undefined **)(param_1 + 0x68) != PTR_DAT_180028908) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x68));
    }
    if (*(undefined **)(param_1 + 0x70) != PTR_DAT_180028910) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x70));
    }
    if (*(undefined **)(param_1 + 0x78) != PTR_DAT_180028918) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x78));
    }
    if (*(undefined **)(param_1 + 0x80) != PTR_DAT_180028920) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x80));
    }
    if (*(undefined **)(param_1 + 0x88) != PTR_DAT_180028928) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x88));
    }
    if (*(undefined **)(param_1 + 0x90) != PTR_DAT_180028930) {
      FUN_1800116e0(*(undefined **)(param_1 + 0x90));
    }
  }
  return;
}


/* Address: 0x180014ee4; Evidence: ev_3e1cedfb540f32274a45764693cf8c56ccc338fc1c61ba2efc9195011377dff3 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_1800288a0) {
      FUN_1800116e0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_1800288a8) {
      FUN_1800116e0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_1800288b0) {
      FUN_1800116e0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800288f8) {
      FUN_1800116e0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_180028900) {
      FUN_1800116e0((undefined *)param_1[0xc]);
    }
  }
  return;
}


/* Address: 0x180014f50; Evidence: ev_36bfd75f65460522e87f3eef9ef38c54061402e2395929059318361555cedfc9 */

void FUN_180014f50(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_1800116e0((LPVOID)*param_1);
  }
  return;
}


/* Address: 0x180014f84; Evidence: ev_1e25d8d269136ed8ff6583d42856161088bd2f86f7fa3966739a46415b976f72 */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_180014f50(param_1,7);
    FUN_180014f50(param_1 + 7,7);
    FUN_180014f50(param_1 + 0xe,0xc);
    FUN_180014f50(param_1 + 0x1a,0xc);
    FUN_180014f50(param_1 + 0x26,2);
    FUN_1800116e0((LPVOID)param_1[0x28]);
    FUN_1800116e0((LPVOID)param_1[0x29]);
    FUN_1800116e0((LPVOID)param_1[0x2a]);
    FUN_180014f50(param_1 + 0x2c,7);
    FUN_180014f50(param_1 + 0x33,7);
    FUN_180014f50(param_1 + 0x3a,0xc);
    FUN_180014f50(param_1 + 0x46,0xc);
    FUN_180014f50(param_1 + 0x52,2);
    FUN_1800116e0((LPVOID)param_1[0x54]);
    FUN_1800116e0((LPVOID)param_1[0x55]);
    FUN_1800116e0((LPVOID)param_1[0x56]);
    FUN_1800116e0((LPVOID)param_1[0x57]);
  }
  return;
}


/* Address: 0x18001508c; Evidence: ev_a40025303d1cfc599b7292ca226ffc9a859287547a3b390ed4061251192961c7 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_18001508c(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
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
  local_30 = DAT_180028040 ^ (ulonglong)local_58;
  FUN_18000f2b0(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_1800130dc(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_1800151e2;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_1800151ca:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_1800151e2;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_1800151ca;
      *puVar6 = 0xcccc;
LAB_180015178:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180015178;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_1800151ca;
    *(undefined8 *)(puVar9 + -8) = 0x18001518e;
    FUN_1800188a0(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x1800151aa;
    iVar3 = FUN_1800130dc(param_6,1);
    if (iVar3 == 0) goto LAB_1800151ca;
    *(undefined8 *)(puVar9 + -8) = 0x1800151c4;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x1800151e2;
    FUN_1800116e0(lpSrcStr[-1] + 0x10);
  }
LAB_1800151e2:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x180015201;
  return BVar10;
}


/* Address: 0x180015220; Evidence: ev_8185bf389bc3a8fa82fc9c002e250be237d6fbf6db3e7d14ef8ba7641373c02e */

undefined4 FUN_180015220(void)

{
  return DAT_180029d88;
}


/* Address: 0x180015230; Evidence: ev_cff7ab955314af23b3ccbb247aeffdb13d7e04864af42718a2687be09e0a663f */

uint FUN_180015230(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180029d88;
    DAT_180029d88 = param_1;
  }
  else {
    p_Var2 = FUN_180010de4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000f91c();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}


/* Address: 0x180015260; Evidence: ev_50c1f8252ecb0698450a96d3ead36b90e947c137b8fcf81a35778157b775f95d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180015260(undefined1 *param_1,ulonglong param_2,ulonglong param_3,undefined *param_4)

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
  
  local_58 = DAT_180028040 ^ (ulonglong)auStack_468;
  if ((((param_1 == (undefined1 *)0x0) && (param_2 != 0)) || (param_3 == 0)) ||
     (param_4 == (undefined *)0x0)) {
    p_Var3 = FUN_180010de4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000f91c();
  }
  else {
    FUN_180017428();
    FUN_1800188a0((undefined1 (*) [32])local_438,0,0x1f0);
    FUN_1800188a0((undefined1 (*) [32])local_248,0,0x1f0);
    if (1 < param_2) {
      local_448 = 0;
      puVar10 = param_1 + (param_2 - 1) * param_3;
LAB_180015320:
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
LAB_180015490:
        puVar4 = puVar7;
        if (puVar6 < puVar4) {
          do {
            puVar6 = puVar6 + param_3;
            if (puVar4 <= puVar6) goto LAB_1800154b0;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        else {
LAB_1800154b0:
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
          goto LAB_180015490;
        }
        if (puVar4 < puVar7) {
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= puVar4) goto LAB_180015537;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        else {
LAB_180015537:
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= param_1) break;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        if ((longlong)puVar7 - (longlong)param_1 < (longlong)puVar10 - (longlong)puVar6)
        goto LAB_18001558d;
        if (param_1 < puVar7) {
          local_438[local_448] = param_1;
          local_248[local_448] = puVar7;
          local_448 = local_448 + 1;
        }
        param_1 = puVar6;
        if (puVar10 <= puVar6) goto LAB_1800153a3;
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
      goto LAB_1800153a3;
    }
  }
  return;
LAB_18001558d:
  if (puVar6 < puVar10) {
    local_438[local_448] = puVar6;
    local_248[local_448] = puVar10;
    local_448 = local_448 + 1;
  }
  puVar10 = puVar7;
  if (puVar7 <= param_1) {
LAB_1800153a3:
    local_448 = local_448 + -1;
    if (local_448 < 0) {
      return;
    }
    param_1 = (undefined1 *)local_438[local_448];
    puVar10 = (undefined1 *)local_248[local_448];
  }
  goto LAB_180015320;
}


/* Address: 0x180015600; Evidence: ev_cb07b3b86df7f88926d74f9244d81188e519c31ab1ca4ebee26159232142b12c */

undefined4 FUN_180015600(char *param_1,longlong param_2,longlong param_3,longlong param_4)

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
      goto LAB_180015659;
    }
  }
  else if (param_1 == (char *)0x0) goto LAB_180015659;
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
      p_Var2 = FUN_180010de4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000f91c();
      return 0x22;
    }
    *param_1 = '\0';
  }
LAB_180015659:
  p_Var2 = FUN_180010de4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000f91c();
  return 0x16;
}


/* Address: 0x180015730; Evidence: ev_167bef86846b64b386c9c0aec446bf11704577e3488d7aed84395e0f3bafa186 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

byte * FUN_180015730(byte *param_1,byte *param_2)

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


/* Address: 0x1800157d0; Evidence: ev_b3a76bbef1a045f0073a05284ecb21047e6a5b76331c23e8d1627bd4dc894f04 */

/* WARNING: Removing unreachable block (ram,0x000180015a6c) */
/* WARNING: Removing unreachable block (ram,0x000180015a65) */
/* WARNING: Removing unreachable block (ram,0x000180015a5e) */
/* WARNING: Removing unreachable block (ram,0x000180015a57) */
/* WARNING: Removing unreachable block (ram,0x000180015a50) */
/* WARNING: Removing unreachable block (ram,0x000180015a49) */
/* WARNING: Removing unreachable block (ram,0x000180015a42) */
/* WARNING: Removing unreachable block (ram,0x000180015a3b) */
/* WARNING: Removing unreachable block (ram,0x000180015a34) */
/* WARNING: Removing unreachable block (ram,0x000180015a2d) */
/* WARNING: Removing unreachable block (ram,0x000180015a26) */
/* WARNING: Removing unreachable block (ram,0x000180015a1f) */
/* WARNING: Removing unreachable block (ram,0x000180015a18) */
/* WARNING: Removing unreachable block (ram,0x000180015a11) */
/* WARNING: Removing unreachable block (ram,0x000180015a0a) */
/* WARNING: Removing unreachable block (ram,0x0001800158cd) */
/* WARNING: Removing unreachable block (ram,0x0001800158dc) */
/* WARNING: Removing unreachable block (ram,0x0001800158eb) */
/* WARNING: Removing unreachable block (ram,0x0001800158fa) */
/* WARNING: Removing unreachable block (ram,0x000180015909) */
/* WARNING: Removing unreachable block (ram,0x000180015915) */
/* WARNING: Removing unreachable block (ram,0x000180015921) */
/* WARNING: Removing unreachable block (ram,0x00018001592d) */
/* WARNING: Removing unreachable block (ram,0x000180015939) */
/* WARNING: Removing unreachable block (ram,0x000180015945) */
/* WARNING: Removing unreachable block (ram,0x000180015951) */
/* WARNING: Removing unreachable block (ram,0x00018001595d) */
/* WARNING: Removing unreachable block (ram,0x000180015969) */
/* WARNING: Removing unreachable block (ram,0x000180015975) */
/* WARNING: Removing unreachable block (ram,0x000180015981) */

byte * FUN_1800157d0(byte *param_1,byte *param_2)

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
        pbVar19 = FUN_180015730(param_1,param_2);
        return pbVar19;
      }
      goto LAB_180015a79;
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
    if (uVar21 == 0 || (ulonglong)uVar2 < 0x10 - uVar21) goto LAB_180015a79;
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
LAB_180015a79:
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
  pbVar19 = FUN_180015730(param_1,param_2);
  return pbVar19;
}


/* Address: 0x180015b88; Evidence: ev_098dc445809b10d4b4d2fd1b8a81d203d33bbec7f0702afc5db48e9e92253058 */

void FUN_180015b88(uchar *param_1,uchar *param_2)

{
  _mbsdec_l(param_1,param_2,(_locale_t)0x0);
  return;
}


/* Address: 0x180015b90; Evidence: ev_c4cca2885083418e36743301617c08d3d18dd1f59fc4a8d1902e72e6b808f12c */

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
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000f91c();
  }
  else if (_Start < _Pos) {
    FUN_18000f2b0(local_28,(longlong *)_Locale);
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


/* Address: 0x180015c24; Evidence: ev_4427e20e968ec1b530c1b282fa10e552a75e03e75e153b5f1508f9db12d5bb1d */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180015c24(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
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
  local_30 = DAT_180028040 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_1800130dc(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar8 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_180015f2f;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_180015f15:
    uVar5 = 0;
    if (pWVar8 != (LPCWSTR)0x0) goto LAB_180015f1c;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_180015f15;
      *puVar6 = 0xcccc;
LAB_180015d30:
      pWVar8 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar8 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180015d30;
      }
    }
    if (pWVar8 == (LPCWSTR)0x0) goto LAB_180015f15;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar8;
    *(undefined8 *)(puVar12 + -8) = 0x180015d5a;
    iVar2 = FUN_1800130dc(param_8,1);
    if (iVar2 == 0) goto LAB_180015f15;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x180015d8d;
    iVar2 = FUN_180013698(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    pWVar9 = (LPCWSTR)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_180015f15;
    if ((param_3 & 0x400) == 0) {
      uVar7 = uVar5 * 2 + 0x10;
      uVar7 = -(ulonglong)(uVar5 * 2 < uVar7) & uVar7;
      if (uVar7 == 0) goto LAB_180015ef8;
      if (uVar7 < 0x401) {
        uVar5 = uVar7 + 0xf;
        if (uVar5 <= uVar7) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x180015e30;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar6 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar6 != (undefined4 *)0x0) {
          *puVar6 = 0xcccc;
          puVar12 = puVar11;
LAB_180015e5e:
          pWVar9 = (LPCWSTR)(puVar6 + 4);
          goto LAB_180015e62;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x180015e4e;
        puVar6 = _malloc_base(uVar7);
        pWVar9 = (LPCWSTR)0x0;
        if (puVar6 != (undefined4 *)0x0) {
          *puVar6 = 0xdddd;
          goto LAB_180015e5e;
        }
LAB_180015e62:
        if (pWVar9 != (LPCWSTR)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
          *(undefined8 *)(puVar12 + -8) = 0x180015e94;
          iVar4 = FUN_180013698(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x180015ec2;
              uVar3 = FUN_18001316c(param_8,0,pWVar9,iVar2,*(LPSTR *)(puVar12 + 0x20),
                                    *(int *)(puVar12 + 0x28),*(LPBOOL *)(puVar12 + 0x30),
                                    *(LPBOOL *)(puVar12 + 0x38));
              if (uVar3 == 0) goto LAB_180015ef8;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x180015edc;
              uVar3 = FUN_18001316c(param_8,0,pWVar9,iVar2,*(LPSTR *)(puVar12 + 0x20),
                                    *(int *)(puVar12 + 0x28),*(LPBOOL *)(puVar12 + 0x30),
                                    *(LPBOOL *)(puVar12 + 0x38));
              if (uVar3 == 0) goto LAB_180015efd;
            }
            uVar5 = (ulonglong)uVar3;
            if (*(int *)(pWVar9 + -8) == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180015ef3;
              FUN_1800116e0(pWVar9 + -8);
            }
            goto LAB_180015f1c;
          }
LAB_180015ef8:
          if (pWVar9 != (LPCWSTR)0x0) {
LAB_180015efd:
            if (*(int *)(pWVar9 + -8) == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180015f0e;
              FUN_1800116e0(pWVar9 + -8);
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
        *(undefined8 *)(puVar12 + -8) = 0x180015de5;
        uVar3 = FUN_180013698(param_2,param_3,pWVar8,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_180015f1c;
      }
      goto LAB_180015f15;
    }
LAB_180015f1c:
    if (*(int *)(pWVar8 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x180015f2d;
      FUN_1800116e0(pWVar8 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_180015f2f:
  *(undefined8 *)(puVar13 + -8) = 0x180015f3b;
  return uVar5;
}


/* Address: 0x180015f58; Evidence: ev_261ae51c1cad3c26eaeedeca3e4f18811f7867a5b5c65cae6f64139b7cb8f879 */

/* Library Function - Single Match
    __acrt_LCMapStringA
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_LCMapStringA(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                        undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong local_28;
  longlong local_20 [2];
  char local_10;
  
  FUN_18000f2b0(&local_28,param_1);
  FUN_180015c24(local_20,param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return;
}


/* Address: 0x180015ff0; Evidence: ev_d9c21f14d511a550f90097c45a2a2c448167782e6f8cf22bcdc10c34bb1e6234 */

uint FUN_180015ff0(void)

{
  undefined8 uVar1;
  
  uVar1 = __acrt_initialize_multibyte();
  return (uint)uVar1 & 0xff ^ 1;
}


/* Address: 0x180016010; Evidence: ev_9c91ec2f0a71efd9f7371ac72febd58e2ee01adca964bb0bd32bcb0dc2bb3d04 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000f91c();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x000180016042. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_180029918,0,param_1);
  return uVar2;
}


/* Address: 0x180016060; Evidence: ev_2bd6505060ae11c312b383a46f1ed93aa99647b5cc0c54cc0e028ce8a3446a11 */

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
      FUN_1800116e0(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_180029918,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_180015220();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_18000f990(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      p_Var4 = FUN_180010de4();
      *(undefined4 *)p_Var4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x1800160dc; Evidence: ev_f3212798587963d61dedbcd11f27f9e094d0778fe383ef5ad9965cbb3b508b6b */

undefined4 FUN_1800160dc(ushort *param_1)

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
      iVar3 = FUN_1800173c0(param_1,(ushort *)(&PTR_DAT_18001f6e0)[(longlong)iVar2 * 2],0x55);
      if (iVar3 == 0) {
        iVar5 = *(int *)(&DAT_18001f6e8 + (longlong)iVar2 * 0x10);
        if (iVar5 < 0) {
          return 0;
        }
        if (0xe3 < (ulonglong)(longlong)iVar5) {
          return 0;
        }
        return *(undefined4 *)(&DAT_18001dc80 + (longlong)iVar5 * 0x10);
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


/* Address: 0x180016184; Evidence: ev_df902576ca660b4c3a697e181c798111ea64f5c445b2d10d29d6bf53bdcf8a6b */

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
  FUN_1800116e0((LPVOID)0x0);
  return puVar5;
}


/* Address: 0x18001622c; Evidence: ev_b21fb1cf63e840759fe3db8cd9fd526a97c3df6890ca1acd47027bd9d6690357 */

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
    FUN_1800116e0(param_1);
  }
  return;
}


/* Address: 0x18001627c; Evidence: ev_bfa6ac107599048dd441df8e6e96f02433f533729de2d92d743e5a686dce2409 */

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
    iVar1 = DAT_180029d20;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_180029920)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_180029920)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180029d20 + 0x40;
        DAT_180029d20 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_180010de4();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000f91c();
    lVar3 = 9;
  }
  return lVar3;
}


/* Address: 0x180016324; Evidence: ev_5fddb9a7d8d31a9cde51ba866444de7a049c1425f4b212d50cf2e8dbf3ec7c50 */

void FUN_180016324(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180016344. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_180029920)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x18001634c; Evidence: ev_f39f682f17fac09184feda009c1b0ae14171d65a1300cf5340f971d6a7aa80e9 */

void FUN_18001634c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001636c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_180029920)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x180016374; Evidence: ev_77a3e4ccfe64c1d61dfa80b0794d0581e15d215c8d78a93f935ee90f010175aa */

undefined8 FUN_180016374(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_180029d20)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_180017458();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_1800163f4;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_1800163f4:
      *(undefined8 *)
       ((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  p_Var3 = FUN_180010de4();
  *(undefined4 *)p_Var3 = 9;
  p_Var3 = FUN_180010dc0();
  *(undefined4 *)p_Var3 = 0;
  return 0xffffffff;
}


/* Address: 0x180016430; Evidence: ev_affe0bfc443094294b589a858668d59254a62ca7bf7d072c5cbe9d0a97b9ea49 */

undefined8 FUN_180016430(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_180010dc0();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180029d20)) {
      if ((*(byte *)((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_180010dc0();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000f91c();
  }
  return 0xffffffffffffffff;
}


/* Address: 0x1800164a8; Evidence: ev_64ed3515f40f73828ff2570a77d63d33647529cf28c8c9d28c32a013753962e9 */

undefined8 FUN_1800164a8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_180016324(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_180029920)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_180016430(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_18001651f;
    DVar3 = GetLastError();
    p_Var4 = FUN_180010dc0();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_180010de4();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_18001651f:
  FUN_18001634c(*param_4);
  return uVar5;
}


/* Address: 0x180016534; Evidence: ev_d773eed35b97c9e42023a26ab46d9e34287598d01ad97e737123b760a05e383d */

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
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_180029d20)) &&
       ((*(byte *)((&DAT_180029920)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_1800164a8(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000f91c();
  }
  return -1;
}


/* Address: 0x1800165c8; Evidence: ev_eea1ea278444f989d3b672efedc0864753d649935afe67306994cb3aad3c6b0f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_1800165c8(DWORD *param_1,uint param_2,byte *param_3,ulonglong param_4,longlong *param_5)

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
  ulonglong uVar13;
  longlong lVar14;
  ulonglong uVar15;
  longlong lVar16;
  ulonglong uVar17;
  undefined1 auStackY_108 [32];
  undefined2 local_c8 [2];
  WCHAR local_c4 [2];
  DWORD local_c0 [2];
  byte *local_b8;
  longlong *local_b0;
  uint local_a8 [2];
  UINT local_a0;
  int local_9c;
  byte *local_98;
  longlong local_90;
  uint local_88 [2];
  undefined8 *local_80;
  byte *local_78;
  HANDLE local_70;
  longlong local_68;
  undefined8 local_60;
  undefined8 local_58;
  byte local_50;
  byte local_4f;
  CHAR local_48 [8];
  ulonglong local_40;
  
  local_60 = 0xfffffffffffffffe;
  local_40 = DAT_180028040 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar16 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_180029920)[lVar16] + 0x28 + uVar6 * 0x48);
  local_b8 = param_3 + (param_4 & 0xffffffff);
  local_98 = param_3;
  local_90 = lVar16;
  local_a0 = GetConsoleOutputCP();
  uVar13 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_180010bf0(local_b0);
  }
  local_9c = *(int *)(local_b0[3] + 0xc);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  uVar15 = uVar13;
  local_68 = lVar16;
  if (local_98 < param_3 + (param_4 & 0xffffffff)) {
    do {
      local_c8[0] = CONCAT11(local_c8[0]._1_1_,*param_3);
      local_c4[0] = L'\0';
      local_c4[1] = L'\0';
      uVar10 = 1;
      if (local_9c == 0xfde9) {
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_180029920)[local_68]);
        uVar15 = uVar13;
        uVar17 = uVar13;
        do {
          uVar10 = (uint)uVar15;
          if (*pcVar8 == '\0') break;
          uVar10 = uVar10 + 1;
          uVar15 = (ulonglong)uVar10;
          uVar17 = uVar17 + 1;
          pcVar8 = pcVar8 + 1;
        } while ((longlong)uVar17 < 5);
        if ((longlong)uVar17 < 1) {
          cVar1 = (&DAT_180028940)[*param_3];
          iVar3 = cVar1 + 1;
          lVar16 = (longlong)local_b8 - (longlong)param_3;
          if (lVar16 < iVar3) {
            uVar15 = uVar13;
            if (0 < lVar16) {
              do {
                *(byte *)(uVar15 + uVar6 * 0x48 + 0x3e + (&DAT_180029920)[local_90]) =
                     param_3[uVar15];
                uVar10 = (int)uVar13 + 1;
                uVar13 = (ulonglong)uVar10;
                uVar15 = uVar15 + 1;
              } while ((int)uVar10 < lVar16);
            }
            param_1[1] = param_1[1] + (int)lVar16;
            return param_1;
          }
          local_a8[0] = 0;
          local_a8[1] = 0;
          uVar10 = (iVar3 == 4) + 1;
          local_78 = param_3;
          pbVar7 = FUN_1800147ec((ushort *)local_c4,&local_78,(ulonglong)uVar10,local_a8,
                                 (longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pbVar7 = param_3 + cVar1;
          lVar16 = local_90;
        }
        else {
          cVar1 = (&DAT_180028940)[*(byte *)((&DAT_180029920)[lVar16] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar14 = (longlong)local_b8 - (longlong)param_3;
          uVar15 = (ulonglong)iVar3;
          if (lVar14 < (longlong)uVar15) {
            if (0 < lVar14) {
              uVar15 = uVar17;
              do {
                *(byte *)(uVar15 + uVar6 * 0x48 + 0x3e + (&DAT_180029920)[lVar16]) =
                     param_3[uVar15 - uVar17];
                uVar10 = (int)uVar13 + 1;
                uVar13 = (ulonglong)uVar10;
                uVar15 = uVar15 + 1;
              } while ((int)uVar10 < lVar14);
            }
            param_1[1] = param_1[1] + (int)lVar14;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_180029920)[local_68]);
          uVar9 = uVar13;
          do {
            *(undefined1 *)((longlong)&local_58 + uVar9) = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar17);
          uVar9 = uVar13;
          if (0 < (longlong)uVar15) {
            FUN_180018c60((undefined8 *)((longlong)&local_58 + uVar17),(undefined8 *)param_3,uVar15)
            ;
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_180029920)[lVar16]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar17);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = &local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_1800147ec((ushort *)local_c4,&local_80,(ulonglong)uVar10,local_88,
                                 (longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pbVar7 = param_3 + (int)(local_a8[0] - 1);
        }
      }
      else {
        lVar14 = (&DAT_180029920)[lVar16];
        bVar2 = *(byte *)(lVar14 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)*param_3 * 2) < 0) {
            pbVar7 = param_3 + 1;
            if (local_b8 <= pbVar7) {
              *(byte *)(lVar14 + 0x3e + uVar6 * 0x48) = *param_3;
              pbVar7 = (byte *)((&DAT_180029920)[lVar16] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar15 + 1;
              return param_1;
            }
            iVar3 = FUN_180014434((ushort *)local_c4,param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_1800168d0;
          }
          uVar15 = 1;
          pbVar7 = param_3;
        }
        else {
          local_50 = *(byte *)(lVar14 + 0x3e + uVar6 * 0x48);
          local_4f = *param_3;
          *(byte *)(lVar14 + 0x3d + uVar6 * 0x48) = bVar2 & 0xfb;
          uVar15 = 2;
          pbVar7 = &local_50;
        }
        iVar3 = FUN_180014434((ushort *)local_c4,pbVar7,uVar15,local_b0);
        pbVar7 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_1800168d0:
      param_3 = pbVar7 + 1;
      uVar10 = FUN_18001316c(local_a0,0,local_c4,uVar10,local_48,5,(LPBOOL)0x0,(LPBOOL)0x0);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_180016a29:
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
        if (BVar4 == 0) goto LAB_180016a29;
        if (local_c0[0] == 0) {
          return param_1;
        }
        param_1[2] = param_1[2] + 1;
        param_1[1] = param_1[1] + 1;
        uVar11 = param_1[1];
      }
      uVar15 = (ulonglong)uVar11;
    } while (param_3 < local_b8);
  }
  return param_1;
}


/* Address: 0x180016a5c; Evidence: ev_48c79da045a3a24537b82d63b91d32f5ed032a921da1475c8a5456ac89ed693d */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180016a5c(DWORD *param_1,uint param_2,char *param_3,ulonglong param_4)

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
  
  local_20 = 0x180016a74;
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_1468;
  pcVar5 = param_3 + (param_4 & 0xffffffff);
  hFile = *(HANDLE *)
           ((&DAT_180029920)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x180016b64; Evidence: ev_87e7736c0715695f8a5a61b13478a531f7b86741a31a1ebde25b4baaee8854ad */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180016b64(DWORD *param_1,uint param_2,short *param_3,ulonglong param_4)

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
  
  local_20 = 0x180016b7c;
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_1468;
  psVar5 = (short *)((param_4 & 0xffffffff) + (longlong)param_3);
  hFile = *(HANDLE *)
           ((&DAT_180029920)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x180016c80; Evidence: ev_03d32f318371367ee539bbc1b78c47d4f7c028fd14a2d699997aa014bc77e111 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180016c80(DWORD *param_1,uint param_2,WCHAR *param_3,uint param_4)

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
  
  local_30 = 0x180016c9c;
  local_38 = DAT_180028040 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_180029920)[(longlong)(int)param_2 >> 6] + 0x28 +
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
    uVar2 = FUN_18001316c(0xfde9,0,local_1448,(int)((longlong)pWVar8 - (longlong)local_1448 >> 1),
                          local_d98,0xd55,(LPBOOL)0x0,(LPBOOL)0x0);
    if (uVar2 == 0) {
LAB_180016dbd:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_180016dbd;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)pWVar7 - (int)param_3;
  } while( true );
}


/* Address: 0x180016df4; Evidence: ev_aacaf9cd76c32654f75d26211d8cb71b237a1d2fb540d4a49bff4ceed6f93986 */

int FUN_180016df4(uint param_1,WCHAR *param_2,uint param_3,longlong *param_4)

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
    if (((int)param_1 < 0) || (DAT_180029d20 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_180029920)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_180016324(param_1);
        iVar2 = -1;
        if ((*(byte *)((&DAT_180029920)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          iVar2 = FUN_180016f14(param_1,param_2,param_3,param_4);
        }
        FUN_18001634c(param_1);
        return iVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_18000f864((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x180016f14; Evidence: ev_fff60c80971ba37d5bbf1410ea6ba38a7859cab7cebcba47df325943a3204756 */

int FUN_180016f14(uint param_1,WCHAR *param_2,uint param_3,longlong *param_4)

{
  char cVar1;
  WCHAR WVar2;
  int iVar3;
  undefined8 uVar4;
  byte bVar5;
  WCHAR WVar6;
  short sVar7;
  BOOL BVar8;
  DWORD DVar9;
  int iVar10;
  ulonglong uVar11;
  undefined7 extraout_var;
  DWORD *pDVar12;
  DWORD DVar13;
  longlong lVar14;
  ulonglong uVar15;
  WCHAR *pWVar16;
  undefined8 local_70;
  DWORD local_68;
  undefined8 local_60;
  DWORD local_50 [4];
  
  DVar13 = 0;
  uVar15 = (ulonglong)param_3;
  if (param_3 == 0) {
    return 0;
  }
  if (param_2 == (WCHAR *)0x0) {
LAB_180016f44:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_18000f864((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar11 = (ulonglong)(param_1 & 0x3f);
  lVar14 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_180029920)[lVar14] + 0x39 + uVar11 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_180016f44;
  if ((*(byte *)((&DAT_180029920)[lVar14] + 0x38 + uVar11 * 0x48) & 0x20) != 0) {
    thunk_FUN_180017460(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar5 = FUN_18001733c(param_1);
  if (((int)CONCAT71(extraout_var,bVar5) == 0) ||
     (-1 < *(char *)((&DAT_180029920)[lVar14] + 0x38 + uVar11 * 0x48))) {
LAB_1800170fc:
    if (-1 < *(char *)((&DAT_180029920)[lVar14] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar8 = WriteFile(*(HANDLE *)
                         ((&DAT_180029920)[lVar14] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar13 = local_68;
      uVar4 = local_70;
      if (BVar8 == 0) {
        DVar13 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar13);
        DVar13 = local_68;
        uVar4 = local_70;
      }
      goto LAB_1800171b1;
    }
    if (cVar1 == '\0') {
      pDVar12 = FUN_180016a5c((DWORD *)&local_70,param_1,(char *)param_2,uVar15);
    }
    else if (cVar1 == '\x01') {
      pDVar12 = FUN_180016c80((DWORD *)&local_70,param_1,param_2,param_3);
    }
    else {
      DVar13 = 0;
      uVar4 = local_60;
      if (cVar1 != '\x02') goto LAB_1800171b1;
      pDVar12 = FUN_180016b64((DWORD *)&local_70,param_1,param_2,uVar15);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_180010bf0(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_180029920)[lVar14] + 0x39 + uVar11 * 0x48) == '\0')) goto LAB_1800170fc;
    local_50[0] = 0;
    BVar8 = GetConsoleMode(*(HANDLE *)((&DAT_180029920)[lVar14] + 0x28 + uVar11 * 0x48),local_50);
    if (BVar8 == 0) goto LAB_1800170fc;
    if (cVar1 != '\0') {
      if ((cVar1 == '\x01') || (uVar4 = local_60, cVar1 == '\x02')) {
        local_70 = 0;
        uVar4 = local_70;
        if (param_2 < (WCHAR *)((longlong)param_2 + uVar15)) {
          local_70._4_4_ = 0;
          pWVar16 = param_2;
          iVar10 = local_70._4_4_;
          do {
            WVar2 = *pWVar16;
            WVar6 = FUN_180017518(WVar2);
            if (WVar6 != WVar2) {
LAB_1800170c4:
              DVar9 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar9);
              uVar4 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar10 + 2,(DWORD)local_70);
            iVar3 = iVar10 + 2;
            if (WVar2 == L'\n') {
              sVar7 = FUN_180017518(0xd);
              if (sVar7 != 0xd) goto LAB_1800170c4;
              local_70 = CONCAT44(iVar10 + 3,(DWORD)local_70);
              DVar13 = DVar13 + 1;
              iVar3 = iVar10 + 3;
            }
            iVar10 = iVar3;
            pWVar16 = pWVar16 + 1;
            uVar4 = local_70;
          } while (pWVar16 < (WCHAR *)((longlong)param_2 + uVar15));
        }
      }
      goto LAB_1800171b1;
    }
    pDVar12 = FUN_1800165c8((DWORD *)&local_70,param_1,(byte *)param_2,uVar15,param_4);
  }
  DVar13 = pDVar12[2];
  uVar4 = *(undefined8 *)pDVar12;
LAB_1800171b1:
  local_60 = uVar4;
  iVar10 = (int)((ulonglong)local_60 >> 0x20);
  if (iVar10 != 0) {
    return iVar10 - DVar13;
  }
  if ((uint)local_60 != 0) {
    if ((uint)local_60 == 5) {
      *(undefined1 *)(param_4 + 6) = 1;
      *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
      *(undefined1 *)(param_4 + 7) = 1;
      *(undefined4 *)((longlong)param_4 + 0x34) = 5;
      return -1;
    }
    FUN_180010d9c((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_180029920)[lVar14] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((char)*param_2 == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}


/* Address: 0x180017244; Evidence: ev_66652de63cdc4603f9bd19021b145d6fb2fc10d71ca9e8534141e12a2209e200 */

int FUN_180017244(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_180029d50; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_180029d58 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18001767c(*(int **)(DAT_180029d58 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_180029d58 + lVar4 * 8) + 0x30));
      FUN_1800116e0(*(LPVOID *)(DAT_180029d58 + lVar4 * 8));
      *(undefined8 *)(DAT_180029d58 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}


/* Address: 0x1800172f8; Evidence: ev_a6e5fd7412007d77d9e319ab0845742c43538455d0daa5d28e6a2b5f64f4124d */

/* Library Function - Single Match
    __acrt_stdio_free_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_free_buffer_nolock(undefined8 *param_1)

{
  if (((*(uint *)((longlong)param_1 + 0x14) >> 0xd & 1) != 0) &&
     ((*(uint *)((longlong)param_1 + 0x14) >> 6 & 1) != 0)) {
    FUN_1800116e0((LPVOID)param_1[1]);
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) & 0xfffffebf;
    UNLOCK();
    param_1[1] = 0;
    *param_1 = 0;
    *(undefined4 *)(param_1 + 2) = 0;
  }
  return;
}


/* Address: 0x18001733c; Evidence: ev_8c1a523682ee3cbb1d615896cdd9f767600245eef6df92cb482bfa0330e909c9 */

byte FUN_18001733c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180029d20)) {
      return *(byte *)((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000f91c();
  }
  return 0;
}


/* Address: 0x18001739c; Evidence: ev_0ec5dfda70b021e98c3b85e129345d48c3c621657e93639b157ee0a1629c7929 */

undefined8 FUN_18001739c(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  return param_1;
}


/* Address: 0x1800173a4; Evidence: ev_55a4387a9321a50d75ef3caf8e7ab47fb4e041852f6401ccb27ef003f6fca91e */

undefined8 FUN_1800173a4(undefined8 *param_1,longlong param_2)

{
  *param_1 = 0;
  *(undefined1 *)(param_2 + 0x30) = 1;
  *(undefined4 *)(param_2 + 0x2c) = 0x2a;
  return 0xffffffffffffffff;
}


/* Address: 0x1800173c0; Evidence: ev_f9c7956c91e34ae975ae86d662ffddda51954d5dc4232beea98d83db20feceff */

int FUN_1800173c0(ushort *param_1,ushort *param_2,longlong param_3)

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


/* Address: 0x180017428; Evidence: ev_d779e7b1ce5c5feb30b3dbfcceb7e3847153e49e7b671fd305fd6270411c7e4d */

void FUN_180017428(void)

{
  _guard_check_icall();
  return;
}


/* Address: 0x180017440; Evidence: ev_2ac3672bc6b00285cb5d6ad6831bcb8b35c6c0628865c463b946c5e8ae1a94c6 */

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


/* Address: 0x180017458; Evidence: ev_34c2dd72a62512e7347353e83d2e8877c9508ae12be63065787827b9730ccb1f */

undefined4 FUN_180017458(void)

{
  return DAT_180029d8c;
}


/* Address: 0x180017460; Evidence: ev_e18015f4ec08b7efd57095e919cefe6e9656ebb707f451f64be96119219e1216 */

longlong FUN_180017460(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER local_18 [2];
  
  hFile = (HANDLE)FUN_180016430(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    local_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,local_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_180010d9c(DVar3,param_4);
    }
    else if (local_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_180029920)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)local_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x180017510; Evidence: ev_64b6a2dfee3efe6523efdec8fede1be8a906d8c665b4ada19efa0b84def8642e */

longlong thunk_FUN_180017460(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER aLStack_18 [2];
  
  hFile = (HANDLE)FUN_180016430(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    aLStack_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,aLStack_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_180010d9c(DVar3,param_4);
    }
    else if (aLStack_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_180029920)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)aLStack_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x180017518; Evidence: ev_cbef669822ad58db7315b99327667f30e294808c718ac44679139991b2ac89c2 */

undefined2 FUN_180017518(undefined2 param_1)

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


/* Address: 0x180017558; Evidence: ev_6584be09ed7cc094f93a24050427be0e873c6036d383bdd184774096ea826205 */

ulonglong FUN_180017558(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000f864((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_18001441c((longlong)param_1);
      uVar1 = FUN_1800175d4(param_1,param_2);
      FUN_180014428((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_180017a5c((undefined8 *)param_1);
  }
  return 0xffffffff;
}


/* Address: 0x1800175d4; Evidence: ev_506d97297c50375e75c9089b270cf2aa9e62833b84c1e674f85508486792c880 */

ulonglong FUN_1800175d4(int *param_1,longlong *param_2)

{
  uint uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_18000f864((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
    uVar2 = 0xffffffff;
  }
  else {
    uVar2 = 0xffffffff;
    if (((uint)param_1[5] >> 0xd & 1) != 0) {
      uVar2 = FUN_180014138(param_1,param_2);
      uVar2 = uVar2 & 0xffffffff;
      __acrt_stdio_free_buffer_nolock((undefined8 *)param_1);
      uVar1 = FUN_1800149a4((longlong)param_1);
      uVar3 = FUN_1800178c8(uVar1,param_2);
      if ((int)uVar3 < 0) {
        uVar2 = 0xffffffff;
      }
      else if (*(LPVOID *)(param_1 + 10) != (LPVOID)0x0) {
        FUN_1800116e0(*(LPVOID *)(param_1 + 10));
        param_1[10] = 0;
        param_1[0xb] = 0;
      }
    }
    FUN_180017a5c((undefined8 *)param_1);
  }
  return uVar2;
}


/* Address: 0x18001767c; Evidence: ev_403ec2187637e59ccf072a40796d4cb3319cca184c0f0775e22b15311c15ff78 */

ulonglong FUN_18001767c(int *param_1)

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
  local_20 = DAT_18002959c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_180028238;
    puStack_28 = PTR_DAT_180028240;
  }
  uVar1 = FUN_180017558(param_1,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_18000f530(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_18000f530(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return uVar1 & 0xffffffff;
}


/* Address: 0x180017720; Evidence: ev_33b007a555eda340404c701d7313f32f473b38212e734dcc244f30436c81de98 */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180028a40 == (HANDLE)0xfffffffffffffffe) {
    DAT_180028a40 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180028a40 != (HANDLE)0xffffffffffffffff;
}


/* Address: 0x180017774; Evidence: ev_56be11749ddab00e503f18a6416cb6e7a183c8f56e41b873d226e1fee796cfbe */

void FUN_180017774(void)

{
  if (DAT_180028a40 < (HANDLE)0xfffffffffffffffe) {
    CloseHandle(DAT_180028a40);
  }
  return;
}


/* Address: 0x180017790; Evidence: ev_c4208e54d4c2cf1668076daec27d4976438afeb891d1e908508e335af5b6664c */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180028a40,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180028a40 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180028a40);
      }
      DAT_180028a40 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180028a40,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}


/* Address: 0x180017850; Evidence: ev_55e4613bdba57575828a8499424c66c9b3594098a8d3229d95481f1e3273b9ae */

ulonglong FUN_180017850(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_180016324(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_180029920)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_18001798c(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18001634c(*param_4);
  return uVar3;
}


/* Address: 0x1800178c8; Evidence: ev_94f981241d841ff5db21f865faf64bc42d57b6803455bc0fb0e568e2ab3112e3 */

ulonglong FUN_1800178c8(uint param_1,longlong *param_2)

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
    if (((-1 < (int)param_1) && (param_1 < DAT_180029d20)) &&
       ((*(byte *)((&DAT_180029920)[(longlong)(int)param_1 >> 6] + 0x38 +
                  (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0)) {
      local_20 = local_res8;
      local_res20[0] = param_1;
      local_28[0] = param_1;
      local_18 = param_2;
      uVar1 = FUN_180017850(local_res18,local_28,&local_20,local_res20);
      return uVar1;
    }
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
    FUN_18000f864((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  return 0xffffffff;
}


/* Address: 0x18001798c; Evidence: ev_cd4b961eb08f35829e252dcb86eec2cb5f7140e44008a4905a9ab7a3b367d8c9 */

undefined8 FUN_18001798c(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_180016430(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_180029920 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_180029920 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_180016430(2);
      lVar4 = FUN_180016430(1);
      if (lVar4 == lVar3) goto LAB_1800179ae;
    }
    hObject = (HANDLE)FUN_180016430(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_180017a0c;
    }
  }
LAB_1800179ae:
  DVar2 = 0;
LAB_180017a0c:
  FUN_180016374(param_1);
  *(undefined1 *)
   ((&DAT_180029920)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_180010d9c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}


/* Address: 0x180017a5c; Evidence: ev_35d25d49eaadaed9a041fd2f2e4a5774e4cfc8e1c04f38e21d80303b0bcdbd11 */

undefined4 FUN_180017a5c(undefined8 *param_1)

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


/* Address: 0x180017a80; Evidence: ev_cd6d929f4598bc0253573e97c8ffd5fc457ccb4480b196eb636231205341ef02 */

uint FUN_180017a80(uint param_1)

{
  return param_1 | 0x400000;
}


/* Address: 0x180017aa0; Evidence: ev_d98aa637d05c770f005d662b7865329745442c07cb7b5ebd4e2cf139279ba421 */

/* WARNING: Removing unreachable block (ram,0x000180017b20) */
/* WARNING: Removing unreachable block (ram,0x000180017b12) */
/* WARNING: Removing unreachable block (ram,0x000180017ab7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180017aa0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_180029d90 = 0;
  DAT_180029d94 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_180029d90 = 1;
      DAT_180029d94 = 1;
    }
    else {
      _DAT_180029d90 = 0;
    }
  }
  if ((_DAT_180029d90 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180029d94 = 3;
      _DAT_180029d90 = 3;
      return 0;
    }
  }
  return 0;
}


/* Address: 0x180017b54; Evidence: ev_5db170e43f47cdc0ddbcfec9f8098d8dd7a8dda9720d9be9862cdb1d34667f62 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180017b7d) */
/* WARNING: Removing unreachable block (ram,0x000180017b86) */
/* WARNING: Removing unreachable block (ram,0x000180017bac) */
/* WARNING: Removing unreachable block (ram,0x000180017bb8) */
/* WARNING: Removing unreachable block (ram,0x000180017b94) */
/* WARNING: Removing unreachable block (ram,0x000180017bc3) */
/* WARNING: Removing unreachable block (ram,0x000180017beb) */
/* WARNING: Removing unreachable block (ram,0x000180017c1f) */
/* WARNING: Removing unreachable block (ram,0x000180017c09) */

void FUN_180017b54(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  *(undefined8 *)*param_3 = param_3[1];
  return;
}


/* Address: 0x180017c40; Evidence: ev_72a299c68534296cc964e5c84f0c45d38227d64403324af83369368841bf7c90 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180017c56) */
/* WARNING: Removing unreachable block (ram,0x000180017c63) */
/* WARNING: Removing unreachable block (ram,0x000180017c89) */
/* WARNING: Removing unreachable block (ram,0x000180017c95) */
/* WARNING: Removing unreachable block (ram,0x000180017c71) */
/* WARNING: Removing unreachable block (ram,0x000180017ca0) */
/* WARNING: Removing unreachable block (ram,0x000180017cb2) */
/* WARNING: Removing unreachable block (ram,0x000180017cc6) */
/* WARNING: Removing unreachable block (ram,0x000180017ccf) */
/* WARNING: Removing unreachable block (ram,0x000180018820) */
/* WARNING: Removing unreachable block (ram,0x000180017ce9) */

void FUN_180017c40(void)

{
  return;
}


/* Address: 0x180017cfc; Evidence: ev_99d9a1b53ed65335125a451fd048f9b7b61e3747f0af030ec1a5aed65dda747d */

bool FUN_180017cfc(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_180029d98 != (HMODULE)0x1) {
    if (DAT_180029d98 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_180029da0 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_180029da8;
    }
    DAT_180029da8 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_180029d98 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_180029d98;
      pHVar1 = DAT_180029d98;
    }
    DAT_180029d98 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}


/* Address: 0x180017d9c; Evidence: ev_1f77785ef058face123fcf240480a6e78b5ae5f8685baf232e77ce01e14a95b6 */

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
    *(undefined8 *)(puVar6 + -8) = 0x180017ddc;
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


/* Address: 0x180017e34; Evidence: ev_2959c56dde6f92c00e237f4e0ff52ac08f9cbdb9445c01ac4d26d8c0758aff62 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_180017e34(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000218;
  while ((0x28ba0 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x28ba1))) {
    uVar2 = uVar2 + 1;
    pIVar1 = pIVar1 + 1;
    if (6 < uVar2) {
      return 0;
    }
  }
  *param_1 = (pIVar1->Misc).PhysicalAddress;
  *param_2 = pIVar1->Characteristics;
  return (ulonglong)(uint)pIVar1->VirtualAddress + 0x180000000;
}


/* Address: 0x180017ed0; Evidence: ev_30841f99169e398a29f679b5423cd91a51ea4691813cd77c4ea8f1ea3ff4892d */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

void FUN_180017ed0(void *param_1,SIZE_T param_2,DWORD param_3,PDWORD param_4)

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
  lpAddress = (void *)FUN_180017e34(&local_28,local_24);
  if (lpAddress == (void *)0x0) {
    *param_4 = 4;
    return;
  }
  if (DAT_180029dc0 == 0) {
    DAT_180029dc0 = 1;
    puVar6 = auStack_48;
    if ((local_24[0] & IMAGE_SCN_MEM_WRITE) == 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = auStack_40;
    }
    *(undefined8 *)(puVar6 + -8) = 0x180017f4a;
    DloadMakePermanentImageCommit(lpAddress,(ulonglong)*(uint *)(puVar6 + 0x20));
  }
  if (param_1 == (void *)0x0) {
    if (param_2 != 0) goto LAB_180017f5b;
LAB_180017f8b:
    param_2 = (SIZE_T)*(uint *)(puVar6 + 0x20);
  }
  else {
    puVar2 = puVar6;
    if (param_2 == 0) {
LAB_180017f5b:
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar5 = puVar6 + 8;
      puVar6 = puVar6 + 8;
      puVar2 = puVar5;
      if (param_1 == (void *)0x0) goto LAB_180017f8b;
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
  *(undefined8 *)(puVar6 + -8) = 0x180017fa4;
  BVar3 = VirtualProtect(lpAddress,param_2,param_3,param_4);
  if (BVar3 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
  }
  return;
}


/* Address: 0x180017fc8; Evidence: ev_a406df335ec62ec0c0af044198e06af201ac845e18c92a5308d554923f664015 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180017fdc) */
/* WARNING: Removing unreachable block (ram,0x000180017fe9) */
/* WARNING: Removing unreachable block (ram,0x00018001800a) */
/* WARNING: Removing unreachable block (ram,0x000180018016) */
/* WARNING: Removing unreachable block (ram,0x000180018019) */
/* WARNING: Removing unreachable block (ram,0x000180017ff2) */
/* WARNING: Removing unreachable block (ram,0x000180018024) */
/* WARNING: Removing unreachable block (ram,0x00018001802d) */
/* WARNING: Removing unreachable block (ram,0x000180018042) */
/* WARNING: Removing unreachable block (ram,0x000180018061) */
/* WARNING: Removing unreachable block (ram,0x00018001804b) */

void FUN_180017fc8(void)

{
  return;
}


/* Address: 0x180018074; Evidence: ev_68fbd4fcaddc45c8577bab7393b5ecd296fa31db5e42b4a1f61721a8e9d5dda5 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x0001800181e8) */
/* WARNING: Removing unreachable block (ram,0x0001800182c2) */

HMODULE FUN_180018074(uint *param_1,void *param_2)

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
  
  FUN_180017c40();
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
    FUN_180017fc8();
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
    pHVar3 = FUN_180001110(0,(longlong)local_78);
    if (pHVar3 == (HMODULE)0x0) {
      if (hLibModule == (HMODULE)0x0) {
        hLibModule = FUN_180001110(1,(longlong)local_78);
        if ((hLibModule == (HMODULE)0x0) &&
           (hLibModule = LoadLibraryExA(local_60,(HANDLE)0x0,0), hLibModule == (HMODULE)0x0)) {
          local_38 = GetLastError();
          local_res8 = local_78;
          FUN_180017fc8();
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
      pHVar3 = FUN_180001110(2,(longlong)local_78);
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
        FUN_180017fc8();
        RaiseException(0xc06d007f,0,1,(ULONG_PTR *)&local_res8);
        FUN_180017c40();
        pHVar3 = local_40;
      }
      local_88 = param_2;
      local_80 = pHVar3;
      FUN_180017b54(param_2,8,&local_88);
    }
    local_38 = 0;
    local_48 = hLibModule;
    local_40 = pHVar3;
    FUN_180001110(5,(longlong)local_78);
    FUN_180017fc8();
  }
  return pHVar3;
}


/* Address: 0x180018370; Evidence: ev_cc9552fc2cb6190d4e9065e12a8cd61ac5abf78ce7ea7a7e95dd21450f6916c0 */

undefined8 FUN_180018370(undefined8 param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  FUN_180018390(param_2,param_4);
  return 1;
}


/* Address: 0x180018390; Evidence: ev_791fcb6bc87f5866cf56da2dddf072e28f62ff79d60d262a848786f624433f86 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180018390(undefined8 param_1,longlong param_2)

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


/* Address: 0x1800183f0; Evidence: ev_8dae1a22457201210e3d504185d460065353ec958529fe5f426cb8e59e5a3611 */

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


/* Address: 0x180018440; Evidence: ev_87681f17e8d4952e616904dac9fb908ba9d7bd118332f92113cf5fe32697d8e5 */

ulonglong FUN_180018440(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_180018490((short *)&IMAGE_DOS_HEADER_180000000);
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


/* Address: 0x180018490; Evidence: ev_d118c417529b8eb371ed0650a1a221e1046eef751e1d8a83176512c308971828 */

bool FUN_180018490(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}


/* Address: 0x1800184bc; Evidence: ev_4f1e38761493b5d39393fb90e334815a7062c7237bdbd8ad1604964b0fd0eb13 */

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
  FUN_180018390(param_2,(longlong)param_4);
  if ((puVar2[(ulonglong)uVar1 * 4 + 1] & ((param_1->ExceptionFlags & 0x66) != 0) + 1) != 0) {
    FUN_18000b6a4(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180018544; Evidence: ev_0ff1d0df9923065e08520746bbc248358bd09ac0351d55772fd263eebb017836 */

void FUN_180018544(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_180018390(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x1800185e0; Evidence: ev_32087785eb00501ec3f196f619fc4c03eaac52b2ee1c0fb95f607f79894fdbd7 */

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


/* Address: 0x180018630; Evidence: ev_4f7c13e52e6a78b66effd3d4052b621b8a1e98617846fe38a95d863849545274 */

void FUN_180018630(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000b6a4(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_18000babc();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_18000babc();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_180010adc();
  }
  return;
}


/* Address: 0x180018680; Evidence: ev_760e283fc9f93f49604b08476894af25a242400503dc299e8d08cfa30febdbda */

void FUN_180018680(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_180018390(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    FUN_18000b3fc(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180018700; Evidence: ev_89a274ee927ae67cd678662d0c3669d874ff421d0bceea839d8a0c9a32e67843 */

ulonglong thunk_FUN_1800187b0(ulonglong param_1)

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


/* Address: 0x180018710; Evidence: ev_ea766f5920458f96409e91d18d2973e3530d931533fe6b7e306a9b9c28e6165d */

ulonglong FUN_180018710(void)

{
  float fVar1;
  float fVar2;
  float fVar3;
  ulonglong uVar4;
  undefined1 auVar5 [16];
  undefined1 in_XMM0 [16];
  undefined1 extraout_var [12];
  
  uVar4 = in_XMM0._0_8_;
  if (1 < DAT_180028090) {
    auVar5 = roundss(in_XMM0,in_XMM0,10);
    return auVar5._0_8_;
  }
  fVar3 = in_XMM0._0_4_;
  fVar1 = ABS(fVar3);
  if ((uint)fVar1 < 0x4b000000) {
    if ((uint)fVar1 < 0x3f800000) {
      if (fVar1 != 0.0) {
        if (fVar3 != fVar1) {
          return 0x80000000;
        }
        return 0x3f800000;
      }
    }
    else {
      fVar2 = (float)(-1 << (0x96U - (char)((uint)fVar1 >> 0x17) & 0x1f) & (uint)fVar3);
      uVar4 = (ulonglong)(uint)fVar2;
      if ((fVar3 == fVar1) && (fVar3 != fVar2)) {
        uVar4 = (ulonglong)(uint)(fVar2 + 1.0);
      }
    }
  }
  else if (0x7f800000 < (uint)fVar1) {
    auVar5._0_4_ = FUN_180017a80((uint)fVar3);
    auVar5._4_12_ = extraout_var;
    return auVar5._0_8_;
  }
  return uVar4;
}


/* Address: 0x1800187b0; Evidence: ev_b0758ec9c66424d225c5ad53b574bef9458129d34de818f9fcfb39c1db4b583c */

ulonglong FUN_1800187b0(ulonglong param_1)

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


/* Address: 0x180018820; Evidence: ev_68e4af76b92857a0aa9995a4b328bcb743ef48305c2039b3ab2edada1185712a */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180018820. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180018840; Evidence: ev_69c4576ebe299a4e4fdd785f9e0bf6917079614b289d6119a632403e5d25cf30 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180018820. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180018860; Evidence: ev_c1ef6d5724c7cdb371f4270c67c2f265460ffc4858af531bfc7c9f52086604b2 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x000180018820. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180018890; Evidence: ev_00322e7a4124d7e82f7cf1d2542795932b7a8a01ce7b64cb49beef1109411b52 */

undefined8 FUN_180018890(undefined1 *param_1,undefined1 param_2,longlong param_3,undefined8 param_4)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = param_2;
    param_1 = param_1 + 1;
  }
  return param_4;
}


/* Address: 0x1800188a0; Evidence: ev_ac1fce3dc3f835b64868fb89f5b5ae15e14c3cd50aeb6eb101f544eabcea1e94 */

undefined1 (*) [32] FUN_1800188a0(undefined1 (*param_1) [32],byte param_2,ulonglong param_3)

{
  undefined1 auVar1 [32];
  undefined1 (*pauVar2) [32];
  undefined1 (*pauVar3) [32];
  undefined1 (*pauVar4) [16];
  ulonglong uVar5;
  ulonglong uVar6;
  longlong lVar7;
  undefined1 uVar8;
  longlong lVar11;
  undefined1 auVar12 [16];
  undefined1 auVar13 [32];
  undefined2 uVar9;
  undefined4 uVar10;
  
  uVar5 = (ulonglong)param_2;
  lVar11 = uVar5 * 0x101010101010101;
  uVar8 = (undefined1)lVar11;
  uVar9 = (undefined2)lVar11;
  uVar10 = (undefined4)lVar11;
  switch(param_3) {
  case 0:
    return param_1;
  case 8:
    *(longlong *)(param_1[-1] + param_3 + 0x18) = lVar11;
    return param_1;
  case 9:
    *(longlong *)(param_1[-1] + param_3 + 0x17) = lVar11;
    param_1[-1][param_3 + 0x1f] = uVar8;
    return param_1;
  case 10:
    *(longlong *)(param_1[-1] + param_3 + 0x16) = lVar11;
    *(undefined2 *)(param_1[-1] + param_3 + 0x1e) = uVar9;
    return param_1;
  case 0xb:
    *(longlong *)(param_1[-1] + param_3 + 0x15) = lVar11;
    *(undefined2 *)(param_1[-1] + param_3 + 0x1d) = uVar9;
    param_1[-1][param_3 + 0x1f] = uVar8;
    return param_1;
  case 0xc:
    *(longlong *)(param_1[-1] + param_3 + 0x14) = lVar11;
  case 4:
    *(undefined4 *)(param_1[-1] + param_3 + 0x1c) = uVar10;
    return param_1;
  case 0xd:
    *(longlong *)(param_1[-1] + param_3 + 0x13) = lVar11;
  case 5:
    *(undefined4 *)(param_1[-1] + param_3 + 0x1b) = uVar10;
    param_1[-1][param_3 + 0x1f] = uVar8;
    return param_1;
  case 0xe:
    *(longlong *)(param_1[-1] + param_3 + 0x12) = lVar11;
  case 6:
    *(undefined4 *)(param_1[-1] + param_3 + 0x1a) = uVar10;
  case 2:
    *(undefined2 *)(param_1[-1] + param_3 + 0x1e) = uVar9;
    return param_1;
  case 0xf:
    *(longlong *)(param_1[-1] + param_3 + 0x11) = lVar11;
  case 7:
    *(undefined4 *)(param_1[-1] + param_3 + 0x19) = uVar10;
  case 3:
    *(undefined2 *)(param_1[-1] + param_3 + 0x1d) = uVar9;
  case 1:
    param_1[-1][param_3 + 0x1f] = uVar8;
    return param_1;
  }
  auVar12._8_8_ = lVar11;
  auVar12._0_8_ = lVar11;
  if (param_3 < 0x21) {
    *(undefined1 (*) [16])*param_1 = auVar12;
    *(undefined1 (*) [16])(param_1[-1] + param_3 + 0x10) = auVar12;
    return param_1;
  }
  pauVar2 = param_1;
  if (DAT_180028090 < 3) {
    if ((param_3 <= DAT_180028098) || (((byte)DAT_1800292e4 & 2) == 0)) {
      lVar11 = ((ulonglong)param_1 & 0xf) - 0x10;
      pauVar4 = (undefined1 (*) [16])((longlong)param_1 - lVar11);
      uVar6 = param_3 + lVar11;
      if (0x80 < uVar6) {
        do {
          *pauVar4 = auVar12;
          pauVar4[1] = auVar12;
          pauVar4[2] = auVar12;
          pauVar4[3] = auVar12;
          pauVar4[4] = auVar12;
          pauVar4[5] = auVar12;
          pauVar4[6] = auVar12;
          pauVar4[7] = auVar12;
          pauVar4 = pauVar4 + 8;
          uVar6 = uVar6 - 0x80;
        } while (0x7f < uVar6);
      }
                    /* WARNING: Could not recover jumptable at 0x000180018be8. Too many branches */
                    /* WARNING: Treating indirect jump as call */
      pauVar2 = (undefined1 (*) [32])
                (*(code *)((ulonglong)*(uint *)(&DAT_180023158 + (uVar6 + 0xf >> 4) * 4) +
                          0x180000000))(pauVar4,uVar5 - lVar11);
      return pauVar2;
    }
  }
  else if (((param_3 <= DAT_180028098) || (DAT_1800280a0 < param_3)) ||
          (((byte)DAT_1800292e4 & 2) == 0)) {
    auVar13._16_16_ = auVar12;
    auVar13._0_16_ = auVar12;
    lVar7 = ((ulonglong)param_1 & 0x1f) - 0x20;
    pauVar2 = (undefined1 (*) [32])((longlong)param_1 - lVar7);
    uVar6 = param_3 + lVar7;
    if (0x100 < uVar6) {
      if (DAT_1800280a0 < uVar6) {
        do {
          uVar5 = uVar6;
          pauVar3 = pauVar2;
          auVar1 = vmovntdq_avx(auVar13);
          *pauVar3 = auVar1;
          auVar1 = vmovntdq_avx(auVar13);
          pauVar3[1] = auVar1;
          auVar1 = vmovntdq_avx(auVar13);
          pauVar3[2] = auVar1;
          auVar1 = vmovntdq_avx(auVar13);
          pauVar3[3] = auVar1;
          auVar1 = vmovntdq_avx(auVar13);
          pauVar3[4] = auVar1;
          auVar1 = vmovntdq_avx(auVar13);
          pauVar3[5] = auVar1;
          auVar1 = vmovntdq_avx(auVar13);
          pauVar3[6] = auVar1;
          auVar1 = vmovntdq_avx(auVar13);
          pauVar3[7] = auVar1;
          pauVar2 = pauVar3 + 8;
          uVar6 = uVar5 - 0x100;
        } while (0xff < uVar5 - 0x100);
        uVar6 = uVar5 - 0xe1 & 0xffffffffffffffe0;
        switch(uVar5) {
        case 0x1e1:
        case 0x1e2:
        case 0x1e3:
        case 0x1e4:
        case 0x1e5:
        case 0x1e6:
        case 0x1e7:
        case 0x1e8:
        case 0x1e9:
        case 0x1ea:
        case 0x1eb:
        case 0x1ec:
        case 0x1ed:
        case 0x1ee:
        case 0x1ef:
        case 0x1f0:
        case 0x1f1:
        case 0x1f2:
        case 499:
        case 500:
        case 0x1f5:
        case 0x1f6:
        case 0x1f7:
        case 0x1f8:
        case 0x1f9:
        case 0x1fa:
        case 0x1fb:
        case 0x1fc:
        case 0x1fd:
        case 0x1fe:
        case 0x1ff:
          auVar1 = vmovntdq_avx(auVar13);
          *(undefined1 (*) [32])(*pauVar3 + uVar6) = auVar1;
        case 0x1c1:
        case 0x1c2:
        case 0x1c3:
        case 0x1c4:
        case 0x1c5:
        case 0x1c6:
        case 0x1c7:
        case 0x1c8:
        case 0x1c9:
        case 0x1ca:
        case 0x1cb:
        case 0x1cc:
        case 0x1cd:
        case 0x1ce:
        case 0x1cf:
        case 0x1d0:
        case 0x1d1:
        case 0x1d2:
        case 0x1d3:
        case 0x1d4:
        case 0x1d5:
        case 0x1d6:
        case 0x1d7:
        case 0x1d8:
        case 0x1d9:
        case 0x1da:
        case 0x1db:
        case 0x1dc:
        case 0x1dd:
        case 0x1de:
        case 0x1df:
        case 0x1e0:
          auVar1 = vmovntdq_avx(auVar13);
          *(undefined1 (*) [32])(pauVar3[1] + uVar6) = auVar1;
        case 0x1a1:
        case 0x1a2:
        case 0x1a3:
        case 0x1a4:
        case 0x1a5:
        case 0x1a6:
        case 0x1a7:
        case 0x1a8:
        case 0x1a9:
        case 0x1aa:
        case 0x1ab:
        case 0x1ac:
        case 0x1ad:
        case 0x1ae:
        case 0x1af:
        case 0x1b0:
        case 0x1b1:
        case 0x1b2:
        case 0x1b3:
        case 0x1b4:
        case 0x1b5:
        case 0x1b6:
        case 0x1b7:
        case 0x1b8:
        case 0x1b9:
        case 0x1ba:
        case 0x1bb:
        case 0x1bc:
        case 0x1bd:
        case 0x1be:
        case 0x1bf:
        case 0x1c0:
          auVar1 = vmovntdq_avx(auVar13);
          *(undefined1 (*) [32])(pauVar3[2] + uVar6) = auVar1;
        case 0x181:
        case 0x182:
        case 0x183:
        case 0x184:
        case 0x185:
        case 0x186:
        case 0x187:
        case 0x188:
        case 0x189:
        case 0x18a:
        case 0x18b:
        case 0x18c:
        case 0x18d:
        case 0x18e:
        case 399:
        case 400:
        case 0x191:
        case 0x192:
        case 0x193:
        case 0x194:
        case 0x195:
        case 0x196:
        case 0x197:
        case 0x198:
        case 0x199:
        case 0x19a:
        case 0x19b:
        case 0x19c:
        case 0x19d:
        case 0x19e:
        case 0x19f:
        case 0x1a0:
          auVar1 = vmovntdq_avx(auVar13);
          *(undefined1 (*) [32])(pauVar3[3] + uVar6) = auVar1;
        case 0x161:
        case 0x162:
        case 0x163:
        case 0x164:
        case 0x165:
        case 0x166:
        case 0x167:
        case 0x168:
        case 0x169:
        case 0x16a:
        case 0x16b:
        case 0x16c:
        case 0x16d:
        case 0x16e:
        case 0x16f:
        case 0x170:
        case 0x171:
        case 0x172:
        case 0x173:
        case 0x174:
        case 0x175:
        case 0x176:
        case 0x177:
        case 0x178:
        case 0x179:
        case 0x17a:
        case 0x17b:
        case 0x17c:
        case 0x17d:
        case 0x17e:
        case 0x17f:
        case 0x180:
          auVar1 = vmovntdq_avx(auVar13);
          *(undefined1 (*) [32])(pauVar3[4] + uVar6) = auVar1;
        case 0x141:
        case 0x142:
        case 0x143:
        case 0x144:
        case 0x145:
        case 0x146:
        case 0x147:
        case 0x148:
        case 0x149:
        case 0x14a:
        case 0x14b:
        case 0x14c:
        case 0x14d:
        case 0x14e:
        case 0x14f:
        case 0x150:
        case 0x151:
        case 0x152:
        case 0x153:
        case 0x154:
        case 0x155:
        case 0x156:
        case 0x157:
        case 0x158:
        case 0x159:
        case 0x15a:
        case 0x15b:
        case 0x15c:
        case 0x15d:
        case 0x15e:
        case 0x15f:
        case 0x160:
          auVar1 = vmovntdq_avx(auVar13);
          *(undefined1 (*) [32])(pauVar3[5] + uVar6) = auVar1;
        case 0x121:
        case 0x122:
        case 0x123:
        case 0x124:
        case 0x125:
        case 0x126:
        case 0x127:
        case 0x128:
        case 0x129:
        case 0x12a:
        case 299:
        case 300:
        case 0x12d:
        case 0x12e:
        case 0x12f:
        case 0x130:
        case 0x131:
        case 0x132:
        case 0x133:
        case 0x134:
        case 0x135:
        case 0x136:
        case 0x137:
        case 0x138:
        case 0x139:
        case 0x13a:
        case 0x13b:
        case 0x13c:
        case 0x13d:
        case 0x13e:
        case 0x13f:
        case 0x140:
          auVar1 = vmovntdq_avx(auVar13);
          *(undefined1 (*) [32])(pauVar3[6] + uVar6) = auVar1;
        default:
          *(undefined1 (*) [32])(pauVar3[-1] + uVar5) = auVar13;
        case 0x100:
          *param_1 = auVar13;
          return param_1;
        }
      }
      do {
        *pauVar2 = auVar13;
        pauVar2[1] = auVar13;
        pauVar2[2] = auVar13;
        pauVar2[3] = auVar13;
        pauVar2[4] = auVar13;
        pauVar2[5] = auVar13;
        pauVar2[6] = auVar13;
        pauVar2[7] = auVar13;
        pauVar2 = pauVar2 + 8;
        uVar6 = uVar6 - 0x100;
      } while (0xff < uVar6);
    }
                    /* WARNING: Could not recover jumptable at 0x000180018a34. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    pauVar2 = (undefined1 (*) [32])
              (*(code *)((ulonglong)*(uint *)(&DAT_180023110 + (uVar6 + 0x1f >> 5) * 4) +
                        0x180000000))(lVar11,uVar5 - lVar7);
    return pauVar2;
  }
  for (; param_3 != 0; param_3 = param_3 - 1) {
    (*pauVar2)[0] = param_2;
    pauVar2 = (undefined1 (*) [32])(*pauVar2 + 1);
  }
  return param_1;
}


/* Address: 0x180018c50; Evidence: ev_352eb5cbbb7ff0f160382b6a0f26946419202994002ae9559abf6895b0c6617e */

void FUN_180018c50(undefined1 *param_1,undefined1 *param_2,longlong param_3)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = *param_2;
    param_2 = param_2 + 1;
    param_1 = param_1 + 1;
  }
  return;
}


/* Address: 0x180018c60; Evidence: ev_d732a4ffcd889119e7d7567c9b6975f002bb7499677b0e9eb701735f98833e8c */

void FUN_180018c60(undefined8 *param_1,undefined8 *param_2,ulonglong param_3)

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
  undefined1 (*pauVar23) [32];
  undefined1 (*pauVar24) [32];
  undefined8 *puVar25;
  undefined1 (*pauVar26) [32];
  undefined1 (*pauVar27) [32];
  undefined8 *puVar28;
  ulonglong uVar29;
  longlong lVar30;
  ulonglong uVar31;
  undefined8 uVar32;
  undefined8 uVar33;
  
  switch(param_3) {
  case 0:
    return;
  case 1:
    *(undefined1 *)param_1 = *(undefined1 *)param_2;
    return;
  case 2:
    *(undefined2 *)param_1 = *(undefined2 *)param_2;
    return;
  case 3:
    uVar7 = *(undefined1 *)((longlong)param_2 + 2);
    *(undefined2 *)param_1 = *(undefined2 *)param_2;
    *(undefined1 *)((longlong)param_1 + 2) = uVar7;
    return;
  case 4:
    *(undefined4 *)param_1 = *(undefined4 *)param_2;
    return;
  case 5:
    uVar7 = *(undefined1 *)((longlong)param_2 + 4);
    *(undefined4 *)param_1 = *(undefined4 *)param_2;
    *(undefined1 *)((longlong)param_1 + 4) = uVar7;
    return;
  case 6:
    uVar8 = *(undefined2 *)((longlong)param_2 + 4);
    *(undefined4 *)param_1 = *(undefined4 *)param_2;
    *(undefined2 *)((longlong)param_1 + 4) = uVar8;
    return;
  case 7:
    uVar8 = *(undefined2 *)((longlong)param_2 + 4);
    uVar7 = *(undefined1 *)((longlong)param_2 + 6);
    *(undefined4 *)param_1 = *(undefined4 *)param_2;
    *(undefined2 *)((longlong)param_1 + 4) = uVar8;
    *(undefined1 *)((longlong)param_1 + 6) = uVar7;
    return;
  case 8:
    *param_1 = *param_2;
    return;
  case 9:
    uVar7 = *(undefined1 *)(param_2 + 1);
    *param_1 = *param_2;
    *(undefined1 *)(param_1 + 1) = uVar7;
    return;
  case 10:
    uVar8 = *(undefined2 *)(param_2 + 1);
    *param_1 = *param_2;
    *(undefined2 *)(param_1 + 1) = uVar8;
    return;
  case 0xb:
    uVar8 = *(undefined2 *)(param_2 + 1);
    uVar7 = *(undefined1 *)((longlong)param_2 + 10);
    *param_1 = *param_2;
    *(undefined2 *)(param_1 + 1) = uVar8;
    *(undefined1 *)((longlong)param_1 + 10) = uVar7;
    return;
  case 0xc:
    uVar9 = *(undefined4 *)(param_2 + 1);
    *param_1 = *param_2;
    *(undefined4 *)(param_1 + 1) = uVar9;
    return;
  case 0xd:
    uVar9 = *(undefined4 *)(param_2 + 1);
    uVar7 = *(undefined1 *)((longlong)param_2 + 0xc);
    *param_1 = *param_2;
    *(undefined4 *)(param_1 + 1) = uVar9;
    *(undefined1 *)((longlong)param_1 + 0xc) = uVar7;
    return;
  case 0xe:
    uVar9 = *(undefined4 *)(param_2 + 1);
    uVar8 = *(undefined2 *)((longlong)param_2 + 0xc);
    *param_1 = *param_2;
    *(undefined4 *)(param_1 + 1) = uVar9;
    *(undefined2 *)((longlong)param_1 + 0xc) = uVar8;
    return;
  case 0xf:
    uVar9 = *(undefined4 *)(param_2 + 1);
    uVar8 = *(undefined2 *)((longlong)param_2 + 0xc);
    uVar7 = *(undefined1 *)((longlong)param_2 + 0xe);
    *param_1 = *param_2;
    *(undefined4 *)(param_1 + 1) = uVar9;
    *(undefined2 *)((longlong)param_1 + 0xc) = uVar8;
    *(undefined1 *)((longlong)param_1 + 0xe) = uVar7;
    return;
  }
  if (param_3 < 0x21) {
    uVar10 = param_2[1];
    puVar25 = (undefined8 *)((longlong)param_2 + (param_3 - 0x10));
    uVar11 = *puVar25;
    uVar12 = puVar25[1];
    *param_1 = *param_2;
    param_1[1] = uVar10;
    puVar25 = (undefined8 *)((longlong)param_1 + (param_3 - 0x10));
    *puVar25 = uVar11;
    puVar25[1] = uVar12;
    return;
  }
  puVar25 = (undefined8 *)((longlong)param_2 + param_3);
  if (param_1 <= param_2) {
    puVar25 = param_1;
  }
  if (puVar25 <= param_1) {
    if (DAT_180028090 < 3) {
      if ((param_3 < 0x801) || (((byte)DAT_1800292e4 & 2) == 0)) {
        if (0x80 < param_3) {
          lVar30 = ((ulonglong)param_1 & 0xf) - 0x10;
          puVar25 = (undefined8 *)((longlong)param_1 - lVar30);
          puVar28 = (undefined8 *)((longlong)param_2 - lVar30);
          param_3 = param_3 + lVar30;
          if (0x80 < param_3) {
            do {
              uVar10 = puVar28[1];
              uVar11 = puVar28[2];
              uVar12 = puVar28[3];
              uVar13 = puVar28[4];
              uVar32 = puVar28[5];
              uVar33 = puVar28[6];
              uVar14 = puVar28[7];
              *puVar25 = *puVar28;
              puVar25[1] = uVar10;
              puVar25[2] = uVar11;
              puVar25[3] = uVar12;
              puVar25[4] = uVar13;
              puVar25[5] = uVar32;
              puVar25[6] = uVar33;
              puVar25[7] = uVar14;
              uVar10 = puVar28[9];
              uVar11 = puVar28[10];
              uVar12 = puVar28[0xb];
              uVar13 = puVar28[0xc];
              uVar32 = puVar28[0xd];
              uVar33 = puVar28[0xe];
              uVar14 = puVar28[0xf];
              puVar25[8] = puVar28[8];
              puVar25[9] = uVar10;
              puVar25[10] = uVar11;
              puVar25[0xb] = uVar12;
              puVar25[0xc] = uVar13;
              puVar25[0xd] = uVar32;
              puVar25[0xe] = uVar33;
              puVar25[0xf] = uVar14;
              puVar25 = puVar25 + 0x10;
              puVar28 = puVar28 + 0x10;
              param_3 = param_3 - 0x80;
            } while (0x7f < param_3);
          }
        }
                    /* WARNING: Could not recover jumptable at 0x000180019176. Too many branches */
                    /* WARNING: Treating indirect jump as call */
        (*(code *)((ulonglong)*(uint *)(&DAT_180023208 + (param_3 + 0xf >> 4) * 4) + 0x180000000))()
        ;
        return;
      }
    }
    else if (((param_3 < 0x2001) || (0x180000 < param_3)) || (((byte)DAT_1800292e4 & 2) == 0)) {
      uVar10 = *param_2;
      uVar11 = param_2[1];
      uVar12 = param_2[2];
      uVar13 = param_2[3];
      puVar25 = (undefined8 *)((longlong)param_2 + (param_3 - 0x20));
      uVar32 = *puVar25;
      uVar33 = puVar25[1];
      uVar14 = puVar25[2];
      uVar15 = puVar25[3];
      if (0x100 < param_3) {
        lVar30 = ((ulonglong)param_1 & 0x1f) - 0x20;
        pauVar23 = (undefined1 (*) [32])((longlong)param_1 - lVar30);
        pauVar26 = (undefined1 (*) [32])((longlong)param_2 - lVar30);
        param_3 = param_3 + lVar30;
        if (0x100 < param_3) {
          if (0x180000 < param_3) {
            do {
              uVar29 = param_3;
              pauVar27 = pauVar26;
              pauVar24 = pauVar23;
              auVar3 = pauVar27[1];
              auVar4 = pauVar27[2];
              auVar5 = pauVar27[3];
              auVar6 = vmovntdq_avx(*pauVar27);
              *pauVar24 = auVar6;
              auVar3 = vmovntdq_avx(auVar3);
              pauVar24[1] = auVar3;
              auVar3 = vmovntdq_avx(auVar4);
              pauVar24[2] = auVar3;
              auVar3 = vmovntdq_avx(auVar5);
              pauVar24[3] = auVar3;
              auVar3 = pauVar27[5];
              auVar4 = pauVar27[6];
              auVar5 = pauVar27[7];
              auVar6 = vmovntdq_avx(pauVar27[4]);
              pauVar24[4] = auVar6;
              auVar3 = vmovntdq_avx(auVar3);
              pauVar24[5] = auVar3;
              auVar3 = vmovntdq_avx(auVar4);
              pauVar24[6] = auVar3;
              auVar3 = vmovntdq_avx(auVar5);
              pauVar24[7] = auVar3;
              pauVar23 = pauVar24 + 8;
              pauVar26 = pauVar27 + 8;
              param_3 = uVar29 - 0x100;
            } while (0xff < uVar29 - 0x100);
            uVar31 = uVar29 - 0xe1 & 0xffffffffffffffe0;
            switch(uVar29) {
            case 0x1e1:
            case 0x1e2:
            case 0x1e3:
            case 0x1e4:
            case 0x1e5:
            case 0x1e6:
            case 0x1e7:
            case 0x1e8:
            case 0x1e9:
            case 0x1ea:
            case 0x1eb:
            case 0x1ec:
            case 0x1ed:
            case 0x1ee:
            case 0x1ef:
            case 0x1f0:
            case 0x1f1:
            case 0x1f2:
            case 499:
            case 500:
            case 0x1f5:
            case 0x1f6:
            case 0x1f7:
            case 0x1f8:
            case 0x1f9:
            case 0x1fa:
            case 0x1fb:
            case 0x1fc:
            case 0x1fd:
            case 0x1fe:
            case 0x1ff:
              auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(*pauVar27 + uVar31));
              *(undefined1 (*) [32])(*pauVar24 + uVar31) = auVar3;
            case 0x1c1:
            case 0x1c2:
            case 0x1c3:
            case 0x1c4:
            case 0x1c5:
            case 0x1c6:
            case 0x1c7:
            case 0x1c8:
            case 0x1c9:
            case 0x1ca:
            case 0x1cb:
            case 0x1cc:
            case 0x1cd:
            case 0x1ce:
            case 0x1cf:
            case 0x1d0:
            case 0x1d1:
            case 0x1d2:
            case 0x1d3:
            case 0x1d4:
            case 0x1d5:
            case 0x1d6:
            case 0x1d7:
            case 0x1d8:
            case 0x1d9:
            case 0x1da:
            case 0x1db:
            case 0x1dc:
            case 0x1dd:
            case 0x1de:
            case 0x1df:
            case 0x1e0:
              auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar27[1] + uVar31));
              *(undefined1 (*) [32])(pauVar24[1] + uVar31) = auVar3;
            case 0x1a1:
            case 0x1a2:
            case 0x1a3:
            case 0x1a4:
            case 0x1a5:
            case 0x1a6:
            case 0x1a7:
            case 0x1a8:
            case 0x1a9:
            case 0x1aa:
            case 0x1ab:
            case 0x1ac:
            case 0x1ad:
            case 0x1ae:
            case 0x1af:
            case 0x1b0:
            case 0x1b1:
            case 0x1b2:
            case 0x1b3:
            case 0x1b4:
            case 0x1b5:
            case 0x1b6:
            case 0x1b7:
            case 0x1b8:
            case 0x1b9:
            case 0x1ba:
            case 0x1bb:
            case 0x1bc:
            case 0x1bd:
            case 0x1be:
            case 0x1bf:
            case 0x1c0:
              auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar27[2] + uVar31));
              *(undefined1 (*) [32])(pauVar24[2] + uVar31) = auVar3;
            case 0x181:
            case 0x182:
            case 0x183:
            case 0x184:
            case 0x185:
            case 0x186:
            case 0x187:
            case 0x188:
            case 0x189:
            case 0x18a:
            case 0x18b:
            case 0x18c:
            case 0x18d:
            case 0x18e:
            case 399:
            case 400:
            case 0x191:
            case 0x192:
            case 0x193:
            case 0x194:
            case 0x195:
            case 0x196:
            case 0x197:
            case 0x198:
            case 0x199:
            case 0x19a:
            case 0x19b:
            case 0x19c:
            case 0x19d:
            case 0x19e:
            case 0x19f:
            case 0x1a0:
              auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar27[3] + uVar31));
              *(undefined1 (*) [32])(pauVar24[3] + uVar31) = auVar3;
            case 0x161:
            case 0x162:
            case 0x163:
            case 0x164:
            case 0x165:
            case 0x166:
            case 0x167:
            case 0x168:
            case 0x169:
            case 0x16a:
            case 0x16b:
            case 0x16c:
            case 0x16d:
            case 0x16e:
            case 0x16f:
            case 0x170:
            case 0x171:
            case 0x172:
            case 0x173:
            case 0x174:
            case 0x175:
            case 0x176:
            case 0x177:
            case 0x178:
            case 0x179:
            case 0x17a:
            case 0x17b:
            case 0x17c:
            case 0x17d:
            case 0x17e:
            case 0x17f:
            case 0x180:
              auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar27[4] + uVar31));
              *(undefined1 (*) [32])(pauVar24[4] + uVar31) = auVar3;
            case 0x141:
            case 0x142:
            case 0x143:
            case 0x144:
            case 0x145:
            case 0x146:
            case 0x147:
            case 0x148:
            case 0x149:
            case 0x14a:
            case 0x14b:
            case 0x14c:
            case 0x14d:
            case 0x14e:
            case 0x14f:
            case 0x150:
            case 0x151:
            case 0x152:
            case 0x153:
            case 0x154:
            case 0x155:
            case 0x156:
            case 0x157:
            case 0x158:
            case 0x159:
            case 0x15a:
            case 0x15b:
            case 0x15c:
            case 0x15d:
            case 0x15e:
            case 0x15f:
            case 0x160:
              auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar27[5] + uVar31));
              *(undefined1 (*) [32])(pauVar24[5] + uVar31) = auVar3;
            case 0x121:
            case 0x122:
            case 0x123:
            case 0x124:
            case 0x125:
            case 0x126:
            case 0x127:
            case 0x128:
            case 0x129:
            case 0x12a:
            case 299:
            case 300:
            case 0x12d:
            case 0x12e:
            case 0x12f:
            case 0x130:
            case 0x131:
            case 0x132:
            case 0x133:
            case 0x134:
            case 0x135:
            case 0x136:
            case 0x137:
            case 0x138:
            case 0x139:
            case 0x13a:
            case 0x13b:
            case 0x13c:
            case 0x13d:
            case 0x13e:
            case 0x13f:
            case 0x140:
              auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar27[6] + uVar31));
              *(undefined1 (*) [32])(pauVar24[6] + uVar31) = auVar3;
            default:
              puVar25 = (undefined8 *)(pauVar24[-1] + uVar29);
              *puVar25 = uVar32;
              puVar25[1] = uVar33;
              puVar25[2] = uVar14;
              puVar25[3] = uVar15;
            case 0x100:
              *param_1 = uVar10;
              param_1[1] = uVar11;
              param_1[2] = uVar12;
              param_1[3] = uVar13;
              return;
            }
          }
          do {
            uVar10 = *(undefined8 *)(*pauVar26 + 8);
            uVar11 = *(undefined8 *)(*pauVar26 + 0x10);
            uVar12 = *(undefined8 *)(*pauVar26 + 0x18);
            uVar13 = *(undefined8 *)pauVar26[1];
            uVar32 = *(undefined8 *)(pauVar26[1] + 8);
            uVar33 = *(undefined8 *)(pauVar26[1] + 0x10);
            uVar14 = *(undefined8 *)(pauVar26[1] + 0x18);
            uVar15 = *(undefined8 *)pauVar26[2];
            uVar16 = *(undefined8 *)(pauVar26[2] + 8);
            uVar17 = *(undefined8 *)(pauVar26[2] + 0x10);
            uVar18 = *(undefined8 *)(pauVar26[2] + 0x18);
            uVar19 = *(undefined8 *)pauVar26[3];
            uVar20 = *(undefined8 *)(pauVar26[3] + 8);
            uVar21 = *(undefined8 *)(pauVar26[3] + 0x10);
            uVar22 = *(undefined8 *)(pauVar26[3] + 0x18);
            *(undefined8 *)*pauVar23 = *(undefined8 *)*pauVar26;
            *(undefined8 *)(*pauVar23 + 8) = uVar10;
            *(undefined8 *)(*pauVar23 + 0x10) = uVar11;
            *(undefined8 *)(*pauVar23 + 0x18) = uVar12;
            *(undefined8 *)pauVar23[1] = uVar13;
            *(undefined8 *)(pauVar23[1] + 8) = uVar32;
            *(undefined8 *)(pauVar23[1] + 0x10) = uVar33;
            *(undefined8 *)(pauVar23[1] + 0x18) = uVar14;
            *(undefined8 *)pauVar23[2] = uVar15;
            *(undefined8 *)(pauVar23[2] + 8) = uVar16;
            *(undefined8 *)(pauVar23[2] + 0x10) = uVar17;
            *(undefined8 *)(pauVar23[2] + 0x18) = uVar18;
            *(undefined8 *)pauVar23[3] = uVar19;
            *(undefined8 *)(pauVar23[3] + 8) = uVar20;
            *(undefined8 *)(pauVar23[3] + 0x10) = uVar21;
            *(undefined8 *)(pauVar23[3] + 0x18) = uVar22;
            uVar10 = *(undefined8 *)(pauVar26[4] + 8);
            uVar11 = *(undefined8 *)(pauVar26[4] + 0x10);
            uVar12 = *(undefined8 *)(pauVar26[4] + 0x18);
            uVar13 = *(undefined8 *)pauVar26[5];
            uVar32 = *(undefined8 *)(pauVar26[5] + 8);
            uVar33 = *(undefined8 *)(pauVar26[5] + 0x10);
            uVar14 = *(undefined8 *)(pauVar26[5] + 0x18);
            uVar15 = *(undefined8 *)pauVar26[6];
            uVar16 = *(undefined8 *)(pauVar26[6] + 8);
            uVar17 = *(undefined8 *)(pauVar26[6] + 0x10);
            uVar18 = *(undefined8 *)(pauVar26[6] + 0x18);
            uVar19 = *(undefined8 *)pauVar26[7];
            uVar20 = *(undefined8 *)(pauVar26[7] + 8);
            uVar21 = *(undefined8 *)(pauVar26[7] + 0x10);
            uVar22 = *(undefined8 *)(pauVar26[7] + 0x18);
            *(undefined8 *)pauVar23[4] = *(undefined8 *)pauVar26[4];
            *(undefined8 *)(pauVar23[4] + 8) = uVar10;
            *(undefined8 *)(pauVar23[4] + 0x10) = uVar11;
            *(undefined8 *)(pauVar23[4] + 0x18) = uVar12;
            *(undefined8 *)pauVar23[5] = uVar13;
            *(undefined8 *)(pauVar23[5] + 8) = uVar32;
            *(undefined8 *)(pauVar23[5] + 0x10) = uVar33;
            *(undefined8 *)(pauVar23[5] + 0x18) = uVar14;
            *(undefined8 *)pauVar23[6] = uVar15;
            *(undefined8 *)(pauVar23[6] + 8) = uVar16;
            *(undefined8 *)(pauVar23[6] + 0x10) = uVar17;
            *(undefined8 *)(pauVar23[6] + 0x18) = uVar18;
            *(undefined8 *)pauVar23[7] = uVar19;
            *(undefined8 *)(pauVar23[7] + 8) = uVar20;
            *(undefined8 *)(pauVar23[7] + 0x10) = uVar21;
            *(undefined8 *)(pauVar23[7] + 0x18) = uVar22;
            pauVar23 = pauVar23 + 8;
            pauVar26 = pauVar26 + 8;
            param_3 = param_3 - 0x100;
          } while (0xff < param_3);
        }
      }
                    /* WARNING: Could not recover jumptable at 0x000180018ed2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
      (*(code *)((ulonglong)*(uint *)(&DAT_1800231c0 + (param_3 + 0x1f >> 5) * 4) + 0x180000000))();
      return;
    }
    for (; param_3 != 0; param_3 = param_3 - 1) {
      *(undefined1 *)param_1 = *(undefined1 *)param_2;
      param_2 = (undefined8 *)((longlong)param_2 + 1);
      param_1 = (undefined8 *)((longlong)param_1 + 1);
    }
    return;
  }
  uVar10 = *param_2;
  uVar11 = param_2[1];
  lVar30 = (longlong)param_2 - (longlong)param_1;
  puVar25 = (undefined8 *)((longlong)param_1 + lVar30 + (param_3 - 0x10));
  uVar12 = *puVar25;
  uVar13 = puVar25[1];
  puVar28 = (undefined8 *)((longlong)param_1 + (param_3 - 0x10));
  uVar29 = param_3 - 0x10;
  puVar25 = puVar28;
  uVar32 = uVar12;
  uVar33 = uVar13;
  if (((ulonglong)puVar28 & 0xf) != 0) {
    puVar25 = (undefined8 *)((ulonglong)puVar28 & 0xfffffffffffffff0);
    uVar32 = *(undefined8 *)((longlong)puVar25 + lVar30);
    uVar33 = ((undefined8 *)((longlong)puVar25 + lVar30))[1];
    *puVar28 = uVar12;
    *(undefined8 *)((longlong)param_1 + (param_3 - 8)) = uVar13;
    uVar29 = (longlong)puVar25 - (longlong)param_1;
  }
  uVar31 = uVar29 >> 7;
  if (uVar31 != 0) {
    *puVar25 = uVar32;
    puVar25[1] = uVar33;
    puVar28 = puVar25;
    while( true ) {
      puVar1 = (undefined8 *)((longlong)puVar28 + lVar30 + -0x10);
      uVar12 = puVar1[1];
      puVar25 = (undefined8 *)((longlong)puVar28 + lVar30 + -0x20);
      uVar13 = *puVar25;
      uVar32 = puVar25[1];
      puVar25 = puVar28 + -0x10;
      puVar28[-2] = *puVar1;
      puVar28[-1] = uVar12;
      puVar28[-4] = uVar13;
      puVar28[-3] = uVar32;
      puVar1 = (undefined8 *)((longlong)puVar28 + lVar30 + -0x30);
      uVar12 = puVar1[1];
      puVar2 = (undefined8 *)((longlong)puVar28 + lVar30 + -0x40);
      uVar13 = *puVar2;
      uVar32 = puVar2[1];
      uVar31 = uVar31 - 1;
      puVar28[-6] = *puVar1;
      puVar28[-5] = uVar12;
      puVar28[-8] = uVar13;
      puVar28[-7] = uVar32;
      puVar1 = (undefined8 *)((longlong)puVar28 + lVar30 + -0x50);
      uVar12 = puVar1[1];
      puVar2 = (undefined8 *)((longlong)puVar28 + lVar30 + -0x60);
      uVar13 = *puVar2;
      uVar32 = puVar2[1];
      puVar28[-10] = *puVar1;
      puVar28[-9] = uVar12;
      puVar28[-0xc] = uVar13;
      puVar28[-0xb] = uVar32;
      puVar1 = (undefined8 *)((longlong)puVar28 + lVar30 + -0x70);
      uVar12 = *puVar1;
      uVar13 = puVar1[1];
      uVar32 = *(undefined8 *)((longlong)puVar25 + lVar30);
      uVar33 = ((undefined8 *)((longlong)puVar25 + lVar30))[1];
      if (uVar31 == 0) break;
      puVar28[-0xe] = uVar12;
      puVar28[-0xd] = uVar13;
      *puVar25 = uVar32;
      puVar28[-0xf] = uVar33;
      puVar28 = puVar25;
    }
    puVar28[-0xe] = uVar12;
    puVar28[-0xd] = uVar13;
    uVar29 = uVar29 & 0x7f;
  }
  for (uVar31 = uVar29 >> 4; uVar31 != 0; uVar31 = uVar31 - 1) {
    *puVar25 = uVar32;
    puVar25[1] = uVar33;
    puVar25 = puVar25 + -2;
    uVar32 = *(undefined8 *)((longlong)puVar25 + lVar30);
    uVar33 = ((undefined8 *)((longlong)puVar25 + lVar30))[1];
  }
  if ((uVar29 & 0xf) != 0) {
    *param_1 = uVar10;
    param_1[1] = uVar11;
  }
  *puVar25 = uVar32;
  puVar25[1] = uVar33;
  return;
}


/* Address: 0x1800192e0; Evidence: ev_a89dafe299d5f0505c3e7fc14907cf9d6589dc8857dd57656b2f43ed234b5771 */

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


/* Address: 0x180019360; Evidence: ev_e64c499690c95b82455b64998981451c57a83f2c3c84fe13ba45ef7e465b7d63 */

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
    if (((ulonglong)_Str & 7) == 0) goto LAB_180019391;
    uVar1 = *(ulonglong *)_Str;
    _Str = (char *)((longlong)_Str + 1);
  } while ((char)uVar1 != '\0');
LAB_1800193d8:
  return (size_t)(char *)((longlong)_Str + lVar3 + -1);
LAB_180019391:
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
  goto LAB_1800193d8;
}


/* Address: 0x180019420; Evidence: ev_9e74cd00fea11f55621a9001b1e47af5a71fd76489f76b06258406496d99f68d */

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


/* Address: 0x18001965c; Evidence: ev_72401d69c0910c5f362fa537750209721f9dc38629321599ac5a2fbd3818d7b4 */

void FUN_18001965c(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x30) & 1) != 0) {
    *(uint *)(param_2 + 0x30) = *(uint *)(param_2 + 0x30) & 0xfffffffe;
    thunk_FUN_180005ff0(*(longlong **)(param_2 + 0x60));
  }
  return;
}


/* Address: 0x18001968e; Evidence: ev_db008df40ebab6837fda011052d2eb906960b4b5ef0faaa88e2402e5f384ee70 */

undefined8 FUN_18001968e(void)

{
  return 0;
}


/* Address: 0x180019700; Evidence: ev_89418c73506f23e97f1e6a288f48b461929f945a4bbe4be9575ffdac61472c98 */

undefined8 FUN_180019700(undefined8 param_1,longlong param_2)

{
  undefined8 *puVar1;
  longlong *plVar2;
  
  puVar1 = (undefined8 *)(**(code **)(**(longlong **)(param_2 + 0x28) + 8))();
  FUN_180005810((undefined8 *)(param_2 + 0x48),puVar1);
  plVar2 = (longlong *)(*(longlong *)(param_2 + 0x20) + 0x48);
  if (plVar2 != (longlong *)(param_2 + 0x48)) {
    puVar1 = (undefined8 *)(param_2 + 0x48);
    if (0xf < *(ulonglong *)(param_2 + 0x60)) {
      puVar1 = *(undefined8 **)(param_2 + 0x48);
    }
    FUN_1800060c0(plVar2,puVar1,*(ulonglong *)(param_2 + 0x58));
  }
  FUN_180005790((longlong *)(param_2 + 0x48));
  return 0;
}


/* Address: 0x180019774; Evidence: ev_5f6aebfdfc2c3bf9f4dca3bb8a7277fe11d6c22d87eb49505d03d092ae144c57 */

undefined8 FUN_180019774(undefined8 param_1,longlong param_2)

{
  longlong *plVar1;
  undefined8 *puVar2;
  
  FUN_180005810((undefined8 *)(param_2 + 0x68),
                (undefined8 *)"cursor_proclist_scan_async: unknown error");
  plVar1 = (longlong *)(*(longlong *)(param_2 + 0x20) + 0x48);
  if (plVar1 != (longlong *)(param_2 + 0x68)) {
    puVar2 = (undefined8 *)(param_2 + 0x68);
    if (0xf < *(ulonglong *)(param_2 + 0x80)) {
      puVar2 = *(undefined8 **)(param_2 + 0x68);
    }
    FUN_1800060c0(plVar1,puVar2,*(ulonglong *)(param_2 + 0x78));
  }
  FUN_180005790((longlong *)(param_2 + 0x68));
  return 0;
}


/* Address: 0x180019800; Evidence: ev_436891f013c93b845a740ab89b09b190b1ef34ff91de244623cf3140567afcb5 */

void FUN_180019800(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x3c) & 1) != 0) {
    *(uint *)(param_2 + 0x3c) = *(uint *)(param_2 + 0x3c) & 0xfffffffe;
    FUN_180005720(*(longlong **)(param_2 + 0x60));
  }
  return;
}


/* Address: 0x180019870; Evidence: ev_eac4b42da90cdf7a2ef4e2b6c05425fa55d3463b82033aeaa55edcb1747fffb8 */

void FUN_180019870(undefined8 param_1,longlong param_2)

{
  thunk_FUN_1800116e0(*(LPVOID *)(param_2 + 0x40));
  return;
}


/* Address: 0x180019a50; Evidence: ev_c5bef407c59bdccce233cb4a7e30983e6ba39df0f71e68a954ac96d709a32394 */

void FUN_180019a50(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x118) & 1) != 0) {
    *(uint *)(param_2 + 0x118) = *(uint *)(param_2 + 0x118) & 0xfffffffe;
    FUN_180005720(*(longlong **)(param_2 + 0x100));
  }
  return;
}


/* Address: 0x180019ad8; Evidence: ev_3a0d3e18b1920247f21658248c697c981567d4d6f2505a317af717262dabf85d */

bool FUN_180019ad8(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x180019af0; Evidence: ev_22fc440d90520718f905f78a964be43e38a6d5afc9178c3e9b333409d3f01c34 */

void FUN_180019af0(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x40));
  return;
}


/* Address: 0x180019b07; Evidence: ev_a315cd804a572133f148bc9f6a714cd354fd184657d5b1659b24cfc1a2331540 */

void FUN_180019b07(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x20));
  return;
}


/* Address: 0x180019b20; Evidence: ev_98d0dff8b86978b855fcb4354650b66e46adfbe5389c57664f9961216631c18c */

void FUN_180019b20(void)

{
  FUN_1800098c8();
  return;
}


/* Address: 0x180019b34; Evidence: ev_a152f707942cf0096b4f7cc01af1496a8aff13230ba4b430e4eb52c384cff0dd */

void FUN_180019b34(undefined8 *param_1,longlong param_2)

{
  __scrt_dllmain_exception_filter
            (*(undefined8 *)(param_2 + 0x60),*(int *)(param_2 + 0x68),
             *(undefined8 *)(param_2 + 0x70),FUN_180009ae0,*(int *)*param_1,param_1);
  return;
}


/* Address: 0x180019b6a; Evidence: ev_2c524a129214d9beb3a54f66f7130c5d033957c1bcb5b63d0565a6b1b8ce2e3d */

undefined4 FUN_180019b6a(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_18000babc();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_18000babc();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_18000babc();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_18000d72c((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_18000babc();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x180019c11; Evidence: ev_c5b86fd767a922afd57b1f3e52075dddba392d5ec588d640601d9fcb95554e03 */

undefined4 FUN_180019c11(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_18000babc();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_18000babc();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_18000babc();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  lVar3 = FUN_18000babc();
  *(undefined4 *)(lVar3 + 0x78) = *(undefined4 *)(param_2 + 0xa8);
  FUN_18000dc0c((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(FuncInfo4 **)(param_2 + 0x90),0,0,1);
  lVar3 = FUN_18000babc();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x180019cc6; Evidence: ev_1dcc08305d4f7cb9e9190ef2c0f1456e4182f5c3b3e1136cbe59338485460c39 */

undefined4 FUN_180019cc6(undefined8 param_1,longlong param_2)

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
    lVar2 = FUN_18000babc();
    *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x28);
    uVar1 = *(undefined8 *)(*(longlong *)(param_2 + 0x30) + 8);
    lVar2 = FUN_18000babc();
    *(undefined8 *)(lVar2 + 0x28) = uVar1;
                    /* WARNING: Subroutine does not return */
    FUN_180010adc();
  }
  *(undefined4 *)(param_2 + 0x20) = 0;
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x180019d58; Evidence: ev_10b2bd9b150a6c4896f5fd4c2c803b87a7e84288d4d48bc5ce4b63519b3ca9c6 */

void FUN_180019d58(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  *(undefined4 *)(lVar1 + 0x78) = 0xfffffffe;
  return;
}


/* Address: 0x180019d74; Evidence: ev_24c63de64ab7410a4e62a066e4348e279f590612bf94c6ea1ba9dae221b59cf4 */

void FUN_180019d74(undefined8 *param_1,longlong param_2)

{
  FUN_18000e3d4(param_1,*(longlong *)(param_2 + 0xb8),(undefined4 *)(param_2 + 0x20));
  return;
}


/* Address: 0x180019d95; Evidence: ev_a20c52227d8c76e3e6ab61f1498c677b570e84d1826fa8006dd7817914b0f4a5 */

void FUN_180019d95(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_18000b2c8(*(longlong *)(param_2 + 0x38));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xb8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_18000b4ec(piVar1);
    }
  }
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0xc0);
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x40);
  return;
}


/* Address: 0x180019e1b; Evidence: ev_9cea6a3f4cd1217c0acfde04cce327622e4df06c13432a3ceaa00b4dadd6d838 */

void FUN_180019e1b(_EXCEPTION_POINTERS *param_1,longlong param_2)

{
  ExFilterRethrowFH4(param_1,*(EHExceptionRecord **)(param_2 + 0xd8),*(int *)(param_2 + 200),
                     (int *)(param_2 + 0x20));
  return;
}


/* Address: 0x180019e43; Evidence: ev_e3464f2f99b4b21b8ed25e40a00e776052ebcd9698ed10a6e2285c129955fdab */

void FUN_180019e43(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_18000b2c8(*(longlong *)(param_2 + 0x40));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xd8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_18000b4ec(piVar1);
    }
  }
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x30);
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x48);
  lVar2 = FUN_18000babc();
  *(undefined4 *)(lVar2 + 0x78) = *(undefined4 *)(param_2 + 0xc0);
  return;
}


/* Address: 0x180019ed4; Evidence: ev_3a48ceb4e5615bbd44f37341df1a244718baa2ddcd3ecf332e4dd827d676f9d2 */

void FUN_180019ed4(undefined8 *param_1)

{
  FUN_18000b5b8(param_1);
  return;
}


/* Address: 0x180019eea; Evidence: ev_74556ca50e1c28b573d7fc05b2951863d1039ccc1f06408c3f2886a03d6c8a6c */

void FUN_180019eea(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_18000babc();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180019f0d; Evidence: ev_f4398f5e6e6514a9d28105ecaa98db531f737b774eb08e0274e6d5eaeba49569 */

void FUN_180019f0d(undefined8 *param_1)

{
  FUN_18000b5b8(param_1);
  return;
}


/* Address: 0x180019f23; Evidence: ev_800a83c2c3263093912f532b9c6baf5b3d2efde45fc440ba48e257bb06a3a316 */

void FUN_180019f23(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000babc();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_18000babc();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x180019f50; Evidence: ev_cea2eeaa971ff6f91d9dafcca969c6443985aec6f03d872079cf7ae2314ee093 */

void FUN_180019f50(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x180019f66; Evidence: ev_65382ed34aec98d90707534f73c2c31aaf0545d8ff6b2a0dfde3e1f9f2af52ab */

void FUN_180019f66(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x180019f7c; Evidence: ev_03c71046f249ce6d6e172d81d9fd48f73d818420f332232b83fe8a27f09e04fe */

void FUN_180019f7c(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x48));
  return;
}


/* Address: 0x180019f96; Evidence: ev_97c7b3d3437345938c79867de9cc73abefc172ac546c537b3b1e7b52b6b066c4 */

undefined4 FUN_180019f96(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x180019fc3; Evidence: ev_1769b994c22237cbf4c80ab31a55ec60407d8e98377910a202cbdba60cca70e9 */

void FUN_180019fc3(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x58));
  return;
}


/* Address: 0x180019fdd; Evidence: ev_565dfc9ad39bc796cb59cddcf1f792cdd23d38fdf923343d7447a503c0b515be */

void FUN_180019fdd(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x68));
  return;
}


/* Address: 0x180019ff7; Evidence: ev_d2933439236bc83c491bdb6c3484b56d81667bbea4af2e6bf5e15160098ac3d6 */

void FUN_180019ff7(void)

{
  __acrt_unlock(5);
  return;
}


/* Address: 0x18001a010; Evidence: ev_ef3c19a721f7bd8b8629aaf62063a4c9d9833d34241ef7bc4d0fb1c6c672896e */

void FUN_18001a010(void)

{
  __acrt_unlock(7);
  return;
}


/* Address: 0x18001a029; Evidence: ev_bf7e8f007a55d1aa3e6d9730f71c632b91bfdc4628bffde2852a987b05e5e11d */

void FUN_18001a029(undefined8 param_1,longlong param_2)

{
  if (*(char *)(param_2 + 0x70) != '\0') {
    __acrt_unlock(3);
  }
  return;
}


/* Address: 0x18001a04a; Evidence: ev_690ecafaf33bbcaca8dd73fed38b38b58406f428082367a573b6996eef62fcba */

void FUN_18001a04a(undefined8 param_1,longlong param_2)

{
  FUN_180014428(**(longlong **)(param_2 + 0x48));
  return;
}


/* Address: 0x18001a065; Evidence: ev_b2b899dbdd06c9ea87fd11d9aa651c2574a6fba9ac343aa8b1eb286eebdd8f5b */

void FUN_18001a065(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x98));
  return;
}


/* Address: 0x18001a082; Evidence: ev_26884fb520a06057be1a987265c0bc0472aa6651c5ded5855ee08b74cfdd1731 */

void FUN_18001a082(void)

{
  __acrt_unlock(4);
  return;
}


/* Address: 0x18001a09b; Evidence: ev_393a72f7562943650f22aee6774382c010689208c5ba2065e352c357a2362c59 */

void FUN_18001a09b(undefined8 param_1,longlong param_2)

{
  FUN_18001634c(**(uint **)(param_2 + 0x48));
  return;
}


/* Address: 0x18001a0b5; Evidence: ev_9709ea5c51183cde1a2e0a6923c10cb0a11b07a3e8957fb489d7c2329745e506 */

void FUN_18001a0b5(undefined8 param_1,longlong param_2)

{
  FUN_18001634c(*(uint *)(param_2 + 0x60));
  return;
}


/* Address: 0x18001a0cc; Evidence: ev_a4c61cdeb0255bb19b94ffd37be5924ce432f2832ef311d91c9c339153c8a9ba */

void FUN_18001a0cc(void)

{
  __acrt_unlock(8);
  return;
}


/* Address: 0x18001a0e5; Evidence: ev_2844f3f20e5d98f7ad4e5f557671d209895c718e069b5b6197af9a4272b28bec */

void FUN_18001a0e5(undefined8 param_1,longlong param_2)

{
  FUN_180014428(*(longlong *)(param_2 + 0x40));
  return;
}


/* Address: 0x18001a100; Evidence: ev_d34da2628c572b6a10174cd73ba9ff3bc17c04fd784452d417a83715ac34de0f */

bool FUN_18001a100(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x18001a120; Evidence: ev_5a6cca3f2e163bcc4e71d1489760f25025a157de36e277403ed30597f30d42a3 */

void FUN_18001a120(void)

{
  FUN_180007270(0x180029e20);
  FUN_1800071e0(0x180029de0);
  return;
}

