
/* Address: 0x18000c5e8; Evidence: ev_4d1e724380780be0fc1cc52fa005e06d00b133a85f887da41e8349a0af0da520 */

__acrt_ptd * FUN_18000c5e8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_180022098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_180022098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_180022098,(PVOID)0x0);
        FUN_18000cbe0(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_18000cbe0((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_180022098,(PVOID)0x0);
    FUN_18000cbe0((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}

