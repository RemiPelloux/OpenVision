
/* Address: 0x1800022d0; Evidence: ev_5a19cf3bda7be3c4758cf1094b70f3f8f88e1d3692071ae91ca3700752949ac9 */

void FUN_1800022d0(undefined8 *param_1)

{
  int iVar1;
  
  iVar1 = napi_close_handle_scope(*param_1,param_1[1]);
  if (iVar1 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
}

