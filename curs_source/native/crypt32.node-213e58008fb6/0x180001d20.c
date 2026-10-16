
/* Address: 0x180001d20; Evidence: ev_00dd3281b9d11346d7840aacc1414275eb8f7f05a74d9399488b5810b8e48b09 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180001d20(longlong param_1)

{
  longlong *plVar1;
  LPVOID pvVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40 [2];
  longlong local_30 [2];
  undefined8 local_20;
  undefined8 uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180021000 ^ (ulonglong)auStackY_88;
  plVar1 = (longlong *)(param_1 + 0x30);
  if ((*(longlong *)(param_1 + 0x40) == 0) && (*(longlong *)(param_1 + 0x18) != 0)) {
    puVar3 = FUN_1800021e0((longlong *)(param_1 + 0x18),local_40);
    local_50 = *puVar3;
    local_48 = puVar3[1];
    FUN_180001320(&local_50,(undefined1 (*) [32])local_30);
    if (plVar1 != local_30) {
      if (0xf < *(ulonglong *)(param_1 + 0x48)) {
        pvVar2 = (LPVOID)*plVar1;
        pvVar4 = pvVar2;
        if ((0xfff < *(ulonglong *)(param_1 + 0x48) + 1) &&
           (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
           0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_18000c960(pvVar4);
      }
      *plVar1 = CONCAT71(local_30[0]._1_7_,(undefined1)local_30[0]);
      *(longlong *)(param_1 + 0x38) = local_30[1];
      *(undefined8 *)(param_1 + 0x40) = local_20;
      *(undefined8 *)(param_1 + 0x48) = uStack_18;
      local_20 = 0;
      uStack_18 = 0xf;
      local_30[0]._0_1_ = 0;
    }
    FUN_1800035d0(local_30);
  }
  return plVar1;
}

