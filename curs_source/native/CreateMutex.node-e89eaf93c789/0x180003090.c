
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

