
/* Address: 0x1800017d0; Evidence: ev_c919b29fb8666b3b9adf2a30942b6a9c2601f1ec26a95b365d3971c59d1c0a66 */

undefined8 * FUN_1800017d0(undefined8 *param_1,undefined8 param_2,longlong param_3)

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
  
  param_1[3] = param_2;
  param_1[4] = 0;
  *(undefined1 *)(param_1 + 5) = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  *param_1 = &PTR_FUN_18001f190;
  param_1[6] = 0;
  param_1[7] = 0;
  param_1[8] = 0;
  param_1[9] = 0xf;
  *(undefined1 *)(param_1 + 6) = 0;
  if (param_3 != 0) {
    iVar1 = napi_create_reference(param_2,param_3,1,param_1 + 4);
    if (iVar1 != 0) {
      iVar1 = napi_create_object(param_2,&local_res8);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001740("Error::Error","napi_create_object");
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
        FUN_180001740("Error::Error","napi_define_properties");
      }
      iVar1 = napi_create_reference(param_2,local_res8,1,param_1 + 4);
      if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
        FUN_180001740("Error::Error","napi_create_reference");
      }
    }
  }
  return param_1;
}

