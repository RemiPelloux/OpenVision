
/* Address: 0x18000d9d8; Evidence: ev_47e1a69320e93dddd9b2b7db3a57197fb4b1d8e14d5eb13958a0960b43a79fff */

__acrt_ptd * FUN_18000d9d8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_180023098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_180023098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_180023098,(PVOID)0x0);
        FUN_18000dfd0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_18000dfd0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_180023098,(PVOID)0x0);
    FUN_18000dfd0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

