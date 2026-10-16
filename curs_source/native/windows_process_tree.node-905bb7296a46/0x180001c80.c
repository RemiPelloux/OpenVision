
/* Address: 0x180001c80; Evidence: ev_6efd39d1a9d992b835885783eb632c411ef4c89201864e969ea2913b5c6c8e91 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined1 (*) [32] FUN_180001c80(longlong param_1)

{
  undefined1 (*pauVar1) [32];
  LPVOID pvVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined1 (*pauVar5) [32];
  LPVOID pvVar6;
  undefined1 auStackY_88 [32];
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40 [2];
  longlong local_30 [4];
  ulonglong local_10;
  
  local_10 = DAT_180023000 ^ (ulonglong)auStackY_88;
  pauVar1 = (undefined1 (*) [32])(param_1 + 0x30);
  if ((*(longlong *)(param_1 + 0x40) == 0) && (*(longlong *)(param_1 + 0x18) != 0)) {
    puVar4 = FUN_1800020d0((longlong *)(param_1 + 0x18),local_40);
    local_50 = *puVar4;
    local_48 = puVar4[1];
    pauVar5 = FUN_180001320(&local_50,(undefined1 (*) [32])local_30);
    if (pauVar1 != pauVar5) {
      if (0xf < *(ulonglong *)(param_1 + 0x48)) {
        pvVar2 = *(LPVOID *)*pauVar1;
        pvVar6 = pvVar2;
        if ((0xfff < *(ulonglong *)(param_1 + 0x48) + 1) &&
           (pvVar6 = *(LPVOID *)((longlong)pvVar2 + -8),
           0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar6)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_18000dfd0(pvVar6);
      }
      *(undefined8 *)(param_1 + 0x40) = 0;
      *(undefined8 *)(param_1 + 0x48) = 0xf;
      (*pauVar1)[0] = 0;
      uVar3 = *(undefined8 *)(*pauVar5 + 8);
      *(undefined8 *)*pauVar1 = *(undefined8 *)*pauVar5;
      *(undefined8 *)(param_1 + 0x38) = uVar3;
      uVar3 = *(undefined8 *)(*pauVar5 + 0x18);
      *(undefined8 *)(param_1 + 0x40) = *(undefined8 *)(*pauVar5 + 0x10);
      *(undefined8 *)(param_1 + 0x48) = uVar3;
      *(undefined8 *)(*pauVar5 + 0x10) = 0;
      *(undefined8 *)(*pauVar5 + 0x18) = 0xf;
      (*pauVar5)[0] = 0;
    }
    FUN_180002f40(local_30);
  }
  return pauVar1;
}

