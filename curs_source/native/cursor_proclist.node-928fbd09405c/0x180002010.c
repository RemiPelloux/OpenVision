
/* Address: 0x180002010; Evidence: ev_1e2dfbb1cde87c656974483263c9a7e18d68a04f06fc06a0a8ea205806b548a0 */

undefined8 * FUN_180002010(undefined8 *param_1,undefined8 param_2,longlong param_3)

{
  int iVar1;
  undefined8 local_res8;
  char *local_58;
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40;
  undefined8 local_38;
  longlong local_30;
  undefined4 local_28;
  undefined8 local_20;
  
  *param_1 = param_2;
  param_1[1] = 0;
  *(undefined1 *)(param_1 + 2) = 0;
  param_1[3] = 0;
  param_1[4] = 0;
  param_1[5] = 0;
  param_1[6] = 0xf;
  *(undefined1 *)(param_1 + 3) = 0;
  if (param_3 != 0) {
    iVar1 = napi_create_reference(param_2,param_3,1,param_1 + 1);
    if (iVar1 != 0) {
      iVar1 = napi_create_object(param_2,&local_res8);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::Error","napi_create_object");
      }
      local_58 = "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
      local_50 = 0;
      local_48 = 0;
      local_40 = 0;
      local_38 = 0;
      local_28 = 2;
      local_20 = 0;
      local_30 = param_3;
      iVar1 = napi_define_properties(param_2,local_res8,1,&local_58);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::Error","napi_define_properties");
      }
      iVar1 = napi_create_reference(param_2,local_res8,1,param_1 + 1);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001ff0("Error::Error","napi_create_reference");
      }
    }
  }
  return param_1;
}

