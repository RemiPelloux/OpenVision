
/* Address: 0x1800027f4; Evidence: ev_47744a1175e628993f66d61b2da71f3c26b11f5186ab1366c696ccc10d874538 */

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
  
  plVar2 = FUN_180002858((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000306c((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_180002764((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_1800042b4(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}

