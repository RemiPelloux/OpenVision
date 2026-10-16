
/* Address: 0x180004f7c; Evidence: ev_b2f1d02f7fd0582a95a0ef8b34dcbc7671b9c48517d85330e72f5eb24c5df02c */

void FUN_180004f7c(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_180004fac(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

