
/* Address: 0x1800014a0; Evidence: ev_a321c5b86a70fdc4dd1f049cc9f2d85c19cbde77877e57f4b7813b6fd8f62390 */

undefined8 * FUN_1800014a0(undefined8 *param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  longlong lVar3;
  char local_res18 [8];
  longlong local_res20;
  char *local_a8;
  longlong lStack_a0;
  longlong *local_98 [2];
  char *local_88;
  undefined8 local_80;
  undefined8 local_78;
  undefined8 local_70;
  undefined8 local_68;
  longlong local_60;
  undefined4 local_58;
  undefined8 local_50;
  undefined8 local_38;
  
  local_res20 = 0;
  iVar1 = napi_get_last_error_info(param_2,local_98);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Error::New","napi_get_last_error_info");
  }
  local_a8 = (char *)*local_98[0];
  lStack_a0 = local_98[0][1];
  local_38 = local_98[0][2];
  iVar1 = napi_is_exception_pending(param_2,local_res18);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_180001740("Error::New","napi_is_exception_pending");
  }
  if (local_res18[0] == '\0') {
    lVar3 = -1;
    pcVar2 = "Error in native callback";
    if (local_a8 != (char *)0x0) {
      pcVar2 = local_a8;
    }
    do {
      lVar3 = lVar3 + 1;
    } while (pcVar2[lVar3] != '\0');
    iVar1 = napi_create_string_utf8(param_2,pcVar2,lVar3,&local_a8);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("Error::New","napi_create_string_utf8");
    }
    if ((((local_38._4_4_ == 2) || (local_38._4_4_ == 3)) || (local_38._4_4_ == 6)) ||
       (local_38._4_4_ == 7)) {
      iVar1 = napi_create_type_error(param_2,0,local_a8,&local_res20);
    }
    else {
      iVar1 = napi_create_error(param_2,0,local_a8,&local_res20);
    }
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("Error::New","napi_create_error");
    }
  }
  else {
    iVar1 = napi_get_and_clear_last_exception(param_2,&local_res20);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("Error::New","napi_get_and_clear_last_exception");
    }
  }
  lVar3 = local_res20;
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
  if ((local_res20 != 0) &&
     (iVar1 = napi_create_reference(param_2,local_res20,1,param_1 + 4), iVar1 != 0)) {
    iVar1 = napi_create_object(param_2,&local_a8);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("Error::Error","napi_create_object");
    }
    local_88 = "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
    local_80 = 0;
    local_78 = 0;
    local_70 = 0;
    local_68 = 0;
    local_60 = lVar3;
    local_58 = 2;
    local_50 = 0;
    iVar1 = napi_define_properties(param_2,local_a8,1,&local_88);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("Error::Error","napi_define_properties");
    }
    iVar1 = napi_create_reference(param_2,local_a8,1,param_1 + 4);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001740("Error::Error","napi_create_reference");
    }
  }
  return param_1;
}

