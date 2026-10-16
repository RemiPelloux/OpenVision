
/* Address: 0x180005210; Evidence: ev_8590f796fe999467cbc40147a579b2f287650c7d00388c5578b1a7cff662f30c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180005210(undefined8 *param_1,undefined8 *param_2)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined8 uVar5;
  undefined1 auStackY_88 [32];
  undefined8 local_58;
  undefined8 local_50;
  longlong local_48;
  char local_40;
  undefined1 local_38;
  undefined7 uStack_37;
  undefined8 local_28;
  ulonglong uStack_20;
  ulonglong local_18;
  
  local_18 = DAT_180028040 ^ (ulonglong)auStackY_88;
  uVar5 = *param_1;
  if (param_1[1] == 0) {
    local_58 = 0;
  }
  else {
    iVar2 = napi_get_reference_value();
    uVar5 = *param_1;
    if (iVar2 != 0) {
      puVar3 = FUN_180001d60(&local_50,uVar5);
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
      local_58 = 0;
      *param_2 = 0;
      goto LAB_1800052e9;
    }
  }
  *param_2 = uVar5;
LAB_1800052e9:
  param_2[1] = local_58;
  return param_2;
}

