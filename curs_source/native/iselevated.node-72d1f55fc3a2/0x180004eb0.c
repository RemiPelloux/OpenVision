
/* Address: 0x180004eb0; Evidence: ev_e1832710d006849296ca21f97d413f1d201d5ae57347a7a42aa13d88ba36dd77 */

void FUN_180004eb0(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_180004ee0(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

