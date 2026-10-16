
/* Address: 0x180002480; Evidence: ev_81df02a6d4a60020c7cf511af8d06ee2e7ed8678de37d0a01f7dd57f00853237 */

void FUN_180002480(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001840("HandleScope::~HandleScope","napi_close_handle_scope");
}

