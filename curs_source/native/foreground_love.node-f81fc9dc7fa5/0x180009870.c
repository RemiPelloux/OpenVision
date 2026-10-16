
/* Address: 0x180009870; Evidence: ev_daab6a2f3372058ed28fb8e7028ca4a0d60a88b2dffe7e2f589c57a0e1becb90 */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_18000c764();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_18001bac0));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_18001bac0) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_180006b50(DAT_18001bac0);
  DAT_18001bac0 = (LPVOID)0x0;
  return;
}

