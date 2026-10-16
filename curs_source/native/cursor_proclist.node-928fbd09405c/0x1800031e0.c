
/* Address: 0x1800031e0; Evidence: ev_e76db1657b68384992910625645e2afd66596c3a1a8c0d438b4af3004d275aa9 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_1800031e0(longlong *param_1,undefined8 param_2,int param_3)

{
  code *pcVar1;
  LPVOID pvVar2;
  int iVar3;
  LPVOID pvVar4;
  longlong *plVar5;
  undefined1 auStackY_98 [32];
  undefined8 local_60;
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
  if (param_3 != 0xb) {
    FUN_1800027b0(&local_60,param_1[1]);
    if (param_1[0xb] == 0) {
      (**(code **)(*param_1 + 0x20))(param_1);
    }
    else {
      pcVar1 = *(code **)(*param_1 + 0x28);
      plVar5 = param_1 + 9;
      if (0xf < (ulonglong)param_1[0xc]) {
        plVar5 = (longlong *)*plVar5;
      }
      FUN_180004bf0(&local_50,param_1[1],plVar5,param_1[0xb],napi_create_error_exref);
      (*pcVar1)(param_1,&local_50);
      if (0xf < uStack_20) {
        pvVar2 = (LPVOID)CONCAT71(uStack_37,local_38);
        pvVar4 = pvVar2;
        if ((0xfff < uStack_20 + 1) &&
           (pvVar4 = *(LPVOID *)((longlong)pvVar2 + -8),
           0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar4)))) {
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
    }
    iVar3 = napi_close_handle_scope(local_60,local_58);
    if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
    }
  }
  if ((char)param_1[0xd] == '\0') {
    (**(code **)(*param_1 + 0x30))(param_1);
  }
  return;
}

