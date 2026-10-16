
/* Address: 0x180011118; Evidence: ev_5cf6a0007a4bb50e198d670ced9f443921ddeb7c99d4c5eb32127a7b3d359d4b */

__acrt_ptd * FUN_180011118(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_1800280d8,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_1800280d8,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_1800280d8,(PVOID)0x0);
        FUN_1800116e0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_1800116e0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_1800280d8,(PVOID)0x0);
    FUN_1800116e0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

