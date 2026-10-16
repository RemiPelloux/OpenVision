
/* Address: 0x18000fe04; Evidence: ev_2cd0253e3689f51a881c0d4cda464d28b9960be0fee5557a21136f873d775cf9 */

void FUN_18000fe04(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000fe34(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

