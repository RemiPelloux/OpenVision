/* REA / Ghidra decompiler-generated pseudocode. Not original source; not compilable. */

/* Address: 0x180001000; Evidence: ev_9eded0fa41ee0c24ba080b17797855f9ff0910b8203dae8418235320a6858782 */

HMODULE FUN_180001000(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_180005a70(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
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


/* Address: 0x180001050; Evidence: ev_5046a58211f8722f03d9c093990d92baec6ce32f6f95d03597b9039f0667bf6d */

char * FUN_180001050(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x180001070; Evidence: ev_a66d3580059e8fed2fec6ec6e1a8151ac9fbed08d154c047b7dd6d76ddf0e82f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001070(longlong *param_1)

{
  if (DAT_18001c138 != 0) {
    (*(code *)DAT_18001c138)();
  }
  (**(code **)(*param_1 + 0x10))();
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}


/* Address: 0x1800010c0; Evidence: ev_75b42945482ba354304b5cdbcb2744aa978c629a4f91670877ca11c98fa08213 */

void _guard_check_icall(void)

{
  return;
}


/* Address: 0x1800010d0; Evidence: ev_40f4e813c31f473d873c0a021829289bc474152675c051684e83de6d083f2d3f */

undefined8 * FUN_1800010d0(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = &PTR_FUN_180017d60;
  if ((param_2 & 1) != 0) {
    thunk_FUN_180007bd0(param_1);
  }
  return param_1;
}


/* Address: 0x180001100; Evidence: ev_9a159a64a1834fdf48bf50452ed703f0acc95698946f6e111cfceea8331aac4e */

void FUN_180001100(void)

{
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}


/* Address: 0x180001120; Evidence: ev_832657d6a36f7612e50d4b34831e28fcbad299385c83ba8ccce720f73008e97c */

undefined8 * FUN_180001120(undefined8 *param_1)

{
  param_1[1] = "bad array new length";
  *param_1 = &PTR_FUN_180017d78;
  return param_1;
}


/* Address: 0x180001140; Evidence: ev_a72751b35710454c64daab2c91e41202f5373e2ea506cfe3e5efc7c3151d27fc */

void FUN_180001140(void)

{
  code *pcVar1;
  longlong *plVar2;
  undefined8 local_18 [3];
  
  plVar2 = FUN_180001120(local_18);
  FUN_180001070(plVar2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001160; Evidence: ev_ac53a057824d7289ed92d7f2ad72127ce6e4f50b2b277ef885ce35a18642457e */

void FUN_180001160(void)

{
  code *pcVar1;
  
  FUN_1800031c0(0x180017c98);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001180; Evidence: ev_29954e4a7a73a830008d034ddb2ef86ca0d5e79fa60e9fb79522a1f74c8095f0 */

undefined8 FUN_180001180(longlong *param_1)

{
  ulonglong uVar1;
  int iVar2;
  longlong *plVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar1 = param_1[3];
  lVar5 = param_1[2];
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (lVar5 == 0x11) {
    lVar4 = *plVar3 + -0x5255435f59454b48;
    if ((lVar4 == 0) && (lVar4 = plVar3[1] + -0x4553555f544e4552, lVar4 == 0)) {
      lVar4 = (ulonglong)*(byte *)(plVar3 + 2) - 0x52;
    }
    if (lVar4 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000001;
    }
  }
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (lVar5 == 0x12) {
    lVar4 = *plVar3 + -0x434f4c5f59454b48;
    if ((lVar4 == 0) && (lVar4 = plVar3[1] + -0x494843414d5f4c41, lVar4 == 0)) {
      lVar4 = (ulonglong)*(ushort *)(plVar3 + 2) - 0x454e;
    }
    if (lVar4 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000002;
    }
  }
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (lVar5 == 0x11) {
    lVar4 = *plVar3 + -0x414c435f59454b48;
    if ((lVar4 == 0) && (lVar4 = plVar3[1] + -0x4f4f525f53455353, lVar4 == 0)) {
      lVar4 = (ulonglong)*(byte *)(plVar3 + 2) - 0x54;
    }
    if (lVar4 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000000;
    }
  }
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (lVar5 == 10) {
    lVar5 = *plVar3 + -0x4553555f59454b48;
    if (lVar5 == 0) {
      lVar5 = (ulonglong)*(ushort *)(plVar3 + 1) - 0x5352;
    }
    if (lVar5 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000003;
    }
  }
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (param_1[2] == 0x13) {
    iVar2 = memcmp(plVar3,"HKEY_CURRENT_CONFIG",0x13);
    if (iVar2 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000005;
    }
  }
  FUN_180001b70(param_1);
  return 0;
}


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


/* Address: 0x180001af0; Evidence: ev_e05c618078b6be118d4052d694b629203ea623416579c1c50e630f2d3fdc8e4a */

undefined8 node_api_module_get_api_version_v1(void)

{
                    /* 0x1af0  2  node_api_module_get_api_version_v1 */
  return 8;
}


/* Address: 0x180001b00; Evidence: ev_402f84542e5103b5bf97da4abf4ae26d305d52050679b2b6c6b99100d437d94a */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res10 [3];
  
                    /* 0x1b00  1  napi_register_module_v1 */
  napi_create_function(param_1,"GetStringRegKey",0xffffffffffffffff,FUN_180001350,0,local_res10);
  napi_set_named_property(param_1,param_2,"GetStringRegKey",local_res10[0]);
  return param_2;
}


/* Address: 0x180001b70; Evidence: ev_5b4d4e521e1d801dce8883c938deaa645fd67df05b0640a63e96109f17af4c0f */

void FUN_180001b70(longlong *param_1)

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
    thunk_FUN_180007bd0(pvVar2);
  }
  param_1[2] = 0;
  param_1[3] = 0xf;
  *(undefined1 *)param_1 = 0;
  return;
}


/* Address: 0x180001bf0; Evidence: ev_cdac418a1165ec797f284c8977736e5e2b2e4de1a466024e94b5e42ac36506e4 */

undefined1 (*) [32] FUN_180001bf0(undefined1 (*param_1) [32],ulonglong param_2)

{
  ulonglong uVar1;
  longlong lVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  void *pvVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  undefined1 (*pauVar9) [32];
  
  lVar2 = *(longlong *)(*param_1 + 0x10);
  uVar7 = 0x7fffffffffffffff;
  if (0x7fffffffffffffffU - lVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  uVar6 = lVar2 + param_2 | 0xf;
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  if ((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) {
    uVar1 = uVar3 + (uVar3 >> 1);
    uVar7 = uVar6;
    if (uVar6 < uVar1) {
      uVar7 = uVar1;
    }
    uVar1 = uVar7 + 1;
    if (uVar1 == 0) {
      pauVar9 = (undefined1 (*) [32])0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar6 = uVar7 + 0x28;
        if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001140();
        }
        goto code_r0x000180001c91;
      }
      pauVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180001c91:
    pvVar5 = operator_new(uVar6);
    if (pvVar5 == (void *)0x0) goto LAB_180001d3f;
    pauVar9 = (undefined1 (*) [32])((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar9[-1] + 0x18) = pvVar5;
  }
  *(ulonglong *)(*param_1 + 0x10) = lVar2 + param_2;
  *(ulonglong *)(*param_1 + 0x18) = uVar7;
  if (uVar3 < 0x10) {
    FUN_18000ef50(pauVar9,param_1,lVar2 + 1U);
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_18000ef50(pauVar9,pauVar4,lVar2 + 1U);
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
LAB_180001d3f:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_180007bd0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar9;
  return param_1;
}


/* Address: 0x180001d60; Evidence: ev_6090c56e462a42b65038aa3f8e8a474a4fdb8b2085c50aad91ce7f27f3fd52c6 */

undefined1 (*) [32]
FUN_180001d60(undefined1 (*param_1) [32],ulonglong param_2,undefined8 param_3,ulonglong param_4)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  void *pvVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  undefined1 (*pauVar9) [32];
  
  uVar2 = *(ulonglong *)(*param_1 + 0x10);
  uVar7 = 0x7fffffffffffffff;
  if (0x7fffffffffffffff - uVar2 < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  uVar3 = *(ulonglong *)(*param_1 + 0x18);
  uVar6 = uVar2 + param_2 | 0xf;
  if ((uVar6 < 0x8000000000000000) && (uVar3 <= 0x7fffffffffffffff - (uVar3 >> 1))) {
    uVar1 = (uVar3 >> 1) + uVar3;
    uVar7 = uVar6;
    if (uVar6 < uVar1) {
      uVar7 = uVar1;
    }
    uVar1 = uVar7 + 1;
    if (uVar1 == 0) {
      pauVar9 = (undefined1 (*) [32])0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar6 = uVar7 + 0x28;
        if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001140();
        }
        goto code_r0x000180001e09;
      }
      pauVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180001e09:
    pvVar5 = operator_new(uVar6);
    if (pvVar5 == (void *)0x0) goto LAB_180001ee4;
    pauVar9 = (undefined1 (*) [32])((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar9[-1] + 0x18) = pvVar5;
  }
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + param_2;
  pauVar8 = (undefined1 (*) [32])(*pauVar9 + uVar2);
  *(ulonglong *)(*param_1 + 0x18) = uVar7;
  if (uVar3 < 0x10) {
    FUN_18000ef50(pauVar9,param_1,uVar2);
    FUN_18000eb90(pauVar8,0,param_4);
    (*pauVar8)[param_4] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_18000ef50(pauVar9,pauVar4,uVar2);
    FUN_18000eb90(pauVar8,0,param_4);
    (*pauVar8)[param_4] = 0;
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
LAB_180001ee4:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_180007bd0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar9;
  return param_1;
}


/* Address: 0x180001f00; Evidence: ev_66f22eb0cd1c9444a8c860fb56f980693b0014b945defdd143eb95fc2f6609ae */

longlong *
FUN_180001f00(longlong *param_1,ulonglong param_2,undefined8 param_3,undefined1 (*param_4) [32])

{
  ulonglong uVar1;
  ulonglong uVar2;
  LPVOID pvVar3;
  void *pvVar4;
  LPVOID pvVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  undefined1 (*pauVar8) [32];
  
  uVar7 = 0x7fffffffffffffff;
  if (0x7fffffffffffffff < param_2) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  uVar6 = param_2 | 0xf;
  uVar2 = param_1[3];
  if ((uVar6 < 0x8000000000000000) && (uVar2 <= 0x7fffffffffffffff - (uVar2 >> 1))) {
    uVar1 = uVar2 + (uVar2 >> 1);
    uVar7 = uVar6;
    if (uVar6 < uVar1) {
      uVar7 = uVar1;
    }
    uVar1 = uVar7 + 1;
    if (uVar1 == 0) {
      pauVar8 = (undefined1 (*) [32])0x0;
    }
    else {
      if (0xfff < uVar1) {
        uVar6 = uVar7 + 0x28;
        if (uVar6 <= uVar1) {
                    /* WARNING: Subroutine does not return */
          FUN_180001140();
        }
        goto code_r0x000180001f95;
      }
      pauVar8 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180001f95:
    pvVar4 = operator_new(uVar6);
    if (pvVar4 == (void *)0x0) goto LAB_18000202d;
    pauVar8 = (undefined1 (*) [32])((longlong)pvVar4 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar8[-1] + 0x18) = pvVar4;
  }
  param_1[2] = param_2;
  param_1[3] = uVar7;
  FUN_18000ef50(pauVar8,param_4,param_2);
  (*pauVar8)[param_2] = 0;
  if (0xf < uVar2) {
    pvVar3 = (LPVOID)*param_1;
    pvVar5 = pvVar3;
    if ((0xfff < uVar2 + 1) &&
       (pvVar5 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar5)))) {
LAB_18000202d:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_180007bd0(pvVar5);
  }
  *param_1 = (longlong)pauVar8;
  return param_1;
}


/* Address: 0x180002052; Evidence: ev_3f7080d07cbca0903a031061f087d7785894da177aac4bb31392bb1fd400c2c4 */

void FUN_180002052(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_XMM0_Qa;
  undefined8 in_XMM1_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_18000e580(&ImgDelayDescr_180019acc.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x0001800020c9. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_XMM0_Qa,in_XMM1_Qa,param_3,param_4);
  return;
}


/* Address: 0x1800020cb; Evidence: ev_aa6dd71202f576ee06ced5504e36c6597cc1a075463216f7c13f56a34f4e4766 */

void DelayLoad_napi_create_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180002052(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800020d7; Evidence: ev_065bcad78447ed61248f5a1f598d19cca1fc9e9883d9d1ade0ff063b8b902f41 */

void DelayLoad_napi_get_value_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180002052(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800020e3; Evidence: ev_484e883ba142312df871fc8a19ab671b4c1173c992beb7be3d62f5a30a3ed722 */

void DelayLoad_napi_throw_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180002052(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800020ef; Evidence: ev_4d68ddd9c2e02d95f56e187d74ea889f7b3138e75cef032714d9ca6724b9163b */

void DelayLoad_napi_create_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180002052(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800020fb; Evidence: ev_7971726783e247ca6259bcb6387e058b8c469356d854c07c2be0b17c76cc65b2 */

void DelayLoad_napi_set_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180002052(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180002107; Evidence: ev_8a058ad0e00f8706ffa78af0435854b63432e41655163db75d327d26d083205d */

void DelayLoad_napi_typeof
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180002052(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180002113; Evidence: ev_f800bd2e7afaa6eed92dfbe99ca9bf5b5251b00b5f6deffe4b62c620c1c55583 */

void DelayLoad_napi_get_cb_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180002052(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180002130; Evidence: ev_dd53a995aa7e172d7f94a98487baa819bb02dd5d0f8907b7db19d5e9cd81beb8 */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_18001b000) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_180002540();
  return;
}


/* Address: 0x180002150; Evidence: ev_cdd8dfe28ff25abff2e4d71872df224565a78287b75c047db3121c496dcc8cbd */

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
    bVar2 = FUN_180006060(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_1800027f4();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_1800027d4();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x18000218c; Evidence: ev_ddab6b6d64fdedc7c14e11628336bee413df588b3643f8e5f28a59156e695267 */

void thunk_FUN_180007bd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001c748,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180007164(DVar2);
    p_Var4 = FUN_1800072a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180002194; Evidence: ev_bab57a7dc1192ed4ee1ed304938b5e40894339ccd7031e37aa07bdf49557643c */

void thunk_FUN_180007bd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001c748,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180007164(DVar2);
    p_Var4 = FUN_1800072a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x1800021a0; Evidence: ev_3ed5e00a5513902472ea26b3a92f96b28cee0e8a82cc283d5d1335852c47a729 */

ulonglong FUN_1800021a0(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_180002308(param_3 != 0);
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
      bVar1 = FUN_1800029e4();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800021f0(param_1,param_3);
  return uVar2;
}


/* Address: 0x1800021f0; Evidence: ev_9a42c5de0f49351314735433ff68b82476587ea402763bc9022ccaf7b2bffa82 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800021f0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180002aa0(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_18001c0e0 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180002c64(7);
    }
    DAT_18001c0e0 = 1;
    bVar2 = FUN_1800029a4();
    if (bVar2) {
      FUN_180002db0();
      FUN_1800028ec();
      FUN_180002918();
      uVar4 = FUN_1800061b0((undefined8 *)&DAT_1800102e0,(undefined8 *)&DAT_180010300);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180006178((undefined8 *)&DAT_1800102d0,(undefined8 *)&DAT_1800102d8);
        DAT_18001c0e0 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180002c50();
      if ((*plVar5 != 0) && (uVar6 = FUN_180002b68((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_18001bb48 = DAT_18001bb48 + 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x180002308; Evidence: ev_12783e01098db836bc3698841b3fad59bb35347cf9d644ca1737628506764857 */

ulonglong FUN_180002308(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_18001bb48 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_18001bb48 = DAT_18001bb48 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_18001c0e0 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180002c64(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_1800028fc();
    FUN_180002dec();
    DAT_18001c0e0 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180002a8c();
  }
  return uVar2;
}


/* Address: 0x18000238c; Evidence: ev_68650b8dcc4fa43b791eade682e70194fa5395886472ca390a0e4fb53dfd8a22 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180002449) */
/* WARNING: Removing unreachable block (ram,0x0001800023da) */
/* WARNING: Removing unreachable block (ram,0x000180002488) */

int FUN_18000238c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_18001bb48 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_1800021a0(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_1800028e4();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_1800028e4();
      FUN_180002308(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_1800021a0(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}


/* Address: 0x1800024c0; Evidence: ev_981fce62281d2eab165324f23ffbabbf49164eafd9a2787d850c9d6abff9477a */

void entry(undefined8 param_1,int param_2,longlong param_3)

{
  if (param_2 == 1) {
    FUN_180002834();
  }
  FUN_18000238c(param_1,param_2,param_3);
  return;
}


/* Address: 0x180002500; Evidence: ev_a0872d35c7197fcb837e0534dea08a855aaec5e13b54a4db41975a6489f7c419 */

/* Library Function - Single Match
    __raise_securityfailure
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __raise_securityfailure(_EXCEPTION_POINTERS *param_1)

{
  HANDLE hProcess;
  
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  UnhandledExceptionFilter(param_1);
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000252d. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000409);
  return;
}


/* Address: 0x180002540; Evidence: ev_b99cae252002dff27ede7206d935e5499d3d1b0b69038413d137edb0e627f765 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180002540(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x18000256b;
  FUN_180002614((PCONTEXT)&DAT_18001bbf0);
  _DAT_18001bb60 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_18001bc88 = puVar3 + 0x40;
  _DAT_18001bc70 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_18001bb50 = 0xc0000409;
  _DAT_18001bb54 = 1;
  _DAT_18001bb68 = 1;
  DAT_18001bb70 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_18001b000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_18001b040;
  *(undefined8 *)(puVar3 + -8) = 0x18000260d;
  DAT_18001bce8 = _DAT_18001bb60;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_180010468);
  return;
}


/* Address: 0x180002614; Evidence: ev_107999d9a5c1b741596eb4f3fce3865581c46c48be84594dc48b370d97da25c6 */

void FUN_180002614(PCONTEXT param_1)

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


/* Address: 0x180002688; Evidence: ev_b1cc4ebc89f98f9d2d4f8537b968b9068ec0ca6b13e1362cded709c61dc99bc4 */

undefined8 * FUN_180002688(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180003404((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x1800026c4; Evidence: ev_e5d158eec8e60669e96d9db514d5817117181d7c9923b616e403551bc9057ca9 */

undefined8 * FUN_1800026c4(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x1800026e8; Evidence: ev_5a3bf9db5319b2060d729be6bc09c550f624883ee57d505c7b1436db3ebea1e2 */

undefined8 * FUN_1800026e8(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180003404((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x180002724; Evidence: ev_05985162ab49f6a67da05e5dbca0a0d893b72faf9455ffaa6b22b8530f0a70bd */

undefined8 * FUN_180002724(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x180002748; Evidence: ev_7de9b5a5297fb21faed5f7c3e1211949dfdefa52b278c5f4a2696cbbcb654f85 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180003404((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}


/* Address: 0x180002790; Evidence: ev_a30dcb511f0f600bd3cf140c6324747823139a3023e364942fb4b29c03ccec30 */

undefined8 * FUN_180002790(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180003484(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_180007bd0(param_1);
  }
  return param_1;
}


/* Address: 0x1800027d4; Evidence: ev_50fd04bb343381b9b81076f8cc66f00df889cc527d277cbcbc4e815364988f3d */

void FUN_1800027d4(void)

{
  longlong local_28 [5];
  
  FUN_1800026c4(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_1800034ac(local_28,&DAT_1800198f0);
}


/* Address: 0x1800027f4; Evidence: ev_8a371255813c113be86b1292bf175994a3ccda4382ae1190ea18ad776b2478cf */

void FUN_1800027f4(void)

{
  longlong local_28 [5];
  
  FUN_180002724(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_1800034ac(local_28,&DAT_180019978);
}


/* Address: 0x180002820; Evidence: ev_eb74dc8cbea25fd87b0ef033c596399e10a2700b5962f904f6c65d4edbaba332 */

char * FUN_180002820(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x180002834; Evidence: ev_5fe326800f57248e00cf154229057c6b292fb470092e349ac7b20afa59e7bb8c */

void FUN_180002834(void)

{
  DWORD DVar1;
  _FILETIME local_res8;
  LARGE_INTEGER local_res10;
  _FILETIME local_18 [2];
  
  if (DAT_18001b000 == 0x2b992ddfa232) {
    local_res8.dwLowDateTime = 0;
    local_res8.dwHighDateTime = 0;
    GetSystemTimeAsFileTime(&local_res8);
    local_18[0] = local_res8;
    DVar1 = GetCurrentThreadId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    DVar1 = GetCurrentProcessId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    QueryPerformanceCounter(&local_res10);
    DAT_18001b000 =
         ((ulonglong)local_res10.s.LowPart << 0x20 ^
          CONCAT44(local_res10.s.HighPart,local_res10.s.LowPart) ^ (ulonglong)local_18[0] ^
         (ulonglong)local_18) & 0xffffffffffff;
    if (DAT_18001b000 == 0x2b992ddfa232) {
      DAT_18001b000 = 0x2b992ddfa233;
    }
  }
  DAT_18001b040 = ~DAT_18001b000;
  return;
}


/* Address: 0x1800028e4; Evidence: ev_2b1d26c5b106ca834772642e17aa8cbbeee2dc7633be68a29462bd292fd2657c */

undefined8 FUN_1800028e4(void)

{
  return 1;
}


/* Address: 0x1800028ec; Evidence: ev_1d1ff884062db8da7be17789c3c21b5571f3e8246c1534eebd44dfdc153368ff */

void FUN_1800028ec(void)

{
                    /* WARNING: Could not recover jumptable at 0x0001800028f3. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  InitializeSListHead(&DAT_18001c0c0);
  return;
}


/* Address: 0x1800028fc; Evidence: ev_6a0dca428c6a1e16247edf07930cde218316d41cef699d07eb99dbf736435524 */

void FUN_1800028fc(void)

{
  FUN_18000356c((PSLIST_HEADER)&DAT_18001c0c0);
  return;
}


/* Address: 0x180002908; Evidence: ev_42cb28554220f7b0a679f9cb9f91d61bfcd8e501c2b00d80ab6152404351223a */

undefined * FUN_180002908(void)

{
  return &DAT_18001c0d0;
}


/* Address: 0x180002910; Evidence: ev_176bca5bd46b0298e321fca2202c05c06d09b469161ff4109670e7e7be08c445 */

undefined * FUN_180002910(void)

{
  return &DAT_18001c0d8;
}


/* Address: 0x180002918; Evidence: ev_b8381e884d4e542cce094801e1060ec9d941d35eb7967c86e25d1cb46fa93cb5 */

void FUN_180002918(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_180002908();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_180002910();
  *puVar1 = *puVar1 | 2;
  return;
}


/* Address: 0x180002934; Evidence: ev_94124c16639d56247df6109b97ae7486fbb0fab2396ec59a830885fea827bea7 */

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
LAB_180002962:
    uVar4 = (ulonglong)pvVar3 & 0xffffffffffffff00;
  }
  else {
    do {
      pvVar3 = (void *)0x0;
      LOCK();
      bVar2 = DAT_18001c0e8 == (void *)0x0;
      pvVar1 = StackBase;
      if (!bVar2) {
        pvVar3 = DAT_18001c0e8;
        pvVar1 = DAT_18001c0e8;
      }
      DAT_18001c0e8 = pvVar1;
      UNLOCK();
      if (bVar2) goto LAB_180002962;
    } while (StackBase != pvVar3);
    uVar4 = CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
  }
  return uVar4;
}


/* Address: 0x180002970; Evidence: ev_9e11312d8e6fd0d21341e5e509b87cf6d5e5bb27a195807ba3fd0938b07c37f2 */

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
    uVar2 = FUN_1800028e4();
    uVar3 = FUN_180006828((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_1800069a8();
  }
  else {
    uVar2 = FUN_180002e5c();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}


/* Address: 0x1800029a4; Evidence: ev_195ebaa9c9a0d4b2f9e94feb4e1936934edfa089ae3b19a7bd1585f8344c3255 */

bool FUN_1800029a4(void)

{
  undefined8 uVar1;
  
  uVar1 = FUN_180002adc(0);
  return (char)uVar1 != '\0';
}


/* Address: 0x1800029bc; Evidence: ev_aa1caf192081d848ec14b1c769d0bd2fdfb4a6d406e6c7dc52dd6fad056e1009 */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_1800035c0();
  if (bVar1) {
    bVar1 = FUN_180006f30();
    if (bVar1) {
      return 1;
    }
    FUN_1800035d4();
  }
  return 0;
}


/* Address: 0x1800029e4; Evidence: ev_4627316b4f16a5b6cd38a0296f65dadbfd44a4853d6787689a3d05cba6b9a9e4 */

undefined1 FUN_1800029e4(void)

{
  FUN_180006f44();
  FUN_1800035d4();
  return 1;
}


/* Address: 0x1800029fc; Evidence: ev_e60b46396430f53c5b9db8413b3b6a024abe0e0f0fb27bb8763f93c637068367 */

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


/* Address: 0x180002a5c; Evidence: ev_d52c750dca577e4e219ec8f68080b85c12a0f3d1bce6ee00971e3906f9282167 */

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
    FUN_180006d4c(&DAT_18001c0f8);
    return;
  }
  iVar2 = FUN_180006600();
  if (iVar2 == 0) {
    FUN_1800065e4();
  }
  return;
}


/* Address: 0x180002a8c; Evidence: ev_f4038782fe9e9bd7e47f145c5df49f0b95b7d371e9ee51d29279a038c6cad7a2 */

void FUN_180002a8c(void)

{
  FUN_180006f8c();
  FUN_180003600();
  return;
}


/* Address: 0x180002aa0; Evidence: ev_26217ca52d40be017ad3bb3b27f5a87775406eaea526b6129b0420b00058d014 */

ulonglong FUN_180002aa0(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_18001c0f0 = 1;
  }
  FUN_180002e5c();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_180006f1c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}


/* Address: 0x180002adc; Evidence: ev_0e4b87b5994bf6ba45570bb473818c6d632a977e20e13ef52ebd33d87842b9fb */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180002adc(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_18001c0f1 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180002c64(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_18001c0f8 = 0xffffffffffffffff;
      uRam000000018001c100 = 0xffffffffffffffff;
      _DAT_18001c108 = 0xffffffffffffffff;
      _DAT_18001c110 = 0xffffffffffffffff;
      uRam000000018001c118 = 0xffffffffffffffff;
      _DAT_18001c120 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_18001c0f8);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_18001c110), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_18001c0f1 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180002b68; Evidence: ev_0d724c31c85e6f2461452a284d84e2cac07e52619cf0afe19556364f13ed49e2 */

/* WARNING: Removing unreachable block (ram,0x000180002bf5) */
/* WARNING: Enum "SectionFlags": Some values do not have unique names */

ulonglong FUN_180002b68(longlong param_1)

{
  ulonglong uVar1;
  uint7 uVar2;
  IMAGE_SECTION_HEADER *pIVar3;
  
  uVar1 = 0;
  for (pIVar3 = &IMAGE_SECTION_HEADER_180000210; pIVar3 != (IMAGE_SECTION_HEADER *)&DAT_180000350;
      pIVar3 = pIVar3 + 1) {
    if (((ulonglong)(uint)pIVar3->VirtualAddress <= param_1 - 0x180000000U) &&
       (uVar1 = (ulonglong)((pIVar3->Misc).PhysicalAddress + pIVar3->VirtualAddress),
       param_1 - 0x180000000U < uVar1)) goto LAB_180002bde;
  }
  pIVar3 = (IMAGE_SECTION_HEADER *)0x0;
LAB_180002bde:
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


/* Address: 0x180002c00; Evidence: ev_ad30d0d3bf50b6340989c6e862e2a33ba56ec96efd95e735783f407db8089ac5 */

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
    DAT_18001c0e8 = 0;
    UNLOCK();
  }
  return;
}


/* Address: 0x180002c24; Evidence: ev_7b5653c2f4ffcb422eabe70251e279772076f4f8c8e8e8c289cc73c7ff91048d */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_18001c0f0 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180002c50; Evidence: ev_bdd02b08c9f699b795ea96993cc7beef7421d4bb79d48e34775808fb7ce80949 */

undefined * FUN_180002c50(void)

{
  return &DAT_18001cbf8;
}


/* Address: 0x180002c58; Evidence: ev_7cfa1da05fd8fb5d18004d6953426b5564feed1134f22e5df091d53eb0a4a19b */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180002c58(void)

{
  _DAT_18001c128 = 0;
  return;
}


/* Address: 0x180002c64; Evidence: ev_63e066957249786bb1f5aac2872a69118a85555816f57e4863b798659cf7fb75 */

void FUN_180002c64(undefined4 param_1)

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
  *(undefined8 *)(puVar4 + -8) = 0x180002c98;
  FUN_180002c58();
  *(undefined8 *)(puVar4 + -8) = 0x180002ca9;
  FUN_18000eb90((undefined1 (*) [32])local_4d8,0,0x4d0);
  *(undefined8 *)(puVar4 + -8) = 0x180002cb3;
  RtlCaptureContext(local_4d8);
  *(undefined8 *)(puVar4 + -8) = 0x180002ccd;
  FunctionEntry = RtlLookupFunctionEntry(local_3e0,&local_res10,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    *(undefined8 *)(puVar4 + 0x38) = 0;
    *(undefined1 **)(puVar4 + 0x30) = local_res18;
    *(undefined1 **)(puVar4 + 0x28) = local_res20;
    *(undefined1 **)(puVar4 + 0x20) = local_4d8;
    *(undefined8 *)(puVar4 + -8) = 0x180002d11;
    RtlVirtualUnwind(0,local_res10,local_3e0,FunctionEntry,*(PCONTEXT *)(puVar4 + 0x20),
                     *(PVOID **)(puVar4 + 0x28),*(PDWORD64 *)(puVar4 + 0x30),
                     *(PKNONVOLATILE_CONTEXT_POINTERS *)(puVar4 + 0x38));
  }
  local_440 = &stack0x00000008;
  *(undefined8 *)(puVar4 + -8) = 0x180002d43;
  FUN_18000eb90((undefined1 (*) [32])(puVar4 + 0x50),0,0x98);
  *(undefined8 *)(puVar4 + 0x60) = unaff_retaddr;
  *(undefined4 *)(puVar4 + 0x50) = 0x40000015;
  *(undefined4 *)(puVar4 + 0x54) = 1;
  *(undefined8 *)(puVar4 + -8) = 0x180002d65;
  BVar2 = IsDebuggerPresent();
  *(undefined1 **)(puVar4 + 0x40) = puVar4 + 0x50;
  *(undefined1 **)(puVar4 + 0x48) = local_4d8;
  *(undefined8 *)(puVar4 + -8) = 0x180002d82;
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  *(undefined8 *)(puVar4 + -8) = 0x180002d8d;
  LVar3 = UnhandledExceptionFilter((_EXCEPTION_POINTERS *)(puVar4 + 0x40));
  if ((LVar3 == 0) && (BVar2 != 1)) {
    *(undefined8 *)(puVar4 + -8) = 0x180002d9e;
    FUN_180002c58();
  }
  return;
}


/* Address: 0x180002db0; Evidence: ev_981b6c529a96fac53647a777e9d4bcc651405c1629836dbca4c174d330e0f47c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180002db0(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_1800188f8; puVar1 < &DAT_1800188f8; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180002dec; Evidence: ev_29477baa6a4a005f39d6d1a168d9a9560807a7d730441af4801754fafa80a165 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180002dec(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180018908; puVar1 < &DAT_180018908; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180002e30; Evidence: ev_86d286541a6c5dd35d102e08fa77cfa5b921b65aaf7f2a2d240569ee71118796 */

undefined8 * FUN_180002e30(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = type_info::vftable;
  if ((param_2 & 1) != 0) {
    thunk_FUN_180007bd0(param_1);
  }
  return param_1;
}


/* Address: 0x180002e5c; Evidence: ev_43a6de59bfe5f8d47aff376585024a6d6dbb6d5f7bc6ed959edf4952c413f92b */

/* WARNING: Removing unreachable block (ram,0x000180002f4d) */
/* WARNING: Removing unreachable block (ram,0x000180002f3d) */
/* WARNING: Removing unreachable block (ram,0x000180002f18) */
/* WARNING: Removing unreachable block (ram,0x000180002e96) */
/* WARNING: Removing unreachable block (ram,0x000180002e74) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180002e5c(void)

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
    DAT_18001b060 = 0x8000;
    DAT_18001b068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_18001c130 = DAT_18001c130 | 1;
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
      DAT_18001c130 = DAT_18001c130 | 2;
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
  DAT_18001b058 = 1;
  DAT_18001b05c = 2;
  uVar9 = DAT_18001b050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_18001b058 = 2;
    DAT_18001b05c = 6;
    uVar9 = DAT_18001b050 & 0xffffffffffffffee;
  }
  DAT_18001b050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_18001b058 = 3;
      uVar7 = DAT_18001b050;
      uVar5 = DAT_18001b05c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_18001b058 = 5;
        uVar7 = DAT_18001b050 & 0xfffffffffffffffd;
        uVar5 = DAT_18001b05c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18001b05c = DAT_18001b05c | 0x68;
          DAT_18001b058 = 6;
          uVar7 = DAT_18001b050 & 0xffffffffffffffd9;
          uVar5 = DAT_18001b05c;
        }
      }
      DAT_18001b05c = uVar5;
      DAT_18001b050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_18001b050 = DAT_18001b050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_18001c12c = (uint)uVar12 & 0x400ff;
        DAT_18001b050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_18001b050;
        if (1 < (byte)_DAT_18001c12c) {
          DAT_18001b050 = DAT_18001b050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_18001b050 = DAT_18001b050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}


/* Address: 0x1800030f4; Evidence: ev_9b88ef0134c0bd76388a769265ff1d06888de96bf2fe19581c2fa49a90cd6c5b */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_18001cbf4 != 0;
}


/* Address: 0x180003100; Evidence: ev_736b5acf25baaa5158e3e7bdababffb38474d93dd43aaf62c4ba0189de6a513a */

undefined8 * FUN_180003100(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180003404((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x18000313c; Evidence: ev_a9a580909867c179bfdd12a075669fdbd070351324a49b86145cc4881bf240e9 */

undefined8 * FUN_18000313c(undefined8 *param_1,longlong param_2)

{
  longlong local_18;
  undefined1 local_10;
  
  local_10 = 1;
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  local_18 = param_2;
  FUN_180003404(&local_18,param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x180003184; Evidence: ev_19ba45512dd3a64a4cfa24b8bf6f5a12440a5fb65e523a81d4496d6f8b6ca7dc */

undefined8 * FUN_180003184(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180003404((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::logic_error::vftable;
  return param_1;
}


/* Address: 0x1800031c0; Evidence: ev_3640b79d374d410d03258b0702be1643f4571a793b93c1d93bcb339572148688 */

void FUN_1800031c0(longlong param_1)

{
  longlong local_28 [5];
  
  FUN_18000313c(local_28,param_1);
                    /* WARNING: Subroutine does not return */
  FUN_1800034ac(local_28,&DAT_180019a08);
}


/* Address: 0x1800031e4; Evidence: ev_3471abfe25088ef26a552759ef59a20f6ca3fa74072f85ed08b0bd9ce2fef841 */

undefined8 FUN_1800031e4(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

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
          if (iVar4 < 1) goto LAB_180003312;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_18000e8d0(0x180010540), (int)uVar5 != 0)) {
          FUN_180003610((int *)param_1);
        }
        FUN_180003790();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_1800037c0();
      }
LAB_180003312:
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


/* Address: 0x180003404; Evidence: ev_2041b208e1f9c738f0a18592b8bd0f2bcc471548bc51d7332d7cf5fdb6ad6428 */

void FUN_180003404(longlong *param_1,longlong *param_2)

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
      FUN_180006fc0(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_180007bd0((LPVOID)0x0);
  }
  return;
}


/* Address: 0x180003484; Evidence: ev_00145b9185cd39c815cc95dcf988e4549ce5310b161d5f1354d7002222d0bdc3 */

void FUN_180003484(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_180007bd0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}


/* Address: 0x1800034ac; Evidence: ev_d1e7baacfcf69eacbce7e75c3b737a19b80307d1b2cd083890989283d6c5a8ca */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800034ac(longlong *param_1,byte *param_2)

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


/* Address: 0x180003554; Evidence: ev_db7472c9c51f79794a11bc3d7550fa3a1f4a281853bc0d4252277c9eb7c57b02 */

int FUN_180003554(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}


/* Address: 0x18000356c; Evidence: ev_65cf442c2441ade03f13155003d978b1b784488babbbea11b1f373e60a277c53 */

void FUN_18000356c(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_180007bd0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}


/* Address: 0x180003598; Evidence: ev_994b70633656539399ed0a6f628711102e0232d055587f03cdff718f10e55789 */

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


/* Address: 0x1800035c0; Evidence: ev_55a8f50ec06e71b42046b300c5476d49544976fa15d11212f83ede2cbba5e08d */

bool FUN_1800035c0(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180003884();
  return pvVar1 != (LPVOID)0x0;
}


/* Address: 0x1800035d4; Evidence: ev_04fd264f3d5eedf8ce1f5cc78324a24eee253bad9a1aba5adad76de814e358c0 */

undefined1 FUN_1800035d4(void)

{
  FUN_180003820();
  return 1;
}


/* Address: 0x1800035e4; Evidence: ev_d517f749be3319023820d1bc43700e14e94c970ceeec71e7351172ff7361027c */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_180003998();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180003600; Evidence: ev_2a3e7175ba0826a274f56087c6ede3fe7da0bb1a84d25316943766d1936bd0f1 */

undefined1 FUN_180003600(void)

{
  FUN_180003998();
  return 1;
}


/* Address: 0x180003610; Evidence: ev_488c7f6a18cd448c56bb8f3f573eeb91bed33f203a6851fa9d8d15f18538d753 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180003610(int *param_1)

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
      FUN_180003684(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}


/* Address: 0x180003684; Evidence: ev_106ddbbb0bf8117255110789a372f1e66ef5487f0287c9cebb6208790f9923a2 */

void FUN_180003684(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE)

{
                    /* WARNING: Could not recover jumptable at 0x000180003684. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180003688; Evidence: ev_beb29fa90790314fbd4834c6f5013cb02980ef16977deaa7eb8baab7fd425748 */

/* Library Function - Single Match
    _IsExceptionObjectToBeDestroyed
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _IsExceptionObjectToBeDestroyed(longlong param_1)

{
  longlong lVar1;
  longlong *plVar2;
  
  lVar1 = FUN_180003868();
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


/* Address: 0x1800036b8; Evidence: ev_ce4b26aa7a0531662c7c9ec382fce51a4d8155c4b116fd59ae2e950df8b7b6a5 */

longlong FUN_1800036b8(longlong param_1,int *param_2)

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


/* Address: 0x1800036e0; Evidence: ev_1bdd35221b4f05a35e57dbd18e31481389b7a44510d6dfe35bf3bdba8101b015 */

undefined8 FUN_1800036e0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180003868();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180003868();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180003868();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180003868();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_180006f9c();
  }
  return 0;
}


/* Address: 0x180003748; Evidence: ev_74cba2e4893f0495a9755e71510b4a943a5da73188fea8367851412c26431a42 */

void Unwind_180003748(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_180006f9c();
}


/* Address: 0x180003790; Evidence: ev_ccafc9394ececdf6a40bfcfba20e0d83c037b997775a4b491814cab2995bbec7 */

void FUN_180003790(void)

{
  FUN_1800037b0();
  return;
}


/* Address: 0x1800037b0; Evidence: ev_e8a354e0bdd5031ee75eeb856f166bbd05f7f867d4bd7f23c98c67232e1a7ddf */

void FUN_1800037b0(void)

{
  return;
}


/* Address: 0x1800037c0; Evidence: ev_5398c4375b508167e2e241bdd53ff75ac71c44a6486db99485d46c68eb40bc2b */

void FUN_1800037c0(void)

{
  return;
}


/* Address: 0x1800037c4; Evidence: ev_3d9c4aba9eaaaf817f7d6fbac44d1ecd03f29a830bf726dbca7f6ef8f16d7358 */

/* WARNING: Removing unreachable block (ram,0x0001800037d7) */
/* WARNING: Removing unreachable block (ram,0x0001800037ed) */
/* WARNING: Removing unreachable block (ram,0x0001800037f3) */
/* Library Function - Single Match
    __except_validate_context_record
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __except_validate_context_record(longlong param_1)

{
  return;
}


/* Address: 0x180003800; Evidence: ev_e6fbecf12d550536dd5378bea801cad9b868e5dfcd5eaadfb35f712ebc378540 */

void FUN_180003800(undefined *param_1)

{
  if ((param_1 != (undefined *)0x0) && (param_1 != &DAT_18001c150)) {
    thunk_FUN_180007bd0(param_1);
  }
  return;
}


/* Address: 0x180003820; Evidence: ev_4faae231aa969b0e24715da3e143671c7ddbf052a71d390204af496e8411d3a8 */

void FUN_180003820(void)

{
  undefined *puVar1;
  
  if (DAT_18001b070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_18001b070);
    __vcrt_FlsSetValue(DAT_18001b070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_18001c150)) {
      thunk_FUN_180007bd0(puVar1);
    }
  }
  return;
}


/* Address: 0x180003868; Evidence: ev_acf70637429d9834dbe36d00e28333db315d4c7d99cbf3a656974782e9b9040a */

void FUN_180003868(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180003884();
  if (pvVar1 != (LPVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180003884; Evidence: ev_a042f604dde29c1d7ee69c290277573c54cd014baec3b967d00d93eae5ea22d0 */

LPVOID FUN_180003884(void)

{
  DWORD dwErrCode;
  int iVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  LPVOID pvVar4;
  
  if (DAT_18001b070 == 0xffffffff) {
    pvVar3 = (LPVOID)0x0;
  }
  else {
    dwErrCode = GetLastError();
    pvVar2 = (LPVOID)__vcrt_FlsGetValue(DAT_18001b070);
    pvVar4 = (LPVOID)0x0;
    pvVar3 = pvVar4;
    if (((pvVar2 != (LPVOID)0xffffffffffffffff) && (pvVar3 = pvVar2, pvVar2 == (LPVOID)0x0)) &&
       (iVar1 = __vcrt_FlsSetValue(DAT_18001b070,(LPVOID)0xffffffffffffffff), pvVar3 = pvVar4,
       iVar1 != 0)) {
      pvVar3 = _calloc_base(1,0x80);
      if ((pvVar3 == (LPVOID)0x0) || (iVar1 = __vcrt_FlsSetValue(DAT_18001b070,pvVar3), iVar1 == 0))
      {
        __vcrt_FlsSetValue(DAT_18001b070,(LPVOID)0x0);
        pvVar2 = pvVar3;
      }
      else {
        *(undefined4 *)((longlong)pvVar3 + 0x78) = 0xfffffffe;
        pvVar2 = pvVar4;
        pvVar4 = pvVar3;
      }
      thunk_FUN_180007bd0(pvVar2);
      pvVar3 = pvVar4;
    }
    SetLastError(dwErrCode);
  }
  return pvVar3;
}


/* Address: 0x180003950; Evidence: ev_f44b1b74e6f646d64bc17be9ae38da74049e70b4f30b9f6d5eeea56a35453811 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_180003800);
  DAT_18001b070 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_18001c150);
    if (iVar2 != 0) {
      _DAT_18001c1c8 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_180003998();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}


/* Address: 0x180003998; Evidence: ev_29c32099dee1f538e46ea254f54e4be1a5a0b889e52648100dfc45506b37fc61 */

undefined1 FUN_180003998(void)

{
  if (DAT_18001b070 != -1) {
    __vcrt_FlsFree(DAT_18001b070);
    DAT_18001b070 = -1;
  }
  return 1;
}


/* Address: 0x1800039c0; Evidence: ev_d3e0d5a600ea18afdd1621b0dfd392f46eb52173892f547f74b76adafb51cdb4 */

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
                      ((LPCRITICAL_SECTION)(&DAT_18001c1d0 + uVar2 * 0x28),4000,0);
    if ((int)uVar1 == 0) {
      uVar2 = __vcrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_18001c1f8 = DAT_18001c1f8 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 == 0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x180003a08; Evidence: ev_2c392f32bd501bf145938c93b768391add45444d76a530414d3bff2ece66a8e4 */

/* Library Function - Single Match
    __vcrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release */

undefined8 __vcrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_18001c1f8;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_18001c1d0 + uVar1 * 0x28));
    DAT_18001c1f8 = DAT_18001c1f8 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180003a40; Evidence: ev_85da8ed8db8000a9bb360ae706c0ae6af99c6b94f1ab02eb5682d0c678a99a55 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180003a40(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180003868();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180003a94; Evidence: ev_af9089aef3de4ebc4d27dd30b05c5913be98801309e08d2bdb163cc3dcc77b18 */

longlong FUN_180003a94(longlong param_1,int param_2)

{
  uint uVar1;
  longlong lVar2;
  
  uVar1 = *(uint *)(param_1 + 0xc);
  do {
    if (uVar1 == 0) {
      return 0;
    }
    uVar1 = uVar1 - 1;
    lVar2 = FUN_180003868();
    lVar2 = (longlong)*(int *)(param_1 + 0x10) +
            *(longlong *)(lVar2 + 0x60) + (ulonglong)uVar1 * 0x14;
  } while ((param_2 <= *(int *)(lVar2 + 4)) || (*(int *)(lVar2 + 8) < param_2));
  return lVar2;
}


/* Address: 0x180003af8; Evidence: ev_7506bcd3a3b3cb1b2a8f109d9f0c889855a769b5e275779441c16b72f6e9558a */

bool FUN_180003af8(ulonglong *param_1,longlong param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = FUN_18000439c(param_2,param_1);
  lVar2 = FUN_180003a94(param_2,iVar1);
  return lVar2 != 0;
}


/* Address: 0x180003b24; Evidence: ev_2429cc218f911a948e43f7bf755de92aa4e43e7ccc37cf16ed0a783f1b7d531e */

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
  
  plVar2 = FUN_180003b88((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000439c((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_180003a94((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_180005544(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}


/* Address: 0x180003b88; Evidence: ev_b2ce9d9a530a99b7f5cfa62e665eac48b2a5f423ed04222f132a7dfbcf73ada9 */

longlong * FUN_180003b88(longlong *param_1,ulonglong *param_2,longlong param_3,longlong *param_4)

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
  iVar4 = FUN_18000439c(param_3,param_2);
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
        if ((longlong)*piVar8 == (ulonglong)p_Var5->BeginAddress) goto code_r0x000180003c3f;
        uVar6 = (int)uVar7 + 1;
        uVar7 = (ulonglong)uVar6;
        piVar8 = piVar8 + 5;
      } while (uVar6 < uVar2);
    }
  } while (uVar2 <= (uint)uVar7);
code_r0x000180003c3f:
  *param_4 = *(longlong *)((longlong)*(int *)(lVar10 + 0x10 + uVar7 * 0x14) + *param_1);
  return param_4;
}


/* Address: 0x180003c74; Evidence: ev_4a9098cdef7324ef63e99ff8196146da4bc7b4cdc268b7886f383f23dfa8bcc3 */

undefined8 *
FUN_180003c74(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
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
  iVar5 = FUN_18000439c(param_5,param_4);
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
LAB_180003cfc:
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
  goto LAB_180003cfc;
}


/* Address: 0x180003dac; Evidence: ev_fbe2ec15adf1ad0a6387c7087507558487527f6d61bb311caa3b0932eea31d0d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003dac(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,ULONG_PTR param_6,int param_7,undefined8 param_8,
                  undefined8 param_9,undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_18001b000 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_1800052c0;
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


/* Address: 0x180003eb0; Evidence: ev_6a49368b2dd34d403030de3458ccfc373adafc6e47a909967815725cfae5c738 */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_180003868();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_180003868();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_180003868();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}


/* Address: 0x180003eec; Evidence: ev_eee18a6719e3b688d3fe5458105dd5d5fc03928545cca8a407f24248dac68c39 */

void FUN_180003eec(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180003868();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180003868();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180003868();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180003f40; Evidence: ev_34f4894899786ce576bbb08be7c9308e2e5606a4edf50997a5a2de3b99e9ed0d */

undefined8 FUN_180003f40(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180003868();
  return *(undefined8 *)(lVar1 + 0x60);
}


/* Address: 0x180003f54; Evidence: ev_de6dab79a21e26a27a8522e97b0f913791f1c850dfb4123f7521f1aeadcd01ba */

undefined8 FUN_180003f54(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180003868();
  return *(undefined8 *)(lVar1 + 0x68);
}


/* Address: 0x180003f68; Evidence: ev_6d76aa1847d7d62b34bb1a0f82cbb3a4434ec30fbedff0e87b0aa6be1a03ba6c */

void FUN_180003f68(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180003868();
  *(undefined8 *)(lVar1 + 0x60) = param_1;
  return;
}


/* Address: 0x180003f80; Evidence: ev_1b9ffc5515a8302431e3541769a8a3177802c518c2512bb3bef10508e3632d8d */

void FUN_180003f80(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180003868();
  *(undefined8 *)(lVar1 + 0x68) = param_1;
  return;
}


/* Address: 0x180003f98; Evidence: ev_86473b34d357a85369204a3cc30a47abc3b2e2eb1efe20c7a79d6a2cdd8f5322 */

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
  lVar2 = FUN_180003868();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180003868();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180003868();
  thunk_FUN_180005020(param_1,&local_res8,param_3,param_4,
                      (_s_FuncInfo *)
                      ((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),0,0,0);
  return;
}


/* Address: 0x180004020; Evidence: ev_6044b3e9eabf2157921ec035716b2dc809a037880afdc4a1c38d8fb4914d182f */

FARPROC FUN_180004020(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
  pFVar4 = *(FARPROC *)(&DAT_18001c218 + uVar6 * 8);
  if (pFVar4 != (FARPROC)0xffffffffffffffff) {
    if (pFVar4 != (FARPROC)0x0) {
      return pFVar4;
    }
    for (; param_3 != param_4; param_3 = param_3 + 1) {
      uVar5 = (ulonglong)*param_3;
      hLibModule = *(HMODULE *)(&DAT_18001c200 + uVar5 * 8);
      if (hLibModule == (HMODULE)0x0) {
        lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_fibers_l1_1_1_1800113c8)[uVar5];
        hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
        if ((hLibModule != (HMODULE)0x0) ||
           (((DVar2 = GetLastError(), DVar2 == 0x57 &&
             (iVar3 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar3 != 0)) &&
            (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0)))
           ) {
          LOCK();
          lVar1 = *(longlong *)(&DAT_18001c200 + uVar5 * 8);
          *(HMODULE *)(&DAT_18001c200 + uVar5 * 8) = hLibModule;
          UNLOCK();
          if (lVar1 != 0) {
            FreeLibrary(hLibModule);
          }
          goto LAB_180004151;
        }
        LOCK();
        *(undefined8 *)(&DAT_18001c200 + uVar5 * 8) = 0xffffffffffffffff;
        UNLOCK();
      }
      else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_180004151:
        pFVar4 = GetProcAddress(hLibModule,param_2);
        if (pFVar4 != (FARPROC)0x0) {
          LOCK();
          *(FARPROC *)(&DAT_18001c218 + uVar6 * 8) = pFVar4;
          UNLOCK();
          return pFVar4;
        }
        break;
      }
    }
    LOCK();
    *(undefined8 *)(&DAT_18001c218 + uVar6 * 8) = 0xffffffffffffffff;
    UNLOCK();
  }
  return (FARPROC)0x0;
}


/* Address: 0x180004170; Evidence: ev_2319c1353d905e749a4ea8bbb0f62c172de0afb21868fc78b7c6e6f6980517a9 */

/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180004020(0,"FlsAlloc",(uint *)&DAT_180011488,(uint *)"FlsAlloc");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x0001800041ae. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsAlloc();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000eb10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)(param_1);
  return;
}


/* Address: 0x1800041b8; Evidence: ev_af800a091431d37227e9431f0c33fb003000f2ca52690795fa7c82e5e4ad6dbb */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180004020(1,"FlsFree",(uint *)&DAT_1800114a0,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x0001800041f7. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000eb10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180004200; Evidence: ev_d5f5ce200ddc7b4f2875e85fa49badb868200118957223b4a05f5ac1fd8e7d8f */

/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE =
       FUN_180004020(2,"FlsGetValue",(uint *)&DAT_1800114b0,(uint *)"FlsGetValue");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000423f. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsGetValue(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000eb10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180004248; Evidence: ev_187a00f9b1b2695a73a7f31fc74476db8b02304202b0bd3a75916735a11af28f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsSetValue
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsSetValue(DWORD param_1,LPVOID param_2)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180004020(3,"FlsSetValue",(uint *)&DAT_1800114c8,(uint *)"FlsSetValue");
  if (pFVar1 == (FARPROC)0x0) {
    TlsSetValue(param_1,param_2);
  }
  else {
    (*pFVar1)();
  }
  return;
}


/* Address: 0x18000429c; Evidence: ev_4597410463921279961f447f103736dd2103c4885549ccbfd74734794f34275c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_InitializeCriticalSectionEx
   
   Library: Visual Studio 2017 Release */

void __vcrt_InitializeCriticalSectionEx(LPCRITICAL_SECTION param_1,DWORD param_2,undefined4 param_3)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180004020(4,"InitializeCriticalSectionEx",(uint *)&DAT_1800114e0,
                         (uint *)"InitializeCriticalSectionEx");
  if (pFVar1 == (FARPROC)0x0) {
    InitializeCriticalSectionAndSpinCount(param_1,param_2);
  }
  else {
    (*pFVar1)(param_1,param_2,param_3);
  }
  return;
}


/* Address: 0x180004300; Evidence: ev_1455a7494b4a16f4c1024f0f3eba32ee3263c99946788d5270ce29dbf31e2ea9 */

void FUN_180004300(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + *param_1) == -2) {
    FUN_1800043a4(param_3,(longlong)param_2,*param_2);
  }
  return;
}


/* Address: 0x180004328; Evidence: ev_34eef497be38c30eedb983a9230a93bc4e051148d30b29a02d6e76195b8fd14b */

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
  
  plVar1 = FUN_180003b88(param_1,param_2,param_3,local_res18);
  return *(undefined4 *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1);
}


/* Address: 0x180004354; Evidence: ev_e5bbc3d8c38f4debcbda5fcb749c8a39a6ffb97a37fdd3048c7bb081c8ebb58b */

void FUN_180004354(longlong *param_1,longlong param_2,undefined4 param_3)

{
  *(undefined4 *)((longlong)*(int *)(param_2 + 0x1c) + *param_1) = param_3;
  return;
}


/* Address: 0x180004360; Evidence: ev_65c4509dce50c56e0a64909cf20a83ac51206cf2728f17cf9a0b38757dc2e17b */

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
  
  plVar1 = FUN_180003b88(param_1,param_2,param_3,local_res18);
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) < param_4) {
    *(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) = param_4;
  }
  return;
}


/* Address: 0x18000439c; Evidence: ev_aea29971db4020fba8be5da0fe0bf6f1bcfce85cf1f2691acfa1a94aec939df4 */

void FUN_18000439c(longlong param_1,ulonglong *param_2)

{
  FUN_1800043a4(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x1800043a4; Evidence: ev_776603187b96ef3fc49030f757352cb7b2e3559346ea17f43b8867ad37e2bddf */

undefined4 FUN_1800043a4(longlong param_1,longlong param_2,ulonglong param_3)

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


/* Address: 0x18000440c; Evidence: ev_6c986b720bee7cf6d6213d2c0bd239d3f33a727172cbc1d18c66c99100976ff9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_18000440c(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
    lVar2 = FUN_180003f40();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180003f40();
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
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_18001c140 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180003f54();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180003f54();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_1800045be;
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
                  FUN_1800036b8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_18000ef50(param_2,pauVar3,(longlong)iVar1);
        goto LAB_1800045be;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_18000ef50(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_1800045be;
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
    lVar2 = (*(code *)DAT_18001c140)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_1800036b8(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_1800045be:
  return (char)uVar6;
}


/* Address: 0x180004600; Evidence: ev_5e88151fed72eda98dabeb0eb3b1230477f8fd02d7fa3907811b0b0ff765080d */

void FUN_180004600(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
  cVar1 = FUN_18000440c(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_1800036b8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180003f54();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_1800058dc(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_1800036b8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180003f54();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_1800058e8(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x1800046c0; Evidence: ev_afa928158e79024bb517bf088e64e97e74b3cf4f5143e4d4229479d5530e4a6e */

void FUN_1800046c0(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
  pauVar4 = (undefined1 (*) [32])FUN_180003b88(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_180004600(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180003f40();
  FUN_180003dac(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x180004798; Evidence: ev_45165e40f008a8569e064e92a40336485bdd1d45a94d7abe6351418354542ba9 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180004798(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,uint *param_5
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
  
  local_58 = DAT_18001b000 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar5 = FUN_1800056d0(param_2,param_4,(longlong)param_5);
  if ((-2 < iVar5) && (iVar5 < (int)param_5[1])) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar7 = FUN_180003868();
      if (*(longlong *)(lVar7 + 0x20) == 0) {
        return;
      }
      lVar7 = FUN_180003868();
      param_1 = *(int **)(lVar7 + 0x20);
      lVar7 = FUN_180003868();
      local_100 = *(ULONG_PTR *)(lVar7 + 0x28);
      FUN_180003f80(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_180004c93;
      lVar7 = FUN_180003868();
      if (*(longlong *)(lVar7 + 0x38) != 0) {
        lVar7 = FUN_180003868();
        piVar11 = *(int **)(lVar7 + 0x38);
        lVar7 = FUN_180003868();
        *(undefined8 *)(lVar7 + 0x38) = 0;
        cVar3 = FUN_18000576c((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          uVar8 = FUN_180005854(piVar11);
          if ((char)uVar8 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_180006f9c();
          }
          FUN_180003610(param_1);
          FUN_180005298(&local_c8);
                    /* WARNING: Subroutine does not return */
          FUN_1800034ac(&local_c8,&DAT_180019a70);
        }
      }
    }
    uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
    local_a8 = param_4[1];
    local_b0 = param_5;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
      if (param_5[3] != 0) {
        FUN_180003c74(&local_90,&local_b0,iVar5,param_4,(longlong)param_5);
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
                  lVar7 = FUN_180003f54();
                  piVar11 = (int *)(lVar7 + 4 + (longlong)iVar13);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_180003f54();
                  for (iVar13 = *(int *)(lVar7 + iVar13); 0 < iVar13; iVar13 = iVar13 + -1) {
                    iVar2 = *piVar11;
                    lVar7 = FUN_180003f54();
                    uVar9 = FUN_180004f00((byte *)&local_70,(byte *)(iVar2 + lVar7),
                                          *(byte **)(param_1 + 0xc));
                    if ((int)uVar9 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_1800046c0((ULONG_PTR)param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,
                                    (byte *)&local_70,(byte *)(iVar2 + lVar7),
                                    in_stack_fffffffffffffed0);
                      goto LAB_180004b03;
                    }
                    piVar11 = piVar11 + 1;
                  }
                  uVar12 = (int)uVar8 + 1;
                  uVar8 = (ulonglong)uVar12;
                } while (uVar12 != local_d8);
              }
            }
LAB_180004b03:
            uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar6 = uVar6 + 1;
          } while (uVar6 < local_78);
        }
      }
      if ((0x19930520 < (*param_5 & 0x1fffffff)) &&
         (((uVar6 = param_5[8], uVar6 != 0 && (lVar7 = FUN_180003f40(), lVar7 + (int)uVar6 != 0)) ||
          (((param_5[9] & 4) != 0 && (bVar4 = FUN_180003af8(param_4,(longlong)param_5), !bVar4))))))
      {
        if ((param_5[9] & 4) != 0) {
          lVar7 = FUN_180003868();
          *(int **)(lVar7 + 0x20) = param_1;
          lVar7 = FUN_180003868();
          *(ULONG_PTR *)(lVar7 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_180006f9c();
        }
        uVar6 = param_5[8];
        if (uVar6 == 0) {
          piVar11 = (int *)0x0;
        }
        else {
          lVar7 = FUN_180003f40();
          piVar11 = (int *)((int)uVar6 + lVar7);
        }
        cVar3 = FUN_18000576c((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          plVar10 = FUN_180003b88(param_2,param_4,(longlong)param_5,&local_e0);
          FUN_180003dac(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar10,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar14,0xffffffff),0,param_4,param_6);
        }
      }
    }
    else if (param_5[3] != 0) {
      if (param_6 != 0) goto LAB_180004c93;
      FUN_180004c9c(param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,iVar5);
    }
    lVar7 = FUN_180003868();
    if (*(longlong *)(lVar7 + 0x38) == 0) {
      return;
    }
  }
LAB_180004c93:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180004c9c; Evidence: ev_5aacfeac8fed56643b7bca816768121a7ae9c30a95f94299081cc353608f2410 */

void FUN_180004c9c(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
    lVar3 = FUN_180003868();
    if (*(longlong *)(lVar3 + 0x10) != 0) {
      pvVar4 = EncodePointer((PVOID)0x0);
      lVar3 = FUN_180003868();
      if ((((*(PVOID *)(lVar3 + 0x10) != pvVar4) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar1 = FUN_180003a40(param_1,param_2,param_3), iVar1 != 0)
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
    FUN_180003c74(&local_60,&local_98,param_6,param_4,param_5);
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
          if ((iVar1 != 0) && (lVar3 = FUN_180003f40(), lVar3 + iVar1 != 0)) {
            iVar1 = *(int *)(pbVar5 + 4);
            if (iVar1 == 0) {
              lVar3 = 0;
            }
            else {
              lVar3 = FUN_180003f40();
              lVar3 = lVar3 + iVar1;
            }
            if (*(char *)(lVar3 + 0x10) != '\0') goto LAB_180004ec5;
          }
          if ((*pbVar5 & 0x40) == 0) {
            FUN_1800046c0((ULONG_PTR)param_1,param_2,param_3,param_4,param_5,pbVar5,(byte *)0x0,
                          (int *)local_78);
          }
        }
LAB_180004ec5:
        uVar2 = uVar2 + 1;
      } while (uVar2 < local_48);
    }
  }
  return;
}


/* Address: 0x180004f00; Evidence: ev_7854678ac5e1b5307c59e138486def6c6470fa513b86c75ed038c30ca7e4d360 */

undefined8 FUN_180004f00(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_180003f40(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_180003f40();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_180003f40();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_180003f54();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_180003f40();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_180003f54();
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


/* Address: 0x180005020; Evidence: ev_c35682e8e1a70f8e70b73946de6c40a5452c5db5ddff937a8b577e86db97a99a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180005020(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180003868();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_18000508e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_18000508e:
      if (bVar5) goto LAB_1800050a5;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_1800050a5:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180003f40(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_180003f54();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180004798(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_180005131:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_1800043a4((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000524d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180005131;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000524d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180005544((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x180005254; Evidence: ev_79dfac86b734c9ed7089fbcd08cc343a23cd58831a731d91cf6c74e61d5ae1d6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
thunk_FUN_180005020(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180003868();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_18000508e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_18000508e:
      if (bVar5) goto LAB_1800050a5;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_1800050a5:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180003f40(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_180003f54();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180004798(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_180005131:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_1800043a4((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000524d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180005131;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000524d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180005544((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000525c; Evidence: ev_c414d21f512a555a1c318071c849b0b2d3015cfdaf77572789bb1228ae4a6894 */

undefined8 * FUN_18000525c(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180003404((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x180005298; Evidence: ev_29d63ac2ff5a42b238df8dc90a4a64dbb5b6886f94673cd1cf68062dc1070066 */

undefined8 * FUN_180005298(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x1800052c0; Evidence: ev_132d1253855b14117d90c16065869859dee62ad80e88495809430c0e125570df */

undefined8 FUN_1800052c0(longlong param_1)

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
  
  lVar6 = FUN_180003868();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180003868();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_180003868();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_180003868();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_180003868();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180003868();
  }
  uVar10 = _CallSettingFrame();
  FUN_180003eec((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_180003610(piVar3);
  }
  lVar8 = FUN_180003868();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_180003868();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}


/* Address: 0x1800054ac; Evidence: ev_be1b3d647bd45ddfcfc243c1b567fb48f1b0995139b3c3e9251ea5f78f3a7564 */

undefined8 FUN_1800054ac(undefined8 *param_1,longlong param_2,undefined4 *param_3)

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
      lVar2 = FUN_180003868();
      *(undefined4 *)(lVar2 + 0x40) = 1;
      *param_3 = 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x180005544; Evidence: ev_7a9a1cc4704f535a19fd3356fa6305d1c28dc5a6d8672f01e190d4b645bdd0db */

void FUN_180005544(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180003f40();
  iVar2 = FUN_180004300(param_1,param_2,param_3);
  lVar4 = FUN_180003868();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180003f40();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180003f40();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180003f40();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180003f40();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180004354(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180003f40();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180003f40();
        FUN_180003f40();
      }
      _CallSettingFrame();
      FUN_180003f68(uVar3);
    }
  }
  lVar4 = FUN_180003868();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180003868();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180004354(param_1,param_3,iVar2);
  return;
}


/* Address: 0x1800056d0; Evidence: ev_e8e7042a3f95b6b7e9c963ada87e42723185e369563786f49cdecb8746dc5283 */

int FUN_1800056d0(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_18000439c(param_3,param_2);
  FUN_180003b88(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_180004354(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}


/* Address: 0x18000576c; Evidence: ev_ce6b998b26f7562acf8dc8f0713a8bfbaa931ec3a5748afa0733e30856d7a554 */

undefined1 FUN_18000576c(longlong param_1,int *param_2)

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
      lVar4 = FUN_180003f54();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_180003f54();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_180003f54();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_180003f40();
          uVar6 = FUN_180004f00((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
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


/* Address: 0x180005854; Evidence: ev_ad7f2127da76623617ab8fb81ea3cd2d6049d1c3a6f647d6dfec0b741a953f29 */

ulonglong FUN_180005854(int *param_1)

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
      lVar2 = FUN_180003f40();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_180003f40();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_180003f40();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_180003554(lVar2 + 8,0x18001baf8);
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


/* Address: 0x1800058dc; Evidence: ev_ed4e30f321b0735799b13881dadce5b40d7b6e08fe5b7926ef1d5751e745099d */

void FUN_1800058dc(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3)

{
                    /* WARNING: Could not recover jumptable at 0x0001800058e2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3);
  return;
}


/* Address: 0x1800058e8; Evidence: ev_7805a3ab3ceb6d07b579f2bbe16344a928d4f3f619e5840a399bacd904e840e7 */

void FUN_1800058e8(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3,
                  undefined4 param_4)

{
                    /* WARNING: Could not recover jumptable at 0x0001800058f4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3,param_4);
  return;
}


/* Address: 0x180005940; Evidence: ev_2f38245360a5938505cc5690a008648c7135458caaee2c6a18311ccf72643601 */

/* Library Function - Single Match
    _CallSettingFrame
   
   Library: Visual Studio */

void _CallSettingFrame(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_180003790();
  (*pcVar1)();
  FUN_1800037c0();
  FUN_180003790();
  return;
}


/* Address: 0x180005980; Evidence: ev_8f2cda7aa66aafda7d5c6b567e6049d542d42921150e5d5726f2ac6fb0057433 */

longlong * FUN_180005980(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_18001b200;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18001c3cc == 0) {
    param_1[1] = (longlong)PTR_PTR_18001b1f8;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_180007748();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_180007980(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}


/* Address: 0x180005a40; Evidence: ev_21770d88e4669aa44ac6f7e7d187ac78babc88f62058d7b1101e3ab2e4504404 */

undefined8 FUN_180005a40(longlong param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  
  if ((param_1 == 0) || (param_2 == 0)) {
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_180005fec();
  }
  return 0x7fffffff;
}


/* Address: 0x180005a70; Evidence: ev_e75801761ca864cb837fa4576e9f4c7b4b19578d77e694480d2afde14356fef4 */

void FUN_180005a70(byte *param_1,byte *param_2)

{
  byte bVar1;
  byte bVar2;
  uint uVar3;
  uint uVar4;
  
  if (DAT_18001c3cc != 0) {
    FUN_180005ae0(param_1,param_2,(undefined8 *)0x0);
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
  FUN_180005a40((longlong)param_1,(longlong)param_2);
  return;
}


/* Address: 0x180005ae0; Evidence: ev_5d45685a3a5c5d96045eecb09f1b830de5fa77f1d85b67c72a3d0b4f697ba368 */

int FUN_180005ae0(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  __acrt_ptd *p_Var3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    p_Var3 = FUN_1800072a4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_180005fec();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18001c3cc == 0) {
      local_20 = PTR_PTR_18001b1f8;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_180007748();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_180007980(local_28,&lStack_18);
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


/* Address: 0x180005c00; Evidence: ev_3999280ae75b8abde577b746c4b28a55d825556efb6d645fed7bd39780232aab */

longlong FUN_180005c00(longlong *param_1)

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
    p_Var1 = FUN_180007838(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
    if (p_Var1 == (__acrt_ptd *)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return *param_1;
}


/* Address: 0x180005c68; Evidence: ev_15b5336bea308aecbc923983e33f32eaec855fa93cf8e16f4efe1f6ceb96db05 */

__acrt_ptd * FUN_180005c68(longlong *param_1)

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
    p_Var1 = FUN_180007838(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
  }
  return p_Var1;
}


/* Address: 0x180005cd4; Evidence: ev_87896ec7e13d0bf5e1135c34770ebeae016bd4b00b818ad4cb9f1062c1ee2985 */

longlong FUN_180005cd4(longlong param_1,longlong param_2)

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


/* Address: 0x180005d20; Evidence: ev_994c890e3a46d6c24e92274a5ad574908c3239adbb59d14773266d4dcfa7b290 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180005d20(int param_1,DWORD param_2,DWORD param_3)

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
  
  local_28 = DAT_18001b000 ^ (ulonglong)auStackY_608;
  if (param_1 != -1) {
    FUN_180002c58();
  }
  FUN_18000eb90((undefined1 (*) [32])&local_598,0,0x98);
  FUN_18000eb90((undefined1 (*) [32])&local_4f8,0,0x4d0);
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
    FUN_180002c58();
  }
  return;
}


/* Address: 0x180005e90; Evidence: ev_5c3d6da481929c8bd18c7ec4e627234a96240964e6c4dc9f2cf220acc0b1fdcd */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180005e90(undefined8 param_1)

{
  _DAT_18001c248 = param_1;
  return;
}


/* Address: 0x180005e98; Evidence: ev_963acf2470e53b74160214790a0cda9c8b9fdde60005f8bbfea02e1c06005a9c */

void FUN_180005e98(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
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
  local_20 = DAT_18001c3cc == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_18001b1f8;
    puStack_28 = PTR_DAT_18001b200;
  }
  FUN_180005f34(param_1,param_2,param_3,param_4,param_5,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar1 = FUN_180005c00(local_48);
    *(undefined4 *)(lVar1 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar1 = FUN_180005c00(local_48);
    *(undefined4 *)(lVar1 + 0x24) = local_14;
  }
  return;
}


/* Address: 0x180005f34; Evidence: ev_420518569f36d0534cbda7c21ca2dd46df6e0c7bcf52cdc8abd5a464618c6f1e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005f34(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_180005c68(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_180005cd4(0x18001c248,(longlong)param_6);
    bVar3 = (byte)DAT_18001b000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_18001b000) >> bVar3 | (*puVar2 ^ DAT_18001b000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}


/* Address: 0x180005fec; Evidence: ev_9e1822a6ef16308bba3a8f8f39d868806aeee7133f334f0d2304792a23f9cf69 */

void FUN_180005fec(void)

{
  FUN_180005e98((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  return;
}


/* Address: 0x18000600c; Evidence: ev_e6eefd243b55f8c5a7832579624d61efa3a90b7bcf3eaeca51e85a64dfadc959 */

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
  *(undefined8 *)(puVar3 + -8) = 0x18000603a;
  FUN_180005d20(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x180006040;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000604c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}


/* Address: 0x180006060; Evidence: ev_c4dc505625cf4415cea5e10f3368f4615773543ed45d65441c100c9c892b200d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

bool FUN_180006060(undefined8 param_1)

{
  int iVar1;
  code *pcVar2;
  bool bVar3;
  
  pcVar2 = (code *)FUN_1800060b0();
  bVar3 = false;
  if (pcVar2 != (code *)0x0) {
    iVar1 = (*pcVar2)(param_1);
    bVar3 = iVar1 != 0;
  }
  return bVar3;
}


/* Address: 0x1800060a0; Evidence: ev_817921a8230a7bc2ba005dd1c8b12cc2ceab7580f6ea6aa550472c3bf8a55bfe */

void FUN_1800060a0(undefined8 param_1)

{
  DAT_18001c250 = param_1;
  return;
}


/* Address: 0x1800060b0; Evidence: ev_573781d94f0c63a4e5d0875fb4eb0ad48ff41d3246f7e9b93e9586e410f9fa97 */

ulonglong FUN_1800060b0(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_18001b000 & 0x3f;
  uVar2 = DAT_18001c250 ^ DAT_18001b000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x1800060f0; Evidence: ev_dcb85e269e2766c347367c8e6227e4a4523a37b8f9d058ab920a2df56a36b4ec */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_18001b000 & 0x3f;
  uVar3 = DAT_18001b000 ^ DAT_18001c250;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_18001c250 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_18001b000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}


/* Address: 0x180006160; Evidence: ev_6811b14bf6aca4c6b26133b121bd55cbe29731d9fb3b2f371d8918ef79ebf002 */

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
      pvVar3 = HeapAlloc(DAT_18001c748,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000b730();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180006060(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_1800072a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180006170; Evidence: ev_a3a385b6d050b8eb1172d83dc21204e46dc886a8aed71979fb13aae205cd1151 */

void thunk_FUN_180007bd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001c748,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180007164(DVar2);
    p_Var4 = FUN_1800072a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180006178; Evidence: ev_dfd1004e9c5f8ce3097310cbe88f6e9e2734b4a6e9f8ef62f03c23cce49d0e57 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006178(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}


/* Address: 0x1800061b0; Evidence: ev_6fbd9a8f6036c6e2fefdbc38d9fbcbec7a9e1bda38bd00f5fc8235f168ce82c9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800061b0(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x1800061ec; Evidence: ev_994165aba92f249296acdf43c8a870c1edb3cb6bc6d0ee8cacf92843bec2ed49 */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_180006200(-0x1f928c9d,param_2);
  return uVar1;
}


/* Address: 0x180006200; Evidence: ev_87619f84129495cc4fcab210b692243f295b797fd8414f5bfd81b0ea083334ef */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180006200(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  int *piVar2;
  code *pcVar3;
  undefined8 uVar4;
  __acrt_ptd *p_Var5;
  int *piVar6;
  int *piVar7;
  undefined4 uVar8;
  
  p_Var5 = FUN_1800077a8();
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
LAB_18000633e:
              *(undefined4 *)(p_Var5 + 0x10) = uVar8;
            }
            else {
              if (*piVar6 == -0x3fffff72) {
                uVar8 = 0x83;
                goto LAB_18000633e;
              }
              if (*piVar6 == -0x3fffff71) {
                uVar8 = 0x86;
                goto LAB_18000633e;
              }
              if (*piVar6 == -0x3fffff70) {
                uVar8 = 0x81;
                goto LAB_18000633e;
              }
              if (*piVar6 == -0x3fffff6f) {
                uVar8 = 0x84;
                goto LAB_18000633e;
              }
              if (*piVar6 == -0x3fffff6e) {
                uVar8 = 0x8a;
                goto LAB_18000633e;
              }
              if (*piVar6 == -0x3fffff6d) {
                uVar8 = 0x85;
                goto LAB_18000633e;
              }
              if (*piVar6 == -0x3ffffd4c) {
                uVar8 = 0x8e;
                goto LAB_18000633e;
              }
              uVar8 = uVar1;
              if (*piVar6 == -0x3ffffd4b) {
                uVar8 = 0x8d;
                goto LAB_18000633e;
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


/* Address: 0x18000636c; Evidence: ev_9f90ec99ef5ed2b76efb5511b80e7ebbde74065ba61bcbf9de745db94b76f18d */

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
  FUN_1800063a4(param_3);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x1800063a4; Evidence: ev_af88c36591479b1a115fbd5f08b5631b0cc916a1d86c78afc3c248c1c36b2cce */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800063a4(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_18001c268 != '\0') {
    return;
  }
  LOCK();
  DAT_18001c258 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_18001c260 != DAT_18001b000) {
      bVar1 = (byte)DAT_18001b000 & 0x3f;
      (*(code *)((DAT_18001b000 ^ DAT_18001c260) >> bVar1 |
                (DAT_18001b000 ^ DAT_18001c260) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_18001c398;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_180006413;
    puVar2 = &DAT_18001c3b0;
  }
  FUN_180006d4c(puVar2);
LAB_180006413:
  if (*(int *)*param_1 == 0) {
    FUN_180006178((undefined8 *)&DAT_180010308,(undefined8 *)&DAT_180010328);
  }
  FUN_180006178((undefined8 *)&DAT_180010330,(undefined8 *)&DAT_180010338);
  if (*(int *)param_1[1] == 0) {
    DAT_18001c268 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}


/* Address: 0x180006464; Evidence: ev_1aa7590e5cc2988a6ca2f88892d4209fcfb12669dd6182e9863620f422dad3c1 */

void FUN_180006464(uint param_1,undefined4 param_2,int param_3)

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
      FUN_180006578(param_1);
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
    bVar2 = FUN_180007c5c();
    if ((int)CONCAT71(extraout_var,bVar2) == 1) {
      bVar2 = false;
    }
    else {
      uVar3 = FUN_180007c28();
      bVar2 = (char)uVar3 == '\0';
    }
    if (local_res18[0] == 0) {
      FUN_180006548(param_1,bVar2);
      pcVar1 = (code *)swi(3);
      (*pcVar1)();
      return;
    }
  }
  return;
}


/* Address: 0x180006548; Evidence: ev_9460ec3c0cc960936dc7cf71d4f2ea7803cdf421ed4f9e38b6d6efae15234ed5 */

void FUN_180006548(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_180006578(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}


/* Address: 0x180006578; Evidence: ev_4913cf03fff27043fe8eb55d1d33622250642a08f443702f530fc9f58b903622 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006578(uint param_1)

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


/* Address: 0x1800065dc; Evidence: ev_cf38020cc3ae59d0ce86aa273de0256514f1a7099280841c76c2a191142973f3 */

void FUN_1800065dc(undefined8 param_1)

{
  DAT_18001c260 = param_1;
  return;
}


/* Address: 0x1800065e4; Evidence: ev_4d31a0dac2bc3835bec70fb02bca99697dc8ac86112739a729a9b0f23b2f5321 */

void FUN_1800065e4(void)

{
  FUN_180006464(0,0,1);
  return;
}


/* Address: 0x1800065f4; Evidence: ev_1600bf6b184228ada38d08afc465940379cf81538069239bcbc664d2f410110b */

void FUN_1800065f4(uint param_1)

{
  FUN_180006464(param_1,2,0);
  return;
}


/* Address: 0x180006600; Evidence: ev_4a1a557c57d17b30051d5a278228111feea35ab8d2a2bfee64593fdef447f2ab */

undefined4 FUN_180006600(void)

{
  return DAT_18001c258;
}


/* Address: 0x180006608; Evidence: ev_67bdc3127c258077c0c780a71a44b60ab2b13ac9ea04f251f12c71f90415bae8 */

void FUN_180006608(char *param_1,undefined8 *param_2,char *param_3,longlong *param_4,
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
      iVar5 = FUN_180009598((int)cVar3);
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
        goto LAB_1800066ba;
      }
    }
    param_1 = pcVar6;
  } while ((bVar2) || ((cVar3 != ' ' && (cVar3 != '\t'))));
  if (param_3 != (char *)0x0) {
    param_3[-1] = '\0';
  }
LAB_1800066ba:
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
        iVar5 = FUN_180009598((int)*pcVar6);
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


/* Address: 0x1800067c8; Evidence: ev_bf4a81de8a24b8f966bc4e2082c9d47a254e0c96168a42945bb0880182cd557e */

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
      FUN_180007bd0((LPVOID)0x0);
      return pvVar2;
    }
  }
  return (LPVOID)0x0;
}


/* Address: 0x180006828; Evidence: ev_ddf011aaf9c384407c5138ee00659f4ff143ebeb60a63acf87453e55826e0de1 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_180006828(int param_1)

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
    p_Var3 = FUN_1800072a4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_180005fec();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_1800088b4((HMODULE)0x0,&DAT_18001c270,0x104);
  _DAT_18001c660 = &DAT_18001c270;
  if ((DAT_18001c680 == (char *)0x0) || (pcVar6 = DAT_18001c680, *DAT_18001c680 == '\0')) {
    pcVar6 = &DAT_18001c270;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_180006608(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_1800072a4();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_180006608(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_180008070(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_180007bd0(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_180007bd0(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_18001c668 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_18001c668 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_18001c670 = plVar2;
      FUN_180007bd0((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_18000698d;
    }
    _DAT_18001c668 = (int)local_res18 + -1;
    DAT_18001c670 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_18000698d:
  FUN_180007bd0(plVar4);
  return uVar7;
}


/* Address: 0x1800069a8; Evidence: ev_14524ebe955a796b8f9cc62996b85fbf2a417b8b05121bf832324556077d5d6f */

undefined8 FUN_1800069a8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001c378 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_180009748();
    if (pcVar2 == (char *)0x0) {
      FUN_180007bd0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_180006a1c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001c378;
        puVar1 = DAT_18001c390;
      }
      DAT_18001c390 = puVar1;
      DAT_18001c378 = puVar4;
      FUN_180007bd0((LPVOID)0x0);
      FUN_180007bd0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x180006a1c; Evidence: ev_e52a7868b764356f6dd99297ce89eb45860b46f09bf2161ced117b0065a37138 */

undefined8 * FUN_180006a1c(char *param_1)

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
LAB_180006a7f:
    FUN_180007bd0((LPVOID)0x0);
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
          FUN_180007bd0((LPVOID)0x0);
          goto LAB_180006a7f;
        }
        uVar5 = FUN_180006fc0(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_180007bd0((LPVOID)0x0);
      }
    }
    FUN_180007bd0((LPVOID)0x0);
  }
  return puVar3;
}


/* Address: 0x180006b30; Evidence: ev_433873eace0c4158fce9bea39e6f62dbf4f139bf563ef3dd44cfa96d4e86602b */

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
      FUN_180007bd0(pvVar1);
      puVar2 = puVar2 + 1;
      pvVar1 = (LPVOID)*puVar2;
    }
    FUN_180007bd0(param_1);
  }
  return;
}


/* Address: 0x180006b74; Evidence: ev_b9d787d2ce27b24ae1b808fd4e162075670083cf3063f3c83fa1dd2514800cf1 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001c390) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x180006b90; Evidence: ev_9c538cbcea24274a375062e6ea2ee4e01efd8dda9267424d8254021dd47f3040 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001c388) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x180006bac; Evidence: ev_dfa71666dd5daca546c38b6e371ae52346789dd1b0e53a94b49619f9ff202ccd */

void FUN_180006bac(void)

{
  uninitialize_environment_internal<>(&DAT_18001c378);
  uninitialize_environment_internal<>((undefined8 *)&DAT_18001c380);
  free_environment<>(DAT_18001c390);
  free_environment<>(DAT_18001c388);
  return;
}


/* Address: 0x180006bf0; Evidence: ev_6eaaed87a284782855795c1618818d45d8c1450a04d3d14d9c2eb236578b7f1a */

undefined8 thunk_FUN_1800069a8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001c378 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_180009748();
    if (pcVar2 == (char *)0x0) {
      FUN_180007bd0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_180006a1c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001c378;
        puVar1 = DAT_18001c390;
      }
      DAT_18001c390 = puVar1;
      DAT_18001c378 = puVar4;
      FUN_180007bd0((LPVOID)0x0);
      FUN_180007bd0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x180006bf8; Evidence: ev_806022510cd66cc6972526121d32867ba9e810c822c42f1432963d27395d6d4d */

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
  uVar1 = FUN_180006c34(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x180006c34; Evidence: ev_d4fe7f49625f348fbad0a024e4f06f69d5926d720795c5d316dd81cc65fc9edd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180006c34(undefined8 *param_1)

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
  
  uVar1 = DAT_18001b000;
  puVar8 = *(ulonglong **)*param_1;
  if (puVar8 == (ulonglong *)0x0) {
    uVar2 = 0xffffffff;
  }
  else {
    bVar5 = (byte)DAT_18001b000 & 0x3f;
    puVar10 = (ulonglong *)
              ((DAT_18001b000 ^ *puVar8) >> bVar5 | (DAT_18001b000 ^ *puVar8) << 0x40 - bVar5);
    puVar8 = (ulonglong *)
             ((DAT_18001b000 ^ puVar8[1]) >> bVar5 | (DAT_18001b000 ^ puVar8[1]) << 0x40 - bVar5);
    if ((longlong)puVar10 - 1U < 0xfffffffffffffffe) {
      uVar7 = (uint)DAT_18001b000 & 0x3f;
      puVar9 = puVar8;
      uVar3 = DAT_18001b000;
      puVar13 = puVar10;
      while (puVar8 = puVar8 + -1, puVar10 <= puVar8) {
        if (*puVar8 != uVar1) {
          uVar3 = *puVar8 ^ uVar3;
          *puVar8 = uVar1;
          (*(code *)(uVar3 >> (sbyte)uVar7 | uVar3 << 0x40 - (sbyte)uVar7))();
          uVar7 = (uint)DAT_18001b000 & 0x3f;
          uVar11 = DAT_18001b000 ^ **(ulonglong **)*param_1;
          uVar3 = DAT_18001b000 ^ (*(ulonglong **)*param_1)[1];
          sVar6 = (sbyte)uVar7;
          puVar12 = (ulonglong *)(uVar11 >> sVar6 | uVar11 << 0x40 - sVar6);
          puVar4 = (ulonglong *)(uVar3 >> sVar6 | uVar3 << 0x40 - sVar6);
          uVar3 = DAT_18001b000;
          if ((puVar12 != puVar13) || (puVar4 != puVar9)) {
            puVar8 = puVar4;
            puVar9 = puVar4;
            puVar10 = puVar12;
            puVar13 = puVar12;
          }
        }
      }
      if (puVar10 != (ulonglong *)0xffffffffffffffff) {
        FUN_180007bd0(puVar10);
        uVar3 = DAT_18001b000;
      }
      **(ulonglong **)*param_1 = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 8) = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 0x10) = uVar3;
    }
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x180006d4c; Evidence: ev_b4fa84bbea338c50642d34ee5f9f03539cb1463ea44d503331b9225620fc64d4 */

void FUN_180006d4c(undefined8 param_1)

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


/* Address: 0x180006d90; Evidence: ev_4a1da4d77bce81d2562360b62c271fe99114a732d31033046e687798d081d2fe */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_18001b000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_18001b000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}


/* Address: 0x180006dc0; Evidence: ev_748fa5f487bc8acdd1779736ed4750e8d69d95291aaf8db484000bf52547fe69 */

undefined8 FUN_180006dc0(void)

{
  DAT_18001c3d0 = &PTR_DAT_18001b0a0;
  return 0x18001b001;
}


/* Address: 0x180006de0; Evidence: ev_a0ede16d31f75e6df6f10824af7e8a345e9f57796b2a68fd9d262fd0a26ecd08 */

undefined8 FUN_180006de0(void)

{
  undefined8 uVar1;
  
  _initialize_onexit_table((longlong *)&DAT_18001c398);
  uVar1 = _initialize_onexit_table((longlong *)&DAT_18001c3b0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x180006e10; Evidence: ev_bb775bc84f5a725c755153cdb282dceca596d317d9d4f14798d8251ecc159bfa */

undefined1 FUN_180006e10(void)

{
  return 1;
}


/* Address: 0x180006e20; Evidence: ev_fedff8ea1e44f6f5a6e1122412007944bdaca62fa714230fe0a2cb1a320c2984 */

undefined1 FUN_180006e20(void)

{
  FUN_180006bac();
  return 1;
}


/* Address: 0x180006e30; Evidence: ev_b89f0100d61a0fcda69572d874df14af42273aa552041d85df89d7d7ac060935 */

undefined1 FUN_180006e30(void)

{
  undefined8 uVar1;
  
  uVar1 = DAT_18001b000;
  FUN_180005e90(DAT_18001b000);
  FUN_1800060a0(uVar1);
  FUN_18000a1e4(uVar1);
  FUN_18000a460(uVar1);
  FUN_1800065dc(uVar1);
  return 1;
}


/* Address: 0x180006e70; Evidence: ev_ab7b4006d3ae6cfd317cb7908b230e94d5489e8d35848e48885307fcb644b8c4 */

void FUN_180006e70(void)

{
  __vcrt_uninitialize('\0');
  return;
}


/* Address: 0x180006e80; Evidence: ev_dd481b318ba7d26d7fe863885cef3a4b6c7bc8379d02a1e0d58cb30466eda1fe */

undefined8 FUN_180006e80(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_18001c650;
  uVar2 = (ulonglong)uVar1;
  *DAT_18001c650 = *DAT_18001c650 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_18001c650 != (uint *)&DAT_18001b210)) {
    uVar2 = FUN_180007bd0(DAT_18001c650);
    DAT_18001c650 = (uint *)&DAT_18001b210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}


/* Address: 0x180006ec0; Evidence: ev_eec366bf803997d44d45a4b6189f391243d35baecced11b9b207afd2d430d71d */

undefined1 FUN_180006ec0(void)

{
  FUN_180007bd0(DAT_18001cb90);
  DAT_18001cb90 = (LPVOID)0x0;
  FUN_180007bd0(DAT_18001cb98);
  DAT_18001cb98 = (LPVOID)0x0;
  FUN_180007bd0(DAT_18001c670);
  DAT_18001c670 = (LPVOID)0x0;
  FUN_180007bd0(DAT_18001c678);
  DAT_18001c678 = (LPVOID)0x0;
  return 1;
}


/* Address: 0x180006f1c; Evidence: ev_78badb95a4854eb3f8b5af2342dddbad804f5d0013fd102f1e19a32442117cb0 */

void FUN_180006f1c(void)

{
  FUN_18000a0b0(&PTR_FUN_1800116d0,(undefined8 *)&DAT_1800117d0);
  return;
}


/* Address: 0x180006f30; Evidence: ev_cad4fb88b5da3bf054824896b44aaeeba1e1c493f5114ee39e09b309d6873250 */

bool FUN_180006f30(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_1800077a8();
  return p_Var1 != (__acrt_ptd *)0x0;
}


/* Address: 0x180006f44; Evidence: ev_caa02a01b3cb3f8cd3e8ee381b48385ea7fe2932755ccc7008c5b586c35bb3c2 */

undefined1 FUN_180006f44(void)

{
  FUN_1800076f8();
  return 1;
}


/* Address: 0x180006f54; Evidence: ev_dcd7190f030a9b82c8dee8efc0a45c8826fa97ea4484ff1be32d5592c5505daa */

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
    if (DAT_18001cb88 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_18000a130(0x1800116d0,0x1800117d0);
  return uVar2;
}


/* Address: 0x180006f8c; Evidence: ev_3ced6d0d6e0012fbca3c7b74540e28a82b399d06227751a39a72633136cdcf6e */

undefined4 FUN_180006f8c(void)

{
  undefined4 uVar1;
  
  uVar1 = FUN_1800078f0();
  return CONCAT31((int3)((uint)uVar1 >> 8),1);
}


/* Address: 0x180006f9c; Evidence: ev_188e952bcc0a78fa2f225e49172ed8ffe2ff2dca448342b2591e0bbbd97e3cdb */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006f9c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007748();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180006fc0; Evidence: ev_2c794fc87add8fe4ca9d58781f944400a2b6d1460941ad228215251bb99bd7ed */

undefined8 FUN_180006fc0(char *param_1,longlong param_2,longlong param_3)

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
      p_Var2 = FUN_1800072a4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_180005fec();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_1800072a4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_180005fec();
  return 0x16;
}


/* Address: 0x180007040; Evidence: ev_6cb2ce9695de97e8c7d9367e3781c7bcdc006dbc0facd3694a0e94931d61807c */

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
    FUN_18000a204(0x16);
  }
  if ((DAT_18001b080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x18000708b;
    FUN_180005d20(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x180007095;
  FUN_1800065f4(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x1800070a0; Evidence: ev_4c61c8254a871575ae258802267a96cd72c61c6734f4e54aa1c54dcd5c3fd111 */

void FUN_1800070a0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005c00(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_180007948(lVar1,param_1 + 3,param_1[1]);
  FUN_1800079b4(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}


/* Address: 0x180007120; Evidence: ev_0ff48e3621aa4b237fa4b36b056cff017597ea9c6d89e7060379525ac30f318d */

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
      pvVar3 = HeapAlloc(DAT_18001c748,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000b730();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180006060(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_1800072a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180007130; Evidence: ev_15bd0e1713077635febad598daa6740f6af3ae7072928d5fd130733dc5d547da */

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


/* Address: 0x180007164; Evidence: ev_73b289567be2de5324b33db0b3d4c4d8e7f474caae7edc046118815f289335d1 */

uint FUN_180007164(uint param_1)

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
      return *(uint *)(&DAT_1800117d4 + (ulonglong)(param_1 - 1) * 8);
    }
    if (param_1 < 0x719) {
      uVar5 = 0x2d;
      uVar7 = 0;
      uVar8 = 0x2c;
      do {
        uVar9 = uVar5 >> 1;
        if (uVar9 == 0) {
          if (uVar5 != 0) {
            puVar4 = (uint *)(&DAT_1800117d0 + uVar7 * 8);
            if (param_1 != *puVar4) {
              puVar4 = (uint *)0x0;
            }
LAB_180007205:
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
        puVar4 = (uint *)(&DAT_1800117d0 + lVar1 * 8);
        if (param_1 == *puVar4) goto LAB_180007205;
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


/* Address: 0x180007234; Evidence: ev_c6380913cf1329abbb23f5a47c52450637bea60ecbbb08ca72e9c5dcab2d73c0 */

void FUN_180007234(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = FUN_180007280();
  *(uint *)p_Var2 = param_1;
  uVar1 = FUN_180007164(param_1);
  p_Var2 = FUN_1800072a4();
  *(uint *)p_Var2 = uVar1;
  return;
}


/* Address: 0x18000725c; Evidence: ev_30a2dfe190aafbbc993a52e701bb56812dcf2cf8dd1ec9a622c4d287d557a0f8 */

void FUN_18000725c(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_180007164(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}


/* Address: 0x180007280; Evidence: ev_7a76282162ef0f1e3195e32b99f863a878b6150900f863cc5116addb9b83c2ae */

__acrt_ptd * FUN_180007280(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_1800077a8();
  p_Var2 = p_Var1 + 0x24;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_18001b094;
  }
  return p_Var2;
}


/* Address: 0x1800072a4; Evidence: ev_4353291ae4a3755ef26c6a875e596db7974ae4ade4c4df535e93699568a103e3 */

__acrt_ptd * FUN_1800072a4(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_1800077a8();
  p_Var2 = p_Var1 + 0x20;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_18001b090;
  }
  return p_Var2;
}


/* Address: 0x1800072c8; Evidence: ev_a05ec3d825c0c0a4875454976f9f6737abea29e9c84cf210fa7a82e1b2cca344 */

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


/* Address: 0x180007308; Evidence: ev_53f96ca8d37982a704e1e213436086bdf5db83ae9798010361bbb265d685a584 */

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


/* Address: 0x180007348; Evidence: ev_8369d4b11ad05a23d15be728264e4c2e4ad70d60d5f571c059dbeed66566cf96 */

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


/* Address: 0x180007390; Evidence: ev_c3f3bf2596a77bd6a2a5bb3f2c563b1a6a38e6b704f591603c1f0fd3568264c6 */

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
    if ((iVar1 == 1) && (piVar2 != (int *)&DAT_18001b210)) {
      FUN_180007bd0(piVar2);
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x1800073f0; Evidence: ev_b818373a1281e64ea94059d9bca852513454a61a840e3b2fea6f2d0987d4aa4a */

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
  local_28 = &DAT_18001c3d0;
  *(undefined4 *)(param_1 + 0x28) = 1;
  *(undefined **)param_1 = &DAT_180011530;
  *(undefined4 *)(param_1 + 0x3a8) = 1;
  *(undefined **)(param_1 + 0x88) = &DAT_18001b210;
  *(undefined2 *)(param_1 + 0xbc) = 0x43;
  *(undefined2 *)(param_1 + 0x1c2) = 0x43;
  *(undefined8 *)(param_1 + 0x3a0) = 0;
  local_30 = param_1;
  operator()<>(local_res10,local_res20,&local_20,local_res18);
  operator()<>(local_res10,local_38 + 1,&local_18,local_38);
  return;
}


/* Address: 0x1800074c0; Evidence: ev_6306cd93d24241aa2a9576eb114f941a2d5265543d63a72f9c667e8298c030da */

void FUN_1800074c0(__acrt_ptd *param_1)

{
  if (param_1 != (__acrt_ptd *)0x0) {
    destroy_ptd_array(param_1);
    FUN_180007bd0(param_1);
  }
  return;
}


/* Address: 0x1800074e0; Evidence: ev_97c16930d416b8241f316a5a391651c9ccb6751fa6692353d5090d6119a8f3da */

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
  if (*(undefined **)param_1 != &DAT_180011530) {
    FUN_180007bd0(*(undefined **)param_1);
  }
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x70));
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x58));
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x60));
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x68));
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x48));
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x50));
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x78));
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x80));
  FUN_180007bd0(*(LPVOID *)(local_20 + 0x3c0));
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  operator()<>(local_res10,local_28 + 1,&local_10,local_28);
  return;
}


/* Address: 0x1800075d8; Evidence: ev_e19af69160ebc0d9791281e6afe21cf4959feb0b4ae82924004f1f46e468bbe0 */

__acrt_ptd * FUN_1800075d8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_18001b098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_18001b098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_18001b098,(PVOID)0x0);
        FUN_180007bd0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_180007bd0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_18001b098,(PVOID)0x0);
    FUN_180007bd0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}


/* Address: 0x180007690; Evidence: ev_f0f9ac03cf40a4410fc555b13c36a07fd2adca585787f1aa66c0961ddad06f90 */

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
    if (((ppuVar1 != DAT_18001c3d0) && (ppuVar1 != &PTR_DAT_18001b0a0)) &&
       (*(int *)(ppuVar1 + 2) == 0)) {
      __acrt_free_locale((longlong)ppuVar1);
    }
  }
  *(__crt_locale_data **)(param_1 + 0x90) = param_2;
  if (param_2 != (__crt_locale_data *)0x0) {
    __acrt_add_locale_ref((longlong)param_2);
  }
  return;
}


/* Address: 0x1800076f8; Evidence: ev_3171db1c8bc2d6f18977de1d535fe428eed5c544c0670cdd887804d76605d5df */

void FUN_1800076f8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_18001b098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_18001b098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_18001b098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_180007bd0(p_Var1);
  }
  return;
}


/* Address: 0x180007748; Evidence: ev_36df631e747277120e656793d25655a2d82b3a7f10143ae1afa77dae0e807006 */

void FUN_180007748(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_1800077a8();
  if (p_Var1 != (__acrt_ptd *)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180007764; Evidence: ev_7af58b165f2dcf87f96831ee82d430f60f9d820f5d40dfa859128915fcb15753 */

void FUN_180007764(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_18001b098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_18001b098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_1800075d8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_1800077a0;
    }
    return;
  }
LAB_1800077a0:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800077a8; Evidence: ev_a1cb0ad63f32de8521cbf67495561ee3a0ff66d06f24f59b8ef2c8ab0f30d3b2 */

__acrt_ptd * FUN_1800077a8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_18001c3c8 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_18001b098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_18001b098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800075d8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_18001b098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_180009b7c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800075d8();
    }
  }
  return p_Var2;
}


/* Address: 0x180007838; Evidence: ev_a9871b042a7f205f1f821332576f25e0d02cb80916d1378c1df35af45a8f5311 */

__acrt_ptd * FUN_180007838(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_18001b098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_18001b098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_1800075d8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}


/* Address: 0x1800078a0; Evidence: ev_ead51b7cc8dde2a038eb5370e8f1ae10d893fac7cb9d5d506313f5e712366a7f */

ulonglong FUN_1800078a0(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_18001c3c8 = FUN_180009d20();
  DAT_18001b098 = FlsAlloc(FUN_1800074c0);
  uVar2 = CONCAT44(extraout_var,DAT_18001b098);
  if (DAT_18001b098 != 0xffffffff) {
    p_Var3 = FUN_1800077a8();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_1800078f0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x1800078f0; Evidence: ev_9d68590bebb7a81c4adf2e2b45358f71796ed8f6d8107d9ae4dd312a350ba081 */

undefined4 FUN_1800078f0(void)

{
  BOOL in_EAX;
  
  if (DAT_18001b098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_18001b098);
    DAT_18001b098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}


/* Address: 0x180007914; Evidence: ev_842239e710eaf94a7b1492666d03ce10535fc0a3a0b6690d6bc4f52f099dd40c */

/* Library Function - Single Match
    __acrt_update_locale_info
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_update_locale_info(longlong param_1,longlong *param_2)

{
  undefined **ppuVar1;
  
  if ((*param_2 != DAT_18001c3d0) && ((DAT_18001b858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x180007948; Evidence: ev_b9d7304ec0a58a5e083821b5c659f85ca0cd5f747cfd052468a705c15051231d */

void FUN_180007948(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_18001c3d0)[param_3]) && ((DAT_18001b858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x180007980; Evidence: ev_835d55e3fa6e050ea61c6060cef318dce2fde93235ad32080a817a5ae2f258e6 */

void FUN_180007980(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_18001c650) && ((DAT_18001b858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_180009240();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x1800079b4; Evidence: ev_cc0e23db8a0a6a3b1ac2c40fb9740c63f5cc7c08d33c9f268bbed860a2c82c96 */

void FUN_1800079b4(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_18001c650)[param_3]) && ((DAT_18001b858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_180009240();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x1800079ec; Evidence: ev_d5c43aa859a682a8590bd7026d65b2cba73628220fa656370feff3dd6bc444f4 */

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
  for (plVar2 = &DAT_18001c3d0; plVar2 != &DAT_18001c3d8; plVar2 = plVar2 + 1) {
    if ((undefined **)*plVar2 != &PTR_DAT_18001b0a0) {
      ppuVar1 = _updatetlocinfoEx_nolock(plVar2,&PTR_DAT_18001b0a0);
      *plVar2 = (longlong)ppuVar1;
    }
  }
  __acrt_unlock(*(int *)param_3);
  return;
}


/* Address: 0x180007a5c; Evidence: ev_dd7532948f801ba2172a50856620f667564ba9cb2b9de9590e514ea982141a9e */

undefined4 FUN_180007a5c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18001c3cc;
  LOCK();
  DAT_18001c3cc = 1;
  UNLOCK();
  return uVar1;
}


/* Address: 0x180007a70; Evidence: ev_e1a2356177e84bb456aa123d35c9aadecab1d1af7662dcf512e795448a07a121 */

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


/* Address: 0x180007aa0; Evidence: ev_ceed874e780dc779f915fe26be08bbc68f5f64c34f628a61a9713317584760b0 */

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
    BVar1 = InitializeCriticalSectionEx((LPCRITICAL_SECTION)(&DAT_18001c3e0 + uVar2 * 0x28),4000,0);
    if (BVar1 == 0) {
      uVar2 = __acrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_18001c638 = DAT_18001c638 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 < 0xf);
  return CONCAT71((int7)(CONCAT44(extraout_var,BVar1) >> 8),1);
}


/* Address: 0x180007ae8; Evidence: ev_e66ac4febd0ab2999dd1275dcc43c8a3fcbe3dd378261d82d5fcb46701cb7da1 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180007afa. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_18001c3e0 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x180007b10; Evidence: ev_04561dc1f0a0f4099f63fab8b91c7353990a71a4b46934dbe17576be4a7469c4 */

/* Library Function - Single Match
    __acrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_18001c638;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_18001c3e0 + uVar1 * 0x28));
    DAT_18001c638 = DAT_18001c638 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180007b48; Evidence: ev_ac4daa756a8efcc192897acacef54f905912b5ae293176ba6d392621f7df1f57 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180007b5a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_18001c3e0 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x180007b70; Evidence: ev_7ba2675cf8b2731d57be03cf02b9f886c1459313369aed9db62d815bb00c7e8a */

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
      pvVar3 = HeapAlloc(DAT_18001c748,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000b730();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180006060(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_1800072a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180007bd0; Evidence: ev_677db6515ca2fe5c7050576703bfff087758a51e3bc1375b594024202ec6a47a */

void FUN_180007bd0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001c748,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180007164(DVar2);
    p_Var4 = FUN_1800072a4();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180007c28; Evidence: ev_f014e0dbbdc42fd0d1c11219a13a5725e06d199c1a76364c692da4a1fe18bd36 */

uint FUN_180007c28(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}


/* Address: 0x180007c44; Evidence: ev_7ff608356926298df9c826f554635665293b1e6a5c322389b1ce84ed37614ebe */

uint FUN_180007c44(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}


/* Address: 0x180007c5c; Evidence: ev_b05dc8d03987cdee6ee89176a412ece6584e1e1e5ad6ce03ceb0ed87e4d03af1 */

bool FUN_180007c5c(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_180007c44();
  if ((char)uVar1 == '\0') {
    FUN_180009abc(local_res8);
  }
  return local_res8[0] != 1;
}


/* Address: 0x180007c90; Evidence: ev_dd5d40e57bea85fa9a5fde1b165fe088a28795020464147a638aa1a914d2caf1 */

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
      pvVar3 = HeapAlloc(DAT_18001c748,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000b730();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180006060(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_1800072a4();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180007d10; Evidence: ev_8e1a2a1bce3622562d306e0e3aaa318a6b04448de5ba5bd6a152d52bea02a549 */

ulonglong FUN_180007d10(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}


/* Address: 0x180007d24; Evidence: ev_7aa290b3df9865690863adddd47a7ae94a4946b83fb085e9e63360b941d0a037 */

uint FUN_180007d24(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_180007bd0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_1800095d8(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_180007bd0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_1800095d8(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180007234(DVar2);
      p_Var4 = FUN_1800072a4();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_180007bd0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x180007ec4; Evidence: ev_51ce3421f3a83d95391e08775ca46aea50bc8a49cd10e98fbce8b4ba553b5e87 */

uint FUN_180007ec4(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_180007bd0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != 0) {
      iVar1 = FUN_180009668(param_4,0,param_1,0xffffffff);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_180007bd0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_180009668(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180007234(DVar2);
      p_Var4 = FUN_1800072a4();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_180007bd0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x180008070; Evidence: ev_daa34a42ef29dfdc498593ae56251b4921b0343567612d6c423cfe8415c81a43 */

ulonglong FUN_180008070(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_1800072a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_180005fec();
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
      pbVar4 = FUN_18000bce0(pbVar4,(byte *)&local_res10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_1800082ac((longlong)*param_1,0,0,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_180007bd0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_1800081bf;
        }
      }
      else {
        uVar10 = FUN_180008430((uchar *)*param_1,pbVar4,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_180007bd0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_1800081bf;
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
      FUN_180007bd0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180007bd0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_1800081bf:
      FUN_180007bd0(plVar8);
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
          iVar1 = FUN_18000bb10(pcVar9,(longlong)(local_res20 + (local_res18 - (longlong)pcVar9)),
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
      FUN_180007bd0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180007bd0((LPVOID)*plVar11);
      }
      FUN_180007bd0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x1800082ac; Evidence: ev_83ed3d6553603b4787142dc3a0f4ecb3c27b98ef5df35b4c291bc037bc7b0deb */

undefined8 FUN_1800082ac(longlong param_1,longlong param_2,ulonglong param_3,longlong *param_4)

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
  if (((param_3 != 0) && (iVar1 = FUN_18000bb10(pcVar2,uVar8,param_2,param_3), iVar1 != 0)) ||
     (iVar1 = FUN_18000bb10(pcVar2 + param_3,uVar8 - param_3,param_1,uVar6), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  if (param_4[1] == param_4[2]) {
    if (*param_4 == 0) {
      pvVar3 = _calloc_base(4,8);
      *param_4 = (longlong)pvVar3;
      FUN_180007bd0((LPVOID)0x0);
      lVar4 = *param_4;
      if (lVar4 != 0) {
        param_4[1] = lVar4;
        param_4[2] = lVar4 + 0x20;
        goto LAB_180008402;
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
          FUN_180007bd0((LPVOID)0x0);
          goto LAB_180008402;
        }
        FUN_180007bd0((LPVOID)0x0);
      }
    }
    uVar7 = 0xc;
    FUN_180007bd0(pcVar2);
  }
  else {
LAB_180008402:
    *(char **)param_4[1] = pcVar2;
    param_4[1] = param_4[1] + 8;
  }
  FUN_180007bd0((LPVOID)0x0);
  return uVar7;
}


/* Address: 0x180008430; Evidence: ev_b3afc830f4dfbdab0e32cd4098eeb50e60c6de086950aedeab1cc9d339e5975d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180008430(uchar *param_1,uchar *param_2,longlong *param_3)

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
  
  local_48 = DAT_18001b000 ^ (ulonglong)auStackY_378;
  while ((param_2 != param_1 &&
         ((0x2d < (byte)(*param_2 - 0x2f) ||
          ((0x200000000801U >> ((longlong)(char)(*param_2 - 0x2f) & 0x3fU) & 1) == 0))))) {
    param_2 = (uchar *)FUN_18000c098(param_1,param_2);
  }
  if ((*param_2 == ':') && (param_2 != param_1 + 1)) {
    uVar5 = FUN_1800082ac((longlong)param_1,0,0,param_3);
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
    FUN_18000eb90((undefined1 (*) [32])&local_298,0,0x250);
    local_338 = 0;
    local_330 = 0;
    local_328 = (LPCWSTR)0x0;
    local_320 = 0;
    local_318 = 0;
    local_310 = '\0';
    FUN_180005980(&local_308,(longlong *)0x0);
    if (*(int *)(local_300 + 0xc) == 0xfde9) {
      if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
      uVar3 = 0xfde9;
    }
    else {
      IVar6 = FUN_180009b18();
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
    uVar3 = FUN_180007d24((char *)param_1,(longlong)&local_338,local_348,uVar3);
    lpFileName = local_328;
    if (uVar3 != 0) {
      lpFileName = (LPCWSTR)0x0;
    }
    hFindFile = FindFirstFileExW(lpFileName,FindExInfoStandard,&local_298,FindExSearchNameMatch,
                                 (LPVOID)0x0,0);
    if (hFindFile == (HANDLE)0xffffffffffffffff) {
      uVar5 = FUN_1800082ac((longlong)param_1,0,0,param_3);
      uVar5 = uVar5 & 0xffffffff;
      if (local_310 != '\0') {
        FUN_180007bd0(local_328);
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
        FUN_180005980(&local_2e8,(longlong *)0x0);
        uVar3 = 0xfde9;
        if (*(int *)(local_2e0 + 0xc) == 0xfde9) {
          if (local_2d0 != '\0') {
            *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
          }
        }
        else {
          IVar6 = FUN_180009b18();
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
        uVar3 = FUN_180007ec4(local_298.cFileName,(longlong)&local_2c8,local_348,uVar3);
        pcVar2 = local_2b8;
        pcVar8 = local_2b8;
        if (uVar3 != 0) {
          pcVar8 = (char *)0x0;
        }
        if ((*pcVar8 == '.') && ((pcVar8[1] == '\0' || ((pcVar8[1] == '.' && (pcVar8[2] == '\0')))))
           ) {
          if (local_2a0 != '\0') {
            FUN_180007bd0(local_2b8);
          }
        }
        else {
          uVar7 = FUN_1800082ac((longlong)pcVar8,(longlong)param_1,uVar5,param_3);
          if ((int)uVar7 != 0) {
            if (local_2a0 != '\0') {
              FUN_180007bd0(pcVar2);
            }
            FindClose(hFindFile);
            if (local_310 == '\0') {
              return uVar7 & 0xffffffff;
            }
            FUN_180007bd0(local_328);
            return uVar7 & 0xffffffff;
          }
          uVar5 = local_340;
          if (local_2a0 != (char)uVar7) {
            FUN_180007bd0(pcVar2);
            uVar5 = local_340;
          }
        }
        BVar4 = FindNextFileW(hFindFile,&local_298);
      } while (BVar4 != 0);
      lVar9 = param_3[1] - *param_3 >> 3;
      if (lVar10 != lVar9) {
        FUN_18000b770((undefined1 *)(*param_3 + lVar10 * 8),lVar9 - lVar10,8,FUN_180007d10);
      }
      FindClose(hFindFile);
      if (local_310 != '\0') {
        FUN_180007bd0(local_328);
      }
      uVar5 = 0;
    }
  }
  return uVar5;
}


/* Address: 0x180008790; Evidence: ev_11f817567011183003215ef1bed8147cbcd22195970e0b5f3034cbba46d98867 */

ulonglong thunk_FUN_180008070(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_1800072a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_180005fec();
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
      pbVar4 = FUN_18000bce0(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_1800082ac((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_180007bd0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_1800081bf;
        }
      }
      else {
        uVar10 = FUN_180008430((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_180007bd0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_1800081bf;
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
      FUN_180007bd0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180007bd0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_1800081bf:
      FUN_180007bd0(plVar8);
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
          iVar1 = FUN_18000bb10(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
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
      FUN_180007bd0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180007bd0((LPVOID)*plVar11);
      }
      FUN_180007bd0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x180008798; Evidence: ev_9bebf9cd98e3e7a431492532e6cf18506fe230355ad5706b1edb5f4aa621a993 */

undefined4 FUN_180008798(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      iVar1 = FUN_180009668(param_4,0,param_1,0xffffffff);
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < (ulonglong)(longlong)iVar1) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          goto LAB_1800087ec;
        }
        iVar1 = FUN_180009668(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180007234(DVar2);
      p_Var3 = FUN_1800072a4();
      return *(undefined4 *)p_Var3;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
LAB_1800087ec:
      p_Var3 = FUN_1800072a4();
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


/* Address: 0x1800088b4; Evidence: ev_b7e69b273d6e1c3e44053a4669f860fa30a6566d5000cdb6af851cc5c40b005c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800088b4(HMODULE param_1,undefined8 param_2,ulonglong param_3)

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
  
  local_18 = DAT_18001b000 ^ (ulonglong)auStack_2a8;
  DVar1 = GetModuleFileNameW(param_1,local_228,0x105);
  if (DVar1 == 0) {
    DVar1 = GetLastError();
    FUN_180007234(DVar1);
    local_240 = 0;
  }
  else {
    local_240 = 0;
    local_238 = 0;
    local_260 = param_2;
    local_258 = param_3 & 0xffffffff;
    local_250 = param_2;
    local_248 = param_3 & 0xffffffff;
    FUN_180005980(&local_280,(longlong *)0x0);
    uVar3 = 0xfde9;
    if (*(int *)(local_278 + 0xc) == 0xfde9) {
      if (local_268 != '\0') {
        *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
      }
    }
    else {
      IVar2 = FUN_180009b18();
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
    FUN_180008798(local_228,(longlong)&local_260,local_288,uVar3);
    local_240 = local_240 & 0xffffffff;
  }
  return local_240;
}


/* Address: 0x1800089d8; Evidence: ev_85dd9dbf2f6ec98d880448c43eb0b914982de6972636bce36753507ccae9a480 */

void FUN_1800089d8(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  if (DAT_18001c640 == (undefined1 (*) [32])0x0) {
LAB_180008a8b:
    p_Var5 = FUN_1800072a4();
    *(undefined4 *)p_Var5 = 0x16;
    FUN_180005fec();
  }
  else {
    if (puVar4 == (undefined8 *)0x0) {
      FUN_18000eb90(DAT_18001c640,0,0x101);
      goto LAB_180008a8b;
    }
    lVar8 = 2;
    pauVar7 = DAT_18001c640;
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
  if (DAT_18001c648 != (undefined1 (*) [32])0x0) {
    pauVar7 = DAT_18001c648;
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
      goto LAB_180008b3c;
    }
    FUN_18000eb90(DAT_18001c648,0,0x100);
  }
  p_Var5 = FUN_1800072a4();
  *(undefined4 *)p_Var5 = 0x16;
  FUN_180005fec();
LAB_180008b3c:
  piVar2 = (int *)**(undefined8 **)param_3[1];
  LOCK();
  iVar1 = *piVar2;
  *piVar2 = *piVar2 + -1;
  UNLOCK();
  if ((iVar1 == 1) && ((undefined *)**(undefined8 **)param_3[1] != &DAT_18001b210)) {
    FUN_180007bd0((LPVOID)**(undefined8 **)param_3[1]);
  }
  **(undefined8 **)param_3[1] = *(undefined8 *)(*(longlong *)*param_3 + 0x88);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180008ba8; Evidence: ev_70a96eebbf5fa221a65039cf93a3eb6e78d775f9342476820f06bf079cc522b4 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_180005980(&local_28,(longlong *)0x0);
  DAT_18001c658 = 0;
  if (param_1 == -2) {
    DAT_18001c658 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_18001c658 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_18001c658 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}


/* Address: 0x180008c28; Evidence: ev_da6219372398fb7514a30e91a53024b696a395fe24de1d68058736764c761684 */

void FUN_180008c28(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined2 *puVar3;
  longlong lVar4;
  
  FUN_18000eb90((undefined1 (*) [32])(param_1 + 0x18),0,0x101);
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
    *(undefined1 *)(param_1 + lVar4 + 0x18) = (&DAT_18001b228)[lVar4];
    lVar4 = lVar1;
  } while (lVar1 < 0x101);
  do {
    lVar1 = lVar2 + 1;
    *(undefined1 *)(param_1 + lVar2 + 0x119) = (&DAT_18001b329)[lVar2];
    lVar2 = lVar1;
  } while (lVar1 < 0x100);
  return;
}


/* Address: 0x180008cc0; Evidence: ev_5df0896bd6d3f034d5e47b951a675262007673fd219a3c5fa8d0e9cad0b384a9 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180008cc0(longlong param_1)

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
  
  local_18 = DAT_18001b000 ^ (ulonglong)auStackY_788;
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
    FUN_18000b59c((longlong *)0x0,1,local_718,0x100,local_418,*(uint *)(param_1 + 4),0);
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


/* Address: 0x180008eb8; Evidence: ev_34808e8a6e533ea93178c6ce6f0e150ad36b9f2a8fd50958c83e15bd6a6819d1 */

ulonglong FUN_180008eb8(int param_1,char param_2,__acrt_ptd *param_3,__crt_multibyte_data **param_4)

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
      FUN_180007bd0((LPVOID)0x0);
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
      uVar12 = FUN_18000925c(iVar8,(longlong)puVar9);
      uVar10 = uVar12 & 0xffffffff;
      if ((int)uVar12 == -1) {
        p_Var13 = FUN_1800072a4();
        *(undefined4 *)p_Var13 = 0x16;
        FUN_180007bd0(puVar9);
        uVar10 = 0xffffffff;
      }
      else {
        if (param_2 == '\0') {
          FUN_180007a5c();
        }
        piVar2 = *(int **)(local_res18 + 0x88);
        LOCK();
        iVar8 = *piVar2;
        *piVar2 = *piVar2 + -1;
        UNLOCK();
        if ((iVar8 == 1) && (*(undefined **)(local_res18 + 0x88) != &DAT_18001b210)) {
          FUN_180007bd0(*(undefined **)(local_res18 + 0x88));
        }
        *(undefined4 *)puVar9 = 1;
        *(undefined8 **)(local_res18 + 0x88) = puVar9;
        if ((DAT_18001b858 & *(uint *)(local_res18 + 0x3a8)) == 0) {
          local_258 = &local_res18;
          local_250 = &local_res20;
          local_264[0] = 5;
          local_264[1] = 5;
          FUN_1800089d8(local_268,local_264 + 1,&local_258,local_264);
          if (param_2 != '\0') {
            PTR_DAT_18001b200 = *local_res20;
          }
        }
        FUN_180007bd0((LPVOID)0x0);
      }
    }
  }
  return uVar10;
}


/* Address: 0x180009128; Evidence: ev_4585b9df53f4cf892b190218bcfa44ead199932ebcfa73cb13389f26c9365cc2 */

/* Library Function - Single Match
    struct __crt_multibyte_data * __ptr64 __cdecl update_thread_multibyte_data_internal(struct
   __acrt_ptd * __ptr64 const,struct __crt_multibyte_data * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

__crt_multibyte_data * __cdecl
update_thread_multibyte_data_internal(__acrt_ptd *param_1,__crt_multibyte_data **param_2)

{
  int iVar1;
  __crt_multibyte_data *p_Var2;
  
  if (((*(uint *)(param_1 + 0x3a8) & DAT_18001b858) == 0) || (*(longlong *)(param_1 + 0x90) == 0)) {
    __acrt_lock(5);
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
    if (p_Var2 != *param_2) {
      if (p_Var2 != (__crt_multibyte_data *)0x0) {
        LOCK();
        iVar1 = *(int *)p_Var2;
        *(int *)p_Var2 = *(int *)p_Var2 + -1;
        UNLOCK();
        if ((iVar1 == 1) && (p_Var2 != (__crt_multibyte_data *)&DAT_18001b210)) {
          FUN_180007bd0(p_Var2);
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


/* Address: 0x1800091e0; Evidence: ev_09cac29fa32e4401d612b25eee378270be5f0e9ac6c60af3fc70cc01f45669ec */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_18001c65c == '\0') {
    DAT_18001c648 = &DAT_18001b550;
    DAT_18001c650 = &DAT_18001b210;
    DAT_18001c640 = &DAT_18001b440;
    p_Var1 = (__acrt_ptd *)FUN_180007764();
    in_RAX = FUN_180008eb8(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_18001c650);
    DAT_18001c65c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180009240; Evidence: ev_763597e4f8b99c690299ea239347a3272d08ac70fc90a2871ca82e34fb2bfda1 */

void FUN_180009240(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = (__acrt_ptd *)FUN_180007748();
  update_thread_multibyte_data_internal(p_Var1,(__crt_multibyte_data **)&DAT_18001c650);
  return;
}


/* Address: 0x18000925c; Evidence: ev_b5246793da04fc89a3a8795996c59fabb7e4f25d9ef3e74dc87a0628a34f7119 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_18000925c(int param_1,longlong param_2)

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
  
  local_30 = DAT_18001b000 ^ (ulonglong)auStack_68;
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
LAB_1800094f4:
    FUN_180008c28(param_2);
    return 0;
  }
  puVar6 = &DAT_18001b660;
  uVar14 = 1;
  pwVar17 = pwVar8;
  do {
    if (*puVar6 == uVar4) {
      FUN_18000eb90((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
      pbVar18 = &DAT_18001b650;
      lVar9 = 4;
      pbVar7 = &DAT_18001b670 + (longlong)pwVar17 * 0x30;
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
                    (((longlong)pwVar17 * 0x30 - param_2) + 0x18001b658 + (longlong)puVar13);
        puVar13 = puVar13 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      goto LAB_1800094ea;
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
      if (DAT_18001c658 == 0) {
        return 0xffffffff;
      }
      goto LAB_1800094f4;
    }
    FUN_18000eb90((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
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
LAB_1800094ea:
  FUN_180008cc0(param_2);
  return 0;
}


/* Address: 0x180009524; Evidence: ev_786c1ad7c7f67c35ad1afd2c9d5ec9775518a5d7125266e591601524681c8575 */

undefined8 FUN_180009524(longlong *param_1,uint param_2,uint param_3,byte param_4)

{
  undefined8 uVar1;
  longlong local_28;
  longlong *local_20;
  longlong local_18;
  char local_10;
  
  FUN_180005980(&local_28,param_1);
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


/* Address: 0x180009598; Evidence: ev_73cd885099e165da67f6252d256522e8a7a5fa35c4bc2e06a32575f52aadb905 */

void FUN_180009598(uint param_1)

{
  FUN_180009524((longlong *)0x0,param_1,0,4);
  return;
}


/* Address: 0x1800095b0; Evidence: ev_dc43fee8441f0a9111e7deabaa6e78633752551be98bd62bb4ac226f3395d96d */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined1 FUN_1800095b0(void)

{
  DAT_18001c680 = GetCommandLineA();
  _DAT_18001c688 = GetCommandLineW();
  return 1;
}


/* Address: 0x1800095d8; Evidence: ev_9140bff251fb54e84fce6c466524f333925c63c7c375f7570620d22abce70429 */

void FUN_1800095d8(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_180009625:
          if (!bVar1) goto LAB_180009629;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_180009663;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_180009625;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_180009629;
LAB_180009663:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_180009629;
  }
  param_2 = 0;
LAB_180009629:
                    /* WARNING: Could not recover jumptable at 0x000180009629. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}


/* Address: 0x180009668; Evidence: ev_a88777b440f2863398c6131d455ac15ff24c05b6ad28307eee1a98a35a587e6c */

void FUN_180009668(uint param_1,uint param_2,undefined8 param_3,undefined4 param_4)

{
  int iVar1;
  uint uVar2;
  bool bVar3;
  undefined4 *in_stack_00000040;
  
  uVar2 = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_180009708;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_180009708;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_1800096f9;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_180009708;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_180009708;
    iVar1 = param_1 - 65000;
LAB_1800096f9:
    if (iVar1 == 0) goto LAB_180009708;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    uVar2 = param_2 & 0xffffff7f;
  }
LAB_180009708:
  if ((param_1 - 65000 < 2) && (in_stack_00000040 != (undefined4 *)0x0)) {
    *in_stack_00000040 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000973f. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,uVar2,param_3,param_4);
  return;
}


/* Address: 0x180009748; Evidence: ev_c532ac9654564a4c918b7fce801810bb58b34b30e8034a908e19c79c34af07fb */

LPVOID FUN_180009748(void)

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
    iVar2 = FUN_180009668(0,0,pWVar3,uVar7);
    if (iVar2 != 0) {
      pvVar6 = _malloc_base((longlong)iVar2);
      if (pvVar6 != (LPVOID)0x0) {
        iVar2 = FUN_180009668(0,0,pWVar3,uVar7);
        if (iVar2 == 0) {
          FUN_180007bd0(pvVar6);
          pvVar6 = (LPVOID)0x0;
        }
        else {
          FUN_180007bd0((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pvVar6;
      }
      FUN_180007bd0((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPVOID)0x0;
}


/* Address: 0x180009860; Evidence: ev_e13bf1e41f4a6c7a090a17f342ba05cf1178f993e15477a77d8ebbb26b84a927 */

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
      FUN_18000eb90((undefined1 (*) [32])((longlong)pvVar3 + uVar2),0,uVar4 - uVar2);
    }
  }
  else {
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 0xc;
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x180009908; Evidence: ev_048f16bf25e0bc4e3d249a484f9280d167db865243ed40458967c4bec97ff9fc */

FARPROC FUN_180009908(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
LAB_1800099fa:
      __acrt_lock(0xe);
      local_res18[0] = 0;
      BVar5 = VirtualProtect(&DAT_180020000,0x100,4,local_res18);
      if (BVar5 != 0) {
        pFVar6 = pFVar7;
        if (pFVar7 == (FARPROC)0x0) {
          pFVar6 = (FARPROC)0xffffffffffffffff;
        }
        LOCK();
        (&DAT_180020000)[param_1] = pFVar6;
        UNLOCK();
        BVar5 = VirtualProtect(&DAT_180020000,0x100,2,local_res18);
        if (BVar5 != 0) {
          __acrt_unlock(0xe);
          return pFVar7;
        }
      }
                    /* WARNING: Subroutine does not return */
      abort();
    }
    uVar2 = *param_3;
    hLibModule = (HMODULE)(&DAT_18001c690)[uVar2];
    if (hLibModule == (HMODULE)0x0) {
      lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_datetime_l1_1_1_180012020)[uVar2];
      hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
      if ((hLibModule != (HMODULE)0x0) ||
         ((((DVar3 = GetLastError(), DVar3 == 0x57 &&
            (iVar4 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar4 != 0)) &&
           (iVar4 = wcsncmp(lpLibFileName,L"ext-ms-",7), iVar4 != 0)) &&
          (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0))))
      {
        LOCK();
        lVar1 = (&DAT_18001c690)[uVar2];
        (&DAT_18001c690)[uVar2] = hLibModule;
        UNLOCK();
        if (lVar1 != 0) {
          FreeLibrary(hLibModule);
        }
        goto LAB_180009aa0;
      }
      LOCK();
      (&DAT_18001c690)[uVar2] = 0xffffffffffffffff;
      UNLOCK();
    }
    else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_180009aa0:
      pFVar7 = GetProcAddress(hLibModule,param_2);
      goto LAB_1800099fa;
    }
    param_3 = param_3 + 1;
  } while( true );
}


/* Address: 0x180009abc; Evidence: ev_d4005932db62bf0effd62bd8511f0518382c7319bc589ad14677ab649181c1bd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180009abc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_1800200d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_1800200d0;
  if ((DAT_1800200d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180009908(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001266c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}


/* Address: 0x180009b18; Evidence: ev_d95a6e5b2d6ecfe07c58ef0c63bf86c6e00120fbbb30bd46c74c7e67a7a03257 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180009b18(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_180020000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_180020000;
  if ((DAT_180020000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180009908(0,"AreFileApisANSI",(uint *)&DAT_180012608,(uint *)&DAT_18001260c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}


/* Address: 0x180009b64; Evidence: ev_fd60d4d15a85986c692bef66dd660c462249b1c44daf3e398dbce1b808d38ca9 */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180009b64. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}


/* Address: 0x180009b6c; Evidence: ev_c91898f987b32dc624cad9fc95cd4103aa9447cccc761143118c95688ac91c6f */

BOOL __stdcall FlsFree(DWORD dwFlsIndex)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180009b6c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsFree(dwFlsIndex);
  return BVar1;
}


/* Address: 0x180009b74; Evidence: ev_1e0e36b6240a4c103154775ce0f061ba437d3317bc579001f678837f56878636 */

PVOID __stdcall FlsGetValue(DWORD dwFlsIndex)

{
  PVOID pvVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180009b74. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  pvVar1 = FlsGetValue(dwFlsIndex);
  return pvVar1;
}


/* Address: 0x180009b7c; Evidence: ev_6ef37ac7b142a2a8f1a9f60d841be9a1eb789164947c5703e72f939ea6582b08 */

void FUN_180009b7c(void)

{
                    /* WARNING: Could not recover jumptable at 0x000180009b83. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*DAT_180020018)();
  return;
}


/* Address: 0x180009b88; Evidence: ev_611eb213ea40abc5d2c97feffbff8c5f07745fd4a2ecf935e8961bd6b7352a0f */

BOOL __stdcall FlsSetValue(DWORD dwFlsIndex,PVOID lpFlsData)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180009b88. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsSetValue(dwFlsIndex,lpFlsData);
  return BVar1;
}


/* Address: 0x180009b90; Evidence: ev_630a5d36c55d2f3975bb65b4217b511eb568c5733f78c83b0c340d1f5be13e4d */

BOOL __stdcall
InitializeCriticalSectionEx(LPCRITICAL_SECTION lpCriticalSection,DWORD dwSpinCount,DWORD Flags)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180009b90. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = InitializeCriticalSectionEx(lpCriticalSection,dwSpinCount,Flags);
  return BVar1;
}


/* Address: 0x180009b98; Evidence: ev_d77ea3f41bb3af25ac10eb174a419c79542a066a1a46aeb14e811f0612c401dd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180009b98(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_180020090 == (FARPROC)0xffffffffffffffff) {
LAB_180009c43:
    Locale = FUN_180009c8c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_180020090;
    if (DAT_180020090 == (FARPROC)0x0) {
      pFVar1 = FUN_180009908(0x12,"LCMapStringEx",(uint *)&DAT_180012638,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180009c43;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}


/* Address: 0x180009c8c; Evidence: ev_760879a11d2cb2a85fc43e6f8b65e873c5f2bd78d7d0f83018fbee918adde409 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180009c8c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_1800200a0 == (FARPROC)0xffffffffffffffff) {
LAB_180009cdb:
    FUN_18000c5ec(param_1);
  }
  else {
    pFVar1 = DAT_1800200a0;
    if (DAT_1800200a0 == (FARPROC)0x0) {
      pFVar1 = FUN_180009908(0x14,"LocaleNameToLCID",(uint *)&DAT_180012650,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180009cdb;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}


/* Address: 0x180009cf0; Evidence: ev_0fd01e8516600f29fb0c38bd56587077595e4399b51263f71da855d553a5aad2 */

bool FUN_180009cf0(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_180020000,0x100,2,local_res8);
  return BVar1 != 0;
}


/* Address: 0x180009d20; Evidence: ev_681b03e60a10ab652ca432b0a6b26eab23610bd498aa6ec9e051472a9c5c9908 */

bool FUN_180009d20(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_180020018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_180020018 == 0;
    if (!bVar2) goto LAB_180009d5a;
    pFVar1 = FUN_180009908(3,"FlsGetValue2",(uint *)&DAT_180012620,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_180009d5a:
  return !bVar2;
}


/* Address: 0x180009d70; Evidence: ev_fdaceca6e51b364ebb8a9277a2386a3ffa1bc23d560ae3c91cf814db8b068a54 */

/* Library Function - Single Match
    __acrt_uninitialize_winapi_thunks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_winapi_thunks(char param_1)

{
  HMODULE hLibModule;
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  if (param_1 == '\0') {
    puVar1 = &DAT_18001c690;
    do {
      hLibModule = (HMODULE)*puVar1;
      if (hLibModule != (HMODULE)0x0) {
        if (hLibModule != (HMODULE)0xffffffffffffffff) {
          FreeLibrary(hLibModule);
        }
        *puVar1 = 0;
      }
      puVar1 = puVar1 + 1;
      in_RAX = &DAT_18001c748;
    } while (puVar1 != &DAT_18001c748);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180009dd0; Evidence: ev_d7e603f8606f7f7ddc3545b3bd9867f3907b5ed2d2c55dd59dac15b7b3a7fd51 */

bool FUN_180009dd0(void)

{
  DAT_18001c748 = GetProcessHeap();
  return DAT_18001c748 != (HANDLE)0x0;
}


/* Address: 0x180009e00; Evidence: ev_ae880d7f7142a8a49cd4f76ef85d27722d7fb87fe62d2680d3aa79b11f8b926c */

undefined1 FUN_180009e00(void)

{
  DAT_18001c748 = 0;
  return 1;
}


/* Address: 0x180009e28; Evidence: ev_b9f4e6336ee655b694ba849556f82556b10f3392bea3af052343b4205c17d29f */

void FUN_180009e28(void)

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
  
  FUN_18000eb90((undefined1 (*) [32])&local_78,0,0x68);
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
    if ((int)DAT_18001cb50 < (int)uVar7) {
      uVar7 = DAT_18001cb50;
    }
    uVar8 = (ulonglong)uVar7;
    if (uVar7 != 0) {
      do {
        if ((((*(longlong *)pbVar4 != -1) && (*(longlong *)pbVar4 != -2)) && ((*puVar6 & 1) != 0))
           && (((*puVar6 & 8) != 0 || (DVar2 = GetFileType(*(HANDLE *)pbVar4), DVar2 != 0)))) {
          uVar3 = (ulonglong)((uint)lVar5 & 0x3f);
          lVar1 = (&DAT_18001c750)[lVar5 >> 6];
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


/* Address: 0x180009f28; Evidence: ev_a6aad3b2949de6c4a128f0537dd06cf38c9c0006ef286b7983eee4e5dd642314 */

void FUN_180009f28(void)

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
    lVar2 = (&DAT_18001c750)[(longlong)(int)uVar5 >> 6];
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
          goto LAB_18000a006;
        }
      }
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x40;
      *(undefined8 *)(lVar2 + 0x28 + uVar4 * 0x48) = 0xfffffffffffffffe;
      if (DAT_18001cb88 != 0) {
        *(undefined4 *)(*(longlong *)(lVar6 + DAT_18001cb88) + 0x18) = 0xfffffffe;
      }
    }
    else {
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x80;
    }
LAB_18000a006:
    uVar5 = uVar5 + 1;
    lVar6 = lVar6 + 8;
    if (uVar5 == 3) {
      return;
    }
  } while( true );
}


/* Address: 0x18000a030; Evidence: ev_3a107f52bae164289cf18eae85919afa26819fed25a3291781791a6be026d8b9 */

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
    FUN_180009e28();
    FUN_180009f28();
  }
  __acrt_unlock(7);
  return bVar2;
}


/* Address: 0x18000a070; Evidence: ev_4f2e97f88da1840f9a17fcf6f5506b68b3566270562b3aa7b1de5249d4e2e2c4 */

/* Library Function - Single Match
    __acrt_uninitialize_lowio
   
   Library: Visual Studio 2019 Release */

undefined1 __acrt_uninitialize_lowio(void)

{
  ulonglong uVar1;
  
  uVar1 = 0;
  do {
    if (*(LPCRITICAL_SECTION *)((longlong)&DAT_18001c750 + uVar1) != (LPCRITICAL_SECTION)0x0) {
      __acrt_lowio_destroy_handle_array(*(LPCRITICAL_SECTION *)((longlong)&DAT_18001c750 + uVar1));
      *(undefined8 *)((longlong)&DAT_18001c750 + uVar1) = 0;
    }
    uVar1 = uVar1 + 8;
  } while (uVar1 < 0x400);
  return 1;
}


/* Address: 0x18000a0b0; Evidence: ev_8aa38ab991b88108cdbc9712138bed06c66a424c761260b070a74f05e8155dc9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000a0b0(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x18000a130; Evidence: ev_f9d32337da73aa7a77df128c2f407c5e38a214021493c23e35f4651da1c89638 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000a130(longlong param_1,longlong param_2)

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


/* Address: 0x18000a16c; Evidence: ev_7db2e75b1cf0e99fba4fa53f5bbe4320a33510ecbdd022a5260ce782c7f65eff */

ulonglong FUN_18000a16c(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_18001b000 & 0x3f;
  uVar2 = DAT_18001cb68 ^ DAT_18001b000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18000a1b4; Evidence: ev_7eb93c35d944608e4e5d4da80a8b07e35e060472c3b67fd708231ac50d1ee568 */

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
  FUN_18000a16c(local_res8,local_res18,local_res8,local_res10);
  return;
}


/* Address: 0x18000a1e4; Evidence: ev_04209ee80fa985236b57475896b878a8f7c1fb490dd92763dda552845428cbbf */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000a1e4(undefined8 param_1)

{
  _DAT_18001cb58 = param_1;
  _DAT_18001cb60 = param_1;
  DAT_18001cb68 = param_1;
  _DAT_18001cb70 = param_1;
  return;
}


/* Address: 0x18000a204; Evidence: ev_12595743a2e0828c57cd5a668ea418d549db93cb22dbc7d607b62c168a00f345 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000a204(uint param_1)

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
LAB_18000a25b:
    if (param_1 == 2) {
      puVar8 = (ulonglong *)&DAT_18001cb58;
    }
    else if (param_1 == 6) {
LAB_18000a2fd:
      puVar8 = &DAT_18001cb68;
      p_Var9 = p_Var10;
    }
    else if (param_1 == 0xf) {
      puVar8 = (ulonglong *)&DAT_18001cb70;
    }
    else if (param_1 == 0x15) {
      puVar8 = (ulonglong *)&DAT_18001cb60;
      p_Var9 = p_Var10;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000a2fd;
      puVar8 = (ulonglong *)0x0;
      p_Var9 = p_Var10;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18000a28b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000a2dd;
      }
      goto LAB_18000a25b;
    }
LAB_18000a28b:
    p_Var9 = FUN_1800077a8();
    if (p_Var9 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar4 = *(longlong *)p_Var9;
    lVar2 = lVar4 + 0xc0;
    for (; lVar4 != lVar2; lVar4 = lVar4 + 0x10) {
      if (*(uint *)(lVar4 + 4) == param_1) goto LAB_18000a2d8;
    }
    lVar4 = 0;
LAB_18000a2d8:
    if (lVar4 == 0) {
LAB_18000a2dd:
      p_Var9 = FUN_1800072a4();
      *(undefined4 *)p_Var9 = 0x16;
      FUN_180005fec();
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
    bVar6 = (byte)DAT_18001b000 & 0x3f;
    pcVar7 = (code *)(((ulonglong)pcVar7 ^ DAT_18001b000) >> bVar6 |
                     ((ulonglong)pcVar7 ^ DAT_18001b000) << 0x40 - bVar6);
  }
  if (pcVar7 == (code *)0x1) goto LAB_18000a3e6;
  if (pcVar7 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_1800065f4(3);
    pcVar7 = (code *)swi(3);
    uVar5 = (*pcVar7)();
    return uVar5;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar4 = *(longlong *)(p_Var9 + 8);
    *(longlong *)(p_Var9 + 8) = 0;
    if (param_1 == 8) {
      lVar2 = FUN_180007748();
      local_res10 = *(undefined4 *)(lVar2 + 0x10);
      lVar2 = FUN_180007748();
      *(undefined4 *)(lVar2 + 0x10) = 0x8c;
      goto LAB_18000a39e;
    }
  }
  else {
LAB_18000a39e:
    if (param_1 == 8) {
      lVar2 = *(longlong *)p_Var9;
      for (lVar3 = lVar2 + 0x30; lVar3 != lVar2 + 0xc0; lVar3 = lVar3 + 0x10) {
        *(undefined8 *)(lVar3 + 8) = 0;
      }
      goto LAB_18000a3e6;
    }
  }
  *puVar8 = DAT_18001b000;
LAB_18000a3e6:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar7 != (code *)0x1) {
    if (param_1 == 8) {
      lVar2 = FUN_180007748();
      (*pcVar7)(8,*(undefined4 *)(lVar2 + 0x10));
    }
    else {
      (*pcVar7)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var9 + 8) = lVar4, param_1 == 8)) {
      lVar4 = FUN_180007748();
      *(undefined4 *)(lVar4 + 0x10) = local_res10;
    }
  }
  return 0;
}


/* Address: 0x18000a460; Evidence: ev_9b69f5d02d57b6a53602492cc6a61962ba2a08f7513a27c5dda0977216d8ee8e */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18000a460(undefined8 param_1)

{
  _DAT_18001cb78 = param_1;
  return;
}


/* Address: 0x18000a468; Evidence: ev_a80e0715011242bab4dd4e61ef6e9f23c0025370ff66ac092f528b9f8fdf1e9e */

void FUN_18000a468(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  uint uVar1;
  int iVar2;
  
  FUN_18000a92c(*param_2);
  if ((*(longlong *)*param_3 != 0) &&
     (uVar1 = *(uint *)(*(longlong *)*param_3 + 0x14), (uVar1 >> 0xd & 1) != 0)) {
    if (((((byte)uVar1 & 3) == 2) && ((uVar1 & 0xc0) != 0)) || ((uVar1 >> 0xb & 1) != 0)) {
      if ((*(char *)param_3[2] != '\0') || ((*(uint *)(*(longlong *)*param_3 + 0x14) >> 1 & 1) != 0)
         ) {
        iVar2 = FUN_18000a6d4(*(int **)*param_3);
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
  FUN_18000a938(*param_4);
  return;
}


/* Address: 0x18000a504; Evidence: ev_f89d1f2822d1dfb22f65fa65b4359f88c540df841dc4965a417c1028388f8fa6 */

void FUN_18000a504(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  plVar1 = DAT_18001cb88 + DAT_18001cb80;
  for (plVar3 = DAT_18001cb88; local_40 = plVar3, plVar3 != plVar1; plVar3 = plVar3 + 1) {
    local_58 = *plVar3;
    if ((local_58 != 0) && (uVar2 = *(uint *)(local_58 + 0x14), (uVar2 >> 0xd & 1) != 0)) {
      if (((((byte)uVar2 & 3) == 2) && ((uVar2 & 0xc0) != 0)) || ((uVar2 >> 0xb & 1) != 0)) {
        local_20 = param_3[2];
        local_28 = param_3[1];
        local_30 = *param_3;
        local_38 = &local_58;
        local_50 = local_58;
        local_48 = local_58;
        FUN_18000a468(local_res10,&local_48,&local_38,&local_50);
      }
      else {
        *(int *)*param_3 = *(int *)*param_3 + 1;
      }
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000a5e8; Evidence: ev_11e4d3aad098209cd6cc5f30a3f1932904258c11a0b0d1b85aaff66aacb811ce */

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
  FUN_18000a504(local_res10,local_28 + 1,&local_20,local_28);
  if (local_res8[0] != '\0') {
    local_res18[0] = local_res20[0];
  }
  return local_res18[0];
}


/* Address: 0x18000a648; Evidence: ev_bd848bfc7e61a0dae195dddf4fdae2a92f3196a1918640ad1fd13f954dab5970 */

undefined8 FUN_18000a648(int *param_1,longlong *param_2)

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
      uVar2 = FUN_18000aeb4((longlong)param_1);
      uVar2 = FUN_18000d304(uVar2,pauVar1,uVar3,param_2);
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


/* Address: 0x18000a6d4; Evidence: ev_51e0a030a91f506966c4a30617e6188548c8268c8b4a69720e987885295a6490 */

int FUN_18000a6d4(int *param_1)

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
  local_20 = DAT_18001c3cc == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_18001b1f8;
    puStack_28 = PTR_DAT_18001b200;
  }
  if (param_1 == (int *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_18000a759;
  }
  uVar2 = FUN_18000a648(param_1,local_48);
  if ((int)uVar2 == 0) {
    if (((uint)param_1[5] >> 0xb & 1) != 0) {
      iVar1 = FUN_18000aeb4((longlong)param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_18000a734;
    }
    iVar1 = 0;
  }
  else {
LAB_18000a734:
    iVar1 = -1;
  }
LAB_18000a759:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_180005c00(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_180005c00(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}


/* Address: 0x18000a7a8; Evidence: ev_fa3b9a8d11dabf6a19c7eed393188af340faccb0f902484a4a88002047467ef3 */

int __cdecl common_flush_all(bool param_1)

{
  int iVar1;
  
  iVar1 = common_flush_all(true);
  return iVar1;
}


/* Address: 0x18000a7b0; Evidence: ev_7604fc86fdc32e742aeb0d43d8ddcad033d1818f38981ef7e75ec4c9e2ceaf75 */

undefined8 FUN_18000a7b0(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_18001cb80 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_18001cb80) goto LAB_18000a7ed;
  }
  DAT_18001cb80 = iVar4;
LAB_18000a7ed:
  DAT_18001cb88 = _calloc_base((longlong)DAT_18001cb80,8);
  FUN_180007bd0((LPVOID)0x0);
  if (DAT_18001cb88 == (LPVOID)0x0) {
    DAT_18001cb80 = 3;
    DAT_18001cb88 = _calloc_base(3,8);
    FUN_180007bd0((LPVOID)0x0);
    if (DAT_18001cb88 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_18001b768;
  puVar6 = &DAT_18001b750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_18001cb88) = puVar6;
    if (*(longlong *)((&DAT_18001c750)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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


/* Address: 0x18000a8d0; Evidence: ev_8b038473e9a1567d8d866933f19bce90a10caa781facb27fb535d1a25117b8ff */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_18000d754();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_18001cb88));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_18001cb88) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_180007bd0(DAT_18001cb88);
  DAT_18001cb88 = (LPVOID)0x0;
  return;
}


/* Address: 0x18000a92c; Evidence: ev_f77a859402b4fbe728a8679d3fadcf9ace334b0b9f17a0fb58c6d4e560d6eb12 */

void FUN_18000a92c(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000a930. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x18000a938; Evidence: ev_a30fd12b444774b111d53c0c88aa503398ae14c3e1c4d3a1f11e4b116501c1de */

void FUN_18000a938(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000a93c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x18000a944; Evidence: ev_0d6a7dc2b28520e5752855bf3a7d0c2f350bd6529b8e36dc157059e058eef6e7 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_18000a944(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_18001cba0 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_1800070a0(param_4);
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
              (iVar3 = FUN_1800095d8(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_1800095d8(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_18000acb4(param_1,param_2,param_3,(uint *)&DAT_18001cba0,(longlong)param_4);
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


/* Address: 0x18000aabc; Evidence: ev_2c01c85af2070bd32992bae87844225e94ed2d8f64158e95c78b25591bb0c6cb */

ulonglong FUN_18000aabc(byte *param_1)

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


/* Address: 0x18000aaf4; Evidence: ev_1e4eab4626a7a9b865e05c04a3396a708190ff06684026dc1149c19edcbe62a5 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000aaf4(ulonglong param_1,byte *param_2,ulonglong param_3,uint *param_4,
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
  
  local_48 = DAT_18001b000 ^ (ulonglong)auStack_78;
  puVar5 = (uint *)&DAT_18001cba8;
  if (param_4 != (uint *)0x0) {
    puVar5 = param_4;
  }
  pbVar6 = (byte *)0x180010d42;
  uVar2 = 1;
  if (param_2 != (byte *)0x0) {
    pbVar6 = param_2;
    uVar2 = param_3;
  }
  puVar10 = (uint *)(-(ulonglong)(param_2 != (byte *)0x0) & param_1);
  if (uVar2 == 0) {
LAB_18000ab56:
    uVar2 = 0xfffffffffffffffe;
  }
  else {
    if (*(short *)((longlong)puVar5 + 6) == 0) {
      uVar3 = FUN_18000aabc(pbVar6);
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
LAB_18000abe1:
        uVar9 = (ulonglong)bVar7;
        uVar3 = uVar9;
        if (uVar2 <= uVar9) {
          uVar3 = uVar2;
        }
        while ((ulonglong)((longlong)pbVar6 - (longlong)param_2) < uVar3) {
          bVar1 = *pbVar6;
          pbVar6 = pbVar6 + 1;
          if ((bVar1 & 0xc0) != 0x80) goto LAB_18000ac8a;
          uVar4 = bVar1 & 0x3f | uVar4 << 6;
        }
        if (uVar3 < uVar9) {
          *(ushort *)(puVar5 + 1) = (ushort)uVar8 & 0xff;
          *(ushort *)((longlong)puVar5 + 6) = (ushort)(byte)(bVar7 - (char)uVar3);
          *puVar5 = uVar4;
          goto LAB_18000ab56;
        }
        if ((0x7ff < uVar4 - 0xd800) && (uVar4 < 0x110000)) {
          auStack_60[2] = 0x80;
          auStack_60[3] = 0x800;
          auStack_60[4] = 0x10000;
          if (auStack_60[uVar8 & 0xff] <= uVar4) {
            if (puVar10 != (uint *)0x0) {
              *puVar10 = uVar4;
            }
            uVar2 = FUN_18000d8ac(-(ulonglong)(uVar4 != 0) & uVar9,(undefined8 *)puVar5);
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
      if ((((byte)(bVar1 - 2) < 3) && (bVar7 != 0)) && (bVar7 < bVar1)) goto LAB_18000abe1;
    }
LAB_18000ac8a:
    uVar2 = FUN_18000d8b4((undefined8 *)puVar5,param_5);
  }
  return uVar2;
}


/* Address: 0x18000acb4; Evidence: ev_a90262ad4d14674651ae4aa243ce0d55e79b3acf8959d24b1fbd93b9873ae767 */

void FUN_18000acb4(undefined2 *param_1,byte *param_2,ulonglong param_3,uint *param_4,
                  longlong param_5)

{
  ulonglong uVar1;
  uint local_18 [4];
  
  local_18[0] = 0;
  uVar1 = FUN_18000aaf4((ulonglong)local_18,param_2,param_3,param_4,param_5);
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


/* Address: 0x18000acfc; Evidence: ev_af13d25ce296c912eae806f1674d0dac9cf39e654f31706323436d11f22e54ad */

byte * FUN_18000acfc(ushort *param_1,undefined8 *param_2,ulonglong param_3,uint *param_4,
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
      uVar5 = FUN_18000aaf4(0,pbVar4,uVar5,param_4,param_5);
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
      uVar5 = FUN_18000aaf4((ulonglong)local_res8,pbVar4,uVar5,param_4,param_5);
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


/* Address: 0x18000aeb4; Evidence: ev_aeab362c048a2b48a4bf86b6a3f918a2ab731461818ab8ece9138cec6bfa0896 */

undefined4 FUN_18000aeb4(longlong param_1)

{
  undefined4 uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 == 0) {
    p_Var2 = FUN_1800072a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_180005fec();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}


/* Address: 0x18000aedc; Evidence: ev_3a68c453353ce0f909513adb765e35305b503be163119715bfc63bbe983eb5d3 */

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
    if (((undefined *)puVar2[-2] != &DAT_18001b208) &&
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


/* Address: 0x18000af68; Evidence: ev_c4e8e3d451c2a87ad28f2629439b6160163962fd44660f871a3469d57aabcec6 */

/* Library Function - Single Match
    __acrt_free_locale
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_free_locale(longlong param_1)

{
  int *piVar1;
  longlong lVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  
  if ((((*(undefined ***)(param_1 + 0xf8) != (undefined **)0x0) &&
       (*(undefined ***)(param_1 + 0xf8) != &PTR_DAT_18001b860)) &&
      (*(int **)(param_1 + 0xe0) != (int *)0x0)) && (**(int **)(param_1 + 0xe0) == 0)) {
    piVar1 = *(int **)(param_1 + 0xf0);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_180007bd0(piVar1);
      __acrt_locale_free_monetary(*(longlong *)(param_1 + 0xf8));
    }
    piVar1 = *(int **)(param_1 + 0xe8);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_180007bd0(piVar1);
      __acrt_locale_free_numeric(*(longlong **)(param_1 + 0xf8));
    }
    FUN_180007bd0(*(LPVOID *)(param_1 + 0xe0));
    FUN_180007bd0(*(LPVOID *)(param_1 + 0xf8));
  }
  if ((*(int **)(param_1 + 0x100) != (int *)0x0) && (**(int **)(param_1 + 0x100) == 0)) {
    FUN_180007bd0((LPVOID)(*(longlong *)(param_1 + 0x108) + -0xfe));
    FUN_180007bd0((LPVOID)(*(longlong *)(param_1 + 0x110) + -0x80));
    FUN_180007bd0((LPVOID)(*(longlong *)(param_1 + 0x118) + -0x80));
    FUN_180007bd0(*(LPVOID *)(param_1 + 0x100));
  }
  __acrt_locale_free_lc_time_if_unreferenced(*(undefined ***)(param_1 + 0x120));
  puVar3 = (undefined8 *)(param_1 + 0x128);
  lVar2 = 6;
  puVar4 = (undefined8 *)(param_1 + 0x38);
  do {
    if ((((undefined *)puVar4[-2] != &DAT_18001b208) &&
        (piVar1 = (int *)*puVar4, piVar1 != (int *)0x0)) && (*piVar1 == 0)) {
      FUN_180007bd0(piVar1);
      FUN_180007bd0((LPVOID)*puVar3);
    }
    if (((puVar4[-3] != 0) && (piVar1 = (int *)puVar4[-1], piVar1 != (int *)0x0)) && (*piVar1 == 0))
    {
      FUN_180007bd0(piVar1);
    }
    puVar3 = puVar3 + 1;
    puVar4 = puVar4 + 4;
    lVar2 = lVar2 + -1;
  } while (lVar2 != 0);
  FUN_180007bd0((LPVOID)param_1);
  return;
}


/* Address: 0x18000b0e0; Evidence: ev_d2ded0a00653f79b868eeb659dc8b96c409ecc7a64fd77d7ed2f7fb835971690 */

/* Library Function - Single Match
    __acrt_locale_add_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_add_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180011940)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + 1;
    UNLOCK();
    return iVar2 + 1;
  }
  return 0x7fffffff;
}


/* Address: 0x18000b108; Evidence: ev_4884e5309be45fa58630072488e99f306df32748eae82794c45556dda59bd3cd */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180011940)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_180007bd0(param_1);
  }
  return;
}


/* Address: 0x18000b140; Evidence: ev_e1305fedc6a790893cbd5c3a66de15283edc2a369361d26888dedfee3463d24c */

/* Library Function - Single Match
    __acrt_locale_release_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_release_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_180011940)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + -1;
    UNLOCK();
    return iVar2 + -1;
  }
  return 0x7fffffff;
}


/* Address: 0x18000b168; Evidence: ev_fa33c854bbbc73d03ad03e7188fd4bbddb4011126bcba4eb0f8baed9cc476dad */

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
      if (((undefined *)puVar2[-2] != &DAT_18001b208) &&
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


/* Address: 0x18000b210; Evidence: ev_39f11e9e9a7d21ee199eca308e6fbb19cc22265ef82351209f1a5e30601603d1 */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_180007748();
  if (((DAT_18001b858 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_18001c3d0);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}


/* Address: 0x18000b280; Evidence: ev_bf9b2b8b34c3b05382df88c6217b70be57763e7661e0c1d80c64270625963a1f */

/* Library Function - Single Match
    _updatetlocinfoEx_nolock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** _updatetlocinfoEx_nolock(longlong *param_1,undefined **param_2)

{
  undefined **ppuVar1;
  
  if ((param_2 == (undefined **)0x0) || (param_1 == (longlong *)0x0)) {
    param_2 = (undefined **)0x0;
  }
  else {
    ppuVar1 = (undefined **)*param_1;
    if (ppuVar1 != param_2) {
      *param_1 = (longlong)param_2;
      __acrt_add_locale_ref((longlong)param_2);
      if (((ppuVar1 != (undefined **)0x0) &&
          (__acrt_release_locale_ref((longlong)ppuVar1), *(int *)(ppuVar1 + 2) == 0)) &&
         (ppuVar1 != &PTR_DAT_18001b0a0)) {
        __acrt_free_locale((longlong)ppuVar1);
      }
    }
  }
  return param_2;
}


/* Address: 0x18000b2e8; Evidence: ev_0c970d19965f4c72e34c8d3e88dae7ef6344f95382f10c9c4e47635246650ac2 */

/* Library Function - Single Match
    __acrt_locale_free_monetary
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_monetary(longlong param_1)

{
  if (param_1 != 0) {
    if (*(undefined **)(param_1 + 0x18) != PTR_DAT_18001b878) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x18));
    }
    if (*(undefined **)(param_1 + 0x20) != PTR_DAT_18001b880) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x20));
    }
    if (*(undefined **)(param_1 + 0x28) != PTR_DAT_18001b888) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x28));
    }
    if (*(undefined **)(param_1 + 0x30) != PTR_DAT_18001b890) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x30));
    }
    if (*(undefined **)(param_1 + 0x38) != PTR_DAT_18001b898) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x38));
    }
    if (*(undefined **)(param_1 + 0x40) != PTR_DAT_18001b8a0) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x40));
    }
    if (*(undefined **)(param_1 + 0x48) != PTR_DAT_18001b8a8) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x48));
    }
    if (*(undefined **)(param_1 + 0x68) != PTR_DAT_18001b8c8) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x68));
    }
    if (*(undefined **)(param_1 + 0x70) != PTR_DAT_18001b8d0) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x70));
    }
    if (*(undefined **)(param_1 + 0x78) != PTR_DAT_18001b8d8) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x78));
    }
    if (*(undefined **)(param_1 + 0x80) != PTR_DAT_18001b8e0) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x80));
    }
    if (*(undefined **)(param_1 + 0x88) != PTR_DAT_18001b8e8) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x88));
    }
    if (*(undefined **)(param_1 + 0x90) != PTR_DAT_18001b8f0) {
      FUN_180007bd0(*(undefined **)(param_1 + 0x90));
    }
  }
  return;
}


/* Address: 0x18000b3f4; Evidence: ev_3e0d11847c7bb2d8e3be448a99ad902fe7c8978c6a01b67f12ad5ae31581f25c */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(longlong *param_1)

{
  if (param_1 != (longlong *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_18001b860) {
      FUN_180007bd0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_18001b868) {
      FUN_180007bd0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_18001b870) {
      FUN_180007bd0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_18001b8b8) {
      FUN_180007bd0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_18001b8c0) {
      FUN_180007bd0((undefined *)param_1[0xc]);
    }
  }
  return;
}


/* Address: 0x18000b460; Evidence: ev_da982dca5a3796a2d8520ddaea3f341a7a1470957111ba9246ffd2873df9c4ca */

void FUN_18000b460(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_180007bd0((LPVOID)*param_1);
  }
  return;
}


/* Address: 0x18000b494; Evidence: ev_db741fbc5236a755789dfb574f28af39242b46a9f9aefcbd9bd55a17e4ffe042 */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_18000b460(param_1,7);
    FUN_18000b460(param_1 + 7,7);
    FUN_18000b460(param_1 + 0xe,0xc);
    FUN_18000b460(param_1 + 0x1a,0xc);
    FUN_18000b460(param_1 + 0x26,2);
    FUN_180007bd0((LPVOID)param_1[0x28]);
    FUN_180007bd0((LPVOID)param_1[0x29]);
    FUN_180007bd0((LPVOID)param_1[0x2a]);
    FUN_18000b460(param_1 + 0x2c,7);
    FUN_18000b460(param_1 + 0x33,7);
    FUN_18000b460(param_1 + 0x3a,0xc);
    FUN_18000b460(param_1 + 0x46,0xc);
    FUN_18000b460(param_1 + 0x52,2);
    FUN_180007bd0((LPVOID)param_1[0x54]);
    FUN_180007bd0((LPVOID)param_1[0x55]);
    FUN_180007bd0((LPVOID)param_1[0x56]);
    FUN_180007bd0((LPVOID)param_1[0x57]);
  }
  return;
}


/* Address: 0x18000b59c; Evidence: ev_bc54725b338528a4f1a79f6389dfc6c0a01e271245b1130a1d071fcfc18d1abe */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_18000b59c(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
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
  local_30 = DAT_18001b000 ^ (ulonglong)local_58;
  FUN_180005980(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_1800095d8(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_18000b6f2;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_18000b6da:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18000b6f2;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_18000b6da;
      *puVar6 = 0xcccc;
LAB_18000b688:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_18000b688;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18000b6da;
    *(undefined8 *)(puVar9 + -8) = 0x18000b69e;
    FUN_18000eb90(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x18000b6ba;
    iVar3 = FUN_1800095d8(param_6,1);
    if (iVar3 == 0) goto LAB_18000b6da;
    *(undefined8 *)(puVar9 + -8) = 0x18000b6d4;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x18000b6f2;
    FUN_180007bd0(lpSrcStr[-1] + 0x10);
  }
LAB_18000b6f2:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x18000b711;
  return BVar10;
}


/* Address: 0x18000b730; Evidence: ev_1b4725ef090b9fe9b877b2b3a595561d45852a1705ee21180f2a99b33de19226 */

undefined4 FUN_18000b730(void)

{
  return DAT_18001cbb8;
}


/* Address: 0x18000b740; Evidence: ev_32c5225dab9219c21a3a82b0ce50ef0a3552b1cdb5364b950627dc8636b38a30 */

uint FUN_18000b740(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_18001cbb8;
    DAT_18001cbb8 = param_1;
  }
  else {
    p_Var2 = FUN_1800072a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_180005fec();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}


/* Address: 0x18000b770; Evidence: ev_d2be552254ac4b15f2c669ee23bbc5a3e2c92e12bd0c329c273e01f73f2bf4ab */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000b770(undefined1 *param_1,ulonglong param_2,ulonglong param_3,undefined *param_4)

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
  
  local_58 = DAT_18001b000 ^ (ulonglong)auStack_468;
  if ((((param_1 == (undefined1 *)0x0) && (param_2 != 0)) || (param_3 == 0)) ||
     (param_4 == (undefined *)0x0)) {
    p_Var3 = FUN_1800072a4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_180005fec();
  }
  else {
    FUN_18000d938();
    FUN_18000eb90((undefined1 (*) [32])local_438,0,0x1f0);
    FUN_18000eb90((undefined1 (*) [32])local_248,0,0x1f0);
    if (1 < param_2) {
      local_448 = 0;
      puVar10 = param_1 + (param_2 - 1) * param_3;
LAB_18000b830:
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
LAB_18000b9a0:
        puVar4 = puVar7;
        if (puVar6 < puVar4) {
          do {
            puVar6 = puVar6 + param_3;
            if (puVar4 <= puVar6) goto LAB_18000b9c0;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        else {
LAB_18000b9c0:
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
          goto LAB_18000b9a0;
        }
        if (puVar4 < puVar7) {
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= puVar4) goto LAB_18000ba47;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        else {
LAB_18000ba47:
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= param_1) break;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        if ((longlong)puVar7 - (longlong)param_1 < (longlong)puVar10 - (longlong)puVar6)
        goto LAB_18000ba9d;
        if (param_1 < puVar7) {
          local_438[local_448] = param_1;
          local_248[local_448] = puVar7;
          local_448 = local_448 + 1;
        }
        param_1 = puVar6;
        if (puVar10 <= puVar6) goto LAB_18000b8b3;
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
      goto LAB_18000b8b3;
    }
  }
  return;
LAB_18000ba9d:
  if (puVar6 < puVar10) {
    local_438[local_448] = puVar6;
    local_248[local_448] = puVar10;
    local_448 = local_448 + 1;
  }
  puVar10 = puVar7;
  if (puVar7 <= param_1) {
LAB_18000b8b3:
    local_448 = local_448 + -1;
    if (local_448 < 0) {
      return;
    }
    param_1 = (undefined1 *)local_438[local_448];
    puVar10 = (undefined1 *)local_248[local_448];
  }
  goto LAB_18000b830;
}


/* Address: 0x18000bb10; Evidence: ev_cb0f220ce868583b29f2be6b73613e5021e360255ce452b3c1917f5f6af88a30 */

undefined4 FUN_18000bb10(char *param_1,longlong param_2,longlong param_3,longlong param_4)

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
      goto LAB_18000bb69;
    }
  }
  else if (param_1 == (char *)0x0) goto LAB_18000bb69;
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
      p_Var2 = FUN_1800072a4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_180005fec();
      return 0x22;
    }
    *param_1 = '\0';
  }
LAB_18000bb69:
  p_Var2 = FUN_1800072a4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_180005fec();
  return 0x16;
}


/* Address: 0x18000bc40; Evidence: ev_356b919bfbcaf752db275069c75924dbb641fa3d5367d1e09b18b030e2c7362d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

byte * FUN_18000bc40(byte *param_1,byte *param_2)

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


/* Address: 0x18000bce0; Evidence: ev_ed8f85b2bdd41bdba760fb7d343842d3feb8dfeb44cee3597a34c92dd843af57 */

/* WARNING: Removing unreachable block (ram,0x00018000bf7c) */
/* WARNING: Removing unreachable block (ram,0x00018000bf75) */
/* WARNING: Removing unreachable block (ram,0x00018000bf6e) */
/* WARNING: Removing unreachable block (ram,0x00018000bf67) */
/* WARNING: Removing unreachable block (ram,0x00018000bf60) */
/* WARNING: Removing unreachable block (ram,0x00018000bf59) */
/* WARNING: Removing unreachable block (ram,0x00018000bf52) */
/* WARNING: Removing unreachable block (ram,0x00018000bf4b) */
/* WARNING: Removing unreachable block (ram,0x00018000bf44) */
/* WARNING: Removing unreachable block (ram,0x00018000bf3d) */
/* WARNING: Removing unreachable block (ram,0x00018000bf36) */
/* WARNING: Removing unreachable block (ram,0x00018000bf2f) */
/* WARNING: Removing unreachable block (ram,0x00018000bf28) */
/* WARNING: Removing unreachable block (ram,0x00018000bf21) */
/* WARNING: Removing unreachable block (ram,0x00018000bf1a) */
/* WARNING: Removing unreachable block (ram,0x00018000bddd) */
/* WARNING: Removing unreachable block (ram,0x00018000bdec) */
/* WARNING: Removing unreachable block (ram,0x00018000bdfb) */
/* WARNING: Removing unreachable block (ram,0x00018000be0a) */
/* WARNING: Removing unreachable block (ram,0x00018000be19) */
/* WARNING: Removing unreachable block (ram,0x00018000be25) */
/* WARNING: Removing unreachable block (ram,0x00018000be31) */
/* WARNING: Removing unreachable block (ram,0x00018000be3d) */
/* WARNING: Removing unreachable block (ram,0x00018000be49) */
/* WARNING: Removing unreachable block (ram,0x00018000be55) */
/* WARNING: Removing unreachable block (ram,0x00018000be61) */
/* WARNING: Removing unreachable block (ram,0x00018000be6d) */
/* WARNING: Removing unreachable block (ram,0x00018000be79) */
/* WARNING: Removing unreachable block (ram,0x00018000be85) */
/* WARNING: Removing unreachable block (ram,0x00018000be91) */

byte * FUN_18000bce0(byte *param_1,byte *param_2)

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
        pbVar19 = FUN_18000bc40(param_1,param_2);
        return pbVar19;
      }
      goto LAB_18000bf89;
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
    if (uVar21 == 0 || (ulonglong)uVar2 < 0x10 - uVar21) goto LAB_18000bf89;
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
LAB_18000bf89:
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
  pbVar19 = FUN_18000bc40(param_1,param_2);
  return pbVar19;
}


/* Address: 0x18000c098; Evidence: ev_cf03e8f3bb89689035eb0efac23b5d37e62b6be53b1bfc2d59787c4ed3c84637 */

void FUN_18000c098(uchar *param_1,uchar *param_2)

{
  _mbsdec_l(param_1,param_2,(_locale_t)0x0);
  return;
}


/* Address: 0x18000c0a0; Evidence: ev_81f81f8ca054c589b464437aa97cefdc95babd621bb770a3f8adabcb687975eb */

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
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_180005fec();
  }
  else if (_Start < _Pos) {
    FUN_180005980(local_28,(longlong *)_Locale);
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


/* Address: 0x18000c134; Evidence: ev_8a1b679d75ad2d02bdd6a3da721f742c668ab69d43b5a91afcc8152067b3a5df */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000c134(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
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
  local_30 = DAT_18001b000 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_1800095d8(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar9 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_18000c43f;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_18000c425:
    uVar5 = 0;
    if (pWVar9 != (LPCWSTR)0x0) goto LAB_18000c42c;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_18000c425;
      *puVar6 = 0xcccc;
LAB_18000c240:
      pWVar9 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar9 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_18000c240;
      }
    }
    if (pWVar9 == (LPCWSTR)0x0) goto LAB_18000c425;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
    *(undefined8 *)(puVar12 + -8) = 0x18000c26a;
    iVar2 = FUN_1800095d8(param_8,1);
    if (iVar2 == 0) goto LAB_18000c425;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x18000c29d;
    iVar2 = FUN_180009b98(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    puVar6 = (undefined4 *)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_18000c425;
    if ((param_3 & 0x400) == 0) {
      uVar8 = uVar5 * 2 + 0x10;
      uVar8 = -(ulonglong)(uVar5 * 2 < uVar8) & uVar8;
      if (uVar8 == 0) goto LAB_18000c408;
      if (uVar8 < 0x401) {
        uVar5 = uVar8 + 0xf;
        if (uVar5 <= uVar8) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x18000c340;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar7 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xcccc;
          puVar12 = puVar11;
LAB_18000c36e:
          puVar6 = puVar7 + 4;
          goto LAB_18000c372;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x18000c35e;
        puVar7 = _malloc_base(uVar8);
        puVar6 = (undefined4 *)0x0;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xdddd;
          goto LAB_18000c36e;
        }
LAB_18000c372:
        if (puVar6 != (undefined4 *)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(undefined4 **)(puVar12 + 0x20) = puVar6;
          *(undefined8 *)(puVar12 + -8) = 0x18000c3a4;
          iVar4 = FUN_180009b98(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x18000c3d2;
              uVar3 = FUN_180009668(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18000c408;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x18000c3ec;
              uVar3 = FUN_180009668(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18000c40d;
            }
            uVar5 = (ulonglong)uVar3;
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18000c403;
              FUN_180007bd0(puVar6 + -4);
            }
            goto LAB_18000c42c;
          }
LAB_18000c408:
          if (puVar6 != (undefined4 *)0x0) {
LAB_18000c40d:
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18000c41e;
              FUN_180007bd0(puVar6 + -4);
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
        *(undefined8 *)(puVar12 + -8) = 0x18000c2f5;
        uVar3 = FUN_180009b98(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_18000c42c;
      }
      goto LAB_18000c425;
    }
LAB_18000c42c:
    if (*(int *)(pWVar9 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x18000c43d;
      FUN_180007bd0(pWVar9 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_18000c43f:
  *(undefined8 *)(puVar13 + -8) = 0x18000c44b;
  return uVar5;
}


/* Address: 0x18000c468; Evidence: ev_7c748db050b8875c0ca4ee59597ecba9945511dfbadfee432065742195e45eb7 */

/* Library Function - Single Match
    __acrt_LCMapStringA
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_LCMapStringA(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                        undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong local_28;
  longlong local_20 [2];
  char local_10;
  
  FUN_180005980(&local_28,param_1);
  FUN_18000c134(local_20,param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return;
}


/* Address: 0x18000c500; Evidence: ev_437ace32d9f466b85fa8f12aee571d8c4f237ff37a0365e30c434c93faa06a4a */

uint FUN_18000c500(void)

{
  undefined8 uVar1;
  
  uVar1 = __acrt_initialize_multibyte();
  return (uint)uVar1 & 0xff ^ 1;
}


/* Address: 0x18000c520; Evidence: ev_04dee62cc072411c289689e4172deb7edd3c7e2aaaa0250463ad9f52175535c2 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_180005fec();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000c552. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_18001c748,0,param_1);
  return uVar2;
}


/* Address: 0x18000c570; Evidence: ev_0ceec9312d05efa7d834497d1e51ada1bf5c13e257bdc31524fd7779a52d28a5 */

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
      FUN_180007bd0(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_18001c748,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_18000b730();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_180006060(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      p_Var4 = FUN_1800072a4();
      *(undefined4 *)p_Var4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x18000c5ec; Evidence: ev_76800eeb5557f2b7c696e5898f0a4cc0546e51962c1a8aad461b2093c2897ad0 */

undefined4 FUN_18000c5ec(ushort *param_1)

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
      iVar3 = FUN_18000d8d0(param_1,(ushort *)(&PTR_DAT_180014710)[(longlong)iVar2 * 2],0x55);
      if (iVar3 == 0) {
        iVar5 = *(int *)(&DAT_180014718 + (longlong)iVar2 * 0x10);
        if (iVar5 < 0) {
          return 0;
        }
        if (0xe3 < (ulonglong)(longlong)iVar5) {
          return 0;
        }
        return *(undefined4 *)(&DAT_180012cb0 + (longlong)iVar5 * 0x10);
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


/* Address: 0x18000c694; Evidence: ev_1777ba333071130b467468e5e42be9807d2a5f053b08f95904b541775fc6ee81 */

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
  FUN_180007bd0((LPVOID)0x0);
  return puVar5;
}


/* Address: 0x18000c73c; Evidence: ev_2eb3994e7fecd3e111e93b9f6f148f0266c86815bda0e74367e5a3c9f36987da */

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
    FUN_180007bd0(param_1);
  }
  return;
}


/* Address: 0x18000c78c; Evidence: ev_ccb347fee9692e0860679e3eada21fb73d2559e684da9f428ede6ea488809f39 */

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
    iVar1 = DAT_18001cb50;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_18001c750)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_18001c750)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_18001cb50 + 0x40;
        DAT_18001cb50 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_1800072a4();
    *(undefined4 *)p_Var2 = 9;
    FUN_180005fec();
    lVar3 = 9;
  }
  return lVar3;
}


/* Address: 0x18000c834; Evidence: ev_c8c396942a72c1dd7694dee012e6075645db7ace78da194e03867b97107ffd55 */

void FUN_18000c834(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c854. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x18000c85c; Evidence: ev_b2de8155cb2781d4b82631d83ffbd02044809cf2b1d61c9bd36558a4663b39f9 */

void FUN_18000c85c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c87c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x18000c884; Evidence: ev_455d199b24ce5e25323a291b4b166d6eb30f842cc3717589a8716c5e808e9ae4 */

undefined8 FUN_18000c884(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_18001cb50)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_18000d968();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_18000c904;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_18000c904:
      *(undefined8 *)
       ((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  p_Var3 = FUN_1800072a4();
  *(undefined4 *)p_Var3 = 9;
  p_Var3 = FUN_180007280();
  *(undefined4 *)p_Var3 = 0;
  return 0xffffffff;
}


/* Address: 0x18000c940; Evidence: ev_d51e323d2bb2bde3a779e99c7d60b67085453b5ded1b3ded95508ec1e4f33e45 */

undefined8 FUN_18000c940(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_180007280();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001cb50)) {
      if ((*(byte *)((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_180007280();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_180005fec();
  }
  return 0xffffffffffffffff;
}


/* Address: 0x18000c9b8; Evidence: ev_3ae1b4e2e0e91b30759716c70eb41921c00eb5cadd4e99e15a01949fd2cdb173 */

undefined8 FUN_18000c9b8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_18000c834(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_18001c750)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_18000c940(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_18000ca2f;
    DVar3 = GetLastError();
    p_Var4 = FUN_180007280();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_1800072a4();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_18000ca2f:
  FUN_18000c85c(*param_4);
  return uVar5;
}


/* Address: 0x18000ca44; Evidence: ev_fa09e377fa69ad07f085b5149d2f17611d7a9fae641151812999b5e2571bc1c4 */

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
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_18001cb50)) &&
       ((*(byte *)((&DAT_18001c750)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_18000c9b8(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_180005fec();
  }
  return -1;
}


/* Address: 0x18000cad8; Evidence: ev_fd2ae007ffad78de1f2d0b88697ceccf3a83ef7075105df1857083b3ac3f7f94 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000cad8(DWORD *param_1,uint param_2,undefined1 (*param_3) [32],ulonglong param_4,
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
  local_40 = DAT_18001b000 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar17 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_18001c750)[lVar17] + 0x28 + uVar6 * 0x48);
  local_b8 = (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff));
  local_98 = param_3;
  local_90 = lVar17;
  local_a0 = GetConsoleOutputCP();
  uVar14 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_1800070a0(local_b0);
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
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_18001c750)[local_68]);
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
          cVar1 = (&DAT_18001b900)[(byte)(*param_3)[0]];
          iVar3 = cVar1 + 1;
          lVar17 = (longlong)local_b8 - (longlong)param_3;
          if (lVar17 < iVar3) {
            uVar16 = uVar14;
            if (0 < lVar17) {
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_18001c750)[local_90]) =
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
          pbVar7 = FUN_18000acfc(local_c4,&local_78,(ulonglong)uVar10,local_a8,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + cVar1);
          lVar17 = local_90;
        }
        else {
          cVar1 = (&DAT_18001b900)[*(byte *)((&DAT_18001c750)[lVar17] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar15 = (longlong)local_b8 - (longlong)param_3;
          uVar16 = (ulonglong)iVar3;
          if (lVar15 < (longlong)uVar16) {
            if (0 < lVar15) {
              uVar16 = uVar18;
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_18001c750)[lVar17]) =
                     *(undefined1 *)((longlong)param_3 + (uVar16 - uVar18));
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar15);
            }
            param_1[1] = param_1[1] + (int)lVar15;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_18001c750)[local_68]);
          uVar9 = uVar14;
          do {
            local_58[uVar9] = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          uVar9 = uVar14;
          if (0 < (longlong)uVar16) {
            FUN_18000ef50((undefined1 (*) [32])(local_58 + uVar18),param_3,uVar16);
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_18001c750)[lVar17]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_18000acfc(local_c4,&local_80,(ulonglong)uVar10,local_88,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + (int)(local_a8[0] - 1));
        }
      }
      else {
        lVar15 = (&DAT_18001c750)[lVar17];
        bVar2 = *(byte *)(lVar15 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)(byte)(*param_3)[0] * 2) < 0) {
            pauVar13 = (undefined1 (*) [32])(*param_3 + 1);
            if (local_b8 <= pauVar13) {
              *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48) = (*param_3)[0];
              pbVar7 = (byte *)((&DAT_18001c750)[lVar17] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar16 + 1;
              return param_1;
            }
            iVar3 = FUN_18000a944(local_c4,(byte *)param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_18000cde0;
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
        iVar3 = FUN_18000a944(local_c4,(byte *)pauVar13,uVar16,local_b0);
        pauVar13 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_18000cde0:
      param_3 = (undefined1 (*) [32])(*pauVar13 + 1);
      uVar10 = FUN_180009668(local_a0,0,local_c4,uVar10);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_18000cf39:
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
        if (BVar4 == 0) goto LAB_18000cf39;
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


/* Address: 0x18000cf6c; Evidence: ev_ff3a252bcc9eff73d9cba185e36f86b5f702690fc1a4de3f51b4aeb86de9901f */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000cf6c(DWORD *param_1,uint param_2,char *param_3,ulonglong param_4)

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
  
  local_20 = 0x18000cf84;
  local_28 = DAT_18001b000 ^ (ulonglong)auStackY_1468;
  pcVar5 = param_3 + (param_4 & 0xffffffff);
  hFile = *(HANDLE *)
           ((&DAT_18001c750)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x18000d074; Evidence: ev_ec6962cdc8945b3a0f1b9338787e2611cbc6e1eef4a054da5ea04385b6cd2e14 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000d074(DWORD *param_1,uint param_2,short *param_3,ulonglong param_4)

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
  
  local_20 = 0x18000d08c;
  local_28 = DAT_18001b000 ^ (ulonglong)auStackY_1468;
  psVar5 = (short *)((param_4 & 0xffffffff) + (longlong)param_3);
  hFile = *(HANDLE *)
           ((&DAT_18001c750)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x18000d190; Evidence: ev_4087f6b52458e3d42267e6764bc9dbc31305ea03810bfea66ee28e8ed77c701c */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000d190(DWORD *param_1,uint param_2,short *param_3,uint param_4)

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
  
  local_30 = 0x18000d1ac;
  local_38 = DAT_18001b000 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_18001c750)[(longlong)(int)param_2 >> 6] + 0x28 +
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
    uVar2 = FUN_180009668(0xfde9,0,local_1448,(int)((longlong)psVar8 - (longlong)local_1448 >> 1));
    if (uVar2 == 0) {
LAB_18000d2cd:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_18000d2cd;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)psVar7 - (int)param_3;
  } while( true );
}


/* Address: 0x18000d304; Evidence: ev_b022bc26bdae2345e0b99c9181909c742aa639ca8f64e923bfaa19c4f9162846 */

int FUN_18000d304(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
    if (((int)param_1 < 0) || (DAT_18001cb50 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_18000c834(param_1);
        iVar2 = -1;
        if ((*(byte *)((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          iVar2 = FUN_18000d424(param_1,param_2,param_3,param_4);
        }
        FUN_18000c85c(param_1);
        return iVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_180005f34((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x18000d424; Evidence: ev_cb26e73251584a25f0265d0f35daa741099a4b3d86af6c1a0cdf61817f558f5c */

int FUN_18000d424(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
LAB_18000d454:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_180005f34((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar10 = (ulonglong)(param_1 & 0x3f);
  lVar13 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_18001c750)[lVar13] + 0x39 + uVar10 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_18000d454;
  if ((*(byte *)((&DAT_18001c750)[lVar13] + 0x38 + uVar10 * 0x48) & 0x20) != 0) {
    thunk_FUN_18000d970(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar4 = FUN_18000d84c(param_1);
  if (((int)CONCAT71(extraout_var,bVar4) == 0) ||
     (-1 < *(char *)((&DAT_18001c750)[lVar13] + 0x38 + uVar10 * 0x48))) {
LAB_18000d60c:
    if (-1 < *(char *)((&DAT_18001c750)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar7 = WriteFile(*(HANDLE *)
                         ((&DAT_18001c750)[lVar13] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar12 = local_68;
      uVar3 = local_70;
      if (BVar7 == 0) {
        DVar12 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar12);
        DVar12 = local_68;
        uVar3 = local_70;
      }
      goto LAB_18000d6c1;
    }
    if (cVar1 == '\0') {
      pDVar11 = FUN_18000cf6c((DWORD *)&local_70,param_1,(char *)param_2,uVar14);
    }
    else if (cVar1 == '\x01') {
      pDVar11 = FUN_18000d190((DWORD *)&local_70,param_1,(short *)param_2,param_3);
    }
    else {
      DVar12 = 0;
      uVar3 = local_60;
      if (cVar1 != '\x02') goto LAB_18000d6c1;
      pDVar11 = FUN_18000d074((DWORD *)&local_70,param_1,(short *)param_2,uVar14);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_1800070a0(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_18001c750)[lVar13] + 0x39 + uVar10 * 0x48) == '\0')) goto LAB_18000d60c;
    local_50[0] = 0;
    BVar7 = GetConsoleMode(*(HANDLE *)((&DAT_18001c750)[lVar13] + 0x28 + uVar10 * 0x48),local_50);
    if (BVar7 == 0) goto LAB_18000d60c;
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
            sVar5 = FUN_18000da28(sVar6);
            if (sVar5 != sVar6) {
LAB_18000d5d4:
              DVar8 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar8);
              uVar3 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar9 + 2,(DWORD)local_70);
            iVar2 = iVar9 + 2;
            if (sVar6 == 10) {
              sVar6 = FUN_18000da28(0xd);
              if (sVar6 != 0xd) goto LAB_18000d5d4;
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
      goto LAB_18000d6c1;
    }
    pDVar11 = FUN_18000cad8((DWORD *)&local_70,param_1,param_2,uVar14,param_4);
  }
  DVar12 = pDVar11[2];
  uVar3 = *(undefined8 *)pDVar11;
LAB_18000d6c1:
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
    FUN_18000725c((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_18001c750)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((*param_2)[0] == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}


/* Address: 0x18000d754; Evidence: ev_98e5c7a1bfd6b981a5361544161587101471121d3d27758f2f738537e40ff4e3 */

int FUN_18000d754(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_18001cb80; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_18001cb88 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18000db8c(*(int **)(DAT_18001cb88 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_18001cb88 + lVar4 * 8) + 0x30));
      FUN_180007bd0(*(LPVOID *)(DAT_18001cb88 + lVar4 * 8));
      *(undefined8 *)(DAT_18001cb88 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}


/* Address: 0x18000d808; Evidence: ev_0c00aaaad9449b9ffbba88c0eb4b193b1f5814606d262010b7f1ffb2a418ee90 */

/* Library Function - Single Match
    __acrt_stdio_free_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_free_buffer_nolock(undefined8 *param_1)

{
  if (((*(uint *)((longlong)param_1 + 0x14) >> 0xd & 1) != 0) &&
     ((*(uint *)((longlong)param_1 + 0x14) >> 6 & 1) != 0)) {
    FUN_180007bd0((LPVOID)param_1[1]);
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) & 0xfffffebf;
    UNLOCK();
    param_1[1] = 0;
    *param_1 = 0;
    *(undefined4 *)(param_1 + 2) = 0;
  }
  return;
}


/* Address: 0x18000d84c; Evidence: ev_494058c33f15761ad7365211d13054a5f5639f7f065989826e1accd2cfbe7356 */

byte FUN_18000d84c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001cb50)) {
      return *(byte *)((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_180005fec();
  }
  return 0;
}


/* Address: 0x18000d8ac; Evidence: ev_d898cc4f7bfea2408f20c43f5246f9cd5b0e96cb76fa621f852ece3e29a5b17d */

undefined8 FUN_18000d8ac(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  return param_1;
}


/* Address: 0x18000d8b4; Evidence: ev_77c7e89dbc49a84c5a9cd7f12f95a500273c991f392906117f955c4f677bf89d */

undefined8 FUN_18000d8b4(undefined8 *param_1,longlong param_2)

{
  *param_1 = 0;
  *(undefined1 *)(param_2 + 0x30) = 1;
  *(undefined4 *)(param_2 + 0x2c) = 0x2a;
  return 0xffffffffffffffff;
}


/* Address: 0x18000d8d0; Evidence: ev_743f86254317a2d48d1022246d6b3c0cc148f4b47404fca72db7369a19b2dbe3 */

int FUN_18000d8d0(ushort *param_1,ushort *param_2,longlong param_3)

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


/* Address: 0x18000d938; Evidence: ev_98d2a1613e1c0cc5feea13ed6603497a541938847662cddc2a38ff0bb0dc6ae7 */

void FUN_18000d938(void)

{
  _guard_check_icall();
  return;
}


/* Address: 0x18000d950; Evidence: ev_94e72488a272ade64e154c646270ca9cb32c1cf2830eeb6503ad6282adac63be */

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


/* Address: 0x18000d968; Evidence: ev_5b56712f1831d98c81f5d2d11dd831bfc6d0ce58184ee359323eaf5601e1c2d9 */

undefined4 FUN_18000d968(void)

{
  return DAT_18001cbbc;
}


/* Address: 0x18000d970; Evidence: ev_f7b971066e488fa19d414bf8a18670c3002a47eace7591af1d2c54e2af755759 */

longlong FUN_18000d970(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER local_18 [2];
  
  hFile = (HANDLE)FUN_18000c940(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    local_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,local_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000725c(DVar3,param_4);
    }
    else if (local_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)local_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x18000da20; Evidence: ev_d3ca8dbed99cca8b5242fcbe3325f58ce135f3436638447db3aea7c874786215 */

longlong thunk_FUN_18000d970(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER aLStack_18 [2];
  
  hFile = (HANDLE)FUN_18000c940(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    aLStack_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,aLStack_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000725c(DVar3,param_4);
    }
    else if (aLStack_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)aLStack_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x18000da28; Evidence: ev_131dd94d1c96d894705392762aa72dd65cb4c3f6982597969e7116c233ce0981 */

undefined2 FUN_18000da28(undefined2 param_1)

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


/* Address: 0x18000da68; Evidence: ev_7c20bf1ed4660471be1a4ce2eba889f48ec21c1b19f333d2e6e59e187fd2cea1 */

ulonglong FUN_18000da68(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005f34((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_18000a92c((longlong)param_1);
      uVar1 = FUN_18000dae4(param_1,param_2);
      FUN_18000a938((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_18000df78((undefined8 *)param_1);
  }
  return 0xffffffff;
}


/* Address: 0x18000dae4; Evidence: ev_ef08cadcf4fb44777ca57fd7bd89826a4f0d3edf2e87950fabbaed88ebad0f7e */

ulonglong FUN_18000dae4(int *param_1,longlong *param_2)

{
  uint uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005f34((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
    uVar2 = 0xffffffff;
  }
  else {
    uVar2 = 0xffffffff;
    if (((uint)param_1[5] >> 0xd & 1) != 0) {
      uVar2 = FUN_18000a648(param_1,param_2);
      uVar2 = uVar2 & 0xffffffff;
      __acrt_stdio_free_buffer_nolock((undefined8 *)param_1);
      uVar1 = FUN_18000aeb4((longlong)param_1);
      uVar3 = FUN_18000dde4(uVar1,param_2);
      if ((int)uVar3 < 0) {
        uVar2 = 0xffffffff;
      }
      else if (*(LPVOID *)(param_1 + 10) != (LPVOID)0x0) {
        FUN_180007bd0(*(LPVOID *)(param_1 + 10));
        param_1[10] = 0;
        param_1[0xb] = 0;
      }
    }
    FUN_18000df78((undefined8 *)param_1);
  }
  return uVar2;
}


/* Address: 0x18000db8c; Evidence: ev_4b19ccd66402fa09d52e1258c74a223d1da8b971f944dbb36ef075a923688a4f */

ulonglong FUN_18000db8c(int *param_1)

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
  local_20 = DAT_18001c3cc == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_18001b1f8;
    puStack_28 = PTR_DAT_18001b200;
  }
  uVar1 = FUN_18000da68(param_1,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_180005c00(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_180005c00(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000dc30; Evidence: ev_d8f53a72229cc0ae524cd30a6acf044bda26fb1bb2782f33cd34d3232f25a2ed */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_18001ba00 == (HANDLE)0xfffffffffffffffe) {
    DAT_18001ba00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_18001ba00 != (HANDLE)0xffffffffffffffff;
}


/* Address: 0x18000dc90; Evidence: ev_7d057dfd8dca6438a5811dc5caa4f4868ec1bc981fe67c025c904b140a15958f */

void FUN_18000dc90(void)

{
  if (DAT_18001ba00 < (HANDLE)0xfffffffffffffffe) {
    CloseHandle(DAT_18001ba00);
  }
  return;
}


/* Address: 0x18000dcac; Evidence: ev_72fe803a7d93c75d73c62f6b6153a83b104c432de93284a3f1a939a405ca601c */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_18001ba00,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_18001ba00 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_18001ba00);
      }
      DAT_18001ba00 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_18001ba00,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}


/* Address: 0x18000dd6c; Evidence: ev_40f9285135980a6ab843de2029f0bc14fb7254d55371da6bad202f031f8d585d */

ulonglong FUN_18000dd6c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_18000c834(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_18001c750)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_18000dea8(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18000c85c(*param_4);
  return uVar3;
}


/* Address: 0x18000dde4; Evidence: ev_712e6217e8a4a6d01b50def9126cc9fe9d4be153b051348d62f0c00ad4e2032b */

ulonglong FUN_18000dde4(uint param_1,longlong *param_2)

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
    if (((-1 < (int)param_1) && (param_1 < DAT_18001cb50)) &&
       ((*(byte *)((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + 0x38 +
                  (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0)) {
      local_20 = local_res8;
      local_res20[0] = param_1;
      local_28[0] = param_1;
      local_18 = param_2;
      uVar1 = FUN_18000dd6c(local_res18,local_28,&local_20,local_res20);
      return uVar1;
    }
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
    FUN_180005f34((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  return 0xffffffff;
}


/* Address: 0x18000dea8; Evidence: ev_be60bef20e3dd4ba36769ab55de259aaba829c4c940f0d7340f1f5af896aa6af */

undefined8 FUN_18000dea8(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_18000c940(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_18001c750 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_18001c750 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_18000c940(2);
      lVar4 = FUN_18000c940(1);
      if (lVar4 == lVar3) goto LAB_18000deca;
    }
    hObject = (HANDLE)FUN_18000c940(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_18000df28;
    }
  }
LAB_18000deca:
  DVar2 = 0;
LAB_18000df28:
  FUN_18000c884(param_1);
  *(undefined1 *)
   ((&DAT_18001c750)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000725c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}


/* Address: 0x18000df78; Evidence: ev_9b6adaa46a8b7a48247f5fd1ca920c855264dbbaece456614d8915d1e65771f7 */

undefined4 FUN_18000df78(undefined8 *param_1)

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


/* Address: 0x18000dfa0; Evidence: ev_5da3697ca842b05e3f58264ddca74fb097cd2f9d967efd03d66191001a0baa0b */

/* WARNING: Removing unreachable block (ram,0x00018000e020) */
/* WARNING: Removing unreachable block (ram,0x00018000e012) */
/* WARNING: Removing unreachable block (ram,0x00018000dfb7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_18000dfa0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_18001cbc0 = 0;
  DAT_18001cbc4 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_18001cbc0 = 1;
      DAT_18001cbc4 = 1;
    }
    else {
      _DAT_18001cbc0 = 0;
    }
  }
  if ((_DAT_18001cbc0 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_18001cbc4 = 3;
      _DAT_18001cbc0 = 3;
      return 0;
    }
  }
  return 0;
}


/* Address: 0x18000e054; Evidence: ev_4abbfaf4ee9e28955b524c4fb4100bafc346a009393b40247209d036746f7111 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000e0db) */
/* WARNING: Removing unreachable block (ram,0x00018000e0b8) */

void FUN_18000e054(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18000e1fc();
  if (bVar1) {
    (*DAT_18001cbd0)(&DAT_18001cbe0);
  }
  else {
    do {
    } while (DAT_18001cbe0 != 0);
    LOCK();
    DAT_18001cbe0 = 1;
    UNLOCK();
  }
  FUN_18000e3d0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_18000e3d0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18000e1fc();
  if (bVar1) {
    (*DAT_18001cbd8)(&DAT_18001cbe0);
  }
  else {
    DAT_18001cbe0 = 0;
  }
  return;
}


/* Address: 0x18000e140; Evidence: ev_c2996e4e57a6d459922a906d882ba9afef2e789a1f4a53fb140b711bb399bb38 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000e163) */
/* WARNING: Removing unreachable block (ram,0x00018000e189) */
/* WARNING: Removing unreachable block (ram,0x00018000e195) */
/* WARNING: Removing unreachable block (ram,0x00018000e171) */
/* WARNING: Removing unreachable block (ram,0x00018000e1a0) */
/* WARNING: Removing unreachable block (ram,0x00018000e1b2) */
/* WARNING: Removing unreachable block (ram,0x00018000e1c6) */
/* WARNING: Removing unreachable block (ram,0x00018000e1cf) */
/* WARNING: Removing unreachable block (ram,0x00018000eb10) */
/* WARNING: Removing unreachable block (ram,0x00018000e1e9) */

void FUN_18000e140(void)

{
  return;
}


/* Address: 0x18000e1fc; Evidence: ev_8edddbf5c7722ef11f6774b71570769c6789a5b18806d6bc389a9ee279c67304 */

bool FUN_18000e1fc(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_18001cbc8 != (HMODULE)0x1) {
    if (DAT_18001cbc8 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_18001cbd0 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_18001cbd8;
    }
    DAT_18001cbd8 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_18001cbc8 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_18001cbc8;
      pHVar1 = DAT_18001cbc8;
    }
    DAT_18001cbc8 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}


/* Address: 0x18000e29c; Evidence: ev_76f51b6037a64456ee1d68c6f10098a4b3b2ab80645bc21e34bd4325ec806e1b */

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
    *(undefined8 *)(puVar6 + -8) = 0x18000e2dc;
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


/* Address: 0x18000e334; Evidence: ev_2806900df094948dc7875ce50fb7b2059d0e0180fe2339ec675b73f715ad25a7 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_18000e334(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000210;
  while ((0x1f000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x1f001))) {
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


/* Address: 0x18000e3d0; Evidence: ev_79b7897d21382afd9122bdc7d57b76682847bce3e6c5263b7b367e87a5c23f8e */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

void FUN_18000e3d0(void *param_1,SIZE_T param_2,DWORD param_3,PDWORD param_4)

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
  lpAddress = (void *)FUN_18000e334(&local_28,local_24);
  if (lpAddress == (void *)0x0) {
    *param_4 = 4;
    return;
  }
  if (DAT_18001cbf0 == 0) {
    DAT_18001cbf0 = 1;
    puVar6 = auStack_48;
    if ((local_24[0] & IMAGE_SCN_MEM_WRITE) == 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = auStack_40;
    }
    *(undefined8 *)(puVar6 + -8) = 0x18000e44a;
    DloadMakePermanentImageCommit(lpAddress,(ulonglong)*(uint *)(puVar6 + 0x20));
  }
  if (param_1 == (void *)0x0) {
    if (param_2 != 0) goto LAB_18000e45b;
LAB_18000e48b:
    param_2 = (SIZE_T)*(uint *)(puVar6 + 0x20);
  }
  else {
    puVar2 = puVar6;
    if (param_2 == 0) {
LAB_18000e45b:
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar5 = puVar6 + 8;
      puVar6 = puVar6 + 8;
      puVar2 = puVar5;
      if (param_1 == (void *)0x0) goto LAB_18000e48b;
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
  *(undefined8 *)(puVar6 + -8) = 0x18000e4a4;
  BVar3 = VirtualProtect(lpAddress,param_2,param_3,param_4);
  if (BVar3 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
  }
  return;
}


/* Address: 0x18000e4c8; Evidence: ev_64e37187c28ac497a8502993f73551ebe4f7e59306ea18247d3a28f71cf5a83a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000e4e9) */
/* WARNING: Removing unreachable block (ram,0x00018000e50a) */
/* WARNING: Removing unreachable block (ram,0x00018000e516) */
/* WARNING: Removing unreachable block (ram,0x00018000e519) */
/* WARNING: Removing unreachable block (ram,0x00018000e4f2) */
/* WARNING: Removing unreachable block (ram,0x00018000e524) */
/* WARNING: Removing unreachable block (ram,0x00018000e52d) */
/* WARNING: Removing unreachable block (ram,0x00018000e542) */
/* WARNING: Removing unreachable block (ram,0x00018000e561) */
/* WARNING: Removing unreachable block (ram,0x00018000e54b) */

void FUN_18000e4c8(void)

{
  return;
}


/* Address: 0x18000e580; Evidence: ev_3b146a99e75e9f2dba25facde5ae82f4f90467f172d7815a783f6b42679e8f8d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000e6f4) */
/* WARNING: Removing unreachable block (ram,0x00018000e7ce) */

HMODULE FUN_18000e580(uint *param_1,void *param_2)

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
  
  FUN_18000e140();
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
    FUN_18000e4c8();
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
          FUN_18000e4c8();
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
        FUN_18000e4c8();
        RaiseException(0xc06d007f,0,1,(ULONG_PTR *)&local_res8);
        FUN_18000e140();
        pHVar3 = local_40;
      }
      local_88 = param_2;
      local_80 = pHVar3;
      FUN_18000e054(param_2,8,&local_88);
    }
    local_38 = 0;
    local_48 = hLibModule;
    local_40 = pHVar3;
    FUN_180001000(5,(longlong)local_78);
    FUN_18000e4c8();
  }
  return pHVar3;
}


/* Address: 0x18000e880; Evidence: ev_c4a11d00c5d63d1b917b08a29053bfab575a0c30cc2fc3be11e8bdc9bc03f9b4 */

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


/* Address: 0x18000e8d0; Evidence: ev_2e4f18ac342f2413fa4e856bfdfcc04d295be9b8490618d6e5ce733832b22f6b */

ulonglong FUN_18000e8d0(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_18000e920((short *)&IMAGE_DOS_HEADER_180000000);
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


/* Address: 0x18000e920; Evidence: ev_24eeef81cc6ff105f88916ff679b040c4a874f7862239860abfd69ebce7c94be */

bool FUN_18000e920(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}


/* Address: 0x18000e94c; Evidence: ev_0117a59cc4cabeaf8827cd8bfce8d9057cc73b4db3af87f47f52857bd197fa3c */

undefined8 FUN_18000e94c(undefined8 param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  FUN_18000e96c(param_2,param_4);
  return 1;
}


/* Address: 0x18000e96c; Evidence: ev_e763997161ebadb1b5cb7be7b85c008cf55f1ec1fcdb33f1152c9e3f59d64801 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000e96c(undefined8 param_1,longlong param_2)

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


/* Address: 0x18000e9cc; Evidence: ev_4888991e092883b2d47802ebc34de5937714047955f08ddb53c11eeca30535c0 */

void FUN_18000e9cc(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_18000e96c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x18000ea60; Evidence: ev_17e3aed51414cb71d508db5053d0dabfeef8fa9c9ce4f461dca96a97df354dce */

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


/* Address: 0x18000eab0; Evidence: ev_0b82947a983d355d06c4d21da4d35168da92e6e2f5c43221357c5466c8e36aa3 */

void FUN_18000eab0(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_1800031e4(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_180003868();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_180003868();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_180006f9c();
  }
  return;
}


/* Address: 0x18000eb10; Evidence: ev_9275fe40c6ad6324e5cfe3cb8018f2c3d51cb323ff9cec495fc1353ce9996e2e */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eb10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000eb30; Evidence: ev_608761529b96e89dd628431f31c410af9767561e45eed28f6006477d8fa65c55 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eb10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000eb50; Evidence: ev_7b692da6b81c21209f93e1db8668f8fb059a9d14dd8e024106f720f1f7e8f7f1 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eb10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000eb80; Evidence: ev_3db6a6b8b4951e27fc27b5aeda2abd320f2af58b7c668402de1cf2eda4350c2c */

undefined8 FUN_18000eb80(undefined1 *param_1,undefined1 param_2,longlong param_3,undefined8 param_4)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = param_2;
    param_1 = param_1 + 1;
  }
  return param_4;
}


/* Address: 0x18000eb90; Evidence: ev_2b3acf8ca74e6b52ddac30e06b0ad435ed636c71385c152a4d105d9268d8b272 */

undefined1 (*) [32] FUN_18000eb90(undefined1 (*param_1) [32],byte param_2,ulonglong param_3)

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
    if (DAT_18001b058 < 3) {
      if ((param_3 <= DAT_18001b060) || (((byte)DAT_18001c130 & 2) == 0)) {
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
    else if (((param_3 <= DAT_18001b060) || (DAT_18001b068 < param_3)) ||
            (((byte)DAT_18001c130 & 2) == 0)) {
      auVar12._16_16_ = auVar11;
      auVar12._0_16_ = auVar11;
      lVar10 = ((ulonglong)param_1 & 0x1f) - 0x20;
      pauVar2 = (undefined1 (*) [32])((longlong)param_1 - lVar10);
      uVar5 = param_3 + lVar10;
      if (0x100 < uVar5) {
        if (DAT_18001b068 < uVar5) {
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


/* Address: 0x18000ef40; Evidence: ev_30b75dbee67f0d36884007094af31bd10050dfb61c216a8aed00dc3ef79ebafd */

void FUN_18000ef40(undefined1 *param_1,undefined1 *param_2,longlong param_3)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = *param_2;
    param_2 = param_2 + 1;
    param_1 = param_1 + 1;
  }
  return;
}


/* Address: 0x18000ef50; Evidence: ev_bcaa7f8ca915990ce4d385c6790ebf396dd03ac2ce586cf24323ab992d0eaf4a */

void FUN_18000ef50(undefined1 (*param_1) [32],undefined1 (*param_2) [32],ulonglong param_3)

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
  if (DAT_18001b058 < 3) {
    if ((param_3 < 0x801) || (((byte)DAT_18001c130 & 2) == 0)) {
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
code_r0x00018000ef4b:
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*param_1)[0] = (*param_2)[0];
      param_2 = (undefined1 (*) [32])(*param_2 + 1);
      param_1 = (undefined1 (*) [32])(*param_1 + 1);
    }
    return;
  }
  if (((0x2000 < param_3) && (param_3 < 0x180001)) && (((byte)DAT_18001c130 & 2) != 0))
  goto code_r0x00018000ef4b;
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
        goto switchD_18000f1d6_caseD_0;
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
switchD_18000f1d6_caseD_0:
  *(undefined8 *)*param_1 = uVar10;
  *(undefined8 *)(*param_1 + 8) = uVar11;
  *(undefined8 *)(*param_1 + 0x10) = uVar12;
  *(undefined8 *)(*param_1 + 0x18) = uVar13;
  return;
}


/* Address: 0x18000f5f0; Evidence: ev_b7b1996b54898e056709d20f8d38516cfd19c9fb6c4f350347473451edced56f */

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
    if (((ulonglong)_Str & 7) == 0) goto LAB_18000f621;
    uVar1 = *(ulonglong *)_Str;
    _Str = (char *)((longlong)_Str + 1);
  } while ((char)uVar1 != '\0');
LAB_18000f668:
  return (size_t)(char *)((longlong)_Str + lVar3 + -1);
LAB_18000f621:
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
  goto LAB_18000f668;
}


/* Address: 0x18000f6b0; Evidence: ev_cc0e8fb0673ff3061c9b3787264b8fd228b54eabc93619b9b6461c271de9178c */

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


/* Address: 0x18000f730; Evidence: ev_896c8915262840d8c12c0d30763c3969dc538c3479e8805258c445275944b63a */

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


/* Address: 0x18000f7c0; Evidence: ev_c2687f4c7dfd24c80abc6b0ba83db4b42e0f82b9249f04ccf67942a81b13b50c */

/* Library Function - Single Match
    memcmp
   
   Library: Visual Studio */

int __cdecl memcmp(void *_Buf1,void *_Buf2,size_t _Size)

{
  uint uVar1;
  ulonglong uVar2;
  longlong lVar3;
  ulonglong uVar4;
  bool bVar5;
  
  lVar3 = (longlong)_Buf2 - (longlong)_Buf1;
  if (7 < _Size) {
    for (; ((ulonglong)_Buf1 & 7) != 0; _Buf1 = (void *)((longlong)_Buf1 + 1)) {
      bVar5 = (byte)*(ulonglong *)_Buf1 < *(byte *)((longlong)_Buf1 + lVar3);
      if ((byte)*(ulonglong *)_Buf1 != *(byte *)((longlong)_Buf1 + lVar3)) goto LAB_18000f803;
      _Size = _Size - 1;
    }
    if (_Size >> 3 != 0) {
      uVar4 = _Size >> 5;
      if (uVar4 != 0) {
        do {
          uVar2 = *(ulonglong *)_Buf1;
          if (uVar2 != *(ulonglong *)((longlong)_Buf1 + lVar3)) goto LAB_18000f874;
          uVar2 = *(ulonglong *)((longlong)_Buf1 + 8);
          if (uVar2 != *(ulonglong *)((longlong)_Buf1 + lVar3 + 8)) {
LAB_18000f870:
            _Buf1 = (void *)((longlong)_Buf1 + 8);
            goto LAB_18000f874;
          }
          uVar2 = *(ulonglong *)((longlong)_Buf1 + 0x10);
          if (uVar2 != *(ulonglong *)((longlong)_Buf1 + lVar3 + 0x10)) {
LAB_18000f86c:
            _Buf1 = (void *)((longlong)_Buf1 + 8);
            goto LAB_18000f870;
          }
          uVar2 = *(ulonglong *)((longlong)_Buf1 + 0x18);
          if (uVar2 != *(ulonglong *)((longlong)_Buf1 + lVar3 + 0x18)) {
            _Buf1 = (void *)((longlong)_Buf1 + 8);
            goto LAB_18000f86c;
          }
          _Buf1 = (void *)((longlong)_Buf1 + 0x20);
          uVar4 = uVar4 - 1;
        } while (uVar4 != 0);
        _Size = _Size & 0x1f;
      }
      uVar4 = _Size >> 3;
      if (uVar4 != 0) {
        do {
          uVar2 = *(ulonglong *)_Buf1;
          if (uVar2 != *(ulonglong *)((longlong)_Buf1 + lVar3)) {
LAB_18000f874:
            uVar4 = *(ulonglong *)(lVar3 + (longlong)_Buf1);
            uVar1 = (uint)((uVar2 >> 0x38 | (uVar2 & 0xff000000000000) >> 0x28 |
                            (uVar2 & 0xff0000000000) >> 0x18 | (uVar2 & 0xff00000000) >> 8 |
                            (uVar2 & 0xff000000) << 8 | (uVar2 & 0xff0000) << 0x18 |
                            (uVar2 & 0xff00) << 0x28 | uVar2 << 0x38) <
                          (uVar4 >> 0x38 | (uVar4 & 0xff000000000000) >> 0x28 |
                           (uVar4 & 0xff0000000000) >> 0x18 | (uVar4 & 0xff00000000) >> 8 |
                           (uVar4 & 0xff000000) << 8 | (uVar4 & 0xff0000) << 0x18 |
                           (uVar4 & 0xff00) << 0x28 | uVar4 << 0x38));
            return (1 - uVar1) - (uint)(uVar1 != 0);
          }
          _Buf1 = (void *)((longlong)_Buf1 + 8);
          uVar4 = uVar4 - 1;
        } while (uVar4 != 0);
        _Size = _Size & 7;
      }
    }
  }
  while( true ) {
    if (_Size == 0) {
      return 0;
    }
    bVar5 = (byte)*(ulonglong *)_Buf1 < *(byte *)((longlong)_Buf1 + lVar3);
    if ((byte)*(ulonglong *)_Buf1 != *(byte *)((longlong)_Buf1 + lVar3)) break;
    _Buf1 = (void *)((longlong)_Buf1 + 1);
    _Size = _Size - 1;
  }
LAB_18000f803:
  return (1 - (uint)bVar5) - (uint)(bVar5 != 0);
}


/* Address: 0x18000f890; Evidence: ev_960cb570e0937dcce0f952957643f3bd3e0710fe5640729c74833789ec8280ee */

void FUN_18000f890(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x40));
  return;
}


/* Address: 0x18000f8a7; Evidence: ev_8f8d9104cf52d356f27ec5373192e0a4d53055dacf485c4d31ec2617b5ef0a48 */

void FUN_18000f8a7(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x20));
  return;
}


/* Address: 0x18000f8c0; Evidence: ev_853b536875085a1dd3b0996e76dbd3bf76ee8cd7e29ea5479c6172d0ced48fe4 */

void FUN_18000f8c0(void)

{
  FUN_180002a8c();
  return;
}


/* Address: 0x18000f8d4; Evidence: ev_835e4138e6f150e7ee2372b8465dce5bbbdd237de165f93b059b899af088b501 */

void FUN_18000f8d4(undefined8 *param_1,longlong param_2)

{
  __scrt_dllmain_exception_filter
            (*(undefined8 *)(param_2 + 0x60),*(int *)(param_2 + 0x68),
             *(undefined8 *)(param_2 + 0x70),FUN_1800021a0,*(int *)*param_1,param_1);
  return;
}


/* Address: 0x18000f90a; Evidence: ev_70770d7122d5187bc87f0232d1ebe1fb6024abff8c087428c271c6443d703aae */

bool FUN_18000f90a(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x18000f922; Evidence: ev_f583306008bd3e9418943a0f42cd18d30d4f7731da94f6b4af8f1f719109d50a */

undefined4 FUN_18000f922(undefined8 param_1,longlong param_2)

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
    lVar2 = FUN_180003868();
    *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x28);
    uVar1 = *(undefined8 *)(*(longlong *)(param_2 + 0x30) + 8);
    lVar2 = FUN_180003868();
    *(undefined8 *)(lVar2 + 0x28) = uVar1;
                    /* WARNING: Subroutine does not return */
    FUN_180006f9c();
  }
  *(undefined4 *)(param_2 + 0x20) = 0;
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x18000f9b4; Evidence: ev_813a43bc20b6487c4019f4058c8996dfb5d19cbc0e6232804f4ea3e2b9fccf0e */

undefined4 FUN_18000f9b4(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180003868();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180003868();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180003868();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_180005020((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_180003868();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x18000fa5b; Evidence: ev_742429a3d2767054775f35e4da9e46bf3fa73431cccb550b9e1f2ccffebf1daa */

void FUN_18000fa5b(undefined8 *param_1,longlong param_2)

{
  FUN_1800054ac(param_1,*(longlong *)(param_2 + 0xb8),(undefined4 *)(param_2 + 0x20));
  return;
}


/* Address: 0x18000fa7c; Evidence: ev_7318139d94536763bfb691b414f9ead8a9d4e3ae35990d009555744d55cf3c4e */

void FUN_18000fa7c(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_180003eec(*(longlong *)(param_2 + 0x38));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xb8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_180003610(piVar1);
    }
  }
  lVar2 = FUN_180003868();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0xc0);
  lVar2 = FUN_180003868();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x40);
  return;
}


/* Address: 0x18000fb02; Evidence: ev_5fcec946aa336df74fb02f7361dcbf286e9e74d0155ba6da2ddb3d8f586d0d62 */

void FUN_18000fb02(undefined8 *param_1)

{
  FUN_1800036e0(param_1);
  return;
}


/* Address: 0x18000fb18; Evidence: ev_b8730a6dae09d191be03065c0ac7a007bfe07c1dcef1bdb92e90dd5f7e5e5957 */

void FUN_18000fb18(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180003868();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180003868();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x18000fb40; Evidence: ev_45d463256d52d91f07abfc1b9add0d8d89961668a13bccf0506d82bb8b90ceca */

void FUN_18000fb40(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x18000fb56; Evidence: ev_ce2c453bbda476d2f4437e70705618442842f71cb04feb84933fff2d63f0478b */

void FUN_18000fb56(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x18000fb6c; Evidence: ev_3304b4a7ef7adfc9ef29fcb94eaf5a5ac7feff045aa037f398be1e4816dbd3f5 */

void FUN_18000fb6c(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000fb86; Evidence: ev_a2f60df10f4362e4facb91bf0c8fe9fe509b85c77150f0062251b8822c94422e */

undefined4 FUN_18000fb86(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x18000fbb3; Evidence: ev_b3afd6515370ff52221587d8cf14adf0b9fb7e68474dea838f3bd36361210065 */

void FUN_18000fbb3(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x58));
  return;
}


/* Address: 0x18000fbcd; Evidence: ev_adfa4ca18ea7699458ad113f146b69948133cf703b2e19e505df4254407b51c9 */

void FUN_18000fbcd(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x68));
  return;
}


/* Address: 0x18000fbe7; Evidence: ev_e7aa26298132c00d4acdde3da28a46018c63c2192351f4c3bff0285d1ee0b8f6 */

void FUN_18000fbe7(void)

{
  __acrt_unlock(5);
  return;
}


/* Address: 0x18000fc00; Evidence: ev_b0174b6c5370dfbbcf9e7df28638a10a47a8111a4a95994e082795bea2c84759 */

void FUN_18000fc00(void)

{
  __acrt_unlock(7);
  return;
}


/* Address: 0x18000fc19; Evidence: ev_d08ee24522531609810dfd6d5cc851ce6746bf8108be359e66c0cc02a1405601 */

void FUN_18000fc19(undefined8 param_1,longlong param_2)

{
  if (*(char *)(param_2 + 0x70) != '\0') {
    __acrt_unlock(3);
  }
  return;
}


/* Address: 0x18000fc3a; Evidence: ev_d71825f30dcb03ae345f9abfd9f532b3a83c4294f06a6506679e1323f33a0aad */

void FUN_18000fc3a(undefined8 param_1,longlong param_2)

{
  FUN_18000a938(**(longlong **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000fc55; Evidence: ev_52824adf12883ca8f137c2afa489dc2d50d56e5c68c80736d6990a4d09a801c3 */

void FUN_18000fc55(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x98));
  return;
}


/* Address: 0x18000fc72; Evidence: ev_bc6b1a592a794e3fcfc8f8902cb980f15cfc03b4f7785235ee24c008a5e6cb87 */

void FUN_18000fc72(void)

{
  __acrt_unlock(4);
  return;
}


/* Address: 0x18000fc8b; Evidence: ev_ee7dad19b846fc0bc3531d79280656b36c344dadf6962f2c8b215d9ebacf0a3f */

void FUN_18000fc8b(undefined8 param_1,longlong param_2)

{
  FUN_18000c85c(**(uint **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000fca5; Evidence: ev_1571ccb92edb89b74e20f8cff35eb69af83e26f43fb3e0ef5c45f3a11a5fe6cb */

void FUN_18000fca5(undefined8 param_1,longlong param_2)

{
  FUN_18000c85c(*(uint *)(param_2 + 0x60));
  return;
}


/* Address: 0x18000fcbc; Evidence: ev_6260d030ee924ddca66d40c0bd0245c92a097324252496f76bef4698e5a364cb */

void FUN_18000fcbc(void)

{
  __acrt_unlock(8);
  return;
}


/* Address: 0x18000fcd5; Evidence: ev_f9f35740e13e6cc5282b3cb92ad44e6778f07725d485baf2a6a2441a69f5925d */

void FUN_18000fcd5(undefined8 param_1,longlong param_2)

{
  FUN_18000a938(*(longlong *)(param_2 + 0x40));
  return;
}


/* Address: 0x18000fcf0; Evidence: ev_971730a2ce758537aee37ebf804183ded7ab03ec50d36a858ce7c2f5313750c9 */

bool FUN_18000fcf0(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}

