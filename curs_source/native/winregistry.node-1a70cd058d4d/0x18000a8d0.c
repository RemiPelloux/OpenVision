
/* Address: 0x18000a8d0; Evidence: ev_8b038473e9a1567d8d866933f19bce90a10caa781facb27fb535d1a25117b8ff */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_18000d754();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_18001cb88));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_18001cb88) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_180007bd0(DAT_18001cb88);
  DAT_18001cb88 = (LPVOID)0x0;
  return;
}

