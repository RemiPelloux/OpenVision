
/* Address: 0x180002530; Evidence: ev_a1dd2d17a265ea04d5a4bc3eaa170dd64e90e6920726f96dd51d6fcb94510167 */

void FUN_180002530(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_1800017b0("HandleScope::~HandleScope","napi_close_handle_scope");
}

