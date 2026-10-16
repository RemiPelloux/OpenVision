
/* Address: 0x180002560; Evidence: ev_b1c01e8aafa720ffed22f22f92abb0d4cc023db96aa45c9b65284986c83acff9 */

void FUN_180002560(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_escapable_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_1800017b0("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}

