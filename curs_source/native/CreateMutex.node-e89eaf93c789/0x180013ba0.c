
/* Address: 0x180013ba0; Evidence: ev_5cbf9daf4859c486c69c1f86fe8c0a2b1b1df5b9f45f99cbc0c99a566e915e33 */

void FUN_180013ba0(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_1800138ac(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    FUN_180006ab0(param_1,param_2,param_3,param_4);
  }
  return;
}

