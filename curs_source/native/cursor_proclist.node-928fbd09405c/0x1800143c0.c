
/* Address: 0x1800143c0; Evidence: ev_7508b99fcc3d7c3e3f19281d41f003405f7c410ad63f1c12dad2258d47e383fc */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_180017244();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_180029d58));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_180029d58) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_1800116e0(DAT_180029d58);
  DAT_180029d58 = (LPVOID)0x0;
  return;
}

