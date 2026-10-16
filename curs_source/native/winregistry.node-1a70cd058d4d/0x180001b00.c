
/* Address: 0x180001b00; Evidence: ev_402f84542e5103b5bf97da4abf4ae26d305d52050679b2b6c6b99100d437d94a */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res10 [3];
  
                    /* 0x1b00  1  napi_register_module_v1 */
  napi_create_function(param_1,"GetStringRegKey",0xffffffffffffffff,FUN_180001350,0,local_res10);
  napi_set_named_property(param_1,param_2,"GetStringRegKey",local_res10[0]);
  return param_2;
}

