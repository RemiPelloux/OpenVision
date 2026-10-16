
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

