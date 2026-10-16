
/* Address: 0x180018680; Evidence: ev_760e283fc9f93f49604b08476894af25a242400503dc299e8d08cfa30febdbda */

void FUN_180018680(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_180018390(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    FUN_18000b3fc(param_1,param_2,param_3,param_4);
  }
  return;
}

