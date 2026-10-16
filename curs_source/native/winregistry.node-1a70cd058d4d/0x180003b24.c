
/* Address: 0x180003b24; Evidence: ev_2429cc218f911a948e43f7bf755de92aa4e43e7ccc37cf16ed0a783f1b7d531e */

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
  
  plVar2 = FUN_180003b88((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000439c((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_180003a94((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_180005544(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}

