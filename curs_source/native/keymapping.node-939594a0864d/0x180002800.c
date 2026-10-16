
/* Address: 0x180002800; Evidence: ev_dca01ccb976e9a36859f86fe969205eb9fbd7ab88e727a71d28ba102a11109f8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180002800(undefined8 param_1)

{
  undefined8 uVar1;
  DWORD idThread;
  int iVar2;
  UINT wScanCode;
  UINT uCode;
  UINT UVar3;
  uint uVar4;
  HKL hkl;
  HWND hWnd;
  HKL hkl_00;
  char *pcVar5;
  undefined8 ****ppppuVar6;
  undefined8 uVar7;
  undefined8 uVar8;
  undefined1 auStackY_2c8 [32];
  char local_298 [8];
  longlong *local_290;
  undefined8 local_288;
  longlong *local_280;
  undefined8 local_278;
  undefined8 local_270 [5];
  undefined8 ***local_248;
  undefined8 uStack_240;
  undefined8 local_238;
  ulonglong uStack_230;
  undefined8 ***local_228;
  undefined8 uStack_220;
  undefined8 local_218;
  ulonglong uStack_210;
  undefined8 ***local_208;
  undefined8 uStack_200;
  undefined8 local_1f8;
  ulonglong uStack_1f0;
  undefined8 ***local_1e8;
  undefined8 uStack_1e0;
  undefined8 local_1d8;
  ulonglong uStack_1d0;
  wint_t local_1c8 [8];
  WCHAR local_1b8 [8];
  WCHAR local_1a8 [8];
  WCHAR local_198 [8];
  WCHAR local_188 [8];
  WCHAR local_178 [8];
  WCHAR local_168 [8];
  WCHAR local_158 [8];
  BYTE local_148 [16];
  undefined1 local_138;
  byte local_137;
  byte local_136;
  ulonglong local_48;
  
  local_48 = DAT_180027000 ^ (ulonglong)auStackY_2c8;
  hkl = GetKeyboardLayout(0);
  hWnd = GetForegroundWindow();
  if (hWnd != (HWND)0x0) {
    idThread = GetWindowThreadProcessId(hWnd,(LPDWORD)0x0);
    hkl_00 = GetKeyboardLayout(idThread);
    ActivateKeyboardLayout(hkl_00,0);
  }
  iVar2 = napi_create_object(param_1,&local_278);
  uVar7 = 0;
  if (iVar2 == 0) {
    wScanCode = MapVirtualKeyW(0x6e,0);
    local_280 = (longlong *)0x0;
    do {
      local_290 = (longlong *)(&DAT_180021b98)[(longlong)local_280 * 2];
      if ((local_290 != (longlong *)0x0) && (0 < (int)(&DAT_180021b94)[(longlong)local_280 * 4])) {
        uCode = MapVirtualKeyW((&DAT_180021b94)[(longlong)local_280 * 4],1);
        iVar2 = napi_create_object(param_1,&local_288);
        uVar1 = local_288;
        uVar8 = uVar7;
        if (iVar2 == 0) {
          pcVar5 = FUN_180001eb0(uCode);
          iVar2 = napi_create_string_utf8(param_1,pcVar5,0xffffffffffffffff,local_270);
          if ((iVar2 == 0) &&
             (iVar2 = napi_set_named_property(param_1,uVar1,&DAT_180023ddc,local_270[0]), iVar2 == 0
             )) {
            FUN_180017a70((undefined1 (*) [32])local_148,0,0x100);
            UVar3 = MapVirtualKeyW(uCode,0);
            uVar4 = ToUnicode(uCode,UVar3,local_148,(LPWSTR)local_1c8,4,0);
            if (uVar4 == 0xffffffff) {
              if ((local_1c8[0] != 0) && (iVar2 = FUN_180008444(local_1c8[0]), iVar2 == 0)) {
                uVar4 = 1;
                goto LAB_180002a27;
              }
LAB_180002a95:
              uStack_1e0 = 0;
              local_1e8 = (undefined8 ****)0x0;
              local_1d8 = 0;
              uStack_1d0 = 0xf;
            }
            else {
LAB_180002a27:
              FUN_180017a70((undefined1 (*) [32])local_148,0,0x100);
              do {
                iVar2 = ToUnicode(0x6e,wScanCode,local_148,local_188,4,0);
              } while (iVar2 < 0);
              if (((int)uVar4 < 1) ||
                 ((uVar4 == 1 && (iVar2 = FUN_180008444(local_1c8[0]), iVar2 != 0))))
              goto LAB_180002a95;
              FUN_180001180((undefined1 (*) [32])&local_1e8,(undefined1 (*) [32])local_1c8,uVar4);
            }
            ppppuVar6 = &local_1e8;
            if (0xf < uStack_1d0) {
              ppppuVar6 = (undefined8 ****)local_1e8;
            }
            iVar2 = napi_create_string_utf8(param_1,ppppuVar6);
            if ((iVar2 == 0) && (iVar2 = napi_set_named_property(param_1), iVar2 == 0)) {
              FUN_180017a70((undefined1 (*) [32])local_148,0,0x100);
              local_138 = 0x80;
              UVar3 = MapVirtualKeyW(uCode,0);
              uVar4 = ToUnicode(uCode,UVar3,local_148,local_1b8,4,0);
              if (uVar4 == 0xffffffff) {
                if ((local_1b8[0] != L'\0') && (iVar2 = FUN_180008444(local_1b8[0]), iVar2 == 0)) {
                  uVar4 = 1;
                  goto LAB_180002b6a;
                }
LAB_180002bd5:
                uStack_200 = 0;
                local_208 = (undefined8 ****)0x0;
                local_1f8 = 0;
                uStack_1f0 = 0xf;
              }
              else {
LAB_180002b6a:
                FUN_180017a70((undefined1 (*) [32])local_148,0,0x100);
                do {
                  iVar2 = ToUnicode(0x6e,wScanCode,local_148,local_178,4,0);
                } while (iVar2 < 0);
                if (((int)uVar4 < 1) ||
                   ((uVar4 == 1 && (iVar2 = FUN_180008444(local_1b8[0]), iVar2 != 0))))
                goto LAB_180002bd5;
                FUN_180001180((undefined1 (*) [32])&local_208,(undefined1 (*) [32])local_1b8,uVar4);
              }
              ppppuVar6 = &local_208;
              if (0xf < uStack_1f0) {
                ppppuVar6 = (undefined8 ****)local_208;
              }
              iVar2 = napi_create_string_utf8(param_1,ppppuVar6);
              if ((iVar2 == 0) && (iVar2 = napi_set_named_property(param_1), iVar2 == 0)) {
                FUN_180017a70((undefined1 (*) [32])local_148,0,0x100);
                local_136 = local_136 | 0x80;
                local_137 = 0x80;
                UVar3 = MapVirtualKeyW(uCode,0);
                uVar4 = ToUnicode(uCode,UVar3,local_148,local_1a8,4,0);
                if (uVar4 == 0xffffffff) {
                  if ((local_1a8[0] != L'\0') && (iVar2 = FUN_180008444(local_1a8[0]), iVar2 == 0))
                  {
                    uVar4 = 1;
                    goto LAB_180002cb1;
                  }
LAB_180002d25:
                  uStack_220 = 0;
                  local_228 = (undefined8 ****)0x0;
                  local_218 = 0;
                  uStack_210 = 0xf;
                }
                else {
LAB_180002cb1:
                  FUN_180017a70((undefined1 (*) [32])local_148,0,0x100);
                  do {
                    iVar2 = ToUnicode(0x6e,wScanCode,local_148,local_168,4,0);
                  } while (iVar2 < 0);
                  if (((int)uVar4 < 1) ||
                     ((uVar4 == 1 && (iVar2 = FUN_180008444(local_1a8[0]), iVar2 != 0))))
                  goto LAB_180002d25;
                  FUN_180001180((undefined1 (*) [32])&local_228,(undefined1 (*) [32])local_1a8,uVar4
                               );
                }
                ppppuVar6 = &local_228;
                if (0xf < uStack_210) {
                  ppppuVar6 = (undefined8 ****)local_228;
                }
                iVar2 = napi_create_string_utf8(param_1,ppppuVar6);
                if ((iVar2 == 0) && (iVar2 = napi_set_named_property(param_1), iVar2 == 0)) {
                  FUN_180017a70((undefined1 (*) [32])local_148,0,0x100);
                  local_137 = local_137 | 0x80;
                  local_136 = local_136 | 0x80;
                  local_138 = 0x80;
                  UVar3 = MapVirtualKeyW(uCode,0);
                  uVar4 = ToUnicode(uCode,UVar3,local_148,local_198,4,0);
                  if (uVar4 == 0xffffffff) {
                    if ((local_198[0] != L'\0') && (iVar2 = FUN_180008444(local_198[0]), iVar2 == 0)
                       ) {
                      uVar4 = 1;
                      goto LAB_180002e05;
                    }
LAB_180002e75:
                    uStack_240 = 0;
                    local_248 = (undefined8 ****)0x0;
                    local_238 = 0;
                    uStack_230 = 0xf;
                  }
                  else {
LAB_180002e05:
                    FUN_180017a70((undefined1 (*) [32])local_148,0,0x100);
                    do {
                      iVar2 = ToUnicode(0x6e,wScanCode,local_148,local_158,4,0);
                    } while (iVar2 < 0);
                    if (((int)uVar4 < 1) ||
                       ((uVar4 == 1 && (iVar2 = FUN_180008444(local_198[0]), iVar2 != 0))))
                    goto LAB_180002e75;
                    FUN_180001180((undefined1 (*) [32])&local_248,(undefined1 (*) [32])local_198,
                                  uVar4);
                  }
                  uVar1 = local_288;
                  ppppuVar6 = &local_248;
                  if (0xf < uStack_230) {
                    ppppuVar6 = (undefined8 ****)local_248;
                  }
                  iVar2 = napi_create_string_utf8(param_1,ppppuVar6);
                  if ((iVar2 == 0) && (iVar2 = napi_set_named_property(param_1,uVar1), iVar2 == 0))
                  {
                    iVar2 = napi_set_named_property(param_1,local_278);
                    if (iVar2 == 0) {
                      if (0xf < uStack_230) {
                        ppppuVar6 = (undefined8 ****)local_248;
                        if ((0xfff < uStack_230 + 1) &&
                           (ppppuVar6 = (undefined8 ****)local_248[-1],
                           0x1f < (ulonglong)((longlong)local_248 + (-8 - (longlong)ppppuVar6))))
                        goto LAB_180003437;
                        thunk_FUN_18000bff0(ppppuVar6);
                      }
                      local_248 = (undefined8 ***)((ulonglong)local_248 & 0xffffffffffffff00);
                      local_238 = 0;
                      uStack_230 = 0xf;
                      if (0xf < uStack_210) {
                        ppppuVar6 = (undefined8 ****)local_228;
                        if ((0xfff < uStack_210 + 1) &&
                           (ppppuVar6 = (undefined8 ****)local_228[-1],
                           0x1f < (ulonglong)((longlong)local_228 + (-8 - (longlong)ppppuVar6))))
                        goto LAB_180003437;
                        thunk_FUN_18000bff0(ppppuVar6);
                      }
                      local_228 = (undefined8 ***)((ulonglong)local_228 & 0xffffffffffffff00);
                      local_218 = 0;
                      uStack_210 = 0xf;
                      if (0xf < uStack_1f0) {
                        ppppuVar6 = (undefined8 ****)local_208;
                        if ((0xfff < uStack_1f0 + 1) &&
                           (ppppuVar6 = (undefined8 ****)local_208[-1],
                           0x1f < (ulonglong)((longlong)local_208 + (-8 - (longlong)ppppuVar6))))
                        goto LAB_180003437;
                        thunk_FUN_18000bff0(ppppuVar6);
                      }
                      local_208 = (undefined8 ***)((ulonglong)local_208 & 0xffffffffffffff00);
                      local_1f8 = 0;
                      uStack_1f0 = 0xf;
                      if (0xf < uStack_1d0) {
                        ppppuVar6 = (undefined8 ****)local_1e8;
                        if ((0xfff < uStack_1d0 + 1) &&
                           (ppppuVar6 = (undefined8 ****)local_1e8[-1],
                           0x1f < (ulonglong)((longlong)local_1e8 + (-8 - (longlong)ppppuVar6))))
                        goto LAB_180003437;
                        thunk_FUN_18000bff0(ppppuVar6);
                      }
                      goto LAB_180003016;
                    }
                  }
                  else {
                    napi_get_last_error_info(param_1,&local_290);
                    napi_is_exception_pending(param_1,local_298);
                    if (local_298[0] == '\0') {
                      napi_throw_error(param_1,0);
                    }
                  }
                  napi_get_last_error_info(param_1,&local_290);
                  napi_is_exception_pending(param_1,local_298);
                  if (local_298[0] == '\0') {
                    napi_throw_error(param_1,0);
                  }
                  if (0xf < uStack_230) {
                    ppppuVar6 = (undefined8 ****)local_248;
                    if ((0xfff < uStack_230 + 1) &&
                       (ppppuVar6 = (undefined8 ****)local_248[-1],
                       0x1f < (ulonglong)((longlong)local_248 + (-8 - (longlong)ppppuVar6))))
                    goto LAB_180003437;
                    thunk_FUN_18000bff0(ppppuVar6);
                  }
                  local_238 = 0;
                  uStack_230 = 0xf;
                  local_248 = (undefined8 ***)((ulonglong)local_248 & 0xffffffffffffff00);
                }
                else {
                  napi_get_last_error_info(param_1,&local_290);
                  napi_is_exception_pending(param_1,local_298);
                  if (local_298[0] == '\0') {
                    napi_throw_error(param_1,0);
                  }
                  napi_get_last_error_info(param_1,&local_290);
                  napi_is_exception_pending(param_1,local_298);
                  if (local_298[0] == '\0') {
                    napi_throw_error(param_1,0);
                  }
                }
                if (0xf < uStack_210) {
                  ppppuVar6 = (undefined8 ****)local_228;
                  if ((0xfff < uStack_210 + 1) &&
                     (ppppuVar6 = (undefined8 ****)local_228[-1],
                     0x1f < (ulonglong)((longlong)local_228 + (-8 - (longlong)ppppuVar6))))
                  goto LAB_180003437;
                  thunk_FUN_18000bff0(ppppuVar6);
                }
                local_218 = 0;
                uStack_210 = 0xf;
                local_228 = (undefined8 ***)((ulonglong)local_228 & 0xffffffffffffff00);
              }
              else {
                napi_get_last_error_info(param_1,&local_290);
                napi_is_exception_pending(param_1,local_298);
                if (local_298[0] == '\0') {
                  napi_throw_error(param_1,0);
                }
                napi_get_last_error_info(param_1,&local_290);
                napi_is_exception_pending(param_1,local_298);
                if (local_298[0] == '\0') {
                  napi_throw_error(param_1,0);
                }
              }
              if (0xf < uStack_1f0) {
                ppppuVar6 = (undefined8 ****)local_208;
                if ((0xfff < uStack_1f0 + 1) &&
                   (ppppuVar6 = (undefined8 ****)local_208[-1],
                   0x1f < (ulonglong)((longlong)local_208 + (-8 - (longlong)ppppuVar6))))
                goto LAB_180003437;
                thunk_FUN_18000bff0(ppppuVar6);
              }
              local_1f8 = 0;
              uStack_1f0 = 0xf;
              local_208 = (undefined8 ***)((ulonglong)local_208 & 0xffffffffffffff00);
            }
            else {
              napi_get_last_error_info(param_1,&local_290);
              napi_is_exception_pending(param_1,local_298);
              if (local_298[0] == '\0') {
                napi_throw_error(param_1,0);
              }
              napi_get_last_error_info(param_1,&local_290);
              napi_is_exception_pending(param_1,local_298);
              if (local_298[0] == '\0') {
                napi_throw_error(param_1,0);
              }
            }
            if (0xf < uStack_1d0) {
              ppppuVar6 = (undefined8 ****)local_1e8;
              if ((0xfff < uStack_1d0 + 1) &&
                 (ppppuVar6 = (undefined8 ****)local_1e8[-1],
                 0x1f < (ulonglong)((longlong)local_1e8 + (-8 - (longlong)ppppuVar6)))) {
LAB_180003437:
                    /* WARNING: Subroutine does not return */
                _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
              }
              thunk_FUN_18000bff0(ppppuVar6);
            }
            break;
          }
          napi_get_last_error_info(param_1,&local_290);
          napi_is_exception_pending(param_1,local_298);
          if (local_298[0] == '\0') {
            pcVar5 = "empty error message";
            if ((char *)*local_290 != (char *)0x0) {
              pcVar5 = (char *)*local_290;
            }
            napi_throw_error(param_1,0,pcVar5);
          }
        }
        napi_get_last_error_info(param_1,&local_290);
        napi_is_exception_pending(param_1,local_298);
        if (local_298[0] == '\0') {
          pcVar5 = "empty error message";
          if ((char *)*local_290 != (char *)0x0) {
            pcVar5 = (char *)*local_290;
          }
          napi_throw_error(param_1,0,pcVar5);
        }
        break;
      }
LAB_180003016:
      local_280 = (longlong *)((longlong)local_280 + 1);
      uVar8 = local_278;
    } while (local_280 < (longlong *)0xf0);
  }
  else {
    napi_get_last_error_info(param_1,&local_280);
    napi_is_exception_pending(param_1,local_298);
    uVar8 = 0;
    if (local_298[0] == '\0') {
      pcVar5 = "empty error message";
      if ((char *)*local_280 != (char *)0x0) {
        pcVar5 = (char *)*local_280;
      }
      napi_throw_error(param_1,0,pcVar5);
    }
  }
  ActivateKeyboardLayout(hkl,0);
  return uVar8;
}

