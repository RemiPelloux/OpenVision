
/* Address: 0x180014f90; Evidence: ev_402477744e6eacaf39c90c5e1749335ef15c51fa2bddb4ae7fb97c1ff5c8dc10 */

void FUN_180014f90(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_180014c9c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    FUN_180007e80(param_1,param_2,param_3,param_4);
  }
  return;
}

