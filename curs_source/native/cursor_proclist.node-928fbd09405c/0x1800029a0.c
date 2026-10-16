
/* Address: 0x1800029a0; Evidence: ev_f40089d0ef406d5678a5992c63c16d3bbc23755e54f4916dc5c41c35810cdc01 */

void FUN_1800029a0(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_escapable_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001ff0("EscapableHandleScope::~EscapableHandleScope","napi_close_escapable_handle_scope");
}

