
/* Address: 0x1800014f0; Evidence: ev_cd3bb16a80528064464957e79d5d51fd0c4085b437054fe133c3c3d355a9a9d9 */

undefined8 * FUN_1800014f0(undefined8 *param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  longlong lVar3;
  char local_res18;
  undefined7 uStackX_19;
  char local_res20 [8];
  longlong local_a8;
  longlong *local_a0;
  char *local_98;
  undefined8 local_90;
  undefined8 local_88;
  undefined8 local_80;
  undefined8 local_78;
  longlong local_70;
  undefined4 local_68;
  undefined8 local_60;
  char *local_58;
  longlong lStack_50;
  undefined8 local_38;
  
  local_a8 = 0;
  iVar1 = napi_get_last_error_info(param_2,&local_a0);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Error::New","napi_get_last_error_info");
  }
  local_58 = (char *)*local_a0;
  lStack_50 = local_a0[1];
  local_38 = local_a0[2];
  iVar1 = napi_is_exception_pending(param_2,local_res20);
  if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("Error::New","napi_is_exception_pending");
  }
  if (local_res20[0] == '\0') {
    lVar3 = -1;
    pcVar2 = "Error in native callback";
    if (local_58 != (char *)0x0) {
      pcVar2 = local_58;
    }
    do {
      lVar3 = lVar3 + 1;
    } while (pcVar2[lVar3] != '\0');
    iVar1 = napi_create_string_utf8(param_2,pcVar2,lVar3,&local_res18);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::New","napi_create_string_utf8");
    }
    if ((((local_38._4_4_ == 2) || (local_38._4_4_ == 3)) || (local_38._4_4_ == 6)) ||
       (local_38._4_4_ == 7)) {
      iVar1 = napi_create_type_error(param_2,0,CONCAT71(uStackX_19,local_res18),&local_a8);
    }
    else {
      iVar1 = napi_create_error(param_2,0,CONCAT71(uStackX_19,local_res18),&local_a8);
    }
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::New","napi_create_error");
    }
  }
  else {
    iVar1 = napi_get_and_clear_last_exception(param_2,&local_a8);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::New","napi_get_and_clear_last_exception");
    }
  }
  lVar3 = local_a8;
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
  if ((local_a8 != 0) && (iVar1 = napi_create_reference(param_2,local_a8,1,param_1 + 4), iVar1 != 0)
     ) {
    iVar1 = napi_create_object(param_2,&local_a0);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::Error","napi_create_object");
    }
    local_98 = "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
    local_90 = 0;
    local_88 = 0;
    local_80 = 0;
    local_78 = 0;
    local_70 = lVar3;
    local_68 = 2;
    local_60 = 0;
    iVar1 = napi_define_properties(param_2,local_a0,1,&local_98);
    if (iVar1 == 10) {
      local_res18 = '\0';
      iVar1 = napi_is_exception_pending(param_2,&local_res18);
      if ((iVar1 != 0) || (local_res18 != '\0')) {
LAB_180001734:
                    /* WARNING: Subroutine does not return */
        FUN_1800017b0("Error::Error","napi_define_properties");
      }
    }
    else if (iVar1 != 0) goto LAB_180001734;
    iVar1 = napi_create_reference(param_2,local_a0,1,param_1 + 4);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_1800017b0("Error::Error","napi_create_reference");
    }
  }
  return param_1;
}

