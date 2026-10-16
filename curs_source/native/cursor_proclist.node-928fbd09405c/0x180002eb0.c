
/* Address: 0x180002eb0; Evidence: ev_db5344569f93a4dd97d3f9ad05503342a11ad3aa453252de0e7efeaa25c8dd3e */

void FUN_180002eb0(longlong *param_1)

{
  longlong *plVar1;
  undefined8 uVar2;
  int iVar3;
  undefined8 *puVar4;
  LPVOID pvVar5;
  char local_res8 [8];
  undefined8 local_68;
  undefined8 local_60;
  undefined8 local_58 [2];
  undefined8 local_48 [2];
  undefined8 local_38 [2];
  LPVOID local_28 [2];
  longlong local_18;
  
  if (param_1[7] != 0) {
    plVar1 = param_1 + 6;
    (**(code **)(*param_1 + 0x38))(param_1,local_28,*plVar1);
    puVar4 = FUN_180005210(param_1 + 3,local_48);
    uVar2 = puVar4[1];
    FUN_1800028c0(&local_68,*plVar1);
    puVar4 = FUN_180005210(plVar1,local_38);
    FUN_180001c40(puVar4,local_58,uVar2);
    iVar3 = napi_is_exception_pending(local_68,local_res8);
    if ((iVar3 == 0) && (local_res8[0] != '\0')) {
      FUN_180005210(plVar1,local_38);
      iVar3 = napi_close_escapable_handle_scope(local_68,local_60);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope",
                      "napi_close_escapable_handle_scope");
      }
    }
    else {
      FUN_1800029d0(&local_68,local_38);
      iVar3 = napi_close_escapable_handle_scope(local_68,local_60);
      if (iVar3 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope",
                      "napi_close_escapable_handle_scope");
      }
    }
    if (local_28[0] != (LPVOID)0x0) {
      pvVar5 = local_28[0];
      if ((0xfff < (local_18 - (longlong)local_28[0] & 0xfffffffffffffff8U)) &&
         (pvVar5 = *(LPVOID *)((longlong)local_28[0] + -8),
         0x1f < (ulonglong)((longlong)local_28[0] + (-8 - (longlong)pvVar5)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar5);
    }
  }
  return;
}

