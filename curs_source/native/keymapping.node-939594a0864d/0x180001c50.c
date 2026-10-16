
/* Address: 0x180001c50; Evidence: ev_8e4c1c05501ff8e636d628115418f17b501e6486d6b54fdfe26e840c1439d1bf */

undefined8 FUN_180001c50(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  undefined8 *puVar2;
  char *pcVar3;
  char local_res18 [8];
  longlong *local_res20;
  undefined8 local_28 [2];
  
  puVar2 = operator_new(0x10);
  *puVar2 = 0;
  puVar2[1] = 0;
  iVar1 = napi_set_instance_data(param_1,puVar2,FUN_180001c40,0);
  if (iVar1 == 0) {
    iVar1 = napi_create_function(param_1,0,0,FUN_180002800,0,local_28);
    if (((((iVar1 == 0) &&
          (iVar1 = napi_set_named_property(param_1,param_2,"getKeyMap",local_28[0]), iVar1 == 0)) &&
         (iVar1 = napi_create_function(param_1,0,0,FUN_180003650,0,local_28), iVar1 == 0)) &&
        ((iVar1 = napi_set_named_property(param_1,param_2,"getCurrentKeyboardLayout",local_28[0]),
         iVar1 == 0 &&
         (iVar1 = napi_create_function(param_1,0,0,FUN_180001910,0,local_28), iVar1 == 0)))) &&
       ((iVar1 = napi_set_named_property(param_1,param_2,"onDidChangeKeyboardLayout",local_28[0]),
        iVar1 == 0 &&
        ((iVar1 = napi_create_function(param_1,0,0,FUN_180003d90,0,local_28), iVar1 == 0 &&
         (iVar1 = napi_set_named_property(param_1,param_2,"isISOKeyboard",local_28[0]), iVar1 == 0))
        )))) {
      return param_2;
    }
    napi_get_last_error_info(param_1,&local_res20);
    napi_is_exception_pending(param_1,local_res18);
  }
  else {
    napi_get_last_error_info(param_1,&local_res20);
    napi_is_exception_pending(param_1,local_res18);
  }
  if (local_res18[0] == '\0') {
    pcVar3 = "empty error message";
    if ((char *)*local_res20 != (char *)0x0) {
      pcVar3 = (char *)*local_res20;
    }
    napi_throw_error(param_1,0,pcVar3);
  }
  return 0;
}

