
/* Address: 0x18000baa8; Evidence: ev_d30a64681753f38899986fde747c7733436b58dc413361d24751728e88d46d0b */

__acrt_ptd * FUN_18000baa8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_1800271a8,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_1800271a8,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_1800271a8,(PVOID)0x0);
        FUN_18000bff0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_18000bff0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_1800271a8,(PVOID)0x0);
    FUN_18000bff0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

