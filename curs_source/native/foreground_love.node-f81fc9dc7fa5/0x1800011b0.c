
/* Address: 0x1800011b0; Evidence: ev_779208594a0ce3842392c47bdbbfea87da812af69f3676517bf2d829e53f4435 */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  char local_res18 [8];
  longlong *local_res20;
  undefined8 local_18 [2];
  
                    /* 0x11b0  1  napi_register_module_v1 */
  iVar1 = napi_create_function
                    (param_1,"allowSetForegroundWindow",0xffffffffffffffff,FUN_180001050,0,local_18)
  ;
  if ((iVar1 == 0) &&
     (iVar1 = napi_set_named_property(param_1,param_2,"allowSetForegroundWindow",local_18[0]),
     iVar1 == 0)) {
    return param_2;
  }
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

