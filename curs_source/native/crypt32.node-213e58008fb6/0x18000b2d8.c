
/* Address: 0x18000b2d8; Evidence: ev_b3a89620955ceeedbf786ad757b2a99c9756494124d56fe9594b6899b89c9356 */

void FUN_18000b2d8(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000b308(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

