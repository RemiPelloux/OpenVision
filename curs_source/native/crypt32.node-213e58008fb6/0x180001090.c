
/* Address: 0x180001090; Evidence: ev_6cfc00641f06f1d31edf5627a00c01eca572fc2eacbcb85a9e65d76593860a81 */

char * FUN_180001090(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

