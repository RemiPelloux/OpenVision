
/* Address: 0x180006548; Evidence: ev_9460ec3c0cc960936dc7cf71d4f2ea7803cdf421ed4f9e38b6d6efae15234ed5 */

void FUN_180006548(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_180006578(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

