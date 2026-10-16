
/* Address: 0x180001050; Evidence: ev_fb74526593dfa3aadf1f63a0281cd232f437509ec7bc975339aeb0107a389a21 */

undefined8 FUN_180001050(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  BOOL BVar2;
  DWORD dwProcessId;
  char *pcVar3;
  char local_res18 [8];
  DWORD local_res20 [2];
  int local_38;
  undefined4 uStack_34;
  longlong local_30;
  undefined8 local_28;
  longlong *local_20;
  undefined8 local_18 [2];
  
  local_30 = 1;
  iVar1 = napi_get_cb_info(param_1,param_2,&local_30,&local_28,0,0);
  if (iVar1 != 0) {
    napi_get_last_error_info(param_1,&local_38);
    napi_is_exception_pending(param_1,local_res18);
    if (local_res18[0] != '\0') {
      return 0;
    }
    local_20 = (longlong *)CONCAT44(uStack_34,local_38);
    goto LAB_18000115a;
  }
  local_res20[0] = 0;
  if (local_30 == 0) {
LAB_180001115:
    dwProcessId = 0xffffffff;
LAB_18000111a:
    BVar2 = AllowSetForegroundWindow(dwProcessId);
    iVar1 = napi_get_boolean(param_1,BVar2 != 0,local_18);
    if (iVar1 == 0) {
      return local_18[0];
    }
  }
  else {
    iVar1 = napi_typeof(param_1,local_28,&local_38);
    if (iVar1 == 0) {
      if ((local_38 == 0) ||
         (iVar1 = napi_get_value_int32(param_1,local_28,local_res20), iVar1 == 0)) {
        dwProcessId = local_res20[0];
        if (local_res20[0] == 0) goto LAB_180001115;
        goto LAB_18000111a;
      }
      iVar1 = napi_throw_type_error(param_1,0,"Invalid number was passed as argument.");
      if (iVar1 == 0) {
        return 0;
      }
    }
  }
  napi_get_last_error_info(param_1,&local_20);
  napi_is_exception_pending(param_1,local_res18);
  if (local_res18[0] != '\0') {
    return 0;
  }
LAB_18000115a:
  pcVar3 = "empty error message";
  if ((char *)*local_20 != (char *)0x0) {
    pcVar3 = (char *)*local_20;
  }
  napi_throw_error(param_1,0,pcVar3);
  return 0;
}

