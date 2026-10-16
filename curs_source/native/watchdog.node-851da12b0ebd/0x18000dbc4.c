
/* Address: 0x18000dbc4; Evidence: ev_0d0e0e4a3ed46c5de8eea40485429f05603eff2f4c408217a6180e2ac79cc0a3 */

void FUN_18000dbc4(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_18000db5c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}

