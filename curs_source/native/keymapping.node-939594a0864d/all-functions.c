/* REA / Ghidra decompiler-generated pseudocode. Not original source; not compilable. */

/* Address: 0x180001000; Evidence: ev_63bb06924943c60c7b888e7bb1cb0c5a58bab3264830f3b1d1a080973dbb0113 */

HMODULE FUN_180001000(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_180007ca0(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
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


/* Address: 0x180001050; Evidence: ev_9d4c51bdbd0c32b598c4b83a98f4fef2b8ed4fd18f9b885f8ae00dda916d00f8 */

char * FUN_180001050(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x180001070; Evidence: ev_3be3173e102f6f10487d4d6bd85da23f2bcf027b72591b9f3248a91096c273ba */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001070(longlong *param_1)

{
  if (DAT_1800281a0 != 0) {
    (*(code *)DAT_1800281a0)();
  }
  (**(code **)(*param_1 + 0x10))();
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}


/* Address: 0x1800010c0; Evidence: ev_6713838397ca4358cd1389fe9f1cacf3b0931fbb7204c9a4ba5a5cc2e5b473c6 */

void _guard_check_icall(void)

{
  return;
}


/* Address: 0x1800010d0; Evidence: ev_eb0d8b58c4f5e4ed5d4d35262115e03312abbc85a4587197d1ead5be969afef9 */

undefined8 * FUN_1800010d0(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = &PTR_FUN_180022ad0;
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000bff0(param_1);
  }
  return param_1;
}


/* Address: 0x180001100; Evidence: ev_222b94d6a1b21f3c93ed2ee623c82fa5e1991301d8045c91c4fdf4ffe1024641 */

void FUN_180001100(void)

{
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}


/* Address: 0x180001120; Evidence: ev_ca5ff55bd7be63f0480d36aca9840818512d1f397a8ae3572076865e22221edb */

undefined8 * FUN_180001120(undefined8 *param_1)

{
  param_1[1] = "bad array new length";
  *param_1 = &PTR_FUN_180022ae8;
  return param_1;
}


/* Address: 0x180001140; Evidence: ev_30a952a482c755fa7f9ad93d645eebfb4b10af059f4e26481b07a8f271929cef */

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


/* Address: 0x180001160; Evidence: ev_34ada58f85f3b63a4662ba8664055b0acd0287394ea60972a6c3368b3aacb74d */

void FUN_180001160(void)

{
  code *pcVar1;
  
  FUN_1800053f0(0x180022ac0);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180001180; Evidence: ev_59749317bacf38ce96cdb975392fe06d929defb835bcc355701120373e4ce12d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32]
FUN_180001180(undefined1 (*param_1) [32],undefined1 (*param_2) [32],uint param_3)

{
  code *pcVar1;
  undefined1 auVar2 [16];
  __uint64 _Var3;
  undefined1 (*pauVar4) [32];
  longlong lVar5;
  undefined2 *puVar6;
  int iVar7;
  longlong lVar8;
  undefined1 auStack_78 [32];
  undefined1 local_58 [32];
  ulonglong local_38;
  
  local_38 = DAT_180027000 ^ (ulonglong)auStack_78;
  lVar8 = (longlong)(int)param_3;
  if ((int)param_3 < 10) {
    iVar7 = 0;
    if (((0 < (int)param_3) && (7 < param_3)) &&
       ((param_2[-1] + lVar8 * 2 + 0x1e < &DAT_180028c88 ||
        ((undefined1 (*) [32])(&DAT_180028c86 + lVar8 * 2) < param_2)))) {
      FUN_180017e30((undefined1 (*) [32])&DAT_180028c88,param_2,lVar8 * 2);
      do {
        iVar7 = iVar7 + 1;
      } while (iVar7 < (int)param_3);
    }
    for (lVar5 = (longlong)iVar7; lVar5 < lVar8; lVar5 = lVar5 + 1) {
      *(undefined2 *)(&DAT_180028c88 + lVar5 * 2) = *(undefined2 *)(*param_2 + lVar5 * 2);
    }
    if (0x13 < (ulonglong)(lVar8 * 2)) {
      FUN_180004374();
      pcVar1 = (code *)swi(3);
      pauVar4 = (undefined1 (*) [32])(*pcVar1)();
      return pauVar4;
    }
    *(undefined2 *)(&DAT_180028c88 + lVar8 * 2) = 0;
    FUN_180001320(param_1,(ushort *)&DAT_180028c88);
  }
  else {
    auVar2._8_8_ = 0;
    auVar2._0_8_ = (longlong)(int)(param_3 + 1);
    _Var3 = SUB168(ZEXT816(2) * auVar2,0);
    if (SUB168(ZEXT816(2) * auVar2,8) != 0) {
      _Var3 = 0xffffffffffffffff;
    }
    pauVar4 = operator_new(_Var3);
    iVar7 = 0;
    if ((7 < param_3) &&
       (((undefined1 (*) [32])(param_2[-1] + lVar8 * 2 + 0x1e) < pauVar4 ||
        ((undefined1 (*) [32])(pauVar4[-1] + lVar8 * 2 + 0x1e) < param_2)))) {
      FUN_180017e30(pauVar4,param_2,lVar8 * 2);
      do {
        iVar7 = iVar7 + 1;
      } while (iVar7 < (int)param_3);
    }
    lVar5 = (longlong)iVar7;
    if (lVar5 < lVar8) {
      puVar6 = (undefined2 *)(*pauVar4 + lVar5 * 2);
      lVar5 = lVar8 - lVar5;
      do {
        *puVar6 = *(undefined2 *)(((longlong)param_2 - (longlong)pauVar4) + (longlong)puVar6);
        puVar6 = puVar6 + 1;
        lVar5 = lVar5 + -1;
      } while (lVar5 != 0);
    }
    *(undefined2 *)(*pauVar4 + lVar8 * 2) = 0;
    FUN_180001320(&local_58,(ushort *)pauVar4);
    thunk_FUN_18000bff0(pauVar4);
    *(undefined8 *)*param_1 = local_58._0_8_;
    *(undefined8 *)(*param_1 + 8) = local_58._8_8_;
    *(undefined8 *)(*param_1 + 0x10) = local_58._16_8_;
    *(undefined8 *)(*param_1 + 0x18) = local_58._24_8_;
  }
  return param_1;
}


/* Address: 0x180001320; Evidence: ev_8868c86541e96ffcbb2c709e8f53135420c570e38a374b51cf519a8af7e14d0c */

undefined1 (*) [32] FUN_180001320(undefined1 (*param_1) [32],ushort *param_2)

{
  ushort uVar1;
  ulonglong uVar2;
  longlong lVar3;
  undefined1 (*pauVar4) [32];
  undefined1 (*pauVar5) [32];
  ulonglong uVar6;
  byte bVar7;
  uint uVar8;
  uint uVar9;
  
  *(undefined8 *)*param_1 = 0;
  *(undefined8 *)(*param_1 + 8) = 0;
  *(undefined8 *)(*param_1 + 0x10) = 0;
  uVar8 = 0;
  *(undefined8 *)(*param_1 + 0x18) = 0xf;
  (*param_1)[0] = 0;
  uVar1 = *param_2;
  do {
    if (uVar1 == 0) {
      return param_1;
    }
    uVar9 = (uint)uVar1;
    if ((ushort)(uVar1 + 0x2800) < 0x400) {
      uVar8 = uVar9 * 0x400 + 0xfca10000;
    }
    else {
      if ((ushort)(uVar1 + 0x2400) < 0x400) {
        uVar9 = uVar8 | uVar9 - 0xdc00;
      }
      uVar6 = *(ulonglong *)(*param_1 + 0x18);
      bVar7 = (byte)uVar9;
      if (uVar9 < 0x80) {
        uVar2 = *(ulonglong *)(*param_1 + 0x10);
        if (uVar6 == uVar2) {
LAB_180001658:
          FUN_180001690(param_1);
        }
        else {
          *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
          pauVar4 = param_1;
          if (0xf < uVar6) {
            pauVar4 = *(undefined1 (**) [32])*param_1;
          }
          (*pauVar4)[uVar2] = bVar7;
          (*pauVar4)[uVar2 + 1] = 0;
        }
      }
      else {
        uVar2 = *(ulonglong *)(*param_1 + 0x10);
        pauVar4 = param_1;
        if (uVar9 < 0x800) {
          if (uVar6 == uVar2) {
LAB_180001440:
            FUN_180001690(param_1);
          }
          else {
            *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
            pauVar5 = param_1;
            if (0xf < uVar6) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar2] = (byte)(uVar9 >> 6) & 0x1f | 0xc0;
            (*pauVar5)[uVar2 + 1] = 0;
          }
LAB_18000144c:
          uVar6 = *(ulonglong *)(*param_1 + 0x10);
          bVar7 = bVar7 & 0x3f | 0x80;
          if (*(ulonglong *)(*param_1 + 0x18) == uVar6) goto LAB_180001658;
          *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
          if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
            lVar3 = *(longlong *)*param_1;
            *(byte *)(lVar3 + uVar6) = bVar7;
            *(undefined1 *)(lVar3 + 1 + uVar6) = 0;
            goto LAB_180001662;
          }
        }
        else {
          if (uVar9 < 0x10000) {
            if (uVar6 == uVar2) {
              FUN_180001690(param_1);
            }
            else {
              *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
              pauVar5 = param_1;
              if (0xf < uVar6) {
                pauVar5 = *(undefined1 (**) [32])*param_1;
              }
              (*pauVar5)[uVar2] = (byte)(uVar9 >> 0xc) & 0xf | 0xe0;
              (*pauVar5)[uVar2 + 1] = 0;
            }
            uVar6 = *(ulonglong *)(*param_1 + 0x10);
            if (*(ulonglong *)(*param_1 + 0x18) == uVar6) goto LAB_180001440;
            *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
            pauVar5 = param_1;
            if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar6] = (byte)(uVar9 >> 6) & 0x3f | 0x80;
            (*pauVar5)[uVar6 + 1] = 0;
            goto LAB_18000144c;
          }
          if (uVar6 == uVar2) {
            FUN_180001690(param_1);
          }
          else {
            *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
            pauVar5 = param_1;
            if (0xf < uVar6) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar2] = (byte)(uVar9 >> 0x12) & 7 | 0xf0;
            (*pauVar5)[uVar2 + 1] = 0;
          }
          uVar6 = *(ulonglong *)(*param_1 + 0x10);
          if (*(ulonglong *)(*param_1 + 0x18) == uVar6) {
            FUN_180001690(param_1);
          }
          else {
            *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
            pauVar5 = param_1;
            if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar6] = (byte)(uVar9 >> 0xc) & 0x3f | 0x80;
            (*pauVar5)[uVar6 + 1] = 0;
          }
          uVar6 = *(ulonglong *)(*param_1 + 0x10);
          if (*(ulonglong *)(*param_1 + 0x18) == uVar6) {
            FUN_180001690(param_1);
          }
          else {
            *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
            pauVar5 = param_1;
            if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar6] = (byte)(uVar9 >> 6) & 0x3f | 0x80;
            (*pauVar5)[uVar6 + 1] = 0;
          }
          uVar6 = *(ulonglong *)(*param_1 + 0x10);
          bVar7 = bVar7 & 0x3f | 0x80;
          if (*(ulonglong *)(*param_1 + 0x18) == uVar6) goto LAB_180001658;
          *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
          if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
            pauVar4 = *(undefined1 (**) [32])*param_1;
          }
        }
        (*pauVar4)[uVar6] = bVar7;
        (*pauVar4)[uVar6 + 1] = 0;
      }
LAB_180001662:
      uVar8 = 0;
    }
    uVar1 = param_2[1];
    param_2 = param_2 + 1;
  } while( true );
}


/* Address: 0x180001690; Evidence: ev_0f2c6a11a366410d8501cb6a605a42c8a0f60d92dd52142c1c3709d5099d0a42 */

undefined1 (*) [32] FUN_180001690(undefined1 (*param_1) [32])

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
  undefined1 in_stack_00000028;
  
  uVar2 = *(ulonglong *)(*param_1 + 0x10);
  uVar7 = 0x7fffffffffffffff;
  if (uVar2 == 0x7fffffffffffffff) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  uVar6 = uVar2 + 1 | 0xf;
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
        goto code_r0x000180001732;
      }
      pauVar9 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180001732:
    pvVar5 = operator_new(uVar6);
    if (pvVar5 == (void *)0x0) goto LAB_180001800;
    pauVar9 = (undefined1 (*) [32])((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar9[-1] + 0x18) = pvVar5;
  }
  *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
  *(ulonglong *)(*param_1 + 0x18) = uVar7;
  if (uVar3 < 0x10) {
    FUN_180017e30(pauVar9,param_1,uVar2);
    (*pauVar9)[uVar2] = in_stack_00000028;
    (*pauVar9)[uVar2 + 1] = 0;
  }
  else {
    pauVar4 = *(undefined1 (**) [32])*param_1;
    FUN_180017e30(pauVar9,pauVar4,uVar2);
    (*pauVar9)[uVar2] = in_stack_00000028;
    (*pauVar9)[uVar2 + 1] = 0;
    pauVar8 = pauVar4;
    if ((0xfff < uVar3 + 1) &&
       (pauVar8 = *(undefined1 (**) [32])(pauVar4[-1] + 0x18),
       0x1f < (ulonglong)((longlong)pauVar4 + (-8 - (longlong)pauVar8)))) {
LAB_180001800:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000bff0(pauVar8);
  }
  *(undefined1 (**) [32])*param_1 = pauVar9;
  return param_1;
}


/* Address: 0x180001820; Evidence: ev_69922a24ebccf914d30d227f56f50ebd54a62b9d7b65eff9e82502be40d9b46b */

void FUN_180001820(longlong param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  char local_res8 [8];
  longlong *local_18;
  undefined8 local_10;
  
  if ((param_1 != 0) &&
     ((iVar1 = napi_get_global(param_1,&local_10), iVar1 != 0 ||
      (iVar1 = napi_call_function(param_1,local_10,param_2,0,0,0), iVar1 != 0)))) {
    napi_get_last_error_info(param_1,&local_18);
    napi_is_exception_pending(param_1,local_res8);
    if (local_res8[0] == '\0') {
      pcVar2 = "empty error message";
      if ((char *)*local_18 != (char *)0x0) {
        pcVar2 = (char *)*local_18;
      }
      napi_throw_error(param_1,0,pcVar2);
    }
  }
  return;
}


/* Address: 0x1800018c0; Evidence: ev_97f56af4c551b242a0186d2d07c23c4d6e6444521e4cfc8dbd683b1b2e74b268 */

void FUN_1800018c0(undefined8 param_1)

{
  longlong local_res20;
  
  napi_get_instance_data(param_1,&local_res20);
  *(undefined8 *)(local_res20 + 8) = 0;
  return;
}


/* Address: 0x1800018f0; Evidence: ev_76872760e7cf03c050b9fdfee2ebfb3012d68ddf409f3fe838276c93e7e5b6c0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800018f0(undefined8 *param_1)

{
  (**(code **)(*(longlong *)*param_1 + 0x10))();
  return;
}


/* Address: 0x180001910; Evidence: ev_99f9c37c9842c261eced7f9ff1b6a624d4b73600819f1b3cc07e17dce84fb3cd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180001910(undefined8 param_1,undefined8 param_2)

{
  undefined8 *puVar1;
  int iVar2;
  HRESULT HVar3;
  undefined8 *puVar4;
  char *pcVar5;
  undefined8 uVar6;
  undefined *puVar7;
  undefined8 uVar8;
  undefined8 *puVar9;
  undefined8 *puVar10;
  LPVOID local_res18;
  int local_res20 [2];
  undefined8 *local_68;
  longlong local_60;
  longlong *local_58;
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40;
  undefined8 local_38 [2];
  
  local_60 = 2;
  iVar2 = napi_get_instance_data(param_1,&local_68);
  if (iVar2 != 0) {
    napi_get_last_error_info(param_1,&local_58);
    napi_is_exception_pending(param_1,&local_res18);
    goto LAB_180001a76;
  }
  iVar2 = napi_get_cb_info(param_1,param_2,&local_60,local_38,0,0);
  if (iVar2 == 0) {
    if (local_60 != 1) {
      napi_throw_error(param_1,0,
                       "assertion (argc == 1) failed: Wrong number of arguments. Expects a single argument."
                      );
      return 0;
    }
    iVar2 = napi_typeof(param_1,local_38[0],local_res20);
    if (iVar2 == 0) {
      if (local_res20[0] != 7) {
        napi_throw_error(param_1,0,
                         "assertion (valuetype0 == napi_function) failed: Wrong type of arguments. Expects a function as first argument."
                        );
        return 0;
      }
      iVar2 = napi_create_string_utf8
                        (param_1,"onDidChangeKeyboardLayoutCallback",0xffffffffffffffff,&local_50);
      if ((iVar2 == 0) &&
         (iVar2 = napi_create_threadsafe_function
                            (param_1,local_38[0],0,local_50,0,1,0,FUN_1800018c0,0,FUN_180001820,
                             &local_48), puVar1 = local_68, iVar2 == 0)) {
        local_68[1] = local_48;
        puVar4 = operator_new(0x28);
        puVar10 = (undefined8 *)&DAT_1800194f0;
        uVar6 = 0;
        uVar8 = 1;
        *puVar4 = &PTR_FUN_180023f50;
        puVar4[1] = puVar1;
        *(undefined4 *)(puVar4 + 2) = 1;
        puVar4[3] = 0;
        *(undefined4 *)(puVar4 + 4) = 0xffffffff;
        HVar3 = CoCreateInstance((IID *)&DAT_180019520,(LPUNKNOWN)0x0,1,(IID *)&DAT_1800194f0,
                                 &local_res18);
        if (HVar3 < 0) {
          FUN_180001e60(0x180023e88,uVar6,uVar8,puVar10);
          goto LAB_180001b9d;
        }
        puVar9 = puVar4 + 3;
        puVar7 = &DAT_180019510;
        iVar2 = (*(code *)**(undefined8 **)CONCAT71(local_res18._1_7_,(char)local_res18))();
        if (iVar2 < 0) {
          pcVar5 = "native-keymap: Could not obtain ITfSource.\n";
LAB_180001b87:
          FUN_180001e60((longlong)pcVar5,puVar7,puVar9,puVar10);
        }
        else {
          puVar10 = puVar4 + 4;
          puVar7 = &DAT_180019500;
          puVar9 = puVar4;
          iVar2 = (**(code **)(*(longlong *)puVar4[3] + 0x18))();
          if (iVar2 < 0) {
            pcVar5 = "native-keymap: Could not register ITfInputProcessorProfileActivationSink.\n";
            goto LAB_180001b87;
          }
        }
        (**(code **)(*(longlong *)CONCAT71(local_res18._1_7_,(char)local_res18) + 0x10))();
LAB_180001b9d:
        *puVar1 = puVar4;
        napi_add_env_cleanup_hook(param_1,FUN_1800018f0,local_68);
        iVar2 = napi_get_undefined(param_1,&local_40);
        if (iVar2 != 0) {
          napi_get_last_error_info(param_1,&local_58);
          napi_is_exception_pending(param_1,&local_res18);
          local_40 = 0;
          if ((char)local_res18 == '\0') {
            pcVar5 = "empty error message";
            if ((char *)*local_58 != (char *)0x0) {
              pcVar5 = (char *)*local_58;
            }
            napi_throw_error(param_1,0,pcVar5);
            return 0;
          }
        }
        return local_40;
      }
    }
  }
  napi_get_last_error_info(param_1,&local_58);
  napi_is_exception_pending(param_1,&local_res18);
LAB_180001a76:
  if ((char)local_res18 == '\0') {
    pcVar5 = "empty error message";
    if ((char *)*local_58 != (char *)0x0) {
      pcVar5 = (char *)*local_58;
    }
    napi_throw_error(param_1,0,pcVar5);
  }
  return 0;
}


/* Address: 0x180001c40; Evidence: ev_ebee5a3d621cc65374ed0f8192f4004bd7cf11ae294a60dab41245c3a0536684 */

void FUN_180001c40(undefined8 param_1,LPVOID param_2)

{
  thunk_FUN_18000bff0(param_2);
  return;
}


/* Address: 0x180001c50; Evidence: ev_8e4c1c05501ff8e636d628115418f17b501e6486d6b54fdfe26e840c1439d1bf */

undefined8 FUN_180001c50(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  undefined8 *puVar2;
  char *pcVar3;
  char local_res18 [8];
  longlong *local_res20;
  undefined8 local_28 [2];
  
  puVar2 = operator_new(0x10);
  *puVar2 = 0;
  puVar2[1] = 0;
  iVar1 = napi_set_instance_data(param_1,puVar2,FUN_180001c40,0);
  if (iVar1 == 0) {
    iVar1 = napi_create_function(param_1,0,0,FUN_180002800,0,local_28);
    if (((((iVar1 == 0) &&
          (iVar1 = napi_set_named_property(param_1,param_2,"getKeyMap",local_28[0]), iVar1 == 0)) &&
         (iVar1 = napi_create_function(param_1,0,0,FUN_180003650,0,local_28), iVar1 == 0)) &&
        ((iVar1 = napi_set_named_property(param_1,param_2,"getCurrentKeyboardLayout",local_28[0]),
         iVar1 == 0 &&
         (iVar1 = napi_create_function(param_1,0,0,FUN_180001910,0,local_28), iVar1 == 0)))) &&
       ((iVar1 = napi_set_named_property(param_1,param_2,"onDidChangeKeyboardLayout",local_28[0]),
        iVar1 == 0 &&
        ((iVar1 = napi_create_function(param_1,0,0,FUN_180003d90,0,local_28), iVar1 == 0 &&
         (iVar1 = napi_set_named_property(param_1,param_2,"isISOKeyboard",local_28[0]), iVar1 == 0))
        )))) {
      return param_2;
    }
    napi_get_last_error_info(param_1,&local_res20);
    napi_is_exception_pending(param_1,local_res18);
  }
  else {
    napi_get_last_error_info(param_1,&local_res20);
    napi_is_exception_pending(param_1,local_res18);
  }
  if (local_res18[0] == '\0') {
    pcVar3 = "empty error message";
    if ((char *)*local_res20 != (char *)0x0) {
      pcVar3 = (char *)*local_res20;
    }
    napi_throw_error(param_1,0,pcVar3);
  }
  return 0;
}


/* Address: 0x180001e30; Evidence: ev_5971efb28d1a015aa100e262c6f882d57c531e94c34d24a8b41f28cb6b2f7f1e */

undefined8 node_api_module_get_api_version_v1(void)

{
                    /* 0x1e30  2  node_api_module_get_api_version_v1 */
  return 8;
}


/* Address: 0x180001e40; Evidence: ev_d7e05e7048852da3dfa0ea42c5362a6ba10b7ab2a8ecf068e33f80e4b9bcaf2c */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  undefined8 *puVar2;
  char *pcVar3;
  char acStackX_18 [8];
  longlong *plStackX_20;
  undefined8 auStack_28 [2];
  
  puVar2 = operator_new(0x10);
  *puVar2 = 0;
  puVar2[1] = 0;
  iVar1 = napi_set_instance_data(param_1,puVar2,FUN_180001c40,0);
  if (iVar1 == 0) {
    iVar1 = napi_create_function(param_1,0,0,FUN_180002800,0,auStack_28);
    if (((((iVar1 == 0) &&
          (iVar1 = napi_set_named_property(param_1,param_2,"getKeyMap",auStack_28[0]), iVar1 == 0))
         && (iVar1 = napi_create_function(param_1,0,0,FUN_180003650,0,auStack_28), iVar1 == 0)) &&
        ((iVar1 = napi_set_named_property(param_1,param_2,"getCurrentKeyboardLayout",auStack_28[0]),
         iVar1 == 0 &&
         (iVar1 = napi_create_function(param_1,0,0,FUN_180001910,0,auStack_28), iVar1 == 0)))) &&
       ((iVar1 = napi_set_named_property(param_1,param_2,"onDidChangeKeyboardLayout",auStack_28[0]),
        iVar1 == 0 &&
        ((iVar1 = napi_create_function(param_1,0,0,FUN_180003d90,0,auStack_28), iVar1 == 0 &&
         (iVar1 = napi_set_named_property(param_1,param_2,"isISOKeyboard",auStack_28[0]), iVar1 == 0
         )))))) {
      return param_2;
    }
    napi_get_last_error_info(param_1,&plStackX_20);
    napi_is_exception_pending(param_1,acStackX_18);
  }
  else {
    napi_get_last_error_info(param_1,&plStackX_20);
    napi_is_exception_pending(param_1,acStackX_18);
  }
  if (acStackX_18[0] == '\0') {
    pcVar3 = "empty error message";
    if ((char *)*plStackX_20 != (char *)0x0) {
      pcVar3 = (char *)*plStackX_20;
    }
    napi_throw_error(param_1,0,pcVar3);
  }
  return 0;
}


/* Address: 0x180001e50; Evidence: ev_49fab1495042ae11620ae7ce81bff323ce82d381137c2af35f34a313903f76a2 */

undefined * FUN_180001e50(void)

{
  return &DAT_180028ca0;
}


/* Address: 0x180001e60; Evidence: ev_ec972a99d416810e833fa1699485e09545981577f7a7ba7cfa225eb9d5f35bcb */

void FUN_180001e60(longlong param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  undefined *puVar1;
  undefined8 *puVar2;
  undefined8 local_res10;
  undefined8 local_res18;
  undefined8 local_res20;
  
  local_res10 = param_2;
  local_res18 = param_3;
  local_res20 = param_4;
  puVar1 = FUN_1800083b0(1);
  puVar2 = (undefined8 *)FUN_180001e50();
  FUN_18000a484(*puVar2,(longlong)puVar1,param_1,(undefined4 *)0x0,&local_res10);
  return;
}


/* Address: 0x180001eb0; Evidence: ev_345ff8481f2e83f54532cc54c644601a3a5684be438ff2e2cec676e3034524ad */

char * FUN_180001eb0(undefined4 param_1)

{
  switch(param_1) {
  case 1:
    return "VK_LBUTTON";
  case 2:
    return "VK_RBUTTON";
  case 3:
    return "VK_CANCEL";
  case 4:
    return "VK_MBUTTON";
  case 5:
    return "VK_XBUTTON1";
  case 6:
    return "VK_XBUTTON2";
  default:
    return "VK_UNKNOWN";
  case 8:
    return "VK_BACK";
  case 9:
    return "VK_TAB";
  case 0xc:
    return "VK_CLEAR";
  case 0xd:
    return "VK_RETURN";
  case 0x10:
    return "VK_SHIFT";
  case 0x11:
    return "VK_CONTROL";
  case 0x12:
    return "VK_MENU";
  case 0x13:
    return "VK_PAUSE";
  case 0x14:
    return "VK_CAPITAL";
  case 0x15:
    return "VK_KANA";
  case 0x17:
    return "VK_JUNJA";
  case 0x18:
    return "VK_FINAL";
  case 0x19:
    return "VK_HANJA";
  case 0x1b:
    return "VK_ESCAPE";
  case 0x1c:
    return "VK_CONVERT";
  case 0x1d:
    return "VK_NONCONVERT";
  case 0x1e:
    return "VK_ACCEPT";
  case 0x1f:
    return "VK_MODECHANGE";
  case 0x20:
    return "VK_SPACE";
  case 0x21:
    return "VK_PRIOR";
  case 0x22:
    return "VK_NEXT";
  case 0x23:
    return "VK_END";
  case 0x24:
    return "VK_HOME";
  case 0x25:
    return "VK_LEFT";
  case 0x26:
    return "VK_UP";
  case 0x27:
    return "VK_RIGHT";
  case 0x28:
    return "VK_DOWN";
  case 0x29:
    return "VK_SELECT";
  case 0x2a:
    return "VK_PRINT";
  case 0x2b:
    return "VK_EXECUTE";
  case 0x2c:
    return "VK_SNAPSHOT";
  case 0x2d:
    return "VK_INSERT";
  case 0x2e:
    return "VK_DELETE";
  case 0x2f:
    return "VK_HELP";
  case 0x30:
    return "VK_0";
  case 0x31:
    return "VK_1";
  case 0x32:
    return "VK_2";
  case 0x33:
    return "VK_3";
  case 0x34:
    return "VK_4";
  case 0x35:
    return "VK_5";
  case 0x36:
    return "VK_6";
  case 0x37:
    return "VK_7";
  case 0x38:
    return "VK_8";
  case 0x39:
    return "VK_9";
  case 0x41:
    return "VK_A";
  case 0x42:
    return "VK_B";
  case 0x43:
    return "VK_C";
  case 0x44:
    return "VK_D";
  case 0x45:
    return "VK_E";
  case 0x46:
    return "VK_F";
  case 0x47:
    return "VK_G";
  case 0x48:
    return "VK_H";
  case 0x49:
    return "VK_I";
  case 0x4a:
    return "VK_J";
  case 0x4b:
    return "VK_K";
  case 0x4c:
    return "VK_L";
  case 0x4d:
    return "VK_M";
  case 0x4e:
    return "VK_N";
  case 0x4f:
    return "VK_O";
  case 0x50:
    return "VK_P";
  case 0x51:
    return "VK_Q";
  case 0x52:
    return "VK_R";
  case 0x53:
    return "VK_S";
  case 0x54:
    return "VK_T";
  case 0x55:
    return "VK_U";
  case 0x56:
    return "VK_V";
  case 0x57:
    return "VK_W";
  case 0x58:
    return "VK_X";
  case 0x59:
    return "VK_Y";
  case 0x5a:
    return "VK_Z";
  case 0x5b:
    return "VK_LWIN";
  case 0x5c:
    return "VK_RWIN";
  case 0x5d:
    return "VK_APPS";
  case 0x5f:
    return "VK_SLEEP";
  case 0x60:
    return "VK_NUMPAD0";
  case 0x61:
    return "VK_NUMPAD1";
  case 0x62:
    return "VK_NUMPAD2";
  case 99:
    return "VK_NUMPAD3";
  case 100:
    return "VK_NUMPAD4";
  case 0x65:
    return "VK_NUMPAD5";
  case 0x66:
    return "VK_NUMPAD6";
  case 0x67:
    return "VK_NUMPAD7";
  case 0x68:
    return "VK_NUMPAD8";
  case 0x69:
    return "VK_NUMPAD9";
  case 0x6a:
    return "VK_MULTIPLY";
  case 0x6b:
    return "VK_ADD";
  case 0x6c:
    return "VK_SEPARATOR";
  case 0x6d:
    return "VK_SUBTRACT";
  case 0x6e:
    return "VK_DECIMAL";
  case 0x6f:
    return "VK_DIVIDE";
  case 0x70:
    return "VK_F1";
  case 0x71:
    return "VK_F2";
  case 0x72:
    return "VK_F3";
  case 0x73:
    return "VK_F4";
  case 0x74:
    return "VK_F5";
  case 0x75:
    return "VK_F6";
  case 0x76:
    return "VK_F7";
  case 0x77:
    return "VK_F8";
  case 0x78:
    return "VK_F9";
  case 0x79:
    return "VK_F10";
  case 0x7a:
    return "VK_F11";
  case 0x7b:
    return "VK_F12";
  case 0x7c:
    return "VK_F13";
  case 0x7d:
    return "VK_F14";
  case 0x7e:
    return "VK_F15";
  case 0x7f:
    return "VK_F16";
  case 0x80:
    return "VK_F17";
  case 0x81:
    return "VK_F18";
  case 0x82:
    return "VK_F19";
  case 0x83:
    return "VK_F20";
  case 0x84:
    return "VK_F21";
  case 0x85:
    return "VK_F22";
  case 0x86:
    return "VK_F23";
  case 0x87:
    return "VK_F24";
  case 0x90:
    return "VK_NUMLOCK";
  case 0x91:
    return "VK_SCROLL";
  case 0xa0:
    return "VK_LSHIFT";
  case 0xa1:
    return "VK_RSHIFT";
  case 0xa2:
    return "VK_LCONTROL";
  case 0xa3:
    return "VK_RCONTROL";
  case 0xa4:
    return "VK_LMENU";
  case 0xa5:
    return "VK_RMENU";
  case 0xa6:
    return "VK_BROWSER_BACK";
  case 0xa7:
    return "VK_BROWSER_FORWARD";
  case 0xa8:
    return "VK_BROWSER_REFRESH";
  case 0xa9:
    return "VK_BROWSER_STOP";
  case 0xaa:
    return "VK_BROWSER_SEARCH";
  case 0xab:
    return "VK_BROWSER_FAVORITES";
  case 0xac:
    return "VK_BROWSER_HOME";
  case 0xad:
    return "VK_VOLUME_MUTE";
  case 0xae:
    return "VK_VOLUME_DOWN";
  case 0xaf:
    return "VK_VOLUME_UP";
  case 0xb0:
    return "VK_MEDIA_NEXT_TRACK";
  case 0xb1:
    return "VK_MEDIA_PREV_TRACK";
  case 0xb2:
    return "VK_MEDIA_STOP";
  case 0xb3:
    return "VK_MEDIA_PLAY_PAUSE";
  case 0xb4:
    return "VK_LAUNCH_MAIL";
  case 0xb5:
    return "VK_LAUNCH_MEDIA_SELECT";
  case 0xb6:
    return "VK_LAUNCH_APP1";
  case 0xb7:
    return "VK_LAUNCH_APP2";
  case 0xba:
    return "VK_OEM_1";
  case 0xbb:
    return "VK_OEM_PLUS";
  case 0xbc:
    return "VK_OEM_COMMA";
  case 0xbd:
    return "VK_OEM_MINUS";
  case 0xbe:
    return "VK_OEM_PERIOD";
  case 0xbf:
    return "VK_OEM_2";
  case 0xc0:
    return "VK_OEM_3";
  case 0xc1:
    return "VK_ABNT_C1";
  case 0xc2:
    return "VK_ABNT_C2";
  case 0xdb:
    return "VK_OEM_4";
  case 0xdc:
    return "VK_OEM_5";
  case 0xdd:
    return "VK_OEM_6";
  case 0xde:
    return "VK_OEM_7";
  case 0xdf:
    return "VK_OEM_8";
  case 0xe2:
    return "VK_OEM_102";
  case 0xe5:
    return "VK_PROCESSKEY";
  case 0xe7:
    return "VK_PACKET";
  case 0xf6:
    return "VK_ATTN";
  case 0xf7:
    return "VK_CRSEL";
  case 0xf8:
    return "VK_EXSEL";
  case 0xf9:
    return "VK_EREOF";
  case 0xfa:
    return "VK_PLAY";
  case 0xfb:
    return "VK_ZOOM";
  case 0xfc:
    return "VK_NONAME";
  case 0xfd:
    return "VK_PA1";
  case 0xfe:
    return "VK_OEM_CLEAR";
  }
}


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


/* Address: 0x180003450; Evidence: ev_48ac0a3c5eddb32c0e633ae1bb9472ec818595a7bfb113c8302a4611a626c6f1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32] FUN_180003450(undefined1 (*param_1) [32],longlong *param_2,longlong *param_3)

{
  LPVOID pvVar1;
  longlong lVar2;
  LSTATUS LVar3;
  LPVOID pvVar4;
  longlong *plVar5;
  ulonglong uVar6;
  undefined8 uVar8;
  undefined1 (*pauVar9) [32];
  undefined1 auStackY_278 [32];
  DWORD local_248 [2];
  HKEY local_240;
  BYTE local_238 [512];
  ulonglong local_38;
  ulonglong uVar7;
  
  local_38 = DAT_180027000 ^ (ulonglong)auStackY_278;
  *(undefined8 *)*param_1 = 0;
  *(undefined8 *)(*param_1 + 8) = 0;
  *(undefined8 *)(*param_1 + 0x10) = 0;
  *(undefined8 *)(*param_1 + 0x18) = 0xf;
  (*param_1)[0] = 0;
  plVar5 = param_2;
  if (0xf < (ulonglong)param_2[3]) {
    plVar5 = (longlong *)*param_2;
  }
  LVar3 = RegOpenKeyExA((HKEY)0xffffffff80000002,(LPCSTR)plVar5,0,0x20019,&local_240);
  if (LVar3 == 0) {
    local_248[0] = 0x200;
    plVar5 = param_3;
    if (0xf < (ulonglong)param_3[3]) {
      plVar5 = (longlong *)*param_3;
    }
    uVar8 = 0;
    LVar3 = RegQueryValueExA(local_240,(LPCSTR)plVar5,(LPDWORD)0x0,(LPDWORD)0x0,local_238,local_248)
    ;
    if (LVar3 == 0) {
      uVar7 = 0xffffffffffffffff;
      do {
        uVar6 = uVar7 + 1;
        lVar2 = uVar7 + 1;
        uVar7 = uVar6;
      } while (local_238[lVar2] != '\0');
      if (*(ulonglong *)(*param_1 + 0x18) < uVar6) {
        FUN_180003f80((longlong *)param_1,uVar6,uVar8,(undefined1 (*) [32])local_238);
      }
      else {
        pauVar9 = param_1;
        if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
          pauVar9 = *(undefined1 (**) [32])*param_1;
        }
        *(ulonglong *)(*param_1 + 0x10) = uVar6;
        FUN_180017e30(pauVar9,(undefined1 (*) [32])local_238,uVar6);
        (*pauVar9)[uVar6] = 0;
      }
    }
    RegCloseKey(local_240);
  }
  if (0xf < (ulonglong)param_2[3]) {
    pvVar1 = (LPVOID)*param_2;
    pvVar4 = pvVar1;
    if ((0xfff < param_2[3] + 1U) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) goto LAB_180003635;
    thunk_FUN_18000bff0(pvVar4);
  }
  param_2[2] = 0;
  param_2[3] = 0xf;
  *(undefined1 *)param_2 = 0;
  if (0xf < (ulonglong)param_3[3]) {
    pvVar1 = (LPVOID)*param_3;
    pvVar4 = pvVar1;
    if ((0xfff < param_3[3] + 1U) &&
       (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
       0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
LAB_180003635:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000bff0(pvVar4);
  }
  *(undefined1 *)param_3 = 0;
  param_3[3] = 0xf;
  param_3[2] = 0;
  return param_1;
}


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


/* Address: 0x180003c30; Evidence: ev_5e305328ae0fc07cc81f917fda3f20c01f3114928852d3a9f37e3d7051c0d68d */

undefined8 FUN_180003c30(longlong param_1)

{
  if (*(longlong *)(*(longlong *)(param_1 + 8) + 8) != 0) {
    napi_call_threadsafe_function(*(undefined8 *)(*(longlong *)(param_1 + 8) + 8),0,1);
  }
  return 0;
}


/* Address: 0x180003c60; Evidence: ev_564c99f745c800225d5344d8b890a191d842ead5dcaa15a1e975561eca72c5e0 */

int FUN_180003c60(longlong param_1)

{
  int *piVar1;
  int iVar2;
  
  LOCK();
  piVar1 = (int *)(param_1 + 0x10);
  iVar2 = *piVar1;
  *piVar1 = *piVar1 + 1;
  UNLOCK();
  return iVar2 + 1;
}


/* Address: 0x180003c70; Evidence: ev_20be933732b106d9b04b8fcea0057d372fe82ca38fa833d10bece73530be23bc */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

int FUN_180003c70(longlong *param_1)

{
  longlong *plVar1;
  longlong lVar2;
  int iVar3;
  
  LOCK();
  plVar1 = param_1 + 2;
  lVar2 = *plVar1;
  *(int *)plVar1 = (int)*plVar1 + -1;
  UNLOCK();
  iVar3 = (int)lVar2 + -1;
  if ((iVar3 == 0) && (param_1 != (longlong *)0x0)) {
    (**(code **)(*param_1 + 0x20))(param_1,1);
  }
  return iVar3;
}


/* Address: 0x180003cb0; Evidence: ev_482394573410ba78a86dbb1e93abd3d1059eff5ed904b8a4989eb4af99b9aeaf */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180003cb0(longlong *param_1,longlong *param_2,undefined8 *param_3)

{
  if (((*param_2 != 0) || (param_2[1] != 0x46000000000000c0)) &&
     ((*param_2 != 0x11d80f2871c6e74e || (param_2[1] != 0x5c43845b06002aa8)))) {
    *param_3 = 0;
    return 0x80004005;
  }
  *param_3 = param_1;
  (**(code **)(*param_1 + 8))();
  return 0;
}


/* Address: 0x180003d10; Evidence: ev_498e7a88b3827d3c1cca25ee7cdafdac987863c558bc4cd09b32326299217c8f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 * FUN_180003d10(undefined8 *param_1,uint param_2)

{
  *param_1 = &PTR_FUN_180023f50;
  if ((longlong *)param_1[3] != (longlong *)0x0) {
    if (*(int *)(param_1 + 4) != -1) {
      (**(code **)(*(longlong *)param_1[3] + 0x20))();
      *(undefined4 *)(param_1 + 4) = 0xffffffff;
    }
    (**(code **)(*(longlong *)param_1[3] + 0x10))();
    param_1[3] = 0;
  }
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000bff0(param_1);
  }
  return param_1;
}


/* Address: 0x180003d90; Evidence: ev_fe46499e641a142a8d6dc47fe1341712fc95426abacb43fcbfed4bf6c7028f60 */

undefined8 FUN_180003d90(undefined8 param_1)

{
  int iVar1;
  char *pcVar2;
  char local_res18 [8];
  longlong *local_res20;
  undefined8 local_18 [2];
  
  iVar1 = napi_get_undefined(param_1,local_18);
  if (iVar1 != 0) {
    napi_get_last_error_info(param_1,&local_res20);
    napi_is_exception_pending(param_1,local_res18);
    if (local_res18[0] == '\0') {
      pcVar2 = "empty error message";
      if ((char *)*local_res20 != (char *)0x0) {
        pcVar2 = (char *)*local_res20;
      }
      napi_throw_error(param_1,0,pcVar2);
    }
    return 0;
  }
  return local_18[0];
}


/* Address: 0x180003e00; Evidence: ev_cbc8b80fa0c7440ba67e6b6124396190bbbf7b5d21f5064ea48f3f6549cfe1a7 */

undefined8 * FUN_180003e00(undefined8 *param_1,undefined8 param_2,undefined1 (*param_3) [32])

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  ulonglong uVar4;
  void *pvVar5;
  ulonglong uVar6;
  char *pcVar7;
  
  uVar3 = *(ulonglong *)(*param_3 + 0x10);
  if (0x7fffffffffffffff - uVar3 < 0x32) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  if (0xf < *(ulonglong *)(*param_3 + 0x18)) {
    param_3 = *(undefined1 (**) [32])*param_3;
  }
  uVar1 = uVar3 + 0x32;
  *param_1 = 0;
  param_1[1] = 0;
  uVar6 = 0xf;
  param_1[2] = 0;
  param_1[3] = 0;
  pcVar7 = (char *)param_1;
  if (uVar1 < 0x10) goto LAB_180003eec;
  uVar6 = uVar1 | 0xf;
  if (uVar6 < 0x8000000000000000) {
    if (uVar6 < 0x16) {
      uVar6 = 0x16;
    }
    uVar2 = uVar6 + 1;
    if (uVar2 == 0) {
      pcVar7 = (char *)0x0;
    }
    else {
      if (0xfff < uVar2) {
        uVar4 = uVar6 + 0x28;
        if (uVar4 <= uVar2) {
                    /* WARNING: Subroutine does not return */
          FUN_180001140();
        }
        goto code_r0x000180003e8e;
      }
      pcVar7 = operator_new(uVar2);
    }
  }
  else {
    uVar6 = 0x7fffffffffffffff;
    uVar4 = 0x8000000000000027;
code_r0x000180003e8e:
    pvVar5 = operator_new(uVar4);
    if (pvVar5 == (void *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    pcVar7 = (char *)((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pcVar7 + -8) = pvVar5;
  }
  *param_1 = pcVar7;
LAB_180003eec:
  param_1[2] = uVar1;
  param_1[3] = uVar6;
  builtin_strncpy(pcVar7,"System\\CurrentControlSet\\Control\\Keyboard Layouts\\",0x32);
  FUN_180017e30((undefined1 (*) [32])(pcVar7 + 0x32),param_3,uVar3);
  pcVar7[uVar1] = '\0';
  return param_1;
}


/* Address: 0x180003f80; Evidence: ev_6520776131c90583db7a5126e31c8f5377b2b5fef25e496f807b64d89be556c4 */

longlong *
FUN_180003f80(longlong *param_1,ulonglong param_2,undefined8 param_3,undefined1 (*param_4) [32])

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
        goto code_r0x000180004015;
      }
      pauVar8 = operator_new(uVar1);
    }
  }
  else {
    uVar6 = 0x8000000000000027;
code_r0x000180004015:
    pvVar4 = operator_new(uVar6);
    if (pvVar4 == (void *)0x0) goto LAB_1800040ad;
    pauVar8 = (undefined1 (*) [32])((longlong)pvVar4 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pauVar8[-1] + 0x18) = pvVar4;
  }
  param_1[2] = param_2;
  param_1[3] = uVar7;
  FUN_180017e30(pauVar8,param_4,param_2);
  (*pauVar8)[param_2] = 0;
  if (0xf < uVar2) {
    pvVar3 = (LPVOID)*param_1;
    pvVar5 = pvVar3;
    if ((0xfff < uVar2 + 1) &&
       (pvVar5 = *(LPVOID *)((longlong)pvVar3 + -8),
       0x1f < (ulonglong)((longlong)pvVar3 + (-8 - (longlong)pvVar5)))) {
LAB_1800040ad:
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_18000bff0(pvVar5);
  }
  *param_1 = (longlong)pauVar8;
  return param_1;
}


/* Address: 0x1800040d2; Evidence: ev_fa6171778138c57f3e52d89df83e4807c0a1e23957a9db74c3878988c2aab109 */

void FUN_1800040d2(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_XMM0_Qa;
  undefined8 in_XMM2_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_180017330(&ImgDelayDescr_18002611c.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x000180004149. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(in_XMM0_Qa,param_2,in_XMM2_Qa,param_4);
  return;
}


/* Address: 0x18000414b; Evidence: ev_6bd3a4c9026058832a525766ff183edebe96d4767b932d53fc7a4a6a96ab8a13 */

void DelayLoad_napi_create_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004157; Evidence: ev_b3c45840d5fbfc28f1f39724f0b4c56a2867a32a1c90b3b6f7ba92a9f386b064 */

void DelayLoad_napi_get_global
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004163; Evidence: ev_dc2bd6658a6f0ddce38cab48374ed87345cc6ffa4663e10dd6b4ac72769357df */

void DelayLoad_napi_get_last_error_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000416f; Evidence: ev_56dea2e8de885c6b0b512ab39b0bca5938382ce7217fde849aa773a9c03bb5fd */

void DelayLoad_napi_call_threadsafe_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000417b; Evidence: ev_7f198f6f1f831accedab6c82de5194f4df3e59f7288fbe7787aaa240adce75fb */

void DelayLoad_napi_call_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004187; Evidence: ev_121b67d464aa31ae2280208191bf89db27d8a1ff30af27d825cd588a71b6078d */

void DelayLoad_napi_get_null
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004193; Evidence: ev_57e1d211cc2f1295f7652787971d89a95bf9e49bc02010af5256da778f2b2c35 */

void DelayLoad_napi_create_threadsafe_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000419f; Evidence: ev_fe7c6e3b4826e847cc694409299c93ed48952785acc60058f515575e55b3cee0 */

void DelayLoad_napi_is_exception_pending
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800041ab; Evidence: ev_117064997cb78e40b0cf97e128b301baf61eb46209f9de3f8999dc7f83296094 */

void DelayLoad_napi_throw_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800041b7; Evidence: ev_6c00584f3c89057fc55ba20b32a223148d18a9bdc1e88af05cf866aa3ca3f5dc */

void DelayLoad_napi_add_env_cleanup_hook
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800041c3; Evidence: ev_cae6bb337a461fd318c70c496c9c9b0d2415015cf0c3f897f7dc5cc5d283e8f6 */

void DelayLoad_napi_create_string_utf8
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800041cf; Evidence: ev_232ced70a18fa5872aa49f481952ae185e518cbef8ec79be50ff6aeb83a74638 */

void DelayLoad_napi_set_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800041db; Evidence: ev_14c1965e8a560f708622df5d08bd4237e7a6881fb0f7d20571de27ef5b5c7ba2 */

void DelayLoad_napi_get_instance_data
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800041e7; Evidence: ev_c5412bf02db57111137b04a771ef7f519f1d6bf6c337cc6d124ba2207b83b84f */

void DelayLoad_napi_typeof
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800041f3; Evidence: ev_25fc1bf441d8343af665d3ce26b6f2399710c0d2551d29538bc28692064866c7 */

void DelayLoad_napi_get_undefined
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800041ff; Evidence: ev_77a4870981e390108173b5c265b6d2de98250bfd2f08b05124901995a40253f0 */

void DelayLoad_napi_get_cb_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000420b; Evidence: ev_adc22190a2c2ef814f197c917a2016a8205adbf13723bb2e35541a9ec849eb01 */

void DelayLoad_napi_set_instance_data
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004217; Evidence: ev_515e548ce2abebda6ac8fb80cfd5e6a75b46e60554972600b274f4e268a22476 */

void DelayLoad_napi_create_object
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_1800040d2(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180004240; Evidence: ev_219b3a42a03d50dc471b0758c4d6d33c90226a6245ea8c36542d185e3b6f11a1 */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_180027000) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_1800042a0();
  return;
}


/* Address: 0x180004260; Evidence: ev_0a58297f56da84ff28a1502b8c4e02f299efa350ec4f6a3a4e46df0089ff284d */

void thunk_FUN_18000bff0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180028c10,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000b634(DVar2);
    p_Var4 = FUN_18000b774();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180004268; Evidence: ev_ff41773bdb2aed84264ee31fafa99ac498bc04b9c36006560ccefb0b8f6cd9e3 */

/* Library Function - Single Match
    __raise_securityfailure
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __raise_securityfailure(_EXCEPTION_POINTERS *param_1)

{
  HANDLE hProcess;
  
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  UnhandledExceptionFilter(param_1);
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x000180004295. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000409);
  return;
}


/* Address: 0x1800042a0; Evidence: ev_7ebca1b6ba6f21fe0ebaee7b2ed2087ae6ea8eb907e408062036b22707cb0bfa */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_1800042a0(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x1800042cb;
  FUN_180004498((PCONTEXT)&DAT_180027c50);
  _DAT_180027bc0 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180027ce8 = puVar3 + 0x40;
  _DAT_180027cd0 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180027bb0 = 0xc0000409;
  _DAT_180027bb4 = 1;
  _DAT_180027bc8 = 1;
  DAT_180027bd0 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180027000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180027040;
  *(undefined8 *)(puVar3 + -8) = 0x18000436d;
  DAT_180027d48 = _DAT_180027bc0;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_180019540);
  return;
}


/* Address: 0x180004374; Evidence: ev_d0f5745b29b33118690bcab1d633955fb69f7fb14562e61bbbca7762b63aac12 */

void FUN_180004374(void)

{
  FUN_180004388(8);
  return;
}


/* Address: 0x180004388; Evidence: ev_e63d9a6488f47fcab1e20639bbc9a5676166f2c81a69ef043fc83dc7b0350100 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180004388(undefined4 param_1)

{
  code *pcVar1;
  BOOL BVar2;
  undefined1 *puVar3;
  undefined1 auStack_28 [8];
  undefined1 auStack_20 [32];
  
  puVar3 = auStack_28;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(param_1);
    puVar3 = auStack_20;
  }
  *(undefined8 *)(puVar3 + -8) = 0x1800043b3;
  FUN_180004428((PCONTEXT)&DAT_180027c50);
  _DAT_180027bc0 = *(undefined8 *)(puVar3 + 0x28);
  _DAT_180027ce8 = puVar3 + 0x30;
  _DAT_180027bb0 = 0xc0000409;
  _DAT_180027bb4 = 1;
  _DAT_180027bc8 = 1;
  DAT_180027bd0 = (ulonglong)*(uint *)(puVar3 + 0x30);
  *(undefined8 *)(puVar3 + -8) = 0x18000441f;
  DAT_180027d48 = _DAT_180027bc0;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_180019540);
  return;
}


/* Address: 0x180004428; Evidence: ev_90379a792bb7739f3e74589223f3f1861e19621d4eb600b977255dc4f9dddcc0 */

void FUN_180004428(PCONTEXT param_1)

{
  DWORD64 ControlPc;
  PRUNTIME_FUNCTION FunctionEntry;
  DWORD64 local_res8;
  ulonglong local_res10;
  PVOID local_res18;
  
  RtlCaptureContext();
  ControlPc = param_1->Rip;
  FunctionEntry = RtlLookupFunctionEntry(ControlPc,&local_res8,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    RtlVirtualUnwind(0,local_res8,ControlPc,FunctionEntry,param_1,&local_res18,&local_res10,
                     (PKNONVOLATILE_CONTEXT_POINTERS)0x0);
  }
  return;
}


/* Address: 0x180004498; Evidence: ev_00850545e6fb8101dd89afb70c9c070b954f57879b1b86015aa9e2a46050056c */

void FUN_180004498(PCONTEXT param_1)

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


/* Address: 0x18000450c; Evidence: ev_36736a33cb6af958bfd797fd8a5e1bdb72ab651953b9e2cf50cdf8fa64b8a08e */

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
    bVar2 = FUN_18000a5b0(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_180004a34();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_180004a14();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x180004548; Evidence: ev_de67fddb28642d49b3ddc194f4603670beeeeeb49e3e825ffc65e6a0a2d218aa */

void thunk_FUN_18000bff0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180028c10,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000b634(DVar2);
    p_Var4 = FUN_18000b774();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x180004550; Evidence: ev_68fabafb0461c3ba7564659c4feed4b48d1697960bef5f7920f278a8d0b67c7a */

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
    bVar2 = FUN_18000a5b0(param_1);
  } while ((int)CONCAT71(extraout_var,bVar2) != 0);
  if (param_1 == 0xffffffffffffffff) {
    FUN_180004a34();
    pcVar1 = (code *)swi(3);
    pvVar4 = (void *)(*pcVar1)();
    return pvVar4;
  }
  FUN_180004a14();
  pcVar1 = (code *)swi(3);
  pvVar4 = (void *)(*pcVar1)();
  return pvVar4;
}


/* Address: 0x180004560; Evidence: ev_d716a750b311670b836b6eb7ec3bc3f1ad176f0db6f284a9806e6ea5e319e66b */

ulonglong FUN_180004560(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_1800046c8(param_3 != 0);
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
      bVar1 = FUN_180004c1c();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800045b0(param_1,param_3);
  return uVar2;
}


/* Address: 0x1800045b0; Evidence: ev_63b2aa2df50c35677100982ec1e667646aecd80959039f1f3c211eea96cf6d4a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800045b0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180004cd8(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_180028148 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180004e9c(7);
    }
    DAT_180028148 = 1;
    bVar2 = FUN_180004bdc();
    if (bVar2) {
      FUN_180004fe8();
      FUN_180004b2c();
      FUN_180004b50();
      uVar4 = FUN_18000a700((undefined8 *)&DAT_180019338,(undefined8 *)&DAT_180019358);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_18000a6c8((undefined8 *)&DAT_180019328,(undefined8 *)&DAT_180019330);
        DAT_180028148 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180004e88();
      if ((*plVar5 != 0) && (uVar6 = FUN_180004da0((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180028120 = DAT_180028120 + 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x1800046c8; Evidence: ev_f83f0d727eba9c60524048f12300a16008eb9b4d8b1ff728ecb4de89c73f585a */

ulonglong FUN_1800046c8(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180028120 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180028120 = DAT_180028120 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_180028148 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180004e9c(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180004b3c();
    FUN_180005024();
    DAT_180028148 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180004cc4();
  }
  return uVar2;
}


/* Address: 0x18000474c; Evidence: ev_216c9dddf22fab3cf47dc6ebc44eeaf88be6ca32b8f4c7b22b3204ca2c98433e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180004809) */
/* WARNING: Removing unreachable block (ram,0x00018000479a) */
/* WARNING: Removing unreachable block (ram,0x000180004848) */

int FUN_18000474c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_180028120 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180004560(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_180004b24();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_180004b24();
      FUN_1800046c8(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180004560(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}


/* Address: 0x180004880; Evidence: ev_75ef3a29e438ff43b2d7843ac7293ed92d0fe2b8ace3528f37421f72baa5a723 */

void entry(undefined8 param_1,int param_2,longlong param_3)

{
  if (param_2 == 1) {
    FUN_180004a74();
  }
  FUN_18000474c(param_1,param_2,param_3);
  return;
}


/* Address: 0x1800048c0; Evidence: ev_445d10a696e3e9e28d393448fe6be2c3c2e8bb516d20347ada9bb8b0de9fc1a3 */

undefined8 * FUN_1800048c0(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005634((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x1800048fc; Evidence: ev_34fd4d98463aaddedb28ec7e1b74d3c9f9f6fce51db01df699af255bc35130c8 */

undefined8 * FUN_1800048fc(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad allocation";
  *param_1 = std::bad_alloc::vftable;
  return param_1;
}


/* Address: 0x180004920; Evidence: ev_eb0ffda25b3fbf75dc6f4aadeff2b659a50f1dbe8248acfa49c9168aceaf6768 */

undefined8 * FUN_180004920(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005634((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x18000495c; Evidence: ev_a1750d46061485201cf015c0ce57ee42c7138510617073c8cbe2f861ef9d1aa4 */

undefined8 * FUN_18000495c(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad array new length";
  *param_1 = std::bad_array_new_length::vftable;
  return param_1;
}


/* Address: 0x180004980; Evidence: ev_3fc34b2d472b5ce2414bbcbaeae2dd434a71361b9efa01ef49d7e440524a0fb4 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180005634((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}


/* Address: 0x1800049d0; Evidence: ev_2a844555a648440d647920796cd5bea6bf8d8dd70eae9e6cfb7ee4fa8f9d22ea */

undefined8 * FUN_1800049d0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_1800056b4(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000bff0(param_1);
  }
  return param_1;
}


/* Address: 0x180004a14; Evidence: ev_d31fb68289b4f06d28b62337827447b1ec88810edc874d6c44b1916ed0494745 */

void FUN_180004a14(void)

{
  longlong local_28 [5];
  
  FUN_1800048fc(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_1800056dc(local_28,&DAT_180025f40);
}


/* Address: 0x180004a34; Evidence: ev_b73a097ab282e3b7f8456779b630623f25842e6dc356c2ddcaea296e226b26e5 */

void FUN_180004a34(void)

{
  longlong local_28 [5];
  
  FUN_18000495c(local_28);
                    /* WARNING: Subroutine does not return */
  FUN_1800056dc(local_28,&DAT_180025fc8);
}


/* Address: 0x180004a60; Evidence: ev_786386130effab6b697d4d3d28080c1e70c2642fc06dc2f343bf9638675c23e5 */

char * FUN_180004a60(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x180004a74; Evidence: ev_857f88b5a22af830aeaddb67c1f044aa5b9cd555d5779b371fb8b01983b56a24 */

void FUN_180004a74(void)

{
  DWORD DVar1;
  _FILETIME local_res8;
  LARGE_INTEGER local_res10;
  _FILETIME local_18 [2];
  
  if (DAT_180027000 == 0x2b992ddfa232) {
    local_res8.dwLowDateTime = 0;
    local_res8.dwHighDateTime = 0;
    GetSystemTimeAsFileTime(&local_res8);
    local_18[0] = local_res8;
    DVar1 = GetCurrentThreadId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    DVar1 = GetCurrentProcessId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    QueryPerformanceCounter(&local_res10);
    DAT_180027000 =
         ((ulonglong)local_res10.s.LowPart << 0x20 ^
          CONCAT44(local_res10.s.HighPart,local_res10.s.LowPart) ^ (ulonglong)local_18[0] ^
         (ulonglong)local_18) & 0xffffffffffff;
    if (DAT_180027000 == 0x2b992ddfa232) {
      DAT_180027000 = 0x2b992ddfa233;
    }
  }
  DAT_180027040 = ~DAT_180027000;
  return;
}


/* Address: 0x180004b24; Evidence: ev_4d223a8992316498eb3c014481e2c18cc760a7a063b0f81c6bd8451a2cb58b78 */

undefined8 FUN_180004b24(void)

{
  return 1;
}


/* Address: 0x180004b2c; Evidence: ev_a63e13f30319a1c3c10bc56bfa3d6bb7522f9f701d4b487ab892e4f050dca94f */

void FUN_180004b2c(void)

{
                    /* WARNING: Could not recover jumptable at 0x000180004b33. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  InitializeSListHead(&DAT_180028130);
  return;
}


/* Address: 0x180004b3c; Evidence: ev_7c69694bb0e50a9ed2076602ca811219773fe81acbc3ca2fac9d7f69f43cd03c */

void FUN_180004b3c(void)

{
  FUN_18000579c((PSLIST_HEADER)&DAT_180028130);
  return;
}


/* Address: 0x180004b48; Evidence: ev_c5207fb5b83a060d732681e973fb8406c69a50fd1631b69dfc82ad9ec5618ce9 */

undefined * FUN_180004b48(void)

{
  return &DAT_180028140;
}


/* Address: 0x180004b50; Evidence: ev_03a9ec298b554233bb376e827c4820ddd4e3ecee160c514cdd71058fb85a4f92 */

void FUN_180004b50(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_180001e50();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_180004b48();
  *puVar1 = *puVar1 | 2;
  return;
}


/* Address: 0x180004b6c; Evidence: ev_90a1b3833fde8d8462c001d00a964b57573798056d2344f1675999cfbca56b79 */

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
LAB_180004b9a:
    uVar4 = (ulonglong)pvVar3 & 0xffffffffffffff00;
  }
  else {
    do {
      pvVar3 = (void *)0x0;
      LOCK();
      bVar2 = DAT_180028150 == (void *)0x0;
      pvVar1 = StackBase;
      if (!bVar2) {
        pvVar3 = DAT_180028150;
        pvVar1 = DAT_180028150;
      }
      DAT_180028150 = pvVar1;
      UNLOCK();
      if (bVar2) goto LAB_180004b9a;
    } while (StackBase != pvVar3);
    uVar4 = CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
  }
  return uVar4;
}


/* Address: 0x180004ba8; Evidence: ev_9a3425ac47ff923a4ebf181324ceb01e189d494d01c95419854e37b1d03eab04 */

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
    uVar2 = FUN_180004b24();
    uVar3 = FUN_18000ad78((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_18000aef8();
  }
  else {
    uVar2 = FUN_18000508c();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}


/* Address: 0x180004bdc; Evidence: ev_d42a055411deb6e4f5cddc8369e81fc5909b4bc376ebef55561c1cdf8a60c56f */

bool FUN_180004bdc(void)

{
  undefined8 uVar1;
  
  uVar1 = FUN_180004d14(0);
  return (char)uVar1 != '\0';
}


/* Address: 0x180004bf4; Evidence: ev_c7c2da5be23ff688960ea94bee10e11ccb335e1866f45d9491b0a926b8a40f1e */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_1800057f0();
  if (bVar1) {
    bVar1 = FUN_18000b480();
    if (bVar1) {
      return 1;
    }
    FUN_180005804();
  }
  return 0;
}


/* Address: 0x180004c1c; Evidence: ev_06471a90d981528966ae29922c09a80afa9378a2da434b816e176bada2362a59 */

undefined1 FUN_180004c1c(void)

{
  FUN_18000b494();
  FUN_180005804();
  return 1;
}


/* Address: 0x180004c34; Evidence: ev_4a84c67f4a7d503e4d0805e1a6d85c37769a8e53c859ffae3a0526752d78a959 */

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


/* Address: 0x180004c94; Evidence: ev_7df514909a6a8a779960da082bec033447479c0a206a182b29b8d7b5b7ebbca3 */

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
    FUN_18000b29c(&DAT_180028160);
    return;
  }
  iVar2 = FUN_18000ab50();
  if (iVar2 == 0) {
    FUN_18000ab34();
  }
  return;
}


/* Address: 0x180004cc4; Evidence: ev_cc29d2e81dfce29679d2040e79f6c667c9fcc1fa16213f64e0a0f5d52395c9f0 */

void FUN_180004cc4(void)

{
  FUN_18000b4dc();
  FUN_180005830();
  return;
}


/* Address: 0x180004cd8; Evidence: ev_9ac6d22e3750723ebd92a2ae653eb60bdb2653cf168204e2cc29a0e40e0f6eeb */

ulonglong FUN_180004cd8(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_180028158 = 1;
  }
  FUN_18000508c();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000b46c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}


/* Address: 0x180004d14; Evidence: ev_7aa4cb1b360231c18e7ff7ac220e0f16f0a368f9bed433d43bc491fa8940ca50 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180004d14(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_180028159 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180004e9c(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_180028160 = 0xffffffffffffffff;
      uRam0000000180028168 = 0xffffffffffffffff;
      _DAT_180028170 = 0xffffffffffffffff;
      _DAT_180028178 = 0xffffffffffffffff;
      uRam0000000180028180 = 0xffffffffffffffff;
      _DAT_180028188 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_180028160);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_180028178), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_180028159 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180004da0; Evidence: ev_c04edb1b666379987a7200ee8202cf6c8c8dd86c08cb1b415b0e87e4763bef91 */

/* WARNING: Removing unreachable block (ram,0x000180004e2d) */
/* WARNING: Enum "SectionFlags": Some values do not have unique names */

ulonglong FUN_180004da0(longlong param_1)

{
  ulonglong uVar1;
  uint7 uVar2;
  IMAGE_SECTION_HEADER *pIVar3;
  
  uVar1 = 0;
  for (pIVar3 = &IMAGE_SECTION_HEADER_180000208; pIVar3 != (IMAGE_SECTION_HEADER *)&DAT_180000348;
      pIVar3 = pIVar3 + 1) {
    if (((ulonglong)(uint)pIVar3->VirtualAddress <= param_1 - 0x180000000U) &&
       (uVar1 = (ulonglong)((pIVar3->Misc).PhysicalAddress + pIVar3->VirtualAddress),
       param_1 - 0x180000000U < uVar1)) goto LAB_180004e16;
  }
  pIVar3 = (IMAGE_SECTION_HEADER *)0x0;
LAB_180004e16:
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


/* Address: 0x180004e38; Evidence: ev_2778eb941e2ee1607a48aa62337b401dbedef21b6514b946132a877520466e70 */

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
    DAT_180028150 = 0;
    UNLOCK();
  }
  return;
}


/* Address: 0x180004e5c; Evidence: ev_a720580561367e7bf792e7fb2142dd59c8c80061a1b3591e522831b865a0e381 */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_180028158 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180004e88; Evidence: ev_24de610475370e67517c277008f5e88a72331122685905f98234539a90dfcbf0 */

undefined * FUN_180004e88(void)

{
  return &DAT_180028cb0;
}


/* Address: 0x180004e90; Evidence: ev_6211014aa1f2b3f72920ee527804b8831725230cf06c782dbb6c7df8bc429aa4 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180004e90(void)

{
  _DAT_180028190 = 0;
  return;
}


/* Address: 0x180004e9c; Evidence: ev_bc206303b07875b1fd55973dffed7f6a827c6ee0b09a698cbd56779908e35bb4 */

void FUN_180004e9c(undefined4 param_1)

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
  *(undefined8 *)(puVar4 + -8) = 0x180004ed0;
  FUN_180004e90();
  *(undefined8 *)(puVar4 + -8) = 0x180004ee1;
  FUN_180017a70((undefined1 (*) [32])local_4d8,0,0x4d0);
  *(undefined8 *)(puVar4 + -8) = 0x180004eeb;
  RtlCaptureContext(local_4d8);
  *(undefined8 *)(puVar4 + -8) = 0x180004f05;
  FunctionEntry = RtlLookupFunctionEntry(local_3e0,&local_res10,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    *(undefined8 *)(puVar4 + 0x38) = 0;
    *(undefined1 **)(puVar4 + 0x30) = local_res18;
    *(undefined1 **)(puVar4 + 0x28) = local_res20;
    *(undefined1 **)(puVar4 + 0x20) = local_4d8;
    *(undefined8 *)(puVar4 + -8) = 0x180004f49;
    RtlVirtualUnwind(0,local_res10,local_3e0,FunctionEntry,*(PCONTEXT *)(puVar4 + 0x20),
                     *(PVOID **)(puVar4 + 0x28),*(PDWORD64 *)(puVar4 + 0x30),
                     *(PKNONVOLATILE_CONTEXT_POINTERS *)(puVar4 + 0x38));
  }
  local_440 = &stack0x00000008;
  *(undefined8 *)(puVar4 + -8) = 0x180004f7b;
  FUN_180017a70((undefined1 (*) [32])(puVar4 + 0x50),0,0x98);
  *(undefined8 *)(puVar4 + 0x60) = unaff_retaddr;
  *(undefined4 *)(puVar4 + 0x50) = 0x40000015;
  *(undefined4 *)(puVar4 + 0x54) = 1;
  *(undefined8 *)(puVar4 + -8) = 0x180004f9d;
  BVar2 = IsDebuggerPresent();
  *(undefined1 **)(puVar4 + 0x40) = puVar4 + 0x50;
  *(undefined1 **)(puVar4 + 0x48) = local_4d8;
  *(undefined8 *)(puVar4 + -8) = 0x180004fba;
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  *(undefined8 *)(puVar4 + -8) = 0x180004fc5;
  LVar3 = UnhandledExceptionFilter((_EXCEPTION_POINTERS *)(puVar4 + 0x40));
  if ((LVar3 == 0) && (BVar2 != 1)) {
    *(undefined8 *)(puVar4 + -8) = 0x180004fd6;
    FUN_180004e90();
  }
  return;
}


/* Address: 0x180004fe8; Evidence: ev_6ddd4fb231f55ea7dac8a5ec404934c814690ee12cd99a3de4b1a8062602c757 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004fe8(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180024b70; puVar1 < &DAT_180024b70; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180005024; Evidence: ev_e62d8cac6ba44e3083ef9d3451a677f6156d6baf4fbbc52079efb10571818261 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005024(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180024b80; puVar1 < &DAT_180024b80; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180005060; Evidence: ev_04d214d944b3d3208d38136c541db584526cb14e2f9f22bc76e75a12ae5c4371 */

undefined8 * FUN_180005060(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = type_info::vftable;
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000bff0(param_1);
  }
  return param_1;
}


/* Address: 0x18000508c; Evidence: ev_2849481153f2347451493844414143ecdd64ba00dea233acb955fcd129c56df7 */

/* WARNING: Removing unreachable block (ram,0x00018000517d) */
/* WARNING: Removing unreachable block (ram,0x00018000516d) */
/* WARNING: Removing unreachable block (ram,0x000180005148) */
/* WARNING: Removing unreachable block (ram,0x0001800050c6) */
/* WARNING: Removing unreachable block (ram,0x0001800050a4) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_18000508c(void)

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
    DAT_180027060 = 0x8000;
    DAT_180027068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_180028198 = DAT_180028198 | 1;
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
      DAT_180028198 = DAT_180028198 | 2;
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
  DAT_180027058 = 1;
  DAT_18002705c = 2;
  uVar9 = DAT_180027050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_180027058 = 2;
    DAT_18002705c = 6;
    uVar9 = DAT_180027050 & 0xffffffffffffffee;
  }
  DAT_180027050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_180027058 = 3;
      uVar7 = DAT_180027050;
      uVar5 = DAT_18002705c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_180027058 = 5;
        uVar7 = DAT_180027050 & 0xfffffffffffffffd;
        uVar5 = DAT_18002705c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18002705c = DAT_18002705c | 0x68;
          DAT_180027058 = 6;
          uVar7 = DAT_180027050 & 0xffffffffffffffd9;
          uVar5 = DAT_18002705c;
        }
      }
      DAT_18002705c = uVar5;
      DAT_180027050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_180027050 = DAT_180027050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_180028194 = (uint)uVar12 & 0x400ff;
        DAT_180027050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_180027050;
        if (1 < (byte)_DAT_180028194) {
          DAT_180027050 = DAT_180027050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_180027050 = DAT_180027050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}


/* Address: 0x180005324; Evidence: ev_2e5a6a48e7cfdfa596bcd27e5f1a682001a2ed8a886d82b0fd748ab87e6dbc90 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_180028ca8 != 0;
}


/* Address: 0x180005330; Evidence: ev_0bc4e70110b73f81b5cea44767c66643ffd9b0128b5129d9fcfa747e79c7a689 */

undefined8 * FUN_180005330(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005634((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x18000536c; Evidence: ev_d023511540be6d7b6fb5d73d514fe9f517a62abffe3520dbe7d99743cfe21455 */

undefined8 * FUN_18000536c(undefined8 *param_1,longlong param_2)

{
  longlong local_18;
  undefined1 local_10;
  
  local_10 = 1;
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  local_18 = param_2;
  FUN_180005634(&local_18,param_1 + 1);
  *param_1 = std::length_error::vftable;
  return param_1;
}


/* Address: 0x1800053b4; Evidence: ev_1b3f71802b7a5e3937057794e8b36b445ebdc7e0544ba671c0c83454ccb315b1 */

undefined8 * FUN_1800053b4(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005634((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::logic_error::vftable;
  return param_1;
}


/* Address: 0x1800053f0; Evidence: ev_efc00eff316cf07461924b7cf4182837bc4a720fef468b62b71b4cdecc6ec66c */

void FUN_1800053f0(longlong param_1)

{
  longlong local_28 [5];
  
  FUN_18000536c(local_28,param_1);
                    /* WARNING: Subroutine does not return */
  FUN_1800056dc(local_28,&DAT_180026058);
}


/* Address: 0x180005414; Evidence: ev_cb7279fae00b36343a2f6de3242558a691159eabdf075d6cf718536fc678f0cf */

undefined8 FUN_180005414(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

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
          if (iVar4 < 1) goto LAB_180005542;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_180017680(0x180019620), (int)uVar5 != 0)) {
          FUN_180005840((int *)param_1);
        }
        FUN_1800059c0();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_1800059f0();
      }
LAB_180005542:
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


/* Address: 0x180005634; Evidence: ev_2e46a6f27455af7379b0810fb3777dc60aba954eadba487532e6c040b740b4ab */

void FUN_180005634(longlong *param_1,longlong *param_2)

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
      FUN_18000b510(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_18000bff0((LPVOID)0x0);
  }
  return;
}


/* Address: 0x1800056b4; Evidence: ev_2007a2c7ea8bbfc0ad6c3335882e09d048eaf1e42df9f697798d638bd07dc068 */

void FUN_1800056b4(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_18000bff0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}


/* Address: 0x1800056dc; Evidence: ev_85099df901f0aa133b43fa6dbff2004ce0f67ebf0d6b89d021e8a2a6dd16bb51 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800056dc(longlong *param_1,byte *param_2)

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


/* Address: 0x180005784; Evidence: ev_70af778eeb4d6660d24e0ac5bf3c4c21754f480e180c0e4fdd4ef3725193414a */

int FUN_180005784(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}


/* Address: 0x18000579c; Evidence: ev_314562302d561c70c0e70ec7b2b8cc04b072edf3a73d6e3ef060209f059112f7 */

void FUN_18000579c(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_18000bff0(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}


/* Address: 0x1800057c8; Evidence: ev_cd4ab92b560c7d4fe0dbccd68b990271af99c183dcee829f08c656168f52266b */

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


/* Address: 0x1800057f0; Evidence: ev_794d42bf45284e0ab709b773d28ca523104dc893f89cd7cf45c663bb1111d894 */

bool FUN_1800057f0(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180005ab4();
  return pvVar1 != (LPVOID)0x0;
}


/* Address: 0x180005804; Evidence: ev_e7aef78523798b8bbd591a1f755f482bf3008a79bfd79522d54d5c51f69019ea */

undefined1 FUN_180005804(void)

{
  FUN_180005a50();
  return 1;
}


/* Address: 0x180005814; Evidence: ev_281e82e920743baab133f6c278242f0526c8ee78f8aa45f02581e5da3477cb59 */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_180005bc8();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180005830; Evidence: ev_2302293c65277c0a75f578cf8f5601c0d2443e3372b655983c2a76c2387d9ff0 */

undefined1 FUN_180005830(void)

{
  FUN_180005bc8();
  return 1;
}


/* Address: 0x180005840; Evidence: ev_0857894e4245b4cba6f1ff9b320f14d0e37215fd0644333c1371d1eeabe01807 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005840(int *param_1)

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
      FUN_1800058b4(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}


/* Address: 0x1800058b4; Evidence: ev_8c2f30f0db797891aaa6f1162f3ba61488e9de1e3630dd43003b050850f6c01c */

void FUN_1800058b4(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE)

{
                    /* WARNING: Could not recover jumptable at 0x0001800058b4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x1800058b8; Evidence: ev_c0421a6ac8eff11e07263e523a1461bdf9efec47a81e0a639d7ef6e62ad0dbc5 */

/* Library Function - Single Match
    _IsExceptionObjectToBeDestroyed
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _IsExceptionObjectToBeDestroyed(longlong param_1)

{
  longlong lVar1;
  longlong *plVar2;
  
  lVar1 = FUN_180005a98();
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


/* Address: 0x1800058e8; Evidence: ev_b9c722a92e7491fb1d43ac911c9525abe9dcdee35b684fa20a22aa07937a80c2 */

longlong FUN_1800058e8(longlong param_1,int *param_2)

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


/* Address: 0x180005910; Evidence: ev_540261c04c02bbffc3e2cb3937f8484289d106a0a62b9f599e230315306afbda */

undefined8 FUN_180005910(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180005a98();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180005a98();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180005a98();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180005a98();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_18000b4ec();
  }
  return 0;
}


/* Address: 0x180005978; Evidence: ev_9da728a6253b7c37c532f783fa9c1c3281ac1c95d7b5ef9010dcfae172d3b7a2 */

void Unwind_180005978(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_18000b4ec();
}


/* Address: 0x1800059c0; Evidence: ev_f723e02d169bbd4a412fe495807ffcaadafeda13b07d2da992d505b2eae90897 */

void FUN_1800059c0(void)

{
  FUN_1800059e0();
  return;
}


/* Address: 0x1800059e0; Evidence: ev_5fc9d0e0230022b33a9ee5f5b53b4c6179851a4cf04beb32797cae1b37767691 */

void FUN_1800059e0(void)

{
  return;
}


/* Address: 0x1800059f0; Evidence: ev_edca397e8c4e42ea686be68dff1c49c751d6f90e689a2f186c4a299efc1f49b1 */

void FUN_1800059f0(void)

{
  return;
}


/* Address: 0x1800059f4; Evidence: ev_26c6140e7ec7f28d0b0c7a58757c24b0928d7ebd5fef7de314510c58e8d5537f */

/* WARNING: Removing unreachable block (ram,0x000180005a07) */
/* WARNING: Removing unreachable block (ram,0x000180005a1d) */
/* WARNING: Removing unreachable block (ram,0x000180005a23) */
/* Library Function - Single Match
    __except_validate_context_record
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __except_validate_context_record(longlong param_1)

{
  return;
}


/* Address: 0x180005a30; Evidence: ev_d36df017e33b6393c277c47f725dbb5c4b97f0d2426aed3dc387d1aa89475009 */

void FUN_180005a30(undefined *param_1)

{
  if ((param_1 != (undefined *)0x0) && (param_1 != &DAT_1800281b0)) {
    thunk_FUN_18000bff0(param_1);
  }
  return;
}


/* Address: 0x180005a50; Evidence: ev_838808185b071d11429586b2a5d638e95096131cd5cc72f6df15ad5878ac700b */

void FUN_180005a50(void)

{
  undefined *puVar1;
  
  if (DAT_180027070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180027070);
    __vcrt_FlsSetValue(DAT_180027070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_1800281b0)) {
      thunk_FUN_18000bff0(puVar1);
    }
  }
  return;
}


/* Address: 0x180005a98; Evidence: ev_c4e9593a0ad997c879eee9a0ad4175c1ae0f6bf7da69695b514df7a3774e89d8 */

void FUN_180005a98(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180005ab4();
  if (pvVar1 != (LPVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180005ab4; Evidence: ev_81d5b5b0a21fb2353be6f1560da6754052e0f51bf1fd45907be47fa6021c6977 */

LPVOID FUN_180005ab4(void)

{
  DWORD dwErrCode;
  int iVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  LPVOID pvVar4;
  
  if (DAT_180027070 == 0xffffffff) {
    pvVar3 = (LPVOID)0x0;
  }
  else {
    dwErrCode = GetLastError();
    pvVar2 = (LPVOID)__vcrt_FlsGetValue(DAT_180027070);
    pvVar4 = (LPVOID)0x0;
    pvVar3 = pvVar4;
    if (((pvVar2 != (LPVOID)0xffffffffffffffff) && (pvVar3 = pvVar2, pvVar2 == (LPVOID)0x0)) &&
       (iVar1 = __vcrt_FlsSetValue(DAT_180027070,(LPVOID)0xffffffffffffffff), pvVar3 = pvVar4,
       iVar1 != 0)) {
      pvVar3 = _calloc_base(1,0x80);
      if ((pvVar3 == (LPVOID)0x0) || (iVar1 = __vcrt_FlsSetValue(DAT_180027070,pvVar3), iVar1 == 0))
      {
        __vcrt_FlsSetValue(DAT_180027070,(LPVOID)0x0);
        pvVar2 = pvVar3;
      }
      else {
        *(undefined4 *)((longlong)pvVar3 + 0x78) = 0xfffffffe;
        pvVar2 = pvVar4;
        pvVar4 = pvVar3;
      }
      thunk_FUN_18000bff0(pvVar2);
      pvVar3 = pvVar4;
    }
    SetLastError(dwErrCode);
  }
  return pvVar3;
}


/* Address: 0x180005b80; Evidence: ev_516521b3ddbf045bc170a21b25ebb10ad9bc7a1cba40957d2c7d62a44dafd4ae */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_180005a30);
  DAT_180027070 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_1800281b0);
    if (iVar2 != 0) {
      _DAT_180028228 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_180005bc8();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}


/* Address: 0x180005bc8; Evidence: ev_50077ecd3f27887acf72bf7bac8283b71c09df53cd92ca911821c1b8ab78daba */

undefined1 FUN_180005bc8(void)

{
  if (DAT_180027070 != -1) {
    __vcrt_FlsFree(DAT_180027070);
    DAT_180027070 = -1;
  }
  return 1;
}


/* Address: 0x180005bf0; Evidence: ev_5c44a7ce00412ee37dda29e79c87423eed79e0bf6e41cff2120275773d18d2be */

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
                      ((LPCRITICAL_SECTION)(&DAT_180028230 + uVar2 * 0x28),4000,0);
    if ((int)uVar1 == 0) {
      uVar2 = __vcrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_180028258 = DAT_180028258 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 == 0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x180005c38; Evidence: ev_edee84d1d094cb0dbb4a4fab4fbb335ab8c8a593bb35ee5c632ace9a7b855b4a */

/* Library Function - Single Match
    __vcrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release */

undefined8 __vcrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_180028258;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_180028230 + uVar1 * 0x28));
    DAT_180028258 = DAT_180028258 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180005c70; Evidence: ev_5bfd46b5c077c72024eac161eb5464c9c747d708d93469195ac7b64923151c63 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180005c70(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180005a98();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180005cc4; Evidence: ev_79b0c4990060b68bec9c25a5ab37d9d37eed8b6ba6254f8aae4ee12ecaf90259 */

longlong FUN_180005cc4(longlong param_1,int param_2)

{
  uint uVar1;
  longlong lVar2;
  
  uVar1 = *(uint *)(param_1 + 0xc);
  do {
    if (uVar1 == 0) {
      return 0;
    }
    uVar1 = uVar1 - 1;
    lVar2 = FUN_180005a98();
    lVar2 = (longlong)*(int *)(param_1 + 0x10) +
            *(longlong *)(lVar2 + 0x60) + (ulonglong)uVar1 * 0x14;
  } while ((param_2 <= *(int *)(lVar2 + 4)) || (*(int *)(lVar2 + 8) < param_2));
  return lVar2;
}


/* Address: 0x180005d28; Evidence: ev_17ad3c840545dda06881d87e32b691e252cc733c5af2bf45793253a28b393eae */

bool FUN_180005d28(ulonglong *param_1,longlong param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = FUN_1800065cc(param_2,param_1);
  lVar2 = FUN_180005cc4(param_2,iVar1);
  return lVar2 != 0;
}


/* Address: 0x180005d54; Evidence: ev_775efc704770ee663d18ed05cd8be933da4704f27cd630f19b939239b0178f8e */

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
  
  plVar2 = FUN_180005db8((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_1800065cc((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_180005cc4((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_180007774(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}


/* Address: 0x180005db8; Evidence: ev_6c3b65be644e8c56919f69244dbde4589f466c14180f98f7933e5d1c54f6b715 */

longlong * FUN_180005db8(longlong *param_1,ulonglong *param_2,longlong param_3,longlong *param_4)

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
  iVar4 = FUN_1800065cc(param_3,param_2);
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
        if ((longlong)*piVar8 == (ulonglong)p_Var5->BeginAddress) goto code_r0x000180005e6f;
        uVar6 = (int)uVar7 + 1;
        uVar7 = (ulonglong)uVar6;
        piVar8 = piVar8 + 5;
      } while (uVar6 < uVar2);
    }
  } while (uVar2 <= (uint)uVar7);
code_r0x000180005e6f:
  *param_4 = *(longlong *)((longlong)*(int *)(lVar10 + 0x10 + uVar7 * 0x14) + *param_1);
  return param_4;
}


/* Address: 0x180005ea4; Evidence: ev_e8930534d48d11ba1b9a47fc4ff0851024bbc2e5befc2d0fdfb602a2dbff711f */

undefined8 *
FUN_180005ea4(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
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
  iVar5 = FUN_1800065cc(param_5,param_4);
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
LAB_180005f2c:
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
  goto LAB_180005f2c;
}


/* Address: 0x180005fdc; Evidence: ev_fbe7cc73608ad5b9d78a5db6f2f193311e30d6706a7f709551a254cdd529079b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180005fdc(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,ULONG_PTR param_6,int param_7,undefined8 param_8,
                  undefined8 param_9,undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180027000 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_1800074f0;
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


/* Address: 0x1800060e0; Evidence: ev_31f17f0f285fc6eb89c3878e1e772ef78d65efa06a5cd75b83214cda3a3ed8c6 */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_180005a98();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_180005a98();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_180005a98();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}


/* Address: 0x18000611c; Evidence: ev_a6b8b3bd5fead37fef6d2b407a017e106ad98bc2103498436b6b8831505b8599 */

void FUN_18000611c(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180005a98();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180005a98();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180005a98();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180006170; Evidence: ev_25b6439438c4fdfebab09b8659794e2f7cc98dc7dfcc7938b09844bc820bca6c */

undefined8 FUN_180006170(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180005a98();
  return *(undefined8 *)(lVar1 + 0x60);
}


/* Address: 0x180006184; Evidence: ev_1be8c3661c1a6f44ed3a382e80dfb3180fa42603a2536dfa9597b1cf2d9f64d1 */

undefined8 FUN_180006184(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180005a98();
  return *(undefined8 *)(lVar1 + 0x68);
}


/* Address: 0x180006198; Evidence: ev_a03b65a11745c5560172190c4b27f6cf37229f63bf46f6cb5a46acb81ae19c5d */

void FUN_180006198(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005a98();
  *(undefined8 *)(lVar1 + 0x60) = param_1;
  return;
}


/* Address: 0x1800061b0; Evidence: ev_f0dce23325066ecaccf710b4366629a631c7d01c0342e4db16a9f7de7975e45f */

void FUN_1800061b0(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005a98();
  *(undefined8 *)(lVar1 + 0x68) = param_1;
  return;
}


/* Address: 0x1800061c8; Evidence: ev_0de3882409d939441aeb730ae972a6893074024a046821d188516e4f3d0461c8 */

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
  lVar2 = FUN_180005a98();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180005a98();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180005a98();
  thunk_FUN_180007250(param_1,&local_res8,param_3,param_4,
                      (_s_FuncInfo *)
                      ((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),0,0,0);
  return;
}


/* Address: 0x180006250; Evidence: ev_be705fdc711478a121f3c4635dc00689c6116cbe27a9b5d5e7698436268e31ce */

FARPROC FUN_180006250(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
  pFVar4 = *(FARPROC *)(&DAT_180028278 + uVar6 * 8);
  if (pFVar4 != (FARPROC)0xffffffffffffffff) {
    if (pFVar4 != (FARPROC)0x0) {
      return pFVar4;
    }
    for (; param_3 != param_4; param_3 = param_3 + 1) {
      uVar5 = (ulonglong)*param_3;
      hLibModule = *(HMODULE *)(&DAT_180028260 + uVar5 * 8);
      if (hLibModule == (HMODULE)0x0) {
        lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_fibers_l1_1_1_18001a4a8)[uVar5];
        hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
        if ((hLibModule != (HMODULE)0x0) ||
           (((DVar2 = GetLastError(), DVar2 == 0x57 &&
             (iVar3 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar3 != 0)) &&
            (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0)))
           ) {
          LOCK();
          lVar1 = *(longlong *)(&DAT_180028260 + uVar5 * 8);
          *(HMODULE *)(&DAT_180028260 + uVar5 * 8) = hLibModule;
          UNLOCK();
          if (lVar1 != 0) {
            FreeLibrary(hLibModule);
          }
          goto LAB_180006381;
        }
        LOCK();
        *(undefined8 *)(&DAT_180028260 + uVar5 * 8) = 0xffffffffffffffff;
        UNLOCK();
      }
      else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_180006381:
        pFVar4 = GetProcAddress(hLibModule,param_2);
        if (pFVar4 != (FARPROC)0x0) {
          LOCK();
          *(FARPROC *)(&DAT_180028278 + uVar6 * 8) = pFVar4;
          UNLOCK();
          return pFVar4;
        }
        break;
      }
    }
    LOCK();
    *(undefined8 *)(&DAT_180028278 + uVar6 * 8) = 0xffffffffffffffff;
    UNLOCK();
  }
  return (FARPROC)0x0;
}


/* Address: 0x1800063a0; Evidence: ev_d243a37cd20bfe7b0f83da1b0c00e95a6010188f21df15a995b12fae6a347ccc */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180006250(0,"FlsAlloc",(uint *)&DAT_18001a568,(uint *)"FlsAlloc");
  if (pFVar1 != (FARPROC)0x0) {
    (*pFVar1)(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800063de. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TlsAlloc();
  return;
}


/* Address: 0x1800063e8; Evidence: ev_6428104c7ef78cdea1a0ddd29afd3b25e42001a4b20738520f7b9a35b57c951e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180006250(1,"FlsFree",(uint *)&DAT_18001a580,(uint *)"FlsFree");
  if (pFVar1 != (FARPROC)0x0) {
    (*pFVar1)();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x000180006427. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TlsFree(param_1);
  return;
}


/* Address: 0x180006430; Evidence: ev_23a4be6b36f1710053f401a7e9e74a5c13a3de11b50ac4414ad7e42aa61d9e66 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180006250(2,"FlsGetValue",(uint *)&DAT_18001a590,(uint *)"FlsGetValue");
  if (pFVar1 != (FARPROC)0x0) {
    (*pFVar1)();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000646f. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TlsGetValue(param_1);
  return;
}


/* Address: 0x180006478; Evidence: ev_c6795254ad9070080c4f739525cf5b773d4969034f42b5776892859f52ff69d3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsSetValue
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsSetValue(DWORD param_1,LPVOID param_2)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180006250(3,"FlsSetValue",(uint *)&DAT_18001a5a8,(uint *)"FlsSetValue");
  if (pFVar1 == (FARPROC)0x0) {
    TlsSetValue(param_1,param_2);
  }
  else {
    (*pFVar1)();
  }
  return;
}


/* Address: 0x1800064cc; Evidence: ev_3076e41ee31bf3c7bf3b87533966bdf1e781ac067cc988b8a12e34fc1247d524 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_InitializeCriticalSectionEx
   
   Library: Visual Studio 2017 Release */

void __vcrt_InitializeCriticalSectionEx(LPCRITICAL_SECTION param_1,DWORD param_2,undefined4 param_3)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180006250(4,"InitializeCriticalSectionEx",(uint *)&DAT_18001a5c0,
                         (uint *)"InitializeCriticalSectionEx");
  if (pFVar1 == (FARPROC)0x0) {
    InitializeCriticalSectionAndSpinCount(param_1,param_2);
  }
  else {
    (*pFVar1)(param_1,param_2,param_3);
  }
  return;
}


/* Address: 0x180006530; Evidence: ev_dadff66d8496eeec206507a8fb296223e8123ef9c1d36d04724d348ee8c484ab */

void FUN_180006530(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + *param_1) == -2) {
    FUN_1800065d4(param_3,(longlong)param_2,*param_2);
  }
  return;
}


/* Address: 0x180006558; Evidence: ev_02bae53222e96b70873f124891478142bf1470e40cb2c5e70bfccdd15be4ca33 */

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
  
  plVar1 = FUN_180005db8(param_1,param_2,param_3,local_res18);
  return *(undefined4 *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1);
}


/* Address: 0x180006584; Evidence: ev_42319f56d72547f1b3b1a8ff9a3f65c1e9f8e27fd4e0fe2b4531149b332c3c00 */

void FUN_180006584(longlong *param_1,longlong param_2,undefined4 param_3)

{
  *(undefined4 *)((longlong)*(int *)(param_2 + 0x1c) + *param_1) = param_3;
  return;
}


/* Address: 0x180006590; Evidence: ev_570c0171dcfbf9589a68f7b1d019b3112e84bf1c29f6e6fb05f037c8705420d2 */

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
  
  plVar1 = FUN_180005db8(param_1,param_2,param_3,local_res18);
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) < param_4) {
    *(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) = param_4;
  }
  return;
}


/* Address: 0x1800065cc; Evidence: ev_867c18459f7d0f34a23a74eef04cbb9f31d9db0060c77ae1268b31690fc6ca06 */

void FUN_1800065cc(longlong param_1,ulonglong *param_2)

{
  FUN_1800065d4(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x1800065d4; Evidence: ev_85324b22c6066afb94c8919759b490c952aa3f217f37a6908e8d937b819bb833 */

undefined4 FUN_1800065d4(longlong param_1,longlong param_2,ulonglong param_3)

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


/* Address: 0x18000663c; Evidence: ev_cbe5cff06cacd09ef96612c81fa92e36dd88a762271478f0a5d055737f2e0e7a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_18000663c(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
    lVar2 = FUN_180006170();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180006170();
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
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_1800281a8 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180006184();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180006184();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_1800067ee;
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
                  FUN_1800058e8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_180017e30(param_2,pauVar3,(longlong)iVar1);
        goto LAB_1800067ee;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_180017e30(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_1800067ee;
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
    lVar2 = (*(code *)DAT_1800281a8)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_1800058e8(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_1800067ee:
  return (char)uVar6;
}


/* Address: 0x180006830; Evidence: ev_198f519139aee36652a9b7c1ed7e409e03493ebf1d696acd6c957e1ce5b5a0fb */

void FUN_180006830(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
  cVar1 = FUN_18000663c(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_1800058e8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006184();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_180007b0c(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_1800058e8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180006184();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_180007b18(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x1800068f0; Evidence: ev_a397edc8658419327ac868c83da5f0185ebc50a1d5392439abdd8ea633060fe7 */

void FUN_1800068f0(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
  pauVar4 = (undefined1 (*) [32])FUN_180005db8(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_180006830(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180006170();
  FUN_180005fdc(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x1800069c8; Evidence: ev_a55dc0289a10fa44160c6ad6d61c9f792677cb7cbcf43cc655111f8397d8eab1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800069c8(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,uint *param_5
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
  
  local_58 = DAT_180027000 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar5 = FUN_180007900(param_2,param_4,(longlong)param_5);
  if ((-2 < iVar5) && (iVar5 < (int)param_5[1])) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar7 = FUN_180005a98();
      if (*(longlong *)(lVar7 + 0x20) == 0) {
        return;
      }
      lVar7 = FUN_180005a98();
      param_1 = *(int **)(lVar7 + 0x20);
      lVar7 = FUN_180005a98();
      local_100 = *(ULONG_PTR *)(lVar7 + 0x28);
      FUN_1800061b0(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_180006ec3;
      lVar7 = FUN_180005a98();
      if (*(longlong *)(lVar7 + 0x38) != 0) {
        lVar7 = FUN_180005a98();
        piVar11 = *(int **)(lVar7 + 0x38);
        lVar7 = FUN_180005a98();
        *(undefined8 *)(lVar7 + 0x38) = 0;
        cVar3 = FUN_18000799c((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          uVar8 = FUN_180007a84(piVar11);
          if ((char)uVar8 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_18000b4ec();
          }
          FUN_180005840(param_1);
          FUN_1800074c8(&local_c8);
                    /* WARNING: Subroutine does not return */
          FUN_1800056dc(&local_c8,&DAT_1800260c0);
        }
      }
    }
    uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
    local_a8 = param_4[1];
    local_b0 = param_5;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
      if (param_5[3] != 0) {
        FUN_180005ea4(&local_90,&local_b0,iVar5,param_4,(longlong)param_5);
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
                  lVar7 = FUN_180006184();
                  piVar11 = (int *)(lVar7 + 4 + (longlong)iVar13);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_180006184();
                  for (iVar13 = *(int *)(lVar7 + iVar13); 0 < iVar13; iVar13 = iVar13 + -1) {
                    iVar2 = *piVar11;
                    lVar7 = FUN_180006184();
                    uVar9 = FUN_180007130((byte *)&local_70,(byte *)(iVar2 + lVar7),
                                          *(byte **)(param_1 + 0xc));
                    if ((int)uVar9 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_1800068f0((ULONG_PTR)param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,
                                    (byte *)&local_70,(byte *)(iVar2 + lVar7),
                                    in_stack_fffffffffffffed0);
                      goto LAB_180006d33;
                    }
                    piVar11 = piVar11 + 1;
                  }
                  uVar12 = (int)uVar8 + 1;
                  uVar8 = (ulonglong)uVar12;
                } while (uVar12 != local_d8);
              }
            }
LAB_180006d33:
            uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar6 = uVar6 + 1;
          } while (uVar6 < local_78);
        }
      }
      if ((0x19930520 < (*param_5 & 0x1fffffff)) &&
         (((uVar6 = param_5[8], uVar6 != 0 && (lVar7 = FUN_180006170(), lVar7 + (int)uVar6 != 0)) ||
          (((param_5[9] & 4) != 0 && (bVar4 = FUN_180005d28(param_4,(longlong)param_5), !bVar4))))))
      {
        if ((param_5[9] & 4) != 0) {
          lVar7 = FUN_180005a98();
          *(int **)(lVar7 + 0x20) = param_1;
          lVar7 = FUN_180005a98();
          *(ULONG_PTR *)(lVar7 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_18000b4ec();
        }
        uVar6 = param_5[8];
        if (uVar6 == 0) {
          piVar11 = (int *)0x0;
        }
        else {
          lVar7 = FUN_180006170();
          piVar11 = (int *)((int)uVar6 + lVar7);
        }
        cVar3 = FUN_18000799c((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          plVar10 = FUN_180005db8(param_2,param_4,(longlong)param_5,&local_e0);
          FUN_180005fdc(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar10,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar14,0xffffffff),0,param_4,param_6);
        }
      }
    }
    else if (param_5[3] != 0) {
      if (param_6 != 0) goto LAB_180006ec3;
      FUN_180006ecc(param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,iVar5);
    }
    lVar7 = FUN_180005a98();
    if (*(longlong *)(lVar7 + 0x38) == 0) {
      return;
    }
  }
LAB_180006ec3:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180006ecc; Evidence: ev_cf8582b85c7243daa8a7f8ad5123bfc1385080cd9ff482c9a22fab03fa668903 */

void FUN_180006ecc(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
    lVar3 = FUN_180005a98();
    if (*(longlong *)(lVar3 + 0x10) != 0) {
      pvVar4 = EncodePointer((PVOID)0x0);
      lVar3 = FUN_180005a98();
      if ((((*(PVOID *)(lVar3 + 0x10) != pvVar4) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar1 = FUN_180005c70(param_1,param_2,param_3), iVar1 != 0)
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
    FUN_180005ea4(&local_60,&local_98,param_6,param_4,param_5);
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
          if ((iVar1 != 0) && (lVar3 = FUN_180006170(), lVar3 + iVar1 != 0)) {
            iVar1 = *(int *)(pbVar5 + 4);
            if (iVar1 == 0) {
              lVar3 = 0;
            }
            else {
              lVar3 = FUN_180006170();
              lVar3 = lVar3 + iVar1;
            }
            if (*(char *)(lVar3 + 0x10) != '\0') goto LAB_1800070f5;
          }
          if ((*pbVar5 & 0x40) == 0) {
            FUN_1800068f0((ULONG_PTR)param_1,param_2,param_3,param_4,param_5,pbVar5,(byte *)0x0,
                          (int *)local_78);
          }
        }
LAB_1800070f5:
        uVar2 = uVar2 + 1;
      } while (uVar2 < local_48);
    }
  }
  return;
}


/* Address: 0x180007130; Evidence: ev_c14665886d2fbcb55f92f9be0514e1d3ffc816111f26e1af9b7d248c5fc16570 */

undefined8 FUN_180007130(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_180006170(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_180006170();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_180006170();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_180006184();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_180006170();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_180006184();
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


/* Address: 0x180007250; Evidence: ev_370a7ed40a6818ba086e7448f865eed8b9469bc6c6dbaeced4b10b3e20602887 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180007250(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180005a98();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_1800072be;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_1800072be:
      if (bVar5) goto LAB_1800072d5;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_1800072d5:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180006170(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_180006184();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_1800069c8(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_180007361:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_1800065d4((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000747d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180007361;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000747d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180007774((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x180007484; Evidence: ev_41dba6406169c0d253a69fd0a81190ac1c08b75c63ec620117ab54dbf14e1b29 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
thunk_FUN_180007250(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180005a98();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_1800072be;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_1800072be:
      if (bVar5) goto LAB_1800072d5;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_1800072d5:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180006170(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_180006184();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_1800069c8(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_180007361:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_1800065d4((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000747d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180007361;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000747d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180007774((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000748c; Evidence: ev_1991d0e3fae2e8acabb8334a2ae173f45b4fa21f010c9425cfd9a81cb5f854f6 */

undefined8 * FUN_18000748c(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005634((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x1800074c8; Evidence: ev_2f21744dceaa569c986a858eb4a8f19cbe97fecf66417fa1188637c61dbe635b */

undefined8 * FUN_1800074c8(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x1800074f0; Evidence: ev_c0911d7c73482d8f855b96e6b7e7c5873142ab443b85c5388b433c6c1c66e7bc */

undefined8 FUN_1800074f0(longlong param_1)

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
  
  lVar6 = FUN_180005a98();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180005a98();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_180005a98();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_180005a98();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_180005a98();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180005a98();
  }
  uVar10 = _CallSettingFrame();
  FUN_18000611c((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_180005840(piVar3);
  }
  lVar8 = FUN_180005a98();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_180005a98();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}


/* Address: 0x1800076dc; Evidence: ev_bfb272115574d0fefab17c1e8a98ed87dd2e752b7d586956d1b9f6bd6792801e */

undefined8 FUN_1800076dc(undefined8 *param_1,longlong param_2,undefined4 *param_3)

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
      lVar2 = FUN_180005a98();
      *(undefined4 *)(lVar2 + 0x40) = 1;
      *param_3 = 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x180007774; Evidence: ev_d49b5af77ea28a675c56a142ec715985460b884fe721313a096a36b5c818349b */

void FUN_180007774(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180006170();
  iVar2 = FUN_180006530(param_1,param_2,param_3);
  lVar4 = FUN_180005a98();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180006170();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180006170();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180006170();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180006170();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180006584(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180006170();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180006170();
        FUN_180006170();
      }
      _CallSettingFrame();
      FUN_180006198(uVar3);
    }
  }
  lVar4 = FUN_180005a98();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180005a98();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180006584(param_1,param_3,iVar2);
  return;
}


/* Address: 0x180007900; Evidence: ev_ae802a74cdb89ad2426daa19caab7b31b59118a942af76450d0c6ba35b8653a1 */

int FUN_180007900(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_1800065cc(param_3,param_2);
  FUN_180005db8(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_180006584(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}


/* Address: 0x18000799c; Evidence: ev_533c85a1b1afb8fc1ff4e4553eb8b54ee2269b89f8ac11f54f9657637f4fb1a5 */

undefined1 FUN_18000799c(longlong param_1,int *param_2)

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
      lVar4 = FUN_180006184();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_180006184();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_180006184();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_180006170();
          uVar6 = FUN_180007130((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
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


/* Address: 0x180007a84; Evidence: ev_346f67e9dabf3d33f5bf1de9dbdc6c1c65e8e0d9e259a56ce44e114a2ed1f234 */

ulonglong FUN_180007a84(int *param_1)

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
      lVar2 = FUN_180006170();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_180006170();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_180006170();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_180005784(lVar2 + 8,0x180027b58);
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


/* Address: 0x180007b0c; Evidence: ev_5375b7aaacd8a3137ca551ad5d98ad4cff7c3c78addd7a086837fa45bd002096 */

void FUN_180007b0c(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3)

{
                    /* WARNING: Could not recover jumptable at 0x000180007b12. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3);
  return;
}


/* Address: 0x180007b18; Evidence: ev_71e24ecc66e67ee8c61a51258349bcf105ce6cafcbeb8fe6f99ae8bd597c3a9b */

void FUN_180007b18(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3,
                  undefined4 param_4)

{
                    /* WARNING: Could not recover jumptable at 0x000180007b24. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3,param_4);
  return;
}


/* Address: 0x180007b70; Evidence: ev_7c2f66529c9b9d95d9ee004ec55c35de4640e9541e01dc4a4818e455df71c171 */

/* Library Function - Single Match
    _CallSettingFrame
   
   Library: Visual Studio */

void _CallSettingFrame(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_1800059c0();
  (*pcVar1)();
  FUN_1800059f0();
  FUN_1800059c0();
  return;
}


/* Address: 0x180007bb0; Evidence: ev_61de1aa6d84d47fe6eedf0f0cac716a4ffba3e2c9577544468482278ba915f37 */

longlong * FUN_180007bb0(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_180027310;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18002844c == 0) {
    param_1[1] = (longlong)PTR_PTR_180027308;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_18000bc18();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_18000be50(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}


/* Address: 0x180007c70; Evidence: ev_f07d33e417763f8abf6ef13a7dcf64fbf2949fbfa66e49bc20c0e1a5dd062daf */

undefined8 FUN_180007c70(longlong param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  
  if ((param_1 == 0) || (param_2 == 0)) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000821c();
  }
  return 0x7fffffff;
}


/* Address: 0x180007ca0; Evidence: ev_5497edad8522202d1e42d51c6f4799975d4e6f3f440a043425cd5584e1850502 */

void FUN_180007ca0(byte *param_1,byte *param_2)

{
  byte bVar1;
  byte bVar2;
  uint uVar3;
  uint uVar4;
  
  if (DAT_18002844c != 0) {
    FUN_180007d10(param_1,param_2,(undefined8 *)0x0);
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
  FUN_180007c70((longlong)param_1,(longlong)param_2);
  return;
}


/* Address: 0x180007d10; Evidence: ev_6a114086cddf8031b6a654085f8238ce60ad639bf5364de27196a478c9f9f8aa */

int FUN_180007d10(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  __acrt_ptd *p_Var3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    p_Var3 = FUN_18000b774();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000821c();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18002844c == 0) {
      local_20 = PTR_PTR_180027308;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_18000bc18();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_18000be50(local_28,&lStack_18);
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


/* Address: 0x180007e30; Evidence: ev_421502c4bc9d18bcb54d3df05b82d93ad49af5559631e83de86590c1ca0a548a */

longlong FUN_180007e30(longlong *param_1)

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
    p_Var1 = FUN_18000bd08(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
    if (p_Var1 == (__acrt_ptd *)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return *param_1;
}


/* Address: 0x180007e98; Evidence: ev_a8c80000cf21d5dad79e95d949c674d83f828125b4b220f7400ff25c10924d02 */

__acrt_ptd * FUN_180007e98(longlong *param_1)

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
    p_Var1 = FUN_18000bd08(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
  }
  return p_Var1;
}


/* Address: 0x180007f04; Evidence: ev_184e45ca81b67a22b06bc9d99a6a0b2b1566ba7c17f335428c7b8a800418f210 */

longlong FUN_180007f04(longlong param_1,longlong param_2)

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


/* Address: 0x180007f50; Evidence: ev_4e26ee101cc56458c59eb4bdd77fb506426277bfc357fed53fe8a43d55ac80a9 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180007f50(int param_1,DWORD param_2,DWORD param_3)

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
  
  local_28 = DAT_180027000 ^ (ulonglong)auStackY_608;
  if (param_1 != -1) {
    FUN_180004e90();
  }
  FUN_180017a70((undefined1 (*) [32])&local_598,0,0x98);
  FUN_180017a70((undefined1 (*) [32])&local_4f8,0,0x4d0);
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
    FUN_180004e90();
  }
  return;
}


/* Address: 0x1800080c0; Evidence: ev_c8cc01ad6ea51d32ffd9b6f5c65a2a7a66bb6d00e6ec93d2a0b8349c3f06e093 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_1800080c0(undefined8 param_1)

{
  _DAT_1800282a8 = param_1;
  return;
}


/* Address: 0x1800080c8; Evidence: ev_e492b507cc034acf54174decc9f8fdeba56dbcec2cbc12166caf54421cc5eb00 */

void FUN_1800080c8(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
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
  local_20 = DAT_18002844c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_180027308;
    puStack_28 = PTR_DAT_180027310;
  }
  FUN_180008164(param_1,param_2,param_3,param_4,param_5,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar1 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar1 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar1 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar1 + 0x24) = local_14;
  }
  return;
}


/* Address: 0x180008164; Evidence: ev_63544f9b83ca7596c2eb7c32c6e0fe22d4d0db1179409aaa85550229e89e346b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008164(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_180007e98(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_180007f04(0x1800282a8,(longlong)param_6);
    bVar3 = (byte)DAT_180027000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_180027000) >> bVar3 | (*puVar2 ^ DAT_180027000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}


/* Address: 0x18000821c; Evidence: ev_25c0091f852ece1845d9330335658d16c454deb8981de2ba2c763bcef0dc43ec */

void FUN_18000821c(void)

{
  FUN_1800080c8((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  return;
}


/* Address: 0x18000823c; Evidence: ev_0c5251ea819530c394d18d2e0c77cb27d5c10d55173412845e689d8b8b3897bf */

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
  *(undefined8 *)(puVar3 + -8) = 0x18000826a;
  FUN_180007f50(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x180008270;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000827c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}


/* Address: 0x180008290; Evidence: ev_1ee8cdf77fe0c124e3165ce3cf0e593ae1a0d70549b39c7fdd61591c1eceb76d */

undefined8 FUN_180008290(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_1800282b0 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_1800282b0) goto LAB_1800082cd;
  }
  DAT_1800282b0 = iVar4;
LAB_1800082cd:
  DAT_1800282b8 = _calloc_base((longlong)DAT_1800282b0,8);
  FUN_18000bff0((LPVOID)0x0);
  if (DAT_1800282b8 == (LPVOID)0x0) {
    DAT_1800282b0 = 3;
    DAT_1800282b8 = _calloc_base(3,8);
    FUN_18000bff0((LPVOID)0x0);
    if (DAT_1800282b8 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_180027098;
  puVar6 = &DAT_180027080;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_1800282b8) = puVar6;
    if (*(longlong *)((&DAT_180028520)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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


/* Address: 0x1800083b0; Evidence: ev_93f8046102407148eda6be5f0766cf306fec6618b943260a34cad15a9b872380 */

undefined * FUN_1800083b0(ulonglong param_1)

{
  return &DAT_180027080 + (param_1 & 0xffffffff) * 0x58;
}


/* Address: 0x1800083d0; Evidence: ev_72ce0efaa18c718a4a293e6672d76f4a8dec9b46e453af0402528aa3d1fd272d */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_18000c4f4();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_1800282b8));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_1800282b8) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_18000bff0(DAT_1800282b8);
  DAT_1800282b8 = (LPVOID)0x0;
  return;
}


/* Address: 0x18000842c; Evidence: ev_f4382740d53d09dc59c712f8c662612a57ad46dbaa4e681a76ed1fc06f6be8f0 */

void FUN_18000842c(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180008430. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x180008438; Evidence: ev_790339442f9ab1a489839c839a1b5de32fbb91b0ef5b1c7f68179c04204393d8 */

void FUN_180008438(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000843c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x180008444; Evidence: ev_e5ea6ed7d85d00374f6489deda6e2bba6cbd7986cb092cb1b6ad6de6da8441a7 */

void FUN_180008444(wint_t param_1)

{
  iswctype(param_1,0x20);
  return;
}


/* Address: 0x180008450; Evidence: ev_6020303642534b57cba425a5c509c33b9d1bb6d837afdd74f696cd2e89162fe3 */

/* Library Function - Multiple Matches With Same Base Name
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_047e091329b3cc2dd92c1150cfbc4be8>,class <lambda_3126a0d026c48c72336a1719c85146ae> &
   __ptr64,class <lambda_8e8daf2dfdb49c56842017fc8f5e8e6a> >(class
   <lambda_047e091329b3cc2dd92c1150cfbc4be8> && __ptr64,class
   <lambda_3126a0d026c48c72336a1719c85146ae> & __ptr64,class
   <lambda_8e8daf2dfdb49c56842017fc8f5e8e6a> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_055ea3fc45cdc376d473b135b391c6de>,class <lambda_c695f53ca71df4e62c0528096d5d0bf6> &
   __ptr64,class <lambda_872dedf902327e54f4e2de7ca48e001f> >(class
   <lambda_055ea3fc45cdc376d473b135b391c6de> && __ptr64,class
   <lambda_c695f53ca71df4e62c0528096d5d0bf6> & __ptr64,class
   <lambda_872dedf902327e54f4e2de7ca48e001f> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_082dd7c0feb7dbdaf245f261e54a6583>,class <lambda_f3caf1ecae5fe01a9a1a6239afa44510> &
   __ptr64,class <lambda_c640b76c0755ae85b317b35c67c61e6b> >(class
   <lambda_082dd7c0feb7dbdaf245f261e54a6583> && __ptr64,class
   <lambda_f3caf1ecae5fe01a9a1a6239afa44510> & __ptr64,class
   <lambda_c640b76c0755ae85b317b35c67c61e6b> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_0d412022a4b28cc8a401ea49574e8ae6>,class <lambda_a775ed57af18ba8e4d5dc780aa9068fe> &
   __ptr64,class <lambda_975a71a6baa488a08f4e15f6b0339b9e> >(class
   <lambda_0d412022a4b28cc8a401ea49574e8ae6> && __ptr64,class
   <lambda_a775ed57af18ba8e4d5dc780aa9068fe> & __ptr64,class
   <lambda_975a71a6baa488a08f4e15f6b0339b9e> && __ptr64) __ptr64
     36 names - too many to list
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 operator()<>(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  undefined4 uVar1;
  
  FUN_18000842c(*param_2);
  uVar1 = FUN_18000913c(param_3);
  FUN_180008438(*param_4);
  return uVar1;
}


/* Address: 0x180008490; Evidence: ev_1eda10de8d106b5a7afd536f2e96d8ea3554dd99288dfe69301f5f115dcfd9c8 */

bool FUN_180008490(longlong param_1,ulonglong param_2,longlong param_3)

{
  ulonglong uVar1;
  LPVOID pvVar2;
  bool bVar3;
  
  if (param_2 < 0x8000000000000000) {
    uVar1 = param_2 * 2;
    if (((*(longlong *)(param_1 + 0x408) == 0) && (uVar1 < 0x401)) ||
       (uVar1 <= *(ulonglong *)(param_1 + 0x400))) {
      bVar3 = true;
    }
    else {
      pvVar2 = _malloc_base(uVar1);
      bVar3 = pvVar2 != (LPVOID)0x0;
      if (bVar3) {
        FUN_18000bff0(*(LPVOID *)(param_1 + 0x408));
        *(LPVOID *)(param_1 + 0x408) = pvVar2;
        *(ulonglong *)(param_1 + 0x400) = uVar1;
      }
      FUN_18000bff0((LPVOID)0x0);
    }
  }
  else {
    *(undefined1 *)(param_3 + 0x30) = 1;
    bVar3 = false;
    *(undefined4 *)(param_3 + 0x2c) = 0xc;
  }
  return bVar3;
}


/* Address: 0x180008538; Evidence: ev_2abf463f1bb96cb71e1271b8d883bed6c78d91ba2f391314903cd26284027430 */

uint FUN_180008538(longlong *param_1,longlong *param_2,uint param_3,byte param_4)

{
  char cVar1;
  char *pcVar2;
  longlong *plVar3;
  ulonglong uVar4;
  byte bVar5;
  int iVar6;
  uint uVar7;
  __acrt_ptd *p_Var8;
  ulonglong uVar9;
  byte bVar10;
  uint uVar11;
  char *pcVar12;
  char cVar13;
  byte bVar14;
  uint uVar15;
  
  pcVar2 = (char *)*param_2;
  uVar4 = (ulonglong)param_3;
  if (pcVar2 == (char *)0x0) {
    p_Var8 = FUN_18000b774();
    *(undefined4 *)p_Var8 = 0x16;
    FUN_18000821c();
LAB_1800085a9:
    if ((longlong *)param_2[1] != (longlong *)0x0) {
      *(longlong *)param_2[1] = *param_2;
    }
    return 0;
  }
  if ((param_3 != 0) && (0x22 < param_3 - 2)) {
    *(undefined1 *)(param_1 + 6) = 1;
    *(undefined4 *)((longlong)param_1 + 0x2c) = 0x16;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_1);
    goto LAB_1800085a9;
  }
  cVar13 = *pcVar2;
  pcVar12 = pcVar2 + 1;
  *param_2 = (longlong)pcVar12;
  bVar14 = param_4 | 2;
  if ((cVar13 == '-') || (bVar14 = param_4, cVar13 == '+')) {
    cVar13 = *pcVar12;
    pcVar12 = pcVar2 + 2;
    *param_2 = (longlong)pcVar12;
  }
  uVar9 = uVar4;
  if ((param_3 & 0xffffffef) == 0) {
    if ((byte)(cVar13 - 0x30U) < 10) {
      iVar6 = cVar13 + -0x30;
LAB_18000862f:
      if (iVar6 != 0) goto LAB_18000867d;
      cVar1 = *pcVar12;
      *param_2 = (longlong)(pcVar12 + 1);
      if ((cVar1 + 0xa8U & 0xdf) != 0) {
        *param_2 = (longlong)pcVar12;
        uVar9 = 8;
        if (param_3 != 0) {
          uVar9 = uVar4;
        }
        if ((cVar1 != '\0') && (*pcVar12 != cVar1)) {
          p_Var8 = FUN_18000b774();
          *(undefined4 *)p_Var8 = 0x16;
          FUN_18000821c();
        }
        goto LAB_180008689;
      }
      cVar13 = pcVar12[1];
      *param_2 = (longlong)(pcVar12 + 2);
      uVar9 = 0x10;
    }
    else {
      if ((byte)(cVar13 + 0x9fU) < 0x1a) {
        iVar6 = cVar13 + -0x57;
        goto LAB_18000862f;
      }
      if ((byte)(cVar13 + 0xbfU) < 0x1a) {
        iVar6 = cVar13 + -0x37;
        goto LAB_18000862f;
      }
LAB_18000867d:
      uVar9 = 10;
    }
    if (param_3 != 0) {
      uVar9 = uVar4;
    }
  }
LAB_180008689:
  pcVar12 = (char *)*param_2;
  uVar15 = 0;
  while( true ) {
    if ((byte)(cVar13 - 0x30U) < 10) {
      uVar11 = (int)cVar13 - 0x30;
    }
    else if ((byte)(cVar13 + 0x9fU) < 0x1a) {
      uVar11 = (int)cVar13 - 0x57;
    }
    else if ((byte)(cVar13 + 0xbfU) < 0x1a) {
      uVar11 = (int)cVar13 - 0x37;
    }
    else {
      uVar11 = 0xffffffff;
    }
    if ((uint)uVar9 <= uVar11) break;
    cVar13 = *pcVar12;
    uVar7 = uVar15 * (uint)uVar9;
    uVar11 = uVar7 + uVar11;
    bVar14 = bVar14 | (uVar11 < uVar7 || (uint)(0xffffffff / uVar9) < uVar15) << 2 | 8U;
    pcVar12 = pcVar12 + 1;
    *param_2 = (longlong)pcVar12;
    uVar15 = uVar11;
  }
  *param_2 = (longlong)(pcVar12 + -1);
  if ((cVar13 != '\0') && (pcVar12[-1] != cVar13)) {
    p_Var8 = FUN_18000b774();
    *(undefined4 *)p_Var8 = 0x16;
    FUN_18000821c();
  }
  if ((bVar14 & 8) == 0) {
    *param_2 = (longlong)pcVar2;
    if ((undefined8 *)param_2[1] == (undefined8 *)0x0) {
      return 0;
    }
    *(undefined8 *)param_2[1] = pcVar2;
    return 0;
  }
  if ((bVar14 & 4) == 0) {
    if ((bVar14 & 1) == 0) {
      if ((bVar14 & 2) == 0) goto LAB_1800087bd;
LAB_1800087ba:
      uVar15 = -uVar15;
      goto LAB_1800087bd;
    }
    if ((bVar14 & 2) == 0) {
      if (uVar15 < 0x80000000) goto LAB_1800087bd;
    }
    else if (uVar15 < 0x80000001) goto LAB_1800087ba;
    bVar10 = 1;
    bVar5 = bVar14;
  }
  else {
    bVar10 = bVar14;
    bVar5 = 1;
  }
  *(undefined1 *)(param_1 + 6) = 1;
  *(undefined4 *)((longlong)param_1 + 0x2c) = 0x22;
  if ((bVar5 & bVar10) != 0) {
    plVar3 = (longlong *)param_2[1];
    if ((bVar14 & 2) != 0) {
      if (plVar3 != (longlong *)0x0) {
        *plVar3 = *param_2;
      }
      return 0x80000000;
    }
    if (plVar3 != (longlong *)0x0) {
      *plVar3 = *param_2;
      return 0x7fffffff;
    }
    return 0x7fffffff;
  }
  uVar15 = 0xffffffff;
LAB_1800087bd:
  if ((longlong *)param_2[1] != (longlong *)0x0) {
    *(longlong *)param_2[1] = *param_2;
    return uVar15;
  }
  return uVar15;
}


/* Address: 0x1800087ec; Evidence: ev_c2d88f8a35dec147bb79fb6060857464413c41cfa2463c79b0bb5d2bea2f8974 */

ulonglong FUN_1800087ec(longlong param_1)

{
  ulonglong *puVar1;
  ushort *puVar2;
  byte *pbVar3;
  uint *puVar4;
  char *pcVar5;
  uint uVar6;
  ulonglong uVar7;
  longlong lVar8;
  int iVar9;
  
  iVar9 = *(int *)(param_1 + 0x34);
  if (iVar9 < 6) {
    if (iVar9 != 5) {
      if (iVar9 != 0) {
        if (iVar9 == 1) {
          uVar6 = *(uint *)(param_1 + 0x28);
          lVar8 = 1;
          pbVar3 = *(byte **)(param_1 + 0x18);
          *(byte **)(param_1 + 0x18) = pbVar3 + 8;
          if ((uVar6 >> 4 & 1) == 0) {
            uVar7 = (ulonglong)*pbVar3;
          }
          else {
            uVar7 = (ulonglong)(char)*pbVar3;
          }
          goto LAB_18000886a;
        }
        iVar9 = iVar9 + -2;
        if (iVar9 == 0) {
          uVar6 = *(uint *)(param_1 + 0x28);
          lVar8 = 2;
          puVar2 = *(ushort **)(param_1 + 0x18);
          *(ushort **)(param_1 + 0x18) = puVar2 + 4;
          if ((uVar6 >> 4 & 1) == 0) {
            uVar7 = (ulonglong)*puVar2;
          }
          else {
            uVar7 = (ulonglong)(short)*puVar2;
          }
          goto LAB_18000886a;
        }
        goto LAB_18000883a;
      }
LAB_18000893f:
      uVar6 = *(uint *)(param_1 + 0x28);
      lVar8 = 4;
      puVar4 = *(uint **)(param_1 + 0x18);
      *(uint **)(param_1 + 0x18) = puVar4 + 2;
      if ((uVar6 >> 4 & 1) == 0) {
        uVar7 = (ulonglong)*puVar4;
      }
      else {
        uVar7 = (ulonglong)(int)*puVar4;
      }
      goto LAB_18000886a;
    }
  }
  else if (((iVar9 != 6) && (iVar9 != 7)) && (iVar9 = iVar9 + -9, iVar9 != 0)) {
LAB_18000883a:
    if (iVar9 == 1) goto LAB_18000893f;
    if (iVar9 != 2) {
      lVar8 = *(longlong *)(param_1 + 8);
      *(undefined1 *)(lVar8 + 0x30) = 1;
      *(undefined4 *)(lVar8 + 0x2c) = 0x16;
      uVar7 = FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,
                            *(longlong **)(param_1 + 8));
      return uVar7 & 0xffffffffffffff00;
    }
  }
  uVar6 = *(uint *)(param_1 + 0x28);
  lVar8 = 8;
  puVar1 = *(ulonglong **)(param_1 + 0x18);
  *(ulonglong **)(param_1 + 0x18) = puVar1 + 1;
  uVar7 = *puVar1;
LAB_18000886a:
  if (((uVar6 >> 4 & 1) != 0) && ((longlong)uVar7 < 0)) {
    uVar7 = -uVar7;
    uVar6 = uVar6 | 0x40;
    *(uint *)(param_1 + 0x28) = uVar6;
  }
  if (*(int *)(param_1 + 0x30) < 0) {
    *(undefined4 *)(param_1 + 0x30) = 1;
  }
  else {
    *(uint *)(param_1 + 0x28) = uVar6 & 0xfffffff7;
    FUN_180008490(param_1 + 0x50,(longlong)*(int *)(param_1 + 0x30),*(longlong *)(param_1 + 8));
  }
  if (uVar7 == 0) {
    *(uint *)(param_1 + 0x28) = *(uint *)(param_1 + 0x28) & 0xffffffdf;
  }
  *(undefined1 *)(param_1 + 0x4c) = 0;
  if (lVar8 == 8) {
    FUN_180008f98(param_1,uVar7);
  }
  else {
    FUN_180008df8(param_1,(uint)uVar7);
  }
  uVar6 = *(uint *)(param_1 + 0x28) >> 7;
  pcVar5 = (char *)(ulonglong)uVar6;
  if (((uVar6 & 1) != 0) &&
     ((*(int *)(param_1 + 0x48) == 0 || (pcVar5 = *(char **)(param_1 + 0x40), *pcVar5 != '0')))) {
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    **(undefined1 **)(param_1 + 0x40) = 0x30;
    *(int *)(param_1 + 0x48) = *(int *)(param_1 + 0x48) + 1;
  }
  return CONCAT71((int7)((ulonglong)pcVar5 >> 8),1);
}


/* Address: 0x1800089f0; Evidence: ev_ded1cefa6b59e730fa1882f752835dd9cd6e7d87f1428fcbad1f66bcedfe28a3 */

ulonglong FUN_1800089f0(longlong param_1,byte param_2)

{
  ulonglong *puVar1;
  ushort *puVar2;
  byte *pbVar3;
  uint *puVar4;
  char *pcVar5;
  uint uVar6;
  ulonglong uVar7;
  longlong lVar8;
  int iVar9;
  
  iVar9 = *(int *)(param_1 + 0x34);
  if (iVar9 < 6) {
    if (iVar9 != 5) {
      if (iVar9 != 0) {
        if (iVar9 == 1) {
          uVar6 = *(uint *)(param_1 + 0x28);
          lVar8 = 1;
          pbVar3 = *(byte **)(param_1 + 0x18);
          *(byte **)(param_1 + 0x18) = pbVar3 + 8;
          if ((uVar6 >> 4 & 1) == 0) {
            uVar7 = (ulonglong)*pbVar3;
          }
          else {
            uVar7 = (ulonglong)(char)*pbVar3;
          }
          goto LAB_180008a6e;
        }
        iVar9 = iVar9 + -2;
        if (iVar9 == 0) {
          uVar6 = *(uint *)(param_1 + 0x28);
          lVar8 = 2;
          puVar2 = *(ushort **)(param_1 + 0x18);
          *(ushort **)(param_1 + 0x18) = puVar2 + 4;
          if ((uVar6 >> 4 & 1) == 0) {
            uVar7 = (ulonglong)*puVar2;
          }
          else {
            uVar7 = (ulonglong)(short)*puVar2;
          }
          goto LAB_180008a6e;
        }
        goto LAB_180008a3e;
      }
LAB_180008b43:
      uVar6 = *(uint *)(param_1 + 0x28);
      lVar8 = 4;
      puVar4 = *(uint **)(param_1 + 0x18);
      *(uint **)(param_1 + 0x18) = puVar4 + 2;
      if ((uVar6 >> 4 & 1) == 0) {
        uVar7 = (ulonglong)*puVar4;
      }
      else {
        uVar7 = (ulonglong)(int)*puVar4;
      }
      goto LAB_180008a6e;
    }
  }
  else if (((iVar9 != 6) && (iVar9 != 7)) && (iVar9 = iVar9 + -9, iVar9 != 0)) {
LAB_180008a3e:
    if (iVar9 == 1) goto LAB_180008b43;
    if (iVar9 != 2) {
      lVar8 = *(longlong *)(param_1 + 8);
      *(undefined1 *)(lVar8 + 0x30) = 1;
      *(undefined4 *)(lVar8 + 0x2c) = 0x16;
      uVar7 = FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,
                            *(longlong **)(param_1 + 8));
      return uVar7 & 0xffffffffffffff00;
    }
  }
  uVar6 = *(uint *)(param_1 + 0x28);
  lVar8 = 8;
  puVar1 = *(ulonglong **)(param_1 + 0x18);
  *(ulonglong **)(param_1 + 0x18) = puVar1 + 1;
  uVar7 = *puVar1;
LAB_180008a6e:
  if (((uVar6 >> 4 & 1) != 0) && ((longlong)uVar7 < 0)) {
    uVar7 = -uVar7;
    uVar6 = uVar6 | 0x40;
    *(uint *)(param_1 + 0x28) = uVar6;
  }
  if (*(int *)(param_1 + 0x30) < 0) {
    *(undefined4 *)(param_1 + 0x30) = 1;
  }
  else {
    *(uint *)(param_1 + 0x28) = uVar6 & 0xfffffff7;
    FUN_180008490(param_1 + 0x50,(longlong)*(int *)(param_1 + 0x30),*(longlong *)(param_1 + 8));
  }
  if (uVar7 == 0) {
    *(uint *)(param_1 + 0x28) = *(uint *)(param_1 + 0x28) & 0xffffffdf;
  }
  *(undefined1 *)(param_1 + 0x4c) = 0;
  if (lVar8 == 8) {
    FUN_180009008(param_1,uVar7,param_2);
  }
  else {
    FUN_180008e68(param_1,(uint)uVar7,param_2);
  }
  uVar6 = *(uint *)(param_1 + 0x28) >> 7;
  pcVar5 = (char *)(ulonglong)uVar6;
  if (((uVar6 & 1) != 0) &&
     ((*(int *)(param_1 + 0x48) == 0 || (pcVar5 = *(char **)(param_1 + 0x40), *pcVar5 != '0')))) {
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    **(undefined1 **)(param_1 + 0x40) = 0x30;
    *(int *)(param_1 + 0x48) = *(int *)(param_1 + 0x48) + 1;
  }
  return CONCAT71((int7)((ulonglong)pcVar5 >> 8),1);
}


/* Address: 0x180008bf4; Evidence: ev_0471dd96a5768c4ef97a5f96e69355400a19bb89f8867946179c71248dd570cd */

ulonglong FUN_180008bf4(longlong param_1,byte param_2)

{
  ulonglong *puVar1;
  ushort *puVar2;
  byte *pbVar3;
  uint *puVar4;
  char *pcVar5;
  uint uVar6;
  ulonglong uVar7;
  longlong lVar8;
  int iVar9;
  
  iVar9 = *(int *)(param_1 + 0x34);
  if (iVar9 < 6) {
    if (iVar9 != 5) {
      if (iVar9 != 0) {
        if (iVar9 == 1) {
          uVar6 = *(uint *)(param_1 + 0x28);
          lVar8 = 1;
          pbVar3 = *(byte **)(param_1 + 0x18);
          *(byte **)(param_1 + 0x18) = pbVar3 + 8;
          if ((uVar6 >> 4 & 1) == 0) {
            uVar7 = (ulonglong)*pbVar3;
          }
          else {
            uVar7 = (ulonglong)(char)*pbVar3;
          }
          goto LAB_180008c72;
        }
        iVar9 = iVar9 + -2;
        if (iVar9 == 0) {
          uVar6 = *(uint *)(param_1 + 0x28);
          lVar8 = 2;
          puVar2 = *(ushort **)(param_1 + 0x18);
          *(ushort **)(param_1 + 0x18) = puVar2 + 4;
          if ((uVar6 >> 4 & 1) == 0) {
            uVar7 = (ulonglong)*puVar2;
          }
          else {
            uVar7 = (ulonglong)(short)*puVar2;
          }
          goto LAB_180008c72;
        }
        goto LAB_180008c42;
      }
LAB_180008d47:
      uVar6 = *(uint *)(param_1 + 0x28);
      lVar8 = 4;
      puVar4 = *(uint **)(param_1 + 0x18);
      *(uint **)(param_1 + 0x18) = puVar4 + 2;
      if ((uVar6 >> 4 & 1) == 0) {
        uVar7 = (ulonglong)*puVar4;
      }
      else {
        uVar7 = (ulonglong)(int)*puVar4;
      }
      goto LAB_180008c72;
    }
  }
  else if (((iVar9 != 6) && (iVar9 != 7)) && (iVar9 = iVar9 + -9, iVar9 != 0)) {
LAB_180008c42:
    if (iVar9 == 1) goto LAB_180008d47;
    if (iVar9 != 2) {
      lVar8 = *(longlong *)(param_1 + 8);
      *(undefined1 *)(lVar8 + 0x30) = 1;
      *(undefined4 *)(lVar8 + 0x2c) = 0x16;
      uVar7 = FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,
                            *(longlong **)(param_1 + 8));
      return uVar7 & 0xffffffffffffff00;
    }
  }
  uVar6 = *(uint *)(param_1 + 0x28);
  lVar8 = 8;
  puVar1 = *(ulonglong **)(param_1 + 0x18);
  *(ulonglong **)(param_1 + 0x18) = puVar1 + 1;
  uVar7 = *puVar1;
LAB_180008c72:
  if (((uVar6 >> 4 & 1) != 0) && ((longlong)uVar7 < 0)) {
    uVar7 = -uVar7;
    uVar6 = uVar6 | 0x40;
    *(uint *)(param_1 + 0x28) = uVar6;
  }
  if (*(int *)(param_1 + 0x30) < 0) {
    *(undefined4 *)(param_1 + 0x30) = 1;
  }
  else {
    *(uint *)(param_1 + 0x28) = uVar6 & 0xfffffff7;
    FUN_180008490(param_1 + 0x50,(longlong)*(int *)(param_1 + 0x30),*(longlong *)(param_1 + 8));
  }
  if (uVar7 == 0) {
    *(uint *)(param_1 + 0x28) = *(uint *)(param_1 + 0x28) & 0xffffffdf;
  }
  *(undefined1 *)(param_1 + 0x4c) = 0;
  if (lVar8 == 8) {
    FUN_1800090b8(param_1,uVar7,param_2);
  }
  else {
    FUN_180008f14(param_1,(uint)uVar7,param_2);
  }
  uVar6 = *(uint *)(param_1 + 0x28) >> 7;
  pcVar5 = (char *)(ulonglong)uVar6;
  if (((uVar6 & 1) != 0) &&
     ((*(int *)(param_1 + 0x48) == 0 || (pcVar5 = *(char **)(param_1 + 0x40), *pcVar5 != '0')))) {
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    **(undefined1 **)(param_1 + 0x40) = 0x30;
    *(int *)(param_1 + 0x48) = *(int *)(param_1 + 0x48) + 1;
  }
  return CONCAT71((int7)((ulonglong)pcVar5 >> 8),1);
}


/* Address: 0x180008df8; Evidence: ev_9ab9c5b03714e1315a041b825996ba6f50ae706ee0bc5b0bde3a4edbebc98de6 */

void FUN_180008df8(longlong param_1,uint param_2)

{
  ulonglong uVar1;
  char *pcVar2;
  longlong lVar3;
  char *pcVar4;
  
  lVar3 = *(longlong *)(param_1 + 0x458);
  if (lVar3 == 0) {
    uVar1 = 0x200;
    lVar3 = param_1 + 0x50;
  }
  else {
    uVar1 = *(ulonglong *)(param_1 + 0x450) >> 1;
  }
  pcVar2 = (char *)(lVar3 + -1 + uVar1);
  *(char **)(param_1 + 0x40) = pcVar2;
  pcVar4 = pcVar2;
  for (; (0 < *(int *)(param_1 + 0x30) || (param_2 != 0)); param_2 = param_2 >> 3) {
    *(int *)(param_1 + 0x30) = *(int *)(param_1 + 0x30) + -1;
    *pcVar4 = ((byte)param_2 & 7) + 0x30;
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    pcVar4 = *(char **)(param_1 + 0x40);
  }
  *(int *)(param_1 + 0x48) = (int)pcVar2 - *(int *)(param_1 + 0x40);
  *(char **)(param_1 + 0x40) = pcVar4 + 1;
  return;
}


/* Address: 0x180008e68; Evidence: ev_7299452bab2c8f7a9aab7ba5be6e03e44d448d8538981b7f8a691f3a56a18e78 */

void FUN_180008e68(longlong param_1,uint param_2,byte param_3)

{
  ulonglong uVar1;
  longlong lVar2;
  char *pcVar3;
  char *pcVar4;
  char cVar5;
  
  lVar2 = *(longlong *)(param_1 + 0x458);
  if (lVar2 == 0) {
    uVar1 = 0x200;
    lVar2 = param_1 + 0x50;
  }
  else {
    uVar1 = *(ulonglong *)(param_1 + 0x450) >> 1;
  }
  pcVar3 = (char *)(lVar2 + -1 + uVar1);
  *(char **)(param_1 + 0x40) = pcVar3;
  pcVar4 = pcVar3;
  while ((0 < *(int *)(param_1 + 0x30) || (param_2 != 0))) {
    *(int *)(param_1 + 0x30) = *(int *)(param_1 + 0x30) + -1;
    cVar5 = (char)param_2 + (char)((ulonglong)param_2 / 10) * -10 + '0';
    param_2 = (uint)((ulonglong)param_2 / 10);
    if ('9' < cVar5) {
      cVar5 = (param_3 ^ 1) * ' ' + '\a' + cVar5;
    }
    *pcVar4 = cVar5;
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    pcVar4 = *(char **)(param_1 + 0x40);
  }
  *(int *)(param_1 + 0x48) = (int)pcVar3 - *(int *)(param_1 + 0x40);
  *(char **)(param_1 + 0x40) = pcVar4 + 1;
  return;
}


/* Address: 0x180008f14; Evidence: ev_83aea29c479437ce99a721ea898a62f5367aacae41f792905bc466ba7d52d840 */

void FUN_180008f14(longlong param_1,uint param_2,byte param_3)

{
  byte bVar1;
  ulonglong uVar2;
  byte *pbVar3;
  byte *pbVar4;
  longlong lVar5;
  
  lVar5 = *(longlong *)(param_1 + 0x458);
  if (lVar5 == 0) {
    uVar2 = 0x200;
    lVar5 = param_1 + 0x50;
  }
  else {
    uVar2 = *(ulonglong *)(param_1 + 0x450) >> 1;
  }
  pbVar3 = (byte *)(lVar5 + -1 + uVar2);
  *(byte **)(param_1 + 0x40) = pbVar3;
  pbVar4 = pbVar3;
  while ((0 < *(int *)(param_1 + 0x30) || (param_2 != 0))) {
    *(int *)(param_1 + 0x30) = *(int *)(param_1 + 0x30) + -1;
    bVar1 = (byte)param_2;
    param_2 = param_2 >> 4;
    bVar1 = (bVar1 & 0xf) + 0x30;
    if (0x39 < bVar1) {
      bVar1 = (param_3 ^ 1) * ' ' + '\a' + bVar1;
    }
    *pbVar4 = bVar1;
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    pbVar4 = *(byte **)(param_1 + 0x40);
  }
  *(int *)(param_1 + 0x48) = (int)pbVar3 - *(int *)(param_1 + 0x40);
  *(byte **)(param_1 + 0x40) = pbVar4 + 1;
  return;
}


/* Address: 0x180008f98; Evidence: ev_1caeeac5b4775dc8854b5c610120d4e2f607b023329137e78a4162e09039d954 */

void FUN_180008f98(longlong param_1,ulonglong param_2)

{
  ulonglong uVar1;
  char *pcVar2;
  longlong lVar3;
  char *pcVar4;
  
  lVar3 = *(longlong *)(param_1 + 0x458);
  if (lVar3 == 0) {
    uVar1 = 0x200;
    lVar3 = param_1 + 0x50;
  }
  else {
    uVar1 = *(ulonglong *)(param_1 + 0x450) >> 1;
  }
  pcVar2 = (char *)(lVar3 + -1 + uVar1);
  *(char **)(param_1 + 0x40) = pcVar2;
  pcVar4 = pcVar2;
  for (; (0 < *(int *)(param_1 + 0x30) || (param_2 != 0)); param_2 = param_2 >> 3) {
    *(int *)(param_1 + 0x30) = *(int *)(param_1 + 0x30) + -1;
    *pcVar4 = ((byte)param_2 & 7) + 0x30;
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    pcVar4 = *(char **)(param_1 + 0x40);
  }
  *(int *)(param_1 + 0x48) = (int)pcVar2 - *(int *)(param_1 + 0x40);
  *(char **)(param_1 + 0x40) = pcVar4 + 1;
  return;
}


/* Address: 0x180009008; Evidence: ev_364dcd7f7a9cb90a2a55116b88c0803995267736549ff086b91914d3e981a4c3 */

void FUN_180009008(longlong param_1,ulonglong param_2,byte param_3)

{
  ulonglong uVar1;
  longlong lVar2;
  char *pcVar3;
  char *pcVar4;
  char cVar5;
  
  lVar2 = *(longlong *)(param_1 + 0x458);
  if (lVar2 == 0) {
    uVar1 = 0x200;
    lVar2 = param_1 + 0x50;
  }
  else {
    uVar1 = *(ulonglong *)(param_1 + 0x450) >> 1;
  }
  pcVar3 = (char *)(lVar2 + -1 + uVar1);
  *(char **)(param_1 + 0x40) = pcVar3;
  pcVar4 = pcVar3;
  while ((0 < *(int *)(param_1 + 0x30) || (param_2 != 0))) {
    *(int *)(param_1 + 0x30) = *(int *)(param_1 + 0x30) + -1;
    cVar5 = (char)param_2 + (char)(param_2 / 10) * -10 + '0';
    if ('9' < cVar5) {
      cVar5 = (param_3 ^ 1) * ' ' + '\a' + cVar5;
    }
    *pcVar4 = cVar5;
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    pcVar4 = *(char **)(param_1 + 0x40);
    param_2 = param_2 / 10;
  }
  *(int *)(param_1 + 0x48) = (int)pcVar3 - *(int *)(param_1 + 0x40);
  *(char **)(param_1 + 0x40) = pcVar4 + 1;
  return;
}


/* Address: 0x1800090b8; Evidence: ev_92aabf23fb50f2419366542bbecc478e0ab1576b21ca4e881e8dd2d9675fdbd2 */

void FUN_1800090b8(longlong param_1,ulonglong param_2,byte param_3)

{
  byte bVar1;
  ulonglong uVar2;
  byte *pbVar3;
  byte *pbVar4;
  longlong lVar5;
  
  lVar5 = *(longlong *)(param_1 + 0x458);
  if (lVar5 == 0) {
    uVar2 = 0x200;
    lVar5 = param_1 + 0x50;
  }
  else {
    uVar2 = *(ulonglong *)(param_1 + 0x450) >> 1;
  }
  pbVar3 = (byte *)(lVar5 + -1 + uVar2);
  *(byte **)(param_1 + 0x40) = pbVar3;
  pbVar4 = pbVar3;
  while ((0 < *(int *)(param_1 + 0x30) || (param_2 != 0))) {
    *(int *)(param_1 + 0x30) = *(int *)(param_1 + 0x30) + -1;
    bVar1 = (byte)param_2;
    param_2 = param_2 >> 4;
    bVar1 = (bVar1 & 0xf) + 0x30;
    if (0x39 < bVar1) {
      bVar1 = (param_3 ^ 1) * ' ' + '\a' + bVar1;
    }
    *pbVar4 = bVar1;
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    pbVar4 = *(byte **)(param_1 + 0x40);
  }
  *(int *)(param_1 + 0x48) = (int)pbVar3 - *(int *)(param_1 + 0x40);
  *(byte **)(param_1 + 0x40) = pbVar4 + 1;
  return;
}


/* Address: 0x18000913c; Evidence: ev_e30d99023ec6a96f1f9a60797ea29caafb71fcc0df996829bba8e742ff8b730c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined4 FUN_18000913c(undefined8 *param_1)

{
  longlong *plVar1;
  FILE *pFVar2;
  undefined4 uVar3;
  undefined8 uVar4;
  undefined1 auStack_4b8 [32];
  ulonglong local_498;
  undefined8 local_490;
  undefined8 local_488;
  undefined8 local_480;
  undefined4 local_478;
  undefined1 local_474;
  undefined4 local_470;
  undefined4 local_46c;
  undefined4 local_468;
  undefined2 local_460;
  undefined4 local_450;
  undefined1 local_44c;
  undefined8 local_48;
  LPVOID pvStack_40;
  undefined8 local_38;
  undefined4 local_30;
  ulonglong local_28;
  
  local_28 = DAT_180027000 ^ (ulonglong)auStack_4b8;
  plVar1 = (longlong *)param_1[1];
  pFVar2 = *(FILE **)*param_1;
  uVar4 = FUN_18000e688(pFVar2);
  local_480 = *(undefined8 *)param_1[4];
  local_38 = *(undefined8 *)*param_1;
  local_488 = *(undefined8 *)param_1[3];
  local_498 = *(ulonglong *)param_1[2];
  local_490 = param_1[1];
  local_478 = 0;
  local_470 = 0;
  local_46c = 0;
  local_468 = 0;
  local_460 = 0;
  local_450 = 0;
  local_30 = 0;
  local_474 = 0;
  local_44c = 0;
  local_48 = 0;
  pvStack_40 = (LPVOID)0x0;
  uVar3 = FUN_180009354(&local_498);
  FUN_18000bff0(pvStack_40);
  pvStack_40 = (LPVOID)0x0;
  FUN_18000e750((char)uVar4,pFVar2,plVar1);
  return uVar3;
}


/* Address: 0x180009258; Evidence: ev_b8807831ffb31139932cf45a9f3813e2fd082df47d2ef5824c564289d2fea04f */

void FUN_180009258(char *param_1,longlong *param_2)

{
  char cVar1;
  char *pcVar2;
  char *pcVar3;
  longlong lVar4;
  
  cVar1 = *param_1;
  while ((cVar1 != '\0' && (cVar1 != *(char *)**(undefined8 **)(*param_2 + 0xf8)))) {
    param_1 = param_1 + 1;
    cVar1 = *param_1;
  }
  if (cVar1 != '\0') {
    do {
      param_1 = param_1 + 1;
      pcVar2 = param_1;
      if (*param_1 == '\0') break;
    } while ((*param_1 + 0xbbU & 0xdf) != 0);
    do {
      pcVar3 = pcVar2;
      pcVar2 = pcVar3 + -1;
    } while (*pcVar2 == '0');
    pcVar3 = pcVar3 + -2;
    if (*pcVar2 != *(char *)**(undefined8 **)(*param_2 + 0xf8)) {
      pcVar3 = pcVar2;
    }
    lVar4 = (longlong)param_1 - (longlong)pcVar3;
    do {
      cVar1 = pcVar3[lVar4];
      pcVar3 = pcVar3 + 1;
      *pcVar3 = cVar1;
    } while (cVar1 != '\0');
  }
  return;
}


/* Address: 0x1800092c4; Evidence: ev_3f54b83550a3aed4dc5943a1ff2e282cea0a420c6f42e278f8e46d7555ebf84f */

undefined1 FUN_1800092c4(longlong param_1,uint *param_2)

{
  longlong *plVar1;
  undefined8 uVar2;
  uint uVar3;
  undefined1 uVar4;
  ulonglong local_res8;
  ulonglong local_18;
  ulonglong *local_10;
  
  plVar1 = *(longlong **)(param_1 + 8);
  local_10 = &local_res8;
  local_res8 = *(longlong *)(param_1 + 0x10) - 1;
  uVar2 = *(undefined8 *)((longlong)plVar1 + 0x2c);
  local_18 = local_res8;
  uVar3 = FUN_180008538(plVar1,(longlong *)&local_18,10,1);
  *param_2 = uVar3;
  if (((*(char *)(*(longlong *)(param_1 + 8) + 0x30) == '\0') ||
      (uVar4 = 0, *(int *)(*(longlong *)(param_1 + 8) + 0x2c) != 0x22)) &&
     (uVar4 = 0, *(ulonglong *)(param_1 + 0x10) <= local_res8)) {
    *(ulonglong *)(param_1 + 0x10) = local_res8;
    uVar4 = 1;
  }
  *(undefined8 *)((longlong)plVar1 + 0x2c) = uVar2;
  return uVar4;
}


/* Address: 0x180009354; Evidence: ev_3d2032ab97eb559b2a4ab2ba2b9d81e6edd517093a45876cfca20cb0dd7ee4ce */

undefined4 FUN_180009354(ulonglong *param_1)

{
  int *piVar1;
  bool bVar2;
  char cVar3;
  int iVar4;
  undefined8 uVar5;
  ulonglong uVar6;
  byte bVar7;
  char *pcVar8;
  ulonglong *puVar9;
  longlong *plVar10;
  
  plVar10 = (longlong *)param_1[1];
  if ((_iobuf *)param_1[0x8c] == (_iobuf *)0x0) {
    *(undefined1 *)(plVar10 + 6) = 1;
    *(undefined4 *)((longlong)plVar10 + 0x2c) = 0x16;
  }
  else {
    bVar2 = __acrt_stdio_char_traits<char>::validate_stream_is_ansi_if_required
                      ((_iobuf *)param_1[0x8c]);
    if (!bVar2) {
      return 0xffffffff;
    }
    pcVar8 = (char *)param_1[2];
    if (pcVar8 != (char *)0x0) {
      iVar4 = (int)param_1[0x8d] + 1;
      *(int *)(param_1 + 0x8d) = iVar4;
      do {
        if (iVar4 == 2) {
          return (int)param_1[4];
        }
        *(undefined4 *)(param_1 + 9) = 0;
        *(undefined1 *)((longlong)param_1 + 0x24) = 0;
        cVar3 = *pcVar8;
        while( true ) {
          pcVar8 = pcVar8 + 1;
          param_1[2] = (ulonglong)pcVar8;
          *(char *)((longlong)param_1 + 0x39) = cVar3;
          if ((cVar3 == '\0') || ((int)param_1[4] < 0)) break;
          bVar7 = 0;
          if ((byte)(cVar3 - 0x20U) < 0x5b) {
            bVar7 = (&DAT_18001a611)[(ulonglong)((int)cVar3 - 0x20U & 0x7f) * 2];
          }
          bVar7 = (&DAT_18001a610)
                  [(ulonglong)((uint)*(byte *)((longlong)param_1 + 0x24) + (uint)bVar7 * 8 & 0x7f) *
                   2];
          *(byte *)((longlong)param_1 + 0x24) = bVar7;
          if (7 < bVar7) {
LAB_1800096a4:
            uVar6 = param_1[1];
            *(undefined1 *)(uVar6 + 0x30) = 1;
            *(undefined4 *)(uVar6 + 0x2c) = 0x16;
            plVar10 = (longlong *)param_1[1];
            goto LAB_1800096bc;
          }
          if (bVar7 == 0) {
            plVar10 = (longlong *)param_1[1];
            *(undefined1 *)((longlong)param_1 + 0x4c) = 0;
            if ((char)plVar10[5] == '\0') {
              FUN_18000a2a0(plVar10);
            }
            bVar7 = *(byte *)((longlong)param_1 + 0x39);
            if ((-2 < (char)bVar7) &&
               ((*(ushort *)(*(longlong *)plVar10[3] + (longlong)(char)bVar7 * 2) & 0x8000) != 0)) {
              if ((((*(uint *)(param_1[0x8c] + 0x14) >> 0xc & 1) == 0) ||
                  (*(longlong *)(param_1[0x8c] + 8) != 0)) &&
                 (uVar6 = FUN_18000e624(bVar7,(FILE *)param_1[0x8c],param_1[1]), (int)uVar6 == -1))
              {
                *(undefined4 *)(param_1 + 4) = 0xffffffff;
              }
              else {
                *(int *)(param_1 + 4) = (int)param_1[4] + 1;
              }
              bVar7 = *(byte *)param_1[2];
              param_1[2] = (ulonglong)((byte *)param_1[2] + 1);
              *(byte *)((longlong)param_1 + 0x39) = bVar7;
              if (bVar7 == 0) {
                uVar6 = param_1[1];
                *(undefined1 *)(uVar6 + 0x30) = 1;
                *(undefined4 *)(uVar6 + 0x2c) = 0x16;
                FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,
                              (longlong *)param_1[1]);
                goto LAB_1800096a4;
              }
            }
            if ((((*(uint *)(param_1[0x8c] + 0x14) >> 0xc & 1) == 0) ||
                (*(longlong *)(param_1[0x8c] + 8) != 0)) &&
               (uVar6 = FUN_18000e624(bVar7,(FILE *)param_1[0x8c],param_1[1]), (int)uVar6 == -1)) {
              *(undefined4 *)(param_1 + 4) = 0xffffffff;
            }
            else {
              *(int *)(param_1 + 4) = (int)param_1[4] + 1;
            }
          }
          else if (bVar7 == 1) {
            param_1[5] = 0;
            *(undefined1 *)(param_1 + 7) = 0;
            *(undefined4 *)(param_1 + 6) = 0xffffffff;
            *(undefined4 *)((longlong)param_1 + 0x34) = 0;
            *(undefined1 *)((longlong)param_1 + 0x4c) = 0;
          }
          else if (bVar7 == 2) {
            if (cVar3 == ' ') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 2;
            }
            else if (cVar3 == '#') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x20;
            }
            else if (cVar3 == '+') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 1;
            }
            else if (cVar3 == '-') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 4;
            }
            else if (cVar3 == '0') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 8;
            }
          }
          else {
            if (bVar7 == 3) {
              if (cVar3 == '*') {
                piVar1 = (int *)param_1[3];
                param_1[3] = (ulonglong)(piVar1 + 2);
                iVar4 = *piVar1;
                *(int *)((longlong)param_1 + 0x2c) = iVar4;
                if (iVar4 < 0) {
                  *(uint *)(param_1 + 5) = (uint)param_1[5] | 4;
                  *(int *)((longlong)param_1 + 0x2c) = -iVar4;
                }
LAB_1800094e5:
                cVar3 = '\x01';
              }
              else {
                puVar9 = (ulonglong *)((longlong)param_1 + 0x2c);
LAB_18000948f:
                cVar3 = FUN_1800092c4((longlong)param_1,(uint *)puVar9);
              }
            }
            else {
              if (bVar7 == 4) {
                *(undefined4 *)(param_1 + 6) = 0;
                goto LAB_180009641;
              }
              if (bVar7 == 5) {
                if (cVar3 == '*') {
                  piVar1 = (int *)param_1[3];
                  param_1[3] = (ulonglong)(piVar1 + 2);
                  iVar4 = *piVar1;
                  *(int *)(param_1 + 6) = iVar4;
                  if (iVar4 < 0) {
                    *(undefined4 *)(param_1 + 6) = 0xffffffff;
                  }
                  goto LAB_1800094e5;
                }
                puVar9 = param_1 + 6;
                goto LAB_18000948f;
              }
              if (bVar7 == 6) {
                uVar6 = FUN_1800096d8(param_1);
                cVar3 = (char)uVar6;
              }
              else {
                if (bVar7 != 7) {
                  return 0xffffffff;
                }
                uVar5 = FUN_180009860(param_1);
                cVar3 = (char)uVar5;
              }
            }
            if (cVar3 == '\0') {
              return 0xffffffff;
            }
          }
LAB_180009641:
          pcVar8 = (char *)param_1[2];
          cVar3 = *pcVar8;
        }
        *(int *)(param_1 + 0x8d) = (int)param_1[0x8d] + 1;
        iVar4 = (int)param_1[0x8d];
      } while( true );
    }
    uVar6 = param_1[1];
    *(undefined1 *)(uVar6 + 0x30) = 1;
    *(undefined4 *)(uVar6 + 0x2c) = 0x16;
    plVar10 = (longlong *)param_1[1];
  }
LAB_1800096bc:
  FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,plVar10);
  return 0xffffffff;
}


/* Address: 0x1800096d8; Evidence: ev_af7f5d548f83ac20693333227d7a8742bdb98bf6c931e34fde4642668df27165 */

ulonglong FUN_1800096d8(ulonglong *param_1)

{
  char cVar1;
  char *pcVar2;
  byte bVar3;
  undefined8 in_RAX;
  undefined7 uVar6;
  ulonglong uVar4;
  char *pcVar5;
  
  cVar1 = *(char *)((longlong)param_1 + 0x39);
  uVar6 = (undefined7)((ulonglong)in_RAX >> 8);
  pcVar5 = (char *)CONCAT71(uVar6,cVar1);
  if (cVar1 == 'F') {
    if ((*param_1 & 8) == 0) {
      *(undefined1 *)((longlong)param_1 + 0x24) = 7;
      uVar4 = FUN_180009860(param_1);
      return uVar4;
    }
  }
  else if (cVar1 == 'N') {
    if ((*param_1 & 8) == 0) {
      *(undefined1 *)((longlong)param_1 + 0x24) = 8;
LAB_18000970a:
      uVar4 = param_1[1];
      *(undefined1 *)(uVar4 + 0x30) = 1;
      *(undefined4 *)(uVar4 + 0x2c) = 0x16;
      uVar4 = FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,(longlong *)param_1[1])
      ;
      return uVar4 & 0xffffffffffffff00;
    }
  }
  else {
    if (*(int *)((longlong)param_1 + 0x34) != 0) goto LAB_18000970a;
    if (cVar1 == 'I') {
      pcVar2 = (char *)param_1[2];
      cVar1 = *pcVar2;
      pcVar5 = (char *)CONCAT71(uVar6,cVar1);
      if ((cVar1 == '3') && (pcVar2[1] == '2')) {
        pcVar5 = pcVar2 + 2;
        *(undefined4 *)((longlong)param_1 + 0x34) = 10;
        param_1[2] = (ulonglong)pcVar5;
      }
      else if (cVar1 == '6') {
        if (pcVar2[1] == '4') {
          pcVar5 = pcVar2 + 2;
          *(undefined4 *)((longlong)param_1 + 0x34) = 0xb;
          param_1[2] = (ulonglong)pcVar5;
        }
      }
      else {
        bVar3 = cVar1 + 0xa8;
        pcVar5 = (char *)CONCAT71(uVar6,bVar3);
        if ((bVar3 < 0x21) && ((0x120821001U >> ((ulonglong)bVar3 & 0x3f) & 1) != 0)) {
          *(undefined4 *)((longlong)param_1 + 0x34) = 9;
        }
      }
    }
    else if (cVar1 == 'L') {
      *(undefined4 *)((longlong)param_1 + 0x34) = 8;
    }
    else if (cVar1 == 'T') {
      *(undefined4 *)((longlong)param_1 + 0x34) = 0xd;
    }
    else {
      if (cVar1 == 'h') {
        if (*(char *)param_1[2] == 'h') {
          param_1[2] = (ulonglong)((char *)param_1[2] + 1);
          pcVar5 = (char *)0x1;
        }
        else {
          pcVar5 = (char *)0x2;
        }
      }
      else {
        if (cVar1 == 'j') {
          *(undefined4 *)((longlong)param_1 + 0x34) = 5;
          goto LAB_180009858;
        }
        if (cVar1 != 'l') {
          if (cVar1 == 't') {
            *(undefined4 *)((longlong)param_1 + 0x34) = 7;
          }
          else if (cVar1 == 'w') {
            *(undefined4 *)((longlong)param_1 + 0x34) = 0xc;
          }
          else if (cVar1 == 'z') {
            *(undefined4 *)((longlong)param_1 + 0x34) = 6;
          }
          goto LAB_180009858;
        }
        if (*(char *)param_1[2] == 'l') {
          param_1[2] = (ulonglong)((char *)param_1[2] + 1);
          pcVar5 = (char *)0x4;
        }
        else {
          pcVar5 = (char *)0x3;
        }
      }
      *(int *)((longlong)param_1 + 0x34) = (int)pcVar5;
    }
  }
LAB_180009858:
  return CONCAT71((int7)((ulonglong)pcVar5 >> 8),1);
}


/* Address: 0x180009860; Evidence: ev_4284532f9a79b035769da9afff170cac84cf9324f7ae74b77f725dda13d7d39c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180009860(ulonglong *param_1)

{
  ulonglong *puVar1;
  ulonglong *puVar2;
  char cVar3;
  ushort uVar4;
  longlong *plVar5;
  bool bVar6;
  int iVar7;
  ulonglong uVar8;
  ulonglong uVar9;
  longlong lVar10;
  undefined4 extraout_var;
  byte bVar11;
  undefined1 uVar12;
  uint uVar13;
  ulonglong uVar14;
  ulonglong uVar15;
  ushort *puVar16;
  int iVar17;
  undefined1 auStackY_88 [32];
  undefined8 local_50;
  undefined8 local_48;
  byte local_40 [8];
  ulonglong local_38;
  
  local_48 = 0xfffffffffffffffe;
  uVar8 = DAT_180027000 ^ (ulonglong)auStackY_88;
  cVar3 = *(char *)((longlong)param_1 + 0x39);
  uVar12 = 0x78;
  local_38 = uVar8;
  if (cVar3 < 'e') {
    if (cVar3 == 'd') {
LAB_180009943:
      *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x10;
LAB_180009947:
      uVar8 = FUN_1800089f0((longlong)param_1,0);
    }
    else if (cVar3 < 'T') {
      if (cVar3 == 'S') {
LAB_180009989:
        uVar8 = FUN_18000a1fc((longlong)param_1);
      }
      else {
        if (cVar3 != 'A') {
          if (cVar3 == 'C') {
LAB_1800098fd:
            uVar8 = FUN_18000a070((longlong)param_1);
            goto LAB_1800099ab;
          }
          if (((cVar3 != 'E') && (cVar3 != 'F')) && (cVar3 != 'G')) goto LAB_1800099b2;
        }
LAB_1800098d4:
        uVar8 = FUN_180009e14(param_1);
      }
    }
    else {
      if (cVar3 == 'X') goto LAB_1800099a1;
      if (cVar3 != 'Z') {
        if (cVar3 != 'a') {
          if (cVar3 != 'c') goto LAB_1800099b2;
          goto LAB_1800098fd;
        }
        goto LAB_1800098d4;
      }
      uVar8 = FUN_180009d98((longlong)param_1);
    }
  }
  else if (cVar3 < 'p') {
    if (cVar3 == 'o') {
      if (((uint)param_1[5] >> 5 & 1) != 0) {
        *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x80;
      }
      uVar8 = FUN_1800087ec((longlong)param_1);
    }
    else {
      if (((cVar3 == 'e') || (cVar3 == 'f')) || (cVar3 == 'g')) goto LAB_1800098d4;
      if (cVar3 == 'i') goto LAB_180009943;
      if (cVar3 != 'n') goto LAB_1800099b2;
      uVar8 = FUN_18000a144((longlong)param_1);
    }
  }
  else {
    if (cVar3 == 'p') {
      *(undefined4 *)(param_1 + 6) = 0x10;
      *(undefined4 *)((longlong)param_1 + 0x34) = 0xb;
LAB_1800099a1:
      bVar11 = 1;
    }
    else {
      if (cVar3 == 's') goto LAB_180009989;
      if (cVar3 == 'u') goto LAB_180009947;
      if (cVar3 != 'x') goto LAB_1800099b2;
      bVar11 = 0;
    }
    uVar8 = FUN_180008bf4((longlong)param_1,bVar11);
  }
LAB_1800099ab:
  uVar15 = 0;
  if ((char)uVar8 == '\0') {
LAB_1800099b2:
    return uVar8 & 0xffffffffffffff00;
  }
  if ((char)param_1[7] != '\0') goto LAB_180009d6c;
  uVar8 = local_50 & 0xffffffffff000000;
  uVar13 = (uint)param_1[5];
  uVar14 = uVar15;
  if ((uVar13 >> 4 & 1) != 0) {
    local_50._1_7_ = (undefined7)(uVar8 >> 8);
    if ((uVar13 >> 6 & 1) == 0) {
      if ((param_1[5] & 1) == 0) {
        if ((uVar13 >> 1 & 1) == 0) goto LAB_180009a07;
        local_50 = CONCAT71(local_50._1_7_,0x20);
      }
      else {
        local_50 = CONCAT71(local_50._1_7_,0x2b);
      }
    }
    else {
      local_50 = CONCAT71(local_50._1_7_,0x2d);
    }
    uVar14 = 1;
    uVar8 = local_50;
  }
LAB_180009a07:
  local_50 = uVar8;
  cVar3 = *(char *)((longlong)param_1 + 0x39);
  if (((cVar3 + 0xa8U & 0xdf) != 0) || (bVar6 = true, (uVar13 >> 5 & 1) == 0)) {
    bVar6 = false;
  }
  if ((bVar6) || ((cVar3 + 0xbfU & 0xdf) == 0)) {
    *(undefined1 *)((longlong)&local_50 + uVar14) = 0x30;
    if ((cVar3 == 'X') || (cVar3 == 'A')) {
      uVar12 = 0x58;
    }
    *(undefined1 *)((longlong)&local_50 + uVar14 + 1) = uVar12;
    uVar14 = uVar14 + 2;
  }
  iVar7 = (int)uVar14;
  iVar17 = (*(int *)((longlong)param_1 + 0x2c) - (int)param_1[9]) - iVar7;
  if (((uVar13 & 0xc) == 0) && (uVar8 = param_1[1], uVar14 = uVar15, 0 < iVar17)) {
    while ((((*(uint *)(param_1[0x8c] + 0x14) >> 0xc & 1) != 0 &&
            (*(longlong *)(param_1[0x8c] + 8) == 0)) ||
           (uVar9 = FUN_18000e624(0x20,(FILE *)param_1[0x8c],uVar8), (int)uVar9 != -1))) {
      uVar9 = param_1[4];
      *(int *)(param_1 + 4) = (int)uVar9 + 1;
      if (((int)uVar9 == -2) ||
         (uVar13 = (int)uVar14 + 1, uVar14 = (ulonglong)uVar13, iVar17 <= (int)uVar13))
      goto LAB_180009abc;
    }
    *(undefined4 *)(param_1 + 4) = 0xffffffff;
  }
LAB_180009abc:
  puVar2 = param_1 + 0x8c;
  puVar1 = param_1 + 4;
  if (((*(uint *)(*puVar2 + 0x14) >> 0xc & 1) == 0) || (*(longlong *)(*puVar2 + 8) != 0)) {
    FUN_18000a3b4((longlong *)puVar2,(byte *)&local_50,iVar7,(int *)puVar1,param_1[1]);
  }
  else {
    *(int *)puVar1 = (int)*puVar1 + iVar7;
  }
  if (((((uint)param_1[5] >> 3 & 1) != 0) && (((uint)param_1[5] >> 2 & 1) == 0)) &&
     (uVar8 = param_1[1], uVar14 = uVar15, 0 < iVar17)) {
    while ((((*(uint *)(*puVar2 + 0x14) >> 0xc & 1) != 0 && (*(longlong *)(*puVar2 + 8) == 0)) ||
           (uVar9 = FUN_18000e624(0x30,(FILE *)*puVar2,uVar8), (int)uVar9 != -1))) {
      uVar9 = *puVar1;
      *(int *)puVar1 = (int)uVar9 + 1;
      if (((int)uVar9 == -2) ||
         (uVar13 = (int)uVar14 + 1, uVar14 = (ulonglong)uVar13, iVar17 <= (int)uVar13))
      goto LAB_180009b63;
    }
    *(int *)puVar1 = -1;
  }
LAB_180009b63:
  if ((*(char *)((longlong)param_1 + 0x4c) == '\0') || ((int)param_1[9] < 1)) {
    puVar2 = param_1 + 0x8c;
    puVar1 = param_1 + 4;
    if (((*(uint *)(*puVar2 + 0x14) >> 0xc & 1) == 0) ||
       (uVar8 = *puVar2, *(longlong *)(uVar8 + 8) != 0)) {
      uVar8 = FUN_18000a3b4((longlong *)puVar2,(byte *)param_1[8],(int)param_1[9],(int *)puVar1,
                            param_1[1]);
    }
    else {
      *(int *)puVar1 = (int)*puVar1 + (int)param_1[9];
    }
  }
  else {
    plVar5 = (longlong *)param_1[1];
    if ((char)plVar5[5] == '\0') {
      FUN_18000a2a0(plVar5);
    }
    puVar16 = (ushort *)param_1[8];
    uVar8 = plVar5[3];
    if (*(int *)(uVar8 + 0xc) == 0xfde9) {
      local_50 = 0;
      if ((int)param_1[9] != 0) {
        puVar1 = param_1 + 4;
        puVar2 = param_1 + 0x8c;
        uVar14 = uVar15;
        do {
          uVar4 = *puVar16;
          puVar16 = puVar16 + 1;
          lVar10 = FUN_18000e340(local_40,(uint)uVar4,(int *)&local_50,param_1[1]);
          if (lVar10 == -1) {
            *(int *)puVar1 = -1;
            uVar8 = 0xffffffffffffffff;
            break;
          }
          if (((*(uint *)(*puVar2 + 0x14) >> 0xc & 1) == 0) ||
             (uVar8 = *puVar2, *(longlong *)(uVar8 + 8) != 0)) {
            uVar8 = FUN_18000a3b4((longlong *)puVar2,local_40,(int)lVar10,(int *)puVar1,param_1[1]);
          }
          else {
            *(int *)puVar1 = (int)*puVar1 + (int)lVar10;
          }
          uVar13 = (int)uVar14 + 1;
          uVar14 = (ulonglong)uVar13;
        } while (uVar13 != (uint)param_1[9]);
      }
    }
    else if ((int)param_1[9] != 0) {
      puVar1 = param_1 + 0x8c;
      uVar14 = uVar15;
      do {
        local_50 = local_50 & 0xffffffff00000000;
        uVar4 = *puVar16;
        puVar16 = puVar16 + 1;
        iVar7 = FUN_18000de20((int *)&local_50,(undefined1 (*) [32])local_40,6,uVar4,
                              (longlong *)param_1[1]);
        uVar8 = CONCAT44(extraout_var,iVar7);
        if ((iVar7 != 0) || ((int)local_50 == 0)) {
          *(undefined4 *)(param_1 + 4) = 0xffffffff;
          break;
        }
        if (((*(uint *)(*puVar1 + 0x14) >> 0xc & 1) == 0) ||
           (uVar8 = *puVar1, *(longlong *)(uVar8 + 8) != 0)) {
          uVar8 = FUN_18000a3b4((longlong *)puVar1,local_40,(int)local_50,(int *)(param_1 + 4),
                                param_1[1]);
        }
        else {
          *(int *)(param_1 + 4) = (int)param_1[4] + (int)local_50;
        }
        uVar13 = (int)uVar14 + 1;
        uVar14 = (ulonglong)uVar13;
      } while (uVar13 != (uint)param_1[9]);
    }
  }
  if (((-1 < (int)param_1[4]) &&
      (uVar13 = (uint)param_1[5] >> 2, uVar8 = (ulonglong)uVar13, (uVar13 & 1) != 0)) &&
     (uVar14 = param_1[1], 0 < iVar17)) {
    while ((((*(uint *)(param_1[0x8c] + 0x14) >> 0xc & 1) != 0 &&
            (*(longlong *)(param_1[0x8c] + 8) == 0)) ||
           (uVar8 = FUN_18000e624(0x20,(FILE *)param_1[0x8c],uVar14), (int)uVar8 != -1))) {
      uVar9 = param_1[4];
      uVar13 = (int)uVar9 + 1;
      uVar8 = (ulonglong)uVar13;
      *(uint *)(param_1 + 4) = uVar13;
      if (((int)uVar9 == -2) ||
         (uVar13 = (int)uVar15 + 1, uVar15 = (ulonglong)uVar13, iVar17 <= (int)uVar13))
      goto LAB_180009d6c;
    }
    *(undefined4 *)(param_1 + 4) = 0xffffffff;
  }
LAB_180009d6c:
  return CONCAT71((int7)(uVar8 >> 8),1);
}


/* Address: 0x180009d98; Evidence: ev_2be1ea57651e81a122ef9f74c9745f2d24ad5d022835c77fbdc496db2e37c6a6 */

undefined8 FUN_180009d98(longlong param_1)

{
  ushort uVar1;
  int iVar2;
  undefined8 *puVar3;
  ushort *puVar4;
  ulonglong uVar5;
  bool bVar6;
  
  puVar3 = *(undefined8 **)(param_1 + 0x18);
  *(undefined8 **)(param_1 + 0x18) = puVar3 + 1;
  puVar4 = (ushort *)*puVar3;
  if ((puVar4 == (ushort *)0x0) || (*(longlong *)(puVar4 + 4) == 0)) {
    uVar5 = 6;
    *(char **)(param_1 + 0x40) = "(null)";
  }
  else {
    iVar2 = *(int *)(param_1 + 0x34);
    if (iVar2 == 2) {
LAB_180009de2:
      bVar6 = false;
    }
    else if ((iVar2 == 3) || (iVar2 == 0xc)) {
      bVar6 = true;
    }
    else {
      if (*(int *)(param_1 + 0x34) == 0xd) goto LAB_180009de2;
      bVar6 = (*(char *)(param_1 + 0x39) + 0x9dU & 0xef) != 0;
    }
    *(longlong *)(param_1 + 0x40) = *(longlong *)(puVar4 + 4);
    uVar1 = *puVar4;
    uVar5 = (ulonglong)uVar1;
    if (bVar6) {
      *(undefined1 *)(param_1 + 0x4c) = 1;
      uVar5 = (ulonglong)(uVar1 >> 1);
      goto LAB_180009e0e;
    }
  }
  *(undefined1 *)(param_1 + 0x4c) = 0;
LAB_180009e0e:
  *(int *)(param_1 + 0x48) = (int)uVar5;
  return CONCAT71((int7)(uVar5 >> 8),1);
}


/* Address: 0x180009e14; Evidence: ev_bf9ad21b64866642025c561c29d2cebcec4746a0fec1f1902a51e633dafd225b */

undefined8 FUN_180009e14(ulonglong *param_1)

{
  double *pdVar1;
  longlong *plVar2;
  bool bVar3;
  byte bVar4;
  char cVar5;
  int iVar6;
  ulonglong *puVar7;
  ulonglong uVar8;
  char *pcVar9;
  undefined1 (*pauVar10) [32];
  byte *pbVar11;
  longlong lVar12;
  byte bVar13;
  uint uVar14;
  byte *pbVar15;
  ulonglong uVar16;
  double local_res8;
  
  *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x10;
  iVar6 = (int)param_1[6];
  if (iVar6 < 0) {
    iVar6 = (-(uint)((*(char *)((longlong)param_1 + 0x39) + 0xbfU & 0xdf) != 0) & 0xfffffff9) + 0xd;
    *(int *)(param_1 + 6) = iVar6;
  }
  else if ((iVar6 == 0) &&
          ((*(char *)((longlong)param_1 + 0x39) == 'g' ||
           (*(char *)((longlong)param_1 + 0x39) == 'G')))) {
    *(undefined4 *)(param_1 + 6) = 1;
    iVar6 = 1;
  }
  bVar3 = FUN_180008490((longlong)(param_1 + 10),(longlong)(iVar6 + 0x15d),param_1[1]);
  uVar16 = 0x200;
  if (bVar3) {
    uVar14 = (uint)param_1[6];
  }
  else {
    if (param_1[0x8b] == 0) {
      iVar6 = 0x200;
    }
    else {
      iVar6 = (int)(param_1[0x8a] >> 1);
    }
    uVar14 = iVar6 - 0x15d;
    *(uint *)(param_1 + 6) = uVar14;
  }
  puVar7 = (ulonglong *)param_1[0x8b];
  if ((ulonglong *)param_1[0x8b] == (ulonglong *)0x0) {
    puVar7 = param_1 + 10;
  }
  param_1[8] = (ulonglong)puVar7;
  pdVar1 = (double *)param_1[3];
  param_1[3] = (ulonglong)(pdVar1 + 1);
  pauVar10 = (undefined1 (*) [32])param_1[0x8b];
  local_res8 = *pdVar1;
  if (pauVar10 == (undefined1 (*) [32])0x0) {
    puVar7 = param_1 + 0x4a;
    pauVar10 = (undefined1 (*) [32])(param_1 + 10);
    uVar8 = 0x200;
  }
  else {
    puVar7 = (ulonglong *)(*pauVar10 + (param_1[0x8a] >> 1));
    uVar8 = param_1[0x8a] >> 1;
    uVar16 = param_1[0x8a] >> 1;
  }
  FUN_18000db38(&local_res8,pauVar10,uVar16,(char *)puVar7,uVar8,
                (int)*(char *)((longlong)param_1 + 0x39),uVar14,*param_1,1,(longlong *)param_1[1]);
  uVar14 = (uint)param_1[5] >> 5;
  uVar16 = (ulonglong)uVar14;
  if (((uVar14 & 1) != 0) && ((int)param_1[6] == 0)) {
    plVar2 = (longlong *)param_1[1];
    if ((char)plVar2[5] == '\0') {
      FUN_18000a2a0(plVar2);
    }
    pbVar15 = (byte *)param_1[8];
    plVar2 = (longlong *)plVar2[3];
    uVar8 = (ulonglong)*pbVar15;
    if (*(char *)(uVar8 + plVar2[0x22]) != 'e') {
      do {
        pbVar15 = pbVar15 + 1;
        uVar8 = (ulonglong)*pbVar15;
      } while ((*(byte *)(*plVar2 + uVar8 * 2) & 4) != 0);
    }
    bVar3 = *(char *)(uVar8 + plVar2[0x22]) == 'x';
    if (bVar3) {
      uVar8 = (ulonglong)pbVar15[2];
    }
    pbVar11 = pbVar15 + 2;
    if (!bVar3) {
      pbVar11 = pbVar15;
    }
    bVar4 = **(byte **)plVar2[0x1f];
    uVar16 = CONCAT71((int7)((ulonglong)plVar2[0x1f] >> 8),bVar4);
    *pbVar11 = bVar4;
    do {
      pbVar11 = pbVar11 + 1;
      bVar4 = *pbVar11;
      uVar16 = CONCAT71((int7)(uVar16 >> 8),bVar4);
      bVar13 = (byte)uVar8;
      *pbVar11 = bVar13;
      uVar8 = (ulonglong)bVar4;
    } while (bVar13 != 0);
  }
  bVar4 = *(char *)((longlong)param_1 + 0x39) + 0xb9;
  uVar16 = CONCAT71((int7)(uVar16 >> 8),bVar4);
  if (((bVar4 & 0xdf) == 0) &&
     (uVar14 = (uint)param_1[5] >> 5, uVar16 = (ulonglong)uVar14, (uVar14 & 1) == 0)) {
    plVar2 = (longlong *)param_1[1];
    if ((char)plVar2[5] == '\0') {
      FUN_18000a2a0(plVar2);
    }
    uVar16 = FUN_180009258((char *)param_1[8],plVar2 + 3);
  }
  pcVar9 = (char *)param_1[8];
  cVar5 = *pcVar9;
  if (cVar5 == '-') {
    *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x40;
    pcVar9 = pcVar9 + 1;
    param_1[8] = (ulonglong)pcVar9;
    cVar5 = *pcVar9;
  }
  if (((byte)(cVar5 + 0xb7U) < 0x26) &&
     ((0x2100000021U >> ((ulonglong)(byte)(cVar5 + 0xb7U) & 0x3f) & 1) != 0)) {
    *(uint *)(param_1 + 5) = (uint)param_1[5] & 0xfffffff7;
    *(undefined1 *)((longlong)param_1 + 0x39) = 0x73;
  }
  lVar12 = -1;
  do {
    lVar12 = lVar12 + 1;
  } while (pcVar9[lVar12] != '\0');
  *(int *)(param_1 + 9) = (int)lVar12;
  return CONCAT71((int7)(uVar16 >> 8),1);
}


/* Address: 0x18000a070; Evidence: ev_0d94cf55ccda4a64b9d30da12c76bf9809e3e60ee71c08eae9236314f410d326 */

undefined8 FUN_18000a070(longlong param_1)

{
  undefined1 *puVar1;
  undefined1 uVar2;
  ushort *puVar3;
  undefined1 *puVar4;
  int iVar5;
  undefined4 extraout_var;
  undefined8 uVar6;
  longlong lVar7;
  undefined1 (*pauVar8) [32];
  undefined1 *puVar9;
  ulonglong uVar10;
  
  iVar5 = *(int *)(param_1 + 0x34);
  if ((iVar5 == 2) ||
     (((iVar5 != 3 && (iVar5 != 0xc)) &&
      ((*(int *)(param_1 + 0x34) == 0xd || ((*(char *)(param_1 + 0x39) + 0x9dU & 0xef) == 0)))))) {
    puVar4 = *(undefined1 **)(param_1 + 0x18);
    puVar1 = puVar4 + 8;
    puVar9 = *(undefined1 **)(param_1 + 0x458);
    if (*(undefined1 **)(param_1 + 0x458) == (undefined1 *)0x0) {
      puVar9 = (undefined1 *)(param_1 + 0x50);
    }
    *(undefined1 **)(param_1 + 0x18) = puVar1;
    uVar2 = *puVar4;
    uVar6 = CONCAT71((int7)((ulonglong)puVar1 >> 8),uVar2);
    *puVar9 = uVar2;
    *(undefined4 *)(param_1 + 0x48) = 1;
  }
  else {
    puVar3 = *(ushort **)(param_1 + 0x18);
    *(ushort **)(param_1 + 0x18) = puVar3 + 4;
    pauVar8 = *(undefined1 (**) [32])(param_1 + 0x458);
    if (pauVar8 == (undefined1 (*) [32])0x0) {
      pauVar8 = (undefined1 (*) [32])(param_1 + 0x50);
      uVar10 = 0x200;
    }
    else {
      uVar10 = *(ulonglong *)(param_1 + 0x450) >> 1;
    }
    iVar5 = FUN_18000de20((int *)(param_1 + 0x48),pauVar8,uVar10,*puVar3,*(longlong **)(param_1 + 8)
                         );
    uVar6 = CONCAT44(extraout_var,iVar5);
    if (iVar5 != 0) {
      *(undefined1 *)(param_1 + 0x38) = 1;
    }
  }
  lVar7 = *(longlong *)(param_1 + 0x458);
  if (*(longlong *)(param_1 + 0x458) == 0) {
    lVar7 = param_1 + 0x50;
  }
  *(longlong *)(param_1 + 0x40) = lVar7;
  return CONCAT71((int7)((ulonglong)uVar6 >> 8),1);
}


/* Address: 0x18000a144; Evidence: ev_ca8f64080ff00639609c228fd0a7c004ed9e2b090c22e2d714ff0629cd664db1 */

ulonglong FUN_18000a144(longlong param_1)

{
  undefined8 *puVar1;
  ulonglong *puVar2;
  longlong lVar3;
  bool bVar4;
  undefined7 extraout_var;
  ulonglong uVar5;
  int iVar6;
  
  puVar1 = *(undefined8 **)(param_1 + 0x18);
  *(undefined8 **)(param_1 + 0x18) = puVar1 + 1;
  puVar2 = (ulonglong *)*puVar1;
  bVar4 = FUN_18000e60c();
  if ((int)CONCAT71(extraout_var,bVar4) == 0) goto LAB_18000a169;
  iVar6 = *(int *)(param_1 + 0x34);
  if (iVar6 < 6) {
    if (iVar6 != 5) {
      if (iVar6 != 0) {
        if (iVar6 == 1) {
          uVar5 = CONCAT71(extraout_var,*(undefined1 *)(param_1 + 0x20));
          *(undefined1 *)puVar2 = *(undefined1 *)(param_1 + 0x20);
          goto LAB_18000a1e2;
        }
        iVar6 = iVar6 + -2;
        if (iVar6 == 0) {
          uVar5 = (ulonglong)*(ushort *)(param_1 + 0x20);
          *(ushort *)puVar2 = *(ushort *)(param_1 + 0x20);
          goto LAB_18000a1e2;
        }
        goto LAB_18000a1d1;
      }
LAB_18000a1f3:
      uVar5 = (ulonglong)*(uint *)(param_1 + 0x20);
      *(uint *)puVar2 = *(uint *)(param_1 + 0x20);
      goto LAB_18000a1e2;
    }
  }
  else if (((iVar6 != 6) && (iVar6 != 7)) && (iVar6 = iVar6 + -9, iVar6 != 0)) {
LAB_18000a1d1:
    if (iVar6 == 1) goto LAB_18000a1f3;
    if (iVar6 != 2) {
LAB_18000a169:
      lVar3 = *(longlong *)(param_1 + 8);
      *(undefined1 *)(lVar3 + 0x30) = 1;
      *(undefined4 *)(lVar3 + 0x2c) = 0x16;
      uVar5 = FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,
                            *(longlong **)(param_1 + 8));
      return uVar5 & 0xffffffffffffff00;
    }
  }
  uVar5 = (ulonglong)*(int *)(param_1 + 0x20);
  *puVar2 = uVar5;
LAB_18000a1e2:
  *(undefined1 *)(param_1 + 0x38) = 1;
  return CONCAT71((int7)(uVar5 >> 8),1);
}


/* Address: 0x18000a1fc; Evidence: ev_9892f7b0070bb063e6bbdc791ae8f2f1dbff647bf3e0a24f6dd1cb7612839a4c */

undefined8 FUN_18000a1fc(longlong param_1)

{
  int iVar1;
  longlong *plVar2;
  int iVar3;
  ulonglong uVar4;
  wchar_t *pwVar5;
  
  plVar2 = *(longlong **)(param_1 + 0x18);
  *(longlong **)(param_1 + 0x18) = plVar2 + 1;
  pwVar5 = (wchar_t *)*plVar2;
  iVar1 = *(int *)(param_1 + 0x34);
  iVar3 = *(int *)(param_1 + 0x30);
  if (*(int *)(param_1 + 0x30) == -1) {
    iVar3 = 0x7fffffff;
  }
  *(wchar_t **)(param_1 + 0x40) = pwVar5;
  if ((iVar1 == 2) ||
     (((iVar1 != 3 && (iVar1 != 0xc)) &&
      ((*(int *)(param_1 + 0x34) == 0xd || ((*(char *)(param_1 + 0x39) + 0x9dU & 0xef) == 0)))))) {
    if ((undefined1 (*) [32])pwVar5 == (undefined1 (*) [32])0x0) {
      *(char **)(param_1 + 0x40) = "(null)";
      pwVar5 = (wchar_t *)"(null)";
    }
    uVar4 = FUN_18000cc90((undefined1 (*) [32])pwVar5,(longlong)iVar3);
  }
  else {
    if ((undefined1 (*) [32])pwVar5 == (undefined1 (*) [32])0x0) {
      pwVar5 = L"(null)";
      *(wchar_t **)(param_1 + 0x40) = L"(null)";
    }
    *(undefined1 *)(param_1 + 0x4c) = 1;
    uVar4 = FUN_18000ce20((undefined1 (*) [32])pwVar5,(longlong)iVar3);
  }
  *(int *)(param_1 + 0x48) = (int)uVar4;
  return CONCAT71((int7)(uVar4 >> 8),1);
}


/* Address: 0x18000a2a0; Evidence: ev_7b417783d0dc0ea96465b57bf534095bd3499c47e5c63c21f519d00dbd79a933 */

void FUN_18000a2a0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180007e30(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_18000be18(lVar1,param_1 + 3,param_1[1]);
  FUN_18000be84(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}


/* Address: 0x18000a318; Evidence: ev_bdf51eb9b79bbc343a0d547f4cad0a9a1add65be5591255ee7782caf434b4c61 */

/* Library Function - Single Match
    public: static bool __cdecl
   __acrt_stdio_char_traits<char>::validate_stream_is_ansi_if_required(struct _iobuf * __ptr64
   const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __cdecl __acrt_stdio_char_traits<char>::validate_stream_is_ansi_if_required(_iobuf *param_1)

{
  bool bVar1;
  uint uVar2;
  __acrt_ptd *p_Var3;
  undefined *puVar4;
  undefined *puVar5;
  
  if ((*(uint *)((longlong)&param_1->_base + 4) >> 0xc & 1) == 0) {
    uVar2 = _fileno(param_1);
    puVar5 = &DAT_180027320;
    if (uVar2 + 2 < 2) {
      puVar4 = &DAT_180027320;
    }
    else {
      puVar4 = (undefined *)
               ((&DAT_180028520)[(longlong)(int)uVar2 >> 6] + (ulonglong)(uVar2 & 0x3f) * 0x48);
    }
    if (puVar4[0x39] == '\0') {
      if (1 < uVar2 + 2) {
        puVar5 = (undefined *)
                 ((&DAT_180028520)[(longlong)(int)uVar2 >> 6] + (ulonglong)(uVar2 & 0x3f) * 0x48);
      }
      if ((puVar5[0x3d] & 1) == 0) goto LAB_18000a3ac;
    }
    p_Var3 = FUN_18000b774();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000821c();
    bVar1 = false;
  }
  else {
LAB_18000a3ac:
    bVar1 = true;
  }
  return bVar1;
}


/* Address: 0x18000a3b4; Evidence: ev_e874d2a7eef0e868c7e4fcfabeba8b25b60a0e105d60bef85adca04186f4f40d */

void FUN_18000a3b4(longlong *param_1,byte *param_2,int param_3,int *param_4,longlong param_5)

{
  undefined8 uVar1;
  ulonglong uVar2;
  byte *pbVar3;
  
  pbVar3 = param_2 + param_3;
  uVar1 = *(undefined8 *)(param_5 + 0x2c);
  do {
    if (param_2 == pbVar3) {
LAB_18000a466:
      *(undefined8 *)(param_5 + 0x2c) = uVar1;
      return;
    }
    if ((((*(uint *)(*param_1 + 0x14) >> 0xc & 1) == 0) || (*(longlong *)(*param_1 + 8) != 0)) &&
       (uVar2 = FUN_18000e624(*param_2,(FILE *)*param_1,param_5), (int)uVar2 == -1)) {
      if ((*(char *)(param_5 + 0x30) == '\0') || (*(int *)(param_5 + 0x2c) != 0x2a)) {
        *param_4 = -1;
        goto LAB_18000a466;
      }
      if ((((*(uint *)(*param_1 + 0x14) >> 0xc & 1) != 0) && (*(longlong *)(*param_1 + 8) == 0)) ||
         (uVar2 = FUN_18000e624(0x3f,(FILE *)*param_1,param_5), (int)uVar2 != -1))
      goto LAB_18000a452;
      *param_4 = -1;
    }
    else {
LAB_18000a452:
      *param_4 = *param_4 + 1;
    }
    param_2 = param_2 + 1;
  } while( true );
}


/* Address: 0x18000a484; Evidence: ev_6b26033e67f1802b536630239d41996bed4d3d0aa0b298ae5a4afbf9b266a954 */

undefined4
FUN_18000a484(undefined8 param_1,longlong param_2,longlong param_3,undefined4 *param_4,
             undefined8 param_5)

{
  undefined4 uVar1;
  longlong lVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  longlong local_res8;
  undefined8 local_res10;
  longlong local_res18;
  undefined8 local_res20;
  longlong local_98 [2];
  undefined1 local_88;
  undefined4 local_80;
  undefined4 uStack_7c;
  undefined4 uStack_78;
  undefined4 uStack_74;
  char local_70;
  undefined4 local_6c;
  char local_68;
  undefined4 local_64;
  char local_60;
  longlong local_58;
  longlong local_50;
  longlong *local_48;
  longlong *local_40;
  undefined8 *local_38;
  longlong *local_30;
  undefined8 *local_28;
  
  local_98[0] = 0;
  local_88 = 0;
  local_70 = '\0';
  local_68 = '\0';
  local_60 = '\0';
  if (param_4 == (undefined4 *)0x0) {
    uVar1 = PTR_PTR_180027308._0_4_;
    uVar3 = PTR_PTR_180027308._4_4_;
    uVar4 = PTR_DAT_180027310._0_4_;
    uVar5 = PTR_DAT_180027310._4_4_;
    if (DAT_18002844c != 0) goto LAB_18000a4cd;
  }
  else {
    uVar1 = *param_4;
    uVar3 = param_4[1];
    uVar4 = param_4[2];
    uVar5 = param_4[3];
  }
  local_70 = '\x01';
  local_80 = uVar1;
  uStack_7c = uVar3;
  uStack_78 = uVar4;
  uStack_74 = uVar5;
LAB_18000a4cd:
  local_res20 = param_5;
  local_res8 = param_2;
  local_res10 = param_1;
  local_res18 = param_3;
  if ((param_2 == 0) || (param_3 == 0)) {
    local_68 = '\x01';
    local_6c = 0x16;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,local_98);
    uVar1 = 0xffffffff;
  }
  else {
    local_48 = &local_res8;
    local_40 = local_98;
    local_38 = &local_res10;
    local_30 = &local_res18;
    local_28 = &local_res20;
    local_58 = param_2;
    local_50 = param_2;
    uVar1 = operator()<>(&param_5,&local_50,&local_48,&local_58);
  }
  uVar3 = local_6c;
  if (local_70 == '\x02') {
    *(uint *)(local_98[0] + 0x3a8) = *(uint *)(local_98[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_68 != '\0') {
    lVar2 = FUN_180007e30(local_98);
    *(undefined4 *)(lVar2 + 0x20) = uVar3;
  }
  if (local_60 != '\0') {
    lVar2 = FUN_180007e30(local_98);
    *(undefined4 *)(lVar2 + 0x24) = local_64;
  }
  return uVar1;
}


/* Address: 0x18000a5b0; Evidence: ev_8da9a9d472f99a5e4f781749e825331320f4b6960b141923ed3af4b1c8d82a0c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

bool FUN_18000a5b0(undefined8 param_1)

{
  int iVar1;
  code *pcVar2;
  bool bVar3;
  
  pcVar2 = (code *)FUN_18000a600();
  bVar3 = false;
  if (pcVar2 != (code *)0x0) {
    iVar1 = (*pcVar2)(param_1);
    bVar3 = iVar1 != 0;
  }
  return bVar3;
}


/* Address: 0x18000a5f0; Evidence: ev_eed655bf615c5421385c85d19c36388df400ac5fd9fad5b8f0626b8480b44009 */

void FUN_18000a5f0(undefined8 param_1)

{
  DAT_1800282c8 = param_1;
  return;
}


/* Address: 0x18000a600; Evidence: ev_be67997ad33e4aafd77bf737e79e3eceed2857f99b1917f36af2d1153b1687b1 */

ulonglong FUN_18000a600(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180027000 & 0x3f;
  uVar2 = DAT_1800282c8 ^ DAT_180027000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18000a640; Evidence: ev_4c328437e9349093295688434f5dd402934ef13766cac06475a129d49f1edab1 */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180027000 & 0x3f;
  uVar3 = DAT_180027000 ^ DAT_1800282c8;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_1800282c8 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180027000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}


/* Address: 0x18000a6b0; Evidence: ev_ecb36448bb1939ead303662a88253c00716408c203ff3349e6fe6dea1c2cec35 */

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
      pvVar3 = HeapAlloc(DAT_180028c10,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011190();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000a5b0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000b774();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000a6c0; Evidence: ev_8ae17e173846a41e6934b4d90d0430f6df1af050e563d0b5f95d0328dc8002bf */

void thunk_FUN_18000bff0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180028c10,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000b634(DVar2);
    p_Var4 = FUN_18000b774();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000a6c8; Evidence: ev_6c2ca5dc0b8283407fa9b216d6d39e76b97852db1c0944ed6d18c170e853ec22 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000a6c8(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}


/* Address: 0x18000a700; Evidence: ev_b544946114f047007f006d6fed462b0e81b6c5d506079051c2a826fa3e3ba470 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000a700(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x18000a73c; Evidence: ev_de1cb5dac45c46b915b35a5c577c692273542516711da67ebdffecc9d12ec6c2 */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_18000a750(-0x1f928c9d,param_2);
  return uVar1;
}


/* Address: 0x18000a750; Evidence: ev_20397a835a79bbd37533b8a406ed4c3ca41ebff9a8cbd5e8bcbc5977f52eb1b3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_18000a750(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  int *piVar2;
  code *pcVar3;
  undefined8 uVar4;
  __acrt_ptd *p_Var5;
  int *piVar6;
  int *piVar7;
  undefined4 uVar8;
  
  p_Var5 = FUN_18000bc78();
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
LAB_18000a88e:
              *(undefined4 *)(p_Var5 + 0x10) = uVar8;
            }
            else {
              if (*piVar6 == -0x3fffff72) {
                uVar8 = 0x83;
                goto LAB_18000a88e;
              }
              if (*piVar6 == -0x3fffff71) {
                uVar8 = 0x86;
                goto LAB_18000a88e;
              }
              if (*piVar6 == -0x3fffff70) {
                uVar8 = 0x81;
                goto LAB_18000a88e;
              }
              if (*piVar6 == -0x3fffff6f) {
                uVar8 = 0x84;
                goto LAB_18000a88e;
              }
              if (*piVar6 == -0x3fffff6e) {
                uVar8 = 0x8a;
                goto LAB_18000a88e;
              }
              if (*piVar6 == -0x3fffff6d) {
                uVar8 = 0x85;
                goto LAB_18000a88e;
              }
              if (*piVar6 == -0x3ffffd4c) {
                uVar8 = 0x8e;
                goto LAB_18000a88e;
              }
              uVar8 = uVar1;
              if (*piVar6 == -0x3ffffd4b) {
                uVar8 = 0x8d;
                goto LAB_18000a88e;
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


/* Address: 0x18000a8bc; Evidence: ev_024a902c5bd8a5b813cbc1e11853e0899c9abfe7f1dc189d01832798c430994d */

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
  FUN_18000a8f4(param_3);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000a8f4; Evidence: ev_c262f0b7b15416c7976d52778b226919c47c5856e87250c1ea880308a4ea59fa */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000a8f4(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_1800282e0 != '\0') {
    return;
  }
  LOCK();
  DAT_1800282d0 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_1800282d8 != DAT_180027000) {
      bVar1 = (byte)DAT_180027000 & 0x3f;
      (*(code *)((DAT_180027000 ^ DAT_1800282d8) >> bVar1 |
                (DAT_180027000 ^ DAT_1800282d8) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_180028418;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_18000a963;
    puVar2 = &DAT_180028430;
  }
  FUN_18000b29c(puVar2);
LAB_18000a963:
  if (*(int *)*param_1 == 0) {
    FUN_18000a6c8((undefined8 *)&DAT_180019360,(undefined8 *)&DAT_180019380);
  }
  FUN_18000a6c8((undefined8 *)&DAT_180019388,(undefined8 *)&DAT_180019390);
  if (*(int *)param_1[1] == 0) {
    DAT_1800282e0 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}


/* Address: 0x18000a9b4; Evidence: ev_2243009079fdd954fea2749a2672c2f20fc7c0610ef710c477d2a2b76a8e98fa */

void FUN_18000a9b4(uint param_1,undefined4 param_2,int param_3)

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
      FUN_18000aac8(param_1);
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
    bVar2 = FUN_18000e888();
    if ((int)CONCAT71(extraout_var,bVar2) == 1) {
      bVar2 = false;
    }
    else {
      uVar3 = FUN_18000e854();
      bVar2 = (char)uVar3 == '\0';
    }
    if (local_res18[0] == 0) {
      FUN_18000aa98(param_1,bVar2);
      pcVar1 = (code *)swi(3);
      (*pcVar1)();
      return;
    }
  }
  return;
}


/* Address: 0x18000aa98; Evidence: ev_f71a94ee8ad4cc4e074c2ae819650420de0ddfc5362d6f1997e02d17623e6797 */

void FUN_18000aa98(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000aac8(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}


/* Address: 0x18000aac8; Evidence: ev_6dc35d81a9d2529645a00086293e7ffd73599d46feb431c2e31a52fe739781cb */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000aac8(uint param_1)

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


/* Address: 0x18000ab2c; Evidence: ev_7a0daaf8e8aef8196f00d6343fe2b85b240c749b419e36386dc1f7044856d3ef */

void FUN_18000ab2c(undefined8 param_1)

{
  DAT_1800282d8 = param_1;
  return;
}


/* Address: 0x18000ab34; Evidence: ev_3c2c037d79844a12e26987ca9d51b14cd7683c7bf67e5dea8b5adff1af43f9ad */

void FUN_18000ab34(void)

{
  FUN_18000a9b4(0,0,1);
  return;
}


/* Address: 0x18000ab44; Evidence: ev_18f34e481fadfc432b8c64104bdc31965c21f802e3fe8ec1815cf32fd0da8a61 */

void FUN_18000ab44(uint param_1)

{
  FUN_18000a9b4(param_1,2,0);
  return;
}


/* Address: 0x18000ab50; Evidence: ev_6956c4fcbb93997f6254a050443a005288b09d134cc7a441e1df45a704fb04db */

undefined4 FUN_18000ab50(void)

{
  return DAT_1800282d0;
}


/* Address: 0x18000ab58; Evidence: ev_8efb7eb28eabb351a570d645a1f18c8df8b809a03346bda2a0d217911d612421 */

void FUN_18000ab58(char *param_1,undefined8 *param_2,char *param_3,longlong *param_4,
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
      iVar5 = FUN_180010148((int)cVar3);
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
        goto LAB_18000ac0a;
      }
    }
    param_1 = pcVar6;
  } while ((bVar2) || ((cVar3 != ' ' && (cVar3 != '\t'))));
  if (param_3 != (char *)0x0) {
    param_3[-1] = '\0';
  }
LAB_18000ac0a:
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
        iVar5 = FUN_180010148((int)*pcVar6);
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


/* Address: 0x18000ad18; Evidence: ev_a147d51b69b463de8bd5c84b39f53c39bb334af81b6a31ca794f9f0744058a1e */

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
      FUN_18000bff0((LPVOID)0x0);
      return pvVar2;
    }
  }
  return (LPVOID)0x0;
}


/* Address: 0x18000ad78; Evidence: ev_21b14223af967910c920fddad3c34457ef3ce5bd000924577346c172c5452aa9 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000ad78(int param_1)

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
    p_Var3 = FUN_18000b774();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000821c();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_18000f464((HMODULE)0x0,&DAT_1800282f0,0x104);
  _DAT_180028be0 = &DAT_1800282f0;
  if ((DAT_180028c00 == (char *)0x0) || (pcVar6 = DAT_180028c00, *DAT_180028c00 == '\0')) {
    pcVar6 = &DAT_1800282f0;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_18000ab58(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_18000b774();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_18000ab58(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_18000ec20(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_18000bff0(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_18000bff0(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_180028be8 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_180028be8 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_180028bf0 = plVar2;
      FUN_18000bff0((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_18000aedd;
    }
    _DAT_180028be8 = (int)local_res18 + -1;
    DAT_180028bf0 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_18000aedd:
  FUN_18000bff0(plVar4);
  return uVar7;
}


/* Address: 0x18000aef8; Evidence: ev_902cddaf91343f0da9eada44d168ea75c45ec5f55d513ff4cf3b8278a9561e1e */

undefined8 FUN_18000aef8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_1800283f8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800102f8();
    if (pcVar2 == (char *)0x0) {
      FUN_18000bff0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000af6c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_1800283f8;
        puVar1 = DAT_180028410;
      }
      DAT_180028410 = puVar1;
      DAT_1800283f8 = puVar4;
      FUN_18000bff0((LPVOID)0x0);
      FUN_18000bff0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x18000af6c; Evidence: ev_f80c4734aed3e31da3a86557f88e371205f2a1352161a58569198580ad0bda7f */

undefined8 * FUN_18000af6c(char *param_1)

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
LAB_18000afcf:
    FUN_18000bff0((LPVOID)0x0);
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
          FUN_18000bff0((LPVOID)0x0);
          goto LAB_18000afcf;
        }
        uVar5 = FUN_18000b510(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_18000bff0((LPVOID)0x0);
      }
    }
    FUN_18000bff0((LPVOID)0x0);
  }
  return puVar3;
}


/* Address: 0x18000b080; Evidence: ev_bdb2b9ff0d337ed4b74ecb3b319906b0d7dbbc35314d8bd3ae9d51b62611f107 */

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
      FUN_18000bff0(pvVar1);
      puVar2 = puVar2 + 1;
      pvVar1 = (LPVOID)*puVar2;
    }
    FUN_18000bff0(param_1);
  }
  return;
}


/* Address: 0x18000b0c4; Evidence: ev_d321ba321fbe805bac877f966e8a3b00f9b3bc7229ceb92118198137140f77fa */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180028410) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18000b0e0; Evidence: ev_1fdd2905c68a0a5871c3c9038c3fe171a8157373205d15e69c39969bcd6bf08e */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180028408) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x18000b0fc; Evidence: ev_37c9369503a575734d99e541f4dfdff4fac55fa93758e942cb7a3d7affeb2b5c */

void FUN_18000b0fc(void)

{
  uninitialize_environment_internal<>(&DAT_1800283f8);
  uninitialize_environment_internal<>((undefined8 *)&DAT_180028400);
  free_environment<>(DAT_180028410);
  free_environment<>(DAT_180028408);
  return;
}


/* Address: 0x18000b140; Evidence: ev_fce44cf90cac00da06c5b2970e4761bba9bb327c86c82407332333c255fd77ef */

undefined8 thunk_FUN_18000aef8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_1800283f8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800102f8();
    if (pcVar2 == (char *)0x0) {
      FUN_18000bff0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000af6c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_1800283f8;
        puVar1 = DAT_180028410;
      }
      DAT_180028410 = puVar1;
      DAT_1800283f8 = puVar4;
      FUN_18000bff0((LPVOID)0x0);
      FUN_18000bff0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x18000b148; Evidence: ev_4ec2a83eb811f82a83b6548cd0f0149a14b9f08c95587a70d5988451a0d75126 */

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
  uVar1 = FUN_18000b184(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000b184; Evidence: ev_c5987c612ae3c7ee55dc16522121f02d68841f12c39912ec8f54b3209a5c3151 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000b184(undefined8 *param_1)

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
  
  uVar1 = DAT_180027000;
  puVar8 = *(ulonglong **)*param_1;
  if (puVar8 == (ulonglong *)0x0) {
    uVar2 = 0xffffffff;
  }
  else {
    bVar5 = (byte)DAT_180027000 & 0x3f;
    puVar10 = (ulonglong *)
              ((DAT_180027000 ^ *puVar8) >> bVar5 | (DAT_180027000 ^ *puVar8) << 0x40 - bVar5);
    puVar8 = (ulonglong *)
             ((DAT_180027000 ^ puVar8[1]) >> bVar5 | (DAT_180027000 ^ puVar8[1]) << 0x40 - bVar5);
    if ((longlong)puVar10 - 1U < 0xfffffffffffffffe) {
      uVar7 = (uint)DAT_180027000 & 0x3f;
      puVar9 = puVar8;
      uVar3 = DAT_180027000;
      puVar13 = puVar10;
      while (puVar8 = puVar8 + -1, puVar10 <= puVar8) {
        if (*puVar8 != uVar1) {
          uVar3 = *puVar8 ^ uVar3;
          *puVar8 = uVar1;
          (*(code *)(uVar3 >> (sbyte)uVar7 | uVar3 << 0x40 - (sbyte)uVar7))();
          uVar7 = (uint)DAT_180027000 & 0x3f;
          uVar11 = DAT_180027000 ^ **(ulonglong **)*param_1;
          uVar3 = DAT_180027000 ^ (*(ulonglong **)*param_1)[1];
          sVar6 = (sbyte)uVar7;
          puVar12 = (ulonglong *)(uVar11 >> sVar6 | uVar11 << 0x40 - sVar6);
          puVar4 = (ulonglong *)(uVar3 >> sVar6 | uVar3 << 0x40 - sVar6);
          uVar3 = DAT_180027000;
          if ((puVar12 != puVar13) || (puVar4 != puVar9)) {
            puVar8 = puVar4;
            puVar9 = puVar4;
            puVar10 = puVar12;
            puVar13 = puVar12;
          }
        }
      }
      if (puVar10 != (ulonglong *)0xffffffffffffffff) {
        FUN_18000bff0(puVar10);
        uVar3 = DAT_180027000;
      }
      **(ulonglong **)*param_1 = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 8) = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 0x10) = uVar3;
    }
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x18000b29c; Evidence: ev_666c45a3bf5cfee0589c08958580d529946b75613ea84d5f1378986b56237dfe */

void FUN_18000b29c(undefined8 param_1)

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


/* Address: 0x18000b2e0; Evidence: ev_40dd0a31a71fecddafc01b8d340af97a8f5055ed9b9dfe0dd5fbcd1b1ed42f14 */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180027000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180027000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}


/* Address: 0x18000b310; Evidence: ev_93f522648a4477a31ec138f381f09388ca20d3c39a43bcdd1d18045ec3c425a5 */

undefined * FUN_18000b310(void)

{
  DAT_180028450 = &PTR_DAT_1800271b0;
  return &DAT_180027101;
}


/* Address: 0x18000b330; Evidence: ev_71c4f1705f92d436c83fcfa0d5b312df9e6822a747e0d26cad4413310c336bee */

undefined8 FUN_18000b330(void)

{
  undefined8 uVar1;
  
  _initialize_onexit_table((longlong *)&DAT_180028418);
  uVar1 = _initialize_onexit_table((longlong *)&DAT_180028430);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x18000b360; Evidence: ev_fd5590d0c53b63a2e537d0456047cce26022e467504d7d71a70d00ab863007e9 */

undefined1 FUN_18000b360(void)

{
  return 1;
}


/* Address: 0x18000b370; Evidence: ev_cdae2b83cd4a22cdd52211766bffc09a27f2183b57ee7b9475b13a3d24dfb629 */

undefined1 FUN_18000b370(void)

{
  FUN_18000b0fc();
  return 1;
}


/* Address: 0x18000b380; Evidence: ev_21cbf8e9e909fb2ca78447d5c45e3d1dba48c501c5ac1756cb3bdf36ed2daebf */

undefined1 FUN_18000b380(void)

{
  undefined8 uVar1;
  
  uVar1 = DAT_180027000;
  FUN_1800080c0(DAT_180027000);
  FUN_18000a5f0(uVar1);
  FUN_18001065c(uVar1);
  FUN_180010900(uVar1);
  FUN_18000ab2c(uVar1);
  return 1;
}


/* Address: 0x18000b3c0; Evidence: ev_03a0d43fa97a0155d58713baa95151d70cf1a77509a2219b9b3486c386c95364 */

void FUN_18000b3c0(void)

{
  __vcrt_uninitialize('\0');
  return;
}


/* Address: 0x18000b3d0; Evidence: ev_0e07cb3fa3b96af1a7448d931b5b20bc62efb13c22e53810267b31787ecb30fa */

undefined8 FUN_18000b3d0(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_180028bd0;
  uVar2 = (ulonglong)uVar1;
  *DAT_180028bd0 = *DAT_180028bd0 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_180028bd0 != (uint *)&DAT_180027370)) {
    uVar2 = FUN_18000bff0(DAT_180028bd0);
    DAT_180028bd0 = (uint *)&DAT_180027370;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}


/* Address: 0x18000b410; Evidence: ev_8919b43cd0849242eaa0ee170a743a3d8506af0825a6c9d5ba02d53fdcdaec49 */

undefined1 FUN_18000b410(void)

{
  FUN_18000bff0(DAT_180028948);
  DAT_180028948 = (LPVOID)0x0;
  FUN_18000bff0(DAT_180028950);
  DAT_180028950 = (LPVOID)0x0;
  FUN_18000bff0(DAT_180028bf0);
  DAT_180028bf0 = (LPVOID)0x0;
  FUN_18000bff0(DAT_180028bf8);
  DAT_180028bf8 = (LPVOID)0x0;
  return 1;
}


/* Address: 0x18000b46c; Evidence: ev_a7683d99147cc0be2a6df8e72697a8cee7bc2516edb110f274b6bdb88e6f1b29 */

void FUN_18000b46c(void)

{
  FUN_180010528(&PTR_FUN_18001a8f0,(undefined8 *)&DAT_18001a9f0);
  return;
}


/* Address: 0x18000b480; Evidence: ev_6faa63d4f92661c5914aac0a5e90ffe5765c58911564438f1e58b30c778228ee */

bool FUN_18000b480(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_18000bc78();
  return p_Var1 != (__acrt_ptd *)0x0;
}


/* Address: 0x18000b494; Evidence: ev_5298a365fed411980af3e5f455bfe7369eec39dd545f75981dd84ce185b9b71b */

undefined1 FUN_18000b494(void)

{
  FUN_18000bbc8();
  return 1;
}


/* Address: 0x18000b4a4; Evidence: ev_2a626b6e4fb19f442f87d7a2d36acee1235ab1567a41d3121aa4433349c4f487 */

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
    if (DAT_1800282b8 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_1800105a8(0x18001a8f0,0x18001a9f0);
  return uVar2;
}


/* Address: 0x18000b4dc; Evidence: ev_839df74e8b03ab1a2c9f812b44c3b242f0239f77a452d45710fe3feddcd6ef40 */

undefined4 FUN_18000b4dc(void)

{
  undefined4 uVar1;
  
  uVar1 = FUN_18000bdc0();
  return CONCAT31((int3)((uint)uVar1 >> 8),1);
}


/* Address: 0x18000b4ec; Evidence: ev_6eef4ef3a74d3cd56558ae6a04b52837202bb3604493264c21222fdaac3cf122 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b4ec(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000bc18();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000b510; Evidence: ev_a9be8cc12b8e0095e8ac11dddd97abf43f2fb7e27f9008c384812a626b2739d7 */

undefined8 FUN_18000b510(char *param_1,longlong param_2,longlong param_3)

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
      p_Var2 = FUN_18000b774();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000821c();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_18000b774();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000821c();
  return 0x16;
}


/* Address: 0x18000b590; Evidence: ev_0ca93994b8a5845cf1efcf8da8990f6355131541f9824476b00fc8758f30d3c0 */

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
    FUN_18001067c(0x16);
  }
  if ((DAT_180027190 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x18000b5db;
    FUN_180007f50(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x18000b5e5;
  FUN_18000ab44(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x18000b5f0; Evidence: ev_bb4520302b1878502a1319e80efd6803d9abc8647a3f6ee3084d72aaca8dd992 */

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
      pvVar3 = HeapAlloc(DAT_180028c10,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011190();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000a5b0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000b774();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000b600; Evidence: ev_8a6282410b4acea9c8062dcef64a3ca87fefadee00674dbb79098286a2205425 */

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


/* Address: 0x18000b634; Evidence: ev_fb9d9b007ff232ce188a3287f44b71be685400655f0a3d32121845b2a7168cd2 */

uint FUN_18000b634(uint param_1)

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
      return *(uint *)(&DAT_18001a9f4 + (ulonglong)(param_1 - 1) * 8);
    }
    if (param_1 < 0x719) {
      uVar5 = 0x2d;
      uVar7 = 0;
      uVar8 = 0x2c;
      do {
        uVar9 = uVar5 >> 1;
        if (uVar9 == 0) {
          if (uVar5 != 0) {
            puVar4 = (uint *)(&DAT_18001a9f0 + uVar7 * 8);
            if (param_1 != *puVar4) {
              puVar4 = (uint *)0x0;
            }
LAB_18000b6d5:
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
        puVar4 = (uint *)(&DAT_18001a9f0 + lVar1 * 8);
        if (param_1 == *puVar4) goto LAB_18000b6d5;
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


/* Address: 0x18000b704; Evidence: ev_6a5fa1c7cd59ccbbfb56a8cf28145d2f177051cfcb11cd6452954746a11b8f24 */

void FUN_18000b704(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = FUN_18000b750();
  *(uint *)p_Var2 = param_1;
  uVar1 = FUN_18000b634(param_1);
  p_Var2 = FUN_18000b774();
  *(uint *)p_Var2 = uVar1;
  return;
}


/* Address: 0x18000b72c; Evidence: ev_cdd752894564e7f3259cd79091a780c4d8d07f8286573bd969433e744ee84d7a */

void FUN_18000b72c(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_18000b634(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}


/* Address: 0x18000b750; Evidence: ev_efa010448600e1eae4a6b1c6abaaf0e4f0458945082c9f49ffb552dc14d9d8a8 */

__acrt_ptd * FUN_18000b750(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_18000bc78();
  p_Var2 = p_Var1 + 0x24;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_1800271a4;
  }
  return p_Var2;
}


/* Address: 0x18000b774; Evidence: ev_ad48bba3f82a61f2016856a358cf994152a3b49a7c366a791aa72cbc21f95520 */

__acrt_ptd * FUN_18000b774(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_18000bc78();
  p_Var2 = p_Var1 + 0x20;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_1800271a0;
  }
  return p_Var2;
}


/* Address: 0x18000b798; Evidence: ev_11624b6a3d04d15979730b5bb964537c14a0cb73819da5ccfd5905bb2f413482 */

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


/* Address: 0x18000b7d8; Evidence: ev_0e01f728a66e87e516f299c4fba8d5e4e6a7ece7d2cb2ba392fdb9a2b5f537d7 */

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


/* Address: 0x18000b818; Evidence: ev_60d86c6a94db7722ab31eb73526bb50e2aad088ba489d8fd4e1f22f1624a7c98 */

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


/* Address: 0x18000b860; Evidence: ev_29116d780102da9a96cf79c04a9a10057fa20396f56124ca65e9dbc50cc5fb1a */

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
    if ((iVar1 == 1) && (piVar2 != (int *)&DAT_180027370)) {
      FUN_18000bff0(piVar2);
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000b8c0; Evidence: ev_24e5a4f466a2183f80b8b688b5c110ef353a247727fbb9db87ff3cfeb7f368ff */

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
  local_28 = &DAT_180028450;
  *(undefined4 *)(param_1 + 0x28) = 1;
  *(undefined **)param_1 = &DAT_18001a750;
  *(undefined4 *)(param_1 + 0x3a8) = 1;
  *(undefined **)(param_1 + 0x88) = &DAT_180027370;
  *(undefined2 *)(param_1 + 0xbc) = 0x43;
  *(undefined2 *)(param_1 + 0x1c2) = 0x43;
  *(undefined8 *)(param_1 + 0x3a0) = 0;
  local_30 = param_1;
  operator()<>(local_res10,local_res20,&local_20,local_res18);
  operator()<>(local_res10,local_38 + 1,&local_18,local_38);
  return;
}


/* Address: 0x18000b990; Evidence: ev_ac11c646e94c690bd271a80ddc01aeb55ffe38dc5562cc8b84f8c9d85f1c61c9 */

void FUN_18000b990(__acrt_ptd *param_1)

{
  if (param_1 != (__acrt_ptd *)0x0) {
    destroy_ptd_array(param_1);
    FUN_18000bff0(param_1);
  }
  return;
}


/* Address: 0x18000b9b0; Evidence: ev_9d1c024da6873915b3d6016a8fce5536e478e9e25f19bf2ac9ade48ce2648b3d */

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
  if (*(undefined **)param_1 != &DAT_18001a750) {
    FUN_18000bff0(*(undefined **)param_1);
  }
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x70));
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x58));
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x60));
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x68));
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x48));
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x50));
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x78));
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x80));
  FUN_18000bff0(*(LPVOID *)(local_20 + 0x3c0));
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  operator()<>(local_res10,local_28 + 1,&local_10,local_28);
  return;
}


/* Address: 0x18000baa8; Evidence: ev_d30a64681753f38899986fde747c7733436b58dc413361d24751728e88d46d0b */

__acrt_ptd * FUN_18000baa8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_1800271a8,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_1800271a8,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_1800271a8,(PVOID)0x0);
        FUN_18000bff0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_18000bff0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_1800271a8,(PVOID)0x0);
    FUN_18000bff0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}


/* Address: 0x18000bb60; Evidence: ev_a68960856e3c1a1525615c0cb3b419a309c2f319364316a8a25c308887b42225 */

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
    if (((ppuVar1 != DAT_180028450) && (ppuVar1 != &PTR_DAT_1800271b0)) &&
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


/* Address: 0x18000bbc8; Evidence: ev_f141d85033c2d8806d98539c4d9caa872b1940723b2ddb11565bf0ffb6e7aa27 */

void FUN_18000bbc8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_1800271a8 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_1800271a8);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_1800271a8,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_18000bff0(p_Var1);
  }
  return;
}


/* Address: 0x18000bc18; Evidence: ev_167184d60726563ae7df097d902050d9f8a16df8b0794866d4f030cc30011ec6 */

void FUN_18000bc18(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_18000bc78();
  if (p_Var1 != (__acrt_ptd *)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000bc34; Evidence: ev_6ac887166158487812e89176786a6a8e645ccf74a38ca4cb5f09d22eba1011bf */

void FUN_18000bc34(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_1800271a8 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_1800271a8);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_18000baa8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_18000bc70;
    }
    return;
  }
LAB_18000bc70:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000bc78; Evidence: ev_2e06a053ecc65b7ad77c474897f8b83ca32295787bedf447d1c8b11ee0150167 */

__acrt_ptd * FUN_18000bc78(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_180028448 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_1800271a8 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_1800271a8);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000baa8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_1800271a8 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_18000c2bc();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_18000baa8();
    }
  }
  return p_Var2;
}


/* Address: 0x18000bd08; Evidence: ev_1756fc68be4749ce0989c6c0ce390f02f661175e40f1fb1a7f1535c6df204862 */

__acrt_ptd * FUN_18000bd08(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_1800271a8 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_1800271a8);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_18000baa8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}


/* Address: 0x18000bd70; Evidence: ev_8d5762c0908ee876b0a5ca5403d851bac622c63ee7f748d3dd4ac327ac339281 */

ulonglong FUN_18000bd70(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180028448 = FUN_18000c460();
  DAT_1800271a8 = FlsAlloc(FUN_18000b990);
  uVar2 = CONCAT44(extraout_var,DAT_1800271a8);
  if (DAT_1800271a8 != 0xffffffff) {
    p_Var3 = FUN_18000bc78();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_18000bdc0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x18000bdc0; Evidence: ev_7ac1a782e9b111492b3e0c8f52ccf07444aaa3709a2da04a0e8b04bbbf16bbd0 */

undefined4 FUN_18000bdc0(void)

{
  BOOL in_EAX;
  
  if (DAT_1800271a8 != 0xffffffff) {
    in_EAX = FlsFree(DAT_1800271a8);
    DAT_1800271a8 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}


/* Address: 0x18000bde4; Evidence: ev_1d9b238faef8265ada62b7397ea3ba4eab31b66dc9cc5e42a4c7069133628da1 */

/* Library Function - Single Match
    __acrt_update_locale_info
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_update_locale_info(longlong param_1,longlong *param_2)

{
  undefined **ppuVar1;
  
  if ((*param_2 != DAT_180028450) && ((DAT_1800278b8 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x18000be18; Evidence: ev_481ca47bab5c33e35aa3beb542c69b9a0990592d5f6038082644ccba5bb48355 */

void FUN_18000be18(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_180028450)[param_3]) && ((DAT_1800278b8 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x18000be50; Evidence: ev_132b36c92c3d5a196b2216a2cc708cdc1fc2bd2b8e0b4b3b02f9a3d06ade0166 */

void FUN_18000be50(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_180028bd0) && ((DAT_1800278b8 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_18000fdf0();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x18000be84; Evidence: ev_9b01ae0db0833ad5ceb208ae93b54e316de521ce094f11a935614e0db22d94b1 */

void FUN_18000be84(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_180028bd0)[param_3]) && ((DAT_1800278b8 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_18000fdf0();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x18000bebc; Evidence: ev_912ccf71edda0d40807cfe7fda6194f1b793dd32bcf3fef1e9816071fba118c0 */

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
  for (plVar2 = &DAT_180028450; plVar2 != &DAT_180028458; plVar2 = plVar2 + 1) {
    if ((undefined **)*plVar2 != &PTR_DAT_1800271b0) {
      ppuVar1 = _updatetlocinfoEx_nolock(plVar2,&PTR_DAT_1800271b0);
      *plVar2 = (longlong)ppuVar1;
    }
  }
  __acrt_unlock(*(int *)param_3);
  return;
}


/* Address: 0x18000bf2c; Evidence: ev_c8b88e302527b85783dd5f539bc7a3fd67462ef9a73a0fec294b4abee2836262 */

undefined4 FUN_18000bf2c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18002844c;
  LOCK();
  DAT_18002844c = 1;
  UNLOCK();
  return uVar1;
}


/* Address: 0x18000bf40; Evidence: ev_aad2366e122c1e22e52cf0c0fd252c1ab82c2276f0b5c6544bfbd33b03efed71 */

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


/* Address: 0x18000bf70; Evidence: ev_f318d900be94297b5651e21ef45d1e615e64fd80890b7c87b5768b9bd0a46e0c */

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
      pvVar3 = HeapAlloc(DAT_180028c10,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011190();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000a5b0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000b774();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000bff0; Evidence: ev_80a3f4126560c1186507281ba23c204ad665405206673defda50f8653f4f4b27 */

void FUN_18000bff0(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  __acrt_ptd *p_Var4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_180028c10,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_18000b634(DVar2);
    p_Var4 = FUN_18000b774();
    *(uint *)p_Var4 = uVar3;
  }
  return;
}


/* Address: 0x18000c048; Evidence: ev_5b360abbd266ec4cc9663e1cb044f0100aa1d0080c05eea42a59a889c16f0c77 */

FARPROC FUN_18000c048(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
LAB_18000c13a:
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
    hLibModule = (HMODULE)(&DAT_180028460)[uVar2];
    if (hLibModule == (HMODULE)0x0) {
      lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_datetime_l1_1_1_18001b1e0)[uVar2];
      hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
      if ((hLibModule != (HMODULE)0x0) ||
         ((((DVar3 = GetLastError(), DVar3 == 0x57 &&
            (iVar4 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar4 != 0)) &&
           (iVar4 = wcsncmp(lpLibFileName,L"ext-ms-",7), iVar4 != 0)) &&
          (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0))))
      {
        LOCK();
        lVar1 = (&DAT_180028460)[uVar2];
        (&DAT_180028460)[uVar2] = hLibModule;
        UNLOCK();
        if (lVar1 != 0) {
          FreeLibrary(hLibModule);
        }
        goto LAB_18000c1e0;
      }
      LOCK();
      (&DAT_180028460)[uVar2] = 0xffffffffffffffff;
      UNLOCK();
    }
    else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_18000c1e0:
      pFVar7 = GetProcAddress(hLibModule,param_2);
      goto LAB_18000c13a;
    }
    param_3 = param_3 + 1;
  } while( true );
}


/* Address: 0x18000c1fc; Evidence: ev_6c6e2671ba2b0c40ccde3874069d530a8351025e649da3c661feedb5f9fb9192 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000c1fc(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18002c0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18002c0d0;
  if ((DAT_18002c0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000c048(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_18001b82c,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}


/* Address: 0x18000c258; Evidence: ev_d26d7b6c3f7395f780751aaeb2512b49d745afdc00349a3f7496b8ec13573b36 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000c258(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18002c000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18002c000;
  if ((DAT_18002c000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_18000c048(0,"AreFileApisANSI",(uint *)&DAT_18001b7c8,(uint *)&DAT_18001b7cc),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}


/* Address: 0x18000c2a4; Evidence: ev_96f4789782c3c8aca4ef1683675c6bc32e3f63829ecb4ace3d71a9daed6e36ab */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000c2a4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}


/* Address: 0x18000c2ac; Evidence: ev_6db04e87f8235854c27c6cd543fa596e1a54c8f5dc19ca36193c3f4015bb009a */

BOOL __stdcall FlsFree(DWORD dwFlsIndex)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000c2ac. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsFree(dwFlsIndex);
  return BVar1;
}


/* Address: 0x18000c2b4; Evidence: ev_16ec31e608fed80afeaa955a3559b488f3da78f43f74e4e15217f1a2129c81ce */

PVOID __stdcall FlsGetValue(DWORD dwFlsIndex)

{
  PVOID pvVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000c2b4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  pvVar1 = FlsGetValue(dwFlsIndex);
  return pvVar1;
}


/* Address: 0x18000c2bc; Evidence: ev_dd5bcc466fd97898a897672ca87c408cc881ee3d259633554c44bdd15c6bfb5b */

void FUN_18000c2bc(void)

{
                    /* WARNING: Could not recover jumptable at 0x00018000c2c3. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*DAT_18002c018)();
  return;
}


/* Address: 0x18000c2c8; Evidence: ev_856bdcdcccaa0c3f5122b99d5833d47496354df15cc21b3046af1a37a75c2201 */

BOOL __stdcall FlsSetValue(DWORD dwFlsIndex,PVOID lpFlsData)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000c2c8. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsSetValue(dwFlsIndex,lpFlsData);
  return BVar1;
}


/* Address: 0x18000c2d0; Evidence: ev_3cc3638012c83b908bcbecbf49738a07bf8132438f259f12d614411015fceca2 */

BOOL __stdcall
InitializeCriticalSectionEx(LPCRITICAL_SECTION lpCriticalSection,DWORD dwSpinCount,DWORD Flags)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000c2d0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = InitializeCriticalSectionEx(lpCriticalSection,dwSpinCount,Flags);
  return BVar1;
}


/* Address: 0x18000c2d8; Evidence: ev_a8d137d3eaaf63a1fe8eecda425c39d183bd405496593f0977f1c44f8a690226 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c2d8(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18002c090 == (FARPROC)0xffffffffffffffff) {
LAB_18000c383:
    Locale = FUN_18000c3cc(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18002c090;
    if (DAT_18002c090 == (FARPROC)0x0) {
      pFVar1 = FUN_18000c048(0x12,"LCMapStringEx",(uint *)&DAT_18001b7f8,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000c383;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}


/* Address: 0x18000c3cc; Evidence: ev_6bcb0e5a91aa609130fb49173c31341ff660c228d0f8beb711a5b694dce2ae26 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000c3cc(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18002c0a0 == (FARPROC)0xffffffffffffffff) {
LAB_18000c41b:
    FUN_1800111cc(param_1);
  }
  else {
    pFVar1 = DAT_18002c0a0;
    if (DAT_18002c0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_18000c048(0x14,"LocaleNameToLCID",(uint *)&DAT_18001b810,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_18000c41b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}


/* Address: 0x18000c430; Evidence: ev_48537a4c4e5d3e8d931ad3147b9f2c57e3e836cd1da27d932c9e058d8a89dfe3 */

bool FUN_18000c430(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18002c000,0x100,2,local_res8);
  return BVar1 != 0;
}


/* Address: 0x18000c460; Evidence: ev_a35a73f852d3048d37c6612b7da8879c5d3d61bd9dce25de4125d32b1b647d67 */

bool FUN_18000c460(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18002c018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18002c018 == 0;
    if (!bVar2) goto LAB_18000c49a;
    pFVar1 = FUN_18000c048(3,"FlsGetValue2",(uint *)&DAT_18001b7e0,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_18000c49a:
  return !bVar2;
}


/* Address: 0x18000c4b0; Evidence: ev_58a1361bd4f66a46ba7803117fc28e128a2359b688757b6b1d71ed6889e0b678 */

/* Library Function - Single Match
    __acrt_uninitialize_winapi_thunks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_winapi_thunks(char param_1)

{
  HMODULE hLibModule;
  undefined *in_RAX;
  undefined8 *puVar1;
  
  if (param_1 == '\0') {
    puVar1 = &DAT_180028460;
    do {
      hLibModule = (HMODULE)*puVar1;
      if (hLibModule != (HMODULE)0x0) {
        if (hLibModule != (HMODULE)0xffffffffffffffff) {
          FreeLibrary(hLibModule);
        }
        *puVar1 = 0;
      }
      puVar1 = puVar1 + 1;
      in_RAX = &DAT_180028518;
    } while (puVar1 != (undefined8 *)&DAT_180028518);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000c4f4; Evidence: ev_baad46507679786832fe2be83959b008c104efcc46efa470f025bf46f1de7e36 */

int FUN_18000c4f4(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_1800282b0; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_1800282b8 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_180011398(*(FILE **)(DAT_1800282b8 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_1800282b8 + lVar4 * 8) + 0x30));
      FUN_18000bff0(*(LPVOID *)(DAT_1800282b8 + lVar4 * 8));
      *(undefined8 *)(DAT_1800282b8 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}


/* Address: 0x18000c5a8; Evidence: ev_68c46ada4ddd1c9cd4f3e62f22519f07ac9f73ca4ac6af8a266e0c40fb8d63b3 */

void FUN_18000c5a8(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  uint uVar1;
  int iVar2;
  
  FUN_18000842c(*param_2);
  if ((*(longlong *)*param_3 != 0) &&
     (uVar1 = *(uint *)(*(longlong *)*param_3 + 0x14), (uVar1 >> 0xd & 1) != 0)) {
    if (((((byte)uVar1 & 3) == 2) && ((uVar1 & 0xc0) != 0)) || ((uVar1 >> 0xb & 1) != 0)) {
      if ((*(char *)param_3[2] != '\0') || ((*(uint *)(*(longlong *)*param_3 + 0x14) >> 1 & 1) != 0)
         ) {
        iVar2 = FUN_18000c814(*(FILE **)*param_3);
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
  FUN_180008438(*param_4);
  return;
}


/* Address: 0x18000c644; Evidence: ev_dcfc1a3ab03882377274f9f080788735e7462d5ead9468575a1fc3c640fa60bb */

void FUN_18000c644(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  plVar1 = DAT_1800282b8 + DAT_1800282b0;
  for (plVar3 = DAT_1800282b8; local_40 = plVar3, plVar3 != plVar1; plVar3 = plVar3 + 1) {
    local_58 = *plVar3;
    if ((local_58 != 0) && (uVar2 = *(uint *)(local_58 + 0x14), (uVar2 >> 0xd & 1) != 0)) {
      if (((((byte)uVar2 & 3) == 2) && ((uVar2 & 0xc0) != 0)) || ((uVar2 >> 0xb & 1) != 0)) {
        local_20 = param_3[2];
        local_28 = param_3[1];
        local_30 = *param_3;
        local_38 = &local_58;
        local_50 = local_58;
        local_48 = local_58;
        FUN_18000c5a8(local_res10,&local_48,&local_38,&local_50);
      }
      else {
        *(int *)*param_3 = *(int *)*param_3 + 1;
      }
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000c728; Evidence: ev_fc83c9181acbcbfea6f0095977dfa13d13206433cccea49a1cb424fc7d61c963 */

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
  FUN_18000c644(local_res10,local_28 + 1,&local_20,local_28);
  if (local_res8[0] != '\0') {
    local_res18[0] = local_res20[0];
  }
  return local_res18[0];
}


/* Address: 0x18000c788; Evidence: ev_ea779dff1fea6ae59a566ca20e139d6d873c39af7549e6a018bf95850608e77b */

undefined8 FUN_18000c788(FILE *param_1,longlong *param_2)

{
  uint *puVar1;
  undefined1 (*pauVar2) [32];
  uint uVar3;
  uint uVar4;
  
  uVar4 = *(uint *)((longlong)&param_1->_base + 4);
  if ((((byte)uVar4 & 3) == 2) && ((uVar4 & 0xc0) != 0)) {
    uVar4 = *(int *)&param_1->_ptr - param_1->_cnt;
    *(undefined4 *)&param_1->_base = 0;
    pauVar2 = *(undefined1 (**) [32])&param_1->_cnt;
    param_1->_ptr = (char *)pauVar2;
    if (0 < (int)uVar4) {
      uVar3 = _fileno(param_1);
      uVar3 = FUN_180011d7c(uVar3,pauVar2,uVar4,param_2);
      if (uVar4 != uVar3) {
        LOCK();
        puVar1 = (uint *)((longlong)&param_1->_base + 4);
        *puVar1 = *puVar1 | 0x10;
        UNLOCK();
        return 0xffffffff;
      }
      if ((*(uint *)((longlong)&param_1->_base + 4) >> 2 & 1) != 0) {
        LOCK();
        puVar1 = (uint *)((longlong)&param_1->_base + 4);
        *puVar1 = *puVar1 & 0xfffffffd;
        UNLOCK();
      }
    }
  }
  return 0;
}


/* Address: 0x18000c814; Evidence: ev_f27c64daedec9b94f163d85704aa7ddc008c246c0f8b71325ff14f3fc1c2e87b */

int FUN_18000c814(FILE *param_1)

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
  local_20 = DAT_18002844c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_180027308;
    puStack_28 = PTR_DAT_180027310;
  }
  if (param_1 == (FILE *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_18000c899;
  }
  uVar2 = FUN_18000c788(param_1,local_48);
  if ((int)uVar2 == 0) {
    if ((*(uint *)((longlong)&param_1->_base + 4) >> 0xb & 1) != 0) {
      iVar1 = _fileno(param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_18000c874;
    }
    iVar1 = 0;
  }
  else {
LAB_18000c874:
    iVar1 = -1;
  }
LAB_18000c899:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}


/* Address: 0x18000c8e8; Evidence: ev_00bb512da4171324a2169720879508d787e0611c28fac872d2c3f52edd2db53e */

int __cdecl common_flush_all(bool param_1)

{
  int iVar1;
  
  iVar1 = common_flush_all(true);
  return iVar1;
}


/* Address: 0x18000c8f0; Evidence: ev_383ef59c8d74c7bd2d3eb560f356bd624c1f37f188364e56eaa6dca824fa519b */

/* Library Function - Single Match
    __acrt_stdio_free_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_free_buffer_nolock(undefined8 *param_1)

{
  if (((*(uint *)((longlong)param_1 + 0x14) >> 0xd & 1) != 0) &&
     ((*(uint *)((longlong)param_1 + 0x14) >> 6 & 1) != 0)) {
    FUN_18000bff0((LPVOID)param_1[1]);
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) & 0xfffffebf;
    UNLOCK();
    param_1[1] = 0;
    *param_1 = 0;
    *(undefined4 *)(param_1 + 2) = 0;
  }
  return;
}


/* Address: 0x18000c934; Evidence: ev_84787a0cf3a8f0e37cc0a684e579241aa4e21cd11cf90c252127acb30160b02f */

void FUN_18000c934(void)

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
  
  FUN_180017a70((undefined1 (*) [32])&local_78,0,0x68);
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
    if ((int)DAT_180028920 < (int)uVar7) {
      uVar7 = DAT_180028920;
    }
    uVar8 = (ulonglong)uVar7;
    if (uVar7 != 0) {
      do {
        if ((((*(longlong *)pbVar4 != -1) && (*(longlong *)pbVar4 != -2)) && ((*puVar6 & 1) != 0))
           && (((*puVar6 & 8) != 0 || (DVar2 = GetFileType(*(HANDLE *)pbVar4), DVar2 != 0)))) {
          uVar3 = (ulonglong)((uint)lVar5 & 0x3f);
          lVar1 = (&DAT_180028520)[lVar5 >> 6];
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


/* Address: 0x18000ca34; Evidence: ev_028a88fe1aabe01b0a81fd43aa6a63756f62ada4951fd4e6d8893f8e0085efbd */

void FUN_18000ca34(void)

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
    lVar2 = (&DAT_180028520)[(longlong)(int)uVar5 >> 6];
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
          goto LAB_18000cb12;
        }
      }
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x40;
      *(undefined8 *)(lVar2 + 0x28 + uVar4 * 0x48) = 0xfffffffffffffffe;
      if (DAT_1800282b8 != 0) {
        *(undefined4 *)(*(longlong *)(lVar6 + DAT_1800282b8) + 0x18) = 0xfffffffe;
      }
    }
    else {
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x80;
    }
LAB_18000cb12:
    uVar5 = uVar5 + 1;
    lVar6 = lVar6 + 8;
    if (uVar5 == 3) {
      return;
    }
  } while( true );
}


/* Address: 0x18000cb40; Evidence: ev_9a6b5dfdfec6337a7d17b3c35471258269c59b945094d2a98469fbbe8670a027 */

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
    FUN_18000c934();
    FUN_18000ca34();
  }
  __acrt_unlock(7);
  return bVar2;
}


/* Address: 0x18000cb80; Evidence: ev_c16aab6eef8deebb49e5a6ceb3fa4e43522a54efc7944895b0375bde60efcbaf */

/* Library Function - Single Match
    __acrt_uninitialize_lowio
   
   Library: Visual Studio 2019 Release */

undefined1 __acrt_uninitialize_lowio(void)

{
  ulonglong uVar1;
  
  uVar1 = 0;
  do {
    if (*(LPCRITICAL_SECTION *)((longlong)&DAT_180028520 + uVar1) != (LPCRITICAL_SECTION)0x0) {
      __acrt_lowio_destroy_handle_array(*(LPCRITICAL_SECTION *)((longlong)&DAT_180028520 + uVar1));
      *(undefined8 *)((longlong)&DAT_180028520 + uVar1) = 0;
    }
    uVar1 = uVar1 + 8;
  } while (uVar1 < 0x400);
  return 1;
}


/* Address: 0x18000cbc0; Evidence: ev_42057e05b1edc51b0c786295d6621a8b9a0928b560601c6c3fbfd13bc2309371 */

/* Library Function - Single Match
    iswctype
   
   Library: Visual Studio 2019 Release */

int __cdecl iswctype(wint_t _C,wctype_t _Type)

{
  uint uVar1;
  BOOL BVar2;
  WORD local_res8 [4];
  WCHAR local_res18 [8];
  
  if (_C == 0xffff) {
LAB_18000cc1f:
    uVar1 = 0;
  }
  else {
    if (_C < 0x100) {
      local_res8[0] = *(WORD *)(PTR_DAT_1800278b0 + (ulonglong)_C * 2);
    }
    else {
      local_res8[0] = 0;
      local_res18[0] = _C;
      BVar2 = GetStringTypeW(1,local_res18,1,local_res8);
      if (BVar2 == 0) goto LAB_18000cc1f;
    }
    uVar1 = (uint)(local_res8[0] & _Type);
  }
  return uVar1;
}


/* Address: 0x18000cc30; Evidence: ev_2572b91e27f043fcb7ab634d2b98389f403f4c0daa4ac199baa742be709bab6b */

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
      pvVar3 = HeapAlloc(DAT_180028c10,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_180011190();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_18000a5b0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  p_Var4 = FUN_18000b774();
  *(undefined4 *)p_Var4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x18000cc90; Evidence: ev_69a68696e272b5f205dc848e400fd17bb042316eb519ca1229a76705d0d5bdb7 */

ulonglong FUN_18000cc90(undefined1 (*param_1) [32],ulonglong param_2)

{
  undefined1 auVar1 [32];
  undefined1 (*pauVar2) [32];
  ulonglong uVar3;
  undefined1 (*pauVar4) [32];
  ulonglong uVar5;
  undefined1 auVar6 [16];
  
  if (4 < DAT_180027058) {
    uVar3 = (ulonglong)((uint)param_1 & 0x1f);
    uVar5 = 0;
    if (uVar3 != 0) {
      uVar5 = 0x20 - uVar3;
    }
    if (param_2 < uVar5) {
      uVar5 = param_2;
    }
    for (pauVar2 = param_1;
        (pauVar2 != (undefined1 (*) [32])(*param_1 + uVar5) && ((*pauVar2)[0] != '\0'));
        pauVar2 = (undefined1 (*) [32])(*pauVar2 + 1)) {
    }
    uVar3 = (longlong)pauVar2 - (longlong)param_1;
    if (uVar3 == uVar5) {
      pauVar4 = (undefined1 (*) [32])
                ((longlong)pauVar2 +
                ((param_2 - uVar5) - (ulonglong)((uint)(param_2 - uVar5) & 0x1f)));
      while ((pauVar2 != pauVar4 &&
             (auVar1 = vpcmpeqb_avx2(SUB6432(ZEXT1664((undefined1  [16])0x0),0),*pauVar2),
             (((((((((((((((((((((((((((((((SUB321(auVar1 >> 7,0) & 1) == 0 &&
                                          (SUB321(auVar1 >> 0xf,0) & 1) == 0) &&
                                         (SUB321(auVar1 >> 0x17,0) & 1) == 0) &&
                                        (SUB321(auVar1 >> 0x1f,0) & 1) == 0) &&
                                       (SUB321(auVar1 >> 0x27,0) & 1) == 0) &&
                                      (SUB321(auVar1 >> 0x2f,0) & 1) == 0) &&
                                     (SUB321(auVar1 >> 0x37,0) & 1) == 0) &&
                                    (SUB321(auVar1 >> 0x3f,0) & 1) == 0) &&
                                   (SUB321(auVar1 >> 0x47,0) & 1) == 0) &&
                                  (SUB321(auVar1 >> 0x4f,0) & 1) == 0) &&
                                 (SUB321(auVar1 >> 0x57,0) & 1) == 0) &&
                                (SUB321(auVar1 >> 0x5f,0) & 1) == 0) &&
                               (SUB321(auVar1 >> 0x67,0) & 1) == 0) &&
                              (SUB321(auVar1 >> 0x6f,0) & 1) == 0) &&
                             (SUB321(auVar1 >> 0x77,0) & 1) == 0) &&
                            SUB321(auVar1 >> 0x7f,0) == '\0') && (SUB321(auVar1 >> 0x87,0) & 1) == 0
                           ) && (SUB321(auVar1 >> 0x8f,0) & 1) == 0) &&
                         (SUB321(auVar1 >> 0x97,0) & 1) == 0) && (SUB321(auVar1 >> 0x9f,0) & 1) == 0
                        ) && (SUB321(auVar1 >> 0xa7,0) & 1) == 0) &&
                      (SUB321(auVar1 >> 0xaf,0) & 1) == 0) && (SUB321(auVar1 >> 0xb7,0) & 1) == 0)
                    && SUB321(auVar1 >> 0xbf,0) == '\0') && (SUB321(auVar1 >> 199,0) & 1) == 0) &&
                  (SUB321(auVar1 >> 0xcf,0) & 1) == 0) && (SUB321(auVar1 >> 0xd7,0) & 1) == 0) &&
                (SUB321(auVar1 >> 0xdf,0) & 1) == 0) && (SUB321(auVar1 >> 0xe7,0) & 1) == 0) &&
              (SUB321(auVar1 >> 0xef,0) & 1) == 0) && (SUB321(auVar1 >> 0xf7,0) & 1) == 0) &&
             -1 < auVar1[0x1f]))) {
        pauVar2 = pauVar2 + 1;
      }
      for (; (pauVar2 != (undefined1 (*) [32])(*param_1 + param_2) && ((*pauVar2)[0] != '\0'));
          pauVar2 = (undefined1 (*) [32])(*pauVar2 + 1)) {
      }
      uVar3 = (longlong)pauVar2 - (longlong)param_1;
    }
    return uVar3;
  }
  pauVar2 = param_1;
  if (DAT_180027058 < 1) {
    for (; (pauVar2 != (undefined1 (*) [32])(*param_1 + param_2) && ((*pauVar2)[0] != '\0'));
        pauVar2 = (undefined1 (*) [32])(*pauVar2 + 1)) {
    }
  }
  else {
    uVar3 = (ulonglong)((uint)param_1 & 0xf);
    uVar5 = 0;
    if (uVar3 != 0) {
      uVar5 = 0x10 - uVar3;
    }
    if (param_2 < uVar5) {
      uVar5 = param_2;
    }
    for (; (pauVar2 != (undefined1 (*) [32])(*param_1 + uVar5) && ((*pauVar2)[0] != '\0'));
        pauVar2 = (undefined1 (*) [32])(*pauVar2 + 1)) {
    }
    if ((longlong)pauVar2 - (longlong)param_1 != uVar5) {
      return (longlong)pauVar2 - (longlong)param_1;
    }
    pauVar4 = (undefined1 (*) [32])
              ((longlong)pauVar2 + ((param_2 - uVar5) - (ulonglong)((uint)(param_2 - uVar5) & 0xf)))
    ;
    while ((pauVar2 != pauVar4 &&
           (auVar6[0] = -((*pauVar2)[0] == '\0'), auVar6[1] = -((*pauVar2)[1] == '\0'),
           auVar6[2] = -((*pauVar2)[2] == '\0'), auVar6[3] = -((*pauVar2)[3] == '\0'),
           auVar6[4] = -((*pauVar2)[4] == '\0'), auVar6[5] = -((*pauVar2)[5] == '\0'),
           auVar6[6] = -((*pauVar2)[6] == '\0'), auVar6[7] = -((*pauVar2)[7] == '\0'),
           auVar6[8] = -((*pauVar2)[8] == '\0'), auVar6[9] = -((*pauVar2)[9] == '\0'),
           auVar6[10] = -((*pauVar2)[10] == '\0'), auVar6[0xb] = -((*pauVar2)[0xb] == '\0'),
           auVar6[0xc] = -((*pauVar2)[0xc] == '\0'), auVar6[0xd] = -((*pauVar2)[0xd] == '\0'),
           auVar6[0xe] = -((*pauVar2)[0xe] == '\0'), auVar6[0xf] = -((*pauVar2)[0xf] == '\0'),
           (((((((((((((((SUB161(auVar6 >> 7,0) & 1) == 0 && (SUB161(auVar6 >> 0xf,0) & 1) == 0) &&
                       (SUB161(auVar6 >> 0x17,0) & 1) == 0) && (SUB161(auVar6 >> 0x1f,0) & 1) == 0)
                     && (SUB161(auVar6 >> 0x27,0) & 1) == 0) && (SUB161(auVar6 >> 0x2f,0) & 1) == 0)
                   && (SUB161(auVar6 >> 0x37,0) & 1) == 0) && (SUB161(auVar6 >> 0x3f,0) & 1) == 0)
                 && (SUB161(auVar6 >> 0x47,0) & 1) == 0) && (SUB161(auVar6 >> 0x4f,0) & 1) == 0) &&
               (SUB161(auVar6 >> 0x57,0) & 1) == 0) && (SUB161(auVar6 >> 0x5f,0) & 1) == 0) &&
             (SUB161(auVar6 >> 0x67,0) & 1) == 0) && (SUB161(auVar6 >> 0x6f,0) & 1) == 0) &&
           (SUB161(auVar6 >> 0x77,0) & 1) == 0) && -1 < auVar6[0xf]))) {
      pauVar2 = (undefined1 (*) [32])(*pauVar2 + 0x10);
    }
    if (pauVar2 != (undefined1 (*) [32])(*param_1 + param_2)) {
      while ((*pauVar2)[0] != '\0') {
        pauVar2 = (undefined1 (*) [32])(*pauVar2 + 1);
        if (pauVar2 == (undefined1 (*) [32])(*param_1 + param_2)) {
          return (longlong)pauVar2 - (longlong)param_1;
        }
      }
    }
  }
  return (longlong)pauVar2 - (longlong)param_1;
}


/* Address: 0x18000ce20; Evidence: ev_e3fbcc4355e9f5572e0237ec7aaaee7344206a4b4a6b07b093caa06b640645f6 */

ulonglong FUN_18000ce20(undefined1 (*param_1) [32],ulonglong param_2)

{
  undefined1 auVar1 [32];
  undefined1 (*pauVar2) [32];
  ulonglong uVar3;
  ulonglong uVar4;
  short *psVar5;
  undefined1 auVar6 [16];
  
  if (4 < DAT_180027058) {
    if (((ulonglong)param_1 & 1) == 0) {
      uVar3 = (ulonglong)((uint)param_1 & 0x1f);
      uVar4 = 0;
      if (uVar3 != 0) {
        uVar4 = 0x20 - uVar3;
      }
      uVar3 = uVar4 >> 1;
      if (param_2 < uVar4 >> 1) {
        uVar3 = param_2;
      }
      for (pauVar2 = param_1;
          (pauVar2 != (undefined1 (*) [32])(*param_1 + uVar3 * 2) && (*(short *)*pauVar2 != 0));
          pauVar2 = (undefined1 (*) [32])(*pauVar2 + 2)) {
      }
      uVar4 = (longlong)pauVar2 - (longlong)param_1 >> 1;
      if (uVar4 != uVar3) {
        return uVar4;
      }
      pauVar2 = (undefined1 (*) [32])(*param_1 + uVar4 * 2);
      while ((pauVar2 !=
              (undefined1 (*) [32])
              ((longlong)param_1 +
              (((param_2 - uVar3) - (ulonglong)((uint)(param_2 - uVar3) & 0x1f)) + uVar4) * 2) &&
             (auVar1 = vpcmpeqw_avx2(SUB6432(ZEXT1664((undefined1  [16])0x0),0),*pauVar2),
             (((((((((((((((((((((((((((((((SUB321(auVar1 >> 7,0) & 1) == 0 &&
                                          (SUB321(auVar1 >> 0xf,0) & 1) == 0) &&
                                         (SUB321(auVar1 >> 0x17,0) & 1) == 0) &&
                                        (SUB321(auVar1 >> 0x1f,0) & 1) == 0) &&
                                       (SUB321(auVar1 >> 0x27,0) & 1) == 0) &&
                                      (SUB321(auVar1 >> 0x2f,0) & 1) == 0) &&
                                     (SUB321(auVar1 >> 0x37,0) & 1) == 0) &&
                                    (SUB321(auVar1 >> 0x3f,0) & 1) == 0) &&
                                   (SUB321(auVar1 >> 0x47,0) & 1) == 0) &&
                                  (SUB321(auVar1 >> 0x4f,0) & 1) == 0) &&
                                 (SUB321(auVar1 >> 0x57,0) & 1) == 0) &&
                                (SUB321(auVar1 >> 0x5f,0) & 1) == 0) &&
                               (SUB321(auVar1 >> 0x67,0) & 1) == 0) &&
                              (SUB321(auVar1 >> 0x6f,0) & 1) == 0) &&
                             (SUB321(auVar1 >> 0x77,0) & 1) == 0) &&
                            SUB321(auVar1 >> 0x7f,0) == '\0') && (SUB321(auVar1 >> 0x87,0) & 1) == 0
                           ) && (SUB321(auVar1 >> 0x8f,0) & 1) == 0) &&
                         (SUB321(auVar1 >> 0x97,0) & 1) == 0) && (SUB321(auVar1 >> 0x9f,0) & 1) == 0
                        ) && (SUB321(auVar1 >> 0xa7,0) & 1) == 0) &&
                      (SUB321(auVar1 >> 0xaf,0) & 1) == 0) && (SUB321(auVar1 >> 0xb7,0) & 1) == 0)
                    && SUB321(auVar1 >> 0xbf,0) == '\0') && (SUB321(auVar1 >> 199,0) & 1) == 0) &&
                  (SUB321(auVar1 >> 0xcf,0) & 1) == 0) && (SUB321(auVar1 >> 0xd7,0) & 1) == 0) &&
                (SUB321(auVar1 >> 0xdf,0) & 1) == 0) && (SUB321(auVar1 >> 0xe7,0) & 1) == 0) &&
              (SUB321(auVar1 >> 0xef,0) & 1) == 0) && (SUB321(auVar1 >> 0xf7,0) & 1) == 0) &&
             -1 < auVar1[0x1f]))) {
        pauVar2 = pauVar2 + 1;
      }
      for (; (pauVar2 != (undefined1 (*) [32])(*param_1 + param_2 * 2) && (*(short *)*pauVar2 != 0))
          ; pauVar2 = (undefined1 (*) [32])(*pauVar2 + 2)) {
      }
    }
    else {
      pauVar2 = param_1;
      if (param_1 != (undefined1 (*) [32])(*param_1 + param_2 * 2)) {
        while (*(short *)*pauVar2 != 0) {
          pauVar2 = (undefined1 (*) [32])(*pauVar2 + 2);
          if (pauVar2 == (undefined1 (*) [32])(*param_1 + param_2 * 2)) {
            return (longlong)pauVar2 - (longlong)param_1 >> 1;
          }
        }
      }
    }
    return (longlong)pauVar2 - (longlong)param_1 >> 1;
  }
  pauVar2 = param_1;
  if (DAT_180027058 < 1) {
    for (; (pauVar2 != (undefined1 (*) [32])(*param_1 + param_2 * 2) && (*(short *)*pauVar2 != 0));
        pauVar2 = (undefined1 (*) [32])(*pauVar2 + 2)) {
    }
  }
  else {
    if (((ulonglong)param_1 & 1) == 0) {
      uVar3 = (ulonglong)((uint)param_1 & 0xf);
      uVar4 = 0;
      if (uVar3 != 0) {
        uVar4 = 0x10 - uVar3;
      }
      uVar3 = uVar4 >> 1;
      if (param_2 < uVar4 >> 1) {
        uVar3 = param_2;
      }
      for (; (pauVar2 != (undefined1 (*) [32])(*param_1 + uVar3 * 2) && (*(short *)*pauVar2 != 0));
          pauVar2 = (undefined1 (*) [32])(*pauVar2 + 2)) {
      }
      uVar4 = (longlong)pauVar2 - (longlong)param_1 >> 1;
      if (uVar4 != uVar3) {
        return uVar4;
      }
      for (psVar5 = (short *)(*param_1 + uVar4 * 2);
          psVar5 != (short *)((longlong)param_1 +
                             (((param_2 - uVar3) - (ulonglong)((uint)(param_2 - uVar3) & 0xf)) +
                             uVar4) * 2); psVar5 = psVar5 + 8) {
        auVar6._0_2_ = -(ushort)(*psVar5 == 0);
        auVar6._2_2_ = -(ushort)(psVar5[1] == 0);
        auVar6._4_2_ = -(ushort)(psVar5[2] == 0);
        auVar6._6_2_ = -(ushort)(psVar5[3] == 0);
        auVar6._8_2_ = -(ushort)(psVar5[4] == 0);
        auVar6._10_2_ = -(ushort)(psVar5[5] == 0);
        auVar6._12_2_ = -(ushort)(psVar5[6] == 0);
        auVar6._14_2_ = -(ushort)(psVar5[7] == 0);
        if ((((((((((((((((SUB161(auVar6 >> 7,0) & 1) != 0 || (SUB161(auVar6 >> 0xf,0) & 1) != 0) ||
                        (SUB161(auVar6 >> 0x17,0) & 1) != 0) || (SUB161(auVar6 >> 0x1f,0) & 1) != 0)
                      || (SUB161(auVar6 >> 0x27,0) & 1) != 0) || (SUB161(auVar6 >> 0x2f,0) & 1) != 0
                     ) || (SUB161(auVar6 >> 0x37,0) & 1) != 0) ||
                   (SUB161(auVar6 >> 0x3f,0) & 1) != 0) || (SUB161(auVar6 >> 0x47,0) & 1) != 0) ||
                 (SUB161(auVar6 >> 0x4f,0) & 1) != 0) || (SUB161(auVar6 >> 0x57,0) & 1) != 0) ||
               (SUB161(auVar6 >> 0x5f,0) & 1) != 0) || (SUB161(auVar6 >> 0x67,0) & 1) != 0) ||
             (SUB161(auVar6 >> 0x6f,0) & 1) != 0) || (auVar6._14_2_ >> 7 & 1) != 0) ||
            (auVar6._14_2_ & 0x8000) != 0) break;
      }
      for (; (psVar5 != (short *)(*param_1 + param_2 * 2) && (*psVar5 != 0)); psVar5 = psVar5 + 1) {
      }
      return (longlong)psVar5 - (longlong)param_1 >> 1;
    }
    if (param_1 != (undefined1 (*) [32])(*param_1 + param_2 * 2)) {
      while (*(short *)*pauVar2 != 0) {
        pauVar2 = (undefined1 (*) [32])(*pauVar2 + 2);
        if (pauVar2 == (undefined1 (*) [32])(*param_1 + param_2 * 2)) {
          return (longlong)pauVar2 - (longlong)param_1 >> 1;
        }
      }
    }
  }
  return (longlong)pauVar2 - (longlong)param_1 >> 1;
}


/* Address: 0x18000d028; Evidence: ev_126584a41188ab428e2a9e1f0cdb9db3a636d6140f52ffec8608f391f808ce0e */

undefined8
FUN_18000d028(double *param_1,undefined1 (*param_2) [16],ulonglong param_3,char *param_4,
             longlong param_5,uint param_6,byte param_7,int param_8,__acrt_rounding_mode param_9,
             longlong *param_10)

{
  undefined1 (*pauVar1) [32];
  char *pcVar2;
  undefined1 (*pauVar3) [32];
  undefined1 uVar4;
  bool bVar5;
  ushort uVar6;
  undefined8 uVar7;
  undefined1 (*pauVar8) [16];
  undefined1 (*pauVar9) [32];
  longlong lVar10;
  longlong lVar11;
  char cVar12;
  short sVar13;
  short sVar14;
  undefined1 (*pauVar15) [32];
  uint uVar16;
  char *pcVar17;
  ulonglong uVar18;
  ulonglong uVar19;
  
  (*param_2)[0] = 0;
  uVar16 = 0;
  if (-1 < (int)param_6) {
    uVar16 = param_6;
  }
  if (param_3 <= (ulonglong)(longlong)(int)(uVar16 + 0xb)) {
    *(undefined1 *)(param_10 + 6) = 1;
    *(undefined4 *)((longlong)param_10 + 0x2c) = 0x22;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_10);
    return 0x22;
  }
  if (((ulonglong)*param_1 >> 0x34 & 0x7ff) == 0x7ff) {
    uVar7 = FUN_18000d3bc((ulonglong *)param_1,*param_2,param_3,param_4,param_5,uVar16,'\0',param_8,
                          param_9,param_10);
    if ((int)uVar7 != 0) {
      (*param_2)[0] = 0;
      return uVar7;
    }
    pauVar8 = FUN_1800178b0(param_2,0x65);
    if (pauVar8 == (undefined1 (*) [16])0x0) {
      return 0;
    }
    (*pauVar8)[0] = (param_7 ^ 1) * ' ' + 'P';
    (*pauVar8)[3] = 0;
    return 0;
  }
  if ((longlong)*param_1 < 0) {
    (*param_2)[0] = 0x2d;
    param_2 = (undefined1 (*) [16])(*param_2 + 1);
  }
  pauVar1 = (undefined1 (*) [32])(*param_2 + 1);
  uVar19 = 0x3ff;
  sVar14 = (ushort)(param_7 ^ 1) * 0x20 + 7;
  if (((ulonglong)*param_1 & 0x7ff0000000000000) == 0) {
    (*param_2)[0] = 0x30;
    uVar19 = (ulonglong)(-(uint)(((ulonglong)*param_1 & 0xfffffffffffff) != 0) & 0x3fe);
  }
  else {
    (*param_2)[0] = 0x31;
  }
  pauVar15 = (undefined1 (*) [32])(*param_2 + 2);
  if (uVar16 == 0) {
    uVar4 = 0;
  }
  else {
    if ((char)param_10[5] == '\0') {
      FUN_18000a2a0(param_10);
    }
    uVar4 = *(undefined1 *)**(undefined8 **)(param_10[3] + 0xf8);
  }
  (*pauVar1)[0] = uVar4;
  if (((ulonglong)*param_1 & 0xfffffffffffff) != 0) {
    sVar13 = 0x30;
    uVar18 = 0xf000000000000;
    while (0 < (int)uVar16) {
      uVar6 = (short)(((ulonglong)*param_1 & uVar18) >> ((byte)sVar13 & 0x3f)) + 0x30;
      if (0x39 < uVar6) {
        uVar6 = uVar6 + sVar14;
      }
      (*pauVar15)[0] = (char)uVar6;
      uVar16 = uVar16 - 1;
      pauVar15 = (undefined1 (*) [32])(*pauVar15 + 1);
      uVar18 = uVar18 >> 4;
      sVar13 = sVar13 + -4;
      if (sVar13 < 0) goto LAB_18000d27a;
    }
    bVar5 = should_round_up(param_1,uVar18,sVar13,param_9);
    pauVar3 = pauVar15;
    if (!bVar5) goto LAB_18000d2a0;
    while( true ) {
      pauVar9 = (undefined1 (*) [32])(pauVar3[-1] + 0x1f);
      cVar12 = (*pauVar9)[0];
      if ((cVar12 + 0xbaU & 0xdf) != 0) break;
      (*pauVar9)[0] = 0x30;
      pauVar3 = pauVar9;
    }
    if (pauVar9 == pauVar1) {
      pauVar3[-1][0x1e] = pauVar3[-1][0x1e] + '\x01';
    }
    else {
      if (cVar12 == '9') {
        cVar12 = (char)sVar14 + '9';
      }
      (*pauVar9)[0] = cVar12 + '\x01';
    }
  }
LAB_18000d27a:
  if (0 < (int)uVar16) {
    FUN_180017a70(pauVar15,0x30,(ulonglong)uVar16);
    pauVar15 = (undefined1 (*) [32])(*pauVar15 + uVar16);
  }
LAB_18000d2a0:
  if ((*pauVar1)[0] == '\0') {
    pauVar15 = pauVar1;
  }
  (*pauVar15)[0] = (param_7 ^ 1) * ' ' + 'P';
  pcVar2 = *pauVar15 + 2;
  uVar16 = (uint)((ulonglong)*param_1 >> 0x34) & 0x7ff;
  lVar10 = uVar16 - uVar19;
  lVar11 = lVar10;
  if (lVar10 < 0) {
    lVar11 = uVar19 - uVar16;
  }
  uVar4 = 0x2b;
  if (lVar10 < 0) {
    uVar4 = 0x2d;
  }
  (*pauVar15)[1] = uVar4;
  *pcVar2 = '0';
  pcVar17 = pcVar2;
  if (lVar11 < 1000) {
LAB_18000d327:
    if (99 < lVar11) goto LAB_18000d32d;
LAB_18000d360:
    if (lVar11 < 10) goto LAB_18000d391;
  }
  else {
    pcVar17 = *pauVar15 + 3;
    *pcVar2 = (char)(lVar11 / 1000) + '0';
    lVar11 = lVar11 % 1000;
    if (pcVar17 == pcVar2) goto LAB_18000d327;
LAB_18000d32d:
    lVar10 = SUB168(SEXT816(-0x5c28f5c28f5c28f5) * SEXT816(lVar11),8) + lVar11;
    lVar10 = (lVar10 >> 6) - (lVar10 >> 0x3f);
    *pcVar17 = (char)lVar10 + '0';
    pcVar17 = pcVar17 + 1;
    lVar11 = lVar11 + lVar10 * -100;
    if (pcVar17 == pcVar2) goto LAB_18000d360;
  }
  *pcVar17 = (char)(lVar11 / 10) + '0';
  pcVar17 = pcVar17 + 1;
  lVar11 = lVar11 % 10;
LAB_18000d391:
  *pcVar17 = (char)lVar11 + '0';
  pcVar17[1] = '\0';
  return 0;
}


/* Address: 0x18000d3bc; Evidence: ev_8ff5350632555cabe8b4b19b4e0da6843702f8c95cdb415ae4bc0da010331ad1 */

void FUN_18000d3bc(ulonglong *param_1,undefined1 *param_2,ulonglong param_3,char *param_4,
                  longlong param_5,int param_6,char param_7,int param_8,int param_9,
                  longlong *param_10)

{
  int iVar1;
  undefined8 uVar2;
  ulonglong uVar3;
  int local_18 [4];
  
  local_18[0] = 0;
  local_18[1] = 0;
  local_18[2] = 0;
  local_18[3] = 0;
  uVar2 = FUN_180012b6c(*param_1,param_6 + 1,1,local_18,param_4,param_5);
  uVar3 = (param_3 - (0 < param_6)) - (ulonglong)(local_18[0] == 0x2d);
  if (param_3 == 0xffffffffffffffff) {
    uVar3 = 0xffffffffffffffff;
  }
  iVar1 = FUN_1800125c8((undefined1 (*) [32])
                        (param_2 + (ulonglong)(0 < param_6) + (ulonglong)(local_18[0] == 0x2d)),
                        uVar3,param_6 + 1,local_18,(int)uVar2,param_9,param_10);
  if (iVar1 == 0) {
    FUN_18000d4c0(param_2,param_3,param_6,param_7,param_8,local_18,0,param_10);
  }
  else {
    *param_2 = 0;
  }
  return;
}


/* Address: 0x18000d4c0; Evidence: ev_09cad273a55efa57e428b0793f35574ef6ab3c96b6138653fabcf372200f3b17 */

undefined8
FUN_18000d4c0(undefined1 *param_1,ulonglong param_2,int param_3,char param_4,int param_5,
             int *param_6,byte param_7,longlong *param_8)

{
  undefined8 uVar1;
  undefined1 (*pauVar2) [32];
  undefined1 *puVar3;
  char *pcVar4;
  int iVar5;
  longlong lVar6;
  longlong lVar7;
  
  iVar5 = 0;
  if (0 < param_3) {
    iVar5 = param_3;
  }
  if ((ulonglong)(longlong)(iVar5 + 9) < param_2) {
    if ((param_7 != 0) &&
       (pauVar2 = (undefined1 (*) [32])(param_1 + (*param_6 == 0x2d)), 0 < param_3)) {
      lVar6 = -1;
      do {
        lVar7 = lVar6;
        lVar6 = lVar7 + 1;
      } while ((*pauVar2)[lVar6] != '\0');
      FUN_180017e30((undefined1 (*) [32])(*pauVar2 + 1),pauVar2,lVar7 + 2);
    }
    puVar3 = param_1;
    if (*param_6 == 0x2d) {
      *param_1 = 0x2d;
      puVar3 = param_1 + 1;
    }
    if (0 < param_3) {
      *puVar3 = puVar3[1];
      puVar3 = puVar3 + 1;
      if ((char)param_8[5] == '\0') {
        FUN_18000a2a0(param_8);
      }
      *puVar3 = *(undefined1 *)**(undefined8 **)(param_8[3] + 0xf8);
    }
    pcVar4 = puVar3 + ((ulonglong)param_7 ^ 1) + (longlong)param_3;
    puVar3 = param_1 + (param_2 - (longlong)pcVar4);
    if (param_2 == 0xffffffffffffffff) {
      puVar3 = (undefined1 *)0xffffffffffffffff;
    }
    uVar1 = FUN_18000b510(pcVar4,(longlong)puVar3,0x18001b92c);
    if ((int)uVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    if (param_4 != '\0') {
      *pcVar4 = 'E';
    }
    if (**(char **)(param_6 + 2) != '0') {
      iVar5 = param_6[1] + -1;
      if (iVar5 < 0) {
        iVar5 = -iVar5;
        pcVar4[1] = '-';
      }
      if (99 < iVar5) {
        pcVar4[2] = pcVar4[2] + (char)(iVar5 / 100);
        iVar5 = iVar5 % 100;
      }
      if (9 < iVar5) {
        pcVar4[3] = pcVar4[3] + (char)(iVar5 / 10);
        iVar5 = iVar5 % 10;
      }
      pcVar4[4] = pcVar4[4] + (char)iVar5;
    }
    if ((param_5 == 2) && ((*(undefined1 (*) [32])(pcVar4 + 2))[0] == '0')) {
      FUN_180017e30((undefined1 (*) [32])(pcVar4 + 2),(undefined1 (*) [32])(pcVar4 + 3),3);
    }
    uVar1 = 0;
  }
  else {
    *(undefined1 *)(param_8 + 6) = 1;
    *(undefined4 *)((longlong)param_8 + 0x2c) = 0x22;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_8);
    uVar1 = 0x22;
  }
  return uVar1;
}


/* Address: 0x18000d6a4; Evidence: ev_5a54a5126848b10df21f5d9a177711cd4b9c612e22380c34df2034883f294683 */

void FUN_18000d6a4(ulonglong *param_1,undefined1 (*param_2) [32],longlong param_3,char *param_4,
                  longlong param_5,int param_6,int param_7,longlong *param_8)

{
  int iVar1;
  undefined8 uVar2;
  ulonglong uVar3;
  int local_18 [4];
  
  local_18[0] = 0;
  local_18[1] = 0;
  local_18[2] = 0;
  local_18[3] = 0;
  uVar2 = FUN_180012b6c(*param_1,param_6,0,local_18,param_4,param_5);
  uVar3 = param_3 - (ulonglong)(local_18[0] == 0x2d);
  if (param_3 == -1) {
    uVar3 = 0xffffffffffffffff;
  }
  iVar1 = FUN_1800125c8((undefined1 (*) [32])(*param_2 + (local_18[0] == 0x2d)),uVar3,
                        local_18[1] + param_6,local_18,(int)uVar2,param_7,param_8);
  if (iVar1 == 0) {
    FUN_18000d77c(param_2,param_3,param_6,local_18,'\0',param_8);
  }
  else {
    (*param_2)[0] = 0;
  }
  return;
}


/* Address: 0x18000d77c; Evidence: ev_f740c01264a7845f3258e84fb51f7c9c0aa1252112c9988ae43f3997bb6be5cd */

undefined8
FUN_18000d77c(undefined1 (*param_1) [32],undefined8 param_2,int param_3,int *param_4,char param_5,
             longlong *param_6)

{
  undefined1 (*pauVar1) [32];
  bool bVar2;
  int iVar3;
  undefined1 (*pauVar4) [32];
  longlong lVar5;
  longlong lVar6;
  
  if ((param_5 != '\0') && (param_4[1] + -1 == param_3)) {
    *(undefined2 *)(param_1[-1] + (longlong)param_4[1] + (ulonglong)(*param_4 == 0x2d) + 0x1f) =
         0x30;
  }
  if (*param_4 == 0x2d) {
    (*param_1)[0] = 0x2d;
    param_1 = (undefined1 (*) [32])(*param_1 + 1);
  }
  iVar3 = param_4[1];
  if (iVar3 < 1) {
    if ((iVar3 == 0) && (**(char **)(param_4 + 2) == '0')) {
      bVar2 = true;
    }
    else {
      bVar2 = false;
    }
    if ((param_5 == '\0') || (!bVar2)) {
      lVar6 = -1;
      do {
        lVar5 = lVar6;
        lVar6 = lVar5 + 1;
      } while ((*param_1)[lVar6] != '\0');
      FUN_180017e30((undefined1 (*) [32])(*param_1 + 1),param_1,lVar5 + 2);
    }
    (*param_1)[0] = 0x30;
    pauVar4 = (undefined1 (*) [32])(*param_1 + 1);
  }
  else {
    pauVar4 = (undefined1 (*) [32])(*param_1 + iVar3);
  }
  if (0 < param_3) {
    pauVar1 = (undefined1 (*) [32])(*pauVar4 + 1);
    lVar6 = -1;
    do {
      lVar5 = lVar6;
      lVar6 = lVar5 + 1;
    } while ((*pauVar4)[lVar6] != '\0');
    FUN_180017e30(pauVar1,pauVar4,lVar5 + 2);
    if ((char)param_6[5] == '\0') {
      FUN_18000a2a0(param_6);
    }
    (*pauVar4)[0] = *(undefined1 *)**(undefined8 **)(param_6[3] + 0xf8);
    if (param_4[1] < 0) {
      iVar3 = -param_4[1];
      if ((param_5 != '\0') || (iVar3 < param_3)) {
        param_3 = iVar3;
      }
      lVar6 = -1;
      do {
        lVar5 = lVar6;
        lVar6 = lVar5 + 1;
      } while ((*pauVar1)[lVar6] != '\0');
      FUN_180017e30((undefined1 (*) [32])(*pauVar1 + param_3),pauVar1,lVar5 + 2);
      FUN_180017a70(pauVar1,0x30,(longlong)param_3);
    }
  }
  return 0;
}


/* Address: 0x18000d8cc; Evidence: ev_9c41785f649a28a533938fe04bb606e5e1c805eeb4f6877959a73fcba126c5c6 */

void FUN_18000d8cc(ulonglong *param_1,undefined1 (*param_2) [32],ulonglong param_3,char *param_4,
                  longlong param_5,int param_6,char param_7,int param_8,int param_9,
                  longlong *param_10)

{
  undefined1 (*pauVar1) [32];
  int iVar2;
  undefined8 uVar3;
  ulonglong uVar4;
  undefined1 (*pauVar5) [32];
  int iVar6;
  bool bVar7;
  int local_18 [4];
  
  local_18[0] = 0;
  local_18[1] = 0;
  local_18[2] = 0;
  local_18[3] = 0;
  uVar3 = FUN_180012b6c(*param_1,param_6,0,local_18,param_4,param_5);
  bVar7 = local_18[0] == 0x2d;
  uVar4 = param_3 - bVar7;
  iVar6 = local_18[1] + -1;
  if (param_3 == 0xffffffffffffffff) {
    uVar4 = 0xffffffffffffffff;
  }
  iVar2 = FUN_1800125c8((undefined1 (*) [32])(*param_2 + bVar7),uVar4,param_6,local_18,(int)uVar3,
                        param_9,param_10);
  if (iVar2 == 0) {
    iVar2 = local_18[1] + -1;
    if ((iVar2 < -4) || (param_6 <= iVar2)) {
      FUN_18000d4c0(*param_2,param_3,param_6,param_7,param_8,local_18,1,param_10);
    }
    else {
      pauVar1 = (undefined1 (*) [32])(*param_2 + bVar7);
      if (iVar6 < iVar2) {
        do {
          pauVar5 = pauVar1;
          pauVar1 = (undefined1 (*) [32])(*pauVar5 + 1);
        } while ((*pauVar5)[0] != '\0');
        pauVar5[-1][0x1f] = 0;
      }
      FUN_18000d77c(param_2,param_3,param_6,local_18,'\x01',param_10);
    }
  }
  else {
    (*param_2)[0] = 0;
  }
  return;
}


/* Address: 0x18000da20; Evidence: ev_bbdca8e45498512f553e0ea097b2558a4ad065788c4bc98d4eb8f1adf3479d93 */

/* Library Function - Single Match
    bool __cdecl should_round_up(double const * __ptr64 const,unsigned __int64,short,enum
   __acrt_rounding_mode)
   
   Library: Visual Studio 2019 Release */

bool __cdecl
should_round_up(double *param_1,__uint64 param_2,short param_3,__acrt_rounding_mode param_4)

{
  double dVar1;
  ushort uVar2;
  int iVar3;
  byte bVar4;
  
  bVar4 = (byte)param_3;
  uVar2 = (ushort)(((ulonglong)*param_1 & param_2 & 0xfffffffffffff) >> (bVar4 & 0x3f));
  if (param_4 == 0) {
    return 7 < uVar2;
  }
  iVar3 = fegetround();
  if (iVar3 == 0) {
    dVar1 = *param_1;
    uVar2 = (ushort)(((ulonglong)dVar1 & param_2 & 0xfffffffffffff) >> (bVar4 & 0x3f));
    if (8 < uVar2) {
      return true;
    }
    if (7 < uVar2) {
      if (((1L << (bVar4 & 0x3f)) - 1U & (ulonglong)dVar1 & 0xfffffffffffff) == 0) {
        if (param_3 == 0x30) {
          bVar4 = ((ulonglong)dVar1 & 0x7ff0000000000000) != 0;
        }
        else {
          bVar4 = (byte)(((ulonglong)dVar1 >> 4 & param_2 & 0xffffffffffff) >> (bVar4 & 0x3f));
        }
        return (bool)(bVar4 & 1);
      }
      return true;
    }
  }
  else if (iVar3 == 0x200) {
    if ((uVar2 != 0) && (-1 < (longlong)*param_1)) {
      return true;
    }
  }
  else {
    if (iVar3 != 0x100) {
      return false;
    }
    if ((uVar2 != 0) && ((longlong)*param_1 < 0)) {
      return true;
    }
  }
  return false;
}


/* Address: 0x18000db38; Evidence: ev_72678b77b98b24acc57508d96b1a5667be50cb25fd6f10fad7c3fdaef367c2cd */

undefined8
FUN_18000db38(double *param_1,undefined1 (*param_2) [32],ulonglong param_3,char *param_4,
             longlong param_5,int param_6,uint param_7,ulonglong param_8,
             __acrt_rounding_mode param_9,longlong *param_10)

{
  double dVar1;
  undefined8 uVar2;
  longlong lVar3;
  uint uVar4;
  __acrt_rounding_mode _Var5;
  byte bVar6;
  ulonglong uVar7;
  
  if (param_2 == (undefined1 (*) [32])0x0) {
    *(undefined1 *)(param_10 + 6) = 1;
    *(undefined4 *)((longlong)param_10 + 0x2c) = 0x16;
  }
  else {
    if (((param_3 != 0) && (param_4 != (char *)0x0)) && (param_5 != 0)) {
      if ((param_6 == 0x41) || (param_6 - 0x45U < 3)) {
        uVar4 = 1;
      }
      else {
        uVar4 = 0;
      }
      bVar6 = (byte)uVar4;
      if (((param_8 & 8) == 0) &&
         (dVar1 = *param_1, ((uint)((ulonglong)dVar1 >> 0x34) & 0x7ff) == 0x7ff)) {
        if (((ulonglong)dVar1 & 0xfffffffffffff) == 0) {
          lVar3 = 0;
        }
        else if (((longlong)dVar1 < 0) && (((ulonglong)dVar1 & 0xfffffffffffff) == 0x8000000000000))
        {
          lVar3 = 0xc;
        }
        else {
          lVar3 = (-(ulonglong)(((ulonglong)dVar1 & 0x8000000000000) != 0) & 0xfffffffffffffffc) + 8
          ;
        }
        if (param_3 < 4U - ((longlong)dVar1 >> 0x3f)) {
          (*param_2)[0] = 0;
          return 0xc;
        }
        uVar7 = 0xffffffffffffffff;
        if ((longlong)dVar1 < 0) {
          (*param_2)[0] = 0x2d;
          param_2 = (undefined1 (*) [32])(*param_2 + 1);
          (*param_2)[0] = 0;
          if (param_3 != 0xffffffffffffffff) {
            param_3 = param_3 - 1;
          }
        }
        uVar4 = (uVar4 ^ 1) * 2;
        do {
          uVar7 = uVar7 + 1;
        } while ((&PTR_DAT_18001b860)[(ulonglong)uVar4 + lVar3][uVar7] != '\0');
        uVar2 = FUN_18000b510((char *)param_2,param_3,
                              (longlong)
                              (&PTR_DAT_18001b860)[(ulonglong)(uVar4 + (param_3 <= uVar7)) + lVar3])
        ;
        if ((int)uVar2 == 0) {
          return 0;
        }
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      uVar4 = (uint)(param_8 >> 4);
      _Var5 = -(uint)((param_8 & 0x20) != 0) & param_9;
      if (param_6 != 0x41) {
        if (param_6 == 0x45) {
LAB_18000dd85:
          uVar2 = FUN_18000d3bc((ulonglong *)param_1,*param_2,param_3,param_4,param_5,param_7,bVar6,
                                uVar4 & 1 | 2,_Var5,param_10);
          return uVar2;
        }
        if (param_6 == 0x46) {
LAB_18000dd54:
          uVar2 = FUN_18000d6a4((ulonglong *)param_1,param_2,param_3,param_4,param_5,param_7,_Var5,
                                param_10);
          return uVar2;
        }
        if (param_6 != 0x47) {
          if (param_6 == 0x61) goto LAB_18000ddbf;
          if (param_6 == 0x65) goto LAB_18000dd85;
          if (param_6 == 0x66) goto LAB_18000dd54;
        }
        uVar2 = FUN_18000d8cc((ulonglong *)param_1,param_2,param_3,param_4,param_5,param_7,bVar6,
                              uVar4 & 1 | 2,_Var5,param_10);
        return uVar2;
      }
LAB_18000ddbf:
      uVar2 = FUN_18000d028(param_1,(undefined1 (*) [16])param_2,param_3,param_4,param_5,param_7,
                            bVar6,uVar4 & 1 | 2,_Var5,param_10);
      return uVar2;
    }
    *(undefined1 *)(param_10 + 6) = 1;
    *(undefined4 *)((longlong)param_10 + 0x2c) = 0x16;
  }
  FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_10);
  return 0x16;
}


/* Address: 0x18000de20; Evidence: ev_8613443220a5fd51eeafc5e6c07db3b113233ccf179f7bb2738649d7cd3a436f */

undefined4
FUN_18000de20(int *param_1,undefined1 (*param_2) [32],ulonglong param_3,ushort param_4,
             longlong *param_5)

{
  uint uVar1;
  int iVar2;
  DWORD DVar3;
  undefined8 uVar4;
  undefined4 uVar5;
  ulonglong local_res10;
  ushort local_res20 [4];
  
  if ((param_2 == (undefined1 (*) [32])0x0) && (param_3 != 0)) {
    if (param_1 == (int *)0x0) {
      return 0;
    }
    *param_1 = 0;
    return 0;
  }
  if (param_1 != (int *)0x0) {
    *param_1 = -1;
  }
  local_res20[0] = param_4;
  if (param_3 < 0x80000000) {
    if ((char)param_5[5] == '\0') {
      FUN_18000a2a0(param_5);
    }
    uVar1 = *(uint *)(param_5[3] + 0xc);
    if (uVar1 == 0xfde9) {
      local_res10 = 0;
      uVar4 = FUN_180013e94((byte *)param_2,(uint)local_res20[0],&local_res10,(longlong)param_5);
      if (param_1 != (int *)0x0) {
        *param_1 = (int)uVar4;
      }
      if ((int)uVar4 < 5) {
        return 0;
      }
      if ((char)param_5[6] != '\0') {
        return *(undefined4 *)((longlong)param_5 + 0x2c);
      }
      return 0;
    }
    if (*(longlong *)(param_5[3] + 0x138) == 0) {
      if (0xff < local_res20[0]) {
        if ((param_2 != (undefined1 (*) [32])0x0) && (param_3 != 0)) {
          FUN_180017a70(param_2,0,param_3);
        }
        goto LAB_18000df02;
      }
      if (param_2 == (undefined1 (*) [32])0x0) {
LAB_18000df2e:
        if (param_1 != (int *)0x0) {
          *param_1 = 1;
        }
        return 0;
      }
      if (param_3 != 0) {
        (*param_2)[0] = (char)local_res20[0];
        goto LAB_18000df2e;
      }
    }
    else {
      local_res10 = local_res10 & 0xffffffff00000000;
      iVar2 = FUN_180010218(uVar1,0,local_res20,1);
      if (iVar2 != 0) {
        if ((int)local_res10 == 0) {
          if (param_1 == (int *)0x0) {
            return 0;
          }
          *param_1 = iVar2;
          return 0;
        }
LAB_18000df02:
        *(undefined4 *)((longlong)param_5 + 0x2c) = 0x2a;
        *(undefined1 *)(param_5 + 6) = 1;
        return 0x2a;
      }
      DVar3 = GetLastError();
      if (DVar3 != 0x7a) goto LAB_18000df02;
      if ((param_2 != (undefined1 (*) [32])0x0) && (param_3 != 0)) {
        FUN_180017a70(param_2,0,param_3);
      }
    }
    uVar5 = 0x22;
  }
  else {
    uVar5 = 0x16;
  }
  *(undefined4 *)((longlong)param_5 + 0x2c) = uVar5;
  *(undefined1 *)(param_5 + 6) = 1;
  FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_5);
  return uVar5;
}


/* Address: 0x18000dfd0; Evidence: ev_34ca1024a6ee64fc093036cc7f5a076d3d0fa604daafca05a29a494970750f05 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_18000dfd0(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_180028928 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_18000a2a0(param_4);
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
              (iVar3 = FUN_180010188(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_180010188(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_18000e3e4(param_1,param_2,param_3,(uint *)&DAT_180028928,(longlong)param_4);
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


/* Address: 0x18000e148; Evidence: ev_34957f7acaa68628b96913864159630c8ca437ea65f51b4e484787a639901832 */

ulonglong FUN_18000e148(byte *param_1)

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


/* Address: 0x18000e180; Evidence: ev_fb6a6b14f114b7ff3ec9aa82aadcf150fab1e74496a696ab5639923916cc6846 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000e180(ulonglong param_1,byte *param_2,ulonglong param_3,uint *param_4,
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
  
  local_48 = DAT_180027000 ^ (ulonglong)auStack_78;
  puVar5 = (uint *)&DAT_180028930;
  if (param_4 != (uint *)0x0) {
    puVar5 = param_4;
  }
  pbVar6 = &DAT_180023e1f;
  uVar2 = 1;
  if (param_2 != (byte *)0x0) {
    pbVar6 = param_2;
    uVar2 = param_3;
  }
  puVar10 = (uint *)(-(ulonglong)(param_2 != (byte *)0x0) & param_1);
  if (uVar2 == 0) {
LAB_18000e1e2:
    uVar2 = 0xfffffffffffffffe;
  }
  else {
    if (*(short *)((longlong)puVar5 + 6) == 0) {
      uVar3 = FUN_18000e148(pbVar6);
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
LAB_18000e26d:
        uVar9 = (ulonglong)bVar7;
        uVar3 = uVar9;
        if (uVar2 <= uVar9) {
          uVar3 = uVar2;
        }
        while ((ulonglong)((longlong)pbVar6 - (longlong)param_2) < uVar3) {
          bVar1 = *pbVar6;
          pbVar6 = pbVar6 + 1;
          if ((bVar1 & 0xc0) != 0x80) goto LAB_18000e316;
          uVar4 = bVar1 & 0x3f | uVar4 << 6;
        }
        if (uVar3 < uVar9) {
          *(ushort *)(puVar5 + 1) = (ushort)uVar8 & 0xff;
          *(ushort *)((longlong)puVar5 + 6) = (ushort)(byte)(bVar7 - (char)uVar3);
          *puVar5 = uVar4;
          goto LAB_18000e1e2;
        }
        if ((0x7ff < uVar4 - 0xd800) && (uVar4 < 0x110000)) {
          auStack_60[2] = 0x80;
          auStack_60[3] = 0x800;
          auStack_60[4] = 0x10000;
          if (auStack_60[uVar8 & 0xff] <= uVar4) {
            if (puVar10 != (uint *)0x0) {
              *puVar10 = uVar4;
            }
            uVar2 = FUN_180013f38(-(ulonglong)(uVar4 != 0) & uVar9,(undefined8 *)puVar5);
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
      if ((((byte)(bVar1 - 2) < 3) && (bVar7 != 0)) && (bVar7 < bVar1)) goto LAB_18000e26d;
    }
LAB_18000e316:
    uVar2 = FUN_180013f40((undefined8 *)puVar5,param_5);
  }
  return uVar2;
}


/* Address: 0x18000e340; Evidence: ev_66487da6585876d3f0c2a9fa952bbbba47f96a1c423515995bc54d9f6efae405 */

undefined8 FUN_18000e340(byte *param_1,uint param_2,int *param_3,longlong param_4)

{
  ushort uVar1;
  undefined8 uVar2;
  int *piVar3;
  undefined8 local_res18 [2];
  
  piVar3 = &DAT_180028938;
  if (param_3 != (int *)0x0) {
    piVar3 = param_3;
  }
  uVar1 = (short)param_2 + 0x2400;
  if (*piVar3 == 0) {
    if (0x3ff < uVar1) {
      if ((ushort)((short)param_2 + 0x2800U) < 0x400) {
        *piVar3 = (param_2 & 0x27ff) * 0x400 + 0x10000;
        return 0;
      }
      uVar2 = FUN_180013e94(param_1,param_2 & 0xffff,(undefined8 *)piVar3,param_4);
      return uVar2;
    }
  }
  else if (uVar1 < 0x400) {
    local_res18[0] = 0;
    uVar2 = FUN_180013e94(param_1,(param_2 & 0x23ff) + *piVar3,local_res18,param_4);
    uVar2 = FUN_180013f38(uVar2,(undefined8 *)piVar3);
    return uVar2;
  }
  uVar2 = FUN_180013f40((undefined8 *)piVar3,param_4);
  return uVar2;
}


/* Address: 0x18000e3e4; Evidence: ev_2a8c99a5acd379d486e5f9c2ddbe8c3df3f165401d962cda61a9d132d6e0da74 */

void FUN_18000e3e4(undefined2 *param_1,byte *param_2,ulonglong param_3,uint *param_4,
                  longlong param_5)

{
  ulonglong uVar1;
  uint local_18 [4];
  
  local_18[0] = 0;
  uVar1 = FUN_18000e180((ulonglong)local_18,param_2,param_3,param_4,param_5);
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


/* Address: 0x18000e42c; Evidence: ev_796a26eaa5e9f55688394db37fa22c2e5573a1cf5eaff1522be3ceec12ce6d3d */

byte * FUN_18000e42c(ushort *param_1,undefined8 *param_2,ulonglong param_3,uint *param_4,
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
      uVar5 = FUN_18000e180(0,pbVar4,uVar5,param_4,param_5);
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
      uVar5 = FUN_18000e180((ulonglong)local_res8,pbVar4,uVar5,param_4,param_5);
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


/* Address: 0x18000e5e4; Evidence: ev_e5628abbd36c12f76c14883b5f97f38d589dea83da37bb15ae2f8b0e90005e6e */

/* Library Function - Single Match
    _fileno
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl _fileno(FILE *_File)

{
  int iVar1;
  __acrt_ptd *p_Var2;
  
  if (_File == (FILE *)0x0) {
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000821c();
    iVar1 = -1;
  }
  else {
    iVar1 = _File->_flag;
  }
  return iVar1;
}


/* Address: 0x18000e60c; Evidence: ev_19127e2016028ba216669dcb4b24404f07a2c500aa6719c1ce803055384d1132 */

bool FUN_18000e60c(void)

{
  return DAT_180028940 == (DAT_180027000 | 1);
}


/* Address: 0x18000e624; Evidence: ev_23dd34c98d108068d6f010b6f7ddf337d2e8db98bd72fbba29e03c96be1fb8f3 */

ulonglong FUN_18000e624(byte param_1,FILE *param_2,longlong param_3)

{
  char **ppcVar1;
  uint *puVar2;
  bool bVar3;
  undefined8 uVar4;
  
  ppcVar1 = &param_2->_base;
  *(int *)ppcVar1 = *(int *)ppcVar1 + -1;
  if (-1 < *(int *)ppcVar1) {
    *param_2->_ptr = param_1;
    param_2->_ptr = param_2->_ptr + 1;
    return (ulonglong)param_1;
  }
  _fileno(param_2);
  if (((ulonglong)param_2->_base & 0x600000000) == 0) {
    *(undefined4 *)(param_3 + 0x2c) = 9;
  }
  else {
    if ((*(uint *)((longlong)&param_2->_base + 4) >> 0xc & 1) == 0) {
      if (((ulonglong)param_2->_base & 0x100000000) != 0) {
        bVar3 = FUN_18001404c((longlong *)param_2);
        *(undefined4 *)&param_2->_base = 0;
        if (!bVar3) goto LAB_180014106;
        param_2->_ptr = *(char **)&param_2->_cnt;
        LOCK();
        puVar2 = (uint *)((longlong)&param_2->_base + 4);
        *puVar2 = *puVar2 & 0xfffffffe;
        UNLOCK();
      }
      LOCK();
      puVar2 = (uint *)((longlong)&param_2->_base + 4);
      *puVar2 = *puVar2 | 2;
      UNLOCK();
      LOCK();
      puVar2 = (uint *)((longlong)&param_2->_base + 4);
      *puVar2 = *puVar2 & 0xfffffff7;
      UNLOCK();
      *(undefined4 *)&param_2->_base = 0;
      if ((((ulonglong)param_2->_base & 0x4c000000000) == 0) &&
         (uVar4 = FUN_18000e63c(param_2), (char)uVar4 == '\0')) {
        __acrt_stdio_allocate_buffer_nolock(&param_2->_ptr);
      }
      bVar3 = FUN_180013f54(param_1,param_2,(longlong *)param_3);
      if (bVar3) {
        return (ulonglong)param_1;
      }
      goto LAB_180014106;
    }
    *(undefined4 *)(param_3 + 0x2c) = 0x22;
  }
  *(undefined1 *)(param_3 + 0x30) = 1;
LAB_180014106:
  LOCK();
  puVar2 = (uint *)((longlong)&param_2->_base + 4);
  *puVar2 = *puVar2 | 0x10;
  UNLOCK();
  return 0xffffffff;
}


/* Address: 0x18000e63c; Evidence: ev_7c6ec4fb7df07220ce5bb57e3f6e09057b845f39320b9f8102f9bbdc1b4939b3 */

ulonglong FUN_18000e63c(FILE *param_1)

{
  byte bVar1;
  uint uVar2;
  FILE *pFVar3;
  undefined7 extraout_var;
  ulonglong uVar4;
  
  pFVar3 = (FILE *)FUN_1800083b0(2);
  if (param_1 == pFVar3) {
    uVar4 = CONCAT71((int7)((ulonglong)pFVar3 >> 8),1);
  }
  else {
    pFVar3 = (FILE *)FUN_1800083b0(1);
    if (param_1 == pFVar3) {
      uVar2 = _fileno(param_1);
      bVar1 = FUN_1800141a0(uVar2);
      uVar4 = CONCAT71(extraout_var,(int)CONCAT71(extraout_var,bVar1) != 0);
    }
    else {
      uVar4 = (ulonglong)pFVar3 & 0xffffffffffffff00;
    }
  }
  return uVar4;
}


/* Address: 0x18000e688; Evidence: ev_a5716a44c1715274811e7df746d1fb3405063d3984f84274f767b313346c1872 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000e688(FILE *param_1)

{
  uint *puVar1;
  uint uVar2;
  FILE *pFVar3;
  LPVOID pvVar4;
  longlong *plVar5;
  
  pFVar3 = (FILE *)FUN_18000e63c(param_1);
  if ((char)pFVar3 != '\0') {
    pFVar3 = (FILE *)FUN_1800083b0(1);
    if (param_1 == pFVar3) {
      plVar5 = &DAT_180028948;
    }
    else {
      pFVar3 = (FILE *)FUN_1800083b0(2);
      if (param_1 != pFVar3) goto LAB_18000e742;
      plVar5 = &DAT_180028950;
    }
    _DAT_1800282c0 = _DAT_1800282c0 + 1;
    uVar2 = *(uint *)((longlong)&param_1->_base + 4);
    pFVar3 = (FILE *)(ulonglong)uVar2;
    if ((uVar2 & 0x4c0) == 0) {
      LOCK();
      puVar1 = (uint *)((longlong)&param_1->_base + 4);
      *puVar1 = *puVar1 | 0x282;
      UNLOCK();
      if (*plVar5 == 0) {
        pvVar4 = _malloc_base(0x1000);
        *plVar5 = (longlong)pvVar4;
        pFVar3 = (FILE *)FUN_18000bff0((LPVOID)0x0);
      }
      if (*plVar5 == 0) {
        *(undefined4 *)&param_1->_base = 2;
        *(int **)&param_1->_cnt = &param_1->_file;
        param_1->_ptr = (char *)&param_1->_file;
        param_1->_charbuf = 2;
      }
      else {
        *(longlong *)&param_1->_cnt = *plVar5;
        pFVar3 = (FILE *)*plVar5;
        param_1->_ptr = (char *)pFVar3;
        *(undefined4 *)&param_1->_base = 0x1000;
        param_1->_charbuf = 0x1000;
      }
      return CONCAT71((int7)((ulonglong)pFVar3 >> 8),1);
    }
  }
LAB_18000e742:
  return (ulonglong)pFVar3 & 0xffffffffffffff00;
}


/* Address: 0x18000e750; Evidence: ev_f7ab69ea56811d41d7c55201f3d0082808341c2d352e923542b16402cd355790 */

void FUN_18000e750(char param_1,FILE *param_2,longlong *param_3)

{
  uint *puVar1;
  
  if ((param_1 != '\0') && ((*(uint *)((longlong)&param_2->_base + 4) >> 9 & 1) != 0)) {
    FUN_18000c788(param_2,param_3);
    LOCK();
    puVar1 = (uint *)((longlong)&param_2->_base + 4);
    *puVar1 = *puVar1 & 0xfffffd7f;
    UNLOCK();
    param_2->_charbuf = 0;
    *(undefined8 *)&param_2->_cnt = 0;
    param_2->_ptr = (char *)0x0;
  }
  return;
}


/* Address: 0x18000e790; Evidence: ev_b1e7791a9d65796ee2b33f994bb83ab27cbf763f68ec484eb38a384d41adf7d5 */

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
    BVar1 = InitializeCriticalSectionEx((LPCRITICAL_SECTION)(&DAT_180028960 + uVar2 * 0x28),4000,0);
    if (BVar1 == 0) {
      uVar2 = __acrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_180028bb8 = DAT_180028bb8 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 < 0xf);
  return CONCAT71((int7)(CONCAT44(extraout_var,BVar1) >> 8),1);
}


/* Address: 0x18000e7d8; Evidence: ev_acde5694afd18bb647c6abf971387105a47d983911ea45e19912a7120d6ea025 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000e7ea. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_180028960 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x18000e800; Evidence: ev_e72aa93a5f580b5387ffc5fd65eb9a9f8f30816c4ff91f935357b2b3d1344672 */

/* Library Function - Single Match
    __acrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_180028bb8;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_180028960 + uVar1 * 0x28));
    DAT_180028bb8 = DAT_180028bb8 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x18000e838; Evidence: ev_547dfcf208aaf0acc7ce10298abed5c3a0046ff6414ac4c1ea06555e192a437b */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000e84a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_180028960 + (longlong)param_1 * 0x28);
  return;
}


/* Address: 0x18000e854; Evidence: ev_362143e4849d93afbac07c7f58b23cbe725324bfcc83cdf6d58b524377d5d735 */

uint FUN_18000e854(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}


/* Address: 0x18000e870; Evidence: ev_1c33242cefb4ea8c297c07c134f93f2a9481f4bc1d7627278f8ee6d12534c91f */

uint FUN_18000e870(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}


/* Address: 0x18000e888; Evidence: ev_19c672ae4c1372ac2c1cc45041054a085e44279495c90e23146751dfbe0d91a9 */

bool FUN_18000e888(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_18000e870();
  if ((char)uVar1 == '\0') {
    FUN_18000c1fc(local_res8);
  }
  return local_res8[0] != 1;
}


/* Address: 0x18000e8c0; Evidence: ev_b14d1d33b6d2a7fd29bb621f34f43a305ac6ddfd04c65cd02eb765485d9bc12d */

ulonglong FUN_18000e8c0(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}


/* Address: 0x18000e8d4; Evidence: ev_ee9b0a2493459f15db4c964d985c0221aade020ac0e2f13739b17aa8059f990e */

uint FUN_18000e8d4(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_18000bff0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_180010188(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_18000bff0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_180010188(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000b704(DVar2);
      p_Var4 = FUN_18000b774();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_18000bff0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x18000ea74; Evidence: ev_4a33b41b3160bf252e903fe960d9229dbaec2c8cabbf684ec5d2e226d541a6b5 */

uint FUN_18000ea74(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_18000bff0(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != 0) {
      iVar1 = FUN_180010218(param_4,0,param_1,0xffffffff);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_18000bff0(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_180010218(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000b704(DVar2);
      p_Var4 = FUN_18000b774();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_18000bff0(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x18000ec20; Evidence: ev_1f15868c3a9196712b15c6923c80e2e43663ee170fc9e286bd1333e56a0ef785 */

ulonglong FUN_18000ec20(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000821c();
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
      pbVar4 = FUN_180014770(pbVar4,(byte *)&local_res10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000ee5c((longlong)*param_1,0,0,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_18000bff0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000ed6f;
        }
      }
      else {
        uVar10 = FUN_18000efe0((uchar *)*param_1,pbVar4,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_18000bff0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000ed6f;
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
      FUN_18000bff0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000bff0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000ed6f:
      FUN_18000bff0(plVar8);
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
          iVar1 = FUN_1800145a0(pcVar9,(longlong)(local_res20 + (local_res18 - (longlong)pcVar9)),
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
      FUN_18000bff0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000bff0((LPVOID)*plVar11);
      }
      FUN_18000bff0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000ee5c; Evidence: ev_e9bfd030ebd5ade700ef9ead2211d1a34478fb4fa280caa2bba3be9fda45b61e */

undefined8 FUN_18000ee5c(longlong param_1,longlong param_2,ulonglong param_3,longlong *param_4)

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
  if (((param_3 != 0) && (iVar1 = FUN_1800145a0(pcVar2,uVar8,param_2,param_3), iVar1 != 0)) ||
     (iVar1 = FUN_1800145a0(pcVar2 + param_3,uVar8 - param_3,param_1,uVar6), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  if (param_4[1] == param_4[2]) {
    if (*param_4 == 0) {
      pvVar3 = _calloc_base(4,8);
      *param_4 = (longlong)pvVar3;
      FUN_18000bff0((LPVOID)0x0);
      lVar4 = *param_4;
      if (lVar4 != 0) {
        param_4[1] = lVar4;
        param_4[2] = lVar4 + 0x20;
        goto LAB_18000efb2;
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
          FUN_18000bff0((LPVOID)0x0);
          goto LAB_18000efb2;
        }
        FUN_18000bff0((LPVOID)0x0);
      }
    }
    uVar7 = 0xc;
    FUN_18000bff0(pcVar2);
  }
  else {
LAB_18000efb2:
    *(char **)param_4[1] = pcVar2;
    param_4[1] = param_4[1] + 8;
  }
  FUN_18000bff0((LPVOID)0x0);
  return uVar7;
}


/* Address: 0x18000efe0; Evidence: ev_e4b1938ef5c46fda11ca11ac2c07165431d9c12261602630c84e2a67793d29a6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000efe0(uchar *param_1,uchar *param_2,longlong *param_3)

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
  
  local_48 = DAT_180027000 ^ (ulonglong)auStackY_378;
  while ((param_2 != param_1 &&
         ((0x2d < (byte)(*param_2 - 0x2f) ||
          ((0x200000000801U >> ((longlong)(char)(*param_2 - 0x2f) & 0x3fU) & 1) == 0))))) {
    param_2 = (uchar *)FUN_180014b28(param_1,param_2);
  }
  if ((*param_2 == ':') && (param_2 != param_1 + 1)) {
    uVar5 = FUN_18000ee5c((longlong)param_1,0,0,param_3);
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
    FUN_180017a70((undefined1 (*) [32])&local_298,0,0x250);
    local_338 = 0;
    local_330 = 0;
    local_328 = (LPCWSTR)0x0;
    local_320 = 0;
    local_318 = 0;
    local_310 = '\0';
    FUN_180007bb0(&local_308,(longlong *)0x0);
    if (*(int *)(local_300 + 0xc) == 0xfde9) {
      if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
      uVar3 = 0xfde9;
    }
    else {
      IVar6 = FUN_18000c258();
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
    uVar3 = FUN_18000e8d4((char *)param_1,(longlong)&local_338,local_348,uVar3);
    lpFileName = local_328;
    if (uVar3 != 0) {
      lpFileName = (LPCWSTR)0x0;
    }
    hFindFile = FindFirstFileExW(lpFileName,FindExInfoStandard,&local_298,FindExSearchNameMatch,
                                 (LPVOID)0x0,0);
    if (hFindFile == (HANDLE)0xffffffffffffffff) {
      uVar5 = FUN_18000ee5c((longlong)param_1,0,0,param_3);
      uVar5 = uVar5 & 0xffffffff;
      if (local_310 != '\0') {
        FUN_18000bff0(local_328);
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
        FUN_180007bb0(&local_2e8,(longlong *)0x0);
        uVar3 = 0xfde9;
        if (*(int *)(local_2e0 + 0xc) == 0xfde9) {
          if (local_2d0 != '\0') {
            *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
          }
        }
        else {
          IVar6 = FUN_18000c258();
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
        uVar3 = FUN_18000ea74(local_298.cFileName,(longlong)&local_2c8,local_348,uVar3);
        pcVar2 = local_2b8;
        pcVar8 = local_2b8;
        if (uVar3 != 0) {
          pcVar8 = (char *)0x0;
        }
        if ((*pcVar8 == '.') && ((pcVar8[1] == '\0' || ((pcVar8[1] == '.' && (pcVar8[2] == '\0')))))
           ) {
          if (local_2a0 != '\0') {
            FUN_18000bff0(local_2b8);
          }
        }
        else {
          uVar7 = FUN_18000ee5c((longlong)pcVar8,(longlong)param_1,uVar5,param_3);
          if ((int)uVar7 != 0) {
            if (local_2a0 != '\0') {
              FUN_18000bff0(pcVar2);
            }
            FindClose(hFindFile);
            if (local_310 == '\0') {
              return uVar7 & 0xffffffff;
            }
            FUN_18000bff0(local_328);
            return uVar7 & 0xffffffff;
          }
          uVar5 = local_340;
          if (local_2a0 != (char)uVar7) {
            FUN_18000bff0(pcVar2);
            uVar5 = local_340;
          }
        }
        BVar4 = FindNextFileW(hFindFile,&local_298);
      } while (BVar4 != 0);
      lVar9 = param_3[1] - *param_3 >> 3;
      if (lVar10 != lVar9) {
        FUN_180014200((undefined1 *)(*param_3 + lVar10 * 8),lVar9 - lVar10,8,FUN_18000e8c0);
      }
      FindClose(hFindFile);
      if (local_310 != '\0') {
        FUN_18000bff0(local_328);
      }
      uVar5 = 0;
    }
  }
  return uVar5;
}


/* Address: 0x18000f340; Evidence: ev_64f134aa8498ac15ebb5a5a74e96725376ec57532be7c82c6f49d3ec6d8be5a1 */

ulonglong thunk_FUN_18000ec20(undefined8 *param_1,undefined8 *param_2)

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
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000821c();
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
      pbVar4 = FUN_180014770(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000ee5c((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000bff0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000ed6f;
        }
      }
      else {
        uVar10 = FUN_18000efe0((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_18000bff0((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000ed6f;
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
      FUN_18000bff0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000bff0((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000ed6f:
      FUN_18000bff0(plVar8);
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
          iVar1 = FUN_1800145a0(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
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
      FUN_18000bff0((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_18000bff0((LPVOID)*plVar11);
      }
      FUN_18000bff0(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000f348; Evidence: ev_b9d274ebfc2d5109404c6834ea8b1ed76380b23bae1bf4c68863db3a7b486bc4 */

undefined4 FUN_18000f348(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      iVar1 = FUN_180010218(param_4,0,param_1,0xffffffff);
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < (ulonglong)(longlong)iVar1) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          goto LAB_18000f39c;
        }
        iVar1 = FUN_180010218(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_18000b704(DVar2);
      p_Var3 = FUN_18000b774();
      return *(undefined4 *)p_Var3;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
LAB_18000f39c:
      p_Var3 = FUN_18000b774();
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


/* Address: 0x18000f464; Evidence: ev_adc3400ee5d32b10dffd9bafb8a1c5844af65a0df81a477e771f27057fe5b9ff */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000f464(HMODULE param_1,undefined8 param_2,ulonglong param_3)

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
  
  local_18 = DAT_180027000 ^ (ulonglong)auStack_2a8;
  DVar1 = GetModuleFileNameW(param_1,local_228,0x105);
  if (DVar1 == 0) {
    DVar1 = GetLastError();
    FUN_18000b704(DVar1);
    local_240 = 0;
  }
  else {
    local_240 = 0;
    local_238 = 0;
    local_260 = param_2;
    local_258 = param_3 & 0xffffffff;
    local_250 = param_2;
    local_248 = param_3 & 0xffffffff;
    FUN_180007bb0(&local_280,(longlong *)0x0);
    uVar3 = 0xfde9;
    if (*(int *)(local_278 + 0xc) == 0xfde9) {
      if (local_268 != '\0') {
        *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
      }
    }
    else {
      IVar2 = FUN_18000c258();
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
    FUN_18000f348(local_228,(longlong)&local_260,local_288,uVar3);
    local_240 = local_240 & 0xffffffff;
  }
  return local_240;
}


/* Address: 0x18000f588; Evidence: ev_1248c8609d75fbe908d2b5e9e12da7ff7d28c43ab7100779eeff696ad733b75c */

void FUN_18000f588(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  if (DAT_180028bc0 == (undefined1 (*) [32])0x0) {
LAB_18000f63b:
    p_Var5 = FUN_18000b774();
    *(undefined4 *)p_Var5 = 0x16;
    FUN_18000821c();
  }
  else {
    if (puVar4 == (undefined8 *)0x0) {
      FUN_180017a70(DAT_180028bc0,0,0x101);
      goto LAB_18000f63b;
    }
    lVar8 = 2;
    pauVar7 = DAT_180028bc0;
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
  if (DAT_180028bc8 != (undefined1 (*) [32])0x0) {
    pauVar7 = DAT_180028bc8;
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
      goto LAB_18000f6ec;
    }
    FUN_180017a70(DAT_180028bc8,0,0x100);
  }
  p_Var5 = FUN_18000b774();
  *(undefined4 *)p_Var5 = 0x16;
  FUN_18000821c();
LAB_18000f6ec:
  piVar2 = (int *)**(undefined8 **)param_3[1];
  LOCK();
  iVar1 = *piVar2;
  *piVar2 = *piVar2 + -1;
  UNLOCK();
  if ((iVar1 == 1) && ((undefined *)**(undefined8 **)param_3[1] != &DAT_180027370)) {
    FUN_18000bff0((LPVOID)**(undefined8 **)param_3[1]);
  }
  **(undefined8 **)param_3[1] = *(undefined8 *)(*(longlong *)*param_3 + 0x88);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000f758; Evidence: ev_e049249b490835ab2ccb8b8e1dd393546b7d7319c7c7e8ae7bc8b57d071572ca */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_180007bb0(&local_28,(longlong *)0x0);
  DAT_180028bd8 = 0;
  if (param_1 == -2) {
    DAT_180028bd8 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_180028bd8 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_180028bd8 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}


/* Address: 0x18000f7d8; Evidence: ev_eb999527ef8299b4611fed9c6e09b43a0be12079438fe4425a0fa3018ccea42f */

void FUN_18000f7d8(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined2 *puVar3;
  longlong lVar4;
  
  FUN_180017a70((undefined1 (*) [32])(param_1 + 0x18),0,0x101);
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
    *(undefined1 *)(param_1 + lVar4 + 0x18) = (&DAT_180027388)[lVar4];
    lVar4 = lVar1;
  } while (lVar1 < 0x101);
  do {
    lVar1 = lVar2 + 1;
    *(undefined1 *)(param_1 + lVar2 + 0x119) = (&DAT_180027489)[lVar2];
    lVar2 = lVar1;
  } while (lVar1 < 0x100);
  return;
}


/* Address: 0x18000f870; Evidence: ev_4e3a1d9b15492f3d53ec5413b00253f18af304ccfacdc217d53c6ba1f12e07f8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000f870(longlong param_1)

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
  
  local_18 = DAT_180027000 ^ (ulonglong)auStackY_788;
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
    FUN_180011000((longlong *)0x0,1,local_718,0x100,local_418,*(uint *)(param_1 + 4),0);
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


/* Address: 0x18000fa68; Evidence: ev_ad5e358bbe3ce7ab1891104ed4dd340534470055e3e7328f5ed37dee2242a098 */

ulonglong FUN_18000fa68(int param_1,char param_2,__acrt_ptd *param_3,__crt_multibyte_data **param_4)

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
      FUN_18000bff0((LPVOID)0x0);
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
      uVar12 = FUN_18000fe0c(iVar8,(longlong)puVar9);
      uVar10 = uVar12 & 0xffffffff;
      if ((int)uVar12 == -1) {
        p_Var13 = FUN_18000b774();
        *(undefined4 *)p_Var13 = 0x16;
        FUN_18000bff0(puVar9);
        uVar10 = 0xffffffff;
      }
      else {
        if (param_2 == '\0') {
          FUN_18000bf2c();
        }
        piVar2 = *(int **)(local_res18 + 0x88);
        LOCK();
        iVar8 = *piVar2;
        *piVar2 = *piVar2 + -1;
        UNLOCK();
        if ((iVar8 == 1) && (*(undefined **)(local_res18 + 0x88) != &DAT_180027370)) {
          FUN_18000bff0(*(undefined **)(local_res18 + 0x88));
        }
        *(undefined4 *)puVar9 = 1;
        *(undefined8 **)(local_res18 + 0x88) = puVar9;
        if ((DAT_1800278b8 & *(uint *)(local_res18 + 0x3a8)) == 0) {
          local_258 = &local_res18;
          local_250 = &local_res20;
          local_264[0] = 5;
          local_264[1] = 5;
          FUN_18000f588(local_268,local_264 + 1,&local_258,local_264);
          if (param_2 != '\0') {
            PTR_DAT_180027310 = *local_res20;
          }
        }
        FUN_18000bff0((LPVOID)0x0);
      }
    }
  }
  return uVar10;
}


/* Address: 0x18000fcd8; Evidence: ev_b259f79fe5e0a78829fb7d00a0f2ff3fe6655ece83076bc6a5a807e4094de96f */

/* Library Function - Single Match
    struct __crt_multibyte_data * __ptr64 __cdecl update_thread_multibyte_data_internal(struct
   __acrt_ptd * __ptr64 const,struct __crt_multibyte_data * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

__crt_multibyte_data * __cdecl
update_thread_multibyte_data_internal(__acrt_ptd *param_1,__crt_multibyte_data **param_2)

{
  int iVar1;
  __crt_multibyte_data *p_Var2;
  
  if (((*(uint *)(param_1 + 0x3a8) & DAT_1800278b8) == 0) || (*(longlong *)(param_1 + 0x90) == 0)) {
    __acrt_lock(5);
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
    if (p_Var2 != *param_2) {
      if (p_Var2 != (__crt_multibyte_data *)0x0) {
        LOCK();
        iVar1 = *(int *)p_Var2;
        *(int *)p_Var2 = *(int *)p_Var2 + -1;
        UNLOCK();
        if ((iVar1 == 1) && (p_Var2 != (__crt_multibyte_data *)&DAT_180027370)) {
          FUN_18000bff0(p_Var2);
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


/* Address: 0x18000fd90; Evidence: ev_978a606f3f744e49037cca3804940ba81d6d0645c3696089e41b430b6c526329 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_180028bdc == '\0') {
    DAT_180028bc8 = &DAT_1800276b0;
    DAT_180028bd0 = &DAT_180027370;
    DAT_180028bc0 = &DAT_1800275a0;
    p_Var1 = (__acrt_ptd *)FUN_18000bc34();
    in_RAX = FUN_18000fa68(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_180028bd0);
    DAT_180028bdc = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x18000fdf0; Evidence: ev_ef4c17a6ed8a18e9e44caa8c88c31e6730e72b54acca72b444763d225567f1db */

void FUN_18000fdf0(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = (__acrt_ptd *)FUN_18000bc18();
  update_thread_multibyte_data_internal(p_Var1,(__crt_multibyte_data **)&DAT_180028bd0);
  return;
}


/* Address: 0x18000fe0c; Evidence: ev_fca3fe5119c6fbc953fb3c684490716b8d2c6e7a1ad9b64336ad591f54627ee1 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_18000fe0c(int param_1,longlong param_2)

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
  
  local_30 = DAT_180027000 ^ (ulonglong)auStack_68;
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
LAB_1800100a4:
    FUN_18000f7d8(param_2);
    return 0;
  }
  puVar6 = &DAT_1800277c0;
  uVar14 = 1;
  pwVar17 = pwVar8;
  do {
    if (*puVar6 == uVar4) {
      FUN_180017a70((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
      pbVar18 = &DAT_1800277b0;
      lVar9 = 4;
      pbVar7 = &DAT_1800277d0 + (longlong)pwVar17 * 0x30;
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
                    (((longlong)pwVar17 * 0x30 - param_2) + 0x1800277b8 + (longlong)puVar13);
        puVar13 = puVar13 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      goto LAB_18001009a;
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
      if (DAT_180028bd8 == 0) {
        return 0xffffffff;
      }
      goto LAB_1800100a4;
    }
    FUN_180017a70((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
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
LAB_18001009a:
  FUN_18000f870(param_2);
  return 0;
}


/* Address: 0x1800100d4; Evidence: ev_98499ef2a79dcd010a8092248f3732dc60dcf0b30b944c356ce3e0b787e8f491 */

undefined8 FUN_1800100d4(longlong *param_1,uint param_2,uint param_3,byte param_4)

{
  undefined8 uVar1;
  longlong local_28;
  longlong *local_20;
  longlong local_18;
  char local_10;
  
  FUN_180007bb0(&local_28,param_1);
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


/* Address: 0x180010148; Evidence: ev_f18b22e4c07fc793ada8e7304594e76c7cb98c89ec17baede4c09152ef2d67ca */

void FUN_180010148(uint param_1)

{
  FUN_1800100d4((longlong *)0x0,param_1,0,4);
  return;
}


/* Address: 0x180010160; Evidence: ev_93514d2368dd58e440ca4d1ad942df88434507547c058ebe4665d23665fd9493 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined1 FUN_180010160(void)

{
  DAT_180028c00 = GetCommandLineA();
  _DAT_180028c08 = GetCommandLineW();
  return 1;
}


/* Address: 0x180010188; Evidence: ev_0a948f315ab878fda854ba22969add96a4323be1bb4a99827d3ec7b007972a7a */

void FUN_180010188(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_1800101d5:
          if (!bVar1) goto LAB_1800101d9;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_180010213;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_1800101d5;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_1800101d9;
LAB_180010213:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_1800101d9;
  }
  param_2 = 0;
LAB_1800101d9:
                    /* WARNING: Could not recover jumptable at 0x0001800101d9. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}


/* Address: 0x180010218; Evidence: ev_e3ead3d117b57c0072c32a26323834522ab5c9a6b7755ff1062738f1768d851a */

void FUN_180010218(uint param_1,uint param_2,undefined8 param_3,undefined4 param_4)

{
  int iVar1;
  uint uVar2;
  bool bVar3;
  undefined4 *in_stack_00000040;
  
  uVar2 = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_1800102b8;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_1800102b8;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_1800102a9;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_1800102b8;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_1800102b8;
    iVar1 = param_1 - 65000;
LAB_1800102a9:
    if (iVar1 == 0) goto LAB_1800102b8;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    uVar2 = param_2 & 0xffffff7f;
  }
LAB_1800102b8:
  if ((param_1 - 65000 < 2) && (in_stack_00000040 != (undefined4 *)0x0)) {
    *in_stack_00000040 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800102ef. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,uVar2,param_3,param_4);
  return;
}


/* Address: 0x1800102f8; Evidence: ev_006063ff3c7c884747f3f41b7c55e671270c97a88acebb24dff3c007016fe1a1 */

LPVOID FUN_1800102f8(void)

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
    iVar2 = FUN_180010218(0,0,pWVar3,uVar7);
    if (iVar2 != 0) {
      pvVar6 = _malloc_base((longlong)iVar2);
      if (pvVar6 != (LPVOID)0x0) {
        iVar2 = FUN_180010218(0,0,pWVar3,uVar7);
        if (iVar2 == 0) {
          FUN_18000bff0(pvVar6);
          pvVar6 = (LPVOID)0x0;
        }
        else {
          FUN_18000bff0((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pvVar6;
      }
      FUN_18000bff0((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPVOID)0x0;
}


/* Address: 0x180010410; Evidence: ev_a1cc60a94bc6dbf5aba4d73176bde0c420604baeafc9bd0bd9a22022e501803d */

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
      FUN_180017a70((undefined1 (*) [32])((longlong)pvVar3 + uVar2),0,uVar4 - uVar2);
    }
  }
  else {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0xc;
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x1800104d0; Evidence: ev_583416cf3eeb2869ea169b19ab61b0b38f9f86b065952ef78b2613306921a1bf */

bool FUN_1800104d0(void)

{
  DAT_180028c10 = GetProcessHeap();
  return DAT_180028c10 != (HANDLE)0x0;
}


/* Address: 0x180010500; Evidence: ev_6b4f92118013bb46ef35fd396813bfd7b98f4ca4a15ae03ed92b38e30e98d577 */

undefined1 FUN_180010500(void)

{
  DAT_180028c10 = 0;
  return 1;
}


/* Address: 0x180010528; Evidence: ev_bd98ea8fe4ed4691f1454847b54e3ddad46e5cafb2ceb53a8ae86608e446ec44 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180010528(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x1800105a8; Evidence: ev_a4f3212e207182e4ade7113d416dc1c726e3794b9b2db508a2a425ec0e0801a7 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800105a8(longlong param_1,longlong param_2)

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


/* Address: 0x1800105e4; Evidence: ev_e6256cdecf22b0ca89ebad60f4f9f8d9df5ad36308a76cb3842cb927318b95d0 */

ulonglong FUN_1800105e4(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180027000 & 0x3f;
  uVar2 = DAT_180028c28 ^ DAT_180027000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x18001062c; Evidence: ev_6d0f04a05aa9be94e17b8151ecda08274bfab8cb2bfa3c56d0c3d73e98633991 */

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
  FUN_1800105e4(local_res8,local_res18,local_res8,local_res10);
  return;
}


/* Address: 0x18001065c; Evidence: ev_ae6746d88362dc54e443d8088511f7d0b668380c165d70b65d02121863b89523 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_18001065c(undefined8 param_1)

{
  _DAT_180028c18 = param_1;
  _DAT_180028c20 = param_1;
  DAT_180028c28 = param_1;
  _DAT_180028c30 = param_1;
  return;
}


/* Address: 0x18001067c; Evidence: ev_86acdd7201d59569d16c86f37e0b54b5f9ddc3798af829bfad9c4989cff33698 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18001067c(uint param_1)

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
LAB_1800106d3:
    if (param_1 == 2) {
      puVar8 = (ulonglong *)&DAT_180028c18;
    }
    else if (param_1 == 6) {
LAB_180010775:
      puVar8 = &DAT_180028c28;
      p_Var9 = p_Var10;
    }
    else if (param_1 == 0xf) {
      puVar8 = (ulonglong *)&DAT_180028c30;
    }
    else if (param_1 == 0x15) {
      puVar8 = (ulonglong *)&DAT_180028c20;
      p_Var9 = p_Var10;
    }
    else {
      if (param_1 == 0x16) goto LAB_180010775;
      puVar8 = (ulonglong *)0x0;
      p_Var9 = p_Var10;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_180010703;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_180010755;
      }
      goto LAB_1800106d3;
    }
LAB_180010703:
    p_Var9 = FUN_18000bc78();
    if (p_Var9 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar4 = *(longlong *)p_Var9;
    lVar2 = lVar4 + 0xc0;
    for (; lVar4 != lVar2; lVar4 = lVar4 + 0x10) {
      if (*(uint *)(lVar4 + 4) == param_1) goto LAB_180010750;
    }
    lVar4 = 0;
LAB_180010750:
    if (lVar4 == 0) {
LAB_180010755:
      p_Var9 = FUN_18000b774();
      *(undefined4 *)p_Var9 = 0x16;
      FUN_18000821c();
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
    bVar6 = (byte)DAT_180027000 & 0x3f;
    pcVar7 = (code *)(((ulonglong)pcVar7 ^ DAT_180027000) >> bVar6 |
                     ((ulonglong)pcVar7 ^ DAT_180027000) << 0x40 - bVar6);
  }
  if (pcVar7 == (code *)0x1) goto LAB_18001085e;
  if (pcVar7 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_18000ab44(3);
    pcVar7 = (code *)swi(3);
    uVar5 = (*pcVar7)();
    return uVar5;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar4 = *(longlong *)(p_Var9 + 8);
    *(longlong *)(p_Var9 + 8) = 0;
    if (param_1 == 8) {
      lVar2 = FUN_18000bc18();
      local_res10 = *(undefined4 *)(lVar2 + 0x10);
      lVar2 = FUN_18000bc18();
      *(undefined4 *)(lVar2 + 0x10) = 0x8c;
      goto LAB_180010816;
    }
  }
  else {
LAB_180010816:
    if (param_1 == 8) {
      lVar2 = *(longlong *)p_Var9;
      for (lVar3 = lVar2 + 0x30; lVar3 != lVar2 + 0xc0; lVar3 = lVar3 + 0x10) {
        *(undefined8 *)(lVar3 + 8) = 0;
      }
      goto LAB_18001085e;
    }
  }
  *puVar8 = DAT_180027000;
LAB_18001085e:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar7 != (code *)0x1) {
    if (param_1 == 8) {
      lVar2 = FUN_18000bc18();
      (*pcVar7)(8,*(undefined4 *)(lVar2 + 0x10));
    }
    else {
      (*pcVar7)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var9 + 8) = lVar4, param_1 == 8)) {
      lVar4 = FUN_18000bc18();
      *(undefined4 *)(lVar4 + 0x10) = local_res10;
    }
  }
  return 0;
}


/* Address: 0x1800108e0; Evidence: ev_64feb2556297e69876edaecbf4611670ea559d8c38ca68822806bf05898e85e5 */

undefined8 FUN_1800108e0(void)

{
  byte bVar1;
  
  bVar1 = (byte)DAT_180027000 & 0x3f;
  return CONCAT71((int7)(DAT_180027000 >> 8),
                  (DAT_180028c38 ^ DAT_180027000) >> bVar1 != 0 ||
                  (DAT_180028c38 ^ DAT_180027000) << 0x40 - bVar1 != 0);
}


/* Address: 0x180010900; Evidence: ev_a6b413965e5c11797df126e34d2d1af82479b0a215b53efb90c053aa8f503075 */

void FUN_180010900(undefined8 param_1)

{
  DAT_180028c38 = param_1;
  return;
}


/* Address: 0x180010910; Evidence: ev_c706b057af15b1e3d48d558257a312b5f0b68edabb9545bd436ba6a9610cc059 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180010910(undefined8 param_1)

{
  undefined8 uVar1;
  byte bVar2;
  code *pcVar3;
  
  bVar2 = (byte)DAT_180027000 & 0x3f;
  pcVar3 = (code *)((DAT_180028c38 ^ DAT_180027000) >> bVar2 |
                   (DAT_180028c38 ^ DAT_180027000) << 0x40 - bVar2);
  if (pcVar3 == (code *)0x0) {
    return 0;
  }
  uVar1 = (*pcVar3)(param_1);
  return uVar1;
}


/* Address: 0x180010940; Evidence: ev_d5513eb93b76887e85b4e2321166e9a730842b092ee17258ea0207400adbc9b2 */

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
    if (((undefined *)puVar2[-2] != &DAT_180027318) &&
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


/* Address: 0x1800109cc; Evidence: ev_00b25cfabc35aeb9ac5a84f204b05ceab3297714147ad1f48f375afb6b7fad1c */

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
       (*(undefined ***)(param_1 + 0xf8) != &PTR_DAT_1800278c0)) &&
      (*(int **)(param_1 + 0xe0) != (int *)0x0)) && (**(int **)(param_1 + 0xe0) == 0)) {
    piVar1 = *(int **)(param_1 + 0xf0);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_18000bff0(piVar1);
      __acrt_locale_free_monetary(*(longlong *)(param_1 + 0xf8));
    }
    piVar1 = *(int **)(param_1 + 0xe8);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_18000bff0(piVar1);
      __acrt_locale_free_numeric(*(longlong **)(param_1 + 0xf8));
    }
    FUN_18000bff0(*(LPVOID *)(param_1 + 0xe0));
    FUN_18000bff0(*(LPVOID *)(param_1 + 0xf8));
  }
  if ((*(int **)(param_1 + 0x100) != (int *)0x0) && (**(int **)(param_1 + 0x100) == 0)) {
    FUN_18000bff0((LPVOID)(*(longlong *)(param_1 + 0x108) + -0xfe));
    FUN_18000bff0((LPVOID)(*(longlong *)(param_1 + 0x110) + -0x80));
    FUN_18000bff0((LPVOID)(*(longlong *)(param_1 + 0x118) + -0x80));
    FUN_18000bff0(*(LPVOID *)(param_1 + 0x100));
  }
  __acrt_locale_free_lc_time_if_unreferenced(*(undefined ***)(param_1 + 0x120));
  puVar3 = (undefined8 *)(param_1 + 0x128);
  lVar2 = 6;
  puVar4 = (undefined8 *)(param_1 + 0x38);
  do {
    if ((((undefined *)puVar4[-2] != &DAT_180027318) &&
        (piVar1 = (int *)*puVar4, piVar1 != (int *)0x0)) && (*piVar1 == 0)) {
      FUN_18000bff0(piVar1);
      FUN_18000bff0((LPVOID)*puVar3);
    }
    if (((puVar4[-3] != 0) && (piVar1 = (int *)puVar4[-1], piVar1 != (int *)0x0)) && (*piVar1 == 0))
    {
      FUN_18000bff0(piVar1);
    }
    puVar3 = puVar3 + 1;
    puVar4 = puVar4 + 4;
    lVar2 = lVar2 + -1;
  } while (lVar2 != 0);
  FUN_18000bff0((LPVOID)param_1);
  return;
}


/* Address: 0x180010b44; Evidence: ev_922d17cc4be8b22a9d9232cf2771379ba1dcdb1f02eae0f759e20b5f3973dbc2 */

/* Library Function - Single Match
    __acrt_locale_add_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_add_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_18001ab60)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + 1;
    UNLOCK();
    return iVar2 + 1;
  }
  return 0x7fffffff;
}


/* Address: 0x180010b6c; Evidence: ev_56d7c12b60802a17394a48b79c4ca7a2dee56f64bfc75898400e2a4edf5faa87 */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_18001ab60)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_18000bff0(param_1);
  }
  return;
}


/* Address: 0x180010ba4; Evidence: ev_58f1a809216a3e1f20c6eaf8b233f5f60c2cf56db067c47fb4c2d013380dcde0 */

/* Library Function - Single Match
    __acrt_locale_release_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_release_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_18001ab60)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + -1;
    UNLOCK();
    return iVar2 + -1;
  }
  return 0x7fffffff;
}


/* Address: 0x180010bcc; Evidence: ev_351fc438ecceac29b05836d82afdf8ee2a8430268adf77464afd8a81510f518b */

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
      if (((undefined *)puVar2[-2] != &DAT_180027318) &&
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


/* Address: 0x180010c74; Evidence: ev_756664585f2bf380bed187db89fe2e0ab35cf258218774910c3f88a7b472ce7b */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_18000bc18();
  if (((DAT_1800278b8 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_180028450);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}


/* Address: 0x180010ce4; Evidence: ev_a50c3c8bb8868fcd33e35c09a6c8b6a5c4134c039f04d9538d5a92e15772bda3 */

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
         (ppuVar1 != &PTR_DAT_1800271b0)) {
        __acrt_free_locale((longlong)ppuVar1);
      }
    }
  }
  return param_2;
}


/* Address: 0x180010d4c; Evidence: ev_68005225b4f718aee1b09d6ccfa27d83ca87f0ec270a3bad5d993913781bfbaf */

/* Library Function - Single Match
    __acrt_locale_free_monetary
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_monetary(longlong param_1)

{
  if (param_1 != 0) {
    if (*(undefined **)(param_1 + 0x18) != PTR_DAT_1800278d8) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x18));
    }
    if (*(undefined **)(param_1 + 0x20) != PTR_DAT_1800278e0) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x20));
    }
    if (*(undefined **)(param_1 + 0x28) != PTR_DAT_1800278e8) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x28));
    }
    if (*(undefined **)(param_1 + 0x30) != PTR_DAT_1800278f0) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x30));
    }
    if (*(undefined **)(param_1 + 0x38) != PTR_DAT_1800278f8) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x38));
    }
    if (*(undefined **)(param_1 + 0x40) != PTR_DAT_180027900) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x40));
    }
    if (*(undefined **)(param_1 + 0x48) != PTR_DAT_180027908) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x48));
    }
    if (*(undefined **)(param_1 + 0x68) != PTR_DAT_180027928) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x68));
    }
    if (*(undefined **)(param_1 + 0x70) != PTR_DAT_180027930) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x70));
    }
    if (*(undefined **)(param_1 + 0x78) != PTR_DAT_180027938) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x78));
    }
    if (*(undefined **)(param_1 + 0x80) != PTR_DAT_180027940) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x80));
    }
    if (*(undefined **)(param_1 + 0x88) != PTR_DAT_180027948) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x88));
    }
    if (*(undefined **)(param_1 + 0x90) != PTR_DAT_180027950) {
      FUN_18000bff0(*(undefined **)(param_1 + 0x90));
    }
  }
  return;
}


/* Address: 0x180010e58; Evidence: ev_e272957accea779125c0951f31f30d8310dd0478e479877fced4afae22039bde */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(longlong *param_1)

{
  if (param_1 != (longlong *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_1800278c0) {
      FUN_18000bff0((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_1800278c8) {
      FUN_18000bff0((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_1800278d0) {
      FUN_18000bff0((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_180027918) {
      FUN_18000bff0((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_180027920) {
      FUN_18000bff0((undefined *)param_1[0xc]);
    }
  }
  return;
}


/* Address: 0x180010ec4; Evidence: ev_90459f0258433ee2da5d2efe898ea858e09741a7780f84fa93c2cef9dfd62f73 */

void FUN_180010ec4(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_18000bff0((LPVOID)*param_1);
  }
  return;
}


/* Address: 0x180010ef8; Evidence: ev_91316d9337f420ba9412e64d6193983c805d1389969f0b6718acd446fea8339d */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_180010ec4(param_1,7);
    FUN_180010ec4(param_1 + 7,7);
    FUN_180010ec4(param_1 + 0xe,0xc);
    FUN_180010ec4(param_1 + 0x1a,0xc);
    FUN_180010ec4(param_1 + 0x26,2);
    FUN_18000bff0((LPVOID)param_1[0x28]);
    FUN_18000bff0((LPVOID)param_1[0x29]);
    FUN_18000bff0((LPVOID)param_1[0x2a]);
    FUN_180010ec4(param_1 + 0x2c,7);
    FUN_180010ec4(param_1 + 0x33,7);
    FUN_180010ec4(param_1 + 0x3a,0xc);
    FUN_180010ec4(param_1 + 0x46,0xc);
    FUN_180010ec4(param_1 + 0x52,2);
    FUN_18000bff0((LPVOID)param_1[0x54]);
    FUN_18000bff0((LPVOID)param_1[0x55]);
    FUN_18000bff0((LPVOID)param_1[0x56]);
    FUN_18000bff0((LPVOID)param_1[0x57]);
  }
  return;
}


/* Address: 0x180011000; Evidence: ev_193d807f4db42e7e6d2c8671858da206c8928e6c8f8d59ff85d10af3b18ffd33 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_180011000(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
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
  local_30 = DAT_180027000 ^ (ulonglong)local_58;
  FUN_180007bb0(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_180010188(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_180011156;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_18001113e:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_180011156;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_18001113e;
      *puVar6 = 0xcccc;
LAB_1800110ec:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_1800110ec;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18001113e;
    *(undefined8 *)(puVar9 + -8) = 0x180011102;
    FUN_180017a70(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x18001111e;
    iVar3 = FUN_180010188(param_6,1);
    if (iVar3 == 0) goto LAB_18001113e;
    *(undefined8 *)(puVar9 + -8) = 0x180011138;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x180011156;
    FUN_18000bff0(lpSrcStr[-1] + 0x10);
  }
LAB_180011156:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x180011175;
  return BVar10;
}


/* Address: 0x180011190; Evidence: ev_77e406be73802e43fc29820b5bcfd436c2d233c46fa0d0209f0216923c41c795 */

undefined4 FUN_180011190(void)

{
  return DAT_180028c48;
}


/* Address: 0x1800111a0; Evidence: ev_a8a359039c44f5248a8ffd25a8de3bac386fd81cb9edb620a7e9ee3255790ca2 */

uint FUN_1800111a0(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180028c48;
    DAT_180028c48 = param_1;
  }
  else {
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000821c();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}


/* Address: 0x1800111cc; Evidence: ev_d2678e4f299bf2b8c8c87a92873977e133c0e3f0b9ad89bb6ba66ed1f4ef2f0c */

undefined4 FUN_1800111cc(ushort *param_1)

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
      iVar3 = FUN_180015080(param_1,(ushort *)(&PTR_DAT_18001dc10)[(longlong)iVar2 * 2],0x55);
      if (iVar3 == 0) {
        iVar5 = *(int *)(&DAT_18001dc18 + (longlong)iVar2 * 0x10);
        if (iVar5 < 0) {
          return 0;
        }
        if (0xe3 < (ulonglong)(longlong)iVar5) {
          return 0;
        }
        return *(undefined4 *)(&DAT_18001c1b0 + (longlong)iVar5 * 0x10);
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


/* Address: 0x180011274; Evidence: ev_480a94c275490dc1836aa4b020eb452698fb58d400d74ae6a0ed670be5d6b16d */

ulonglong FUN_180011274(FILE *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (FILE *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if ((*(uint *)((longlong)&param_1->_base + 4) >> 0xc & 1) == 0) {
      FUN_18000842c((longlong)param_1);
      uVar1 = FUN_1800112f0(param_1,param_2);
      FUN_180008438((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_1800152f4(&param_1->_ptr);
  }
  return 0xffffffff;
}


/* Address: 0x1800112f0; Evidence: ev_753e89599048addbbeb6392457dc66d7644dc255e7cea6c35a9303afd2975a21 */

ulonglong FUN_1800112f0(FILE *param_1,longlong *param_2)

{
  uint uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  
  if (param_1 == (FILE *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
    uVar2 = 0xffffffff;
  }
  else {
    uVar2 = 0xffffffff;
    if ((*(uint *)((longlong)&param_1->_base + 4) >> 0xd & 1) != 0) {
      uVar2 = FUN_18000c788(param_1,param_2);
      uVar2 = uVar2 & 0xffffffff;
      __acrt_stdio_free_buffer_nolock(&param_1->_ptr);
      uVar1 = _fileno(param_1);
      uVar3 = FUN_180015160(uVar1,param_2);
      if ((int)uVar3 < 0) {
        uVar2 = 0xffffffff;
      }
      else if (param_1->_tmpfname != (char *)0x0) {
        FUN_18000bff0(param_1->_tmpfname);
        param_1->_tmpfname = (char *)0x0;
      }
    }
    FUN_1800152f4(&param_1->_ptr);
  }
  return uVar2;
}


/* Address: 0x180011398; Evidence: ev_3def38d806a59d10a232ff55b143b34c559c9311a1633be411aa3b8d4389ce8d */

ulonglong FUN_180011398(FILE *param_1)

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
  local_20 = DAT_18002844c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_180027308;
    puStack_28 = PTR_DAT_180027310;
  }
  uVar1 = FUN_180011274(param_1,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return uVar1 & 0xffffffff;
}


/* Address: 0x180011430; Evidence: ev_915b71b2d449287e617a846cedf808b7934cd8c4868c6333774e51eddb45c441 */

undefined8 FUN_180011430(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined8 uVar5;
  
  FUN_18001236c(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_180028520)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_180012478(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar5 = 0;
    if (BVar2 != 0) goto LAB_1800114a7;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000b750();
    *(DWORD *)p_Var4 = DVar3;
  }
  p_Var4 = FUN_18000b774();
  *(undefined4 *)p_Var4 = 9;
  uVar5 = 0xffffffff;
LAB_1800114a7:
  FUN_180012394(*param_4);
  return uVar5;
}


/* Address: 0x1800114bc; Evidence: ev_29cf02760afb6739ff44a0a780c2d3065c9e2bf9b9bac2f7ba851c1933caa47c */

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
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_180028920)) &&
       ((*(byte *)((&DAT_180028520)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_180011430(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000821c();
  }
  return -1;
}


/* Address: 0x180011550; Evidence: ev_8e38434806a50fd980e469d57bda3ee6aa957fb61390f1d6d546f5e1eb30a607 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011550(DWORD *param_1,uint param_2,undefined1 (*param_3) [32],ulonglong param_4,
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
  local_40 = DAT_180027000 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar17 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_180028520)[lVar17] + 0x28 + uVar6 * 0x48);
  local_b8 = (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff));
  local_98 = param_3;
  local_90 = lVar17;
  local_a0 = GetConsoleOutputCP();
  uVar14 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_18000a2a0(local_b0);
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
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_180028520)[local_68]);
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
          cVar1 = (&DAT_180027960)[(byte)(*param_3)[0]];
          iVar3 = cVar1 + 1;
          lVar17 = (longlong)local_b8 - (longlong)param_3;
          if (lVar17 < iVar3) {
            uVar16 = uVar14;
            if (0 < lVar17) {
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_180028520)[local_90]) =
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
          pbVar7 = FUN_18000e42c(local_c4,&local_78,(ulonglong)uVar10,local_a8,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + cVar1);
          lVar17 = local_90;
        }
        else {
          cVar1 = (&DAT_180027960)[*(byte *)((&DAT_180028520)[lVar17] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar15 = (longlong)local_b8 - (longlong)param_3;
          uVar16 = (ulonglong)iVar3;
          if (lVar15 < (longlong)uVar16) {
            if (0 < lVar15) {
              uVar16 = uVar18;
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_180028520)[lVar17]) =
                     *(undefined1 *)((longlong)param_3 + (uVar16 - uVar18));
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar15);
            }
            param_1[1] = param_1[1] + (int)lVar15;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_180028520)[local_68]);
          uVar9 = uVar14;
          do {
            local_58[uVar9] = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          uVar9 = uVar14;
          if (0 < (longlong)uVar16) {
            FUN_180017e30((undefined1 (*) [32])(local_58 + uVar18),param_3,uVar16);
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_180028520)[lVar17]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_18000e42c(local_c4,&local_80,(ulonglong)uVar10,local_88,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + (int)(local_a8[0] - 1));
        }
      }
      else {
        lVar15 = (&DAT_180028520)[lVar17];
        bVar2 = *(byte *)(lVar15 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)(byte)(*param_3)[0] * 2) < 0) {
            pauVar13 = (undefined1 (*) [32])(*param_3 + 1);
            if (local_b8 <= pauVar13) {
              *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48) = (*param_3)[0];
              pbVar7 = (byte *)((&DAT_180028520)[lVar17] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar16 + 1;
              return param_1;
            }
            iVar3 = FUN_18000dfd0(local_c4,(byte *)param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_180011858;
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
        iVar3 = FUN_18000dfd0(local_c4,(byte *)pauVar13,uVar16,local_b0);
        pauVar13 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_180011858:
      param_3 = (undefined1 (*) [32])(*pauVar13 + 1);
      uVar10 = FUN_180010218(local_a0,0,local_c4,uVar10);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_1800119b1:
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
        if (BVar4 == 0) goto LAB_1800119b1;
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


/* Address: 0x1800119e4; Evidence: ev_a78e2f28e75406f1e06ae865bce258d28e965b186466cfb45bb048c85da0716e */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_1800119e4(DWORD *param_1,uint param_2,char *param_3,ulonglong param_4)

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
  
  local_20 = 0x1800119fc;
  local_28 = DAT_180027000 ^ (ulonglong)auStackY_1468;
  pcVar5 = param_3 + (param_4 & 0xffffffff);
  hFile = *(HANDLE *)
           ((&DAT_180028520)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x180011aec; Evidence: ev_a247e9a1e23f436a92bbbe5015ac9df9c212dc0f4f56f2f94940f7aa5eb58f86 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011aec(DWORD *param_1,uint param_2,short *param_3,ulonglong param_4)

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
  
  local_20 = 0x180011b04;
  local_28 = DAT_180027000 ^ (ulonglong)auStackY_1468;
  psVar5 = (short *)((param_4 & 0xffffffff) + (longlong)param_3);
  hFile = *(HANDLE *)
           ((&DAT_180028520)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x180011c08; Evidence: ev_77c1e1beb29f31686d8f1cba04f6c3e305a0e3372426dd0c23cbdd8d333d5ca5 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_180011c08(DWORD *param_1,uint param_2,short *param_3,uint param_4)

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
  
  local_30 = 0x180011c24;
  local_38 = DAT_180027000 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_180028520)[(longlong)(int)param_2 >> 6] + 0x28 +
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
    uVar2 = FUN_180010218(0xfde9,0,local_1448,(int)((longlong)psVar8 - (longlong)local_1448 >> 1));
    if (uVar2 == 0) {
LAB_180011d45:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_180011d45;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)psVar7 - (int)param_3;
  } while( true );
}


/* Address: 0x180011d7c; Evidence: ev_51c8bcd36aee00a902e0776e69ae2cc5fcb4e4177c1fdf458e325db1918172a6 */

int FUN_180011d7c(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
    if (((int)param_1 < 0) || (DAT_180028920 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_18001236c(param_1);
        iVar2 = -1;
        if ((*(byte *)((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          iVar2 = FUN_180011e9c(param_1,param_2,param_3,param_4);
        }
        FUN_180012394(param_1);
        return iVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x180011e9c; Evidence: ev_b1691ae5054f68627bd35bfe417c34b5dc2dca659bbd957d7d5864d7baf8cfcb */

int FUN_180011e9c(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
LAB_180011ecc:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar10 = (ulonglong)(param_1 & 0x3f);
  lVar13 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_180028520)[lVar13] + 0x39 + uVar10 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_180011ecc;
  if ((*(byte *)((&DAT_180028520)[lVar13] + 0x38 + uVar10 * 0x48) & 0x20) != 0) {
    thunk_FUN_180015430(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar4 = FUN_1800141a0(param_1);
  if (((int)CONCAT71(extraout_var,bVar4) == 0) ||
     (-1 < *(char *)((&DAT_180028520)[lVar13] + 0x38 + uVar10 * 0x48))) {
LAB_180012084:
    if (-1 < *(char *)((&DAT_180028520)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar7 = WriteFile(*(HANDLE *)
                         ((&DAT_180028520)[lVar13] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar12 = local_68;
      uVar3 = local_70;
      if (BVar7 == 0) {
        DVar12 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar12);
        DVar12 = local_68;
        uVar3 = local_70;
      }
      goto LAB_180012139;
    }
    if (cVar1 == '\0') {
      pDVar11 = FUN_1800119e4((DWORD *)&local_70,param_1,(char *)param_2,uVar14);
    }
    else if (cVar1 == '\x01') {
      pDVar11 = FUN_180011c08((DWORD *)&local_70,param_1,(short *)param_2,param_3);
    }
    else {
      DVar12 = 0;
      uVar3 = local_60;
      if (cVar1 != '\x02') goto LAB_180012139;
      pDVar11 = FUN_180011aec((DWORD *)&local_70,param_1,(short *)param_2,uVar14);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_18000a2a0(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_180028520)[lVar13] + 0x39 + uVar10 * 0x48) == '\0')) goto LAB_180012084;
    local_50[0] = 0;
    BVar7 = GetConsoleMode(*(HANDLE *)((&DAT_180028520)[lVar13] + 0x28 + uVar10 * 0x48),local_50);
    if (BVar7 == 0) goto LAB_180012084;
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
            sVar5 = FUN_180015584(sVar6);
            if (sVar5 != sVar6) {
LAB_18001204c:
              DVar8 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar8);
              uVar3 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar9 + 2,(DWORD)local_70);
            iVar2 = iVar9 + 2;
            if (sVar6 == 10) {
              sVar6 = FUN_180015584(0xd);
              if (sVar6 != 0xd) goto LAB_18001204c;
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
      goto LAB_180012139;
    }
    pDVar11 = FUN_180011550((DWORD *)&local_70,param_1,param_2,uVar14,param_4);
  }
  DVar12 = pDVar11[2];
  uVar3 = *(undefined8 *)pDVar11;
LAB_180012139:
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
    FUN_18000b72c((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_180028520)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((*param_2)[0] == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}


/* Address: 0x1800121cc; Evidence: ev_e963ffcb4547b0113cd061abd4135a242747bea99ecb6fb9e2df82f28594b31b */

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
  FUN_18000bff0((LPVOID)0x0);
  return puVar5;
}


/* Address: 0x180012274; Evidence: ev_2e620bf92513b17d3fdd3d8a28258ee259ad009424f4ab77b82523f793d9b83e */

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
    FUN_18000bff0(param_1);
  }
  return;
}


/* Address: 0x1800122c4; Evidence: ev_fe62e09c4835c60b2505d5fc2e8549902e1e3a0641f7261a6e0f36faa1256b76 */

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
    iVar1 = DAT_180028920;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_180028520)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_180028520)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_180028920 + 0x40;
        DAT_180028920 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 9;
    FUN_18000821c();
    lVar3 = 9;
  }
  return lVar3;
}


/* Address: 0x18001236c; Evidence: ev_bb5cc8e3103962b05cce6aec7d496988547f77a789243edb99f4b3bfded646e5 */

void FUN_18001236c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001238c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_180028520)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x180012394; Evidence: ev_0e851785539dce7a34da292a04cc9032ac1c0522a5c31727220b32369315f278 */

void FUN_180012394(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800123b4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_180028520)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x1800123bc; Evidence: ev_edf119375fb84e9e8dab01234cf76a2b2907240e5da7ba4a44a0d7e3c532c13b */

undefined8 FUN_1800123bc(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_180028920)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_1800155c4();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_18001243c;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_18001243c:
      *(undefined8 *)
       ((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  p_Var3 = FUN_18000b774();
  *(undefined4 *)p_Var3 = 9;
  p_Var3 = FUN_18000b750();
  *(undefined4 *)p_Var3 = 0;
  return 0xffffffff;
}


/* Address: 0x180012478; Evidence: ev_660bd98d1274dd9c517e2de14dbdf5e22eba75c02d8ed246b3e2fc3c345703e6 */

undefined8 FUN_180012478(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000b750();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180028920)) {
      if ((*(byte *)((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000b750();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000821c();
  }
  return 0xffffffffffffffff;
}


/* Address: 0x1800124f0; Evidence: ev_050eda391cea87400c7654e8750708c2d22381145a3bc8ec28ed7c264a202ef2 */

BOOL __stdcall GetStringTypeW(DWORD dwInfoType,LPCWSTR lpSrcStr,int cchSrc,LPWORD lpCharType)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x0001800124f0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = GetStringTypeW(dwInfoType,lpSrcStr,cchSrc,lpCharType);
  return BVar1;
}


/* Address: 0x1800124f8; Evidence: ev_7a5b78418f556ad11d7efd18e8b5e5d78d8af64048b1225d45d2e75a4eed689a */

bool FUN_1800124f8(char *param_1,char *param_2,int param_3,int param_4,int param_5)

{
  int iVar1;
  char *pcVar2;
  
  if (param_5 == 0) {
    return '4' < *param_2;
  }
  iVar1 = fegetround();
  if (iVar1 == 0) {
    if ('5' < *param_2) {
      return true;
    }
    if ('4' < *param_2) {
      pcVar2 = param_2;
      if (param_4 == 0) {
        return true;
      }
      do {
        pcVar2 = pcVar2 + 1;
      } while (*pcVar2 == '0');
      if (*pcVar2 != '\0') {
        return true;
      }
      if (param_2 != param_1) {
        return (bool)(param_2[-1] & 1);
      }
    }
  }
  else if (iVar1 == 0x200) {
    if (param_4 != 0) {
      for (; *param_2 == '0'; param_2 = param_2 + 1) {
      }
      if (*param_2 == '\0') {
        return false;
      }
    }
    if (param_3 != 0x2d) {
      return true;
    }
  }
  else if (iVar1 == 0x100) {
    if (param_4 != 0) {
      for (; *param_2 == '0'; param_2 = param_2 + 1) {
      }
      if (*param_2 == '\0') {
        return false;
      }
    }
    if (param_3 == 0x2d) {
      return true;
    }
  }
  return false;
}


/* Address: 0x1800125c8; Evidence: ev_854ca5f8747011f24cdc1d7a100ac862d2c87cbc2797cf96903bbf35604bb013 */

undefined4
FUN_1800125c8(undefined1 (*param_1) [32],ulonglong param_2,int param_3,int *param_4,int param_5,
             int param_6,longlong *param_7)

{
  char *pcVar1;
  longlong lVar2;
  char cVar3;
  bool bVar4;
  int iVar5;
  char *pcVar6;
  undefined4 uVar7;
  undefined1 (*pauVar8) [32];
  longlong lVar9;
  
  if ((param_1 != (undefined1 (*) [32])0x0) && (param_2 != 0)) {
    (*param_1)[0] = 0;
    iVar5 = 0;
    if (0 < param_3) {
      iVar5 = param_3;
    }
    if (param_2 <= (ulonglong)(longlong)(iVar5 + 1)) {
      uVar7 = 0x22;
      goto LAB_1800125ec;
    }
    if (param_4 != (int *)0x0) {
      pcVar1 = *(char **)(param_4 + 2);
      (*param_1)[0] = 0x30;
      pcVar6 = pcVar1;
      pauVar8 = param_1;
      while( true ) {
        pauVar8 = (undefined1 (*) [32])(*pauVar8 + 1);
        if (param_3 < 1) break;
        cVar3 = *pcVar6;
        if (cVar3 == '\0') {
          cVar3 = '0';
        }
        else {
          pcVar6 = pcVar6 + 1;
        }
        (*pauVar8)[0] = cVar3;
        param_3 = param_3 + -1;
      }
      (*pauVar8)[0] = 0;
      if ((-1 < param_3) && (bVar4 = FUN_1800124f8(pcVar1,pcVar6,*param_4,param_5,param_6), bVar4))
      {
        while( true ) {
          pauVar8 = (undefined1 (*) [32])(pauVar8[-1] + 0x1f);
          if ((*pauVar8)[0] != '9') break;
          (*pauVar8)[0] = 0x30;
        }
        (*pauVar8)[0] = (*pauVar8)[0] + '\x01';
      }
      if ((*param_1)[0] == '1') {
        param_4[1] = param_4[1] + 1;
      }
      else {
        lVar2 = -1;
        do {
          lVar9 = lVar2;
          lVar2 = lVar9 + 1;
        } while ((*param_1)[lVar9 + 2] != '\0');
        FUN_180017e30(param_1,(undefined1 (*) [32])(*param_1 + 1),lVar9 + 2);
      }
      return 0;
    }
  }
  uVar7 = 0x16;
LAB_1800125ec:
  *(undefined4 *)((longlong)param_7 + 0x2c) = uVar7;
  *(undefined1 *)(param_7 + 6) = 1;
  FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_7);
  return uVar7;
}


/* Address: 0x1800126e0; Evidence: ev_4a505349670c677c06b391a4bc856e3a0fceae13cae79cb758249a0b791f5958 */

ulonglong FUN_1800126e0(uint *param_1,uint *param_2)

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  uint uVar4;
  uint *puVar5;
  uint uVar6;
  ulonglong uVar7;
  longlong lVar8;
  int iVar9;
  longlong lVar10;
  int iVar11;
  uint uVar12;
  uint uVar13;
  uint uVar14;
  uint uVar15;
  ulonglong uVar16;
  ulonglong uVar17;
  uint uVar18;
  byte local_res8;
  uint local_res18;
  undefined8 local_238;
  ulonglong local_228;
  undefined1 local_214 [468];
  
  if ((*param_1 == 0) || (uVar4 = *param_2, uVar4 == 0)) {
    return 0;
  }
  uVar15 = *param_1 - 1;
  uVar16 = (ulonglong)uVar15;
  uVar14 = uVar4 - 1;
  if (uVar14 == 0) {
    uVar4 = param_2[1];
    uVar7 = 0;
    if (uVar4 == 1) {
      uVar4 = param_1[1];
      *param_1 = 0;
      memcpy_s(param_1 + 1,0x1cc,local_214,0);
      return (ulonglong)uVar4;
    }
    uVar17 = uVar7;
    if (uVar15 != 0) {
      while (uVar15 != 0xffffffff) {
        lVar8 = uVar16 + 1;
        uVar15 = (int)uVar16 - 1;
        uVar16 = (ulonglong)uVar15;
        uVar1 = (ulonglong)param_1[lVar8] | uVar7 << 0x20;
        uVar7 = uVar1 % (ulonglong)uVar4;
        uVar17 = (uVar17 << 0x20) + (uVar1 / uVar4 & 0xffffffff);
      }
      *param_1 = 0;
      memcpy_s(param_1 + 1,0x1cc,local_214,0);
      param_1[1] = (uint)uVar7;
      param_1[2] = 0;
      *param_1 = 1;
      return uVar17;
    }
    uVar14 = param_1[1];
    *param_1 = 0;
    memcpy_s(param_1 + 1,0x1cc,local_214,0);
    uVar15 = uVar14 % uVar4;
    param_1[1] = uVar15;
    *param_1 = (uint)(uVar15 != 0);
    return (ulonglong)uVar14 / (ulonglong)uVar4;
  }
  if (uVar15 < uVar14) {
    return 0;
  }
  lVar8 = (longlong)(int)uVar15;
  iVar11 = uVar15 - uVar14;
  lVar10 = (longlong)iVar11;
  if (lVar10 <= lVar8) {
    puVar5 = param_1 + lVar8 + 1;
    uVar13 = uVar15;
    do {
      if (*(uint *)((longlong)param_2 + (lVar10 * -4 - (longlong)param_1) + (longlong)puVar5) !=
          *puVar5) {
        if (param_1[(longlong)(int)uVar13 + 1] <= param_2[(longlong)(int)(uVar13 - iVar11) + 1])
        goto LAB_18001286b;
        break;
      }
      uVar13 = uVar13 - 1;
      lVar8 = lVar8 + -1;
      puVar5 = puVar5 + -1;
    } while (lVar10 <= lVar8);
  }
  iVar11 = iVar11 + 1;
LAB_18001286b:
  if (iVar11 == 0) {
    return 0;
  }
  uVar14 = param_2[(ulonglong)uVar14 + 1];
  local_res18 = param_2[(ulonglong)(uVar4 - 2) + 1];
  uVar13 = 0;
  uVar7 = 0;
  iVar9 = 0x1f;
  if (uVar14 != 0) {
    for (; uVar14 >> iVar9 == 0; iVar9 = iVar9 + -1) {
    }
  }
  if (uVar14 == 0) {
    iVar9 = 0x20;
    local_res8 = 0;
  }
  else {
    iVar9 = 0x1f - iVar9;
    local_res8 = 0x20 - (char)iVar9;
    if (iVar9 == 0) goto LAB_180012902;
  }
  uVar6 = local_res18 >> (local_res8 & 0x1f);
  local_res18 = local_res18 << ((byte)iVar9 & 0x1f);
  uVar14 = uVar6 | uVar14 << ((byte)iVar9 & 0x1f);
  if (2 < uVar4) {
    local_res18 = local_res18 | param_2[(ulonglong)(uVar4 - 3) + 1] >> (local_res8 & 0x1f);
  }
LAB_180012902:
  iVar11 = iVar11 + -1;
  local_228 = 0;
  uVar17 = uVar7;
  if (-1 < iVar11) {
    uVar1 = (ulonglong)uVar14;
    uVar14 = iVar11 + uVar4;
    do {
      uVar15 = uVar13;
      if (uVar14 <= (uint)uVar16) {
        uVar15 = param_1[(ulonglong)uVar14 + 1];
      }
      uVar6 = param_1[(ulonglong)(uVar14 - 2) + 1];
      uVar17 = (ulonglong)uVar6;
      local_238 = CONCAT44(uVar15,param_1[(ulonglong)(uVar14 - 1) + 1]);
      if (iVar9 != 0) {
        local_238 = (ulonglong)(uVar6 >> (local_res8 & 0x3f)) | local_238 << ((byte)iVar9 & 0x3f);
        uVar6 = uVar6 << ((byte)iVar9 & 0x1f);
        uVar17 = (ulonglong)uVar6;
        if (2 < uVar14) {
          uVar17 = (ulonglong)(uVar6 | param_1[(ulonglong)(uVar14 - 3) + 1] >> (local_res8 & 0x1f));
        }
      }
      uVar2 = local_238 / uVar1;
      local_238 = local_238 % uVar1;
      if (0xffffffff < uVar2) {
        lVar8 = uVar2 - 0xffffffff;
        uVar2 = 0xffffffff;
        local_238 = local_238 + lVar8 * uVar1;
      }
      if (local_238 < 0x100000000) {
        uVar3 = local_res18 * uVar2;
        do {
          if (uVar3 <= (local_238 << 0x20 | uVar17)) break;
          uVar2 = uVar2 - 1;
          uVar3 = uVar3 - local_res18;
          local_238 = local_238 + uVar1;
        } while (local_238 < 0x100000000);
      }
      if (uVar2 != 0) {
        uVar16 = uVar7;
        uVar6 = uVar13;
        puVar5 = param_2;
        if (uVar4 != 0) {
          do {
            uVar16 = uVar16 + puVar5[1] * uVar2;
            uVar17 = uVar16 >> 0x20;
            uVar12 = (uint)uVar16;
            uVar16 = uVar17 + 1;
            if (uVar12 <= param_1[(ulonglong)(uVar6 + iVar11) + 1]) {
              uVar16 = uVar17;
            }
            uVar18 = uVar6 + 1;
            param_1[(ulonglong)(uVar6 + iVar11) + 1] =
                 param_1[(ulonglong)(uVar6 + iVar11) + 1] - uVar12;
            uVar6 = uVar18;
            puVar5 = puVar5 + 1;
          } while (uVar18 < uVar4);
        }
        if (uVar15 < uVar16) {
          uVar16 = uVar7;
          uVar15 = uVar13;
          puVar5 = param_2;
          if (uVar4 != 0) {
            do {
              uVar6 = uVar15 + 1;
              uVar16 = uVar16 + param_1[(ulonglong)(uVar15 + iVar11) + 1] + (ulonglong)puVar5[1];
              param_1[(ulonglong)(uVar15 + iVar11) + 1] = (uint)uVar16;
              uVar16 = uVar16 >> 0x20;
              uVar15 = uVar6;
              puVar5 = puVar5 + 1;
            } while (uVar6 < uVar4);
          }
          uVar2 = uVar2 - 1;
        }
        uVar16 = (ulonglong)(uVar14 - 1);
      }
      uVar15 = (uint)uVar16;
      uVar14 = uVar14 - 1;
      uVar17 = (local_228 << 0x20) + (uVar2 & 0xffffffff);
      iVar11 = iVar11 + -1;
      local_228 = uVar17;
    } while (-1 < iVar11);
  }
  uVar15 = uVar15 + 1;
  uVar4 = uVar15;
  if (uVar15 < *param_1) {
    do {
      uVar16 = (ulonglong)uVar4;
      uVar4 = uVar4 + 1;
      param_1[uVar16 + 1] = 0;
    } while (uVar4 < *param_1);
  }
  *param_1 = uVar15;
  while( true ) {
    if (uVar15 == 0) {
      return uVar17;
    }
    uVar15 = uVar15 - 1;
    if (param_1[(ulonglong)uVar15 + 1] != 0) break;
    *param_1 = uVar15;
  }
  return uVar17;
}


/* Address: 0x180012b6c; Evidence: ev_3a00e4767a41788ab54173ecc085f54abbb65b174860a6bcf64435837da6dc22 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8
FUN_180012b6c(ulonglong param_1,int param_2,uint param_3,undefined4 *param_4,char *param_5,
             longlong param_6)

{
  uint *puVar1;
  byte bVar2;
  sbyte sVar3;
  undefined4 uVar4;
  uint uVar5;
  ulonglong uVar6;
  undefined8 uVar7;
  __acrt_ptd *p_Var8;
  longlong lVar9;
  byte bVar10;
  char cVar11;
  int iVar12;
  uint uVar13;
  ulonglong uVar14;
  ulonglong uVar15;
  uint uVar16;
  char *pcVar17;
  uint uVar18;
  uint uVar19;
  int iVar20;
  char *pcVar21;
  ulonglong uVar22;
  uint uVar23;
  rsize_t _MaxCount;
  uint uVar24;
  uint uVar25;
  undefined8 uVar26;
  bool bVar27;
  double dVar28;
  undefined1 auStackY_828 [32];
  uint local_7f0;
  uint local_7ec;
  undefined8 local_7e8;
  uint local_7e0;
  uint local_7dc;
  uint local_7d8 [2];
  uint local_7d0;
  uint local_7cc;
  uint *local_7c8;
  byte local_7c0 [8];
  char local_7b8;
  uint *local_7b0;
  char *local_7a8;
  undefined4 *local_7a0;
  uint local_798;
  undefined8 local_794;
  uint local_5c8;
  uint local_5c4 [115];
  uint local_3f8;
  uint local_3f4 [115];
  uint local_228;
  uint local_224 [115];
  ulonglong local_58;
  
  local_58 = DAT_180027000 ^ (ulonglong)auStackY_828;
  local_7a8 = param_5;
  local_7dc = param_3;
  local_7a0 = param_4;
  FUN_180015640((uint *)local_7c0);
  uVar26 = 1;
  local_7b8 = (local_7c0[0] & 0x1f) != 0x1f;
  if ((bool)local_7b8) {
    FUN_1800156d0((ulonglong *)local_7c0);
  }
  *(char **)(param_4 + 2) = param_5;
  uVar4 = 0x20;
  if ((longlong)param_1 < 0) {
    uVar4 = 0x2d;
  }
  local_7d8[0] = 0;
  *param_4 = uVar4;
  FUN_1800155d0(local_7d8,0,0);
  uVar6 = param_1 >> 0x34 & 0x7ff;
  if (uVar6 == 0) {
    if (((param_1 & 0xfffffffffffff) != 0) && ((local_7d8[0] & 0x1000000) == 0)) {
LAB_180012d0e:
      local_7ec = 0;
      local_7cc = 0x8001f;
      FUN_1800155d0(&local_7d0,0,0);
      FUN_1800155d0(&local_7ec,0x8001f,local_7cc);
      local_7ec = param_2 + 1;
      uVar22 = (param_1 & 0x7fffffffffffffff) >> 0x34;
      uVar6 = (-(ulonglong)(uVar22 != 0) & 0x10000000000000) + (param_1 & 0xfffffffffffff);
      uVar25 = (2 - (uint)(uVar22 != 0)) + (uint)((param_1 & 0x7fffffffffffffff) >> 0x34);
      FUN_180015800();
      dVar28 = FUN_180015730();
      uVar5 = -(uint)(((int)dVar28 + 0x80000001U & 0xfffffffe) != 0) & (int)dVar28;
      uVar18 = (uint)(uVar6 >> 0x20);
      local_794 = uVar6;
      uVar23 = (uint)(uVar18 != 0);
      uVar16 = uVar23 + 1;
      if (uVar25 < 0x434) {
        if (uVar25 == 0x36) {
LAB_1800131a4:
          local_7e8 = (uint *)((ulonglong)local_7e8._4_4_ << 0x20);
          puVar1 = (uint *)((longlong)&local_794 + (ulonglong)(-(uint)(uVar18 != 0) & 4));
          iVar12 = 0x1f;
          bVar27 = *puVar1 == 0;
          if (!bVar27) {
            for (; *puVar1 >> iVar12 == 0; iVar12 = iVar12 + -1) {
            }
          }
          if (bVar27) {
            iVar12 = 0;
          }
          else {
            iVar12 = iVar12 + 1;
          }
          uVar23 = (iVar12 == 0x20) + uVar16;
          if (uVar23 < 0x74) {
            uVar18 = uVar23 - 1;
            while (uVar18 != 0xffffffff) {
              uVar24 = uVar18 - 1;
              if (uVar18 < uVar16) {
                iVar12 = *(int *)((longlong)&local_794 + (ulonglong)uVar18 * 4);
              }
              else {
                iVar12 = 0;
              }
              if (uVar24 < uVar16) {
                uVar13 = *(uint *)((longlong)&local_794 + (ulonglong)uVar24 * 4);
              }
              else {
                uVar13 = 0;
              }
              *(uint *)((longlong)&local_794 + (ulonglong)uVar18 * 4) = uVar13 >> 0x1f | iVar12 * 2;
              uVar18 = uVar24;
            }
          }
          else {
            uVar23 = 0;
          }
          uVar16 = 0x435 - uVar25 >> 5;
          local_798 = uVar23;
          FUN_180017a70((undefined1 (*) [32])local_3f4,0,(ulonglong)uVar16 * 4);
          local_3f4[uVar16] = 1 << ((byte)(0x435 - uVar25) & 0x1f);
        }
        else {
          local_3f4[1] = 0x100000;
          local_3f4[0] = 0;
          local_3f8 = 2;
          if (uVar18 == 0) goto LAB_1800131a4;
          uVar6 = 0;
          do {
            if (local_3f4[uVar6] != *(uint *)((longlong)&local_794 + uVar6 * 4)) goto LAB_1800131a4;
            uVar23 = (int)uVar6 + 1;
            uVar6 = (ulonglong)uVar23;
          } while (uVar23 != 2);
          local_7e8 = (uint *)((ulonglong)local_7e8._4_4_ << 0x20);
          iVar12 = 0x1f;
          if (uVar18 != 0) {
            for (; uVar18 >> iVar12 == 0; iVar12 = iVar12 + -1) {
            }
          }
          if (uVar18 == 0) {
            iVar12 = 0;
          }
          else {
            iVar12 = iVar12 + 1;
          }
          local_798 = (0x20U - iVar12 < 2) + uVar16;
          if (local_798 < 0x74) {
            uVar23 = local_798 - 1;
            while (uVar23 != 0xffffffff) {
              uVar18 = uVar23 - 1;
              if (uVar23 < uVar16) {
                iVar12 = *(int *)((longlong)&local_794 + (ulonglong)uVar23 * 4);
              }
              else {
                iVar12 = 0;
              }
              if (uVar18 < uVar16) {
                uVar24 = *(uint *)((longlong)&local_794 + (ulonglong)uVar18 * 4);
              }
              else {
                uVar24 = 0;
              }
              *(uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4) = uVar24 >> 0x1e | iVar12 * 4;
              uVar23 = uVar18;
            }
          }
          else {
            local_3f8 = 0;
            local_798 = 0;
            memcpy_s(&local_794,0x1cc,local_3f4,0);
          }
          uVar23 = local_798;
          uVar16 = 0x436 - uVar25 >> 5;
          FUN_180017a70((undefined1 (*) [32])local_3f4,0,(ulonglong)uVar16 * 4);
          local_3f4[uVar16] = 1 << ((byte)(0x436 - uVar25) & 0x1f);
        }
        local_3f8 = uVar16 + 1;
        _MaxCount = (ulonglong)local_3f8 << 2;
      }
      else {
        local_3f4[1] = 0x100000;
        local_3f4[0] = 0;
        local_3f8 = 2;
        if (uVar18 == 0) {
LAB_180012f65:
          local_7e8 = (uint *)((ulonglong)local_7e8._4_4_ << 0x20);
          uVar24 = uVar25 - 0x433 & 0x1f;
          uVar18 = uVar25 - 0x433 >> 5;
          sVar3 = (sbyte)uVar24;
          bVar10 = 0x20 - sVar3;
          uVar25 = (int)(1L << (bVar10 & 0x3f)) - 1;
          puVar1 = (uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4);
          iVar12 = 0x1f;
          bVar27 = *puVar1 == 0;
          if (!bVar27) {
            for (; *puVar1 >> iVar12 == 0; iVar12 = iVar12 + -1) {
            }
          }
          if (bVar27) {
            iVar12 = 0;
          }
          else {
            iVar12 = iVar12 + 1;
          }
          if ((uVar16 + uVar18 < 0x74) &&
             (local_798 = (0x20U - iVar12 < uVar24) + uVar16 + uVar18, local_798 < 0x74)) {
            uVar23 = local_798;
            while (uVar23 = uVar23 - 1, uVar23 != uVar18 - 1) {
              uVar24 = uVar23 - uVar18;
              if (uVar24 < uVar16) {
                uVar13 = *(uint *)((longlong)&local_794 + (ulonglong)uVar24 * 4);
              }
              else {
                uVar13 = 0;
              }
              if (uVar24 - 1 < uVar16) {
                uVar24 = *(uint *)((longlong)&local_794 + (ulonglong)(uVar24 - 1) * 4);
              }
              else {
                uVar24 = 0;
              }
              *(uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4) =
                   (uVar24 & ~uVar25) >> (bVar10 & 0x1f) | (uVar13 & uVar25) << sVar3;
            }
            uVar6 = 0;
            if (uVar18 != 0) {
              do {
                *(undefined4 *)((longlong)&local_794 + uVar6 * 4) = 0;
                uVar23 = (int)uVar6 + 1;
                uVar6 = (ulonglong)uVar23;
              } while (uVar23 != uVar18);
            }
          }
          else {
            local_3f8 = 0;
            local_798 = 0;
            memcpy_s(&local_794,0x1cc,local_3f4,0);
          }
          local_3f4[0] = 2;
        }
        else {
          uVar6 = 0;
          do {
            if (local_3f4[uVar6] != *(uint *)((longlong)&local_794 + uVar6 * 4)) goto LAB_180012f65;
            uVar18 = (int)uVar6 + 1;
            uVar6 = (ulonglong)uVar18;
          } while (uVar18 != 2);
          local_7e8 = (uint *)((ulonglong)local_7e8._4_4_ << 0x20);
          uVar24 = uVar25 - 0x432 & 0x1f;
          uVar18 = uVar25 - 0x432 >> 5;
          sVar3 = (sbyte)uVar24;
          bVar10 = 0x20 - sVar3;
          uVar25 = (int)(1L << (bVar10 & 0x3f)) - 1;
          puVar1 = (uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4);
          iVar12 = 0x1f;
          bVar27 = *puVar1 == 0;
          if (!bVar27) {
            for (; *puVar1 >> iVar12 == 0; iVar12 = iVar12 + -1) {
            }
          }
          if (bVar27) {
            iVar12 = 0;
          }
          else {
            iVar12 = iVar12 + 1;
          }
          if ((uVar16 + uVar18 < 0x74) &&
             (local_798 = (0x20U - iVar12 < uVar24) + uVar16 + uVar18, local_798 < 0x74)) {
            uVar23 = local_798;
            while (uVar23 = uVar23 - 1, uVar23 != uVar18 - 1) {
              uVar24 = uVar23 - uVar18;
              if (uVar24 < uVar16) {
                uVar13 = *(uint *)((longlong)&local_794 + (ulonglong)uVar24 * 4);
              }
              else {
                uVar13 = 0;
              }
              if (uVar24 - 1 < uVar16) {
                uVar24 = *(uint *)((longlong)&local_794 + (ulonglong)(uVar24 - 1) * 4);
              }
              else {
                uVar24 = 0;
              }
              *(uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4) =
                   (uVar24 & ~uVar25) >> (bVar10 & 0x1f) | (uVar13 & uVar25) << sVar3;
            }
            uVar6 = 0;
            if (uVar18 != 0) {
              do {
                *(undefined4 *)((longlong)&local_794 + uVar6 * 4) = 0;
                uVar23 = (int)uVar6 + 1;
                uVar6 = (ulonglong)uVar23;
              } while (uVar23 != uVar18);
            }
          }
          else {
            local_3f8 = 0;
            local_798 = 0;
            memcpy_s(&local_794,0x1cc,local_3f4,0);
          }
          local_3f4[0] = 4;
        }
        local_3f4[1] = 0;
        _MaxCount = 4;
        local_3f8 = 1;
        uVar23 = local_798;
      }
      uVar26 = 1;
      local_5c8 = local_3f8;
      memcpy_s(local_5c4,0x1cc,local_3f4,_MaxCount);
      if ((int)uVar5 < 0) {
        uVar16 = -uVar5;
        local_7e8 = (uint *)CONCAT44(local_7e8._4_4_,uVar16);
        uVar6 = (ulonglong)uVar16 / 10;
        local_7f0 = (uint)uVar6;
        if (local_7f0 != 0) {
          do {
            local_7e0 = (uint)uVar6;
            if (0x26 < local_7e0) {
              local_7e0 = 0x26;
            }
            uVar16 = local_7e0 - 1;
            bVar10 = (&DAT_18001fde2)[(ulonglong)uVar16 * 4];
            bVar2 = (&DAT_18001fde3)[(ulonglong)uVar16 * 4];
            local_3f8 = (uint)bVar2 + (uint)bVar10;
            FUN_180017a70((undefined1 (*) [32])local_3f4,0,(ulonglong)bVar10 * 4);
            FUN_180017e30((undefined1 (*) [32])(local_3f4 + bVar10),
                          (undefined1 (*) [32])
                          (&DAT_18001f4d0 +
                          (ulonglong)*(ushort *)(&DAT_18001fde0 + (ulonglong)uVar16 * 4) * 4),
                          (ulonglong)bVar2 << 2);
            if (local_3f8 < 2) {
              uVar6 = (ulonglong)local_3f4[0];
              if (local_3f4[0] == 0) {
LAB_1800137f1:
                local_798 = 0;
                uVar23 = local_798;
                goto LAB_180013ab7;
              }
              if ((local_3f4[0] == 1) || (uVar23 == 0)) goto LAB_180013ab7;
              uVar22 = 0;
              uVar15 = 0;
              do {
                uVar14 = *(uint *)((longlong)&local_794 + uVar15 * 4) * uVar6 + uVar22;
                *(int *)((longlong)&local_794 + uVar15 * 4) = (int)uVar14;
                uVar22 = uVar14 >> 0x20;
                iVar12 = (int)(uVar14 >> 0x20);
                uVar16 = (int)uVar15 + 1;
                uVar15 = (ulonglong)uVar16;
              } while (uVar16 != uVar23);
LAB_18001383b:
              uVar23 = local_798;
              if (iVar12 == 0) goto LAB_180013ab7;
              if (local_798 < 0x73) {
                *(int *)((longlong)&local_794 + (ulonglong)local_798 * 4) = iVar12;
                local_798 = local_798 + 1;
                uVar23 = local_798;
                goto LAB_180013ab7;
              }
              uVar23 = 0;
              local_798 = 0;
              bVar27 = false;
            }
            else {
              if (uVar23 < 2) {
                uVar16 = (uint)local_794;
                uVar6 = local_794 & 0xffffffff;
                uVar22 = (ulonglong)local_3f8 << 2;
                local_798 = local_3f8;
                if ((ulonglong)local_3f8 != 0) {
                  if (uVar22 < 0x1cd) {
                    FUN_180017e30((undefined1 (*) [32])&local_794,(undefined1 (*) [32])local_3f4,
                                  uVar22);
                  }
                  else {
                    FUN_180017a70((undefined1 (*) [32])&local_794,0,0x1cc);
                    p_Var8 = FUN_18000b774();
                    *(undefined4 *)p_Var8 = 0x22;
                    FUN_18000821c();
                  }
                }
                if (uVar16 == 0) goto LAB_1800137f1;
                uVar23 = local_798;
                if ((uVar16 != 1) && (local_798 != 0)) {
                  uVar22 = 0;
                  uVar15 = 0;
                  do {
                    uVar14 = *(uint *)((longlong)&local_794 + uVar15 * 4) * uVar6 + uVar22;
                    *(int *)((longlong)&local_794 + uVar15 * 4) = (int)uVar14;
                    uVar22 = uVar14 >> 0x20;
                    iVar12 = (int)(uVar14 >> 0x20);
                    uVar23 = (int)uVar15 + 1;
                    uVar15 = (ulonglong)uVar23;
                  } while (uVar23 != local_798);
                  goto LAB_18001383b;
                }
              }
              else {
                local_7b0 = (uint *)&local_794;
                local_7c8 = local_3f4;
                uVar16 = local_3f8;
                if (local_3f8 < uVar23) {
                  uVar16 = uVar23;
                  local_7c8 = (uint *)&local_794;
                  local_7b0 = local_3f4;
                  uVar23 = local_3f8;
                }
                uVar22 = 0;
                uVar6 = 0;
                local_228 = 0;
                if (uVar23 != 0) {
                  do {
                    uVar18 = local_7b0[uVar6];
                    iVar12 = (int)uVar6;
                    if (uVar18 == 0) {
                      if (iVar12 == (int)uVar22) {
                        local_224[uVar6] = 0;
                        uVar22 = (ulonglong)(iVar12 + 1U);
                        local_228 = iVar12 + 1U;
                      }
                    }
                    else {
                      uVar15 = 0;
                      if (uVar16 != 0) {
                        do {
                          iVar20 = (int)uVar6;
                          uVar14 = uVar6;
                          if (iVar20 == 0x73) break;
                          if (iVar20 == (int)uVar22) {
                            local_224[uVar6] = 0;
                            local_228 = iVar20 + 1;
                          }
                          uVar14 = (ulonglong)(iVar20 + 1U);
                          uVar15 = (ulonglong)local_7c8[(uint)(iVar20 + -iVar12)] *
                                   (ulonglong)uVar18 + uVar15 + (ulonglong)local_224[uVar6];
                          local_224[uVar6] = (uint)uVar15;
                          uVar22 = (ulonglong)local_228;
                          uVar15 = uVar15 >> 0x20;
                          uVar6 = uVar14;
                        } while (iVar20 + 1U + -iVar12 != uVar16);
                        uVar18 = (uint)uVar15;
                        uVar6 = uVar14;
                        while (uVar18 != 0) {
                          iVar20 = (int)uVar6;
                          if (iVar20 == 0x73) goto LAB_180013b5e;
                          if (iVar20 == (int)uVar22) {
                            local_224[uVar6] = 0;
                            local_228 = iVar20 + 1;
                          }
                          uVar18 = local_224[uVar6];
                          local_224[uVar6] = (uint)(uVar18 + uVar15);
                          uVar22 = (ulonglong)local_228;
                          uVar18 = (uint)(uVar18 + uVar15 >> 0x20);
                          uVar15 = (ulonglong)uVar18;
                          uVar6 = (ulonglong)(iVar20 + 1);
                        }
                      }
                      if ((int)uVar6 == 0x73) goto LAB_180013b5e;
                    }
                    uVar6 = (ulonglong)(iVar12 + 1U);
                  } while (iVar12 + 1U != uVar23);
                }
                local_798 = (uint)uVar22;
                uVar23 = 0;
                if (uVar22 != 0) {
                  if (uVar22 << 2 < 0x1cd) {
                    FUN_180017e30((undefined1 (*) [32])&local_794,(undefined1 (*) [32])local_224,
                                  uVar22 << 2);
                    uVar23 = local_798;
                  }
                  else {
                    FUN_180017a70((undefined1 (*) [32])&local_794,0,0x1cc);
                    p_Var8 = FUN_18000b774();
                    *(undefined4 *)p_Var8 = 0x22;
                    FUN_18000821c();
                    uVar23 = local_798;
                  }
                }
              }
LAB_180013ab7:
              bVar27 = true;
            }
            if (!bVar27) goto LAB_180013b5e;
            local_7f0 = local_7f0 - local_7e0;
            uVar6 = (ulonglong)local_7f0;
          } while (local_7f0 != 0);
          uVar16 = (uint)local_7e8;
        }
        uVar18 = local_5c8;
        if (uVar16 % 10 != 0) {
          uVar16 = *(uint *)(&DAT_18001fe78 + (ulonglong)(uVar16 % 10 - 1) * 4);
          if (uVar16 == 0) {
LAB_180013b5e:
            local_798 = 0;
            uVar18 = local_5c8;
            uVar23 = local_798;
          }
          else if ((uVar16 != 1) && (uVar23 != 0)) {
            uVar6 = 0;
            uVar22 = 0;
            do {
              uVar15 = (ulonglong)*(uint *)((longlong)&local_794 + uVar22 * 4) * (ulonglong)uVar16 +
                       uVar6;
              *(int *)((longlong)&local_794 + uVar22 * 4) = (int)uVar15;
              uVar6 = uVar15 >> 0x20;
              uVar18 = (int)uVar22 + 1;
              uVar22 = (ulonglong)uVar18;
            } while (uVar18 != uVar23);
            iVar12 = (int)(uVar15 >> 0x20);
            uVar18 = local_5c8;
            uVar23 = local_798;
            if (iVar12 != 0) {
              if (0x72 < local_798) goto LAB_180013b5e;
              *(int *)((longlong)&local_794 + (ulonglong)local_798 * 4) = iVar12;
              local_798 = local_798 + 1;
              uVar23 = local_798;
            }
          }
        }
      }
      else {
        uVar6 = (ulonglong)uVar5 / 10;
        uVar16 = (uint)uVar6;
        uVar18 = local_5c8;
        while (uVar16 != 0) {
          local_7e0 = (uint)uVar6;
          if (0x26 < local_7e0) {
            local_7e0 = 0x26;
          }
          uVar25 = local_7e0 - 1;
          bVar10 = (&DAT_18001fde2)[(ulonglong)uVar25 * 4];
          bVar2 = (&DAT_18001fde3)[(ulonglong)uVar25 * 4];
          local_3f8 = (uint)bVar2 + (uint)bVar10;
          FUN_180017a70((undefined1 (*) [32])local_3f4,0,(ulonglong)bVar10 * 4);
          FUN_180017e30((undefined1 (*) [32])(local_3f4 + bVar10),
                        (undefined1 (*) [32])
                        (&DAT_18001f4d0 +
                        (ulonglong)*(ushort *)(&DAT_18001fde0 + (ulonglong)uVar25 * 4) * 4),
                        (ulonglong)bVar2 << 2);
          uVar25 = local_5c4[0];
          if (local_3f8 < 2) {
            uVar6 = (ulonglong)local_3f4[0];
            if (local_3f4[0] == 0) {
LAB_180013311:
              local_5c8 = 0;
LAB_180013314:
              uVar18 = local_5c8;
              goto LAB_18001366c;
            }
            if ((local_3f4[0] == 1) || (uVar18 == 0)) goto LAB_18001366c;
            uVar22 = 0;
            uVar15 = 0;
            do {
              uVar14 = local_5c4[uVar15] * uVar6 + uVar22;
              local_5c4[uVar15] = (uint)uVar14;
              uVar22 = uVar14 >> 0x20;
              uVar25 = (uint)(uVar14 >> 0x20);
              uVar24 = (int)uVar15 + 1;
              uVar15 = (ulonglong)uVar24;
            } while (uVar24 != uVar18);
LAB_1800133b3:
            uVar18 = local_5c8;
            if (uVar25 == 0) goto LAB_18001366c;
            if (local_5c8 < 0x73) {
              local_5c4[local_5c8] = uVar25;
              local_5c8 = local_5c8 + 1;
              goto LAB_180013314;
            }
            uVar18 = 0;
            local_5c8 = 0;
            bVar27 = false;
          }
          else {
            if (uVar18 < 2) {
              uVar6 = (ulonglong)local_5c4[0];
              uVar22 = (ulonglong)local_3f8 << 2;
              local_5c8 = local_3f8;
              if ((ulonglong)local_3f8 != 0) {
                if (uVar22 < 0x1cd) {
                  FUN_180017e30((undefined1 (*) [32])local_5c4,(undefined1 (*) [32])local_3f4,uVar22
                               );
                }
                else {
                  FUN_180017a70((undefined1 (*) [32])local_5c4,0,0x1cc);
                  p_Var8 = FUN_18000b774();
                  *(undefined4 *)p_Var8 = 0x22;
                  FUN_18000821c();
                }
              }
              if (uVar25 == 0) goto LAB_180013311;
              uVar18 = local_5c8;
              if ((uVar25 != 1) && (local_5c8 != 0)) {
                uVar22 = 0;
                uVar15 = 0;
                do {
                  uVar14 = local_5c4[uVar15] * uVar6 + uVar22;
                  local_5c4[uVar15] = (uint)uVar14;
                  uVar22 = uVar14 >> 0x20;
                  uVar25 = (uint)(uVar14 >> 0x20);
                  uVar18 = (int)uVar15 + 1;
                  uVar15 = (ulonglong)uVar18;
                } while (uVar18 != local_5c8);
                goto LAB_1800133b3;
              }
            }
            else {
              local_7c8 = local_5c4;
              local_7e8 = local_3f4;
              uVar25 = local_3f8;
              if (local_3f8 < uVar18) {
                uVar25 = uVar18;
                local_7e8 = local_5c4;
                uVar18 = local_3f8;
                local_7c8 = local_3f4;
              }
              local_5c8 = 0;
              uVar6 = 0;
              local_228 = 0;
              if (uVar18 != 0) {
                do {
                  uVar24 = local_7c8[uVar6];
                  uVar13 = (uint)uVar6;
                  if (uVar24 == 0) {
                    if (uVar13 == local_5c8) {
                      local_224[uVar6] = 0;
                      local_5c8 = uVar13 + 1;
                      local_228 = local_5c8;
                    }
                  }
                  else {
                    uVar22 = 0;
                    if (uVar25 != 0) {
                      do {
                        uVar19 = (uint)uVar6;
                        uVar15 = uVar6;
                        if (uVar19 == 0x73) break;
                        if (uVar19 == local_5c8) {
                          local_224[uVar6] = 0;
                          local_228 = uVar19 + 1;
                        }
                        uVar15 = (ulonglong)(uVar19 + 1);
                        uVar22 = (ulonglong)local_7e8[uVar19 + -uVar13] * (ulonglong)uVar24 +
                                 (ulonglong)local_224[uVar6] + uVar22;
                        local_224[uVar6] = (uint)uVar22;
                        uVar22 = uVar22 >> 0x20;
                        uVar6 = uVar15;
                        local_5c8 = local_228;
                      } while (uVar19 + 1 + -uVar13 != uVar25);
                      uVar24 = (uint)uVar22;
                      uVar6 = uVar15;
                      while (uVar24 != 0) {
                        uVar19 = (uint)uVar6;
                        if (uVar19 == 0x73) goto LAB_180013736;
                        if (uVar19 == local_5c8) {
                          local_224[uVar6] = 0;
                          local_228 = uVar19 + 1;
                        }
                        uVar24 = local_224[uVar6];
                        local_224[uVar6] = (uint)(uVar24 + uVar22);
                        uVar24 = (uint)(uVar24 + uVar22 >> 0x20);
                        uVar22 = (ulonglong)uVar24;
                        uVar6 = (ulonglong)(uVar19 + 1);
                        local_5c8 = local_228;
                      }
                    }
                    if ((int)uVar6 == 0x73) goto LAB_180013736;
                  }
                  uVar6 = (ulonglong)(uVar13 + 1);
                } while (uVar13 + 1 != uVar18);
              }
              uVar6 = (ulonglong)local_5c8 << 2;
              uVar18 = local_5c8;
              if ((ulonglong)local_5c8 != 0) {
                if (uVar6 < 0x1cd) {
                  FUN_180017e30((undefined1 (*) [32])local_5c4,(undefined1 (*) [32])local_224,uVar6)
                  ;
                  uVar18 = local_5c8;
                }
                else {
                  FUN_180017a70((undefined1 (*) [32])local_5c4,0,0x1cc);
                  p_Var8 = FUN_18000b774();
                  *(undefined4 *)p_Var8 = 0x22;
                  FUN_18000821c();
                  uVar18 = local_5c8;
                }
              }
            }
LAB_18001366c:
            bVar27 = true;
          }
          if (!bVar27) goto LAB_180013736;
          uVar16 = uVar16 - local_7e0;
          uVar6 = (ulonglong)uVar16;
        }
        if (uVar5 % 10 != 0) {
          uVar16 = *(uint *)(&DAT_18001fe78 + (ulonglong)(uVar5 % 10 - 1) * 4);
          if (uVar16 == 0) {
LAB_180013736:
            local_5c8 = 0;
LAB_180013739:
            uVar18 = local_5c8;
          }
          else if ((uVar16 != 1) && (uVar18 != 0)) {
            uVar6 = 0;
            uVar22 = 0;
            do {
              uVar15 = (ulonglong)local_5c4[uVar22] * (ulonglong)uVar16 + uVar6;
              local_5c4[uVar22] = (uint)uVar15;
              uVar6 = uVar15 >> 0x20;
              uVar25 = (int)uVar22 + 1;
              uVar22 = (ulonglong)uVar25;
            } while (uVar25 != uVar18);
            uVar16 = (uint)(uVar15 >> 0x20);
            uVar18 = local_5c8;
            if (uVar16 != 0) {
              if (0x72 < local_5c8) goto LAB_180013736;
              local_5c4[local_5c8] = uVar16;
              local_5c8 = local_5c8 + 1;
              goto LAB_180013739;
            }
          }
        }
      }
      pcVar21 = local_7a8;
      if (uVar23 != 0) {
        uVar6 = 0;
        uVar22 = 0;
        do {
          uVar15 = uVar6 + (ulonglong)*(uint *)((longlong)&local_794 + uVar22 * 4) * 10;
          *(int *)((longlong)&local_794 + uVar22 * 4) = (int)uVar15;
          uVar16 = (int)uVar22 + 1;
          uVar22 = (ulonglong)uVar16;
          uVar6 = uVar15 >> 0x20;
        } while (uVar16 != uVar23);
        iVar12 = (int)(uVar15 >> 0x20);
        if (iVar12 != 0) {
          if (local_798 < 0x73) {
            *(int *)((longlong)&local_794 + (ulonglong)local_798 * 4) = iVar12;
            local_798 = local_798 + 1;
          }
          else {
            local_798 = 0;
          }
        }
      }
      uVar6 = FUN_1800126e0(&local_798,&local_5c8);
      if ((int)uVar6 == 10) {
        uVar5 = uVar5 + 1;
        *pcVar21 = '1';
        pcVar17 = pcVar21 + 1;
        if (uVar18 != 0) {
          uVar6 = 0;
          uVar22 = 0;
          do {
            uVar15 = uVar6 + (ulonglong)local_5c4[uVar22] * 10;
            local_5c4[uVar22] = (uint)uVar15;
            uVar23 = (int)uVar22 + 1;
            uVar22 = (ulonglong)uVar23;
            uVar6 = uVar15 >> 0x20;
          } while (uVar23 != uVar18);
          uVar23 = (uint)(uVar15 >> 0x20);
          if (uVar23 != 0) {
            if (local_5c8 < 0x73) {
              local_5c4[local_5c8] = uVar23;
              local_5c8 = local_5c8 + 1;
            }
            else {
              local_5c8 = 0;
            }
          }
        }
      }
      else if ((int)uVar6 == 0) {
        uVar5 = uVar5 - 1;
        pcVar17 = pcVar21;
      }
      else {
        pcVar17 = pcVar21 + 1;
        *pcVar21 = (char)uVar6 + '0';
      }
      local_7a0[1] = uVar5;
      uVar23 = local_7ec;
      if (((-1 < (int)uVar5) && (local_7ec < 0x80000000)) && (local_7dc == 0)) {
        uVar23 = local_7ec + uVar5;
      }
      uVar6 = (ulonglong)uVar23;
      if (param_6 - 1U < (ulonglong)uVar23) {
        uVar6 = param_6 - 1U;
      }
      pcVar21 = pcVar21 + uVar6;
      bVar27 = false;
      while ((pcVar17 != pcVar21 && (local_798 != 0))) {
        uVar6 = 0;
        uVar22 = 0;
        do {
          uVar15 = (ulonglong)*(uint *)((longlong)&local_794 + uVar22 * 4) * 1000000000 + uVar6;
          *(int *)((longlong)&local_794 + uVar22 * 4) = (int)uVar15;
          uVar6 = uVar15 >> 0x20;
          uVar23 = (int)uVar22 + 1;
          uVar22 = (ulonglong)uVar23;
        } while (uVar23 != local_798);
        iVar12 = (int)(uVar15 >> 0x20);
        if (iVar12 != 0) {
          if (local_798 < 0x73) {
            *(int *)((longlong)&local_794 + (ulonglong)local_798 * 4) = iVar12;
            local_798 = local_798 + 1;
          }
          else {
            local_798 = 0;
          }
        }
        uVar6 = FUN_1800126e0(&local_798,&local_5c8);
        uVar23 = 8;
        do {
          uVar22 = (uVar6 & 0xffffffff) / 10;
          cVar11 = (char)uVar6 + (char)uVar22 * -10 + '0';
          if (uVar23 < (uint)((int)pcVar21 - (int)pcVar17)) {
            pcVar17[uVar23] = cVar11;
          }
          else if (cVar11 != '0') {
            bVar27 = true;
          }
          uVar23 = uVar23 - 1;
          uVar6 = uVar22;
        } while (uVar23 != 0xffffffff);
        lVar9 = (longlong)pcVar21 - (longlong)pcVar17;
        if (9 < lVar9) {
          lVar9 = 9;
        }
        pcVar17 = pcVar17 + lVar9;
      }
      *pcVar17 = '\0';
      if ((local_798 != 0) || (bVar27)) {
        uVar26 = 0;
      }
      local_7dc = 0;
      FUN_1800155d0(&local_7dc,local_7d0,local_7cc);
      goto LAB_180013d98;
    }
    param_4[1] = 0;
    pcVar21 = "0";
  }
  else {
    if (uVar6 != 0x7ff) goto LAB_180012d0e;
    if ((param_1 & 0xfffffffffffff) == 0) {
      uVar23 = 1;
    }
    else if (((longlong)param_1 < 0) && ((param_1 & 0xfffffffffffff) == 0x8000000000000)) {
      uVar23 = 4;
    }
    else {
      uVar23 = ~(uint)(param_1 >> 0x33) & 1 | 2;
    }
    param_4[1] = 1;
    if (uVar23 == 1) {
      uVar26 = FUN_18000b510(param_5,param_6,0x18001fea0);
      if ((int)uVar26 != 0) goto LAB_180013dd5;
      uVar26 = 0;
      goto LAB_180013d98;
    }
    if (uVar23 == 2) {
      pcVar21 = "1#QNAN";
    }
    else if (uVar23 == 3) {
      pcVar21 = "1#SNAN";
    }
    else {
      if (uVar23 != 4) goto LAB_180012d0e;
      pcVar21 = "1#IND";
    }
  }
  uVar7 = FUN_18000b510(param_5,param_6,(longlong)pcVar21);
  if ((int)uVar7 != 0) {
LAB_180013dd5:
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
LAB_180013d98:
  if (local_7b8 != '\0') {
    FUN_180015660((uint *)local_7c0);
  }
  return uVar26;
}


/* Address: 0x180013dec; Evidence: ev_74e34ad652b76a743cc0f62c073dcce839ca7e5e165ce96f38b5b9dc1c065020 */

/* Library Function - Single Match
    memcpy_s
   
   Libraries: Visual Studio 2015, Visual Studio 2017, Visual Studio 2019 */

errno_t __cdecl memcpy_s(void *_Dst,rsize_t _DstSize,void *_Src,rsize_t _MaxCount)

{
  __acrt_ptd *p_Var1;
  errno_t eVar2;
  
  if (_MaxCount == 0) {
LAB_180013e09:
    eVar2 = 0;
  }
  else {
    if (_Dst == (void *)0x0) {
LAB_180013e12:
      p_Var1 = FUN_18000b774();
      eVar2 = 0x16;
    }
    else {
      if ((_Src != (void *)0x0) && (_MaxCount <= _DstSize)) {
        FUN_180017e30(_Dst,_Src,_MaxCount);
        goto LAB_180013e09;
      }
      FUN_180017a70(_Dst,0,_DstSize);
      if (_Src == (void *)0x0) goto LAB_180013e12;
      if (_MaxCount <= _DstSize) {
        return 0x16;
      }
      p_Var1 = FUN_18000b774();
      eVar2 = 0x22;
    }
    *(errno_t *)p_Var1 = eVar2;
    FUN_18000821c();
  }
  return eVar2;
}


/* Address: 0x180013e80; Evidence: ev_fc28674d2b448fd6f21d1badbe3bbcb706e32bd8b5c784f24b8176d0504fe6f2 */

/* Library Function - Single Match
    fegetround
   
   Library: Visual Studio 2019 Release */

void fegetround(void)

{
  uint uVar1;
  
  uVar1 = FUN_180015dc0();
  FUN_180015db0(uVar1);
  return;
}


/* Address: 0x180013e94; Evidence: ev_4a38a97b81d62cf1ddf2c18b90993245344e7575c6e57a1f9c63da4742b456bd */

undefined8 FUN_180013e94(byte *param_1,uint param_2,undefined8 *param_3,longlong param_4)

{
  byte bVar1;
  undefined8 uVar2;
  byte bVar3;
  longlong lVar4;
  longlong lVar5;
  
  if (param_1 != (byte *)0x0) {
    if (param_2 != 0) {
      if ((param_2 & 0xffffff80) == 0) {
        *param_1 = (byte)param_2;
        return 1;
      }
      if ((param_2 & 0xfffff800) == 0) {
        lVar4 = 1;
        bVar3 = 0xc0;
        lVar5 = lVar4;
      }
      else if ((param_2 & 0xffff0000) == 0) {
        if (param_2 - 0xd800 < 0x800) {
LAB_180013f2b:
          uVar2 = FUN_180013f40(param_3,param_4);
          return uVar2;
        }
        lVar4 = 2;
        bVar3 = 0xe0;
        lVar5 = lVar4;
      }
      else {
        if (((param_2 & 0xffe00000) != 0) || (0x10ffff < param_2)) goto LAB_180013f2b;
        lVar4 = 3;
        bVar3 = 0xf0;
        lVar5 = lVar4;
      }
      do {
        bVar1 = (byte)param_2;
        param_2 = param_2 >> 6;
        param_1[lVar4] = bVar1 & 0x3f | 0x80;
        lVar4 = lVar4 + -1;
      } while (lVar4 != 0);
      *param_1 = bVar3 | (byte)param_2;
      uVar2 = FUN_180013f38(lVar5 + 1,param_3);
      return uVar2;
    }
    *param_1 = 0;
  }
  *param_3 = 0;
  return 1;
}


/* Address: 0x180013f38; Evidence: ev_aeafc1e8b3c8bce8109d89c0d286ddc3f1233032d52f1b972ebbd400822f646c */

undefined8 FUN_180013f38(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  return param_1;
}


/* Address: 0x180013f40; Evidence: ev_08795fc5b2eca137fe2047365ecd49427fef5acfb2e98be9c65e7c935fe43b7b */

undefined8 FUN_180013f40(undefined8 *param_1,longlong param_2)

{
  *param_1 = 0;
  *(undefined1 *)(param_2 + 0x30) = 1;
  *(undefined4 *)(param_2 + 0x2c) = 0x2a;
  return 0xffffffffffffffff;
}


/* Address: 0x180013f54; Evidence: ev_95c15fe7379dd03cc58b76dd19385c6d61e7067ee32df08ef2527df52183d1d2 */

bool FUN_180013f54(undefined1 param_1,FILE *param_2,longlong *param_3)

{
  uint *puVar1;
  uint uVar2;
  uint uVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  uint uVar7;
  bool bVar8;
  undefined1 local_res8 [8];
  
  local_res8[0] = param_1;
  uVar2 = _fileno(param_2);
  if (((ulonglong)param_2->_base & 0xc000000000) == 0) {
    iVar4 = FUN_180011d7c(uVar2,(undefined1 (*) [32])local_res8,1,param_3);
    bVar8 = iVar4 == 1;
  }
  else {
    uVar3 = 0;
    uVar7 = *(int *)&param_2->_ptr - param_2->_cnt;
    param_2->_ptr = **(undefined1 (**) [32])&param_2->_cnt + 1;
    *(int *)&param_2->_base = param_2->_charbuf + -1;
    if ((int)uVar7 < 1) {
      if (uVar2 + 2 < 2) {
        puVar6 = &DAT_180027320;
      }
      else {
        puVar6 = (undefined *)
                 ((&DAT_180028520)[(longlong)(int)uVar2 >> 6] + (ulonglong)(uVar2 & 0x3f) * 0x48);
      }
      if (((puVar6[0x38] & 0x20) != 0) &&
         (lVar5 = FUN_1800154e0(uVar2,(LARGE_INTEGER)0x0,2), lVar5 == -1)) {
        LOCK();
        puVar1 = (uint *)((longlong)&param_2->_base + 4);
        *puVar1 = *puVar1 | 0x10;
        UNLOCK();
        return true;
      }
    }
    else {
      uVar3 = FUN_180011d7c(uVar2,*(undefined1 (**) [32])&param_2->_cnt,uVar7,param_3);
    }
    bVar8 = uVar3 == uVar7;
    **(undefined1 **)&param_2->_cnt = local_res8[0];
  }
  return bVar8;
}


/* Address: 0x18001404c; Evidence: ev_8fcf70dbb7335ffd78b874224b2e90c67a5a8c1213fac495b921b9c1c156f692 */

bool FUN_18001404c(longlong *param_1)

{
  bool bVar1;
  BOOL BVar2;
  HANDLE hFile;
  LARGE_INTEGER local_res8;
  LARGE_INTEGER local_res10 [3];
  
  if ((*(uint *)((longlong)param_1 + 0x14) >> 3 & 1) == 0) {
    if ((((*(uint *)((longlong)param_1 + 0x14) & 0xc0) == 0) || (*param_1 != param_1[1])) &&
       (hFile = (HANDLE)FUN_180012478(*(uint *)(param_1 + 3)), hFile != (HANDLE)0xffffffffffffffff))
    {
      local_res10[0].QuadPart = 0;
      BVar2 = SetFilePointerEx(hFile,(LARGE_INTEGER)0x0,local_res10,1);
      if (BVar2 != 0) {
        local_res8.QuadPart = 0;
        BVar2 = GetFileSizeEx(hFile,&local_res8);
        if (BVar2 != 0) {
          return local_res10[0].QuadPart == local_res8.QuadPart;
        }
      }
    }
    bVar1 = false;
  }
  else {
    bVar1 = true;
  }
  return bVar1;
}


/* Address: 0x1800140d4; Evidence: ev_2be6034e49d8c452ccf9687f626e75107196a491b11db6c82fa3db5c21ac7559 */

ulonglong FUN_1800140d4(byte param_1,FILE *param_2,longlong *param_3)

{
  uint *puVar1;
  bool bVar2;
  undefined8 uVar3;
  
  _fileno(param_2);
  if (((ulonglong)param_2->_base & 0x600000000) == 0) {
    *(undefined4 *)((longlong)param_3 + 0x2c) = 9;
  }
  else {
    if ((*(uint *)((longlong)&param_2->_base + 4) >> 0xc & 1) == 0) {
      if (((ulonglong)param_2->_base & 0x100000000) != 0) {
        bVar2 = FUN_18001404c((longlong *)param_2);
        *(undefined4 *)&param_2->_base = 0;
        if (!bVar2) goto LAB_180014106;
        param_2->_ptr = *(char **)&param_2->_cnt;
        LOCK();
        puVar1 = (uint *)((longlong)&param_2->_base + 4);
        *puVar1 = *puVar1 & 0xfffffffe;
        UNLOCK();
      }
      LOCK();
      puVar1 = (uint *)((longlong)&param_2->_base + 4);
      *puVar1 = *puVar1 | 2;
      UNLOCK();
      LOCK();
      puVar1 = (uint *)((longlong)&param_2->_base + 4);
      *puVar1 = *puVar1 & 0xfffffff7;
      UNLOCK();
      *(undefined4 *)&param_2->_base = 0;
      if ((((ulonglong)param_2->_base & 0x4c000000000) == 0) &&
         (uVar3 = FUN_18000e63c(param_2), (char)uVar3 == '\0')) {
        __acrt_stdio_allocate_buffer_nolock(&param_2->_ptr);
      }
      bVar2 = FUN_180013f54(param_1,param_2,param_3);
      if (bVar2) {
        return (ulonglong)param_1;
      }
      goto LAB_180014106;
    }
    *(undefined4 *)((longlong)param_3 + 0x2c) = 0x22;
  }
  *(undefined1 *)(param_3 + 6) = 1;
LAB_180014106:
  LOCK();
  puVar1 = (uint *)((longlong)&param_2->_base + 4);
  *puVar1 = *puVar1 | 0x10;
  UNLOCK();
  return 0xffffffff;
}


/* Address: 0x1800141a0; Evidence: ev_f5cb6e6df4d9b9a617f13fc076940b581e044da31ca8fe60db3c03eb2b408c21 */

byte FUN_1800141a0(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180028920)) {
      return *(byte *)((&DAT_180028520)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000821c();
  }
  return 0;
}


/* Address: 0x180014200; Evidence: ev_4225dfa98317412079a9c2928454f8c071eeaf61a93902a1ae94cd984051b9fa */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180014200(undefined1 *param_1,ulonglong param_2,ulonglong param_3,undefined *param_4)

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
  
  local_58 = DAT_180027000 ^ (ulonglong)auStack_468;
  if ((((param_1 == (undefined1 *)0x0) && (param_2 != 0)) || (param_3 == 0)) ||
     (param_4 == (undefined *)0x0)) {
    p_Var3 = FUN_18000b774();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_18000821c();
  }
  else {
    FUN_180016110();
    FUN_180017a70((undefined1 (*) [32])local_438,0,0x1f0);
    FUN_180017a70((undefined1 (*) [32])local_248,0,0x1f0);
    if (1 < param_2) {
      local_448 = 0;
      puVar10 = param_1 + (param_2 - 1) * param_3;
LAB_1800142c0:
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
LAB_180014430:
        puVar4 = puVar7;
        if (puVar6 < puVar4) {
          do {
            puVar6 = puVar6 + param_3;
            if (puVar4 <= puVar6) goto LAB_180014450;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        else {
LAB_180014450:
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
          goto LAB_180014430;
        }
        if (puVar4 < puVar7) {
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= puVar4) goto LAB_1800144d7;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        else {
LAB_1800144d7:
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= param_1) break;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        if ((longlong)puVar7 - (longlong)param_1 < (longlong)puVar10 - (longlong)puVar6)
        goto LAB_18001452d;
        if (param_1 < puVar7) {
          local_438[local_448] = param_1;
          local_248[local_448] = puVar7;
          local_448 = local_448 + 1;
        }
        param_1 = puVar6;
        if (puVar10 <= puVar6) goto LAB_180014343;
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
      goto LAB_180014343;
    }
  }
  return;
LAB_18001452d:
  if (puVar6 < puVar10) {
    local_438[local_448] = puVar6;
    local_248[local_448] = puVar10;
    local_448 = local_448 + 1;
  }
  puVar10 = puVar7;
  if (puVar7 <= param_1) {
LAB_180014343:
    local_448 = local_448 + -1;
    if (local_448 < 0) {
      return;
    }
    param_1 = (undefined1 *)local_438[local_448];
    puVar10 = (undefined1 *)local_248[local_448];
  }
  goto LAB_1800142c0;
}


/* Address: 0x1800145a0; Evidence: ev_927127d65592fe40b3ff352f8ad05e85a328ea7cde07a197a8484cb4c7f3710b */

undefined4 FUN_1800145a0(char *param_1,longlong param_2,longlong param_3,longlong param_4)

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
      goto LAB_1800145f9;
    }
  }
  else if (param_1 == (char *)0x0) goto LAB_1800145f9;
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
      p_Var2 = FUN_18000b774();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000821c();
      return 0x22;
    }
    *param_1 = '\0';
  }
LAB_1800145f9:
  p_Var2 = FUN_18000b774();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000821c();
  return 0x16;
}


/* Address: 0x1800146d0; Evidence: ev_32a8bb22706973a1e8d7fdb12b5be8d1411f17d2e956087a099aadda739dc011 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

byte * FUN_1800146d0(byte *param_1,byte *param_2)

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


/* Address: 0x180014770; Evidence: ev_e9d1a9d8122d882a663dc7e09c6279f4ee7613b9d6d855208b249972b90c52b9 */

/* WARNING: Removing unreachable block (ram,0x000180014a0c) */
/* WARNING: Removing unreachable block (ram,0x000180014a05) */
/* WARNING: Removing unreachable block (ram,0x0001800149fe) */
/* WARNING: Removing unreachable block (ram,0x0001800149f7) */
/* WARNING: Removing unreachable block (ram,0x0001800149f0) */
/* WARNING: Removing unreachable block (ram,0x0001800149e9) */
/* WARNING: Removing unreachable block (ram,0x0001800149e2) */
/* WARNING: Removing unreachable block (ram,0x0001800149db) */
/* WARNING: Removing unreachable block (ram,0x0001800149d4) */
/* WARNING: Removing unreachable block (ram,0x0001800149cd) */
/* WARNING: Removing unreachable block (ram,0x0001800149c6) */
/* WARNING: Removing unreachable block (ram,0x0001800149bf) */
/* WARNING: Removing unreachable block (ram,0x0001800149b8) */
/* WARNING: Removing unreachable block (ram,0x0001800149b1) */
/* WARNING: Removing unreachable block (ram,0x0001800149aa) */
/* WARNING: Removing unreachable block (ram,0x00018001486d) */
/* WARNING: Removing unreachable block (ram,0x00018001487c) */
/* WARNING: Removing unreachable block (ram,0x00018001488b) */
/* WARNING: Removing unreachable block (ram,0x00018001489a) */
/* WARNING: Removing unreachable block (ram,0x0001800148a9) */
/* WARNING: Removing unreachable block (ram,0x0001800148b5) */
/* WARNING: Removing unreachable block (ram,0x0001800148c1) */
/* WARNING: Removing unreachable block (ram,0x0001800148cd) */
/* WARNING: Removing unreachable block (ram,0x0001800148d9) */
/* WARNING: Removing unreachable block (ram,0x0001800148e5) */
/* WARNING: Removing unreachable block (ram,0x0001800148f1) */
/* WARNING: Removing unreachable block (ram,0x0001800148fd) */
/* WARNING: Removing unreachable block (ram,0x000180014909) */
/* WARNING: Removing unreachable block (ram,0x000180014915) */
/* WARNING: Removing unreachable block (ram,0x000180014921) */

byte * FUN_180014770(byte *param_1,byte *param_2)

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
        pbVar19 = FUN_1800146d0(param_1,param_2);
        return pbVar19;
      }
      goto LAB_180014a19;
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
    if (uVar21 == 0 || (ulonglong)uVar2 < 0x10 - uVar21) goto LAB_180014a19;
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
LAB_180014a19:
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
  pbVar19 = FUN_1800146d0(param_1,param_2);
  return pbVar19;
}


/* Address: 0x180014b28; Evidence: ev_b20cf1365768abade2cf633b3325d4e1a4c81647157db959a6e2d0c750815c81 */

void FUN_180014b28(uchar *param_1,uchar *param_2)

{
  _mbsdec_l(param_1,param_2,(_locale_t)0x0);
  return;
}


/* Address: 0x180014b30; Evidence: ev_e61ff9a464019e2db272d55133abe9386caf46657941570168ef2851bd65e5b3 */

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
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000821c();
  }
  else if (_Start < _Pos) {
    FUN_180007bb0(local_28,(longlong *)_Locale);
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


/* Address: 0x180014bc4; Evidence: ev_2ce1626b48067d75b425c18bc3562626029bf17066a19f3a6b623cf806c7727b */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180014bc4(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
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
  local_30 = DAT_180027000 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_180010188(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar9 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_180014ecf;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_180014eb5:
    uVar5 = 0;
    if (pWVar9 != (LPCWSTR)0x0) goto LAB_180014ebc;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_180014eb5;
      *puVar6 = 0xcccc;
LAB_180014cd0:
      pWVar9 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar9 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_180014cd0;
      }
    }
    if (pWVar9 == (LPCWSTR)0x0) goto LAB_180014eb5;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
    *(undefined8 *)(puVar12 + -8) = 0x180014cfa;
    iVar2 = FUN_180010188(param_8,1);
    if (iVar2 == 0) goto LAB_180014eb5;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x180014d2d;
    iVar2 = FUN_18000c2d8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    puVar6 = (undefined4 *)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_180014eb5;
    if ((param_3 & 0x400) == 0) {
      uVar8 = uVar5 * 2 + 0x10;
      uVar8 = -(ulonglong)(uVar5 * 2 < uVar8) & uVar8;
      if (uVar8 == 0) goto LAB_180014e98;
      if (uVar8 < 0x401) {
        uVar5 = uVar8 + 0xf;
        if (uVar5 <= uVar8) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x180014dd0;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar7 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xcccc;
          puVar12 = puVar11;
LAB_180014dfe:
          puVar6 = puVar7 + 4;
          goto LAB_180014e02;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x180014dee;
        puVar7 = _malloc_base(uVar8);
        puVar6 = (undefined4 *)0x0;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xdddd;
          goto LAB_180014dfe;
        }
LAB_180014e02:
        if (puVar6 != (undefined4 *)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(undefined4 **)(puVar12 + 0x20) = puVar6;
          *(undefined8 *)(puVar12 + -8) = 0x180014e34;
          iVar4 = FUN_18000c2d8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x180014e62;
              uVar3 = FUN_180010218(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_180014e98;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x180014e7c;
              uVar3 = FUN_180010218(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_180014e9d;
            }
            uVar5 = (ulonglong)uVar3;
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180014e93;
              FUN_18000bff0(puVar6 + -4);
            }
            goto LAB_180014ebc;
          }
LAB_180014e98:
          if (puVar6 != (undefined4 *)0x0) {
LAB_180014e9d:
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x180014eae;
              FUN_18000bff0(puVar6 + -4);
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
        *(undefined8 *)(puVar12 + -8) = 0x180014d85;
        uVar3 = FUN_18000c2d8(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_180014ebc;
      }
      goto LAB_180014eb5;
    }
LAB_180014ebc:
    if (*(int *)(pWVar9 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x180014ecd;
      FUN_18000bff0(pWVar9 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_180014ecf:
  *(undefined8 *)(puVar13 + -8) = 0x180014edb;
  return uVar5;
}


/* Address: 0x180014ef8; Evidence: ev_fabcc3471ea5561151e17e259b9abaaf36ad3a6bf2ba1d68ec13f699101295bf */

/* Library Function - Single Match
    __acrt_LCMapStringA
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_LCMapStringA(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                        undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong local_28;
  longlong local_20 [2];
  char local_10;
  
  FUN_180007bb0(&local_28,param_1);
  FUN_180014bc4(local_20,param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return;
}


/* Address: 0x180014f90; Evidence: ev_cbca48406f27c14dec6f72efbdeec85d564b6ac489181dcac400334c8f642275 */

uint FUN_180014f90(void)

{
  undefined8 uVar1;
  
  uVar1 = __acrt_initialize_multibyte();
  return (uint)uVar1 & 0xff ^ 1;
}


/* Address: 0x180014fb0; Evidence: ev_7382fad499e2bdd4f6f6215fb9e655032a1887fe88f107aa66eceb1696ec99e3 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  __acrt_ptd *p_Var1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000821c();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x000180014fe2. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_180028c10,0,param_1);
  return uVar2;
}


/* Address: 0x180015000; Evidence: ev_1b40b52eebd69b776da5efb5fb044b4a787a766d4302fdfc60a5a82d5e4520cd */

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
      FUN_18000bff0(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_180028c10,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_180011190();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_18000a5b0(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      p_Var4 = FUN_18000b774();
      *(undefined4 *)p_Var4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x180015080; Evidence: ev_cdbdac2a6220dd442b5dc9c5d5fec841b182d584fea6d4e7768258baa8565afc */

int FUN_180015080(ushort *param_1,ushort *param_2,longlong param_3)

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


/* Address: 0x1800150e8; Evidence: ev_dbfe8b288023f1f44c35b9ea089711ed99cb868f93565f5761047982db52d069 */

ulonglong FUN_1800150e8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_18001236c(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_180028520)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_180015224(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_180012394(*param_4);
  return uVar3;
}


/* Address: 0x180015160; Evidence: ev_7fdddc6b8425d6f614be500c919293b904d4e6c9a325c18197b56a0bb945aa38 */

ulonglong FUN_180015160(uint param_1,longlong *param_2)

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
    if (((-1 < (int)param_1) && (param_1 < DAT_180028920)) &&
       ((*(byte *)((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 +
                  (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0)) {
      local_20 = local_res8;
      local_res20[0] = param_1;
      local_28[0] = param_1;
      local_18 = param_2;
      uVar1 = FUN_1800150e8(local_res18,local_28,&local_20,local_res20);
      return uVar1;
    }
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  return 0xffffffff;
}


/* Address: 0x180015224; Evidence: ev_89f4bca04ecf68342e1bc517bdaa8bd3adc339daead756676f15eae142ea7b98 */

undefined8 FUN_180015224(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_180012478(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_180028520 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_180028520 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_180012478(2);
      lVar4 = FUN_180012478(1);
      if (lVar4 == lVar3) goto LAB_180015246;
    }
    hObject = (HANDLE)FUN_180012478(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_1800152a4;
    }
  }
LAB_180015246:
  DVar2 = 0;
LAB_1800152a4:
  FUN_1800123bc(param_1);
  *(undefined1 *)
   ((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_18000b72c(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}


/* Address: 0x1800152f4; Evidence: ev_0cd264bc3814db15599cda1d89ce08f4377f0fea23f64b495f70c3ac7a2e327e */

undefined4 FUN_1800152f4(undefined8 *param_1)

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


/* Address: 0x180015310; Evidence: ev_b321c2152fe2fcc92955c729477fbd11071335b1e16c206ffd75a79e2aeb5d48 */

longlong FUN_180015310(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong *param_4)

{
  bool bVar1;
  longlong lVar2;
  
  if (param_1 == 0xfffffffe) {
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
  }
  else {
    if (((int)param_1 < 0) || (DAT_180028920 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_18001236c(param_1);
        lVar2 = -1;
        if ((*(byte *)((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          lVar2 = FUN_180015430(param_1,param_2,param_3,(longlong)param_4);
        }
        FUN_180012394(param_1);
        return lVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x180015430; Evidence: ev_29ab089b277287396b883508ad6d998f7651774d3dddac1cb523e22829d9f77b */

longlong FUN_180015430(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER local_18 [2];
  
  hFile = (HANDLE)FUN_180012478(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    local_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,local_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000b72c(DVar3,param_4);
    }
    else if (local_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)local_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x1800154e0; Evidence: ev_45c2d8335f401f1c35e2c7b4187e7f70f53803e919956ecd6d0200d0e19b8afb */

longlong FUN_1800154e0(uint param_1,LARGE_INTEGER param_2,DWORD param_3)

{
  longlong lVar1;
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
  local_20 = DAT_18002844c == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_180027308;
    puStack_28 = PTR_DAT_180027310;
  }
  lVar1 = FUN_180015310(param_1,param_2,param_3,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_180007e30(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return lVar1;
}


/* Address: 0x18001557c; Evidence: ev_f8de97a5bc2b70a8f4aacffe9fa4239987c7d3c7c466ba6093221c3da55d84aa */

longlong thunk_FUN_180015430(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER aLStack_18 [2];
  
  hFile = (HANDLE)FUN_180012478(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    aLStack_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,aLStack_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_18000b72c(DVar3,param_4);
    }
    else if (aLStack_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_180028520)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)aLStack_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x180015584; Evidence: ev_6c03fb50b264f3aacf093317faaedf96f112742db7aa2d0c60558773e78938a0 */

undefined2 FUN_180015584(undefined2 param_1)

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


/* Address: 0x1800155c4; Evidence: ev_fd7c7516a775ba1447967655b4d4270a94e41be7c4f3a25a4dc862fa6b2ef8fc */

undefined4 FUN_1800155c4(void)

{
  return DAT_180028c4c;
}


/* Address: 0x1800155d0; Evidence: ev_75d174da5c74c25a6f8a4c293032982289fc0615c4d285dbe59e5ddd5a56c80f */

undefined8 FUN_1800155d0(uint *param_1,uint param_2,uint param_3)

{
  __acrt_ptd *p_Var1;
  uint uVar2;
  
  uVar2 = param_3 & 0xfff7ffff;
  if ((param_2 & uVar2 & 0xfcf0fce0) != 0) {
    if (param_1 != (uint *)0x0) {
      uVar2 = thunk_FUN_180016300(0,0);
      *param_1 = uVar2;
    }
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000821c();
    return 0x16;
  }
  if (param_1 != (uint *)0x0) {
    uVar2 = thunk_FUN_180016300(param_2,uVar2);
    *param_1 = uVar2;
    return 0;
  }
  thunk_FUN_180016300(param_2,uVar2);
  return 0;
}


/* Address: 0x180015640; Evidence: ev_3d73a00413f2a50e780834c2bd11a726efecf1324637bdf4c22c483ed2181f8d */

undefined8 FUN_180015640(uint *param_1)

{
  uint uVar1;
  
  uVar1 = FUN_180015dc0();
  *param_1 = uVar1;
  uVar1 = FUN_180015ea0();
  param_1[1] = uVar1;
  return 0;
}


/* Address: 0x180015660; Evidence: ev_2b502e1aa0bc4e5d1db2360c6aeabc8dac60d0ef2aca2b69dfd320809e5399f7 */

bool FUN_180015660(uint *param_1)

{
  undefined8 uVar1;
  uint local_res8 [2];
  
  FUN_180015f00(*param_1);
  FUN_180016030(param_1[1]);
  local_res8[0] = 0;
  local_res8[1] = 0;
  uVar1 = FUN_180015640(local_res8);
  if (((int)uVar1 == 0) && (*param_1 == local_res8[0])) {
    return param_1[1] != local_res8[1];
  }
  return true;
}


/* Address: 0x1800156d0; Evidence: ev_1d7fedc652a67a3f4ee81aea275c264d5c7a825b64c1ab8ba3a88aea369113ae */

undefined8 FUN_1800156d0(ulonglong *param_1)

{
  ulonglong uVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined7 extraout_var;
  ulonglong local_res10 [3];
  
  local_res10[0] = 0;
  uVar3 = FUN_180015640((uint *)local_res10);
  uVar1 = local_res10[0];
  if ((int)uVar3 == 0) {
    local_res10[0] = local_res10[0] | 0x1f;
    *param_1 = uVar1;
    bVar2 = FUN_180015660((uint *)local_res10);
    if ((int)CONCAT71(extraout_var,bVar2) == 0) {
      FUN_180016280();
      return 0;
    }
  }
  return 1;
}


/* Address: 0x180015730; Evidence: ev_2c142cd20e84cf38e595d71290c780938d81d957ca757082509d7803a336ddfb */

double FUN_180015730(void)

{
  double dVar1;
  double dVar2;
  ulonglong uVar3;
  double dVar4;
  undefined1 in_XMM0 [16];
  undefined1 auVar5 [16];
  
  dVar4 = in_XMM0._0_8_;
  if (1 < DAT_180027058) {
    auVar5 = roundsd(in_XMM0,in_XMM0,10);
    return auVar5._0_8_;
  }
  dVar1 = ABS(dVar4);
  uVar3 = (ulonglong)dVar1 >> 0x34;
  dVar2 = dVar4;
  if (uVar3 < 0x433) {
    if (uVar3 < 0x3ff) {
      if (dVar1 != 0.0) {
        if (dVar4 != dVar1) {
          return -0.0;
        }
        return 1.0;
      }
    }
    else {
      dVar2 = (double)(~((1L << (0x33U - (char)uVar3 & 0x3f)) - 1U) & (ulonglong)dVar4);
      if ((dVar4 == dVar1) && (dVar2 != dVar4)) {
        dVar2 = dVar2 + 1.0;
      }
    }
  }
  else if (0x7ff0000000000000 < (ulonglong)dVar1) {
    dVar4 = (double)FUN_1800167f0((ulonglong)dVar4);
    return dVar4;
  }
  return dVar2;
}


/* Address: 0x180015800; Evidence: ev_4b929d9d5a54d1675e2697be33d2952347b9f10151243384368c3ae2f059aebc */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

double FUN_180015800(void)

{
  ulonglong uVar1;
  ulonglong uVar2;
  double dVar3;
  undefined1 auVar4 [16];
  undefined1 in_ZMM0 [64];
  double dVar5;
  double dVar6;
  double dVar7;
  double dVar8;
  undefined1 auVar9 [16];
  undefined1 auVar10 [16];
  undefined1 auVar11 [16];
  double dVar12;
  
  dVar3 = in_ZMM0._0_8_;
  auVar4 = in_ZMM0._0_16_;
  if (DAT_180028c50 == 0) {
    if ((double)((ulonglong)dVar3 & 0x7ff0000000000000) == INFINITY) {
      if (dVar3 == INFINITY) {
        return INFINITY;
      }
      if (dVar3 != -INFINITY) {
        return (double)((ulonglong)dVar3 | 0x8000000000000);
      }
    }
    else {
      dVar12 = (double)(int)(((ulonglong)dVar3 >> 0x34) - 0x3ff);
      if (0.0 < dVar3) {
        dVar6 = (double)((ulonglong)dVar3 & (ulonglong)DAT_18001ff30);
        dVar5 = dVar3;
        if (dVar12 == -1023.0) {
          dVar12 = (double)((ulonglong)dVar6 | DAT_18001ffc0) - 1.0;
          dVar5 = (double)((ulonglong)dVar12 & (ulonglong)DAT_18001ff30);
          dVar12 = (double)(int)((uint)((ulonglong)dVar12 >> 0x34) - 0x7fd);
          dVar6 = dVar5;
        }
        uVar1 = ((ulonglong)dVar5 & 0xff00000000000) + ((ulonglong)dVar5 & 0x80000000000) * 2;
        if (ABS(dVar3 - 1.0) < 0.0625) {
          dVar3 = dVar3 - 1.0;
          dVar12 = dVar3 / (dVar3 + 2.0);
          dVar5 = dVar12 + dVar12;
          dVar6 = dVar5 * dVar5;
          dVar7 = dVar6 * dVar5;
          dVar8 = (double)((ulonglong)dVar3 & (ulonglong)DAT_180020100);
          dVar3 = (((dVar6 * 0.012500000003771751 + 0.08333333333333179) * dVar7 +
                   (dVar6 * 0.0004348877777076146 + 0.0022321399879194482) * dVar7 * dVar7 * dVar5)
                  - dVar3 * dVar12) + (dVar3 - dVar8);
          return dVar8 * 7.349550096401511e-07 + dVar3 * 7.349550096401511e-07 +
                 dVar3 * 0.4342937469482422 + dVar8 * 0.4342937469482422;
        }
        uVar2 = uVar1 >> 0x2c;
        dVar5 = ((double)(uVar1 | DAT_18001ffd0) - (double)((ulonglong)dVar6 | DAT_18001ffd0)) *
                *(double *)(&DAT_180021190 + uVar2 * 8);
        dVar3 = dVar5 * dVar5;
        return *(double *)(&DAT_180020170 + uVar2 * 8) + dVar12 * 0.3010299950838089 +
               *(double *)(&DAT_180020980 + uVar2 * 8) +
               (dVar12 * 5.801722962879576e-10 -
               ((dVar5 * 0.3333333333333333 + 0.5) * dVar3 + dVar5 +
               ((dVar5 * 0.16666666666666666 + 0.2) * dVar5 + 0.25) * dVar3 * dVar3) *
               0.4342944819032518);
      }
      if (dVar3 == 0.0) {
        dVar3 = (double)FUN_1800168e0(dVar3,0xfff0000000000000,1);
        return dVar3;
      }
    }
    dVar3 = (double)FUN_1800168e0(dVar3,0xfff8000000000000,2);
                    /* WARNING: Read-only address (ram,0x00018001fee0) is written */
                    /* WARNING: Read-only address (ram,0x00018001ff10) is written */
                    /* WARNING: Read-only address (ram,0x00018001ff30) is written */
                    /* WARNING: Read-only address (ram,0x00018001ff40) is written */
                    /* WARNING: Read-only address (ram,0x00018001ff50) is written */
                    /* WARNING: Read-only address (ram,0x00018001ffc0) is written */
                    /* WARNING: Read-only address (ram,0x00018001ffd0) is written */
                    /* WARNING: Read-only address (ram,0x000180020060) is written */
                    /* WARNING: Read-only address (ram,0x0001800200b0) is written */
                    /* WARNING: Read-only address (ram,0x000180020100) is written */
    return dVar3;
  }
  auVar9 = vpsrlq_avx(auVar4,0x34);
  auVar9 = vpsubq_avx(auVar9,_DAT_18001ff10);
  auVar9 = vcvtdq2pd_avx(auVar9);
  dVar12 = auVar9._0_8_;
  auVar9 = vpand_avx(auVar4,_DAT_18001fee0);
  if (auVar9._0_8_ == INFINITY) {
    if (dVar3 != INFINITY) {
      if (dVar3 == -INFINITY) goto LAB_180015d50;
      dVar3 = (double)FUN_1800168e0(dVar3,(ulonglong)dVar3 | 0x8000000000000,3);
    }
    return dVar3;
  }
  if (0.0 < dVar3) {
    auVar9 = vpand_avx(auVar4,_DAT_18001ff30);
    if (dVar12 == -1023.0) {
      auVar4 = vpor_avx(auVar9,_DAT_18001ffc0);
      auVar9._8_8_ = 0;
      auVar9._0_8_ = auVar4._0_8_ - 1.0;
      auVar11 = vpsrlq_avx(auVar9,0x34);
      auVar4 = vpand_avx(auVar9,_DAT_18001ff30);
      auVar9 = vpsubd_avx(auVar11,_DAT_180020060);
      auVar9 = vcvtdq2pd_avx(auVar9);
      dVar12 = auVar9._0_8_;
      auVar9 = auVar4;
    }
    auVar11 = vpand_avx(auVar4,_DAT_18001ff40);
    auVar10 = vpand_avx(auVar4,_DAT_18001ff50);
    auVar10 = vpsllq_avx(auVar10,1);
    auVar11 = vpaddq_avx(auVar10,auVar11);
    auVar10._8_8_ = 0;
    auVar10._0_8_ = dVar3 - 1.0;
    auVar10 = vpand_avx(auVar10,_DAT_1800200b0);
    if (auVar10._0_8_ < 0.0625) {
      dVar6 = auVar4._0_8_ - 1.0;
      dVar7 = dVar6 / (dVar6 + 2.0);
      dVar3 = dVar7 + dVar7;
      dVar12 = dVar3 * dVar3;
      dVar5 = dVar12 * dVar3;
      auVar4._8_8_ = 0;
      auVar4._0_8_ = dVar6;
      auVar4 = vpand_avx(auVar4,_DAT_180020100);
      dVar8 = auVar4._0_8_;
      dVar3 = (((dVar12 * 0.012500000003771751 + 0.08333333333333179) * dVar5 +
               (dVar12 * 0.0004348877777076146 + 0.0022321399879194482) * dVar5 * dVar5 * dVar3) -
              dVar6 * dVar7) + (dVar6 - dVar8);
      return dVar8 * 7.349550096401511e-07 + dVar3 * 7.349550096401511e-07 +
             dVar3 * 0.4342937469482422 + dVar8 * 0.4342937469482422;
    }
    uVar1 = auVar11._0_8_ >> 0x2c;
    auVar4 = vpor_avx(auVar9,_DAT_18001ffd0);
    auVar9 = vpor_avx(auVar11,_DAT_18001ffd0);
    dVar3 = (auVar9._0_8_ - auVar4._0_8_) * *(double *)(&DAT_180021190 + uVar1 * 8);
    dVar5 = dVar3 * dVar3;
    return dVar12 * 0.3010299950838089 + *(double *)(&DAT_180020170 + uVar1 * 8) +
           *(double *)(&DAT_180020980 + uVar1 * 8) +
           (dVar12 * 5.801722962879576e-10 -
           ((dVar3 * (dVar3 * 0.16666666666666666 + 0.2) + 0.25) * dVar5 * dVar5 +
           (dVar3 * 0.3333333333333333 + 0.5) * dVar5 + dVar3) * 0.4342944819032518);
  }
  if (dVar3 == 0.0) {
    dVar3 = (double)FUN_1800168e0(dVar3,0xfff0000000000000,1);
    return dVar3;
  }
LAB_180015d50:
  dVar3 = (double)FUN_1800168e0(dVar3,0xfff8000000000000,2);
  return dVar3;
}


/* Address: 0x180015db0; Evidence: ev_1dc83bd963f903bbc63800a0ce7e0b4ffc743439e8dd22d51d3505308d2f827b */

uint FUN_180015db0(uint param_1)

{
  return param_1 & 0x300;
}


/* Address: 0x180015dc0; Evidence: ev_5001d70189edaa61da115a6a24a87c24211631694b97ae0439d93fc453c14500 */

uint FUN_180015dc0(void)

{
  ushort uVar1;
  uint uVar2;
  uint uVar3;
  uint uVar4;
  
  uVar1 = (ushort)MXCSR & 0x8040;
  if (uVar1 == 0x8000) {
    uVar4 = 0xc00;
  }
  else if (uVar1 == 0x40) {
    uVar4 = 0x800;
  }
  else {
    uVar4 = 0;
    if (uVar1 == 0x8040) {
      uVar4 = 0x400;
    }
  }
  uVar2 = MXCSR & 0x6000;
  if (uVar2 == 0) {
    uVar3 = 0;
  }
  else if (uVar2 == 0x2000) {
    uVar3 = 0x100;
  }
  else if (uVar2 == 0x4000) {
    uVar3 = 0x200;
  }
  else {
    uVar3 = 0x300;
    if (uVar2 != 0x6000) {
      uVar3 = 0;
    }
  }
  uVar4 = ((((MXCSR >> 2 & 0x400 | MXCSR & 0x800) >> 2 | MXCSR & 0x400) >> 2 | MXCSR & 0x200) >> 3 |
          MXCSR & 0x180) >> 3 | uVar4 | uVar3;
  return (uVar3 | uVar4 * 4) << 0x16 | uVar4;
}


/* Address: 0x180015ea0; Evidence: ev_1cd62041123241b1899e8a7de414aca386f4e06debf2e8edd5c7fa7b94e61760 */

uint FUN_180015ea0(void)

{
  uint uVar1;
  
  uVar1 = (((MXCSR & 0x3f) >> 2 & 8 | MXCSR & 0x10) >> 2 | MXCSR & 8) >> 1 |
          ((MXCSR & 2) << 3 | MXCSR & 4) * 2 | (MXCSR & 1) << 4;
  return uVar1 << 0x18 | uVar1;
}


/* Address: 0x180015f00; Evidence: ev_b8fc252659aa6664ae85e613875d5ca1c9583dc2cfe340394e9788d3e7d2b821 */

void FUN_180015f00(uint param_1)

{
  ushort uVar1;
  uint uVar2;
  ushort uVar3;
  uint uVar4;
  uint uVar5;
  ushort uVar6;
  ushort uVar7;
  ushort uVar8;
  ushort uVar9;
  ushort uVar10;
  ushort uVar11;
  
  uVar5 = param_1 >> 0x18;
  uVar2 = param_1 >> 0x16 & 0x300;
  uVar4 = param_1 & 0xc00;
  uVar9 = 0;
  uVar7 = 0x400;
  uVar11 = 0x800;
  if (uVar4 == 0x400) {
    uVar9 = 0x8040;
  }
  else if (uVar4 == 0x800) {
    uVar9 = 0x40;
  }
  else if (uVar4 == 0xc00) {
    uVar9 = 0x8000;
  }
  uVar6 = 0x100;
  uVar10 = 0x200;
  if (uVar2 != 0) {
    if (uVar2 == 0x100) {
      uVar8 = 0x2000;
      goto LAB_180015f9f;
    }
    if (uVar2 == 0x200) {
      uVar8 = 0x4000;
      goto LAB_180015f9f;
    }
    if (uVar2 == 0x300) {
      uVar8 = 0x6000;
      goto LAB_180015f9f;
    }
  }
  uVar8 = 0;
LAB_180015f9f:
  if ((uVar5 & 1) == 0) {
    uVar3 = 0;
  }
  else {
    uVar3 = 0x1000;
  }
  if ((uVar5 & 2) == 0) {
    uVar11 = 0;
  }
  if ((uVar5 & 4) == 0) {
    uVar7 = 0;
  }
  if ((uVar5 & 8) == 0) {
    uVar10 = 0;
  }
  if ((uVar5 & 0x10) == 0) {
    uVar1 = 0;
  }
  else {
    uVar1 = 0x80;
  }
  if ((uVar5 & 0x20) == 0) {
    uVar6 = 0;
  }
  MXCSR = MXCSR & 0xffff003f |
          (uint)(ushort)(uVar8 | uVar3 | uVar11 | uVar7 | uVar10 | uVar1 | uVar6 | uVar9);
  return;
}


/* Address: 0x180016030; Evidence: ev_8e33df72fe05901b7310431bb6feea267df260cef18180c6f8549cac36241552 */

void FUN_180016030(uint param_1)

{
  uint uVar1;
  uint uVar2;
  bool bVar3;
  
  uVar2 = param_1 >> 0x18;
  bVar3 = ((uVar2 & 0x3f) >> 4 & 1) != 0;
  uVar1 = (uint)bVar3;
  MXCSR = MXCSR & 0xffffffc0 |
          -(uint)((uVar2 & 1) != 0) & 0x20 | -(uint)((uVar2 & 2) != 0) & 0x10 |
          -(uint)((uVar2 & 4) != 0) & 8 | -(uint)((uVar2 & 8) != 0) & 4 | uVar1 |
          (uVar1 - bVar3) - (uint)((uVar2 & 0x20) != 0) & 2;
  return;
}


/* Address: 0x1800160a4; Evidence: ev_b68ff09372585d0764f2460d65a2212f70cd4005e120e204aee3e5f041ae034d */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __acrt_stdio_allocate_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_allocate_buffer_nolock(undefined8 *param_1)

{
  LPVOID pvVar1;
  undefined4 uVar2;
  
  _DAT_1800282c0 = _DAT_1800282c0 + 1;
  uVar2 = 0x1000;
  pvVar1 = _calloc_base(0x1000,1);
  param_1[1] = pvVar1;
  FUN_18000bff0((LPVOID)0x0);
  if (param_1[1] == 0) {
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) | 0x400;
    UNLOCK();
    uVar2 = 2;
    param_1[1] = (longlong)param_1 + 0x1c;
  }
  else {
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) | 0x40;
    UNLOCK();
  }
  *(undefined4 *)(param_1 + 4) = uVar2;
  *(undefined4 *)(param_1 + 2) = 0;
  *param_1 = param_1[1];
  return;
}


/* Address: 0x180016110; Evidence: ev_bb2840a549e61e6ea375ad8d092a4ceeb77729a18c2c89abcf377d38c1251f34 */

void FUN_180016110(void)

{
  _guard_check_icall();
  return;
}


/* Address: 0x180016130; Evidence: ev_c1f92216d595940299b5cf08fe9e6e4e517c7995558778c1c7c6b7148a525926 */

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


/* Address: 0x180016148; Evidence: ev_a2b0902dac8f5edbb52fa0f3a3772b37e1230bf85489988a21807c4b04ec310c */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180027a60 == (HANDLE)0xfffffffffffffffe) {
    DAT_180027a60 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180027a60 != (HANDLE)0xffffffffffffffff;
}


/* Address: 0x1800161a0; Evidence: ev_16bbba5763ae8d1b1b0a2e67cfe5614c3e9eb7025f0ad88418a76b7e997c7474 */

void FUN_1800161a0(void)

{
  if (DAT_180027a60 < (HANDLE)0xfffffffffffffffe) {
    CloseHandle(DAT_180027a60);
  }
  return;
}


/* Address: 0x1800161bc; Evidence: ev_4cdff7af28aeebaf575bca47d361d9eea4da9c1700a63ac783033915821e3988 */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180027a60,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180027a60 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180027a60);
      }
      DAT_180027a60 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180027a60,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}


/* Address: 0x180016280; Evidence: ev_acca1c0cf75a843c165c10b28274e703b872e75d2fc8c216ca1262a16a0321b2 */

uint FUN_180016280(void)

{
  uint uVar1;
  uint uVar2;
  uint uVar3;
  uint uVar4;
  
  uVar2 = FUN_1800169a0();
  if ((uVar2 & 0x3f) == 0) {
    uVar3 = 0;
  }
  else {
    uVar4 = (uVar2 & 1) << 4;
    uVar3 = uVar4 | 8;
    if ((uVar2 & 4) == 0) {
      uVar3 = uVar4;
    }
    uVar4 = uVar3 | 4;
    if ((uVar2 & 8) == 0) {
      uVar4 = uVar3;
    }
    uVar1 = uVar4 | 2;
    if ((uVar2 & 0x10) == 0) {
      uVar1 = uVar4;
    }
    uVar3 = uVar1 | 1;
    if ((uVar2 & 0x20) == 0) {
      uVar3 = uVar1;
    }
    if ((uVar2 & 2) != 0) {
      return uVar3 | 0x80000;
    }
  }
  return uVar3;
}


/* Address: 0x1800162f0; Evidence: ev_c2b467ab2e7ce4e55aec3efa42e18da22842291359dbceb2e5ac0fe4c85a497b */

uint thunk_FUN_180016300(uint param_1,uint param_2)

{
  uint uVar1;
  uint uVar2;
  ulonglong uVar3;
  uint uVar4;
  
  uVar1 = FUN_180016a40();
  uVar4 = uVar1 >> 3 & 0x10;
  uVar2 = uVar4 | 8;
  if ((uVar1 >> 9 & 1) == 0) {
    uVar2 = uVar4;
  }
  uVar4 = uVar2 | 4;
  if ((uVar1 >> 10 & 1) == 0) {
    uVar4 = uVar2;
  }
  uVar2 = uVar4 | 2;
  if ((uVar1 >> 0xb & 1) == 0) {
    uVar2 = uVar4;
  }
  uVar4 = uVar2 | 1;
  if ((uVar1 >> 0xc & 1) == 0) {
    uVar4 = uVar2;
  }
  uVar2 = uVar4 | 0x80000;
  if ((uVar1 >> 8 & 1) == 0) {
    uVar2 = uVar4;
  }
  uVar4 = uVar1 & 0x6000;
  if (uVar4 != 0) {
    if (uVar4 == 0x2000) {
      uVar2 = uVar2 | 0x100;
    }
    else if (uVar4 == 0x4000) {
      uVar2 = uVar2 | 0x200;
    }
    else if (uVar4 == 0x6000) {
      uVar2 = uVar2 | 0x300;
    }
  }
  uVar1 = uVar1 & 0x8040;
  if (uVar1 == 0x40) {
    uVar2 = uVar2 | 0x2000000;
  }
  else if (uVar1 == 0x8000) {
    uVar2 = uVar2 | 0x3000000;
  }
  else if (uVar1 == 0x8040) {
    uVar2 = uVar2 | 0x1000000;
  }
  uVar1 = ~(param_2 & 0x308031f) & uVar2 | param_1 & param_2 & 0x308031f;
  if (uVar1 != uVar2) {
    uVar4 = (uVar1 & 0x10) << 3;
    uVar2 = uVar4 | 0x200;
    if ((uVar1 & 8) == 0) {
      uVar2 = uVar4;
    }
    uVar4 = uVar2 | 0x400;
    if ((uVar1 & 4) == 0) {
      uVar4 = uVar2;
    }
    uVar2 = uVar4 | 0x800;
    if ((uVar1 & 2) == 0) {
      uVar2 = uVar4;
    }
    uVar4 = uVar2 | 0x1000;
    if ((uVar1 & 1) == 0) {
      uVar4 = uVar2;
    }
    uVar2 = uVar4 | 0x100;
    if ((uVar1 >> 0x13 & 1) == 0) {
      uVar2 = uVar4;
    }
    uVar3 = (ulonglong)uVar2;
    uVar4 = uVar1 & 0x300;
    if (uVar4 != 0) {
      if (uVar4 == 0x100) {
        uVar3 = (ulonglong)(uVar2 | 0x2000);
      }
      else if (uVar4 == 0x200) {
        uVar3 = (ulonglong)(uVar2 | 0x4000);
      }
      else if (uVar4 == 0x300) {
        uVar3 = (ulonglong)(uVar2 | 0x6000);
      }
    }
    uVar1 = uVar1 & 0x3000000;
    uVar2 = (uint)uVar3;
    if (uVar1 == 0x1000000) {
      uVar3 = (ulonglong)(uVar2 | 0x8040);
    }
    else if (uVar1 == 0x2000000) {
      uVar3 = (ulonglong)(uVar2 | 0x40);
    }
    else if (uVar1 == 0x3000000) {
      uVar3 = (ulonglong)(uVar2 | 0x8000);
    }
    if ((DAT_180027a68 == '\0') || ((uVar3 & 0x40) == 0)) {
      uVar2 = (uint)uVar3 & 0xffffffbf;
      uVar3 = (ulonglong)uVar2;
      FUN_180016a50(uVar2);
    }
    else {
      FUN_180016a50((uint)uVar3);
    }
    uVar4 = (uint)uVar3;
    uVar1 = (uint)(uVar3 >> 3) & 0x10;
    uVar2 = uVar1 | 8;
    if ((uVar4 >> 9 & 1) == 0) {
      uVar2 = uVar1;
    }
    uVar1 = uVar2 | 4;
    if ((uVar4 >> 10 & 1) == 0) {
      uVar1 = uVar2;
    }
    uVar2 = uVar1 | 2;
    if ((uVar4 >> 0xb & 1) == 0) {
      uVar2 = uVar1;
    }
    uVar1 = uVar2 | 1;
    if ((uVar4 >> 0xc & 1) == 0) {
      uVar1 = uVar2;
    }
    uVar2 = uVar1 | 0x80000;
    if ((uVar4 >> 8 & 1) == 0) {
      uVar2 = uVar1;
    }
    uVar1 = uVar4 & 0x6000;
    if ((uVar3 & 0x6000) != 0) {
      if (uVar1 == 0x2000) {
        uVar2 = uVar2 | 0x100;
      }
      else if (uVar1 == 0x4000) {
        uVar2 = uVar2 | 0x200;
      }
      else if (uVar1 == 0x6000) {
        uVar2 = uVar2 | 0x300;
      }
    }
    uVar4 = uVar4 & 0x8040;
    if (uVar4 == 0x40) {
      uVar2 = uVar2 | 0x2000000;
    }
    else {
      if (uVar4 == 0x8000) {
        return uVar2 | 0x3000000;
      }
      if (uVar4 == 0x8040) {
        return uVar2 | 0x1000000;
      }
    }
  }
  return uVar2;
}


/* Address: 0x180016300; Evidence: ev_1f29fac8286d0b93cb0123cd24457535ff85528ebd5969b108f1d4be7f0a72e9 */

uint FUN_180016300(uint param_1,uint param_2)

{
  uint uVar1;
  uint uVar2;
  ulonglong uVar3;
  uint uVar4;
  
  uVar1 = FUN_180016a40();
  uVar4 = uVar1 >> 3 & 0x10;
  uVar2 = uVar4 | 8;
  if ((uVar1 >> 9 & 1) == 0) {
    uVar2 = uVar4;
  }
  uVar4 = uVar2 | 4;
  if ((uVar1 >> 10 & 1) == 0) {
    uVar4 = uVar2;
  }
  uVar2 = uVar4 | 2;
  if ((uVar1 >> 0xb & 1) == 0) {
    uVar2 = uVar4;
  }
  uVar4 = uVar2 | 1;
  if ((uVar1 >> 0xc & 1) == 0) {
    uVar4 = uVar2;
  }
  uVar2 = uVar4 | 0x80000;
  if ((uVar1 >> 8 & 1) == 0) {
    uVar2 = uVar4;
  }
  uVar4 = uVar1 & 0x6000;
  if (uVar4 != 0) {
    if (uVar4 == 0x2000) {
      uVar2 = uVar2 | 0x100;
    }
    else if (uVar4 == 0x4000) {
      uVar2 = uVar2 | 0x200;
    }
    else if (uVar4 == 0x6000) {
      uVar2 = uVar2 | 0x300;
    }
  }
  uVar1 = uVar1 & 0x8040;
  if (uVar1 == 0x40) {
    uVar2 = uVar2 | 0x2000000;
  }
  else if (uVar1 == 0x8000) {
    uVar2 = uVar2 | 0x3000000;
  }
  else if (uVar1 == 0x8040) {
    uVar2 = uVar2 | 0x1000000;
  }
  uVar1 = ~(param_2 & 0x308031f) & uVar2 | param_1 & param_2 & 0x308031f;
  if (uVar1 != uVar2) {
    uVar4 = (uVar1 & 0x10) << 3;
    uVar2 = uVar4 | 0x200;
    if ((uVar1 & 8) == 0) {
      uVar2 = uVar4;
    }
    uVar4 = uVar2 | 0x400;
    if ((uVar1 & 4) == 0) {
      uVar4 = uVar2;
    }
    uVar2 = uVar4 | 0x800;
    if ((uVar1 & 2) == 0) {
      uVar2 = uVar4;
    }
    uVar4 = uVar2 | 0x1000;
    if ((uVar1 & 1) == 0) {
      uVar4 = uVar2;
    }
    uVar2 = uVar4 | 0x100;
    if ((uVar1 >> 0x13 & 1) == 0) {
      uVar2 = uVar4;
    }
    uVar3 = (ulonglong)uVar2;
    uVar4 = uVar1 & 0x300;
    if (uVar4 != 0) {
      if (uVar4 == 0x100) {
        uVar3 = (ulonglong)(uVar2 | 0x2000);
      }
      else if (uVar4 == 0x200) {
        uVar3 = (ulonglong)(uVar2 | 0x4000);
      }
      else if (uVar4 == 0x300) {
        uVar3 = (ulonglong)(uVar2 | 0x6000);
      }
    }
    uVar1 = uVar1 & 0x3000000;
    uVar2 = (uint)uVar3;
    if (uVar1 == 0x1000000) {
      uVar3 = (ulonglong)(uVar2 | 0x8040);
    }
    else if (uVar1 == 0x2000000) {
      uVar3 = (ulonglong)(uVar2 | 0x40);
    }
    else if (uVar1 == 0x3000000) {
      uVar3 = (ulonglong)(uVar2 | 0x8000);
    }
    if ((DAT_180027a68 == '\0') || ((uVar3 & 0x40) == 0)) {
      uVar2 = (uint)uVar3 & 0xffffffbf;
      uVar3 = (ulonglong)uVar2;
      FUN_180016a50(uVar2);
    }
    else {
      FUN_180016a50((uint)uVar3);
    }
    uVar4 = (uint)uVar3;
    uVar1 = (uint)(uVar3 >> 3) & 0x10;
    uVar2 = uVar1 | 8;
    if ((uVar4 >> 9 & 1) == 0) {
      uVar2 = uVar1;
    }
    uVar1 = uVar2 | 4;
    if ((uVar4 >> 10 & 1) == 0) {
      uVar1 = uVar2;
    }
    uVar2 = uVar1 | 2;
    if ((uVar4 >> 0xb & 1) == 0) {
      uVar2 = uVar1;
    }
    uVar1 = uVar2 | 1;
    if ((uVar4 >> 0xc & 1) == 0) {
      uVar1 = uVar2;
    }
    uVar2 = uVar1 | 0x80000;
    if ((uVar4 >> 8 & 1) == 0) {
      uVar2 = uVar1;
    }
    uVar1 = uVar4 & 0x6000;
    if ((uVar3 & 0x6000) != 0) {
      if (uVar1 == 0x2000) {
        uVar2 = uVar2 | 0x100;
      }
      else if (uVar1 == 0x4000) {
        uVar2 = uVar2 | 0x200;
      }
      else if (uVar1 == 0x6000) {
        uVar2 = uVar2 | 0x300;
      }
    }
    uVar4 = uVar4 & 0x8040;
    if (uVar4 == 0x40) {
      uVar2 = uVar2 | 0x2000000;
    }
    else {
      if (uVar4 == 0x8000) {
        return uVar2 | 0x3000000;
      }
      if (uVar4 == 0x8040) {
        return uVar2 | 0x1000000;
      }
    }
  }
  return uVar2;
}


/* Address: 0x1800165a0; Evidence: ev_a7e81920e914346bfb56f2d91186f7747d32c20ca1ec28eddbbb7b86936ab22c */

uint FUN_1800165a0(uint param_1,ulonglong *param_2)

{
  uint uVar1;
  undefined4 extraout_var;
  uint uVar2;
  ulonglong uVar3;
  
  uVar3 = 0;
  uVar2 = param_1 & 0x1f;
  if (param_1 == 0) {
    uVar2 = 0;
  }
  else {
    uVar1 = FUN_180016a40();
    *param_2 = CONCAT44(extraout_var,uVar1);
    if (((param_1 & 8) == 0) || (-1 < (char)uVar1)) {
      if (((param_1 & 4) == 0) || ((uVar1 & 0x200) == 0)) {
        if (((param_1 & 1) == 0) || ((uVar1 & 0x400) == 0)) {
          if (((param_1 & 2) != 0) && ((uVar1 & 0x800) != 0)) {
            uVar2 = param_1 & 0x1d;
            uVar3 = (ulonglong)(param_1 & 0x10);
          }
        }
        else {
          uVar3 = 8;
          uVar2 = param_1 & 0x1e;
        }
      }
      else {
        uVar3 = 4;
        uVar2 = param_1 & 0x1b;
      }
    }
    else {
      uVar3 = 1;
      uVar2 = param_1 & 0x17;
    }
    if (((param_1 & 0x10) != 0) && ((uVar1 & 0x1000) != 0)) {
      uVar3 = uVar3 | 0x20;
      uVar2 = uVar2 & 0xffffffef;
    }
    if (uVar2 != 0) {
      FUN_1800169c0(0x1f80,0xffc0);
    }
    if ((uVar3 != 0) && ((uVar3 & ~CONCAT44(extraout_var,uVar1)) != 0)) {
      if (uVar2 == 0) {
        FUN_180016a50(uVar1 | (uint)uVar3);
      }
      else {
        FUN_180016a60((uint)uVar3);
      }
    }
  }
  return uVar2;
}


/* Address: 0x1800166b0; Evidence: ev_817426d49fb3bb05e5b7877388c36f082abbc2c91af273ae77ae7fa633668c6d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8
FUN_1800166b0(undefined8 param_1,int param_2,undefined8 param_3,int param_4,uint param_5,
             undefined8 param_6,undefined8 param_7,undefined8 param_8,int param_9)

{
  uint uVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined1 auStackY_128 [32];
  undefined8 local_f8;
  ulonglong local_f0;
  int local_e8 [2];
  undefined8 local_e0;
  undefined8 local_d8;
  undefined8 local_d0;
  undefined8 local_c8;
  uint local_b8 [12];
  undefined8 local_88;
  undefined8 uStack_80;
  undefined8 local_78;
  undefined8 uStack_70;
  undefined8 local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 uStack_50;
  ulonglong local_48;
  
  local_48 = DAT_180027000 ^ (ulonglong)auStackY_128;
  local_f0 = 0;
  local_f8 = param_3;
  uVar1 = FUN_1800165a0(param_5,&local_f0);
  uVar3 = param_8;
  if (uVar1 != 0) {
    local_b8[0] = 0;
    local_b8[1] = 0;
    local_b8[2] = 0;
    local_b8[3] = 0;
    local_b8[4] = 0;
    local_b8[5] = 0;
    local_b8[6] = 0;
    local_b8[7] = 0;
    local_b8[8] = 0;
    local_b8[9] = 0;
    local_b8[10] = 0;
    local_b8[0xb] = 0;
    local_88 = 0;
    uStack_80 = 0;
    local_78 = 0;
    uStack_70 = 0;
    local_68 = 0;
    uStack_60 = 0;
    local_58 = 0;
    uStack_50 = 0;
    if (param_9 == 2) {
      local_88 = param_8;
      local_78 = 3;
    }
    FUN_180016a90(local_b8,&local_f0,(ulonglong)param_5,param_2,(uint *)&param_7,(uint *)&local_f8);
  }
  uVar2 = FUN_1800108e0();
  if (((char)uVar2 == '\0') || (param_4 == 0)) {
    FUN_180016dd0(param_4);
    uVar4 = (undefined4)local_f8;
    uVar5 = (undefined4)((ulonglong)local_f8 >> 0x20);
  }
  else {
    local_d8 = param_7;
    local_c8 = local_f8;
    local_e8[1] = 0;
    local_d0 = uVar3;
    local_e8[0] = param_4;
    local_e0 = param_1;
    uVar3 = FUN_180010910(local_e8);
    if ((int)uVar3 == 0) {
      FUN_180016dd0(param_4);
    }
    uVar4 = (undefined4)local_c8;
    uVar5 = (undefined4)((ulonglong)local_c8 >> 0x20);
  }
  return CONCAT44(uVar5,uVar4);
}


/* Address: 0x1800167f0; Evidence: ev_f42c7683a18afc5b35376cb532af6f93197ebdecb46a096759569fcd6472c8b7 */

ulonglong FUN_1800167f0(ulonglong param_1)

{
  return param_1 | 0x8000000000000;
}


/* Address: 0x180016820; Evidence: ev_54f52157d024f34cb47e2b98a7838185c62191509a4b66336030ca691a6e96ed */

/* WARNING: Removing unreachable block (ram,0x0001800168a0) */
/* WARNING: Removing unreachable block (ram,0x000180016892) */
/* WARNING: Removing unreachable block (ram,0x000180016837) */

undefined8 FUN_180016820(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  DAT_180028c50 = 0;
  DAT_180028c54 = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      DAT_180028c50 = 1;
      DAT_180028c54 = 1;
    }
    else {
      DAT_180028c50 = 0;
    }
  }
  if ((DAT_180028c50 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_180028c54 = 3;
      DAT_180028c50 = 3;
      return 0;
    }
  }
  return 0;
}


/* Address: 0x1800168e0; Evidence: ev_81db23a1a953d0492d898636474679ffe9779d34faad2c3165f171b09a086f38 */

void FUN_1800168e0(undefined8 param_1,undefined8 param_2,int param_3)

{
  FUN_180016900(param_1,param_2,param_3,0x1b,"log10");
  return;
}


/* Address: 0x180016900; Evidence: ev_73d9464599fedff7412213b7281c159eb22e700f497b401961627df27cd9a5ee */

undefined8
FUN_180016900(undefined8 param_1,undefined8 param_2,int param_3,int param_4,undefined8 param_5)

{
  int iVar1;
  uint uVar2;
  undefined4 uVar3;
  undefined4 in_stack_ffffffffffffffc4;
  
  if (param_3 == 1) {
    iVar1 = 2;
    uVar3 = 0x22;
    uVar2 = 4;
  }
  else {
    if (param_3 != 2) {
      return param_2;
    }
    uVar3 = 0x21;
    uVar2 = 8;
    iVar1 = 1;
  }
  FUN_1800166b0(param_5,param_4,param_2,iVar1,uVar2,CONCAT44(in_stack_ffffffffffffffc4,uVar3),
                param_1,0,1);
  return param_2;
}


/* Address: 0x1800169a0; Evidence: ev_dcc57f137979a649099641f3e3d1c3ffdee6ff9e5128bf63c82b146f6613d313 */

uint FUN_1800169a0(void)

{
  uint uVar1;
  
  uVar1 = MXCSR;
  MXCSR = MXCSR & 0xffffffc0;
  return uVar1 & 0x3f;
}


/* Address: 0x1800169c0; Evidence: ev_988eecce18ce2f1147d918a3da6e4b9b7b95a0ec047ff77364d6269f48b36729 */

uint FUN_1800169c0(uint param_1,uint param_2)

{
  uint uVar1;
  
  uVar1 = MXCSR;
  MXCSR = (~param_2 | 0xffff807f) & MXCSR | param_1 & param_2;
  if ((DAT_180027a70 != '\0') && ((MXCSR & 0x40) != 0)) {
    return uVar1;
  }
  MXCSR = MXCSR & 0xffffffbf;
  return uVar1;
}


/* Address: 0x180016a40; Evidence: ev_4813365627c03fccbf895135052162800e4de15719ebc9e8aa3eab9a31eab4ba */

undefined4 FUN_180016a40(void)

{
  return MXCSR;
}


/* Address: 0x180016a50; Evidence: ev_a3f65d675cdeb27b13d0e713bd935d2441bee2b91dd15ca090acf2d39ffa8ed3 */

void FUN_180016a50(undefined4 param_1)

{
  MXCSR = param_1;
  return;
}


/* Address: 0x180016a60; Evidence: ev_c10e05ad2287e312694dc793687af0aab5dffb9c3fdc62ef301d03aee8a77781 */

void FUN_180016a60(uint param_1)

{
  if ((param_1 & 0x3f) != 0) {
    MXCSR = MXCSR | param_1 & 0x3f;
  }
  return;
}


/* Address: 0x180016a80; Evidence: ev_7c88a8dde2bcc179d496c1deb157e1a295f2d095bfbe300470ec7277fd74e400 */

uint FUN_180016a80(void)

{
  return MXCSR & 0x3f;
}


/* Address: 0x180016a90; Evidence: ev_67c3847bdaf7d33ea0304a5b80c9c84070584a818e9ab202c812950c9ca0f57d */

void FUN_180016a90(uint *param_1,ulonglong *param_2,ulonglong param_3,int param_4,uint *param_5,
                  uint *param_6)

{
  FUN_180016ac0(param_1,param_2,param_3,param_4,param_5,param_6,0);
  return;
}


/* Address: 0x180016ac0; Evidence: ev_27b495a8975247e0c897ee4fe49a7e65fae5e077fda6f007775c4078acf9162d */

void FUN_180016ac0(uint *param_1,ulonglong *param_2,ulonglong param_3,int param_4,uint *param_5,
                  uint *param_6,int param_7)

{
  uint uVar1;
  DWORD dwExceptionCode;
  uint *local_res8;
  
  dwExceptionCode = 0xc000000d;
  param_1[1] = 0;
  param_1[2] = 0;
  param_1[3] = 0;
  if ((param_3 & 0x10) != 0) {
    dwExceptionCode = 0xc000008f;
    param_1[1] = param_1[1] | 1;
  }
  if ((param_3 & 2) != 0) {
    dwExceptionCode = 0xc0000093;
    param_1[1] = param_1[1] | 2;
  }
  if ((param_3 & 1) != 0) {
    dwExceptionCode = 0xc0000091;
    param_1[1] = param_1[1] | 4;
  }
  if ((param_3 & 4) != 0) {
    dwExceptionCode = 0xc000008e;
    param_1[1] = param_1[1] | 8;
  }
  if ((param_3 & 8) != 0) {
    dwExceptionCode = 0xc0000090;
    param_1[1] = param_1[1] | 0x10;
  }
  param_1[2] = param_1[2] ^ (~((int)(*param_2 >> 7) << 4) ^ param_1[2]) & 0x10;
  param_1[2] = param_1[2] ^ (~((int)(*param_2 >> 9) << 3) ^ param_1[2]) & 8;
  param_1[2] = param_1[2] ^ (~((int)(*param_2 >> 10) << 2) ^ param_1[2]) & 4;
  param_1[2] = param_1[2] ^ (~((int)(*param_2 >> 0xb) * 2) ^ param_1[2]) & 2;
  param_1[2] = param_1[2] ^ (~((uint)*param_2 >> 0xc) ^ param_1[2]) & 1;
  local_res8 = param_1;
  uVar1 = FUN_180016a80();
  if ((uVar1 & 1) != 0) {
    local_res8[3] = local_res8[3] | 0x10;
  }
  if ((uVar1 & 4) != 0) {
    local_res8[3] = local_res8[3] | 8;
  }
  if ((uVar1 & 8) != 0) {
    local_res8[3] = local_res8[3] | 4;
  }
  if ((uVar1 & 0x10) != 0) {
    local_res8[3] = local_res8[3] | 2;
  }
  if ((uVar1 & 0x20) != 0) {
    local_res8[3] = local_res8[3] | 1;
  }
  uVar1 = (uint)*param_2 & 0x6000;
  if (uVar1 == 0) {
    *local_res8 = *local_res8 & 0xfffffffc;
  }
  else if (uVar1 == 0x2000) {
    *local_res8 = *local_res8 & 0xfffffffd;
    *local_res8 = *local_res8 | 1;
  }
  else if (uVar1 == 0x4000) {
    *local_res8 = *local_res8 & 0xfffffffe;
    *local_res8 = *local_res8 | 2;
  }
  else if (uVar1 == 0x6000) {
    *local_res8 = *local_res8 | 3;
  }
  *local_res8 = *local_res8 ^ (param_4 << 5 ^ *local_res8) & 0x1ffe0;
  local_res8[8] = local_res8[8] | 1;
  if (param_7 == 0) {
    local_res8[8] = local_res8[8] & 0xffffffe3 | 2;
    *(undefined8 *)(local_res8 + 4) = *(undefined8 *)param_5;
    local_res8[0x18] = local_res8[0x18] | 1;
    local_res8[0x18] = local_res8[0x18] & 0xffffffe3 | 2;
    *(undefined8 *)(local_res8 + 0x14) = *(undefined8 *)param_6;
  }
  else {
    local_res8[8] = local_res8[8] & 0xffffffe1;
    local_res8[4] = *param_5;
    local_res8[0x18] = local_res8[0x18] | 1;
    local_res8[0x18] = local_res8[0x18] & 0xffffffe1;
    local_res8[0x14] = *param_6;
  }
  FUN_1800169a0();
  RaiseException(dwExceptionCode,0,1,(ULONG_PTR *)&local_res8);
  if ((local_res8[2] & 0x10) != 0) {
    *param_2 = *param_2 & 0xffffffffffffff7f;
  }
  if ((local_res8[2] & 8) != 0) {
    *param_2 = *param_2 & 0xfffffffffffffdff;
  }
  if ((local_res8[2] & 4) != 0) {
    *param_2 = *param_2 & 0xfffffffffffffbff;
  }
  if ((local_res8[2] & 2) != 0) {
    *param_2 = *param_2 & 0xfffffffffffff7ff;
  }
  if ((local_res8[2] & 1) != 0) {
    *param_2 = *param_2 & 0xffffffffffffefff;
  }
  uVar1 = *local_res8 & 3;
  if (uVar1 == 0) {
    *param_2 = *param_2 & 0xffffffffffff9fff;
  }
  else if (uVar1 == 1) {
    *param_2 = *param_2 & 0xffffffffffffbfff;
    *param_2 = *param_2 | 0x2000;
  }
  else if (uVar1 == 2) {
    *param_2 = *param_2 & 0xffffffffffffdfff;
    *param_2 = *param_2 | 0x4000;
  }
  else if (uVar1 == 3) {
    *param_2 = *param_2 | 0x6000;
  }
  if (param_7 == 0) {
    *(undefined8 *)param_6 = *(undefined8 *)(local_res8 + 0x14);
  }
  else {
    *param_6 = local_res8[0x14];
  }
  return;
}


/* Address: 0x180016dd0; Evidence: ev_1ff5c41321805d12ad8d12395daea15a0e7370e8cb8ea1a129dd1f5f190fb931 */

void FUN_180016dd0(int param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 1) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x21;
  }
  else if ((param_1 == 2) || (param_1 == 3)) {
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x22;
    return;
  }
  return;
}


/* Address: 0x180016e04; Evidence: ev_506e7ed05389c7861f018883456ecc99703360df53d8f6961dd61ba7d8bc0bd3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180016e8b) */
/* WARNING: Removing unreachable block (ram,0x000180016e68) */

void FUN_180016e04(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_180016fac();
  if (bVar1) {
    (*DAT_180028c60)(&DAT_180028c70);
  }
  else {
    do {
    } while (DAT_180028c70 != 0);
    LOCK();
    DAT_180028c70 = 1;
    UNLOCK();
  }
  FUN_180017180(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_180017180(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_180016fac();
  if (bVar1) {
    (*DAT_180028c68)(&DAT_180028c70);
  }
  else {
    DAT_180028c70 = 0;
  }
  return;
}


/* Address: 0x180016ef0; Evidence: ev_ca602979a01e0b339d3af33508ab33b03ad58ba62707a6c50161960bd687ee6e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180016f13) */
/* WARNING: Removing unreachable block (ram,0x000180016f39) */
/* WARNING: Removing unreachable block (ram,0x000180016f45) */
/* WARNING: Removing unreachable block (ram,0x000180016f21) */
/* WARNING: Removing unreachable block (ram,0x000180016f50) */
/* WARNING: Removing unreachable block (ram,0x000180016f62) */
/* WARNING: Removing unreachable block (ram,0x000180016f76) */
/* WARNING: Removing unreachable block (ram,0x000180016f7f) */
/* WARNING: Removing unreachable block (ram,0x0001800179f0) */
/* WARNING: Removing unreachable block (ram,0x000180016f99) */

void FUN_180016ef0(void)

{
  return;
}


/* Address: 0x180016fac; Evidence: ev_2f799b244d1d0e18925a1b9c253aac38ff8f279357b2d9c1f9cb2d6b6453e248 */

bool FUN_180016fac(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_180028c58 != (HMODULE)0x1) {
    if (DAT_180028c58 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_180028c60 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_180028c68;
    }
    DAT_180028c68 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_180028c58 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_180028c58;
      pHVar1 = DAT_180028c58;
    }
    DAT_180028c58 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}


/* Address: 0x18001704c; Evidence: ev_d910094f4eb5b569505d870c534eb6f81e380a43c8879a691fb95819c31fb3fd */

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
    *(undefined8 *)(puVar6 + -8) = 0x18001708c;
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


/* Address: 0x1800170e4; Evidence: ev_7fb71cdf4455a5e42268f9c02cfa3e1c3b180fe6b0c89b99f27e46df5070416b */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_1800170e4(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000208;
  while ((0x2b000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x2b001))) {
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


/* Address: 0x180017180; Evidence: ev_f209ffc6eb99104324f91348c78afd143893d4d77ef8a38fc8f4f1e62dbc8515 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

void FUN_180017180(void *param_1,SIZE_T param_2,DWORD param_3,PDWORD param_4)

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
  lpAddress = (void *)FUN_1800170e4(&local_28,local_24);
  if (lpAddress == (void *)0x0) {
    *param_4 = 4;
    return;
  }
  if (DAT_180028c80 == 0) {
    DAT_180028c80 = 1;
    puVar6 = auStack_48;
    if ((local_24[0] & IMAGE_SCN_MEM_WRITE) == 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = auStack_40;
    }
    *(undefined8 *)(puVar6 + -8) = 0x1800171fa;
    DloadMakePermanentImageCommit(lpAddress,(ulonglong)*(uint *)(puVar6 + 0x20));
  }
  if (param_1 == (void *)0x0) {
    if (param_2 != 0) goto LAB_18001720b;
LAB_18001723b:
    param_2 = (SIZE_T)*(uint *)(puVar6 + 0x20);
  }
  else {
    puVar2 = puVar6;
    if (param_2 == 0) {
LAB_18001720b:
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar5 = puVar6 + 8;
      puVar6 = puVar6 + 8;
      puVar2 = puVar5;
      if (param_1 == (void *)0x0) goto LAB_18001723b;
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
  *(undefined8 *)(puVar6 + -8) = 0x180017254;
  BVar3 = VirtualProtect(lpAddress,param_2,param_3,param_4);
  if (BVar3 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
  }
  return;
}


/* Address: 0x180017278; Evidence: ev_1783b5c8dea3d4309a238faf4ed2ffb91f13b2508887d8c86c68885bd966463e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180017299) */
/* WARNING: Removing unreachable block (ram,0x0001800172ba) */
/* WARNING: Removing unreachable block (ram,0x0001800172c6) */
/* WARNING: Removing unreachable block (ram,0x0001800172c9) */
/* WARNING: Removing unreachable block (ram,0x0001800172a2) */
/* WARNING: Removing unreachable block (ram,0x0001800172d4) */
/* WARNING: Removing unreachable block (ram,0x0001800172dd) */
/* WARNING: Removing unreachable block (ram,0x0001800172f2) */
/* WARNING: Removing unreachable block (ram,0x000180017311) */
/* WARNING: Removing unreachable block (ram,0x0001800172fb) */

void FUN_180017278(void)

{
  return;
}


/* Address: 0x180017330; Evidence: ev_6fb405e2dc68e35c5200f78bc521bf1ab0c5b596712b2f643a5e33101447d20a */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x0001800174a4) */
/* WARNING: Removing unreachable block (ram,0x00018001757e) */

HMODULE FUN_180017330(uint *param_1,void *param_2)

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
  
  FUN_180016ef0();
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
    FUN_180017278();
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
          FUN_180017278();
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
        FUN_180017278();
        RaiseException(0xc06d007f,0,1,(ULONG_PTR *)&local_res8);
        FUN_180016ef0();
        pHVar3 = local_40;
      }
      local_88 = param_2;
      local_80 = pHVar3;
      FUN_180016e04(param_2,8,&local_88);
    }
    local_38 = 0;
    local_48 = hLibModule;
    local_40 = pHVar3;
    FUN_180001000(5,(longlong)local_78);
    FUN_180017278();
  }
  return pHVar3;
}


/* Address: 0x180017630; Evidence: ev_d493f340f28da386df1f495cef7ae23abbef8391b5123e798802386bb60ee125 */

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


/* Address: 0x180017680; Evidence: ev_cf93c77384ca51cc05cd8f5a00b9b5502c9b3e48328d7be37677d7288ffc2c09 */

ulonglong FUN_180017680(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_1800176d0((short *)&IMAGE_DOS_HEADER_180000000);
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


/* Address: 0x1800176d0; Evidence: ev_8f1f02d387d13afb52c2413a07a969324c2b89e7a1cbbd76cc3f88afdd3b3dee */

bool FUN_1800176d0(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}


/* Address: 0x1800176fc; Evidence: ev_bdce6c01131cd987054105ffa724918a73a2a0edfc91a2338f5f1700869f8687 */

undefined8 FUN_1800176fc(undefined8 param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  FUN_18001771c(param_2,param_4);
  return 1;
}


/* Address: 0x18001771c; Evidence: ev_e7b3a1038c5ae030d8400f93deb541a540282be8a5e118b306ab62e1baa604c0 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18001771c(undefined8 param_1,longlong param_2)

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


/* Address: 0x18001777c; Evidence: ev_cbee73e73cf48feb73056e3c1db0aa3ac54a2a72129cf50d8cbd3b55154bfbba */

void FUN_18001777c(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_18001771c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x180017810; Evidence: ev_ea5e97893ec80aa2a3d7854a9db5496734a22960a63e44a8d415c0bc98240a9e */

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


/* Address: 0x180017860; Evidence: ev_559bf026de5f24436a670ec67082bca6b059eaa564591a3b04c45f07c251fcb3 */

void FUN_180017860(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_180005414(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_180005a98();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_180005a98();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_18000b4ec();
  }
  return;
}


/* Address: 0x1800178b0; Evidence: ev_2f11b7d0e45418efaf2b0379f873cd03450ac4231ddb641823350ad02321cd12 */

undefined1 (*) [16] FUN_1800178b0(undefined1 (*param_1) [16],byte param_2)

{
  ushort uVar1;
  uint uVar2;
  int iVar3;
  char *pcVar4;
  char *pcVar5;
  undefined1 (*pauVar6) [16];
  uint uVar7;
  bool bVar8;
  bool bVar9;
  undefined1 auVar10 [16];
  undefined1 auVar11 [16];
  undefined1 auVar12 [16];
  undefined1 in_XMM1 [16];
  undefined1 auVar13 [16];
  undefined1 auVar14 [16];
  undefined1 auVar15 [16];
  char cVar16;
  char cVar17;
  char cVar18;
  char cVar19;
  
  pauVar6 = (undefined1 (*) [16])0x0;
  if (param_2 == 0) {
    pcVar4 = (char *)((ulonglong)param_1 & 0xfffffffffffffff0);
    auVar13[0] = -(*pcVar4 == '\0');
    auVar13[1] = -(pcVar4[1] == '\0');
    auVar13[2] = -(pcVar4[2] == '\0');
    auVar13[3] = -(pcVar4[3] == '\0');
    auVar13[4] = -(pcVar4[4] == '\0');
    auVar13[5] = -(pcVar4[5] == '\0');
    auVar13[6] = -(pcVar4[6] == '\0');
    auVar13[7] = -(pcVar4[7] == '\0');
    auVar13[8] = -(pcVar4[8] == '\0');
    auVar13[9] = -(pcVar4[9] == '\0');
    auVar13[10] = -(pcVar4[10] == '\0');
    auVar13[0xb] = -(pcVar4[0xb] == '\0');
    auVar13[0xc] = -(pcVar4[0xc] == '\0');
    auVar13[0xd] = -(pcVar4[0xd] == '\0');
    auVar13[0xe] = -(pcVar4[0xe] == '\0');
    auVar13[0xf] = -(pcVar4[0xf] == '\0');
    uVar2 = (uint)(ushort)((ushort)(SUB161(auVar13 >> 7,0) & 1) |
                           (ushort)(SUB161(auVar13 >> 0xf,0) & 1) << 1 |
                           (ushort)(SUB161(auVar13 >> 0x17,0) & 1) << 2 |
                           (ushort)(SUB161(auVar13 >> 0x1f,0) & 1) << 3 |
                           (ushort)(SUB161(auVar13 >> 0x27,0) & 1) << 4 |
                           (ushort)(SUB161(auVar13 >> 0x2f,0) & 1) << 5 |
                           (ushort)(SUB161(auVar13 >> 0x37,0) & 1) << 6 |
                           (ushort)(SUB161(auVar13 >> 0x3f,0) & 1) << 7 |
                           (ushort)(SUB161(auVar13 >> 0x47,0) & 1) << 8 |
                           (ushort)(SUB161(auVar13 >> 0x4f,0) & 1) << 9 |
                           (ushort)(SUB161(auVar13 >> 0x57,0) & 1) << 10 |
                           (ushort)(SUB161(auVar13 >> 0x5f,0) & 1) << 0xb |
                           (ushort)(SUB161(auVar13 >> 0x67,0) & 1) << 0xc |
                           (ushort)(SUB161(auVar13 >> 0x6f,0) & 1) << 0xd |
                           (ushort)(SUB161(auVar13 >> 0x77,0) & 1) << 0xe |
                          (ushort)(auVar13[0xf] >> 7) << 0xf) & -1 << ((byte)param_1 & 0xf);
    pcVar5 = pcVar4;
    if (uVar2 == 0) {
      do {
        pcVar4 = pcVar5 + 0x10;
        auVar10[0] = -(*pcVar4 == '\0');
        auVar10[1] = -(pcVar5[0x11] == '\0');
        auVar10[2] = -(pcVar5[0x12] == '\0');
        auVar10[3] = -(pcVar5[0x13] == '\0');
        auVar10[4] = -(pcVar5[0x14] == '\0');
        auVar10[5] = -(pcVar5[0x15] == '\0');
        auVar10[6] = -(pcVar5[0x16] == '\0');
        auVar10[7] = -(pcVar5[0x17] == '\0');
        auVar10[8] = -(pcVar5[0x18] == '\0');
        auVar10[9] = -(pcVar5[0x19] == '\0');
        auVar10[10] = -(pcVar5[0x1a] == '\0');
        auVar10[0xb] = -(pcVar5[0x1b] == '\0');
        auVar10[0xc] = -(pcVar5[0x1c] == '\0');
        auVar10[0xd] = -(pcVar5[0x1d] == '\0');
        auVar10[0xe] = -(pcVar5[0x1e] == '\0');
        auVar10[0xf] = -(pcVar5[0x1f] == '\0');
        uVar1 = (ushort)(SUB161(auVar10 >> 7,0) & 1) | (ushort)(SUB161(auVar10 >> 0xf,0) & 1) << 1 |
                (ushort)(SUB161(auVar10 >> 0x17,0) & 1) << 2 |
                (ushort)(SUB161(auVar10 >> 0x1f,0) & 1) << 3 |
                (ushort)(SUB161(auVar10 >> 0x27,0) & 1) << 4 |
                (ushort)(SUB161(auVar10 >> 0x2f,0) & 1) << 5 |
                (ushort)(SUB161(auVar10 >> 0x37,0) & 1) << 6 |
                (ushort)(SUB161(auVar10 >> 0x3f,0) & 1) << 7 |
                (ushort)(SUB161(auVar10 >> 0x47,0) & 1) << 8 |
                (ushort)(SUB161(auVar10 >> 0x4f,0) & 1) << 9 |
                (ushort)(SUB161(auVar10 >> 0x57,0) & 1) << 10 |
                (ushort)(SUB161(auVar10 >> 0x5f,0) & 1) << 0xb |
                (ushort)(SUB161(auVar10 >> 0x67,0) & 1) << 0xc |
                (ushort)(SUB161(auVar10 >> 0x6f,0) & 1) << 0xd |
                (ushort)(SUB161(auVar10 >> 0x77,0) & 1) << 0xe | (ushort)(auVar10[0xf] >> 7) << 0xf;
        uVar2 = (uint)uVar1;
        pcVar5 = pcVar4;
      } while (uVar1 == 0);
    }
    uVar7 = 0;
    if (uVar2 != 0) {
      for (; (uVar2 >> uVar7 & 1) == 0; uVar7 = uVar7 + 1) {
      }
    }
    return (undefined1 (*) [16])(pcVar4 + uVar7);
  }
  if (DAT_180027058 < 2) {
    pcVar4 = (char *)((ulonglong)param_1 & 0xfffffffffffffff0);
    auVar13 = pshuflw(in_XMM1,ZEXT216(CONCAT11(param_2,param_2)),0);
    uVar2 = -1 << ((byte)param_1 & 0xf);
    auVar11[0] = -(*pcVar4 == '\0');
    auVar11[1] = -(pcVar4[1] == '\0');
    auVar11[2] = -(pcVar4[2] == '\0');
    auVar11[3] = -(pcVar4[3] == '\0');
    auVar11[4] = -(pcVar4[4] == '\0');
    auVar11[5] = -(pcVar4[5] == '\0');
    auVar11[6] = -(pcVar4[6] == '\0');
    auVar11[7] = -(pcVar4[7] == '\0');
    auVar11[8] = -(pcVar4[8] == '\0');
    auVar11[9] = -(pcVar4[9] == '\0');
    auVar11[10] = -(pcVar4[10] == '\0');
    auVar11[0xb] = -(pcVar4[0xb] == '\0');
    auVar11[0xc] = -(pcVar4[0xc] == '\0');
    auVar11[0xd] = -(pcVar4[0xd] == '\0');
    auVar11[0xe] = -(pcVar4[0xe] == '\0');
    auVar11[0xf] = -(pcVar4[0xf] == '\0');
    cVar16 = auVar13[0];
    auVar15[0] = -(*pcVar4 == cVar16);
    cVar17 = auVar13[1];
    auVar15[1] = -(pcVar4[1] == cVar17);
    cVar18 = auVar13[2];
    auVar15[2] = -(pcVar4[2] == cVar18);
    cVar19 = auVar13[3];
    auVar15[3] = -(pcVar4[3] == cVar19);
    auVar15[4] = -(pcVar4[4] == cVar16);
    auVar15[5] = -(pcVar4[5] == cVar17);
    auVar15[6] = -(pcVar4[6] == cVar18);
    auVar15[7] = -(pcVar4[7] == cVar19);
    auVar15[8] = -(pcVar4[8] == cVar16);
    auVar15[9] = -(pcVar4[9] == cVar17);
    auVar15[10] = -(pcVar4[10] == cVar18);
    auVar15[0xb] = -(pcVar4[0xb] == cVar19);
    auVar15[0xc] = -(pcVar4[0xc] == cVar16);
    auVar15[0xd] = -(pcVar4[0xd] == cVar17);
    auVar15[0xe] = -(pcVar4[0xe] == cVar18);
    auVar15[0xf] = -(pcVar4[0xf] == cVar19);
    uVar7 = (ushort)((ushort)(SUB161(auVar15 >> 7,0) & 1) |
                     (ushort)(SUB161(auVar15 >> 0xf,0) & 1) << 1 |
                     (ushort)(SUB161(auVar15 >> 0x17,0) & 1) << 2 |
                     (ushort)(SUB161(auVar15 >> 0x1f,0) & 1) << 3 |
                     (ushort)(SUB161(auVar15 >> 0x27,0) & 1) << 4 |
                     (ushort)(SUB161(auVar15 >> 0x2f,0) & 1) << 5 |
                     (ushort)(SUB161(auVar15 >> 0x37,0) & 1) << 6 |
                     (ushort)(SUB161(auVar15 >> 0x3f,0) & 1) << 7 |
                     (ushort)(SUB161(auVar15 >> 0x47,0) & 1) << 8 |
                     (ushort)(SUB161(auVar15 >> 0x4f,0) & 1) << 9 |
                     (ushort)(SUB161(auVar15 >> 0x57,0) & 1) << 10 |
                     (ushort)(SUB161(auVar15 >> 0x5f,0) & 1) << 0xb |
                     (ushort)(SUB161(auVar15 >> 0x67,0) & 1) << 0xc |
                     (ushort)(SUB161(auVar15 >> 0x6f,0) & 1) << 0xd |
                     (ushort)(SUB161(auVar15 >> 0x77,0) & 1) << 0xe |
                    (ushort)(auVar15[0xf] >> 7) << 0xf) & uVar2;
    uVar2 = (ushort)((ushort)(SUB161(auVar11 >> 7,0) & 1) |
                     (ushort)(SUB161(auVar11 >> 0xf,0) & 1) << 1 |
                     (ushort)(SUB161(auVar11 >> 0x17,0) & 1) << 2 |
                     (ushort)(SUB161(auVar11 >> 0x1f,0) & 1) << 3 |
                     (ushort)(SUB161(auVar11 >> 0x27,0) & 1) << 4 |
                     (ushort)(SUB161(auVar11 >> 0x2f,0) & 1) << 5 |
                     (ushort)(SUB161(auVar11 >> 0x37,0) & 1) << 6 |
                     (ushort)(SUB161(auVar11 >> 0x3f,0) & 1) << 7 |
                     (ushort)(SUB161(auVar11 >> 0x47,0) & 1) << 8 |
                     (ushort)(SUB161(auVar11 >> 0x4f,0) & 1) << 9 |
                     (ushort)(SUB161(auVar11 >> 0x57,0) & 1) << 10 |
                     (ushort)(SUB161(auVar11 >> 0x5f,0) & 1) << 0xb |
                     (ushort)(SUB161(auVar11 >> 0x67,0) & 1) << 0xc |
                     (ushort)(SUB161(auVar11 >> 0x6f,0) & 1) << 0xd |
                     (ushort)(SUB161(auVar11 >> 0x77,0) & 1) << 0xe |
                    (ushort)(auVar11[0xf] >> 7) << 0xf) & uVar2;
    pcVar5 = pcVar4;
    if (uVar2 == 0) {
      do {
        uVar2 = 0x1f;
        if (uVar7 != 0) {
          for (; uVar7 >> uVar2 == 0; uVar2 = uVar2 - 1) {
          }
        }
        if (uVar7 != 0) {
          pauVar6 = (undefined1 (*) [16])(pcVar5 + uVar2);
        }
        pcVar4 = pcVar5 + 0x10;
        auVar14[0] = -(*pcVar4 == '\0');
        auVar14[1] = -(pcVar5[0x11] == '\0');
        auVar14[2] = -(pcVar5[0x12] == '\0');
        auVar14[3] = -(pcVar5[0x13] == '\0');
        auVar14[4] = -(pcVar5[0x14] == '\0');
        auVar14[5] = -(pcVar5[0x15] == '\0');
        auVar14[6] = -(pcVar5[0x16] == '\0');
        auVar14[7] = -(pcVar5[0x17] == '\0');
        auVar14[8] = -(pcVar5[0x18] == '\0');
        auVar14[9] = -(pcVar5[0x19] == '\0');
        auVar14[10] = -(pcVar5[0x1a] == '\0');
        auVar14[0xb] = -(pcVar5[0x1b] == '\0');
        auVar14[0xc] = -(pcVar5[0x1c] == '\0');
        auVar14[0xd] = -(pcVar5[0x1d] == '\0');
        auVar14[0xe] = -(pcVar5[0x1e] == '\0');
        auVar14[0xf] = -(pcVar5[0x1f] == '\0');
        uVar1 = (ushort)(SUB161(auVar14 >> 7,0) & 1) | (ushort)(SUB161(auVar14 >> 0xf,0) & 1) << 1 |
                (ushort)(SUB161(auVar14 >> 0x17,0) & 1) << 2 |
                (ushort)(SUB161(auVar14 >> 0x1f,0) & 1) << 3 |
                (ushort)(SUB161(auVar14 >> 0x27,0) & 1) << 4 |
                (ushort)(SUB161(auVar14 >> 0x2f,0) & 1) << 5 |
                (ushort)(SUB161(auVar14 >> 0x37,0) & 1) << 6 |
                (ushort)(SUB161(auVar14 >> 0x3f,0) & 1) << 7 |
                (ushort)(SUB161(auVar14 >> 0x47,0) & 1) << 8 |
                (ushort)(SUB161(auVar14 >> 0x4f,0) & 1) << 9 |
                (ushort)(SUB161(auVar14 >> 0x57,0) & 1) << 10 |
                (ushort)(SUB161(auVar14 >> 0x5f,0) & 1) << 0xb |
                (ushort)(SUB161(auVar14 >> 0x67,0) & 1) << 0xc |
                (ushort)(SUB161(auVar14 >> 0x6f,0) & 1) << 0xd |
                (ushort)(SUB161(auVar14 >> 0x77,0) & 1) << 0xe | (ushort)(auVar14[0xf] >> 7) << 0xf;
        uVar2 = (uint)uVar1;
        auVar12[0] = -(*pcVar4 == cVar16);
        auVar12[1] = -(pcVar5[0x11] == cVar17);
        auVar12[2] = -(pcVar5[0x12] == cVar18);
        auVar12[3] = -(pcVar5[0x13] == cVar19);
        auVar12[4] = -(pcVar5[0x14] == cVar16);
        auVar12[5] = -(pcVar5[0x15] == cVar17);
        auVar12[6] = -(pcVar5[0x16] == cVar18);
        auVar12[7] = -(pcVar5[0x17] == cVar19);
        auVar12[8] = -(pcVar5[0x18] == cVar16);
        auVar12[9] = -(pcVar5[0x19] == cVar17);
        auVar12[10] = -(pcVar5[0x1a] == cVar18);
        auVar12[0xb] = -(pcVar5[0x1b] == cVar19);
        auVar12[0xc] = -(pcVar5[0x1c] == cVar16);
        auVar12[0xd] = -(pcVar5[0x1d] == cVar17);
        auVar12[0xe] = -(pcVar5[0x1e] == cVar18);
        auVar12[0xf] = -(pcVar5[0x1f] == cVar19);
        uVar7 = (uint)(ushort)((ushort)(SUB161(auVar12 >> 7,0) & 1) |
                               (ushort)(SUB161(auVar12 >> 0xf,0) & 1) << 1 |
                               (ushort)(SUB161(auVar12 >> 0x17,0) & 1) << 2 |
                               (ushort)(SUB161(auVar12 >> 0x1f,0) & 1) << 3 |
                               (ushort)(SUB161(auVar12 >> 0x27,0) & 1) << 4 |
                               (ushort)(SUB161(auVar12 >> 0x2f,0) & 1) << 5 |
                               (ushort)(SUB161(auVar12 >> 0x37,0) & 1) << 6 |
                               (ushort)(SUB161(auVar12 >> 0x3f,0) & 1) << 7 |
                               (ushort)(SUB161(auVar12 >> 0x47,0) & 1) << 8 |
                               (ushort)(SUB161(auVar12 >> 0x4f,0) & 1) << 9 |
                               (ushort)(SUB161(auVar12 >> 0x57,0) & 1) << 10 |
                               (ushort)(SUB161(auVar12 >> 0x5f,0) & 1) << 0xb |
                               (ushort)(SUB161(auVar12 >> 0x67,0) & 1) << 0xc |
                               (ushort)(SUB161(auVar12 >> 0x6f,0) & 1) << 0xd |
                               (ushort)(SUB161(auVar12 >> 0x77,0) & 1) << 0xe |
                              (ushort)(auVar12[0xf] >> 7) << 0xf);
        pcVar5 = pcVar4;
      } while (uVar1 == 0);
    }
    uVar7 = (-uVar2 & uVar2) - 1 & uVar7;
    uVar2 = 0x1f;
    if (uVar7 != 0) {
      for (; uVar7 >> uVar2 == 0; uVar2 = uVar2 - 1) {
      }
    }
    if (uVar7 != 0) {
      pauVar6 = (undefined1 (*) [16])(pcVar4 + uVar2);
    }
  }
  else {
    for (; bVar8 = false, ((ulonglong)param_1 & 0xf) != 0;
        param_1 = (undefined1 (*) [16])(*param_1 + 1)) {
      if ((*param_1)[0] == param_2) {
        pauVar6 = param_1;
      }
      if ((*param_1)[0] == '\0') {
        return pauVar6;
      }
    }
    bVar9 = true;
    while( true ) {
      iVar3 = pcmpistri(ZEXT116(param_2),*param_1,0x40);
      if (bVar8) {
        pauVar6 = (undefined1 (*) [16])(*param_1 + iVar3);
        bVar9 = pauVar6 == (undefined1 (*) [16])0x0;
        pcmpistri(ZEXT116(param_2),*param_1,0x40);
      }
      if (bVar9) break;
      bVar8 = (undefined1 (*) [16])0xffffffffffffffef < param_1;
      param_1 = param_1 + 1;
      bVar9 = param_1 == (undefined1 (*) [16])0x0;
    }
  }
  return pauVar6;
}


/* Address: 0x1800179f0; Evidence: ev_d55d4db3c12cf833c58feac9d4b4127469560fdab135a0b901449a0390a55f7e */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x0001800179f0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180017a10; Evidence: ev_5aae6c4326ff162deca96926479e2fe980121dc431145c78643921d1e755c857 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x0001800179f0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180017a30; Evidence: ev_73cce4d5d724fe730972e3106cce181a4d9c2af4f21e63638f7e87e684b1a850 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x0001800179f0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180017a60; Evidence: ev_69cb97e10cad5cee1b38d6c0f25726bf0392dca848f9095b712d2563a334437f */

undefined8 FUN_180017a60(undefined1 *param_1,undefined1 param_2,longlong param_3,undefined8 param_4)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = param_2;
    param_1 = param_1 + 1;
  }
  return param_4;
}


/* Address: 0x180017a70; Evidence: ev_c63a1edd98a1c54649b535e77a9a18689deb4068a6cce0138b17a90dcf89c1a5 */

undefined1 (*) [32] FUN_180017a70(undefined1 (*param_1) [32],byte param_2,ulonglong param_3)

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
    if (DAT_180027058 < 3) {
      if ((param_3 <= DAT_180027060) || (((byte)DAT_180028198 & 2) == 0)) {
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
    else if (((param_3 <= DAT_180027060) || (DAT_180027068 < param_3)) ||
            (((byte)DAT_180028198 & 2) == 0)) {
      auVar12._16_16_ = auVar11;
      auVar12._0_16_ = auVar11;
      lVar10 = ((ulonglong)param_1 & 0x1f) - 0x20;
      pauVar2 = (undefined1 (*) [32])((longlong)param_1 - lVar10);
      uVar5 = param_3 + lVar10;
      if (0x100 < uVar5) {
        if (DAT_180027068 < uVar5) {
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


/* Address: 0x180017e20; Evidence: ev_5de2be914bdd9f8bc6b65b32e3874b3ac8fa4cf3c987891acfd63bb93db7d373 */

void FUN_180017e20(undefined1 *param_1,undefined1 *param_2,longlong param_3)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = *param_2;
    param_2 = param_2 + 1;
    param_1 = param_1 + 1;
  }
  return;
}


/* Address: 0x180017e30; Evidence: ev_2e1c227e174e15d09bd5097c3019f9fed4aa6fe162d06614cfcbc59c7d428a16 */

void FUN_180017e30(undefined1 (*param_1) [32],undefined1 (*param_2) [32],ulonglong param_3)

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
  if (DAT_180027058 < 3) {
    if ((param_3 < 0x801) || (((byte)DAT_180028198 & 2) == 0)) {
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
code_r0x000180017e2b:
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*param_1)[0] = (*param_2)[0];
      param_2 = (undefined1 (*) [32])(*param_2 + 1);
      param_1 = (undefined1 (*) [32])(*param_1 + 1);
    }
    return;
  }
  if (((0x2000 < param_3) && (param_3 < 0x180001)) && (((byte)DAT_180028198 & 2) != 0))
  goto code_r0x000180017e2b;
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
        goto switchD_1800180b6_caseD_0;
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
switchD_1800180b6_caseD_0:
  *(undefined8 *)*param_1 = uVar10;
  *(undefined8 *)(*param_1 + 8) = uVar11;
  *(undefined8 *)(*param_1 + 0x10) = uVar12;
  *(undefined8 *)(*param_1 + 0x18) = uVar13;
  return;
}


/* Address: 0x1800184d0; Evidence: ev_50df85504a4d9146ff8885b940c6a695f0550f38f2d7aad1008e2f915f5bd959 */

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
    if (((ulonglong)_Str & 7) == 0) goto LAB_180018501;
    uVar1 = *(ulonglong *)_Str;
    _Str = (char *)((longlong)_Str + 1);
  } while ((char)uVar1 != '\0');
LAB_180018548:
  return (size_t)(char *)((longlong)_Str + lVar3 + -1);
LAB_180018501:
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
  goto LAB_180018548;
}


/* Address: 0x180018590; Evidence: ev_8ec1c9c5e5404037c79543e0549aedfa2b66395fd3ff33e904b16813eded3d46 */

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


/* Address: 0x180018610; Evidence: ev_0c51405bc12912e5e8329bfb2d71e3b18ea09d91580a7d72fbe0ace8cf3d7ffc */

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


/* Address: 0x1800186a0; Evidence: ev_9b4f04f6d9a1c75e8ed5b665765c6f23a8a8836272886f52d77598b1f22a414b */

void FUN_1800186a0(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x40));
  return;
}


/* Address: 0x1800186b7; Evidence: ev_4f07e1147dcd68d0a31f3df4692e09b1f6c517eddd01140bb0cd14a66d39ad81 */

void FUN_1800186b7(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x20));
  return;
}


/* Address: 0x1800186d0; Evidence: ev_1d0106bdbebece4e8a69d7ff47b35cc3e43cc7e28d9b449d4aa8b7b93968b98f */

void FUN_1800186d0(void)

{
  FUN_180004cc4();
  return;
}


/* Address: 0x1800186e4; Evidence: ev_a53ba0d645cb23eb252c72965edea6a0219096547b8a829b31ac66652687a68b */

void FUN_1800186e4(undefined8 *param_1,longlong param_2)

{
  __scrt_dllmain_exception_filter
            (*(undefined8 *)(param_2 + 0x60),*(int *)(param_2 + 0x68),
             *(undefined8 *)(param_2 + 0x70),FUN_180004560,*(int *)*param_1,param_1);
  return;
}


/* Address: 0x18001871a; Evidence: ev_21a8aa8607958687750e8b5713740b6a0498e5ee7cf616c62e66e3b47379636b */

bool FUN_18001871a(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x180018732; Evidence: ev_9454faef07d1a46c2ef863410a9b2148f024b40cae24804c4ad5b52c77903d5c */

undefined4 FUN_180018732(undefined8 param_1,longlong param_2)

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
    lVar2 = FUN_180005a98();
    *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x28);
    uVar1 = *(undefined8 *)(*(longlong *)(param_2 + 0x30) + 8);
    lVar2 = FUN_180005a98();
    *(undefined8 *)(lVar2 + 0x28) = uVar1;
                    /* WARNING: Subroutine does not return */
    FUN_18000b4ec();
  }
  *(undefined4 *)(param_2 + 0x20) = 0;
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x1800187c4; Evidence: ev_565db56a2bcaf2744316c40cc23171890a64941cd105ec1c17bc3a77b7d79582 */

undefined4 FUN_1800187c4(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180005a98();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180005a98();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180005a98();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_180007250((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_180005a98();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x18001886b; Evidence: ev_aee024bb739cc50388f50be9c47060dc654612c67b1e0ef261fffe5d3eaaa766 */

void FUN_18001886b(undefined8 *param_1,longlong param_2)

{
  FUN_1800076dc(param_1,*(longlong *)(param_2 + 0xb8),(undefined4 *)(param_2 + 0x20));
  return;
}


/* Address: 0x18001888c; Evidence: ev_75a3d80b324422c2d569998ffe117848b4019354b850c0ad2a0f007f398efc9d */

void FUN_18001888c(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_18000611c(*(longlong *)(param_2 + 0x38));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xb8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_180005840(piVar1);
    }
  }
  lVar2 = FUN_180005a98();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0xc0);
  lVar2 = FUN_180005a98();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x40);
  return;
}


/* Address: 0x180018912; Evidence: ev_08990dca7ca82fbd2cb9c85f83075a51cf7ba2086fb7afaa9ea463d2ccddf26c */

void FUN_180018912(undefined8 *param_1)

{
  FUN_180005910(param_1);
  return;
}


/* Address: 0x180018928; Evidence: ev_9ec17c9f800f9ec38a584e2be62aa56969d12686f2141396d422e0b41e875f24 */

void FUN_180018928(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180005a98();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180005a98();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x18001894b; Evidence: ev_2a7fde55e02e129ab127fbd83b8baa9aea30e57a1de75bc592cb6000f32bab0b */

void FUN_18001894b(undefined8 param_1,longlong param_2)

{
  FUN_180008438(**(longlong **)(param_2 + 0x48));
  return;
}


/* Address: 0x180018970; Evidence: ev_531b312bfd1f15bc5ff893ed40a4aeda79762b851a8698da65b347b841050696 */

void FUN_180018970(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x180018986; Evidence: ev_d2a36e65e83fd55f1f7aec38735dba1dd899b57ec6c04806e4d1575234cee04c */

void FUN_180018986(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x18001899c; Evidence: ev_bd7bf90126526bc247e54ffa8dec729883f9b855687b628e90b442d8a71d6320 */

void FUN_18001899c(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x48));
  return;
}


/* Address: 0x1800189b6; Evidence: ev_5b3beb217f9d57f1302b5ad092cd89f4b88ea88a1eeaa6adfc8cc4c651eb07b0 */

undefined4 FUN_1800189b6(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x1800189e3; Evidence: ev_ef9c33c87510e2ba23e5932d8b5ea796bbb5f583f2ad3109f7608dc5b287850c */

void FUN_1800189e3(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x58));
  return;
}


/* Address: 0x1800189fd; Evidence: ev_2aec82906c86047a0a04cb50c6c8b931f21e7c5ec202354bbe5385fb67b8db1b */

void FUN_1800189fd(void)

{
  __acrt_unlock(8);
  return;
}


/* Address: 0x180018a16; Evidence: ev_c29b3592d364ae449cb444c85107c12aaf457ea70fe71d1d39812830f6fdd4d2 */

void FUN_180018a16(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x98));
  return;
}


/* Address: 0x180018a33; Evidence: ev_c371108ae2745fa82683dec111b41910c0a8cd798bd8ec23a98d997d8d0245d8 */

void FUN_180018a33(void)

{
  __acrt_unlock(7);
  return;
}


/* Address: 0x180018a4c; Evidence: ev_32fa56243c7de4de72d6cf021c66be036fb9502a7eb08fae95e384ba22de4c90 */

void FUN_180018a4c(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x68));
  return;
}


/* Address: 0x180018a66; Evidence: ev_5de6cc5eb51dc69460230acacdf8917f58d41b7d8259f4c22b996e0740db0b8a */

void FUN_180018a66(void)

{
  __acrt_unlock(5);
  return;
}


/* Address: 0x180018a7f; Evidence: ev_d72ddd9af47961a5e1422be0f51aa87806eb9333235ce175d6014246a2f7b1a4 */

void FUN_180018a7f(undefined8 param_1,longlong param_2)

{
  if (*(char *)(param_2 + 0x70) != '\0') {
    __acrt_unlock(3);
  }
  return;
}


/* Address: 0x180018aa0; Evidence: ev_e18560ab34156cc4d1aeb9abec5c44968087d8cfb888c85b4672546ecd67eab8 */

void FUN_180018aa0(void)

{
  __acrt_unlock(4);
  return;
}


/* Address: 0x180018ab9; Evidence: ev_2f611da0172ebb5d4c7fcafc6b27025a82f6b706e801e2b11a6828da5959499b */

void FUN_180018ab9(undefined8 param_1,longlong param_2)

{
  FUN_180008438(*(longlong *)(param_2 + 0x40));
  return;
}


/* Address: 0x180018ad1; Evidence: ev_cf1656fcfb613562f768d8fa900e7b587dd470b9b9b35431c0d9107e390b887f */

void FUN_180018ad1(undefined8 param_1,longlong param_2)

{
  FUN_180012394(**(uint **)(param_2 + 0x48));
  return;
}


/* Address: 0x180018aeb; Evidence: ev_5059030e234258260816cb9be5813ec5065bc1020d9a66be06595c08abb1edc6 */

void FUN_180018aeb(undefined8 param_1,longlong param_2)

{
  FUN_180012394(*(uint *)(param_2 + 0x60));
  return;
}


/* Address: 0x180018b10; Evidence: ev_6fb0ecd03bba7be68c0fbcbcd92d63d2a74b88eff652b44f5eb666f46b5e372a */

/* Library Function - Single Match
    _ctrlfp$filt$0
   
   Library: Visual Studio 2005 Release */

undefined8 _ctrlfp_filt_0(undefined8 *param_1)

{
  undefined8 uVar1;
  
  if ((*(int *)*param_1 == -0x3ffffffb) || (*(int *)*param_1 == -0x3fffffe3)) {
    uVar1 = 1;
  }
  else {
    uVar1 = 0;
  }
  return uVar1;
}


/* Address: 0x180018b40; Evidence: ev_acdd5d9b7fa50567d0707f55e5d7fe4326d636d12be5bd9833160a28cf5cf727 */

undefined8 FUN_180018b40(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 uVar2;
  
  *(undefined8 **)(param_2 + 0x10) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 8) = iVar1;
  if ((iVar1 == -0x3ffffffb) || (iVar1 == -0x3fffffe3)) {
    uVar2 = 1;
  }
  else {
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x180018b70; Evidence: ev_f1b7a59862ae25a1113ba40694a7ffecd5af2cac24000f839327ebdd1765fa33 */

bool FUN_180018b70(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}

