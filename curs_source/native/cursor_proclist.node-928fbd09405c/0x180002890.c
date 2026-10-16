
/* Address: 0x180002890; Evidence: ev_b7f6b1dc0b684a1f28388ab406c5c2aa0fdcf69ebac5f64f929accf7e424ca44 */

void FUN_180002890(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001ff0("HandleScope::~HandleScope","napi_close_handle_scope");
}

