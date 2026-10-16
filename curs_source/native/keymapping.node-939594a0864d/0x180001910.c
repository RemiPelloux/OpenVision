
/* Address: 0x180001910; Evidence: ev_99f9c37c9842c261eced7f9ff1b6a624d4b73600819f1b3cc07e17dce84fb3cd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180001910(undefined8 param_1,undefined8 param_2)

{
  undefined8 *puVar1;
  int iVar2;
  HRESULT HVar3;
  undefined8 *puVar4;
  char *pcVar5;
  undefined8 uVar6;
  undefined *puVar7;
  undefined8 uVar8;
  undefined8 *puVar9;
  undefined8 *puVar10;
  LPVOID local_res18;
  int local_res20 [2];
  undefined8 *local_68;
  longlong local_60;
  longlong *local_58;
  undefined8 local_50;
  undefined8 local_48;
  undefined8 local_40;
  undefined8 local_38 [2];
  
  local_60 = 2;
  iVar2 = napi_get_instance_data(param_1,&local_68);
  if (iVar2 != 0) {
    napi_get_last_error_info(param_1,&local_58);
    napi_is_exception_pending(param_1,&local_res18);
    goto LAB_180001a76;
  }
  iVar2 = napi_get_cb_info(param_1,param_2,&local_60,local_38,0,0);
  if (iVar2 == 0) {
    if (local_60 != 1) {
      napi_throw_error(param_1,0,
                       "assertion (argc == 1) failed: Wrong number of arguments. Expects a single argument."
                      );
      return 0;
    }
    iVar2 = napi_typeof(param_1,local_38[0],local_res20);
    if (iVar2 == 0) {
      if (local_res20[0] != 7) {
        napi_throw_error(param_1,0,
                         "assertion (valuetype0 == napi_function) failed: Wrong type of arguments. Expects a function as first argument."
                        );
        return 0;
      }
      iVar2 = napi_create_string_utf8
                        (param_1,"onDidChangeKeyboardLayoutCallback",0xffffffffffffffff,&local_50);
      if ((iVar2 == 0) &&
         (iVar2 = napi_create_threadsafe_function
                            (param_1,local_38[0],0,local_50,0,1,0,FUN_1800018c0,0,FUN_180001820,
                             &local_48), puVar1 = local_68, iVar2 == 0)) {
        local_68[1] = local_48;
        puVar4 = operator_new(0x28);
        puVar10 = (undefined8 *)&DAT_1800194f0;
        uVar6 = 0;
        uVar8 = 1;
        *puVar4 = &PTR_FUN_180023f50;
        puVar4[1] = puVar1;
        *(undefined4 *)(puVar4 + 2) = 1;
        puVar4[3] = 0;
        *(undefined4 *)(puVar4 + 4) = 0xffffffff;
        HVar3 = CoCreateInstance((IID *)&DAT_180019520,(LPUNKNOWN)0x0,1,(IID *)&DAT_1800194f0,
                                 &local_res18);
        if (HVar3 < 0) {
          FUN_180001e60(0x180023e88,uVar6,uVar8,puVar10);
          goto LAB_180001b9d;
        }
        puVar9 = puVar4 + 3;
        puVar7 = &DAT_180019510;
        iVar2 = (*(code *)**(undefined8 **)CONCAT71(local_res18._1_7_,(char)local_res18))();
        if (iVar2 < 0) {
          pcVar5 = "native-keymap: Could not obtain ITfSource.\n";
LAB_180001b87:
          FUN_180001e60((longlong)pcVar5,puVar7,puVar9,puVar10);
        }
        else {
          puVar10 = puVar4 + 4;
          puVar7 = &DAT_180019500;
          puVar9 = puVar4;
          iVar2 = (**(code **)(*(longlong *)puVar4[3] + 0x18))();
          if (iVar2 < 0) {
            pcVar5 = "native-keymap: Could not register ITfInputProcessorProfileActivationSink.\n";
            goto LAB_180001b87;
          }
        }
        (**(code **)(*(longlong *)CONCAT71(local_res18._1_7_,(char)local_res18) + 0x10))();
LAB_180001b9d:
        *puVar1 = puVar4;
        napi_add_env_cleanup_hook(param_1,FUN_1800018f0,local_68);
        iVar2 = napi_get_undefined(param_1,&local_40);
        if (iVar2 != 0) {
          napi_get_last_error_info(param_1,&local_58);
          napi_is_exception_pending(param_1,&local_res18);
          local_40 = 0;
          if ((char)local_res18 == '\0') {
            pcVar5 = "empty error message";
            if ((char *)*local_58 != (char *)0x0) {
              pcVar5 = (char *)*local_58;
            }
            napi_throw_error(param_1,0,pcVar5);
            return 0;
          }
        }
        return local_40;
      }
    }
  }
  napi_get_last_error_info(param_1,&local_58);
  napi_is_exception_pending(param_1,&local_res18);
LAB_180001a76:
  if ((char)local_res18 == '\0') {
    pcVar5 = "empty error message";
    if ((char *)*local_58 != (char *)0x0) {
      pcVar5 = (char *)*local_58;
    }
    napi_throw_error(param_1,0,pcVar5);
  }
  return 0;
}

