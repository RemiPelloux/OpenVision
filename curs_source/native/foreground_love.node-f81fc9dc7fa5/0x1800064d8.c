
/* Address: 0x1800064d8; Evidence: ev_6bc53f41a864993fc73a55499e66c4aa1de9fb952ccc702da4fff0955fbcc5ee */

__acrt_ptd * FUN_1800064d8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_18001a098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_18001a098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_18001a098,(PVOID)0x0);
        FUN_180006b50(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_180006b50((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_18001a098,(PVOID)0x0);
    FUN_180006b50((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

