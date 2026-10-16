
/* Address: 0x180001350; Evidence: ev_85c17b117ca20185f6cd6a6dc776e482f2aeb7d0904cacd9f100618df89b28ee */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Removing unreachable block (ram,0x0001800017a4) */
/* WARNING: Removing unreachable block (ram,0x0001800017a9) */
/* WARNING: Removing unreachable block (ram,0x0001800017b9) */
/* WARNING: Removing unreachable block (ram,0x0001800017bf) */
/* WARNING: Removing unreachable block (ram,0x00018000172d) */
/* WARNING: Removing unreachable block (ram,0x0001800016a1) */
/* WARNING: Removing unreachable block (ram,0x0001800016a6) */
/* WARNING: Removing unreachable block (ram,0x0001800016b5) */
/* WARNING: Removing unreachable block (ram,0x0001800016ba) */
/* WARNING: Removing unreachable block (ram,0x00018000162f) */
/* WARNING: Removing unreachable block (ram,0x0001800014ac) */
/* WARNING: Removing unreachable block (ram,0x0001800014b1) */
/* WARNING: Removing unreachable block (ram,0x0001800014c0) */
/* WARNING: Removing unreachable block (ram,0x0001800014c5) */
/* WARNING: Removing unreachable block (ram,0x00018000143a) */
/* WARNING: Removing unreachable block (ram,0x00018000147a) */
/* WARNING: Removing unreachable block (ram,0x0001800014d8) */
/* WARNING: Removing unreachable block (ram,0x00018000166f) */
/* WARNING: Removing unreachable block (ram,0x0001800016cd) */
/* WARNING: Removing unreachable block (ram,0x00018000176f) */
/* WARNING: Removing unreachable block (ram,0x0001800017d2) */
/* WARNING: Removing unreachable block (ram,0x000180001696) */
/* WARNING: Removing unreachable block (ram,0x0001800014a1) */
/* WARNING: Removing unreachable block (ram,0x000180001798) */
/* WARNING: Removing unreachable block (ram,0x0001800016f4) */
/* WARNING: Removing unreachable block (ram,0x0001800014ff) */
/* WARNING: Removing unreachable block (ram,0x0001800017fb) */

undefined1 (*) [32] FUN_180001350(undefined8 param_1,undefined8 param_2)

