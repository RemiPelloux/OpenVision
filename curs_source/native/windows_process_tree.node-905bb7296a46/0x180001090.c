
/* Address: 0x180001090; Evidence: ev_3f676cb07ec6a008690a8dab5841d8b697172d1c15ed2eaee6efbd7292d75026 */

char * FUN_180001090(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

