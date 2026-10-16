
/* Address: 0x18000aa20; Evidence: ev_ad5be452e2df5e6152f6af260739373c32d40be97ee186338b01a043e3196fdb */

/* Library Function - Single Match
    public: static void __cdecl __FrameHandler3::FrameUnwindToEmptyState(unsigned __int64 *
   __ptr64,struct _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl
__FrameHandler3::FrameUnwindToEmptyState
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,_s_FuncInfo *param_3)

{
  int iVar1;
  __uint64 *p_Var2;
  longlong lVar3;
  longlong local_res20;
  
  p_Var2 = (__uint64 *)
           FUN_18000aab8((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000bcb0((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_18000a85c((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_18000e49c(p_Var2,(ulonglong *)param_2,param_3,iVar1);
  return;
}

