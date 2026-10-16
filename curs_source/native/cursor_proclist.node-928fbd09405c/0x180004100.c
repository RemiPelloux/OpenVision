
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

