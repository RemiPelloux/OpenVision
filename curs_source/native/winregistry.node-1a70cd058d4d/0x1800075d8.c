
/* Address: 0x1800075d8; Evidence: ev_e19af69160ebc0d9791281e6afe21cf4959feb0b4ae82924004f1f46e468bbe0 */

__acrt_ptd * FUN_1800075d8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_18001b098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_18001b098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_18001b098,(PVOID)0x0);
        FUN_180007bd0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_180007bd0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_18001b098,(PVOID)0x0);
    FUN_180007bd0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

