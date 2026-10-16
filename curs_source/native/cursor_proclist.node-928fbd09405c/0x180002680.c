
/* Address: 0x180002680; Evidence: ev_bbe4eff663f20317ae0ff1f57af35e327ffadaaf959e02af6ecae4a20cd6b54d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002680(longlong param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_98;
  local_68 = *(undefined8 *)(param_1 + 8);
  if (*(longlong *)(param_1 + 0x20) == 0) {
    iVar2 = napi_get_undefined(local_68,&local_58);
    uStack_60 = local_58;
    if (iVar2 != 0) {
      puVar3 = FUN_180001d60(&local_50,local_68);
      FUN_1800023f0(puVar3);
      if (0xf < uStack_20) {
        pvVar1 = (LPVOID)CONCAT71(uStack_37,local_38);
        pvVar4 = pvVar1;
        if ((0xfff < uStack_20 + 1) &&
           (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
           0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        thunk_FUN_1800116e0(pvVar4);
      }
      local_28 = 0;
      uStack_20 = 0xf;
      local_38 = 0;
      if ((local_48 != 0) && (local_40 == '\0')) {
        napi_delete_reference(local_50);
      }
      local_68 = 0;
      uStack_60 = 0;
    }
  }
  else {
    uStack_60 = **(undefined8 **)(param_1 + 0x28);
  }
  *param_2 = local_68;
  param_2[1] = uStack_60;
  return param_2;
}

