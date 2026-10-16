
/* Address: 0x18000c948; Evidence: ev_45c54953df927456cbf9d66efbcecb37b968c98563ee43205ec68333b76a7576 */

void FUN_18000c948(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000c978(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

