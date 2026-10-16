
/* Address: 0x180007090; Evidence: ev_9a3cfdb87d8d74ef6e5704833236f433fea1a0325a1b16fd7adfd1fa72b3474a */

/* Library Function - Multiple Matches With Same Base Name
    public: static void __cdecl __FrameHandler3::SetUnwindTryBlock(unsigned __int64 * __ptr64,struct
   _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64,int)
    void __cdecl __SetUnwindTryBlock(unsigned __int64 * __ptr64,struct _xDISPATCHER_CONTEXT *
   __ptr64,struct _s_FuncInfo const * __ptr64,int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void SetUnwindTryBlock(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  longlong *plVar1;
  longlong local_res18 [2];
  
  plVar1 = FUN_180005ee8(param_1,param_2,param_3,local_res18);
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) < param_4) {
    *(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) = param_4;
  }
  return;
}

