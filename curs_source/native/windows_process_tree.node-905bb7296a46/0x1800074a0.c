
/* Address: 0x1800074a0; Evidence: ev_7204cd1ec1204921b7d5ee4736d703a5789d9592e26191f5b222f434c62b9429 */

/* Library Function - Single Match
    public: static void __cdecl __FrameHandler3::FrameUnwindToEmptyState(unsigned __int64 *
   __ptr64,struct _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl
__FrameHandler3::FrameUnwindToEmptyState
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,_s_FuncInfo *param_3)

{
  int iVar1;
  longlong *plVar2;
  longlong lVar3;
  longlong local_res20;
  
  plVar2 = FUN_180007538((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000873c((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_1800072dc((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_18000af64(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}

