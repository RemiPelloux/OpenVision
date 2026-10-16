
/* Address: 0x180002300; Evidence: ev_43e5042688ab1fec3ebae9028b89b7148f2ba8118592528e0c22f1f647f56c79 */

void FUN_180002300(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_escapable_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}

