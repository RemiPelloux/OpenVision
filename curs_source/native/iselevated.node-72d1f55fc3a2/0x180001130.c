
/* Address: 0x180001130; Evidence: ev_2075bf4918e23151a8d2f49f1e626774a0d3b38d8370adc3324039d19a358bfa */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res10 [3];
  
                    /* 0x1130  1  napi_register_module_v1 */
  napi_create_function(param_1,"isElevated",0xffffffffffffffff,FUN_180001050,0,local_res10);
  napi_set_named_property(param_1,param_2,"isElevated",local_res10[0]);
  return param_2;
}

