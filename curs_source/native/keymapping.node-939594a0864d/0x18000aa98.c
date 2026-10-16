
/* Address: 0x18000aa98; Evidence: ev_f71a94ee8ad4cc4e074c2ae819650420de0ddfc5362d6f1997e02d17623e6797 */

void FUN_18000aa98(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000aac8(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

