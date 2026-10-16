
/* Address: 0x180003e40; Evidence: ev_7d849b3ec78096a9a2e71899c16f1748292de0237caee07091a869fc6081f3ff */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003e40(longlong param_1)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_88 [32];
  undefined8 local_58 [2];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong uStack_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_88;
  FUN_180003740(local_58,*(undefined8 *)(param_1 + 8),(undefined8 *)(param_1 + 0xa0));
  iVar2 = napi_resolve_deferred(*(undefined8 *)(param_1 + 0x88),*(undefined8 *)(param_1 + 0x90));
  if (iVar2 != 0) {
    puVar3 = FUN_180001d60(&local_48,*(undefined8 *)(param_1 + 0x88));
    FUN_1800023f0(puVar3);
    if (0xf < uStack_18) {
      pvVar1 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_18 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_20 = 0;
    uStack_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  return;
}

