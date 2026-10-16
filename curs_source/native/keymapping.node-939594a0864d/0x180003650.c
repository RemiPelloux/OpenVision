
/* Address: 0x180003650; Evidence: ev_ce568aad608cd6456ff6f569bf83c03408615ec0ebfefe12bbc29f5822c1806d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32] FUN_180003650(undefined8 param_1)

{
  ulonglong uVar1;
  LPVOID pvVar2;
  DWORD idThread;
  BOOL BVar3;
  int iVar4;
  HKL hkl;
  HWND hWnd;
  HKL hkl_00;
  ulonglong uVar5;
  ulonglong uVar6;
  void *pvVar7;
  longlong *plVar8;
  LPVOID pvVar9;
  undefined1 (*pauVar10) [32];
  undefined1 (*pauVar11) [32];
  undefined1 *puVar12;
  ulonglong uVar13;
  char *pcVar14;
  undefined1 (*pauVar15) [32];
  undefined1 auStackY_138 [32];
  char local_108 [8];
  undefined1 (*local_100) [32];
  longlong *local_f8;
  undefined1 (*local_f0) [32];
  longlong local_e8 [8];
  undefined8 local_a8;
  undefined8 uStack_a0;
  ulonglong local_98;
  ulonglong uStack_90;
  undefined1 local_88 [16];
  undefined8 local_78;
  ulonglong uStack_70;
  undefined1 local_68 [16];
  undefined8 local_58;
  ulonglong uStack_50;
  CHAR local_48;
  char acStack_47 [15];
  ulonglong local_38;
  
  local_38 = DAT_180027000 ^ (ulonglong)auStackY_138;
  hkl = GetKeyboardLayout(0);
  hWnd = GetForegroundWindow();
  if (hWnd != (HWND)0x0) {
    idThread = GetWindowThreadProcessId(hWnd,(LPDWORD)0x0);
    hkl_00 = GetKeyboardLayout(idThread);
    ActivateKeyboardLayout(hkl_00,0);
  }
  BVar3 = GetKeyboardLayoutNameA(&local_48);
  if (BVar3 == 0) {
    iVar4 = napi_get_null(param_1,&local_100);
    pauVar15 = local_100;
    if (iVar4 != 0) {
      napi_get_last_error_info(param_1,&local_f8);
      napi_is_exception_pending(param_1,local_108);
      if (local_108[0] == '\0') {
        pcVar14 = "empty error message";
        if ((char *)*local_f8 != (char *)0x0) {
          pcVar14 = (char *)*local_f8;
        }
        napi_throw_error(param_1,0,pcVar14);
      }
      pauVar15 = (undefined1 (*) [32])0x0;
    }
    goto LAB_180003bc0;
  }
  local_a8 = (undefined1 (*) [32])0x0;
  uStack_a0 = 0;
  local_98 = 0;
  uStack_90 = 0;
  uVar13 = 0xffffffffffffffff;
  do {
    uVar5 = uVar13;
    uVar13 = uVar5 + 1;
  } while (acStack_47[uVar5] != '\0');
  if (0x7fffffffffffffff < uVar13) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  pauVar10 = (undefined1 (*) [32])0x0;
  if (uVar13 < 0x10) {
    pauVar11 = (undefined1 (*) [32])&local_48;
    uStack_90 = 0xf;
    local_98 = uVar13;
    FUN_180017e30((undefined1 (*) [32])&local_a8,pauVar11,uVar13);
    *(undefined1 *)((longlong)&local_a8 + uVar5 + 1) = 0;
  }
  else {
    uVar5 = uVar13 | 0xf;
    if (uVar5 < 0x8000000000000000) {
      if (uVar5 < 0x16) {
        uVar5 = 0x16;
      }
      uVar1 = uVar5 + 1;
      pauVar15 = pauVar10;
      if (uVar1 != 0) {
        if (0xfff < uVar1) {
          uVar6 = uVar5 + 0x28;
          if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
            FUN_180001140();
          }
          goto code_r0x0001800037c8;
        }
        pauVar15 = operator_new(uVar1);
      }
    }
    else {
      uVar6 = 0x8000000000000027;
      uVar5 = 0x7fffffffffffffff;
code_r0x0001800037c8:
      pvVar7 = operator_new(uVar6);
      if (pvVar7 == (void *)0x0) goto LAB_180003c05;
      pauVar15 = (undefined1 (*) [32])((longlong)pvVar7 + 0x27U & 0xffffffffffffffe0);
      *(void **)(pauVar15[-1] + 0x18) = pvVar7;
    }
    pauVar11 = (undefined1 (*) [32])&local_48;
    local_a8 = pauVar15;
    local_98 = uVar13;
    uStack_90 = uVar5;
    FUN_180017e30(pauVar15,pauVar11,uVar13);
    (*pauVar15)[uVar13] = 0;
  }
  local_e8[0] = 0x492074756f79614c;
  local_e8[2] = 9;
  local_e8[3] = 0xf;
  local_e8[1] = 100;
  plVar8 = FUN_180003e00(local_e8 + 4,pauVar11,(undefined1 (*) [32])&local_a8);
  FUN_180003450((undefined1 (*) [32])local_68,plVar8,local_e8);
  local_e8[2] = 0xb;
  local_e8[3] = 0xf;
  local_e8[0] = 0x542074756f79614c;
  local_e8[1] = 0x747865;
  plVar8 = FUN_180003e00(local_e8 + 4,plVar8,(undefined1 (*) [32])&local_a8);
  FUN_180003450((undefined1 (*) [32])local_88,plVar8,local_e8);
  iVar4 = napi_create_object(param_1,&local_f0);
  pauVar11 = local_f0;
  pauVar15 = pauVar10;
  if (iVar4 == 0) {
    pauVar15 = (undefined1 (*) [32])&local_a8;
    if (0xf < uStack_90) {
      pauVar15 = local_a8;
    }
    iVar4 = napi_create_string_utf8(param_1,pauVar15);
    if ((iVar4 == 0) &&
       (iVar4 = napi_set_named_property(param_1,pauVar11), pauVar15 = local_f0, iVar4 == 0)) {
      puVar12 = local_68;
      if (0xf < uStack_50) {
        puVar12 = (undefined1 *)CONCAT71(local_68._1_7_,local_68[0]);
      }
      iVar4 = napi_create_string_utf8(param_1,puVar12);
      if ((iVar4 == 0) &&
         (iVar4 = napi_set_named_property(param_1,pauVar15), pauVar15 = local_f0, iVar4 == 0)) {
        puVar12 = local_88;
        if (0xf < uStack_70) {
          puVar12 = (undefined1 *)CONCAT71(local_88._1_7_,local_88[0]);
        }
        iVar4 = napi_create_string_utf8(param_1,puVar12);
        if ((iVar4 == 0) &&
           (iVar4 = napi_set_named_property(param_1,pauVar15), pauVar15 = local_f0, iVar4 == 0))
        goto LAB_180003ad7;
      }
    }
    napi_get_last_error_info(param_1,&local_100);
    napi_is_exception_pending(param_1,local_108);
    if (local_108[0] == '\0') {
      napi_throw_error(param_1,0);
    }
    napi_get_last_error_info(param_1,&local_100);
    napi_is_exception_pending(param_1,local_108);
    pauVar15 = pauVar10;
    if (local_108[0] == '\0') {
      napi_throw_error(param_1,0);
    }
  }
  else {
    napi_get_last_error_info(param_1,&local_100);
    napi_is_exception_pending(param_1,local_108);
    if (local_108[0] == '\0') {
      napi_throw_error(param_1,0);
    }
  }
LAB_180003ad7:
  if (0xf < uStack_70) {
    pvVar2 = (LPVOID)CONCAT71(local_88._1_7_,local_88[0]);
    pvVar9 = pvVar2;
    if ((0xfff < uStack_70 + 1) &&
       (pvVar9 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar9)))) goto LAB_180003c05;
    thunk_FUN_18000bff0(pvVar9);
  }
  local_88[0] = 0;
  local_78 = 0;
  uStack_70 = 0xf;
  if (0xf < uStack_50) {
    pvVar2 = (LPVOID)CONCAT71(local_68._1_7_,local_68[0]);
    pvVar9 = pvVar2;
    if ((0xfff < uStack_50 + 1) &&
       (pvVar9 = *(LPVOID *)((longlong)pvVar2 + -8),
       0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar9)))) goto LAB_180003c05;
    thunk_FUN_18000bff0(pvVar9);
  }
  local_68[0] = 0;
  local_58 = 0;
  uStack_50 = 0xf;
  if (0xf < uStack_90) {
    pauVar10 = local_a8;
    if ((0xfff < uStack_90 + 1) &&
       (pauVar10 = *(undefined1 (**) [32])((longlong)local_a8[-1] + 0x18),
       0x1f < (ulonglong)((longlong)local_a8 + (-8 - (longlong)pauVar10)))) {
LAB_180003c05:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000bff0(pauVar10);
  }
  local_98 = 0;
  uStack_90 = 0xf;
  local_a8 = (undefined1 (*) [32])((ulonglong)local_a8 & 0xffffffffffffff00);
LAB_180003bc0:
  ActivateKeyboardLayout(hkl,0);
  return pauVar15;
}

