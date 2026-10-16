
/* Address: 0x180004d10; Evidence: ev_2abfdba16db8aaf93e499e8588d87569c14dbdc7f24e1bdb79bed2e501910ee9 */

void FUN_180004d10(DWORD *param_1,char param_2)

{
  BOOL BVar1;
  HANDLE hProcess;
  ulonglong uVar2;
  double dVar3;
  _FILETIME local_res8 [2];
  _FILETIME local_res18;
  _FILETIME local_res20;
  _FILETIME local_38;
  _FILETIME local_30;
  _FILETIME local_28;
  _FILETIME local_20;
  
  hProcess = OpenProcess(0x410,0,*param_1);
  if (hProcess != (HANDLE)0x0) {
    BVar1 = GetProcessTimes(hProcess,&local_28,&local_30,&local_res18,local_res8);
    if ((BVar1 != 0) && (BVar1 = GetSystemTimes(&local_20,&local_38,&local_res20), BVar1 != 0)) {
      if (param_2 != '\0') {
        *(longlong *)(param_1 + 4) = (longlong)local_res8[0] + (longlong)local_res18;
        *(longlong *)(param_1 + 6) =
             CONCAT44(local_res20.dwHighDateTime,local_res20.dwLowDateTime) +
             CONCAT44(local_38.dwHighDateTime,local_38.dwLowDateTime);
        CloseHandle(hProcess);
        return;
      }
      dVar3 = (double)(ulonglong)
                      (((longlong)local_res8[0] + (longlong)local_res18) -
                      *(longlong *)(param_1 + 4)) * 100.0;
      uVar2 = (CONCAT44(local_res20.dwHighDateTime,local_res20.dwLowDateTime) +
              CONCAT44(local_38.dwHighDateTime,local_38.dwLowDateTime)) - *(longlong *)(param_1 + 6)
      ;
      if (-1 < (longlong)uVar2) {
        *(double *)(param_1 + 2) = dVar3 / (double)(longlong)uVar2;
        CloseHandle(hProcess);
        return;
      }
      *(double *)(param_1 + 2) = dVar3 / (double)uVar2;
      CloseHandle(hProcess);
      return;
    }
    param_1[2] = 0;
    param_1[3] = 0x7ff80000;
    CloseHandle(hProcess);
  }
  return;
}

