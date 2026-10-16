
/* Address: 0x180004fd0; Evidence: ev_930adcdbee0c905dcc630e9078fddbd951040806b245a970c9e7b011ce713232 */

void FUN_180004fd0(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_180005000(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

