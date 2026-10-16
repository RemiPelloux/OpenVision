
/* Address: 0x18000b558; Evidence: ev_2d1ef98fb5ea85d0fa62b331ed70d5d92110f4b8bea43490355ab1dec5f9e540 */

void FUN_18000b558(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_18000b588(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}

