
/* Address: 0x180013920; Evidence: ev_2af63903c450df351fb205bc33f266812426a55dd5898c4639f3da7c8bfecec9 */

void FUN_180013920(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_18001362c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    FUN_180006830(param_1,param_2,param_3,param_4);
  }
  return;
}