{
  ulonglong uVar1;
  undefined1 *puVar2;
  longlong lVar3;
  LSTATUS LVar4;
  ulonglong uVar5;
  void *pvVar6;
  undefined1 (*pauVar7) [32];
  HKEY hKey;
  LPCSTR *****ppppppCVar8;
  undefined1 (*pauVar9) [32];
  undefined1 (*unaff_RBX) [32];
  ulonglong uVar10;
  undefined8 uVar12;
  undefined1 auStackY_348 [32];
  ulonglong local_318;
  int local_310;
  DWORD local_30c;
  ulonglong local_308;
  HKEY local_300 [2];
  undefined1 (*local_2f0) [32];
  undefined8 uStack_2e8;
  ulonglong local_2e0;
  ulonglong local_2d8;
  LPCSTR ****local_2d0;
  undefined8 uStack_2c8;
  ulonglong local_2c0;
  ulonglong local_2b8;
  LPCSTR ****local_2b0;
  undefined8 uStack_2a8;
  ulonglong local_2a0;
  ulonglong local_298;
  undefined1 (*local_290) [32];
  undefined8 uStack_288;
  ulonglong local_280;
  ulonglong local_278;
  undefined1 (*local_270) [32];
  undefined8 uStack_268;
  ulonglong local_260;
  ulonglong local_258;
  undefined8 local_250 [3];
  BYTE local_238 [512];
  ulonglong local_38;
  ulonglong uVar11;
  
  local_38 = DAT_18001b000 ^ (ulonglong)auStackY_348;
  pauVar7 = (undefined1 (*) [32])0x0;
  local_308 = 3;
  napi_get_cb_info(param_1,param_2,&local_308,local_250);
  pauVar9 = pauVar7;
  if (local_308 < 3) {
    napi_throw_error(param_1,"EINVAL","Wrong number of arguments");
    return unaff_RBX;
  }
  do {
    napi_typeof(param_1,local_250[(longlong)pauVar9]);
    if (local_310 != 4) {
      napi_throw_error(param_1,"EINVAL","Expected string");
      return unaff_RBX;
    }
    puVar2 = *pauVar9;
    pauVar9 = (undefined1 (*) [32])(puVar2 + 1);
  } while ((longlong)(puVar2 + 1) < 3);
  local_318 = 0;
  napi_get_value_string_utf8(param_1,local_250[0],0,0);
  local_278 = 0xf;
  uStack_288 = 0;
  local_290 = (undefined1 (*) [32])0x0;
                    /* WARNING: Ignoring partial resolution of indirect */
  local_290._0_1_ = 0;
  local_280 = local_318;
  napi_get_value_string_utf8(param_1);
  uVar11 = local_280;
  pauVar9 = (undefined1 (*) [32])&local_290;
  if (0xf < local_278) {
    pauVar9 = local_290;
  }
  local_2f0 = (undefined1 (*) [32])0x0;
  uStack_2e8 = 0;
  if (0x7fffffffffffffff < local_280) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  if (local_280 < 0x10) {
    local_2f0 = *(undefined1 (**) [32])*pauVar9;
    uStack_2e8 = *(undefined8 *)(*pauVar9 + 8);
    local_2e0 = local_280;
    local_2d8 = 0xf;
  }
  else {
    uVar10 = local_280 | 0xf;
    if (uVar10 < 0x8000000000000000) {
      if (uVar10 < 0x16) {
        uVar10 = 0x16;
      }
      uVar1 = uVar10 + 1;
      if (uVar1 != 0) {
        if (0xfff < uVar1) {
          uVar5 = uVar10 + 0x28;
          if (uVar5 <= uVar1) {
                    /* WARNING: Subroutine does not return */
            FUN_180001140();
          }
          goto code_r0x000180001576;
        }
        pauVar7 = operator_new(uVar1);
      }
    }
    else {
      uVar5 = 0x8000000000000027;
      uVar10 = 0x7fffffffffffffff;
code_r0x000180001576:
      pvVar6 = operator_new(uVar5);
      if (pvVar6 == (void *)0x0) goto LAB_180001ac2;
      pauVar7 = (undefined1 (*) [32])((longlong)pvVar6 + 0x27U & 0xffffffffffffffe0);
      *(void **)(pauVar7[-1] + 0x18) = pvVar6;
    }
    local_2e0 = uVar11;
    local_2f0 = pauVar7;
    local_2d8 = uVar10;
    FUN_18000ef50(pauVar7,pauVar9,uVar11 + 1);
  }
  hKey = (HKEY)FUN_180001180((longlong *)&local_2f0);
  napi_get_value_string_utf8(param_1,local_250[1],0,0);
  local_298 = 0xf;
  uStack_2a8 = 0;
  local_2b0 = (LPCSTR ****)0x0;
                    /* WARNING: Ignoring partial resolution of indirect */
  local_2b0._0_1_ = 0;
  local_2a0 = local_318;
  napi_get_value_string_utf8(param_1,local_250[1]);
  napi_get_value_string_utf8(param_1,local_250[2],0,0);
  local_2b8 = 0xf;
  uStack_2c8 = 0;
  local_2d0 = (LPCSTR ****)0x0;
                    /* WARNING: Ignoring partial resolution of indirect */
  local_2d0._0_1_ = 0;
  local_2c0 = local_318;
  napi_get_value_string_utf8(param_1,local_250[2]);
  if (hKey == (HKEY)0x0) {
    napi_throw_error(param_1,0);
  }
  else {
    local_260 = 0;
    uStack_268 = 0;
    local_258 = 0xf;
    ppppppCVar8 = &local_2b0;
    if (0xf < local_298) {
      ppppppCVar8 = (LPCSTR *****)local_2b0;
    }
    local_270 = (undefined1 (*) [32])0x0;
    LVar4 = RegOpenKeyExA(hKey,(LPCSTR)ppppppCVar8,0,0x20019,local_300);
    if (LVar4 == 0) {
      ppppppCVar8 = &local_2d0;
      if (0xf < local_2b8) {
        ppppppCVar8 = (LPCSTR *****)local_2d0;
      }
      uVar12 = 0;
      local_30c = 0x200;
      LVar4 = RegQueryValueExA(local_300[0],(LPCSTR)ppppppCVar8,(LPDWORD)0x0,(LPDWORD)0x0,local_238,
                               &local_30c);
      if (LVar4 == 0) {
        uVar11 = 0xffffffffffffffff;
        do {
          uVar10 = uVar11 + 1;
          lVar3 = uVar11 + 1;
          uVar11 = uVar10;
        } while (local_238[lVar3] != '\0');
        if (local_258 < uVar10) {
          FUN_180001f00((longlong *)&local_270,uVar10,uVar12,(undefined1 (*) [32])local_238);
        }
        else {
          pauVar9 = (undefined1 (*) [32])&local_270;
          if (0xf < local_258) {
            pauVar9 = local_270;
          }
          local_260 = uVar10;
          FUN_18000ef50(pauVar9,(undefined1 (*) [32])local_238,uVar10);
          (*pauVar9)[uVar10] = 0;
        }
      }
      RegCloseKey(local_300[0]);
      pauVar9 = (undefined1 (*) [32])&local_270;
      if (0xf < local_258) {
        pauVar9 = local_270;
      }
      napi_create_string_utf8(param_1,pauVar9);
    }
    else {
      napi_throw_error(param_1,0);
    }
    if (0xf < local_258) {
      pauVar9 = local_270;
      if ((0xfff < local_258 + 1) &&
         (pauVar9 = *(undefined1 (**) [32])(local_270[-1] + 0x18),
         0x1f < (ulonglong)((longlong)local_270 + (-8 - (longlong)pauVar9)))) goto LAB_180001ac2;
      thunk_FUN_180007bd0(pauVar9);
    }
    local_260 = 0;
    local_258 = 0xf;
    local_270 = (undefined1 (*) [32])((ulonglong)local_270 & 0xffffffffffffff00);
  }
  if (0xf < local_2b8) {
    ppppppCVar8 = (LPCSTR *****)local_2d0;
    if ((0xfff < local_2b8 + 1) &&
       (ppppppCVar8 = (LPCSTR *****)local_2d0[-1],
       (LPCSTR)0x1f < (LPCSTR)((longlong)local_2d0 + (-8 - (longlong)ppppppCVar8))))
    goto LAB_180001ac2;
    thunk_FUN_180007bd0(ppppppCVar8);
  }
  local_2c0 = 0;
  local_2b8 = 0xf;
  local_2d0 = (LPCSTR ****)((ulonglong)local_2d0 & 0xffffffffffffff00);
  if (0xf < local_298) {
    ppppppCVar8 = (LPCSTR *****)local_2b0;
    if ((0xfff < local_298 + 1) &&
       (ppppppCVar8 = (LPCSTR *****)local_2b0[-1],
       (LPCSTR)0x1f < (LPCSTR)((longlong)local_2b0 + (-8 - (longlong)ppppppCVar8))))
    goto LAB_180001ac2;
    thunk_FUN_180007bd0(ppppppCVar8);
  }
  local_2a0 = 0;
  local_298 = 0xf;
  local_2b0 = (LPCSTR ****)((ulonglong)local_2b0 & 0xffffffffffffff00);
  if (0xf < local_278) {
    pauVar9 = local_290;
    if ((0xfff < local_278 + 1) &&
       (pauVar9 = *(undefined1 (**) [32])(local_290[-1] + 0x18),
       0x1f < (ulonglong)((longlong)local_290 + (-8 - (longlong)pauVar9)))) {
LAB_180001ac2:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_180007bd0(pauVar9);
  }
  return unaff_RBX;
}

