
/* Address: 0x1800063b8; Evidence: ev_97cca0bd41e1c233a1ff117e1b660c5205406cbb0917c2a127573a0abe4e0db9 */

__acrt_ptd * FUN_1800063b8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_180019098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_180019098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_180019098,(PVOID)0x0);
        FUN_180006a30(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_180006a30((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_180019098,(PVOID)0x0);
    FUN_180006a30((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

