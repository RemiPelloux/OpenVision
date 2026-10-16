
/* Address: 0x180003d90; Evidence: ev_fe46499e641a142a8d6dc47fe1341712fc95426abacb43fcbfed4bf6c7028f60 */

undefined8 FUN_180003d90(undefined8 param_1)

{
  int iVar1;
  char *pcVar2;
  char local_res18 [8];
  longlong *local_res20;
  undefined8 local_18 [2];
  
  iVar1 = napi_get_undefined(param_1,local_18);
  if (iVar1 != 0) {
    napi_get_last_error_info(param_1,&local_res20);
    napi_is_exception_pending(param_1,local_res18);
    if (local_res18[0] == '\0') {
      pcVar2 = "empty error message";
      if ((char *)*local_res20 != (char *)0x0) {
        pcVar2 = (char *)*local_res20;
      }
      napi_throw_error(param_1,0,pcVar2);
    }
    return 0;
  }
  return local_18[0];
}

