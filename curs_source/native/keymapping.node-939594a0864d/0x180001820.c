
/* Address: 0x180001820; Evidence: ev_69922a24ebccf914d30d227f56f50ebd54a62b9d7b65eff9e82502be40d9b46b */

void FUN_180001820(longlong param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  char local_res8 [8];
  longlong *local_18;
  undefined8 local_10;
  
  if ((param_1 != 0) &&
     ((iVar1 = napi_get_global(param_1,&local_10), iVar1 != 0 ||
      (iVar1 = napi_call_function(param_1,local_10,param_2,0,0,0), iVar1 != 0)))) {
    napi_get_last_error_info(param_1,&local_18);
    napi_is_exception_pending(param_1,local_res8);
    if (local_res8[0] == '\0') {
      pcVar2 = "empty error message";
      if ((char *)*local_18 != (char *)0x0) {
        pcVar2 = (char *)*local_18;
      }
      napi_throw_error(param_1,0,pcVar2);
    }
  }
  return;
}

