
/* Address: 0x18000f660; Evidence: ev_9c422d03d9e5bb2dd18c6fb036cce69da4b48df16cb2e2d0dba20f48f9511cdc */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_1800124e4();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_180022c28));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_180022c28) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_18000c960(DAT_180022c28);
  DAT_180022c28 = (LPVOID)0x0;
  return;
}

