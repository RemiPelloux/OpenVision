
/* Address: 0x180001840; Evidence: ev_c9cc27377beff304413161259bfc79a59c2b0d84e306d62e05ac1b19f966935b */

undefined8 * FUN_180001840(undefined8 *param_1,undefined8 param_2,longlong param_3)

{
  int iVar1;
  char local_res8 [8];
  undefined8 local_res10;
  char *local_58;
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40;
  undefined8 local_38;
  longlong local_30;
  undefined4 local_28;
  undefined8 local_20;
  
  param_1[3] = param_2;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001d090;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  if ((param_3 != 0) && (iVar1 = napi_create_reference(param_2,param_3,1,param_1 + 4), iVar1 != 0))
  {
    iVar1 = napi_create_object(param_2,&local_res10);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::Error","napi_create_object");
    }
    local_58 = "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
    local_50 = 0;
    local_48 = 0;
    local_40 = 0;
    local_38 = 0;
    local_28 = 2;
    local_20 = 0;
    local_30 = param_3;
    iVar1 = napi_define_properties(param_2,local_res10,1,&local_58);
    if (iVar1 == 10) {
      local_res8[0] = '\0';
      iVar1 = napi_is_exception_pending(param_2,local_res8);
      if ((iVar1 != 0) || (local_res8[0] != '\0')) {
LAB_18000199a:
                    /* WARNING: Subroutine does not return */
        FUN_1800017b0("Error::Error","napi_define_properties");
      }
    }
    else if (iVar1 != 0) goto LAB_18000199a;
    iVar1 = napi_create_reference(param_2,local_res10,1,param_1 + 4);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::Error","napi_create_reference");
    }
  }
  return param_1;
}

