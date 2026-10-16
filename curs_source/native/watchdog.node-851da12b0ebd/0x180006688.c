
/* Address: 0x180006688; Evidence: ev_134c78ca29a17f6c7a8ee04a4f9bc91fb6f46574c0c3b969f3e61511522661d2 */

__acrt_ptd * FUN_180006688(void)

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
        FUN_180006d00(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_180006d00((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_18001a098,(PVOID)0x0);
    FUN_180006d00((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

