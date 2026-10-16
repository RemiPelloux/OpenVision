
/* Address: 0x18000f8e0; Evidence: ev_e3b1cab913bbcac84087bae7238c10f93b01bb094bebaf311bee7e9f62163a61 */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_180012764();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_180023c28));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_180023c28) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_18000cbe0(DAT_180023c28);
  DAT_180023c28 = (LPVOID)0x0;
  return;
}

