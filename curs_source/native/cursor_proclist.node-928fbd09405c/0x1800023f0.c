
/* Address: 0x1800023f0; Evidence: ev_7bd30e30eac9756e5a8179dcd31d48a630c5f8035b3bbbbd8ddd276719e43516 */

void FUN_1800023f0(undefined8 *param_1)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 local_28;
  undefined8 local_20;
  undefined8 local_18 [2];
  
  FUN_1800027b0(&local_28,*param_1);
  if (param_1[1] != 0) {
    puVar2 = FUN_180002160(param_1,local_18);
    iVar1 = napi_throw(*param_1,puVar2[1]);
    if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ff0("Error::ThrowAsJavaScriptException","napi_throw");
    }
  }
  iVar1 = napi_close_handle_scope(local_28,local_20);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
}

