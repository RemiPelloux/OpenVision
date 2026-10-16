
/* Address: 0x180001e40; Evidence: ev_d7e05e7048852da3dfa0ea42c5362a6ba10b7ab2a8ecf068e33f80e4b9bcaf2c */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  undefined8 *puVar2;
  char *pcVar3;
  char acStackX_18 [8];
  longlong *plStackX_20;
  undefined8 auStack_28 [2];
  
  puVar2 = operator_new(0x10);
  *puVar2 = 0;
  puVar2[1] = 0;
  iVar1 = napi_set_instance_data(param_1,puVar2,FUN_180001c40,0);
  if (iVar1 == 0) {
    iVar1 = napi_create_function(param_1,0,0,FUN_180002800,0,auStack_28);
    if (((((iVar1 == 0) &&
          (iVar1 = napi_set_named_property(param_1,param_2,"getKeyMap",auStack_28[0]), iVar1 == 0))
         && (iVar1 = napi_create_function(param_1,0,0,FUN_180003650,0,auStack_28), iVar1 == 0)) &&
        ((iVar1 = napi_set_named_property(param_1,param_2,"getCurrentKeyboardLayout",auStack_28[0]),
         iVar1 == 0 &&
         (iVar1 = napi_create_function(param_1,0,0,FUN_180001910,0,auStack_28), iVar1 == 0)))) &&
       ((iVar1 = napi_set_named_property(param_1,param_2,"onDidChangeKeyboardLayout",auStack_28[0]),
        iVar1 == 0 &&
        ((iVar1 = napi_create_function(param_1,0,0,FUN_180003d90,0,auStack_28), iVar1 == 0 &&
         (iVar1 = napi_set_named_property(param_1,param_2,"isISOKeyboard",auStack_28[0]), iVar1 == 0
         )))))) {
      return param_2;
    }
    napi_get_last_error_info(param_1,&plStackX_20);
    napi_is_exception_pending(param_1,acStackX_18);
  }
  else {
    napi_get_last_error_info(param_1,&plStackX_20);
    napi_is_exception_pending(param_1,acStackX_18);
  }
  if (acStackX_18[0] == '\0') {
    pcVar3 = "empty error message";
    if ((char *)*plStackX_20 != (char *)0x0) {
      pcVar3 = (char *)*plStackX_20;
    }
    napi_throw_error(param_1,0,pcVar3);
  }
  return 0;
}

