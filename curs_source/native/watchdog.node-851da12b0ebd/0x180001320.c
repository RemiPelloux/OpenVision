
/* Address: 0x180001320; Evidence: ev_7cee056b1f76693dbc83aac26475cb7f957606449323163861caf6e1f33583e7 */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  char local_res18 [8];
  longlong *local_res20;
  char *local_88;
  undefined8 local_80;
  code *local_78;
  undefined8 local_70;
  undefined8 local_68;
  undefined8 local_60;
  undefined4 local_58;
  undefined8 local_50;
  undefined *local_48;
  undefined8 local_40;
  code *local_38;
  undefined8 local_30;
  undefined8 local_28;
  undefined8 local_20;
  undefined4 local_18;
  undefined8 local_10;
  
                    /* 0x1320  1  napi_register_module_v1 */
  local_88 = "start";
  local_80 = 0;
  local_78 = FUN_180001100;
  local_70 = 0;
  local_68 = 0;
  local_60 = 0;
  local_58 = 0;
  local_48 = &DAT_180016cc0;
  local_38 = FUN_180001210;
  local_50 = 0;
  local_40 = 0;
  local_30 = 0;
  local_28 = 0;
  local_20 = 0;
  local_18 = 0;
  local_10 = 0;
  iVar1 = napi_define_properties(param_1,param_2,2,&local_88);
  if (iVar1 != 0) {
    napi_get_last_error_info(param_1,&local_res20);
    napi_is_exception_pending(param_1,local_res18);
    param_2 = 0;
    if (local_res18[0] == '\0') {
      pcVar2 = "empty error message";
      if ((char *)*local_res20 != (char *)0x0) {
        pcVar2 = (char *)*local_res20;
      }
      napi_throw_error(param_1,0,pcVar2);
    }
  }
  return param_2;
}

