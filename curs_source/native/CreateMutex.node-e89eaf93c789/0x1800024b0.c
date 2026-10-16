
/* Address: 0x1800024b0; Evidence: ev_954f44e6601fb9d2ef3d64e8c7146655a6a9dbb8c95b9242b04fa0367405e49c */

void FUN_1800024b0(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_escapable_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}

