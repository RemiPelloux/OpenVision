
/* Address: 0x180001c40; Evidence: ev_2baec055ef9a3599a4d061197f281cbf65bb03d098ee85705aa3b5bf4a312e83 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001c40(undefined8 *param_1,undefined8 *param_2,undefined8 param_3)

{
  LPVOID pvVar1;
  int iVar2;
  undefined8 *puVar3;
  LPVOID pvVar4;
  undefined1 auStackY_98 [32];
  undefined8 local_68;
  undefined8 local_60;
  longlong local_58;
  char local_50;
  undefined1 local_48;
  undefined7 uStack_47;
  undefined8 local_38;
  ulonglong uStack_30;
  ulonglong local_28;
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_98;
  iVar2 = napi_call_function(*param_1,param_3);
  if (iVar2 == 0) {
    *param_2 = *param_1;
  }
  else {
    puVar3 = FUN_180001d60(&local_60,*param_1);
    FUN_1800023f0(puVar3);
    if (0xf < uStack_30) {
      pvVar1 = (LPVOID)CONCAT71(uStack_47,local_48);
      pvVar4 = pvVar1;
      if ((0xfff < uStack_30 + 1) &&
         (pvVar4 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar4)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar4);
    }
    local_38 = 0;
    uStack_30 = 0xf;
    local_48 = 0;
    if ((local_58 != 0) && (local_50 == '\0')) {
      napi_delete_reference(local_60);
    }
    local_68 = 0;
    *param_2 = 0;
  }
  param_2[1] = local_68;
  return param_2;
}

