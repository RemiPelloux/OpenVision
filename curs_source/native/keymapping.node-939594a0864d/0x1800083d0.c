
/* Address: 0x1800083d0; Evidence: ev_72ce0efaa18c718a4a293e6672d76f4a8dec9b46e453af0402528aa3d1fd272d */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_18000c4f4();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_1800282b8));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_1800282b8) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_18000bff0(DAT_1800282b8);
  DAT_1800282b8 = (LPVOID)0x0;
  return;
}

