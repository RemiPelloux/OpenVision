
/* Address: 0x180002820; Evidence: ev_eb74dc8cbea25fd87b0ef033c596399e10a2700b5962f904f6c65d4edbaba332 */

char * FUN_180002820(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

