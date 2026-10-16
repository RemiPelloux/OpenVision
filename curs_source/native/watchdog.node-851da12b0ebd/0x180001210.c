
/* Address: 0x180001210; Evidence: ev_7f6b7fd14dfca2070484589a67c6d054cd4d47ccf36a99733010034490dac42c */

undefined8 FUN_180001210(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  int iVar2;
  undefined8 uVar3;
  char *pcVar4;
  char local_res18 [8];
  int local_res20 [2];
  uint local_28 [2];
  longlong local_20;
  undefined8 local_18;
  longlong *local_10;
  
  local_20 = 1;
  iVar2 = napi_get_cb_info(param_1,param_2,&local_20,&local_18,0,0);
  if (iVar2 == 0) {
    if (local_20 != 1) {
      napi_throw_error(param_1,0,
                       "assertion (argc == 1) failed: Wrong number of arguments, expected 1.");
      return 0;
    }
    iVar2 = napi_typeof(param_1,local_18,local_res20);
    if (iVar2 == 0) {
      if (local_res20[0] != 3) {
        napi_throw_error(param_1,0,
                         "assertion (t == napi_number) failed: Wrong argument, number expected.");
        return 0;
      }
      iVar2 = napi_get_value_int32(param_1,local_18,local_28);
      if (iVar2 == 0) {
        FUN_18000503c(local_28[0]);
        pcVar1 = (code *)swi(3);
        uVar3 = (*pcVar1)();
        return uVar3;
      }
    }
  }
  napi_get_last_error_info(param_1,&local_10);
  napi_is_exception_pending(param_1,local_res18);
  if (local_res18[0] != '\0') {
    return 0;
  }
  pcVar4 = "empty error message";
  if ((char *)*local_10 != (char *)0x0) {
    pcVar4 = (char *)*local_10;
  }
  napi_throw_error(param_1,0,pcVar4);
  return 0;
}

