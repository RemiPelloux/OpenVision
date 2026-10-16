
/* Address: 0x1800072d8; Evidence: ev_778420a48d1e80cca02e1c65c68242d6b611a26ae27a5104041f48c4182cdf18 */

/* Library Function - Multiple Matches With Same Base Name
    public: static int __cdecl __FrameHandler3::GetUnwindTryBlock(unsigned __int64 * __ptr64,struct
   _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
    int __cdecl __GetUnwindTryBlock(unsigned __int64 * __ptr64,struct _xDISPATCHER_CONTEXT *
   __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Library: Visual Studio */

undefined4 GetUnwindTryBlock(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  longlong *plVar1;
  longlong local_res18 [2];
  
  plVar1 = FUN_180006168(param_1,param_2,param_3,local_res18);
  return *(undefined4 *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1);
}

