
/* Address: 0x18000c368; Evidence: ev_bc4af360bd50f26b3039c669a217ffce79a9865224e4abf5e49790392e2f7a44 */

__acrt_ptd * FUN_18000c368(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_180021098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_180021098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_180021098,(PVOID)0x0);
        FUN_18000c960(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_18000c960((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_180021098,(PVOID)0x0);
    FUN_18000c960((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

