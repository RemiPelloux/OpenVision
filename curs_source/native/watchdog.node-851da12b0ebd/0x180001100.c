
/* Address: 0x180001100; Evidence: ev_73b69e20ddfa1ac345e815820d1ef44b03c3f73c1dfa5fe75860062fdaf0a2dd */

undefined8 FUN_180001100(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  char local_res18 [8];
  int local_res20 [2];
  longlong local_28;
  undefined8 local_20;
  longlong *local_18 [2];
  
  local_28 = 1;
  iVar1 = napi_get_cb_info(param_1,param_2,&local_28,&local_20,0,0);
  if (iVar1 == 0) {
    if (local_28 != 1) {
      napi_throw_error(param_1,0,
                       "assertion (argc == 1) failed: Wrong number of arguments, expected 1.");
      return 0;
    }
    iVar1 = napi_typeof(param_1,local_20,local_res20);
    if (iVar1 == 0) {
      if (local_res20[0] != 3) {
        napi_throw_error(param_1,0,
                         "assertion (t == napi_number) failed: Wrong argument, number expected.");
        return 0;
      }
      iVar1 = napi_get_value_int64(param_1,local_20,&DAT_18001bb38);
      if (iVar1 == 0) {
        uv_thread_create(&DAT_18001bb30,FUN_180001060,0);
        return 0;
      }
    }
  }
  napi_get_last_error_info(param_1,local_18);
  napi_is_exception_pending(param_1,local_res18);
  if (local_res18[0] != '\0') {
    return 0;
  }
  pcVar2 = "empty error message";
  if ((char *)*local_18[0] != (char *)0x0) {
    pcVar2 = (char *)*local_18[0];
  }
  napi_throw_error(param_1,0,pcVar2);
  return 0;
}

